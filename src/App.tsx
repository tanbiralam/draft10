import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CareerPath from "./components/CareerPath";
import LearningJourney from "./components/LearningJourney";
import Programs from "./components/Programs";
import PlacementCounsel from "./components/PlacementCounsel";
import ProductManagement from "./components/ProductManagement";
import BecomeMentor from "./components/BecomeMentor";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CareerPath />
      <LearningJourney />
      <Programs />
      <PlacementCounsel />
      <ProductManagement />
      <BecomeMentor />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default App;
