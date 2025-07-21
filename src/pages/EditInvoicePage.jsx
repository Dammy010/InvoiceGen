import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditInvoicePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const invoice = location.state;

  const [form, setForm] = useState(null);

  useEffect(() => {
    if (invoice) {
      setForm(invoice);
    }
  }, [invoice]);

  const handleChange = (e, idx = null) => {
    const { name, value } = e.target;

    if (idx !== null) {
      const updatedItems = [...form.items];
      updatedItems[idx][name] =
        name === "quantity" || name === "price" ? Number(value) : value;

      setForm((prev) => ({
        ...prev,
        items: updatedItems,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddItem = () => {
    setForm((prev) => ({
      ...prev,
      items: [...prev.items, { description: "", quantity: 1, price: 0 }],
    }));
  };

  const handleRemoveItem = (idx) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== idx),
    }));
  };

  const handleSave = () => {
    const updatedInvoice = {
      ...form,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem("lastInvoice", JSON.stringify(updatedInvoice));
    toast.success("Invoice updated successfully!");
    navigate("/last-invoice", { state: updatedInvoice });
  };

  if (!form) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">
        No invoice to edit.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Edit Invoice
      </h2>

      <div className="mb-4">
        <label className="block font-medium">Your Business Name</label>
        <input
          type="text"
          name="businessName"
          className="w-full border rounded px-3 py-2"
          value={form.businessName || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Client Name</label>
        <input
          type="text"
          name="clientName"
          className="w-full border rounded px-3 py-2"
          value={form.clientName || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">Items</h3>
        {form.items.map((item, idx) => (
          <div key={idx} className="flex gap-3 mb-3 items-center">
            <input
              type="text"
              name="description"
              placeholder="Item Description"
              className="flex-1 border rounded px-3 py-2"
              value={item.description}
              onChange={(e) => handleChange(e, idx)}
            />
            <input
              type="number"
              name="quantity"
              min={1}
              placeholder="Qty"
              className="w-20 border rounded px-3 py-2"
              value={item.quantity}
              onChange={(e) => handleChange(e, idx)}
            />
            <input
              type="number"
              name="price"
              min={0}
              placeholder="Price"
              className="w-24 border rounded px-3 py-2"
              value={item.price}
              onChange={(e) => handleChange(e, idx)}
            />
            <button
              onClick={() => handleRemoveItem(idx)}
              className="text-red-600 font-semibold"
              title="Remove item"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          onClick={handleAddItem}
          className="mt-2 text-sm text-blue-600 font-medium hover:underline"
        >
          + Add Item
        </button>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
