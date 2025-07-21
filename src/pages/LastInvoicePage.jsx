import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InvoicePreview from "./InvoicePreview";

export default function LastInvoicePage() {
  const [invoice, setInvoice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("lastInvoice");
    if (saved) {
      setInvoice(JSON.parse(saved));
    }
  }, []);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this invoice?")) {
      localStorage.removeItem("lastInvoice");
      setInvoice(null);
      alert("Invoice deleted successfully.");
    }
  };

  const handleEdit = () => {
    if (!invoice) return;
    navigate("/edit", { state: invoice });
  };

  const handleDownload = () => {
    const content = document.getElementById("invoice-preview");
    if (!content) return;

    const newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1, h2, h3, p, table { margin: 0 0 10px 0; }
          </style>
        </head>
        <body>
          ${content.innerHTML}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  if (!invoice) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">
        No invoice found. Please create and save one.
      </div>
    );
  }

  const formattedDate = invoice.savedAt
    ? new Date(invoice.savedAt).toLocaleString()
    : "Unknown";

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-2 text-blue-700 text-center">Last Saved Invoice</h2>
      <p className="text-center text-gray-500 mb-6">
        <span className="font-semibold">Saved on:</span> {formattedDate}
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={handleEdit}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow transition"
        >
          ✏️ Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition"
        >
          🗑️ Delete
        </button>
        <button
          onClick={handleDownload}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          ⬇️ Download
        </button>
      </div>

      <div id="invoice-preview">
        <InvoicePreview form={invoice} />
      </div>
    </div>
  );
}
