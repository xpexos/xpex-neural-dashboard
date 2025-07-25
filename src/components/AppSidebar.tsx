import { useState } from "react";
import { 
  Brain, 
  Wallet, 
  Zap, 
  Settings, 
  Eye, 
  DollarSign, 
  Cpu, 
  RefreshCcw, 
  Target, 
  Ghost, 
  Copy, 
  Terminal,
  Home
} from "lucide-react";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { 
    id: 'dashboard', 
    title: 'Dashboard Principal', 
    icon: Home, 
    component: 'dashboard'
  },
  { 
    id: 'wallet-core', 
    title: 'VX.777 Wallet Core', 
    icon: Wallet, 
    component: 'wallet'
  },
  { 
    id: 'mind-core', 
    title: 'XPEX MindCore', 
    icon: Brain, 
    component: 'mindcore'
  },
  { 
    id: 'gemini-system', 
    title: 'XPEX Gemini', 
    icon: Zap, 
    component: 'gemini'
  },
];

const mindCoreItems = [
  { id: 'neural-graph', title: 'DNA Conversão', icon: Eye },
  { id: 'sim-vs-real', title: 'Chat Giovana', icon: DollarSign },
  { id: 'script-control', title: 'Master Unlocker', icon: Cpu },
  { id: 'hyperfeed', title: 'HyperFeed', icon: RefreshCcw },
  { id: 'gx-command', title: 'GX Command', icon: Target },
  { id: 'produtos', title: 'Produtos Neural', icon: Ghost },
  { id: 'supreme-system', title: 'Supreme System', icon: Copy },
  { id: 'command-runner', title: 'Execução Direta', icon: Terminal },
];

export interface AppSidebarProps {
  activeComponent: string;
  activeSubPage?: string;
  onComponentChange: (component: string, subPage?: string) => void;
}

export function AppSidebar({ activeComponent, activeSubPage, onComponentChange }: AppSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";
  
  const isActive = (componentId: string, subPage?: string) => {
    if (subPage) {
      return activeComponent === componentId && activeSubPage === subPage;
    }
    return activeComponent === componentId;
  };

  const getItemClasses = (componentId: string, subPage?: string) => {
    const active = isActive(componentId, subPage);
    return active 
      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium border-l-2 border-primary" 
      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground";
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <h1 className="text-xl font-bold neural-glow text-center">
            {collapsed ? "XPEX" : "XPEX OS"}
          </h1>
          {!collapsed && (
            <p className="text-xs text-sidebar-foreground/70 text-center mt-1">
              Sistema Neural Supremo
            </p>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Sistema Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    className={getItemClasses(item.component)}
                    onClick={() => onComponentChange(item.component)}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* MindCore Sub-navigation */}
        {activeComponent === 'mindcore' && !collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel>MindCore Modules</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mindCoreItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton 
                      className={getItemClasses('mindcore', item.id)}
                      onClick={() => onComponentChange('mindcore', item.id)}
                    >
                      <item.icon className="h-3 w-3" />
                      <span className="text-xs">{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Settings */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="h-4 w-4" />
                  {!collapsed && <span>Configurações</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        {!collapsed && (
          <div className="p-4 border-t border-sidebar-border text-center text-xs text-sidebar-foreground/70">
            Luz Edition V4
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}