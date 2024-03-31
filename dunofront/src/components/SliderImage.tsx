import { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const SliderImage = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    let slideTimer: NodeJS.Timeout;

    if (isAutoSliding) {
      slideTimer = setTimeout(() => {
        nextSlide();
      }, 5000); // Auto slide every 1000ms (1sec)

      return () => {
        clearTimeout(slideTimer);
      };
    }
  }, [currentImageIndex, isAutoSliding]);

  // const handleAutoSlideToggle = () => {
  //   setIsAutoSliding(!isAutoSliding);
  // };

  return (
    <div className="relative">
      <div className="grid max-h-[400px] grid-cols-1 md:grid-cols-4 gap-2">
        <div className="col-span-3 group">
          <img
            className="w-full h-[376px] max-h-[376px] object-cover rounded-lg transition-opacity duration-500"
            src={images[currentImageIndex]}
            alt="image"
          />
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
            <button
              className="hidden translate-x-5 group-hover:block group-hover:translate-x-0 absolute left-0 top-1/2 transform -translate-y-1/2 border-2 border-white text-white px-4 py-2 rounded transition-all duration-500"
              onClick={prevSlide}
            >
              <RiArrowLeftSLine />
            </button>
            <button
              className="hidden -translate-x-5 group-hover:block group-hover:translate-x-0 absolute right-[25.2%] top-1/2 transform -translate-y-1/2 border-2 border-white text-white px-4 py-2 rounded transition-all duration-500"
              onClick={nextSlide}
            >
              <RiArrowRightSLine />
            </button>
            {/* <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 border-2 border-white text-white px-4 py-2 rounded transition-opacity duration-500"
          onClick={handleAutoSlideToggle}
        >
          {isAutoSliding ? "Stop Auto Slide" : "Start Auto Slide"}
        </button> */}
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-2">
          {images.slice(1).map((image, index) => (
            <img
              key={index}
              className="w-[200px] max-h-[120px] object-cover rounded-lg transition-opacity duration-500"
              src={image}
              alt="image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
