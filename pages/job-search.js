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
        <link rel="icon" href="/delticicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <h1> A whole New website</h1>
      <Footer />
    </div>
  );
}
