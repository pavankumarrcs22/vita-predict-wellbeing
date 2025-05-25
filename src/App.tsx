
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import HeartDisease from "./pages/HeartDisease";
import Diabetes from "./pages/Diabetes";
import LiverDisease from "./pages/LiverDisease";
import KidneyDisease from "./pages/KidneyDisease";
import BreastCancer from "./pages/BreastCancer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/heart-disease" element={
              <ProtectedRoute>
                <HeartDisease />
              </ProtectedRoute>
            } />
            <Route path="/diabetes" element={
              <ProtectedRoute>
                <Diabetes />
              </ProtectedRoute>
            } />
            <Route path="/liver-disease" element={
              <ProtectedRoute>
                <LiverDisease />
              </ProtectedRoute>
            } />
            <Route path="/kidney-disease" element={
              <ProtectedRoute>
                <KidneyDisease />
              </ProtectedRoute>
            } />
            <Route path="/breast-cancer" element={
              <ProtectedRoute>
                <BreastCancer />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
