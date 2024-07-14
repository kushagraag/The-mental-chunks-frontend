import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

export default function AboutUsComponent() {
  return (
    <>
      <div className="bg-[url('/assets/hero-section-bg.png')] py-10 ">
        <Header />
        <div className="container mx-auto text-justify max-w-screen-lg mt-12 h-auto">
          <h1 className="text-[50px] text-[#340000] text-center font-bold mb-4 ">
            About Us
          </h1>
        </div>
        <div className="mx-[10vw] flex items-center my-[10vh]">
          <Image
            src="/assets/About-us-Banner-image-2-Yoga.png"
            width={491}
            height={611}
            alt="aboutUsimg"
          />
          <div className="mx-[5vw]">
            <h2 className="text-[35px] text-[#340000] font-bold mb-8">
              What do we do ?
            </h2>
            <p className="text-[20px] mt-8 text-justify leading-loose font-bold">
              Welcome to Mental Chunks, where expertise meets innovation! Our
              team is a powerhouse of medical professionals committed to
              transforming the healthcare landscape. Leveraging our cutting-edge
              media ventures, we collaborate with B2B partners to pioneer
              solutions that drive change. But we’re not just about business –
              we’re your trusted navigator through the maze of thoughts,
              offering fact-checked, research-backed answers to all your
              inquiries. Join us on a journey to clarity and transformation!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-justify max-w-screen-lg mt-12 h-auto">
        <div>
          <h2 className="text-[35px] text-[#340000] font-bold mb-8">
            Who We Are
          </h2>
          <p className="text-[20px] my-8 text-justify leading-loose">
            Welcome to Mental Chunks, your go-to destination for factual,
            expert, and research-backed insights into the depths of the human
            mind. Ever found yourself pondering questions about psychology,
            self-improvement, or mental well-being? Look no further. At Mental
            Chunks, we’re on a mission to quench your curiosity with informative
            answers that are as enlightening as they are reliable.
          </p>
          <p className="text-[20px] my-8 text-justify leading-loose">
            But we’re more than just a repository of knowledge. We’re a dynamic
            digital media venture, partnering with clients to elevate their
            presence in the ever-evolving landscape of social media. Whether
            you’re an individual looking to amplify your personal brand, a
            company aiming to leave a lasting impression, or seeking
            comprehensive marketing solutions, Mental Chunks has you covered.
          </p>
          <p className="text-[20px] my-8 text-justify leading-loose">
            Our dedication to healthcare is unwavering. In an era where
            strengthening healthcare infrastructure is paramount, we stand as
            staunch supporters, offering end-to-end solutions for corporations
            seeking to expand their reach. Because we believe that a healthier
            world begins with empowered minds and informed decisions.
          </p>
          <p className="text-[20px] my-8 text-justify leading-loose">
            Join us on a journey of exploration, empowerment, and endless
            possibilities. Welcome to Mental Chunks, where knowledge meets
            innovation, and curiosity knows no bounds.
          </p>
          <Link href="/aboutUs" className="flex place-content-center">
            <button className="rounded-lg bg-[#F26044] text-[20px] text-[#fff] font-semibold mt-14 px-16 py-6 mb-36">
              Read More
            </button>
          </Link>
        </div>

        {/* some bg */}
        <div className="mb-24">
          <h3 className="text-[22px] text-[#C52809] font-bold mt-8 text-center">
            Learn About
          </h3>
          <h2 className="text-[35px] text-[#340000] font-bold mb-8 text-center">
            Empowering Minds, One Fact at a Time: Mental Chunks
          </h2>
          <p className="text-[20px] my-8 text-justify leading-loose">
            Step into the world of Mental Chunks, where expertise and innovation
            converge to redefine healthcare. Our team comprises dedicated
            medical professionals on a mission to revolutionize the industry.
            Through our dynamic media ventures, we forge partnerships with B2B
            channels, crafting comprehensive solutions that propel the
            healthcare market forward.
          </p>
          <p className="text-[20px] my-8 text-justify leading-loose">
            Yet, our mission extends beyond business. We’re here to serve as
            your unwavering guide through the labyrinth of thoughts and
            questions that occupy your mind. Whether you’re seeking clarity on
            mental health, self-improvement, or simply craving well-researched
            insights, we’re here to provide the answers you seek.
          </p>
          <p className="text-[20px] my-8 text-justify leading-loose">
            At Mental Chunks, we believe in the power of knowledge to transform
            lives. Join us as we navigate the complexities of healthcare, paving
            the way for a brighter, healthier future for all.”
          </p>
        </div>
      </div>
    </>
  );
}
