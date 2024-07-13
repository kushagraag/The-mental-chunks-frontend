import Header from "./Header";
import Image from "next/image";

export default function Homepage_part1() {
  return (
    <div>
      <div
        className="bg-[url('/assets/hero-section-bg.png')] min-h-screen py-10"
        // edit later to add curve
        style={{
          clipPath: "path('M0,0 H100% V85% C50% 100%, 50% 70%, 0 85% Z')",
        }}
      >
        {" "}
        <Header />
        <div className="container flex justify-between items-center mx-auto px-36">
          <div className="container grid grid-cols-2 gap-4">
            <div className="px-12 mt-20">
              <h6 className="text-[#C52809] text-[24px] font-serif">
                Breathe, Relax And Be Still.
              </h6>
              <h1 className="text-[#340000] text-[50px] font-sans-serif mt-10 font-bold">
                The Mental Chunks
              </h1>
              <p className="text-[22px] font-sans-serif mt-20">
                Where Curiosity Meets Clarity
              </p>
              <button className="rounded-lg bg-[#F26044] text-[22px] text-[#fff] font-semibold mt-20 px-16 py-6">
                Join Now
              </button>
            </div>
            <div>
              <Image
                width="630"
                height="910"
                src="/assets/ATF-Image-YS.png"
                alt="girl in top namaskar pose"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
