import {MdOutlineEmail} from 'react-icons/md'
import { BsGithub, BsWhatsapp } from "react-icons/bs";

import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_myvkoyl",
          "template_yi85kyb",
          form.current,
          "3YuYogTNLeoZlLDgl"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset()
    };

  return (
    <div
      name="contact"
      className="w-full  pt-[18rem] bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
            Contact
          </p>
          <p className="py-4">// Contact me using the following form</p>
        </div>

        <div className="grid md:grid-cols-3 grid-row-2">
          <div className="md:col-span-1 col-span-1 ">
            <article
              className="bg-[#292B66] hover:bg-[#1b1c3a] duration-500 group 
              m-2 my-6 flex flex-col justify-center items-center
              rounded-md text-center p-2 font-bold"
            >
              <MdOutlineEmail className="my-2 text-4xl" />
              <h5>Email</h5>

              <a
                href="mailto:kriztianz@hotmail.com "
                target="_blank"
                className="text-white border-2  hover:bg-pink-600 duration-500 hover:font-bold p-2
                 mx-auto my-4  flex items-center justify-center rounded-md "
              >
                Send Message
              </a>
            </article>

            <article
              className="bg-[#292B66] hover:bg-[#1b1c3a] duration-500 group 
              m-2 my-6 flex flex-col justify-center items-center
              rounded-md text-center p-2 font-bold "
            >
              <BsGithub className="my-2 text-4xl" />
              <h5>GitHub</h5>

              <a
                href="https://github.com/Kriztianz190377"
                target="_blank"
                className="text-white border-2  hover:bg-pink-600 duration-500 hover:font-bold p-2
                 mx-auto my-4  flex items-center justify-center rounded-md"
              >
                Look at
              </a>
            </article>
            <article
              className="bg-[#292B66] hover:bg-[#1b1c3a] duration-500 group 
              m-2 my-6 flex flex-col justify-center items-center
              rounded-md text-center p-2 font-bold"
            >
              <BsWhatsapp className="my-2 text-4xl" />
              <h5>WhatsApp</h5>

              <a
                href="https://wa.me/+14383966910"
                target="_blank"
                className="text-white border-2  hover:bg-pink-600 duration-500 hover:font-bold p-2
                 mx-auto my-4  flex items-center justify-center rounded-md"
              >
                Send Message
              </a>
            </article>
          </div>
          {/* TODO enviar mensaje de respuesta al correo del emisario */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" md:col-span-2 mt-6 col-span-1 flex"
          >
            <div className=" w-full flex flex-col justify-center items-center font-bold">
              <input
                className=" p-1 bgc-[#ccd6f6] w-5/6 bg-transparent border rounded-md font-bold"
                type="text"
                placeholder="Name"
                name="name"
                id="name"
              />
              <input
                className="my-4 p-2 bgc-[#ccd6f6] w-5/6 bg-transparent border rounded-md font-bold"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
              <textarea
                className="my-4 p-2 bgc-[#ccd6f6] w-5/6 bg-transparent border rounded-md font-bold"
                name="message"
                placeholder="Message"
                id="message"
                rows="10"
              ></textarea>
              <button
                className="text-white border-2 text-2xl hover:bg-pink-600 duration-500 hover:font-bold p-2
                w-1/3 mx-auto my-8  flex items-center justify-center rounded-md"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

 
