
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Destinasi from "./pages/Destinasi";
import PaketWisata from "./pages/PaketWisata";
import ProdukNelayan from "./pages/ProdukNelayan";
import Galeri from "./pages/Galeri";
import TentangKami from "./pages/TentangKami";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/destinasi" element={<Destinasi />} />
              <Route path="/paket-wisata" element={<PaketWisata />} />
              <Route path="/produk-nelayan" element={<ProdukNelayan />} />
              <Route path="/galeri" element={<Galeri />} />
              <Route path="/tentang-kami" element={<TentangKami />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
