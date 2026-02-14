"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { MobileTabBar } from "./MobileTabBar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div data-slot="app-shell" className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main data-slot="app-main" className="flex-1 px-4 py-6 pb-20 lg:px-8 lg:pb-6">
          {children}
        </main>
      </div>

      <MobileTabBar />
    </div>
  );
}
