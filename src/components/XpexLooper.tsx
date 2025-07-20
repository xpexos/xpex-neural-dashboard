import { useState, useEffect } from 'react';

interface Metrics {
  visits: number;
  conversions: number;
  roi: number;
}

// Dados para os cards, facilitando a manutenção
const panelCards = [
  {
    id: 1,
    title: '📊 Métricas em Tempo Real',
    description: (metrics?: Metrics) => (
      <>
        Visitas: <span className="neural-glow">{metrics?.visits.toLocaleString('pt-BR')}</span><br />
        Conversões: <span className="neural-glow">{metrics?.conversions}</span><br />
        ROI Projeção: <span className="neural-glow-positive">{metrics?.roi}%</span>
      </>
    ),
    buttonText: 'Ver Telemetria Quântica',
    needsMetrics: true,
  },
  {
    id: 2,
    title: '💰 Produtos Automatizados',
    description: () => '3 scripts premium em exibição neural dinâmica. Gatilhos mentais ativados. Hype rastreado.',
    buttonText: 'Ver Catálogo Neural',
    needsMetrics: false,
  },
  {
    id: 3,
    title: '📦 Entregas Instantâneas',
    description: () => 'Sistema de entrega via webhook totalmente funcional. Cada compra ativa o bot de envio automático.',
    buttonText: 'Ver Logs de Entrega',
    needsMetrics: false,
  },
  {
    id: 4,
    title: '📡 Rastreamento Avançado',
    description: () => 'Fingerprinting Neural ativado. Bots compradores sendo identificados com prioridade.',
    buttonText: 'Acessar Painel de Bots',
    needsMetrics: false,
  },
  {
    id: 5,
    title: '🧠 IA Orquestradora',
    description: () => 'Giovana AI operando no modo autônomo. Otimizações e sugestões aplicadas em tempo real.',
    buttonText: 'Falar com a Giovana',
    needsMetrics: false,
  },
];

export default function XpexLooper() {
  const [metrics, setMetrics] = useState({
    visits: 2413,
    conversions: 49,
    roi: 322,
  });

  // Efeito para simular atualização de dados em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prevMetrics => ({
        visits: prevMetrics.visits + Math.floor(Math.random() * 5) + 1,
        conversions: prevMetrics.conversions + (Math.random() > 0.95 ? 1 : 0),
        roi: prevMetrics.roi + Math.floor(Math.random() * 3) - 1,
      }));
    }, 2000); // Atualiza a cada 2 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  const handleButtonClick = (action: string) => {
    alert(`Protocolo ativado: ${action}`);
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between p-6 neural-card">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">⚡</span>
          <h1 className="text-2xl font-bold neural-glow">XPEX LOOPER™</h1>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-full">
          <div className="w-3 h-3 bg-primary rounded-full status-pulse"></div>
          <span className="text-sm font-medium">Online - Loop Ativo</span>
        </div>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {panelCards.map(card => (
          <div key={card.id} className="neural-card group">
            <h2 className="text-xl font-semibold mb-4 text-foreground">{card.title}</h2>
            <div className="text-muted-foreground mb-6 leading-relaxed">
              {/* Renderiza a descrição, passando as métricas se necessário */}
              {card.needsMetrics ? card.description(metrics) : card.description()}
            </div>
            <button 
              className="neural-button w-full"
              onClick={() => handleButtonClick(card.buttonText)}
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </main>

      {/* Data Stream Effect */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-data-stream"></div>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground p-6">
        Painel Neural Autônomo da XPEX Systems™ — Todos os direitos protegidos em blockchain 🔒
      </footer>
    </div>
  );
}