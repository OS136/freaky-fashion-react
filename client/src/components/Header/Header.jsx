import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import React from "react";
// eslint-disable-next-line react/prop-types
const Header = ({ mainLogo }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };
  return (
    <header className="p-4 bg-white shadow z-50 flex justify-between items-center">
      <div className="container">
        <div className="flex flex-col justify-between lg:flex-row  md:flex-row">
          <Link to="/" className=" h-[200px] mb-[4%] ">
            <img
              alt="Logo"
              className="h-full w-full min-w-[300px] md:w-auto md:min-w-xs object-cover "
              src={mainLogo}
            />
          </Link>
          <div className="flex w-full ml-[20px] items-center">
            <form
              onSubmit={handleSearch}
              className="flex flex-2/3 mr-5 items-center w-full max-w-2xl searchbar border border-black rounded-3xl p-2"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                autoFocus
                type="text"
                name="klädersektionerna"
                placeholder="Sök produkt"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-2 w-full outline-none"
              />
            </form>

            <ul className="flex items-center space-x-4 ">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} />
                </a>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faBasketShopping} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <nav>
          <ul className="flex flex-col space-x-4 sm:flex sm:flex-row ">
            <li>
              <a href="#">Nyheter</a>
            </li>
            <li className="hidden ">
              <a href="#">Kategorier</a>
            </li>
            <li>
              <a href="#">Toplistan</a>
            </li>
            <li>
              <a href="#">Rea</a>
            </li>
            <li>
              <a href="#">Kampanjer</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
