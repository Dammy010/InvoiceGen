import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function InvoicePreview({ form, showSaveButton = false }) {
  const navigate = useNavigate();
  const total = form.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleSave = () => {
    const invoiceWithDate = {
      ...form,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem("lastInvoice", JSON.stringify(invoiceWithDate));
    toast.success("Invoice saved!");
    navigate("/last-invoice");
  };

  return (
    <div className="mt-10 border-t border-gray-300 pt-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Invoice Preview</h3>

      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <div className="mb-6 space-y-1">
          <p className="text-gray-700">
            <span className="font-semibold">From:</span>{" "}
            {form.sender || <span className="text-gray-400">—</span>}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">To:</span>{" "}
            {form.recipient || <span className="text-gray-400">—</span>}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Date & Time:</span>{" "}
            {form.date || <span className="text-gray-400">—</span>}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price (₦)</th>
                <th className="px-4 py-2 text-right">Subtotal (₦)</th>
              </tr>
            </thead>
            <tbody>
              {form.items.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="px-4 py-2">{item.description || "—"}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">
                    ₦{parseFloat(item.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-right">
                    ₦{(item.quantity * item.price).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-right">
          <p className="text-lg font-semibold">
            Total: <span className="text-blue-600">₦{total.toFixed(2)}</span>
          </p>
        </div>

        {showSaveButton && (
          <div className="mt-6 text-right">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
            >
              Save & View Invoice
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
