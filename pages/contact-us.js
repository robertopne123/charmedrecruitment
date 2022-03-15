import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Header } from "../components/header";
import Link from "next/link";

export default function JobSearch() {
  return (
    <div className="">
        <Head>
        <title>Charmed Recruitment</title>
        <meta
          name="description"
          content="Your business is important to you and protecting it should be simple. At Deltic Insurance, we want to help you get the right cover to make sure your business is protected."
        />
        <link rel="icon" href="/Logo.png"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass"
          rel="stylesheet"
        />
        </Head>
        <Header />
        <div className="grid grid-rows-4 grid-cols-3 uppercase text-white text-center font-parkson text-3xl tracking-wide bg-primary py-9 px-4 gap-8 order-1">
            <div />
            <div />
            <div />
            <div />
            <a>Contact us</a>
            <div />
            <div />
            <div className="border-t-[1px] mx-10 border-secondary" />
        </div>
        <div className="flex flex-row py-10 justify-around align-center bg-white">
            <div className="bg-primary max-w-[700px] h-[700px]">
                <div className=" flex justify-around px-10 py-10 border-4 border-secondary">
                    test
                </div>    
            </div>
        </div>
        <div className="grid text-white text-3xl font-parkson text-center grid-rows-2 grid-cols-3 bg-primary py-9 px-4 gap-8 order-1">
        <div />
        <div>
          Want to discuss your recruitment needs?
        </div>
        <div />
        <div />
        <div>
        <Link href="/contact-us">
            <a className="flex items-end h-full hover:text-secondary">   
                <div className="flex flex-row justify-around bg-secondary rounded-md object-bottom w-[150px] mx-auto place-content-center hover:bg-white">
                    <span className="uppercase md:text-base">
                      <p className="text-xl tracking-wide">Get Employed</p>
                    </span>
              </div>
            </a>
        </Link>
          </div>
        <div />
      </div>







      <Footer />
    </div>
  );
}
