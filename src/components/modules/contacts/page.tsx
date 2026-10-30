"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+880 1234-567890", "Emergency hotline: 999"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["support@healthcare.com", "info@healthcare.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["House 12, Road 5", "Dhaka, Bangladesh"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Emergency: 24/7", "Office: Sat - Thu, 9:00 AM - 6:00 PM"],
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSuccess(false);
  };

  const validate = () => {
    const newErrors: Partial<FormState> = {};

    if (form.name.trim().length < 2) newErrors.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (form.subject.trim().length < 3)
      newErrors.subject = "Please enter a subject";
    if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      // TODO: replace with your real API call, e.g.
      // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((resolve) => setTimeout(resolve, 800));

      setForm(initialForm);
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:ring-2 ${
      hasError
        ? "border-red-500 focus:ring-red-200"
        : "border-gray-300 focus:border-red-500 focus:ring-red-200"
    }`;

  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
            Contact Us
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            We Are Here To Help
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            Have a question or feedback? Send us a message and our team will get
            back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map(({ icon: Icon, title, lines }) => (
            <div
              key={title}
              className="rounded-xl border bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {title}
              </h3>
              {lines.map((line) => (
                <p key={line} className="mt-1 text-sm text-gray-600">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + emergency note */}
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-3">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 rounded-xl border bg-white p-6 shadow-sm lg:col-span-2 md:p-8"
          >
            <h2 className="text-xl font-bold text-gray-900">Send a Message</h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass(!!errors.name)}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+880 1XXX-XXXXXX"
                  className={inputClass(false)}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={inputClass(!!errors.subject)}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className={inputClass(!!errors.message)}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>

          {/* Emergency note */}
          <aside className="h-fit rounded-xl bg-red-600 p-6 text-white md:p-8">
            <h3 className="text-xl font-bold">In An Emergency?</h3>
            <p className="mt-3 text-sm text-red-100">
              This form is for general questions only. If someone needs urgent
              medical help, request an ambulance immediately or call the
              emergency hotline.
            </p>
            <p className="mt-5 text-3xl font-bold">999</p>
            <p className="text-sm text-red-100">Available 24/7</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
