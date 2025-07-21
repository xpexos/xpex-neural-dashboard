import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DollarSign, RefreshCcw, Square, Brain, Shield, Radio } from 'lucide-react';

export function GeminiVaultNode() {
  const [vaults, setVaults] = useState([
    { label: 'Carteira Principal', value: 812440.00, encryption: 'AES-512', status: 'ativo' },
    { label: 'Renda Oculta (ShadowLayer)', value: 412331.90, encryption: 'SHA-3-HMAC', status: 'protegido' },
    { label: 'Pool de Microtransações', value: 118100.00, encryption: 'QuantumHash', status: 'dinâmico' }
  ]);

  const [transactions, setTransactions] = useState([
    { id: 1, type: 'entrada', amount: 15000, source: 'Bot Comprador #7', timestamp: new Date() },
    { id: 2, type: 'saida', amount: 8500, source: 'Redistribuição Neural', timestamp: new Date(Date.now() - 300000) },
    { id: 3, type: 'entrada', amount: 22000, source: 'Phantom Protocol', timestamp: new Date(Date.now() - 600000) },
  ]);

  const actions = [
    { label: 'Emitir Lucro', icon: DollarSign },
    { label: 'Redirecionar Fluxo', icon: RefreshCcw },
    { label: 'Iniciar SafeMode', icon: Square },
    { label: 'Zerar Cache Neural', icon: Brain }
  ];

  const securityLayers = [
    { name: 'Autenticação Biocodificada', status: '100% ativa' },
    { name: 'Proxy Quantum Sigil', status: 'encaminhamento sigiloso' },
    { name: 'Escudo de Cloaking Dinâmico', status: 'mutação ativa' }
  ];

  const feeds = [
    { source: 'api.gemini/neural-flux', description: 'Pulso neural de entrada' },
    { source: 'api.shadowchain/hotwallet', description: 'Escaneamento de wallets abertas' },
    { source: 'api.ghostnet/predictive-loops', description: 'Loops preditivos paralelos' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate dynamic vault updates
      setVaults(prev => prev.map(vault => ({
        ...vault,
        value: vault.value + (Math.random() * 5000)
      })));

      // Add new transaction occasionally
      if (Math.random() < 0.3) {
        const newTransaction = {
          id: Date.now(),
          type: Math.random() > 0.5 ? 'entrada' : 'saida',
          amount: Math.floor(Math.random() * 50000),
          source: 'Bot Neural #' + Math.floor(Math.random() * 20),
          timestamp: new Date()
        };
        setTransactions(prev => [newTransaction, ...prev.slice(0, 4)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVaultStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'text-green-400';
      case 'protegido': return 'text-blue-400';
      case 'dinâmico': return 'text-purple-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          🔐 COFRE NEURAL DE RIQUEZA
        </h1>
        <p className="text-xl text-muted-foreground">
          Armazém Codificado de Valor e Comando
        </p>
        <Badge variant="outline" className="text-green-400 border-green-400">
          SINCRONIZADO COM O CORE GEMINI
        </Badge>
      </div>

      {/* Encrypted Balances */}
      <Card>
        <CardHeader>
          <CardTitle>📊 Saldos Criptografados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {vaults.map((vault, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{vault.label}</h3>
                  <Badge variant="outline" className={getVaultStatusColor(vault.status)}>
                    {vault.status.toUpperCase()}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  ${vault.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Criptografia: {vault.encryption}</span>
                  <Progress value={85 + Math.random() * 15} className="w-20 h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transaction Logs */}
      <Card>
        <CardHeader>
          <CardTitle>📜 Registro Vivo de Transações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${tx.type === 'entrada' ? 'bg-green-400' : 'bg-red-400'}`} />
                  <div>
                    <div className="font-medium">
                      {tx.type === 'entrada' ? '+' : '-'}${tx.amount.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">{tx.source}</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {tx.timestamp.toLocaleTimeString('pt-BR')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trigger Actions */}
      <Card>
        <CardHeader>
          <CardTitle>⚡ Comandos de Desbloqueio e Execução</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-16 flex-col gap-2 hover:scale-105 transition-transform"
              >
                <action.icon className="h-5 w-5" />
                {action.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Cluster */}
      <Card>
        <CardHeader>
          <CardTitle>🛡️ Blindagem do Cofre</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityLayers.map((layer, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>{layer.name}</span>
                </div>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  {layer.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Intel Relay */}
      <Card>
        <CardHeader>
          <CardTitle>📡 Relay de Inteligência</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {feeds.map((feed, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Radio className="h-4 w-4 text-primary animate-pulse" />
                  <div>
                    <div className="font-medium font-mono text-sm">{feed.source}</div>
                    <div className="text-sm text-muted-foreground">{feed.description}</div>
                  </div>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}