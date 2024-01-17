"use client"
import BannerComponent from "@/components/BannerComponent";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import React,{useEffect, useState} from "react";

// Import statements...

function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Banner */}
      <BannerComponent />

      {/* Features Section */}
      <Features />

      {/* Call-to-Action Section */}
      <section className="bg-cyan-600 py-16 text-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Chatting Today!
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Sign up now and start using our awesome website.
          </p>
          <a
            href="#"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold shadow-md hover:bg-blue-50"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </main>
  );
}

export default Page;
