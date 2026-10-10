import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile, works, skills } from './data';
import './styles.css';
import ProjectVideo from './ProjectVideo';
import GameDownload from './GameDownload';
import FadeContent from './FadeContent';
import GlassSurface from './GlassSurface';
import { AnimatedTitle } from './VariableProximity';
import SpecularEffects from './SpecularEffects';
import HalftoneReveal from './HalftoneReveal';
import artDimensions from './artDimensions.json';

const expertiseSources = [
  ['/art/original-pages/portfolio1/page-12.webp', '/art/details/battle-character-1.webp'],
  ['/art/original-pages/portfolio1/page-25.webp', '/art/details/rain-board-2.webp'],
  ['/art/original-pages/layout/page-07.webp', '/art/details/battle-card-1.webp'],
  ['/art/original-pages/layout/page-08.webp', '/art/original-pages/layout/page-06.webp'],
];
const expertiseExamples = expertiseSources.map(sources => sources.map(src => {
  const work = works.find(work => work.sections.some(section => section.images.some(image => image.src === src)));
  const image = work.sections.flatMap(section => section.images).find(image => image.src === src);
  return { work, image };
}));

function App() {
  const [selected, setSelected] = useState(null);
  const [workPage, setWorkPage] = useState(0);
  const activeWork = works[workPage];
  const allPreviewImages = activeWork.sections.flatMap(section=>section.images.map(item=>({...item,section})));
  const previewImages = activeWork.id==='sands'
    ? ['sands-background','temporal-flora','architecture','sands-exploration'].map(id=>{
        const section=activeWork.sections.find(section=>section.id===id);
        const item=id==='sands-exploration'?section.images.at(-1):section.images[0];
        return {...item,section};
      })
    : allPreviewImages.filter((_,index,all)=>activeWork.id==='new-project'?index===0:[0,Math.floor(all.length/2),all.length-1].includes(index));
  const [menuOpen, setMenuOpen] = useState(false);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [copied, setCopied] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const artworkTarget = useRef(null);
  const dialog = useRef(null), lastTrigger = useRef(null), copyTimer = useRef(null);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', scroll, { passive: true });
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyMotion = () => { if (motion.matches) { setPaused(true); } };
    applyMotion(); motion.addEventListener('change', applyMotion);
    return () => { window.removeEventListener('scroll', scroll); motion.removeEventListener('change', applyMotion); clearTimeout(copyTimer.current); };
  }, []);

  useEffect(() => {
    let frame;
    if (selected) {
      dialog.current.showModal(); dialog.current.scrollTop = 0; document.body.style.overflow = 'hidden';
      if (artworkTarget.current) frame = requestAnimationFrame(() => {
        const modal = dialog.current;
        const target = [...modal.querySelectorAll('[data-artwork]')].find(el => el.dataset.artwork === artworkTarget.current);
        if (target) {
          const headHeight = modal.querySelector('.dialog-head').getBoundingClientRect().height;
          modal.scrollTo({top: modal.scrollTop + target.getBoundingClientRect().top - modal.getBoundingClientRect().top - headHeight - 24, behavior: 'instant'});
        }
      });
    }
    else { dialog.current?.close(); document.body.style.overflow = ''; lastTrigger.current?.focus({ preventScroll: true }); }
    return () => { cancelAnimationFrame(frame); document.body.style.overflow = ''; };
  }, [selected]);

  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied('邮箱已复制'); }
    catch { setCopied('请手动复制：' + profile.email); }
    clearTimeout(copyTimer.current); copyTimer.current = setTimeout(() => setCopied(''), 4000);
  }
  const toggleEffect = () => setPaused(value => !value);
  const nav = [['about','关于我'],['work','精选作品'],['expertise','专业能力']];
  const closeProject = () => { artworkTarget.current = null; setSelected(null); };

  return <>
    <SpecularEffects/>
    <a href="#main" className="skip">跳到主要内容</a>
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <GlassSurface width="100%" height="auto" borderRadius={18} distortionScale={-65} redOffset={0} greenOffset={3} blueOffset={6} brightness={50} opacity={0.93} blur={9} backgroundOpacity={0.12} saturation={0.8} className="navigation-glass"><div className="nav-wrap wrap">
        <a className="brand" href="#home" aria-label="耿萁鸿，回到首页"><span className="monogram">G<span>Q</span></span><span className="brand-name">GENG QIHONG<small>CONCEPT ARTIST</small></span></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '关闭' : '菜单'}</button>
        <nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="主导航">{nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>联系我</a></nav>
      </div></GlassSurface>
    </header>

    <main id="main">
      <section className="hero cinematic-hero" id="home" aria-labelledby="hero-title">
        <img className="hero-poster" src="/art/selected/city-final.webp" alt="" fetchPriority="high"/>
        {!paused && <div className="hero-halftone" aria-hidden="true"><HalftoneReveal src="/art/selected/city-final.webp" inkColor="#111719" paperColor="#c8b99b" mode="mono" dotDensity={130} dotSize={0.85} angle={28} revealRadius={0.25} edge={0.35} follow={0.3} idleReveal={0.08} borderRadius="0"/></div>}
        <div className="cinema-light" aria-hidden="true"/>
        <div className="cinema-vignette" aria-hidden="true"/>
        <div className="cinema-topline wrap"><button className="cinema-video-toggle" onClick={toggleEffect} aria-label={paused?'开启网点动效':'关闭网点动效'} aria-pressed={paused}><span aria-hidden="true">{paused?'▷':'Ⅱ'}</span>{paused?'开启网点动效':'关闭网点动效'}</button><span>CHARACTER · ENVIRONMENT<br/>CONCEPT ART & VISUAL DEVELOPMENT</span></div>
        <div className="cinema-content wrap">
          <p className="cinema-prologue">于 想 象 之 中 · 构 建 未 知 的 世 界</p>
          <div className="cinema-title"><span className="cinema-kicker">THE ART OF</span><AnimatedTitle as="h1" id="hero-title">GENG QIHONG</AnimatedTitle><p>耿萁鸿 <span/> 概念艺术设计师</p></div>
          <div className="cinema-portals" aria-label="首屏快捷入口">
            <a href="#work"><span className="portal-number">I</span><span className="portal-title">探索想象的世界</span><span className="portal-action">精选项目 <span>↗</span></span></a>
            <a href="#about"><span className="portal-number">II</span><span className="portal-title">走近创作的起点</span><span className="portal-action">关于我 <span>↗</span></span></a>
            <a href="#contact"><span className="portal-number">III</span><span className="portal-title">开启下一段故事</span><span className="portal-action">联系合作 <span>↗</span></span></a>
          </div>
          <a href="#work" className="cinema-scroll" aria-label="向下浏览精选作品"><span>↓</span><small>SCROLL TO EXPLORE</small></a>
        </div>
        <div className="cinema-footer wrap"><span>CHRONOHAVEN / SANDS OF THE DAMNED</span><span>GENG QIHONG — SELECTED WORKS</span></div>
      </section>

      <section id="about" className="about section wrap" aria-labelledby="about-title">
        <FadeContent as="div" className="section-kicker"><span>01 / ABOUT THE ARTIST</span><span>以设计连接想象与体验</span></FadeContent>
        <div className="about-grid">
          <FadeContent as="figure" className="portrait artist-portrait"><img src="/art/artist-portrait.jpg" alt="耿萁鸿的个人照片" width="2160" height="2880" loading="lazy"/><figcaption><span>GENG QIHONG</span><span>概念艺术设计师</span></figcaption></FadeContent>
          <FadeContent as="div" className="about-copy"><div className="eyebrow">ARTIST / DESIGNER / WORLD BUILDER</div><AnimatedTitle as="h2" id="about-title">不止于画面，<br/><span className="muted">更关乎它背后的世界。</span></AnimatedTitle><p>你好，我是耿萁鸿，一名专注于角色与场景的概念艺术设计师。目前就读于 University of Hertfordshire 概念艺术硕士专业。</p><p>我的创作从故事与功能出发，探索角色、武器、道具和环境之间的联系。从最初的草图到完整的视觉方案，我希望每一个设计都能回应它所处的世界。</p>
          <div className="about-contact"><span>{profile.location}</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div className="stats"><div><strong>02</strong><span>游戏项目协作经历</span></div><div><strong>48<span>h</span></strong><span>Game Jam 开发周期</span></div><div><strong>05</strong><span>创作软件技能</span></div></div>
          </FadeContent>
        </div>
        <div className="experience"><FadeContent as="div" className="experience-heading"><span className="eyebrow">BACKGROUND</span><h3>创作，在实践中生长。</h3><a className="text-link" href="/Resume.pdf" target="_blank" rel="noreferrer">查看完整简历 <span>PDF</span></a></FadeContent><div className="timeline"><FadeContent as="article"><span className="date">2025 — 2026</span><div><h4>University of Hertfordshire</h4><p>MA Concept Art · 概念艺术硕士</p></div><span className="timeline-label">教育</span></FadeContent><FadeContent as="article"><span className="date">2019 — 2023</span><div><h4>广西大学</h4><p>视觉传达设计 · 学士</p></div><span className="timeline-label">教育</span></FadeContent><FadeContent as="article"><span className="date">GAME JAM</span><div><h4>Global Game Jam</h4><p>主概念设计师 · 美术方向、角色与道具设计</p></div><span className="timeline-label">项目</span></FadeContent><FadeContent as="article"><span className="date">CO-OP GAME</span><div><h4>Multiplayer Co-op Shooter</h4><p>概念设计师兼游戏设计 · 角色、武器与技能系统</p></div><span className="timeline-label">项目</span></FadeContent></div></div>
      </section>

      <section id="work" className="work-section section" aria-labelledby="work-title">
        <div className="wrap">
          <FadeContent as="div" className="section-kicker"><span>02 / SELECTED WORKS</span><span>{String(works.length).padStart(2,'0')} 个项目 · CONCEPT ART PORTFOLIO</span></FadeContent>
          <FadeContent as="div" className="collection-heading"><span className="eyebrow">IMAGINED WORLDS / 想象的边界</span><AnimatedTitle as="h2" id="work-title">每个项目，<span>一个新的世界。</span></AnimatedTitle><p>从角色到环境，探索故事如何成为可见的世界。</p></FadeContent>
          <FadeContent as="div" className="work-showcase" id="work-page" role="region" aria-label="当前项目" aria-live="polite">
            <article className={`work-slide ${activeWork.fit ? 'art-contained' : ''}`} key={activeWork.id}>
              <div className="work-backdrop" style={{backgroundImage:`url("${activeWork.image}")`}} aria-hidden="true"/>
              <img className="work-cover" src={activeWork.image} alt={activeWork.cn}/>
              <div className="work-vignette" aria-hidden="true"/>
              <div className="work-slide-top"><span>GQ. / PROJECT ARCHIVE</span><span>{activeWork.number} — {String(works.length).padStart(2,'0')}</span></div>
              <div className="work-slide-copy"><span className="eyebrow">{activeWork.type}</span><AnimatedTitle as="h3">{activeWork.title}</AnimatedTitle><p className="work-slide-cn">{activeWork.cn}</p><p className="work-slide-description">{activeWork.description}</p><button className="work-explore" onClick={e=>{lastTrigger.current=e.currentTarget;setSelected(activeWork);}}>查看完整项目 <span aria-hidden="true">↗</span></button>{activeWork.videos.length>0 && <button className="work-video-link" onClick={e=>{lastTrigger.current=e.currentTarget;artworkTarget.current=`video-${activeWork.videos[0].id}`;setSelected(activeWork);}}>▷ 观看项目视频</button>}<span className="work-slide-count">{activeWork.imageCount ? `${activeWork.sections.length} 个章节 / ${activeWork.imageCount} 张作品` : '项目视频已收录 · 更多作品即将更新'}</span></div>
            </article>
            <nav className="work-pagination" aria-label="项目分页"><button className="page-arrow" disabled={workPage===0} onClick={()=>setWorkPage(p=>p-1)} aria-label="上一个项目">←</button>{works.map((work,index)=><button key={work.id} aria-label={`第 ${index+1} 页：${work.title}`} aria-current={workPage===index?'page':undefined} aria-controls="work-page" onClick={()=>setWorkPage(index)} title={work.title}>{index+1}</button>)}<button className="page-arrow" disabled={workPage===works.length-1} onClick={()=>setWorkPage(p=>p+1)} aria-label="下一个项目">→</button></nav>
          </FadeContent>
          {activeWork.sections.length>0 && <><FadeContent as="div" className="project-peek-heading"><span>INSIDE THE PROJECT / 项目预览</span><span>{activeWork.number} / {activeWork.title}</span></FadeContent>
          <div className={activeWork.id==='new-project'?'find-one-preview':undefined}>
          <div className={`project-peeks ${activeWork.id==='sands'?'sands-previews':''}`}>{previewImages.map(item=><FadeContent as="button" className="project-peek" key={item.src} onClick={e=>{lastTrigger.current=e.currentTarget;artworkTarget.current=item.src;setSelected(activeWork);}} aria-label={`查看 ${activeWork.title} 完整项目：${item.caption}`}><div className="peek-image"><img src={item.src} alt={item.caption} loading="lazy"/></div><div className="peek-copy"><span>{item.stage}</span><h3>{item.caption}</h3><p>{item.brief}</p><span className="peek-link">探索项目 <span aria-hidden="true">↗</span></span></div></FadeContent>)}</div>{activeWork.id==='new-project' && <FadeContent as="button" className="project-peek npc-preview-card" onClick={e=>{lastTrigger.current=e.currentTarget;artworkTarget.current=activeWork.sections.find(section=>section.id==='find-one-npcs')?.images[0].src;setSelected(activeWork);}} aria-label="查看 Find the one 人物图集"><div className="peek-image npc-card-montage">{activeWork.sections.find(section=>section.id==='find-one-npcs')?.images.filter((_,i)=>[0,10,19].includes(i)).map(item=><img key={item.src} src={item.src} alt={item.caption} loading="lazy"/>)}</div><div className="peek-copy"><span>角色设计</span><h3>人物档案 · NPC</h3><p></p><span className="peek-link">探索人物 <span aria-hidden="true">↗</span></span></div></FadeContent>}</div>
          </>}
          <FadeContent as="div" className="work-end"><span>MORE IDEAS. MORE WORLDS.</span><a className="text-link" href={profile.artstation} target="_blank" rel="noreferrer">在 ArtStation 查看更多</a></FadeContent>
        </div>
      </section>

      <section id="expertise" className="expertise section wrap" aria-labelledby="expertise-title"><FadeContent as="div" className="section-kicker"><span>03 / MY APPROACH</span><span>观察 · 探索 · 构建</span></FadeContent><FadeContent as="div" className="section-heading"><AnimatedTitle as="h2" id="expertise-title">DESIGN WITH<br/><span className="serif">intention.</span></AnimatedTitle><p>让每一个视觉选择，<br/>都有故事与功能的支撑。</p></FadeContent><div className="skill-grid">{skills.map((s, skillIndex) => <FadeContent as="article" className="skill-card" key={s.no}><div className="skill-top"><span>{s.no}</span><span className="skill-mark" aria-hidden="true">{s.no==='01'?'◇':s.no==='02'?'⌑':s.no==='03'?'⊕':'⧉'}</span></div><span className="eyebrow">{s.en}</span><h3>{s.title}</h3><p>{s.text}</p><div className="skill-tags">{s.tags}</div><div className="skill-examples">{expertiseExamples[skillIndex].map(({work,image})=><button className="skill-example" key={image.src} onClick={e=>{lastTrigger.current=e.currentTarget;artworkTarget.current=image.src;setSelected(work);}} aria-label={`查看作品：${image.caption}`}><img src={image.src} alt={image.caption} loading="lazy"/><span className="skill-example-copy"><small>{work.title}</small><strong>{image.caption}</strong><span>查看作品 ↗</span></span></button>)}</div></FadeContent>)}</div><FadeContent as="div" className="toolbox"><span className="eyebrow">MY TOOLBOX</span>{['Photoshop','Blender','Unreal Engine 5','Illustrator','Procreate'].map(t=><span key={t}>{t}</span>)}</FadeContent></section>

      <section id="contact" className="contact" aria-labelledby="contact-title"><div className="contact-glow"/><div className="contact-inner wrap"><FadeContent as="div" className="section-kicker"><span>04 / GET IN TOUCH</span><span>下一个世界，从一次交流开始。</span></FadeContent><FadeContent as="div" className="contact-main"><div className="eyebrow">HAVE A WORLD IN MIND?</div><AnimatedTitle as="h2" id="contact-title">LET’S CREATE<br/><span className="serif">something unreal.</span></AnimatedTitle><p>关于概念设计、游戏项目，或一个值得探索的想法。<br/>欢迎与我聊聊。</p><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copyEmail} aria-label="复制邮箱地址" title="复制邮箱地址"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="1"/><path d="M15 5V3H3v12h2"/></svg></button></div><span className="copy-status" role="status">{copied}</span></FadeContent><FadeContent as="div" className="contact-links"><a href={profile.artstation} target="_blank" rel="noreferrer">ARTSTATION</a><a href="tel:+8615339047176">{profile.phone}</a><span>{profile.location}</span><a href="/Resume.pdf" target="_blank" rel="noreferrer">RESUME / 简历</a></FadeContent><FadeContent as="footer"><a href="#home" className="footer-brand">GENG QIHONG<span>耿萁鸿</span></a><span>© {new Date().getFullYear()} GENG QIHONG. ALL RIGHTS RESERVED.</span><a href="#home">回到顶部</a></FadeContent></div></section>
    </main>

    <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={closeProject} onClick={e => { if(e.target===e.currentTarget) closeProject(); }}>
      <div className="dialog-inner">{selected && <>
        <div className="dialog-head"><span className="eyebrow">{selected.type}</span><button onClick={closeProject} autoFocus aria-label="关闭项目详情">关闭 <span>×</span></button></div>
        <AnimatedTitle as="h2" id="project-dialog-title">{selected.title}</AnimatedTitle>
        <div className="project-facts"><span>{selected.cn}</span><span>{selected.imageCount ? `${selected.sections.length} 个内容章节 · ${selected.imageCount} 张作品图` : '项目视频 · 设计作品待补充'}</span></div>
        <p className="dialog-description">{selected.description}</p>
        {selected.download && <aside className="game-download"><div><span className="eyebrow">PLAY THE GAME / WINDOWS</span><h3>亲自走进 Find the one</h3><p>下载后完整解压文件夹，运行 FindTheOne.exe。请保留同目录的数据文件。此版本为 Windows 桌面游戏。</p></div><GameDownload download={selected.download}/></aside>}
          {selected.videos.map(video=><ProjectVideo key={video.id} video={video} poster={selected.image}/>)}
        {selected.sections.length>1 && <nav className="project-chapters" aria-label="项目内章节">{selected.sections.map((section,index)=><button key={section.id} onClick={()=>document.getElementById(`chapter-${section.id}`)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'})}><span>{String(index+1).padStart(2,'0')}</span>{section.cn.split(' · ')[0]}</button>)}</nav>}
        {selected.sections.map((section,sectionIndex)=><section className="project-chapter" id={`chapter-${section.id}`} key={section.id} aria-labelledby={`chapter-title-${section.id}`}>
          <FadeContent as="div" className="chapter-heading"><span className="eyebrow">CHAPTER {String(sectionIndex+1).padStart(2,'0')} / {section.type}</span><h3 id={`chapter-title-${section.id}`}>{section.cn}</h3>{section.role && <span className="chapter-role">{section.role}</span>}</FadeContent>
          {section.description && <p className="dialog-description">{section.description}</p>}
          {section.summary && <details className="chapter-summary"><summary>中文设计说明</summary><p>{section.summary}</p></details>}
            {section.credit && <p className="project-credit">{section.credit}</p>}
          <div className={`dialog-gallery ${section.layout==='npc'?'npc-gallery':section.layout==='cards'?'card-gallery':''}`}>{section.images.map((item,i)=><FadeContent as="figure" key={item.src} data-artwork={item.src}>{section.layout==='npc'?<a className="npc-original" href={item.src} target="_blank" rel="noreferrer" aria-label={`查看 ${item.caption} 完整原图`}><img {...artDimensions[item.src]} src={item.src} alt={item.caption} loading="lazy"/></a>:<a className="original-board" href={item.src} target="_blank" rel="noreferrer" aria-label={`查看原图：${item.caption}`}><img {...artDimensions[item.src]} src={item.src} alt={item.caption} loading={sectionIndex===0 && i===0?'eager':'lazy'}/></a>}<figcaption><span>{String(i+1).padStart(2,'0')} / {item.caption}</span><span>{item.stage}</span></figcaption>{item.brief && <FadeContent as="div" className="artwork-brief"><span className="brief-label">中文简介</span><p>{item.brief}</p></FadeContent>}</FadeContent>)}</div>
        </section>)}
        <p className="dialog-caption">GENG QIHONG / {selected.title}</p>
      </>}</div>
    </dialog>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);

