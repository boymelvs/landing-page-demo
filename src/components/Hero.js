const Hero = (props, { getState, setState }) => {
     return {
          section: {
               id: "home",
               className: "hero",
               children: [
                    {
                         div: {
                              className: "hero-content",
                              children: [
                                   {
                                        h1: { text: "Elevate Your Brand Online" },
                                   },
                                   {
                                        p: { text: "We help businesses grow through strategic digital marketing, performance-driven campaigns, and modern web solutions." },
                                   },
                                   {
                                        a: {
                                             href: "#contact",
                                             className: "btn-primary",
                                             text: "Get in Touch",
                                        },
                                   },
                              ],
                         },
                    }, // hero-content
               ],
          },
     };
};

export default Hero;
