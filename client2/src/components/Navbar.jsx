import {  Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { useState } from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);  

  return (
    <div className="navbar">
      <a href="/">
        <img src="/assets/anfilogo.png" alt="logo" />
      </a>

      
      <div className="navbar_right">        

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: variables.darkgrey }} />
          
            <Person sx={{ color: variables.darkgrey }} />
          
        </button>

        {dropdownMenu && (
          <div className="navbar_right_accountmenu">
            <Link to={`/favoritos`}>Wish List</Link>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Navbar;