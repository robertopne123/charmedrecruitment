import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { RNavbar } from "../components/navbar.js";
import { ECrisis } from "../components/energycrisis.js";
import { HowCanISwitch } from "../components/howcaniswitch.js";
import { HappyCustomers } from "../components/happycustomers.js";
import { FAQ } from "../components/faq.js";
import { FLinks } from "../components/footerlinks";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Charmed Recruitment | Recruiting Specialists</title>
        <meta
          name="description"
          content="We are Charmed Recruitment"
        />
        <link rel="icon" href="/switch.svg" />
      </Head>

      <RNavbar />

      {/*Teal header section*/}
      <div className="grid gap-4 grid-cols-2 xsmb:grid-cols-1 bg-primary">
        <div className="lg:w-1/2">
          <h1 className="text-white font-neue font-medium text-sheader mb:pl-5 mb:pt-4 lg:pl-10 lg:pt-8">
            Energy Comparison
          </h1>
          <h2 className="text-white font-neue font-bold text-lheader mb:pl-5 mb:pt-1 lg:pl-10 lg:pt-2">
            The UK
            <br />
            Energy Crisis
          </h2>
          <p className="text-white font-neueroman text-body max-w-sm mb:pl-5 mb:pt-2 lg:pl-10 lg:pt-4 xsmb:pr-5">
            We’d love for you to be able to use our online energy switching
            service, but we’ve currently suspended it due to the current energy
            crisis, but that doesn’t mean we still can’t get switched over.
          </p>
          <button className="text-white font-neue bg-swapmyoranges mb:ml-5 mb:mt-2 lg:ml-10 lg:mt-4 w-mainbutton h-mainbutton rounded-md drop-shadow-lg">
            Learn More
          </button>
        </div>
        <div className="">
          <img
            className="ml-auto pt-10 lg:pr-10 mb:pr-0 w-headerimg h-headerimg lg:h-headerimg lg:w-headerimg tab:h-headerimg tab:w-headerimg fulltab:object-cover lg:object-fill object-left xsmb:hidden"
            src="house.svg"
          ></img>
        </div>
      </div>
      <div className="h-headerafter bg-primary rounded-b-curve"></div>

      <ECrisis />

      <HowCanISwitch />

      <HappyCustomers />

      <FAQ />

      <Footer />
    </>
  );
}
