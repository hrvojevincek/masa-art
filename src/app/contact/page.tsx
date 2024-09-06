"use client";

import React from "react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ firstName: "", lastName: "", email: "", comment: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-black/80"
        >
          Send
        </button>
      </form>

      <div className="social-links">
        <h2 className="text-2xl font-bold mb-4">Socials</h2>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
