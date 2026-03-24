import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import spider1Img from './assets/spider1.jpg'
import spider2Img from './assets/spider2.jpg'
import spider3Img from './assets/spider3.jpg'
import spider4Img from './assets/spider4.webp'
import spider5Img from './assets/spider5.jpg'
import spider6Img from './assets/spider6.jpg'


export default function EpisodeSection() {

  const images = [
    { num: 1, img: spider1Img },
    { num: 2, img: spider2Img },
    { num: 3, img: spider3Img },
    { num: 4, img: spider4Img },
    { num: 5, img: spider5Img },
     { num: 6, img: spider6Img }
  ];

  const [active, setActive] = useState(0);

  const next = () => {
    if (active < images.length - 1) setActive(active + 1);
  };

  const prev = () => {
    if (active > 0) setActive(active - 1);
  };

  return (
    <div className="relative p-6 flex items-center">

      {/* Episodes aligned left, take full space */}
      <div className="flex gap-4 flex-grow">
        {images.map((ep, i) => (
          <div
            key={ep.num}
            className={`relative transition duration-300 
              ${i === active ? "scale-110" : "scale-90 opacity-70"}`}
          >
            <img
              src={ep.img}
              className="w-[200px] h-[120px] object-cover rounded-md"
            />
            <span className="absolute bottom-1 right-2 text-red-500 font-bold">
              EP {ep.num}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons stacked vertically on right */}
      <div className="flex column-1 gap-2 ml-2">
        <button
          onClick={prev}
          className="text-white bg-red-600 p-3 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="text-white bg-red-600 p-3 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

    </div>
  );
}