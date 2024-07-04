import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div id="heroid">
        <div className="bg-[#006269] ">
          <div className=" ">
            <div className="grid  grid-cols-1 ml-10 md:ml-20  md:flex  ">
              <h1 className="text-[16px] pt-10 md:pt-20 md:pr-20 md:text-[24px] text-[#FFFFFF]">ABOUT</h1>
              <div className=" ">
                <p className="text-[32px] pt-7 md:pt-20 md:w-[500px]  font-prociono md:text-[50px] text-[#FFFFFF] leading-none">
                  India&apos;s Premier AI-Driven College Counseling Portal
                </p>
                <p className="mt-20 text-[14px] md:mt-9 md:w-[500px] md:text-[16px] text-[#FFFFFF] font-light ">
                  At Go Edu, we harness the power of AI to transform the college
                  admissions process. Our innovative platform offers
                  personalized guidance, ensuring each student finds their ideal
                  college match. We analyze academic records, interests, and
                  career goals to provide tailored recommendations.
                </p>
                <p className="mt-20 pb-16 text-[14px] md:mt-9 md:w-[500px] md:text-[16px] text-[#FFFFFF] font-light ">
                  With Goedu, students receive comprehensive support throughout
                  their college journey. Our expert counselors offer invaluable
                  advice, from application tips to interview preparation. Join
                  thousands of successful students who have found their perfect
                  college fit with Goedu!
                </p>
              </div>
              <div className="hidden lg:block">
                <Image
                  className="mt-10"
                  src="/hand.svg"
                  alt="bg image"
                  width={700}
                  height={400}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;