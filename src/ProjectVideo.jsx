import React, { useEffect, useState } from 'react';
export default function ProjectVideo({video,poster}) {
 const [playing,setPlaying]=useState(false);
 const [localUrl,setLocalUrl]=useState('');
 const [error,setError]=useState(false);
 const [attempt,setAttempt]=useState(0);
 useEffect(()=>{
  if(!playing || !video.parts)return;
  const controller=new AbortController();let url;
  setError(false);
  Promise.all(video.parts.map(async part=>{
   const response=await fetch(part,{signal:controller.signal});
   if(!response.ok)throw Error('Video request failed');
   return response.arrayBuffer();
  })).then(parts=>{
   if(controller.signal.aborted)return;
   url=URL.createObjectURL(new Blob(parts,{type:'video/mp4'}));setLocalUrl(url);
  }).catch(e=>{if(e.name!=='AbortError')setError(true);});
  return()=>{controller.abort();if(url)URL.revokeObjectURL(url);};
 },[playing,video,attempt]);
 if(video.parts)return <section className="project-video" data-artwork={`video-${video.id}`} aria-label={video.title}>
  <div className="video-heading"><span className="eyebrow">PROJECT FILM / 项目视频</span><h3>{video.title}</h3></div>
  <div className="video-frame">{localUrl?<video src={localUrl} controls autoPlay playsInline poster={poster} onError={()=>setError(true)} aria-label={video.title}/>:<button className="video-poster" disabled={playing&&!error} onClick={()=>{setError(false);setPlaying(true);setAttempt(value=>value+1);}} aria-label={`播放视频：${video.title}`}><img src={poster} alt=""/><span className="video-play" aria-hidden="true">▷</span><span className="video-prompt" role="status">{error?'加载失败，点击重试':playing?'正在加载视频…':'播放项目视频'}</span></button>}</div>
  <div className="video-links"><span>PROJECT SHOWCASE / 项目展示</span>{localUrl&&<a href={localUrl} download="Sands-of-the-Damned.mp4">下载视频 ↓</a>}</div>
 </section>;
 return <section className="project-video" data-artwork={`video-${video.id}`} aria-label={video.title}><div className="video-heading"><span className="eyebrow">PROJECT FILM / 项目视频</span><h3>{video.title}</h3></div><div className="video-frame">{playing?<iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>:<button className="video-poster" onClick={()=>setPlaying(true)} aria-label={`播放视频：${video.title}`}><img src={poster} alt=""/><span className="video-play" aria-hidden="true">▷</span><span className="video-prompt">播放项目视频</span></button>}</div><div className="video-links"><span>YOUTUBE / PROJECT SHOWCASE</span><a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">在 YouTube 打开 ↗</a></div></section>;
}
