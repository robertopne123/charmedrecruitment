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
<<<<<<< HEAD
        <link rel="icon" href="/Logo.png"/>
        </Head>
        <Header />
        <div className="max-w-[1200px] border-[2px] py-[75px] sm:p-[75px] border-secondary bg-primary mx-auto my-[75px] relative">
            <div className="my-auto p-[50px]  border-[2px] border-secondary ">
                <form
                    className="flex flex-col"
                    name="Contactform"
                    method="POST"
                    action="/"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="inquiryForm" />
                    <p className="hidden">
                    <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                    </p>
                    <div className="grid grid-cols-2 gap-7 font-parkson tracking-wider text-lg">
                    <div className=" ">
                        <input
                        className="placeholder-primary w-full uppercase appearance-none border mb-2 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="FIRST NAME"
                        ></input>
                    </div>
                    <div className=" ">
                        <input
                        className="placeholder-primary uppercase w-full appearance-none border mb-2 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        ></input>
                    </div>
                    <div className=" ">
                        <input
                        className="placeholder-primary uppercase appearance-none border mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Email*"
                        required
                        ></input>
                    </div>
                    <div className=" ">
                        <input
                        className="placeholder-primary uppercase appearance-none border mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Notes"
                        type="email"
                        name="notes"
                        placeholder="Repeat Email*"
                        required
                        ></input>
                    </div>

                    <div className="col-span-full">
                        <input
                        className="placeholder-primary bg-white appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phoneNumber"
                        type="tel"
                        placeholder="Phone Number*"
                        name="phoneNumber"
                        required
                        ></input>
                    </div>

                    <div className="col-span-full ">
                        <textarea
                        className="placeholder-primary bg-white appearance-none border  mb-2 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        type="text"
                        placeholder="Message*"
                        name="message"
                        row="3"
                        required
                        ></textarea>
                    </div>

                    
                    </div>
                    <div className=" flex flex-row w-full justify-end">
                        <button
                        className="hover:bg-white font-parkson hover:text-secondary rounded-md bg-secondary text-white py-2  w-[100px] border-white tracking-wider text-xl"
                        type="submit"
                        onClick={console.log("hello")}
                        >
                        Submit
                        </button>
                    </div>
          </form>
        </div>
            <div className="absolute max-w-[1200px] left-[20px] sm:left-[90px] top-[51px]">
            <div className="p-[10px] bg-primary ">
                <h2 className="text-white font-semibold text-xl">YOUR DETAILS</h2>
            </div>
            </div>
        </div>
        
        
        
        {/* bottom blue bit */}
        <div className="grid text-white text-3xl font-parkson text-center grid-rows-2 grid-cols-3 bg-primary py-9 px-4 gap-8 order-1">
=======
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Header />
      <div className="grid grid-rows-4 grid-cols-3 uppercase text-white text-center font-parkson text-3xl tracking-wide bg-primary py-9 px-4 gap-8 order-1">
>>>>>>> 1ea7740484b228f6ea4883edb4817d819b977e43
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
        <div>Want to discuss your recruitment needs?</div>
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

<<<<<<< HEAD

=======
>>>>>>> 1ea7740484b228f6ea4883edb4817d819b977e43
      <Footer />
    </div>
  );
}
