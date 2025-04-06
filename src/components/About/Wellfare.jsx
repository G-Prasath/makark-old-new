import React, { useState } from "react";
import Heading from "../Common/Heading/Heading";
import TabGallery from "./TabGallery";

const Wellfare = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="container mx-auto mt-10">
      <div className="mb-10">
        <Heading
          title="Public Welfare Participation"
          secTitle="We own and operate"
        />
      </div>
      <div className="sm:flex block">
        {/* Tabs on the left */}
        <div className="w-full sm:w-1/4 border-r border-gray-300">
          <ul className="space-y-2 grid grid-cols-2 sm:grid-cols-1">
            <li
              className={`${
                activeTab === "home" ? "bg-gray-100 text-orange-500" : ""
              } cursor-pointer`}
            >
              <a
                href="#home"
                onClick={() => setActiveTab("home")}
                className={`block px-4 py-2 border-l-4 ${
                  activeTab === "home"
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
              >
                Events
              </a>
            </li>
            <li
              className={`${
                activeTab === "profile" ? "bg-gray-100 text-orange-500" : ""
              } cursor-pointer`}
            >
              <a
                href="#profile"
                onClick={() => setActiveTab("profile")}
                className={`block px-4 py-2 border-l-4 ${
                  activeTab === "profile"
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
              >
                Celibirations
              </a>
            </li>
            <li
              className={`${
                activeTab === "messages" ? "bg-gray-100 text-orange-500" : ""
              } cursor-pointer`}
            >
              <a
                href="#messages"
                onClick={() => setActiveTab("messages")}
                className={`block px-4 py-2 border-l-4 ${
                  activeTab === "messages"
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
              >
                Team Outing
              </a>
            </li>
            <li
              className={`${
                activeTab === "settings" ? "bg-gray-100 text-orange-500" : ""
              } cursor-pointer`}
            >
              <a
                href="#settings"
                onClick={() => setActiveTab("settings")}
                className={`block px-4 py-2 border-l-4 ${
                  activeTab === "settings"
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
              >
                Other Event
              </a>
            </li>
          </ul>
        </div>

        {/* Content on the right */}
        <div className="w-full sm:w-3/4 sm:p-4 p-0">
          {activeTab === "home" && (
            <div data-aos="fadein" data-aos-duration="1200">
              <TabGallery />
            </div>
          )}
          {activeTab === "profile" && (
            <div>
              <TabGallery />
            </div>
          )}
          {activeTab === "messages" && (
            <div>
              <TabGallery />
            </div>
          )}
          {activeTab === "settings" && (
            <div>
              <TabGallery />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wellfare;
