import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InvoicePreview from "./InvoicePreview";

const getFormattedDateTime = () => {
  const now = new Date();
  return now.toLocaleString();
};

export default function InvoiceForm() {
  const [form, setForm] = useState({
    sender: "",
    recipient: "",
    date: getFormattedDateTime(),
    items: [{ description: "", quantity: 1, price: 0 }],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setForm((prev) => ({ ...prev, date: getFormattedDateTime() }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e, idx = null) => {
    const { name, value } = e.target;

    if (idx !== null) {
      const newItems = [...form.items];
      newItems[idx][name] =
        name === "quantity" || name === "price" ? Number(value) : value;
      setForm({ ...form, items: newItems });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const addItem = () => {
    setForm({
      ...form,
      items: [...form.items, { description: "", quantity: 1, price: 0 }],
    });
  };

  const removeItem = (idx) => {
    setForm({
      ...form,
      items: form.items.filter((_, i) => i !== idx),
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Create Your Invoice
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="sender"
          placeholder="Your Business Name"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.sender}
          onChange={handleChange}
        />
        <input
          type="text"
          name="recipient"
          placeholder="Client Name"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.recipient}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date & Time"
          className="md:col-span-2 border border-gray-300 rounded-md px-4 py-2 bg-gray-100"
          value={form.date}
          readOnly
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-4">Invoice Items</h3>
      <div className="space-y-4">
        {form.items.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center bg-gray-50 p-4 rounded-md"
          >
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="col-span-2 border border-gray-300 rounded-md px-3 py-2"
              value={item.description}
              onChange={(e) => handleChange(e, idx)}
            />
            <input
              type="number"
              name="quantity"
              placeholder="Qty"
              className="border border-gray-300 rounded-md px-3 py-2"
              min={1}
              value={item.quantity}
              onChange={(e) => handleChange(e, idx)}
            />
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                #
              </span>
              <input
                type="number"
                name="price"
                placeholder="Unit Price"
                className="border border-gray-300 rounded-md px-6 py-2 w-full"
                min={0}
                value={item.price}
                onChange={(e) => handleChange(e, idx)}
              />
            </div>

            <button
              onClick={() => removeItem(idx)}
              className="text-red-500 hover:text-red-600 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button
          onClick={addItem}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          + Add Item
        </button>
      </div>

      <hr className="my-6" />
      <InvoicePreview form={form} showSaveButton={true} />
    </div>
  );
}
