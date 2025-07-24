import { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Dashboard from "./Dashboard";
import VX777WalletCore from "./VX777WalletCore";
import MindCore from "./MindCore";
import XpexLooper from "./XpexLooper";

export default function MainLayout() {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [activeSubPage, setActiveSubPage] = useState<string | undefined>();

  const handleComponentChange = (component: string, subPage?: string) => {
    setActiveComponent(component);
    setActiveSubPage(subPage);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'wallet':
        return <VX777WalletCore />;
      case 'mindcore':
        return <MindCore activeSubPage={activeSubPage} />;
      case 'gemini':
        return <XpexLooper />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Global Header with Trigger */}
        <header className="fixed top-0 left-0 right-0 h-12 bg-background/80 backdrop-blur-sm border-b border-border z-50 flex items-center">
          <SidebarTrigger className="ml-2" />
          <div className="flex-1 text-center">
            <span className="text-sm font-medium neural-glow">XPEX OS - SISTEMA NEURAL SUPREMO</span>
          </div>
        </header>

        {/* Sidebar */}
        <AppSidebar 
          activeComponent={activeComponent}
          activeSubPage={activeSubPage}
          onComponentChange={handleComponentChange}
        />

        {/* Main Content */}
        <main className="flex-1 pt-12 p-6 bg-background">
          <div className="container mx-auto">
            {renderActiveComponent()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}