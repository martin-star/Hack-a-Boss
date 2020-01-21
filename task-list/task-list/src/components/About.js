import React from "react";
import Lottie from "react-lottie";
import data from "../lottie/data.json";

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data
  };

  return <Lottie options={defaultOptions} width="400px" height="400px" />;
}
 