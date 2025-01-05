import React from "react";

const destinations = [
  {
    image: "/Images/gal1.jpg",
    title: "Paris, France",
    description:
      "The city of light draws millions of visitors every year with its unforgettable ambiance.",
  },
  {
    image: "/Images/gal2.jpg",
    title: "Bali, Indonesia",
    description:
      "An island paradise known for its lush landscapes, rich culture, and warm hospitality.",
  },
  {
    image: "/Images/gal3.png",
    title: "New York City, USA",
    description:
      "A bustling metropolis blending modern skyscrapers with diverse neighborhoods and iconic landmarks.",
  },
  {
    image: "/Images/gal4.jpg",
    title: "Tokyo, Japan",
    description:
      "A city rich in history, culture, and iconic landmarks like the Imperial Palace and Shibuya Crossing.",
  },
];

const PopularDestination = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">
          Popular Destinations
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <img
                src={city.image}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{city.title}</h4>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
