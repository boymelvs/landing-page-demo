const Demo = (props, { getState, setState }) => {
     return {
          section: {
               children: [
                    {
                         div: {
                              className: "container",
                              children: [
                                   { h2: { text: "Live Demo: Landing Page → n8n Workflow" } },
                                   {
                                        p: {
                                             text: "Recordings of my final tryout task presentation",
                                        },
                                   },

                                   {
                                        div: {
                                             className: "video-wrapper",
                                             children: [
                                                  {
                                                       video: {
                                                            src: "./assets/landingpage-demo(1).mp4",
                                                            controls: true,
                                                            width: "100%",
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

export default Demo;
