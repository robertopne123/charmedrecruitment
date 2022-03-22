import Head from "next/head";
import Image from "next/image";
import { Footer } from "../Components/Footer";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div className=" w-full font-parkson">
      <Head>
        <title>Charmed Recruitment</title>
        <meta name="description" content="We'll sort you a job, mate!" />
        <link rel="icon" href="/LogoCropped.png" />
      </Head>
      <Header />
      <img src="Hamgif.gif" />
      <span>You appear to have taken a wrong turn... flee now</span>
      <Footer />
    </div>
  );
}
