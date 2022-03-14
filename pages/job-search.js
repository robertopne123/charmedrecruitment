import Head from "next/head";
import Image from "next/image";
import Footer from "../Components/Footer";
import { Header } from "../components/header";

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
      {/* <img src="hamza.png"/> */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 bg-primary py-9 px-4 gap-8 font-medium order-1"></div>











      <Footer />
    </div>
  );
}
