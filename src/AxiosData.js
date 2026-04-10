import { useState, useEffect } from 'react';
import axios from 'axios';

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

function getInitials(name) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

const COLORS = [
  '#7c6bff', '#4ecdc4', '#f5a623', '#ff6b6b',
  '#a8e6cf', '#c7b8ea', '#ffd93d', '#6bcbff',
  '#ff8fab', '#b5ead7',
];

function AxiosData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Utilisateurs</span>
        <span style={badgeStyle('#f5a623')}>⬤ Chargement</span>
      </div>
      <div style={{ padding: 24 }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: 12, width: '60%', borderRadius: 4, background: 'rgba(255,255,255,0.06)', marginBottom: 6 }} />
              <div style={{ height: 10, width: '80%', borderRadius: 4, background: 'rgba(255,255,255,0.04)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (error) return (
    <div style={cardStyle}>
      <div style={{ padding: 24, color: '#ff6b6b', fontSize: 14 }}> {error}</div>
    </div>
  );

  return (
    <div style={cardStyle}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
        .user-row { transition: background 0.15s; }
        .user-row:hover { background: rgba(78,205,196,0.05) !important; }
      `}</style>

      {/* Header */}
      <div style={headerStyle}>
        <div>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: '#fff' }}>Utilisateurs</p>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}></p>
        </div>
        <span style={badgeStyle('#4ecdc4')}></span>
      </div>

      {/* Count */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '12px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <span style={{ fontSize: 28, fontWeight: 700, color: '#4ecdc4', fontFamily: "'Syne', sans-serif" }}>{users.length}</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>utilisateurs chargés</span>
      </div>

      {/* List */}
      <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
        {users.map((user, i) => (
          <li key={user.id} className="user-row" style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '8px 24px',
            animation: `fadeUp 0.3s ease both`,
            animationDelay: `${i * 50}ms`,
            borderRadius: 8,
            margin: '0 8px',
          }}>
            {/* Avatar */}
            <div style={{
              width: 34, height: 34,
              borderRadius: '50%',
              background: COLORS[i % COLORS.length] + '22',
              border: `1.5px solid ${COLORS[i % COLORS.length]}55`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 600,
              color: COLORS[i % COLORS.length],
              flexShrink: 0,
            }}>
              {getInitials(user.name)}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user.name}
              </p>
              <p style={{ margin: '1px 0 0', fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 300, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user.email}
              </p>
            </div>

            {/* Company dot */}
            <span style={{
              fontSize: 10,
              color: 'rgba(255,255,255,0.2)',
              fontWeight: 300,
              display: 'none',
            }}>
              {user.company?.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosData;