import Link from "next/link";
import Image from "next/image";

export const JobCard = (props) => {
  //href={props.link}
  return (
    // <Link>
    //   <a>
    <div className=" mx-auto p-[30px] flex flex-col relative max-w-[400px] h-[400px] drop-shadow-lg  ">
      <div className="relative h-full w-[340px] ">
        <Image src={props.image} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute w-[100%] h-[100%] flex flex-col justify-center">
        <h3 className=" text-white text-center font-semibold text-2xl mx-auto mt-[150px]">
          {props.name}
        </h3>
      </div>
    </div>
    //   </a>
    // </Link>
  );
};
