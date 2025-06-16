import React, { useState } from 'react';

const servicesList = [
  'Permanent Recruitment (Direct Hire)',
  'Temporary/Contract Staffing',
  'Executive Search (Headhunting)',
  'Talent Mapping and Market Research',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    services: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'services') {
      setForm((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
  };

  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">
      {/* Main Row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center items-start">
        {/* Illustration Section */}
        <div className="flex-1 flex justify-center items-center p-4">
          <img
            src="./contactsvg.svg"
            alt="Contact Illustration"
            className="w-300  h-auto"
          />
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow px-8 py-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">How can we assist?</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-600 mb-1" htmlFor="name">
                  Your Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-600 mb-1" htmlFor="email">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="contact">
                Contact
              </label>
              <input
                type="number"
                id="contact"
                name="contact"
                className="w-full border  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.contact}
                onChange={handleChange}
                placeholder="Your Contact Number"
              />
            </div>
          
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
              />
            </div>
              <div>
              <label className="block text-gray-600 mb-2">Services</label>
              <div className="flex flex-wrap gap-8">
                {servicesList.map((service) => (
                  <label key={service} className="inline-flex items-center text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={form.services.includes(service)}
                      onChange={handleChange}
                      className="form-checkbox h-4 w-4 text-primary mr-2"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 transition-colors text-white font-semibold uppercase rounded py-3 shadow focus:outline-none mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Row */}
      <div className="w-full  max-w-5xl mt-[150px] mb-[50px] grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Phone Card */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 rounded-lg w-14 h-14 flex items-center justify-center mb-2">
            {/* <img src="./phone.svg" alt="phone" className="w-7 h-7 text-blue-500" /> */}
            <svg stroke="#3E63DD" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="fea icon-ex-md" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <h4 className="font-semibold text-lg text-gray-900 mb-1">Phone</h4>
          <p className="text-gray-600 text-sm">Start working with Jobnova that can provide everything</p>
          <a href="tel:+152534-468-854" className="text-blue-500 underline mt-2 inline-block">tel:+152534–468–854</a>
        </div>
        {/* Email Card */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 rounded-lg w-14 h-14 flex items-center justify-center mb-2">
           {/* <img src="./message.svg" alt="message" className="w-7 h-7 text-blue-500" /> */}
           <svg stroke="#3E63DD" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="fea icon-ex-md" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <h4 className="font-semibold text-lg text-gray-900 mb-1">Email</h4>
          <p className="text-gray-600 text-sm">Start working with Jobnova that can provide everything</p>
          <a href="mailto:contact@example.com" className="text-blue-500 underline mt-2 inline-block">contact@example.com</a>
        </div>
        {/* Location Card */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 rounded-lg w-14 h-14 flex items-center justify-center mb-2">
            {/* <img src="./location.svg" alt="location" className="w-7 h-7 text-blue-500" /> */}
            <svg stroke="#3E63DD" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="fea icon-ex-md" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <h4 className="font-semibold text-lg text-gray-900 mb-1">Location</h4>
          <p className="text-gray-600 text-sm">Start working with Jobnova that can provide everything</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 inline-block">View on Google map</a>
        </div>
      </div>
    </section>
  );
}
