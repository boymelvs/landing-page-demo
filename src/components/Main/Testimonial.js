const Testimonial = () => {
     return {
          section: {
               id: "testimonials",
               className: "testimonials",
               children: [
                    {
                         div: {
                              className: "container",
                              children: [
                                   {
                                        h2: { text: "What Our Clients Say" },
                                   },
                                   {
                                        p: { className: "section-intro", text: "Trusted by businesses who value results and long-term partnerships." },
                                   },
                                   {
                                        div: {
                                             className: "testimonial-grid",
                                             children: [
                                                  {
                                                       div: {
                                                            className: "testimonial-card",
                                                            children: [
                                                                 {
                                                                      p: {
                                                                           className: "testimonial-text",
                                                                           text: "“Elevate helped us scale our marketing faster than we expected. Their strategy and execution were both top-notch.”",
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "testimonial-author",
                                                                           children: [
                                                                                {
                                                                                     strong: { text: "Maria Santos" },
                                                                                },
                                                                                "  Marketing Manager, Retail Brand",
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "testimonial-card",
                                                            children: [
                                                                 {
                                                                      p: {
                                                                           className: "testimonial-text",
                                                                           text: "“Professional, responsive, and results-driven. Our website conversions improved significantly.”",
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "testimonial-author",
                                                                           children: [
                                                                                {
                                                                                     strong: { text: "James Lee" },
                                                                                },
                                                                                " Founder, Tech Startup",
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "testimonial-card",
                                                            children: [
                                                                 {
                                                                      p: {
                                                                           className: "testimonial-text",
                                                                           text: "“A reliable marketing partner who understands business goals, not just design.”",
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "testimonial-author",
                                                                           children: [
                                                                                {
                                                                                     strong: { text: "Angela Cruz" },
                                                                                },
                                                                                " Operations Director, Service Company",
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
                    },
               ],
          },
     };
};

export default Testimonial;
