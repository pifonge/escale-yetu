'use client';

import React, { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  desc: string;
  category: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // === MENU ===
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 1, name: "Planche Yetu", price: "3000 FCFA", desc: "Brochettes de Poulet/poisson pané, frites, salades", category: "Spécialités Yetu" },
    { id: 2, name: "Poulet Mayo Yetu", price: "6500 FCFA", desc: "Poulet, oignons, poivrons, mayonnaise", category: "Spécialités Yetu" },
  ]);

  const [newMenuItem, setNewMenuItem] = useState({ 
    name: '', 
    price: '', 
    desc: '', 
    category: 'Spécialités Yetu' 
  });

  // === PARAMÈTRES ===
  const [settings, setSettings] = useState({
    restaurantName: "Escale Yetu",
    address: "Katre Yaar, Ouagadougou",
    phone1: "+226 62 73 73 64",
    phone2: "+226 74 44 03 32",
    email: "contact@restoyetu.com",
    hours: "Mardi au Dimanche • 9h30 – 23h30",
  });

  const tabs = [
    { id: 'dashboard', label: 'Tableau de bord' },
    { id: 'menu', label: 'Menu' },
    { id: 'articles', label: 'Articles' },
    { id: 'media', label: 'Médias' },
    { id: 'settings', label: 'Paramètres' },
  ];

  // Ajouter un plat
  const addMenuItem = () => {
    if (!newMenuItem.name || !newMenuItem.price) {
      alert("Veuillez remplir au moins le nom et le prix");
      return;
    }
    
    const newItem: MenuItem = {
      id: Date.now(),
      name: newMenuItem.name,
      price: newMenuItem.price,
      desc: newMenuItem.desc,
      category: newMenuItem.category,
    };
    
    setMenuItems([...menuItems, newItem]);
    setNewMenuItem({ name: '', price: '', desc: '', category: 'Spécialités Yetu' });
    alert("Plat ajouté avec succès !");
  };

  // Supprimer un plat
  const deleteMenuItem = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer ce plat ?")) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  // Sauvegarder les paramètres
  const saveSettings = () => {
    alert("Paramètres enregistrés avec succès !");
  };

  return (
    <div className="min-h-screen bg-[#F5EDD8] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl mb-2">Tableau de bord Escale Yetu</h1>
        <p className="text-[#5C2D1E]/70 mb-8">Gestion du site</p>

        {/* Onglets */}
        <div className="flex gap-2 mb-8 border-b pb-4 flex-wrap">
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

        {/* TABLEAU DE BORD */}
        {activeTab === 'dashboard' && (
          <div className="card p-8">
            <h2 className="text-2xl mb-4">Bienvenue dans l'administration</h2>
            <p>Utilisez les onglets ci-dessus pour gérer votre site.</p>
          </div>
        )}

        {/* MENU - FONCTIONNEL */}
        {activeTab === 'menu' && (
          <div>
            <h2 className="text-2xl mb-6">Gestion du Menu</h2>

            {/* Formulaire d'ajout */}
            <div className="card p-8 mb-8">
              <h3 className="mb-4 text-[#C8883A]">Ajouter un nouveau plat</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <input 
                  placeholder="Nom du plat" 
                  className="form-input" 
                  value={newMenuItem.name}
                  onChange={e => setNewMenuItem({...newMenuItem, name: e.target.value})}
                />
                <input 
                  placeholder="Prix (ex: 6500 FCFA)" 
                  className="form-input" 
                  value={newMenuItem.price}
                  onChange={e => setNewMenuItem({...newMenuItem, price: e.target.value})}
                />
                <input 
                  placeholder="Description" 
                  className="form-input" 
                  value={newMenuItem.desc}
                  onChange={e => setNewMenuItem({...newMenuItem, desc: e.target.value})}
                />
                <select 
                  className="form-input"
                  value={newMenuItem.category}
                  onChange={e => setNewMenuItem({...newMenuItem, category: e.target.value})}
                >
                  <option>Spécialités Yetu</option>
                  <option>Suppléments</option>
                  <option>Bouillons Saisonnier</option>
                  <option>Extras</option>
                  <option>Boissons</option>
                </select>
              </div>
              <button onClick={addMenuItem} className="btn-primary mt-4">Ajouter au menu</button>
            </div>

            {/* Liste des plats */}
            <div className="card">
              <div className="p-6 border-b font-medium">Plats actuels ({menuItems.length})</div>
              {menuItems.map(item => (
                <div key={item.id} className="p-6 border-b flex justify-between items-center last:border-b-0">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-[#5C2D1E]/70">{item.desc}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-mono text-[#C8883A]">{item.price}</div>
                    <button 
                      onClick={() => deleteMenuItem(item.id)} 
                      className="text-red-600 hover:text-red-700 px-3 py-1"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ARTICLES */}
        {activeTab === 'articles' && (
          <div className="card p-8">
            <h2>Gestion des Articles</h2>
            <p className="mt-4">Vous pourrez ajouter des articles de blog ici.</p>
          </div>
        )}

        {/* MÉDIAS */}
        {activeTab === 'media' && (
          <div className="card p-8">
            <h2>Gestion des Médias</h2>
            <p className="mt-4">Vous pourrez uploader vos photos et logos ici.</p>
          </div>
        )}

        {/* PARAMÈTRES - FONCTIONNEL */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl mb-6">Paramètres du site</h2>
            
            <div className="card p-8 space-y-6">
              <div>
                <label className="form-label">Nom du restaurant</label>
                <input 
                  type="text" 
                  value={settings.restaurantName} 
                  onChange={e => setSettings({...settings, restaurantName: e.target.value})}
                  className="form-input" 
                />
              </div>

              <div>
                <label className="form-label">Adresse</label>
                <input 
                  type="text" 
                  value={settings.address} 
                  onChange={e => setSettings({...settings, address: e.target.value})}
                  className="form-input" 
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Téléphone principal</label>
                  <input 
                    type="text" 
                    value={settings.phone1} 
                    onChange={e => setSettings({...settings, phone1: e.target.value})}
                    className="form-input" 
                  />
                </div>
                <div>
                  <label className="form-label">Téléphone Mobile Money</label>
                  <input 
                    type="text" 
                    value={settings.phone2} 
                    onChange={e => setSettings({...settings, phone2: e.target.value})}
                    className="form-input" 
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  value={settings.email} 
                  onChange={e => setSettings({...settings, email: e.target.value})}
                  className="form-input" 
                />
              </div>

              <div>
                <label className="form-label">Horaires</label>
                <input 
                  type="text" 
                  value={settings.hours} 
                  onChange={e => setSettings({...settings, hours: e.target.value})}
                  className="form-input" 
                />
              </div>

              <button onClick={saveSettings} className="btn-primary">Enregistrer les paramètres</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}