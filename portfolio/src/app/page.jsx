"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Navbar from './Navbar/Navbar';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';


const Home = () => {
  return (
    <main>
      <div className='{styles.container}'>
        <Navbar />
        <div className='container mt-24 mx-auto py-4 px-12'>
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 mb-0 md:mb-28 lg:mb-16">
              <div className="mt-5 lg:mt-12 md:mt-32 col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-[#a7a6a6] mb-3 md:mb-4 text-2xl sm:text-4xl lg:text-3xl font-extrabold">
                  <div className='mb-2'>
                    <span className='text-4xl sm:text-5xl lg:text-6xl text-[#3b5998] font-extrabold'>
                      Sethu Kishor&nbsp;
                    </span></div>

                  <TypeAnimation
                    sequence={[
                      "Web Developer",
                      1000,
                      "UnderGraduate Student",
                      1000,
                      "Pursuing a BE Degree",
                      1000,
                      "ECE Engineer",
                      1000,
                      "Batch 2020-24",
                      1000,
                      "Anna University",
                      1000,
                      "Chennai",
                      1000,
                      "Tamil Nadu",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />

                </h1>
                <p className="text-[#ADB7BE] text-base md:text-lg sm:text-sm lg:text-x">
                  Welcome to my portfolio, a showcase of my skills, projects, and passion for innovation. </p>
                <div className='lg:flex'>
                  <a href="https://www.linkedin.com/in/sethu-kishor-380872255/" target="_blank" rel="noopener noreferrer"
                    className="mt-6 mx-1 md:mt-5 px-6 py-3 w-full sm:w-fit bg-[#3b5998] hover:bg-transparent text-white hover:text-[#3b5998]"
                    style={{
                      border: '2px solid #3b5998', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
                    }}>
                    LinkedIn
                    <span style={{ fontSize: '13px', marginLeft: '5px' }}>
                      <span>
                        <FaExternalLinkAlt />
                      </span>
                    </span>
                  </a>
                  <a href="Sethu Kishor's Resume.pdf" download="Sethu Kishor Resume" target="_blank" rel="noopener noreferrer"
                    className="mt-2 mx-1 md:mt-5 px-6 py-3 w-full sm:w-fit bg-[#a7a6a6] hover:bg-transparent text-white hover:text-[#a7a6a6]"
                    style={{ border: '2px solid #a7a6a6', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                    Resume
                    <span style={{ fontSize: '13px', marginLeft: '5px' }}>
                      <span>
                        <FaDownload />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-span-5 place-self-center mt-2 md:mt-20 lg:mt-10">
                <div className=' w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] relative'>
                  <Image
                    src="/image/home.png"
                    alt="image"
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    height={500}
                    width={500}
                  />
                </div>
              </div>
            </div>

            <footer className="bg-[#ffffff] py-6 text-[#3b5998] mb-0 text-center md:text-left">
              <div className="container text-center mx-auto">
                <p>&copy;2023 , made by <b>Sethu Kishor</b></p>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </main>


  );
};

export default Home;