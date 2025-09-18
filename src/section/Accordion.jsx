import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = () => {
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
  const [active, setActive] = useState(null);
  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };
  return (
    <div className="max-w-7xl mx-auto h-[50vh] p-6 space-y-10 ">
      <h2 className="text-center font-bold text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col justify-center items-center space-y-2 ">
        {data.map((item) => (
          <div
            className="w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl "
            key={item.id}
          >
            <div
              onClick={() => handleToggle(item.id)}
              className="flex items-center justify-between  px-4 py-4 text-center font-semibold "
            >
              <h3>{item.title}</h3>
              <div>
                {active === item.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>

            {/* accordion contetn */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                active === item.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
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

export default Accordion;
