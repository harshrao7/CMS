import React, { useEffect, useRef } from "react";
import "../pages/login/Login.scss";
import Lottie from "lottie-web";

const Payment = () => {

  const container = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../payment1.json"),
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="login flex">
      <div className="container" ref={container}></div>

    </div>
  );
};

export default Payment;
