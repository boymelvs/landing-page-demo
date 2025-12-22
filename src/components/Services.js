const Services = (props, { getState, setState }) => {
     return {
          section: {
               id: "services",
               className: "services",
               children: [
                    {
                         div: {
                              className: "container",
                              children: [
                                   {
                                        h2: { text: "Our Services" },
                                   },
                                   {
                                        p: {
                                             className: "section-intro",
                                             text: "We offer end-to-end marketing solutions designed to increase visibility, engagement, and conversions.",
                                        },
                                   },
                                   {
                                        div: {
                                             className: "service-grid",
                                             children: [
                                                  {
                                                       div: {
                                                            className: "service-card",
                                                            children: [
                                                                 {
                                                                      h3: { text: "Digital Marketing" },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           text: "Data-driven campaigns across social media, search engines, and paid ads to reach the right audience.",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            className: "service-card",
                                                            children: [
                                                                 {
                                                                      h3: { text: "Brand Strategy" },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           text: "Position your brand clearly with consistent messaging, visuals, and customer experience.",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            className: "service-card",
                                                            children: [
                                                                 {
                                                                      h3: { text: "Web Design" },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           text: "Modern, responsive websites built to convert visitors into paying customers.",
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
                    },
               ],
          },
     };
};

export default Services;
