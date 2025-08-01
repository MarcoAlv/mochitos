"use client";
import React from "react";
import { PROJECT_URL } from "@/config/app.config";
import Image from "next/image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@/components/icons/TikTokIcon";

const Footer = () => {
  const companyLinks = [
    { name: "Our Story", href: "#our-story" },
    { name: "Meet Sunny", href: "#meet-sunny" },
    { name: "Letters & Diary", href: "#letters-diary" },
    { name: "Adventure Map", href: "#adventure-map" },
    { name: "Dreams & Goals", href: "#dreams-goals" },
  ];

  const extraLinks = [{ name: "Extra", href: "#extra" }];

  const categoryLinks = [
    { name: "Date Checklist", href: "#date-checklist" },
    { name: "Gallery", href: "#gallery" },
    { name: "MochiFacts", href: "#mochi-facts" },
    { name: "Challenges", href: "#challenges" },
    { name: "Playlist", href: "#playlist" },
  ];

  const secondCategoryLinks = [
    { name: "Movies & Series", href: "#movies-series" },
    { name: "MochiRecipes", href: "#mochi-recipes" },
    { name: "Funny Moments", href: "#funny-moments" },
    { name: "MochiTest", href: "#mochi-test" },
    { name: "Mood Tracker", href: "#mood-tracker" },
  ];

  const allCategoryLinks = [...categoryLinks, ...secondCategoryLinks];

  const socialLinks = [
    {
      name: "YouTube",
      href: "#youtube",
      icon: YouTubeIcon,
      color: "text-red-500 hover:text-red-600",
    },
    {
      name: "Instagram",
      href: "#instagram",
      icon: InstagramIcon,
      color: "text-pink-500 hover:text-pink-600",
    },
    {
      name: "TikTok",
      href: "#tiktok",
      icon: TikTokIcon,
      color:
        "text-gray-800 hover:text-black dark:text-navy-blue-200 dark:hover:text-navy-blue-100",
    },
  ];

  return (
    <footer className="bg-white dark:bg-navy-blue-900 border-t border-gray-200 dark:border-navy-blue-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="block md:hidden px-4">
          <div className="flex justify-start xs:justify-center mb-8">
            <Image
              src={`${PROJECT_URL}/assets/img_icon.png`}
              width={60}
              height={60}
              alt="Mochitos"
              className="h-15 w-auto object-contain"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-navy-blue-100 mb-4 font-inter text-left xs:text-center">
              Company
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
              {[...companyLinks, ...extraLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-left xs:text-center text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-navy-blue-100 mb-4 font-inter text-left xs:text-center">
              Categories
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
              {allCategoryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-left xs:text-center text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center space-x-6 mb-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`${social.color} transition-colors duration-200 hover:scale-110 transform transition-transform`}
                  aria-label={social.name}
                >
                  <IconComponent sx={{ fontSize: 32 }} />
                </a>
              );
            })}
          </div>

          <div className="flex flex-row justify-center items-center space-y-0 space-x-6 mb-6">
            <a
              href="#terms"
              className="text-sm text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter"
            >
              Terms of Service
            </a>
            <a
              href="#privacy"
              className="text-sm text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter"
            >
              Privacy Policy
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-navy-blue-400 font-inter leading-relaxed">
              Made with love by Paola & Marcos
              <br className="xs:hidden" />
              <span className="hidden xs:inline">·</span> Mochitos © 2025
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src={`${PROJECT_URL}/assets/img_icon.png`}
                  width={60}
                  height={60}
                  alt="Mochitos"
                  className="h-15 w-auto object-contain"
                />
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-navy-blue-100 mb-4 font-inter">
                Company
              </h3>
              <div className=" lg:grid lg:grid-cols-2">
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 lg:mt-0">
                  <ul className="space-y-3">
                    {extraLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-navy-blue-100 mb-4 font-inter">
                Categories
              </h3>
              <ul className="space-y-3">
                {categoryLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-transparent mb-4">
                &nbsp;
              </h3>
              <ul className="space-y-3">
                {secondCategoryLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-navy-blue-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`${social.color} transition-colors duration-200 hover:scale-110 transform`}
                      aria-label={social.name}
                    >
                      <IconComponent sx={{ fontSize: 28 }} />
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="#terms"
                  className="text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter"
                >
                  Terms of Service
                </a>
                <a
                  href="#privacy"
                  className="text-gray-600 dark:text-navy-blue-300 hover:text-moch-500 dark:hover:text-moch-400 transition-colors duration-200 font-inter"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 dark:text-navy-blue-400 font-inter">
                Made with love by Paola & Marcos· Mochitos © 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
