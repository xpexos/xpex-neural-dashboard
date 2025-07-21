import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GeminiConversionCore } from './GeminiConversionCore';
import { GeminiOrchestrationMatrix } from './GeminiOrchestrationMatrix';
import { GeminiVaultNode } from './GeminiVaultNode';

type ActiveView = 'conversion' | 'orchestration' | 'vault';

export default function XpexLooper() {
  const [activeView, setActiveView] = useState<ActiveView>('conversion');

  const views = [
    { id: 'conversion' as const, label: '🧬 DNA DE CONVERSÃO', icon: '🧬' },
    { id: 'orchestration' as const, label: '🧠 MATRIZ DE ORQUESTRAÇÃO', icon: '🧠' },
    { id: 'vault' as const, label: '🔐 COFRE NEURAL', icon: '🔐' }
  ];

  const renderActiveComponent = () => {
    switch (activeView) {
      case 'conversion':
        return <GeminiConversionCore />;
      case 'orchestration':
        return <GeminiOrchestrationMatrix />;
      case 'vault':
        return <GeminiVaultNode />;
      default:
        return <GeminiConversionCore />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-primary">XPEX GEMINI</div>
              <Badge variant="outline" className="text-green-400 border-green-400">
                SISTEMA ATIVO
              </Badge>
            </div>
            <div className="flex gap-2">
              {views.map((view) => (
                <Button
                  key={view.id}
                  variant={activeView === view.id ? "default" : "outline"}
                  onClick={() => setActiveView(view.id)}
                  className="gap-2"
                >
                  <span>{view.icon}</span>
                  {view.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {renderActiveComponent()}
      </div>

      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-muted-foreground">
          XPEX GEMINI CORE // A ARQUITETURA DA CONVERSÃO
        </div>
      </footer>
    </div>
  );
}