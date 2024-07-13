import Image from "next/image";
import Link from "next/link";

export default function Homepage_aboutus() {
  return (
    <div>
      <div className="bg-[url('/assets/aboutus-landing-bg.png')] bg-cover bg-center min-h-screen py-10">
        <div className="container flex justify-between items-center mx-auto px-36 ">
          <div className="container grid grid-cols-2 gap-4 mt-28">
            <div>
              <Image
                width="550"
                height="600"
                src="/assets/About-us-Banner-image-Yoga.png"
                alt="girl stretch pose"
              />
            </div>
            <div>
              <h6 className="text-[#C52809] text-[22px] font-serif mt-8">
                About Us
              </h6>
              <h2 className="text-[#360000] text-[35px] font-sans-serif font-bold mt-4">
                Where Curiosity Meets Clarity
              </h2>
              <p className=" text-[20px]/8 font-sans-serif font-normal mt-8">
                Welcome to Mental Chunks, your go-to destination for factual,
                expert, and research-backed insights into the depths of the
                human mind. Ever found yourself pondering questions about
                psychology, self-improvement, or mental well-being? Look no
                further.
              </p>
              <br />
              <p className=" text-[20px]/8 font-sans-serif font-normal">
                At Mental Chunks, we’re on a mission to quench your curiosity
                with informative answers that are as enlightening as they are
                reliable.
              </p>
              <Link href="/aboutUs">
                <button className="rounded-lg bg-[#F26044] text-[20px] text-[#fff] font-semibold mt-14 px-16 py-6 mb-36">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
