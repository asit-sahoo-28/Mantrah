// import { useAuth } from "../context/AuthContext";

import Hero from "../components/Hero";

import Registration from "../components/Registration";
import Testimonials from "../components/Testimonials";
import Welcome from "../components/Welcome";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

// export default function Home() {
//   const { logout } = useAuth();

//   return (
//     <>
//       <h1>Home</h1>
//       <button onClick={logout}>Logout</button>
//     </>
//   );
// }


export default function Home() {
  return (
    <>
    <Hero/>
    <Welcome/>
    <WhatWeOffer/>
    <WhyChooseUs/>
    <Registration/>
    <Testimonials/>
    
    
    </>
  );
}
