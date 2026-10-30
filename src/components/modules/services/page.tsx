import Link from "next/link";
import {
  Ambulance,
  BedDouble,
  CalendarClock,
  CheckCircle2,
  HeartPulse,
  MapPin,
  Siren,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Siren,
    title: "Emergency Ambulance",
    description:
      "Immediate ambulance dispatch for critical situations such as accidents, heart attacks and severe injuries.",
    points: ["Available 24/7", "Priority-based dispatch", "Nearest ambulance assigned"],
    tag: "Most Requested",
  },
  {
    icon: HeartPulse,
    title: "ICU Ambulance",
    description:
      "Fully equipped ambulances with life-support systems and trained medical staff for critical patients.",
    points: ["Ventilator and oxygen support", "Trained paramedics", "Cardiac monitoring"],
  },
  {
    icon: CalendarClock,
    title: "Scheduled Patient Transport",
    description:
      "Book an ambulance in advance for hospital visits, dialysis, check-ups or discharge.",
    points: ["Book ahead of time", "Comfortable stretcher transport", "Punctual pickup"],
  },
  {
    icon: BedDouble,
    title: "Hospital Selection",
    description:
      "Get matched with a suitable hospital based on availability and the patient's condition.",
    points: ["Real-time hospital data", "Faster admission", "Reduced waiting time"],
  },
  {
    icon: MapPin,
    title: "Live Request Tracking",
    description:
      "Follow your request from Requested to Completed and always know where help is.",
    points: ["Clear status updates", "Dispatcher contact", "Full request history"],
  },
  {
    icon: Stethoscope,
    title: "Basic Life Support",
    description:
      "Trained responders provide first-aid and stabilisation care while on the way to the hospital.",
    points: ["First-aid equipment", "Oxygen supply", "Safe patient handling"],
  },
];

const highlights = [
  { value: "24/7", label: "Always Available" },
  { value: "< 5 min", label: "Average Dispatch Time" },
  { value: "100%", label: "Tracked Requests" },
];

export default function Services() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
            Our Services
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Reliable Emergency Services You Can Count On
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            From instant ambulance dispatch to hospital coordination, we cover
            every step of an emergency so patients get the right care at the
            right time.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y bg-white py-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 text-center sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-red-600">{item.value}</p>
              <p className="mt-1 text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description, points, tag }) => (
              <div
                key={title}
                className="relative flex flex-col rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {tag && (
                  <span className="absolute right-4 top-4 rounded-full bg-red-600 px-3 py-0.5 text-xs font-medium text-white">
                    {tag}
                  </span>
                )}

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>

                <ul className="mt-4 space-y-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-red-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Ambulance className="mx-auto h-10 w-10 text-white" />
          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Need help right now?
          </h2>
          <p className="mt-3 text-red-100">
            Send an emergency request and our dispatchers will respond
            immediately.
          </p>
          <Link
            href="/register"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-medium text-red-600 transition hover:bg-red-50"
          >
            Request an Ambulance
          </Link>
        </div>
      </section>
    </main>
  );
}
