"use client"
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import styles from "./modal.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Page() {

    // popup

    const [isFirstPopupOpen, setFirstPopupOpen] = useState(false); // Move the state hook inside the function component
    const [isSecondPopupOpen, setSecondPopupOpen] = useState(false);
    const [isThirdPopupOpen, setThirdPopupOpen] = useState(false);
    const [isFourthPopupOpen, setFourthPopupOpen] = useState(false);

    const openFirstPopup = () => {
        setFirstPopupOpen(true);
    };

    const closeFirstPopup = () => {
        setFirstPopupOpen(false);
    };

    const openSecondPopup = () => {
        setSecondPopupOpen(true);
    };

    const closeSecondPopup = () => {
        setSecondPopupOpen(false);
    };

    const openThirdPopup = () => {
        setThirdPopupOpen(true);
    };

    const closeThirdPopup = () => {
        setThirdPopupOpen(false);
    };
    const openFourthPopup = () => {
        setFourthPopupOpen(true);
    };

    const closeFourthPopup = () => {
        setFourthPopupOpen(false);
    };

    const FirstPopupContent = () => (
        <div className={styles.popup}>
            <div className={styles["popup-inner"]} style={{
                margin: "10px"
            }}>
                <div className={styles["popup-header"]}>
                    <h2 className='text-[#3b5998]'
                        style={{ fontWeight: "500" }}>Contact info</h2>
                    <button style={{ color: "red", border: "none", outline: "none" }} onClick={closeFirstPopup}><FaTimes color="red" /></button>
                </div>
                <hr className='mt-4 mb-4' />
                <p className='text-left ' style={{ fontWeight: "300", fontSize: "15px" }}>
                    <button>
                        <span className='text-[#3b5998]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text" }}>
                            <span style={{ fontSize: '15px', marginRight: '5px', color: "green" }}>
                                <FaCheckCircle />
                            </span> Verified phone number
                        </span>
                    </button>
                </p>
                <p className='text-black text-left ml-5 mt-1' style={{ fontSize: "14px" }}>
                    A phone number associated with this account has been verified. You can remove this verification at any time.
                    Learn more about <span><a href="https://www.linkedin.com/help/linkedin/answer/a1337715" target="_blank" rel="noopener noreferrer"
                        style={{ color: "#3b5998", fontWeight: "500" }}> account verification.</a></span>
                </p>
                <div className={styles["popup-content"]}>
                    <p className='text-left mt-2' style={{ fontWeight: "300", fontSize: "15px" }}>
                        <button>
                            <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text" }}>
                                <span style={{ fontSize: '20px', color: "gray", marginRight: "15px" }}>
                                    <FaLinkedin />
                                </span> LinkedIn Profile
                            </span>
                            <a className='text-left ml-3 md:mt-0 mt-1' href="https://www.linkedin.com/in/sethu-kishor-380872255/" style={{
                                color: "#3b5998", fontSize: "14px", fontWeight: "500"
                            }} target="_blank" rel="noopener noreferrer">
                                Sethu Kishor
                            </a>
                        </button>
                    </p>

                    <p className='text-left mt-3' style={{ fontWeight: "300", fontSize: "15px" }}>
                        <button>
                            <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text" }}>
                                <span className="text-[#000000]" style={{ fontWeight: '500', display: 'flex', alignItems: 'center', cursor: 'text' }}>
                                    <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: 'gray', marginRight: '15px' }} />
                                    Phone Number
                                </span>
                            </span>
                            <a className='text-left ml-3 md:mt-0 mt-1' href="tel:+91 8925638843" style={{
                                color: "#3b5998", fontSize: "14px", fontWeight: "500"
                            }} target="_blank" rel="noopener noreferrer">
                                8925638843
                            </a>
                        </button>
                    </p>

                    <p className='text-left mt-3' style={{ fontWeight: "300", fontSize: "15px" }}>
                        <button>
                            <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text", marginLeft: "5px" }}>
                                <span style={{ fontSize: '20px', color: "gray", marginRight: "15px" }}>
                                    <FontAwesomeIcon icon={faMapMarker} />
                                </span> Location
                            </span>
                            <a className='text-left ml-9 md:mt-0 mt-1' href="https://maps.app.goo.gl/p536mtpQZQ8PbHhg7" style={{
                                color: "#3b5998", fontSize: "14px", fontWeight: "500"
                            }} target="_blank" rel="noopener noreferrer">
                                Dindigul, Tamil Nadu
                            </a>
                        </button>
                    </p>

                    <p className='text-left mt-3' style={{ fontWeight: "300", fontSize: "15px" }}>
                        <button>
                            <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text" }}>
                                <span className="text-[#000000]" style={{ fontWeight: '500', display: 'flex', alignItems: 'center', cursor: 'text' }}>
                                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: 'gray', marginRight: '15px' }} />
                                    Email
                                </span>
                            </span>
                            <a className='text-left ml-9 md:mt-0 mt-1' href="mailto:sethukishorramasamy@gmail.com" style={{
                                color: "#3b5998", fontSize: "14px", fontWeight: "500"
                            }} target="_blank" rel="noopener noreferrer">
                                sethukishorramasamy@gmail.com
                            </a>
                        </button>
                    </p>
                </div>
            </div>
        </div >
    );
    const SecondPopupContent = () => (
        <div className={styles.popup}>
            <div className={styles["popup-inner"]} style={{
                margin: "10px"
            }}>
                <div className={styles["popup-header"]}>
                    <h2 className='text-[#3b5998]'
                        style={{ fontWeight: "500" }}>Job preferences</h2>
                    <button style={{ color: "red", border: "none", outline: "none" }} onClick={closeSecondPopup}><FaTimes color="red" /></button>
                </div>
                <hr className='mt-4' />
                <div className="flex items-center">
                    <Image
                        src="/image/sethukishor.jpg"
                        alt="profile"
                        height={100}
                        width={100}
                        className="ml-3 mt-4 text-[#6e6d6d]"
                        style={{ borderRadius: '50%', border: 'solid 1px #6e6d6d' }}
                    />
                    <div>
                        <p className="text-black ml-2 md:ml-4 lg:mt-3" style={{
                            fontWeight: "500", fontSize: "18px"
                        }}>Sethu Kishor</p>
                        <p className="text-[#666262] ml-4 md:ml-6" style={{
                            fontWeight: "400", fontSize: "16px"
                        }}> is open to work</p>
                    </div></div>

                <div className={styles["popup-content"]}>
                    <p className='text-left mt-3' style={{ fontWeight: "300" }}>
                        <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "15px" }}>
                            Job title
                        </span>
                        <span className='text-[#666262] mt-1' style={{ fontWeight: "400", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "14px" }}>
                            Web Developer
                        </span>
                    </p>
                    <p className='text-left mt-4' style={{ fontWeight: "300" }}>
                        <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "15px" }}>
                            Location types
                        </span>
                        <span className='text-[#666262] mt-1' style={{ fontWeight: "400", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "14px" }}>
                            On-site · Hybrid
                        </span>
                    </p>
                    <p className='text-left mt-4' style={{ fontWeight: "300" }}>
                        <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "15px" }}>
                            Locations (on-site)
                        </span>
                        <span className='text-[#666262] mt-1' style={{ fontWeight: "400", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "14px" }}>

                            Chennai, Tamil Nadu, India · Coimbatore, Tamil Nadu, India
                        </span>
                    </p>
                    <p className='text-left mt-4' style={{ fontWeight: "300" }}>
                        <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "15px" }}>
                            Start date
                        </span>
                        <span className='text-[#666262] mt-1' style={{ fontWeight: "400", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "14px" }}>
                            Immediately, I am actively applying
                        </span>
                    </p>
                    <p className='text-left mt-4' style={{ fontWeight: "300" }}>
                        <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "15px" }}>
                            Employment types
                        </span>
                        <span className='text-[#666262] mt-1' style={{ fontWeight: "400", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "14px" }}>
                            Full-time · Internship
                        </span>
                    </p>
                    <hr className='mt-5' />
                    <p className='text-left mt-4' style={{ fontWeight: "300" }}>
                        <span className='text-[#000000]' style={{ fontWeight: "500", display: 'flex', alignItems: 'center', cursor: "text", fontSize: "15px" }}>
                            <FontAwesomeIcon icon={faEye} className='pr-3' />  All LinkedIn members
                        </span>
                    </p>
                </div>
            </div>
        </div >
    );

    const ThirdPopupContent = () => (
        <div className={styles.popup}>
            <div className={styles["popup-inner"]} style={{
                margin: "10px"
            }}>
                <div className={styles["popup-header"]} >
                    <h2 className='text-[#000000] ml-5 mt-3'
                        style={{ fontWeight: "500", fontSize: "17px" }}>Skills</h2>
                    <button style={{ color: "red", border: "none", outline: "none" }} onClick={closeThirdPopup}><FaTimes color="red" /></button>
                </div>
                <div className="flex-grow" style={{ maxHeight: "300px", overflowY: "auto" }}>
                    <div className="flex items-start">
                        <Image
                            src="/image/nextjs.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/bootstrap.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/js.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/html.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/css-3.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/java.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/selenium.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/arvr.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0 mb-7">
                        <Image
                            src="/image/frontend.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
        </div >
    );

    const FourthPopupContent = () => (
        <div className={styles.popup}>
            <div className={styles["popup-inner"]} style={{
                margin: "10px"
            }}>
                <div className={styles["popup-header"]} >
                    <h2 className='text-[#000000] ml-5 mt-3'
                        style={{ fontWeight: "500", fontSize: "17px" }}>Certifications</h2>
                    <button style={{ color: "red", border: "none", outline: "none" }} onClick={closeFourthPopup}><FaTimes color="red" /></button>
                </div>
                <div className="flex-grow" style={{ maxHeight: "300px", overflowY: "auto" }}>
                    <div className="flex items-start ">
                        <Image
                            src="/image/codeclause.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/internpe.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/ibm.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/educba.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/greatlearning.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/litztech.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/hackerrank.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/greatlearning.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/tessolvelogo.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0">
                        <Image
                            src="/image/lumos.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
                        <hr className='mt-6' />
                    </div>
                    <div className="flex items-start mt-0 mb-7">
                        <Image
                            src="/image/naanmudhalvan.png"
                            alt="profile"
                            height={45}
                            width={45}
                            className="ml-7 mt-5" style={{
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
        </div >
    );
    // image sizing in corousels
    const imageStyle = {
        maxWidth: '65px',
        maxHeight: '65px',
        borderRadius: "10px"
    };

    // show more show less
    const initialText =
        "Aspiring ECE Engineer with a knack for web development. Proficient in HTML, CSS, Bootstrap, and learning Next Js. Open to web dev opportunities. Let's connect and create cool web experiences! 👨‍💻🚀";

    const [showFullText, setShowFullText] = useState(false);
    const textToShow = showFullText ? initialText : initialText.slice(0, 114);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    // background color setting
    const [backgroundColor, setBackgroundColor] = useState('#677b7e'); // Initial background color

    // Function to handle color input change
    const handleColorChange = (event) => {
        setBackgroundColor(event.target.value);
    };

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div>
            <style>
                {`
                html, body {
                    background-color: #000;
                    height: 100vh;
                    color: #fff;
                }
                `}
            </style>
            <Navbar />
            <main className='bg-[#000000] lg:flex'>
                <div className="lg:w-1/2 text-center left-0 top-0 relative">
                    <div className="mt-20 md:mt-28 text-center h-32 md:h-30 left-0 top-0 rounded bg-[#677b7e] my-2 mx-2" style={{ backgroundColor }}>
                        <input className='bg-transparent mt-7 md:mt-14' type="color" value={backgroundColor} onChange={handleColorChange}
                            style={{ fontSize: ".1px", width: "15px", height: "15px", border: "1px solid #c1ced0", cursor: "pointer" }} />
                        <div className='mt-1 md:mt-0'>
                            <Image
                                src="/image/sethukishor.jpg"
                                alt="profile"
                                className='mt-20 md:mt-12 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/8 left-1/2 
                            md:left-28 w-[135px] h-[135px] md:w-[150px] md:h-[150px] lg:w-[150px] lg:h-[150px]'
                                height={170}
                                width={170}
                                style={{ borderRadius: '50%', border: 'solid 6px black' }}
                            />
                        </div>
                    </div>

                    <div className="text-center left-0 top-0 rounded-lg bg-[#ffffff] mx-2 py-8 md:py-8">
                        <h1 className='text-black text-left pt-12 md:pt-12 pl-7'
                            style={{
                                fontSize: "23px",
                                fontWeight: "500"
                            }}
                        >Sethu Kishor&nbsp;
                            <span className='text-[#808080]'
                                style={{ fontSize: "15px", fontWeight: "300" }}>(He/Him)</span>
                        </h1>

                        <p className='text-black text-left pt-0 mt-2 pl-7'
                            style={{ fontWeight: "300" }}>Engineering Student</p>

                        <p className='mt-2 text-[#000000] text-left pl-7'
                            style={{ fontWeight: "300", fontSize: "14px" }}>
                            Dindigul, Tamil Nadu, India <b> · </b>
                            <span>
                                <button className='text-[#3b5998]'
                                    style={{
                                        fontWeight: "500"
                                    }} onClick={openFirstPopup}>
                                    Contact info
                                </button>
                                <Popup
                                    open={isFirstPopupOpen}
                                    closeOnDocumentClick
                                    onClose={closeFirstPopup}
                                >
                                    <FirstPopupContent />
                                </Popup>
                            </span>
                        </p>

                        <p className='mt-3 text-[#808080] text-left pl-7' style={{ fontWeight: "300", fontSize: "15px" }}>
                            <button>
                                <a href="https://sethukishorportfolio.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]'
                                    style={{ fontWeight: "500", display: 'flex', alignItems: 'center' }}>
                                    Portfolio
                                    <span style={{ fontSize: '10px', marginLeft: '5px' }}>
                                        <FaExternalLinkAlt />
                                    </span>
                                </a>
                            </button>
                        </p>

                        <p className='mt-3 text-[#3b5998] text-left pl-7'
                            style={{ fontWeight: "500", fontSize: "14px" }}>
                            <a href="https://www.linkedin.com/mynetwork/network-manager/people-follow/followers/" target="_blank" rel="noopener noreferrer">1,500 followers</a>
                            <b> · </b>
                            <a href="https://www.linkedin.com/mynetwork/invite-connect/connections/" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]'
                                style={{
                                    fontWeight: "500"
                                }}>&nbsp;500+ connections</a>
                        </p>
                        <p className='mt-3 text-[#808080] text-left pl-7' style={{ fontWeight: "300", fontSize: "15px" }}>
                            <button>
                                <a href="Sethu Kishor.pdf" download="Resume" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]'
                                    style={{ fontWeight: "500", display: 'flex', alignItems: 'center' }}>
                                    Resume
                                    <span style={{ fontSize: '10px', marginLeft: '5px' }}>
                                        <FaExternalLinkAlt />
                                    </span>
                                </a>
                            </button>
                        </p>
                    </div>

                    <div className="text-center left-0 top-0 relative mt-2">
                        <div className="text-center left-0 top-0 rounded-lg bg-[#ffffff] mx-2 py-8 md:py-7">
                            <h1 className='text-black text-left pl-7'
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "500"
                                }}
                            >Experience&nbsp;
                            </h1>

                            <div className="flex items-start mt-0 md:mt-2"> {/* Use items-start to align content at the start (left) */}
                                <Image
                                    src="/image/codeclause.png"
                                    alt="profile"
                                    height={40}
                                    width={40}
                                    className="ml-5 md:ml-10 mt-5"

                                />
                                <div className="ml-2 md:ml-0 mt-5 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Web Developer <span className="text-[#666262]">· </span><a href='https://www.linkedin.com/company/codeclause/' target="_blank" rel="noopener noreferrer"
                                        className="text-[#3b5998]" style={{
                                            fontWeight: "500", fontSize: "16px"
                                        }}>CodeClause</a></p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> CodeClause · InternshipCodeClause</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> Sep 2023 - Oct 2023 · 2 mos</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> Pune · Remote</p>

                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-2" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <span className='text-black' style={{
                                        fontWeight: "500", fontSize: "15px"
                                    }}>Skills :</span> JavaScript · HTML · Cascading Style Sheets (CSS)</p>
                                </div>
                            </div>
                            <hr className='mt-6' />
                            <div className="flex items-start mt-0">
                                <Image
                                    src="/image/internpe.png"
                                    alt="profile"
                                    height={40}
                                    width={40}
                                    className="ml-5 md:ml-10 mt-5"
                                    style={{
                                        border: "2px solid black", borderRadius: "5px"
                                    }}
                                />
                                <div className="ml-2 md:ml-0 mt-5 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Web Developer <span className="text-[#666262]">· </span><a href='https://www.linkedin.com/company/internpe/' target="_blank" rel="noopener noreferrer"
                                        className="text-[#3b5998]" style={{
                                            fontWeight: "500", fontSize: "16px"
                                        }}>InternPe</a></p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> InternPe · Internship</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> Jul 2023 - Aug 2023 · 2 mos</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> Jaipur, Rajasthan, India · Remote</p>

                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-2" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <span className='text-black' style={{
                                        fontWeight: "500", fontSize: "15px"
                                    }}>Skills :</span> JavaScript · HTML · Cascading Style Sheets (CSS)</p>
                                </div>
                            </div>
                            <hr className='mt-6' />
                            <div className="flex items-start mt-0">
                                <Image
                                    src="/image/litztech.png"
                                    alt="profile"
                                    height={40}
                                    width={40}
                                    className="ml-5 md:ml-10 mt-5"
                                />
                                <div className="ml-2 md:ml-0 mt-5 mr-4">
                                    <p className="text-black text-left ml-2 md:ml-4" style={{
                                        fontWeight: "500", fontSize: "16px"
                                    }}>Full Stack Web Developer <span className="text-[#666262]">· </span><a href='https://litztech.in/' target="_blank" rel="noopener noreferrer"
                                        className="text-[#3b5998]" style={{
                                            fontWeight: "500", fontSize: "16px"
                                        }}>Litz Tech</a></p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-1" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> Litz Tech - India · Internship</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> Jul 2023 · 1 mon</p>
                                    <p className="text-[#666262] text-left ml-2 md:ml-4" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> Coimbatore, Tamil Nadu, India · On-site</p>

                                    <p className="text-[#666262] text-left ml-2 md:ml-4 mt-2" style={{
                                        fontWeight: "400", fontSize: "14px"
                                    }}> <span className='text-black' style={{
                                        fontWeight: "500", fontSize: "15px"
                                    }}>Skills :</span> Front-End Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-center right-0 lg:pt-24 lg:flex">
                    <div className="lg:w-1/2 left-0 top-0 rounded-lg">
                        <div className="left-0 top-0 rounded-lg relative my-2 lg:my-4">
                            <div className="text-center left-0 top-0 rounded-lg">
                                <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-[rgb(255,255,255)] mx-2 lg:mx-0 my-2 md:my-2 md:mr-1"
                                    style={{ border: "2px solid white" }}>
                                    <div className="flex-grow pt-8">
                                        <p className="text-black text-left pt-0 ml-7" style={{ fontWeight: "500", fontSize: "18px" }}>
                                            Skills
                                        </p>
                                        <div className="flex items-start mt-4">
                                            <Image
                                                src="/image/nextjs.png"
                                                alt="profile"
                                                height={45}
                                                width={45}
                                                className="ml-7 mt-5" style={{
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
                                            <hr className='mt-6' />
                                        </div>
                                        <div className="flex items-start mt-0">
                                            <Image
                                                src="/image/bootstrap.png"
                                                alt="profile"
                                                height={45}
                                                width={45}
                                                className="ml-7 mt-5" style={{
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
                                            <hr className='mt-6' />
                                        </div>
                                        <div className="flex items-start mt-0">
                                            <Image
                                                src="/image/html.png"
                                                alt="profile"
                                                height={45}
                                                width={45}
                                                className="ml-7 mt-5" style={{
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
                                        <hr className='mt-6' />
                                        <p className="text-black bg-slate-100 cursor-pointer hover:bg-slate-200"
                                            onClick={openThirdPopup}>
                                            <span>
                                                <button className=' py-4'
                                                >
                                                    show all Skills
                                                </button>
                                                <Popup
                                                    open={isThirdPopupOpen}
                                                    closeOnDocumentClick
                                                    onClose={closeThirdPopup}
                                                >
                                                    <ThirdPopupContent />
                                                </Popup>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center left-0 top-0 rounded-lg">
                                <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-[rgb(255,255,255)] mx-2 lg:mx-0 my-2 md:my-2 md:mr-1"
                                    style={{ border: "2px solid white" }}>
                                    <div className="flex-grow pt-8">
                                        <p className="text-black text-left pt-0 ml-7" style={{ fontWeight: "500", fontSize: "17px" }}>
                                            Certifications
                                        </p>
                                        <div className="flex items-start mt-4">
                                            <Image
                                                src="/image/codeclause.png"
                                                alt="profile"
                                                height={45}
                                                width={45}
                                                className="ml-7 mt-5" style={{
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
                                            <hr className='mt-6' />
                                        </div>
                                        <div className="flex items-start mt-0">
                                            <Image
                                                src="/image/internpe.png"
                                                alt="profile"
                                                height={45}
                                                width={45}
                                                className="ml-7 mt-5" style={{
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
                                            <hr className='mt-6' />
                                        </div>
                                        <div className="flex items-start mt-0">
                                            <Image
                                                src="/image/ibm.png"
                                                alt="profile"
                                                height={45}
                                                width={45}
                                                className="ml-7 mt-5" style={{
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
                                        <hr className='mt-6' />
                                        <p className="text-black bg-slate-100 cursor-pointer hover:bg-slate-200"
                                            onClick={openFourthPopup}>
                                            <span>
                                                <button className=' py-4'
                                                >
                                                    show all Certifications
                                                </button>
                                                <Popup
                                                    open={isFourthPopupOpen}
                                                    closeOnDocumentClick
                                                    onClose={closeFourthPopup}
                                                >
                                                    <FourthPopupContent />
                                                </Popup>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center left-0 top-0 rounded-lg">
                                <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-[#d0dfed] hover:bg-slate-200 mx-2 lg:mx-0 my-2 md:my-2 md:mr-1"
                                    style={{ border: "1px solid #d0dfed" }}>
                                    <div className="flex-grow py-9" style={{
                                        marginBottom: "7px"
                                    }}>
                                        <p className="text-black text-left pt-0 pl-7" style={{ fontWeight: "500", fontSize: "17px" }}>
                                            Open to work
                                        </p>
                                        <p className="mt-2 text-[#595757] text-left pt-0 pl-7" style={{ fontWeight: "400", fontSize: "17px" }}>
                                            Web Developer roles
                                        </p>
                                        <p className="mt-2 text-[#808080] text-left pt-0 pl-7" style={{ fontWeight: "500", fontSize: "17px" }}>
                                            <span>
                                                <button className='text-[#3b5998]'
                                                    style={{
                                                        fontWeight: "500"
                                                    }} onClick={openSecondPopup}>
                                                    Show details
                                                </button>
                                                <Popup
                                                    open={isSecondPopupOpen}
                                                    closeOnDocumentClick
                                                    onClose={closeSecondPopup}
                                                >
                                                    <SecondPopupContent />
                                                </Popup>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 left-0 top-0 rounded-lg">
                        <div className="text-center left-0 top-0 rounded-lg">
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-transparent mx-2 my-2 md:mt-4"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow py-7">
                                    <p className="text-white text-left pt-0 pl-7" style={{ fontWeight: "400", fontSize: "16px" }}>
                                        Public profile & URL
                                    </p>
                                    <p className="mt-2 text-[#ffffff] text-left pt-0 pl-7" style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Sethu Kishor
                                    </p>
                                    <p className="mt-1 text-[#426cc6] text-left pt-0 pl-7 pr-5" style={{ fontWeight: "400", fontSize: "14px" }}>
                                        <a href="https://www.linkedin.com/in/sethu-kishor-380872255/"
                                            target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/sethu-kishor-380872255/</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center left-0 top-0 rounded-lg">
                            <div className="text-center left-0 top-0 rounded-lg bg-[rgb(255,255,255)] mx-2 my-2"
                                style={{ border: "2px solid white" }}>
                                <div className="flex-grow py-7">
                                    <p className="text-black text-left pt-0 ml-7 mr-5" style={{ fontWeight: "500", fontSize: "16px" }}>
                                        Education
                                    </p>
                                    <div className="flex items-center">
                                        <Image
                                            src="/image/AnnaUniversity.svg.png"
                                            alt="profile"
                                            height={65}
                                            width={65}
                                            className="ml-7 mt-3"
                                        />
                                        <div>
                                            <a href='https://www.linkedin.com/school/anna-university-chennai/'
                                                target="_blank" rel="noopener noreferrer" className="ml-4 text-[#3b5998]" style={{
                                                    fontWeight: "500", fontSize: "15px"
                                                }}>Anna University, Chennai</a>
                                            <p style={{
                                                fontSize: "15px", color: "black"
                                            }}>&nbsp;Bachelor of Engineering
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-0 top-0 rounded-lg relative">
                            <div
                                className="md:h-auto left-0 top-0 rounded-lg text-white bg-transparent mx-2 my-2"
                                style={{ border: "1px solid white", position: "relative" }}
                            >
                                <div className="flex-grow py-6">
                                    <p className="text-white text-left pt-0 pl-7" style={{ fontWeight: "400", fontSize: "16px" }}>
                                        About me
                                    </p>
                                    <p className="mt-2 text-[#ffffff] text-left pt-0 px-7" style={{ fontWeight: "300", fontSize: "14px" }}>
                                        {textToShow}
                                    </p>
                                    <p className='mt-2 mb-0 md:mb-6 lg:mb-0'>
                                        <button
                                            className="text-[#426cc6] text-left"
                                            onClick={toggleText}
                                            style={{ position: "absolute", left: "28px", bottom: "10px", fontSize: "15px" }}
                                        >
                                            {showFullText ? 'Show Less' : 'Show More'}
                                        </button>
                                    </p>
                                </div>
                            </div>

                            <div className="text-center left-0 top-0 rounded-lg">
                                <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-white mx-2 my-2 pt-2"
                                    style={{ border: "1px solid white" }}>
                                    <div className="flex-grow py-6">
                                        <p className="text-black text-left pt-0 pl-7" style={{ fontWeight: "500", fontSize: "16px" }}>
                                            Area of Interest
                                        </p>
                                        <div className="flex items-start mt-0">
                                            <Image
                                                src="/image/computer.png"
                                                alt="profile"
                                                height={90}
                                                width={90}
                                                className="ml-5 mt-1" style={{
                                                    borderRadius: "5px"
                                                }} />
                                            <div className="ml-0 md:ml-0 mt-4 mr-4">
                                                <p className="text-black text-left ml-0 mt-2" style={{
                                                    fontWeight: "500", fontSize: "15px"
                                                }}> <b>·</b> Web Development</p>
                                                <p className="text-black text-left ml-0 mt-1" style={{
                                                    fontWeight: "500", fontSize: "15px"
                                                }}> <b>·</b> Mobile App Development</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-container " style={{ background: 'black' }}>
                                <Carousel showThumbs={false} infiniteLoop autoPlay autoFocus interval={2500}>
                                    <div className='mb-10'>
                                        <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-white mx-2 pt-2"
                                            style={{ border: "1px solid white" }}>
                                            <div className="flex-grow pt-7 pb-11" style={{
                                                marginBottom: "2px"
                                            }}>
                                                <p className="text-black text-left pt-0 ml-7 mr-5" style={{ fontWeight: "500", fontSize: "16px" }}>
                                                    Interested Groups
                                                </p>
                                                <img
                                                    src="/image/nextjs.png"
                                                    alt="nextjs"
                                                    style={imageStyle}
                                                    className='mt-10'
                                                />
                                                <div>
                                                    <p className='mt-5' style={{
                                                        fontSize: "15px", color: "black"
                                                    }}>Frontend Developers <b>·</b> Next.js
                                                    </p>
                                                    <p className='text-[#2a2a29] mt-1' style={{
                                                        fontSize: "15px"
                                                    }}>3,159 members
                                                    </p>
                                                    <a
                                                        href="https://www.linkedin.com/groups/12459336/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-4 w-28 px-6 py-2 mx-auto bg-[#2a2a29] text-white hover:bg-transparent hover:text-[#2a2a29]"
                                                        style={{
                                                            border: '2px solid #2a2a29',
                                                            borderRadius: '5px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontWeight: "500"
                                                        }}
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        {hovered ? 'Open' : 'View'}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-10'>
                                        <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-white mx-2 pt-2"
                                            style={{ border: "1px solid white" }}>
                                            <div className="flex-grow pt-7 pb-11" style={{
                                                marginBottom: "2px"
                                            }}>
                                                <p className="text-black text-left pt-0 ml-7 mr-5" style={{ fontWeight: "500", fontSize: "16px" }}>
                                                    Interested Groups
                                                </p>
                                                <img
                                                    src="/image/js.png"
                                                    alt="nextjs"
                                                    style={imageStyle}
                                                    className='mt-10'
                                                />
                                                <div>
                                                    <p className='mt-5' style={{
                                                        fontSize: "15px", color: "black"
                                                    }}>Typescript <b>·</b> JavaScript <b>·</b> Angular
                                                    </p>
                                                    <p className='text-[#c7b22a] mt-1' style={{
                                                        fontSize: "15px"
                                                    }}>96,070 members
                                                    </p>
                                                    <a href="https://www.linkedin.com/groups/4314060/" target="_blank" rel="noopener noreferrer"
                                                        className="mt-4 w-28 px-6 py-2 mx-auto bg-[#c7b22a] text-white hover:bg-transparent hover:text-[#c7b22a]"
                                                        style={{
                                                            border: '2px solid #c7b22a',
                                                            borderRadius: '5px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontWeight: "500"
                                                        }}
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        {hovered ? 'Open' : 'View'}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-10'>
                                        <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-white mx-2 pt-2"
                                            style={{ border: "1px solid white" }}>
                                            <div className="flex-grow pt-7 pb-11" style={{
                                                marginBottom: "2px"
                                            }}>
                                                <p className="text-black text-left pt-0 ml-7 mr-5" style={{ fontWeight: "500", fontSize: "16px" }}>
                                                    Interested Groups
                                                </p>
                                                <img
                                                    src="/image/flutter.png"
                                                    alt="nextjs"
                                                    style={imageStyle}
                                                    className='mt-10'
                                                />
                                                <div>
                                                    <p className='mt-5' style={{
                                                        fontSize: "15px", color: "black"
                                                    }}>Flutter Developer Community
                                                    </p>
                                                    <p className='text-[#2596be] mt-1' style={{
                                                        fontSize: "15px"
                                                    }}>148,756 members
                                                    </p>
                                                    <a href="https://www.linkedin.com/groups/10408911/" target="_blank" rel="noopener noreferrer"
                                                        className="mt-4 w-28 px-6 py-2 mx-auto bg-[#2596be] text-white hover:bg-transparent hover:text-[#2596be]"
                                                        style={{
                                                            border: '2px solid #2596be',
                                                            borderRadius: '5px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontWeight: "500"
                                                        }}
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        {hovered ? 'Open' : 'View'}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-10'>
                                        <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-white mx-2 pt-2"
                                            style={{ border: "1px solid white" }}>
                                            <div className="flex-grow pt-7 pb-11" style={{
                                                marginBottom: "2px"
                                            }}>
                                                <p className="text-black text-left pt-0 ml-7 mr-5" style={{ fontWeight: "500", fontSize: "16px" }}>
                                                    Interested Groups
                                                </p>
                                                <img
                                                    src="/image/java.png"
                                                    alt="nextjs"
                                                    style={imageStyle}
                                                    className='mt-10'
                                                />
                                                <div>
                                                    <p className='mt-5' style={{
                                                        fontSize: "15px", color: "black"
                                                    }}>Java Development & Design
                                                    </p>
                                                    <p className='text-[#427396] mt-1' style={{
                                                        fontSize: "15px"
                                                    }}>130,140 members
                                                    </p>
                                                    <a href="https://www.linkedin.com/groups/143130/" target="_blank" rel="noopener noreferrer"
                                                        className="mt-4 w-28 px-6 py-2 mx-auto bg-[#427396] text-white hover:bg-transparent hover:text-[#427396]"
                                                        style={{
                                                            border: '2px solid #427396',
                                                            borderRadius: '5px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontWeight: "500"
                                                        }}
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        {hovered ? 'Open' : 'View'}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-10'>
                                        <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-white mx-2 pt-2"
                                            style={{ border: "1px solid white" }}>
                                            <div className="flex-grow pt-7 pb-11" style={{
                                                marginBottom: "2px"
                                            }}>
                                                <p className="text-black text-left pt-0 ml-7 mr-5" style={{ fontWeight: "500", fontSize: "16px" }}>
                                                    Interested Groups
                                                </p>
                                                <img
                                                    src="/image/reacticon.png"
                                                    alt="nextjs"
                                                    style={imageStyle}
                                                    className='mt-10'
                                                />
                                                <div>
                                                    <p className='mt-5' style={{
                                                        fontSize: "15px", color: "black"
                                                    }}>React Developers <b>·</b> ReactJS
                                                    </p>
                                                    <p className='text-[#51d3ea] mt-1' style={{
                                                        fontSize: "15px"
                                                    }}>432,798 members
                                                    </p>
                                                    <a href="https://www.linkedin.com/groups/6519652/" target="_blank" rel="noopener noreferrer"
                                                        className="mt-4 w-28 px-6 py-2 mx-auto bg-[#00d8ff] text-white hover:bg-transparent hover:text-[#00d8ff]"
                                                        style={{
                                                            border: '2px solid #00d8ff',
                                                            borderRadius: '5px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontWeight: "500"
                                                        }}
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        {hovered ? 'Open' : 'View'}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}
