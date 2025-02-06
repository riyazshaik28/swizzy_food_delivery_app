
import React from 'react';

const ContactUs = () => {
  return (
  <>  <div className="bg-gradient-to-r from-green-200 to-lime-300 py-10 px-5 lg:px-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        📞 Contact Us
      </h1>

      <p className="text-lg text-center text-gray-600 mb-6">
        Got questions? Feedback? We're here to help! 
      </p>

      <form className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label  className="block text-sm font-medium text-gray-700">
            Your Name 
          </label>
          <input
            type="text"
            
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="ammerunnissa"
          />
        </div>

        <div className="mb-4">
          <label  className="block text-sm font-medium text-gray-700">
            Your Email 
          </label>
          <input
            type="email"
            
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="sshaikriyaz252@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Your Message 
          </label>
          <textarea
            rows="5"
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Tell us what's on your mind..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-200"
        >
           Send Message
        </button>
      </form>

      <div className="text-center mt-10">
        <p className="text-gray-600">
          Or reach us directly at: <strong className="text-green-600">support@mealmates.com</strong>
        </p>
        <p className="text-gray-600">
          Call us: <strong className="text-green-600">+1 (800) 123-4567</strong>
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm">Thank you for choosing mealmates! </p>
      </div>
    </div>




    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
        <p className="text-gray-600 text-center mb-6">Welcome back! Please login to your account.</p>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </>









  );
};

export default ContactUs;
