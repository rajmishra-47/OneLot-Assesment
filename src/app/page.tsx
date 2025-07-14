import Image from "next/image";
import Navbar from "./navbar";
import Card from "./showcard";
import BusinessFeatures from "./Card2";
import CarFinancing from "./CarFinance";
import DealershipManagement from "./DealerShip";
import WhyOneLot from "./Bundle";
import Testimonial from "./Testimonial";
import StayConnected from "./Connect";
import FrequentlyAskedQuestions from "./FAQ";
import GetStartedSection from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <BusinessFeatures/>
      <CarFinancing/>
      <DealershipManagement/>
      <WhyOneLot/>
      <Testimonial/>
      <StayConnected/>
      <FrequentlyAskedQuestions/>
      <GetStartedSection/>
    </div>
  );
}
