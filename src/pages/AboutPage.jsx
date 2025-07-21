export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-4xl text-center bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">About InvoiceGen</h1>
      <p className="text-gray-600 text-lg mb-8">
        <span className="font-semibold text-blue-500">InvoiceGen</span> is a lightweight yet powerful invoicing tool designed for freelancers, entrepreneurs, and small business owners who need to generate professional invoices fast and hassle-free.
      </p>

      <div className="text-left space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">💡 The Problem</h2>
        <p className="text-gray-700">
          Many freelancers and small business owners struggle with overcomplicated or expensive invoicing software. Most solutions are bloated with features they don’t need, come with monthly fees, or require steep learning curves just to send a simple invoice.
        </p>

        <h2 className="text-2xl font-bold text-gray-800">🚀 Our Solution</h2>
        <p className="text-gray-700">
          <span className="font-semibold text-blue-500">InvoiceGen</span> provides a modern, intuitive platform to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Create professional invoices in minutes</li>
          <li>Edit and save invoices locally with no account required</li>
          <li>Download or print invoices for your clients</li>
          <li>Manage invoice items and client info with ease</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800">🎯 Built With</h2>
        <p className="text-gray-700">
          This app is built using <strong>React</strong> and styled with <strong>Tailwind CSS</strong> delivering a fast, responsive, and clean user experience.
        </p>
      </div>

      <div className="mt-12">
        <p className="text-sm text-gray-400">
          InvoiceGen is open-source and designed with simplicity in mind so you can focus more on your work and less on paperwork.
        </p>
      </div>
    </section>
  );
}
