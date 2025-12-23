const APIManager = (props, { getState, setState }) => {
     let timeOut;
     const username = "boymelvs";
     const password = "17TaskDemo$$";
     const token = btoa(`${username}:${password}`);

     return {
          api: {
               formContactSubmit: (message) => formContactSubmit(message),
               validate: () => validate(),
          },
     };

     async function formContactSubmit(message) {
          message.source = "melvin-task-demo";

          try {
               const res = await fetch("https://n8n.mnfm.cloud/webhook/task-demo", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                         Authorization: `Basic ${token}`,
                    },
                    body: JSON.stringify(message),
               });

               if (!res.ok) {
                    console.log("test", res);
                    throw new Error(`HTTP error! Status: ${res.status}`);
               }

               const data = await res.json();

               if (data.success) {
                    reset();

                    setTimeout(() => {
                         setState("messageSent", false);
                    }, 10000);
               }
          } catch (error) {
               console.error(error);
               setState("messageError", "Server is Busy! Try again later");
          } finally {
               setState("spinner", false);
               setTimeout(() => {
                    setState("messageSent", false);
                    setState("messageError", null);
               }, 10000);
          }
     }

     function validate() {
          const errors = {};
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          const name = getState("form.name", "");
          const email = getState("form.email", "");
          const subject = getState("form.subject", "");
          const message = getState("form.message", "");

          if (timeOut) {
               clearTimeout(timeOut);
          }

          timeOut = setTimeout(() => {
               if (!name) errors.name = "❌ Full Name is required!";
               setState("errors.name", errors.name);

               if (!pattern.test(email)) errors.email = "❌Valid email is required!";
               setState("errors.email", errors.email);

               if (!subject) errors.subject = "❌ Subject is required!";
               setState("errors.subject", errors.subject);

               if (!message) errors.message = "❌ Message is required!";
               setState("errors.message", errors.message);
          }, 500);

          return Object.keys(errors).length === 0;
     }

     function reset() {
          setState("form.name", "");
          setState("form.email", "");
          setState("form.subject", "");
          setState("form.message", "");
          setState("messageSent", true);
          setState("spinner", false);
     }
};

export default APIManager;
