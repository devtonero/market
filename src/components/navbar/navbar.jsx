import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalstyles";
import {
  Nav,
  Navcontainer,
  Navlogo,
  Navicon,
  Micon,
  Nmenu,
  Nlinks,
  Nitems,
  Nibtn,
  Nbtnlink,
} from "./navbar.styles";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const [button, setbutton] = useState(true);

  const toggleClick = () => {
    setclick(!click);
  };

  const showbut = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  };
  useEffect(() => {
    showbut();
  }, []);

  window.addEventListener("resize", showbut);

  return (
    <IconContext.Provider value={{ color: " #fff" }}>
      <Nav>
        <Navcontainer>
          <Navlogo to="/">
            <Navicon />
            ULTRA
          </Navlogo>
          <Micon onClick={toggleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </Micon>
          <Nmenu onClick={toggleClick} click={click}>
            <Nitems>
              <Nlinks to="/"> Home </Nlinks>
            </Nitems>

            <Nitems>
              <Nlinks to="/services"> Services </Nlinks>
            </Nitems>

            <Nitems>
              <Nlinks to="/products"> Products </Nlinks>
            </Nitems>

            <Nibtn>
              {button ? (
                <Nbtnlink to="/singup">
                  <Button primary>Sign Up</Button>
                </Nbtnlink>
              ) : (
                <Nbtnlink to="/singup">
                  <Button fontbig primary>
                    Sign Up
                  </Button>
                </Nbtnlink>
              )}
            </Nibtn>
          </Nmenu>
        </Navcontainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
