import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Key, Zap, Shield, CheckCircle, AlertCircle, Rocket } from "lucide-react";

export default function MasterUnlocker() {
  const [protocolActive, setProtocolActive] = useState(false);
  const { toast } = useToast();

  const walletKey = process.env.NEXT_PUBLIC_VITE_WALLET_KEY;
  const isWalletConnected = !!walletKey;

  const activateProtocol = () => {
    setProtocolActive(true);
    toast({
      title: "🔥 Protocolo Neural Ativado!",
      description: "Prepare-se para dominar o mercado.",
      duration: 5000,
    });
    
    // Auto-deactivate after 3 seconds for demo
    setTimeout(() => {
      setProtocolActive(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold neural-glow flex items-center justify-center gap-3">
          <Key className="h-10 w-10 text-primary" />
          🗝️ XPEX Master Unlocker
        </h1>
        <p className="text-muted-foreground text-lg">
          Status da Integração Neural
        </p>
      </div>

      {/* Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className={`border-2 transition-all duration-300 ${
          isWalletConnected 
            ? 'bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/50' 
            : 'bg-gradient-to-br from-red-500/10 to-orange-600/10 border-red-500/50'
        }`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carteira Conectada</CardTitle>
            {isWalletConnected ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${isWalletConnected ? 'text-green-400' : 'text-red-400'}`}>
              {isWalletConnected ? 'CONECTADA' : 'NÃO DETECTADA'}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {isWalletConnected 
                ? 'Chave VITE_WALLET_KEY detectada e ativa'
                : 'Configure VITE_WALLET_KEY na Vercel'
              }
            </p>
            {isWalletConnected && (
              <Badge variant="secondary" className="mt-2 bg-green-500/20 text-green-400">
                {walletKey.substring(0, 20)}...
              </Badge>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-blue-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status do Ambiente</CardTitle>
            <Shield className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">Online</div>
            <p className="text-xs text-muted-foreground">
              Ambiente de execução ativo e monitorado.
            </p>
            <Badge variant="secondary" className="mt-2 bg-blue-500/20 text-blue-400">
              Sistema Operacional
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Protocol Activation */}
      <Card className={`transition-all duration-500 ${
        protocolActive 
          ? 'bg-gradient-to-r from-purple-500/20 to-pink-600/20 border-purple-500/50 shadow-lg shadow-purple-500/25' 
          : 'bg-gradient-to-r from-primary/10 to-secondary/10'
      }`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className={`h-6 w-6 transition-all duration-300 ${protocolActive ? 'text-purple-400 animate-pulse' : 'text-primary'}`} />
            Protocolo Neural Master
          </CardTitle>
          <CardDescription>
            Ativação do sistema de controle supremo XPEX
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={activateProtocol}
            disabled={protocolActive}
            className={`w-full h-16 text-lg transition-all duration-300 ${
              protocolActive 
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 animate-pulse' 
                : 'bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80'
            }`}
          >
            <Zap className="mr-2 h-6 w-6" />
            {protocolActive ? '⚡ PROTOCOLO ATIVO ⚡' : '🚀 Ativar Protocolo Neural'}
          </Button>

          {protocolActive && (
            <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
              <p className="text-purple-400 font-medium animate-pulse">
                🔥 SISTEMA NEURAL TOTALMENTE ATIVADO 🔥
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Todos os módulos XPEX agora estão sob seu controle
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Separator />

      {/* Info Section */}
      <Card className="bg-sidebar/30">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Este painel é seu centro de comando para destravar e controlar todo o ecossistema XPEX.
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="outline">Neural Control</Badge>
              <Badge variant="outline">Bot Management</Badge>
              <Badge variant="outline">Conversion DNA</Badge>
              <Badge variant="outline">Master Access</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}