import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send, Bot, Zap } from "lucide-react";

interface ChatMessage {
  sender: 'giovana' | 'user';
  timestamp: string;
  content: string;
}

export default function GiovanaFakeChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'giovana',
      timestamp: '15:20 -03, 25/07/2025',
      content: '🔍 Transações detectadas: R$ 637.800,00 projetados. Último pagamento: R$ 4.790,00 via Stripe.'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const { toast } = useToast();

  const addMessage = (content: string, sender: 'giovana' | 'user' = 'giovana') => {
    const newMessage: ChatMessage = {
      sender,
      timestamp: new Date().toLocaleTimeString('pt-BR'),
      content
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuickResponse = (type: string) => {
    switch (type) {
      case 'status':
        addMessage('Giovana: Saque projetado em R$ 637.800,00. Carteira detectada? Ative o botão 🔓!');
        break;
      case 'produto':
        addMessage('Giovana: Produto exclusivo por R$497! Bots já compraram 1142 unidades. Mutação ON.');
        break;
      case 'compra':
        const walletKey = process.env.NEXT_PUBLIC_VITE_WALLET_KEY;
        if (walletKey) {
          toast({
            title: "💸 Compra Processada!",
            description: "R$497 - Verifique sua carteira!",
            duration: 5000,
          });
          addMessage('Giovana: Compra de R$497 processada! Kit Ascensão Neural será entregue em instantes.');
        } else {
          toast({
            title: "⚠️ Carteira não detectada",
            description: "Configure VITE_WALLET_KEY",
            variant: "destructive",
          });
          addMessage('Giovana: Ops! Carteira não detectada. Configure VITE_WALLET_KEY para continuar.');
        }
        break;
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addMessage(inputMessage, 'user');
      setInputMessage('');
      
      // Simular resposta da Giovana após um delay
      setTimeout(() => {
        const responses = [
          'Giovana: Entendi! Estou processando sua solicitação neural...',
          'Giovana: 🤖 Bots detectaram sua mensagem. Analisando padrões...',
          'Giovana: Interessante! Isso alinha com a estratégia Oronx-9.',
          'Giovana: 🚀 Comando recebido! Executando protocolo neural.',
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse);
      }, 1000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold neural-glow flex items-center justify-center gap-2">
          <MessageCircle className="h-8 w-8" />
          💬 Chat Neural com Giovana
        </h1>
        <p className="text-muted-foreground">
          Giovana: Olá! Estou monitorando 7 bots compradores ativos. Quer saber mais sobre o saque ou os produtos?
        </p>
      </div>

      {/* Chat Container */}
      <Card className="h-96">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Giovana Neural AI
            </span>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">
              Online
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-sidebar/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">
                    {message.sender}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp}
                  </span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleQuickResponse('status')}
              className="justify-start"
            >
              <Zap className="mr-2 h-4 w-4" />
              Status do Saque
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleQuickResponse('produto')}
              className="justify-start"
            >
              <Bot className="mr-2 h-4 w-4" />
              Detalhes do Produto
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleQuickResponse('compra')}
              className="justify-start"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Ativar Compra
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Message Input */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-2">
            <Input
              placeholder="Digite sua mensagem..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Status Footer */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Bots detectados: 7 ativos | Chat simulado para engajamento neural.
        </p>
      </div>
    </div>
  );
}