import React from "react";
import { Image } from "react-shimmer";
import { Spinner } from "../Spinner/Spinner";

export const Loading = () => {
  return <Image fallback={<Spinner />} />;
};
