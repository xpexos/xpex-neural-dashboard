import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export default function VX777WalletCore() {
  const [walletName, setWalletName] = useState('');
  const [walletId, setWalletId] = useState('');
  const [amount, setAmount] = useState('');
  const [destination, setDestination] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCreateWallet = async () => {
    if (!walletName.trim()) {
      toast({
        title: "❌ Erro",
        description: "Nome da carteira é obrigatório",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/v2/bank/wallets/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_XPEX_TOKEN}`
        },
        body: JSON.stringify({ name: walletName })
      });

      const result = await response.json();
      
      if (response.ok) {
        toast({
          title: "✅ Sucesso",
          description: "Carteira criada com sucesso!",
          variant: "default"
        });
        setWalletName('');
      } else {
        throw new Error(result.message || 'Erro ao criar carteira');
      }
    } catch (error) {
      toast({
        title: "❌ Erro",
        description: error instanceof Error ? error.message : "Erro ao criar carteira",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWithdraw = async () => {
    if (!walletId.trim() || !amount || !destination.trim()) {
      toast({
        title: "❌ Erro",
        description: "Todos os campos são obrigatórios",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/v2/bank/wallets/${walletId}/withdraw`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_XPEX_TOKEN}`
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          destination,
          signature: 'neural_sig_v4'
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        toast({
          title: "✅ Sucesso",
          description: "Saque realizado com sucesso",
          variant: "default"
        });
        setWalletId('');
        setAmount('');
        setDestination('');
      } else {
        throw new Error(result.message || 'Erro no saque');
      }
    } catch (error) {
      toast({
        title: "❌ Erro",
        description: error instanceof Error ? error.message : "Erro no saque",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary">VX.777 WALLET CORE</h1>
          <p className="text-muted-foreground">Controle neural supremo das carteiras financeiras</p>
          <Badge variant="outline" className="text-green-400 border-green-400">
            NÚCLEO ATIVO
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Criar Nova Carteira */}
          <Card className="neural-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🧬 Criar Nova Carteira Neural
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="walletName">Nome da Carteira</Label>
                <Input
                  id="walletName"
                  placeholder="Ex: Projeto Base Favela"
                  value={walletName}
                  onChange={(e) => setWalletName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Button
                onClick={handleCreateWallet}
                disabled={isLoading}
                className="w-full neural-button"
              >
                {isLoading ? 'Criando...' : 'Criar Carteira'}
              </Button>
            </CardContent>
          </Card>

          {/* Realizar Saque */}
          <Card className="neural-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💸 Realizar Saque Programado
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="walletId">ID da Carteira</Label>
                <Input
                  id="walletId"
                  placeholder="Ex: wx_16988281723"
                  value={walletId}
                  onChange={(e) => setWalletId(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Valor do Saque</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Ex: 250"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Endereço de Destino</Label>
                <Input
                  id="destination"
                  placeholder="0x... ou dados bancários"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Button
                onClick={handleWithdraw}
                disabled={isLoading}
                className="w-full neural-button"
              >
                {isLoading ? 'Processando...' : 'Sacar da Carteira'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Status Section */}
        <Card className="neural-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📜 Histórico & Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border">
                <p className="text-sm font-mono text-muted-foreground">
                  VX.777 em operação local. Nenhuma lógica de doação ativa.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Sistema pronto para criação e gestão de carteiras neurais
                </p>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-card rounded-lg">
                  <p className="text-2xl font-bold text-primary">0</p>
                  <p className="text-sm text-muted-foreground">Carteiras Ativas</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <p className="text-2xl font-bold text-primary">$0.00</p>
                  <p className="text-sm text-muted-foreground">Volume Total</p>
                </div>
                <div className="p-4 bg-card rounded-lg">
                  <p className="text-2xl font-bold text-primary">0</p>
                  <p className="text-sm text-muted-foreground">Transações</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
          <p>VX.777 WALLET CORE // CONTROLE NEURAL DE CARTEIRAS FINANCEIRAS</p>
          <p className="mt-1">Versão base para comunidades • Sistema autônomo de gestão ética</p>
        </div>
      </div>
    </div>
  );
}