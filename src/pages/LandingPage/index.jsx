import './index.css';
import Header  from "./sections/Header/index.jsx";
import Hero from "./sections/Hero/index.jsx";   
import LogoTicker from "./sections/LogoTicker/index.jsx";
import  ProductShowcase from "./sections/ProductShowcase/index.jsx";
import  Pricing  from "./sections/Pricing/index.jsx";
import  Testimonials  from "./sections/Testimonials/index.jsx";
import  CallToAction  from "./sections/CallToAction/index.jsx";
import  Footer  from "./sections/Footer/index.jsx";

export default function Landingpage() {
  return (
    <div className="App">
      <>
     <Header  />
     <Hero/>
     <ProductShowcase />
     <Pricing/>
     <Testimonials/>
     <CallToAction />
     <Footer/>
    </>
    </div>
  );
}

