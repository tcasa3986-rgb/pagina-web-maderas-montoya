// VARIANT A — "Taller" — Industrial cálido, oscuro, editorial
// Paleta: carbón profundo + ámbar cálido + crema · Serif display grande

const tallerTheme = {
  bg: '#14110f',
  bg2: '#1c1814',
  bg3: '#2a2320',
  ink: '#f5ede0',
  ink2: '#c9bca7',
  muted: '#8a7e6d',
  accent: '#d9984a',      // ámbar óxido
  accent2: '#e8c889',     // miel
  line: 'rgba(217, 152, 74, 0.18)',
  line2: 'rgba(245, 237, 224, 0.08)',
};

function useBreakpoint() {
  const [w, setW] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  React.useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
  return { isMobile: w <= 600, isTablet: w <= 900 && w > 600, w };
}

function TallerBadge({ n, label }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      color: tallerTheme.accent,
    }}>
      <MMMark size={28} />
      <span style={{ width: 5, height: 5, background: tallerTheme.accent, borderRadius: '50%' }} />
      {n && <span style={{ color: tallerTheme.muted }}>{n}</span>}
      <span>{label}</span>
    </div>
  );
}

function TallerNav() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: scrolled ? '12px 56px' : '18px 56px',
      borderBottom: scrolled
        ? `1px solid rgba(217,152,74,0.18)`
        : `1px solid rgba(26,23,20,0.08)`,
      background: scrolled
        ? 'rgba(20,17,15,0.92)'
        : '#f5ede0',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      position: 'sticky', top: 0, zIndex: 10,
      boxShadow: scrolled
        ? '0 4px 32px rgba(0,0,0,0.35)'
        : '0 1px 0 rgba(0,0,0,0.04)',
      transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <MMMark size={scrolled ? 48 : 92} />
        <div>
          <div style={{
            fontFamily: 'Fraunces, serif', fontWeight: 600,
            fontSize: scrolled ? 17 : 20,
            color: scrolled ? tallerTheme.ink : '#14110f',
            letterSpacing: '-0.01em', lineHeight: 1,
            transition: 'all 0.35s',
          }}>Maderas Montoya</div>
          {!scrolled && (
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#8a7e6d', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 5 }}>Soacha · Cundinamarca · Desde 2013</div>
          )}
        </div>
      </div>
      <nav style={{
        display: 'flex', gap: 36,
        fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
        color: scrolled ? tallerTheme.ink2 : '#2a2320',
        transition: 'color 0.35s',
      }}>
        {[
          ['#nosotros',  'Nosotros'],
          ['#productos', 'Productos'],
          ['#servicios', 'Servicios'],
          ['#casos',     'Casos'],
          ['#blog',      'Blog'],
          ['#ubicacion', 'Ubicación'],
        ].map(([href, label]) => (
          <a key={href} href={href} style={{
            color: 'inherit', textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = tallerTheme.accent}
          onMouseLeave={e => e.target.style.color = 'inherit'}
          >{label}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          color: scrolled ? tallerTheme.muted : '#5a4e40',
          transition: 'color 0.35s',
        }}>301 630 2712</span>
        <button style={{
          background: tallerTheme.accent, color: '#14110f', border: 'none',
          padding: scrolled ? '10px 18px' : '13px 22px',
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13,
          cursor: 'pointer', borderRadius: 0, letterSpacing: '0.01em',
          transition: 'padding 0.35s',
        }}>Cotizar ahora →</button>
      </div>
    </div>
  );
}

function TallerHero() {
  return (
    <section id="nosotros" data-reveal style={{ background: 'transparent', padding: '80px 56px 40px', position: 'relative', zIndex: 2, color: '#f5ede0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 56, alignItems: 'end' }}>
        <div>
          <TallerBadge n="01 —" label="Estibas · Soacha · Bogotá · Cundinamarca" />
          <h1 style={{
            fontFamily: 'Fraunces, serif', fontWeight: 400,
            fontSize: 92, lineHeight: 0.94, letterSpacing: '-0.035em',
            color: tallerTheme.ink, margin: '28px 0 28px',
          }}>
            Recolectamos, <em style={{ fontStyle: 'italic', color: tallerTheme.accent2 }}>reutilizamos</em> y aprovechamos la madera industrial.
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: tallerTheme.ink2, maxWidth: 560, margin: 0 }}>
            Empresa colombiana que opera bajo la <strong style={{ color: tallerTheme.ink }}>normatividad ambiental vigente</strong>. Compra, venta y reparación in-situ de estibas de madera en Soacha, Bogotá y Cundinamarca.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
            <button className="mm-btn-press" style={{ background: tallerTheme.accent, color: tallerTheme.bg, border: 'none', padding: '18px 32px', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Solicitar cotización →</button>
            <button className="mm-btn-press" style={{ background: 'transparent', color: tallerTheme.ink, border: `1px solid ${tallerTheme.line}`, padding: '18px 32px', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 15, cursor: 'pointer' }}>Ver productos</button>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Video player */}
          <div style={{
            aspectRatio: '4/5',
            position: 'relative', overflow: 'hidden',
            border: `1px solid ${tallerTheme.line}`,
          }}>
            <video
              autoPlay muted loop playsInline
              src="video/hero-card.mp4"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(20,17,15,0.15) 0%, rgba(20,17,15,0.55) 100%)',
              pointerEvents: 'none',
            }} />
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.ink, letterSpacing: '0.1em', textTransform: 'uppercase', position: 'absolute', top: 16, left: 16, opacity: 0.85 }}>● EN VIVO · BODEGA</div>
            <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, color: tallerTheme.ink, fontStyle: 'italic', lineHeight: 1.15 }}>Nuestra operación, en movimiento</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.accent2, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8 }}>SOACHA · CUNDINAMARCA</div>
            </div>
          </div>
          <div style={{
            position: 'absolute', bottom: -24, left: -24, background: tallerTheme.bg2,
            border: `1px solid ${tallerTheme.line}`, padding: '20px 28px', maxWidth: 300,
          }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>CUMPLIMIENTO AMBIENTAL</div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 19, color: tallerTheme.ink, marginTop: 6, lineHeight: 1.25 }}>Operación bajo normatividad ambiental vigente en Colombia</div>
          </div>
        </div>
      </div>

      {/* Stats tape */}
      <div style={{
        marginTop: 88, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: `1px solid ${tallerTheme.line2}`, borderBottom: `1px solid ${tallerTheme.line2}`,
      }}>
        {[
          { n: '+12', label: 'Años de oficio' },
          { n: '20+', label: 'Empresas cliente' },
          { n: '100%', label: 'Madera al ciclo' },
          { n: '48h', label: 'Respuesta promedio' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '32px 24px',
            borderRight: i < 3 ? `1px solid ${tallerTheme.line2}` : 'none',
          }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 56, color: tallerTheme.ink, lineHeight: 1, letterSpacing: '-0.03em' }}>{s.n}</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 10 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TallerClientes() {
  const clientes = ['Alkosto', 'Dollarcity', 'Big Cola', 'Peldar', 'Urbaser', 'Carvajal', 'Bavaria', 'Postobón'];
  // Duplicate for seamless loop
  const row = [...clientes, ...clientes, ...clientes];
  return (
    <section data-reveal style={{ background: 'rgba(20,17,15,0.78)', padding: '80px 0 90px', borderBottom: `1px solid ${tallerTheme.line2}`, overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @keyframes mm-marquee-l { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes mm-marquee-r { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
        @keyframes mm-pulse-dot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.6); opacity: 0.4; } }
        .mm-logo-pill {
          position: relative;
          flex: 0 0 auto;
          padding: 22px 40px;
          margin: 0 14px;
          border: 1px solid rgba(245,237,224,0.12);
          background: rgba(245,237,224,0.02);
          font-family: 'Fraunces', serif;
          font-size: 26px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #c9bca7;
          white-space: nowrap;
          transition: all 0.5s cubic-bezier(.2,.7,.2,1);
          cursor: default;
        }
        .mm-logo-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(217,152,74,0.4) 50%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }
        .mm-logo-pill:hover {
          color: #f5ede0;
          border-color: rgba(217,152,74,0.6);
          background: rgba(217,152,74,0.06);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px -10px rgba(217,152,74,0.35);
        }
        .mm-logo-pill:hover::before { opacity: 1; }
        .mm-marquee-track { display: flex; width: 300%; will-change: transform; }
        .mm-marquee-row-l { animation: mm-marquee-l 38s linear infinite; }
        .mm-marquee-row-r { animation: mm-marquee-r 44s linear infinite; }
        .mm-marquee-mask {
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .mm-pulse-dot { animation: mm-pulse-dot 2.4s ease-in-out infinite; }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: 44, padding: '0 56px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.14em', textTransform: 'uppercase', color: tallerTheme.accent,
        }}>
          <span className="mm-pulse-dot" style={{ width: 8, height: 8, background: tallerTheme.accent, borderRadius: '50%', display: 'inline-block' }} />
          Empresas que confían en nosotros
        </div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, color: tallerTheme.ink, marginTop: 16, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.02em' }}>
          + de 20 plantas en Bogotá y Cundinamarca
        </div>
      </div>

      {/* Row 1 — left */}
      <div className="mm-marquee-mask" style={{ marginBottom: 14 }}>
        <div className="mm-marquee-track mm-marquee-row-l">
          {row.map((name, i) => (
            <div key={'a'+i} className="mm-logo-pill">{name}</div>
          ))}
        </div>
      </div>
      {/* Row 2 — right (opposite direction) */}
      <div className="mm-marquee-mask">
        <div className="mm-marquee-track mm-marquee-row-r">
          {row.map((name, i) => (
            <div key={'b'+i} className="mm-logo-pill" style={{ fontStyle: 'italic' }}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TallerServicios() {
  const servicios = [
    { n: '01', t: 'Reparación in‑situ', d: 'Nuestro equipo llega a tu planta con herramientas neumáticas. Cero movimiento para ti, cero interrupción de operación.', tags: ['3—5× más barato', 'Sin mínimos', '48h respuesta'] },
    { n: '02', t: 'Compra y venta', d: 'Estibas Tipo Norma y Tráfico Liviano, cada una inspeccionada y garantizada. Tablas de pino 100cm y 115cm.', tags: ['Inspección técnica', 'Stock disponible', 'Entrega 48h'] },
    { n: '03', t: 'Recolección total', d: '¿Madera en desuso acumulada? Recogemos todo. Tú te desentiendes; nosotros cerramos el ciclo.', tags: ['Cero al relleno', 'Certificado ambiental', 'Programas mensuales'] },
  ];

  return (
    <section id="servicios" data-reveal style={{ background: 'rgba(28,24,20,0.85)', padding: '120px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, marginBottom: 64 }}>
        <div>
          <TallerBadge n="02 —" label="Servicios" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 68, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 0' }}>
            Lo que <em style={{ color: tallerTheme.accent2 }}>hacemos</em> cada día.
          </h2>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 19, lineHeight: 1.55, color: tallerTheme.ink2, alignSelf: 'end', margin: 0, maxWidth: 560 }}>
          Tres servicios, una filosofía: extender la vida útil de cada pieza de madera al máximo. Sin promesas vacías. Sin letra pequeña.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: tallerTheme.line2 }}>
        {servicios.map((s, i) => (
          <div key={i} className="mm-card-lift" style={{ background: tallerTheme.bg2, padding: '44px 36px', display: 'flex', flexDirection: 'column', gap: 28 }}>
            {i === 0 ? (
              <div style={{ aspectRatio: '16/11', overflow: 'hidden', position: 'relative' }}>
                <img
                  className="mm-img-zoom"
                  src="img/reparacion.jpeg"
                  alt="Reparación in-situ de estibas con clavadora neumática"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(1.05) contrast(1.05)' }}
                />
              </div>
            ) : i === 1 ? (
              <div style={{ aspectRatio: '16/11', overflow: 'hidden', position: 'relative' }}>
                <img
                  className="mm-img-zoom"
                  src="img/compra-venta.jpeg"
                  alt="Bodega con estibas de madera apiladas — compra y venta"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(1.05) contrast(1.05)' }}
                />
              </div>
            ) : (
              <div style={{ aspectRatio: '16/11', overflow: 'hidden', position: 'relative' }}>
                <img
                  className="mm-img-zoom"
                  src="img/recoleccion.jpeg"
                  alt="Camión cargado con estibas — servicio de recolección total"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(1.05) contrast(1.05)' }}
                />
              </div>
            )}
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.accent, letterSpacing: '0.15em' }}>{s.n} / 03</div>
            <div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: 32, color: tallerTheme.ink, margin: '0 0 14px', letterSpacing: '-0.01em' }}>{s.t}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: tallerTheme.ink2, margin: 0 }}>{s.d}</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
              {s.tags.map(t => (
                <span key={t} style={{
                  border: `1px solid ${tallerTheme.line}`, padding: '6px 12px',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.08em',
                  color: tallerTheme.ink2, textTransform: 'uppercase',
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Calculadora de ahorro
function TallerCalculadora() {
  const [cantidad, setCantidad] = React.useState(200);
  const [precioNueva, setPrecioNueva] = React.useState(45000);

  const costoReparar = precioNueva * 0.25; // 4× más barato
  const ahorroPorEstiba = precioNueva - costoReparar;
  const ahorroTotal = ahorroPorEstiba * cantidad;
  const ahorroAnual = ahorroTotal * 4; // asumiendo 4 ciclos al año

  return (
    <section data-reveal style={{ background: 'rgba(20,17,15,0.82)', padding: '120px 56px', borderTop: `1px solid ${tallerTheme.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }}>
        <div>
          <TallerBadge n="03 —" label="Calculadora de ahorro" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 24px' }}>
            ¿Cuánto puedes <em style={{ color: tallerTheme.accent2 }}>ahorrar</em>?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.55, color: tallerTheme.ink2, marginBottom: 40 }}>
            Mueve los controles. Datos basados en clientes reales con flotas similares.
          </p>

          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Estibas a reparar</span>
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: 24, color: tallerTheme.ink }}>{cantidad}</span>
            </div>
            <input type="range" min="20" max="2000" step="10" value={cantidad}
              onChange={e => setCantidad(+e.target.value)}
              style={{ width: '100%', accentColor: tallerTheme.accent }} />
          </div>

          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Precio estiba nueva</span>
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: 24, color: tallerTheme.ink }}>${precioNueva.toLocaleString('es-CO')}</span>
            </div>
            <input type="range" min="25000" max="80000" step="1000" value={precioNueva}
              onChange={e => setPrecioNueva(+e.target.value)}
              style={{ width: '100%', accentColor: tallerTheme.accent }} />
          </div>
        </div>

        <div style={{ background: tallerTheme.bg2, border: `1px solid ${tallerTheme.line}`, padding: 56 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Ahorro estimado</div>

          <div style={{ borderBottom: `1px solid ${tallerTheme.line2}`, paddingBottom: 24, marginBottom: 24 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: tallerTheme.muted, marginBottom: 8 }}>Por ciclo</div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 72, color: tallerTheme.ink, lineHeight: 0.9, letterSpacing: '-0.03em' }}>
              ${(ahorroTotal / 1000000).toFixed(1)}M
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: tallerTheme.muted, marginBottom: 6 }}>Por estiba</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, color: tallerTheme.accent2 }}>${ahorroPorEstiba.toLocaleString('es-CO')}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: tallerTheme.muted, marginBottom: 6 }}>Anual estimado</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, color: tallerTheme.accent2 }}>${(ahorroAnual / 1000000).toFixed(1)}M</div>
            </div>
          </div>

          <button className="mm-btn-press" style={{
            width: '100%', background: tallerTheme.accent, color: tallerTheme.bg, border: 'none',
            padding: '18px 24px', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15, cursor: 'pointer',
          }}>Cotizar con estos números →</button>

          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted, marginTop: 20, letterSpacing: '0.05em', lineHeight: 1.5 }}>
            * Cálculo conservador basado en reparación 4× más económica y 4 ciclos anuales. Cotización real ajustada a tu inventario.
          </div>
        </div>
      </div>
    </section>
  );
}

function TallerProductos() {
  return (
    <section id="productos" data-reveal style={{ background: 'rgba(42,35,32,0.85)', padding: '120px 56px' }}>
      <div style={{ marginBottom: 64, maxWidth: 700 }}>
        <TallerBadge n="04 —" label="Catálogo" />
        <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 68, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 0' }}>
          Productos <em style={{ color: tallerTheme.accent2 }}>destacados.</em>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {MM_PRODUCTOS.map((p, i) => (
          <div key={p.id} className="mm-card-lift" style={{ background: tallerTheme.bg2, border: `1px solid ${tallerTheme.line2}` }}>
            {p.img ? (
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: tallerTheme.bg2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {p.imgFit === 'cover' ? (
                  <picture style={{ width: '100%', height: '100%', display: 'block' }}>
                    {p.webp && <source srcSet={p.webp} type="image/webp" />}
                    <img className="mm-img-zoom" src={p.img} alt={p.alt || p.nombre} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </picture>
                ) : (
                  <picture style={{ width: '100%', height: '100%', display: 'block' }}>
                    {p.webp && <source srcSet={p.webp} type="image/webp" />}
                    <img className="mm-img-zoom" src={p.img} alt={p.alt || p.nombre} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', padding: '6%', boxSizing: 'border-box' }} />
                  </picture>
                )}
              </div>
            ) : (
              <Placeholder label={p.nombre} aspect="4/3" tone="warm" />
            )}
            <div style={{ padding: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: 26, color: tallerTheme.ink, margin: 0, letterSpacing: '-0.01em' }}>{p.nombre}</h3>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: tallerTheme.accent2, marginTop: 4 }}>{p.subtitulo}</div>
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted }}>#{String(i+1).padStart(2,'0')}</div>
              </div>

              <div style={{ borderTop: `1px solid ${tallerTheme.line2}`, paddingTop: 20 }}>
                {[
                  ['Medidas', p.medidas],
                  ['Carga dinámica', p.cargaDinamica],
                  ['Carga estática', p.cargaEstatica],
                  ['Material', p.madera],
                  ['Especificación', p.tablas],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${tallerTheme.line2}`, fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
                    <span style={{ color: tallerTheme.muted }}>{k}</span>
                    <span style={{ color: tallerTheme.ink, fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>

              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: tallerTheme.ink2, lineHeight: 1.5, marginTop: 20, fontStyle: 'italic' }}>
                Ideal para: {p.ideal}
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                <button className="mm-btn-press" style={{ flex: 1, background: tallerTheme.accent, color: tallerTheme.bg, border: 'none', padding: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Solicitar precio</button>
                <button className="mm-btn-press" style={{ background: 'transparent', color: tallerTheme.ink, border: `1px solid ${tallerTheme.line}`, padding: '14px 16px', fontFamily: 'Inter, sans-serif', fontSize: 13, cursor: 'pointer' }}>Ficha PDF</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TallerCasos() {
  const [idx, setIdx] = React.useState(0);
  const caso = MM_CASOS[idx];

  return (
    <section id="casos" data-reveal style={{ background: 'rgba(20,17,15,0.82)', padding: '120px 56px', borderTop: `1px solid ${tallerTheme.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, marginBottom: 56 }}>
        <div>
          <TallerBadge n="05 —" label="Casos" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 68, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 0' }}>
            <em style={{ color: tallerTheme.accent2 }}>Trabajo</em> real para empresas reales.
          </h2>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 19, lineHeight: 1.55, color: tallerTheme.ink2, alignSelf: 'end', margin: 0 }}>
          No vendemos promesas — entregamos operación. Estos son algunos de los programas activos.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 48, background: tallerTheme.bg2, border: `1px solid ${tallerTheme.line}` }}>
        <div style={{ padding: 48 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.accent, letterSpacing: '0.15em', marginBottom: 10 }}>
            {caso.sector.toUpperCase()} · {caso.año}
          </div>
          <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 56, color: tallerTheme.ink, margin: '0 0 20px', lineHeight: 1, letterSpacing: '-0.02em' }}>{caso.cliente}</h3>
          <div style={{ marginBottom: 32, paddingBottom: 24, borderBottom: `1px solid ${tallerTheme.line2}` }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>El reto</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.55, color: tallerTheme.ink2, margin: 0 }}>{caso.reto}</p>
          </div>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Lo que hicimos</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.55, color: tallerTheme.ink2, margin: 0 }}>{caso.detalle}</p>
          </div>
        </div>

        <div style={{ background: tallerTheme.bg3, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Resultado</div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 160, color: tallerTheme.ink, lineHeight: 0.85, letterSpacing: '-0.04em' }}>{caso.resultado}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, color: tallerTheme.accent2, marginTop: 12, maxWidth: 340 }}>{caso.resultadoLabel}</div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 40, flexWrap: 'wrap' }}>
            {MM_CASOS.map((c, i) => (
              <button key={i} onClick={() => setIdx(i)} style={{
                background: i === idx ? tallerTheme.accent : 'transparent',
                color: i === idx ? tallerTheme.bg : tallerTheme.ink2,
                border: `1px solid ${i === idx ? tallerTheme.accent : tallerTheme.line}`,
                padding: '10px 16px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                cursor: 'pointer', letterSpacing: '0.05em',
              }}>{c.cliente}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Cotizador paso a paso
function TallerCotizador() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({ tipo: '', cantidad: '', servicio: '', empresa: '' });

  const steps = [
    {
      q: '¿Qué necesitas?',
      options: ['Reparación', 'Compra de estibas', 'Recolección de madera', 'Varios / no sé'],
      key: 'servicio',
    },
    {
      q: '¿Qué tipo de estiba?',
      options: ['Tipo Norma (pesada)', 'Tráfico Liviano', 'Tablas de pino', 'No sé aún'],
      key: 'tipo',
    },
    {
      q: '¿Cuántas unidades aprox.?',
      options: ['Menos de 50', '50 — 200', '200 — 1.000', 'Más de 1.000'],
      key: 'cantidad',
    },
  ];

  const waMessage = encodeURIComponent(
    `Hola Maderas Montoya. Quiero cotizar:\n` +
    `• Servicio: ${data.servicio || '—'}\n` +
    `• Tipo: ${data.tipo || '—'}\n` +
    `• Cantidad: ${data.cantidad || '—'}`
  );

  return (
    <section data-reveal style={{ background: 'rgba(28,24,20,0.85)', padding: '120px 56px', borderTop: `1px solid ${tallerTheme.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
        <div>
          <TallerBadge n="06 —" label="Cotizador" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 24px' }}>
            Tres preguntas. <em style={{ color: tallerTheme.accent2 }}>WhatsApp</em> directo.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.55, color: tallerTheme.ink2 }}>
            Sin formularios largos. Responde tres preguntas y te abrimos WhatsApp con la persona que toma decisiones — no un bot.
          </p>
          <div style={{ marginTop: 40, padding: 24, border: `1px solid ${tallerTheme.line}`, display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 48, height: 48, background: tallerTheme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, serif', fontSize: 22, color: tallerTheme.bg }}>CG</div>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 18, color: tallerTheme.ink }}>César Granados</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>Fundador · responde personalmente</div>
            </div>
          </div>
        </div>

        <div style={{ background: tallerTheme.bg, border: `1px solid ${tallerTheme.line}`, padding: 48, minHeight: 480 }}>
          {/* Progress */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 40 }}>
            {steps.map((_, i) => (
              <div key={i} style={{ flex: 1, height: 3, background: i <= step ? tallerTheme.accent : tallerTheme.line2 }} />
            ))}
          </div>

          {step < steps.length ? (
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
                Paso {step + 1} de {steps.length}
              </div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 44, color: tallerTheme.ink, margin: '0 0 40px', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                {steps[step].q}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {steps[step].options.map(opt => (
                  <button key={opt} onClick={() => {
                    setData({ ...data, [steps[step].key]: opt });
                    setStep(step + 1);
                  }} style={{
                    background: data[steps[step].key] === opt ? tallerTheme.accent : 'transparent',
                    color: data[steps[step].key] === opt ? tallerTheme.bg : tallerTheme.ink,
                    border: `1px solid ${data[steps[step].key] === opt ? tallerTheme.accent : tallerTheme.line}`,
                    padding: '22px 24px', fontFamily: 'Inter, sans-serif', fontSize: 15, textAlign: 'left',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}>{opt}</button>
                ))}
              </div>
              {step > 0 && (
                <button onClick={() => setStep(step - 1)} style={{
                  marginTop: 32, background: 'none', border: 'none', color: tallerTheme.muted,
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 11, cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>← Volver</button>
              )}
            </div>
          ) : (
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Listo ✓</div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 44, color: tallerTheme.ink, margin: '0 0 28px', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                Tu solicitud <em style={{ color: tallerTheme.accent2 }}>está lista.</em>
              </h3>
              <div style={{ background: tallerTheme.bg2, padding: 24, marginBottom: 28 }}>
                {[['Servicio', data.servicio], ['Tipo', data.tipo], ['Cantidad', data.cantidad]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
                    <span style={{ color: tallerTheme.muted }}>{k}</span>
                    <span style={{ color: tallerTheme.ink }}>{v}</span>
                  </div>
                ))}
              </div>
              <a href={`https://wa.me/573016302712?text=${waMessage}`} target="_blank" style={{
                display: 'block', textAlign: 'center', background: '#25d366', color: '#0f2b17',
                border: 'none', padding: '20px 24px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16,
                textDecoration: 'none', marginBottom: 12,
              }}>Abrir WhatsApp con César →</a>
              <button onClick={() => { setStep(0); setData({ tipo: '', cantidad: '', servicio: '', empresa: '' }); }} style={{
                width: '100%', background: 'transparent', color: tallerTheme.ink2, border: `1px solid ${tallerTheme.line}`,
                padding: '14px', fontFamily: 'Inter, sans-serif', fontSize: 13, cursor: 'pointer',
              }}>Reiniciar</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TallerImpacto() {
  return (
    <section data-reveal style={{ background: 'rgba(42,35,32,0.82)', padding: '120px 56px', position: 'relative' }}>
      <div style={{ maxWidth: 900, marginBottom: 64 }}>
        <TallerBadge n="07 —" label="Impacto ambiental" />
        <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 92, lineHeight: 0.9, letterSpacing: '-0.035em', color: tallerTheme.ink, margin: '20px 0 0' }}>
          Cero madera al <em style={{ color: tallerTheme.accent2 }}>relleno.</em><br/>
          Cero excusas.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48 }}>
        <div style={{ aspectRatio: '5/4', overflow: 'hidden', background: tallerTheme.bg3 }}>
          <img src="img/recoleccion-camion.jpeg" alt="Recolección de madera para segunda vida" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: tallerTheme.line2 }}>
          {[
            { n: '147 ton', l: 'Madera recuperada al mes', pct: '100%' },
            { n: '+18.000', l: 'Estibas reparadas al mes y devueltas al ciclo', pct: '—' },
            { n: '0 kg', l: 'Enviados al relleno sanitario', pct: '100%' },
            { n: '12%', l: 'Reducción CO₂eq vs. fabricación nueva', pct: 'est.' },
          ].map((s, i) => (
            <div key={i} className="mm-stat-row" style={{ background: tallerTheme.bg3, padding: '32px 32px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div>
                <div className="mm-stat-num" style={{ fontFamily: 'Fraunces, serif', fontSize: 54, color: tallerTheme.ink, lineHeight: 0.95, letterSpacing: '-0.02em' }}>{s.n}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: tallerTheme.ink2, marginTop: 8, maxWidth: 340 }}>{s.l}</div>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.accent, letterSpacing: '0.1em' }}>{s.pct}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TallerBodegaTour() {
  const tourImgs = [
    { l: 'Entrada bodega', t: 'warm' },
    { l: 'Acopio estibas usadas', t: 'dark' },
    { l: 'Taller reparación', t: 'warm' },
    { l: 'Producto terminado', t: 'dark' },
    { l: 'Flota de transporte', t: 'warm' },
  ];
  const [idx, setIdx] = React.useState(0);

  return (
    <section data-reveal style={{ background: 'rgba(20,17,15,0.82)', padding: '120px 56px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40 }}>
        <div>
          <TallerBadge n="08 —" label="Tour virtual" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 0' }}>
            Dentro de la <em style={{ color: tallerTheme.accent2 }}>bodega.</em>
          </h2>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: tallerTheme.muted }}>
          {String(idx + 1).padStart(2, '0')} / {String(tourImgs.length).padStart(2, '0')}
        </div>
      </div>
      <Placeholder label={tourImgs[idx].l} aspect="21/9" tone={tourImgs[idx].t} />
      <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
        {tourImgs.map((img, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            background: i === idx ? tallerTheme.accent : 'transparent',
            color: i === idx ? tallerTheme.bg : tallerTheme.ink2,
            border: `1px solid ${i === idx ? tallerTheme.accent : tallerTheme.line}`,
            padding: '10px 16px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>{String(i + 1).padStart(2, '0')} · {img.l}</button>
        ))}
      </div>
    </section>
  );
}

function TallerBlog() {
  const { isMobile, isTablet } = useBreakpoint();
  const articulos = [
    { cat: 'Mantenimiento', t: '7 señales de que tus estibas necesitan reparación urgente', read: '5 min', img: 'img/blog-senales.jpeg', webp: 'img/blog-senales.webp', url: 'blog/7-senales-estibas-reparacion.html' },
    { cat: 'Sostenibilidad', t: 'Economía circular aplicada: cómo una empresa redujo cerca del 40% sus costos', read: '8 min', img: 'img/blog-economia.jpg', url: 'blog/economia-circular-estibas.html' },
    { cat: 'Logística', t: 'Tipo Norma vs Tráfico Liviano: guía definitiva para bodegas', read: '6 min', img: 'img/blog-diferencias.jpeg', webp: 'img/blog-diferencias.webp', url: 'blog/tipo-norma-vs-trafico-liviano.html' },
    { cat: 'Técnico', t: 'Por qué el pino es la mejor madera para estibas (ciencia y oficio)', read: '4 min', img: 'img/blog-pino.jpeg', webp: 'img/blog-pino.webp', url: 'blog/pino-mejor-madera-estibas.html' },
    { cat: 'Logística', t: 'Reparación in-situ vs taller: cuál conviene para tu bodega', read: '7 min', img: 'img/blog-senales.jpeg', webp: 'img/blog-senales.webp', url: 'blog/reparacion-in-situ-vs-taller.html' },
  ];

  const sectionPad = isMobile ? '72px 20px 80px' : isTablet ? '80px 32px' : '120px 56px';
  const titleSize = isMobile ? 38 : isTablet ? 48 : 64;

  const gridStyle = isMobile
    ? { display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', gap: 16, paddingBottom: 12, cursor: 'grab' }
    : isTablet
    ? { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }
    : { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 };

  const cardStyle = isMobile
    ? { flex: '0 0 82vw', scrollSnapAlign: 'start', maxWidth: 320 }
    : {};

  return (
    <section id="blog" data-reveal style={{ background: 'rgba(28,24,20,0.85)', padding: sectionPad }}>
      {/* Inyectar CSS solo una vez para ocultar scrollbar del carousel */}
      <style>{`.mm-blog-scroll::-webkit-scrollbar{display:none}.mm-blog-scroll{-ms-overflow-style:none;scrollbar-width:none}`}</style>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', marginBottom: isMobile ? 32 : 56, gap: isMobile ? 20 : 0 }}>
        <div>
          <TallerBadge n="09 —" label="Blog" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: titleSize, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '16px 0 0' }}>
            Conocimiento del oficio.
          </h2>
        </div>
        <a href="blog/index.html" style={{ textDecoration: 'none', display: 'inline-block', width: isMobile ? '100%' : 'auto' }}>
          <button style={{ background: 'transparent', color: tallerTheme.ink, border: `1px solid ${tallerTheme.line}`, padding: '14px 24px', fontFamily: 'Inter, sans-serif', fontSize: 13, cursor: 'pointer', width: isMobile ? '100%' : 'auto' }}>Ver blog completo →</button>
        </a>
      </div>

      {isMobile && (
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
          ← Desliza para ver más →
        </div>
      )}

      <div className={isMobile ? 'mm-blog-scroll' : ''} style={gridStyle}>
        {articulos.slice(0, 4).map((a, i) => (
          <a key={i} href={a.url} style={{ textDecoration: 'none', color: 'inherit', ...cardStyle }}>
            <article className="mm-card-lift" style={{ background: tallerTheme.bg, padding: 0, border: `1px solid ${tallerTheme.line2}`, cursor: 'pointer', height: '100%' }}>
              {a.img ? (
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: tallerTheme.bg3 }}>
                  <picture style={{ width: '100%', height: '100%', display: 'block' }}>
                    {a.webp && <source srcSet={a.webp} type="image/webp" />}
                    <img className="mm-img-zoom" src={a.img} alt={a.t} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </picture>
                </div>
              ) : (
                <Placeholder label={a.cat} aspect="4/3" tone={i % 2 === 0 ? 'warm' : 'dark'} />
              )}
              <div style={{ padding: isMobile ? 20 : 24 }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{a.cat} · {a.read}</div>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: isMobile ? 19 : 22, color: tallerTheme.ink, lineHeight: 1.2, margin: 0, letterSpacing: '-0.01em' }}>{a.t}</h3>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

function TallerFaq() {
  const [open, setOpen] = React.useState(0);
  return (
    <section data-reveal style={{ background: 'rgba(20,17,15,0.85)', padding: '120px 56px', borderTop: `1px solid ${tallerTheme.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }}>
        <div>
          <TallerBadge n="10 —" label="FAQ" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 24px' }}>
            Preguntas <em style={{ color: tallerTheme.accent2 }}>frecuentes.</em>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: tallerTheme.ink2, lineHeight: 1.55 }}>
            ¿No encuentras lo que buscas? Escríbenos por WhatsApp y te respondemos en menos de una hora.
          </p>
        </div>
        <div>
          {MM_FAQS.map((f, i) => (
            <div key={i} className="mm-faq-item" onClick={() => setOpen(open === i ? -1 : i)} style={{
              borderTop: `1px solid ${tallerTheme.line2}`,
              padding: '28px 0', cursor: 'pointer',
              borderBottom: i === MM_FAQS.length - 1 ? `1px solid ${tallerTheme.line2}` : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: 22, color: tallerTheme.ink, margin: 0, letterSpacing: '-0.01em' }}>{f.q}</h3>
                <div style={{ color: tallerTheme.accent, fontSize: 20, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</div>
              </div>
              {open === i && (
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: tallerTheme.ink2, lineHeight: 1.6, marginTop: 16, marginBottom: 0, maxWidth: 640 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TallerCertificaciones() {
  const certs = [
    { t: 'Normatividad Ambiental', s: 'Decreto 1076/2015', d: 'Operación conforme al Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible.' },
    { t: 'Gestión de Residuos', s: 'Resolución 1407/2018', d: 'Cumplimiento en aprovechamiento y valorización de madera industrial post-consumo.' },
    { t: 'Cámara de Comercio', s: 'Matrícula activa', d: 'Empresa debidamente constituida y registrada en Cámara de Comercio de Bogotá.' },
    { t: 'Seguridad y Salud', s: 'SG-SST vigente', d: 'Sistema de gestión implementado. Personal capacitado y equipos de protección.' },
  ];
  return (
    <section id="certificaciones" data-reveal style={{ background: tallerTheme.bg, padding: '120px 56px', borderTop: `1px solid ${tallerTheme.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, marginBottom: 56 }}>
        <div>
          <TallerBadge n="11 —" label="Cumplimiento" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 0' }}>
            Certificaciones y <em style={{ color: tallerTheme.accent2 }}>normativa.</em>
          </h2>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: tallerTheme.ink2, alignSelf: 'end', margin: 0, maxWidth: 560 }}>
          Operamos bajo la normatividad ambiental vigente en Colombia. Trazabilidad completa de cada pieza, desde la recolección hasta el destino final.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: tallerTheme.line2 }}>
        {certs.map((c, i) => (
          <div key={i} className="mm-cert-card" style={{ background: tallerTheme.bg2, border: '1px solid transparent', padding: 36, minHeight: 240, display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: 56, height: 56, border: `1.5px solid ${tallerTheme.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, serif', fontSize: 22, color: tallerTheme.accent, marginBottom: 24 }}>✓</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>{c.s}</div>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: 22, color: tallerTheme.ink, margin: '0 0 12px', letterSpacing: '-0.01em', lineHeight: 1.15 }}>{c.t}</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: tallerTheme.ink2, lineHeight: 1.55, margin: 0 }}>{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TallerEquipo() {
  return (
    <section data-reveal style={{ background: 'rgba(28,24,20,0.85)', padding: '120px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative', border: `1px solid ${tallerTheme.line}` }}>
            <img src="img/equipo.jpeg" alt="Equipo Maderas Montoya en bodega" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(20,17,15,0.55) 100%)' }} />
          </div>
          <div style={{ position: 'absolute', bottom: 24, left: 24, background: tallerTheme.bg, padding: '14px 20px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Equipo Montoya · Soacha</div>
        </div>
        <div>
          <TallerBadge n="12 —" label="Nuestro equipo" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 32px' }}>
            El <em style={{ color: tallerTheme.accent2 }}>talento humano</em> detrás de cada estiba.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.6, color: tallerTheme.ink2, marginBottom: 22 }}>
            En Maderas Montoya creemos que la calidad no se construye solo con madera: se construye con <strong style={{ color: tallerTheme.ink }}>personas comprometidas</strong>. Contamos con un equipo multidisciplinario de operarios, técnicos en reparación, conductores certificados y personal administrativo, todos capacitados bajo nuestro Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginTop: 40, paddingTop: 32, borderTop: `1px solid ${tallerTheme.line2}`, background: tallerTheme.line2 }}>
            {[
              { n: '+25', l: 'Colaboradores directos' },
              { n: '100%', l: 'Personal con SG-SST vigente' },
              { n: '+12 años', l: 'Experiencia promedio del equipo técnico' },
              { n: '24/7', l: 'Operación y atención a clientes industriales' },
            ].map((p, i) => (
              <div key={i} style={{ background: 'rgba(28,24,20,0.85)', padding: '16px 16px' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, color: tallerTheme.ink, lineHeight: 1, letterSpacing: '-0.02em' }}>{p.n}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: tallerTheme.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6, lineHeight: 1.4 }}>{p.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TallerFormLargo() {
  const [sent, setSent] = React.useState(false);
  return (
    <section data-reveal style={{ background: 'rgba(20,17,15,0.85)', padding: '120px 56px', borderTop: `1px solid ${tallerTheme.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
        <div>
          <TallerBadge n="13 —" label="Formulario" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 24px' }}>
            ¿Prefieres <em style={{ color: tallerTheme.accent2 }}>escribir</em> en detalle?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.55, color: tallerTheme.ink2, marginBottom: 32 }}>
            Si tu necesidad es grande o específica, este formulario te permite contarnos todo. Respondemos en menos de 24 horas con una propuesta personalizada.
          </p>
          <div style={{ borderTop: `1px solid ${tallerTheme.line2}`, paddingTop: 24 }}>
            {[
              ['Respuesta en', '< 24 horas'],
              ['Evaluación técnica', 'Sin costo'],
              ['Cotización personalizada', 'Según inventario real'],
              ['Confidencialidad', 'Garantizada'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${tallerTheme.line2}`, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
                <span style={{ color: tallerTheme.muted }}>{k}</span>
                <span style={{ color: tallerTheme.ink, fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: tallerTheme.bg2, padding: 48, border: `1px solid ${tallerTheme.line2}` }}>
          {!sent ? (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
              {[
                { l: 'Nombre completo *', t: 'text', req: true },
                { l: 'Empresa', t: 'text' },
                { l: 'Cargo', t: 'text' },
                { l: 'Correo electrónico *', t: 'email', req: true },
                { l: 'Teléfono / WhatsApp *', t: 'tel', req: true },
              ].map(f => (
                <div key={f.l} style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>{f.l}</label>
                  <input type={f.t} required={f.req} style={{
                    width: '100%', background: tallerTheme.bg, border: `1px solid ${tallerTheme.line2}`,
                    padding: '14px 16px', fontFamily: 'Inter, sans-serif', fontSize: 14, color: tallerTheme.ink,
                    outline: 'none',
                  }} onFocus={e => e.target.style.borderColor = tallerTheme.accent} onBlur={e => e.target.style.borderColor = tallerTheme.line2} />
                </div>
              ))}

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Tipo de servicio</label>
                <select style={{
                  width: '100%', background: tallerTheme.bg, border: `1px solid ${tallerTheme.line2}`,
                  padding: '14px 16px', fontFamily: 'Inter, sans-serif', fontSize: 14, color: tallerTheme.ink,
                }}>
                  <option>Reparación de estibas</option>
                  <option>Compra de estibas nuevas/usadas</option>
                  <option>Venta de estibas</option>
                  <option>Recolección de madera en desuso</option>
                  <option>Contrato de mantenimiento mensual</option>
                  <option>Varios servicios / no estoy seguro</option>
                </select>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Mensaje * — cuéntanos tu necesidad</label>
                <textarea required rows="5" style={{
                  width: '100%', background: tallerTheme.bg, border: `1px solid ${tallerTheme.line2}`,
                  padding: '14px 16px', fontFamily: 'Inter, sans-serif', fontSize: 14, color: tallerTheme.ink,
                  resize: 'vertical', outline: 'none',
                }} placeholder="Ej: Tenemos 500 estibas Tipo Norma en planta que necesitan evaluación..." />
              </div>

              <button type="submit" className="mm-btn-press" style={{ width: '100%', background: tallerTheme.accent, color: tallerTheme.bg, border: 'none', padding: '20px', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>
                Enviar mensaje →
              </button>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted, marginTop: 16, letterSpacing: '0.05em', lineHeight: 1.5 }}>
                * Al enviar aceptas la política de tratamiento de datos. Nunca compartimos tu información.
              </div>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: tallerTheme.accent, color: tallerTheme.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, serif', fontSize: 36, margin: '0 auto 24px' }}>✓</div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 36, color: tallerTheme.ink, margin: '0 0 16px', letterSpacing: '-0.02em' }}>Mensaje recibido.</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: tallerTheme.ink2, lineHeight: 1.6, maxWidth: 360, margin: '0 auto' }}>Te contactamos en menos de 24 horas. Si prefieres hablar ahora, escríbenos por WhatsApp al 301 630 2712.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TallerWhatsAppFloat() {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="https://wa.me/573016302712?text=Hola%20Maderas%20Montoya%2C%20quiero%20cotizar"
       target="_blank" rel="noopener"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 50,
      background: '#25d366', color: '#0f2b17',
      padding: hover ? '16px 22px 16px 16px' : '16px',
      borderRadius: 999,
      display: 'flex', alignItems: 'center', gap: hover ? 12 : 0,
      fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14,
      textDecoration: 'none',
      boxShadow: '0 10px 40px rgba(37,211,102,0.35), 0 0 0 6px rgba(37,211,102,0.15)',
      transition: 'all 0.25s',
    }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {hover && <span>Cotizar ahora</span>}
    </a>
  );
}

function TallerFooter() {
  const col = (title, links) => (
    <div key={title}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>{title}</div>
      {links.map(([label, href]) => (
        <div key={label} style={{ padding: '6px 0' }}>
          {href
            ? <a href={href} style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: tallerTheme.ink2, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = tallerTheme.accent}
                onMouseLeave={e => e.target.style.color = tallerTheme.ink2}
              >{label}</a>
            : <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: tallerTheme.ink2 }}>{label}</span>
          }
        </div>
      ))}
    </div>
  );

  return (
    <footer style={{ background: '#0e0c0a', borderTop: `1px solid ${tallerTheme.line}`, padding: '80px 56px 40px', position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 56 }}>

        {/* Columna 1 — Marca */}
        <div>
          <MMMark size={64} />
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 26, color: tallerTheme.ink, marginTop: 16, letterSpacing: '-0.01em' }}>Maderas Montoya</div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: tallerTheme.ink2, lineHeight: 1.6, marginTop: 12, maxWidth: 300 }}>
            Empresa colombiana en Soacha, Cundinamarca. +12 años recolectando, reutilizando y aprovechando estibas de madera bajo normatividad ambiental vigente.
          </p>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: tallerTheme.muted, marginTop: 12 }}>NIT 901.XXX.XXX-X</div>
        </div>

        {col('Servicios', [
          ['Reparación in-situ', '#servicios'],
          ['Compra y venta',    '#servicios'],
          ['Recolección total', '#servicios'],
          ['Productos',         '#productos'],
        ])}

        {col('Empresa', [
          ['Equipo',            '#nosotros'],
          ['Casos de éxito',    '#casos'],
          ['Blog',              'blog/index.html'],
          ['Certificaciones',   '#certificaciones'],
        ])}

        {col('Legal', [
          ['Política de Privacidad',          'privacidad.html'],
          ['Términos y Condiciones',           'terminos.html'],
          ['Tratamiento de Datos (Ley 1581)', 'privacidad.html#datos'],
        ])}

        {col('Contacto', [
          ['+57 301 630 2712',                        'tel:+573016302712'],
          ['solucioneslogistas@maderasmontoyaa.com',  'mailto:solucioneslogistas@maderasmontoyaa.com'],
          ['Cra. 11 Este #7G-45, Soacha',             null],
          ['Cundinamarca · Colombia',                  null],
        ])}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, borderTop: `1px solid ${tallerTheme.line2}`, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.muted, letterSpacing: '0.05em' }}>
        <div>© 2026 Maderas Montoya · Todos los derechos reservados</div>
        <div>Soacha · Cundinamarca · Colombia</div>
      </div>
    </footer>
  );
}

function GlobalStyles() {
  return (
    <style>{`
      /* ── Tarjetas: levantan al hover, se hunden al click ── */
      .mm-card-lift {
        transition: transform 0.32s cubic-bezier(.2,.7,.2,1),
                    box-shadow 0.32s cubic-bezier(.2,.7,.2,1),
                    border-color 0.32s;
        will-change: transform;
      }
      .mm-card-lift:hover {
        transform: translateY(-10px);
        box-shadow: 0 28px 60px -12px rgba(217,152,74,0.28), 0 0 0 1px rgba(217,152,74,0.35);
      }
      .mm-card-lift:active {
        transform: translateY(-3px) scale(0.975);
        box-shadow: 0 8px 20px -6px rgba(217,152,74,0.2);
        transition-duration: 0.08s;
      }

      /* ── Zoom de imagen dentro de tarjeta ── */
      .mm-img-zoom {
        transition: transform 0.55s cubic-bezier(.2,.7,.2,1);
        transform-origin: center;
      }
      .mm-card-lift:hover .mm-img-zoom {
        transform: scale(1.07);
      }

      /* ── FAQ: borde izquierdo ámbar + deslizamiento ── */
      .mm-faq-item {
        border-left: 3px solid transparent;
        padding-left: 0;
        transition: border-color 0.25s, padding-left 0.25s, background 0.25s;
      }
      .mm-faq-item:hover {
        border-left-color: rgba(217,152,74,0.55);
        padding-left: 14px;
        background: rgba(217,152,74,0.04);
      }
      .mm-faq-item:active {
        background: rgba(217,152,74,0.09);
      }

      /* ── Filas de estadísticas (Impacto) ── */
      .mm-stat-row {
        transition: background 0.28s, padding-left 0.28s;
      }
      .mm-stat-row:hover {
        background: rgba(60,46,38,1) !important;
        padding-left: 44px !important;
      }
      .mm-stat-row:hover .mm-stat-num {
        color: #e8c889;
      }
      .mm-stat-num {
        transition: color 0.28s;
      }

      /* ── Botones: presión al click ── */
      .mm-btn-press {
        transition: transform 0.1s, box-shadow 0.1s, background 0.2s !important;
      }
      .mm-btn-press:hover {
        filter: brightness(1.1);
      }
      .mm-btn-press:active {
        transform: scale(0.95) !important;
        filter: brightness(0.95);
      }

      /* ── Certificaciones: borde glow ── */
      .mm-cert-card {
        transition: border-color 0.28s, background 0.28s, transform 0.28s;
      }
      .mm-cert-card:hover {
        border-color: rgba(217,152,74,0.45) !important;
        background: rgba(36,28,24,1) !important;
        transform: translateY(-6px);
      }
      .mm-cert-card:active {
        transform: translateY(-1px) scale(0.975);
      }

      /* ── Clientes marquee (ya existente) ya tiene hover. ── */
    `}</style>
  );
}

function TallerUbicacion() {
  return (
    <section id="ubicacion" data-reveal style={{ background: '#0e0c0a', borderTop: `1px solid ${tallerTheme.line2}`, padding: '120px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>

        {/* Info */}
        <div>
          <TallerBadge n="14 —" label="Ubicación" />
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.03em', color: tallerTheme.ink, margin: '20px 0 32px' }}>
            Encuéntranos <em style={{ color: tallerTheme.accent2 }}>aquí.</em>
          </h2>

          {/* Datos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: tallerTheme.line2, marginBottom: 32 }}>
            {[
              ['Dirección',    'Cra. 11 Este #7G-45'],
              ['Ciudad',       'Soacha, Cundinamarca'],
              ['País',         'Colombia'],
              ['Teléfono',     '+57 301 630 2712'],
              ['Horario',      'Lun – Vie: 7 am – 5 pm · Sáb: 7 am – 12 pm'],
              ['Zona cubierta','Soacha · Bogotá · Cundinamarca'],
            ].map(([k, v]) => (
              <div key={k} style={{ background: tallerTheme.bg2, padding: '18px 24px', display: 'flex', gap: 24 }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.muted, letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: 110, paddingTop: 2 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: tallerTheme.ink, fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12 }}>
            <a
              href="https://share.google/8zOYhOeMVaAYIfxt7"
              target="_blank" rel="noopener noreferrer"
              className="mm-btn-press"
              style={{
                display: 'inline-block', background: tallerTheme.accent, color: tallerTheme.bg,
                padding: '14px 22px', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13,
                textDecoration: 'none', letterSpacing: '0.01em',
              }}
            >Ver en Google Maps →</a>
            <a
              href="https://wa.me/573016302712?text=Hola%20Maderas%20Montoya%2C%20quisiera%20visitar%20sus%20instalaciones"
              target="_blank" rel="noopener noreferrer"
              className="mm-btn-press"
              style={{
                display: 'inline-block', background: 'transparent', color: tallerTheme.ink,
                border: `1px solid ${tallerTheme.line}`, padding: '14px 22px',
                fontFamily: 'Inter, sans-serif', fontSize: 13, textDecoration: 'none',
              }}
            >Coordinar visita →</a>
          </div>
        </div>

        {/* Mapa */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ border: `1px solid ${tallerTheme.line}`, overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 2, background: tallerTheme.bg, padding: '8px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              ● BODEGA PRINCIPAL
            </div>
            <iframe
              title="Maderas Montoya — Soacha, Cundinamarca"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31817.024970603874!2d-74.25146341323851!3d4.570992043047561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f3566b96b75%3A0xf5f9f149d21a23fd!2smaderas%20montoya!5e0!3m2!1ses-419!2sco!4v1777263354376!5m2!1ses-419!2sco"
              width="100%"
              height="420"
              style={{ display: 'block', border: 'none', filter: 'grayscale(0.3) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div style={{ background: tallerTheme.bg2, border: `1px solid ${tallerTheme.line}`, borderTop: 'none', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: tallerTheme.muted, letterSpacing: '0.05em' }}>Cra. 11 Este #7G-45 · Soacha · Cundinamarca</span>
            <a href="https://share.google/8zOYhOeMVaAYIfxt7" target="_blank" rel="noopener noreferrer"
               style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: tallerTheme.accent, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Abrir mapa ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function VariantTaller() {
  useScrollReveal();
  return (
    <div data-page-root style={{ color: tallerTheme.ink, minHeight: '100%', position: 'relative', zIndex: 1 }}>
      <GlobalStyles />
      <VideoBackdrop />
      <TallerNav />
      <TallerHero />
      <TallerClientes />
      <TallerServicios />
      <TallerCalculadora />
      <TallerProductos />
      <TallerCasos />
      <TallerCotizador />
      <TallerImpacto />
      <TallerCertificaciones />
      <TallerEquipo />
      <TallerBlog />
      <TallerFormLargo />
      <TallerFaq />
      <TallerUbicacion />
      <TallerFooter />
      <TallerWhatsAppFloat />
    </div>
  );
}

Object.assign(window, { VariantTaller });
