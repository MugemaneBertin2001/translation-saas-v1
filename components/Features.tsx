import React from "react";

function Features() {
  return (
    <section className="py-8 bg-gray-100 dark:bg-transparent">
      <p className=" text-3xl text-center md:text-3xl font-bold mb-10">
        Key Features
      </p>
      {/* <!-- Feature 1 --> */}
      <div className=" container mx-auto max-w-6xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className=" rounded-full border-8 border-cyan-600 p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold">Secure and Private</h3>
          <p>Your conversations are encrypted and secure to ensure privacy.</p>
        </div>
        {/* <!-- Feature 2 --> */}
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className=" rounded-full border-8 border-cyan-600 p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold">User-Friendly Interface</h3>
          <p>
            An intuitive and easy-to-use interface for a smooth chatting
            experience.
          </p>
        </div>
        {/* <!-- Feature 3 --> */}
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className=" rounded-full border-8 border-cyan-600 p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
          </div>
          <h3 className="text-3xl font-bold"> Multilingual Support</h3>
          <p>
            Supports a wide range of languages, allowing users to communicate
            seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
