// Shared data + placeholder SVG helpers for Maderas Montoya rediseño

const MM_CLIENTES = [
  'Alkosto', 'Dollarcity', 'Big Cola', 'Peldar', 'Urbaser',
  'Éxito', 'Falabella', 'Postobón', 'Bavaria', 'Carvajal',
  'Corona', 'Nutresa',
];

const MM_CASOS = [
  {
    cliente: 'Alkosto',
    sector: 'Retail',
    reto: 'Rotación alta de 3.500 estibas/mes en 6 centros de distribución',
    resultado: '42%',
    resultadoLabel: 'reducción en costos de estibas',
    detalle: 'Programa de reparación in-situ mensual + recolección de madera en desuso. En 8 meses recuperamos el 68% de la flota.',
    año: '2024',
  },
  {
    cliente: 'Peldar',
    sector: 'Manufactura vidrio',
    reto: 'Estibas reforzadas para cargas pesadas de hasta 2.200 kg',
    resultado: '9.400',
    resultadoLabel: 'estibas reparadas en 14 meses',
    detalle: 'Ajustamos la ficha técnica: tablas de 115cm con pino reforzado y refuerzo de bloques. Cero paradas de línea.',
    año: '2023—24',
  },
  {
    cliente: 'Urbaser',
    sector: 'Gestión ambiental',
    reto: 'Cerrar el ciclo de madera de sus propios clientes industriales',
    resultado: '0 kg',
    resultadoLabel: 'al relleno sanitario',
    detalle: 'Contrato marco de recolección. Cada pieza vuelve al ciclo — reparación, relleno o biomasa. Certificado trimestral.',
    año: '2022—presente',
  },
  {
    cliente: 'Big Cola',
    sector: 'Bebidas',
    reto: 'Logística pesada — estibas de tráfico intenso en planta Bogotá',
    resultado: '5×',
    resultadoLabel: 'más barato que reponer',
    detalle: 'Plan mensual de mantenimiento preventivo. Extendimos la vida útil promedio de 18 meses a 7 años.',
    año: '2024',
  },
  {
    cliente: 'Dollarcity',
    sector: 'Retail descuento',
    reto: 'Crecimiento acelerado — nuevas tiendas cada mes',
    resultado: '100%',
    resultadoLabel: 'disponibilidad sin mínimos',
    detalle: 'Atendemos pedidos desde 20 unidades hasta lotes de 2.000. Entregas en menos de 48h en toda Cundinamarca.',
    año: '2023—24',
  },
];

const MM_PRODUCTOS = [
  {
    id: 'norma',
    nombre: 'Estiba Tipo Norma',
    alt: 'Estiba Tipo Norma de madera de pino 1x1.20m carga 1500kg — Maderas Montoya Soacha Colombia',
    subtitulo: 'Uso industrial pesado',
    img: 'img/producto-tipo-norma.png',
    webp: 'img/producto-tipo-norma.webp',
    medidas: '1.00 × 1.20 m',
    cargaDinamica: '1.500 kg',
    cargaEstatica: '2.500 kg',
    madera: 'Pino reforzado',
    tablas: '7 superiores / 3 bloques',
    ideal: 'Almacenamiento intensivo · Racks · Alto tráfico',
  },
  {
    id: 'liviana',
    nombre: 'Estiba Tráfico Liviano',
    alt: 'Estiba Tráfico Liviano de madera de pino 1x1.20m para distribución y embalaje — Maderas Montoya',
    subtitulo: 'Costo-beneficio óptimo',
    img: 'img/producto-trafico-liviano.png',
    webp: 'img/producto-trafico-liviano.webp',
    medidas: '1.00 × 1.20 m',
    cargaDinamica: '1.000 kg',
    cargaEstatica: '1.800 kg',
    madera: 'Pino seleccionado',
    tablas: '5 superiores / 3 bloques',
    ideal: 'Distribución · Embalaje · Almacenamiento general',
  },
  {
    id: 'tablas',
    nombre: 'Tablas de Pino',
    alt: 'Tablas de pino reutilizado 100cm y 115cm para reparación de estibas — Maderas Montoya Soacha',
    subtitulo: 'Material de reparación',
    img: 'img/producto-tablas.jpeg',
    webp: 'img/producto-tablas.webp',
    imgFit: 'cover',
    medidas: '100 cm · 115 cm',
    cargaDinamica: '—',
    cargaEstatica: '—',
    madera: 'Pino reutilizado',
    tablas: 'Espesor 15–22 mm',
    ideal: 'Reparación · Carpintería liviana · Proyectos',
  },
];

const MM_FAQS = [
  { q: '¿Cuál es la diferencia entre Tipo Norma y Tráfico Liviano?', a: 'La Tipo Norma soporta cargas pesadas (hasta 1.500 kg dinámicos) con mayor grosor de tablas y bloques reforzados. La Tráfico Liviano es ideal para cargas medianas, pesa menos y tiene mejor relación costo-beneficio. Ambas miden 1.0 × 1.20 m.' },
  { q: '¿Cuánto cuesta reparar vs. comprar nueva?', a: 'Reparar cuesta entre 3 y 5 veces menos. Para flotas de 200+ unidades, el ahorro anual es muy significativo. Evaluación gratuita con tu inventario real.' },
  { q: '¿Trabajan en mis instalaciones?', a: 'Sí. Llegamos con herramientas neumáticas y material. No mueves una sola estiba. También puedes traer el lote a nuestro taller en Soacha.' },
  { q: '¿Tienen mínimo de pedido?', a: 'No. Atendemos desde particulares con pocas unidades hasta contratos de miles de estibas.' },
  { q: '¿Cuánto peso soporta una estiba?', a: '1.000–1.500 kg dinámicos y hasta 2.500 kg estáticos, dependiendo del tipo y estado. Cada lote es evaluado técnicamente.' },
  { q: '¿Compran estibas muy dañadas?', a: 'Sí, sin costo ni compromiso. La madera recuperable vuelve al ciclo; lo irrecuperable va a biomasa o compostaje. Nada al relleno.' },
];

// Placeholder visual — raya suave con etiqueta mono. No dibujamos ilustraciones.
function Placeholder({ label, aspect = '16/9', tone = 'warm', className = '', style = {} }) {
  const tones = {
    warm: { bg: '#2a221c', fg: '#d9b68a', stripe: 'rgba(217, 182, 138, 0.06)' },
    dark: { bg: '#14110f', fg: '#a8998a', stripe: 'rgba(168, 153, 138, 0.05)' },
    green: { bg: '#1f2a20', fg: '#a8b8a4', stripe: 'rgba(168, 184, 164, 0.06)' },
    cream: { bg: '#e8e3d8', fg: '#5a5448', stripe: 'rgba(90, 84, 72, 0.05)' },
    stone: { bg: '#c9c3b4', fg: '#4a4538', stripe: 'rgba(74, 69, 56, 0.05)' },
  };
  const t = tones[tone] || tones.warm;
  return (
    <div
      className={className}
      style={{
        aspectRatio: aspect,
        background: `repeating-linear-gradient(135deg, ${t.bg} 0 14px, ${t.stripe} 14px 15px, ${t.bg} 15px 28px)`,
        color: t.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      <div style={{ textAlign: 'center', padding: 16, maxWidth: '80%' }}>
        <div style={{ opacity: 0.5, marginBottom: 6 }}>[ foto ]</div>
        <div style={{ opacity: 0.9 }}>{label}</div>
      </div>
    </div>
  );
}

// Logo de Maderas Montoya - versión simple (dos formas geométricas)
function MMMark({ size = 40, color = 'currentColor' }) {
  return (
    <img src="img/logo.png" alt="Maderas Montoya" width={size} height={size} style={{ display: 'block', objectFit: 'contain' }} />
  );
}

// Logo cliente en gris — texto estilizado (placeholder honesto)
function ClientLogo({ name, dark = false }) {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.02em',
      color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)',
      whiteSpace: 'nowrap',
      padding: '8px 4px',
    }}>
      {name}
    </div>
  );
}

Object.assign(window, {
  MM_CLIENTES, MM_CASOS, MM_PRODUCTOS, MM_FAQS,
  Placeholder, MMMark, ClientLogo,
});
