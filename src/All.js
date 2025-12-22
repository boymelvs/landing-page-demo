import Headers from "./components/Headers/Headers.js";
import Hero from "./components/Hero.js";
import Services from "./components/Services.js";
import Portfolio from "./components/Portfolio.js";
import Testimonial from "./components/Testimonial.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

const All = (props, { getState, setState, juris }) => {
     juris.registerComponent("Headers", Headers);
     juris.registerComponent("Hero", Hero);
     juris.registerComponent("Services", Services);
     juris.registerComponent("Portfolio", Portfolio);
     juris.registerComponent("Testimonial", Testimonial);
     juris.registerComponent("Contact", Contact);
     juris.registerComponent("Footer", Footer);

     return {
          main: {
               className: "main",
               children: [
                    {
                         Headers: {},
                    },
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
                    {
                         Footer: {},
                    },
               ],
          },
     };
};

export default All;
