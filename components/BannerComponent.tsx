import React from "react";
import { Button } from "./ui/button";

function BannerComponent() {
  return (
    <section className="bg-gray-100-700 text-black py-16  dark:bg-gray-800">
      <div className="flex flex-wrap gap-3">
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-8">
          <div className="p-6">
            <p className="font-bold text-center my-2 text-2xl">
              Worried about language barriers?
            </p>
            <p className="mb-4">
              Fret not! Polyglot Chat comes equipped with advanced language
              support, allowing you to express yourself without limitations.
              Whether you&apos;re conversing with friends, family, or colleagues from
              around the world, our platform ensures that language is never a
              barrier to meaningful communication.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-8">
          <div className="p-6">
            <p className="font-bold text-center my-2 text-2xl">
              Concerned about privacy?
            </p>
            <p className="mb-4">
              Polyglot Chat prioritizes your security. All conversations are
              encrypted to guarantee the confidentiality of your messages. Enjoy
              peace of mind as you connect with others without compromising your
              privacy.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-8">
          <div className="p-6">
            <p className="font-bold text-center my-2 text-2xl">
              Looking for a solution that understands your unique needs?
            </p>
            <p className="mb-4">
              Polyglot Chat adapts to your preferences, allowing you to
              customize language settings, choose your preferred interface, and
              personalize your chatting experience. It&apos;s not just a chat
              platform; it&apos;s your personalized multilingual communication
              solution.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-8">
          <div className="p-6">
            <p className="font-bold text-center my-2 text-2xl">
              You know what?
            </p>
            <p className="mb-4">
              Break free from language constraints and embrace a world of
              limitless communication possibilities with Polyglot Chat. Join us
              today and experience a new era of multilingual chatting!
            </p>
          </div>
          <div className="p-6">
            <Button className="dark:bg-gray-100">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerComponent;
