import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-bold text-primary font-montserrat">404</span>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-foreground font-montserrat">Page Not Found</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn-professional w-full inline-block"
          >
            Return to Home
          </Link>
          <Link 
            to="/contact" 
            className="btn-secondary w-full inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
