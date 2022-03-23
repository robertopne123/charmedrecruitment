import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Header } from "../components/header";
import Link from "next/link";

export default function JobSearch() {
  return (
    <div className="w-full font-parkson">
      <Head>
        <title>Charmed Recruitment</title>
        <meta
          name="description"
          content="Your business is important to you and protecting it should be simple. At Deltic Insurance, we want to help you get the right cover to make sure your business is protected."
        />
        <link rel="icon" href="/LogoCropped.png" />
      </Head>
      <Header />
      {/* <img src="hamza.png"/> */}
      <div className=" bg-primary w-[100%] py-[75px] ">
        <div className="flex flex-col mx-auto w-[300px] justify-center gap-4">
          <h1 className="text-white font-semibold text-center font-parkson text-3xl">
            WHAT ARE YOU SEARCHING FOR?
          </h1>
          <div className="flex flex-row">
            <input
              className="border-b-0 placeholder-primary p-[5px] px-[10px] text-xl h-[50px] appearance-none mb-2 w-[400px]"
              type="text"
              placeholder="JOB TITLE"
            />
          </div>
          <div className="flex flex-row">
            <input
              className="border-b-0 text-xl placeholder-primary p-[5px] h-[50px] px-[10px] appearance-none mb-2 w-[400px]"
              type="text"
              placeholder="LOCATION"
            />
          </div>
            <div className=" flex flex-row w-full justify-center">
              <button className="hover:bg-white font-parkson hover:text-secondary rounded-md bg-secondary text-white py-2  w-[100px] border-white tracking-wider text-xl">
                Search
              </button>
            </div>
        </div>
      </div>
      <div className="grid gird-cols-1 py-[100px] sm:grid-cols-2 lg:grid-cols-3 gap-y-[40px] max-w-[1250px] mx-auto">
        <div className="col-span-full">
          <h2 className="text-center text-primary font-parkson font-bold text-4xl w-[100%] ">
            Jobs
          </h2>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              JOINERY
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              JOINERY
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              JOINERY
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              JOINERY
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              JOINERY
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              JOINERY
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              JOINERY
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              JOINERY
            </h2>
          </div>
        </div>
        <div className="mx-[60px]">
          <div className=" border-y-4 border-primary hover:bg-primary hover:text-white">
            <h2 className="text-center py-[30px] text-3xl font-parkson">
              JOINERY
            </h2>
          </div>
        </div>
      </div>

      <div className=" text-center  bg-primary py-9 px-4 gap-8 font-medium order-1">
        <div className="mb-[20px]">
          <p className="text-white text-3xl tracking-wider">
            Want to discuss your recruitment needs?
          </p>
        </div>
        <div className="flex flex-row justify-around bg-secondary rounded-md object-bottom w-[150px] mx-auto place-content-center hover:bg-white">
          <Link href="/contact-us">
            <a className="flex items-end h-full">
              <div className="flex flex-row justify-end">
                <div className=" flex flex-row w-full justify-center">
                  <button className="hover:bg-white font-parkson hover:text-secondary rounded-md bg-secondary text-white py-2  w-[120px] border-white tracking-wider text-2xl">
                    get employed
                  </button>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
