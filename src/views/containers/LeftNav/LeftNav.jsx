import React from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
// import { categories } from "../utils/constants";

export const categories = [
  { name: "New", icon: null, type: "home" },
  // Other categories...
];

const LeftNav = ({ selectedCategory, setSelectedCategory, mobileMenu }) => {
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`w-[72px] md:block overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => (
          <React.Fragment key={item.name}>
            <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate("/");
              }}
              className={`${
                selectedCategory === item.name ? "bg-white/[0.15]" : ""
              }`}
            />
            {item.divider && <hr className="my-5 border-white/[0.2]" />}
          </React.Fragment>
        ))}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
              DaiViet Học Sử
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
