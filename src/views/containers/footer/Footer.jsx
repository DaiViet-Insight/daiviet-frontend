// import { footerLinks, socialMedia } from "../assets/constants";
// import { copyrightSign } from "../../../assets/icons";
import  RedditLogo  from "../../../assets/images/Reddit-Logo.png";
import {
    facebook,
    instagram,
  
    twitter,
    copyrightSign,
  } from "../../../assets/icons";

export const footerLinks = [
    // {
    //   title: "Products",
    //   links: [
    //     { name: "Chuck Taylor All Star", link: "/" },
    //     { name: "Run Star Hike Platform", link: "/" },
    //     { name: "Chuck 70 Tri-Color", link: "/" },
    //     { name: "Star Player 76", link: "/" },
    //     { name: "Chuck Taylor All Star Lift Platform", link: "/" },
    //     { name: "Run Star Legacy Chelsea CX", link: "/" },
    //   ],
    // },
    {
      title: "Help",
      links: [
        { name: "About us", link: "/" },
        { name: "FAQs", link: "/" },
        { name: "How it works", link: "/" },
        { name: "Privacy policy", link: "/" },
        { name: "Payment policy", link: "/" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { name: "hackdut.daiviet@gmail.com", link: "hackdut.daiviet@gmail.com" },
        { name: "+090669696", link: "tel:+090669696" },
      ],
    },
  ];
  
  export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
  ];
  

const Footer = () => {
  return (
    <footer className="max-container bg-black text-white px-32 pt-8 pb-24">
      <div className="flex justify-around items-start gap-20 flex-wrap max-lg:flex-col">
        
        <div className="flex flex-1 justify-around lg:gap-10 gap-20 flex-wrap text-lg">
            <div className="flex flex-col items-start text-lg">
            <a href="/">
                <img src={RedditLogo} width={200} height={46} />
            </a>
            <p 
                className="mt-6 text-base leading-9 text-2xl font-bold text-white-400 sm:max-w-sm"
                style={{
                    fontSize: "16px",
                }}
                >
                    Đại Việt - Khám phá lịch sử, kết nối tri thức, và đổi mới cách học!
            </p>
            <div className="flex items-center gap-5 mt-8">
                {socialMedia.map((icon) => (
                <div
                    key={icon.src}
                    className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                    <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
                ))}
            </div>
            </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 
                className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 text-lg"
                style={{
                    fontSize: "24px",
                }}
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal"
                    style={{
                        fontSize: "16px",
                        color: "color: rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-around text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div> */}
    </footer>
  );
};

export default Footer;