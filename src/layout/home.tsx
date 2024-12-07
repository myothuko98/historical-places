import { Button } from '@/components/ui/button';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Historical Places</h1>
          <Button variant="outline" size="sm" className="text-black">
            Random Place
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet /> {/* React Router renders child routes here */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Historical Places App. All rights
            reserved.
          </p>
          <div className="mt-4">
            <Button variant="secondary" className="text-black mx-2">
              Privacy Policy
            </Button>
            <Button variant="secondary" className="text-black mx-2">
              Terms of Service
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
