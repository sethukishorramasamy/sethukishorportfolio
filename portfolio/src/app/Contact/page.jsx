"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../Navbar/Navbar';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';


const Contact = () => {
    return (
        <main>
            <div className='{styles.container}'>
                <Navbar />
                <div className="grid grid-cols-1 sm:grid-cols-12 mb-0 md:mb-16 lg:mb-16">
                    <div className="mt-5 lg:mt-12 md:mt-12 col-span-7 place-self-center text-center sm:text-left">
                        <div className="md:grid gap-8 items-center py-3 px-4 xl:gap-16 sm:py-16 xl:px-16">
                            <div className="mt-16 md:mt-36 text-left flex flex-col h-full">
                                <h1 className="text-[#000000] mx-3 md:mx-3 lg:mx-0 mb-3 font-extrabold">
                                    <span className='text-2xl lg:text-3xl  text-[#3b5998]'>
                                        To Contact me directly,&nbsp;
                                    </span>
                                </h1>
                                <p className='text-[#5d5c5c] mx-3 md:mx-3 lg:mx-0'>please click the buttons below to reach out through WhatsApp, phone, or LinkedIn. I look forward to connecting with you!</p>
                                <div className="flex-grow lg:flex mt-5 w-full">
                                    <a href="tel:+91 8925638843" target="_blank" rel="noopener noreferrer">
                                        <div className="bg-transparent hover:bg-[#eeecec] mt-3 mx-2 justify-center flex"
                                            style={{
                                                borderRadius: "5px",
                                                border: "1px solid #eeecec",
                                                cursor: "pointer",
                                                height: "95px"
                                            }}>
                                            <img
                                                src="/contact/phone.png"
                                                alt="profile"
                                                height={105}
                                                width={105}
                                                style={{
                                                    borderRadius: "5px"
                                                }}
                                                className='p-5' />
                                        </div>
                                    </a>
                                    <a href="mailto:sethukishorramasamy@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <div className="bg-transparent hover:bg-[#eeecec] mt-3 mx-2 justify-center flex"
                                            style={{
                                                borderRadius: "5px",
                                                border: "1px solid #eeecec",
                                                cursor: "pointer",
                                                height: "95px"
                                            }}>
                                            <img
                                                src="/contact/email.png"
                                                alt="profile"
                                                height={100}
                                                width={100}
                                                style={{
                                                    borderRadius: "5px"
                                                }}
                                                className='p-5' />
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sethu-kishor-380872255" target="_blank" rel="noopener noreferrer">
                                        <div className="bg-transparent hover:bg-[#eeecec] mt-3 mx-2 justify-center flex"
                                            style={{
                                                borderRadius: "5px",
                                                border: "1px solid #eeecec",
                                                cursor: "pointer",
                                                height: "95px"
                                            }}>
                                            <img
                                                src="/contact/linked-in.png"
                                                alt="profile"
                                                height={100}
                                                width={100}
                                                style={{
                                                    borderRadius: "5px"
                                                }}
                                                className='p-5' />
                                        </div>
                                    </a>
                                    <a href="https://wa.me/918925638843" target="_blank" rel="noopener noreferrer">
                                        <div className="bg-transparent hover:bg-[#eeecec] mt-3 mx-2 justify-center flex"
                                            style={{
                                                borderRadius: "5px",
                                                border: "1px solid #eeecec",
                                                cursor: "pointer",
                                                height: "95px"
                                            }}>
                                            <img
                                                src="/contact/whatsapp.png"
                                                alt="profile"
                                                height={100}
                                                width={95}
                                                style={{
                                                    borderRadius: "5px"
                                                }}
                                                className='p-5' />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-5 md:px-0 lg:px-0'>
                        <div className="col-span-5 mt-2 md:mt-32 lg:mt-40 relative">
                            <div className='w-full h-[300px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] relative'>
                                <Image
                                    src="/contact/contact.png"
                                    alt="image"
                                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                                    height={500}
                                    width={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="bg-[#ffffff] py-6 text-[#3b5998] mb-0 text-center md:text-left">
                    <div className="container text-center mx-auto">
                        <p>Thank you for visiting my portfolio</p>
                    </div>
                </footer>
            </div>
        </main>


    );
};

export default Contact;