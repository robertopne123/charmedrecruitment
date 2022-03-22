import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="text-white bg-primary font-parkson tracking-wide">
      <div className="grid grid-cols-2 md:grid-cols-4 bg-dark-gray py-9 px-4 gap-8 font-medium order-1 border-t-8 border-secondary">
        <div className="col-span-2 md:col-span-1 px-1 py-1 lg:px-15 lg:pb-15">
          <Image
            className="align-top"
            src="/Logo.png"
            width="140"
            height="90"
            layout="responsive"
            className="object-contain"
          />
        </div>
        <div className="text-right md:text-left">
          <h3 className="text-secondary uppercase mb-2 text-3xl pb-[20px]">
            Preston HQ
          </h3>

          <p className="text-2xl text-right pb-[10px] md:text-left">
            <Link href="tel:01772 762729">
              <a className="hover:text-secondary text-2xl">
                01772 584880
              </a>
            </Link>
          </p>

          <p className="text-2xl text-right pb-[10px] break-words md:text-left">
            <Link href="mailto:hello@charmedrecruitment.co.uk">
              <a className="hover:text-secondary">
                hello@charmedrecruitment.co.uk
              </a>
            </Link>
          </p>
          
          <address className="not-italic text-right text-2xl md:text-left">
              <p className="pb-[10px]">
                <a href="https://goo.gl/maps/s6BpnJDUpk9adWGE6" className="hover:text-secondary">
                    Estate House,<br/>
                    18 Fox St,<br/>
                    Preston,<br/>
                    PR1 2AB
                </a>
              </p>
          </address>
        </div>

        <div className="">
          <h3 className="text-secondary uppercase mb-2 md:text-left text-left text-3xl pb-[20px]">
            Navigation
          </h3>
          <p className="text-2xl md:text-left text-left pb-[10px]">
            <Link href="/">
              <a className="hover:text-secondary">
                Home
              </a>
            </Link>
          </p>
          
          {/* <p className="text-2xl md:text-left text-right pb-[10px]">
            <Link href="/contact-us">
              <a className="hover:text-secondary">
                Job S
              </a>
            </Link>
          </p> */}
          
          <p className="text-2xl md:text-left text-left pb-[10px]">
            <Link href="/contact-us">
              <a className="hover:text-secondary">
                Contact Us
              </a>
            </Link>
          </p>
            
          <p className="text-2xl md:text-left text-left pb-[10px]">
            <Link href="/about-us">
              <a className="hover:text-secondary">
                About Us
              </a>
            </Link>
          </p>
        </div>

        <div className="md:text-left text-right md:col-span-1">
          <h3 className="text-secondary uppercase mb-2 text-3xl md:text-left pb-[20px]">
            Connect
          </h3>

          <p className="text-2xl md:text-left text-right pb-[10px]">
            <Link href="https://www.facebook.com/gigawaffleuk/">
              <a className="hover:text-secondary">
                Facebook
              </a>
            </Link>
          </p>

          <p className="text-2xl md:text-left text-right pb-[10px]">
            <Link href="https://www.linkedin.com/company/charmedrecruiting/">
              <a className="hover:text-secondary">
                LinkedIn
              </a>
            </Link>
          </p>

          <p className="text-2xl md:text-left text-right pb-[10px]">
            <Link href="https://www.instagram.com/charmed_recruitment/">
              <a className="hover:text-secondary">
                Instagram
              </a>
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-column w-full justify-between bg-primary">
        <div className="bg-primary py-3 px-6 text-xl">
          <span>
            &copy; 2022 Charmed Recruitment | Charmed Recruitment Ltd 13272215 -
            <Link href="/privacy-policy">
              <a className="hover:text-secondary "> Terms and Privacy Policy</a>
            </Link>
          </span>
        </div>
        <div className="bg-primary py-3 px-6 align-center">
          <span className="flex flex-col md:flex-row">
            <div>
              <a href="http://www.gigawaffle.co.uk">
                <p className=" px-[4px]">Designed by</p>
                <img
                  className="pl-4 align-center"
                  src="/GWLogo.svg"
                  width="50"
                  height="20"
                  href="http://www.gigawaffle.co.uk"
                />
              </a>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
