import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="cta-section bg-blue-light px-[10%] text-center py-10  md:px-[20%] mt-10 flex flex-col  justify-center items-center ">
      <img
        src="https://abdulwasiu6609.github.io/portfolio/assets/images/profile.jpg"
        alt="profile-picture"
        className="size-20 rounded-full mx-auto"
      />
      <h2 className="text-3xl font-semibold p-3">
        Interested in hiring me for your project?
      </h2>
      <p className="text-lg leading-7 ">
        Looking for an experienced full-stack developer to build your web app or
        ship your software product? To start an initial chat, just drop me an
        email at{" "}
        <span className="text-blue-dark hover:text-gray-600 underline">
          abdulwasiu6609@gmail.com
        </span>{" "}
        or use the{" "}
        <Link
          className="text-blue-dark hover:text-gray-600 underline"
          href="/contact"
        >
          form on the contact page.
        </Link>
      </p>
      <Link
        href="/contact"
        className="text-xl bg-blue-darker hover:bg-blue-dark mt-5 w-full md:w-auto text-white px-5 py-3 rounded-lg"
      >
        Let's Talk
      </Link>
    </section>
  );
}
