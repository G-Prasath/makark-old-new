import {
    FaSquareFacebook,
    FaInstagram,
    FaSquareXTwitter,
    FaSquarePinterest,
    FaYoutube,
  } from "react-icons/fa6";
  import { IoLogoLinkedin } from "react-icons/io5";
  

export const FooterData = {
  logoSrc: "/Home/logo.png",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.",
  socialMediaIcons: [
    {
      img: FaSquareFacebook,
      url: "https://www.facebook.com/mekarkindustrialmanufacturers",
    },
    {
      img: FaInstagram,
      url: "https://www.instagram.com/mekarkindustrial?igshid=NzZlODBkYWE4Ng%3D%3D",
    },
    {
      img: FaSquareXTwitter,
      url: "https://twitter.com/MekarkPEB",
    },
    {
      img: FaSquarePinterest,
      url: "https://in.pinterest.com/mekarkindustrialmanufacturer/",
    },
    {
      img: FaYoutube,
      url: "https://www.youtube.com/channel/UCsCdBcilS4Ib5l1C7l2u3bg",
    },
    {
      img: IoLogoLinkedin,
      url: "https://www.linkedin.com/in/mekark-peb-856448264/",
    },
  ],
  sections: [
    {
      title: "About Us",
      links: [
        { text: "Company History", url: "/" },
        { text: "Meet the Team", url: "/" },
        { text: "Employee Handbook", url: "/" },
        { text: "Careers", url: "/career" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { text: "Web Development", url: "/" },
        { text: "Web Design", url: "/" },
        { text: "Marketing", url: "/" },
        { text: "Google Ads", url: "/" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { text: "FAQs", url: "/" },
        { text: "Support", url: "/" },
        { text: "Live Chat", url: "/" },
      ],
    },
    {
      title: "Contact Us",
      contactInfo: [
        { type: "email", value: "john@doe.com", url: "/" },
        { type: "phone", value: "0123456789", url: "/" },
        { type: "address", value: "213 Lane, London, United Kingdom" },
      ],
    },
  ],
  footerLinks: [
    { text: "Terms & Conditions", url: "/" },
    { text: "Privacy Policy", url: "/" },
  ],
  copyrightYear: "2022",
  companyName: "Company Name",
};

// Social Media
export const SocialMediaIcons = [];
