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
    <div className="min-h-screen bg-[#F5EDD8] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl mb-2">Tableau de bord Escale Yetu</h1>
        <p className="text-[#5C2D1E]/70 mb-8">Gestion du site</p>

        {/* Onglets visibles en haut */}
        <div className="flex gap-2 mb-8 border-b pb-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-[#5C2D1E] text-white' 
                  : 'bg-white border border-[#D4C9B8] hover:bg-[#FAF6ED]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu selon l'onglet */}
        {activeTab === 'dashboard' && (
          <div className="card p-8">
            <h2>Bienvenue dans l'administration</h2>
            <p className="mt-4">Utilisez les onglets ci-dessus pour gérer votre site.</p>
          </div>
        )}

        {activeTab === 'menu' && (
          <div className="card p-8">
            <h2>Gestion du Menu</h2>
            <p className="mt-4">Section Menu (en cours de développement)</p>
          </div>
        )}

        {activeTab === 'articles' && (
          <div className="card p-8">
            <h2>Gestion des Articles</h2>
            <p className="mt-4">Section Articles (en cours de développement)</p>
          </div>
        )}

        {activeTab === 'media' && (
          <div className="card p-8">
            <h2>Gestion des Médias</h2>
            <p className="mt-4">Section Médias (en cours de développement)</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="card p-8">
            <h2>Paramètres du site</h2>
            <p className="mt-4">Section Paramètres (en cours de développement)</p>
          </div>
        )}
      </div>
    </div>
  );
}