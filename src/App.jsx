import { useState } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ToastContainer, Slide, toast } from "react-toastify";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { getDownloadURL, ref } from "firebase/storage";
import storage from "./config/firebase";

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
    // console.log(elements);
  });

  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleViewResume = async () => {
    if (resume) {
      setModal(true);
      return;
    }

    setIsLoading(true);

    try {
      const url = await getDownloadURL(ref(storage, "demo-resume.pdf"));
      setResume(url);
      setModal(true);
    } catch (error) {
      console.error("Error fetching resume file from Firebase storage:", error);
      toast.error("Resume file currently unavailable! Hit me up through the contact form to get in touch");
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   getDownloadURL(ref(storage, "demo-resume.pdf")).then((url) => {
  //     console.log(url);
  //     setResume(url);
  //   });
  // }, []);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero handleViewResume={handleViewResume} isLoading={isLoading} />
        {modal === true && <Modal setModal={setModal} resume={resume} />}
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </ReactLenis>
  );
};

export default App;
