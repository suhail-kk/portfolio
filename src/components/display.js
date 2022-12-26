import { CircleIcon } from "./icons";
import { ButtonReadMore } from "./input";

export const SkilCircle = ({ title, value }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-full w-5 bg-gray-medium flex justify-center items-center"></div>
    </div>
  );
};

export const SectionHeading = ({
  textWhite,
  textYellow,
  subHead,
  tracking,
}) => {
  return (
    <div className="w-fit relative">
      <p
        className={`text-gray-light text-5xl sm:text-7xl uppercase font-black  ${tracking}`}
      >
        {subHead}
      </p>
      <p className="text-white uppercase whitespace-nowrap text-3xl md:text-5xl absolute font-black top-1/2 left-[46%] transform -translate-x-1/2 -translate-y-1/2 tracking2">
        {textWhite}
        <span className="text-primaryYellow whitespace-nowrap tracking2 ml-4">
          {textYellow}
        </span>
      </p>
    </div>
  );
};

export const TextKeyValue = ({ title, value }) => {
  return (
    <div className="flex fex-1 w-full">
      <p className="text-gray-lightShade text-lg whitespace-nowrap font-medium">
        {title}&nbsp;&nbsp;:&nbsp;&nbsp;
      </p>
      <p className="text-white text-lg w-full font-medium break-words">{value}</p>
    </div>
  );
};

export const ResumeCard = ({ title, content }) => {
  return (
    <div className="bg-transparent border-4 rounded-md flex flex-col justify-center items-start w-56 h-32 border-gray-normal gap-2 p-4">
      <div className="flex flex-row">
        <p className="text-primaryYellow font-bold text-5xl flex items-start">
          {title}
        </p>
        <div className="text-4xl ml-2 text-primaryYellow font-bold">+</div>
      </div>
      <div className="flex flex-1 justify-start items-start gap-4">
        <div className="h-1 w-7 bg-white mt-2" />
        <p className="text-white font-bold break-words uppercase">
          {content}
        </p>
      </div>
    </div>
  );
};

export const ExperianceContent = ({ item }) => {
  return (
    <div className="flex flex-1 gap-4 w-full h-fit">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primaryYellow">
          <CircleIcon />
        </div>
        <div className="h-20 w-1 bg-gray-normal" />
      </div>
      <div className="flex flex-col justify-start gap-2">
        <div className="bg-gray-normal p-2 text-white w-fit items-center rounded-full flex justify-start text-xs italic">
          {item?.period}
        </div>
        <div className="text-white font-bold uppercase text-base">
          {item?.title}&nbsp;&nbsp;-&nbsp;&nbsp;
          <span className="text-gray-normal uppercase text-md">
            {item?.place}
          </span>
        </div>
        <p className="text-white font-medium text-base">{item?.description}</p>
      </div>
    </div>
  );
};

// export const ProjectCard = ({ item }) => {
//   return (
//     <div className="flex justify-center flex-1 items-center p-5 h-fit lg:h-40 w-full bg-gray-normal rounded-lg">
//       <div>
//         <div className="flex justify-center items-center w-32 h-32 rounded-full border-4 border-primaryYellow">
//           <img
//             src={item?.bgImage || "./assets/images/desktop.png"}
//             alt="project bg"
//             className="w-full h-full rounded-full object-cover"
//           />
//         </div>
//       </div>
//       <div className="flex flex-wrap w-full ml-10 justify-start gap-x-10 gap-y-5">
//         <div className="flex  flex-col justify-between">
//           <p className="text-project-card-gray">Title</p>
//           <p className="text-white text-xl font-bold uppercase">
//             {item?.title}
//           </p>
//         </div>
//         <div className="flex  flex-col justify-between">
//           <p className="text-project-card-gray">Languages &amp; tools used</p>
//           <p className="text-white text-base">{item?.languages}</p>
//         </div>
//         <div className="flex  flex-col justify-between">
//           <p className="text-project-card-gray">Git URL</p>
//           <p className="text-white text-base">{item?.url || "Not provided"}</p>
//         </div>
//         <div className="flex  flex-col justify-between">
//           <p className="text-project-card-gray">Description</p>
//           <p className="text-white text-base">{item?.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export const BlogCard = ({ bgImage, date, title, content }) => {
  return (
    <div className="relative flex flex-col p-5 bg-gray-normal rounded-lg w-72 h-60 justify-center items-start">
      <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full border-4 border-primaryYellow">
        <div>
          <img
            src={bgImage || "./assets/images/blog-card.png"}
            alt="blog card image"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <p className="text-gray-medium text-md mt-6">{date}</p>
      <p className="text-white text-2xl font-bold">{title}</p>
      <p className="text-gray-medium text-md mt-2 h-16 overflow-y-clip">
        {content}
      </p>
      <div className="mt-3">
        <ButtonReadMore />
      </div>
    </div>
  );
};

export const NavItem = ({ icon, active }) => {
  return (
    <div
      className={`w-12 h-12 flex justify-center hover:bg-primaryYellow hover:-translate-x-1 hover:-translate-y-1 cursor-pointer transition-all items-center rounded-full ${
        active ? "bg-primaryYellow" : "bg-gray-medium"
      }`}
    >
      <div className="w-8 h-8 object-cover text-white flex justify-center items-center">
        {icon}
      </div>
    </div>
  );
};

export const TextWhiteMedium = ({ text }) => {
  return (
    <div className="font-bold  text-primaryYellow  text-lg md:text-2xl">
      {text}
    </div>
  );
};

export const ContactIconAndValue = ({ icon, title, value }) => {
  return (
    <div className="flex flex-1 gap-4 h-fit w-full">
      <div className="w-8 h-8 object-cover text-white flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <p className=" text-gray-lightShade text-base md:text-xl  font-medium">
          {title}
        </p>
        <p className="text-base md:text-xl  text-white  font-medium break-words">
          {value}
        </p>
      </div>
    </div>
  );
};

export const SocialLinks = ({ icon, bgColor }) => {
  return (
    // <link href={src} target="_blank">
    <div
      className={`w-12 h-12 sm:w-16 sm:h-16 flex transition grow justify-center bg-primaryYellow hover:${bgColor} cursor-pointer  transition-all items-center rounded-lg`}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 object-cover  flex justify-center items-center">
        {icon}
      </div>
    </div>
    // </link>
  );
};

export const ProjectCard = ({ item }) => {
  return (
    <div className="w-[300px] h-[470px] flex flex-col gap-0">
      <div className="w-full h-[200px] border-b-4 border-primaryYellow">
        <img
          src={item?.bgImage || "./assets/images/desktop.png"}
          alt="project bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full p-3 sm:p-5 flex flex-col gap-2 bg-gray-medium justify-start items-start">
        <p className="text-white text-start text-xl font-bold uppercase">
          {" "}
          {item?.title}
        </p>
        <p className="text-white text-sm">
          Tools used : &nbsp; &nbsp;{item?.languages}
        </p>
        <a href={item.url} target="_blank" rel="noreferrer">
          <p className="text-gray-normal  underline cursor-pointer text-sm">
            {item?.url || "Not provided"}
          </p>
        </a>
        <p className="text-sm text-gray-normal">{item?.description}</p>
      </div>
    </div>
  );
};

export const SkillCard = ({title}) => {
  return (
    <div className = {`bg-gray-medium hover:scale-110 ease-in-out transition-all hover:bg-primaryYellow shadow-md  rounded-full py-2 px-6 w-fit h-fit flex justify-center items-center`}>
      <p className="text-white font-medium text-base md:text-lg">{title}</p>
    </div>
  )
}