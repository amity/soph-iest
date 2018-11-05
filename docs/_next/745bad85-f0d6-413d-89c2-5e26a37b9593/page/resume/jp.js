module.exports = __NEXT_REGISTER_PAGE("/resume/jp", function() {
  return {
    page: webpackJsonp(
      [4],
      {
        261: function(e, a, t) {
          e.exports = t(262);
        },
        262: function(e, a, t) {
          "use strict";
          Object.defineProperty(a, "__esModule", { value: !0 });
          var n = t(0),
            r = t.n(n),
            s = t(8),
            m = t(80),
            c = t(9);
          t.n(c);
          a.default = function() {
            return r.a.createElement(
              s.a,
              { jp: !0, title: "résumé", currentPage: "/resume" },
              r.a.createElement(m.a, { jp: !0 })
            );
          };
        },
        80: function(e, a, t) {
          "use strict";
          var n = t(0),
            r = t.n(n);
          a.a = function(e) {
            var a = e.jp;
            return r.a.createElement(
              "div",
              { className: "resume-div" },
              r.a.createElement(
                "h1",
                { className: "work-header" },
                a ? "履歴書" : "résumé"
              ),
              r.a.createElement(
                "h4",
                { className: "resume-subheader" },
                a ? "連絡したい方は、" : "for inquiries, please contact me at ",
                r.a.createElement(
                  "a",
                  { href: "mailto:sophie.a.debs@gmail.com" },
                  "sophie.a.debs@gmail.com"
                ),
                a ? " にメールしてください。" : "."
              ),
              r.a.createElement(
                "object",
                {
                  className: "pdf-object",
                  data: a
                    ? "../../static/pdf/resume.pdf"
                    : "../static/pdf/resume.pdf",
                  type: "application/pdf",
                  width: "100%",
                  height: "100%"
                },
                r.a.createElement(
                  "iframe",
                  {
                    src: a
                      ? "../../static/pdf/resume.pdf"
                      : "../static/pdf/resume.pdf",
                    width: "100%",
                    height: "100%",
                    style: { border: "none" }
                  },
                  "This browser does not support PDFs. Please download the PDF to view it: ",
                  r.a.createElement(
                    "a",
                    {
                      href: a
                        ? "../../static/pdf/resume.pdf"
                        : "../static/pdf/resume.pdf"
                    },
                    "Download PDF"
                  )
                )
              )
            );
          };
        }
      },
      [261]
    ).default
  };
});
