import About from "./Components/About";
import BrandsCounting from "./Components/BrandsCounting";
import CaseStudies from "./Components/CaseStudies";
import DividerWithText from "./Components/DividerWithText ";
import EnhancExp from "./Components/EnhancExp";
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
      <CaseStudies />
    </>
  );
}
