import React, {useState} from 'react';
export default function GameDownload({download}) {
 const [status,setStatus]=useState('');
 const [busy,setBusy]=useState(false);
 async function start(e){
  e.preventDefault();if(busy)return;setBusy(true);
  try{
   const response=await fetch(download.url);if(!response.ok)throw Error();
   const manifest=await response.json();const parts=[];
   for(let i=0;i<manifest.parts.length;i++){
    setStatus(`正在下载 ${Math.round(i/manifest.parts.length*100)}%`);
    const part=await fetch(manifest.parts[i]);if(!part.ok)throw Error();parts.push(await part.arrayBuffer());
   }
   const blob=new Blob(parts,{type:'application/zip'});
   if(blob.size!==manifest.size)throw Error();
   const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=manifest.filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);setStatus('下载已准备好');
  }catch{setStatus('下载未完成，请点击重试');}finally{setBusy(false);}
 }
 return <a href={download.url} onClick={start} aria-disabled={busy}>{busy?'正在下载…':download.label} <span aria-live="polite">{status||'↓ ZIP'}</span></a>;
}
