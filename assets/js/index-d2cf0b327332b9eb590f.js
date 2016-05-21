webpackJsonp([1], [function(e, t, i) {
    e.exports = i(50)
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = i(28),
    s = n(o),
    l = i(20),
    u = n(l),
    c = function() {
        function e(t) {
            r(this, e),
            this.view = t,
            this.view.update((0, o.getInitYOffset)()),
            s["default"].on("update", this.onScroll.bind(this)),
            u["default"].on("update", this.onScroll.bind(this))
        }
        return a(e, [{
            key: "onScroll",
            value: function(e) {
                this.view.update(e)
            }
        }]),
        e
    } ();
    t["default"] = c,
    e.exports = t["default"]
},
,
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = i(15),
    s = i(28),
    l = i(49),
    u = n(l),
    c = function() {
        function e(t, i, n) {
            if (r(this, e), !t) throw new TypeError("Element isn't set for the parallax");
            if (!n) throw new TypeError("Set the delegate for the parallax");
            if (! (n instanceof u["default"])) throw new TypeError("Set the delegate as a child of sf-parallax/delegate class");
            if (!i) throw new TypeError("Set the tracking section for the parallax");
            this.el = t,
            this.trackingSection = i,
            this.delegate = n,
            n.view = this,
            this.setupInitialPosition()
        }
        return a(e, [{
            key: "setupInitialPosition",
            value: function() {
                this.delegate.init(),
                this.update((0, s.getInitYOffset)())
            }
        },
        {
            key: "update",
            value: function(e) {
                this.move(e)
            }
        },
        {
            key: "move",
            value: function() {
                var e = (0, o.boundingBox)(this.trackingSection),
                t = e.top / e.height,
                i = Math.abs(t);
                this.delegate.isMovingIn(t) ? this.moveIn(1 - i) : this.moveOut(i)
            }
        },
        {
            key: "moveIn",
            value: function(e) {
                this.delegate.moveIn(e)
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                this.delegate.moveOut(e)
            }
        }]),
        e
    } ();
    t["default"] = c,
    e.exports = t["default"]
},
function(e, t) {
    "use strict";
    function i(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = function() {
        function e() {
            i(this, e),
            this.view = null
        }
        return n(e, [{
            key: "init",
            value: function() {}
        },
        {
            key: "isMovingIn",
            value: function(e) {
                return e > 0
            }
        },
        {
            key: "moveIn",
            value: function() {}
        },
        {
            key: "moveOut",
            value: function() {}
        }]),
        e
    } ();
    t["default"] = r,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var r = i(51),
    a = i(27),
    o = n(a),
    s = void 0;
    s = o["default"].mobile ? new r.MobileIndexPage: new r.IndexPage,
    s.run()
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = i(3),
    s = i(10),
    l = i(46),
    u = n(l),
    c = i(28),
    f = n(c),
    h = i(27),
    d = n(h);
    i(8);
    i(52);
    var p = i(13),
    m = n(p),
    v = i(34),
    y = n(v),
    _ = i(53),
    g = n(_),
    O = i(37),
    b = n(O),
    S = i(55),
    w = n(S),
    T = i(35),
    P = i(43),
    k = i(44),
    E = n(k),
    A = i(57),
    x = n(A),
    j = i(58),
    M = n(j),
    F = i(59),
    I = n(F),
    C = i(66),
    q = i(67),
    N = n(q),
    U = i(69),
    L = n(U),
    B = i(70),
    R = n(B),
    V = i(71),
    D = n(V),
    G = i(85),
    H = n(G),
    W = i(86),
    Q = n(W),
    Y = i(87),
    z = n(Y),
    X = i(88),
    J = n(X),
    $ = i(89),
    K = n($),
    Z = i(90),
    ee = n(Z),
    te = i(91),
    ie = n(te),
    ne = function() {
        function e() {
            r(this, e),
            this.animationsLoop = new D["default"],
            this.videos = new R["default"],
            this.workSectionView = new ie["default"],
            (0, E["default"])(),
            P.htmlClassAdder.flush(),
            this.pageMenu = null
        }
        return a(e, [{
            key: "onWindowReady",
            value: function() {
                var e = this,
                t = new T.ScrollBarFixer(new C.SmallScreenScrollBarFixerStrategy, new C.WideScreenScrollBarFixerStrategy),
                i = new F.HeroAppearance;
                this.pageMenu = (0, m["default"])(),
                this.pageMenu.on("update",
                function(i) {
                    "opening" === i.state ? (f["default"].lock(), t.fix(), e.animationsLoop.pause(), e.videos.stopAll()) : "close" === i.state && (f["default"].unlock(), t.unfix(), e.videos.start(), e.animationsLoop.resume())
                }),
                this.videos.on("update",
                function(t) {
                    var i = (0, s.querySelector)(".home-header video");
                    i.isEqualNode(t.video) && (t.play ? e.animationsLoop.resume() : e.animationsLoop.pause())
                }),
                i.on("update",
                function(i) {
                    var n = i.step,
                    r = function() {
                        setTimeout(function() {
                            e.loadHeavyResourses(),
                            e.workSectionView.show(),
                            e.animationsLoop.run()
                        },
                        1e3),
                        setTimeout(function() {
                            f["default"].unlock(),
                            t.unfix()
                        },
                        1500)
                    };
                    "startAnimations" === n ? (f["default"].lock(), t.fix()) : "videoTimeout" === n || "videoLoaded" === n ? e.animationsLoop.fireWireframeAnimation().then(r) : "skipAnimations" === n && (r(), e.animationsLoop.run())
                }),
                i.run().then(function() { (0, o.domReady)().then(e.onDomReady.bind(e))
                })
            }
        },
        {
            key: "loadHeavyResourses",
            value: function() {
                new b["default"],
                this.videos.load()
            }
        },
        {
            key: "onDomReady",
            value: function() {
                var e = this,
                t = new I["default"];
                t.on("update",
                function(i) {
                    i.on ? (t.root.classList.add("home-header_faded"), e.animationsLoop.pause()) : (t.root.classList.remove("home-header_faded"), e.animationsLoop.resume())
                }),
                new u["default"](t),
                new u["default"](new M["default"]),
                new u["default"](new H["default"]),
                new u["default"](new J["default"]),
                new u["default"](new ee["default"]),
                new u["default"](new x["default"]),
                new u["default"](new K["default"]),
                new w["default"](this.getScrollVisibleSections(), "j-visible");
                var i = new y["default"];
                this.pageMenu.on("update",
                function(e) {
                    "opening" === e.state || "open" === e.state ? i.underPageMenu() : i.underPage()
                }),
                new N["default"](".home-disciplines", {
                    triggerElementName: "list-itm",
                    contentElementName: "text",
                    hoverDelay: 0
                }),
                (0, L["default"])(),
                (0, Q["default"])(),
                new z["default"],
                new g["default"]
            }
        },
        {
            key: "getScrollVisibleSections",
            value: function() {
                return [{
                    selector: ".j-trigger-show",
                    percentage: 3
                },
                {
                    selector: ".j-fadeInOut-trigger-show",
                    percentage: 3,
                    shouldFadeOut: !1
                },
                {
                    selector: ".j-fadeout-trigger",
                    percentage: 3
                },
                {
                    selector: ".j-fadeInOut-trigger",
                    percentage: 3,
                    shouldFadeOut: !1
                },
                {
                    selector: ".j-adp-devices-trigger",
                    percentage: 10
                },
                {
                    selector: ".j-spinrilla-covers-trigger",
                    percentage: 10
                },
                {
                    selector: ".j-fadein-trigger",
                    percentage: 0,
                    shouldFadeOut: !1
                },
                {
                    selector: "[data-section-name]",
                    percentage: 50,
                    actions: ["sectionVisible"],
                    trigger: "disposable"
                }]
            }
        },
        {
            key: "run",
            value: function() { (0, o.windowReady)().then(this.onWindowReady.bind(this))
            }
        }]),
        e
    } ();
    t.IndexPage = ne;
    var re = function() {
        function e() {
            r(this, e),
            (0, E["default"])(),
            P.htmlClassAdder.flush(),
            this.pageMenu = null
        }
        return a(e, [{
            key: "onDomReady",
            value: function() {
                d["default"].ipad && new b["default"],
                this.pageMenu = (0, m["default"])();
                var e = new y["default"];
                this.pageMenu.on("update",
                function(t) {
                    "opening" === t.state ? f["default"].lock() : "closing" === t.state && f["default"].unlock(),
                    "opening" === t.state || "open" === t.state ? e.underPageMenu() : e.underPage()
                });
                var t = (0, s.querySelectorAll)(".j-hero-hide-menu, .j-hero-title-hidden, .j-hero-subtitle-hidden, .j-hero-bg-hidden, .j-spinrilla-covers-trigger, .j-trigger-show, .j-fadeout-trigger, .j-fadeout-trigger__fadeIn, .j-fadein-trigger");
                for (var i in t) t[i].classList.remove("j-hero-hide-menu", "j-hero-title-hidden", "j-hero-subtitle-hidden", "j-hero-bg-hidden", "j-spinrilla-covers-trigger", "j-trigger-show", "j-fadeout-trigger", "j-fadeout-trigger__fadeIn", "j-fadein-trigger");
                new N["default"](".home-disciplines", {
                    triggerElementName: "list-itm",
                    contentElementName: "text",
                    hoverDelay: 0
                })
            }
        },
        {
            key: "run",
            value: function() { (0, o.domReady)().then(this.onDomReady.bind(this))
            }
        }]),
        e
    } ();
    t.MobileIndexPage = re
},
function(e, t) {
    /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
    "use strict";
    "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? !
    function() {
        var e = document.createElement("_");
        if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
            var t = function(e) {
                var t = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function(e) {
                    var i, n = arguments.length;
                    for (i = 0; n > i; i++) e = arguments[i],
                    t.call(this, e)
                }
            };
            t("add"),
            t("remove")
        }
        if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
            var i = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t: i.call(this, e)
            }
        }
        e = null
    } () : !
    function(e) {
        if ("Element" in e) {
            var t = "classList",
            i = "prototype",
            n = e.Element[i],
            r = Object,
            a = String[i].trim ||
            function() {
                return this.replace(/^\s+|\s+$/g, "")
            },
            o = Array[i].indexOf ||
            function(e) {
                for (var t = 0,
                i = this.length; i > t; t++) if (t in this && this[t] === e) return t;
                return - 1
            },
            s = function(e, t) {
                this.name = e,
                this.code = DOMException[e],
                this.message = t
            },
            l = function(e, t) {
                if ("" === t) throw new s("SYNTAX_ERR", "An invalid or illegal string was specified");
                if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character");
                return o.call(e, t)
            },
            u = function(e) {
                for (var t = a.call(e.getAttribute("class") || ""), i = t ? t.split(/\s+/) : [], n = 0, r = i.length; r > n; n++) this.push(i[n]);
                this._updateClassName = function() {
                    e.setAttribute("class", this.toString())
                }
            },
            c = u[i] = [],
            f = function() {
                return new u(this)
            };
            if (s[i] = Error[i], c.item = function(e) {
                return this[e] || null
            },
            c.contains = function(e) {
                return e += "",
                -1 !== l(this, e)
            },
            c.add = function() {
                var e, t = arguments,
                i = 0,
                n = t.length,
                r = !1;
                do e = t[i] + "",
                -1 === l(this, e) && (this.push(e), r = !0);
                while (++i < n);
                r && this._updateClassName()
            },
            c.remove = function() {
                var e, t, i = arguments,
                n = 0,
                r = i.length,
                a = !1;
                do
                for (e = i[n] + "", t = l(this, e); - 1 !== t;) this.splice(t, 1),
                a = !0,
                t = l(this, e);
                while (++n < r);
                a && this._updateClassName()
            },
            c.toggle = function(e, t) {
                e += "";
                var i = this.contains(e),
                n = i ? t !== !0 && "remove": t !== !1 && "add";
                return n && this[n](e),
                t === !0 || t === !1 ? t: !i
            },
            c.toString = function() {
                return this.join(" ")
            },
            r.defineProperty) {
                var h = {
                    get: f,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    r.defineProperty(n, t, h)
                } catch(d) { - 2146823252 === d.number && (h.enumerable = !1, r.defineProperty(n, t, h))
                }
            } else r[i].__defineGetter__ && n.__defineGetter__(t, f)
        }
    } (self))
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = i(54),
    s = n(o),
    l = i(10),
    u = function() {
        function e() {
            r(this, e),
            this.init(),
            s["default"].on("update", this.onUpdate.bind(this))
        }
        return a(e, [{
            key: "init",
            value: function() {
                var e = (0, l.querySelectorAll)("video");
                this.videoStates = [];
                for (var t in e) this.videoStates[t] = {
                    video: e[t],
                    state: !1
                }
            }
        },
        {
            key: "onUpdate",
            value: function(e) {
                e.isHidden ? this.disactivate() : this.activate()
            }
        },
        {
            key: "disactivate",
            value: function() {
                for (var e in this.videoStates) {
                    var t = this.videoStates[e];
                    t.video.paused || (t.state = !0, t.video.pause())
                }
            }
        },
        {
            key: "activate",
            value: function() {
                for (var e in this.videoStates) {
                    var t = this.videoStates[e];
                    t.state && (t.video.play(), t.state = !1)
                }
            }
        }]),
        e
    } ();
    t["default"] = u,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(10),
    u = i(8),
    c = i(18),
    f = n(c),
    h = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
            this.hiddenProperty = null;
            var e = void 0;
            "undefined" != typeof l.DOCUMENT.hidden ? (this.hiddenProperty = "hidden", e = "visibilitychange") : "undefined" != typeof l.DOCUMENT.mozHidden ? (this.hiddenProperty = "mozHidden", e = "mozvisibilitychange") : "undefined" != typeof l.DOCUMENT.msHidden ? (this.hiddenProperty = "msHidden", e = "msvisibilitychange") : "undefined" != typeof l.DOCUMENT.webkitHidden && (this.hiddenProperty = "webkitHidden", e = "webkitvisibilitychange"),
            null !== this.hiddenProperty && ((0, u.addEventListener)(l.DOCUMENT, e, this.onUpdate.bind(this)), this.onUpdate())
        }
        return a(t, e),
        o(t, [{
            key: "onUpdate",
            value: function() {
                this.emit("update", {
                    isHidden: l.DOCUMENT[this.hiddenProperty]
                })
            }
        }]),
        t
    } (f["default"]);
    t.CurrentTab = h,
    t["default"] = new h
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(10),
    u = i(29),
    c = i(33),
    f = n(c),
    h = i(56),
    d = n(h),
    p = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this)
        }
        return a(t, e),
        o(t, [{
            key: "act",
            value: function(e) {
                var t = e.el.getAttribute("data-section-name");
                t && d["default"].sectionVisible(t)
            }
        }]),
        t
    } (f["default"]),
    m = function() {
        function e(t, i, n) {
            var a = this;
            r(this, e),
            this.triggers = {
                "default": u.Trigger,
                disposable: u.DisposableTrigger
            },
            t.forEach(function(e) { [].forEach.call((0, l.querySelectorAll)(e.selector),
                function(t) {
                    a.init(t, i, n, e.percentage, e.shouldFadeOut, e.actions, e.trigger)
                })
            })
        }
        return o(e, [{
            key: "init",
            value: function(e, t, i, n, r) {
                var a = this,
                o = arguments.length <= 5 || void 0 === arguments[5] ? ["class", "touchSrc"] : arguments[5],
                s = arguments.length <= 6 || void 0 === arguments[6] ? "default": arguments[6];
                this.elCondition = new u.Condition(n, r);
                var l = this.triggers[s] || this.triggers["default"],
                c = [];
                o.indexOf("class") > -1 && c.push(new u.Actions.ClassAction(t)),
                o.indexOf("touchSrc") > -1 && c.push(new u.Actions.TouchSrcAction),
                o.indexOf("sectionVisible") > -1 && c.push(new p),
                c.forEach(function(t) {
                    new l(e, a.elCondition, t, i)
                })
            }
        }]),
        e
    } ();
    t["default"] = m,
    e.exports = t["default"]
},
function(e, t) {
    "use strict";
    function i(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = function() {
        function e(t) {
            i(this, e),
            this.ANIMATION_CATEGORY_NAME = "Animation",
            this.ANIMATION_STOP_ACTION_NAME = "stop",
            this.SECTIONS_CATEGORY_NAME = "Section",
            this.SECTIONS_VISIBLE_ACTION_NAME = "visible",
            this.ANIMATION_FPS_ACTION_NAME = "FPS",
            this.ANIMATION_GLITCH_FPS_ACTION_NAME = "Glitch FPS"
        }
        return n(e, [{
            key: "event",
            value: function(e, t, i, n) {
                ga("send", "event", e, t, i, n)
            }
        },
        {
            key: "animationStopped",
            value: function(e, t) {
                t = t || 0;
                var i = Math.round(t / 1e3);
                this.event(this.ANIMATION_CATEGORY_NAME, this.ANIMATION_STOP_ACTION_NAME, e, i)
            }
        },
        {
            key: "sectionVisible",
            value: function(e) {
                this.event(this.SECTIONS_CATEGORY_NAME, this.SECTIONS_VISIBLE_ACTION_NAME, e)
            }
        },
        {
            key: "fps",
            value: function(e) {
                e = Math.round(e),
                this.event(this.ANIMATION_CATEGORY_NAME, this.ANIMATION_FPS_ACTION_NAME, this.ANIMATION_GLITCH_FPS_ACTION_NAME, e)
            }
        }]),
        e
    } ();
    t["default"] = new r,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(22),
    u = n(l),
    c = i(48),
    f = n(c),
    h = i(49),
    d = n(h),
    p = i(14),
    m = i(10),
    v = i(17),
    y = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                var e = this.view.el;
                this.bluePart = (0, m.querySelector)(".home-works__bg_blue", e),
                this.redPart = (0, m.querySelector)(".home-works__bg_red", e),
                this.yellowPart = (0, m.querySelector)(".home-works__bg_yellow", e),
                this._cachedBluePartOpacity = -1,
                this._cachedRedPartOpacity = -1,
                this._cachedYellowPartOpacity = -1,
                this.moveToGPU(),
                this._onTheTop = !0
            }
        },
        {
            key: "moveIn",
            value: function() {
                this.moveToGPU(),
                this._onTheTop || (this.setBluePartStyle(1), this.setRedPartStyle(0), this.setYellowPartStyle(0), this._onTheTop = !0)
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                if (this._onTheTop = !1, e > 1.1) this.deleteFromGPU();
                else if (1.1 >= e) if (this.moveToGPU(), .1 > e) this.setBluePartStyle(1),
                this.setRedPartStyle(0),
                this.setYellowPartStyle(0);
                else if (e >= .1 && .33 >= e) {
                    var t = (0, v.clamp)((0, v.map)(e, .1, .33, 0, 1), 0, 1);
                    this.setBluePartStyle(1 - t),
                    this.setRedPartStyle(t),
                    this.setYellowPartStyle(0)
                } else if (e > .33 && .4 > e) this.setBluePartStyle(0),
                this.setRedPartStyle(1),
                this.setYellowPartStyle(0);
                else if (e >= .4 && .63 >= e) {
                    var t = (0, v.clamp)((0, v.map)(e, .4, .63, 0, 1), 0, 1);
                    this.setBluePartStyle(0),
                    this.setRedPartStyle(1 - t),
                    this.setYellowPartStyle(t)
                } else if (e > .63 && .8 > e) this.setBluePartStyle(0),
                this.setRedPartStyle(0),
                this.setYellowPartStyle(1);
                else if (e > .8) {
                    var t = (0, v.clamp)((0, v.map)(e, .8, 1, 0, 1), 0, 1);
                    this.setBluePartStyle(0),
                    this.setRedPartStyle(0),
                    this.setYellowPartStyle(1 - t)
                }
            }
        },
        {
            key: "setBluePartStyle",
            value: function(e) {
                this._cachedBluePartOpacity != e && (this.bluePart.style.opacity = e)
            }
        },
        {
            key: "setRedPartStyle",
            value: function(e) {
                this._cachedRedPartOpacity != e && (this.redPart.style.opacity = e)
            }
        },
        {
            key: "setYellowPartStyle",
            value: function(e) {
                this._cachedYellowPartOpacity != e && (this.yellowPart.style.opacity = e)
            }
        },
        {
            key: "moveToGPU",
            value: function() {
                this._hasMovedToGPU || (this.bluePart.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.redPart.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.yellowPart.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this._hasMovedToGPU = !0)
            }
        },
        {
            key: "deleteFromGPU",
            value: function() {
                this._hasMovedToGPU && (this.bluePart.style[(0, u["default"])("transform")] = "none", this.redPart.style[(0, u["default"])("transform")] = "none", this.yellowPart.style[(0, u["default"])("transform")] = "none", this._hasMovedToGPU = !1)
            }
        }]),
        t
    } (d["default"]),
    _ = function() {
        function e(t) {
            r(this, e),
            this.el = t
        }
        return o(e, [{
            key: "update",
            value: function() {
                var e = this; [].forEach.call(this.el,
                function(t) {
                    e.init(t)
                })
            }
        },
        {
            key: "condition",
            value: function(e) {
                var t = window.innerHeight - window.innerHeight / (100 / 89);
                return e.getBoundingClientRect().top <= t
            }
        },
        {
            key: "init",
            value: function(e) {
                if ((0, p.isInViewPort)(e)) if (this.condition(e)) {
                    e.classList.contains("j-visible") && e.classList.remove("j-visible");
                    var t = (0, v.clamp)(e.getBoundingClientRect().top / 100, 0, 1);
                    e.style.opacity = t
                } else e.style.opacity = 1;
                else e.classList.remove("j-visible"),
                e.style.opacity = 0
            }
        }]),
        e
    } (),
    g = function() {
        function e() {
            r(this, e);
            var t = (0, m.querySelector)(".home-works"),
            i = (0, m.querySelectorAll)(".j-fadein-trigger");
            this.colorSectionView = new f["default"](t, t, new y),
            this.opacityChanger = new _(i)
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                this.opacityChanger.update(),
                this.colorSectionView.update(e)
            }
        }]),
        e
    } ();
    t["default"] = g,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(22),
    u = n(l),
    c = i(10),
    f = i(17),
    h = i(48),
    d = n(h),
    p = i(49),
    m = n(p),
    v = (function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.START_POSITION = 100,
                this.SPEEDUP_RATIO_ON_MOVEOUT = 1.5
            }
        },
        {
            key: "moveIn",
            value: function(e) {
                var t = 1 - (0, f.clamp)(e, 0, 1),
                i = this.START_POSITION * t;
                this.setStyle(i)
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                var t = (0, f.clamp)(e, 0, 1),
                i = -1 * this.SPEEDUP_RATIO_ON_MOVEOUT * this.START_POSITION * t;
                this.setStyle(i)
            }
        },
        {
            key: "setStyle",
            value: function(e) {
                this.view.el.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)"
            }
        }]),
        t
    } (m["default"]),
    function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.START_POSITION = 200,
                this.SPEEDUP_RATIO_ON_MOVEOUT = .8
            }
        },
        {
            key: "moveIn",
            value: function(e) {
                var t = 1 - (0, f.clamp)(e, 0, 1),
                i = this.START_POSITION - this.START_POSITION * t;
                this.setStyle(i, 1)
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                var t = (0, f.clamp)(e, 0, 1),
                i = this.START_POSITION + this.SPEEDUP_RATIO_ON_MOVEOUT * this.START_POSITION * t;
                this.setStyle(i, 1 - 1.4 * t)
            }
        },
        {
            key: "setStyle",
            value: function(e, t) {
                this.view.el.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)"
            }
        }]),
        t
    } (m["default"])),
    y = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.START_POSITION = 1,
                this.SPEEDUP_RATIO_ON_MOVEOUT = 100
            }
        },
        {
            key: "moveIn",
            value: function(e) {
                var t = 1 - (0, f.clamp)(e, 0, 1),
                i = this.SPEEDUP_RATIO_ON_MOVEOUT * t;
                this.setStyle(i)
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                var t = (0, f.clamp)(e, 0, 1),
                i = this.SPEEDUP_RATIO_ON_MOVEOUT * t;
                this.setStyle( - 1 * i)
            }
        },
        {
            key: "setStyle",
            value: function(e) {
                this.view.el.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)"
            }
        }]),
        t
    } (m["default"]),
    _ = function() {
        function e() {
            r(this, e);
            var t = (0, c.querySelector)(".home-works__list"),
            i = (0, c.querySelector)(".home-works__device_1 .home-works__iphone-shade", t),
            n = (0, c.querySelector)(".home-works__device_3 .home-works__iphone-shade", t),
            a = (0, c.querySelector)(".home-works__device_android .home-works__android-shade", t),
            o = (0, c.querySelector)(".home-works__itm_1 .home-works__text", t),
            s = (0, c.querySelector)(".home-works__itm_3 .home-works__text", t),
            l = (0, c.querySelector)(".home-works__itm_2 .home-works__text", t),
            u = (0, c.querySelector)(".home-works__itm_1", t),
            f = (0, c.querySelector)(".home-works__itm_2", t),
            h = (0, c.querySelector)(".home-works__itm_3", t);
            this.firstIphoneShadowView = new d["default"](i, u, new y),
            this.secondIphoneShadowView = new d["default"](n, h, new y),
            this.androidShadowView = new d["default"](a, f, new y),
            this.firstIphoneTextView = new d["default"](o, u, new v),
            this.androidTextView = new d["default"](l, f, new v),
            this.secondIphoneTextView = new d["default"](s, h, new v)
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                this.firstIphoneShadowView.update(e),
                this.secondIphoneShadowView.update(e),
                this.androidShadowView.update(e),
                this.firstIphoneTextView.update(e),
                this.secondIphoneTextView.update(e),
                this.androidTextView.update(e)
            }
        }]),
        e
    } ();
    t["default"] = _,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(22),
    u = n(l),
    c = i(10),
    f = i(15),
    h = i(17),
    d = i(48),
    p = n(d),
    m = i(49),
    v = n(m),
    y = i(4),
    _ = n(y),
    g = i(60),
    O = n(g),
    b = i(14),
    S = i(61),
    w = n(S),
    T = i(62),
    P = n(T),
    k = i(18),
    E = n(k),
    A = i(20),
    x = n(A),
    j = i(8),
    M = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
            this.deferred = _["default"].defer(),
            this.homeHeader = (0, c.querySelector)(".home-header"),
            this.timer = new O["default"](1e3),
            this.timer.on("update", this.onTimerTick.bind(this)),
            this.videoLoaded = !1,
            this.videoEl = (0, c.querySelector)(".section-fixed__bg-video", this.homeHeader),
            this.onVideoLoaded = null,
            this.subTitle = (0, c.querySelector)(".home-header__subtitle", this.homeHeader),
            this.subTitleSecond = (0, c.querySelector)(".second", this.subTitle),
            this.bgInner = (0, c.querySelector)(".home-header .section-fixed__bg_header-inner")
        }
        return a(t, e),
        o(t, [{
            key: "run",
            value: function() {
                var e = this; (0, b.percentInViewPort)(this.homeHeader) > .5 ? this.animate() : this.skip();
                var t = (0, P["default"])(this.videoEl, JSON.parse((0, w["default"])(this.videoEl, "options").options));
                return t.load().then(this.onVideoLoaded.bind(this)),
                (0, j.once)(this.subTitleSecond, (0, u["default"])("transitionend"),
                function(t) {
                    e.subTitle.classList.remove("j-hero-subtitle-animate"),
                    e.subTitle = null,
                    e.subTitleSecond = null
                }),
                this.deferred.promise
            }
        },
        {
            key: "animate",
            value: function() {
                this.timer.start(),
                this.emit("update", {
                    step: "startAnimations"
                }),
                this.onVideoLoaded = this.onVideoLoadedWithAnimation
            }
        },
        {
            key: "skip",
            value: function() {
                this.showMenu(),
                this.showBackground(),
                this.deferred.resolve(),
                this.emit("update", {
                    step: "skipAnimations"
                }),
                this.onVideoLoaded = this.onVideoLoadedWithSkip
            }
        },
        {
            key: "clean",
            value: function() {
                this.deferred = null,
                this.timer = null,
                this.videoEl = null,
                this.homeHeader = null
            }
        },
        {
            key: "destroy",
            value: function() {
                this.timer.stop(),
                this.deferred.resolve(),
                this.emit("update", {
                    step: "destroy"
                }),
                this.clean()
            }
        },
        {
            key: "onTimerTick",
            value: function(e) {
                e.tickCounter >= 5 && this.destroy(),
                1 == e.tickCounter && this.showMenu(),
                3 == e.tickCounter && (this.videoLoaded || (this.showAfterTheVideoLoaded(), this.emit("update", {
                    step: "videoTimeout"
                })))
            }
        },
        {
            key: "showAfterTheVideoLoaded",
            value: function() {
                this.showBackground()
            }
        },
        {
            key: "onVideoLoadedWithAnimation",
            value: function() {
                this.videoLoaded = !0,
                this.videoEl.play(),
                this.showAfterTheVideoLoaded(),
                this.bgInner.classList.remove("j-hero-placeholder-shown"),
                this.emit("update", {
                    step: "videoLoaded"
                })
            }
        },
        {
            key: "onVideoLoadedWithSkip",
            value: function() {
                this.videoLoaded = !0,
                this.clean()
            }
        },
        {
            key: "showMenu",
            value: function() {
                var e = (0, c.querySelector)(".j-menu-state");
                e.classList.remove("j-hero-hide-menu"),
                this.emit("update", {
                    step: "showMenu"
                })
            }
        },
        {
            key: "showBackground",
            value: function() {
                var e = (0, c.querySelector)(".home-header__title");
                e.classList.remove("j-hero-title-hidden");
                var t = (0, c.querySelector)(".home-header__subtitle");
                t.classList.remove("j-hero-subtitle-hidden"),
                this.bgInner.classList.remove("j-hero-bg-hidden")
            }
        }]),
        t
    } (E["default"]);
    t.HeroAppearance = M;
    var F = function(e) {
        function t(e) {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
            this.evEmitter = e
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.mainTitle = (0, c.querySelector)(".home-header__title-inner", this.view.el),
                this.subTitleFirst = (0, c.querySelector)(".home-header__subtitle .first", this.view.el),
                this.subTitleSecond = (0, c.querySelector)(".home-header__subtitle .second", this.view.el),
                this.background = (0, c.querySelector)(".section-fixed__bg_header", this.view.el),
                this.fadeBlock = (0, c.querySelector)(".home-header__fade", this.view.el),
                x["default"].on("update", this.onResize.bind(this)),
                this.onResize(),
                this.moveToGPU(),
                this._isStartedFading = !1
            }
        },
        {
            key: "onResize",
            value: function() {
                this.trackingSectionHeight = (0, f.height)(this.view.trackingSection),
                this.quarterTrackingSectionHeight = this.trackingSectionHeight / 4
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                if (.58 >= e) {
                    var t = 1,
                    i = (0, h.clamp)((0, h.map)(e, 0, .58, 0, 1), 0, 1);
                    e >= .44 && (t = 1 - (0, h.clamp)((0, h.map)(e, .44, .58, 0, 1), 0, 1)),
                    this.setMainTitleStyle( - 1 * this.quarterTrackingSectionHeight * i, t)
                } else this.setMainTitleStyle(1e3, 0);
                if (.2 > e) this.setSubTitleFirstStyle(1);
                else if (e >= .2 && .3 >= e) {
                    var i = (0, h.clamp)((0, h.map)(e, .2, .3, 0, 1), 0, 1);
                    this.setSubTitleFirstStyle(1 - i)
                } else this.setSubTitleFirstStyle(0);
                if (.3 > e) this.setSubTitleSecondStyle(1);
                else if (e >= .3 && .4 >= e) {
                    var i = (0, h.clamp)((0, h.map)(e, .3, .4, 0, 1), 0, 1);
                    this.setSubTitleSecondStyle(1 - i)
                } else this.setSubTitleSecondStyle(0);
                if (this.setBackgroundStyle( - 1 * (this.trackingSectionHeight - 300) * (0, h.clamp)(e, 0, 1)), e > .54 ? this._isStartedFading || (this._isStartedFading = !0, this.evEmitter.emit("update", {
                    on: this._isStartedFading
                })) : .54 > e && this._isStartedFading && (this._isStartedFading = !1, this.evEmitter.emit("update", {
                    on: this._isStartedFading
                })), .5 > e) this.setFadeBlockStyle(0),
                this.removeAbsoluteBGPositioning();
                else if (e >= .5 && .9 >= e) {
                    var i = (0, h.clamp)((0, h.map)(e, .5, .9, 0, 1), 0, 1);
                    this.setFadeBlockStyle(i),
                    this.removeAbsoluteBGPositioning()
                } else e > .9 && (this.setFadeBlockStyle(1), this.setAbsoluteBGPositioning());
                e > 1.4 ? this.deleteFromGPU() : this.moveToGPU()
            }
        },
        {
            key: "setMainTitleStyle",
            value: function(e, t) {
                this.mainTitle.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)",
                this.mainTitle.style.opacity = t
            }
        },
        {
            key: "setSubTitleFirstStyle",
            value: function(e) {
                this._previousSubTitleFirstOpacity && this._previousSubTitleFirstOpacity === e || (this.subTitleFirst.style.opacity = e, this._previousSubTitleFirstOpacity = e)
            }
        },
        {
            key: "setSubTitleSecondStyle",
            value: function(e) {
                this._previousSubTitleSecondOpacity && this._previousSubTitleSecondOpacity === e || (this.subTitleSecond.style.opacity = e, this._previousSubTitleSecondOpacity = e)
            }
        },
        {
            key: "setBackgroundStyle",
            value: function(e) {
                this._previousBgY && this._previousBgY === e || (this.background.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)", this._previousBgY = e)
            }
        },
        {
            key: "setFadeBlockStyle",
            value: function(e) {
                this.fadeBlock.style.opacity = e
            }
        },
        {
            key: "setAbsoluteBGPositioning",
            value: function() {
                this.background.style.position = "absolute"
            }
        },
        {
            key: "removeAbsoluteBGPositioning",
            value: function() {
                this.background.style.position = "fixed"
            }
        },
        {
            key: "moveToGPU",
            value: function() {
                this._hasMovedToGPU || (this.mainTitle.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.background.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.fadeBlock.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this._hasMovedToGPU = !0)
            }
        },
        {
            key: "deleteFromGPU",
            value: function() {
                this._hasMovedToGPU && (this.mainTitle.style[(0, u["default"])("transform")] = "none", this.background.style[(0, u["default"])("transform")] = "none", this.fadeBlock.style[(0, u["default"])("transform")] = "none", this._hasMovedToGPU = !1)
            }
        }]),
        t
    } (v["default"]),
    I = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
            this.root = (0, c.querySelector)(".home-header"),
            this.mainTitleView = new p["default"](this.root, this.root, new F(this))
        }
        return a(t, e),
        o(t, [{
            key: "update",
            value: function(e) {
                this.mainTitleView.update(e)
            }
        }]),
        t
    } (E["default"]);
    t["default"] = I
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(18),
    u = n(l),
    c = function(e) {
        function t(e) {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
            this.tickTime = e,
            this.isEnabled = !1,
            this.timer = null,
            this.now = Date.now(),
            this.tickCounter = 0
        }
        return a(t, e),
        o(t, [{
            key: "start",
            value: function() {
                this.isEnabled = !0,
                this._update()
            }
        },
        {
            key: "_update",
            value: function() {
                this.isEnabled && (this.timer = setTimeout(function() {
                    this.emit("update", {
                        since: Date.now() - this.now,
                        tickCounter: ++this.tickCounter
                    }),
                    this._update()
                }.bind(this), this.tickTime))
            }
        },
        {
            key: "stop",
            value: function() {
                this.isEnabled = !1,
                clearTimeout(this.timer)
            }
        }]),
        t
    } (u["default"]);
    t["default"] = c,
    e.exports = t["default"]
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t["default"] = function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? null: arguments[1];
        if (null === e) throw new TypeError("Element must be set");
        if (null !== t && "string" != typeof t && t.constructor !== Array) throw new TypeError("Attributes must be either a string or an array");
        var i = {};
        if (null === t) i = e.dataset;
        else {
            "string" == typeof t && (t = [t]);
            for (var n in t) i[t[n]] = e.dataset[t[n]]
        }
        return i
    },
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        return (0, f.canSplitFiles)() ? new v(e, t) : new m(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } ();
    t["default"] = a;
    var s = i(10),
    l = i(8),
    u = i(4),
    c = n(u),
    f = i(63),
    h = i(64),
    d = n(h),
    p = s.WINDOW.URL || s.WINDOW.webkitURL,
    m = function() {
        function e(t, i) {
            r(this, e),
            this.el = t,
            this.urls = (0, f.buildUrls)(i)
        }
        return o(e, [{
            key: "load",
            value: function() {
                var e = c["default"].defer();
                return this.el.src = this.urls[0],
                e.resolve(),
                e.promise
            }
        }]),
        e
    } (),
    v = function() {
        function e(t, i) {
            r(this, e),
            this.el = t,
            this.urls = (0, f.buildUrls)(i)
        }
        return o(e, [{
            key: "load",
            value: function() {
                for (var e = this,
                t = c["default"].defer(), i = [], n = 0, r = function(r) {
                    var a = r,
                    o = new d["default"](e.urls[r]);
                    o.load().then(function(r) {
                        if (i[a] = r, n++, n == e.urls.length) { (0, l.once)(e.el, "load",
                            function() {
                                p.revokeObjectURL(e.el.src)
                            });
                            var o = new Blob(i, {
                                type: "video/mp4"
                            });
                            e.el.src = p.createObjectURL(o),
                            t.resolve()
                        }
                    })
                },
                a = 0; a < this.urls.length; a++) r(a);
                return t.promise
            }
        }]),
        e
    } ();
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? null: arguments[0],
        t = "undefined" != typeof o.WINDOW.devicePixelRatio ? o.WINDOW.devicePixelRatio: 1;
        return t > 1 || (null !== e ? o.WINDOW.outerWidth > e: !1)
    }
    function r(e) {
        if (!e.baseUrl || "string" != typeof e.baseUrl) return [];
        var t = "undefined" != typeof e.minWidth ? e.minWidth: null,
        i = n(t),
        r = e.baseUrl,
        o = 0;
        if (i ? "undefined" != typeof e.parts2x && null !== e.parts2x ? (o = parseInt(e.parts2x, 10), r = e.baseUrl + s) : "undefined" != typeof e.parts && null !== e.parts2x ? o = parseInt(e.parts, 10) : r = e.baseUrl + s: "undefined" != typeof e.parts && null !== e.parts ? o = parseInt(e.parts, 10) : "undefined" != typeof e.parts2x && null !== e.parts && (o = parseInt(e.parts2x, 10), r = e.baseUrl + s), o > 0 && a()) {
            for (var u = [], c = 1; o >= c; c++) u.push(r + (".part" + c) + l);
            return u
        }
        return [r + l]
    }
    function a() {
        var e = o.WINDOW.URL || o.WINDOW.webkitURL;
        return "undefined" != typeof o.WINDOW.Blob || "undefined" != typeof e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.buildUrls = r,
    t.canSplitFiles = a;
    var o = i(10),
    s = "@2x",
    l = ".mp4"
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = i(65),
    s = n(o),
    l = i(4),
    u = n(l),
    c = function() {
        function e(t) {
            r(this, e),
            this.url = t
        }
        return a(e, [{
            key: "load",
            value: function() {
                var e = this,
                t = u["default"].defer(),
                i = new s["default"](this.url, o.METHODS.GET, {
                    responseType: "arraybuffer",
                    async: !0
                });
                return i.send().then(function(e) {
                    t.resolve(e)
                },
                function() {
                    t.reject(new Error("Error on load video " + e.url))
                }),
                t.promise
            }
        }]),
        e
    } ();
    t["default"] = c,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = i(4),
    s = n(o),
    l = {
        GET: "get",
        POST: "post"
    };
    t.METHODS = l;
    var u = function() {
        function e(t, i, n) {
            r(this, e),
            this.url = t,
            this.method = i.toUpperCase(),
            this.options = n,
            this.headers = n.headers,
            this.async = n.async,
            this.data = n.data
        }
        return a(e, [{
            key: "send",
            value: function() {
                var e = s["default"].defer(),
                t = new XMLHttpRequest;
                t.open(this.method, this.url, this.async);
                for (var i in this.options)"undefined" != typeof t[i] && (t[i] = this.options[i]);
                return t.onload = function() {
                    t.status >= 200 && t.status < 400 ? e.resolve(t.response) : e.reject(new Error("Can't XHR " + JSON.stringify(t.url)))
                },
                t.onerror = function() {
                    e.reject(new Error("Can't XHR " + JSON.stringify(t.url)))
                },
                t.onprogress = function(t) {
                    e.notify(t.loaded / t.total)
                },
                "POST" == this.method ? t.send(this.data) : t.send(),
                e.promise
            }
        }]),
        e
    } ();
    t["default"] = u
},
function(e, t, i) {
    "use strict";
    function n(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    s = i(10),
    l = i(35),
    u = function(e) {
        function t() {
            n(this, t),
            o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
            this.pageElement = (0, s.querySelector)(".page"),
            this.navElement = (0, s.querySelector)(".nav"),
            this.pageHeader = (0, s.querySelector)(".home-header__title"),
            this.fixedSection = (0, s.querySelectorAll)(".section-fixed__bg"),
            this.contactsView = (0, s.querySelector)(".open-menu__contacts-wrap")
        }
        return r(t, e),
        a(t, [{
            key: "apply",
            value: function(e) {
                this.savedParameters.pageElementMargin = this.pageElement.style.marginRight,
                this.savedParameters.navElementLeft = this.navElement.style.left,
                this.savedParameters.contactElementMargin = this.contactsView.style.marginLeft,
                this.savedParameters.pageTitleLeft = this.pageHeader.style.left,
                this.savedParameters.fixedSectionsRight = this.fixedSection[0].style.right,
                this.pageElement.style.marginRight = e + "px",
                this.navElement.style.left = -1 * e + "px",
                this.contactsView.style.marginLeft = -1 * e / 2 + "px",
                this.pageHeader.style.left = -1 * e / 2 + "px";
                for (var t in this.fixedSection) this.fixedSection[t].style.right = e + "px"
            }
        },
        {
            key: "restore",
            value: function() {
                if ("undefined" != typeof this.savedParameters.pageElementMargin && (this.pageElement.style.marginRight = this.savedParameters.pageElementMargin), "undefined" != typeof this.savedParameters.navElementLeft && (this.navElement.style.left = this.savedParameters.navElementLeft), "undefined" != typeof this.savedParameters.contactElementMargin && (this.contactsView.style.marginLeft = this.savedParameters.contactElementMargin), "undefined" != typeof this.savedParameters.pageTitleLeft && (this.pageHeader.style.left = this.savedParameters.pageTitleLeft), "undefined" != typeof this.savedParameters.fixedSectionsRight) for (var e in this.fixedSection) this.fixedSection[e].style.right = this.savedParameters.fixedSectionsRight;
                this.savedParameters = {}
            }
        }]),
        t
    } (l.AScrollBarStrategy);
    t.WideScreenScrollBarFixerStrategy = u;
    var c = function(e) {
        function t() {
            n(this, t),
            o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
            this.pageElement = (0, s.querySelector)(".page"),
            this.fixedSection = (0, s.querySelectorAll)(".section-fixed__bg"),
            this.navElement = (0, s.querySelector)(".nav")
        }
        return r(t, e),
        a(t, [{
            key: "apply",
            value: function(e) {
                this.savedParameters.fixedSectionsRight = this.fixedSection[0].style.right,
                this.savedParameters.navElementRight = this.navElement.style.right,
                this.savedParameters.pageElementMargin = this.pageElement.style.marginRight,
                this.pageElement.style.marginRight = e + "px",
                this.navElement.style.right = e + "px";
                for (var t in this.fixedSection) this.fixedSection[t].style.right = e + "px"
            }
        },
        {
            key: "restore",
            value: function() {
                if ("undefined" != typeof this.savedParameters.pageElementMargin && (this.pageElement.style.marginRight = this.savedParameters.pageElementMargin), "undefined" != typeof this.savedParameters.navElementRight && (this.navElement.style.right = this.savedParameters.navElementRight), "undefined" != typeof this.savedParameters.fixedSectionsRight) for (var e in this.fixedSection) this.fixedSection[e].style.right = this.savedParameters.fixedSectionsRight;
                this.savedParameters = {}
            }
        }]),
        t
    } (l.AScrollBarStrategy);
    t.SmallScreenScrollBarFixerStrategy = c
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(10),
    u = i(68),
    c = n(u),
    f = i(15),
    h = function(e) {
        function t(e) {
            var i = arguments.length <= 1 || void 0 === arguments[1] ? {}: arguments[1];
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, i)
        }
        return a(t, e),
        o(t, [{
            key: "showElement",
            value: function(e) {
                s(Object.getPrototypeOf(t.prototype), "showElement", this).call(this, e);
                var i = e.getAttribute("data-target"),
                n = this.elementSelector + "__" + this.settings.contentElementName + "_name_" + i + " .home-disciplines__icon",
                r = (0, l.querySelector)(n);
                r && (0, f.touchImageSrc)(r)
            }
        }]),
        t
    } (c["default"]);
    t["default"] = h,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    a = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
    },
    o = i(10),
    s = i(8),
    l = function() {
        function e(t) {
            var i = arguments.length <= 1 || void 0 === arguments[1] ? {}: arguments[1];
            n(this, e),
            this.delayTimer,
            this.elementSelector = t,
            this.domElement = (0, o.querySelector)(t),
            this.domElement && (this.defaulSettings = {
                hoverDelay: 150,
                triggerElementName: "control",
                contentElementName: "data",
                activeElementModifier: "active",
                mouseEvent: "hover"
            },
            this.settings = a({},
            this.defaulSettings, i), this.onMouseover(), this.onMouseout())
        }
        return r(e, [{
            key: "onMouseover",
            value: function() {
                var e = this.elementSelector + "__" + this.settings.triggerElementName,
                t = (0, o.querySelectorAll)(e, this.domElement),
                i = this; (0, s.addEventListener)(t, "mouseover",
                function() {
                    var e = this;
                    this.delayTimer = setTimeout(function() {
                        i.showElement(e)
                    },
                    i.settings.hoverDelay)
                })
            }
        },
        {
            key: "onMouseout",
            value: function() {
                var e = (0, o.querySelectorAll)(this.elementSelector + "__" + this.settings.triggerElementName); (0, s.addEventListener)(e, "mouseout",
                function() {
                    clearTimeout(this.delayTimer)
                })
            }
        },
        {
            key: "showElement",
            value: function(e) {
                if (this.hideActiveElement(), e) {
                    var t = e.getAttribute("data-target"),
                    i = this.elementSelector + "__" + this.settings.contentElementName + "_name_" + t,
                    n = (0, o.querySelector)(i);
                    n && (e.classList.add(this.elementSelector.slice(1) + "__" + this.settings.triggerElementName + "_" + this.settings.activeElementModifier), n.classList.add(this.elementSelector.slice(1) + "__" + this.settings.contentElementName + "_" + this.settings.activeElementModifier))
                }
            }
        },
        {
            key: "hideActiveElement",
            value: function() {
                this.activeDomElement && this.activeTriggerDomElement && (this.activeDomElement.classList.remove(this.elementSelector.slice(1) + "__" + this.settings.contentElementName + "_" + this.settings.activeElementModifier), this.activeTriggerDomElement.classList.remove(this.elementSelector.slice(1) + "__" + this.settings.triggerElementName + "_" + this.settings.activeElementModifier))
            }
        },
        {
            key: "activeDomElement",
            get: function() {
                return (0, o.querySelector)(this.elementSelector + "__" + this.settings.contentElementName + "_" + this.settings.activeElementModifier)
            }
        },
        {
            key: "activeTriggerDomElement",
            get: function() {
                return (0, o.querySelector)(this.elementSelector + "__" + this.settings.triggerElementName + "_" + this.settings.activeElementModifier)
            }
        }]),
        e
    } ();
    t["default"] = l,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = (i(15), i(11)),
    u = n(l),
    c = i(28),
    f = (n(c), i(48)),
    h = n(f),
    d = i(49),
    p = n(d),
    m = i(46),
    v = n(m),
    y = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.areasSection = (0, u["default"])(".home-areas"),
                this.areUserSection = (0, u["default"])(".home-are-used"),
                this.spinrillaSection = (0, u["default"])(".home-spinrilla"),
                this.isOff = !1
            }
        },
        {
            key: "moveIn",
            value: function(e) {.5 > e ? this.deleteFromGPU() : this.moveToGPU(),
                e >= .9 ? this.lightOff() : this.lightOn()
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                e >= 0 && this.lightOff(),
                e > 1.5 ? this.deleteFromGPU() : this.moveToGPU()
            }
        },
        {
            key: "lightOff",
            value: function() {
                this.isOff || (this.areasSection.classList.add("j-dark"), this.areUserSection.classList.remove("j-light"), this.spinrillaSection.classList.remove("j-light"), this.isOff = !0)
            }
        },
        {
            key: "lightOn",
            value: function() {
                this.isOff && (this.areasSection.classList.remove("j-dark"), this.areUserSection.classList.add("j-light"), this.spinrillaSection.classList.add("j-light"), this.isOff = !1)
            }
        },
        {
            key: "moveToGPU",
            value: function() {
                this._hasMovedToGPU || (this.areasSection.classList.add("j-move-to-gpu"), this.areUserSection.classList.add("j-move-to-gpu"), this._hasMovedToGPU = !0)
            }
        },
        {
            key: "deleteFromGPU",
            value: function() {
                this._hasMovedToGPU && (this.areasSection.classList.remove("j-move-to-gpu"), this.areUserSection.classList.remove("j-move-to-gpu"), this._hasMovedToGPU = !1)
            }
        }]),
        t
    } (p["default"]),
    _ = function() {
        function e() {
            r(this, e);
            var t = (0, u["default"])(".home-areas__itm_miranda");
            this.phoneView = new h["default"](t, t, new y)
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                this.phoneView.update(e)
            }
        }]),
        e
    } ();
    t["default"] = function() {
        return new v["default"](new _)
    },
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(10),
    u = i(61),
    c = n(u),
    f = i(62),
    h = n(f),
    d = i(14),
    p = i(28),
    m = n(p),
    v = i(18),
    y = n(v),
    _ = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this),
            this.videosList = (0, l.querySelectorAll)(".j-autoloaded-video"),
            this.videosToWatch = (0, l.querySelectorAll)(".j-start-video-in-vp"),
            this.videoElements = (0, l.querySelectorAll)("video"),
            this.oceanSection = (0, l.querySelector)(".home-approach video"),
            this.fixedVideos = (0, l.querySelectorAll)(".j-fixed-video"),
            m["default"].on("update", this.onScroll.bind(this)),
            this.onScroll()
        }
        return a(t, e),
        o(t, [{
            key: "load",
            value: function() {
                var e = this.videosList.slice();
                e.push(this.oceanSection);
                for (var t in e) {
                    var i = (0, h["default"])(e[t], JSON.parse((0, c["default"])(e[t], "options").options));
                    i.load()
                }
            }
        },
        {
            key: "onScroll",
            value: function() {
                var e = this.videosToWatch;
                for (var t in e) {
                    var i = e[t]; (0, d.isInViewPort)(i, .6) ? i.paused && (i.play(), this.emit("update", {
                        video: i,
                        play: !0
                    })) : i.paused || (i.pause(), this.emit("update", {
                        video: i,
                        play: !1
                    }))
                }
                for (var t in this.fixedVideos) {
                    var i = this.fixedVideos[t],
                    n = (0, l.querySelector)("video", i); (0, d.isInViewPort)(i) ? (n.paused && (n.play(), this.emit("update", {
                        video: n,
                        play: !0
                    })), i.style.pointerEvents = "auto") : (n.paused || (n.pause(), this.emit("update", {
                        video: n,
                        play: !1
                    })), i.style.pointerEvents = "none")
                }
            }
        },
        {
            key: "stopAll",
            value: function() {
                var e = this.videoElements;
                for (var t in e) e[t].pause()
            }
        },
        {
            key: "start",
            value: function() {
                this.onScroll()
            }
        }]),
        t
    } (y["default"]);
    t["default"] = _,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = i(72),
    s = (n(o), i(4)),
    l = n(s),
    u = i(10),
    c = i(8),
    f = i(74),
    h = i(22),
    d = n(h),
    p = i(56),
    m = n(p),
    v = i(75),
    y = function() {
        function e(t) {
            var i = this;
            r(this, e),
            this._rootElement = (0, u.querySelector)(".home-header"),
            this.wireframeAnimationFired = !1,
            this.wireframeAnimationSVGEl = (0, u.querySelector)(".home-header__animation_type_wireframe", this._rootElement),
            this.centerLineEl = (0, u.querySelector)(".home-header__animation-part.line-center", this._rootElement),
            this.changeAnimationBehaviourFPS = 25,
            this.disableBlendModeFPS = 30,
            this.measurePerfomanceOn = "glitch",
            this._isBlendModeDisabledForever = !1,
            this.isSlowBrowser = !1,
            this.startTime = 0,
            this._isRunned = !1,
            this._isPaused = !1,
            this._stat = {},
            this.disableBlendMode(),
            this.fastAnimations = ["asteroid", "crosses", "linesAndDots", "rotatingCircle", "triangle", "glitch", "shadowSquares", "scalingBlocks"],
            this.slowAnimations = ["interference"],
            this.queue = [],
            this.animations = {},
            this.currentAnimation,
            this._pauseCount = 0;
            var n = {
                after: function(e) {
                    i.afterCallback(e)
                },
                slow: function(e) {
                    i.slowCallback(e)
                }
            };
            this.animations = {
                asteroid: (0, v.asteroidAnimation)(n),
                triangle: (0, v.triangleAnimation)(n),
                shadowSquares: (0, v.shadowSquaresAnimation)(n),
                rotatingCircle: (0, v.rotatingCircleAnimation)(n),
                crosses: (0, v.crossesAnimation)(n),
                interference: (0, v.interferenceAnimation)(n),
                linesAndDots: (0, v.linesAndDotsAnimation)(n),
                glitch: (0, v.glitchAnimation)(n),
                scalingBlocks: (0, v.scalingBlocksAnimation)(n)
            }
        }
        return a(e, [{
            key: "degradateForSlowBrowsers",
            value: function(e) {
                this._stat[this.currentAnimation] || (e < this.changeAnimationBehaviourFPS && (this._rootElement.classList.add("j_simplified-animations"), this.isSlowBrowser = !0), e < this.disableBlendModeFPS && (this._isBlendModeDisabledForever = !0))
            }
        },
        {
            key: "fireWireframeAnimation",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                t = l["default"].defer();
                return this.wireframeAnimationFired ? t.reject(new Error("Already fired")) : (this.wireframeAnimationFired = !0, (0, c.addEventListener)(this.centerLineEl, (0, d["default"])("animationend"),
                function i(n) {
                    t.resolve(),
                    e && this.run(),
                    (0, c.removeEventListener)(this.centerLineEl, (0, d["default"])("animationend"), i),
                    this.wireframeAnimationSVGEl.parentNode.removeChild(this.wireframeAnimationSVGEl)
                }.bind(this)), this.wireframeAnimationSVGEl.classList.add("home-header__animation_active")),
                t.promise
            }
        },
        {
            key: "run",
            value: function() {
                var e = this;
                if (!this._isRunned) {
                    this._isRunned = !0,
                    this.wireframeAnimationFired = !0,
                    this.startTime = Date.now();
                    var t = this.animations[this.measurePerfomanceOn];
                    t ? !
                    function() {
                        var i = t.settings.after;
                        t.settings.isMeasureMode = !0,
                        t.settings.after = function(n) {
                            e.degradateForSlowBrowsers(n.fps),
                            t.settings.isMeasureMode = !1,
                            m["default"].fps(n.fps),
                            i(n)
                        },
                        e.currentAnimation = e.measurePerfomanceOn,
                        t.run()
                    } () : this.runNextAnimation()
                }
            }
        },
        {
            key: "pause",
            value: function() {
                if (this._isRunned) {
                    var e = this.animations[this.currentAnimation];
                    if (e && !this._isPaused) {
                        console.log("Pause() ", this.currentAnimation);
                        var t = Date.now() - this.startTime;
                        1 === e.runCount && m["default"].animationStopped(this.currentAnimation, t),
                        e.pause(),
                        this._isPaused = !0
                    }
                    this._increasePauseCount()
                }
            }
        },
        {
            key: "resume",
            value: function() {
                if (this._isRunned) {
                    this.startTime = Date.now();
                    var e = this.animations[this.currentAnimation];
                    e && this._canResume() && (e.resume(), this._isPaused = !1),
                    this._decreasePauseCount()
                }
            }
        },
        {
            key: "_decreasePauseCount",
            value: function() {
                this._pauseCount > 0 && this._pauseCount--
            }
        },
        {
            key: "_increasePauseCount",
            value: function() {
                this._pauseCount++
            }
        },
        {
            key: "_canResume",
            value: function() {
                return 1 === this._pauseCount
            }
        },
        {
            key: "disableBlendMode",
            value: function() {
                this._rootElement.classList.add("j_no-anim-blending")
            }
        },
        {
            key: "enableBlendMode",
            value: function() {
                this._rootElement.classList.remove("j_no-anim-blending")
            }
        },
        {
            key: "runNextAnimation",
            value: function(e) {
                this.queue.length || this.fillQueue(this.currentAnimation);
                var t = this.queue.shift(),
                i = this.animations[t];
                this.currentAnimation = t,
                !this._isBlendModeDisabledForever && i.settings.useBlendMode ? this.enableBlendMode() : this.disableBlendMode(),
                i.run({
                    reset: !0
                })
            }
        },
        {
            key: "afterCallback",
            value: function(e) {
                var t = this._stat[this.currentAnimation];
                this.currentAnimation && !t && (t = this._stat[this.currentAnimation] = {
                    runCount: 0,
                    avgFPS: 0,
                    FPSStat: []
                }),
                t.runCount++,
                t.FPSStat.push(e.fps);
                var i = t.FPSStat.reduce(function(e, t) {
                    return e + t
                });
                t.avgFPS = i / t.FPSStat.length,
                this.runNextAnimation(e)
            }
        },
        {
            key: "slowCallback",
            value: function(e) {}
        },
        {
            key: "fillQueue",
            value: function(e) {
                this.queue = this.shuffleAnimations(e)
            }
        },
        {
            key: "shuffleAnimations",
            value: function(e) {
                var t = (0, f.arrayShuffle)(this.enabledAnimations);
                return e && t.length > 1 && t[0] === e && (t = this.shuffleAnimations(e)),
                t
            }
        },
        {
            key: "enabledAnimations",
            get: function() {
                return this.isSlowBrowser ? this.fastAnimations: this.fastAnimations.concat(this.slowAnimations)
            }
        }]),
        e
    } ();
    t["default"] = y,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
    },
    s = i(10),
    l = i(22),
    u = n(l),
    c = i(73),
    f = n(c),
    h = function() {
        function e(t) {
            r(this, e),
            this.runCount = 0,
            this._animationsCache = [],
            this._isPaused = !1,
            this._transformAnimations = ["rotate", "translate", "scale"],
            this._CSSAnimations = ["translate3d", "CSSrotate", "CSSscale"],
            this._colorAnimations = ["fill", "stroke"],
            this._initialValues = [],
            this._isSlowCallbackFired = !1,
            this.defaultSettings = {
                baseCSSClass: "animation",
                activeCSSClassSuffix: "_active",
                slowCallbackPercentThreshold: 10,
                slowCallbackFPSThreshold: 30,
                before: function() {},
                after: function() {},
                slow: function(e) {}
            },
            this.settings = o({},
            this.defaultSettings, t),
            this._unitsRegexp = /^-?\d+([%a-z]*)$/i,
            this._initialTimestamp = null,
            this._lastTimestamp = 0,
            t.animations && t.animations instanceof Array && (this._svg = (0, s.querySelector)(t.svgElementSelector), this._svg && (this._fillAnimationsCache(t.animations), this._saveInitialValues(), this._totalFrames = this._animationsCache.reduce(function(e, t) {
                var i = t.startFrame + t.duration;
                return i > e ? i: e
            },
            0), this._currentFrame = 0))
        }
        return a(e, [{
            key: "_setActiveClass",
            value: function() {
                this._svg.classList.add(this.settings.baseCSSClass + this.settings.activeCSSClassSuffix)
            }
        },
        {
            key: "_removeActiveClass",
            value: function() {
                this._svg.classList.remove(this.settings.baseCSSClass + this.settings.activeCSSClassSuffix)
            }
        },
        {
            key: "run",
            value: function(e) {
                e && e.reset && this.reset(),
                this.runCount++,
                this._setActiveClass(),
                this._initialTimestamp = this._lastTimestamp = Date.now(),
                this.settings.before.call(this),
                this._loop()
            }
        },
        {
            key: "pause",
            value: function() {
                this._isPaused = !0
            }
        },
        {
            key: "resume",
            value: function() {
                this._isPaused = !1,
                this._loop()
            }
        },
        {
            key: "reset",
            value: function() {
                this._restoreInitialValues(),
                this._currentFrame = 0,
                this._initialTimestamp = null
            }
        },
        {
            key: "_buildTransformString",
            value: function(e) {
                var t = "";
                for (var i in e) if (e.hasOwnProperty(i)) {
                    var n = e[i],
                    r = i.replace("CSS", "");
                    t += r + "(" + n.join(", ") + ") "
                }
                return t
            }
        },
        {
            key: "_parseTransformString",
            value: function(e) {
                if (!e) return {};
                e = this._stripPrefixes(e);
                var t = {};
                for (var i in e = e.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*(px|%)?,?\s*)+\))+/g)) {
                    var n = e[i].match(/[\w\.\-]+/g);
                    t[n.shift()] = n
                }
                return t
            }
        },
        {
            key: "_stripPrefixes",
            value: function(e) {
                return e.replace(/(-\w+-)/gi, "")
            }
        },
        {
            key: "_fillAnimationsCache",
            value: function(e) {
                this._animationsCache = e.map(function(e, t) {
                    var i = e.element;
                    if (i.nodeName || (i = (0, s.querySelector)(e.element, this._svg)), !i) return e;
                    e.domElement = i,
                    e.transforms = this._parseTransformString(i.getAttribute("transform")),
                    e.CSStransforms = this._parseTransformString(i.getAttribute("style"));
                    var n = {};
                    for (var r in e.valuesToAnimate) if (e.valuesToAnimate.hasOwnProperty(r)) {
                        var a = {},
                        o = i.getAttribute(r),
                        l = e.valuesToAnimate[r];
                        a.units = this._getUnits(o),
                        a.to = this.normalizeValue(l, r),
                        l.from || 0 === l.from ? (a.to = l.to, a.from = l.from) : this._transformAnimations.indexOf(r) > -1 ? a.from = e.transforms[r] : this._CSSAnimations.indexOf(r) > -1 ? a.from = e.CSStransforms[r] : this._colorAnimations.indexOf(r) > -1 ? 0 === o.indexOf("#") ? a.from = this.hexToRgb(o) : a.from = this._parseTransformString(o).rgb: a.from = parseFloat(o),
                        n[r] = a
                    }
                    return e.valuesToAnimate = n,
                    e
                },
                this)
            }
        },
        {
            key: "_saveInitialValues",
            value: function() {
                this._initialValues = this._animationsCache.map(function(e) {
                    var t = {};
                    return t.domElement = e.domElement,
                    t.attributes = Array.prototype.slice.call(e.domElement.attributes).map(function(e) {
                        return {
                            name: e.name,
                            value: e.value
                        }
                    }),
                    t
                })
            }
        },
        {
            key: "normalizeValue",
            value: function(e, t) {
                return this._colorAnimations.indexOf(t) > -1 && "string" == typeof e && 0 === e.indexOf("#") && (e = this.hexToRgb(e)),
                e
            }
        },
        {
            key: "_restoreInitialValues",
            value: function() {
                this._initialValues.forEach(function(e) {
                    var t = e.domElement;
                    e.attributes.forEach(function(e) {
                        t.setAttribute(e.name, e.value)
                    })
                })
            }
        },
        {
            key: "_getUnits",
            value: function(e) {
                var t = this._unitsRegexp.exec(e);
                return t && t[1] ? t[1] : ""
            }
        },
        {
            key: "_loop",
            value: function(e) {
                this._lastTimestamp = Date.now();
                var t = this._lastTimestamp - this._initialTimestamp;
                this.FPS = (this._currentFrame + 1) / (t / 1e3);
                var i = this._currentFrame / this._totalFrames * 100;
                return i > this.settings.slowCallbackPercentThreshold && this.FPS < this.settings.slowCallbackFPSThreshold && !this._isSlowCallbackFired && this.settings.slow instanceof Function && (this._isSlowCallbackFired = !0, this.settings.slow(this)),
                this._currentFrame > this._totalFrames ? (this._removeActiveClass(), void(this.settings.after instanceof Function && this.settings.after({
                    fps: this.FPS
                }))) : void(this._isPaused || (this._animationsCache.forEach(function(e) {
                    this._doAnimate.call(this, e)
                },
                this), this._currentFrame++, this._handle = window.requestAnimationFrame(this._loop.bind(this))))
            }
        },
        {
            key: "_doAnimate",
            value: function(e) {
                if (e.domElement) {
                    var t = void 0;
                    t = e.easing && this.easing[e.easing] ? this.easing[e.easing] : e.easing && e.easing instanceof Object ? this.easing.bezier: this.easing.easeInQuad;
                    var i = e.domElement,
                    n = e.startFrame,
                    r = e.duration,
                    a = n + r;
                    if (this._currentFrame >= n && this._currentFrame <= a) for (var o in e.valuesToAnimate) if (e.valuesToAnimate.hasOwnProperty(o)) {
                        var s = e.valuesToAnimate[o].from,
                        l = e.valuesToAnimate[o].to,
                        c = e.valuesToAnimate[o].units;
                        s instanceof Array || (s = [s], l = [l]);
                        for (var f = [], h = 0; h < s.length; h++) {
                            var d = this._getUnits(l[h]),
                            p = parseFloat(s[h]),
                            m = parseFloat(l[h]),
                            v = m - p;
                            0 !== v ? f[h] = t(e, this._currentFrame - n, p, v, r) + d: f[h] = p + d
                        }
                        if (this._transformAnimations.indexOf(o) > -1) {
                            var y = e.transforms;
                            y[o] = f,
                            i.setAttribute("transform", this._buildTransformString(y))
                        } else if (this._CSSAnimations.indexOf(o) > -1) {
                            var _ = i.getAttribute("style") || "",
                            g = _.replace("transform: ", ""),
                            y = e.CSStransforms = this._parseTransformString(g);
                            y[o] = f,
                            i.setAttribute("style", (0, u["default"])("transform") + ": " + this._buildTransformString(y))
                        } else if (this._colorAnimations.indexOf(o) > -1) {
                            for (var O = 0; 3 > O; O++) f[O] = Math.round(f[O]);
                            var y = {
                                rgb: f
                            };
                            i.setAttribute(o, this._buildTransformString(y))
                        } else i.setAttribute(o, f[0] + c)
                    }
                }
            }
        },
        {
            key: "hexToRgb",
            value: function(e) {
                var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                e = e.replace(t,
                function(e, t, i, n) {
                    return t + t + i + i + n + n
                });
                var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return i ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : null
            }
        },
        {
            key: "easing",
            get: function() {
                return {
                    easeInQuad: function(e, t, i, n, r) {
                        return n * (t /= r) * t + i
                    },
                    linear: function(e, t, i, n, r) {
                        var a = t / r,
                        o = i + n * a;
                        return o
                    },
                    easeInOutQuart: function(e, t, i, n, r) {
                        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i: -n / 2 * ((t -= 2) * t * t * t - 2) + i
                    },
                    easeOutQuint: function(e, t, i, n, r) {
                        return n * ((t = t / r - 1) * t * t * t * t + 1) + i
                    },
                    easeInOutElastic: function(e, t, i, n, r) {
                        var a = 1.70158,
                        o = 0,
                        s = n;
                        return 0 == t ? i: 2 == (t /= r / 2) ? i + n: (o || (o = r * (.3 * 1.5)), s < Math.abs(n) ? (s = n, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(n / s), 1 > t ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i: s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * .5 + n + i)
                    },
                    easeInOutExpo: function(e, t, i, n, r) {
                        return 0 == t ? i: t == r ? i + n: (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i: n / 2 * ( - Math.pow(2, -10 * --t) + 2) + i
                    },
                    easeOutExpo: function(e, t, i, n, r) {
                        return t == r ? i + n: n * ( - Math.pow(2, -10 * t / r) + 1) + i
                    },
                    easeInExpo: function(e, t, i, n, r) {
                        return 0 == t ? i: n * Math.pow(2, 10 * (t / r - 1)) + i
                    },
                    bezier: function(e, t, i, n, r) {
                        var a = f["default"].apply(this, e.easing),
                        o = t / r,
                        s = a.get(o);
                        return i + n * s
                    }
                }
            }
        }]),
        e
    } ();
    t["default"] = h,
    e.exports = t["default"]
},
function(e, t) {
    function i(e, t) {
        return 1 - 3 * t + 3 * e
    }
    function n(e, t) {
        return 3 * t - 6 * e
    }
    function r(e) {
        return 3 * e
    }
    function a(e, t, a) {
        return ((i(t, a) * e + n(t, a)) * e + r(t)) * e
    }
    function o(e, t, a) {
        return 3 * i(t, a) * e * e + 2 * n(t, a) * e + r(t)
    }
    function s(e, t, i, n, r) {
        var o, s, l = 0;
        do s = t + (i - t) / 2,
        o = a(s, n, r) - e,
        o > 0 ? i = s: t = s;
        while (Math.abs(o) > h && ++l < d);
        return s
    }
    function l(e, t, i, n) {
        for (var r = 0; c > r; ++r) {
            var s = o(t, i, n);
            if (0 === s) return t;
            var l = a(t, i, n) - e;
            t -= l / s
        }
        return t
    }
    function u(e, t, i, n) {
        if (4 === arguments.length) return new u([e, t, i, n]);
        if (! (this instanceof u)) return new u(e);
        if (!e || 4 !== e.length) throw new Error("BezierEasing: points must contains 4 values");
        for (var r = 0; 4 > r; ++r) if ("number" != typeof e[r] || isNaN(e[r]) || !isFinite(e[r])) throw new Error("BezierEasing: points should be integers.");
        if (e[0] < 0 || e[0] > 1 || e[2] < 0 || e[2] > 1) throw new Error("BezierEasing x values must be in [0, 1] range.");
        this._str = "BezierEasing(" + e + ")",
        this._css = "cubic-bezier(" + e + ")",
        this._p = e,
        this._mSampleValues = v ? new Float32Array(p) : new Array(p),
        this._precomputed = !1,
        this.get = this.get.bind(this)
    }
    var c = 4,
    f = .001,
    h = 1e-7,
    d = 10,
    p = 11,
    m = 1 / (p - 1),
    v = "function" == typeof Float32Array;
    u.prototype = {
        get: function(e) {
            var t = this._p[0],
            i = this._p[1],
            n = this._p[2],
            r = this._p[3];
            return this._precomputed || this._precompute(),
            t === i && n === r ? e: 0 === e ? 0 : 1 === e ? 1 : a(this._getTForX(e), i, r)
        },
        getPoints: function() {
            return this._p
        },
        toString: function() {
            return this._str
        },
        toCSS: function() {
            return this._css
        },
        _precompute: function() {
            var e = this._p[0],
            t = this._p[1],
            i = this._p[2],
            n = this._p[3];
            this._precomputed = !0,
            (e !== t || i !== n) && this._calcSampleValues()
        },
        _calcSampleValues: function() {
            for (var e = this._p[0], t = this._p[2], i = 0; p > i; ++i) this._mSampleValues[i] = a(i * m, e, t)
        },
        _getTForX: function(e) {
            for (var t = this._p[0], i = this._p[2], n = this._mSampleValues, r = 0, a = 1, u = p - 1; a !== u && n[a] <= e; ++a) r += m; --a;
            var c = (e - n[a]) / (n[a + 1] - n[a]),
            h = r + c * m,
            d = o(h, t, i);
            return d >= f ? l(e, h, t, i) : 0 === d ? h: s(e, r, r + m, t, i)
        }
    },
    u.css = {
        ease: u.ease = u(.25, .1, .25, 1),
        linear: u.linear = u(0, 0, 1, 1),
        "ease-in": u.easeIn = u(.42, 0, 1, 1),
        "ease-out": u.easeOut = u(0, 0, .58, 1),
        "ease-in-out": u.easeInOut = u(.42, 0, .58, 1)
    },
    e.exports = u
},
function(e, t) {
    "use strict";
    function i(e) {
        for (var t = e.slice(), i = t.length, n = void 0, r = void 0; i;) r = Math.floor(Math.random() * i--),
        n = t[i],
        t[i] = t[r],
        t[r] = n;
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.arrayShuffle = i
},
function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(76),
    r = i(77),
    a = i(78),
    o = i(79),
    s = i(80),
    l = i(81),
    u = i(82),
    c = i(83),
    f = i(84);
    t.asteroidAnimation = n.asteroid,
    t.rotatingCircleAnimation = r.rotatingCircle,
    t.shadowSquaresAnimation = a.shadowSquares,
    t.triangleAnimation = o.triangle,
    t.interferenceAnimation = s.interference,
    t.crossesAnimation = l.crosses,
    t.linesAndDotsAnimation = u.linesAndDots,
    t.glitchAnimation = c.glitch,
    t.scalingBlocksAnimation = f.scalingBlocks
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e) {
        var t = 54,
        i = 90,
        n = 90,
        r = 144,
        a = 210,
        s = 209,
        l = 1,
        u = 210,
        c = 90,
        f = 0,
        h = 210,
        d = [{
            element: ".circle_primary",
            valuesToAnimate: {
                r: 400
            },
            startFrame: 0,
            duration: n,
            easing: "easeOutExpo"
        },
        {
            element: ".circle_primary",
            valuesToAnimate: {
                "stroke-width": 0
            },
            startFrame: 0,
            duration: r,
            easing: "linear"
        },
        {
            element: ".circle_primary",
            valuesToAnimate: {
                opacity: 0
            },
            startFrame: t,
            duration: i,
            easing: "linear"
        },
        {
            element: ".circle_secondary",
            valuesToAnimate: {
                r: 75
            },
            startFrame: 0,
            duration: a,
            easing: "easeOutExpo"
        },
        {
            element: ".circle_secondary",
            valuesToAnimate: {
                fill: "#ffffff"
            },
            startFrame: s,
            duration: l,
            easing: "easeOutExpo"
        },
        {
            element: ".circle_secondary",
            valuesToAnimate: {
                opacity: 0
            },
            startFrame: u,
            duration: c,
            easing: "easeOutExpo"
        },
        {
            element: ".circle_secondary",
            valuesToAnimate: {
                cx: 207,
                cy: 970
            },
            startFrame: f,
            duration: h,
            easing: "easeInOutExpo"
        },
        {
            element: ".line",
            valuesToAnimate: {
                x1: 207,
                y1: 970
            },
            startFrame: f,
            duration: h,
            easing: "easeInOutExpo"
        },
        {
            element: ".line",
            valuesToAnimate: {
                x1: 207,
                y1: 970
            },
            startFrame: f,
            duration: h,
            easing: "easeInOutExpo"
        },
        {
            element: ".line",
            valuesToAnimate: {
                x2: 207,
                y2: 970
            },
            startFrame: f,
            duration: h,
            easing: "easeInExpo"
        }];
        return new o["default"]({
            svgElementSelector: ".home-header__animation_type_asteroid",
            baseCSSClass: "home-header__animation",
            animations: d,
            useBlendMode: !1,
            after: e.after,
            slow: e.slow
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(72),
    o = n(a);
    t.asteroid = r
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e) {
        for (var t = 1.5,
        i = 10,
        n = 60 * t,
        r = 10 * t,
        a = 90 * t,
        s = 10 * t,
        l = n + (r * i - 1) + a, u = 30 * t, c = [{
            element: ".circles",
            valuesToAnimate: {
                opacity: 1
            },
            startFrame: 0,
            duration: n,
            easing: "linear"
        }], f = 1; i >= f; f++) {
            var h = f - 1,
            d = 1 - .1 * h,
            p = {
                element: ".circle" + f + "-wrap",
                valuesToAnimate: {
                    translate: {
                        from: [20 * h, 20 * h],
                        to: [20 * h, 20 * h]
                    },
                    scale: {
                        from: [d],
                        to: [d]
                    },
                    rotate: {
                        from: [0, 200, 200],
                        to: [180, 200, 200]
                    }
                },
                startFrame: n + f * r,
                duration: a,
                easing: "easeInOutExpo"
            };
            c.push(p),
            c.push({
                element: ".circle" + f + "-wrap",
                valuesToAnimate: {
                    opacity: {
                        from: 1,
                        to: 0
                    },
                    rotate: {
                        from: [180, 200, 200],
                        to: [360, 200, 200]
                    }
                },
                startFrame: l + f * s,
                duration: u
            })
        }
        return new o["default"]({
            svgElementSelector: ".home-header__animation_type_rotating-circles",
            baseCSSClass: "home-header__animation",
            animations: c,
            useBlendMode: !0,
            after: e.after,
            slow: e.slow
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(72),
    o = n(a);
    t.rotatingCircle = r
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e) {
        var t = (0, a.querySelector)(".home-header__animation_type_shadow-square-back .square4"),
        i = (0, a.querySelector)(".home-header__animation_type_shadow-square-back .square5"),
        n = ({
            wrapInner: (0, a.querySelector)(".wrap-inner", t),
            shadow: (0, a.querySelector)(".shadow", t),
            squareWrap: (0, a.querySelector)(".square-wrap", t),
            square: (0, a.querySelector)(".square", t),
            wrap: (0, a.querySelector)(".wrap", t)
        },
        {
            wrapInner: (0, a.querySelector)(".wrap-inner", i),
            shadow: (0, a.querySelector)(".shadow", i),
            squareWrap: (0, a.querySelector)(".square-wrap", i),
            square: (0, a.querySelector)(".square", i),
            wrap: (0, a.querySelector)(".wrap", i)
        },
        []),
        r = (0, a.querySelector)(".home-header__animation_type_shadow-square-back"),
        o = function(e, t) {
            var i = 132,
            n = (0, a.querySelector)(".home-header__animation_type_shadow-square-" + e + " .home-header__animation_type_shadow-square-inner-shadow"),
            r = (0, a.querySelector)(".home-header__animation_type_shadow-square-" + e + " .home-header__animation_type_shadow-square-inner-square"),
            o = [];
            return o.push({
                element: n,
                valuesToAnimate: {
                    CSSscale: {
                        from: [1, 1],
                        to: [0, 1]
                    }
                },
                startFrame: t,
                duration: i,
                easing: "easeInExpo"
            }),
            o.push({
                element: n,
                valuesToAnimate: {
                    translate3d: {
                        from: [0, "100%", 0],
                        to: [0, "0%", 0]
                    }
                },
                startFrame: t,
                duration: i,
                easing: "easeOutExpo"
            }),
            o.push({
                element: r,
                valuesToAnimate: {
                    CSSscale: {
                        from: [1],
                        to: [0]
                    }
                },
                startFrame: t,
                duration: i,
                easing: "easeInExpo"
            }),
            o.push({
                element: r,
                valuesToAnimate: {
                    translate3d: {
                        from: [0, "100%", 0],
                        to: [0, "0%", 0]
                    }
                },
                startFrame: t,
                duration: i,
                easing: "easeOutExpo"
            }),
            o
        };
        return n = n.concat(o(1, 0)),
        n = n.concat(o(2, 14)),
        n = n.concat(o(3, 68)),
        n = n.concat(o(4, 25)),
        n = n.concat(o(5, 47)),
        new s["default"]({
            svgElementSelector: ".home-header__animation_type_shadow-square-front",
            baseCSSClass: "home-header__animation",
            animations: n,
            useBlendMode: !0,
            before: function() {
                r.classList.add("home-header__animation_active")
            },
            after: function(t) {
                r.classList.remove("home-header__animation_active"),
                e.after(t)
            },
            slow: e.slow
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(10),
    o = i(72),
    s = n(o);
    t.shadowSquares = r
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e) {
        var t = 1,
        i = 212,
        n = 15,
        r = t + i + 6 * n,
        a = {
            x: "100px",
            y: "0px"
        },
        s = {
            x: 800 * Math.cos(120 * Math.PI / 180) + parseFloat(a.x) + "px",
            y: 800 * Math.sin(120 * Math.PI / 180) + parseFloat(a.y) + "px"
        },
        l = [{
            element: ".triangle__part-wrapper",
            valuesToAnimate: {
                opacity: 1
            },
            startFrame: t,
            duration: i,
            easing: "easeOutExpo"
        },
        {
            element: ".triangle__part_1",
            valuesToAnimate: {
                translate3d: {
                    from: [s.x, s.y, 0],
                    to: [a.x, a.y, "0px"]
                },
                fill: "#63e98f",
                stroke: "#63e98f"
            },
            startFrame: t,
            duration: i,
            easing: "easeOutExpo"
        },
        {
            element: ".triangle__part_2",
            valuesToAnimate: {
                translate3d: {
                    from: [s.x, s.y, 0],
                    to: [a.x, a.y, "0px"]
                },
                fill: "#63e98f",
                stroke: "#63e98f"
            },
            startFrame: t,
            duration: i + n,
            easing: "easeOutExpo"
        },
        {
            element: ".triangle__part_3",
            valuesToAnimate: {
                translate3d: {
                    from: [s.x, s.y, 0],
                    to: [a.x, a.y, "0px"]
                },
                fill: "#fba6c9",
                stroke: "#fba6c9"
            },
            startFrame: t,
            duration: i + 2 * n,
            easing: "easeOutExpo"
        },
        {
            element: ".triangle__part_4",
            valuesToAnimate: {
                translate3d: {
                    from: [s.x, s.y, 0],
                    to: [a.x, a.y, "0px"]
                },
                fill: "#fba6c9",
                stroke: "#fba6c9"
            },
            startFrame: t,
            duration: i + 3 * n,
            easing: "easeOutExpo"
        },
        {
            element: ".triangle__part_5",
            valuesToAnimate: {
                translate3d: {
                    from: [s.x, s.y, 0],
                    to: [a.x, a.y, "0px"]
                },
                fill: "#fba6c9",
                stroke: "#fba6c9"
            },
            startFrame: t,
            duration: i + 4 * n,
            easing: "easeOutExpo"
        },
        {
            element: ".triangle_stroke",
            valuesToAnimate: {
                opacity: {
                    from: 0,
                    to: 1
                }
            },
            startFrame: r,
            duration: 1
        },
        {
            element: ".triangle_stroke",
            valuesToAnimate: {
                opacity: {
                    from: 1,
                    to: 0
                }
            },
            startFrame: r + 1,
            duration: 69,
            easing: "linear"
        },
        {
            element: ".triangle__part-wrapper",
            valuesToAnimate: {
                opacity: {
                    from: 1,
                    to: 0
                }
            },
            startFrame: r,
            duration: 75,
            easing: "linear"
        }];
        return new o["default"]({
            svgElementSelector: ".home-header__animation_type_triangle",
            baseCSSClass: "home-header__animation",
            animations: l,
            useBlendMode: !0,
            after: e.after,
            slow: e.slow
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(72),
    o = n(a);
    t.triangle = r
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e) {
        for (var t = [], i = (0, a.querySelector)(".home-header__animation_type_interference-yellow"), n = (0, a.querySelectorAll)(".c", i), r = 0, o = 0; o < n.length; o++) {
            var l = {
                element: n[o],
                valuesToAnimate: {
                    r: {
                        from: [0],
                        to: [250]
                    }
                },
                startFrame: r + 15 * o,
                duration: 300,
                easing: "linear"
            };
            t.push(l),
            l = {
                element: n[o],
                valuesToAnimate: {
                    stroke: {
                        from: [255, 255, 255],
                        to: [255, 201, 18]
                    }
                },
                startFrame: r + 15 * o,
                duration: 80,
                easing: "linear"
            },
            t.push(l),
            l = {
                element: n[o],
                valuesToAnimate: {
                    opacity: {
                        from: 0,
                        to: 1
                    }
                },
                startFrame: r + 15 * o,
                duration: 12,
                easing: "linear"
            },
            t.push(l),
            l = {
                element: n[o],
                valuesToAnimate: {
                    opacity: {
                        from: 1,
                        to: 0
                    }
                },
                startFrame: r + 135 + 15 * o,
                duration: 165,
                easing: "linear"
            },
            t.push(l)
        }
        for (var u = (0, a.querySelector)(".home-header__animation_type_interference-blue"), c = (0, a.querySelectorAll)(".c", u), f = 50, o = 0; o < c.length; o++) {
            var l = {
                element: c[o],
                valuesToAnimate: {
                    r: {
                        from: [0],
                        to: [250]
                    }
                },
                startFrame: f + 15 * o,
                duration: 300,
                easing: "linear"
            };
            t.push(l),
            l = {
                element: c[o],
                valuesToAnimate: {
                    opacity: {
                        from: 0,
                        to: 1
                    }
                },
                startFrame: f + 15 * o,
                duration: 12,
                easing: "linear"
            },
            t.push(l),
            l = {
                element: c[o],
                valuesToAnimate: {
                    stroke: {
                        from: [255, 255, 255],
                        to: [37, 173, 255]
                    }
                },
                startFrame: f + 15 * o,
                duration: 80,
                easing: "linear"
            },
            t.push(l),
            l = {
                element: c[o],
                valuesToAnimate: {
                    opacity: {
                        from: 1,
                        to: 0
                    }
                },
                startFrame: f + 135 + 15 * o,
                duration: 165,
                easing: "linear"
            },
            t.push(l)
        }
        return new s["default"]({
            svgElementSelector: ".home-header__animation_type_interference-yellow",
            baseCSSClass: "home-header__animation",
            animations: t,
            useBlendMode: !1,
            before: function() {
                u.classList.add("home-header__animation_active")
            },
            after: function(t) {
                u.classList.remove("home-header__animation_active"),
                e.after(t)
            },
            slow: e.slow
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(10),
    o = i(72),
    s = n(o);
    t.interference = r
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e) {
        var t = (0, a.querySelector)(".home-header__animation_type_crosses"),
        i = (0, a.querySelectorAll)(".group", t),
        n = 350,
        r = 4;
        t.classList.add("home-header__animation_mode_measure");
        for (var o = [], l = 0, u = 0; u < i.length; u++) for (var c = i[u], f = (0, a.querySelectorAll)("g.cross", c), h = 0; h < f.length; h++) {
            var d = f[h],
            p = {
                x: d.getBBox().x + d.getBBox().width / 2,
                y: d.getBBox().y + d.getBBox().height / 2
            };
            o.push({
                element: d,
                valuesToAnimate: {
                    translate: [0, 0]
                },
                startFrame: 10 * l,
                duration: 65,
                easing: "easeOutExpo"
            }),
            o.push({
                element: d,
                valuesToAnimate: {
                    translate: {
                        from: [0, 0],
                        to: [p.x, p.y]
                    },
                    scale: [0]
                },
                startFrame: n + r * l,
                duration: 87,
                easing: "easeInExpo"
            }),
            o.push({
                element: d,
                valuesToAnimate: {
                    opacity: {
                        from: [1],
                        to: [p.x, p.y]
                    }
                },
                startFrame: n + r * l,
                duration: 87,
                easing: "easeOutExpo"
            }),
            l++
        }
        var m = 190,
        v = 225;
        o.push({
            element: ".circle.circle_green",
            valuesToAnimate: {
                scale: [1],
                translate: [0, 0]
            },
            startFrame: m,
            duration: 40,
            easing: "easeOutExpo"
        });
        var y = (0, a.querySelector)(".group-2 .cross-inner", t),
        _ = {
            x: y.getBBox().x + y.getBBox().width / 2,
            y: y.getBBox().y + y.getBBox().height / 2
        };
        o.push({
            element: y,
            valuesToAnimate: {
                scale: {
                    from: [1],
                    to: [.7]
                },
                translate: {
                    from: [ - 53, 49],
                    to: [ - 53 + -_.x * (.7 - 1), 49 + -_.y * (.7 - 1)]
                }
            },
            startFrame: m,
            duration: 40,
            easing: "easeOutExpo"
        }),
        o.push({
            element: ".circle.circle_green",
            valuesToAnimate: {
                opacity: [1]
            },
            startFrame: m,
            duration: 40,
            easing: "linear"
        }),
        o.push({
            element: ".circle.circle_green",
            valuesToAnimate: {
                fill: "#63e98f"
            },
            startFrame: m + 40,
            duration: 30,
            easing: "linear"
        }),
        o.push({
            element: ".circle.circle_red",
            valuesToAnimate: {
                scale: [1],
                translate: [0, 0]
            },
            startFrame: v,
            duration: 40,
            easing: "easeOutExpo"
        });
        var g = (0, a.querySelector)(".group-4 .cross-inner", t),
        O = {
            x: g.getBBox().x + g.getBBox().width / 2,
            y: g.getBBox().y + g.getBBox().height / 2
        };
        o.push({
            element: g,
            valuesToAnimate: {
                scale: {
                    from: [1],
                    to: [.7]
                },
                translate: {
                    from: [ - 54, 44],
                    to: [ - 54 + -O.x * (.7 - 1), 44 + -O.y * (.7 - 1)]
                }
            },
            startFrame: v,
            duration: 40,
            easing: "easeOutExpo"
        }),
        o.push({
            element: ".circle.circle_red",
            valuesToAnimate: {
                opacity: [1]
            },
            startFrame: v,
            duration: 40,
            easing: "linear"
        }),
        o.push({
            element: ".circle.circle_red",
            valuesToAnimate: {
                fill: "#fc4d3c"
            },
            startFrame: v + 40,
            duration: 30,
            easing: "linear"
        });
        var b = new s["default"]({
            svgElementSelector: ".home-header__animation_type_crosses",
            baseCSSClass: "home-header__animation",
            animations: o,
            useBlendMode: !1,
            after: e.after,
            slow: e.slow
        });
        return t.classList.remove("home-header__animation_mode_measure"),
        b
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(10),
    o = i(72),
    s = n(o);
    t.crosses = r
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e) {
        for (var t = [], i = (0, a.querySelector)(".home-header__animation_type_lines-and-dots"), n = [{
            selector: ".dot.dot-1",
            startFrame: 85
        },
        {
            selector: ".dot.dot-2",
            startFrame: 0
        },
        {
            selector: ".dot.dot-3",
            startFrame: 125
        },
        {
            selector: ".dot.dot-4",
            startFrame: 30
        },
        {
            selector: ".dot.dot-5",
            startFrame: 245
        },
        {
            selector: ".dot.dot-6",
            startFrame: 150
        },
        {
            selector: ".dot.dot-7",
            startFrame: 210
        },
        {
            selector: ".dot.dot-8",
            startFrame: 260
        },
        {
            selector: ".dot.dot-9",
            startFrame: 290
        }], r = 0; r < n.length; r++) {
            var o = n[r];
            t.push({
                element: o.selector,
                valuesToAnimate: {
                    opacity: {
                        from: 0,
                        to: 1
                    }
                },
                startFrame: o.startFrame,
                duration: 55,
                easing: "linear"
            })
        }
        t.push({
            element: ".line-wrap.line-wrap-1",
            valuesToAnimate: {
                translate: [0, 0]
            },
            startFrame: 0,
            duration: 205,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-1 .line",
            valuesToAnimate: {
                translate: [0, 0],
                scale: [1, 1]
            },
            startFrame: 0,
            duration: 205,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-1 .line-dot-right",
            valuesToAnimate: {
                translate: [0, 0]
            },
            startFrame: 0,
            duration: 205,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-2",
            valuesToAnimate: {
                translate: [0, 0]
            },
            startFrame: 70,
            duration: 210,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-2 .line",
            valuesToAnimate: {
                translate: [0, 0],
                scale: [1, 1]
            },
            startFrame: 70,
            duration: 210,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-2 .line-dot-right",
            valuesToAnimate: {
                translate: [0, 0]
            },
            startFrame: 70,
            duration: 210,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-3",
            valuesToAnimate: {
                translate: [0, 0]
            },
            startFrame: 30,
            duration: 230,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-3 .line",
            valuesToAnimate: {
                translate: [0, 0],
                scale: [1, 1]
            },
            startFrame: 30,
            duration: 230,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-3 .line-dot-right",
            valuesToAnimate: {
                translate: [0, 0]
            },
            startFrame: 30,
            duration: 230,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-4",
            valuesToAnimate: {
                translate: [0, 0]
            },
            startFrame: 120,
            duration: 210,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-4 .line",
            valuesToAnimate: {
                translate: [0, 0],
                scale: [1, 1]
            },
            startFrame: 120,
            duration: 210,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-4 .line-dot-right",
            valuesToAnimate: {
                translate: [0, 0]
            },
            startFrame: 120,
            duration: 210,
            easing: "easeOutQuint"
        }),
        t.push({
            element: ".line-wrap.line-wrap-4 .line-center",
            valuesToAnimate: {
                opacity: 0
            },
            startFrame: 265,
            duration: 230,
            easing: "linear"
        });
        for (var l = (0, a.querySelectorAll)(".dot-red, .line", i), u = (0, a.querySelectorAll)(".dot-yellow", i), c = (0, a.querySelectorAll)(".dot-blue", i), r = 0; r < l.length; r++) {
            var f = l[r];
            t.push({
                element: f,
                valuesToAnimate: {
                    opacity: 0
                },
                startFrame: 360,
                duration: 36,
                easing: "linear"
            })
        }
        for (var r = 0; r < u.length; r++) {
            var f = u[r];
            t.push({
                element: f,
                valuesToAnimate: {
                    opacity: 0
                },
                startFrame: 374,
                duration: 36,
                easing: "linear"
            })
        }
        for (var r = 0; r < c.length; r++) {
            var f = c[r];
            t.push({
                element: f,
                valuesToAnimate: {
                    opacity: 0
                },
                startFrame: 390,
                duration: 36,
                easing: "linear"
            })
        }
        return new s["default"]({
            svgElementSelector: ".home-header__animation_type_lines-and-dots",
            baseCSSClass: "home-header__animation",
            animations: t,
            useBlendMode: !1,
            after: e.after,
            slow: e.slow
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(10),
    o = i(72),
    s = n(o);
    t.linesAndDots = r
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e) {
        function t(e) {
            var t = [],
            i = (0, l.arrayShuffle)(e),
            n = Math.floor(e.length / 2);
            this && !this.settings.isMeasureMode && (n = Math.floor(Math.random() * i.length) + 1),
            i = i.slice(0, n);
            for (var r = 0; r < i.length; r++) {
                var a = i[r],
                o = r + 1;
                t.push({
                    element: a,
                    valuesToAnimate: {
                        opacity: {
                            from: 0,
                            to: 1
                        }
                    },
                    startFrame: r * u,
                    duration: 1,
                    easing: "linear"
                }),
                t.push({
                    element: a,
                    valuesToAnimate: {
                        opacity: {
                            from: 1,
                            to: 0
                        }
                    },
                    startFrame: o * u,
                    duration: 1,
                    easing: "linear"
                })
            }
            return t
        }
        var i = ".home-header__animation_type_glitch",
        n = (0, a.querySelector)(i),
        r = (0, a.querySelectorAll)(".glitch-layer", n),
        o = 2,
        u = o + 1;
        return new s["default"]({
            svgElementSelector: i,
            baseCSSClass: "home-header__animation",
            animations: t(r),
            useBlendMode: !1,
            before: function() {
                this.settings.animations = t.call(this, r),
                this._fillAnimationsCache(this.settings.animations)
            },
            after: e.after,
            slow: e.slow
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(10),
    o = i(72),
    s = n(o),
    l = i(74);
    t.glitch = r
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e) {
        var t = {
            width: window.innerWidth,
            height: window.innerHeight
        },
        i = ({
            x: t.width / 2,
            y: t.height - 300
        },
        []),
        n = 40,
        r = {
            scaleInOffset: n,
            fadeInOffset: n,
            fadeInDuration: 20,
            scaleOutOffset: 178,
            scaleOutDuration: 42,
            scaleInDuration: 138,
            scaleFactor: 3.5,
            scaleOutFactor: 10
        },
        o = 20,
        l = {
            scaleInOffset: o,
            fadeInOffset: o,
            fadeInDuration: 20,
            scaleOutOffset: 154,
            scaleOutDuration: 42,
            scaleInDuration: 134,
            scaleFactor: 5,
            scaleOutFactor: 25
        },
        u = 0,
        c = {
            scaleInOffset: u,
            fadeInOffset: u,
            fadeInDuration: 20,
            scaleOutOffset: 130,
            scaleOutDuration: 42,
            scaleInDuration: 130,
            scaleFactor: 4.5,
            scaleOutFactor: 20
        },
        f = (0, a.querySelector)(".home-header__animation_type_scaling-blocks .block-1"),
        h = (0, a.querySelector)(".home-header__animation_type_scaling-blocks .block-2"),
        d = (0, a.querySelector)(".home-header__animation_type_scaling-blocks .block-3"),
        p = {
            x: 971.4,
            y: 759.4
        };
        return i.push({
            element: f,
            valuesToAnimate: {
                translate: {
                    from: [0, 0],
                    to: [ - p.x * (r.scaleFactor - 1), -p.y * (r.scaleFactor - 1)]
                },
                scale: {
                    from: [1],
                    to: [r.scaleFactor]
                }
            },
            startFrame: r.scaleInOffset,
            duration: r.scaleInDuration,
            easing: "easeOutExpo"
        }),
        i.push({
            element: f,
            valuesToAnimate: {
                opacity: {
                    from: 0,
                    to: .6
                }
            },
            startFrame: r.fadeInOffset,
            duration: r.fadeInDuration,
            easing: "linear"
        }),
        i.push({
            element: f,
            valuesToAnimate: {
                translate: {
                    from: [ - p.x * (r.scaleFactor - 1), -p.y * (r.scaleFactor - 1)],
                    to: [ - p.x * (r.scaleOutFactor - 1), -p.y * (r.scaleOutFactor - 1)]
                },
                scale: {
                    from: [r.scaleFactor],
                    to: [r.scaleOutFactor]
                }
            },
            startFrame: r.scaleOutOffset,
            duration: r.scaleOutDuration,
            easing: "easeOutQuint"
        }),
        i.push({
            element: h,
            valuesToAnimate: {
                translate: {
                    from: [0, 0],
                    to: [ - p.x * (l.scaleFactor - 1), -p.y * (l.scaleFactor - 1)]
                },
                scale: {
                    from: [1],
                    to: [l.scaleFactor]
                }
            },
            startFrame: l.scaleInOffset,
            duration: l.scaleInDuration,
            easing: "easeOutExpo"
        }),
        i.push({
            element: h,
            valuesToAnimate: {
                opacity: {
                    from: 0,
                    to: .6
                }
            },
            startFrame: l.fadeInOffset,
            duration: l.fadeInDuration,
            easing: "linear"
        }),
        i.push({
            element: h,
            valuesToAnimate: {
                translate: {
                    from: [ - p.x * (l.scaleFactor - 1), -p.y * (l.scaleFactor - 1)],
                    to: [ - p.x * (l.scaleOutFactor - 1), -p.y * (l.scaleOutFactor - 1)]
                },
                scale: {
                    from: [l.scaleFactor],
                    to: [l.scaleOutFactor]
                }
            },
            startFrame: l.scaleOutOffset,
            duration: l.scaleOutDuration,
            easing: "easeOutQuint"
        }),
        i.push({
            element: d,
            valuesToAnimate: {
                translate: {
                    from: [0, 0],
                    to: [ - p.x * (c.scaleFactor - 1), -p.y * (c.scaleFactor - 1)]
                },
                scale: {
                    from: [1],
                    to: [c.scaleFactor]
                }
            },
            startFrame: c.scaleInOffset,
            duration: c.scaleInDuration,
            easing: "easeOutExpo"
        }),
        i.push({
            element: d,
            valuesToAnimate: {
                opacity: {
                    from: 0,
                    to: .6
                }
            },
            startFrame: c.fadeInOffset,
            duration: c.fadeInDuration,
            easing: "linear"
        }),
        i.push({
            element: d,
            valuesToAnimate: {
                translate: {
                    from: [ - p.x * (c.scaleFactor - 1), -p.y * (c.scaleFactor - 1)],
                    to: [ - p.x * (c.scaleOutFactor - 1), -p.y * (c.scaleOutFactor - 1)]
                },
                scale: {
                    from: [c.scaleFactor],
                    to: [c.scaleOutFactor]
                }
            },
            startFrame: c.scaleOutOffset,
            duration: c.scaleOutDuration,
            easing: "easeOutQuint"
        }),
        new s["default"]({
            svgElementSelector: ".home-header__animation_type_scaling-blocks",
            baseCSSClass: "home-header__animation",
            animations: i,
            useBlendMode: !1,
            after: e.after,
            slow: e.slow
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(10),
    o = i(72),
    s = n(o),
    l = i(22);
    n(l);
    t.scalingBlocks = r
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(22),
    u = n(l),
    c = i(10),
    f = i(17),
    h = i(48),
    d = n(h),
    p = i(49),
    m = n(p),
    v = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.START_POSITION = 100,
                this.SPEEDUP_RATIO_ON_MOVEOUT = 1.5
            }
        },
        {
            key: "moveIn",
            value: function(e) {
                var t = 1 - (0, f.clamp)(e, 0, 1),
                i = this.START_POSITION * t;
                this.setStyle(i)
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                var t = (0, f.clamp)(e, 0, 1),
                i = -1 * this.SPEEDUP_RATIO_ON_MOVEOUT * this.START_POSITION * t;
                this.setStyle(i)
            }
        },
        {
            key: "setStyle",
            value: function(e) {
                this.view.el.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)"
            }
        }]),
        t
    } (m["default"]),
    y = function() {
        function e() {
            r(this, e);
            var t = (0, c.querySelector)(".home-areas"),
            i = (0, c.querySelector)(".home-areas__itm", t);
            this.phoneView = new d["default"]((0, c.querySelector)(".home-areas__device_startups", t), i, new v),
            this.phoneSonyView = new d["default"]((0, c.querySelector)(".home-areas__device_sony", t), (0, c.querySelector)(".home-areas__itm_sony", t), new v)
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                this.phoneView.update(e),
                this.phoneSonyView.update(e)
            }
        }]),
        e
    } ();
    t["default"] = y,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(22),
    u = (n(l), i(48)),
    c = n(u),
    f = i(49),
    h = n(f),
    d = i(10),
    p = i(46),
    m = n(p),
    v = i(17),
    y = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                var e = this.view.el;
                this.speedTestOverlay = (0, d.querySelector)(".home-speedtest__overlay", e),
                this.oceanOverlay = (0, d.querySelector)(".home-approach__overlay"),
                this.oceanOverlayBlack = (0, d.querySelector)(".home-approach__overlay_black"),
                this.fixedSection = (0, d.querySelector)(".section-fixed__bg_approach"),
                this.video = (0, d.querySelector)(".home-approach .section-fixed__bg video"),
                this._cachedSpeedTestOverlayOpacity = this.speedTestOverlay.style.opacity,
                this._cachedOceanOverlayOpacity = this.oceanOverlay.style.opacity,
                this._cachedOceanOverlayBlackOpacity = this.oceanOverlayBlack.style.opacity,
                this._hasMovedToGPU = !1,
                this._videoPaused = !0
            }
        },
        {
            key: "moveIn",
            value: function(e) {
                e >= .5 ? this.moveToGPU() : this.deleteFromGPU(),
                1 >= e && this.reset()
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                if (.23 > e) this.reset();
                else if (e >= .23 && .34 >= e) {
                    var t = (0, v.clamp)((0, v.map)(e, .23, .34, 0, 1), 0, 1);
                    this.setSpeedTestOverlayStyle(t),
                    this.setOceanOverlayStyle(1 - t),
                    this.setOceanBlackOverlayStyle(1),
                    this.pauseOceanVideo(),
                    this.setAbsolutePositioning()
                } else if (e > .34 && .8 > e) this.setSpeedTestOverlayStyle(1),
                this.setOceanOverlayStyle(0),
                this.setOceanBlackOverlayStyle(1),
                this.pauseOceanVideo(),
                this.setAbsolutePositioning();
                else if (e >= .8) {
                    var t = (0, v.clamp)((0, v.map)(e, .8, 1, 0, 1), 0, 1);
                    this.setSpeedTestOverlayStyle(1),
                    this.setOceanOverlayStyle(0),
                    this.setOceanBlackOverlayStyle(1 - t),
                    this.removeAbsolutePositioning(),
                    this.playOceanVideo()
                }
            }
        },
        {
            key: "setAbsolutePositioning",
            value: function() {
                this.fixedSection.style.position = "absolute"
            }
        },
        {
            key: "removeAbsolutePositioning",
            value: function() {
                this.fixedSection.style.position = "fixed"
            }
        },
        {
            key: "playOceanVideo",
            value: function() {
                this._videoPaused && this.video.paused && (this.video.play(), this._videoPaused = !1)
            }
        },
        {
            key: "pauseOceanVideo",
            value: function() {
                this._videoPaused || this.video.paused || (this.video.pause(), this._videoPaused = !0)
            }
        },
        {
            key: "setSpeedTestOverlayStyle",
            value: function(e) {
                this._cachedSpeedTestOverlayOpacity !== e && (this.speedTestOverlay.style.opacity = e)
            }
        },
        {
            key: "setOceanOverlayStyle",
            value: function(e) {
                this._cachedOceanOverlayOpacity !== e && (this.oceanOverlay.style.opacity = e)
            }
        },
        {
            key: "setOceanBlackOverlayStyle",
            value: function(e) {
                this._cachedOceanOverlayBlackOpacity !== e && (this.oceanOverlayBlack.style.opacity = e)
            }
        },
        {
            key: "reset",
            value: function() {
                this.setSpeedTestOverlayStyle(0),
                this.setOceanOverlayStyle(1),
                this.setOceanBlackOverlayStyle(1),
                this.setAbsolutePositioning(),
                this.pauseOceanVideo()
            }
        },
        {
            key: "moveToGPU",
            value: function() {
                this._hasMovedToGPU || (this.speedTestOverlay.classList.add("j-move-to-gpu"), this.oceanOverlay.classList.add("j-move-to-gpu"), this.oceanOverlayBlack.classList.add("j-move-to-gpu"), this._hasMovedToGPU = !0)
            }
        },
        {
            key: "deleteFromGPU",
            value: function() {
                this._hasMovedToGPU && (this.speedTestOverlay.classList.remove("j-move-to-gpu"), this.oceanOverlay.classList.remove("j-move-to-gpu"), this.oceanOverlayBlack.classList.remove("j-move-to-gpu"), this._hasMovedToGPU = !1)
            }
        }]),
        t
    } (h["default"]),
    _ = function() {
        function e() {
            r(this, e);
            var t = (0, d.querySelector)(".home-speedtest");
            this.stSection = new c["default"](t, t, new y)
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                this.stSection.update(e)
            }
        }]),
        e
    } ();
    t["default"] = function() {
        return new m["default"](new _)
    },
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = i(22),
    s = n(o),
    l = i(28),
    u = n(l),
    c = i(11),
    f = n(c),
    h = i(17),
    d = i(14),
    p = function() {
        function e() {
            r(this, e),
            this.spinrillaEl = (0, f["default"])(".home-spinrilla__cover"),
            this.spinrillaScreens = (0, f["default"])(".home-spinrilla__screens"),
            this.spinrillaScreenTracker = (0, f["default"])(".home-spinrilla__screen"),
            this.speedtestSectionEl = (0, f["default"])(".home-speedtest"),
            this.speedtestLayer = (0, f["default"])(".home-speedtest__layer"),
            this.speedtestTxt1 = (0, f["default"])(".j-speedtest-txt__1"),
            this.speedtestTxt2 = (0, f["default"])(".j-speedtest-txt__2"),
            this.speedtestTxt3 = (0, f["default"])(".home-speedtest__quote"),
            this.approachSectionEl = (0, f["default"])(".home-approach"),
            this.approachTitleEl = (0, f["default"])(".home-approach__title"),
            this.approachTextEl = (0, f["default"])(".home-approach-text"),
            this.section = {
                spinrilla: (0, f["default"])(".home-spinrilla"),
                areUsed: (0, f["default"])(".home-are-used")
            },
            this._hasMovedToGPU = [],
            u["default"].on("update", this.onScroll.bind(this))
        }
        return a(e, [{
            key: "onScroll",
            value: function() {
                var e = {
                    spinrilla: {
                        top: 1 - 70 * this.section.spinrilla.getBoundingClientRect().top / window.innerHeight / 100,
                        bottom: (0, h.clamp)((this.section.spinrilla.getBoundingClientRect().bottom - 500) / 4 / 100, 0, 1),
                        screens: (0, h.clamp)((this.spinrillaScreenTracker.getBoundingClientRect().bottom - 200) / 4 / 100, 0, 1)
                    },
                    speedtest: (0, h.clamp)(1 - 100 * this.speedtestSectionEl.getBoundingClientRect().bottom / window.innerHeight / 400, 0, 1),
                    speedtestText: {
                        txt1: (0, h.clamp)((this.speedtestTxt1.getBoundingClientRect().bottom - 50) / 4 / 100, 0, 1),
                        txt3: (0, h.clamp)((this.speedtestTxt3.getBoundingClientRect().bottom - 200) / 4 / 100, 0, 1)
                    },
                    approach: (0, h.clamp)(this.approachSectionEl.getBoundingClientRect().top / 150, 0, 1),
                    approachTitle: (0, h.clamp)((this.approachTitleEl.getBoundingClientRect().bottom - 350) / 4 / 100, 0, 1),
                    approachText: (0, h.clamp)((this.approachTextEl.getBoundingClientRect().bottom - 200) / 4 / 100, 0, 1)
                };
                if (e.spinrilla.bottom > 0 && e.spinrilla.top >= 0 && "fixed" !== this.spinrillaEl.style.position && (this.spinrillaEl.style.position = "fixed"), (0 === e.spinrilla.bottom || e.spinrilla.top <= -0 && "relative" !== this.spinrillaEl.style.position) && (this.spinrillaEl.style.position = "relative"), e.spinrilla.top < 1 ? e.spinrilla.top >= 0 && e.spinrilla.top <= 1 && (this.moveToGPU(this.spinrillaEl), this.setOpacity(this.spinrillaEl, e.spinrilla.top), this.section.spinrilla.style.backgroundColor = "#101010") : e.spinrilla.bottom >= 0 && e.spinrilla.bottom <= 1 && (this.moveToGPU(this.spinrillaEl), this.moveToGPU(this.spinrillaScreens), this.setOpacity(this.spinrillaEl, e.spinrilla.bottom), this.setOpacity(this.spinrillaScreens, e.spinrilla.screens), this.section.spinrilla.style.backgroundColor = "#0A0C1F"), 0 == this.spinrillaEl.style.opacity && document.body.clientWidth > 1024) {
                    this.speedtestSectionEl.style.zIndex = 3;
                    var t = (0, h.clamp)(this.speedtestLayer.getBoundingClientRect().top / 100, 0, 1);
                    this.setOpacity(this.speedtestLayer, 1 - t)
                } else this.speedtestSectionEl.style.zIndex = 1;
                this.approachTitleEl.style.opacity >= 0 && this.approachTitleEl.style.opacity <= 1 && this.moveToGPU(this.approachTitleEl),
                e.approachText >= 0 && e.approachText <= 1 && (this.moveToGPU(this.approachTextEl), this.setOpacity(this.approachTextEl, e.approachText)),
                e.speedtestText.txt1 >= 0 && e.speedtestText.txt1 <= 1 && (this.moveToGPU(this.speedtestTxt1), this.setOpacity(this.speedtestTxt1, e.speedtestText.txt1)),
                e.speedtestText.txt3 >= 0 && e.speedtestText.txt3 <= 1 && (this.moveToGPU(this.speedtestTxt3), this.setOpacity(this.speedtestTxt3, e.speedtestText.txt3)),
                (0, d.isInViewPort)(this.spinrillaEl) || this.deleteFromGPU(this.spinrillaEl),
                (0, d.isInViewPort)(this.spinrillaScreens) || this.deleteFromGPU(this.spinrillaScreens),
                (0, d.isInViewPort)(this.approachTitleEl) || this.deleteFromGPU(this.approachTitleEl),
                (0, d.isInViewPort)(this.approachTextEl) || this.deleteFromGPU(this.approachTextEl),
                (0, d.isInViewPort)(this.speedtestTxt1) || this.deleteFromGPU(this.speedtestTxt1),
                (0, d.isInViewPort)(this.speedtestTxt3) || this.deleteFromGPU(this.speedtestTxt3)
            }
        },
        {
            key: "setOpacity",
            value: function(e, t) {
                e.style.opacity = t
            }
        },
        {
            key: "setColor",
            value: function(e, t) {
                e.style.backgroundColor = "rgb(" + t.join(",") + ")"
            }
        },
        {
            key: "moveToGPU",
            value: function(e) {
                this._hasMovedToGPU[e.className] || (e.style[(0, s["default"])("transform")] = "translate3d(0, 0, 0)", this._hasMovedToGPU[e.className] = !0)
            }
        },
        {
            key: "deleteFromGPU",
            value: function(e) {
                this._hasMovedToGPU[e.className] && (e.style[(0, s["default"])("transform")] = "none", this._hasMovedToGPU[e.className] = !1)
            }
        }]),
        e
    } ();
    t["default"] = p,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(22),
    u = n(l),
    c = i(10),
    f = i(15),
    h = i(14),
    d = i(17),
    p = i(48),
    m = n(p),
    v = i(49),
    y = n(v),
    _ = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.START_POSITION = -50,
                this.SPEEDUP_RATIO_ON_MOVEOUT = 1.7
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                var t = (0, d.clamp)(e, 0, 1),
                i = this.SPEEDUP_RATIO_ON_MOVEOUT * this.START_POSITION * t;
                this.setStyle(i)
            }
        },
        {
            key: "setStyle",
            value: function(e) {
                this.view.el.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)"
            }
        }]),
        t
    } (y["default"]),
    g = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.START_POSITION = -150,
                this.SPEEDUP_RATIO_ON_MOVEOUT = 1.5
            }
        },
        {
            key: "moveIn",
            value: function(e) {
                var t = 1 - (0, d.clamp)(e, 0, 1),
                i = -1 * this.START_POSITION - this.START_POSITION * t;
                this.setStyle(i)
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                var t = (0, d.clamp)(e, 0, 1),
                i = -1 * ( - 1 * this.START_POSITION + this.START_POSITION * this.SPEEDUP_RATIO_ON_MOVEOUT * t);
                this.setStyle(i)
            }
        },
        {
            key: "setStyle",
            value: function(e) {
                this.view.el.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)"
            }
        }]),
        t
    } (y["default"]),
    O = function() {
        function e(t) {
            r(this, e),
            this.el = t,
            this.bbEl = null,
            this.changeRatio = 1
        }
        return o(e, [{
            key: "update",
            value: function() {
                var e = this; [].forEach.call(this.el,
                function(t) {
                    e.bbEl = (0, f.boundingBox)(t).top,
                    e.init(t)
                })
            }
        },
        {
            key: "condition",
            value: function(e) {
                var t = window.innerHeight - window.innerHeight / (100 / 85);
                return this.bbEl <= t
            }
        },
        {
            key: "condition2",
            value: function(e) {
                var t = window.innerHeight - window.innerHeight / 100;
                return this.bbEl <= t
            }
        },
        {
            key: "init",
            value: function(e) {
                if ((0, h.isInViewPort)(e)) if (this.condition(e)) {
                    e.classList.contains("j-visible") && e.classList.remove("j-visible");
                    var t = (0, d.clamp)(e.getBoundingClientRect().top / 100, 0, 1);
                    e.style.opacity = t
                } else this.condition2(e) && (e.style.opacity = 1);
                else e.classList.remove("j-visible")
            }
        }]),
        e
    } (),
    b = function() {
        function e() {
            r(this, e);
            var t = (0, c.querySelector)(".page"),
            i = {
                trackingSection: (0, c.querySelector)(".j-spinrilla-parallax-trigger", t),
                opacityTrigger: (0, c.querySelectorAll)(".j-opacityChanger-trigger"),
                spinrillaCover: (0, c.querySelector)(".home-spinrilla__cover", t),
                spinrillaText: (0, c.querySelector)(".home-spinrilla__text", t)
            };
            this.backgroundView = new m["default"](i.spinrillaCover, i.trackingSection, new _),
            this.textView = new m["default"](i.spinrillaText, i.trackingSection, new g),
            this.opacityChanger = new O(i.opacityTrigger)
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                this.backgroundView.update(e),
                this.textView.update(e),
                this.opacityChanger.update()
            }
        }]),
        e
    } ();
    t["default"] = b,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(22),
    u = n(l),
    c = i(10),
    f = i(17),
    h = i(48),
    d = n(h),
    p = i(49),
    m = n(p),
    v = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.layer1 = (0, c.querySelector)(".home-speedtest__layer_1", this.view.el),
                this.layer2 = (0, c.querySelector)(".home-speedtest__layer_2", this.view.el),
                this.layer3 = (0, c.querySelector)(".home-speedtest__layer_3", this.view.el),
                this.layer4 = (0, c.querySelector)(".home-speedtest__layer_4", this.view.el),
                this.START_POSITION = 400,
                this.SPEEDUP_RATIO_ON_MOVEOUT = 1.5
            }
        },
        {
            key: "moveIn",
            value: function(e) {
                if (e > 0) {
                    this.moveToGPU();
                    var t = 1 - (0, f.clamp)(e, 0, 1),
                    i = this.START_POSITION * t;
                    this.setStyle(i)
                } else this.deleteFromGPU()
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                if (e > 1.2) this.deleteFromGPU();
                else {
                    this.moveToGPU();
                    var t = (0, f.clamp)(e, 0, 1),
                    i = -1 * this.START_POSITION * t;
                    this.setStyle(i)
                }
            }
        },
        {
            key: "setStyle",
            value: function(e) {
                this.layer1.style[(0, u["default"])("transform")] = "translate3d(0, " + .2 * e + "px, 0)",
                this.layer2.style[(0, u["default"])("transform")] = "translate3d(0, " + .6 * e + "px, 0)",
                this.layer3.style[(0, u["default"])("transform")] = "translate3d(0, " + 1.2 * e + "px, 0)",
                this.layer4.style[(0, u["default"])("transform")] = "translate3d(0, " + 2 * e + "px, 0)"
            }
        },
        {
            key: "moveToGPU",
            value: function() {
                this._hasMovedToGPU || (this.layer1.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.layer2.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.layer3.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.layer4.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this._hasMovedToGPU = !0)
            }
        },
        {
            key: "deleteFromGPU",
            value: function() {
                this._hasMovedToGPU && (this.layer1.style[(0, u["default"])("transform")] = "none", this.layer2.style[(0, u["default"])("transform")] = "none", this.layer3.style[(0, u["default"])("transform")] = "none", this.layer4.style[(0, u["default"])("transform")] = "none", this._hasMovedToGPU = !1)
            }
        }]),
        t
    } (m["default"]),
    y = function() {
        function e() {
            r(this, e);
            var t = (0, c.querySelector)(".home-speedtest");
            this.speedtestSection = new d["default"](t, t, new v)
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                this.speedtestSection.update(e)
            }
        }]),
        e
    } ();
    t["default"] = y,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var r = e,
            a = t,
            o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(o)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            e = u,
            t = a,
            i = o,
            n = !0,
            s = u = void 0
        }
    },
    l = i(22),
    u = n(l),
    c = i(10),
    f = i(14),
    h = (i(17), i(48)),
    d = n(h),
    p = i(49),
    m = n(p),
    v = function(e) {
        function t() {
            r(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
        }
        return a(t, e),
        o(t, [{
            key: "init",
            value: function() {
                this.SPEEDUP_RATIO_ON_MOVEOUT = .5,
                this.trackingSection = (0, c.querySelector)(".home-footer")
            }
        },
        {
            key: "moveOut",
            value: function(e) {
                var t = (0, f.pxInViewPort)(this.trackingSection) * this.SPEEDUP_RATIO_ON_MOVEOUT;
                this.setStyle( - 1 * t)
            }
        },
        {
            key: "setStyle",
            value: function(e) {
                this.view.el.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)"
            }
        }]),
        t
    } (m["default"]),
    y = function() {
        function e() {
            r(this, e),
            this.dom = {
                clients: (0, c.querySelector)(".home-clients"),
                video: (0, c.querySelector)(".section-fixed__bg_approach"),
                oceanTracking: (0, c.querySelector)(".j-ocean-tracking")
            },
            this.videoView = new d["default"](this.dom.video, this.dom.oceanTracking, new v)
        }
        return o(e, [{
            key: "update",
            value: function(e) {
                this.videoView.update(e)
            }
        }]),
        e
    } ();
    t["default"] = y,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = i(22),
    s = n(o),
    l = i(10),
    u = i(8),
    c = function() {
        function e() {
            r(this, e),
            this.el = (0, l.querySelector)(".home-works"),
            this.blueSectionEl = (0, l.querySelector)(".home-works__bg_blue", this.el),
            this.HID_CLASS = "j-hero-bottom-hidden",
            this.LOADING_CLASS = "j-hero-loading",
            (0, u.addEventListener)(this.blueSectionEl, (0, s["default"])("transitionend"), this.onTransitionEnd.bind(this))
        }
        return a(e, [{
            key: "show",
            value: function() {
                this.el.classList.remove(this.HID_CLASS)
            }
        },
        {
            key: "onTransitionEnd",
            value: function(e) {
                this.el.classList.remove(this.LOADING_CLASS),
                this.destroy()
            }
        },
        {
            key: "destroy",
            value: function() { (0, u.removeEventListener)(this.blueSectionEl, (0, s["default"])("transitionend"), this.onTransitionEnd),
                this.el = null,
                this.HID_CLASS = null,
                this.LOADING_CLASS = null
            }
        }]),
        e
    } ();
    t["default"] = c,
    e.exports = t["default"]
}]);