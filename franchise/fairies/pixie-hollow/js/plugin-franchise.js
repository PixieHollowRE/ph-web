/*!
 * Copyright 2011 Disney Interactive Media Group. All Rights Reserved.
 */
(function(a) {
    a.cookie = function(a) {
        if (arguments[1] == undefined) {
            if (document.cookie) {
                var j = document.cookie.split(";");
                for (var k = 0; k < j.length; k++) {
                    var l = jQuery.trim(j[k]);
                    if (l.substring(0, a.length + 1) == a + "=") return decodeURIComponent(l.substring(a.length + 1))
                }
            }
            return null
        }
        var b = arguments[1] || "",
            c = arguments[2] || {},
            d = c.encode !== !1,
            e = "",
            f = c.path ? "; path=" + c.path : "; path=/",
            g = c.domain ? "; domain=" + c.domain : "",
            h = c.secure ? "; secure" : "";
        if (c.expires && typeof c.expires == "number") {
            var i = new Date;
            i.setTime(i.getTime() + c.expires * 864e5), e = "; expires=" + i.toUTCString()
        }
        document.cookie = a + "=" + (d ? encodeURIComponent(b) : b) + e + f + g + h
    }
})(jQuery);

/*!
 * Copyright 2011 Disney Interactive Media Group. All Rights Reserved.
 */
(function(a) {
    a.flashProxy = function(b, c, d, e, f) {
        if (!a.flashProxy.ready) {
            setTimeout(function() {
                a.flashProxy(b, c, d, e, f)
            }, 200);
            return !1
        }
        a.flashProxy.fn_success[a.flashProxy.count] = function(a, b) {
            e(a)
        }, a.flashProxy.fn_fail[a.flashProxy.count] = function(a, b) {
            f && f(a)
        }, a("#flash-proxy").get(0).call(b, {
            type: c.type,
            contentType: c.contentType,
            data: d,
            success: "$.flashProxy.fn_success[" + a.flashProxy.count + "]",
            fail: "$.flashProxy.fn_fail[" + a.flashProxy.count++ + "]"
        })
    }, a.flashProxy.post = function(b) {
        var c = typeof arguments[1] == "object" ? arguments[1] : {},
            d = typeof arguments[1] == "function" ? arguments[1] : typeof arguments[2] == "function" ? arguments[2] : null;
        a.flashProxy(b, {
            type: "post"
        }, c, d)
    }, a.flashProxy.get = function(b) {
        var c = typeof arguments[1] == "object" ? arguments[1] : {},
            d = typeof arguments[1] == "function" ? arguments[1] : typeof arguments[2] == "function" ? arguments[2] : null;
        a.flashProxy(b, {
            type: "get"
        }, c, d)
    }, a.flashProxy.init = function() {
        a.flashProxy.count = 1, a.flashProxy.ready = !0, a.flashProxy.fn_success = [], a.flashProxy.fn_fail = []
    }
})(jQuery);

/*!
 * Copyright 2011 Disney Interactive Media Group. All Rights Reserved.
 */
(function(a) {
    a.fn.replaceTitle = function(b) {
        a.fn.replaceTitle.count || (a.fn.replaceTitle.count = 1), a(this).each(function() {
            if (a(this).hasClass("ph-font-after")) return !0;
            b.wmode = b.wmode || "opaque";
            var c = "ph-font-flash-" + a.fn.replaceTitle.count++,
                d = a(this).html(),
                e = "0";
            a(this).html('<div id="' + c + '"></div>');
            if (a(this).css("color").substr(0, 1) == "#") e = "0x" + a(this).css("color").substr(1);
            else {
                var f = a(this).css("color").match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                delete f[0];
                for (var g = 1; g <= 3; ++g) f[g] = parseInt(f[g]).toString(16), f[g].length == 1 && (f[g] = "0" + f[g]);
                e = "0x" + f.join("")
            }
            swfobject.embedSWF(b.font, c, a(this).width(), a(this).height(), "9.0.0", null, {
                text: d,
                color: e,
                size: parseInt(a(this).css("fontSize")),
                align: a(this).css("textAlign"),
                lineHeight: parseInt(a(this).css("lineHeight")),
                width: a(this).width()
            }, {
                wmode: b.wmode
            }), a(this).addClass("ph-font-after")
        })
    }
})(jQuery);

/*!
 * Copyright 2011 Disney Interactive Media Group. All Rights Reserved.
 * Author: Michael Nightingale
 */
(function(a) {
    function j(c, d, e) {
        return '<ul id="' + c + '" style="display: none;' + (e !== undefined ? " " + e : "") + '" class="' + b.errorList + '"><li>' + (a.isArray(d) ? d.join("</li><li>") : d) + "</li></ul>"
    }

    function h() {
        var a;
        a = g(1, 999999999);
        while (e.displayUnderElement[a] !== undefined) a = g(1, 999999999);
        return a
    }

    function g(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
    var b = {
            errorList: "error-list"
        },
        c = {
            errorList: "." + b.errorList
        },
        d = "error-",
        e = {
            displayUnderElement: {}
        },
        f = 300;
    a.formError = {}, a.formError.clear = function() {
        a(c.errorList).remove(), e.displayUnderElement = {}
    }, a.formError.updatePositions = function(a) {
        function b(a) {
            var b, c, d, g, h, i;
            c = e.displayUnderElement[a], d = c.element, g = d.offset(), h = c.offsetParent.offset(), c.errorElement.css({
                top: g.top - h.top + d.outerHeight() + "px",
                left: g.left - h.left + "px"
            }), d.is(":visible") && c.errorElement.fadeIn(f)
        }
        if (a !== undefined) b(a);
        else
            for (i in e.displayUnderElement) e.displayUnderElement.hasOwnProperty(i) && b(i)
    }, a.formError.displayInsideElement = function(b, c) {
        var e = h(),
            g = d + e;
        b.prepend(j(g, c)), a("#" + g).fadeIn(f)
    }, a.formError.displayUnderElement = function(b, c) {
        var f = h(),
            g = d + f,
            i = b.offsetParent();
        i.append(j(g, c, "position : absolute;")), e.displayUnderElement[f] = {
            offsetParent: i,
            element: b,
            errorElement: a("#" + g)
        }, a.formError.updatePositions(f)
    }
})(jQuery);

/*!
 * Copyright 2011 Disney Interactive Media Group. All Rights Reserved.
 */
var Fairies = function(g) {
    var j = this;
    var d = {
        selectors: {
            frame: "#content",
            innerFrame: ".inner-content",
            changeCountry: "#countrySelect",
            navigation: "#main-nav",
            footer: "#footer"
        },
        calls: {
            international: "http://www.disneyfairies.com/index?country="
        },
        fonts: {
            pristina: {
                src: PATH.CDN + "/pixie-hollow/swf/pristina.swf",
                selector: "h1",
                wmode: "transparent"
            }
        }
    };
    var b = {};
    var h = false;
    var c = '<p class="country"><img src="' + PATH.CDN + '/pixie-hollow/img/misc/globe.png" width="37" height="36" alt="Globe"/>';
    var a = '<select id="countrySelect"><option value="default" selected="selected">Choose Country</option><option value="0">Australia</option><option value="1">Belgium</option><option value="2">Brazil</option><option value="3">Canada</option><option value="4">Denmark</option><option value="5">Disney Latino</option><option value="6">Finland</option><option value="7">France</option><option value="8">Germany</option><option value="9">India</option><option value="10">Italy</option><option value="11">Japan</option><option value="12">Netherlands</option><option value="13">Norway</option><option value="14">Russia</option><option value="15">South Africa</option><option value="16">Spain</option><option value="17">Sweden</option><option value="18">United Kingdom</option><option value="19">USA</option></select></p>';
    var e = c + a;

    function f() {
        if (typeof g == "object") {
            d = $.extend(d, g)
        }
        $("#country-selector").html(e);
        $(d.selectors.changeCountry).change(i);
        $(document).ready(function() {
            $("html").addClass("last");
            j.updateLegalFooter();
            setTimeout(j.trackBIPageLoad, 200)
        });
        if ($.cookie("CJ-30-Day")) {
            $.cookie("SOURCE", "PpPHPixCom00001", {
                path: "/",
                domain: ".go.com",
                expires: 30
            })
        }
        $.each(d.fonts, function(k, l) {
            $(l.selector).replaceTitle({
                font: l.src,
                wmode: "transparent"
            })
        })
    }

    function i(k) {
        if (this.options[this.selectedIndex].value != "default") {
            switch (this.options[this.selectedIndex].value) {
                case "0":
                    location.href = "http://www.disney.com.au/fairies/";
                    break;
                case "1":
                    location.href = "http://www.disney.be/DisneyOnline/fairies/";
                    break;
                case "2":
                    location.href = "http://www.disney.com.br/fadas/";
                    break;
                case "3":
                    location.href = "http://disney.go.com/fairies/";
                    break;
                case "4":
                    location.href = "http://www.disney.dk/DisneyOnline/fairies/";
                    break;
                case "5":
                    location.href = "http://www.disneylatino.com/hadas/index.html";
                    break;
                case "6":
                    location.href = "http://www.disney.fi/DisneyOnline/fairies/";
                    break;
                case "7":
                    location.href = "http://www.disney.fr/DisneyOnline/fairies/";
                    break;
                case "8":
                    location.href = "http://www.disney.de/DisneyOnline/fairies/";
                    break;
                case "9":
                    location.href = "http://disney.in/DisneyOnline/fairies/";
                    break;
                case "10":
                    location.href = "http://www.disney.it/DisneyOnline/fairies/";
                    break;
                case "11":
                    location.href = "http://www.disney.co.jp/DisneyOnline/fairies/";
                    break;
                case "12":
                    location.href = "http://www.disneyfairies.nl/";
                    break;
                case "13":
                    location.href = "http://www.disney.no/DisneyOnline/fairies/";
                    break;
                case "14":
                    location.href = "http://www.disney.ru/DisneyOnline/fairies/";
                    break;
                case "15":
                    location.href = "http://www.disney.co.za/DisneyChannel/fairies/";
                    break;
                case "16":
                    location.href = "http://www.disneyfairies.es/";
                    break;
                case "17":
                    location.href = "http://www.disney.se/DisneyOnline/fairies/";
                    break;
                case "18":
                    location.href = "http://www.disney.co.uk/DisneyOnline/fairies/";
                    break;
                case "19":
                    location.href = "http://disney.go.com/fairies/";
                    break;
                default:
                    location.href = "http://disney.go.com/fairies/"
            }
        }
    }
    this.preload = function(l, k) {
        $(document).ready(function() {
            setTimeout(function() {
                $(l).each(function(m) {
                    document.createElement("img").src = this
                })
            }, (k) ? k : 1000)
        })
    };
    this.getNavigationSection = function() {
        var o = "pixie-hollow-world";
        var l = "pixie-hollow";
        if (!location.href.match(o) && location.href.match(l)) {
            o = o + "/" + location.href.slice(location.href.indexOf(l) + l.length + 1, location.href.length - 1)
        }
        var m = "pixie-central";
        var n = "blog.pixiehollow.go.com";
        var k = "/blog/";
        if (location.href.indexOf("events") >= 0 || location.href.indexOf("nevernews") >= 0 || location.href.indexOf("winners") >= 0) {
            m = m + "/" + location.href.slice(location.href.indexOf(n) + n.length + k.length, location.href.length - 1)
        } else {
            if (location.href.indexOf("/pixie-central/") >= 0) {
                m = m + "/" + location.href.slice(location.href.indexOf(m) + m.length + 1, location.href.length - 1)
            }
        }
        return (location.href.indexOf("/pixie-central/") >= 0 || location.href.indexOf("events") >= 0 || location.href.indexOf("nevernews") >= 0 || location.href.indexOf("winners") >= 0) ? m : o
    };
    this.getQueryString = function(k) {
        var o = [],
            n = [];
        if (!h) {
            n = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
            for (var l = 0, m = n.length; l < m; l++) {
                o = n[l].split("=");
                b[o[0]] = o[1]
            }
            h = true
        }
        return k !== undefined ? b[k] : b
    };
    this.isInIFrame = function() {
        return (top != window)
    };
    this.resizeNavigation = function(l) {
        var k = 0;
        $(d.selectors.navigation).height(l);
        if ($("#footer").position().top < l) {
            k = l - $("#content").outerHeight()
        } else {
            k = 20
        }
        $("#footer").animate({
            marginTop: k
        }, 200)
    };
    this.trackPage = function(k, m) {
        return false;
        if (window.cto) {
            var l = window.cto.pageName;
            var n = window.cto.siteSection;
            window.cto.pageName = k;
            window.cto.siteSection = m;
            window.cto.track();
            window.cto.pageName = l;
            window.cto.siteSection = n
        }
    };
    this.updateLegalFooter = function() {
        if (location.href.indexOf("/game/") >= 0 || location.href.indexOf("/create/") >= 0 || location.href.indexOf("/pixie-pages/") >= 0 || $("#footer").offset() == null) {
            $("#footer .legal").show();
            return
        }
        var k = 1070 - $("#footer").offset().top - $("#footer").height();
        if (k > 0) {
            $("#footer .legal").css("margin-top", k)
        }
        $("#footer .legal").show()
    };
    this.trackBIPageLoad = function() {
        j.API.listen("whoAmI", function() {
            var z = ($.cookie("SWID")) ? $.cookie("SWID") : "";
            var t = PROTOCOL + "://weblogger-dynamic-lb.playdom.com/flash_log?",
                r = "dis",
                k = "ney",
                s = "app=" + ((PATH.root == ("http://" + r + k + ".go.com/fairies")) ? "pixie_hollow" : "qa_pixie_hollow"),
                o = "&tag=clicked_link",
                w = "&user_id=" + ((j.API.isLoggedIn()) ? z.replace('"', "") : "-1"),
                v = "&app_locale=en_US",
                n = "&network=c",
                m = "&view_network=c",
                y = "&tracking_code=" + (j.getQueryString("source") == undefined ? "" : j.getQueryString("source")),
                u = "&is_new_user=0",
                q = "&referrer_url=" + document.referrer,
                x = "&track_url=" + document.URL;
            var l = $.cookie("CTID");
            if (l == null) {
                l = Math.round(Math.random() * 500000000000);
                $.cookie("CTID", l)
            }
            var p = "&transaction_id=" + l;
            w = w.replace('"', "");
            (new Image()).src = t + s + o + w + v + n + m + y + u + q + p + x
        })
    };
    f.call(j)
};

var API = function(h) {
    var m = this;
    var s = {
        selectors: {
            memberInfo: "#header .member-info-content",
            logout: "#header .member-info-content .logout",
            login: "#header .member-info-content .login",
            loginPopup: ".popup-manager",
            userName: "#header .user-name",
            accountManager: "#header .account-manager"
        },
        calls: {
            whoAmI: PATH.SSLAPI + "/WhoAmIRequest?pd=true&additional_info",
            logout: PATH.API + "/AccountLogoutRequest",
            lookupAccount: PATH.DXD + "/lookupAccount",
            fairies: PATH.API + "/FairiesProfileRequest",
            chooseFairy: PATH.API + "/ChooseFairyRequest",
            changeDName: PATH.API + "/SubmitDNameRequest",
            agreeToTOU: PATH.DXD + "/updateAccount",
            sessionAgreeToTOU: PATH.API + "/OverrideSessionTOURequest",
            game: PATH.root + "/pixie-hollow/game/",
            accountManager: PATH.SSLRoot + "/pixie-hollow/membership/account-manager.html",
            secretCode: PATH.API + "/CouponRedemptionRequest",
            accountAttrRequest: PATH.API + "/AccountAttrRequest",
            contactCs: PATH.root + "/pixie-hollow/membership/notification.html",
            TOS: PATH.root + "/pixie-hollow/membership/terms-of-use.html",
            dName: PATH.root + "/pixie-hollow/membership/dname.html",
            cardExpiration: PATH.root + "/pixie-hollow/membership/card-expiration.html",
            closed: PATH.root + "/pixie-hollow/closed.html"
        },
        data: {
            siteCode: "US.EN.PIX",
            promotionName: "Pixie_Hollow_Virtual_World"
        }
    };
    var u = {};
    var d = {};
    var c = {};
    var f = false;
    var l = false;
    var r = false;
    var g, k;
    var o = "";
    var t = false;
    this.XMLs = {
        whoAmI: null
    };

    function i() {
        if (typeof h == "object") {
            s = $.extend(s, h)
        }
        $(s.selectors.logout).live("click", m.logout);
        $(s.selectors.login).live("click", m.login);
        $(s.selectors.userName).live("click", p);
        $(s.selectors.accountManager).live("click", e);
        a();
        m.loadWhoAmI();
        b()
    }

    function j(v, w) {
        if ($("success", w).text() != "true" && $("success", w).text() != "1") {
            return
        }
        if (v == "logout") {
            c.logout = true;
            c.loggedIn = false;
            m.XMLs = {};
            m.loadWhoAmI();
            return
        }
        m.XMLs[v] = w;
        c[v] = true;
        switch (v) {
            case "whoAmI":
                if (m.isLoggedIn() && $.inArray(location.href, [s.calls.contactCs, s.calls.dName, s.calls.cardExpiration, s.calls.TOS]) === -1) {
                    if (m.getNotice("touAccepted")) {
                        top.location.href = s.calls.TOS;
                        return
                    }
                    if (m.getNotice("contactCs") && $.cookie("ph-contactCs") === null) {
                        $.cookie("ph-contactCs", (new Date()).valueOf(), {
                            domain: ".go.com"
                        });
                        top.location.href = s.calls.contactCs;
                        return
                    }
                    if (m.getNotice("dName") && $.cookie("ph-dName") === null) {
                        $.cookie("ph-dName", (new Date()).valueOf(), {
                            domain: ".go.com"
                        });
                        top.location.href = s.calls.dName;
                        return
                    }
                    if (m.getNotice("gameCard") && $.cookie("ph-gameCard") === null) {
                        $.cookie("ph-gameCard", (new Date()).valueOf(), {
                            domain: ".go.com"
                        });
                        top.location.href = s.calls.cardExpiration;
                        return
                    }
                }
                if ($("cbypass", w).text()) {
                    r = ($("cbypass", w).text() == "true")
                }
                if ($("gameClosed", w).text()) {
                    f = true;
                    g = $("gameClosed", w).text()
                } else {
                    f = false
                }
                if ($("rampClosed", w).text()) {
                    l = true;
                    k = $("rampClosed", w).text()
                } else {
                    l = false
                }
                if (!f && !l && $("notification", w).text()) {
                    g = $("notification", w).text()
                }
                q();
                if (t == false) {
                    $(s.selectors.memberInfo).parent().fadeIn();
                    if (m.isLoggedIn()) {
                        fairies.miniManager.showLoyaltyInterstitial();
                        c.loggedIn = true;
                        $(s.selectors.memberInfo).html('<a href="#" class="user-name">' + m.getDisplayName() + '</a> | <a href="#" class="logout">Log Out</a> | <a href="#" class="account-manager">Account Manager</a>')
                    } else {
                        $(s.selectors.memberInfo).html('<a href="#" class="login">Log In</a> | Create a Fairy and Fly')
                    }
                }
                break;
            case "fairies":
                break
        }
    }
    this.updateHeaderItems = function(w) {
        var v = (arguments[1]) ? arguments[1] : $("#header").outerHeight();
        if ($("#template-culdesac").length) {
            return
        }
        if (w) {
            $("#header .navigation, #header .member-info").animate({
                top: v
            });
            $("#header .pixie-hollow-logo").animate({
                top: v + 30
            })
        } else {
            $("#header .navigation, #header .member-info").css("top", v);
            $("#header .pixie-hollow-logo").css("top", v + 30)
        }
    };

    function a() {
        var v = location.href;
        if ($.cookie("SOURCE") != "PpPHPixMnc00003" || !fairies.isInIFrame()) {
            return
        }
        $("#gde_footerContainer a, #header .pixie-hollow-logo a").live("click", function(w) {
            $(this).attr("target", "_top")
        });
        if (v.indexOf("/create/") >= 0 || v.indexOf("/game/") >= 0 || v.indexOf("/miniclip/") >= 0) {
            $("#footer").hide()
        }
        m.updateHeaderItems(false)
    }

    function q() {
        if (location.href.indexOf("/pixie-hollow/") < 0 && location.href.indexOf("/pixie-central/") < 0 && location.href.indexOf("blog.pixiehollow") < 0) {
            return
        }
        if (g !== undefined) {
            var v = 0;
            if ($("#notification").length) {
                $("#notification").remove();
                m.updateHeaderItems(false)
            }
            if ($(".chrome:first").length) {
                $(".chrome:first").after('<div id="notification">' + g + "</div>")
            } else {
                $("body").prepend('<div id="notification">' + g + "</div>")
            }
            $("#header #notification").css({
                position: "absolute",
                visibility: "hidden",
                display: "block"
            });
            v = $("#header #notification").outerHeight();
            $("#notification").css({
                position: "static",
                visibility: "visible",
                display: "none"
            });
            $("#notification").slideDown();
            m.updateHeaderItems(true, $("#header").outerHeight() + v)
        }
    }

    function b() {
        var v = [];
        $.each(u, function(w) {
            var x = null;
            if (c[w] && u[w]) {
                while (x = u[w].pop()) {
                    x();
                    if (d[w]) {
                        v.push({
                            type: w,
                            callback: x
                        })
                    }
                }
            }
        });
        $.each(v, function(x, w) {
            u[w.type].push(w.callback)
        });
        setTimeout(arguments.callee, 100)
    }

    function p(v) {
        if (m.isLoggedIn()) {
            fairies.miniManager.showPickAFairy();
            fairies.popup.toggle(s.selectors.loginPopup, "show")
        }
        v.preventDefault()
    }

    function e(v) {
        if (location.pathname.search("AB") != -1) {
            s.calls.accountManager = s.calls.accountManager.replace("pixie-hollow", "AB")
        }
        top.location.href = s.calls.accountManager;
        v.preventDefault()
    }

    function n() {
        if (location.href.indexOf("/fairies/pixie-hollow") >= 0 || location.href.indexOf("/fairies/pixie-central") >= 0) {
            if (location.href.indexOf("closed.html") == -1) {
                top.location.href = s.calls.closed
            }
        }
    }
    this.getRampMsg = function() {
        return k
    };
    this.canByPass = function() {
        return r
    };
    this.listen = function(v, x, w) {
        if (!u[v]) {
            u[v] = []
        }
        if (!d[v]) {
            d[v] = false
        }
        u[v].push(x);
        if (w) {
            d[v] = true
        }
    };
    this.loadWhoAmI = function(v) {
        c.whoAmI = false;
        if (v) {
            j("whoAmI", v)
        } else {
            $.flashProxy(s.calls.whoAmI, {
                type: "get"
            }, null, function(w) {
                j("whoAmI", $.parseXML(w))
            }, n)
        }
    };
    this.loadLookupAccount = function() {
        c.lookupAccount = false;
        m.listen("whoAmI", function() {
            if (m.getUserID() > 0) {
                $.flashProxy.get(s.calls.lookupAccount + "?userId=" + m.getUserID(), function(v) {
                    j("lookupAccount", $.parseXML(v))
                })
            }
        })
    };
    this.loadFairies = function(v) {
        c.fairies = false;
        if (m.isLoggedIn()) {
            $.flashProxy.post(s.calls.fairies, {
                current: "1",
                dna: "1"
            }, function(w) {
                j("fairies", $.parseXML(w));
                if (v) {
                    v()
                }
            })
        }
    };
    this.chooseFairy = function(v, w) {
        $.flashProxy.post(s.calls.chooseFairy, {
            fairy_id: v
        }, w)
    };
    this.hideMemberInfo = function(v) {
        t = v;
        if (t == false) {
            $(s.selectors.memberInfo).parent().hide()
        }
    };
    this.isLoggedIn = function() {
        return ($("status", m.XMLs.whoAmI).text() == "logged_in" || $("status", m.XMLs.whoAmI).text() == "logged_in_fairy")
    };
    this.isLoggedInWithFairy = function() {
        return ($("status", m.XMLs.whoAmI).text() == "logged_in_fairy")
    };
    this.isPaid = function() {
        return ($("access", m.XMLs.whoAmI).text() != "basic")
    };
    this.logout = function() {
        $.flashProxy.get(s.calls.logout, function(v) {
            j("logout", $.parseXML(v))
        });
        return false
    };
    this.login = function() {
        fairies.miniManager.showLogin();
        fairies.popup.toggle(s.selectors.loginPopup, "show");
        return false
    };
    this.simpleLogin = function(v) {
        fairies.miniManager.showLogin(v);
        fairies.popup.toggle(s.selectors.loginPopup, "show");
        return false
    };
    this.closeMiniManager = function(v) {
        fairies.popup.toggle(s.selectors.loginPopup, "hide", v);
        return false
    };
    this.openMiniManager = function(v) {
        fairies.miniManager.showRecent();
        fairies.popup.toggle(s.selectors.loginPopup, "show");
        if (v) {
            v.preventDefault()
        }
    };
    this.getUserID = function() {
        return parseInt($("account", m.XMLs.whoAmI).attr("account_id"))
    };
    this.getUserName = function() {
        return $("username", m.XMLs.whoAmI).text()
    };
    this.getSWID = function(w, v) {
        m.listen("whoAmI", function() {
            if (m.isLoggedIn()) {
                m.listen("lookupAccount", function() {
                    w($("providerAccountId", m.XMLs.lookupAccount).text())
                });
                if (!m.XMLs.lookupAccount) {
                    m.loadLookupAccount()
                }
            } else {
                w(false)
            }
        })
    };
    this.getDaysTillExpire = function(v) {
        m.listen("whoAmI", function() {
            if (($("order_type", m.XMLs.whoAmI).text() == "Prepaid" || $("order_type", m.XMLs.whoAmI).text() == "PP") && $("sub_exp_date", m.XMLs.whoAmI).text()) {
                var x = Date.parse($("sub_exp_date", m.XMLs.whoAmI).text());
                var w = Date.parse($("server-time day", m.XMLs.whoAmI).text());
                v(Math.ceil((x.valueOf() - w.valueOf()) / (1000 * 60 * 60 * 24)))
            } else {
                v(false)
            }
        })
    };
    this.getDisplayName = function() {
        if (!m.isLoggedIn()) {
            return false
        }
        var v = $("first_name", m.XMLs.whoAmI).text();
        if (v) {
            return (v.length > 14) ? (v.substring(0, 11) + "...") : v
        }
        return "User"
    };
    this.getSiteCode = function() {
        return s.data.siteCode
    };
    this.getPromotionName = function() {
        return s.data.promotionName
    };
    this.getCall = function(v) {
        return s.calls[v]
    };
    this.getServerTime = function(v) {
        m.listen("whoAmI", function() {
            var w = $("server-time day", m.XMLs.whoAmI).text().split("/").concat($("server-time time", m.XMLs.whoAmI).text().split(":"));
            v(new Date(w[0], w[1] - 1, w[2], w[3], w[4]))
        })
    };
    this.getPixieStandardTime = function(v) {
        m.listen("whoAmI", function() {
            var x = $("server-time time", m.XMLs.whoAmI).text();
            var w = x.split(":");
            v(((parseInt(w[0]) > 12) ? (parseInt(w[0]) - 12) : parseInt(w[0])) + ":" + w[1] + ((parseInt(w[0]) > 12) ? "pm" : "am"))
        })
    };
    this.isGameClosed = function() {
        return f
    };
    this.isRampClosed = function() {
        return l
    };
    this.fairyCount = function() {
        var v = false;
        if (v === false) {
            v = $("fairies fairy", m.XMLs.fairies).length
        }
        return v
    };
    this.getNotice = function(z) {
        var w, B, x = new Date(),
            v, C = "ph-expirationNotices",
            A = $.cookie(C) !== null ? $.cookie(C).split(",") : [];

        function y(D) {
            D = D.toString(10);
            if ($.inArray(D, A) === -1) {
                A.push(D);
                $.cookie(C, A.join(","), {
                    domain: ".go.com",
                    expires: new Date(x.getTime() + 5184000000)
                });
                return D
            } else {
                return false
            }
        }
        switch (z) {
            case "touAccepted":
                return ($("touAccepted", m.XMLs.whoAmI).text() != "true");
                break;
            case "contactCs":
                return ($("contact_cs", m.XMLs.whoAmI).length > 0);
                break;
            case "dName":
                return ($("dname", m.XMLs.whoAmI).text() === "" || $("notify_reject", m.XMLs.whoAmI).length > 0);
                break;
            case "gameCard":
                w = $("order_type", m.XMLs.whoAmI).text();
                B = $("sub_exp_date", m.XMLs.whoAmI).text();
                if ((w === "PP" || w === "Prepaid") && B !== undefined && B !== "") {
                    B = B.split("-");
                    B = new Date(B[0], parseInt(B[1] - 1), B[2]);
                    v = Math.floor((B.getTime() - x.getTime()) / 86400000);
                    if (v > 0) {
                        if (v === 0) {
                            return y(0)
                        } else {
                            if (v <= 1) {
                                return y(1)
                            } else {
                                if (v <= 7) {
                                    return y(7)
                                }
                            }
                        }
                    }
                }
                return false;
                break
        }
    };
    i.call(m)
};

var MiniManager = function(a) {
    function o() {
        "object" == typeof a && (e = $.extend(e, a)), $(e.selectors.login).click(v), $(e.selectors.loginForm).find("input").keydown(function(a) {
            13 == a.which && v(a)
        }), $(e.selectors.selectFairy).live("click", w), $(e.selectors.playFairy).live("click", function() {
            fairies.trackPage("minimanager_playnow", "pixiehollow:website:minimanager")
        }), $(e.selectors.playFairy).live("click", x), $(e.selectors.pixiePage).live("click", function() {
            fairies.trackPage("minimanager_pixiepage", "pixiehollow:website:minimanager")
        }), $(e.selectors.pixiePage).live("click", y), $("#sign-up-button").live("click", function() {
            fairies.trackPage("minimanager_signup", "pixiehollow:website:minimanager")
        }), $("#become-member-button").live("click", function() {
            fairies.trackPage("minimanager_becomemember", "pixiehollow:website:minimanager")
        }), $(e.selectors.createFairy).live("click", z), $(e.selectors.deleteFairy).live("click", A), $(e.selectors.loginForm).submit(v), setTimeout(function() {
            swfobject.embedSWF(e.calls.loaderSWF, e.selectors.loader, "68", "68", "10", null, {}, {
                wmode: "transparent"
            }, {})
        }, 3e3), fairies.isInIFrame() && "PpPHPixMnc00003" == $.cookie("SOURCE") && (e.calls.signup = PATH.root + "/pixie-hollow/miniclip/registration.html"), fairies.API.listen("whoAmI", C), e.calls.purchase = t(e.calls.purchase);
        var g = (-1 != location.href.search("pixie-hollow-world") ? !0 : !1, -1 != location.href.search("pixie-central") ? !0 : !1, -1 != location.href.search("pixie-hollow") ? !0 : !1, -1 != location.href.search("pixiehollow") ? !0 : !1, -1 != location.href.search("AB") ? !0 : !1);
        abPATHroot = "http", g && q()
    }

    function p() {
        n = !1
    }

    function q() {}

    function s() {
        var a = window.location.href;
        return isCreateAFairy = a.search("pixie-hollow/create"), isGame = a.search("pixie-hollow/game"), -1 == isCreateAFairy && -1 == isGame ? !0 : !1
    }

    function t(a) {
        return s(), a
    }

    function u(a) {
        g = a, g ? ($(e.selectors.loaderContainer).show(), $(e.selectors.login).addClass("button-disabled"), $(e.selectors.login).data("text", $(e.selectors.login + " span").html()), $(e.selectors.login + " span").html("Loading")) : ($(e.selectors.loaderContainer).hide(), $(e.selectors.login).removeClass("button-disabled"), $(e.selectors.login + " span").html($(e.selectors.login).data("text")))
    }

    function v(a) {
        var b = [];
        if (a.preventDefault(), !g) {
            if ($.formError.clear(), $(e.selectors.loginForm).find("input[name=username]").val() || b.push({
                    field: $(e.selectors.loginForm).find("input[name=username]"),
                    error: "Please enter your Account ID"
                }), $(e.selectors.loginForm).find("input[name=password]").val() || b.push({
                    field: $(e.selectors.loginForm).find("input[name=password]"),
                    error: "Please enter your Password"
                }), b.length > 0) return $.each(b, function(a, b) {
                $.formError.displayUnderElement(b.field, b.error)
            }), void 0;
            u(!0), $.flashProxy(e.calls.login, {
                type: "post"
            }, {
                username: $(e.selectors.loginForm).find("input[name=username]").val(),
                password: $(e.selectors.loginForm).find("input[name=password]").val()
            }, D, E)
        }
    }

    function w() {
        $(this).parent().find(".selected-fairy").removeClass("selected-fairy"), $(this).addClass("selected-fairy"), h = $(this).attr("rel"), "create" == h ? ($(e.selectors.playFairy).hide(), $(e.selectors.pixiePage).hide(), $(e.selectors.createFairy).css("display", "inline-block")) : h && ($(e.selectors.playFairy).css("display", "inline-block"), $(e.selectors.pixiePage).css("display", "inline-block"), $(e.selectors.createFairy).hide())
    }

    function x(a) {
        a.preventDefault(), fairies.API.isGameClosed() || fairies.API.chooseFairy(h, function(a) {
            a = $.parseXML(a), "true" != $("success", a).text() || (location.href = e.calls.game)
        })
    }

    function y(a) {
        a.preventDefault();
        var b = fairies.API.XMLs.fairies;
        fairies.API.chooseFairy(h, function(a) {
            a = $.parseXML(a), "true" != $("success", a).text() || (top.location.href = e.calls.pixiePage + "#/" + $("fairy[fairy_id=" + h + "] address", b).text(), location.href.indexOf(e.calls.pixiePage) >= 0 && location.reload())
        })
    }

    function z(a) {
        a.preventDefault(), fairies.API.isGameClosed() || (location.href = e.calls.createFairy)
    }

    function A(a) {
        return h ? (head.js({
            miniPopup: PATH.CDN + "/pixie-hollow/js/src/ph-mini-popup.js"
        }, function() {
            var a = $(e.selectors.content + " .selected-fairy p").text(),
                b = "<p>Careful! This will delete " + a + " forever. To delete this Fairy, enter your password.</p>";
            b += '<p class="delete-fairy-errors"></p>', b += "<h5>Password</h5>", b += '<p><input type="password" class="text-input delete-fairy-password" /></p>', b += '<p class="center"><a href="#" class="button-blue delete-fairy-continue"><span>Continue</span></a> &nbsp; <a href="#" class="button-orange delete-fairy-cancel"><span>Cancel</span></a></p>';
            var c = new MiniPopup({
                title: "Delete Fairy?",
                content: b,
                parent: e.selectors.content,
                top: "20px",
                left: "-45px"
            });
            $(".delete-fairy-cancel").click(c.close), $(".delete-fairy-continue").click(function(a) {
                $(".delete-fairy-continue").addClass("button-disabled"), a.preventDefault(), $.flashProxy.post(e.calls.deleteFairy, {
                    fairy_id: h,
                    password: $(".delete-fairy-password").val()
                }, function(a) {
                    if (a = $.parseXML(a), $(".delete-fairy-continue").removeClass("button-disabled"), "true" != $("success", a).text()) {
                        var b = $("error", a).attr("code"),
                            d = {
                                defaultMessage: "Sorry, something's not right. Try back later!",
                                NOT_FAIRY_OWNER: "Sorry, something's not right. Try back later!",
                                FAIRY_IN_USE: "Sorry, something's not right. Try back later!",
                                ERROR_MISSING_PARMS: "Sorry. Your password is not correct. Please try again.",
                                LOGIN_FAILURE: "Sorry. Your password is not correct. Please try again.",
                                INTERNAL_ERROR: "Sorry, something's not right. Try back later!"
                            };
                        $.formError.clear(), $.formError.displayUnderElement($(".delete-fairy-password"), void 0 !== d[b] ? d[b] : d.defaultMessage)
                    } else f.showPickAFairy(), c.close()
                })
            })
        }), a.preventDefault(), void 0) : !1
    }

    function B(a) {
        window.location.href = "http://apps.dxd.go.com/dxd/guestservices/your_account/account_hold?bannedUsername=" + $(e.selectors.loginForm).find("input[name=username]").val(), a.preventDefault()
    }

    function C() {
        p(!1)
    }

    function D(a) {
        var b, c = {
            defaultMessage: "Internal Error",
            LOGIN_FAILED: "Invalid Login",
            ERROR_MISSING_PARMS: "Invalid Login",
            BANNED: B
        };
        $.cookie("ph-username", $(e.selectors.loginForm).find("input[name=username]").val(), {
            expires: 14
        }), a = $.parseXML(a), u(!1), "true" !== $("success", a).text() ? (b = $("error", a).attr("code"), "function" == typeof c[b] ? c[b]() : $.formError.displayInsideElement($(e.selectors.loginForm), void 0 !== c[b] ? c[b] : c.defaultMessage)) : ($(e.selectors.loginForm).find("input").val(""), $("access", fairies.API.XMLs.whoAmI).text($("access", a).text()), fairies.API.listen("whoAmI", function() {
            var b = $("dname_approved", a).text(),
                c = $("dname_submitted", a).text();
            "true" != b && "true" != c && "true" != $.cookie("justRegistered") ? top.location.href = e.calls.dnamePage : "/fairies/AB/index.html" == location.pathname || "/fairies/AB/" == location.pathname, "function" == typeof userLoggedIn && userLoggedIn(), "function" == typeof i ? (fairies.API.listen("fairies", function() {
                i()
            }), fairies.API.loadFairies()) : f.showPickAFairy()
        }), fairies.API.loadWhoAmI(), fairies.trackBIPageLoad())
    }

    function E() {
        u(!1), $.formError.displayInsideElement($(e.selectors.loginForm), "Internal Server Error")
    }

    function F() {
        $(e.selectors.content + " .choose").html("");
        var a = fairies.API.XMLs.fairies;
        if ("true" == $("success", a).text()) {
            var c = "",
                f = 0,
                g = !1;
            if ($("fairies fairy", a).each(function() {
                    var a = $(this).find("created").text().split(" ")[0].split("-");
                    a = new Date(a[0], a[1] - 1, a[2]).getTime(), a < b.getTime() && (g = !0)
                }), d && $("fairies fairy", a).length <= 1 && (!g || g && !fairies.API.isPaid())) return G(a), void 0;
            $("fairies fairy", a).each(function() {
                ++f > 3 || (c += '<div class="fairy" rel="' + $(this).attr("fairy_id") + '">', d || (c += '<a class="delete-fairy"><span>Delete</span></a>'), c += '<div class="fairy-bust"><img src="' + e.calls.renderer + $(this).attr("fairy_id") + '/" /></div>', c += "<p>" + $(this).find("name").text() + "</p>", c += "</div>")
            });
            for (var h = $("fairies fairy", a).length; 3 > h && !(d && !fairies.API.isPaid() && h >= 1); h++) c += '<div class="fairy" rel="create">', c += '<div class="fairy-default"><img src="' + PATH.CDN + '/pixie-hollow/img/content/mini-manager/icon.fairy.png" /></div>', c += "<p>Create a Fairy</p>", c += "</div>";
            c += '<p class="center buttons"><a href="#" class="button-blue button-pixie-page"><span>Pixie Page</span></a> &nbsp; <a href="#" class="button-orange button-game"><span>Play</span></a> &nbsp; <a href="#" class="button-orange button-create"><span>Create</span></a></p>', $(e.selectors.content + " .choose").html(c), fairies.API.isGameClosed() && !fairies.API.canByPass() && ($(e.selectors.content + " .choose").find(".button-create, .button-game").addClass("button-disabled"), $(e.selectors.content + " .choose").append('<p class="center error-list">Pixie Hollow is currently unavailable, please check back soon.</p>'))
        }
    }

    function G(a) {
        var b = "";
        $("fairies fairy", a).length ? (b += '<div class="one-fairy">', b += "<h2>Welcome Back</h2>", b += '<h5 class="center">' + $("fairies fairy name", a).text() + "</h5>", b += '<div class="fairy-large"><img src="' + e.calls.renderer + $("fairies fairy", a).attr("fairy_id") + '/full" /></div>', b += '<p class="center buttons"><a href="#" class="button-blue button-pixie-page"><span>Pixie Page</span></a> &nbsp; <a href="#" class="button-orange button-game"><span>Play</span></a></p>', b += "</div>", fairies.API.chooseFairy($("fairies fairy", a).attr("fairy_id"), function() {
            h = $("fairies fairy", a).attr("fairy_id")
        }), $(e.selectors.content + " .choose").html(b), $(e.selectors.playFairy).css("display", "inline-block"), $(e.selectors.pixiePage).css("display", "inline-block")) : (b += '<div class="no-fairy">', b += "<h2>Welcome Back</h2>", b += '<h5 class="center">Create a Fairy and fly now!</h5>', b += '<p class="center buttons"><a href="#" class="button-orange button-create"><span>Create a Fairy</span></a>', b += "</div>", $(e.selectors.content + " .choose").html(b), $(e.selectors.createFairy).css("display", "inline-block")), $(e.selectors.content + " .choose").find("h2,h5").replaceTitle({
            font: PATH.CDN + "/pixie-hollow/swf/pristina.swf",
            wmode: "transparent"
        }), fairies.API.isGameClosed() && !fairies.API.canByPass() && ($(e.selectors.content + " .choose").find(".button-create, .button-game").addClass("button-disabled"), $(e.selectors.content + " .choose > div").append('<p class="center error-list gated-message">Pixie Hollow is currently unavailable, please check back soon.</p>'))
    }

    function H() {
        "choose" == j ? ($(e.selectors.promo + " img").attr("src", e.promos.chooseAFairy), fairies.API.isPaid() ? ($(e.selectors.promo + " .top-extras").html(""), $(e.selectors.promo + " .bottom-extras").html('<img src="' + e.calls.pixiePostingText + '" />')) : ($(e.selectors.promo + " .top-extras").html(""), $(e.selectors.promo + " .bottom-extras").html(""))) : ($(e.selectors.promo + " img").attr("src", e.promos.login), $(e.selectors.promo + " .top-extras").html(""), $(e.selectors.promo + " .bottom-extras").html('<a href="/fairies/pixie-hollow/closing/">Click here to learn about closing.</a>'))
    }
    var b = new Date(2011, 10, 10),
        c = new Date,
        d = b.getTime() <= new Date(c.getFullYear(), c.getMonth(), c.getDate()).getTime(),
        e = {
            selectors: {
                loginForm: "#login-form",
                login: "#login-form .submit-button",
                loginPopup: ".popup-manager",
                promo: ".popup-promo",
                content: ".popup-manager .popup-info",
                selectFairy: ".popup-manager .popup-info .fairy",
                playFairy: ".popup-manager .popup-info .button-game",
                pixiePage: ".popup-manager .popup-info .button-pixie-page",
                createFairy: ".popup-manager .popup-info .button-create",
                deleteFairy: ".popup-manager .popup-info .fairy .delete-fairy",
                loader: "mini-manager-loader",
                loaderContainer: ".popup-manager .popup-info .loader-container"
            },
            calls: {
                login: PATH.SSLAPI + "/AccountLoginRequest",
                dnamePage: PATH.root + "/pixie-hollow/membership/dname.html",
                deleteFairy: PATH.SSLAPI + "/FairiesDeleteFairyRequest",
                game: PATH.root + "/pixie-hollow/game/",
                pixiePage: PATH.root + "/pixie-hollow/pixie-pages/",
                createFairy: PATH.root + "/pixie-hollow/create/",
                renderer: PATH.renderer + "/render/",
                signup: PATH.SSLRoot + "/pixie-hollow/membership/registration.html",
                purchase: PATH.SSLRoot + "/pixie-hollow/membership/purchase.html",
                membershipInfo: PATH.root + "/pixie-hollow/membership/",
                congratsPage: PATH.root + "/pixie-hollow/membership/congratulation.html",
                loyaltyXML: PATH.CDN + "/pixie-hollow/xml/loyalty.xml",
                loyaltySWF: PATH.CDN + "/pixie-hollow/swf/loyalty.swf",
                loaderSWF: PATH.CDN + "/pixie-hollow/swf/loader.swf",
                defaultABurl: PATH.root + "/AB/index.html",
                homepageA: PATH.root + "/AB/index-A.html",
                homepageB: PATH.root + "/AB/index-B.html",
                membershipIcon: PATH.CDN + "/pixie-hollow/img/content/mini-manager/icon.membership.png",
                pixiePostingText: PATH.CDN + "/pixie-hollow/img/content/mini-manager/pixie-posting-text.png"
            },
            promos: {
                chooseAFairy: PATH.CDN + "/pixie-hollow/img/publishing/mini-manager/promo.choose-fairy.jpg",
                login: PATH.CDN + "/pixie-hollow/img/publishing/mini-manager/promo.login.jpg"
            }
        },
        f = this,
        g = !1,
        h = null,
        i = null,
        j = "login";
    e.calls.defaultABurl, new Array("clickables", "blog/winners", "blog/events", "blog/events", "blog/nevernews", "blog/known", "pixie-central", "pixie-central.html", "pixie-hollow-world.html", "pixie-hollow-world"), new Array("account-manager", "registration", "purchase", "agree", "terms");
    var n = !1;
    this.showLoyaltyInterstitial = function() {
        return fairies.API.isLoggedIn() ? (fairies.API.listen("fairies", function() {
            var a = $("fairies fairy:first member_days", fairies.API.XMLs.fairies).text(),
                b = $("member_days", fairies.API.XMLs.whoAmI).text(),
                c = b >= 0 && 90 > b && 0 > a,
                d = Math.floor(b / 90) > Math.floor(a / 90);
            !c && !d || $.cookie("loyaltyInterstitial") || $.flashProxy.get(e.calls.loyaltyXML, function(a) {
                a = $.parseXML(a);
                var c = Math.floor(b / 90);
                if ($("level:eq(" + c + ")", a).length) {
                    var d = {
                            mainCopy: $("level:eq(" + c + ") mainCopy", a).text(),
                            termCopy: $("level:eq(" + c + ") termCopy", a).text(),
                            avatarImage: $("level:eq(" + c + ") avatarImage", a).text(),
                            badgeImage: $("level:eq(" + c + ") badgeImage", a).text(),
                            avatarBG: $("level:eq(" + c + ") avatarBG", a).text(),
                            closeCall: "fairies.miniManager.hideLoyaltyInterstitial"
                        },
                        f = {
                            allowScriptAccess: "always",
                            wmode: "transparent"
                        };
                    $("#loyaltyOverlay").remove(), $("body").append('<div id="loyalty-fade"><div id="loyalty-overlay"></div></div>'), $("#loyalty-fade").css({
                        width: $("body").width(),
                        height: $(document).height()
                    }), $.cookie("loyaltyInterstitial", !0, {
                        path: "/",
                        domain: ".go.com"
                    }), swfobject.embedSWF(e.calls.loyaltySWF, "loyalty-overlay", "100%", "486", "10.0.0", "http://a.dolimg.com/swf/dcom/expressInstall.swf", d, f)
                }
            })
        }), fairies.API.loadFairies(), void 0) : !1
    }, this.hideLoyaltyInterstitial = function() {
        $("#loyalty-fade").remove()
    }, this.showPickAFairy = function() {
        j = "choose", H(), $(e.selectors.content + " .login").hide(), $(e.selectors.content + " .choose").show(), fairies.API.listen("fairies", F), fairies.API.loadFairies()
    }, this.showLogin = function(a) {
        j = "login", i = a, H(), $.cookie("ph-username") && $(e.selectors.content).find("input[name=username]").val($.cookie("ph-username")), $(e.selectors.content + " .choose").hide(), $(e.selectors.content + " .login").show()
    }, this.showRecent = function() {
        fairies.API.isLoggedIn() ? f.showPickAFairy() : f.showLogin()
    }, o.call(f)
};;

var Popup = function(a) {
    function d() {
        typeof a == "object" && (c = $.extend(c, a)), $(".popup").filter(":not(.popup-manager)").length && fairies.preload([PATH.CDN + "/pixie-hollow/img/templates/popup/frame-top.png", PATH.CDN + "/pixie-hollow/img/templates/popup/frame-bottom.png"], 5e3)
    }
    var b = this,
        c = {
            selectors: {
                title: "h2",
                content: ".popup-content",
                close: ".close-button"
            },
            font: PATH.CDN + "/pixie-hollow/swf/pristina.swf",
            elements: {
                popupFade: "popup-fade"
            }
        };
    this.toggle = function(a, d, e) {
        var a = $(a),
            e = e || function() {};
        if (!a.length || a.is(":animated")) return !1;
        if (a.is(":visible") && d != "show") a.parent().fadeOut(function() {
            a.hide(), a.unwrap(), a.find(c.selectors.close).unbind("click"), $(window).unbind("resize"), e()
        });
        else if (!a.is(":visible") && d != "hide") {
            $("body").append(a), a.wrap('<div id="' + c.elements.popupFade + '" />');
            var f = function() {
                $("#" + c.elements.popupFade).width($("body").width()), $("#" + c.elements.popupFade).height($(document).height());
                var b = $("#" + c.elements.popupFade).offsetParent().offset();
                $("#" + c.elements.popupFade).css({
                    top: -b.top,
                    left: -b.left
                }), a.css("left", Math.floor(($(document).width() - a.width()) / 2))
            };
            f(), $(window).resize(f), a.fadeIn(function() {
                a.find(c.selectors.title).replaceTitle({
                    font: c.font,
                    wmode: "transparent"
                }), a.find(c.selectors.content + " .popup-close").css("position", "absolute"), a.find(c.selectors.close).click(function(c) {
                    c.preventDefault(), b.toggle(a, "hide")
                }), e()
            });
            var g = $("body").scrollTop() ? $("body").scrollTop() : $("html").scrollTop();
            a.css("top", 20 + g)
        }
        return !1
    }, this.toggleBlank = function(a, d, e, f) {
        $(a).find(c.selectors.title).html(d), $(a).find(c.selectors.content).append(e), b.toggle(a, f, function() {
            $(a).find(c.selectors.title).replaceTitle({
                font: c.font,
                wmode: "transparent"
            })
        })
    }, d.call(b)
};