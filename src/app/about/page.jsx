import React from "react";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed">
          We are committed to delivering high-quality products with exceptional
          customer service, making online shopping simple, secure, and
          enjoyable.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-gray-600">
            Our platform was built with a simple mission: to provide customers
            with premium products at fair prices while ensuring a seamless
            shopping experience.
          </p>

          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600">
            We aim to bridge the gap between quality and affordability by using
            modern technology, fast logistics, and customer-first policies.
          </p>

          <h2 className="text-2xl font-semibold">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Trusted & verified products</li>
            <li>Fast and secure delivery</li>
            <li>Easy returns & refunds</li>
            <li>24/7 customer support</li>
          </ul>
        </div>

        {/* Stats / Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-base-100 shadow rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">10K+</h3>
            <p className="text-gray-500 mt-2">Happy Customers</p>
          </div>
          <div className="bg-base-100 shadow rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">1K+</h3>
            <p className="text-gray-500 mt-2">Products</p>
          </div>
          <div className="bg-base-100 shadow rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">24/7</h3>
            <p className="text-gray-500 mt-2">Support</p>
          </div>
          <div className="bg-base-100 shadow rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">5★</h3>
            <p className="text-gray-500 mt-2">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
