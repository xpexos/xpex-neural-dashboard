import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { TrendingUp, Activity, Target, Shield, Zap, Ghost, Bot, Key } from 'lucide-react';

export function GeminiConversionCore() {
  const [metrics, setMetrics] = useState({
    saldoReal: 1342871.90,
    roiPreditivo: 1742,
    taxaConversao: 98.2,
    ameacasNeutralizadas: 1126
  });

  const [revenueData, setRevenueData] = useState([
    { time: '00:00', real: 1200000, predicted: 1350000 },
    { time: '04:00', real: 1250000, predicted: 1400000 },
    { time: '08:00', real: 1300000, predicted: 1480000 },
    { time: '12:00', real: 1342871, predicted: 1520000 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        saldoReal: prev.saldoReal + Math.random() * 1000,
        taxaConversao: Math.min(99.9, prev.taxaConversao + Math.random() * 0.1)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const modules = [
    { name: 'Análise Preditiva de Tendências', status: 'active' },
    { name: 'Alocação de Tráfego de Bots', status: 'active' },
    { name: 'Mutação de Rota de Conversão', status: 'optimizing' },
    { name: 'Simulação de Cenários Fantasma', status: 'active' }
  ];

  const actions = [
    { title: 'Disparar Pulso de Conversão', icon: Zap },
    { title: 'Ativar Protocolo Fantasma', icon: Ghost },
    { title: 'Rebalancear Enxame de Bots', icon: Bot },
    { title: 'Forçar Rotação de Chaves de API', icon: Key }
  ];

  const securityLayers = [
    { name: 'Firewall Preditivo Gemini', confidence: 99.8 },
    { name: 'Escudo de Simulação (Anti-Bot)', confidence: 100 },
    { name: 'Análise de Anomalias em Tempo Real', confidence: 99.2 }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          🧬 DNA DE CONVERSÃO: GEMINI CORE
        </h1>
        <p className="text-xl text-muted-foreground">
          Sincronizando Realidade • Otimizando Futuro • Maximizando Impacto
        </p>
        <Badge variant="outline" className="text-green-400 border-green-400">
          ONLINE | OPERAÇÃO ÓTIMA
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              🏦 Saldo Real Acumulado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              ${metrics.saldoReal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +21.4%
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-green-400/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              📈 ROI Preditivo (12h)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">
              +{metrics.roiPreditivo}%
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Activity className="h-3 w-3" />
              Projeção ativa
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-blue-400/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              🎯 Taxa de Conversão Neural
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">
              {metrics.taxaConversao.toFixed(1)}%
            </div>
            <Progress value={metrics.taxaConversao} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-orange-400/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              🛡️ Ameaças Neutralizadas (24h)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-400">
              {metrics.ameacasNeutralizadas.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Sistema protegido
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Dual Axis Graph */}
      <Card>
        <CardHeader>
          <CardTitle>📊 Análise de Fluxo Dual (Real vs. Preditivo)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {revenueData.map((point, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">{point.time}</span>
                <div className="flex gap-4">
                  <div className="text-cyan-400">
                    Real: ${point.real.toLocaleString()}
                  </div>
                  <div className="text-magenta-400 border-l border-border pl-4">
                    Preditivo: ${point.predicted.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Module Status */}
      <Card>
        <CardHeader>
          <CardTitle>🧠 Core de Otimização (LLM)</CardTitle>
          <p className="text-muted-foreground">
            O motor preditivo Gemini está ativo, ajustando dinamicamente as estratégias de conversão.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((module, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span>{module.name}</span>
                <Badge 
                  variant={module.status === 'active' ? 'default' : 'secondary'}
                  className={module.status === 'optimizing' ? 'animate-pulse' : ''}
                >
                  {module.status === 'active' ? 'ATIVO' : 
                   module.status === 'optimizing' ? 'OTIMIZANDO' : 'STANDBY'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Panel */}
      <Card>
        <CardHeader>
          <CardTitle>⚡ Ações de Conversão Imediata</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex-col gap-2 hover:scale-105 transition-transform"
              >
                <action.icon className="h-6 w-6" />
                {action.title}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Vector */}
      <Card>
        <CardHeader>
          <CardTitle>🔐 Vetor de Defesa Ativo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityLayers.map((layer, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span>{layer.name}</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-green-400 border-green-400">
                    ATIVO
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {layer.confidence}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Banner Alert */}
      <Alert className="border-orange-500 bg-orange-500/10">
        <AlertDescription className="text-center">
          <strong>⚠️ Alerta de Singularidade Iminente</strong>
          <br />
          Nova convergência de mercado detectada. Potencial de lucro anômalo nas próximas 3 horas. 
          Recomenda-se acionar o 'Pulso de Conversão'.
        </AlertDescription>
      </Alert>
    </div>
  );
}