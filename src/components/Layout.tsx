import { useState } from 'react';
import NeuralBank from './NeuralBank';
import XpexLooper from './XpexLooper';
import { Card } from './ui/card';

const sidebarLinks = [
  { id: 'bank', title: '💳 Banco Neural', icon: '💳', component: <NeuralBank /> },
  { id: 'impact', title: '🌍 Impacto', icon: '🌍', component: <XpexLooper /> },
  { id: 'enxame', title: '⚡ Enxame do Bem', icon: '⚡', component: <div className="neural-card p-8"><h2 className="text-2xl neural-glow mb-4">⚡ Enxame do Bem</h2><p>Sistema de bots benévolos em desenvolvimento neural...</p></div> },
  { id: 'neurocloner', title: '✨ Neurocloner', icon: '✨', component: <div className="neural-card p-8"><h2 className="text-2xl neural-glow mb-4">✨ Neurocloner</h2><p>Tecnologia de clonagem neural ativa...</p></div> },
  { id: 'bots', title: '🤖 Bots Chineses', icon: '🤖', component: <div className="neural-card p-8"><h2 className="text-2xl neural-glow mb-4">🤖 Bots Chineses</h2><p>Enxame de bots compradores detectados...</p></div> },
  { id: 'settings', title: '⚙️ Configurações', icon: '⚙️', component: <div className="neural-card p-8"><h2 className="text-2xl neural-glow mb-4">⚙️ Configurações</h2><p>Painel de controle do sistema neural...</p></div> },
];

export default function Layout() {
  const [activeTab, setActiveTab] = useState('bank');

  const ActiveComponent = sidebarLinks.find(link => link.id === activeTab)?.component;

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <h1 className="text-2xl font-bold neural-glow text-center">XPEX OS</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {sidebarLinks.map(link => (
            <button
              key={link.id}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-300 ${
                activeTab === link.id 
                  ? 'bg-primary/20 text-primary border border-primary/30 shadow-lg shadow-primary/20' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
              onClick={() => setActiveTab(link.id)}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.title}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-border text-center text-sm text-muted-foreground">
          Luz Edition V3
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {ActiveComponent}
      </main>
    </div>
  );
}