// Scroll effects helpers + persistent video background

function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
    els.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'opacity 0.9s cubic-bezier(.2,.7,.2,1), transform 0.9s cubic-bezier(.2,.7,.2,1)';
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function VideoBackdrop() {
  const [scroll, setScroll] = React.useState(0);
  const isMobileDevice = typeof window !== 'undefined' && window.innerWidth <= 768;

  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.max(0, Math.min(1, window.scrollY / h)) : 0;
      setScroll(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scale = 1 + scroll * 0.18;
  const translateY = scroll * -60;
  const blur = scroll * 4;
  const hue = scroll * 12;
  const overlayOpacity = 0.45 + scroll * 0.35;
  const vignette = 0.4 + scroll * 0.35;

  // En móvil: position sticky dentro del hero para compatibilidad con todos los navegadores
  if (isMobileDevice) {
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0,
        pointerEvents: 'none', overflow: 'hidden',
        backgroundColor: '#14110f',
      }}>
        <video
          autoPlay muted loop playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          src="video/hero.mp4"
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: 0.7,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,17,15,0.35) 0%, rgba(20,17,15,0.6) 100%)' }} />
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0,
      pointerEvents: 'none', overflow: 'hidden',
    }}>
      <video
        autoPlay muted loop playsInline
        src="video/hero.mp4"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          transform: `scale(${scale}) translateY(${translateY}px)`,
          filter: `saturate(${0.85 - scroll * 0.25}) contrast(${1.05 + scroll * 0.1}) blur(${blur}px) hue-rotate(${hue}deg)`,
          transition: 'transform 0.15s linear, filter 0.2s linear',
          transformOrigin: 'center center',
          willChange: 'transform, filter',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, rgba(20,17,15,${overlayOpacity}) 0%, rgba(20,17,15,${Math.min(0.95, overlayOpacity + 0.15)}) 100%)`,
        transition: 'background 0.2s linear',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at center, transparent ${30 - scroll * 10}%, rgba(20,17,15,${vignette}) 100%)`,
        transition: 'background 0.2s linear',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 50% 100%, rgba(217,152,74,${scroll * 0.12}) 0%, transparent 60%)`,
        mixBlendMode: 'overlay',
      }} />
    </div>
  );
}

Object.assign(window, { useScrollReveal, VideoBackdrop });
