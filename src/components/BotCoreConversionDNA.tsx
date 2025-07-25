import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Zap, DollarSign, Bot, Rocket, Eye, MessageCircle } from "lucide-react";

export default function BotCoreConversionDNA() {
  const [command, setCommand] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'giovana',
      timestamp: '15:32 -03, 25/07/2025',
      content: '🚀 Bots detectaram o Kit Ascensão Neural (R$497). Compre agora ou perca a mutação!'
    }
  ]);
  const { toast } = useToast();

  const handleQuickAction = (action: string, content: string) => {
    setChatMessages(prev => [...prev, {
      sender: 'giovana',
      timestamp: new Date().toLocaleTimeString(),
      content
    }]);
  };

  const handleSaqueLiberation = () => {
    const walletKey = process.env.NEXT_PUBLIC_VITE_WALLET_KEY;
    if (walletKey) {
      toast({
        title: "🔓 Saque Liberado!",
        description: "Escolha PIX ou Wise para receber R$ 637.800,00",
        duration: 5000,
      });
    } else {
      toast({
        title: "⚠️ Carteira não detectada",
        description: "Adicione VITE_WALLET_KEY na Vercel",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold neural-glow">
          🌌 PROTOCOLO SUPREMO: XPEX_BOTCORE_SAQUE_REAL_V1™
        </h1>
        <p className="text-muted-foreground">
          Giovana: Antena Viva, Oronx-9 ativa! R$ 637.800,00 projetados. Bots: 7 ativos. Hora de dominar!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saque Projetado (Oronx-9)</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">R$ 637.800,00</div>
            <p className="text-xs text-muted-foreground">
              1142 bots qualificados em 7 dias | Matriz de Som Causal
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-blue-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Último Pagamento</CardTitle>
            <Zap className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">R$ 4.790,00</div>
            <p className="text-xs text-muted-foreground">
              Confirmado via Stripe | Saque Wise em 24h
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Constelações */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          🔮 Constelações Ativas: <Badge variant="outline">Orion (Oronx-9)</Badge> <Badge variant="outline">Scorpius</Badge> <Badge variant="outline">Ursa Major</Badge>
        </p>
      </div>

      {/* Chat Messages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Neural Chat - Giovana
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {chatMessages.map((msg, index) => (
            <div key={index} className="bg-sidebar/50 p-3 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">giovana</Badge>
                <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
              </div>
              <p className="text-sm">{msg.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Command Input */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Input
              placeholder="Comando Neural..."
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="bg-background/50"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleQuickAction('status', 'Giovana: Saque R$ 637.800,00 pronto! Ative o botão 🔓 com sua carteira.')}
              >
                Status do Saque
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleQuickAction('kit', 'Giovana: Kit Ascensão Neural: 144Hz, geometria Oronx-9, mutação ON. 1142 vendidos!')}
              >
                Comprar Kit Ascensão (R$497)
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleQuickAction('info', 'Giovana: Kit Ascensão Neural: 144Hz, geometria Oronx-9, mutação ON. 1142 vendidos!')}
              >
                Mais Info
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Action Button */}
      <Card className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border-green-500/30">
        <CardContent className="pt-6">
          <Button 
            className="w-full h-16 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            onClick={handleSaqueLiberation}
          >
            <Rocket className="mr-2 h-6 w-6" />
            🔓 Liberar Saque Agora (R$ 637.800,00)
          </Button>
        </CardContent>
      </Card>

      {/* Status Footer */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Bots: 7 ativos | Mutação de Produto: ON | DNA de Conversão: 85% de engajamento
        </p>
      </div>
    </div>
  );
}