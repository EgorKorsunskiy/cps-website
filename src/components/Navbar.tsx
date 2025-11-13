'use client'

import { Code2, Calendar, ListChecks, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Code2 },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/tasks', label: 'Tasks', icon: ListChecks },
    { path: '/forum', label: 'Forum', icon: MessageSquare },
  ];

  return (
    <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-slate-100">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl">CompSci Society</span>
          </Link>
          
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
