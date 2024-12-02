import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://git.heroku.com/thawing-wave-36881.git/send-email",
        formData
      );
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", phone: "", about: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  const inputClass =
    "block w-full rounded-md border-gray-500 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700">
      <div className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-700 p-8 rounded-xl shadow-2xl shadow-white w-full max-w-md mb-64">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Contact Me
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-semibold text-white capitalize"
              >
                {field === "phone"
                  ? "Phone Number"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                autoComplete={field}
                required
                value={formData[field]}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="about"
              className="block text-sm font-semibold text-white"
            >
              Please leave a detailed message of inquiry
            </label>
            <textarea
              id="about"
              name="about"
              rows="4"
              value={formData.about}
              onChange={handleChange}
              className={inputClass}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg bg-gray-900 text-white font-bold focus:ring-2 focus:ring-green-500 shadow-white shadow-sm hover:bg-white hover:text-black hover:duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
