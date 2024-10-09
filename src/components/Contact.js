import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'dccf1bca-ca63-4ef1-8aeb-f5be2f447e83');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully',
        icon: 'success',
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: 'Error!',
        text: data.message,
        icon: 'error',
      });
      event.target.reset();
    }
  };
  return (
    <>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <div className=" flex gap-4  ">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <a
            href="mailto:emirberkoncu@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold h-8 mt-[5px] py-1 px-4 rounded"
          >
            Contact Us
          </a>
        </div>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col">
          <label className="text-lg mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="p-2 mb-4 border border-gray-400 rounded-md"
            required
          />
          <label className="text-lg mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="p-2 mb-4 border border-gray-400 rounded-md"
            required
          />
          <label className="text-lg mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            className="p-2 mb-4 border border-gray-400 rounded-md"
            rows="5"
            placeholder="Enter your message"
            required
            name="message"
          />
          <button
            className="bg-blue-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Our Address</h2>
          <p className="text-lg mb-2">123 Main St, Anytown, USA 12345</p>
          <p className="text-lg mb-2">Phone: 555-555-5555</p>
          <p className="text-lg mb-2">Email: emirberkoncu@gmail.com</p>
        </div>
      </div>
      <footer className="w-full bg-gray-800 text-white p-3 text-center fixed bottom-0">
        <p>
          © 2024 BOE Fit Academy. All rights reserved.{' '}
          <a
            href="https://github.com/emirberkoncu"
            className="text-blue-500 hover:text-blue-700"
          >
            Github
          </a>
        </p>
      </footer>
    </>
  );
};

export default Contact;
