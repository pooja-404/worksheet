
import React, { useState } from "react";
import img1 from "../assets/images/img1.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.png";
import img14 from "../assets/images/img14.jpeg";
import vite from "../assets/images/vite.png";


const Work = () => {
    const [tab, settab] = useState("tab1");
    function handletab(tabs) {
        settab(tabs);
    }
    return (
        <div className="min-h-screen flex bg-zinc-100 justify-center items-center">
            <div className="container max-w-[1320px]  mx-auto px-3">
                <div className="flex-col flex justify-center items-center">
                    <h1 className="font-Poppins text-5xl mb-4 text-center  border-black font-bold text-black">
                        WORKSHEET-2024
                    </h1>
                    <div className="flex w-full justify-between">
                        <p className="rounded-[12px] px-8 text-2xl font-Poppins hover:bg-[#62bde1] font-medium duration-300 transition-all hover:text-black  py-2  text-white bg-black cursor-pointer">
                            Months
                        </p>
                        <p className="rounded-[12px]  px-8 text-2xl font-Poppins hover:bg-[#62bde1] font-medium duration-300 transition-all hover:text-black  py-2  text-white bg-black mr-5 cursor-pointer">
                            Pooja 404
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-between  pt-4 flex-wrap -mx-3">
                    <div className="w-1/5 px-3 p-4    bg-[#d4e0f0]  rounded-3xl">
                        <button onClick={() => handletab("tab1")} className="rounded-[12px]  mb-2 w-full font-Poppins px-8 text-2xl text-center  hover:bg-[#62bde1] font-medium duration-300 transition-all hover:text-black   py-2  text-white bg-black">
                            January
                        </button>
                        <button onClick={() => handletab("tab2")} className="rounded-[12px] mb-2 w-full font-Poppins px-8 text-2xl text-center hover:bg-[#62bde1] font-medium duration-300 transition-all hover:text-black  py-2  text-white bg-black">
                            February
                        </button>
                        <button onClick={() => handletab("tab3")} className="rounded-[12px] mb-2 w-full font-Poppins px-8 text-2xl text-center  hover:bg-[#62bde1] font-medium duration-300 transition-all hover:text-black  py-2  text-white bg-black">
                            March
                        </button>
                        <button onClick={() => handletab("tab4")} className="rounded-[12px] mb-2 w-full font-Poppins px-8 text-2xl text-center  hover:bg-[#62bde1] font-medium duration-300 transition-all hover:text-black  py-2  text-white bg-black">
                            April
                        </button>

                    </div>
                    <div className="w-4/5 px-3  ">
                        {tab === "tab1" && <div className="p-4 bg-[#d4e0f0] max-h-[550px] overflow-y-scroll   rounded-3xl">
                            <p className="text-black text-2xl font-bold font-poppins pb-3 ">
                                January-Data
                            </p>
                            <div className="flex flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1  font-semibold text-2xl font-poppins pb-3">
                                            1.
                                        </p>
                                        <img
                                            src={img1}
                                            alt="1"
                                            className="w-full max-h-[200px] h-full max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            Ft-Plan
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium ">
                                            (Date of submission : 9-1-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/ft-plane"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/ft-plane
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://ft-plane-mocha.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://ft-plane-mocha.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            2.
                                        </p>
                                        <img
                                            src={img3}
                                            alt="3"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            FURNITURE
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 16-1-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/furniture "
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/furniture
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://furniture-dusky-two.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://furniture-dusky-two.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            3.
                                        </p>
                                        <img
                                            src={img4}
                                            alt="3"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins">
                                            LEMON-WARES
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium">
                                            (Date of submission : 25-1-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/lemonwares

"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/lemonwares
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://lemonwares-ten.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://lemonwares-ten.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>}

                        {tab === "tab2" && <div className="p-4 bg-[#d4e0f0] max-h-[550px] overflow-y-scroll  rounded-3xl">
                            <p className="text-black text-2xl font-poppins pb-3 font-bold ">
                                February-Data
                            </p>
                            <div className="flex flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black font-semibold pr-1 text-2xl font-poppins pb-3">
                                            1.
                                        </p>
                                        <img
                                            src={img5}
                                            alt="1"
                                            className="w-full max-h-[200px] h-full max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            Exclusive-Games
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 05-02-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/exclusive-games"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/exclusive-games
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://exclusive-games-eta.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://exclusive-games-eta.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            2.
                                        </p>
                                        <img
                                            src={img6}
                                            alt="2"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            DINO-LFG
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 10-02-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/dinolfgg"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/dinolfgg
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://dinolfgg.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://dinolfgg.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            3.
                                        </p>
                                        <img
                                            src={img7}
                                            alt="3"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            NEX-AI
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 17-02-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/nexai

"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/nexai
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://nexai-bay.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://nexai-bay.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            4.
                                        </p>
                                        <img
                                            src={img8}
                                            alt="3"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            CALCULATOR
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 20-02-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/calculatorjs

"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/calculatorjs
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://calculatorjs-psi.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://calculatorjs-psi.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            5.
                                        </p>
                                        <img
                                            src={img7}
                                            alt="3"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            NEX-AI Bootstrap
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 22-02-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/nexaibootstrap"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/nexaibootstrap
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://nexaibootstrap.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://nexaibootstrap.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {tab === "tab3" && <div className="p-4 bg-[#d4e0f0] max-h-[550px] overflow-y-scroll   rounded-3xl">
                            <p className="text-black text-2xl font-poppins pb-3 font-bold ">
                                March-Data
                            </p>
                            <div className="flex flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            1.
                                        </p>
                                        <img
                                            src={img9}
                                            alt="1"
                                            className="w-full max-h-[200px] h-full max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            CLOOP
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 04-03-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/cloop"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/cloop
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://cloop.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://cloop.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            2.
                                        </p>
                                        <img
                                            src={img10}
                                            alt="2"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            LABS-248
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 19-03-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/248labs"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/248labs
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://248labs.vercel.app/"
                                                    target="blank"
                                                >https://248labs.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            3.
                                        </p>
                                        <img
                                            src={img11}
                                            alt="3"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            Practice-Nextjs
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 22-03-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/my-work
"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/my-work
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://my-work-kappa-neon.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://my-work-kappa-neon.vercel.app/

                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            4.
                                        </p>
                                        <img
                                            src={img12}
                                            alt="3"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            Swiper-Slider
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 20-03-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/my-slider

"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/my-slider
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://my-slider-tau.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://my-slider-tau.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            5.
                                        </p>
                                        <img
                                            src={vite}
                                            alt="3"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            Vite-Html
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 27-03-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/html-vite

"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/html-vite
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://html-vite-psi.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://html-vite-psi.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            6.
                                        </p>
                                        <img
                                            src={img13}
                                            alt="13"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex flex-wrap pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            FORM-VALIDATION-IN-REACT
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 27-03-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/form-valadation"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/form-valadation
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://form-valadation.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://form-valadation.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-6 flex-wrap items-center flex-row -mx-3">
                                <div className="w-2/5 px-3">
                                    <div className="flex">
                                        <p className="text-black pr-1 font-semibold text-2xl font-poppins pb-3">
                                            7.
                                        </p>
                                        <img
                                            src={img14}
                                            alt="14"
                                            className="w-full h-full max-h-[200px] max-w-[350px]"
                                        />
                                    </div>
                                </div>
                                <div className="w-3/5 px-3">
                                    <div className="flex flex-wrap pb-3 items-center">
                                        <p className="text-black pr-1 font-bold text-3xl font-poppins ">
                                            WORKSHEET
                                        </p>
                                        <p className="text-black  text-xl font-poppins font-medium  ">
                                            (Date of submission : 27-03-2024)
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Github-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://github.com/pooja-404/worksheet"
                                                    target="blank"
                                                >
                                                    https://github.com/pooja-404/worksheet
                                                </a>
                                            </span>
                                        </p>
                                        <p className="text-black text-xl font-poppins font-medium  ">
                                            Live-Link :{" "}
                                            <span className="ms-3 border-b-2 border-black hover:text-blue-700">
                                                <a
                                                    href="https://worksheet-neon.vercel.app/"
                                                    target="blank"
                                                >
                                                    https://worksheet-neon.vercel.app/
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {tab === "tab4" && <div >

                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
