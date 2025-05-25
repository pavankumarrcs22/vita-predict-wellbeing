
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/heart-disease" element={<HeartDisease />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/liver-disease" element={<LiverDisease />} />
          <Route path="/kidney-disease" element={<KidneyDisease />} />
          <Route path="/breast-cancer" element={<BreastCancer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
