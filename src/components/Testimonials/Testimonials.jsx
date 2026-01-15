import React from "react";

const Testimonials = () => {
  // return <div>This is testimonials page</div>;
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-md p-6">
          <p>Great service and fast delivery! Highly recommend this store.</p>
          <h3 className="mt-4 font-bold">- John Doe</h3>
        </div>
        <div className="card bg-base-100 shadow-md p-6">
          <p>
            Wide selection of products at competitive prices. Will shop again!
          </p>
          <h3 className="mt-4 font-bold">- Jane Smith</h3>
        </div>
        <div className="card bg-base-100 shadow-md p-6">
          <p>
            Excellent customer support and quality products. Will recommend to
            friends!
          </p>
          <h3 className="mt-4 font-bold">- Alice Johnson</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
