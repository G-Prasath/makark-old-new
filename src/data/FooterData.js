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
    "Mekark company provides residential and commercial clients across the world with innovative and cost-effective builds.",
  socialMediaIcons: [
    {
      img: FaSquareFacebook,
      url: "https://www.facebook.com/mekarkindustrialmanufacturers",
    },
    {
      img: FaInstagram,
      url: "https://www.instagram.com/mekarkindustrial/",
    },
    {
      img: FaSquareXTwitter,
      url: "https://x.com/MekarkPEB",
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
      url: "https://www.linkedin.com/company/mekark/posts/?fe",
    },
  ],
  sections: [
    {
      title: "About Us",
      links: [
        { text: "About us", url: "/about-us" },
        { text: "Blog", url: "/" },
        { text: "Careers", url: "/career" },
        { text: "Contact Us", url: "/contact-us" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { text: "Pre Engineered Building", url: "/pre-engineered-building-manufacturer-company-chennai" },
        { text: "Warehouse shed", url: "/warehouse-shed-manufacturer-chennai" },
        { text: "Industrial shed", url: "/peb-industrial-shed-supplier" },
        { text: "Factory Buildings", url: "/factory-building-manufacturer" },
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
        { type: "email", value: "Email : admin@mekark.com", url: "mailto:admin@mekark.com" },
        { type: "phone", value: "Phone : +91 97909 24754", url: "tel:+919790924754" },
        { type: "address", value: "15,62nd street, Ashok Nagar, Chennai-600083" },
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
