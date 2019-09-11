module.exports = __NEXT_REGISTER_PAGE("/contact", function() {
  return {
    page: webpackJsonp(
      [11],
      {
        243: function(e, t, a) {
          e.exports = a(244);
        },
        244: function(e, t, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = a(0),
            o = a.n(n),
            r = a(8),
            c = a(76),
            s = a(9);
          a.n(s);
          t.default = function() {
            return o.a.createElement(
              r.a,
              { title: "Contact", currentPage: "/contact" },
              o.a.createElement(c.a, null)
            );
          };
        },
        76: function(e, t, a) {
          "use strict";
          var n = a(0),
            o = a.n(n);
          t.a = function(e) {
            var t = e.jp;
            return o.a.createElement(
              "div",
              { className: "contact-div" },
              o.a.createElement("h1", { className: "work-header" }, "contact"),
              o.a.createElement(
                "h4",
                { className: "resume-subheader" },
                t ? "連絡したい方は、" : "for inquiries, please contact me at ",
                o.a.createElement(
                  "a",
                  { href: "mailto:sophie.a.debs@gmail.com" },
                  "sophie.a.debs@gmail.com"
                ),
                t
                  ? " にメールしてください。"
                  : ", and I'll get back to you as soon as I can."
              ),
              o.a.createElement("br", null),
              o.a.createElement(
                "h5",
                { className: "greyscale-3" },
                t
                  ? "もし興味あれば、Twitterで"
                  : "If you want to see my garbage posts, you can also follow me on twitter at ",
                o.a.createElement(
                  "a",
                  { href: "https://youtu.be/dQw4w9WgXcQ" },
                  "@nggyu"
                ),
                t
                  ? "をフォローできる。"
                  : ", but I'll warn you that it's not very interesting."
              )
            );
          };
        }
      },
      [243]
    ).default
  };
});
