import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="text-white bg-primary font-parkson tracking-wide">
      <div className="grid grid-cols-2 md:grid-cols-4  bg-dark-gray py-9 px-4 gap-8 font-medium order-1 border-t-8 border-secondary">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/logo.png"
            width="100"
            height="100"
            layout="fixed"
            className="object-contain"
          />
        </div>
        <div className="">
          <h3 className="text-secondary  uppercase mb-2   text-3xl pb-[20px]">
            Preston HQ
          </h3>
          <Link href="tel:01772 762729">
            <a className="hover:text-secondary  text-2xl ">
              <p className="pb-[10px]">01772 584880</p>
            </a>
          </Link>
          <Link href="mailto:hello@charmedrecruitment.co.uk">
            <a className="hover:text-secondary ">
              <p className="break-words text-2xl pb-[10px]">
                hello@charmedrecruitment.co.uk
              </p>
            </a>
          </Link>
          <address className="not-italic  text-2xl">
            <p className="pb-[10px]">Estate House,</p>
            <p className="pb-[10px]">18 Fox St,</p>
            <p className="pb-[10px]">Preston </p>
            <p className="pb-[10px]">PR1 2AB</p>
          </address>
        </div>

        <div className="">
          <h3 className="text-secondary uppercase mb-2 md:text-left text-right text-3xl pb-[20px]">
            Navigation
          </h3>
          <Link href="/">
            <a className="hover:text-secondary">
              {" "}
              <p className="text-2xl md:text-left text-right pb-[10px]">Home</p>
            </a>
          </Link>
          <Link href="/job-search">
            <a className="hover:text-secondary">
              <p className="text-2xl md:text-left text-right pb-[10px]">
                Job Search
              </p>
            </a>
          </Link>
          <Link href="/contact-us">
            <a className="hover:text-secondary">
              <p className="text-2xl md:text-left text-right pb-[10px]">
                Contact Us
              </p>
            </a>
          </Link>
          <Link href="/about-us">
            <a className="hover:text-secondary">
              <p className="text-2xl md:text-left text-right pb-[10px]">
                About Us
              </p>
            </a>
          </Link>
        </div>

        <div className="col-span-full md:col-span-1">
          <h3 className="text-secondary uppercase mb-2 text-3xl md:text-left text-center pb-[20px]">
            Connect
          </h3>

          <Link href="https://www.facebook.com/gigawaffleuk">
            <a className="hover:text-secondary  ">
              <p className="text-2xl md:text-left text-center pb-[10px]">
                {" "}
                Facebook
              </p>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/company/charmedrecruiting/">
            <a className="hover:text-secondary  ">
              <p className="text-2xl md:text-left text-center pb-[10px]">
                {" "}
                LinkedIn
              </p>
            </a>
          </Link>

          <Link href="https://www.instagram.com/charmed_recruitment/">
            <a className="hover:text-secondary  ">
              <p className="text-2xl md:text-left text-center pb-[10px]">
                {" "}
                Instagram
              </p>
            </a>
          </Link>
        </div>
      </div>

      <div className="flex flex-column w-full justify-between bg-primary">
        <div className="bg-primary py-3 px-6">
          <span>
            &copy; 2022 Charmed Recruitment | Charmed Recruitment Ltd 13272215 -
            <Link href="/privacy-policy">
              <a className="hover:text-secondary "> Terms and Privacy Policy</a>
            </Link>
          </span>
        </div>
        <div className="bg-primary py-3 px-6">
          <span className="flex flex-col md:flex-row">
            <p className="px-[6px] ">Designed by</p>
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
