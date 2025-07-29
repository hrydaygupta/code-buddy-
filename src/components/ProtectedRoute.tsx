import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";


interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [user, setUser] = useState<null | object>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    // Get initial user
    supabase.auth.getUser().then(({ data }) => {
      if (!isMounted) return;
      setUser(data?.user ?? null);
      setLoading(false);
    });
    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;
      setUser(session?.user ?? null);
    });
    return () => {
      isMounted = false;
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-900 via-black to-blue-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-900 mx-auto mb-8"></div>
          <p className="text-3xl font-bold text-white tracking-wide">Loading...</p>
        </div>
      </div>
    );
  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-900 via-black to-blue-900">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-red-400 mb-4">Access Denied</p>
          <p className="text-lg text-gray-200 mb-8">You must be logged in to view this page.</p>
          <Navigate to="/login" replace />
        </div>
      </div>
    );
  return <>{children}</>;
};

export default ProtectedRoute;
