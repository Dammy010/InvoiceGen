import { Link } from "react-router-dom";

export default function LandingPage() {
  const testimonials = [
    {
      name: "Amina Bello",
      role: "Freelance Designer",
      quote:
        "InvoiceGen saved me hours every month. It’s clean, fast, and easy to use.",
    },
    {
      name: "Tunde Akinyemi",
      role: "Startup Founder",
      quote:
        "I love how simple it is. No login, no hassle — just professional invoices on demand.",
    },
    {
      name: "Joyce Okafor",
      role: "Consultant",
      quote:
        "The PDF export looks amazing. I send invoices with confidence now.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
        Create Professional Invoices in Minutes
      </h1>
      <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
        InvoiceGen is your go-to tool to generate clean, customizable invoices for your business no account needed.
      </p>
      <Link
        to="/generate"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Generate Invoice
      </Link>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">1. Fill Out Your Info</h3>
            <p className="text-gray-600">
              Enter your business, client, and invoice details in a simple form.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">2. Preview Your Invoice</h3>
            <p className="text-gray-600">
              See a real-time preview of your invoice before finalizing.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">3. Download or Print</h3>
            <p className="text-gray-600">
              Download your invoice as a PDF or print it directly from your browser.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((user, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left border"
            >
              <p className="italic text-gray-700 mb-4">“{user.quote}”</p>
              <div className="font-semibold text-blue-600">{user.name}</div>
              <div className="text-sm text-gray-500">{user.role}</div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
