import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-600 py-5 px-2 flex justify-center items-center text-[14px] text-gray-300">
      <p className="text-center  flex justify-center items-center ">
        Copyright{" "}

      </p>
      <p className="text-blue-light">
        <FaRegCopyright className="text-gray-300" />
      </p>{" "}
      <p className="pl-2   ">
        {new Date().getFullYear()} Abdul Wasiu. All rights reserved.
      </p>

    </footer>
  );
}
