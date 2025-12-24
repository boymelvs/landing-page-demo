const Contact = (props, { getState, setState, APIManager }) => {
     return {
          section: {
               id: "contact",
               className: "contact",
               children: [
                    {
                         div: {
                              className: "container",
                              children: [
                                   {
                                        h2: {
                                             text: "Contact Us",
                                        },
                                   },
                                   {
                                        p: {
                                             className: "section-intro",
                                             text: "Tell us about your project and we'll get back to you shortly.",
                                        },
                                   },
                                   {
                                        form: {
                                             onSubmit: (e) => {
                                                  e.preventDefault();

                                                  if (APIManager.validate()) {
                                                       const message = {
                                                            name: getState("form.name"),
                                                            email: getState("form.email"),
                                                            subject: getState("form.subject"),
                                                            message: getState("form.message"),
                                                       };

                                                       APIManager.formContactSubmit(message);
                                                       setState("spinner", true);
                                                  }
                                             },
                                             className: "contact-form",
                                             children: [
                                                  {
                                                       div: {
                                                            className: "form-group",
                                                            children: [
                                                                 {
                                                                      label: { for: "name", text: "Name" },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "name",
                                                                           className: () => `input ${getState("errors.name") ? "red-border" : null}`,
                                                                           type: "text",
                                                                           placeholder: "Your full name",
                                                                           required: true,
                                                                           value: () => getState("form.name"),
                                                                           onInput: (e) => {
                                                                                setState("form.name", e.target.value);
                                                                                APIManager.validate();
                                                                           },
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "error-container",
                                                                           children: [
                                                                                {
                                                                                     span: {
                                                                                          className: "error",
                                                                                          text: () => getState("errors.name"),
                                                                                          style: {
                                                                                               display: "block",
                                                                                               textAlign: "right",
                                                                                               fontSize: "12px",
                                                                                               color: "hsl(0, 100%, 63%)",
                                                                                               fontWeight: "500",
                                                                                          },
                                                                                     },
                                                                                },
                                                                           ],
                                                                           style: {
                                                                                display: "block",
                                                                                height: "16px",
                                                                                position: "absolute",
                                                                                top: "0",
                                                                                right: "0",
                                                                           },
                                                                      },
                                                                 }, //error
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "form-group",
                                                            children: [
                                                                 {
                                                                      label: { for: "email", text: "Email" },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "email",
                                                                           className: () => `input ${getState("errors.email") ? "red-border" : null}`,
                                                                           type: "email",
                                                                           placeholder: "your@email.com",
                                                                           required: true,
                                                                           value: () => getState("form.email"),
                                                                           onInput: (e) => {
                                                                                setState("form.email", e.target.value);
                                                                                APIManager.validate();
                                                                           },
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "error-container",
                                                                           children: [
                                                                                {
                                                                                     span: {
                                                                                          className: "error",
                                                                                          text: () => getState("errors.email"),
                                                                                          style: {
                                                                                               display: "block",
                                                                                               textAlign: "right",
                                                                                               fontSize: "12px",
                                                                                               color: "hsl(0, 100%, 63%)",
                                                                                               fontWeight: "500",
                                                                                          },
                                                                                     },
                                                                                },
                                                                           ],
                                                                           style: {
                                                                                display: "block",
                                                                                height: "16px",
                                                                                position: "absolute",
                                                                                top: "0",
                                                                                right: "0",
                                                                           },
                                                                      },
                                                                 }, //error
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "form-group",
                                                            children: [
                                                                 {
                                                                      label: { for: "subject", text: "Subject" },
                                                                 },
                                                                 {
                                                                      input: {
                                                                           id: "subject",
                                                                           className: () => `input ${getState("errors.subject") ? "red-border" : null}`,
                                                                           type: "text",
                                                                           placeholder: "Subject",
                                                                           required: true,
                                                                           value: () => getState("form.subject"),
                                                                           onInput: (e) => {
                                                                                setState("form.subject", e.target.value);
                                                                                APIManager.validate();
                                                                           },
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "error-container",
                                                                           children: [
                                                                                {
                                                                                     span: {
                                                                                          className: "error",
                                                                                          text: () => getState("errors.subject"),
                                                                                          style: {
                                                                                               display: "block",
                                                                                               textAlign: "right",
                                                                                               fontSize: "12px",
                                                                                               color: "hsl(0, 100%, 63%)",
                                                                                               fontWeight: "500",
                                                                                          },
                                                                                     },
                                                                                },
                                                                           ],
                                                                           style: {
                                                                                display: "block",
                                                                                height: "16px",
                                                                                position: "absolute",
                                                                                top: "0",
                                                                                right: "0",
                                                                           },
                                                                      },
                                                                 }, //error
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "form-group",
                                                            children: [
                                                                 {
                                                                      label: { for: "message", text: "Message" },
                                                                 },
                                                                 {
                                                                      textArea: {
                                                                           id: "message",
                                                                           className: () => `input ${getState("errors.message") ? "red-border" : null}`,
                                                                           rows: "9",
                                                                           placeholder: "How can we help you?",
                                                                           required: true,
                                                                           value: () => getState("form.message"),
                                                                           onInput: (e) => {
                                                                                setState("form.message", e.target.value);
                                                                                APIManager.validate();
                                                                           },
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "error-container",
                                                                           children: [
                                                                                {
                                                                                     span: {
                                                                                          className: "error",
                                                                                          text: () => getState("errors.message"),
                                                                                          style: {
                                                                                               display: "block",
                                                                                               textAlign: "right",
                                                                                               fontSize: "12px",
                                                                                               color: "hsl(0, 100%, 63%)",
                                                                                               fontWeight: "500",
                                                                                          },
                                                                                     },
                                                                                },
                                                                           ],
                                                                           style: {
                                                                                display: "block",
                                                                                height: "16px",
                                                                                position: "absolute",
                                                                                top: "0",
                                                                                right: "0",
                                                                           },
                                                                      },
                                                                 }, //error
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       button: {
                                                            className: () => `btn-primary send-btn ${getState("spinner", false) ? "loading" : null}`,
                                                            type: "submit",
                                                            children: [
                                                                 {
                                                                      span: { className: "spinner" },
                                                                 },
                                                                 " Send Message",
                                                            ],
                                                            disabled: () => getState("spinner", false),
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            className: "formFeedback",
                                                            text: () =>
                                                                 getState("messageSent", false)
                                                                      ? "Got it! Check your inbox—we'll be in touch soon."
                                                                      : getState("messageError", null),
                                                            style: {
                                                                 marginTop: "10px",
                                                                 fontSize: "14px",
                                                                 color: () => (getState("messageSent", false) ? "var(--green)" : "var(--light-red)"),
                                                                 width: "100%",
                                                                 textAlign: "center",
                                                                 height: "1.6rem",
                                                                 fontWeight: "600",
                                                            },
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

export default Contact;
