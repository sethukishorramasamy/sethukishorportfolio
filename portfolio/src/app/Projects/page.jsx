"use client"
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Project = () => {

    const imageStyle = {
        maxWidth: '650px',
        maxHeight: '650px'
    };

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className='bg-white'>
            <Navbar />
            <div className='lg:flex lg:ml-5' >
                <div className='lg:w-1/2 pt-24 md:pt-36 bg-white'>
                    <Carousel showThumbs={false} infiniteLoop autoPlay interval={2500} className=''>
                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/portfolio/img1.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/portfolio/img2.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/portfolio/img3.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/portfolio/img4.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/portfolio/img5.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/portfolio/img6.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/portfolio/img7.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/portfolio/img8.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>

                <div className='lg:w-1/2 lg:pt-36 px-4 lg:px-5 py-8 lg:py-0 mb-8 bg-[#eeecec] lg:bg-white'>
                    <p className='text-xl lg:text-2xl lg:pt-16' style={{
                        fontWeight: "500"
                    }}>Portfolio</p>

                    <p className='mt-2 text-[#5d5c5c]' style={{
                        fontWeight: "300"
                    }}>My portfolio is a concise representation of my educational background, skills,
                        certifications, contact information, and work experiences.
                        It serves as a professional snapshot, showcasing my qualifications and career journey.</p>

                    <p className='mt-2' style={{
                        fontWeight: "300", color: "red"
                    }}>Website Link :&nbsp;
                        <a href="https://sethukishorportfolio.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]' style={{
                            fontWeight: "400"
                        }}>click to open</a></p>

                    <p className='mt-3' style={{
                        fontWeight: "300", color: "green"
                    }}>&lt;/&gt; Key Skills
                    </p>

                    <ul className='px-4 mt-1 text-[#5d5c5c]' style={{
                        listStyle: "disc", fontWeight: "300"
                    }}>
                        <li className='mt-1'>Responsive Web Design</li>
                        <li className='mt-1'>HTML</li>
                        <li className='mt-1'>Cascading Style Sheets (CSS)</li>
                        <li className='mt-1'>Bootstrap 5</li>
                        <li className='mt-1'>Front-End Development</li>
                    </ul>
                </div>

            </div>

            <div className='lg:flex lg:ml-5' >
                <div className='lg:w-1/2 md:pt-5 bg-white'>
                    <Carousel showThumbs={false} infiniteLoop autoPlay interval={2500}>
                        <div className='mb-10' style={{

                        }}>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img1.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img2.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img3.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img4.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img5.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img6.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img7.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img8.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img9.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                                style={{ border: "1px solid white" }}>
                                <div className="flex-grow pt-5 pb-7">
                                    <img
                                        className='px-7 md:px-0'
                                        src="/fooodie/img10.png"
                                        alt="nextjs"
                                        style={imageStyle}
                                    />
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className='lg:w-1/2 lg:pt-20 px-4 lg:px-5  py-8 lg:py-0 mb-8 bg-[#eeecec] lg:bg-white'>
                    <p className='text-xl lg:text-2xl' style={{
                        fontWeight: "500"
                    }}>Fooodie</p>

                    <p className='mt-2 text-[#5d5c5c]' style={{
                        fontWeight: "300"
                    }}>Crafted a user-friendly food website with secure login, dish filtering, restaurant variety,
                        reviews, cart management, and hassle-free logout for an enjoyable dining experience.</p>

                    <p className='mt-2' style={{
                        fontWeight: "300", color: "red"
                    }}>Website Link :&nbsp;
                        <a href="https://fooodieweb.000webhostapp.com/" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]' style={{
                            fontWeight: "400"
                        }}>click to open</a></p>

                    <p className='mt-3' style={{
                        fontWeight: "300", color: "green"
                    }}>&lt;/&gt; Key Skills
                    </p>

                    <ul className='px-4 mt-1 text-[#5d5c5c]' style={{
                        listStyle: "disc", fontWeight: "300"
                    }}>
                        <li className='mt-1'>Responsive Web Design</li>
                        <li className='mt-1'>HTML</li>
                        <li className='mt-1'>Cascading Style Sheets (CSS)</li>
                        <li className='mt-1'>Bootstrap 5</li>
                        <li className='mt-1'>Php</li>
                        <li className='mt-1'>MySQL</li>
                        <li className='mt-1'>JavaScript</li>
                    </ul>
                </div>
            </div>

            <div className='lg:flex md:pt-5 bg-white lg:ml-5'>
                <div className='mb-8 lg:mb-5 lg:w-1/2'>
                    <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                        style={{ border: "1px solid white" }}>
                        <div className="flex-grow pt-5 pb-7" style={{

                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <img
                                className='px-7'
                                src="/javascript/musicplayer.png"
                                alt="nextjs"
                                style={{
                                    ...imageStyle,
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:pt-16 px-4 lg:px-5 py-8 lg:py-0 mb-8 bg-[#eeecec] lg:bg-white'>
                    <p className='text-xl lg:text-2xl' style={{
                        fontWeight: "500"
                    }}>Music Streaming Website</p>

                    <p className='mt-2 text-[#5d5c5c]' style={{
                        fontWeight: "300"
                    }}>Designed an online music hub where users can stream and share playlists worldwide.
                        Enjoy seamless music discovery and sharing.</p>

                    <p className='mt-2' style={{
                        fontWeight: "300", color: "red"
                    }}>Website Link :&nbsp;
                        <a href="https://webjsprojects.000webhostapp.com/musicplayer.html" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]' style={{
                            fontWeight: "400"
                        }}>click to open</a></p>

                    <p className='mt-3' style={{
                        fontWeight: "300", color: "green"
                    }}>&lt;/&gt; Key Skills
                    </p>

                    <ul className='px-4 mt-1 text-[#5d5c5c]' style={{
                        listStyle: "disc", fontWeight: "300"
                    }}>
                        <li className='mt-1'>HTML</li>
                        <li className='mt-1'>Cascading Style Sheets (CSS)</li>
                        <li className='mt-1'>JavaScript</li>
                    </ul>
                </div>
            </div>

            <div className='lg:flex md:pt-5 bg-white lg:ml-5'>
                <div className='mb-8 lg:mb-5 lg:w-1/2'>
                    <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                        style={{ border: "1px solid white" }}>
                        <div className="flex-grow pt-5 pb-7" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <img
                                className='px-7'
                                src="/javascript/safein.png"
                                alt="nextjs"
                                style={{
                                    ...imageStyle,
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:pt-16 px-4 lg:px-5 py-8 lg:py-0 mb-8 bg-[#eeecec] lg:bg-white'>
                    <p className='text-xl lg:text-2xl' style={{
                        fontWeight: "500"
                    }}>DataHub</p>

                    <p className='mt-2 text-[#5d5c5c]' style={{
                        fontWeight: "300"
                    }}>Implemented a user-friendly database system for storing and managing user-entered
                        details. Users can easily view, edit, and delete their previous entries on the
                        next page for a seamless experience.</p>

                    <p className='mt-2' style={{
                        fontWeight: "300", color: "red"
                    }}>Website Link :&nbsp;
                        <a href="https://webjsprojects.000webhostapp.com/saveUserDetails.php" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]' style={{
                            fontWeight: "400"
                        }}>click to open</a></p>

                    <p className='mt-3' style={{
                        fontWeight: "300", color: "green"
                    }}>&lt;/&gt; Key Skills
                    </p>

                    <ul className='px-4 mt-1 text-[#5d5c5c]' style={{
                        listStyle: "disc", fontWeight: "300"
                    }}>
                        <li className='mt-1'>Responsive Web Design</li>
                        <li className='mt-1'>HTML</li>
                        <li className='mt-1'>Cascading Style Sheets (CSS)</li>
                        <li className='mt-1'>Bootstrap 5</li>
                        <li className='mt-1'>Php</li>
                        <li className='mt-1'>MySQL</li>
                    </ul>
                </div>
            </div>

            <div className='lg:flex md:pt-5 bg-white lg:ml-5'>
                <div className='mb-8 lg:mb-5 lg:w-1/2'>
                    <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                        style={{ border: "1px solid white" }}>
                        <div className="flex-grow pt-5 pb-7" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <img
                                className='px-7'
                                src="/javascript/linkmanager.png"
                                alt="nextjs"
                                style={{
                                    ...imageStyle,
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:pt-16 px-4 lg:px-5 py-8 lg:py-0 mb-8 bg-[#eeecec] lg:bg-white'>
                    <p className='text-xl lg:text-2xl' style={{
                        fontWeight: "500"
                    }}>Link Manager</p>

                    <p className='mt-2 text-[#5d5c5c]' style={{
                        fontWeight: "300"
                    }}>Developed a Link Manager for saving and accessing favorite websites with
                        ease using local storage.</p>

                    <p className='mt-2' style={{
                        fontWeight: "300", color: "red"
                    }}>Website Link :&nbsp;
                        <a href="https://webjsprojects.000webhostapp.com/notes.html" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]' style={{
                            fontWeight: "400"
                        }}>click to open</a></p>

                    <p className='mt-3' style={{
                        fontWeight: "300", color: "green"
                    }}>&lt;/&gt; Key Skills
                    </p>

                    <ul className='px-4 mt-1 text-[#5d5c5c]' style={{
                        listStyle: "disc", fontWeight: "300"
                    }}>
                        <li className='mt-1'>Responsive Web Design</li>
                        <li className='mt-1'>HTML</li>
                        <li className='mt-1'>Cascading Style Sheets (CSS)</li>
                        <li className='mt-1'>JavaScript</li>
                    </ul>
                </div>
            </div>

            <div className='lg:flex md:pt-5 bg-white lg:ml-5'>
                <div className='mb-8 lg:mb-5 lg:w-1/2'>
                    <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                        style={{ border: "1px solid white" }}>
                        <div className="flex-grow pt-5 pb-7" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <img
                                className='px-7'
                                src="/javascript/peoplecounter.png"
                                alt="nextjs"
                                style={{
                                    ...imageStyle,
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:pt-16 px-4 lg:px-5 py-8 lg:py-0 mb-8 bg-[#eeecec] lg:bg-white'>
                    <p className='text-xl lg:text-2xl' style={{
                        fontWeight: "500"
                    }}>People Counter</p>

                    <p className='mt-2 text-[#5d5c5c]' style={{
                        fontWeight: "300"
                    }}>Created a website with JavaScript that tracks user entries and displays the total count of visitors.</p>

                    <p className='mt-2' style={{
                        fontWeight: "300", color: "red"
                    }}>Website Link :&nbsp;
                        <a href="https://webjsprojects.000webhostapp.com/counter.html" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]' style={{
                            fontWeight: "400"
                        }}>click to open</a></p>

                    <p className='mt-3' style={{
                        fontWeight: "300", color: "green"
                    }}>&lt;/&gt; Key Skills
                    </p>

                    <ul className='px-4 mt-1 text-[#5d5c5c]' style={{
                        listStyle: "disc", fontWeight: "300"
                    }}>
                        <li className='mt-1'>Responsive Web Design</li>
                        <li className='mt-1'>HTML</li>
                        <li className='mt-1'>Cascading Style Sheets (CSS)</li>
                        <li className='mt-1'>Bootstrap 5</li>
                        <li className='mt-1'>JavaScript</li>
                    </ul>
                </div>
            </div>

            <div className='lg:flex md:pt-5 bg-white lg:ml-5'>
                <div className='mb-8 lg:mb-5 lg:w-1/2'>
                    <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                        style={{ border: "1px solid white" }}>
                        <div className="flex-grow pt-5 pb-7" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <img
                                className='px-7'
                                src="/javascript/texttospeech.png"
                                alt="nextjs"
                                style={{
                                    ...imageStyle,
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:pt-16 px-4 lg:px-5 py-8 lg:py-0 mb-8 bg-[#eeecec] lg:bg-white'>
                    <p className='text-xl lg:text-2xl' style={{
                        fontWeight: "500"
                    }}>Text to Speech Converter</p>

                    <p className='mt-2 text-[#5d5c5c]' style={{
                        fontWeight: "300"
                    }}>Developed a text-to-speech converter for transforming text input into voice output.</p>

                    <p className='mt-2' style={{
                        fontWeight: "300", color: "red"
                    }}>Website Link :&nbsp;
                        <a href="https://webjsprojects.000webhostapp.com/textspeech.html" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]' style={{
                            fontWeight: "400"
                        }}>click to open</a></p>

                    <p className='mt-3' style={{
                        fontWeight: "300", color: "green"
                    }}>&lt;/&gt; Key Skills
                    </p>

                    <ul className='px-4 mt-1 text-[#5d5c5c]' style={{
                        listStyle: "disc", fontWeight: "300"
                    }}>
                        <li className='mt-1'>Responsive Web Design</li>
                        <li className='mt-1'>HTML</li>
                        <li className='mt-1'>Cascading Style Sheets (CSS)</li>
                        <li className='mt-1'>Bootstrap 5</li>
                        <li className='mt-1'>JavaScript</li>
                    </ul>
                </div>
            </div>

            <div className='lg:flex md:pt-5 bg-white lg:ml-5'>
                <div className='mb-8 lg:mb-5 lg:w-1/2'>
                    <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                        style={{ border: "1px solid white" }}>
                        <div className="flex-grow pt-5 pb-7" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <img
                                className='px-7'
                                src="/javascript/calculator.png"
                                alt="nextjs"
                                style={{
                                    ...imageStyle,
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:pt-16 px-4 lg:px-5 py-8 lg:py-0 mb-8 bg-[#eeecec] lg:bg-white'>
                    <p className='text-xl lg:text-2xl' style={{
                        fontWeight: "500"
                    }}>Calculator</p>

                    <p className='mt-2 text-[#5d5c5c]' style={{
                        fontWeight: "300"
                    }}>Crafted a versatile online calculator for diverse mathematical computations.</p>

                    <p className='mt-2' style={{
                        fontWeight: "300", color: "red"
                    }}>Website Link :&nbsp;
                        <a href="https://webjsprojects.000webhostapp.com/calculator.html" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]' style={{
                            fontWeight: "400"
                        }}>click to open</a></p>

                    <p className='mt-3' style={{
                        fontWeight: "300", color: "green"
                    }}>&lt;/&gt; Key Skills
                    </p>

                    <ul className='px-4 mt-1 text-[#5d5c5c]' style={{
                        listStyle: "disc", fontWeight: "300"
                    }}>
                        <li className='mt-1'>HTML</li>
                        <li className='mt-1'>Cascading Style Sheets (CSS)</li>
                        <li className='mt-1'>JavaScript</li>
                    </ul>
                </div>
            </div>

            <div className='lg:flex md:pt-5 bg-white lg:ml-5'>
                <div className='mb-10 lg:w-1/2'>
                    <div className="md:h-auto text-center left-0 top-0 rounded-lg bg-black mx-2 pt-2 md:mx-1"
                        style={{ border: "1px solid white" }}>
                        <div className="flex-grow pt-5 pb-7" style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <img
                                className='px-7'
                                src="/javascript/selenium.png"
                                alt="nextjs"
                                style={{
                                    ...imageStyle,
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:pt-12 px-4 lg:px-5 py-8 lg:py-0 bg-[#eeecec] lg:bg-white'>
                    <p className='text-xl lg:text-2xl' style={{
                        fontWeight: "500"
                    }}>Web Automation</p>

                    <p className='mt-2 text-[#5d5c5c]' style={{
                        fontWeight: "300"
                    }}>Implemented web automation with Selenium WebDriver to effortlessly navigate
                        and interact with the Fooodie website, streamlining login and page traversal,
                        simplifying the process of video link sharing below.</p>

                    <p className='mt-2' style={{
                        fontWeight: "300", color: "red"
                    }}>Video Link :&nbsp;
                        <a href="https://drive.google.com/file/d/12gHHFEHoOMOBCJpFEZ4glD9ek2o8qFjo/view" target="_blank" rel="noopener noreferrer" className='text-[#3b5998]' style={{
                            fontWeight: "400"
                        }}>click to open</a></p>

                    <p className='mt-3' style={{
                        fontWeight: "300", color: "green"
                    }}>&lt;/&gt; Key Skills
                    </p>

                    <ul className='px-4 mt-1 text-[#5d5c5c]' style={{
                        listStyle: "disc", fontWeight: "300"
                    }}>
                        <li className='mt-1'>Java</li>
                        <li className='mt-1'>Selenium WebDriver</li>
                    </ul>
                </div>
            </div>


        </div>
    );
}

export default Project;
