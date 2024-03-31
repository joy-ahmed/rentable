
const SliderImage = ({ images } :{ images: string[]}) => {
  return (
    <div className="grid max-h-[400px] grid-cols-1 md:grid-cols-4 gap-2">
      <div className="col-span-3">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[0]}
          alt="image"
        />
      </div>
      <div className="hidden md:flex flex-col gap-2">
        {images.slice(1).map((image) => (
          <img
            className="w-[200px] max-h-[120px] object-cover rounded-lg"
            src={image}
            alt="image"
          />
        ))}
      </div>
    </div>

  )
}

export default SliderImage