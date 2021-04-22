import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import "./header.css";

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  const logoutUser = async () => {
    try {
      await axios.get("/user/logout");

      localStorage.removeItem("firstLogin");

      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const loggedUser = () => {
    return (
      <>
        <li>
          <Link to="/create_opinion" className="nav-links">
            Create Opinion
          </Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}  className="signin">
            SignOut
          </Link>
        </li>
      </>
    );
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product" className="nav-links">
            Create Product
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          {isAdmin ? "Admin" : "PS5"}
        </Link>
      </div>

      <ul>
        <li>
          <Link className="nav-links" to="/">
            PlayStation®5
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/games">
            Games
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/soon">
            Soon
          </Link>
        </li>

        {isAdmin && adminRouter()}

        {isLogged ? (
          loggedUser()
        ) : (
          <li>
            <Link to="/signin" className="signin">
              SignIn
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
