import Burger from "./Burger.js";
import NavLink from "./NavLink.js";

const Headers = (props, { getState, setState, juris }) => {
     juris.registerComponent("Burger", Burger);
     juris.registerComponent("NavLink", NavLink);

     return {
          header: {
               className: "header",
               children: [
                    {
                         div: {
                              id: "navContainer",
                              className: "nav-container",
                              children: [
                                   {
                                        a: {
                                             href: "/",
                                             id: "logo",
                                             className: "logo",
                                             children: [
                                                  {
                                                       div: {
                                                            className: "logo-icon",
                                                            text: "Elevate",
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //logo

                                   {
                                        input: {
                                             id: "burger-checkbox",
                                             className: "checkbox",
                                             type: "checkbox",
                                             style: {
                                                  display: "none",
                                                  visibility: "hidden",
                                                  position: "absolute",
                                             },
                                        },
                                   }, //checkbox

                                   {
                                        nav: {
                                             className: "navbar",
                                             id: "navBar",
                                             children: () => [
                                                  { NavLink: {} },
                                                  { Burger: {} }, // Burger component
                                             ],
                                        },
                                   }, //nav
                              ],
                         }, //navcontainer
                    }, //header-1stchild
               ],
          },
     };
};

export default Headers;
