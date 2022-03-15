import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="text-white bg-primary font-parkson">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 bg-dark-gray py-9 px-4 gap-8 font-medium order-1 border-t-8 border-secondary">
        <div className="col-span-2 xl:col-span-1">
          <Image
            src="/logo.png"
            width="100"
            height="100"
            layout="fixed"
            className="object-contain"
          />
        </div>
        <div className="order-3">
          <h3 className="text-secondary  uppercase mb-2 font-4xl tracking-wide">Preston HQ</h3>
          <Link href="tel:01772 762729">
            <a className="hover:text-secondary tracking-wide">
              <span>01772 584880</span>
              <br />
            </a>
          </Link>
          <Link href="mailto:hello@charmedrecruitment.co.uk">
            <a className="hover:text-secondary tracking-wide">
              <span className="break-words">
                hello@charmedrecruitment.co.uk
              </span>
            </a>
          </Link>
          <address className="not-italic tracking-wide">
            Estate House, <br /> 18 Fox St, <br /> Preston <br /> PR1 2AB
          </address>
        </div>
        <div className="order-5">
          <h3 className="text-secondary uppercase mb-2 tracking-wide">Navigation</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/index">
                <a className="hover:text-secondary tracking-wide">Home</a>
              </Link>
            </li>
            <li>
              {/*Needs changing when individual page created*/}
              <Link href="/job-search">
                <a className="hover:text-secondary tracking-wide">Job Search</a>
              </Link>
            </li>
            <li>
              {/*Needs changing when individual page created*/}
              <Link href="/contact-us">
                <a className="hover:text-secondary tracking-wide">Contact Us</a>
              </Link>
            </li>
            <li>
              {/*Needs changing when individual page created*/}
              <Link href="/brand-design">
                <a className="hover:text-secondary tracking-wide">About Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-6">
          <h3 className="text-secondary uppercase mb-2 tracking-wide md:text-left text-right">Connect</h3>
          <ul className="space-y-4">
            <li>
              <Link href="https://www.facebook.com/gigawaffleuk">
                <a className="hover:text-secondary tracking-wide md:text-left text-right">Facebook</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/charmedrecruiting/">
                <a className="hover:text-secondary tracking-wide md:text-left text-right">LinkedIn</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/charmed_recruitment/">
                <a className="hover:text-secondary tracking-wide md:text-left text-right">Instagram</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-1 order-2 xl:order-last col-span-2 xl:col-span-1">
          <div className="bg-primary h-full w-full items-end">
            <div className="flex flex-row justify-around bg-secondary rounded-md object-bottom w-[150px] mx-auto place-content-center hover:bg-white">
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
          </div>
        </div>
      </div>
      <div className="flex flex-column w-full justify-between bg-primary">
        <div className="bg-primary py-3 px-6">
          <span>
            &copy; 2022 Charmed Recruitment | Charmed Recruitment Ltd 13272215 -
            <Link href="/privacy-policy">
              <a className="hover:text-secondary tracking-wide"> Terms and Privacy Policy</a>
            </Link>
          </span>
        </div>
        <div className="bg-primary py-3 px-6">
          <span className="flex flex-col md:flex-row">
            <p className="px-[6px] tracking-wide">Designed by</p>
            <img
              src="/gigawaffle.png"
              width="100"
              height="20"
              href="http://www.gigawaffle.co.uk"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
