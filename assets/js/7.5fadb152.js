(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        101: function (e, t, a) {
            "use strict";
            a.r(t);
            var s = a(2),
                r = Object(s.a)({}, function () {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("ContentSlotsDistributor", {
                        attrs: {
                            "slot-key": e.$parent.slotKey
                        }
                    }, [a("h1", {
                        attrs: {
                            id: "welcome"
                        }
                    }, [a("a", {
                        staticClass: "header-anchor",
                        attrs: {
                            href: "#welcome",
                            "aria-hidden": "true"
                        }
                    }, [e._v("#")]), e._v(" Welcome")]), e._v(" "), a("p", [e._v("Welcome to the VuePress starter template for "), a("a", {
                        attrs: {
                            href: "https://codesandbox.io",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("CodeSandbox"), a("OutboundLink")], 1), e._v(". To learn more about VuePress in general and how to customise this project, please see the "), a("a", {
                        attrs: {
                            href: "https://v1.vuepress.vuejs.org",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("VuePress documentation"), a("OutboundLink")], 1), e._v(".")]), e._v(" "), a("p", [e._v("This template uses the default VuePress theme. To learn more about what you can do with it, please see the "), a("a", {
                        attrs: {
                            href: "https://v1.vuepress.vuejs.org/theme/default-theme-config.html#homepage",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Default Theme Config"), a("OutboundLink")], 1), e._v(" guide.")]), e._v(" "), a("h2", {
                        attrs: {
                            id: "using-a-custom-theme"
                        }
                    }, [a("a", {
                        staticClass: "header-anchor",
                        attrs: {
                            href: "#using-a-custom-theme",
                            "aria-hidden": "true"
                        }
                    }, [e._v("#")]), e._v(" Using a Custom Theme")]), e._v(" "), a("p", [e._v("When you want to create a custom VuePress theme, you add a "), a("code", [e._v("theme")]), e._v(" directory under "), a("code", [e._v(".vuepress")]), e._v(" ("), a("code", [e._v(".vuepress/theme")]), e._v(") and start by adding a "), a("code", [e._v("Layout.vue")]), e._v(" file. From there it's the same as developing a normal Vue application. It is entirely up to you how to organize your theme.")]), e._v(" "), a("p", [e._v("The content of your "), a("code", [e._v("markdown")]), e._v(" files to be rendered will be available as a special global component called "), a("code", [e._v("<Content/>")]), e._v(". You will need to add this somewhere in your layout in order to render and display the content of the page/markdown file.")]), e._v(" "), a("p", [e._v("The simplest theme can be a single "), a("code", [e._v("Layout.vue")]), e._v(" component with the following content:")]), e._v(" "), a("div", {
                        staticClass: "language-html extra-class"
                    }, [a("pre", {
                        pre: !0,
                        attrs: {
                            class: "language-html"
                        }
                    }, [a("code", [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v("<")]), e._v("template")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v(">")])]), e._v("\n  "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v("<")]), e._v("div")]), e._v(" "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token attr-name"
                        }
                    }, [e._v("class")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token attr-value"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v("=")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v('"')]), e._v("theme-container"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v('"')])]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v(">")])]), e._v("\n    "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v("<")]), e._v("Content")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v("/>")])]), e._v("\n  "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v("</")]), e._v("div")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v(">")])]), e._v("\n"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token tag"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v("</")]), e._v("template")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [e._v(">")])]), e._v("\n")])])]), a("p", [e._v("If you want to customise the default VuePress theme, you can copy the default theme source code into "), a("code", [e._v(".vuepress/theme")]), e._v(" using the "), a("code", [e._v("vuepress eject [targetDir]")]), e._v(" command. Note, however, that once you eject, you are on your own and won't be receiving future updates or bug fixes to the default theme even if you upgrade your VuePress version.")]), e._v(" "), a("p", [e._v("For more information about how to get started with custom VuePress themes, please refer to the "), a("a", {
                        attrs: {
                            href: "https://v1.vuepress.vuejs.org/theme/writing-a-theme.html",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Writing a theme"), a("OutboundLink")], 1), e._v(" guide. If you would like to see how others have created custom themes, see the "), a("a", {
                        attrs: {
                            href: "https://vuepress.gallery",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("VuePress Gallery"), a("OutboundLink")], 1), e._v(".")]), e._v(" "), a("p", [e._v("This template was created by "), a("a", {
                        attrs: {
                            href: "https://twitter.com/vicbergquist",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("Victoria Bergquist"), a("OutboundLink")], 1), e._v(". If you would like to contribute to this template, please go to the "), a("a", {
                        attrs: {
                            href: "https://github.com/vicbergquist/codesandbox-vuepress",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [e._v("codesandbox-vuepress repository"), a("OutboundLink")], 1), e._v(" on GitHub.")])])
                }, [], !1, null, null, null);
            t.default = r.exports
        }
    }
]);