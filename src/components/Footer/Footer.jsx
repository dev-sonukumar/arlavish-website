import React from "react";
import { Heading, Paragraph, Wraper } from "../ComponentsIndex";
import { instagram, call, location } from "../Img/ImportedImage";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <Heading className="text-[17px] md:text-[38px]  text-custom-yellow  font-normal ">
              AR LIVISH
            </Heading>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <Wraper>
              <ul className="text-sm pt-4 pl-5 flex flex-col gap-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Appointment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
              </ul>
            </Wraper>
          </div>
          <Wraper className=" flex flex-col justify-between items-start gap-4">
            {/* -- Instgram --  */}
            <div className="instagram flex justify-end">
              <div className="flex justify-end items-center text-sm">
                <div>
                  <img src={instagram} className="w-[40px]" />
                </div>
                <Paragraph className="pl-4 text-[16px] w-[290px]">
                  Follow Us On Instagram @alkamakeover.arlavish
                </Paragraph>
              </div>
            </div>
            {/* -- Location --  */}
            <div className="instagram flex ">
              <div className="flex justify-end items-center text-sm">
                <div>
                  <img src={location} className="w-[40px] " />
                </div>
                <Paragraph className="pl-4 w-[290px] ">
                  Alka Makeover | AR Lavish Beauty Saloon, 25 Foota, Baprola Rd,
                  opposite MCD Dispensary, Nangli Vihar Extension, Baprola, New
                  Delhi, Delhi, 110043
                </Paragraph>
              </div>
            </div>
            {/* -- phone --  */}
            <div className="instagram  w-[290px]">
              <div className="flex  items-center text-sm ">
                <div>
                  <img src={call} className="w-[40px] " />
                </div>
                <Heading className="pl-4 w-[290px] text-[17px] md:text-[18px]  font-normal ">
                  09811537953
                </Heading>
              </div>
            </div>
          </Wraper>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
