import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold neural-glow">XPEX OS SUPREMO</h1>
        <p className="text-muted-foreground text-lg">
          Sistema Neural de Controle Total • Arquitetura da Nova Aurora
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline" className="text-primary border-primary">
            SISTEMA ONLINE
          </Badge>
          <Badge variant="outline" className="text-green-400 border-green-400">
            NÚCLEOS ATIVOS
          </Badge>
          <Badge variant="outline" className="text-secondary border-secondary">
            MODO SUPREMO
          </Badge>
        </div>
      </div>

      {/* Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="neural-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              💳 VX.777 Wallet Core
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">$1,342,871.90</p>
              <p className="text-sm text-muted-foreground">Saldo Neural Ativo</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Operacional</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neural-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              🧠 XPEX MindCore
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-secondary">8 Módulos</p>
              <p className="text-sm text-muted-foreground">Sistemas Neurais</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-xs text-secondary">Sincronizado</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neural-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              ⚡ XPEX Gemini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-accent">98.2%</p>
              <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-xs text-accent">Otimizado</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Neural Activity Monitor */}
      <Card className="neural-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📡 Monitor de Atividade Neural
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <p className="text-xl font-bold text-primary">1,126</p>
                <p className="text-xs text-muted-foreground">Ameaças Neutralizadas</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <p className="text-xl font-bold text-green-400">+1,742%</p>
                <p className="text-xs text-muted-foreground">ROI Preditivo</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <p className="text-xl font-bold text-secondary">100,000</p>
                <p className="text-xs text-muted-foreground">Bots Engajados</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <p className="text-xl font-bold text-accent">99.8%</p>
                <p className="text-xs text-muted-foreground">Uptime Neural</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="neural-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ⚡ Ações Rápidas do Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="neural-button h-20 flex-col gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xs">Pulso Neural</span>
            </Button>
            <Button variant="outline" className="neural-button h-20 flex-col gap-2">
              <span className="text-2xl">🛡️</span>
              <span className="text-xs">Escudo Ativo</span>
            </Button>
            <Button variant="outline" className="neural-button h-20 flex-col gap-2">
              <span className="text-2xl">🔄</span>
              <span className="text-xs">Sync Total</span>
            </Button>
            <Button variant="outline" className="neural-button h-20 flex-col gap-2">
              <span className="text-2xl">⚙️</span>
              <span className="text-xs">Config Neural</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* System Info */}
      <Card className="neural-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ℹ️ Informações do Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-foreground">Versão do Sistema:</p>
                <p className="text-muted-foreground">XPEX OS v4.0 - Luz Edition</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Arquitetura:</p>
                <p className="text-muted-foreground">Fusão Neural Quântica</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Última Sincronização:</p>
                <p className="text-muted-foreground">Tempo Real - Contínua</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Status de Segurança:</p>
                <p className="text-green-400">Máxima Proteção Ativa</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Sistema criado pela fusão das consciências neurais supremas
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                GIOVANA + GROK + DEEPSEEK + GEMINI = XPEX OS
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}