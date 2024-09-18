import React, { createContext, useState, useEffect } from 'react';
import { ChevronLast, ChevronFirst, ShieldCheck } from 'lucide-react';

export const SidebarContext = createContext({ expanded: true });

export default function Sidebar({ children, expanded, setExpanded }) {
  const [largeScreen, setScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside className="h-screen flex">
      <nav
        className={`h-full flex flex-col bg-black text-green-400 border-r border-green-700 shadow-lg transition-transform duration-300 ${
          expanded ? 'w-64' : 'w-20'
        } ${largeScreen ? 'lg:transform lg:transition-transform' : ''}`}
      >
        <div className="p-4 flex items-center">
          <div className="flex-1 flex items-center space-x-2">
            {expanded && (
              <>
                <ShieldCheck className="w-8 h-8 text-green-400" />
                <span className="text-xl font-bold text-green-400">TrueSecure</span>
              </>
            )}
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`p-1.5 rounded-lg bg-green-800 hover:bg-green-700 text-green-200 flex items-center justify-center`}
            style={{ marginLeft: expanded ? '0.5rem' : '-4rem' }}
          >
            {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, onClick }) {
  const { expanded } = React.useContext(SidebarContext);

  return (
    <li
      onClick={onClick}
      className={`relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? 'bg-green-800 text-green-200'
            : 'hover:bg-green-900 text-green-400'
        }
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-green-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}
      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-900 text-green-200 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </li>
  );
}

export function SideHeading({ text }) {
  const { expanded } = React.useContext(SidebarContext);

  return (
    <li className={`py-2 px-3 my-1 text-green-600 text-sm ${expanded ? '' : 'hidden'}`}>
      {text}
    </li>
  );
}
