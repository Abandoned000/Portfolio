import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_9xd9rrj";
    const templateId = "template_z03h0a2";
    const publicKey = "xP1ttMosIS4an67vf";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jerry",
      message: message,
      from_subject: subject,
      from_phone: phone,
    };


    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setSubject("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

     
  };

  return (
    <div className="flex   flex-col md:flex-row justify-between px-20">
      <div className="px-5 md:px-36 space-y-6  pt-44 text-center md:text-left">
        <div className="space-y-2 ">
          <p className="font-semibold text-xl text-purple-500"> Contact me</p>
          <p className="font-extrabold text-3xl md:text-5xl">
            {" "}
            Have any Thought <p>Find here.</p>
          </p>
        </div>
        <div className="font-normal text-xl space-y-3">
          <p>
            {" "}
            Phone <span className="font-bold text-xl"> (+84) 03391206 </span>
          </p>
          <p>
            Email{" "}
            <span className="font-bold text-xl"> lhanhkhoa1206@gmail.com</span>
          </p>
          <p>
            {" "}
            Address{" "}
            <span className="font-bold text-xl"> Ho Chi Minh, Vietnam </span>
          </p>
        </div>
      </div>
      <div className="space-y-4 mt-16 md:mt-32 mb-52">
        <div className="flex gap-6 md:flex-row flex-col md:px-0 px-5">
          <div className="md:w-1/2 w-full">
            <p className="font-normal text-lg">Name</p>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <p className="font-normal text-lg">Email</p>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4"
            />
          </div>
        </div>
        <div className="flex gap-6 md:flex-row flex-col md:px-0 px-5">
          <div className="md:w-1/2 w-full">
            <p className="font-normal text-lg">Phone</p>
            <input
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=" w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <p className="font-normal text-lg">Subject</p>
            <input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className=" w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4"
            />
          </div>
        </div>
        <div className="md:px-0 px-5">
          <p className="font-normal text-lg">Message</p>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4"
          ></textarea>
        </div>
        <div onClick={handleSubmit} className="px-5 md:px-0">
          <p className="bg-yellow-400 rounded-xl font-bold text-base text-white text-center py-3 px-32 md:px-60">
            {" "}
            Send Now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
