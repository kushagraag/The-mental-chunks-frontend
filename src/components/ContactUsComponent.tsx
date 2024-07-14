import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import GetQuote from "@/components/GetQuote";

export default function ContactUsComponent() {
  return (
    <>
      <div className="bg-[url('/assets/hero-section-bg.png')] py-10 ">
        <Header />
        <div className="container mx-auto text-justify max-w-screen-lg mt-12 h-auto">
          <h1 className="text-[50px] text-[#340000] text-center font-bold mb-4 ">
            Contact Us
          </h1>
        </div>
        <div className="mx-[10vw] flex items-center my-[10vh]">
          <Image
            src="/assets/contact-us-yoga.jpg"
            width={550}
            height={614}
            alt="contact-us-yoga"
          />
          <div className="mx-[5vw]">
            <h3 className="text-[22px] text-[#C52809]  font-serif my-4 ">
              Need Help?
            </h3>
            <h2 className="text-[35px] text-[#340000] font-bold mb-8">
              Get Started With Us
            </h2>
            <p className="text-[20px] mt-8 text-justify">
              Far far away, behind the word mountains, far from the countries
              Vokalia.
            </p>
            <div className="mt-12">
              <GetQuote />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-justify max-w-screen-lg my-12 h-auto">
        <div>
          <h3 className="text-[22px] text-[#C52809]  font-serif mt-4 text-center ">
            Find Us
          </h3>
          <h2 className="text-[35px] text-[#340000] font-bold mb-8 text-center">
            Our Location
          </h2>
          <div className="-mx-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.973936468485!2d77.66064127499058!3d12.844959887458893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135aeb7f340f%3A0x3ad86af40d2ac611!2sInternational%20Institute%20of%20Information%20Technology%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1720956030798!5m2!1sen!2sin"
              width="1200"
              height="600"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
