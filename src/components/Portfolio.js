const Portfolio = () => {
     return {
          section: {
               id: "portfolio",
               className: "portfolio",
               children: [
                    {
                         div: {
                              className: "container",
                              children: [
                                   {
                                        h2: { text: "Our Work" },
                                   },
                                   {
                                        p: {
                                             text: "A selection of projects we've delivered for growing brands across industries.",
                                        },
                                   },
                                   {
                                        div: {
                                             className: "portfolio-grid",
                                             children: [
                                                  {
                                                       div: {
                                                            className: "portfolio-card",
                                                            children: [
                                                                 {
                                                                      div: { className: "portfolio-image", text: "Project Image" },
                                                                 },
                                                                 {
                                                                      h3: {
                                                                           text: "E-commerce Growth Campaign",
                                                                      },
                                                                 },
                                                                 {
                                                                      p: { text: "Increased online revenue by 42% through paid ads and funnel optimization." },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            className: "portfolio-card",
                                                            children: [
                                                                 {
                                                                      div: { className: "portfolio-image", text: "Project Image" },
                                                                 },
                                                                 {
                                                                      h3: {
                                                                           text: "Brand Redesign",
                                                                      },
                                                                 },
                                                                 {
                                                                      p: { text: "Complete visual refresh and messaging strategy for a SaaS startup." },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "portfolio-card",
                                                            children: [
                                                                 {
                                                                      div: { className: "portfolio-image", text: "Project Image" },
                                                                 },
                                                                 {
                                                                      h3: {
                                                                           text: "Lead Generation Website",
                                                                      },
                                                                 },
                                                                 {
                                                                      p: { text: "High-converting landing page generating 3x more qualified leads." },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   },
                              ],
                         },
                    },
               ],
          },
     };
};

export default Portfolio;
