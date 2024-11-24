import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type slideType = {
  title: string;
  subtitle?: string;
  content: string;
  link?: string;
  featuredImg?: string;
  img: string[];
};

export const Card3md1sm = ({ data }: { data: slideType[] }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
    mode: "snap",
    slideChanged() {
      console.log("slide changes");
    },
  });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <div className="flex w-full flex-row items-center justify-end gap-2">
        <button
          className="flex h-fit w-fit items-center justify-center rounded-full bg-taki-primary p-2"
          onClick={() => instanceRef.current?.prev()}
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="flex h-fit w-fit items-center justify-center rounded-full bg-taki-primary p-2"
          onClick={() => instanceRef.current?.next()}
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </button>
      </div>
      <div ref={sliderRef} className="keen-slider w-ful h-full rounded-lg">
        {data.map((_, idx) => (
          <div className="keen-slider__slide p-4" key={idx}>
            <div
              className="relative h-[400px] w-full overflow-hidden rounded-lg bg-taki-primary shadow-lg"
              style={{
                backgroundImage: `url(${_.featuredImg ? _.featuredImg : _.img[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="group absolute inset-0 h-full w-full transform cursor-pointer bg-gradient-to-b from-black/50 via-transparent to-transparent bg-cover bg-center transition-all duration-300 hover:from-black/70 hover:via-transparent hover:to-transparent hover:bg-cover hover:bg-center"
                onClick={() =>
                  window.open(_.link ? _.link : "https://github.com/ztzyrant", "_blank")
                }
              >
                <div className="relative flex h-full w-full items-start justify-start">
                  <div className="z-[2] flex h-full w-full flex-col items-start justify-start p-4 shadow-md">
                    <h2 className="line-clamp-1 text-center font-monument text-white">{_.title}</h2>
                    <p className="invisible line-clamp-2 font-sans text-xs font-semibold leading-3 text-white group-hover:visible md:text-sm">
                      {_.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
