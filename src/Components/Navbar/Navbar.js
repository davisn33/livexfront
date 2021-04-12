import React, { Fragment } from "react";

//react router dom
import { Link, NavLink } from "react-router-dom";

//sweet alert
import { warning } from "../../util/alert";

//custom css
// import "../../dist/css/style.min.css";
import "../../assets/extra-libs/c3/c3.min.css";
import "../../assets/extra-libs/jvector/jquery-jvectormap-2.0.2.css";

//custom javascript
import "../../dist/js/custom.min.js";
// import "../../assets/extra-libs/c3/d3.min.js";
import "../../dist/js/app-style-switcher";
import "../../dist/js/sidebarmenu";
import "../../dist/js/feather.min.js";
import "../../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js";
// import "../../dist/js/pages/dashboards/dashboard1.min.js";

import Logo from "../../assets/images/logo-icon.png";
import LogoText from "../../assets/images/logo-text.png";
import Profile from "../../assets/images/users/profile-pic.jpg";

//MUI
import { makeStyles } from "@material-ui/core";

//jquery
import $ from "jquery";

//redux
import { UNSET_ADMIN } from "../../store/admin/types";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../util/serverPath";

import Team from "../../images/team-4.jpg";

const useStyles = makeStyles(() => ({
  navLink: {
    color: "#7C8798",
    fontSize: "16px",
    display: "flex",
    whiteSpace: "nowrap",
    alignItems: "center",
    lineHeight: "27px",
    opacity: "0.7",
    marginRight: "17px",
    "&.active": {
      padding: "12px 0px",
      borderRadius: "0 60px 60px 0",
      color: "#fff!important",
      background:
        "linear-gradient(to right,#8971ea,#7f72ea,#7574ea,#6a75e9,#5f76e8)",
      boxShadow: " 0 7px 12px 0 rgba(95,118,232,.21)",
      opacity: "1",
    },
  },
}));
const Navbar = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDrawer = () => {
    $("#main-wrapper").removeClass("show-sidebar");
  };

  const handleLogout = () => {
    handleDrawer();
    const data = warning();
    data
      .then((isDeleted) => {
        if (isDeleted) {
          dispatch({ type: UNSET_ADMIN });
        }
      })
      .catch((err) => console.log(err));
  };

  const admin = useSelector((state) => state.admin.user);

  // $(".preloader ").fadeOut();

  return (
    <Fragment>
      {/* <div class="preloader">
        <div class="lds-ripple">
          <div class="lds-pos"></div>
          <div class="lds-pos"></div>
        </div>
      </div> */}

      <header class="topbar" data-navbarbg="skin6">
        <nav class="navbar top-navbar navbar-expand-md">
          <div class="navbar-header" data-logobg="skin6">
            <a
              class="nav-toggler waves-effect waves-light d-block d-md-none"
              href="javascript:void(0)"
            >
              <i class="ti-menu ti-close"></i>
            </a>

            <div class="navbar-brand">
              <a href="#" class="d-flex">
                <b class="logo-icon">
                  <img src={Logo} alt="homepage" class="dark-logo" />

                  <img src={Logo} alt="homepage" class="light-logo" />
                </b>

                <span class="logo-text">
                  {/* <img src={LogoText} alt="homepage" class="dark-logo" /> */}
                  <h1 class="mt-4 ml-2 align-items-center">
                    Live<b>X</b>
                  </h1>
                  {/* <img src={LogoText} class="light-logo" alt="homepage" /> */}
                </span>
              </a>
            </div>

            <a
              class="topbartoggler d-block d-md-none waves-effect waves-light"
              href="javascript:void(0)"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="ti-more"></i>
            </a>
          </div>

          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <ul class="navbar-nav float-left mr-auto ml-3 pl-1">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle pl-md-3 position-relative"
                  href="javascript:void(0)"
                  id="bell"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>
                    <i data-feather="bell" class="far fa-bell svg-icon"></i>
                  </span>
                  <span class="badge badge-primary notify-no rounded-circle">
                    5
                  </span>
                </a>
              </li>
            </ul>

            <ul class="navbar-nav float-right">
              <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="javascript:void(0)">
                  <form>
                    <div class="customize-input">
                      <input
                        class="form-control custom-shadow custom-radius border-0 bg-white"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <i class="form-control-icon" data-feather="search"></i>
                    </div>
                  </form>
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="javascript:void(0)"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={!admin.image ? Team : baseURL + "/" + admin.image}
                    alt="user"
                    class="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <span class="ml-2 d-none d-lg-inline-block">
                    <span>Hello,</span>{" "}
                    <span class="text-dark">{admin.name} </span>
                    <i data-feather="chevron-down" class="svg-icon"></i>
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                  <Link to="/admin/profile" class="dropdown-item">
                    <i data-feather="user" class="svg-icon mr-2 ml-1"></i>
                    My Profile
                  </Link>

                  <div class="dropdown-divider"></div>
                  <a
                    class="dropdown-item"
                    href="javascript:void(0)"
                    onClick={handleLogout}
                  >
                    <i data-feather="power" class="svg-icon mr-2 ml-1"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <aside class="left-sidebar" data-sidebarbg="skin6">
        <div
          class="scroll-sidebar"
          data-sidebarbg="skin6"
          style={{ overflowY: "auto" }}
        >
          <nav class="sidebar-nav">
            <ul id="sidebarnav">
              <li class="sidebar-item" onClick={handleDrawer}>
                <NavLink
                  to="/admin/dashboard"
                  className={classes.navLink}
                  id="sidebar-link"
                >
                  {/* <a
                  href="#"
                  class="sidebar-link sidebar-link"
                  aria-expanded="false"
                > */}
                  <i
                    data-feather="home"
                    class="fas fa-home feather-icon pl-5 mr-3"
                  ></i>
                  <span class="hide-menu">Dashboard</span>
                  {/* </a> */}
                </NavLink>
              </li>
              <li class="sidebar-item mt-4" onClick={handleDrawer}>
                <NavLink to="/admin/user" className={classes.navLink}>
                  {/* <a class="sidebar-link sidebar-link" aria-expanded="false"> */}
                  <i
                    data-feather="home"
                    class="fas fa-users feather-icon pl-5 mr-3"
                  ></i>
                  <span class="hide-menu">User</span>
                  {/* </a> */}
                </NavLink>
              </li>
              <li class="sidebar-item mt-4" onClick={handleDrawer}>
                <NavLink to="/admin/country" className={classes.navLink}>
                  <i
                    data-feather="home"
                    class="fas fa-globe feather-icon pl-5 mr-3"
                  ></i>
                  <span class="hide-menu">Country</span>
                </NavLink>
              </li>
              <li class="sidebar-item mt-2 ml-3 mb-0">
                <a
                  class="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                  id="arrow"
                >
                  <i
                    data-feather="grid"
                    class="fas fa-gift feather-icon mr-3"
                  ></i>
                  <span class="hide-menu">Gift </span>
                </a>
                <ul
                  aria-expanded="false"
                  class="collapse  first-level base-level-line"
                  id="sub"
                >
                  <li class="sidebar-item mt-4" onClick={handleDrawer}>
                    <NavLink to="/admin/category" className={classes.navLink}>
                      <i
                        data-feather="home"
                        class="fab fa-cuttlefish feather-icon pl-4 mr-3"
                      ></i>
                      <span class="hide-menu">Category</span>
                    </NavLink>
                  </li>
                  <li class="sidebar-item mt-4" onClick={handleDrawer}>
                    <NavLink to="/admin/gift" className={classes.navLink}>
                      <i
                        data-feather="home"
                        class="fas fa-gift feather-icon pl-4 mr-3"
                      ></i>
                      <span class="hide-menu">Gift</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item mt-0 ml-3 mb-0">
                <a
                  class="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i
                    data-feather="grid"
                    class="fas fa-magic feather-icon mr-3"
                  ></i>
                  <span class="hide-menu">Effects </span>
                </a>
                <ul
                  aria-expanded="false"
                  class="collapse  first-level base-level-line"
                >
                  <li class="sidebar-item mt-2" onClick={handleDrawer}>
                    <NavLink to="/admin/emoji" className={classes.navLink}>
                      <i
                        data-feather="home"
                        class="fas fa-smile feather-icon pl-4 mr-3"
                      ></i>
                      <span class="hide-menu">Emoji</span>
                    </NavLink>
                  </li>
                  <li class="sidebar-item mt-4" onClick={handleDrawer}>
                    <NavLink to="/admin/sticker" className={classes.navLink}>
                      <i
                        data-feather="home"
                        class="fas fa-magic feather-icon pl-4 mr-3"
                      ></i>
                      <span class="hide-menu">Sticker</span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* <li class="sidebar-item mt-2" onClick={handleDrawer}>
                <NavLink to="/admin/image" className={classes.navLink}>
                  <i
                    data-feather="home"
                    class="fas fa-images feather-icon pl-5 mr-3"
                  ></i>
                  <span class="hide-menu">Image</span>
                </NavLink>
              </li> */}
              <li class="sidebar-item mt-2" onClick={handleDrawer}>
                <NavLink to="/admin/plan" className={classes.navLink}>
                  <i
                    data-feather="home"
                    class="fas fa-list feather-icon pl-5 mr-3"
                  ></i>
                  <span class="hide-menu">Plan</span>
                </NavLink>
              </li>
              <li class="sidebar-item mt-4" onClick={handleDrawer}>
                <NavLink to="/admin/history" className={classes.navLink}>
                  <i
                    data-feather="home"
                    class="fas fa-history feather-icon pl-5 mr-3"
                  ></i>
                  <span class="hide-menu">Purchase History</span>
                </NavLink>
              </li>
              <li class="sidebar-item mt-4" onClick={handleDrawer}>
                <NavLink to="/admin/profile" className={classes.navLink}>
                  <i
                    data-feather="home"
                    class="fas fa-user feather-icon pl-5 mr-3"
                  ></i>
                  <span class="hide-menu">Profile</span>
                </NavLink>
              </li>

              <li
                class="sidebar-item mt-4"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                <i
                  data-feather="home"
                  class="fas fa-sign-out-alt feather-icon pl-5 mr-3"
                ></i>
                <span class="hide-menu">Logout</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </Fragment>
  );
};

export default Navbar;
