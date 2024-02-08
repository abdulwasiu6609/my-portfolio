import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-600 p-5 flex justify-center items-center text-gray-300">
      <p className="text-center flex justify-center items-center gap-1 ">
        Copyright{" "}
        <span className="text-blue-light">
          <FaRegCopyright className="text-gray-300" />
        </span>{" "}
        {new Date().getFullYear()} Abdul Wasiu. All rights reserved.
      </p>
    </footer>
  );
}
