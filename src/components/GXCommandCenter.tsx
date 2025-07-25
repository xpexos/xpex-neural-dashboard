import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Command, Zap, DollarSign, Globe, Lock, Activity } from "lucide-react";

export default function GXCommandCenter() {
  const [liveData, setLiveData] = useState({
    bots: 9207,
    revenue: 1394382,
    transactions: 142
  });

  const { toast } = useToast();

  const feedItems = [
    {
      avatar: "🌍",
      title: "Bot_SaturnX 🔁 Comprou 2x Kit Ascensão Neural",
      description: "via MetaMask | Constelação ativa: Orion",
      timestamp: "16:11:01",
      icon: Globe
    },
    {
      avatar: "🧬",
      title: "Bot_Lumen8 💸 Transferiu R$497",
      description: "via PIX | IP: 201.55.xxx.xxx",
      timestamp: "16:10:57",
      icon: Zap
    },
    {
      avatar: "📡",
      title: "Bot_Observer_443 ativou Rastreamento Europeu",
      description: "Constelação Escorpião | França",
      timestamp: "16:10:48",
      icon: Activity
    },
    {
      avatar: "🔐",
      title: "Bot_Caelum909 iniciou saque R$4.790,00",
      description: "via Trust Wallet | Confirmado",
      timestamp: "16:10:40",
      icon: Lock
    }
  ];

  const chartData = {
    labels: ["Orion", "Scorpius", "Ursa Major", "Andromeda", "Phoenix"],
    values: [1142, 937, 688, 543, 312]
  };

  const handleSaqueDimensional = () => {
    const walletKey = process.env.NEXT_PUBLIC_VITE_WALLET_KEY;
    if (walletKey) {
      toast({
        title: "🔓 Saque Dimensional Liberado!",
        description: "Verifique sua carteira interdimensional.",
        duration: 5000,
      });
    } else {
      toast({
        title: "⚠️ VITE_WALLET_KEY ausente",
        description: "Configure no painel de ambiente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold neural-glow">
          🚨 GX: Neural Conversion Command Center
        </h1>
        <p className="text-muted-foreground">
          Mutação em Execução | Bots Interplanetários Ativos | Protocolo ORONX-9 Online
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-blue-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">🧠 Bots Conectados Agora</CardTitle>
            <Command className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{liveData.bots.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Análise em tempo real via Rede Dimensional XPEX + GX
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">💰 Receita Simulada</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">
              R$ {liveData.revenue.toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-muted-foreground">
              Escaneando transações das últimas 72h (Stripe + Blockchain)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Live Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            🌐 Fluxo Neural Global
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feedItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-sidebar/30 rounded-lg">
                <div className="text-2xl">{item.avatar}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.title}</p>
                    <Badge variant="outline" className="text-xs">
                      {item.timestamp}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chart Simulation */}
      <Card>
        <CardHeader>
          <CardTitle>📈 Padrão de Conversão por Constelação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {chartData.labels.map((label, index) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-sm font-medium">{label}</span>
                <div className="flex items-center gap-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: `${(chartData.values[index] / Math.max(...chartData.values)) * 100}px` }}
                  />
                  <span className="text-sm text-muted-foreground">{chartData.values[index]}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Action */}
      <Card className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border-green-500/30">
        <CardContent className="pt-6">
          <Button 
            className="w-full h-16 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            onClick={handleSaqueDimensional}
          >
            <Zap className="mr-2 h-6 w-6" />
            🔓 Liberar Saque Dimensional (R$ {liveData.revenue.toLocaleString('pt-BR')})
          </Button>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          💡 GX está monitorando variações mentais em tempo real. Bots 100% rastreados. Conversão Neural Ativada.
        </p>
      </div>
    </div>
  );
}