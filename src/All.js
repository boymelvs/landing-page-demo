import Headers from "./components/Headers/Headers.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer.js";

import Demo from "./Pages/Demo.js";

const All = (props, { getState, setState, juris }) => {
     juris.registerComponent("Headers", Headers);
     juris.registerComponent("Main", Main);
     juris.registerComponent("Footer", Footer);
     juris.registerComponent("Demo", Demo);

     return [
          { Headers: {} },

          () => {
               const link = getState("link", "/");

               switch (link) {
                    case "/":
                         return { Main: {} };

                    case "#demo":
                         return { Demo: {} };

                    default:
                         return { Main: {} };
               }
          },

          { Footer: {} },
     ];
};

export default All;
