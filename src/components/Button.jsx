import React, { useCallback, useRef } from "react";
import gsap from "gsap";

export const Button = ({ children, className, handleAddToCart }) => {
  const clickEffect = useRef();
  const handleAddCartClick = useCallback((e) => {
    const el = e.target;
    const elPos = el.getBoundingClientRect();
    const pos = { x: e.pageX - elPos.x, y: e.pageY - elPos.y };

    gsap.set(clickEffect.current, {
      left: pos.x,
      top: pos.y,
      transformOrigin: "50% 50%",
    });
    gsap.fromTo(
      clickEffect.current,
      { scale: 0, autoAlpha: 0 },
      { scale: 2, autoAlpha: 1, duration: 0.3 }
    );
    gsap.to(clickEffect.current, { autoAlpha: 0, delay: 0.3 });

    handleAddToCart(e);
  }, []);

  return (
    <button onClick={handleAddCartClick} className={"button " + className}>
      <div ref={clickEffect} className="button__clickEffect" />
      <span>{children}</span>
    </button>
  );
};
