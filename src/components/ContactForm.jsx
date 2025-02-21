const Form = () => {
  return (
    <div className="fade-in-scale flex w-full items-center justify-center">
      <div className="dm-sans-medium w-full max-w-md rounded-lg p-8 shadow-lg md:max-w-lg md:scale-110 lg:max-w-xl lg:scale-125">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Contact Us
        </h2>

        <form
          action="https://formsubmit.co/mcqeemsofficial@gmail.com"
          method="POST"
        >
          {/* Name Field */}
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="mt-1 mb-8 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm transition-all delay-75 ease-in-out focus:border-red-500 focus:ring-red-500 focus:outline-none sm:text-sm"
          />

          {/* Email Field */}
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            className="mt-1 mb-8 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm transition-all delay-75 ease-in-out focus:border-red-500 focus:ring-red-500 focus:outline-none sm:text-sm"
          />

          {/* Message Field */}
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="mt-1 mb-8 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm transition-all delay-75 ease-in-out focus:border-red-500 focus:ring-red-500 focus:outline-none sm:text-sm"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-red-500 px-4 py-2 text-white transition-all delay-75 ease-in-out hover:bg-red-700 focus:ring-2 focus:ring-red-800 focus:ring-offset-2 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
