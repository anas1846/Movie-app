import { useEffect, useRef, useState } from "react";
import avengerImg from './assets/avenger.jpg'
import bestImg from './assets/30bd49152683227.632229964dd85.webp'
import BestImg from './assets/6PdfTtBf34zc5Npa.jpg'
import electricImg from './assets/wp11051368.jpg'
import remorseImg from './assets/i-frankenstein.jpeg'


export default function MovieSlider() {

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const data = [
    { title: "Blackbird", episode: "S04 EP03", img:avengerImg },
    { title: "La familia", episode: "S01 EP06", img: bestImg },
    { title: "The Detective", episode: "S02 EP02", img: BestImg },
    { title: "Dark World", episode: "S03 EP01", img: electricImg },
    { title: "Lost City", episode: "S02 EP08", img: remorseImg  }
  ];

  const sliderData = [...data, data[0]];

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    if (!sliderRef.current) return;

    sliderRef.current.style.transition = "transform 0.7s";
    sliderRef.current.style.transform = `translateX(-${index * 420}px)`;

    if (index === data.length) {

      setTimeout(() => {

        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(0px)`;
        setIndex(0);

      }, 700);

    }

  }, [index]);

  return (
<div className="bg-black py-10 flex justify-center">
      <div className="w-[2000px] overflow-hidden">

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6"
        >

          {sliderData.map((item, i) => (

            <div
              key={i}
              className="relative min-w-[300px]"
            >

              <img
                src={item.img}
                className="rounded-lg w-[300px] h-[200px] object-cover"
              />

              {/* Title */}
              <div className="absolute top-4 left-4 text-white">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm opacity-70">{item.episode}</p>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>

              {/* Progress Line */}
              <div className="absolute bottom-2 left-0 w-full h-[3px] bg-gray-700">
                <div className="h-[3px] bg-red-600 w-2/3 relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute -right-1 -top-1"></div>
                </div>
              </div>

            </div>

          ))}

        </div>

        {/* Pagination */}
        <div className="flex justify-end gap-3 mt-6 ">

          {data.map((_, i) => (

            <div
              key={i}
              className={`h-[2px] w-10 ${
                index % data.length === i
                  ? "bg-white"
                  : "bg-gray-600"
              }`}
            ></div>

          ))}

        </div>

      </div>

    </div>
  );
}