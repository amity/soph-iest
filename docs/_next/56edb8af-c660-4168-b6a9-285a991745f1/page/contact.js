module.exports = __NEXT_REGISTER_PAGE("/contact", function() {
  return {
    page: webpackJsonp(
      [5],
      {
        235: function(e, t, a) {
          e.exports = a(236);
        },
        236: function(e, t, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = a(0),
            o = a.n(n),
            c = a(37),
            r = function() {
              return o.a.createElement(
                "div",
                { className: "contact-div" },
                o.a.createElement(
                  "h1",
                  { className: "work-header" },
                  "contact"
                ),
                o.a.createElement(
                  "h4",
                  { className: "resume-subheader" },
                  "For inquiries, please contact me at ",
                  o.a.createElement(
                    "a",
                    { href: "mailto:sophie.a.debs@gmail.com" },
                    "sophie.a.debs@gmail.com"
                  ),
                  ", ",
                  o.a.createElement("br", null),
                  "and I'll get back to you as soon as I can."
                ),
                o.a.createElement("br", null),
                o.a.createElement(
                  "h5",
                  { className: "greyscale-3" },
                  "If you want to see my garbage posts, you can also follow me on twitter at ",
                  o.a.createElement(
                    "a",
                    { href: "https://youtu.be/dQw4w9WgXcQ" },
                    "@nggyu"
                  ),
                  ", but I'll warn you that it's not very interesting."
                )
              );
            };
          a(38),
            (t.default = function() {
              return o.a.createElement(
                c.a,
                { title: "Contact", currentPage: "/contact" },
                o.a.createElement(r, null)
              );
            });
        }
      },
      [235]
    ).default
  };
});
