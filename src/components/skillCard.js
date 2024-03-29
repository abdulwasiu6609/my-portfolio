import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa6";

export default function SkillCard(props) {
  const { icon, title, skills } = props;

  return (
    <div className="flex flex-col   w-[100%] md:w-[300px]  h-80 p-4 mt-12 rounded-lg justify-center items-center relative shadow-lg  ">
      <div className=" size-[100px] bg-blue-light rounded-full absolute -top-10 left-[50%] md:left-[100px] flex justify-center items-center ">
        {icon}
      </div>
      <div className="flex flex-col gap-4 py-6 mt-10">
        <h2 className="text-2xl font-semibold text-gray-600 text-center">
          {title}
        </h2>
        <ul className="text-left flex flex-col justify-start items-start gap-2 ">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex flex-row  gap-4 self-start justify-self-start text-gray-600 text-left"
            >
              <FaCheck className="text-blue-light" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
