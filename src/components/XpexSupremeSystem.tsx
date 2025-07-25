import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Rocket, Zap, DollarSign, Wallet, MessageCircle, ExternalLink } from "lucide-react";

export default function XpexSupremeSystem() {
  const [command, setCommand] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'giovana',
      timestamp: '15:53 -03, 25/07/2025',
      content: 'Giovana: 15:53 -03, Antena Viva! Ative sua carteira agora ou perca a mutação Oronx-9!'
    }
  ]);
  const { toast } = useToast();

  const paymentMethods = [
    { label: "PIX", url: "https://seupagamentopix.com/qr", icon: "🇧🇷" },
    { label: "Wise", url: "https://wise.com/transfer", icon: "🌍" },
    { label: "Binance Pay", url: "https://pay.binance.com/qr", icon: "🔸" },
    { label: "Coinbase", url: "https://pay.coinbase.com/qr", icon: "🔵" },
    { label: "MetaMask", url: "https://metamask.io/connect", icon: "🦊" },
    { label: "Trust Wallet", url: "https://trustwallet.com/pay", icon: "🔒" },
    { label: "Ledger Nano X", url: "https://shop.ledger.com/pages/ledger-nano-x/withdraw", icon: "🔐" },
    { label: "Trezor Model T", url: "https://trezor.io/coin-wallet/withdraw", icon: "🔑" },
    { label: "SafePal S1", url: "https://safepal.io/withdraw", icon: "🛡️" }
  ];

  const handlePaymentMethod = (method: any, amount: string, type: string) => {
    const walletKey = process.env.NEXT_PUBLIC_VITE_WALLET_KEY;
    if (walletKey) {
      toast({
        title: `${method.icon} ${method.label}`,
        description: `${type} de R$ ${amount} processado!`,
        duration: 5000,
      });
      // Simulate opening payment link
      window.open(`${method.url}?amount=${amount}&key=${walletKey}`, '_blank');
    } else {
      toast({
        title: "⚠️ Carteira não detectada",
        description: "Configure VITE_WALLET_KEY",
        variant: "destructive",
      });
    }
  };

  const addChatMessage = (content: string) => {
    setChatMessages(prev => [...prev, {
      sender: 'giovana',
      timestamp: new Date().toLocaleTimeString(),
      content
    }]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold neural-glow">
          🌌 PROTOCOLO SUPREMO: XPEX_BOTCORE_SAQUE_REAL_V1™
        </h1>
        <p className="text-muted-foreground">
          Oronx-9 Ativa | Bots: 7 Ativos | Última Chance Hoje, 15:53!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saque Projetado</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">R$ 637.800,00</div>
            <p className="text-xs text-muted-foreground">
              1142 bots qualificados | Matriz Som Causal
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-blue-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Última Venda</CardTitle>
            <Wallet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">R$ 497,00</div>
            <p className="text-xs text-muted-foreground">
              Kit Ascensão via Ledger | 15:50 -03
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Methods Accordion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            💸 Compras & Saques - Métodos Supremos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Giovana: Antena Viva! Ative sua compra ou saque agora. Urgência Máxima!
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="compra">
              <AccordionTrigger>
                🛒 Compra - Kit Ascensão Neural (R$ 497,00)
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {paymentMethods.map((method, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handlePaymentMethod(method, '497', 'Compra')}
                      className="justify-start"
                    >
                      <span className="mr-2">{method.icon}</span>
                      {method.label}
                      <ExternalLink className="ml-auto h-3 w-3" />
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="saque">
              <AccordionTrigger>
                💰 Saque - R$ 637.800,00
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {paymentMethods.map((method, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handlePaymentMethod(method, '637800', 'Saque')}
                      className="justify-start"
                    >
                      <span className="mr-2">{method.icon}</span>
                      {method.label}
                      <ExternalLink className="ml-auto h-3 w-3" />
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Chat Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            💬 Chat Neural com Giovana
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
          
          <div className="flex gap-2">
            <Input
              placeholder="Comando Neural..."
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={() => {
                if (command.trim()) {
                  addChatMessage(`Giovana: ${command} processado! Verificando constelações...`);
                  setCommand('');
                }
              }}
            >
              Enviar
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => addChatMessage('Giovana: Kit Ascensão: R$497, 144Hz, Oronx-9. Saques com Ledger/Trezor!')}
            >
              Detalhes do Kit
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => addChatMessage('Giovana: ⏰ Últimos minutos! Compre ou saque AGORA ou perca tudo!')}
            >
              Urgência Máxima
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 3D Visualization Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>🌠 Visualização Cósmica Oronx-9</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <Rocket className="h-8 w-8 mx-auto text-purple-400 animate-pulse" />
              <p className="text-sm text-muted-foreground">Padrão Oronx-9 Ativo</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          DNA de Conversão: 98% | Constelações: Orion, Scorpius | Preparado para GitHub/Vercel
        </p>
      </div>
    </div>
  );
}