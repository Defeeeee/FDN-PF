import Component01AboutMe from "./imports/01AboutMe";
import Component02Pilares from "./imports/02Pilares";
import Contact from "./imports/Contact";
import Footer from "./imports/Footer";
import { ResponsiveSection } from "./components/ResponsiveSection";
import { HeroEnhanced } from "./components/HeroEnhanced";
import { ProyectosCentered } from "./components/ProyectosCentered";

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <ResponsiveSection designHeight={1080}>
        <HeroEnhanced />
      </ResponsiveSection>
      
      <ResponsiveSection designHeight={1080}>
        <Component01AboutMe />
      </ResponsiveSection>
      
      <ResponsiveSection designHeight={1080}>
        <Component02Pilares />
      </ResponsiveSection>
      
      <ResponsiveSection designHeight={2605}>
        <ProyectosCentered />
      </ResponsiveSection>
      
      <ResponsiveSection designHeight={650}>
        <Contact />
      </ResponsiveSection>
      
      <ResponsiveSection designHeight={250}>
        <Footer />
      </ResponsiveSection>
    </div>
  );
}
