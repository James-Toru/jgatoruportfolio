import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export  const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sumdiqj', 'template_udfvgxl', form.current, '6iN7MBMnLOm3u3VHJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col md:flex-row p-3 mb-2">
              <input className="p-2 mb-3 rounded-md text-gray-700 md:mr-2 md:mb-0 dark:bg-gray-900 dark:border-cyan-500 dark:border-2 dark:text-gray-200" type="text" placeholder="Name" name="name" required/>
              <input className="p-2 rounded-md text-gray-700 dark:bg-gray-900 dark:border-cyan-500 dark:border-2 dark:text-gray-200" type="email" name="email" id="" placeholder="Email" required/>
              </div>
              <div className="flex flex-col p-3 ">
              <textarea className="p-2 pb-5 rounded-md text-gray-700 dark:bg-gray-900 dark:border-cyan-500 dark:border-2 dark:text-gray-200" name="message" id="" placeholder="Message" required></textarea>
              </div>
              <button className="p-2 rounded-md border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-gray-200" type="submit">Send Message</button> 
            </form>
  );
};