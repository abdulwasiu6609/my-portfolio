import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <section className="font-roboto w-full flex flex-col gap-4 p-10 bg-blue-light text-white text-md text-center md:flex-row md:text-left md:pl-20 ">
      <div className="image-wrapper justify-self-center self-center mb-6">
        <img
          src="https://abdulwasiu6609.github.io/portfolio/assets/images/profile.jpg"
          alt="profile picture"
          className="size-[300px] rounded-[20px] "
        />
      </div>
      <div className="intro-text md:w-2/3 md:px-10  ">
        <p className="text-3xl mb-4">Hello, my name is </p>
        <h1 className="text-upercase text-5xl font-semibold">Abdul Wasiu</h1>
        <p className="text-lg mt-4  ">
          I am a dynamic full-stack developer with a keen focus on frontend and
          backend development, as well as expertise in UX design and IT support.
          I share my passion for web development on{" "}
          <Link href="/blogs" className="text-blue-dark hover:underline">
            my blog.
          </Link>{" "}
          Curious about how I can elevate your project? Dive into my project{" "}
          <Link href="/projects" className="text-blue-dark hover:underline ">
            case studies{" "}
          </Link>
          and check out my{" "}
          <Link href="/resume" className="text-blue-dark hover:underline ">
            resume.
          </Link>
        </p>
        <button className="btn mt-4 self-center bg-blue-darker opacity-70 px-6 py-2 w-full rounded-lg hover:opacity-100 text-white text-xl font-semibold tracking-widest duration-300 md:w-fit">
          <Link href="/contact">Hire me</Link>
        </button>
      </div>
    </section>
  );
}
