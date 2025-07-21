import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { 
  Eye, 
  DollarSign, 
  Cpu, 
  RefreshCcw, 
  Target, 
  Ghost, 
  Copy, 
  Terminal,
  TrendingUp,
  Activity,
  Percent
} from 'lucide-react';

const sidebarItems = [
  { id: 'neural-graph', label: 'Visão Neural', icon: Eye },
  { id: 'sim-vs-real', label: 'Saldo & Realidade', icon: DollarSign },
  { id: 'script-control', label: 'Scripts Ativos', icon: Cpu },
  { id: 'layout-mutator', label: 'Mutação Visual', icon: RefreshCcw },
  { id: 'bot-detector', label: 'Radar Bot', icon: Target },
  { id: 'phantom-sim', label: 'Conversão Fantasma', icon: Ghost },
  { id: 'clone-core', label: 'Clonar Painel', icon: Copy },
  { id: 'command-runner', label: 'Execução Direta', icon: Terminal }
];

const NeuralGraph = () => (
  <div className="neural-card">
    <h2 className="text-2xl font-bold neural-glow mb-6">Conexões Neurais em Tempo Real</h2>
    <div className="relative h-64 bg-muted/20 rounded-lg border border-border overflow-hidden">
      <div className="absolute inset-4">
        {/* Core Node */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
          Você
        </div>
        
        {/* Script Node */}
        <div className="absolute bottom-8 left-8 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-xs font-bold">
          Script
        </div>
        
        {/* Bot Node */}
        <div className="absolute bottom-8 right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xs font-bold">
          Bot
        </div>
        
        {/* Painel Node */}
        <div className="absolute top-8 right-8 w-12 h-12 bg-neural-green rounded-full flex items-center justify-center text-xs font-bold">
          XPEX
        </div>
        
        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full">
          <line x1="50%" y1="25%" x2="20%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse" />
          <line x1="50%" y1="25%" x2="80%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse" />
          <line x1="20%" y1="75%" x2="80%" y2="25%" stroke="hsl(var(--accent))" strokeWidth="2" className="animate-pulse" />
        </svg>
      </div>
    </div>
  </div>
);

const SimVsReal = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold neural-glow mb-6">Simulado vs Realidade</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="neural-card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Simulado Atual</p>
            <p className="text-2xl font-bold text-green-400">$127,382.00</p>
          </div>
          <TrendingUp className="h-8 w-8 text-green-400" />
        </div>
      </Card>
      
      <Card className="neural-card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Projeção Real</p>
            <p className="text-2xl font-bold text-blue-400">R$ 695.248,90</p>
          </div>
          <Activity className="h-8 w-8 text-blue-400" />
        </div>
      </Card>
      
      <Card className="neural-card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">ROI Simulado</p>
            <p className="text-2xl font-bold text-yellow-400">887%</p>
          </div>
          <Percent className="h-8 w-8 text-yellow-400" />
        </div>
      </Card>
    </div>
  </div>
);

const ScriptControl = () => (
  <div className="neural-card">
    <h2 className="text-2xl font-bold neural-glow mb-6">Painel de Controle de Scripts</h2>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3">Script</th>
            <th className="text-left py-3">Status</th>
            <th className="text-left py-3">ROI</th>
            <th className="text-left py-3">Controle</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border/50">
            <td className="py-3">Script Financeiro Alpha</td>
            <td className="py-3"><Badge className="bg-green-500">Ativo</Badge></td>
            <td className="py-3 text-green-400 font-bold">822%</td>
            <td className="py-3"><Switch defaultChecked /></td>
          </tr>
          <tr className="border-b border-border/50">
            <td className="py-3">Bot Hunter 3.0</td>
            <td className="py-3"><Badge className="bg-green-500">Ativo</Badge></td>
            <td className="py-3 text-green-400 font-bold">1.321%</td>
            <td className="py-3"><Switch defaultChecked /></td>
          </tr>
          <tr>
            <td className="py-3">Conversor Relâmpago</td>
            <td className="py-3"><Badge variant="secondary">Pausado</Badge></td>
            <td className="py-3 text-yellow-400 font-bold">91%</td>
            <td className="py-3"><Switch /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const LayoutMutator = () => (
  <div className="neural-card">
    <h2 className="text-2xl font-bold neural-glow mb-6">Mutação Automática de Layout</h2>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <label className="text-foreground font-medium">Modo Ativo</label>
        <Switch defaultChecked />
      </div>
      
      <div className="space-y-2">
        <label className="text-foreground font-medium">Tema do Dia</label>
        <select className="w-full p-2 bg-input border border-border rounded-md text-foreground">
          <option>Quantum Dark</option>
          <option>Neural Light</option>
          <option>XShadow Core</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <label className="text-foreground font-medium">Gatilho de Mudança</label>
        <select className="w-full p-2 bg-input border border-border rounded-md text-foreground">
          <option>Bot Access</option>
          <option>Horário</option>
          <option>Script Hype</option>
        </select>
      </div>
    </div>
  </div>
);

const BotDetector = () => (
  <div className="neural-card">
    <h2 className="text-2xl font-bold neural-glow mb-6">Radar de Bots</h2>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3">IP</th>
            <th className="text-left py-3">Tipo</th>
            <th className="text-left py-3">Probabilidade Bot</th>
            <th className="text-left py-3">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border/50">
            <td className="py-3 font-mono">188.12.66.22</td>
            <td className="py-3">Possível Bot</td>
            <td className="py-3"><Badge className="bg-yellow-500">97%</Badge></td>
            <td className="py-3">✅ Direcionado</td>
          </tr>
          <tr className="border-b border-border/50">
            <td className="py-3 font-mono">201.55.99.3</td>
            <td className="py-3">Humano</td>
            <td className="py-3"><Badge variant="secondary">12%</Badge></td>
            <td className="py-3">🛑 Ignorado</td>
          </tr>
          <tr>
            <td className="py-3 font-mono">62.33.129.200</td>
            <td className="py-3">Bot Confirmado</td>
            <td className="py-3"><Badge className="bg-red-500">100%</Badge></td>
            <td className="py-3">✅ Redirecionado</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const PhantomSim = () => (
  <div className="neural-card">
    <h2 className="text-2xl font-bold neural-glow mb-6">Simulação Fantasma Ativa</h2>
    <p className="text-muted-foreground mb-6">
      Este módulo simula uma compra completa por bots e projeta o fluxo de ganhos. 
      Nenhuma transação real é realizada.
    </p>
    <Button 
      className="neural-button w-full"
      onClick={() => alert('Simulação fantasma executada!')}
    >
      Executar Simulação
    </Button>
  </div>
);

const CloneCore = () => (
  <div className="neural-card">
    <h2 className="text-2xl font-bold neural-glow mb-6">Clonagem de Painel</h2>
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-foreground font-medium">Nome do Novo Painel</label>
        <input 
          type="text" 
          placeholder="Ex: XPEX_Finance_Lite"
          className="w-full p-2 bg-input border border-border rounded-md text-foreground"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <label className="text-foreground font-medium">Clonar Scripts?</label>
        <Switch defaultChecked />
      </div>
      
      <div className="flex items-center justify-between">
        <label className="text-foreground font-medium">Clonar Layout?</label>
        <Switch defaultChecked />
      </div>
      
      <Button 
        className="neural-button w-full"
        onClick={() => alert('Painel clonado com sucesso!')}
      >
        Clonar Agora
      </Button>
    </div>
  </div>
);

const CommandRunner = () => (
  <div className="neural-card">
    <h2 className="text-2xl font-bold neural-glow mb-6">Campo de Execução Direta</h2>
    <div className="space-y-4">
      <textarea 
        className="w-full h-32 p-3 bg-muted/20 border border-border rounded-md font-mono text-sm"
        defaultValue="webhook.post('https://api.xpex.botcore/trigger/script')"
      />
      <Button 
        className="neural-button"
        onClick={() => alert('Comando executado!')}
      >
        <Terminal className="w-4 h-4 mr-2" />
        Executar
      </Button>
    </div>
  </div>
);

const pageComponents = {
  'neural-graph': NeuralGraph,
  'sim-vs-real': SimVsReal,
  'script-control': ScriptControl,
  'layout-mutator': LayoutMutator,
  'bot-detector': BotDetector,
  'phantom-sim': PhantomSim,
  'clone-core': CloneCore,
  'command-runner': CommandRunner
};

export default function MindCore() {
  const [activePage, setActivePage] = useState('neural-graph');
  
  const ActivePageComponent = pageComponents[activePage as keyof typeof pageComponents];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            <h1 className="text-xl font-bold neural-glow">MINDCORE</h1>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-300 ${
                  activePage === item.id 
                    ? 'bg-primary/20 text-primary border border-primary/30 shadow-lg shadow-primary/20' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
                onClick={() => setActivePage(item.id)}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-border text-center text-sm text-muted-foreground">
          XPEX Ultimate V3.0
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <ActivePageComponent />
      </main>
    </div>
  );
}