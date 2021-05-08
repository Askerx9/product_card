import React, { useCallback, useState } from "react";
import gsap from "gsap";
import { Button } from "./components/Button";
import ReactDOM from "react-dom";

//TODO: Favicon
const event = new Event("addToCart");
export const Slider = () => {
  const [activeSlide, setActiveSlide] = useState("white");

  const handleColorClick = (color) => {
    if (color === activeSlide) {
      return null;
    }
    setActiveSlide(color);
    moveHeadset();
  };

  const moveHeadset = useCallback(() => {
    gsap.to(".slider__img", {
      y: -20,
      rotation: -5,
      duration: 0.5,
      transformOrigin: "80% 50%",
    });
    gsap.to(".slider__img", {
      y: 0,
      rotation: 0,
      duration: 0.5,
      delay: 0.5,
    });
  }, []);

  const handleAddToCart = useCallback((e) => {
    e.preventDefault();
    document.dispatchEvent(event);
  }, []);

  return (
    <>
      <li className={`slider__el slider__el--light slider__el--active`}>
        <img
          className={"slider__img"}
          src="images/sony_casque_white.png"
          alt="Sony WH-1000XM3"
        />
        <section className="card">
          <img
            src="images/sony_black.png"
            alt="sony"
            className="product__brand"
          />
          <h3 className="product__title">WH-1000XM3 - White</h3>
          <p>
            Le casque WH-1000XM3 vous offre encore plus de silence, grâce à
            l’amélioration de la réduction de bruit, et une écoute intelligente
            qui s'adapte à votre situation.
          </p>
          <Button
            className={"product__action"}
            handleAddToCart={handleAddToCart}
          >
            Ajouter au panier
          </Button>
        </section>
      </li>
      <li
        className={`slider__el slider__el--dark product ${
          activeSlide === "black" ? "slider__el--active" : null
        }`}
      >
        <img
          className={"slider__img"}
          src="images/sony_casque_black.png"
          alt="Sony WH-1000XM3"
        />
        <section className="card">
          <img
            src="images/sony_white.png"
            alt="sony"
            className="product__brand"
          />
          <h3 className="product__title">WH-1000XM3 - Black</h3>
          <p>
            Le casque WH-1000XM3 vous offre encore plus de silence, grâce à
            l’amélioration de la réduction de bruit, et une écoute intelligente
            qui s'adapte à votre situation.
          </p>
          <Button
            className={"product__action"}
            handleAddToCart={handleAddToCart}
          >
            Ajouter au panier
          </Button>
        </section>
      </li>

      <div className={"product__colors"}>
        <button
          title={"white"}
          className={`button ${activeSlide === "white" ? "active" : null}`}
          onClick={() => handleColorClick("white")}
          style={{ backgroundColor: "#ffffff" }}
        >
          black
        </button>
        <button
          title={"black"}
          className={`button ${activeSlide === "black" ? "active" : null}`}
          onClick={() => handleColorClick("black")}
          style={{ backgroundColor: "#000000" }}
        >
          White
        </button>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Slider />
  </React.StrictMode>,
  document.getElementById("slider")
);
