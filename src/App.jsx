import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/AboutPage"
import FAQ from "./pages/FAQPage";
import InvoiceForm from "./pages/InvoiceForm";
import InvoicePreview from "./pages/InvoicePreview";
import LandingPage from "./pages/LandingPage";
import LastInvoicePage from "./pages/LastInvoicePage"
import { Toaster } from "react-hot-toast";
import EditInvoicePage from "./pages/EditInvoicePage";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow px-4 md:px-8 py-8 bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/generate" element={<InvoiceForm />} />
            <Route path="/invoice" element={<InvoicePreview />} />
            <Route path="/Saved-invoice" element={<LastInvoicePage />} />
            <Route path="/edit" element={<EditInvoicePage />} />
          </Routes>
          <Toaster />
        </main>

        <footer className="bg-white shadow-inner py-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} InvoiceGen. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
