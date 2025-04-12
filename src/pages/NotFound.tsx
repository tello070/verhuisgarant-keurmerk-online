
import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AlertCircle, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center px-4">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertCircle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oeps! Pagina niet gevonden</p>
          <p className="max-w-md mx-auto text-gray-500 mb-8">
            De pagina die u probeert te bezoeken bestaat niet of is verplaatst.
          </p>
          <Button asChild className="hero-gradient">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Terug naar Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
