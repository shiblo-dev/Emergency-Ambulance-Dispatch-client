"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, Clock, Search, UserRound } from "lucide-react";

type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
};

const posts: BlogPost[] = [
  {
    id: 1,
    slug: "what-to-do-while-waiting-for-an-ambulance",
    title: "What To Do While Waiting For An Ambulance",
    excerpt:
      "Simple, practical steps you can take to keep a patient safe and stable until help arrives.",
    category: "First Aid",
    author: "Dr. Rahman",
    date: "Oct 01, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "how-emergency-dispatch-works",
    title: "How Emergency Dispatch Works Behind The Scenes",
    excerpt:
      "From the moment a request is created to the moment an ambulance arrives, here is the full journey.",
    category: "Dispatch",
    author: "Healthcare Team",
    date: "Sep 26, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    slug: "recognising-signs-of-a-heart-attack",
    title: "Recognising The Early Signs Of A Heart Attack",
    excerpt:
      "Knowing the warning signs can save a life. Learn when to call for an ambulance immediately.",
    category: "Health Tips",
    author: "Dr. Akter",
    date: "Sep 20, 2026",
    readTime: "4 min read",
  },
  {
    id: 4,
    slug: "choosing-the-right-ambulance-type",
    title: "Choosing The Right Ambulance Type For Your Situation",
    excerpt:
      "Emergency, ICU or scheduled transport? Understand the differences before you request.",
    category: "Guides",
    author: "Healthcare Team",
    date: "Sep 14, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    slug: "how-to-prepare-an-emergency-kit",
    title: "How To Prepare A Home Emergency Kit",
    excerpt:
      "A short checklist of essentials every household should keep ready for unexpected emergencies.",
    category: "First Aid",
    author: "Dr. Rahman",
    date: "Sep 08, 2026",
    readTime: "3 min read",
  },
  {
    id: 6,
    slug: "why-every-minute-matters",
    title: "Why Every Minute Matters In A Medical Emergency",
    excerpt:
      "Response time directly affects patient outcomes. See how faster dispatch makes the difference.",
    category: "Dispatch",
    author: "Healthcare Team",
    date: "Sep 02, 2026",
    readTime: "4 min read",
  },
];

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
            Our Blog
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Health Tips, Guides And Latest Updates
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            Learn how to stay prepared, respond to emergencies and make the most
            of our ambulance dispatch services.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-8 max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b bg-white py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          {filteredPosts.length === 0 ? (
            <div className="rounded-xl border border-dashed py-16 text-center">
              <p className="text-lg font-semibold text-gray-900">
                No articles found
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Try a different keyword or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Thumbnail placeholder */}
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-red-100 to-red-50">
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-red-700">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-gray-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <UserRound className="h-3.5 w-3.5" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-block text-sm font-medium text-red-600 hover:text-red-700"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
