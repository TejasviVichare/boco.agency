import About from "./Components/About";
import BrandsCounting from "./Components/BrandsCounting";
import Button from "./Components/Button";
import CaseStudies from "./Components/CaseStudies";
import DividerWithText from "./Components/DividerWithText ";
import EnhancExp from "./Components/EnhancExp";
import Footer from "./Components/Footer";
import Heading from "./Components/Heading";
import LetsgetStarted from "./Components/LetsgetStarted";
import Navbar from "./Components/Navbar";
import StunninglyCrafted from "./Components/StunninglyCrafted";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <DividerWithText />
      <BrandsCounting />
      <hr className="flex-grow border-gray-300" />
      <StunninglyCrafted />
  
      <EnhancExp />
      <div className="w-full flex justify-center pt-5 pl-5 sm:pl-20">
  <Heading heading="Read our recent Case Studies"/>
</div>


      <CaseStudies />
      <LetsgetStarted />

      <div className="overflow-hidden whitespace-nowrap">
      <div className="flex justify-center mb-20 sm:animate-none animate-marquee">
        <Heading heading="Faster Websites. Higher Conversion. More Revenue." />
      </div>
    </div>

      <Footer />
    </>
  );
}
