// src/components/NotFound.js
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <ShieldCheck className="w-24 h-24 text-green-600 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg">Page Not Found</p>
      <p className="mt-2">It seems like the page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
