import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { RNavbar } from "../components/navbar.js";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <Head>
        <title>Deltic Business Solutions</title>
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
      <RNavbar />

      <Footer />
    </div>
  );
}
