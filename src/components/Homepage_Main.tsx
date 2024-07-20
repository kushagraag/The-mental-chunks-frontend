import Header from "@/components/Header";
import Image from "next/image";

export default function Homepage_Main() {
  return (
    <div>
      <div className="bg-[url('/assets/hero-section-bg.png')] min-h-screen py-10">
        <Header />
        <div className="container flex justify-between  mx-auto md:px-36 pl-8">
          <div className="container grid md:grid-cols-2 gap-4 -mr-20 ">
            <div className="order-1 px-12 mt-8 md:mt-28 -ml-10 place-items-center md:place-items-start">
              <h6 className="text-[#C52809] text-[22px] md:text-[24px] font-serif ">
                Breathe, Relax And Be Still.
              </h6>
              <h1 className="text-[#340000] text-3xl md:text-5xl font-sans-serif mt-12 md:mt-20 font-bold">
                The Mental Chunks
              </h1>
              <p className="text-[22px] font-sans-serif mt-8 font-bold">
                Where Curiosity Meets Clarity
              </p>
              <button className="rounded-lg bg-[#F26044] text-[22px] text-[#fff] font-semibold mt-12 md:mt-20 px-16 py-6">
                Join Now
              </button>
            </div>
            <div className="order-2 mr-12">
              <img
                src="/assets/ATF-Image-YS.png"
                alt="girl in top namaskar pose"
                className="sm:w-96 md:w-[300px] lg:w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
