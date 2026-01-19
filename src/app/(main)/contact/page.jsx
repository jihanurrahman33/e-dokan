import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 leading-relaxed">
          Have a question, need support, or want to work with us? We’d love to
          hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <p className="text-gray-600">
            Our support team is available 24/7 to help you with orders,
            payments, or any product-related questions.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Email:</strong> support@yourstore.com
            </p>
            <p>
              <strong>Phone:</strong> +880 1960 690 690
            </p>
            <p>
              <strong>Address:</strong> Daffodil Smart City, Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="btn btn-outline btn-primary">Live Chat</button>
            <button className="btn btn-primary">Send Email</button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-base-100 shadow rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
            />

            <button type="submit" className="btn btn-primary w-full">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
