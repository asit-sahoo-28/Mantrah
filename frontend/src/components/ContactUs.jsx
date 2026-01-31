import React from "react";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
const ContactUs = () => {

    const [result, setResult] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    setResult("Sending...")

    const formData = new FormData(e.target)
    formData.append(
      "access_key",
      "9845667d-ed4a-4334-84d0-7cdec962f9d2"
    )

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("✅ Message sent successfully")
      e.target.reset()
    } else {
      setResult("❌ Something went wrong")
    }
  }
  return (
    <section className="bg-[#faf6f2] py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm tracking-widest text-[#b56b4b] mb-2">
            CONTACT DETAILS
          </p>

          <h2 className="text-3xl font-serif text-gray-900 mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-700 mb-6">
            Mantrah School of Performing Arts
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-[#b56b4b]" size={18} />
            <span className="text-gray-700">
              mantrah.jajpur@gmail.com
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 mb-8">
            <Phone className="text-[#b56b4b]" size={18} />
            <span className="text-gray-700">
              +91 8270192080
            </span>
          </div>

          {/* Map – Odisha */}
       <div className="rounded-lg overflow-hidden border">
  <iframe
    title="map"
    src="https://www.google.com/maps?q=Jajpur+Road,Odisha,India&output=embed"
    className="w-full h-64"
    loading="lazy"
  />
</div>

        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-serif text-gray-900 mb-6">
            Write To Us
          </h3>

<form onSubmit={onSubmit} className="space-y-4">

  <input
    type="text"
    name="name"
    placeholder="Name"
    required
    className="w-full border px-4 py-2 rounded-md"
  />

  <div className="grid sm:grid-cols-2 gap-4">
    <input
      type="text"
      name="phone"
      placeholder="Phone"
      className="w-full border px-4 py-2 rounded-md"
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="w-full border px-4 py-2 rounded-md"
    />
  </div>

  <div className="grid sm:grid-cols-2 gap-4">
    <input
      type="text"
      name="city"
      placeholder="City"
      className="w-full border px-4 py-2 rounded-md"
    />

    <input
      type="text"
      name="country"
      placeholder="Country"
      className="w-full border px-4 py-2 rounded-md"
    />
  </div>

  <textarea
    rows="3"
    name="previous_training"
    placeholder="Details of any previous dance training (if any)"
    className="w-full border px-4 py-2 rounded-md"
  />

  <textarea
    rows="3"
    name="message"
    placeholder="Message"
    required
    className="w-full border px-4 py-2 rounded-md"
  />

  <input
    type="text"
    name="source"
    placeholder="How did you find us?"
    className="w-full border px-4 py-2 rounded-md"
  />

  <button
    type="submit"
    className="px-6 py-3 rounded-full bg-[#b56b4b] text-white hover:bg-[#9c583d]"
  >
    Send Message
  </button>

  <p className="text-sm text-gray-600">{result}</p>
</form>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;
