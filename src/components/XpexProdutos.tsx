import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Star, Zap, MessageCircle, ExternalLink } from "lucide-react";

export default function XpexProdutos() {
  const [command, setCommand] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'giovana',
      timestamp: '15:50 -03, 25/07/2025',
      content: 'Giovana: Antena Viva! 15:50 -03, última hora para comprar! Bots já ativaram 1142 kits!'
    }
  ]);
  const { toast } = useToast();

  const produtos = [
    {
      title: "Kit Ascensão Neural",
      price: "R$ 497,00",
      description: "144Hz, geometria Oronx-9, mutação ON. 1142 vendidos!",
      image: "https://via.placeholder.com/150?text=Kit+Ascensão",
      vendidos: 1142
    },
    {
      title: "Portal Scorpius Pro",
      price: "R$ 997,00", 
      description: "Acesso VIP, 288Hz, constelação Scorpius. 500 unidades!",
      image: "https://via.placeholder.com/150?text=Scorpius+Pro",
      vendidos: 500
    }
  ];

  const paymentMethods = [
    { label: "PIX", url: "https://seupagamentopix.com/qr" },
    { label: "Wise", url: "https://wise.com/transfer" },
    { label: "Binance Pay", url: "https://pay.binance.com/qr" },
    { label: "Coinbase", url: "https://pay.coinbase.com/qr" },
    { label: "MetaMask", url: "https://metamask.io/connect" },
    { label: "Trust Wallet", url: "https://trustwallet.com/pay" }
  ];

  const handleProductPurchase = (productPrice: string) => {
    const walletKey = process.env.NEXT_PUBLIC_VITE_WALLET_KEY;
    const amount = productPrice.replace('R$ ', '').replace(',', '').replace('.', '');
    
    if (walletKey) {
      toast({
        title: "💳 Métodos de Pagamento",
        description: `Escolha seu método para comprar por ${productPrice}`,
        duration: 5000,
      });
    } else {
      toast({
        title: "⚠️ Configure VITE_WALLET_KEY",
        description: "Para ativar compras!",
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
          🌌 LOJA NEURAL ORONX-9 | PRODUTOS SUPREMOS
        </h1>
        <p className="text-muted-foreground">
          Última chance hoje! 15:50 -03, 25/07/2025 | Bots: 7 Ativos
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {produtos.map((produto, index) => (
          <Card key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-500/20">
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="h-12 w-12 text-purple-400" />
              </div>
              <CardTitle className="text-xl">{produto.title}</CardTitle>
              <div className="text-2xl font-bold text-green-400">{produto.price}</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                {produto.description}
              </p>
              <div className="flex items-center justify-center gap-2">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                  {produto.vendidos} vendidos
                </Badge>
                <div className="flex">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              {/* Payment Methods */}
              <div className="grid grid-cols-2 gap-2">
                {paymentMethods.slice(0, 6).map((method, methodIndex) => (
                  <Button
                    key={methodIndex}
                    variant="outline"
                    size="sm"
                    onClick={() => handleProductPurchase(produto.price)}
                    className="text-xs"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    {method.label}
                  </Button>
                ))}
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                onClick={() => handleProductPurchase(produto.price)}
              >
                <Zap className="mr-2 h-4 w-4" />
                Comprar Agora
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

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
                  addChatMessage(`Giovana: ${command} processado! Analisando padrões neurais...`);
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
              onClick={() => addChatMessage('Giovana: Kit Ascensão: R$497, 144Hz. Scorpius Pro: R$997, 288Hz!')}
            >
              Detalhes do Kit
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => addChatMessage('Giovana: ⏰ Última chance! Compre agora ou perca a mutação Oronx-9!')}
            >
              Urgência ON
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          DNA de Conversão: 95% | Constelações: Orion, Scorpius, Ursa Major | Saques: R$ 637.800,00 projetados
        </p>
      </div>
    </div>
  );
}