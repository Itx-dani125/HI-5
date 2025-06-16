import React, { useState } from "react";

function ApplyFormModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed w-[100%] inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg w-[40%]  mx-4 p-6 relative">
        {/* Close button */}
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {/* Form */}
        <form className="space-y-4" 
           onSubmit={(e) => {
           e.preventDefault(); 
           }}
        >
          
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Your Name:</label>
            <input
              type="text"
              className="w-full rounded border border-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Harry"
              required 
            />
          </div>
          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email Address:</label>
            <input
              type="email"
              className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="name@example.com"
              required 
            />
          </div>
          {/* Phone No. */}
          <div>
            <label className="block font-medium mb-1">Phone No.:</label>
            <input
              type="tel"
              className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+458 854-8965"
              required 
            />
          </div>
          {/* Location */}
          <div>
            <label className="block font-medium mb-1">Location</label>
            <select className="w-full rounded border border-gray-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>New York</option>
              <option>California</option>
              <option>London</option>
            </select>
          </div>
          {/* Coverting Letter */}
          <div>
            <label className="block font-medium mb-1">Coverting Letter:</label>
            <textarea
              className="w-full rounded border border-gray-300 p-2 min-h-[80px] resize-y focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Message :"
            ></textarea>
          </div>
          {/* Upload Resume */}
          <div>
            <label className="block font-medium mb-1">Upload Resume:</label>
            <input
              type="file"
              className="block w-full border border-gray-300 rounded p-2 bg-white text-gray-700 focus:outline-none"
              multiple={false}
            />
          </div>
          {/* Send Button */}
          <div>
            <button
              type="submit"
              className="bg-primary hover:bg-secondary hover:border hover:border-primary hover:text-primary  text-white font-medium rounded px-6 py-2 mt-2 float-left"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function JobForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex">
      <button
        onClick={() => setShowForm(true)}
        className="bg-primary hover:bg-secondary hover:text-primary text-white font-medium rounded px-8 py-3 shadow"
      >
        Apply Now
      </button>
      <ApplyFormModal open={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
}

export default JobForm;