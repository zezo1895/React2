import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
import { auth } from "../config/config";
import context from "../pages/context/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const { theme, toogle } = useContext(context);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div className={`myheader `}>
      <header className="hide-when-mobile ali  ">
        <h1>
          <Link to="/">c4a.dev</Link>
        </h1>

        <i
          onClick={() => {
            toogle(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-sun"
        ></i>
        <i
          onClick={() => {
            toogle(theme == "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-moon"
        ></i>

        <ul className="flex">
      
        
{!user && 
              <li className="main-list">
                <NavLink to="/signin" className="main-link">
                  Sign in
                </NavLink>
              </li>}
              {!user && 
              <li className="main-list">
                <NavLink to="/signup" className="main-link">
                  Sign up
                </NavLink>
              </li>
}
{user &&               
<>

            <li className="main-list">
              <NavLink
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                      navigate("/signin");
                      
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
                to=""
                className="main-link"
              >
                Sign out
              </NavLink>
            </li>
          

              <li className="main-list">
                <NavLink className="main-link" to="/about">
                About
                </NavLink>
              
              </li>
              
              <li className="main-list">
                <NavLink className="main-link" to="/porfile">
                Profile
                </NavLink>
              
              </li>
            
              </>
            }
        </ul>
      </header>

    
    </div>
  );
};

export default Header;
