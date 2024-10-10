"use client";
import Image from "next/image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CountUp from "react-countup";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function Home() {
  return (
    <div className="  bg-[#1b1d20] py-52 md:h-full md:w-screen">
      {/* Upper */}
      <div className="flex md:flex-row p-6  text-center md:text-left  flex-col md:ml-20 md:mr-11 gap-7 ">
        <div>
          {/* Text */}
          <img
            src="/assets/images/iwan_text.png"
            className=" md:w-[22.313rem] md:p-6 w-auto md:mr-36 h-[20.5rem] pt-6 "
          />
        </div>

        <div className="text-white md:w-[39.875rem]   font-poppins text-xl pt-16">
          <p>
            Inspired by iconic architecture that embodies elegance and beauty,
            IWAN Design House was founded to enrich society through artistry.
            With 100+ projects across Egypt, Saudi Arabia, Kuwait, Qatar,
            Lebanon, Bahrain, UAE, and Germany, we offer comprehensive solutions
            in interior design, architecture, urban planning, landscape design,
            and fit-outs.
          </p>

          {/*  numbers */}
          <div className="flex md:flex-row flex-col gap-20 pt-[4.5rem]">
            <div>
              <p className="font-bold text-6xl">
                <CountUp end={400} duration={4} />
                <span className="text-[#FFD400] ">+</span>
              </p>

              <p className="whitespace-nowrap text-[#AEAEAE] text-xl font-bold">
                Client
              </p>
            </div>

            <div>
              <p className="font-bold text-6xl">
                <CountUp end={2} duration={4} />k
                <span className="text-[#FFD400]">+</span>
              </p>
              <p className="whitespace-nowrap font-bold text-[#AEAEAE] text-xl">
                Product
              </p>
            </div>

            <div>
              <p className="font-bold text-6xl">
                <CountUp end={12} duration={4} />
                <span className="text-[#FFD400]">+</span>
              </p>
              <p className="whitespace-nowrap font-bold text-[#AEAEAE] text-xl">
                Year Experience
              </p>
            </div>
          </div>
        </div>

        {/* image */}
        <div>
          <img
            src="/assets/images/interior_1.png"
            className="text-white w-full h-full size-[32.75rem] relative"
          />
        </div>
      </div>

      {/* middle */}
      <div className="flex md:flex-row flex-col p-6  gap-14 md:ml-28 mt-3">
        <a
          href="/assets/Portfolio.pdf"
          download
          className="btn rounded-full p-6 content-center font-extrabold bg-[#FFD400] hover:bg-[#b39c29] "
        >
          Portfolio <FileDownloadIcon />
        </a>

        <a
          href="/assets/company_profile.pdf"
          download
          className="btn rounded-full p-6 content-center font-extrabold bg-[#FFD400] hover:bg-[#b39c29] "
        >
          Company Profile <FileDownloadIcon />
        </a>
      </div>

      {/* Lower */}
      <div className="flex md:flex-row flex-col p-6 md:p-0">
        {/* first */}
        <div>
          <img src="/assets/images/vector.png" />
        </div>

        <div>
          {" "}
          <div className="text-white md:w-[39.875rem]   font-poppins text-xl pt-16">
            <p>
              IWAN Interior Design House specializes in creating exceptional
              interiors, fit-outs, and decorative solutions. We blend creativity
              with functionality to transform spaces into elegant environments
              that reflect our clients' vision and style.
            </p>
          </div>
        </div>
        <div>
          {" "}
          {/* image */}
          <div>
            <img
              src="/assets/images/interior_2.png"
              className="text-white w-full h-full size-[32.75rem] relative md:pr-14 pt-5"
            />
            <FloatingWhatsApp
              phoneNumber="+201032004400"
              accountName=" IWAN Interiors"
              avatar="/assets/images/logo.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
