const images = [
  {
    src: "/images/iStock-480767428.jpg",
    alt: "Fashion Outlook Ideas",
  },
  {
    src: "/images/iStock-605984452.jpg",
    alt: "Man Fashion",
  },
  {
    src: "/images/iStock-970937374.jpg",
    alt: "Woman fashion",
  },
];

export default function ClassicSection() {
  return (
    <div className="hidden lg:flex gap-[4%]  my-[2%]">
      {images.map((image, index) => (
        <a key={index} className="w-[250px] flex-1 p-4 basis-[29%]">
          <div className="relative text-center  rounded-lg shadow-lg">
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[26px] font-bold text-brown w-full">
              Lorem ipsum dolor
            </h2>
            <img
              src={image.src}
              alt={image.alt}
              className="block w-full h-[200px] object-cover rounded-lg PicGrid"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
