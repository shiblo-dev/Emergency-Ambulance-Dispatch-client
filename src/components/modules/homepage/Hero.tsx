import Link from "next/link";
import {
  Ambulance,
  Building2,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Phone,
  ShieldCheck,
  Siren,
} from "lucide-react";

const features = [
  {
    icon: Siren,
    title: "Instant Requests",
    description:
      "Send an emergency request with your location and priority in just a few taps.",
  },
  {
    icon: Ambulance,
    title: "Fast Dispatch",
    description:
      "Dispatchers assign the nearest available ambulance without delay.",
  },
  {
    icon: Building2,
    title: "Hospital Matching",
    description:
      "Get routed to a suitable hospital before the ambulance even arrives.",
  },
  {
    icon: ClipboardList,
    title: "Live Tracking",
    description:
      "Follow your request from Requested to Completed with clear status updates.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Pay safely online with bKash and SSLCommerz.",
  },
  {
    icon: ShieldCheck,
    title: "Safe And Reliable",
    description:
      "Role-based access, secure authentication and full audit logging.",
  },
];

const steps = [
  { number: "1", title: "Request", description: "Submit an emergency request." },
  { number: "2", title: "Dispatch", description: "An ambulance is assigned." },
  { number: "3", title: "Transport", description: "Patient is taken to hospital." },
  { number: "4", title: "Complete", description: "Request closed and payment recorded." },
];

const stats = [
  { value: "24/7", label: "Emergency Support" },
  { value: "3", label: "User Roles" },
  { value: "100%", label: "Tracked Requests" },
];

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-white py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
              Emergency Ambulance Dispatch System
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Help Is Just One Request Away
            </h1>
            <p className="mt-4 text-base text-gray-600 md:text-lg">
              Healthcare connects patients, dispatchers and hospitals on a
              single platform, so an ambulance reaches you faster when every
              minute counts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="rounded-lg bg-red-600 px-6 py-3 text-center font-medium text-white transition hover:bg-red-700"
              >
                Request an Ambulance
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Our Services
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-red-600" />
              Emergency hotline available 24/7
            </div>
          </div>

          {/* Hero visual placeholder */}
          <div className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-red-100 to-red-50 md:h-96">
            <Ambulance className="h-32 w-32 text-red-600" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-white py-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-red-600">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Why Choose Healthcare
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            Everything you need to request, track and manage emergency
            ambulance services in one place.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
      <section className="bg-gray-50 py-16">
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

      {/* Trust points */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Care You Can Trust
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Trained and verified emergency staff",
              "Priority-based dispatching",
              "Transparent request history",
              "Secure and private patient data",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border bg-white p-4 text-sm text-gray-700"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Be Prepared Before An Emergency Happens
          </h2>
          <p className="mt-3 text-red-100">
            Create your free account today and get help faster when you need it
            most.
          </p>
          <Link
            href="/register"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-medium text-red-600 transition hover:bg-red-50"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </main>
  );
}
