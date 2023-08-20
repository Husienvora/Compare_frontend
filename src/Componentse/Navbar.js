import { useEffect } from "react";
import { useNormalContext } from "../Context/Contex";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <p className="title normal-case text-xl font-sans font-medium">
        Compare.ai
      </p>
      <p className="social-1 normal-case text-xl font-sans font-medium">
        <button
          onClick={() => {
            window.open("https://github.com/Husienvora?tab=repositories");
          }}
        >
          <FaGithub className="icon" size={25} />
        </button>
      </p>
      <p className="social-2 normal-case text-xl font-sans font-medium">
        <button
          onClick={() => {
            window.open("https://www.linkedin.com/in/husien-vora-0aa015223/");
          }}
        >
          <FaLinkedin className="icon" size={25} />
        </button>
      </p>
    </>
  );
}

export default Navbar;
