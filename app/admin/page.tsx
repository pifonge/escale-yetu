'use client';

import React, { useState } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Tableau de bord' },
    { id: 'menu', label: 'Menu' },
    { id: 'articles', label: 'Articles' },
    { id: 'media', label: 'Médias' },
    { id: 'settings', label: 'Paramètres' },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#F5EDD8', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '8px' }}>Tableau de bord Escale Yetu</h1>
        <p style={{ color: '#5C2D1E', opacity: 0.7, marginBottom: '40px' }}>Gestion du site</p>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 24px',
                borderRadius: '9999px',
                fontWeight: 500,
                backgroundColor: activeTab === tab.id ? '#5C2D1E' : 'white',
                color: activeTab === tab.id ? 'white' : '#5C2D1E',
                border: activeTab !== tab.id ? '1px solid #D4C9B8' : 'none',
                cursor: 'pointer'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px' }}>
          {activeTab === 'dashboard' && <div><h2>Bienvenue dans l&apos;administration</h2><p>Utilisez les onglets ci-dessus.</p></div>}
          {activeTab === 'menu' && <div><h2>Gestion du Menu</h2><p>Section Menu</p></div>}
          {activeTab === 'articles' && <div><h2>Gestion des Articles</h2><p>Section Articles</p></div>}
          {activeTab === 'media' && <div><h2>Gestion des Médias</h2><p>Section Médias</p></div>}
          {activeTab === 'settings' && <div><h2>Paramètres du site</h2><p>Section Paramètres</p></div>}
        </div>
      </div>
    </div>
  );
}