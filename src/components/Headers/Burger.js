const Burger = (props, context) => {
     return {
          label: {
               for: "burger-checkbox",
               className: "burger",
               children: [
                    {
                         span: { className: "line line-top" },
                    },
                    {
                         span: { className: "line line-inner" },
                    },
                    {
                         span: { className: "line line-bottom" },
                    },
               ],
          },
     };
};

export default Burger;
