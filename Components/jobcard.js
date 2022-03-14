import Link from "next/link";
import Image from "next/image";

export const JobCard = (props) => {
  //href={props.link}
  return (
    // <Link>
    //   <a>
    <div className=" mx-auto p-[30px] flex flex-col relative w-[400px] h-[400px] drop-shadow-lg  ">
      <div className="relative h-full w-[340px] bg-primary">
        <Image
          src={props.image}
          alt=""
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div className="absolute left-0 top-0 w-[100%] h-[100%] flex flex-col justify-center">
        <h3 className=" text-white text-center font-semibold text-3xl mx-auto font-parkson">
          {props.name}
        </h3>
      </div>
    </div>
    //   </a>
    // </Link>
  );
};
