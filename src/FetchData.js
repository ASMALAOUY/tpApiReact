import { useState, useEffect } from 'react';

const cardStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 16,
  overflow: 'hidden',
  fontFamily: "'DM Sans', sans-serif",
};

const headerStyle = {
  padding: '20px 24px 16px',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const badgeStyle = (color) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: color,
  background: color + '18',
  border: `1px solid ${color}30`,
  padding: '4px 10px',
  borderRadius: 6,
});

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Articles</span>
        <span style={badgeStyle('#f5a623')}>⬤ Chargement</span>
      </div>
      <div style={{ padding: 24 }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{
            height: 14, borderRadius: 6,
            background: 'rgba(255,255,255,0.05)',
            marginBottom: 12,
            width: i % 2 === 0 ? '75%' : '90%',
            animation: 'pulse 1.5s ease-in-out infinite',
          }} />
        ))}
      </div>
    </div>
  );

  if (error) return (
    <div style={cardStyle}>
      <div style={{ padding: 24, color: '#ff6b6b', fontSize: 14 }}>⚠ {error}</div>
    </div>
  );

  return (
    <div style={cardStyle}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:.8} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
        .post-item { transition: background 0.15s; }
        .post-item:hover { background: rgba(124,107,255,0.06) !important; }
      `}</style>

      {/* Header */}
      <div style={headerStyle}>
        <div>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: '#fff' }}>Articles récents</p>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}></p>
        </div>
        <span style={badgeStyle('#7c6bff')}></span>
      </div>

      {/* Count */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '12px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <span style={{ fontSize: 28, fontWeight: 700, color: '#7c6bff', fontFamily: "'Syne', sans-serif" }}>5</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>articles sur {posts.length} récupérés</span>
      </div>

      {/* List */}
      <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
        {posts.slice(0, 5).map((post, i) => (
          <li key={post.id} className="post-item" style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            padding: '10px 24px',
            animation: `fadeUp 0.3s ease both`,
            animationDelay: `${i * 60}ms`,
            borderRadius: 8,
            margin: '0 8px',
          }}>
            <span style={{
              fontSize: 11, fontWeight: 600,
              color: '#7c6bff', opacity: 0.6,
              minWidth: 20, paddingTop: 2,
              fontFamily: "'Syne', sans-serif",
            }}>
              {String(post.id).padStart(2, '0')}
            </span>
            <span style={{
              fontSize: 13, color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.5, fontWeight: 300,
              textTransform: 'capitalize',
            }}>
              {post.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;