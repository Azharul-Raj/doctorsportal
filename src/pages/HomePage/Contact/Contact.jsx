import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import Button from '../../../components/Button';

const Contact = () => {
    return (
        <div className="relative"
        style={{backgroundImage:`url(${appointment})`}}
        >
     
            <div className="flex justify-center">
                <div className="bg-transparent rounded p-7 sm:p-10">
                <h2 className="text-xl text-center text-primary font-bold">Contact Us</h2>
                <h3 className="mb-4 text-2xl sm:text-center sm:mb-6 sm:text-2xl">
                  Stay Connected With Us
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <input
                      placeholder="Email Address"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <input
                      placeholder="Subject"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="Subject"
                      name="Subject"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <textarea
                      placeholder="Your Message"
                      required
                                type="textarea"
                                cols={50}
                      className="flex-grow w-full h-32 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                    />
                  </div>
                  <div className="mt-4 text-center mb-2 sm:mb-4">
                    <Button>Submit</Button>
                  </div>
                </form>
              </div>
      </div>
    </div>
    );
};

export default Contact;