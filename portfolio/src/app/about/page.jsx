"use client";

import React, { useState } from 'react';
import { useTransition } from 'react';
import Navbar from '../Navbar/Navbar';
import TabButton from '../Navbar/TabButton';
import Image from 'next/image';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="text-center left-0 top-0 relative">
                <div className="text-center left-0 top-0 mt-2">
                    <div className="text-center left-0 top-0 rounded-lg">
                        <div className="flex-grow">
                            <div className="flex items-start">
                                <Image
                                    src="/image/nextjs.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Next.js</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">nextjs.org</a></p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/bootstrap.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Bootstrap</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">getbootstrap.com</a></p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/js.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>JavaScript</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">w3schools.com</a></p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/html.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>HTML5</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">w3schools.com</a></p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/css-3.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>CSS3</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">w3schools.com</a></p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/java.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Java</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.udemy.com/course/java-the-complete-java-developer-course/" target="_blank" rel="noopener noreferrer">udemy.com</a></p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/selenium.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Selenium</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.selenium.dev/" target="_blank" rel="noopener noreferrer">selenium.dev</a></p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/arvr.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>ARVR</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://arvr.google.com/" target="_blank" rel="noopener noreferrer">arvr.google.com</a></p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/frontend.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Front-End Development</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.educba.com/" target="_blank" rel="noopener noreferrer">educba.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Education",
        id: "education",
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <div className="text-center left-0 top-0 relative">
                <div className="text-center left-0 top-0 mt-2">
                    <div className="text-center left-0 top-0 rounded-lg">
                        <div className="flex-grow">
                            <div className="flex items-start ">
                                <Image
                                    src="/image/codeclause.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Web development</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/company/codeclause/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>CodeClause</a> · Oct 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/internpe.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Web development</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/company/internpe/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>InternPe</a> · Aug 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/ibm.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>AI Enabled Car Parking</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/company/ibm/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>IBM</a> · Jul 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/educba.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Frontend Development</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/company/corporate-bridge-academy/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>EDUCBA</a> · Jul 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/greatlearning.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Frontend Development</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/school/great-learning/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>Great Learning</a> · Jul 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/litztech.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Full Stack Web Development</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="http://litztech.in" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>Litz Tech</a> · Jul 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/hackerrank.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Cascading Style Sheets</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/company/hackerrank/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>HackerRank</a> · Jun 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/greatlearning.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Java Programming</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/school/great-learning/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>Great Learning</a> · May 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/tessolvelogo.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Embedded & IOT</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/company/tessolve-services-pvt-ltd/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>Tessolve</a> · Mar 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/lumos.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>HTML Certification</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/company/lumos-learning/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>Lumos Learning</a> · Feb 2023</p>
                                </div>
                            </div>
                            <div className='ml-6 mr-7'>
                                <hr className='mt-8' />
                            </div>
                            <div className="flex items-start mt-2">
                                <Image
                                    src="/image/naanmudhalvan.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Augmented Reality Virtual Reality</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <a href="https://www.linkedin.com/school/naan-mudhalvan/" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#3b5998"
                                    }}>Naan Mudhalvan</a> · Nov 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

const EDUCATION_DATA = [
    {
        title: "B.E",
        id: "be",
        content: (
            <div className="text-center left-0 top-0 relative">
                <div className="text-center left-0 top-0 mt-2">
                    <div className="text-center left-0 top-0 rounded-lg">
                        <div className="flex-grow">
                            <div className="flex items-start ">
                                <Image
                                    src="/image/ssm.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>SSM Institute of Engineering and Technology</p>
                                    <p className="text-[#000000] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}>Anna University, Chennai</p>
                                    <p className="text-[#000000] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}>Bachelor of Engineering - BE, Electronics and Communication Engineering</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}>Oct 2020 - Aug 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "HSC",
        id: "hsc",
        content: (
            <div className="text-center left-0 top-0 relative">
                <div className="text-center left-0 top-0 mt-2">
                    <div className="text-center left-0 top-0 rounded-lg">
                        <div className="flex-grow">
                            <div className="flex items-start ">
                                <Image
                                    src="/image/pmhss.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Pannai Matriculation Higher Secondary School</p>
                                    <p className="text-[#000000] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}>Arockiasamy Nagar, Dindigul</p>
                                    <p className="text-[#000000] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}>Computer Science Mathematics · State Board</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}>June 2019 - Mar 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "SSLC",
        id: "sslc",
        content: (
            <div className="text-center left-0 top-0 relative">
                <div className="text-center left-0 top-0 mt-2">
                    <div className="text-center left-0 top-0 rounded-lg">
                        <div className="flex-grow">
                            <div className="flex items-start ">
                                <Image
                                    src="/image/pmhss.png"
                                    alt="profile"
                                    height={45}
                                    width={45}
                                    className="md:ml-7 mt-5" style={{
                                        borderRadius: "5px"
                                    }} />
                                <div className="ml-2 md:ml-0 mt-4 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Pannai Matriculation Higher Secondary School</p>
                                    <p className="text-[#000000] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}>Arockiasamy Nagar, Dindigul</p>
                                    <p className="text-[#000000] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}>State Board</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}>June 2017 - Mar 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

const AboutPage = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    const [educationTab, setEducationTab] = useState("be");

    const handleEducationTabChange = (id) => {
        setEducationTab(id);
    }

    const initialText =
        "I am a web developer with a strong foundation in HTML, CSS, and Bootstrap, allowing me to create visually appealing and responsive web applications. I possess a basic understanding of JavaScript and have experience with Selenium WebDriver for automated testing. Currently, I am actively learning Next.js to enhance my skills in front-end web development";

    const [isExpanded, setIsExpanded] = useState(false);
    const textToShow = isExpanded ? initialText : initialText.slice(0, 120);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="bg-white" id="about">
            <Navbar />
            <div className="grid grid-cols-1 sm:grid-cols-12 mb-0 md:mb-28 lg:mb-16">
                <div className="mt-5 lg:mt-12 md:mt-12 col-span-7 place-self-center text-center sm:text-left">
                    <div className="md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                        <div className="mt-16 md:mt-36 text-left flex flex-col h-full">
                            <h1 className="text-[#000000] mx-3 md:mx-3 lg:mx-0 mb-4 font-extrabold">
                                <span className='text-3xl lg:text-4xl  text-[#3b5998]'>
                                    About me&nbsp;
                                </span>
                            </h1>
                            <div className='mx-3 lg:mx-0 mt-0 md:mt-2 lg:mt-0' style={{
                                display: "flex"
                            }}>
                                <p>{textToShow} {initialText.length > 120 && (
                                    <button className='text-[#3b5998] pl-1' onClick={toggleReadMore} style={{
                                        fontWeight: "500"
                                    }}>
                                        {isExpanded ? 'Show Less' : 'Show More...'}
                                    </button>
                                )}</p>

                            </div>
                            <div className="flex flex-row justify-start mt-8 md:mt-10 mx-3 lg:mx-0" style={{
                                fontSize: "18px", fontWeight: "700"
                            }}>
                                <div className='md:mr-3'>
                                    <TabButton
                                        selectTab={() => handleTabChange("skills")}
                                        active={tab === "skills"}
                                    >
                                        {" "}
                                        SKILLS{" "}
                                    </TabButton>
                                </div>
                                <div className='md:mr-3'>
                                    <TabButton
                                        selectTab={() => handleTabChange("education")}
                                        active={tab === "education"}
                                    >
                                        {" "}
                                        EDUCATION{" "}
                                    </TabButton>
                                </div>
                                <div className='md:mr-3'>
                                    <TabButton
                                        selectTab={() => handleTabChange("certifications")}
                                        active={tab === "certifications"}
                                    >
                                        {" "}
                                        CERTIFICATIONS{" "}
                                    </TabButton>
                                </div>
                            </div>
                            <div className="mt-2 ml-3 lg:ml-0 md:mt-3 pr-3"
                                style={{
                                    fontWeight: "600"
                                }}>
                                {tab === "skills" && TAB_DATA.find((t) => t.id === "skills").content}
                                {tab === "education" && (
                                    <div className='mt-2'>
                                        {EDUCATION_DATA.map((education) => (
                                            <TabButton
                                                key={education.id}
                                                selectTab={() => handleEducationTabChange(education.id)}
                                                active={educationTab === education.id}
                                            >
                                                {education.title}
                                            </TabButton>
                                        ))}
                                        <div className="mt-0">
                                            {EDUCATION_DATA.find((edu) => edu.id === educationTab).content}
                                        </div>
                                    </div>
                                )}
                                {tab === "certifications" && TAB_DATA.find((t) => t.id === "certifications").content}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 mt-0 md:mt-32 lg:mt-40 relative px-5 lg:px-0">
                    <div className='w-full h-[300px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] relative'>
                        <Image
                            src="/image/about.png"
                            alt="image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 py-5'
                            height={500}
                            width={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
