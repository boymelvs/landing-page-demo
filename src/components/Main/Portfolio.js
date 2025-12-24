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
                                             className: "section-intro",
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
                                                                      img: {
                                                                           className: "portfolio-image",
                                                                           src: "./assets/photos/Growth-campaign.jpg",
                                                                           alt: "E-commerce Growth Campaign",
                                                                      },
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
                                                                      img: {
                                                                           className: "portfolio-image",
                                                                           src: "./assets/photos/Brand-Redesign.jpg",
                                                                           alt: "Brand Redesign",
                                                                      },
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
                                                                      img: {
                                                                           className: "portfolio-image",
                                                                           src: "./assets/photos/Lead-Generation-Website.jpg",
                                                                           alt: "Lead Generation Website",
                                                                      },
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
