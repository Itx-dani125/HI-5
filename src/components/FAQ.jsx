import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide a variety of recruitment, consultation, and HR services tailored to your business needs. We provide a variety of recruitment, consultation, and HR services tailored to your business needs.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us through our Contact Us page, email, or our support hotline available 24/7.",
  },
  {
    question: "Do you provide international hiring services?",
    answer: "Yes, we support international hiring and have access to a global talent pool.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing based on the scope of service — from one-time projects to ongoing partnerships.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full text-left flex justify-between items-center font-medium text-base sm:text-lg focus:outline-none"
        onClick={onClick}
      >
        <span className="pr-4">{question}</span>
        <span className="text-xl flex-shrink-0">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-sm sm:text-base">{answer}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="left-section w-full lg:w-[40%] flex flex-col justify-center order-2 lg:order-1">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 lg:mb-8 text-center lg:text-left">
          Frequently Asked Questions
        </h2>

        <p className="text-[#7d7f92] border-b-2 mb-4 lg:mb-2 py-4 text-sm sm:text-base text-center lg:text-left">
          If you have questions, we have answers for you here. In case we don't, please feel free to reach out to us in page 
          <Link to="/contact" className="text-primary underline"> Contact Us</Link>
        </p>

        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="right-section w-full sm:w-[80%] lg:w-[40%] bg-[url('./public/service-6.jpg')] h-[50vh] sm:h-[60vh] lg:h-[80vh] rounded-lg bg-cover bg-center bg-no-repeat order-1 lg:order-2">
      </div>
    </section>
  );
}

export default FAQ;