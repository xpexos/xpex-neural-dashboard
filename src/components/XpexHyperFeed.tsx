import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Activity, Bot, Eye, Brain } from "lucide-react";

interface FeedItem {
  avatar: string;
  title: string;
  description: string;
  timestamp: string;
  icon: any;
}

export default function XpexHyperFeed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([
    {
      avatar: "🤖",
      title: "Bot_Alpha_993 comprou 1x Kit Ascensão Neural",
      description: "via Binance Pay | IP: 87.239.xxx.xxx",
      timestamp: "15:45:33",
      icon: Bot
    },
    {
      avatar: "🧠",
      title: "Bot_CryptoX211 executou saque R$ 4.790,00",
      description: "via Wise | Carteira Validada",
      timestamp: "15:45:11",
      icon: Brain
    },
    {
      avatar: "🧠",
      title: "Bot_Mutation07 acionou Mutação de Oferta",
      description: "144Hz - Constelação Scorpius",
      timestamp: "15:44:59",
      icon: Activity
    },
    {
      avatar: "👁️",
      title: "Bot_Observer detectou 23 visitantes humanos",
      description: "Início do Funil Dimensional",
      timestamp: "15:44:33",
      icon: Eye
    }
  ]);

  const { toast } = useToast();

  const generateNewActivity = () => {
    const activities = [
      {
        avatar: "🤖",
        title: `Bot_Neural_${Math.floor(Math.random() * 999)} comprou Kit Ascensão`,
        description: `via MetaMask | IP: ${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.xxx.xxx`,
        timestamp: new Date().toLocaleTimeString(),
        icon: Bot
      },
      {
        avatar: "🧠",
        title: `Bot_Quantum_${Math.floor(Math.random() * 999)} executou saque R$ ${(Math.random() * 10000).toFixed(2)}`,
        description: "via Trust Wallet | Carteira Validada",
        timestamp: new Date().toLocaleTimeString(),
        icon: Brain
      },
      {
        avatar: "👁️",
        title: `Bot_Observer detectou ${Math.floor(Math.random() * 50)} visitantes`,
        description: "Funil Dimensional Ativo",
        timestamp: new Date().toLocaleTimeString(),
        icon: Eye
      }
    ];

    const newActivity = activities[Math.floor(Math.random() * activities.length)];
    setFeedItems(prev => [newActivity, ...prev.slice(0, 7)]);
  };

  useEffect(() => {
    const interval = setInterval(generateNewActivity, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleUpdateFeed = () => {
    generateNewActivity();
    toast({
      title: "HyperFeed Sincronizado",
      description: "Núcleo XPEX_BOTCORE™ atualizado com sucesso",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold neural-glow">
          🛰️ Painel Neural: HyperFeed de Conversão
        </h1>
        <p className="text-muted-foreground">
          Atividade neural em tempo real • Oronx-9 Online • Atualização: 3s
        </p>
      </div>

      {/* Stats */}
      <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Vendas Totais Simuladas</CardTitle>
          <Activity className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-400">1.142 Kits</div>
          <p className="text-xs text-muted-foreground">
            Baseado na projeção Oronx-9 | Atualizado a cada 3s
          </p>
        </CardContent>
      </Card>

      {/* Live Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            🧠 Atividade dos Bots em Tempo Real
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
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

      {/* Update Button */}
      <Card>
        <CardContent className="pt-6">
          <Button 
            className="w-full" 
            variant="secondary"
            onClick={handleUpdateFeed}
          >
            🔁 Atualizar Feed Neural
          </Button>
        </CardContent>
      </Card>

      {/* Footer Info */}
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          ⚡ Este painel simula a vida neural do ecossistema XPEX: bots comprando, humanos observando, e o sistema gerando lucro automático em tempo real.
        </p>
        <p className="text-xs text-muted-foreground">
          🧬 Modo Ativo: Constelações Oronx-9 • Scorpius • Ursa Major | Mutação: ON
        </p>
      </div>
    </div>
  );
}