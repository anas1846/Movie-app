import { useEffect, useRef, useState } from "react";

export default function MovieSlide() {

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const data = [
    { title: "Blackbird", episode: "S04 EP03", img: "https://picsum.photos/800/500?1" },
    { title: "La familia", episode: "S01 EP06", img: "https://picsum.photos/800/500?2" },
    { title: "The Detective", episode: "S02 EP02", img: "https://picsum.photos/800/500?3" },
    { title: "Dark World", episode: "S03 EP01", img: "https://picsum.photos/800/500?4" },
    { title: "Lost City", episode: "S02 EP08", img: "https://picsum.photos/800/500?5" }
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
                <button className="bg-red-600 text-white px-6 py-2 rounded-full opacity-80 hover:opacity-100">
                  Play
                </button>
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