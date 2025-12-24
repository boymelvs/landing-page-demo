const RouteManager = (props, context) => {
     const { getState, setState } = context;

     return {
          hooks: {
               onRegister: () => {
                    window.addEventListener("scroll", handleScroll, { capture: true });
               },

               onUnregister: () => {
                    window.removeEventListener("scroll", handleScroll, { capture: true });
               },
          },

          api: {
               navigate: (href) => navigate(href),
          },
     };

     function navigate(href) {
          window.history.pushState({}, "", href); // change url manually
          window.dispatchEvent(new PopStateEvent("popstate"));
          setState("link", href);
     }

     function handleScroll() {
          const home = document.getElementById("home");
          const services = document.getElementById("services");
          const portfolio = document.getElementById("portfolio");
          const testimonials = document.getElementById("testimonials");
          const contact = document.getElementById("contact");

          if (window.scrollY >= home.offsetTop - home.clientHeight / 4) {
               setState("activeNavLink", "home");
          }

          if (window.scrollY >= services.offsetTop - services.clientHeight / 4) {
               setState("activeNavLink", "services");
          }

          if (window.scrollY >= portfolio.offsetTop - portfolio.clientHeight / 4) {
               setState("activeNavLink", "portfolio");
          }

          if (window.scrollY >= testimonials.offsetTop - testimonials.clientHeight / 4) {
               setState("activeNavLink", "testimonials");
          }

          if (window.scrollY >= contact.offsetTop - contact.clientHeight / 4) {
               setState("activeNavLink", "contact");
          }
     }
};

export default RouteManager;
