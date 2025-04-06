import React from "react";
import { Link } from "react-router-dom";
import { FooterData } from "../../data/FooterData";
import FloatingButtons from "./FloatingButtons";
import BacktoTop from "./BacktoTop";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900">
        <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="flex justify-center text-teal-300 sm:justify-start">
                <img src={FooterData.logoSrc} alt="Footer-Logo" className="w-[150px]" />
              </div>

              <p className="max-w-md mx-auto mt-3 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
                {FooterData.description}
              </p>

              <ul className="flex justify-center gap-3 mt-8 md:gap-5 sm:justify-start">
                {FooterData.socialMediaIcons.map((item, index) => {
                  const IconComponent = item.img;
                  return (
                    <li key={index}>
                      <Link
                        to={item.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-gray-400 transition hover:text-gray-100"
                      >
                        <IconComponent size={24} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
              {FooterData.sections.map((section, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white" data-aos="zoom-in-left" data-aos-duration="2000">{section.title}</p>

                  <nav className="mt-8">
                    <ul className="space-y-4 text-sm">
                      {section.links?.map((link, linkIndex) => (
                        <li key={linkIndex} data-aos="zoom-in-down" data-aos-duration="2000">
                          <Link className="text-white transition hover:text-white/75" to={link.url}>
                            {link.text}
                          </Link>
                        </li>
                      ))}

                      {section.contactInfo?.map((contact, contactIndex) => (
                        <li key={contactIndex} data-aos="zoom-in-left" data-aos-duration="2000">
                          <Link
                            className="flex items-center justify-center sm:justify-start gap-1.5 group"
                            to={contact.url || "#"}
                          >
                            <span className="text-white transition group-hover:text-white/75">
                              {contact.value}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-12 border-t border-gray-800">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-400">
                <span className="block sm:inline">All rights reserved.</span>
                {FooterData.footerLinks.map((link, linkIndex) => (
                  <React.Fragment key={linkIndex}> {/* Corrected with React.Fragment and key */}
                    <Link
                      className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                      to={link.url}
                    >
                      {link.text}
                    </Link>
                    {linkIndex < FooterData.footerLinks.length - 1 && <span>&middot;</span>}
                  </React.Fragment>
                ))}
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0" data-aos="fade-left" data-aos-duration="2000">
                &copy; {FooterData.copyrightYear} {FooterData.companyName}
              </p>
            </div>
          </div>
        </div>
      </footer>
      <FloatingButtons />
      <BacktoTop/>
    </>
  );
};

export default Footer;
