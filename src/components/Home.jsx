import React, { useEffect, useRef } from "react";
import pdf from "../pdf/solution.pdf";
import hero from "./Data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Muhammad Umar",
        "I am a full stack developer",
        "Android developer(React Native)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    return () => {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy();
      };
    };
  }, []);

  return (
    <>
      <div className="container Home"id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}> </h1>
          <a
            href={pdf}
            download="solution.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>

        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
