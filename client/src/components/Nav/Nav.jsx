
import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiCompassDiscoverLine } from "react-icons/ri";
import Logo from "./Logo.png";
import { IconName } from "react-icons/ai";
function Nav() {
      return (
            <div classname="nav">
                  <img src={Logo}
                        className="logo"
                  />
                  <div className="buttons">
                        <button className="btn">
                              <FaHome size={'1.5rem'} />
                              <span>Home</span>
                        </button>
                        <button className="btn">
                              <CiSearch size={'1.5rem'} />
                              <span>Search</span>
                        </button>
                        <button className="btn">
                              <RiCompassDiscoverLine size={'1.5rem'} />
                              <span>Discover</span>
                        </button>
                  </div>
            </div>
      );
}
export default Nav;
