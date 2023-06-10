import React from "react";
import { Parallax} from "react-parallax";

const CoverBanner = ({ img, title }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={`${img}`}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          className="hero h-[450px]"
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md bg-[#7c7878] p-4">
              <h1 className="mb-5 text-center text-5xl font-bold">{title}</h1>
              <p className="mb-5 text-center">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default CoverBanner;
