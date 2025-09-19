import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Accordion1 = () => {
  const [isMenuOpen, setMenuOpen] = useState(null);
  const data = [
    {
      id: 0,
      title: "Section 1",
      description:
        "This is the description for section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      title: "Section 2",
      description:
        "This is the description for section 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Section 3",
      description:
        "This is the description for section 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const handleIsMenuOpen = (id) => {
    setMenuOpen(isMenuOpen === id ? null : id);
  };
  return (
    <div className="max-w-7xl mx-auto h-[300px]  p-6 space-y-10 ">
      <h2 className="font-bold text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <div className=" flex flex-col justify-center items-center space-y-4">
        {data.map((item) => (
          <div
            className="w-full px-3 py-5 rounded-xl shadow-xl border border-gray-200"
            key={item.id}
          >
            <div
              className=" flex  items-center justify-between"
              onClick={() => handleIsMenuOpen(item.id)}
            >
              <h2>{item.title}</h2>
              {isMenuOpen === item.id ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {/* description */}
            <div
              className={`${
                isMenuOpen === item.id ? "max-h-96 opacity-100" : "max-h-0"
              } overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <div className="py-4 ">
                <p className=" text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion1;
