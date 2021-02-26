import {useState} from "react";
import { IoColorPaletteOutline } from "react-icons/io5";

import "./colorPalette.css";

const allColors = [
  "--color-purple",
  "--color-pink",
  "--color-brown",
  "--color-gray",
  "--color-yellow",
];

const ColorPalette = () => {
  const [hoverColor, setHoverColor] = useState("");

  return (
    <div className="container-colorPalette">
      {/* <IoColorPaletteOutline color="yellow"/> */}
      <IoColorPaletteOutline className="icon-colorPalette" />
      <div className="container-colors">
        {allColors.map((color) => {
          return (
            <div
              key={`color${color}`}
              className={hoverColor===color?"color active":"color"}
              style={{
                backgroundColor: `var(${color})`,
                border: color.includes("brown") && hoverColor!==color ? "1px solid #C8C8C8" : "",
              }}
              onMouseOver={() => setHoverColor(color)}
			  onMouseLeave={()=>setHoverColor("")}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPalette;
