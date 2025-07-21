export default function FAQPage() {
  const faqs = [
    {
      question: "Is InvoiceGen free to use?",
      answer:
        "Yes, InvoiceGen is completely free to use for individuals and small businesses. No subscriptions or hidden fees.",
    },
    {
      question: "Can I download invoices?",
      answer:
        "Absolutely! You can preview and download your invoice as a PDF or print it directly from your browser.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No registration required — you can start using the tool immediately without signing up.",
    },
    {
      question: "Can I edit an invoice after creating it?",
      answer:
        "Yes, you can edit invoice items, client details, dates, and more before saving or downloading.",
    },
    {
      question: "Will my data be saved?",
      answer:
        "InvoiceGen stores your data locally in your browser using localStorage. No data is uploaded to any server.",
    },
    {
      question: "Can I use InvoiceGen on mobile?",
      answer:
        "Yes! InvoiceGen is fully responsive and works beautifully on smartphones, tablets, and desktops.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes, since all your data stays in your browser and is not sent to a backend, your information remains private and secure.",
    },
    {
      question: "Can I customize my invoices?",
      answer:
        "You can edit invoice items, client and business info, invoice dates, and notes. Custom templates and themes are coming soon!",
    },
    {
      question: "Who is InvoiceGen built for?",
      answer:
        "InvoiceGen is perfect for freelancers, consultants, small businesses, and anyone who needs to generate professional invoices quickly.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
