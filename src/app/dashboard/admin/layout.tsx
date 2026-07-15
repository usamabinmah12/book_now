import Sidebar from '@/app/components/Sidebar';
import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-[#0B0F19] overflow-hidden">
      
      {/* Dynamic Sidebar Container */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full min-h-screen overflow-y-auto px-4 py-6 md:p-8 lg:p-10">
        <div className="max-w-7xl mx-auto space-y-6">
          {children}
        </div>
      </main>
      
    </div>
  );
};

export default Layout;