import React from "react";

export default function Header() {
  return (
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/#home">
          <img
            id="image"
            src="https://cdn3.iconfinder.com/data/icons/vol-4/128/plane-512.png"
            alt="logo"
            srcset=""
            width="50px"
          ></img>
        </a>
        <a class="navbar-brand" href="/#home">
          <h1 class="tour">World Tour</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item active">
              <a class="nav-link" href="/#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contact">
                Contact
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li> */}
            <form class=" nav-item dropdown form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Enter Place name"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success
                my-2 my-sm-1"
                type="submit"
                
              >
                Search
              </button>
            </form>
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
