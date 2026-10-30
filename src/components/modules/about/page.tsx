import Link from "next/link";
import {
  Ambulance,
  Building2,
  ClipboardList,
  CreditCard,
  ShieldCheck,
  Siren,
  UserRound,
  Headset,
  Settings2,
} from "lucide-react";

const features = [
  {
    icon: Siren,
    title: "Instant Emergency Requests",
    description:
      "Patients can request an ambulance in seconds with their location and priority level.",
  },
  {
    icon: Ambulance,
    title: "Smart Ambulance Dispatch",
    description:
      "Dispatchers assign the nearest available ambulance, with duplicate assignments prevented automatically.",
  },
  {
    icon: Building2,
    title: "Hospital Selection",
    description:
      "Patients are routed to the most suitable hospital before the ambulance arrives.",
  },
  {
    icon: ClipboardList,
    title: "Live Status Tracking",
    description:
      "Follow every request from Requested to Completed with clear, real-time status updates.",
  },
  {
    icon: CreditCard,
    title: "Secure Online Payments",
    description:
      "Pay for ambulance services safely through bKash and SSLCommerz.",
  },
  {
    icon: ShieldCheck,
    title: "Audit & Security",
    description:
      "Role-based access, JWT authentication and full audit logs for every critical action.",
  },
];

const steps = [
  {
    number: "01",
    title: "Request",
    description: "A patient submits an emergency request with location and priority.",
  },
  {
    number: "02",
    title: "Dispatch",
    description: "A dispatcher assigns the best available ambulance.",
  },
  {
    number: "03",
    title: "Transport",
    description: "The ambulance picks up the patient and heads to the selected hospital.",
  },
  {
    number: "04",
    title: "Complete",
    description: "The request is completed and payment is recorded securely.",
  },
];

const roles = [
  {
    icon: UserRound,
    title: "Patient",
    description:
      "Request emergency help, track the ambulance, view history and make payments.",
  },
  {
    icon: Headset,
    title: "Dispatcher",
    description:
      "Manage incoming requests, assign ambulances and update dispatch status.",
  },
  {
    icon: Settings2,
    title: "Admin",
    description:
      "Manage users, ambulances and hospitals, and review analytics and audit logs.",
  },
];

const stats = [
  { value: "24/7", label: "Emergency Support" },
  { value: "3", label: "User Roles" },
  { value: "7", label: "Core Modules" },
  { value: "100%", label: "Tracked Requests" },
];

export default function About() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
            About Healthcare
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Faster Response. Better Care. Lives Saved.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            Healthcare is an Emergency Ambulance Dispatch System that connects
            patients, dispatchers and hospitals on a single platform, so help
            reaches people when every minute counts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-white py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-red-600">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-600">
            Emergency situations leave no room for delay or confusion. Our
            mission is to remove the gap between a call for help and the
            arrival of care by giving every patient a fast way to request an
            ambulance, every dispatcher a clear view of available resources,
            and every administrator full visibility over the entire system.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            What We Offer
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            How It Works
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Built For Everyone Involved
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {roles.map(({ icon: Icon, title, description }) => (
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
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Need an ambulance right now?
          </h2>
          <p className="mt-3 text-red-100">
            Create an account and send an emergency request in seconds.
          </p>
          <Link
            href="/register"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-medium text-red-600 transition hover:bg-red-50"
          >
            Request Help
          </Link>
        </div>
      </section>
    </main>
  );
}
