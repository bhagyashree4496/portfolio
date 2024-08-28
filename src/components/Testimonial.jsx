import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    quote:
      "This developer is outstanding! Delivered top-notch work ahead of schedule.",
    role: "CEO, XYZ Company",
  },
  {
    name: "Jane Smith",
    quote: "Highly recommended! The project was a great success.",
    role: "CTO, ABC Inc.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Testimonials</h2>
        <div className="max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-8">
              <FaQuoteLeft className="text-purple-600 text-3xl inline-block mb-4" />
              <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
              <FaQuoteRight className="text-purple-600 text-3xl inline-block mb-4" />
              <p className="text-purple-600 font-semibold">
                {testimonial.name}
              </p>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
