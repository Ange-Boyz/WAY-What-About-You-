import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="">
            <div className=" md:bg-[url('bg1.jpg')] bg-[url('bg.png')] bg-cover bg-center h-screen w-full">
                <div className=" w-full h-full bg-[rgba(0,0,0,0.8)] flex flex-col justify-between pt-5 pb-10">
                    <div className="nav opacity-100 flex items-center justify-between md:px-20 px-5">
                        <div className="logo w-30 opacity-100"><img src="way-white.png" alt="" /></div>
                        <div className="navbar text-white">
                            <ul className="opacity-100 md:flex hidden text-xl space-x-5">
                                <li >
                                    <Link>About us</Link>
                                </li>
                                <li>
                                    <Link>Privicy Policy</Link>
                                </li>
                                <li>
                                    <Link>Contact us</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="opacity-100 text-white text-center md:text-7xl text-4xl">
                        <p>Make new <span className="bg-gradient-to-r from-white to-[#00a99d] bg-clip-text text-transparent">Friends</span> and <br />
                            Discover new way of <br />seeing <span className="bg-gradient-to-r from-white to-[#0071bc] bg-clip-text text-transparent">Life</span>🙂!</p>
                    </div>
                    <div className="btn text-center flex flex-col space-y-5">
                        <Link to="/signUp"> <button className="bg-[#ED1C24] text-white py-2 px-10 text-center rounded-full">Create account</button>
                        </Link>
                        <Link to="/signUp"> <button className="border-1 border-white text-white py-2 px-16 text-center rounded-full">Log in</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-[#0071bc] text-center">About WAY</h1>
                <p>What About you😋 is a simple and fun social network built to help you connect with others.</p>
                <p>On WAY, you can:
                    <ul>
                        <li>Share stories that last 24 hours😎</li>
                        <li>Make new friends despite your location📍</li>
                        <li>Chat/Message disappear after 24 hours😉</li>
                        <li>Show your relationship status with color-coded profiles, <span>"Red"</span> for couple,
                            <span>"Green"</span> for single and <span>"Blue"</span> for just friend
                        </li>
                        <li>And many more...</li>
                    </ul>
                </p>
                <p className="text-red-500">WAY is still under development, so stay tuned and follow the journey as the platform grows step by step.</p>
            </div>
        </div>

    )
}
export default LandingPage;
