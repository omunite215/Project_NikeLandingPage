import { footerLinks, socialMedia } from "@/constants";
import { copyrightSign } from "@/public/icons";
import { footerLogo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" max-container">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image src={footerLogo} alt="footer-logo" width={150} height={46} />
          </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect Size in Store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className=" flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red cursor-pointer"
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt="Copyright-sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className=" font-montserrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
