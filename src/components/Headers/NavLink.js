const NavLink = (props, context) => {
     const { getState, setState, juris, RouteManager } = context;

     const navItems = ["home", "services", "portfolio", "testimonials", "contact"];
     const navIcons = ["fas fa-home", "fa-solid fa-briefcase", "fa-solid fa-folder-open", "fa-solid fa-quote-left", "fa-solid fa-paper-plane"];

     const closeBurger = () => {
          const burger = document.getElementById("burger-checkbox");
          burger.checked = false;
     };

     return [
          {
               ul: {
                    id: "navMenu",
                    className: "nav-menu",
                    children: [
                         navItems.map((item, index) => {
                              return {
                                   li: {
                                        className: "nav-item",
                                        key: index,
                                        children: [
                                             {
                                                  a: {
                                                       href: `${item === "home" ? "#" : "#" + item}`,
                                                       className: () => `nav-link ${getState("activeNavLink", "home") === item ? "active" : null}`,
                                                       children: [
                                                            {
                                                                 i: { className: `${navIcons[index]}` },
                                                            },
                                                            " ",
                                                            item.charAt(0).toUpperCase() + item.slice(1),
                                                       ],
                                                       onClick: (e) => {
                                                            closeBurger();
                                                            setState("activeNavLink", item);
                                                       },
                                                  },
                                             },
                                        ],
                                   },
                              };
                         }),
                    ],
               },
          },
     ]; //navlink-btn-container
};

export default NavLink;
