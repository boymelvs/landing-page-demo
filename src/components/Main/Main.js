import Hero from "./Hero.js";
import Services from "./Services.js";
import Portfolio from "./Portfolio.js";
import Testimonial from "./Testimonial.js";
import Contact from "./Contact.js";

const Main = (props, { getState, setState, juris }) => {
     juris.registerComponent("Hero", Hero);
     juris.registerComponent("Services", Services);
     juris.registerComponent("Portfolio", Portfolio);
     juris.registerComponent("Testimonial", Testimonial);
     juris.registerComponent("Contact", Contact);

     return {
          main: {
               className: "main",
               children: [
                    {
                         Hero: {},
                    },
                    {
                         Services: {},
                    },
                    {
                         Portfolio: {},
                    },

                    {
                         Testimonial: {},
                    },
                    {
                         Contact: {},
                    },
               ],
          },
     };
};

export default Main;
