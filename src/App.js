import FetchData from './FetchData';
import AxiosData from './AxiosData';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f0f13',
      fontFamily: "'DM Sans', sans-serif",
      padding: '0',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap" rel="stylesheet" />

      {/* Header */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: 'rgba(255,255,255,0.02)',
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg, #7c6bff, #4ecdc4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16,
        }}></div>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 18, fontWeight: 800,
          color: '#fff', letterSpacing: '-0.02em',
        }}></span>
        <span style={{
          marginLeft: 'auto', fontSize: 12,
          color: 'rgba(255,255,255,0.3)', fontWeight: 300,
        }}></span>
      </header>

      {/* Hero */}
      <div style={{
        padding: '60px 40px 40px',
        maxWidth: 900, margin: '0 auto',
      }}>
        <p style={{
          fontSize: 12, fontWeight: 500, letterSpacing: '0.12em',
          color: '#7c6bff', textTransform: 'uppercase', marginBottom: 12,
        }}></p>
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 800, color: '#fff',
          lineHeight: 1.1, letterSpacing: '-0.03em',
          margin: '0 0 16px',
        }}>
          Données en temps<br />
          <span style={{
            background: 'linear-gradient(90deg, #7c6bff, #4ecdc4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>réel depuis l'API</span>
        </h1>
        <p style={{
          fontSize: 16, color: 'rgba(255,255,255,0.4)',
          fontWeight: 300, lineHeight: 1.7, margin: 0,
        }}>
          
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: 24,
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 40px 60px',
      }}>
        <FetchData />
        <AxiosData />
      </div>
    </div>
  );
}

export default App;