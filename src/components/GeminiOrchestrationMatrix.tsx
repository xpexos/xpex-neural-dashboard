import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCcw, Target, TestTube, Dna, ArrowRight } from 'lucide-react';

export function GeminiOrchestrationMatrix() {
  const [logs, setLogs] = useState([
    { timestamp: '2025-07-21T07:10:00Z', event: 'Pulso de Conversão Disparado', source: 'Conversion Core' },
    { timestamp: '2025-07-21T06:42:12Z', event: 'Enxame de Bots Rebalanceado', source: 'Swarm Controller' },
    { timestamp: '2025-07-21T06:12:03Z', event: 'Protocolo Fantasma Ativado', source: 'Phantom Ops' }
  ]);

  const nodes = [
    { id: 'core', label: 'Gemini Core', type: 'main', x: 50, y: 50 },
    { id: 'phantom', label: 'Phantom Protocol', type: 'protocol', x: 20, y: 80 },
    { id: 'pulse', label: 'Pulso Neural', type: 'action', x: 80, y: 30 },
    { id: 'firewall', label: 'Firewall Preditivo', type: 'security', x: 80, y: 80 },
    { id: 'swarm', label: 'Enxame de Bots', type: 'ai_cluster', x: 20, y: 20 }
  ];

  const edges = [
    { from: 'core', to: 'phantom' },
    { from: 'core', to: 'pulse' },
    { from: 'core', to: 'firewall' },
    { from: 'core', to: 'swarm' },
    { from: 'pulse', to: 'swarm' }
  ];

  const controls = [
    { label: 'Resetar Rede Neural', icon: RefreshCcw },
    { label: 'Reforçar Enxame de Bots', icon: Target },
    { label: 'Isolar Variável Crítica', icon: TestTube },
    { label: 'Desbloquear Anomalias', icon: Dna }
  ];

  const links = [
    { label: 'Gemini Conversion Core', url: '/conversion_core', icon: '🧩' },
    { label: 'Painel de Segurança Ativa', url: '/conversion_core#security_vector', icon: '🛡️' },
    { label: 'Disparar Ações de Conversão', url: '/conversion_core#action_panel', icon: '🚀' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        timestamp: new Date().toISOString(),
        event: 'Sistema Neural Sincronizado',
        source: 'Matrix Controller'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 4)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'main': return 'bg-primary';
      case 'protocol': return 'bg-purple-500';
      case 'action': return 'bg-green-500';
      case 'security': return 'bg-orange-500';
      case 'ai_cluster': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          🧠 MATRIZ DE ORQUESTRAÇÃO GEMINI
        </h1>
        <p className="text-xl text-muted-foreground">
          Comando Central Neural • Controle Dinâmico de Bots e Tráfego
        </p>
        <Badge variant="outline" className="text-green-400 border-green-400">
          ONLINE | FULL SYNC COM CONVERSION_CORE
        </Badge>
      </div>

      {/* Network Graph */}
      <Card>
        <CardHeader>
          <CardTitle>🕸️ Rede Neural Ativa de Bots</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-96 bg-muted/20 rounded-lg p-8 overflow-hidden">
            {/* Draw connections */}
            <svg className="absolute inset-0 w-full h-full">
              {edges.map((edge, index) => {
                const fromNode = nodes.find(n => n.id === edge.from);
                const toNode = nodes.find(n => n.id === edge.to);
                if (!fromNode || !toNode) return null;
                
                return (
                  <line
                    key={index}
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                );
              })}
            </svg>
            
            {/* Draw nodes */}
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${getNodeColor(node.type)} 
                           text-white rounded-full w-20 h-20 flex items-center justify-center text-xs font-bold
                           animate-pulse hover:scale-110 transition-transform cursor-pointer`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                {node.label}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* History Log */}
      <Card>
        <CardHeader>
          <CardTitle>⏱️ Registro de Execuções Estratégicas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {logs.map((log, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <div className="font-medium">{log.event}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(log.timestamp).toLocaleString('pt-BR')}
                  </div>
                </div>
                <Badge variant="outline">
                  {log.source}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Orchestrator Controls */}
      <Card>
        <CardHeader>
          <CardTitle>🎛️ Controles Rápidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {controls.map((control, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-16 flex-col gap-2 hover:scale-105 transition-transform"
              >
                <control.icon className="h-5 w-5" />
                {control.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Integration Links */}
      <Card>
        <CardHeader>
          <CardTitle>🔗 Integração com Conversion Core</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {links.map((link, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}