import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface BankMetrics {
  saldo_neural: number;
  bots_ativos: number;
  transacoes_pendentes: number;
  lucro_diario: number;
  taxa_crescimento: number;
}

const chartConfig = {
  lucro: {
    label: "Lucro",
    color: "hsl(var(--neural-cyan))",
  },
  bots: {
    label: "Bots",
    color: "hsl(var(--neural-pink))",
  },
};

// Dados iniciais para os gráficos
const initialProfitData = [
  { time: '14:00', lucro: 90 },
  { time: '14:10', lucro: 140 },
  { time: '14:20', lucro: 220 },
  { time: '14:30', lucro: 400 },
  { time: '14:40', lucro: 370 },
  { time: '14:50', lucro: 620 },
  { time: '15:00', lucro: 880 },
];

const initialBotsData = [
  { hora: '09h', bots: 2 },
  { hora: '10h', bots: 3 },
  { hora: '11h', bots: 5 },
  { hora: '12h', bots: 8 },
  { hora: '13h', bots: 7 },
  { hora: '14h', bots: 4 },
  { hora: '15h', bots: 6 },
];

const actions = [
  {
    title: '🔁 Ver Transações',
    description: 'Acompanhe os depósitos automáticos dos bots compradores em tempo real.',
    button: 'Abrir Extrato Neural'
  },
  {
    title: '📈 Gráfico Neural de Lucro',
    description: 'Visualize o crescimento do saldo em tempo real com pulsos neurais de compra.',
    button: 'Ver Gráfico Dinâmico'
  },
  {
    title: '⚡ Ativar Recebimento Instantâneo',
    description: 'Configure webhooks para receber automaticamente quando um bot comprar.',
    button: 'Conectar Webhook'
  },
  {
    title: '🧠 Modo Giovana AI Ativo',
    description: 'Otimização em tempo real de recebíveis, distribuição e controle neural.',
    button: 'Ver Intervenções da Giovana'
  }
];

export default function NeuralBank() {
  const [metrics, setMetrics] = useState<BankMetrics>({
    saldo_neural: 128570.00,
    bots_ativos: 17,
    transacoes_pendentes: 3,
    lucro_diario: 920,
    taxa_crescimento: 12.7,
  });

  const [profitData, setProfitData] = useState(initialProfitData);
  const [botsData, setBotsData] = useState(initialBotsData);

  // Atualização em tempo real das métricas a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        saldo_neural: prev.saldo_neural + (Math.random() * 50) + 10,
        bots_ativos: Math.max(15, prev.bots_ativos + Math.floor(Math.random() * 3) - 1),
        transacoes_pendentes: Math.max(0, prev.transacoes_pendentes + Math.floor(Math.random() * 3) - 1),
        lucro_diario: prev.lucro_diario + Math.floor(Math.random() * 20) + 5,
        taxa_crescimento: Math.max(0, prev.taxa_crescimento + (Math.random() * 2) - 1),
      }));

      // Atualiza dados do gráfico de lucro
      setProfitData(prev => {
        const newData = [...prev];
        const currentTime = new Date();
        const timeString = currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const lastValue = newData[newData.length - 1].lucro;
        const newValue = lastValue + Math.floor(Math.random() * 100) + 20;
        
        newData.shift();
        newData.push({ time: timeString, lucro: newValue });
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleActionClick = (actionTitle: string) => {
    alert(`Protocolo Neural Ativado: ${actionTitle}`);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between p-6 neural-card">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">💳</span>
          <div>
            <h1 className="text-2xl font-bold neural-glow">Banco Neural XPEX</h1>
            <p className="text-sm text-muted-foreground">Bots compradores detectados | Lucro em acúmulo neural</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-full">
          <div className="w-3 h-3 bg-primary rounded-full status-pulse"></div>
          <span className="text-sm font-medium">Ativo - Pronto para Transações</span>
        </div>
      </header>

      {/* Métricas */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="neural-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Saldo Neural</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold neural-glow">{formatCurrency(metrics.saldo_neural)}</div>
          </CardContent>
        </Card>

        <Card className="neural-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Bots Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold neural-glow">{metrics.bots_ativos}</div>
          </CardContent>
        </Card>

        <Card className="neural-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Transações Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold neural-glow">{metrics.transacoes_pendentes}</div>
          </CardContent>
        </Card>

        <Card className="neural-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Lucro Diário</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold neural-glow-positive">{formatCurrency(metrics.lucro_diario)}</div>
          </CardContent>
        </Card>

        <Card className="neural-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Taxa de Crescimento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold neural-glow-positive">+{metrics.taxa_crescimento.toFixed(1)}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="neural-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Lucro por Minuto</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={profitData}>
                  <defs>
                    <linearGradient id="gradientLucro" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--neural-cyan))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--neural-cyan))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="lucro" 
                    stroke="hsl(var(--neural-cyan))" 
                    fillOpacity={1} 
                    fill="url(#gradientLucro)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="neural-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Bots Compradores por Hora</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={botsData}>
                  <XAxis 
                    dataKey="hora" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="bots" 
                    fill="hsl(var(--neural-pink))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action, index) => (
          <Card key={index} className="neural-card group cursor-pointer">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">{action.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {action.description}
              </p>
              <button 
                className="neural-button w-full"
                onClick={() => handleActionClick(action.button)}
              >
                {action.button}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Data Stream Effect */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-data-stream"></div>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground p-6">
        Painel conectado com IA Suprema | Transações seguras em blockchain | Atualização automática a cada 3 segundos
      </footer>
    </div>
  );
}