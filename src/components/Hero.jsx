import React from "react";

export default function Hero() {

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center gap-12 text-center max-w-[800px] w-full mx-auto p-4">
                <div className="flex flex-col justify-center items-center  gap-4">
                    <p className="uppercase">It's time to get</p>
                    <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text6xl lg:text-7xl">Swole<span className="text-blue-400">normous</span></h1>
                </div>
                <p className="text-sm md:text-base font-light">I hereby acknowledgement that I may become <span className="text-blue-400 font-semibold">unbelievably swolenormous</span> and accept all risks of becoming the local <span className="text-blue-400 font-semibold">mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
                <button className="bg-slate-950 border-blue-400 rounded-lg p-4 border-solid blueShadows duration-200">Accept & Begin</button>
            </div>
        </>
    )
}