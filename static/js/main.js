function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var htmx_min$1 = { exports: {} };
var htmx_min = htmx_min$1.exports;
var hasRequiredHtmx_min;
function requireHtmx_min() {
  if (hasRequiredHtmx_min) return htmx_min$1.exports;
  hasRequiredHtmx_min = 1;
  (function(module) {
    (function(e2, t2) {
      if (module.exports) {
        module.exports = t2();
      } else {
        e2.htmx = e2.htmx || t2();
      }
    })(typeof self !== "undefined" ? self : htmx_min, function() {
      return function() {
        var Q = { onLoad: F, process: zt, on: de, off: ge, trigger: ce, ajax: Nr, find: C, findAll: f, closest: v, values: function(e2, t2) {
          var r2 = dr(e2, t2 || "post");
          return r2.values;
        }, remove: _, addClass: z, removeClass: n, toggleClass: $, takeClass: W, defineExtension: Ur, removeExtension: Br, logAll: V, logNone: j, logger: null, config: { historyEnabled: true, historyCacheSize: 10, refreshOnHistoryMiss: false, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: true, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: true, allowScriptTags: true, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: false, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: false, scrollBehavior: "smooth", defaultFocusScroll: false, getCacheBusterParam: false, globalViewTransitions: false, methodsThatUseUrlParams: ["get"], selfRequestsOnly: false, ignoreTitle: false, scrollIntoViewOnBoost: true, triggerSpecsCache: null }, parseInterval: d, _: t, createEventSource: function(e2) {
          return new EventSource(e2, { withCredentials: true });
        }, createWebSocket: function(e2) {
          var t2 = new WebSocket(e2, []);
          t2.binaryType = Q.config.wsBinaryType;
          return t2;
        }, version: "1.9.12" };
        var r = { addTriggerHandler: Lt, bodyContains: se, canAccessLocalStorage: U, findThisElement: xe, filterValues: yr, hasAttribute: o, getAttributeValue: te, getClosestAttributeValue: ne, getClosestMatch: c, getExpressionVars: Hr, getHeaders: xr, getInputValues: dr, getInternalData: ae, getSwapSpecification: wr, getTriggerSpecs: it, getTarget: ye, makeFragment: l, mergeObjects: le, makeSettleInfo: T, oobSwap: Ee, querySelectorExt: ue, selectAndSwap: je, settleImmediately: nr, shouldCancel: ut, triggerEvent: ce, triggerErrorEvent: fe, withExtensions: R };
        var w = ["get", "post", "put", "delete", "patch"];
        var i = w.map(function(e2) {
          return "[hx-" + e2 + "], [data-hx-" + e2 + "]";
        }).join(", ");
        var S = e("head"), q = e("title"), H = e("svg", true);
        function e(e2, t2) {
          return new RegExp("<" + e2 + "(\\s[^>]*>|>)([\\s\\S]*?)<\\/" + e2 + ">", !!t2 ? "gim" : "im");
        }
        function d(e2) {
          if (e2 == void 0) {
            return void 0;
          }
          let t2 = NaN;
          if (e2.slice(-2) == "ms") {
            t2 = parseFloat(e2.slice(0, -2));
          } else if (e2.slice(-1) == "s") {
            t2 = parseFloat(e2.slice(0, -1)) * 1e3;
          } else if (e2.slice(-1) == "m") {
            t2 = parseFloat(e2.slice(0, -1)) * 1e3 * 60;
          } else {
            t2 = parseFloat(e2);
          }
          return isNaN(t2) ? void 0 : t2;
        }
        function ee(e2, t2) {
          return e2.getAttribute && e2.getAttribute(t2);
        }
        function o(e2, t2) {
          return e2.hasAttribute && (e2.hasAttribute(t2) || e2.hasAttribute("data-" + t2));
        }
        function te(e2, t2) {
          return ee(e2, t2) || ee(e2, "data-" + t2);
        }
        function u(e2) {
          return e2.parentElement;
        }
        function re() {
          return document;
        }
        function c(e2, t2) {
          while (e2 && !t2(e2)) {
            e2 = u(e2);
          }
          return e2 ? e2 : null;
        }
        function L(e2, t2, r2) {
          var n2 = te(t2, r2);
          var i2 = te(t2, "hx-disinherit");
          if (e2 !== t2 && i2 && (i2 === "*" || i2.split(" ").indexOf(r2) >= 0)) {
            return "unset";
          } else {
            return n2;
          }
        }
        function ne(t2, r2) {
          var n2 = null;
          c(t2, function(e2) {
            return n2 = L(t2, e2, r2);
          });
          if (n2 !== "unset") {
            return n2;
          }
        }
        function h(e2, t2) {
          var r2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || e2.oMatchesSelector;
          return r2 && r2.call(e2, t2);
        }
        function A(e2) {
          var t2 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
          var r2 = t2.exec(e2);
          if (r2) {
            return r2[1].toLowerCase();
          } else {
            return "";
          }
        }
        function s(e2, t2) {
          var r2 = new DOMParser();
          var n2 = r2.parseFromString(e2, "text/html");
          var i2 = n2.body;
          while (t2 > 0) {
            t2--;
            i2 = i2.firstChild;
          }
          if (i2 == null) {
            i2 = re().createDocumentFragment();
          }
          return i2;
        }
        function N(e2) {
          return /<body/.test(e2);
        }
        function l(e2) {
          var t2 = !N(e2);
          var r2 = A(e2);
          var n2 = e2;
          if (r2 === "head") {
            n2 = n2.replace(S, "");
          }
          if (Q.config.useTemplateFragments && t2) {
            var i2 = s("<body><template>" + n2 + "</template></body>", 0);
            var a2 = i2.querySelector("template").content;
            if (Q.config.allowScriptTags) {
              oe(a2.querySelectorAll("script"), function(e3) {
                if (Q.config.inlineScriptNonce) {
                  e3.nonce = Q.config.inlineScriptNonce;
                }
                e3.htmxExecuted = navigator.userAgent.indexOf("Firefox") === -1;
              });
            } else {
              oe(a2.querySelectorAll("script"), function(e3) {
                _(e3);
              });
            }
            return a2;
          }
          switch (r2) {
            case "thead":
            case "tbody":
            case "tfoot":
            case "colgroup":
            case "caption":
              return s("<table>" + n2 + "</table>", 1);
            case "col":
              return s("<table><colgroup>" + n2 + "</colgroup></table>", 2);
            case "tr":
              return s("<table><tbody>" + n2 + "</tbody></table>", 2);
            case "td":
            case "th":
              return s("<table><tbody><tr>" + n2 + "</tr></tbody></table>", 3);
            case "script":
            case "style":
              return s("<div>" + n2 + "</div>", 1);
            default:
              return s(n2, 0);
          }
        }
        function ie(e2) {
          if (e2) {
            e2();
          }
        }
        function I(e2, t2) {
          return Object.prototype.toString.call(e2) === "[object " + t2 + "]";
        }
        function k(e2) {
          return I(e2, "Function");
        }
        function P(e2) {
          return I(e2, "Object");
        }
        function ae(e2) {
          var t2 = "htmx-internal-data";
          var r2 = e2[t2];
          if (!r2) {
            r2 = e2[t2] = {};
          }
          return r2;
        }
        function M(e2) {
          var t2 = [];
          if (e2) {
            for (var r2 = 0; r2 < e2.length; r2++) {
              t2.push(e2[r2]);
            }
          }
          return t2;
        }
        function oe(e2, t2) {
          if (e2) {
            for (var r2 = 0; r2 < e2.length; r2++) {
              t2(e2[r2]);
            }
          }
        }
        function X(e2) {
          var t2 = e2.getBoundingClientRect();
          var r2 = t2.top;
          var n2 = t2.bottom;
          return r2 < window.innerHeight && n2 >= 0;
        }
        function se(e2) {
          if (e2.getRootNode && e2.getRootNode() instanceof window.ShadowRoot) {
            return re().body.contains(e2.getRootNode().host);
          } else {
            return re().body.contains(e2);
          }
        }
        function D(e2) {
          return e2.trim().split(/\s+/);
        }
        function le(e2, t2) {
          for (var r2 in t2) {
            if (t2.hasOwnProperty(r2)) {
              e2[r2] = t2[r2];
            }
          }
          return e2;
        }
        function E(e2) {
          try {
            return JSON.parse(e2);
          } catch (e3) {
            b(e3);
            return null;
          }
        }
        function U() {
          var e2 = "htmx:localStorageTest";
          try {
            localStorage.setItem(e2, e2);
            localStorage.removeItem(e2);
            return true;
          } catch (e3) {
            return false;
          }
        }
        function B(t2) {
          try {
            var e2 = new URL(t2);
            if (e2) {
              t2 = e2.pathname + e2.search;
            }
            if (!/^\/$/.test(t2)) {
              t2 = t2.replace(/\/+$/, "");
            }
            return t2;
          } catch (e3) {
            return t2;
          }
        }
        function t(e) {
          return Tr(re().body, function() {
            return eval(e);
          });
        }
        function F(t2) {
          var e2 = Q.on("htmx:load", function(e3) {
            t2(e3.detail.elt);
          });
          return e2;
        }
        function V() {
          Q.logger = function(e2, t2, r2) {
            if (console) {
              console.log(t2, e2, r2);
            }
          };
        }
        function j() {
          Q.logger = null;
        }
        function C(e2, t2) {
          if (t2) {
            return e2.querySelector(t2);
          } else {
            return C(re(), e2);
          }
        }
        function f(e2, t2) {
          if (t2) {
            return e2.querySelectorAll(t2);
          } else {
            return f(re(), e2);
          }
        }
        function _(e2, t2) {
          e2 = p(e2);
          if (t2) {
            setTimeout(function() {
              _(e2);
              e2 = null;
            }, t2);
          } else {
            e2.parentElement.removeChild(e2);
          }
        }
        function z(e2, t2, r2) {
          e2 = p(e2);
          if (r2) {
            setTimeout(function() {
              z(e2, t2);
              e2 = null;
            }, r2);
          } else {
            e2.classList && e2.classList.add(t2);
          }
        }
        function n(e2, t2, r2) {
          e2 = p(e2);
          if (r2) {
            setTimeout(function() {
              n(e2, t2);
              e2 = null;
            }, r2);
          } else {
            if (e2.classList) {
              e2.classList.remove(t2);
              if (e2.classList.length === 0) {
                e2.removeAttribute("class");
              }
            }
          }
        }
        function $(e2, t2) {
          e2 = p(e2);
          e2.classList.toggle(t2);
        }
        function W(e2, t2) {
          e2 = p(e2);
          oe(e2.parentElement.children, function(e3) {
            n(e3, t2);
          });
          z(e2, t2);
        }
        function v(e2, t2) {
          e2 = p(e2);
          if (e2.closest) {
            return e2.closest(t2);
          } else {
            do {
              if (e2 == null || h(e2, t2)) {
                return e2;
              }
            } while (e2 = e2 && u(e2));
            return null;
          }
        }
        function g(e2, t2) {
          return e2.substring(0, t2.length) === t2;
        }
        function G(e2, t2) {
          return e2.substring(e2.length - t2.length) === t2;
        }
        function J(e2) {
          var t2 = e2.trim();
          if (g(t2, "<") && G(t2, "/>")) {
            return t2.substring(1, t2.length - 2);
          } else {
            return t2;
          }
        }
        function Z(e2, t2) {
          if (t2.indexOf("closest ") === 0) {
            return [v(e2, J(t2.substr(8)))];
          } else if (t2.indexOf("find ") === 0) {
            return [C(e2, J(t2.substr(5)))];
          } else if (t2 === "next") {
            return [e2.nextElementSibling];
          } else if (t2.indexOf("next ") === 0) {
            return [K(e2, J(t2.substr(5)))];
          } else if (t2 === "previous") {
            return [e2.previousElementSibling];
          } else if (t2.indexOf("previous ") === 0) {
            return [Y(e2, J(t2.substr(9)))];
          } else if (t2 === "document") {
            return [document];
          } else if (t2 === "window") {
            return [window];
          } else if (t2 === "body") {
            return [document.body];
          } else {
            return re().querySelectorAll(J(t2));
          }
        }
        var K = function(e2, t2) {
          var r2 = re().querySelectorAll(t2);
          for (var n2 = 0; n2 < r2.length; n2++) {
            var i2 = r2[n2];
            if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_PRECEDING) {
              return i2;
            }
          }
        };
        var Y = function(e2, t2) {
          var r2 = re().querySelectorAll(t2);
          for (var n2 = r2.length - 1; n2 >= 0; n2--) {
            var i2 = r2[n2];
            if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_FOLLOWING) {
              return i2;
            }
          }
        };
        function ue(e2, t2) {
          if (t2) {
            return Z(e2, t2)[0];
          } else {
            return Z(re().body, e2)[0];
          }
        }
        function p(e2) {
          if (I(e2, "String")) {
            return C(e2);
          } else {
            return e2;
          }
        }
        function ve(e2, t2, r2) {
          if (k(t2)) {
            return { target: re().body, event: e2, listener: t2 };
          } else {
            return { target: p(e2), event: t2, listener: r2 };
          }
        }
        function de(t2, r2, n2) {
          jr(function() {
            var e3 = ve(t2, r2, n2);
            e3.target.addEventListener(e3.event, e3.listener);
          });
          var e2 = k(r2);
          return e2 ? r2 : n2;
        }
        function ge(t2, r2, n2) {
          jr(function() {
            var e2 = ve(t2, r2, n2);
            e2.target.removeEventListener(e2.event, e2.listener);
          });
          return k(r2) ? r2 : n2;
        }
        var pe = re().createElement("output");
        function me(e2, t2) {
          var r2 = ne(e2, t2);
          if (r2) {
            if (r2 === "this") {
              return [xe(e2, t2)];
            } else {
              var n2 = Z(e2, r2);
              if (n2.length === 0) {
                b('The selector "' + r2 + '" on ' + t2 + " returned no matches!");
                return [pe];
              } else {
                return n2;
              }
            }
          }
        }
        function xe(e2, t2) {
          return c(e2, function(e3) {
            return te(e3, t2) != null;
          });
        }
        function ye(e2) {
          var t2 = ne(e2, "hx-target");
          if (t2) {
            if (t2 === "this") {
              return xe(e2, "hx-target");
            } else {
              return ue(e2, t2);
            }
          } else {
            var r2 = ae(e2);
            if (r2.boosted) {
              return re().body;
            } else {
              return e2;
            }
          }
        }
        function be(e2) {
          var t2 = Q.config.attributesToSettle;
          for (var r2 = 0; r2 < t2.length; r2++) {
            if (e2 === t2[r2]) {
              return true;
            }
          }
          return false;
        }
        function we(t2, r2) {
          oe(t2.attributes, function(e2) {
            if (!r2.hasAttribute(e2.name) && be(e2.name)) {
              t2.removeAttribute(e2.name);
            }
          });
          oe(r2.attributes, function(e2) {
            if (be(e2.name)) {
              t2.setAttribute(e2.name, e2.value);
            }
          });
        }
        function Se(e2, t2) {
          var r2 = Fr(t2);
          for (var n2 = 0; n2 < r2.length; n2++) {
            var i2 = r2[n2];
            try {
              if (i2.isInlineSwap(e2)) {
                return true;
              }
            } catch (e3) {
              b(e3);
            }
          }
          return e2 === "outerHTML";
        }
        function Ee(e2, i2, a2) {
          var t2 = "#" + ee(i2, "id");
          var o2 = "outerHTML";
          if (e2 === "true") ;
          else if (e2.indexOf(":") > 0) {
            o2 = e2.substr(0, e2.indexOf(":"));
            t2 = e2.substr(e2.indexOf(":") + 1, e2.length);
          } else {
            o2 = e2;
          }
          var r2 = re().querySelectorAll(t2);
          if (r2) {
            oe(r2, function(e3) {
              var t3;
              var r3 = i2.cloneNode(true);
              t3 = re().createDocumentFragment();
              t3.appendChild(r3);
              if (!Se(o2, e3)) {
                t3 = r3;
              }
              var n2 = { shouldSwap: true, target: e3, fragment: t3 };
              if (!ce(e3, "htmx:oobBeforeSwap", n2)) return;
              e3 = n2.target;
              if (n2["shouldSwap"]) {
                Fe(o2, e3, e3, t3, a2);
              }
              oe(a2.elts, function(e4) {
                ce(e4, "htmx:oobAfterSwap", n2);
              });
            });
            i2.parentNode.removeChild(i2);
          } else {
            i2.parentNode.removeChild(i2);
            fe(re().body, "htmx:oobErrorNoTarget", { content: i2 });
          }
          return e2;
        }
        function Ce(e2, t2, r2) {
          var n2 = ne(e2, "hx-select-oob");
          if (n2) {
            var i2 = n2.split(",");
            for (var a2 = 0; a2 < i2.length; a2++) {
              var o2 = i2[a2].split(":", 2);
              var s2 = o2[0].trim();
              if (s2.indexOf("#") === 0) {
                s2 = s2.substring(1);
              }
              var l2 = o2[1] || "true";
              var u2 = t2.querySelector("#" + s2);
              if (u2) {
                Ee(l2, u2, r2);
              }
            }
          }
          oe(f(t2, "[hx-swap-oob], [data-hx-swap-oob]"), function(e3) {
            var t3 = te(e3, "hx-swap-oob");
            if (t3 != null) {
              Ee(t3, e3, r2);
            }
          });
        }
        function Re(e2) {
          oe(f(e2, "[hx-preserve], [data-hx-preserve]"), function(e3) {
            var t2 = te(e3, "id");
            var r2 = re().getElementById(t2);
            if (r2 != null) {
              e3.parentNode.replaceChild(r2, e3);
            }
          });
        }
        function Te(o2, e2, s2) {
          oe(e2.querySelectorAll("[id]"), function(e3) {
            var t2 = ee(e3, "id");
            if (t2 && t2.length > 0) {
              var r2 = t2.replace("'", "\\'");
              var n2 = e3.tagName.replace(":", "\\:");
              var i2 = o2.querySelector(n2 + "[id='" + r2 + "']");
              if (i2 && i2 !== o2) {
                var a2 = e3.cloneNode();
                we(e3, i2);
                s2.tasks.push(function() {
                  we(e3, a2);
                });
              }
            }
          });
        }
        function Oe(e2) {
          return function() {
            n(e2, Q.config.addedClass);
            zt(e2);
            Nt(e2);
            qe(e2);
            ce(e2, "htmx:load");
          };
        }
        function qe(e2) {
          var t2 = "[autofocus]";
          var r2 = h(e2, t2) ? e2 : e2.querySelector(t2);
          if (r2 != null) {
            r2.focus();
          }
        }
        function a(e2, t2, r2, n2) {
          Te(e2, r2, n2);
          while (r2.childNodes.length > 0) {
            var i2 = r2.firstChild;
            z(i2, Q.config.addedClass);
            e2.insertBefore(i2, t2);
            if (i2.nodeType !== Node.TEXT_NODE && i2.nodeType !== Node.COMMENT_NODE) {
              n2.tasks.push(Oe(i2));
            }
          }
        }
        function He(e2, t2) {
          var r2 = 0;
          while (r2 < e2.length) {
            t2 = (t2 << 5) - t2 + e2.charCodeAt(r2++) | 0;
          }
          return t2;
        }
        function Le(e2) {
          var t2 = 0;
          if (e2.attributes) {
            for (var r2 = 0; r2 < e2.attributes.length; r2++) {
              var n2 = e2.attributes[r2];
              if (n2.value) {
                t2 = He(n2.name, t2);
                t2 = He(n2.value, t2);
              }
            }
          }
          return t2;
        }
        function Ae(e2) {
          var t2 = ae(e2);
          if (t2.onHandlers) {
            for (var r2 = 0; r2 < t2.onHandlers.length; r2++) {
              const n2 = t2.onHandlers[r2];
              e2.removeEventListener(n2.event, n2.listener);
            }
            delete t2.onHandlers;
          }
        }
        function Ne(e2) {
          var t2 = ae(e2);
          if (t2.timeout) {
            clearTimeout(t2.timeout);
          }
          if (t2.webSocket) {
            t2.webSocket.close();
          }
          if (t2.sseEventSource) {
            t2.sseEventSource.close();
          }
          if (t2.listenerInfos) {
            oe(t2.listenerInfos, function(e3) {
              if (e3.on) {
                e3.on.removeEventListener(e3.trigger, e3.listener);
              }
            });
          }
          Ae(e2);
          oe(Object.keys(t2), function(e3) {
            delete t2[e3];
          });
        }
        function m(e2) {
          ce(e2, "htmx:beforeCleanupElement");
          Ne(e2);
          if (e2.children) {
            oe(e2.children, function(e3) {
              m(e3);
            });
          }
        }
        function Ie(t2, e2, r2) {
          if (t2.tagName === "BODY") {
            return Ue(t2, e2, r2);
          } else {
            var n2;
            var i2 = t2.previousSibling;
            a(u(t2), t2, e2, r2);
            if (i2 == null) {
              n2 = u(t2).firstChild;
            } else {
              n2 = i2.nextSibling;
            }
            r2.elts = r2.elts.filter(function(e3) {
              return e3 != t2;
            });
            while (n2 && n2 !== t2) {
              if (n2.nodeType === Node.ELEMENT_NODE) {
                r2.elts.push(n2);
              }
              n2 = n2.nextElementSibling;
            }
            m(t2);
            u(t2).removeChild(t2);
          }
        }
        function ke(e2, t2, r2) {
          return a(e2, e2.firstChild, t2, r2);
        }
        function Pe(e2, t2, r2) {
          return a(u(e2), e2, t2, r2);
        }
        function Me(e2, t2, r2) {
          return a(e2, null, t2, r2);
        }
        function Xe(e2, t2, r2) {
          return a(u(e2), e2.nextSibling, t2, r2);
        }
        function De(e2, t2, r2) {
          m(e2);
          return u(e2).removeChild(e2);
        }
        function Ue(e2, t2, r2) {
          var n2 = e2.firstChild;
          a(e2, n2, t2, r2);
          if (n2) {
            while (n2.nextSibling) {
              m(n2.nextSibling);
              e2.removeChild(n2.nextSibling);
            }
            m(n2);
            e2.removeChild(n2);
          }
        }
        function Be(e2, t2, r2) {
          var n2 = r2 || ne(e2, "hx-select");
          if (n2) {
            var i2 = re().createDocumentFragment();
            oe(t2.querySelectorAll(n2), function(e3) {
              i2.appendChild(e3);
            });
            t2 = i2;
          }
          return t2;
        }
        function Fe(e2, t2, r2, n2, i2) {
          switch (e2) {
            case "none":
              return;
            case "outerHTML":
              Ie(r2, n2, i2);
              return;
            case "afterbegin":
              ke(r2, n2, i2);
              return;
            case "beforebegin":
              Pe(r2, n2, i2);
              return;
            case "beforeend":
              Me(r2, n2, i2);
              return;
            case "afterend":
              Xe(r2, n2, i2);
              return;
            case "delete":
              De(r2);
              return;
            default:
              var a2 = Fr(t2);
              for (var o2 = 0; o2 < a2.length; o2++) {
                var s2 = a2[o2];
                try {
                  var l2 = s2.handleSwap(e2, r2, n2, i2);
                  if (l2) {
                    if (typeof l2.length !== "undefined") {
                      for (var u2 = 0; u2 < l2.length; u2++) {
                        var f2 = l2[u2];
                        if (f2.nodeType !== Node.TEXT_NODE && f2.nodeType !== Node.COMMENT_NODE) {
                          i2.tasks.push(Oe(f2));
                        }
                      }
                    }
                    return;
                  }
                } catch (e3) {
                  b(e3);
                }
              }
              if (e2 === "innerHTML") {
                Ue(r2, n2, i2);
              } else {
                Fe(Q.config.defaultSwapStyle, t2, r2, n2, i2);
              }
          }
        }
        function Ve(e2) {
          if (e2.indexOf("<title") > -1) {
            var t2 = e2.replace(H, "");
            var r2 = t2.match(q);
            if (r2) {
              return r2[2];
            }
          }
        }
        function je(e2, t2, r2, n2, i2, a2) {
          i2.title = Ve(n2);
          var o2 = l(n2);
          if (o2) {
            Ce(r2, o2, i2);
            o2 = Be(r2, o2, a2);
            Re(o2);
            return Fe(e2, r2, t2, o2, i2);
          }
        }
        function _e(e2, t2, r2) {
          var n2 = e2.getResponseHeader(t2);
          if (n2.indexOf("{") === 0) {
            var i2 = E(n2);
            for (var a2 in i2) {
              if (i2.hasOwnProperty(a2)) {
                var o2 = i2[a2];
                if (!P(o2)) {
                  o2 = { value: o2 };
                }
                ce(r2, a2, o2);
              }
            }
          } else {
            var s2 = n2.split(",");
            for (var l2 = 0; l2 < s2.length; l2++) {
              ce(r2, s2[l2].trim(), []);
            }
          }
        }
        var x = /[\s,]/;
        var $e = /[_$a-zA-Z]/;
        var We = /[_$a-zA-Z0-9]/;
        var Ge = ['"', "'", "/"];
        var Je = /[^\s]/;
        var Ze = /[{(]/;
        var Ke = /[})]/;
        function Ye(e2) {
          var t2 = [];
          var r2 = 0;
          while (r2 < e2.length) {
            if ($e.exec(e2.charAt(r2))) {
              var n2 = r2;
              while (We.exec(e2.charAt(r2 + 1))) {
                r2++;
              }
              t2.push(e2.substr(n2, r2 - n2 + 1));
            } else if (Ge.indexOf(e2.charAt(r2)) !== -1) {
              var i2 = e2.charAt(r2);
              var n2 = r2;
              r2++;
              while (r2 < e2.length && e2.charAt(r2) !== i2) {
                if (e2.charAt(r2) === "\\") {
                  r2++;
                }
                r2++;
              }
              t2.push(e2.substr(n2, r2 - n2 + 1));
            } else {
              var a2 = e2.charAt(r2);
              t2.push(a2);
            }
            r2++;
          }
          return t2;
        }
        function Qe(e2, t2, r2) {
          return $e.exec(e2.charAt(0)) && e2 !== "true" && e2 !== "false" && e2 !== "this" && e2 !== r2 && t2 !== ".";
        }
        function et(e2, t2, r2) {
          if (t2[0] === "[") {
            t2.shift();
            var n2 = 1;
            var i2 = " return (function(" + r2 + "){ return (";
            var a2 = null;
            while (t2.length > 0) {
              var o2 = t2[0];
              if (o2 === "]") {
                n2--;
                if (n2 === 0) {
                  if (a2 === null) {
                    i2 = i2 + "true";
                  }
                  t2.shift();
                  i2 += ")})";
                  try {
                    var s2 = Tr(e2, function() {
                      return Function(i2)();
                    }, function() {
                      return true;
                    });
                    s2.source = i2;
                    return s2;
                  } catch (e3) {
                    fe(re().body, "htmx:syntax:error", { error: e3, source: i2 });
                    return null;
                  }
                }
              } else if (o2 === "[") {
                n2++;
              }
              if (Qe(o2, a2, r2)) {
                i2 += "((" + r2 + "." + o2 + ") ? (" + r2 + "." + o2 + ") : (window." + o2 + "))";
              } else {
                i2 = i2 + o2;
              }
              a2 = t2.shift();
            }
          }
        }
        function y(e2, t2) {
          var r2 = "";
          while (e2.length > 0 && !t2.test(e2[0])) {
            r2 += e2.shift();
          }
          return r2;
        }
        function tt(e2) {
          var t2;
          if (e2.length > 0 && Ze.test(e2[0])) {
            e2.shift();
            t2 = y(e2, Ke).trim();
            e2.shift();
          } else {
            t2 = y(e2, x);
          }
          return t2;
        }
        var rt = "input, textarea, select";
        function nt(e2, t2, r2) {
          var n2 = [];
          var i2 = Ye(t2);
          do {
            y(i2, Je);
            var a2 = i2.length;
            var o2 = y(i2, /[,\[\s]/);
            if (o2 !== "") {
              if (o2 === "every") {
                var s2 = { trigger: "every" };
                y(i2, Je);
                s2.pollInterval = d(y(i2, /[,\[\s]/));
                y(i2, Je);
                var l2 = et(e2, i2, "event");
                if (l2) {
                  s2.eventFilter = l2;
                }
                n2.push(s2);
              } else if (o2.indexOf("sse:") === 0) {
                n2.push({ trigger: "sse", sseEvent: o2.substr(4) });
              } else {
                var u2 = { trigger: o2 };
                var l2 = et(e2, i2, "event");
                if (l2) {
                  u2.eventFilter = l2;
                }
                while (i2.length > 0 && i2[0] !== ",") {
                  y(i2, Je);
                  var f2 = i2.shift();
                  if (f2 === "changed") {
                    u2.changed = true;
                  } else if (f2 === "once") {
                    u2.once = true;
                  } else if (f2 === "consume") {
                    u2.consume = true;
                  } else if (f2 === "delay" && i2[0] === ":") {
                    i2.shift();
                    u2.delay = d(y(i2, x));
                  } else if (f2 === "from" && i2[0] === ":") {
                    i2.shift();
                    if (Ze.test(i2[0])) {
                      var c2 = tt(i2);
                    } else {
                      var c2 = y(i2, x);
                      if (c2 === "closest" || c2 === "find" || c2 === "next" || c2 === "previous") {
                        i2.shift();
                        var h2 = tt(i2);
                        if (h2.length > 0) {
                          c2 += " " + h2;
                        }
                      }
                    }
                    u2.from = c2;
                  } else if (f2 === "target" && i2[0] === ":") {
                    i2.shift();
                    u2.target = tt(i2);
                  } else if (f2 === "throttle" && i2[0] === ":") {
                    i2.shift();
                    u2.throttle = d(y(i2, x));
                  } else if (f2 === "queue" && i2[0] === ":") {
                    i2.shift();
                    u2.queue = y(i2, x);
                  } else if (f2 === "root" && i2[0] === ":") {
                    i2.shift();
                    u2[f2] = tt(i2);
                  } else if (f2 === "threshold" && i2[0] === ":") {
                    i2.shift();
                    u2[f2] = y(i2, x);
                  } else {
                    fe(e2, "htmx:syntax:error", { token: i2.shift() });
                  }
                }
                n2.push(u2);
              }
            }
            if (i2.length === a2) {
              fe(e2, "htmx:syntax:error", { token: i2.shift() });
            }
            y(i2, Je);
          } while (i2[0] === "," && i2.shift());
          if (r2) {
            r2[t2] = n2;
          }
          return n2;
        }
        function it(e2) {
          var t2 = te(e2, "hx-trigger");
          var r2 = [];
          if (t2) {
            var n2 = Q.config.triggerSpecsCache;
            r2 = n2 && n2[t2] || nt(e2, t2, n2);
          }
          if (r2.length > 0) {
            return r2;
          } else if (h(e2, "form")) {
            return [{ trigger: "submit" }];
          } else if (h(e2, 'input[type="button"], input[type="submit"]')) {
            return [{ trigger: "click" }];
          } else if (h(e2, rt)) {
            return [{ trigger: "change" }];
          } else {
            return [{ trigger: "click" }];
          }
        }
        function at(e2) {
          ae(e2).cancelled = true;
        }
        function ot(e2, t2, r2) {
          var n2 = ae(e2);
          n2.timeout = setTimeout(function() {
            if (se(e2) && n2.cancelled !== true) {
              if (!ct(r2, e2, Wt("hx:poll:trigger", { triggerSpec: r2, target: e2 }))) {
                t2(e2);
              }
              ot(e2, t2, r2);
            }
          }, r2.pollInterval);
        }
        function st(e2) {
          return location.hostname === e2.hostname && ee(e2, "href") && ee(e2, "href").indexOf("#") !== 0;
        }
        function lt(t2, r2, e2) {
          if (t2.tagName === "A" && st(t2) && (t2.target === "" || t2.target === "_self") || t2.tagName === "FORM") {
            r2.boosted = true;
            var n2, i2;
            if (t2.tagName === "A") {
              n2 = "get";
              i2 = ee(t2, "href");
            } else {
              var a2 = ee(t2, "method");
              n2 = a2 ? a2.toLowerCase() : "get";
              i2 = ee(t2, "action");
            }
            e2.forEach(function(e3) {
              ht(t2, function(e4, t3) {
                if (v(e4, Q.config.disableSelector)) {
                  m(e4);
                  return;
                }
                he(n2, i2, e4, t3);
              }, r2, e3, true);
            });
          }
        }
        function ut(e2, t2) {
          if (e2.type === "submit" || e2.type === "click") {
            if (t2.tagName === "FORM") {
              return true;
            }
            if (h(t2, 'input[type="submit"], button') && v(t2, "form") !== null) {
              return true;
            }
            if (t2.tagName === "A" && t2.href && (t2.getAttribute("href") === "#" || t2.getAttribute("href").indexOf("#") !== 0)) {
              return true;
            }
          }
          return false;
        }
        function ft(e2, t2) {
          return ae(e2).boosted && e2.tagName === "A" && t2.type === "click" && (t2.ctrlKey || t2.metaKey);
        }
        function ct(e2, t2, r2) {
          var n2 = e2.eventFilter;
          if (n2) {
            try {
              return n2.call(t2, r2) !== true;
            } catch (e3) {
              fe(re().body, "htmx:eventFilter:error", { error: e3, source: n2.source });
              return true;
            }
          }
          return false;
        }
        function ht(a2, o2, e2, s2, l2) {
          var u2 = ae(a2);
          var t2;
          if (s2.from) {
            t2 = Z(a2, s2.from);
          } else {
            t2 = [a2];
          }
          if (s2.changed) {
            t2.forEach(function(e3) {
              var t3 = ae(e3);
              t3.lastValue = e3.value;
            });
          }
          oe(t2, function(n2) {
            var i2 = function(e3) {
              if (!se(a2)) {
                n2.removeEventListener(s2.trigger, i2);
                return;
              }
              if (ft(a2, e3)) {
                return;
              }
              if (l2 || ut(e3, a2)) {
                e3.preventDefault();
              }
              if (ct(s2, a2, e3)) {
                return;
              }
              var t3 = ae(e3);
              t3.triggerSpec = s2;
              if (t3.handledFor == null) {
                t3.handledFor = [];
              }
              if (t3.handledFor.indexOf(a2) < 0) {
                t3.handledFor.push(a2);
                if (s2.consume) {
                  e3.stopPropagation();
                }
                if (s2.target && e3.target) {
                  if (!h(e3.target, s2.target)) {
                    return;
                  }
                }
                if (s2.once) {
                  if (u2.triggeredOnce) {
                    return;
                  } else {
                    u2.triggeredOnce = true;
                  }
                }
                if (s2.changed) {
                  var r2 = ae(n2);
                  if (r2.lastValue === n2.value) {
                    return;
                  }
                  r2.lastValue = n2.value;
                }
                if (u2.delayed) {
                  clearTimeout(u2.delayed);
                }
                if (u2.throttle) {
                  return;
                }
                if (s2.throttle > 0) {
                  if (!u2.throttle) {
                    o2(a2, e3);
                    u2.throttle = setTimeout(function() {
                      u2.throttle = null;
                    }, s2.throttle);
                  }
                } else if (s2.delay > 0) {
                  u2.delayed = setTimeout(function() {
                    o2(a2, e3);
                  }, s2.delay);
                } else {
                  ce(a2, "htmx:trigger");
                  o2(a2, e3);
                }
              }
            };
            if (e2.listenerInfos == null) {
              e2.listenerInfos = [];
            }
            e2.listenerInfos.push({ trigger: s2.trigger, listener: i2, on: n2 });
            n2.addEventListener(s2.trigger, i2);
          });
        }
        var vt = false;
        var dt = null;
        function gt() {
          if (!dt) {
            dt = function() {
              vt = true;
            };
            window.addEventListener("scroll", dt);
            setInterval(function() {
              if (vt) {
                vt = false;
                oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e2) {
                  pt(e2);
                });
              }
            }, 200);
          }
        }
        function pt(t2) {
          if (!o(t2, "data-hx-revealed") && X(t2)) {
            t2.setAttribute("data-hx-revealed", "true");
            var e2 = ae(t2);
            if (e2.initHash) {
              ce(t2, "revealed");
            } else {
              t2.addEventListener("htmx:afterProcessNode", function(e3) {
                ce(t2, "revealed");
              }, { once: true });
            }
          }
        }
        function mt(e2, t2, r2) {
          var n2 = D(r2);
          for (var i2 = 0; i2 < n2.length; i2++) {
            var a2 = n2[i2].split(/:(.+)/);
            if (a2[0] === "connect") {
              xt(e2, a2[1], 0);
            }
            if (a2[0] === "send") {
              bt(e2);
            }
          }
        }
        function xt(s2, r2, n2) {
          if (!se(s2)) {
            return;
          }
          if (r2.indexOf("/") == 0) {
            var e2 = location.hostname + (location.port ? ":" + location.port : "");
            if (location.protocol == "https:") {
              r2 = "wss://" + e2 + r2;
            } else if (location.protocol == "http:") {
              r2 = "ws://" + e2 + r2;
            }
          }
          var t2 = Q.createWebSocket(r2);
          t2.onerror = function(e3) {
            fe(s2, "htmx:wsError", { error: e3, socket: t2 });
            yt(s2);
          };
          t2.onclose = function(e3) {
            if ([1006, 1012, 1013].indexOf(e3.code) >= 0) {
              var t3 = wt(n2);
              setTimeout(function() {
                xt(s2, r2, n2 + 1);
              }, t3);
            }
          };
          t2.onopen = function(e3) {
            n2 = 0;
          };
          ae(s2).webSocket = t2;
          t2.addEventListener("message", function(e3) {
            if (yt(s2)) {
              return;
            }
            var t3 = e3.data;
            R(s2, function(e4) {
              t3 = e4.transformResponse(t3, null, s2);
            });
            var r3 = T(s2);
            var n3 = l(t3);
            var i2 = M(n3.children);
            for (var a2 = 0; a2 < i2.length; a2++) {
              var o2 = i2[a2];
              Ee(te(o2, "hx-swap-oob") || "true", o2, r3);
            }
            nr(r3.tasks);
          });
        }
        function yt(e2) {
          if (!se(e2)) {
            ae(e2).webSocket.close();
            return true;
          }
        }
        function bt(u2) {
          var f2 = c(u2, function(e2) {
            return ae(e2).webSocket != null;
          });
          if (f2) {
            u2.addEventListener(it(u2)[0].trigger, function(e2) {
              var t2 = ae(f2).webSocket;
              var r2 = xr(u2, f2);
              var n2 = dr(u2, "post");
              var i2 = n2.errors;
              var a2 = n2.values;
              var o2 = Hr(u2);
              var s2 = le(a2, o2);
              var l2 = yr(s2, u2);
              l2["HEADERS"] = r2;
              if (i2 && i2.length > 0) {
                ce(u2, "htmx:validation:halted", i2);
                return;
              }
              t2.send(JSON.stringify(l2));
              if (ut(e2, u2)) {
                e2.preventDefault();
              }
            });
          } else {
            fe(u2, "htmx:noWebSocketSourceError");
          }
        }
        function wt(e2) {
          var t2 = Q.config.wsReconnectDelay;
          if (typeof t2 === "function") {
            return t2(e2);
          }
          if (t2 === "full-jitter") {
            var r2 = Math.min(e2, 6);
            var n2 = 1e3 * Math.pow(2, r2);
            return n2 * Math.random();
          }
          b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
        }
        function St(e2, t2, r2) {
          var n2 = D(r2);
          for (var i2 = 0; i2 < n2.length; i2++) {
            var a2 = n2[i2].split(/:(.+)/);
            if (a2[0] === "connect") {
              Et(e2, a2[1]);
            }
            if (a2[0] === "swap") {
              Ct(e2, a2[1]);
            }
          }
        }
        function Et(t2, e2) {
          var r2 = Q.createEventSource(e2);
          r2.onerror = function(e3) {
            fe(t2, "htmx:sseError", { error: e3, source: r2 });
            Tt(t2);
          };
          ae(t2).sseEventSource = r2;
        }
        function Ct(a2, o2) {
          var s2 = c(a2, Ot);
          if (s2) {
            var l2 = ae(s2).sseEventSource;
            var u2 = function(e2) {
              if (Tt(s2)) {
                return;
              }
              if (!se(a2)) {
                l2.removeEventListener(o2, u2);
                return;
              }
              var t2 = e2.data;
              R(a2, function(e3) {
                t2 = e3.transformResponse(t2, null, a2);
              });
              var r2 = wr(a2);
              var n2 = ye(a2);
              var i2 = T(a2);
              je(r2.swapStyle, n2, a2, t2, i2);
              nr(i2.tasks);
              ce(a2, "htmx:sseMessage", e2);
            };
            ae(a2).sseListener = u2;
            l2.addEventListener(o2, u2);
          } else {
            fe(a2, "htmx:noSSESourceError");
          }
        }
        function Rt(e2, t2, r2) {
          var n2 = c(e2, Ot);
          if (n2) {
            var i2 = ae(n2).sseEventSource;
            var a2 = function() {
              if (!Tt(n2)) {
                if (se(e2)) {
                  t2(e2);
                } else {
                  i2.removeEventListener(r2, a2);
                }
              }
            };
            ae(e2).sseListener = a2;
            i2.addEventListener(r2, a2);
          } else {
            fe(e2, "htmx:noSSESourceError");
          }
        }
        function Tt(e2) {
          if (!se(e2)) {
            ae(e2).sseEventSource.close();
            return true;
          }
        }
        function Ot(e2) {
          return ae(e2).sseEventSource != null;
        }
        function qt(e2, t2, r2, n2) {
          var i2 = function() {
            if (!r2.loaded) {
              r2.loaded = true;
              t2(e2);
            }
          };
          if (n2 > 0) {
            setTimeout(i2, n2);
          } else {
            i2();
          }
        }
        function Ht(t2, i2, e2) {
          var a2 = false;
          oe(w, function(r2) {
            if (o(t2, "hx-" + r2)) {
              var n2 = te(t2, "hx-" + r2);
              a2 = true;
              i2.path = n2;
              i2.verb = r2;
              e2.forEach(function(e3) {
                Lt(t2, e3, i2, function(e4, t3) {
                  if (v(e4, Q.config.disableSelector)) {
                    m(e4);
                    return;
                  }
                  he(r2, n2, e4, t3);
                });
              });
            }
          });
          return a2;
        }
        function Lt(n2, e2, t2, r2) {
          if (e2.sseEvent) {
            Rt(n2, r2, e2.sseEvent);
          } else if (e2.trigger === "revealed") {
            gt();
            ht(n2, r2, t2, e2);
            pt(n2);
          } else if (e2.trigger === "intersect") {
            var i2 = {};
            if (e2.root) {
              i2.root = ue(n2, e2.root);
            }
            if (e2.threshold) {
              i2.threshold = parseFloat(e2.threshold);
            }
            var a2 = new IntersectionObserver(function(e3) {
              for (var t3 = 0; t3 < e3.length; t3++) {
                var r3 = e3[t3];
                if (r3.isIntersecting) {
                  ce(n2, "intersect");
                  break;
                }
              }
            }, i2);
            a2.observe(n2);
            ht(n2, r2, t2, e2);
          } else if (e2.trigger === "load") {
            if (!ct(e2, n2, Wt("load", { elt: n2 }))) {
              qt(n2, r2, t2, e2.delay);
            }
          } else if (e2.pollInterval > 0) {
            t2.polling = true;
            ot(n2, r2, e2);
          } else {
            ht(n2, r2, t2, e2);
          }
        }
        function At(e2) {
          if (!e2.htmxExecuted && Q.config.allowScriptTags && (e2.type === "text/javascript" || e2.type === "module" || e2.type === "")) {
            var t2 = re().createElement("script");
            oe(e2.attributes, function(e3) {
              t2.setAttribute(e3.name, e3.value);
            });
            t2.textContent = e2.textContent;
            t2.async = false;
            if (Q.config.inlineScriptNonce) {
              t2.nonce = Q.config.inlineScriptNonce;
            }
            var r2 = e2.parentElement;
            try {
              r2.insertBefore(t2, e2);
            } catch (e3) {
              b(e3);
            } finally {
              if (e2.parentElement) {
                e2.parentElement.removeChild(e2);
              }
            }
          }
        }
        function Nt(e2) {
          if (h(e2, "script")) {
            At(e2);
          }
          oe(f(e2, "script"), function(e3) {
            At(e3);
          });
        }
        function It(e2) {
          var t2 = e2.attributes;
          if (!t2) {
            return false;
          }
          for (var r2 = 0; r2 < t2.length; r2++) {
            var n2 = t2[r2].name;
            if (g(n2, "hx-on:") || g(n2, "data-hx-on:") || g(n2, "hx-on-") || g(n2, "data-hx-on-")) {
              return true;
            }
          }
          return false;
        }
        function kt(e2) {
          var t2 = null;
          var r2 = [];
          if (It(e2)) {
            r2.push(e2);
          }
          if (document.evaluate) {
            var n2 = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', e2);
            while (t2 = n2.iterateNext()) r2.push(t2);
          } else if (typeof e2.getElementsByTagName === "function") {
            var i2 = e2.getElementsByTagName("*");
            for (var a2 = 0; a2 < i2.length; a2++) {
              if (It(i2[a2])) {
                r2.push(i2[a2]);
              }
            }
          }
          return r2;
        }
        function Pt(e2) {
          if (e2.querySelectorAll) {
            var t2 = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
            var r2 = e2.querySelectorAll(i + t2 + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
            return r2;
          } else {
            return [];
          }
        }
        function Mt(e2) {
          var t2 = v(e2.target, "button, input[type='submit']");
          var r2 = Dt(e2);
          if (r2) {
            r2.lastButtonClicked = t2;
          }
        }
        function Xt(e2) {
          var t2 = Dt(e2);
          if (t2) {
            t2.lastButtonClicked = null;
          }
        }
        function Dt(e2) {
          var t2 = v(e2.target, "button, input[type='submit']");
          if (!t2) {
            return;
          }
          var r2 = p("#" + ee(t2, "form")) || v(t2, "form");
          if (!r2) {
            return;
          }
          return ae(r2);
        }
        function Ut(e2) {
          e2.addEventListener("click", Mt);
          e2.addEventListener("focusin", Mt);
          e2.addEventListener("focusout", Xt);
        }
        function Bt(e2) {
          var t2 = Ye(e2);
          var r2 = 0;
          for (var n2 = 0; n2 < t2.length; n2++) {
            const i2 = t2[n2];
            if (i2 === "{") {
              r2++;
            } else if (i2 === "}") {
              r2--;
            }
          }
          return r2;
        }
        function Ft(t2, e2, r2) {
          var n2 = ae(t2);
          if (!Array.isArray(n2.onHandlers)) {
            n2.onHandlers = [];
          }
          var i2;
          var a2 = function(e3) {
            return Tr(t2, function() {
              if (!i2) {
                i2 = new Function("event", r2);
              }
              i2.call(t2, e3);
            });
          };
          t2.addEventListener(e2, a2);
          n2.onHandlers.push({ event: e2, listener: a2 });
        }
        function Vt(e2) {
          var t2 = te(e2, "hx-on");
          if (t2) {
            var r2 = {};
            var n2 = t2.split("\n");
            var i2 = null;
            var a2 = 0;
            while (n2.length > 0) {
              var o2 = n2.shift();
              var s2 = o2.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
              if (a2 === 0 && s2) {
                o2.split(":");
                i2 = s2[1].slice(0, -1);
                r2[i2] = s2[2];
              } else {
                r2[i2] += o2;
              }
              a2 += Bt(o2);
            }
            for (var l2 in r2) {
              Ft(e2, l2, r2[l2]);
            }
          }
        }
        function jt(e2) {
          Ae(e2);
          for (var t2 = 0; t2 < e2.attributes.length; t2++) {
            var r2 = e2.attributes[t2].name;
            var n2 = e2.attributes[t2].value;
            if (g(r2, "hx-on") || g(r2, "data-hx-on")) {
              var i2 = r2.indexOf("-on") + 3;
              var a2 = r2.slice(i2, i2 + 1);
              if (a2 === "-" || a2 === ":") {
                var o2 = r2.slice(i2 + 1);
                if (g(o2, ":")) {
                  o2 = "htmx" + o2;
                } else if (g(o2, "-")) {
                  o2 = "htmx:" + o2.slice(1);
                } else if (g(o2, "htmx-")) {
                  o2 = "htmx:" + o2.slice(5);
                }
                Ft(e2, o2, n2);
              }
            }
          }
        }
        function _t(t2) {
          if (v(t2, Q.config.disableSelector)) {
            m(t2);
            return;
          }
          var r2 = ae(t2);
          if (r2.initHash !== Le(t2)) {
            Ne(t2);
            r2.initHash = Le(t2);
            Vt(t2);
            ce(t2, "htmx:beforeProcessNode");
            if (t2.value) {
              r2.lastValue = t2.value;
            }
            var e2 = it(t2);
            var n2 = Ht(t2, r2, e2);
            if (!n2) {
              if (ne(t2, "hx-boost") === "true") {
                lt(t2, r2, e2);
              } else if (o(t2, "hx-trigger")) {
                e2.forEach(function(e3) {
                  Lt(t2, e3, r2, function() {
                  });
                });
              }
            }
            if (t2.tagName === "FORM" || ee(t2, "type") === "submit" && o(t2, "form")) {
              Ut(t2);
            }
            var i2 = te(t2, "hx-sse");
            if (i2) {
              St(t2, r2, i2);
            }
            var a2 = te(t2, "hx-ws");
            if (a2) {
              mt(t2, r2, a2);
            }
            ce(t2, "htmx:afterProcessNode");
          }
        }
        function zt(e2) {
          e2 = p(e2);
          if (v(e2, Q.config.disableSelector)) {
            m(e2);
            return;
          }
          _t(e2);
          oe(Pt(e2), function(e3) {
            _t(e3);
          });
          oe(kt(e2), jt);
        }
        function $t(e2) {
          return e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function Wt(e2, t2) {
          var r2;
          if (window.CustomEvent && typeof window.CustomEvent === "function") {
            r2 = new CustomEvent(e2, { bubbles: true, cancelable: true, detail: t2 });
          } else {
            r2 = re().createEvent("CustomEvent");
            r2.initCustomEvent(e2, true, true, t2);
          }
          return r2;
        }
        function fe(e2, t2, r2) {
          ce(e2, t2, le({ error: t2 }, r2));
        }
        function Gt(e2) {
          return e2 === "htmx:afterProcessNode";
        }
        function R(e2, t2) {
          oe(Fr(e2), function(e3) {
            try {
              t2(e3);
            } catch (e4) {
              b(e4);
            }
          });
        }
        function b(e2) {
          if (console.error) {
            console.error(e2);
          } else if (console.log) {
            console.log("ERROR: ", e2);
          }
        }
        function ce(e2, t2, r2) {
          e2 = p(e2);
          if (r2 == null) {
            r2 = {};
          }
          r2["elt"] = e2;
          var n2 = Wt(t2, r2);
          if (Q.logger && !Gt(t2)) {
            Q.logger(e2, t2, r2);
          }
          if (r2.error) {
            b(r2.error);
            ce(e2, "htmx:error", { errorInfo: r2 });
          }
          var i2 = e2.dispatchEvent(n2);
          var a2 = $t(t2);
          if (i2 && a2 !== t2) {
            var o2 = Wt(a2, n2.detail);
            i2 = i2 && e2.dispatchEvent(o2);
          }
          R(e2, function(e3) {
            i2 = i2 && (e3.onEvent(t2, n2) !== false && !n2.defaultPrevented);
          });
          return i2;
        }
        var Jt = location.pathname + location.search;
        function Zt() {
          var e2 = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
          return e2 || re().body;
        }
        function Kt(e2, t2, r2, n2) {
          if (!U()) {
            return;
          }
          if (Q.config.historyCacheSize <= 0) {
            localStorage.removeItem("htmx-history-cache");
            return;
          }
          e2 = B(e2);
          var i2 = E(localStorage.getItem("htmx-history-cache")) || [];
          for (var a2 = 0; a2 < i2.length; a2++) {
            if (i2[a2].url === e2) {
              i2.splice(a2, 1);
              break;
            }
          }
          var o2 = { url: e2, content: t2, title: r2, scroll: n2 };
          ce(re().body, "htmx:historyItemCreated", { item: o2, cache: i2 });
          i2.push(o2);
          while (i2.length > Q.config.historyCacheSize) {
            i2.shift();
          }
          while (i2.length > 0) {
            try {
              localStorage.setItem("htmx-history-cache", JSON.stringify(i2));
              break;
            } catch (e3) {
              fe(re().body, "htmx:historyCacheError", { cause: e3, cache: i2 });
              i2.shift();
            }
          }
        }
        function Yt(e2) {
          if (!U()) {
            return null;
          }
          e2 = B(e2);
          var t2 = E(localStorage.getItem("htmx-history-cache")) || [];
          for (var r2 = 0; r2 < t2.length; r2++) {
            if (t2[r2].url === e2) {
              return t2[r2];
            }
          }
          return null;
        }
        function Qt(e2) {
          var t2 = Q.config.requestClass;
          var r2 = e2.cloneNode(true);
          oe(f(r2, "." + t2), function(e3) {
            n(e3, t2);
          });
          return r2.innerHTML;
        }
        function er() {
          var e2 = Zt();
          var t2 = Jt || location.pathname + location.search;
          var r2;
          try {
            r2 = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
          } catch (e3) {
            r2 = re().querySelector('[hx-history="false"],[data-hx-history="false"]');
          }
          if (!r2) {
            ce(re().body, "htmx:beforeHistorySave", { path: t2, historyElt: e2 });
            Kt(t2, Qt(e2), re().title, window.scrollY);
          }
          if (Q.config.historyEnabled) history.replaceState({ htmx: true }, re().title, window.location.href);
        }
        function tr(e2) {
          if (Q.config.getCacheBusterParam) {
            e2 = e2.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
            if (G(e2, "&") || G(e2, "?")) {
              e2 = e2.slice(0, -1);
            }
          }
          if (Q.config.historyEnabled) {
            history.pushState({ htmx: true }, "", e2);
          }
          Jt = e2;
        }
        function rr(e2) {
          if (Q.config.historyEnabled) history.replaceState({ htmx: true }, "", e2);
          Jt = e2;
        }
        function nr(e2) {
          oe(e2, function(e3) {
            e3.call();
          });
        }
        function ir(a2) {
          var e2 = new XMLHttpRequest();
          var o2 = { path: a2, xhr: e2 };
          ce(re().body, "htmx:historyCacheMiss", o2);
          e2.open("GET", a2, true);
          e2.setRequestHeader("HX-Request", "true");
          e2.setRequestHeader("HX-History-Restore-Request", "true");
          e2.setRequestHeader("HX-Current-URL", re().location.href);
          e2.onload = function() {
            if (this.status >= 200 && this.status < 400) {
              ce(re().body, "htmx:historyCacheMissLoad", o2);
              var e3 = l(this.response);
              e3 = e3.querySelector("[hx-history-elt],[data-hx-history-elt]") || e3;
              var t2 = Zt();
              var r2 = T(t2);
              var n2 = Ve(this.response);
              if (n2) {
                var i2 = C("title");
                if (i2) {
                  i2.innerHTML = n2;
                } else {
                  window.document.title = n2;
                }
              }
              Ue(t2, e3, r2);
              nr(r2.tasks);
              Jt = a2;
              ce(re().body, "htmx:historyRestore", { path: a2, cacheMiss: true, serverResponse: this.response });
            } else {
              fe(re().body, "htmx:historyCacheMissLoadError", o2);
            }
          };
          e2.send();
        }
        function ar(e2) {
          er();
          e2 = e2 || location.pathname + location.search;
          var t2 = Yt(e2);
          if (t2) {
            var r2 = l(t2.content);
            var n2 = Zt();
            var i2 = T(n2);
            Ue(n2, r2, i2);
            nr(i2.tasks);
            document.title = t2.title;
            setTimeout(function() {
              window.scrollTo(0, t2.scroll);
            }, 0);
            Jt = e2;
            ce(re().body, "htmx:historyRestore", { path: e2, item: t2 });
          } else {
            if (Q.config.refreshOnHistoryMiss) {
              window.location.reload(true);
            } else {
              ir(e2);
            }
          }
        }
        function or(e2) {
          var t2 = me(e2, "hx-indicator");
          if (t2 == null) {
            t2 = [e2];
          }
          oe(t2, function(e3) {
            var t3 = ae(e3);
            t3.requestCount = (t3.requestCount || 0) + 1;
            e3.classList["add"].call(e3.classList, Q.config.requestClass);
          });
          return t2;
        }
        function sr(e2) {
          var t2 = me(e2, "hx-disabled-elt");
          if (t2 == null) {
            t2 = [];
          }
          oe(t2, function(e3) {
            var t3 = ae(e3);
            t3.requestCount = (t3.requestCount || 0) + 1;
            e3.setAttribute("disabled", "");
          });
          return t2;
        }
        function lr(e2, t2) {
          oe(e2, function(e3) {
            var t3 = ae(e3);
            t3.requestCount = (t3.requestCount || 0) - 1;
            if (t3.requestCount === 0) {
              e3.classList["remove"].call(e3.classList, Q.config.requestClass);
            }
          });
          oe(t2, function(e3) {
            var t3 = ae(e3);
            t3.requestCount = (t3.requestCount || 0) - 1;
            if (t3.requestCount === 0) {
              e3.removeAttribute("disabled");
            }
          });
        }
        function ur(e2, t2) {
          for (var r2 = 0; r2 < e2.length; r2++) {
            var n2 = e2[r2];
            if (n2.isSameNode(t2)) {
              return true;
            }
          }
          return false;
        }
        function fr(e2) {
          if (e2.name === "" || e2.name == null || e2.disabled || v(e2, "fieldset[disabled]")) {
            return false;
          }
          if (e2.type === "button" || e2.type === "submit" || e2.tagName === "image" || e2.tagName === "reset" || e2.tagName === "file") {
            return false;
          }
          if (e2.type === "checkbox" || e2.type === "radio") {
            return e2.checked;
          }
          return true;
        }
        function cr(e2, t2, r2) {
          if (e2 != null && t2 != null) {
            var n2 = r2[e2];
            if (n2 === void 0) {
              r2[e2] = t2;
            } else if (Array.isArray(n2)) {
              if (Array.isArray(t2)) {
                r2[e2] = n2.concat(t2);
              } else {
                n2.push(t2);
              }
            } else {
              if (Array.isArray(t2)) {
                r2[e2] = [n2].concat(t2);
              } else {
                r2[e2] = [n2, t2];
              }
            }
          }
        }
        function hr(t2, r2, n2, e2, i2) {
          if (e2 == null || ur(t2, e2)) {
            return;
          } else {
            t2.push(e2);
          }
          if (fr(e2)) {
            var a2 = ee(e2, "name");
            var o2 = e2.value;
            if (e2.multiple && e2.tagName === "SELECT") {
              o2 = M(e2.querySelectorAll("option:checked")).map(function(e3) {
                return e3.value;
              });
            }
            if (e2.files) {
              o2 = M(e2.files);
            }
            cr(a2, o2, r2);
            if (i2) {
              vr(e2, n2);
            }
          }
          if (h(e2, "form")) {
            var s2 = e2.elements;
            oe(s2, function(e3) {
              hr(t2, r2, n2, e3, i2);
            });
          }
        }
        function vr(e2, t2) {
          if (e2.willValidate) {
            ce(e2, "htmx:validation:validate");
            if (!e2.checkValidity()) {
              t2.push({ elt: e2, message: e2.validationMessage, validity: e2.validity });
              ce(e2, "htmx:validation:failed", { message: e2.validationMessage, validity: e2.validity });
            }
          }
        }
        function dr(e2, t2) {
          var r2 = [];
          var n2 = {};
          var i2 = {};
          var a2 = [];
          var o2 = ae(e2);
          if (o2.lastButtonClicked && !se(o2.lastButtonClicked)) {
            o2.lastButtonClicked = null;
          }
          var s2 = h(e2, "form") && e2.noValidate !== true || te(e2, "hx-validate") === "true";
          if (o2.lastButtonClicked) {
            s2 = s2 && o2.lastButtonClicked.formNoValidate !== true;
          }
          if (t2 !== "get") {
            hr(r2, i2, a2, v(e2, "form"), s2);
          }
          hr(r2, n2, a2, e2, s2);
          if (o2.lastButtonClicked || e2.tagName === "BUTTON" || e2.tagName === "INPUT" && ee(e2, "type") === "submit") {
            var l2 = o2.lastButtonClicked || e2;
            var u2 = ee(l2, "name");
            cr(u2, l2.value, i2);
          }
          var f2 = me(e2, "hx-include");
          oe(f2, function(e3) {
            hr(r2, n2, a2, e3, s2);
            if (!h(e3, "form")) {
              oe(e3.querySelectorAll(rt), function(e4) {
                hr(r2, n2, a2, e4, s2);
              });
            }
          });
          n2 = le(n2, i2);
          return { errors: a2, values: n2 };
        }
        function gr(e2, t2, r2) {
          if (e2 !== "") {
            e2 += "&";
          }
          if (String(r2) === "[object Object]") {
            r2 = JSON.stringify(r2);
          }
          var n2 = encodeURIComponent(r2);
          e2 += encodeURIComponent(t2) + "=" + n2;
          return e2;
        }
        function pr(e2) {
          var t2 = "";
          for (var r2 in e2) {
            if (e2.hasOwnProperty(r2)) {
              var n2 = e2[r2];
              if (Array.isArray(n2)) {
                oe(n2, function(e3) {
                  t2 = gr(t2, r2, e3);
                });
              } else {
                t2 = gr(t2, r2, n2);
              }
            }
          }
          return t2;
        }
        function mr(e2) {
          var t2 = new FormData();
          for (var r2 in e2) {
            if (e2.hasOwnProperty(r2)) {
              var n2 = e2[r2];
              if (Array.isArray(n2)) {
                oe(n2, function(e3) {
                  t2.append(r2, e3);
                });
              } else {
                t2.append(r2, n2);
              }
            }
          }
          return t2;
        }
        function xr(e2, t2, r2) {
          var n2 = { "HX-Request": "true", "HX-Trigger": ee(e2, "id"), "HX-Trigger-Name": ee(e2, "name"), "HX-Target": te(t2, "id"), "HX-Current-URL": re().location.href };
          Rr(e2, "hx-headers", false, n2);
          if (r2 !== void 0) {
            n2["HX-Prompt"] = r2;
          }
          if (ae(e2).boosted) {
            n2["HX-Boosted"] = "true";
          }
          return n2;
        }
        function yr(t2, e2) {
          var r2 = ne(e2, "hx-params");
          if (r2) {
            if (r2 === "none") {
              return {};
            } else if (r2 === "*") {
              return t2;
            } else if (r2.indexOf("not ") === 0) {
              oe(r2.substr(4).split(","), function(e3) {
                e3 = e3.trim();
                delete t2[e3];
              });
              return t2;
            } else {
              var n2 = {};
              oe(r2.split(","), function(e3) {
                e3 = e3.trim();
                n2[e3] = t2[e3];
              });
              return n2;
            }
          } else {
            return t2;
          }
        }
        function br(e2) {
          return ee(e2, "href") && ee(e2, "href").indexOf("#") >= 0;
        }
        function wr(e2, t2) {
          var r2 = t2 ? t2 : ne(e2, "hx-swap");
          var n2 = { swapStyle: ae(e2).boosted ? "innerHTML" : Q.config.defaultSwapStyle, swapDelay: Q.config.defaultSwapDelay, settleDelay: Q.config.defaultSettleDelay };
          if (Q.config.scrollIntoViewOnBoost && ae(e2).boosted && !br(e2)) {
            n2["show"] = "top";
          }
          if (r2) {
            var i2 = D(r2);
            if (i2.length > 0) {
              for (var a2 = 0; a2 < i2.length; a2++) {
                var o2 = i2[a2];
                if (o2.indexOf("swap:") === 0) {
                  n2["swapDelay"] = d(o2.substr(5));
                } else if (o2.indexOf("settle:") === 0) {
                  n2["settleDelay"] = d(o2.substr(7));
                } else if (o2.indexOf("transition:") === 0) {
                  n2["transition"] = o2.substr(11) === "true";
                } else if (o2.indexOf("ignoreTitle:") === 0) {
                  n2["ignoreTitle"] = o2.substr(12) === "true";
                } else if (o2.indexOf("scroll:") === 0) {
                  var s2 = o2.substr(7);
                  var l2 = s2.split(":");
                  var u2 = l2.pop();
                  var f2 = l2.length > 0 ? l2.join(":") : null;
                  n2["scroll"] = u2;
                  n2["scrollTarget"] = f2;
                } else if (o2.indexOf("show:") === 0) {
                  var c2 = o2.substr(5);
                  var l2 = c2.split(":");
                  var h2 = l2.pop();
                  var f2 = l2.length > 0 ? l2.join(":") : null;
                  n2["show"] = h2;
                  n2["showTarget"] = f2;
                } else if (o2.indexOf("focus-scroll:") === 0) {
                  var v2 = o2.substr("focus-scroll:".length);
                  n2["focusScroll"] = v2 == "true";
                } else if (a2 == 0) {
                  n2["swapStyle"] = o2;
                } else {
                  b("Unknown modifier in hx-swap: " + o2);
                }
              }
            }
          }
          return n2;
        }
        function Sr(e2) {
          return ne(e2, "hx-encoding") === "multipart/form-data" || h(e2, "form") && ee(e2, "enctype") === "multipart/form-data";
        }
        function Er(t2, r2, n2) {
          var i2 = null;
          R(r2, function(e2) {
            if (i2 == null) {
              i2 = e2.encodeParameters(t2, n2, r2);
            }
          });
          if (i2 != null) {
            return i2;
          } else {
            if (Sr(r2)) {
              return mr(n2);
            } else {
              return pr(n2);
            }
          }
        }
        function T(e2) {
          return { tasks: [], elts: [e2] };
        }
        function Cr(e2, t2) {
          var r2 = e2[0];
          var n2 = e2[e2.length - 1];
          if (t2.scroll) {
            var i2 = null;
            if (t2.scrollTarget) {
              i2 = ue(r2, t2.scrollTarget);
            }
            if (t2.scroll === "top" && (r2 || i2)) {
              i2 = i2 || r2;
              i2.scrollTop = 0;
            }
            if (t2.scroll === "bottom" && (n2 || i2)) {
              i2 = i2 || n2;
              i2.scrollTop = i2.scrollHeight;
            }
          }
          if (t2.show) {
            var i2 = null;
            if (t2.showTarget) {
              var a2 = t2.showTarget;
              if (t2.showTarget === "window") {
                a2 = "body";
              }
              i2 = ue(r2, a2);
            }
            if (t2.show === "top" && (r2 || i2)) {
              i2 = i2 || r2;
              i2.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior });
            }
            if (t2.show === "bottom" && (n2 || i2)) {
              i2 = i2 || n2;
              i2.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior });
            }
          }
        }
        function Rr(e2, t2, r2, n2) {
          if (n2 == null) {
            n2 = {};
          }
          if (e2 == null) {
            return n2;
          }
          var i2 = te(e2, t2);
          if (i2) {
            var a2 = i2.trim();
            var o2 = r2;
            if (a2 === "unset") {
              return null;
            }
            if (a2.indexOf("javascript:") === 0) {
              a2 = a2.substr(11);
              o2 = true;
            } else if (a2.indexOf("js:") === 0) {
              a2 = a2.substr(3);
              o2 = true;
            }
            if (a2.indexOf("{") !== 0) {
              a2 = "{" + a2 + "}";
            }
            var s2;
            if (o2) {
              s2 = Tr(e2, function() {
                return Function("return (" + a2 + ")")();
              }, {});
            } else {
              s2 = E(a2);
            }
            for (var l2 in s2) {
              if (s2.hasOwnProperty(l2)) {
                if (n2[l2] == null) {
                  n2[l2] = s2[l2];
                }
              }
            }
          }
          return Rr(u(e2), t2, r2, n2);
        }
        function Tr(e2, t2, r2) {
          if (Q.config.allowEval) {
            return t2();
          } else {
            fe(e2, "htmx:evalDisallowedError");
            return r2;
          }
        }
        function Or(e2, t2) {
          return Rr(e2, "hx-vars", true, t2);
        }
        function qr(e2, t2) {
          return Rr(e2, "hx-vals", false, t2);
        }
        function Hr(e2) {
          return le(Or(e2), qr(e2));
        }
        function Lr(t2, r2, n2) {
          if (n2 !== null) {
            try {
              t2.setRequestHeader(r2, n2);
            } catch (e2) {
              t2.setRequestHeader(r2, encodeURIComponent(n2));
              t2.setRequestHeader(r2 + "-URI-AutoEncoded", "true");
            }
          }
        }
        function Ar(t2) {
          if (t2.responseURL && typeof URL !== "undefined") {
            try {
              var e2 = new URL(t2.responseURL);
              return e2.pathname + e2.search;
            } catch (e3) {
              fe(re().body, "htmx:badResponseUrl", { url: t2.responseURL });
            }
          }
        }
        function O(e2, t2) {
          return t2.test(e2.getAllResponseHeaders());
        }
        function Nr(e2, t2, r2) {
          e2 = e2.toLowerCase();
          if (r2) {
            if (r2 instanceof Element || I(r2, "String")) {
              return he(e2, t2, null, null, { targetOverride: p(r2), returnPromise: true });
            } else {
              return he(e2, t2, p(r2.source), r2.event, { handler: r2.handler, headers: r2.headers, values: r2.values, targetOverride: p(r2.target), swapOverride: r2.swap, select: r2.select, returnPromise: true });
            }
          } else {
            return he(e2, t2, null, null, { returnPromise: true });
          }
        }
        function Ir(e2) {
          var t2 = [];
          while (e2) {
            t2.push(e2);
            e2 = e2.parentElement;
          }
          return t2;
        }
        function kr(e2, t2, r2) {
          var n2;
          var i2;
          if (typeof URL === "function") {
            i2 = new URL(t2, document.location.href);
            var a2 = document.location.origin;
            n2 = a2 === i2.origin;
          } else {
            i2 = t2;
            n2 = g(t2, document.location.origin);
          }
          if (Q.config.selfRequestsOnly) {
            if (!n2) {
              return false;
            }
          }
          return ce(e2, "htmx:validateUrl", le({ url: i2, sameHost: n2 }, r2));
        }
        function he(t2, r2, n2, i2, a2, e2) {
          var o2 = null;
          var s2 = null;
          a2 = a2 != null ? a2 : {};
          if (a2.returnPromise && typeof Promise !== "undefined") {
            var l2 = new Promise(function(e3, t3) {
              o2 = e3;
              s2 = t3;
            });
          }
          if (n2 == null) {
            n2 = re().body;
          }
          var M2 = a2.handler || Mr;
          var X2 = a2.select || null;
          if (!se(n2)) {
            ie(o2);
            return l2;
          }
          var u2 = a2.targetOverride || ye(n2);
          if (u2 == null || u2 == pe) {
            fe(n2, "htmx:targetError", { target: te(n2, "hx-target") });
            ie(s2);
            return l2;
          }
          var f2 = ae(n2);
          var c2 = f2.lastButtonClicked;
          if (c2) {
            var h2 = ee(c2, "formaction");
            if (h2 != null) {
              r2 = h2;
            }
            var v2 = ee(c2, "formmethod");
            if (v2 != null) {
              if (v2.toLowerCase() !== "dialog") {
                t2 = v2;
              }
            }
          }
          var d2 = ne(n2, "hx-confirm");
          if (e2 === void 0) {
            var D2 = function(e3) {
              return he(t2, r2, n2, i2, a2, !!e3);
            };
            var U2 = { target: u2, elt: n2, path: r2, verb: t2, triggeringEvent: i2, etc: a2, issueRequest: D2, question: d2 };
            if (ce(n2, "htmx:confirm", U2) === false) {
              ie(o2);
              return l2;
            }
          }
          var g2 = n2;
          var p2 = ne(n2, "hx-sync");
          var m2 = null;
          var x2 = false;
          if (p2) {
            var B2 = p2.split(":");
            var F2 = B2[0].trim();
            if (F2 === "this") {
              g2 = xe(n2, "hx-sync");
            } else {
              g2 = ue(n2, F2);
            }
            p2 = (B2[1] || "drop").trim();
            f2 = ae(g2);
            if (p2 === "drop" && f2.xhr && f2.abortable !== true) {
              ie(o2);
              return l2;
            } else if (p2 === "abort") {
              if (f2.xhr) {
                ie(o2);
                return l2;
              } else {
                x2 = true;
              }
            } else if (p2 === "replace") {
              ce(g2, "htmx:abort");
            } else if (p2.indexOf("queue") === 0) {
              var V2 = p2.split(" ");
              m2 = (V2[1] || "last").trim();
            }
          }
          if (f2.xhr) {
            if (f2.abortable) {
              ce(g2, "htmx:abort");
            } else {
              if (m2 == null) {
                if (i2) {
                  var y2 = ae(i2);
                  if (y2 && y2.triggerSpec && y2.triggerSpec.queue) {
                    m2 = y2.triggerSpec.queue;
                  }
                }
                if (m2 == null) {
                  m2 = "last";
                }
              }
              if (f2.queuedRequests == null) {
                f2.queuedRequests = [];
              }
              if (m2 === "first" && f2.queuedRequests.length === 0) {
                f2.queuedRequests.push(function() {
                  he(t2, r2, n2, i2, a2);
                });
              } else if (m2 === "all") {
                f2.queuedRequests.push(function() {
                  he(t2, r2, n2, i2, a2);
                });
              } else if (m2 === "last") {
                f2.queuedRequests = [];
                f2.queuedRequests.push(function() {
                  he(t2, r2, n2, i2, a2);
                });
              }
              ie(o2);
              return l2;
            }
          }
          var b2 = new XMLHttpRequest();
          f2.xhr = b2;
          f2.abortable = x2;
          var w2 = function() {
            f2.xhr = null;
            f2.abortable = false;
            if (f2.queuedRequests != null && f2.queuedRequests.length > 0) {
              var e3 = f2.queuedRequests.shift();
              e3();
            }
          };
          var j2 = ne(n2, "hx-prompt");
          if (j2) {
            var S2 = prompt(j2);
            if (S2 === null || !ce(n2, "htmx:prompt", { prompt: S2, target: u2 })) {
              ie(o2);
              w2();
              return l2;
            }
          }
          if (d2 && !e2) {
            if (!confirm(d2)) {
              ie(o2);
              w2();
              return l2;
            }
          }
          var E2 = xr(n2, u2, S2);
          if (t2 !== "get" && !Sr(n2)) {
            E2["Content-Type"] = "application/x-www-form-urlencoded";
          }
          if (a2.headers) {
            E2 = le(E2, a2.headers);
          }
          var _2 = dr(n2, t2);
          var C2 = _2.errors;
          var R2 = _2.values;
          if (a2.values) {
            R2 = le(R2, a2.values);
          }
          var z2 = Hr(n2);
          var $2 = le(R2, z2);
          var T2 = yr($2, n2);
          if (Q.config.getCacheBusterParam && t2 === "get") {
            T2["org.htmx.cache-buster"] = ee(u2, "id") || "true";
          }
          if (r2 == null || r2 === "") {
            r2 = re().location.href;
          }
          var O2 = Rr(n2, "hx-request");
          var W2 = ae(n2).boosted;
          var q2 = Q.config.methodsThatUseUrlParams.indexOf(t2) >= 0;
          var H2 = { boosted: W2, useUrlParams: q2, parameters: T2, unfilteredParameters: $2, headers: E2, target: u2, verb: t2, errors: C2, withCredentials: a2.credentials || O2.credentials || Q.config.withCredentials, timeout: a2.timeout || O2.timeout || Q.config.timeout, path: r2, triggeringEvent: i2 };
          if (!ce(n2, "htmx:configRequest", H2)) {
            ie(o2);
            w2();
            return l2;
          }
          r2 = H2.path;
          t2 = H2.verb;
          E2 = H2.headers;
          T2 = H2.parameters;
          C2 = H2.errors;
          q2 = H2.useUrlParams;
          if (C2 && C2.length > 0) {
            ce(n2, "htmx:validation:halted", H2);
            ie(o2);
            w2();
            return l2;
          }
          var G2 = r2.split("#");
          var J2 = G2[0];
          var L2 = G2[1];
          var A2 = r2;
          if (q2) {
            A2 = J2;
            var Z2 = Object.keys(T2).length !== 0;
            if (Z2) {
              if (A2.indexOf("?") < 0) {
                A2 += "?";
              } else {
                A2 += "&";
              }
              A2 += pr(T2);
              if (L2) {
                A2 += "#" + L2;
              }
            }
          }
          if (!kr(n2, A2, H2)) {
            fe(n2, "htmx:invalidPath", H2);
            ie(s2);
            return l2;
          }
          b2.open(t2.toUpperCase(), A2, true);
          b2.overrideMimeType("text/html");
          b2.withCredentials = H2.withCredentials;
          b2.timeout = H2.timeout;
          if (O2.noHeaders) ;
          else {
            for (var N2 in E2) {
              if (E2.hasOwnProperty(N2)) {
                var K2 = E2[N2];
                Lr(b2, N2, K2);
              }
            }
          }
          var I2 = { xhr: b2, target: u2, requestConfig: H2, etc: a2, boosted: W2, select: X2, pathInfo: { requestPath: r2, finalRequestPath: A2, anchor: L2 } };
          b2.onload = function() {
            try {
              var e3 = Ir(n2);
              I2.pathInfo.responsePath = Ar(b2);
              M2(n2, I2);
              lr(k2, P2);
              ce(n2, "htmx:afterRequest", I2);
              ce(n2, "htmx:afterOnLoad", I2);
              if (!se(n2)) {
                var t3 = null;
                while (e3.length > 0 && t3 == null) {
                  var r3 = e3.shift();
                  if (se(r3)) {
                    t3 = r3;
                  }
                }
                if (t3) {
                  ce(t3, "htmx:afterRequest", I2);
                  ce(t3, "htmx:afterOnLoad", I2);
                }
              }
              ie(o2);
              w2();
            } catch (e4) {
              fe(n2, "htmx:onLoadError", le({ error: e4 }, I2));
              throw e4;
            }
          };
          b2.onerror = function() {
            lr(k2, P2);
            fe(n2, "htmx:afterRequest", I2);
            fe(n2, "htmx:sendError", I2);
            ie(s2);
            w2();
          };
          b2.onabort = function() {
            lr(k2, P2);
            fe(n2, "htmx:afterRequest", I2);
            fe(n2, "htmx:sendAbort", I2);
            ie(s2);
            w2();
          };
          b2.ontimeout = function() {
            lr(k2, P2);
            fe(n2, "htmx:afterRequest", I2);
            fe(n2, "htmx:timeout", I2);
            ie(s2);
            w2();
          };
          if (!ce(n2, "htmx:beforeRequest", I2)) {
            ie(o2);
            w2();
            return l2;
          }
          var k2 = or(n2);
          var P2 = sr(n2);
          oe(["loadstart", "loadend", "progress", "abort"], function(t3) {
            oe([b2, b2.upload], function(e3) {
              e3.addEventListener(t3, function(e4) {
                ce(n2, "htmx:xhr:" + t3, { lengthComputable: e4.lengthComputable, loaded: e4.loaded, total: e4.total });
              });
            });
          });
          ce(n2, "htmx:beforeSend", I2);
          var Y2 = q2 ? null : Er(b2, n2, T2);
          b2.send(Y2);
          return l2;
        }
        function Pr(e2, t2) {
          var r2 = t2.xhr;
          var n2 = null;
          var i2 = null;
          if (O(r2, /HX-Push:/i)) {
            n2 = r2.getResponseHeader("HX-Push");
            i2 = "push";
          } else if (O(r2, /HX-Push-Url:/i)) {
            n2 = r2.getResponseHeader("HX-Push-Url");
            i2 = "push";
          } else if (O(r2, /HX-Replace-Url:/i)) {
            n2 = r2.getResponseHeader("HX-Replace-Url");
            i2 = "replace";
          }
          if (n2) {
            if (n2 === "false") {
              return {};
            } else {
              return { type: i2, path: n2 };
            }
          }
          var a2 = t2.pathInfo.finalRequestPath;
          var o2 = t2.pathInfo.responsePath;
          var s2 = ne(e2, "hx-push-url");
          var l2 = ne(e2, "hx-replace-url");
          var u2 = ae(e2).boosted;
          var f2 = null;
          var c2 = null;
          if (s2) {
            f2 = "push";
            c2 = s2;
          } else if (l2) {
            f2 = "replace";
            c2 = l2;
          } else if (u2) {
            f2 = "push";
            c2 = o2 || a2;
          }
          if (c2) {
            if (c2 === "false") {
              return {};
            }
            if (c2 === "true") {
              c2 = o2 || a2;
            }
            if (t2.pathInfo.anchor && c2.indexOf("#") === -1) {
              c2 = c2 + "#" + t2.pathInfo.anchor;
            }
            return { type: f2, path: c2 };
          } else {
            return {};
          }
        }
        function Mr(l2, u2) {
          var f2 = u2.xhr;
          var c2 = u2.target;
          var e2 = u2.etc;
          u2.requestConfig;
          var h2 = u2.select;
          if (!ce(l2, "htmx:beforeOnLoad", u2)) return;
          if (O(f2, /HX-Trigger:/i)) {
            _e(f2, "HX-Trigger", l2);
          }
          if (O(f2, /HX-Location:/i)) {
            er();
            var r2 = f2.getResponseHeader("HX-Location");
            var v2;
            if (r2.indexOf("{") === 0) {
              v2 = E(r2);
              r2 = v2["path"];
              delete v2["path"];
            }
            Nr("GET", r2, v2).then(function() {
              tr(r2);
            });
            return;
          }
          var n2 = O(f2, /HX-Refresh:/i) && "true" === f2.getResponseHeader("HX-Refresh");
          if (O(f2, /HX-Redirect:/i)) {
            location.href = f2.getResponseHeader("HX-Redirect");
            n2 && location.reload();
            return;
          }
          if (n2) {
            location.reload();
            return;
          }
          if (O(f2, /HX-Retarget:/i)) {
            if (f2.getResponseHeader("HX-Retarget") === "this") {
              u2.target = l2;
            } else {
              u2.target = ue(l2, f2.getResponseHeader("HX-Retarget"));
            }
          }
          var d2 = Pr(l2, u2);
          var i2 = f2.status >= 200 && f2.status < 400 && f2.status !== 204;
          var g2 = f2.response;
          var a2 = f2.status >= 400;
          var p2 = Q.config.ignoreTitle;
          var o2 = le({ shouldSwap: i2, serverResponse: g2, isError: a2, ignoreTitle: p2 }, u2);
          if (!ce(c2, "htmx:beforeSwap", o2)) return;
          c2 = o2.target;
          g2 = o2.serverResponse;
          a2 = o2.isError;
          p2 = o2.ignoreTitle;
          u2.target = c2;
          u2.failed = a2;
          u2.successful = !a2;
          if (o2.shouldSwap) {
            if (f2.status === 286) {
              at(l2);
            }
            R(l2, function(e3) {
              g2 = e3.transformResponse(g2, f2, l2);
            });
            if (d2.type) {
              er();
            }
            var s2 = e2.swapOverride;
            if (O(f2, /HX-Reswap:/i)) {
              s2 = f2.getResponseHeader("HX-Reswap");
            }
            var v2 = wr(l2, s2);
            if (v2.hasOwnProperty("ignoreTitle")) {
              p2 = v2.ignoreTitle;
            }
            c2.classList.add(Q.config.swappingClass);
            var m2 = null;
            var x2 = null;
            var y2 = function() {
              try {
                var e3 = document.activeElement;
                var t2 = {};
                try {
                  t2 = { elt: e3, start: e3 ? e3.selectionStart : null, end: e3 ? e3.selectionEnd : null };
                } catch (e4) {
                }
                var r3;
                if (h2) {
                  r3 = h2;
                }
                if (O(f2, /HX-Reselect:/i)) {
                  r3 = f2.getResponseHeader("HX-Reselect");
                }
                if (d2.type) {
                  ce(re().body, "htmx:beforeHistoryUpdate", le({ history: d2 }, u2));
                  if (d2.type === "push") {
                    tr(d2.path);
                    ce(re().body, "htmx:pushedIntoHistory", { path: d2.path });
                  } else {
                    rr(d2.path);
                    ce(re().body, "htmx:replacedInHistory", { path: d2.path });
                  }
                }
                var n3 = T(c2);
                je(v2.swapStyle, c2, l2, g2, n3, r3);
                if (t2.elt && !se(t2.elt) && ee(t2.elt, "id")) {
                  var i3 = document.getElementById(ee(t2.elt, "id"));
                  var a3 = { preventScroll: v2.focusScroll !== void 0 ? !v2.focusScroll : !Q.config.defaultFocusScroll };
                  if (i3) {
                    if (t2.start && i3.setSelectionRange) {
                      try {
                        i3.setSelectionRange(t2.start, t2.end);
                      } catch (e4) {
                      }
                    }
                    i3.focus(a3);
                  }
                }
                c2.classList.remove(Q.config.swappingClass);
                oe(n3.elts, function(e4) {
                  if (e4.classList) {
                    e4.classList.add(Q.config.settlingClass);
                  }
                  ce(e4, "htmx:afterSwap", u2);
                });
                if (O(f2, /HX-Trigger-After-Swap:/i)) {
                  var o3 = l2;
                  if (!se(l2)) {
                    o3 = re().body;
                  }
                  _e(f2, "HX-Trigger-After-Swap", o3);
                }
                var s3 = function() {
                  oe(n3.tasks, function(e5) {
                    e5.call();
                  });
                  oe(n3.elts, function(e5) {
                    if (e5.classList) {
                      e5.classList.remove(Q.config.settlingClass);
                    }
                    ce(e5, "htmx:afterSettle", u2);
                  });
                  if (u2.pathInfo.anchor) {
                    var e4 = re().getElementById(u2.pathInfo.anchor);
                    if (e4) {
                      e4.scrollIntoView({ block: "start", behavior: "auto" });
                    }
                  }
                  if (n3.title && !p2) {
                    var t3 = C("title");
                    if (t3) {
                      t3.innerHTML = n3.title;
                    } else {
                      window.document.title = n3.title;
                    }
                  }
                  Cr(n3.elts, v2);
                  if (O(f2, /HX-Trigger-After-Settle:/i)) {
                    var r4 = l2;
                    if (!se(l2)) {
                      r4 = re().body;
                    }
                    _e(f2, "HX-Trigger-After-Settle", r4);
                  }
                  ie(m2);
                };
                if (v2.settleDelay > 0) {
                  setTimeout(s3, v2.settleDelay);
                } else {
                  s3();
                }
              } catch (e4) {
                fe(l2, "htmx:swapError", u2);
                ie(x2);
                throw e4;
              }
            };
            var b2 = Q.config.globalViewTransitions;
            if (v2.hasOwnProperty("transition")) {
              b2 = v2.transition;
            }
            if (b2 && ce(l2, "htmx:beforeTransition", u2) && typeof Promise !== "undefined" && document.startViewTransition) {
              var w2 = new Promise(function(e3, t2) {
                m2 = e3;
                x2 = t2;
              });
              var S2 = y2;
              y2 = function() {
                document.startViewTransition(function() {
                  S2();
                  return w2;
                });
              };
            }
            if (v2.swapDelay > 0) {
              setTimeout(y2, v2.swapDelay);
            } else {
              y2();
            }
          }
          if (a2) {
            fe(l2, "htmx:responseError", le({ error: "Response Status Error Code " + f2.status + " from " + u2.pathInfo.requestPath }, u2));
          }
        }
        var Xr = {};
        function Dr() {
          return { init: function(e2) {
            return null;
          }, onEvent: function(e2, t2) {
            return true;
          }, transformResponse: function(e2, t2, r2) {
            return e2;
          }, isInlineSwap: function(e2) {
            return false;
          }, handleSwap: function(e2, t2, r2, n2) {
            return false;
          }, encodeParameters: function(e2, t2, r2) {
            return null;
          } };
        }
        function Ur(e2, t2) {
          if (t2.init) {
            t2.init(r);
          }
          Xr[e2] = le(Dr(), t2);
        }
        function Br(e2) {
          delete Xr[e2];
        }
        function Fr(e2, r2, n2) {
          if (e2 == void 0) {
            return r2;
          }
          if (r2 == void 0) {
            r2 = [];
          }
          if (n2 == void 0) {
            n2 = [];
          }
          var t2 = te(e2, "hx-ext");
          if (t2) {
            oe(t2.split(","), function(e3) {
              e3 = e3.replace(/ /g, "");
              if (e3.slice(0, 7) == "ignore:") {
                n2.push(e3.slice(7));
                return;
              }
              if (n2.indexOf(e3) < 0) {
                var t3 = Xr[e3];
                if (t3 && r2.indexOf(t3) < 0) {
                  r2.push(t3);
                }
              }
            });
          }
          return Fr(u(e2), r2, n2);
        }
        var Vr = false;
        re().addEventListener("DOMContentLoaded", function() {
          Vr = true;
        });
        function jr(e2) {
          if (Vr || re().readyState === "complete") {
            e2();
          } else {
            re().addEventListener("DOMContentLoaded", e2);
          }
        }
        function _r() {
          if (Q.config.includeIndicatorStyles !== false) {
            re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>");
          }
        }
        function zr() {
          var e2 = re().querySelector('meta[name="htmx-config"]');
          if (e2) {
            return E(e2.content);
          } else {
            return null;
          }
        }
        function $r() {
          var e2 = zr();
          if (e2) {
            Q.config = le(Q.config, e2);
          }
        }
        jr(function() {
          $r();
          _r();
          var e2 = re().body;
          zt(e2);
          var t2 = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
          e2.addEventListener("htmx:abort", function(e3) {
            var t3 = e3.target;
            var r3 = ae(t3);
            if (r3 && r3.xhr) {
              r3.xhr.abort();
            }
          });
          const r2 = window.onpopstate ? window.onpopstate.bind(window) : null;
          window.onpopstate = function(e3) {
            if (e3.state && e3.state.htmx) {
              ar();
              oe(t2, function(e4) {
                ce(e4, "htmx:restored", { document: re(), triggerEvent: ce });
              });
            } else {
              if (r2) {
                r2(e3);
              }
            }
          };
          setTimeout(function() {
            ce(e2, "htmx:load", {});
            e2 = null;
          }, 0);
        });
        return Q;
      }();
    });
  })(htmx_min$1);
  return htmx_min$1.exports;
}
var htmx_minExports = requireHtmx_min();
const htmx = /* @__PURE__ */ getDefaultExportFromCjs(htmx_minExports);
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
  queueJob(callback);
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function dequeueJob(job) {
  let index = queue.indexOf(job);
  if (index !== -1 && index > lastFlushedIndex)
    queue.splice(index, 1);
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i2 = 0; i2 < queue.length; i2++) {
    queue[i2]();
    lastFlushedIndex = i2;
  }
  queue.length = 0;
  lastFlushedIndex = -1;
  flushing = false;
}
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, { scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  } });
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup2 = () => {
  };
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = /* @__PURE__ */ new Set();
      el._x_runEffects = () => {
        el._x_effects.forEach((i2) => i2());
      };
    }
    el._x_effects.add(effectReference);
    cleanup2 = () => {
      if (effectReference === void 0)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
    return effectReference;
  };
  return [wrappedEffect, () => {
    cleanup2();
  }];
}
function watch(getter, callback) {
  let firstTime = true;
  let oldValue;
  let effectReference = effect(() => {
    let value = getter();
    JSON.stringify(value);
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }
    firstTime = false;
  });
  return () => release(effectReference);
}
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
  if (typeof callback === "function") {
    if (!el._x_cleanups)
      el._x_cleanups = [];
    el._x_cleanups.push(callback);
  } else {
    callback = el;
    onElRemoveds.push(callback);
  }
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i2) => i2());
      delete el._x_attributeCleanups[name];
    }
  });
}
function cleanupElement(el) {
  var _a, _b;
  (_a = el._x_effects) == null ? void 0 : _a.forEach(dequeueJob);
  while ((_b = el._x_cleanups) == null ? void 0 : _b.length)
    el._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var queuedMutations = [];
function flushObserver() {
  let records = observer.takeRecords();
  queuedMutations.push(() => records.length > 0 && onMutate(records));
  let queueLengthWhenTriggered = queuedMutations.length;
  queueMicrotask(() => {
    if (queuedMutations.length === queueLengthWhenTriggered) {
      while (queuedMutations.length > 0)
        queuedMutations.shift()();
    }
  });
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = /* @__PURE__ */ new Set();
  let addedAttributes = /* @__PURE__ */ new Map();
  let removedAttributes = /* @__PURE__ */ new Map();
  for (let i2 = 0; i2 < mutations.length; i2++) {
    if (mutations[i2].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i2].type === "childList") {
      mutations[i2].removedNodes.forEach((node) => {
        if (node.nodeType !== 1)
          return;
        if (!node._x_marker)
          return;
        removedNodes.add(node);
      });
      mutations[i2].addedNodes.forEach((node) => {
        if (node.nodeType !== 1)
          return;
        if (removedNodes.has(node)) {
          removedNodes.delete(node);
          return;
        }
        if (node._x_marker)
          return;
        addedNodes.push(node);
      });
    }
    if (mutations[i2].type === "attributes") {
      let el = mutations[i2].target;
      let name = mutations[i2].attributeName;
      let oldValue = mutations[i2].oldValue;
      let add2 = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add2();
      } else if (el.hasAttribute(name)) {
        remove();
        add2();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i2) => i2(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.some((i2) => i2.contains(node)))
      continue;
    onElRemoveds.forEach((i2) => i2(node));
  }
  for (let node of addedNodes) {
    if (!node.isConnected)
      continue;
    onElAddeds.forEach((i2) => i2(node));
  }
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}
function scope(node) {
  return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i2) => i2 !== data2);
  };
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  return new Proxy({ objects }, mergeProxyTrap);
}
var mergeProxyTrap = {
  ownKeys({ objects }) {
    return Array.from(
      new Set(objects.flatMap((i2) => Object.keys(i2)))
    );
  },
  has({ objects }, name) {
    if (name == Symbol.unscopables)
      return false;
    return objects.some(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name)
    );
  },
  get({ objects }, name, thisProxy) {
    if (name == "toJSON")
      return collapseProxies;
    return Reflect.get(
      objects.find(
        (obj) => Reflect.has(obj, name)
      ) || {},
      name,
      thisProxy
    );
  },
  set({ objects }, name, value, thisProxy) {
    const target = objects.find(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name)
    ) || objects[objects.length - 1];
    const descriptor = Object.getOwnPropertyDescriptor(target, name);
    if ((descriptor == null ? void 0 : descriptor.set) && (descriptor == null ? void 0 : descriptor.get))
      return descriptor.set.call(thisProxy, value) || true;
    return Reflect.set(target, name, value);
  }
};
function collapseProxies() {
  let keys = Reflect.ownKeys(this);
  return keys.reduce((acc, key) => {
    acc[key] = Reflect.get(this, key);
    return acc;
  }, {});
}
function initInterceptors(data2) {
  let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
      if (enumerable === false || value === void 0)
        return;
      if (typeof value === "object" && value !== null && value.__v_skip)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject2(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {
}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  let memoizedUtilities = getUtilities(el);
  Object.entries(magics).forEach(([name, callback]) => {
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, memoizedUtilities);
      },
      enumerable: false
    });
  });
  return obj;
}
function getUtilities(el) {
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  let utils = { interceptor, ...utilities };
  onElRemoved(el, cleanup2);
  return utils;
}
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e2) {
    handleError(e2, el, expression);
  }
}
function handleError(error2, el, expression = void 0) {
  error2 = Object.assign(
    error2 ?? { message: "No error message given." },
    { el, expression }
  );
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
  let cache = shouldAutoEvaluateFunctions;
  shouldAutoEvaluateFunctions = false;
  let result = callback();
  shouldAutoEvaluateFunctions = cache;
  return result;
}
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      let func2 = new AsyncFunction(
        ["__self", "scope"],
        `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
      );
      Object.defineProperty(func2, "name", {
        value: `[Alpine] ${expression}`
      });
      return func2;
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope2, ...dataStack]);
    if (typeof func === "function") {
      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = void 0;
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (shouldAutoEvaluateFunctions && typeof value === "function") {
    let result = value.apply(scope2, params);
    if (result instanceof Promise) {
      result.then((i2) => runIfTypeOfFunction(receiver, i2, scope2, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else if (typeof value === "object" && value instanceof Promise) {
    value.then((i2) => receiver(i2));
  } else {
    receiver(value);
  }
}
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
  return {
    before(directive2) {
      if (!directiveHandlers[directive2]) {
        console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
        return;
      }
      const pos = directiveOrder.indexOf(directive2);
      directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
    }
  };
}
function directiveExists(name) {
  return Object.keys(directiveHandlers).includes(name);
}
function directives(el, attributes, originalAttributeOverride) {
  attributes = Array.from(attributes);
  if (el._x_virtualDirectives) {
    let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(vAttributes);
    vAttributes = vAttributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    attributes = attributes.concat(vAttributes);
  }
  let transformedAttributeMap = {};
  let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getElementBoundUtilities(el) {
  let cleanups = [];
  let cleanup2 = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup: cleanup2,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i2) => i2());
  return [utilities, doCleanup];
}
function getDirectiveHandler(el, directive2) {
  let noop = () => {
  };
  let handler4 = directiveHandlers[directive2.type] || noop;
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  onAttributeRemoved(el, directive2.original, cleanup2);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler4.inline && handler4.inline(el, directive2, utilities);
    handler4 = handler4.bind(handler4, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
  };
  fullHandler.runCleanups = cleanup2;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({ name, value }) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return { name, value };
};
var into = (i2) => i2;
function toTransformedAttributes(callback = () => {
}) {
  return ({ name, value }) => {
    let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, { name, value });
    if (newName !== name)
      callback(newName, name);
    return { name: newName, value: newValue };
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({ name, value }) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i2) => i2.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "id",
  "anchor",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  DEFAULT,
  "teleport"
];
function byPriority(a2, b2) {
  let typeA = directiveOrder.indexOf(a2.type) === -1 ? DEFAULT : a2.type;
  let typeB = directiveOrder.indexOf(b2.type) === -1 ? DEFAULT : b2.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(
    new CustomEvent(name, {
      detail,
      bubbles: true,
      // Allows events to pass the shadow DOM barrier.
      composed: true,
      cancelable: true
    })
  );
}
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback);
    node = node.nextElementSibling;
  }
}
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}
var started = false;
function start() {
  if (started)
    warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
  started = true;
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
  setTimeout(() => {
    warnAboutMissingPlugins();
  });
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => element.matches(selector)))
      return true;
  });
}
function findClosest(el, callback) {
  if (!el)
    return;
  if (callback(el))
    return el;
  if (el._x_teleportBack)
    el = el._x_teleportBack;
  if (!el.parentElement)
    return;
  return findClosest(el.parentElement, callback);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
var initInterceptors2 = [];
function interceptInit(callback) {
  initInterceptors2.push(callback);
}
var markerDispenser = 1;
function initTree(el, walker = walk, intercept = () => {
}) {
  if (findClosest(el, (i2) => i2._x_ignore))
    return;
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      if (el2._x_marker)
        return;
      el2._x_marker = markerDispenser++;
      intercept(el2, skip);
      initInterceptors2.forEach((i2) => i2(el2, skip));
      directives(el2, el2.attributes).forEach((handle) => handle());
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root, walker = walk) {
  walker(root, (el) => {
    cleanupElement(el);
    cleanupAttributes(el);
    delete el._x_marker;
  });
}
function warnAboutMissingPlugins() {
  let pluginDirectives = [
    ["ui", "dialog", ["[x-dialog], [x-popover]"]],
    ["anchor", "anchor", ["[x-anchor]"]],
    ["sort", "sort", ["[x-sort]"]]
  ];
  pluginDirectives.forEach(([plugin2, directive2, selectors]) => {
    if (directiveExists(directive2))
      return;
    selectors.some((selector) => {
      if (document.querySelector(selector)) {
        warn(`found "${selector}", but missing ${plugin2} plugin`);
        return true;
      }
    });
  });
}
var tickStack = [];
var isHolding = false;
function nextTick(callback = () => {
}) {
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
  return new Promise((res) => {
    tickStack.push(() => {
      callback();
      res();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let missingClasses = (classString2) => classString2.split(" ").filter((i2) => !el.classList.contains(i2)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i2) => {
    if (el.classList.contains(i2)) {
      el.classList.remove(i2);
      removed.push(i2);
    }
  });
  forAdd.forEach((i2) => {
    if (!el.classList.contains(i2)) {
      el.classList.add(i2);
      added.push(i2);
    }
  });
  return () => {
    removed.forEach((i2) => el.classList.add(i2));
    added.forEach((i2) => el.classList.remove(i2));
  };
}
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    if (!key.startsWith("--")) {
      key = kebabCase(key);
    }
    el.style.setProperty(key, value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === "function")
    expression = evaluate2(expression);
  if (expression === false)
    return;
  if (!expression || typeof expression === "boolean") {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    "enter": (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    "leave": (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i2, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i2, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay = modifierValue(modifiers, "delay", 0) / 1e3;
  let origin2 = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin2,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin2,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: { during: defaultValue, start: defaultValue, end: defaultValue },
      leave: { during: defaultValue, start: defaultValue, end: defaultValue },
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let clickAwayCompatibleShow = () => nextTick2(show);
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => resolve(hide));
    el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      nextTick2(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i2]) => i2 == null ? void 0 : i2());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e2) => {
          if (!e2.isFromCancelledTransition)
            throw e2;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration" || key === "delay") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}
var isCloning = false;
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
  return (...args) => isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
  interceptors.push(callback);
}
function cloneNode(from, to) {
  interceptors.forEach((i2) => i2(from, to));
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    initTree(to, (el, callback) => {
      callback(el, () => {
      });
    });
  });
  isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
  if (!newEl._x_dataStack)
    newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  isCloningLegacy = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
  isCloningLegacy = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {
    };
  });
  callback();
  overrideEffect(cache);
}
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    case "selected":
    case "checked":
      bindAttributeAndProperty(el, name, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (isRadio(el)) {
    if (el.attributes.value === void 0) {
      el.value = value;
    }
    if (window.fromModel) {
      if (typeof value === "boolean") {
        el.checked = safeParseBoolean(el.value) === value;
      } else {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    }
  } else if (isCheckbox(el)) {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value === void 0 ? "" : value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
  bindAttribute(el, name, value);
  setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function setPropertyIfChanged(el, propName, value) {
  if (el[propName] !== value) {
    el[propName] = value;
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function safeParseBoolean(rawValue) {
  if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
    return true;
  }
  if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
    return false;
  }
  return rawValue ? Boolean(rawValue) : null;
}
var booleanAttributes = /* @__PURE__ */ new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
  "shadowrootclonable",
  "shadowrootdelegatesfocus",
  "shadowrootserializable"
]);
function isBooleanAttr(attrName) {
  return booleanAttributes.has(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}
function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
    let binding = el._x_inlineBindings[name];
    binding.extract = extract;
    return dontAutoEvaluateFunctions(() => {
      return evaluate(el, binding.expression);
    });
  }
  return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
  let attr = el.getAttribute(name);
  if (attr === null)
    return typeof fallback === "function" ? fallback() : fallback;
  if (attr === "")
    return true;
  if (isBooleanAttr(name)) {
    return !![name, "true"].includes(attr);
  }
  return attr;
}
function isCheckbox(el) {
  return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
}
function isRadio(el) {
  return el.type === "radio" || el.localName === "ui-radio";
}
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
  let firstRun = true;
  let outerHash;
  let reference = effect(() => {
    let outer = outerGet();
    let inner = innerGet();
    if (firstRun) {
      innerSet(cloneIfObject(outer));
      firstRun = false;
    } else {
      let outerHashLatest = JSON.stringify(outer);
      let innerHashLatest = JSON.stringify(inner);
      if (outerHashLatest !== outerHash) {
        innerSet(cloneIfObject(outer));
      } else if (outerHashLatest !== innerHashLatest) {
        outerSet(cloneIfObject(inner));
      } else ;
    }
    outerHash = JSON.stringify(outerGet());
    JSON.stringify(innerGet());
  });
  return () => {
    release(reference);
  };
}
function cloneIfObject(value) {
  return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
function plugin(callback) {
  let callbacks = Array.isArray(callback) ? callback : [callback];
  callbacks.forEach((i2) => i2(alpine_default));
}
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === void 0) {
    return stores[name];
  }
  stores[name] = value;
  initInterceptors(stores[name]);
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
}
function getStores() {
  return stores;
}
var binds = {};
function bind2(name, bindings) {
  let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
  if (name instanceof Element) {
    return applyBindingsObject(name, getBindings());
  } else {
    binds[name] = getBindings;
  }
  return () => {
  };
}
function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args);
        };
      }
    });
  });
  return obj;
}
function applyBindingsObject(el, obj, original) {
  let cleanupRunners = [];
  while (cleanupRunners.length)
    cleanupRunners.pop()();
  let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
  let staticAttributes = attributesOnly(attributes);
  attributes = attributes.map((attribute) => {
    if (staticAttributes.find((attr) => attr.name === attribute.name)) {
      return {
        name: `x-bind:${attribute.name}`,
        value: `"${attribute.value}"`
      };
    }
    return attribute;
  });
  directives(el, attributes, original).map((handle) => {
    cleanupRunners.push(handle.runCleanups);
    handle();
  });
  return () => {
    while (cleanupRunners.length)
      cleanupRunners.pop()();
  };
}
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  version: "3.14.5",
  flushAndStopDeferringMutations,
  dontAutoEvaluateFunctions,
  disableEffectScheduling,
  startObservingMutations,
  stopObservingMutations,
  setReactivityEngine,
  onAttributeRemoved,
  onAttributesAdded,
  closestDataStack,
  skipDuringClone,
  onlyDuringClone,
  addRootSelector,
  addInitSelector,
  interceptClone,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  interceptInit,
  setEvaluator,
  mergeProxies,
  extractProp,
  findClosest,
  onElRemoved,
  closestRoot,
  destroyTree,
  interceptor,
  // INTERNAL: not public API and is subject to change without major release.
  transition,
  // INTERNAL
  setStyles,
  // INTERNAL
  mutateDom,
  directive,
  entangle,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  // INTERNAL
  cloneNode,
  // INTERNAL
  bound: getBinding,
  $data: scope,
  watch,
  walk,
  data,
  bind: bind2
};
var alpine_default = Alpine;
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i2 = 0; i2 < list.length; i2++) {
    map[list[i2]] = true;
  }
  return (val) => !!map[val];
}
var EMPTY_OBJ = Object.freeze({});
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray$1 = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isString$1 = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject$1 = (val) => val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
var targetMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol("iterate");
var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(fn) {
  return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
  if (isEffect(fn)) {
    fn = fn.raw;
  }
  const effect3 = createReactiveEffect(fn, options);
  if (!options.lazy) {
    effect3();
  }
  return effect3;
}
function stop(effect3) {
  if (effect3.active) {
    cleanup(effect3);
    if (effect3.options.onStop) {
      effect3.options.onStop();
    }
    effect3.active = false;
  }
}
var uid = 0;
function createReactiveEffect(fn, options) {
  const effect3 = function reactiveEffect() {
    if (!effect3.active) {
      return fn();
    }
    if (!effectStack.includes(effect3)) {
      cleanup(effect3);
      try {
        enableTracking();
        effectStack.push(effect3);
        activeEffect = effect3;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };
  effect3.id = uid++;
  effect3.allowRecurse = !!options.allowRecurse;
  effect3._isEffect = true;
  effect3.active = true;
  effect3.raw = fn;
  effect3.deps = [];
  effect3.options = options;
  return effect3;
}
function cleanup(effect3) {
  const { deps } = effect3;
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].delete(effect3);
    }
    deps.length = 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!shouldTrack || activeEffect === void 0) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = /* @__PURE__ */ new Set());
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target,
        type,
        key
      });
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const effects = /* @__PURE__ */ new Set();
  const add2 = (effectsToAdd) => {
    if (effectsToAdd) {
      effectsToAdd.forEach((effect3) => {
        if (effect3 !== activeEffect || effect3.allowRecurse) {
          effects.add(effect3);
        }
      });
    }
  };
  if (type === "clear") {
    depsMap.forEach(add2);
  } else if (key === "length" && isArray$1(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        add2(dep);
      }
    });
  } else {
    if (key !== void 0) {
      add2(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray$1(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          add2(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$1(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          add2(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const run = (effect3) => {
    if (effect3.options.onTrigger) {
      effect3.options.onTrigger({
        effect: effect3,
        target,
        key,
        type,
        newValue,
        oldValue,
        oldTarget
      });
    }
    if (effect3.options.scheduler) {
      effect3.options.scheduler(effect3);
    } else {
      effect3();
    }
  };
  effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i2 = 0, l2 = this.length; i2 < l2; i2++) {
        track(arr, "get", i2 + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
  return function get3(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray$1(target);
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject$1(res)) {
      return isReadonly ? readonly(res) : reactive2(res);
    }
    return res;
  };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
  return function set3(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
var mutableHandlers = {
  get: get2,
  set: set2,
  deleteProperty,
  has,
  ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    {
      console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    {
      console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
var toReactive = (value) => isObject$1(value) ? reactive2(value) : value;
var toReadonly = (value) => isObject$1(value) ? readonly(value) : value;
var toShallow = (value) => value;
var getProto = (v2) => Reflect.getPrototypeOf(v2);
function get$1(target, key, isReadonly = false, isShallow = false) {
  target = target[
    "__v_raw"
    /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get", key);
  }
  !isReadonly && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly = false) {
  const target = this[
    "__v_raw"
    /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has", key);
  }
  !isReadonly && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
  target = target[
    "__v_raw"
    /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3 ? get3.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear$1() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function(...args) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear: clear$1,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear: clear$1,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false)
};
var readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value[
    "__v_skip"
    /* SKIP */
  ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
  if (target && target[
    "__v_isReadonly"
    /* IS_READONLY */
  ]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$1(target)) {
    {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target[
    "__v_raw"
    /* RAW */
  ] && !(isReadonly && target[
    "__v_isReactive"
    /* IS_REACTIVE */
  ])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function toRaw(observed) {
  return observed && toRaw(observed[
    "__v_raw"
    /* RAW */
  ]) || observed;
}
function isRef(r2) {
  return Boolean(r2 && r2.__v_isRef === true);
}
magic("nextTick", () => nextTick);
magic("dispatch", (el) => dispatch.bind(dispatch, el));
magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => (key, callback) => {
  let evaluate2 = evaluateLater2(key);
  let getter = () => {
    let value;
    evaluate2((i2) => value = i2);
    return value;
  };
  let unwatch = watch(getter, callback);
  cleanup2(unwatch);
});
magic("store", getStores);
magic("data", (el) => scope(el));
magic("root", (el) => closestRoot(el));
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  findClosest(el, (i2) => {
    if (i2._x_refs)
      refObjects.push(i2._x_refs);
  });
  return refObjects;
}
var globalIdMemo = {};
function findAndIncrementId(name) {
  if (!globalIdMemo[name])
    globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name])
      return true;
  });
}
function setIdRoot(el, name) {
  if (!el._x_ids)
    el._x_ids = {};
  if (!el._x_ids[name])
    el._x_ids[name] = findAndIncrementId(name);
}
magic("id", (el, { cleanup: cleanup2 }) => (name, key = null) => {
  let cacheKey = `${name}${key ? `-${key}` : ""}`;
  return cacheIdByNameOnElement(el, cacheKey, cleanup2, () => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
});
interceptClone((from, to) => {
  if (from._x_id) {
    to._x_id = from._x_id;
  }
});
function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
  if (!el._x_id)
    el._x_id = {};
  if (el._x_id[cacheKey])
    return el._x_id[cacheKey];
  let output = callback();
  el._x_id[cacheKey] = output;
  cleanup2(() => {
    delete el._x_id[cacheKey];
  });
  return output;
}
magic("el", (el) => el);
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
  magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
  let func = evaluateLater2(expression);
  let innerGet = () => {
    let result;
    func((i2) => result = i2);
    return result;
  };
  let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
  let innerSet = (val) => evaluateInnerSet(() => {
  }, { scope: { "__placeholder": val } });
  let initialValue = innerGet();
  innerSet(initialValue);
  queueMicrotask(() => {
    if (!el._x_model)
      return;
    el._x_removeModelListeners["default"]();
    let outerGet = el._x_model.get;
    let outerSet = el._x_model.set;
    let releaseEntanglement = entangle(
      {
        get() {
          return outerGet();
        },
        set(value) {
          outerSet(value);
        }
      },
      {
        get() {
          return innerGet();
        },
        set(value) {
          innerSet(value);
        }
      }
    );
    cleanup2(releaseEntanglement);
  });
});
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-teleport can only be used on a <template> tag", el);
  let target = getTarget(expression);
  let clone2 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone2;
  clone2._x_teleportBack = el;
  el.setAttribute("data-teleport-template", true);
  clone2.setAttribute("data-teleport-target", true);
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone2.addEventListener(eventName, (e2) => {
        e2.stopPropagation();
        el.dispatchEvent(new e2.constructor(e2.type, e2));
      });
    });
  }
  addScopeToNode(clone2, {}, el);
  let placeInDom = (clone3, target2, modifiers2) => {
    if (modifiers2.includes("prepend")) {
      target2.parentNode.insertBefore(clone3, target2);
    } else if (modifiers2.includes("append")) {
      target2.parentNode.insertBefore(clone3, target2.nextSibling);
    } else {
      target2.appendChild(clone3);
    }
  };
  mutateDom(() => {
    placeInDom(clone2, target, modifiers);
    skipDuringClone(() => {
      initTree(clone2);
      clone2._x_ignore = true;
    })();
  });
  el._x_teleportPutBack = () => {
    let target2 = getTarget(expression);
    mutateDom(() => {
      placeInDom(el._x_teleport, target2, modifiers);
    });
  };
  cleanup2(
    () => mutateDom(() => {
      clone2.remove();
      destroyTree(clone2);
    })
  );
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
  let target = skipDuringClone(() => {
    return document.querySelector(expression);
  }, () => {
    return teleportContainerDuringClone;
  })();
  if (!target)
    warn(`Cannot find x-teleport element for selector: "${expression}"`);
  return target;
}
var handler = () => {
};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup2(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
  effect3(evaluateLater(el, expression));
}));
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler4 = (e2) => callback(e2);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e2) => wrapper(callback2, e2);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = debounce(handler4, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = throttle(handler4, wait);
  }
  if (modifiers.includes("prevent"))
    handler4 = wrapHandler(handler4, (next, e2) => {
      e2.preventDefault();
      next(e2);
    });
  if (modifiers.includes("stop"))
    handler4 = wrapHandler(handler4, (next, e2) => {
      e2.stopPropagation();
      next(e2);
    });
  if (modifiers.includes("once")) {
    handler4 = wrapHandler(handler4, (next, e2) => {
      next(e2);
      listenerTarget.removeEventListener(event, handler4, options);
    });
  }
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler4 = wrapHandler(handler4, (next, e2) => {
      if (el.contains(e2.target))
        return;
      if (e2.target.isConnected === false)
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e2);
    });
  }
  if (modifiers.includes("self"))
    handler4 = wrapHandler(handler4, (next, e2) => {
      e2.target === el && next(e2);
    });
  if (isKeyEvent(event) || isClickEvent(event)) {
    handler4 = wrapHandler(handler4, (next, e2) => {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers)) {
        return;
      }
      next(e2);
    });
  }
  listenerTarget.addEventListener(event, handler4, options);
  return () => {
    listenerTarget.removeEventListener(event, handler4, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  if ([" ", "_"].includes(
    subject
  ))
    return subject;
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isClickEvent(event) {
  return ["contextmenu", "click", "mouse"].some((i2) => event.includes(i2));
}
function isListeningForASpecificKeyThatHasntBeenPressed(e2, modifiers) {
  let keyModifiers = modifiers.filter((i2) => {
    return !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(i2);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.includes("throttle")) {
    let debounceIndex = keyModifiers.indexOf("throttle");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e2.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i2) => !selectedSystemKeyModifiers.includes(i2));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e2[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (isClickEvent(e2.type))
        return false;
      if (keyToModifiers(e2.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    "ctrl": "control",
    "slash": "/",
    "space": " ",
    "spacebar": " ",
    "cmd": "meta",
    "esc": "escape",
    "up": "arrow-up",
    "down": "arrow-down",
    "left": "arrow-left",
    "right": "arrow-right",
    "period": ".",
    "comma": ",",
    "equal": "=",
    "minus": "-",
    "underscore": "_"
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let scopeTarget = el;
  if (modifiers.includes("parent")) {
    scopeTarget = el.parentNode;
  }
  let evaluateGet = evaluateLater(scopeTarget, expression);
  let evaluateSet;
  if (typeof expression === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
  } else if (typeof expression === "function" && typeof expression() === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
  } else {
    evaluateSet = () => {
    };
  }
  let getValue = () => {
    let result;
    evaluateGet((value) => result = value);
    return isGetterSetter(result) ? result.get() : result;
  };
  let setValue = (value) => {
    let result;
    evaluateGet((value2) => result = value2);
    if (isGetterSetter(result)) {
      result.set(value);
    } else {
      evaluateSet(() => {
      }, {
        scope: { "__placeholder": value }
      });
    }
  };
  if (typeof expression === "string" && el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let removeListener = isCloning ? () => {
  } : on(el, event, modifiers, (e2) => {
    setValue(getInputValue(el, modifiers, e2, getValue()));
  });
  if (modifiers.includes("fill")) {
    if ([void 0, null, ""].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
      setValue(
        getInputValue(el, modifiers, { target: el }, getValue())
      );
    }
  }
  if (!el._x_removeModelListeners)
    el._x_removeModelListeners = {};
  el._x_removeModelListeners["default"] = removeListener;
  cleanup2(() => el._x_removeModelListeners["default"]());
  if (el.form) {
    let removeResetListener = on(el.form, "reset", [], (e2) => {
      nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
    });
    cleanup2(() => removeResetListener());
  }
  el._x_model = {
    get() {
      return getValue();
    },
    set(value) {
      setValue(value);
    }
  };
  el._x_forceModelUpdate = (value) => {
    if (value === void 0 && typeof expression === "string" && expression.match(/\./))
      value = "";
    window.fromModel = true;
    mutateDom(() => bind(el, "value", value));
    delete window.fromModel;
  };
  effect3(() => {
    let value = getValue();
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate(value);
  });
});
function getInputValue(el, modifiers, event, currentValue) {
  return mutateDom(() => {
    if (event instanceof CustomEvent && event.detail !== void 0)
      return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
    else if (isCheckbox(el)) {
      if (Array.isArray(currentValue)) {
        let newValue = null;
        if (modifiers.includes("number")) {
          newValue = safeParseNumber(event.target.value);
        } else if (modifiers.includes("boolean")) {
          newValue = safeParseBoolean(event.target.value);
        } else {
          newValue = event.target.value;
        }
        return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
      } else {
        return event.target.checked;
      }
    } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
      if (modifiers.includes("number")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        });
      } else if (modifiers.includes("boolean")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseBoolean(rawValue);
        });
      }
      return Array.from(event.target.selectedOptions).map((option) => {
        return option.value || option.text;
      });
    } else {
      let newValue;
      if (isRadio(el)) {
        if (event.target.checked) {
          newValue = event.target.value;
        } else {
          newValue = currentValue;
        }
      } else {
        newValue = event.target.value;
      }
      if (modifiers.includes("number")) {
        return safeParseNumber(newValue);
      } else if (modifiers.includes("boolean")) {
        return safeParseBoolean(newValue);
      } else if (modifiers.includes("trim")) {
        return newValue.trim();
      } else {
        return newValue;
      }
    }
  });
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
  return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate2(expression, {}, false);
  }
  return evaluate2(expression, {}, false);
}));
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.innerHTML = value;
        el._x_ignoreSelf = true;
        initTree(el);
        delete el._x_ignoreSelf;
      });
    });
  });
});
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 }) => {
  if (!value) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    getBindings((bindings) => {
      applyBindingsObject(el, bindings, original);
    }, { scope: bindingProviders });
    return;
  }
  if (value === "key")
    return storeKeyForXFor(el, expression);
  if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
    return;
  }
  let evaluate2 = evaluateLater(el, expression);
  effect3(() => evaluate2((result) => {
    if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
      result = "";
    }
    mutateDom(() => bind(el, value, result, modifiers));
  }));
  cleanup2(() => {
    el._x_undoAddedClasses && el._x_undoAddedClasses();
    el._x_undoAddedStyles && el._x_undoAddedStyles();
  });
};
handler2.inline = (el, { value, modifiers, expression }) => {
  if (!value)
    return;
  if (!el._x_inlineBindings)
    el._x_inlineBindings = {};
  el._x_inlineBindings[value] = { expression, extract: false };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}
addRootSelector(() => `[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
  if (shouldSkipRegisteringDataDuringClone(el))
    return;
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, { scope: dataProviderContext });
  if (data2 === void 0 || data2 === true)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup2(() => {
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
    undo();
  });
});
interceptClone((from, to) => {
  if (from._x_dataStack) {
    to._x_dataStack = from._x_dataStack;
    to.setAttribute("data-has-alpine-state", true);
  }
});
function shouldSkipRegisteringDataDuringClone(el) {
  if (!isCloning)
    return false;
  if (isCloningLegacy)
    return true;
  return el.hasAttribute("data-has-alpine-state");
}
directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
  let evaluate2 = evaluateLater(el, expression);
  if (!el._x_doHide)
    el._x_doHide = () => {
      mutateDom(() => {
        el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
      });
    };
  if (!el._x_doShow)
    el._x_doShow = () => {
      mutateDom(() => {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }
      });
    };
  let hide = () => {
    el._x_doHide();
    el._x_isShown = false;
  };
  let show = () => {
    el._x_doShow();
    el._x_isShown = true;
  };
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once(
    (value) => value ? show() : hide(),
    (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    }
  );
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate2((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(
    el,
    // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index"
  );
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup2(() => {
    Object.values(el._x_lookup).forEach((el2) => mutateDom(
      () => {
        destroyTree(el2);
        el2.remove();
      }
    ));
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject2 = (i2) => typeof i2 === "object" && !Array.isArray(i2);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i2) => i2 + 1);
    }
    if (items === void 0)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject2(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => {
          if (keys.includes(value2))
            warn("Duplicate key on x-for", el);
          keys.push(value2);
        }, { scope: { index: key, ...scope2 } });
        scopes.push(scope2);
      });
    } else {
      for (let i2 = 0; i2 < items.length; i2++) {
        let scope2 = getIterationScopeVariables(iteratorNames, items[i2], i2, items);
        evaluateKey((value) => {
          if (keys.includes(value))
            warn("Duplicate key on x-for", el);
          keys.push(value);
        }, { scope: { index: i2, ...scope2 } });
        scopes.push(scope2);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i2 = 0; i2 < prevKeys.length; i2++) {
      let key = prevKeys[i2];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i2 = 0; i2 < keys.length; i2++) {
      let key = keys[i2];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i2, 0, key);
        adds.push([lastKey, i2]);
      } else if (prevIndex !== i2) {
        let keyInSpot = prevKeys.splice(i2, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i2, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i2 = 0; i2 < removes.length; i2++) {
      let key = removes[i2];
      if (!(key in lookup))
        continue;
      mutateDom(() => {
        destroyTree(lookup[key]);
        lookup[key].remove();
      });
      delete lookup[key];
    }
    for (let i2 = 0; i2 < moves.length; i2++) {
      let [keyInSpot, keyForSpot] = moves[i2];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        if (!elForSpot)
          warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i2 = 0; i2 < adds.length; i2++) {
      let [lastKey2, index] = adds[i2];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl)
        lastEl = lastEl._x_currentIfEl;
      let scope2 = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      let reactiveScope = reactive(scope2);
      addScopeToNode(clone2, reactiveScope, templateEl);
      clone2._x_refreshXForScope = (newScope) => {
        Object.entries(newScope).forEach(([key2, value]) => {
          reactiveScope[key2] = value;
        });
      };
      mutateDom(() => {
        lastEl.after(clone2);
        skipDuringClone(() => initTree(clone2))();
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone2;
    }
    for (let i2 = 0; i2 < sames.length; i2++) {
      lookup[sames[i2]]._x_refreshXForScope(scopes[keys.indexOf(sames[i2])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i2) => i2.trim());
    names.forEach((name, i2) => {
      scopeVariables[name] = item[i2];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i2) => i2.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function handler3() {
}
handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup2(() => delete root._x_refs[expression]);
};
directive("ref", handler3);
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-if can only be used on a <template> tag", el);
  let evaluate2 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      skipDuringClone(() => initTree(clone2))();
    });
    el._x_currentIfEl = clone2;
    el._x_undoIf = () => {
      mutateDom(() => {
        destroyTree(clone2);
        clone2.remove();
      });
      delete el._x_currentIfEl;
    };
    return clone2;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate2((value) => {
    value ? show() : hide();
  }));
  cleanup2(() => el._x_undoIf && el._x_undoIf());
});
directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
  let names = evaluate2(expression);
  names.forEach((name) => setIdRoot(el, name));
});
interceptClone((from, to) => {
  if (from._x_ids) {
    to._x_ids = from._x_ids;
  }
});
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
  let evaluate2 = expression ? evaluateLater(el, expression) : () => {
  };
  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents)
      el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value))
      el._x_forwardEvents.push(value);
  }
  let removeListener = on(el, value, modifiers, (e2) => {
    evaluate2(() => {
    }, { scope: { "$event": e2 }, params: [e2] });
  });
  cleanup2(() => removeListener());
}));
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
  directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
var src_default = alpine_default;
var module_default = src_default;
const generatedAttribute = "generated";
const mouseDownEvent = "pointerdown";
const mouseUpEvent = "pointerup";
const mouseLeaveEvent = "pointerleave";
const mouseOutEvent = "pointerout";
const mouseMoveEvent = "pointermove";
const touchStartEvent = "touchstart";
const touchEndEvent = "touchend";
const touchMoveEvent = "touchmove";
const touchCancelEvent = "touchcancel";
const resizeEvent = "resize";
const visibilityChangeEvent = "visibilitychange";
const errorPrefix = "tsParticles - Error";
const percentDenominator = 100;
const halfRandom = 0.5;
const millisecondsToSeconds = 1e3;
var MoveDirection;
(function(MoveDirection2) {
  MoveDirection2["bottom"] = "bottom";
  MoveDirection2["bottomLeft"] = "bottom-left";
  MoveDirection2["bottomRight"] = "bottom-right";
  MoveDirection2["left"] = "left";
  MoveDirection2["none"] = "none";
  MoveDirection2["right"] = "right";
  MoveDirection2["top"] = "top";
  MoveDirection2["topLeft"] = "top-left";
  MoveDirection2["topRight"] = "top-right";
  MoveDirection2["outside"] = "outside";
  MoveDirection2["inside"] = "inside";
})(MoveDirection || (MoveDirection = {}));
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isString(arg) {
  return typeof arg === "string";
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function isNull(arg) {
  return arg === null || arg === void 0;
}
const origin$6 = {
  x: 0,
  y: 0,
  z: 0
}, squareExp$4 = 2, inverseFactorNumerator = 1;
class Vector3d {
  constructor(xOrCoords, y2, z2) {
    this._updateFromAngle = (angle, length) => {
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    };
    if (!isNumber(xOrCoords) && xOrCoords) {
      this.x = xOrCoords.x;
      this.y = xOrCoords.y;
      const coords3d = xOrCoords;
      this.z = coords3d.z ? coords3d.z : origin$6.z;
    } else if (xOrCoords !== void 0 && y2 !== void 0) {
      this.x = xOrCoords;
      this.y = y2;
      this.z = z2 ?? origin$6.z;
    } else {
      throw new Error(`${errorPrefix} Vector3d not initialized correctly`);
    }
  }
  static get origin() {
    return Vector3d.create(origin$6.x, origin$6.y, origin$6.z);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(angle) {
    this._updateFromAngle(angle, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(length) {
    this._updateFromAngle(this.angle, length);
  }
  static clone(source) {
    return Vector3d.create(source.x, source.y, source.z);
  }
  static create(x2, y2, z2) {
    return new Vector3d(x2, y2, z2);
  }
  add(v2) {
    return Vector3d.create(this.x + v2.x, this.y + v2.y, this.z + v2.z);
  }
  addTo(v2) {
    this.x += v2.x;
    this.y += v2.y;
    this.z += v2.z;
  }
  copy() {
    return Vector3d.clone(this);
  }
  distanceTo(v2) {
    return this.sub(v2).length;
  }
  distanceToSq(v2) {
    return this.sub(v2).getLengthSq();
  }
  div(n2) {
    return Vector3d.create(this.x / n2, this.y / n2, this.z / n2);
  }
  divTo(n2) {
    this.x /= n2;
    this.y /= n2;
    this.z /= n2;
  }
  getLengthSq() {
    return this.x ** squareExp$4 + this.y ** squareExp$4;
  }
  mult(n2) {
    return Vector3d.create(this.x * n2, this.y * n2, this.z * n2);
  }
  multTo(n2) {
    this.x *= n2;
    this.y *= n2;
    this.z *= n2;
  }
  normalize() {
    const length = this.length, noLength = 0;
    if (length != noLength) {
      this.multTo(inverseFactorNumerator / length);
    }
  }
  rotate(angle) {
    return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), origin$6.z);
  }
  setTo(c2) {
    this.x = c2.x;
    this.y = c2.y;
    const v3d = c2;
    this.z = v3d.z ? v3d.z : origin$6.z;
  }
  sub(v2) {
    return Vector3d.create(this.x - v2.x, this.y - v2.y, this.z - v2.z);
  }
  subFrom(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
    this.z -= v2.z;
  }
}
class Vector extends Vector3d {
  constructor(xOrCoords, y2) {
    super(xOrCoords, y2, origin$6.z);
  }
  static get origin() {
    return Vector.create(origin$6.x, origin$6.y);
  }
  static clone(source) {
    return Vector.create(source.x, source.y);
  }
  static create(x2, y2) {
    return new Vector(x2, y2);
  }
}
let _random = Math.random;
const _animationLoop = {
  nextFrame: (cb) => requestAnimationFrame(cb),
  cancel: (idx) => cancelAnimationFrame(idx)
}, double$c = 2, doublePI$2 = Math.PI * double$c;
function getRandom() {
  const min = 0, max = 1;
  return clamp(_random(), min, max - Number.EPSILON);
}
function animate(fn) {
  return _animationLoop.nextFrame(fn);
}
function cancelAnimation(handle) {
  _animationLoop.cancel(handle);
}
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
  return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRange(r2) {
  const max = getRangeMax(r2), minOffset = 0;
  let min = getRangeMin(r2);
  if (max === min) {
    min = minOffset;
  }
  return getRandom() * (max - min) + min;
}
function getRangeValue(value) {
  return isNumber(value) ? value : randomInRange(value);
}
function getRangeMin(value) {
  return isNumber(value) ? value : value.min;
}
function getRangeMax(value) {
  return isNumber(value) ? value : value.max;
}
function setRangeValue(source, value) {
  if (source === value || value === void 0 && isNumber(source)) {
    return source;
  }
  const min = getRangeMin(source), max = getRangeMax(source);
  return value !== void 0 ? {
    min: Math.min(min, value),
    max: Math.max(max, value)
  } : setRangeValue(min, max);
}
function getDistances(pointA, pointB) {
  const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y, squareExp2 = 2;
  return { dx, dy, distance: Math.sqrt(dx ** squareExp2 + dy ** squareExp2) };
}
function getDistance(pointA, pointB) {
  return getDistances(pointA, pointB).distance;
}
function degToRad(degrees) {
  const PIDeg = 180;
  return degrees * Math.PI / PIDeg;
}
function getParticleDirectionAngle(direction, position, center) {
  if (isNumber(direction)) {
    return degToRad(direction);
  }
  const empty = 0, half2 = 0.5, quarter = 0.25, threeQuarter = half2 + quarter;
  switch (direction) {
    case MoveDirection.top:
      return -Math.PI * half2;
    case MoveDirection.topRight:
      return -Math.PI * quarter;
    case MoveDirection.right:
      return empty;
    case MoveDirection.bottomRight:
      return Math.PI * quarter;
    case MoveDirection.bottom:
      return Math.PI * half2;
    case MoveDirection.bottomLeft:
      return Math.PI * threeQuarter;
    case MoveDirection.left:
      return Math.PI;
    case MoveDirection.topLeft:
      return -Math.PI * threeQuarter;
    case MoveDirection.inside:
      return Math.atan2(center.y - position.y, center.x - position.x);
    case MoveDirection.outside:
      return Math.atan2(position.y - center.y, position.x - center.x);
    default:
      return getRandom() * doublePI$2;
  }
}
function getParticleBaseVelocity(direction) {
  const baseVelocity = Vector.origin;
  baseVelocity.length = 1;
  baseVelocity.angle = direction;
  return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
  const double2 = 2;
  return Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * double2 * m2 / (m1 + m2), v1.y);
}
function calcExactPositionOrRandomFromSize(data2) {
  var _a, _b;
  return {
    x: ((_a = data2.position) == null ? void 0 : _a.x) ?? getRandom() * data2.size.width,
    y: ((_b = data2.position) == null ? void 0 : _b.y) ?? getRandom() * data2.size.height
  };
}
function parseAlpha(input) {
  const defaultAlpha2 = 1;
  if (!input) {
    return defaultAlpha2;
  }
  return input.endsWith("%") ? parseFloat(input) / percentDenominator : parseFloat(input);
}
var AnimationMode;
(function(AnimationMode2) {
  AnimationMode2["auto"] = "auto";
  AnimationMode2["increase"] = "increase";
  AnimationMode2["decrease"] = "decrease";
  AnimationMode2["random"] = "random";
})(AnimationMode || (AnimationMode = {}));
var AnimationStatus;
(function(AnimationStatus2) {
  AnimationStatus2["increasing"] = "increasing";
  AnimationStatus2["decreasing"] = "decreasing";
})(AnimationStatus || (AnimationStatus = {}));
var DestroyType;
(function(DestroyType2) {
  DestroyType2["none"] = "none";
  DestroyType2["max"] = "max";
  DestroyType2["min"] = "min";
})(DestroyType || (DestroyType = {}));
var OutModeDirection;
(function(OutModeDirection2) {
  OutModeDirection2["bottom"] = "bottom";
  OutModeDirection2["left"] = "left";
  OutModeDirection2["right"] = "right";
  OutModeDirection2["top"] = "top";
})(OutModeDirection || (OutModeDirection = {}));
var PixelMode;
(function(PixelMode2) {
  PixelMode2["precise"] = "precise";
  PixelMode2["percent"] = "percent";
})(PixelMode || (PixelMode = {}));
var StartValueType;
(function(StartValueType2) {
  StartValueType2["max"] = "max";
  StartValueType2["min"] = "min";
  StartValueType2["random"] = "random";
})(StartValueType || (StartValueType = {}));
const _logger = {
  debug: console.debug,
  error: console.error,
  info: console.info,
  log: console.log,
  verbose: console.log,
  warning: console.warn
};
function getLogger() {
  return _logger;
}
function rectSideBounce(data2) {
  const res = { bounced: false }, { pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor } = data2, half2 = 0.5, minVelocity2 = 0;
  if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) {
    return res;
  }
  if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) * half2 && velocity > minVelocity2 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) * half2 && velocity < minVelocity2) {
    res.velocity = velocity * -factor;
    res.bounced = true;
  }
  return res;
}
function checkSelector(element, selectors) {
  const res = executeOnSingleOrMultiple(selectors, (selector) => {
    return element.matches(selector);
  });
  return isArray(res) ? res.some((t2) => t2) : res;
}
function isSsr() {
  return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
function hasMatchMedia() {
  return !isSsr() && typeof matchMedia !== "undefined";
}
function safeMatchMedia(query) {
  if (!hasMatchMedia()) {
    return;
  }
  return matchMedia(query);
}
function safeIntersectionObserver(callback) {
  if (isSsr() || typeof IntersectionObserver === "undefined") {
    return;
  }
  return new IntersectionObserver(callback);
}
function safeMutationObserver(callback) {
  if (isSsr() || typeof MutationObserver === "undefined") {
    return;
  }
  return new MutationObserver(callback);
}
function isInArray(value, array) {
  const invalidIndex = -1;
  return value === array || isArray(array) && array.indexOf(value) > invalidIndex;
}
async function loadFont(font, weight) {
  try {
    await document.fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
  } catch {
  }
}
function arrayRandomIndex(array) {
  return Math.floor(getRandom() * array.length);
}
function itemFromArray(array, index, useIndex = true) {
  return array[index !== void 0 && useIndex ? index % array.length : arrayRandomIndex(array)];
}
function isPointInside(point, size2, offset, radius, direction) {
  const minRadius2 = 0;
  return areBoundsInside(calculateBounds(point, radius ?? minRadius2), size2, offset, direction);
}
function areBoundsInside(bounds, size2, offset, direction) {
  let inside = true;
  if (!direction || direction === OutModeDirection.bottom) {
    inside = bounds.top < size2.height + offset.x;
  }
  if (inside && (!direction || direction === OutModeDirection.left)) {
    inside = bounds.right > offset.x;
  }
  if (inside && (!direction || direction === OutModeDirection.right)) {
    inside = bounds.left < size2.width + offset.y;
  }
  if (inside && (!direction || direction === OutModeDirection.top)) {
    inside = bounds.bottom > offset.y;
  }
  return inside;
}
function calculateBounds(point, radius) {
  return {
    bottom: point.y + radius,
    left: point.x - radius,
    right: point.x + radius,
    top: point.y - radius
  };
}
function deepExtend(destination, ...sources) {
  for (const source of sources) {
    if (source === void 0 || source === null) {
      continue;
    }
    if (!isObject(source)) {
      destination = source;
      continue;
    }
    const sourceIsArray = Array.isArray(source);
    if (sourceIsArray && (isObject(destination) || !destination || !Array.isArray(destination))) {
      destination = [];
    } else if (!sourceIsArray && (isObject(destination) || !destination || Array.isArray(destination))) {
      destination = {};
    }
    for (const key in source) {
      if (key === "__proto__") {
        continue;
      }
      const sourceDict = source, value = sourceDict[key], destDict = destination;
      destDict[key] = isObject(value) && Array.isArray(value) ? value.map((v2) => deepExtend(destDict[key], v2)) : deepExtend(destDict[key], value);
    }
  }
  return destination;
}
function isDivModeEnabled(mode, divs) {
  return !!findItemFromSingleOrMultiple(divs, (t2) => t2.enable && isInArray(mode, t2.mode));
}
function divModeExecute(mode, divs, callback) {
  executeOnSingleOrMultiple(divs, (div) => {
    const divMode2 = div.mode, divEnabled = div.enable;
    if (divEnabled && isInArray(mode, divMode2)) {
      singleDivModeExecute(div, callback);
    }
  });
}
function singleDivModeExecute(div, callback) {
  const selectors = div.selectors;
  executeOnSingleOrMultiple(selectors, (selector) => {
    callback(selector, div);
  });
}
function divMode(divs, element) {
  if (!element || !divs) {
    return;
  }
  return findItemFromSingleOrMultiple(divs, (div) => {
    return checkSelector(element, div.selectors);
  });
}
function circleBounceDataFromParticle(p2) {
  return {
    position: p2.getPosition(),
    radius: p2.getRadius(),
    mass: p2.getMass(),
    velocity: p2.velocity,
    factor: Vector.create(getRangeValue(p2.options.bounce.horizontal.value), getRangeValue(p2.options.bounce.vertical.value))
  };
}
function circleBounce(p1, p2) {
  const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], { dx: xDist, dy: yDist } = getDistances(pos2, pos1), minimumDistance = 0;
  if (xVelocityDiff * xDist + yVelocityDiff * yDist < minimumDistance) {
    return;
  }
  const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = collisionVelocity(u1, u2, m1, m2), v2 = collisionVelocity(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
  p1.velocity.x = vFinal1.x * p1.factor.x;
  p1.velocity.y = vFinal1.y * p1.factor.y;
  p2.velocity.x = vFinal2.x * p2.factor.x;
  p2.velocity.y = vFinal2.y * p2.factor.y;
}
function rectBounce(particle, divBounds) {
  const pPos = particle.getPosition(), size2 = particle.getRadius(), bounds = calculateBounds(pPos, size2), bounceOptions = particle.options.bounce, resH = rectSideBounce({
    pSide: {
      min: bounds.left,
      max: bounds.right
    },
    pOtherSide: {
      min: bounds.top,
      max: bounds.bottom
    },
    rectSide: {
      min: divBounds.left,
      max: divBounds.right
    },
    rectOtherSide: {
      min: divBounds.top,
      max: divBounds.bottom
    },
    velocity: particle.velocity.x,
    factor: getRangeValue(bounceOptions.horizontal.value)
  });
  if (resH.bounced) {
    if (resH.velocity !== void 0) {
      particle.velocity.x = resH.velocity;
    }
    if (resH.position !== void 0) {
      particle.position.x = resH.position;
    }
  }
  const resV = rectSideBounce({
    pSide: {
      min: bounds.top,
      max: bounds.bottom
    },
    pOtherSide: {
      min: bounds.left,
      max: bounds.right
    },
    rectSide: {
      min: divBounds.top,
      max: divBounds.bottom
    },
    rectOtherSide: {
      min: divBounds.left,
      max: divBounds.right
    },
    velocity: particle.velocity.y,
    factor: getRangeValue(bounceOptions.vertical.value)
  });
  if (resV.bounced) {
    if (resV.velocity !== void 0) {
      particle.velocity.y = resV.velocity;
    }
    if (resV.position !== void 0) {
      particle.position.y = resV.position;
    }
  }
}
function executeOnSingleOrMultiple(obj, callback) {
  const defaultIndex = 0;
  return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, defaultIndex);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
  return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function findItemFromSingleOrMultiple(obj, callback) {
  if (isArray(obj)) {
    return obj.find((t2, index) => callback(t2, index));
  }
  const defaultIndex = 0;
  return callback(obj, defaultIndex) ? obj : void 0;
}
function initParticleNumericAnimationValue(options, pxRatio) {
  const valueRange = options.value, animationOptions = options.animation, res = {
    delayTime: getRangeValue(animationOptions.delay) * millisecondsToSeconds,
    enable: animationOptions.enable,
    value: getRangeValue(options.value) * pxRatio,
    max: getRangeMax(valueRange) * pxRatio,
    min: getRangeMin(valueRange) * pxRatio,
    loops: 0,
    maxLoops: getRangeValue(animationOptions.count),
    time: 0
  }, decayOffset = 1;
  if (animationOptions.enable) {
    res.decay = decayOffset - getRangeValue(animationOptions.decay);
    switch (animationOptions.mode) {
      case AnimationMode.increase:
        res.status = AnimationStatus.increasing;
        break;
      case AnimationMode.decrease:
        res.status = AnimationStatus.decreasing;
        break;
      case AnimationMode.random:
        res.status = getRandom() >= halfRandom ? AnimationStatus.increasing : AnimationStatus.decreasing;
        break;
    }
    const autoStatus = animationOptions.mode === AnimationMode.auto;
    switch (animationOptions.startValue) {
      case StartValueType.min:
        res.value = res.min;
        if (autoStatus) {
          res.status = AnimationStatus.increasing;
        }
        break;
      case StartValueType.max:
        res.value = res.max;
        if (autoStatus) {
          res.status = AnimationStatus.decreasing;
        }
        break;
      case StartValueType.random:
      default:
        res.value = randomInRange(res);
        if (autoStatus) {
          res.status = getRandom() >= halfRandom ? AnimationStatus.increasing : AnimationStatus.decreasing;
        }
        break;
    }
  }
  res.initialValue = res.value;
  return res;
}
function getPositionOrSize(positionOrSize, canvasSize) {
  const isPercent = positionOrSize.mode === PixelMode.percent;
  if (!isPercent) {
    const { mode: _2, ...rest } = positionOrSize;
    return rest;
  }
  const isPosition = "x" in positionOrSize;
  if (isPosition) {
    return {
      x: positionOrSize.x / percentDenominator * canvasSize.width,
      y: positionOrSize.y / percentDenominator * canvasSize.height
    };
  } else {
    return {
      width: positionOrSize.width / percentDenominator * canvasSize.width,
      height: positionOrSize.height / percentDenominator * canvasSize.height
    };
  }
}
function getPosition(position, canvasSize) {
  return getPositionOrSize(position, canvasSize);
}
function checkDestroy(particle, destroyType, value, minValue, maxValue) {
  switch (destroyType) {
    case DestroyType.max:
      if (value >= maxValue) {
        particle.destroy();
      }
      break;
    case DestroyType.min:
      if (value <= minValue) {
        particle.destroy();
      }
      break;
  }
}
function updateAnimation(particle, data2, changeDirection, destroyType, delta) {
  const minLoops2 = 0, minDelay = 0, identity2 = 1, minVelocity2 = 0, minDecay = 1;
  if (particle.destroyed || !data2 || !data2.enable || (data2.maxLoops ?? minLoops2) > minLoops2 && (data2.loops ?? minLoops2) > (data2.maxLoops ?? minLoops2)) {
    return;
  }
  const velocity = (data2.velocity ?? minVelocity2) * delta.factor, minValue = data2.min, maxValue = data2.max, decay = data2.decay ?? minDecay;
  if (!data2.time) {
    data2.time = 0;
  }
  if ((data2.delayTime ?? minDelay) > minDelay && data2.time < (data2.delayTime ?? minDelay)) {
    data2.time += delta.value;
  }
  if ((data2.delayTime ?? minDelay) > minDelay && data2.time < (data2.delayTime ?? minDelay)) {
    return;
  }
  switch (data2.status) {
    case AnimationStatus.increasing:
      if (data2.value >= maxValue) {
        if (changeDirection) {
          data2.status = AnimationStatus.decreasing;
        } else {
          data2.value -= maxValue;
        }
        if (!data2.loops) {
          data2.loops = minLoops2;
        }
        data2.loops++;
      } else {
        data2.value += velocity;
      }
      break;
    case AnimationStatus.decreasing:
      if (data2.value <= minValue) {
        if (changeDirection) {
          data2.status = AnimationStatus.increasing;
        } else {
          data2.value += maxValue;
        }
        if (!data2.loops) {
          data2.loops = minLoops2;
        }
        data2.loops++;
      } else {
        data2.value -= velocity;
      }
  }
  if (data2.velocity && decay !== identity2) {
    data2.velocity *= decay;
  }
  checkDestroy(particle, destroyType, data2.value, minValue, maxValue);
  if (!particle.destroyed) {
    data2.value = clamp(data2.value, minValue, maxValue);
  }
}
function assertValidVersion(engine, pluginVersion) {
  if (engine.version === pluginVersion) {
    return;
  }
  throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${engine.version}. Plugins version: ${pluginVersion}`);
}
var AlterType;
(function(AlterType2) {
  AlterType2["darken"] = "darken";
  AlterType2["enlighten"] = "enlighten";
})(AlterType || (AlterType = {}));
const randomColorValue = "random", midColorValue = "mid";
function stringToRgba(engine, input) {
  if (!input) {
    return;
  }
  for (const manager of engine.colorManagers.values()) {
    if (input.startsWith(manager.stringPrefix)) {
      return manager.parseString(input);
    }
  }
}
function rangeColorToRgb(engine, input, index, useIndex = true) {
  if (!input) {
    return;
  }
  const color = isString(input) ? { value: input } : input;
  if (isString(color.value)) {
    return colorToRgb(engine, color.value, index, useIndex);
  }
  if (isArray(color.value)) {
    return rangeColorToRgb(engine, {
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  for (const manager of engine.colorManagers.values()) {
    const res = manager.handleRangeColor(color);
    if (res) {
      return res;
    }
  }
}
function colorToRgb(engine, input, index, useIndex = true) {
  if (!input) {
    return;
  }
  const color = isString(input) ? { value: input } : input;
  if (isString(color.value)) {
    return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(engine, color.value);
  }
  if (isArray(color.value)) {
    return colorToRgb(engine, {
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  for (const manager of engine.colorManagers.values()) {
    const res = manager.handleColor(color);
    if (res) {
      return res;
    }
  }
}
function rangeColorToHsl(engine, color, index, useIndex = true) {
  const rgb = rangeColorToRgb(engine, color, index, useIndex);
  return rgb ? rgbToHsl(rgb) : void 0;
}
function rgbToHsl(color) {
  const rgbMax = 255, hMax = 360, sMax = 100, lMax = 100, hMin = 0, sMin = 0, hPhase = 60, half2 = 0.5, double2 = 2, r1 = color.r / rgbMax, g1 = color.g / rgbMax, b1 = color.b / rgbMax, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
    h: hMin,
    l: (max + min) * half2,
    s: sMin
  };
  if (max !== min) {
    res.s = res.l < half2 ? (max - min) / (max + min) : (max - min) / (double2 - max - min);
    res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? double2 + (b1 - r1) / (max - min) : double2 * double2 + (r1 - g1) / (max - min);
  }
  res.l *= lMax;
  res.s *= sMax;
  res.h *= hPhase;
  if (res.h < hMin) {
    res.h += hMax;
  }
  if (res.h >= hMax) {
    res.h -= hMax;
  }
  return res;
}
function stringToRgb(engine, input) {
  return stringToRgba(engine, input);
}
function hslToRgb(hsl) {
  const hMax = 360, sMax = 100, lMax = 100, sMin = 0, lMin = 0, h2 = (hsl.h % hMax + hMax) % hMax, s2 = Math.max(sMin, Math.min(sMax, hsl.s)), l2 = Math.max(lMin, Math.min(lMax, hsl.l)), hNormalized = h2 / hMax, sNormalized = s2 / sMax, lNormalized = l2 / lMax, rgbFactor = 255, triple = 3;
  if (s2 === sMin) {
    const grayscaleValue = Math.round(lNormalized * rgbFactor);
    return { r: grayscaleValue, g: grayscaleValue, b: grayscaleValue };
  }
  const half2 = 0.5, double2 = 2, channel = (temp12, temp22, temp3) => {
    const temp3Min = 0, temp3Max = 1, sextuple = 6;
    if (temp3 < temp3Min) {
      temp3++;
    }
    if (temp3 > temp3Max) {
      temp3--;
    }
    if (temp3 * sextuple < temp3Max) {
      return temp12 + (temp22 - temp12) * sextuple * temp3;
    }
    if (temp3 * double2 < temp3Max) {
      return temp22;
    }
    if (temp3 * triple < temp3Max * double2) {
      const temp3Offset = double2 / triple;
      return temp12 + (temp22 - temp12) * (temp3Offset - temp3) * sextuple;
    }
    return temp12;
  }, sNormalizedOffset = 1, temp1 = lNormalized < half2 ? lNormalized * (sNormalizedOffset + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = double2 * lNormalized - temp1, phaseNumerator = 1, phaseThird = phaseNumerator / triple, red = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized + phaseThird)), green = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized)), blue = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized - phaseThird));
  return { r: Math.round(red), g: Math.round(green), b: Math.round(blue) };
}
function hslaToRgba(hsla) {
  const rgbResult = hslToRgb(hsla);
  return {
    a: hsla.a,
    b: rgbResult.b,
    g: rgbResult.g,
    r: rgbResult.r
  };
}
function getRandomRgbColor(min) {
  const defaultMin = 0, fixedMin = defaultMin, rgbMax = 256;
  return {
    b: Math.floor(randomInRange(setRangeValue(fixedMin, rgbMax))),
    g: Math.floor(randomInRange(setRangeValue(fixedMin, rgbMax))),
    r: Math.floor(randomInRange(setRangeValue(fixedMin, rgbMax)))
  };
}
function getStyleFromRgb(color, opacity) {
  const defaultOpacity2 = 1;
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? defaultOpacity2})`;
}
function getStyleFromHsl(color, opacity) {
  const defaultOpacity2 = 1;
  return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? defaultOpacity2})`;
}
function colorMix(color1, color2, size1, size2) {
  let rgb1 = color1, rgb2 = color2;
  if (rgb1.r === void 0) {
    rgb1 = hslToRgb(color1);
  }
  if (rgb2.r === void 0) {
    rgb2 = hslToRgb(color2);
  }
  return {
    b: mix(rgb1.b, rgb2.b, size1, size2),
    g: mix(rgb1.g, rgb2.g, size1, size2),
    r: mix(rgb1.r, rgb2.r, size1, size2)
  };
}
function getLinkColor(p1, p2, linkColor) {
  if (linkColor === randomColorValue) {
    return getRandomRgbColor();
  } else if (linkColor === midColorValue) {
    const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = (p2 == null ? void 0 : p2.getFillColor()) ?? (p2 == null ? void 0 : p2.getStrokeColor());
    if (sourceColor && destColor && p2) {
      return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
    } else {
      const hslColor = sourceColor ?? destColor;
      if (hslColor) {
        return hslToRgb(hslColor);
      }
    }
  } else {
    return linkColor;
  }
}
function getLinkRandomColor(engine, optColor, blink, consent) {
  const color = isString(optColor) ? optColor : optColor.value;
  if (color === randomColorValue) {
    if (consent) {
      return rangeColorToRgb(engine, {
        value: color
      });
    }
    if (blink) {
      return randomColorValue;
    }
    return midColorValue;
  } else if (color === midColorValue) {
    return midColorValue;
  } else {
    return rangeColorToRgb(engine, {
      value: color
    });
  }
}
function getHslFromAnimation(animation) {
  return animation !== void 0 ? {
    h: animation.h.value,
    s: animation.s.value,
    l: animation.l.value
  } : void 0;
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
  const resColor = {
    h: {
      enable: false,
      value: hsl.h
    },
    s: {
      enable: false,
      value: hsl.s
    },
    l: {
      enable: false,
      value: hsl.l
    }
  };
  if (animationOptions) {
    setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
    setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
    setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
  }
  return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
  colorValue.enable = colorAnimation.enable;
  const defaultVelocity = 0, decayOffset = 1, defaultLoops = 0, defaultTime = 0;
  if (colorValue.enable) {
    colorValue.velocity = getRangeValue(colorAnimation.speed) / percentDenominator * reduceFactor;
    colorValue.decay = decayOffset - getRangeValue(colorAnimation.decay);
    colorValue.status = AnimationStatus.increasing;
    colorValue.loops = defaultLoops;
    colorValue.maxLoops = getRangeValue(colorAnimation.count);
    colorValue.time = defaultTime;
    colorValue.delayTime = getRangeValue(colorAnimation.delay) * millisecondsToSeconds;
    if (!colorAnimation.sync) {
      colorValue.velocity *= getRandom();
      colorValue.value *= getRandom();
    }
    colorValue.initialValue = colorValue.value;
    colorValue.offset = setRangeValue(colorAnimation.offset);
  } else {
    colorValue.velocity = defaultVelocity;
  }
}
function updateColorValue(data2, range, decrease, delta) {
  const minLoops2 = 0, minDelay = 0, identity2 = 1, minVelocity2 = 0, minOffset = 0, velocityFactor = 3.6;
  if (!data2 || !data2.enable || (data2.maxLoops ?? minLoops2) > minLoops2 && (data2.loops ?? minLoops2) > (data2.maxLoops ?? minLoops2)) {
    return;
  }
  if (!data2.time) {
    data2.time = 0;
  }
  if ((data2.delayTime ?? minDelay) > minDelay && data2.time < (data2.delayTime ?? minDelay)) {
    data2.time += delta.value;
  }
  if ((data2.delayTime ?? minDelay) > minDelay && data2.time < (data2.delayTime ?? minDelay)) {
    return;
  }
  const offset = data2.offset ? randomInRange(data2.offset) : minOffset, velocity = (data2.velocity ?? minVelocity2) * delta.factor + offset * velocityFactor, decay = data2.decay ?? identity2, max = getRangeMax(range), min = getRangeMin(range);
  if (!decrease || data2.status === AnimationStatus.increasing) {
    data2.value += velocity;
    if (data2.value > max) {
      if (!data2.loops) {
        data2.loops = 0;
      }
      data2.loops++;
      if (decrease) {
        data2.status = AnimationStatus.decreasing;
      } else {
        data2.value -= max;
      }
    }
  } else {
    data2.value -= velocity;
    const minValue = 0;
    if (data2.value < minValue) {
      if (!data2.loops) {
        data2.loops = 0;
      }
      data2.loops++;
      data2.status = AnimationStatus.increasing;
    }
  }
  if (data2.velocity && decay !== identity2) {
    data2.velocity *= decay;
  }
  data2.value = clamp(data2.value, min, max);
}
function updateColor(color, delta) {
  if (!color) {
    return;
  }
  const { h: h2, s: s2, l: l2 } = color;
  const ranges = {
    h: { min: 0, max: 360 },
    s: { min: 0, max: 100 },
    l: { min: 0, max: 100 }
  };
  if (h2) {
    updateColorValue(h2, ranges.h, false, delta);
  }
  if (s2) {
    updateColorValue(s2, ranges.s, true, delta);
  }
  if (l2) {
    updateColorValue(l2, ranges.l, true, delta);
  }
}
const origin$5 = { x: 0, y: 0 }, defaultTransform = {
  a: 1,
  b: 0,
  c: 0,
  d: 1
};
function drawLine$1(context, begin, end) {
  context.beginPath();
  context.moveTo(begin.x, begin.y);
  context.lineTo(end.x, end.y);
  context.closePath();
}
function paintBase(context, dimension, baseColor) {
  context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
  context.fillRect(origin$5.x, origin$5.y, dimension.width, dimension.height);
}
function paintImage(context, dimension, image, opacity) {
  if (!image) {
    return;
  }
  context.globalAlpha = opacity;
  context.drawImage(image, origin$5.x, origin$5.y, dimension.width, dimension.height);
  context.globalAlpha = 1;
}
function clear(context, dimension) {
  context.clearRect(origin$5.x, origin$5.y, dimension.width, dimension.height);
}
function drawParticle(data2) {
  const { container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform } = data2, pos = particle.getPosition(), defaultAngle = 0, angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : defaultAngle), rotateData = {
    sin: Math.sin(angle),
    cos: Math.cos(angle)
  }, rotating = !!angle, identity2 = 1, transformData = {
    a: rotateData.cos * (transform.a ?? defaultTransform.a),
    b: rotating ? rotateData.sin * (transform.b ?? identity2) : transform.b ?? defaultTransform.b,
    c: rotating ? -rotateData.sin * (transform.c ?? identity2) : transform.c ?? defaultTransform.c,
    d: rotateData.cos * (transform.d ?? defaultTransform.d)
  };
  context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
  if (backgroundMask) {
    context.globalCompositeOperation = composite;
  }
  const shadowColor = particle.shadowColor;
  if (shadow.enable && shadowColor) {
    context.shadowBlur = shadow.blur;
    context.shadowColor = getStyleFromRgb(shadowColor);
    context.shadowOffsetX = shadow.offset.x;
    context.shadowOffsetY = shadow.offset.y;
  }
  if (colorStyles.fill) {
    context.fillStyle = colorStyles.fill;
  }
  const minStrokeWidth = 0, strokeWidth = particle.strokeWidth ?? minStrokeWidth;
  context.lineWidth = strokeWidth;
  if (colorStyles.stroke) {
    context.strokeStyle = colorStyles.stroke;
  }
  const drawData = {
    container,
    context,
    particle,
    radius,
    opacity,
    delta,
    transformData,
    strokeWidth
  };
  drawShape(drawData);
  drawShapeAfterDraw(drawData);
  drawEffect(drawData);
  context.globalCompositeOperation = "source-over";
  context.resetTransform();
}
function drawEffect(data2) {
  const { container, context, particle, radius, opacity, delta, transformData } = data2;
  if (!particle.effect) {
    return;
  }
  const drawer = container.effectDrawers.get(particle.effect);
  if (!drawer) {
    return;
  }
  drawer.draw({
    context,
    particle,
    radius,
    opacity,
    delta,
    pixelRatio: container.retina.pixelRatio,
    transformData: { ...transformData }
  });
}
function drawShape(data2) {
  const { container, context, particle, radius, opacity, delta, strokeWidth, transformData } = data2, minStrokeWidth = 0;
  if (!particle.shape) {
    return;
  }
  const drawer = container.shapeDrawers.get(particle.shape);
  if (!drawer) {
    return;
  }
  context.beginPath();
  drawer.draw({
    context,
    particle,
    radius,
    opacity,
    delta,
    pixelRatio: container.retina.pixelRatio,
    transformData: { ...transformData }
  });
  if (particle.shapeClose) {
    context.closePath();
  }
  if (strokeWidth > minStrokeWidth) {
    context.stroke();
  }
  if (particle.shapeFill) {
    context.fill();
  }
}
function drawShapeAfterDraw(data2) {
  const { container, context, particle, radius, opacity, delta, transformData } = data2;
  if (!particle.shape) {
    return;
  }
  const drawer = container.shapeDrawers.get(particle.shape);
  if (!(drawer == null ? void 0 : drawer.afterDraw)) {
    return;
  }
  drawer.afterDraw({
    context,
    particle,
    radius,
    opacity,
    delta,
    pixelRatio: container.retina.pixelRatio,
    transformData: { ...transformData }
  });
}
function drawPlugin(context, plugin2, delta) {
  if (!plugin2.draw) {
    return;
  }
  plugin2.draw(context, delta);
}
function drawParticlePlugin(context, plugin2, particle, delta) {
  if (!plugin2.drawParticle) {
    return;
  }
  plugin2.drawParticle(context, particle, delta);
}
function alterHsl(color, type, value) {
  const lFactor = 1;
  return {
    h: color.h,
    s: color.s,
    l: color.l + (type === AlterType.darken ? -lFactor : lFactor) * value
  };
}
function setTransformValue(factor, newFactor, key) {
  const newValue = newFactor[key], defaultValue = 1;
  if (newValue !== void 0) {
    factor[key] = (factor[key] ?? defaultValue) * newValue;
  }
}
function setStyle(canvas, style, important = false) {
  if (!style) {
    return;
  }
  const element = canvas;
  if (!element) {
    return;
  }
  const elementStyle = element.style;
  if (!elementStyle) {
    return;
  }
  for (const key in style) {
    const value = style[key];
    elementStyle.setProperty(key, value, important ? "important" : "");
  }
}
class Canvas {
  constructor(container, engine) {
    this.container = container;
    this._applyPostDrawUpdaters = (particle) => {
      var _a;
      for (const updater of this._postDrawUpdaters) {
        (_a = updater.afterDraw) == null ? void 0 : _a.call(updater, particle);
      }
    };
    this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform) => {
      var _a;
      for (const updater of this._preDrawUpdaters) {
        if (updater.getColorStyles) {
          const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
          if (fill) {
            colorStyles.fill = fill;
          }
          if (stroke) {
            colorStyles.stroke = stroke;
          }
        }
        if (updater.getTransformValues) {
          const updaterTransform = updater.getTransformValues(particle);
          for (const key in updaterTransform) {
            setTransformValue(transform, updaterTransform, key);
          }
        }
        (_a = updater.beforeDraw) == null ? void 0 : _a.call(updater, particle);
      }
    };
    this._applyResizePlugins = () => {
      var _a;
      for (const plugin2 of this._resizePlugins) {
        (_a = plugin2.resize) == null ? void 0 : _a.call(plugin2);
      }
    };
    this._getPluginParticleColors = (particle) => {
      let fColor, sColor;
      for (const plugin2 of this._colorPlugins) {
        if (!fColor && plugin2.particleFillColor) {
          fColor = rangeColorToHsl(this._engine, plugin2.particleFillColor(particle));
        }
        if (!sColor && plugin2.particleStrokeColor) {
          sColor = rangeColorToHsl(this._engine, plugin2.particleStrokeColor(particle));
        }
        if (fColor && sColor) {
          break;
        }
      }
      return [fColor, sColor];
    };
    this._initCover = async () => {
      const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color;
      if (color) {
        const coverRgb = rangeColorToRgb(this._engine, color);
        if (coverRgb) {
          const coverColor = {
            ...coverRgb,
            a: cover.opacity
          };
          this._coverColorStyle = getStyleFromRgb(coverColor, coverColor.a);
        }
      } else {
        await new Promise((resolve, reject) => {
          if (!cover.image) {
            return;
          }
          const img = document.createElement("img");
          img.addEventListener("load", () => {
            this._coverImage = {
              image: img,
              opacity: cover.opacity
            };
            resolve();
          });
          img.addEventListener("error", (evt) => {
            reject(evt.error);
          });
          img.src = cover.image;
        });
      }
    };
    this._initStyle = () => {
      const element = this.element, options = this.container.actualOptions;
      if (!element) {
        return;
      }
      if (this._fullScreen) {
        this._originalStyle = deepExtend({}, element.style);
        this._setFullScreenStyle();
      } else {
        this._resetOriginalStyle();
      }
      for (const key in options.style) {
        if (!key || !options.style) {
          continue;
        }
        const value = options.style[key];
        if (!value) {
          continue;
        }
        element.style.setProperty(key, value, "important");
      }
    };
    this._initTrail = async () => {
      const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
      if (!trail.enable) {
        return;
      }
      const factorNumerator = 1, opacity = factorNumerator / trail.length;
      if (trailFill.color) {
        const fillColor = rangeColorToRgb(this._engine, trailFill.color);
        if (!fillColor) {
          return;
        }
        this._trailFill = {
          color: {
            ...fillColor
          },
          opacity
        };
      } else {
        await new Promise((resolve, reject) => {
          if (!trailFill.image) {
            return;
          }
          const img = document.createElement("img");
          img.addEventListener("load", () => {
            this._trailFill = {
              image: img,
              opacity
            };
            resolve();
          });
          img.addEventListener("error", (evt) => {
            reject(evt.error);
          });
          img.src = trailFill.image;
        });
      }
    };
    this._paintBase = (baseColor) => {
      this.draw((ctx) => paintBase(ctx, this.size, baseColor));
    };
    this._paintImage = (image, opacity) => {
      this.draw((ctx) => paintImage(ctx, this.size, image, opacity));
    };
    this._repairStyle = () => {
      const element = this.element;
      if (!element) {
        return;
      }
      this._safeMutationObserver((observer2) => observer2.disconnect());
      this._initStyle();
      this.initBackground();
      this._safeMutationObserver((observer2) => {
        if (!element || !(element instanceof Node)) {
          return;
        }
        observer2.observe(element, { attributes: true });
      });
    };
    this._resetOriginalStyle = () => {
      const element = this.element, originalStyle = this._originalStyle;
      if (!(element && originalStyle)) {
        return;
      }
      setStyle(element, originalStyle);
    };
    this._safeMutationObserver = (callback) => {
      if (!this._mutationObserver) {
        return;
      }
      callback(this._mutationObserver);
    };
    this._setFullScreenStyle = () => {
      const element = this.element;
      if (!element) {
        return;
      }
      const radix = 10, zIndex = this.container.actualOptions.fullScreen.zIndex.toString(radix);
      setStyle(element, {
        position: "fixed",
        "z-index": zIndex,
        zIndex,
        top: "0",
        left: "0",
        width: "100%",
        height: "100%"
      }, true);
    };
    this._engine = engine;
    this._standardSize = {
      height: 0,
      width: 0
    };
    const pxRatio = container.retina.pixelRatio, stdSize = this._standardSize;
    this.size = {
      height: stdSize.height * pxRatio,
      width: stdSize.width * pxRatio
    };
    this._context = null;
    this._generated = false;
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    this._resizePlugins = [];
    this._colorPlugins = [];
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill, minimumLength = 0;
    if (options.backgroundMask.enable) {
      this.paint();
    } else if (trail.enable && trail.length > minimumLength && trailFill) {
      if (trailFill.color) {
        this._paintBase(getStyleFromRgb(trailFill.color, trailFill.opacity));
      } else if (trailFill.image) {
        this._paintImage(trailFill.image, trailFill.opacity);
      }
    } else if (options.clear) {
      this.draw((ctx) => {
        clear(ctx, this.size);
      });
    }
  }
  destroy() {
    this.stop();
    if (this._generated) {
      const element = this.element;
      element == null ? void 0 : element.remove();
    } else {
      this._resetOriginalStyle();
    }
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    this._resizePlugins = [];
    this._colorPlugins = [];
  }
  draw(cb) {
    const ctx = this._context;
    if (!ctx) {
      return;
    }
    return cb(ctx);
  }
  drawAsync(cb) {
    const ctx = this._context;
    if (!ctx) {
      return void 0;
    }
    return cb(ctx);
  }
  drawParticle(particle, delta) {
    if (particle.spawning || particle.destroyed) {
      return;
    }
    const radius = particle.getRadius(), minimumSize = 0;
    if (radius <= minimumSize) {
      return;
    }
    const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
    let [fColor, sColor] = this._getPluginParticleColors(particle);
    if (!fColor) {
      fColor = pfColor;
    }
    if (!sColor) {
      sColor = psColor;
    }
    if (!fColor && !sColor) {
      return;
    }
    this.draw((ctx) => {
      var _a;
      const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zIndexFactorOffset = 1, zIndexFactor = zIndexFactorOffset - particle.zIndexFactor, zOpacityFactor = zIndexFactor ** zIndexOptions.opacityRate, defaultOpacity2 = 1, opacity = particle.bubble.opacity ?? ((_a = particle.opacity) == null ? void 0 : _a.value) ?? defaultOpacity2, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
        fill: fColor ? getStyleFromHsl(fColor, zOpacity) : void 0
      };
      colorStyles.stroke = sColor ? getStyleFromHsl(sColor, zStrokeOpacity) : colorStyles.fill;
      this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
      drawParticle({
        container,
        context: ctx,
        particle,
        delta,
        colorStyles,
        backgroundMask: options.backgroundMask.enable,
        composite: options.backgroundMask.composite,
        radius: radius * zIndexFactor ** zIndexOptions.sizeRate,
        opacity: zOpacity,
        shadow: particle.options.shadow,
        transform
      });
      this._applyPostDrawUpdaters(particle);
    });
  }
  drawParticlePlugin(plugin2, particle, delta) {
    this.draw((ctx) => drawParticlePlugin(ctx, plugin2, particle, delta));
  }
  drawPlugin(plugin2, delta) {
    this.draw((ctx) => drawPlugin(ctx, plugin2, delta));
  }
  async init() {
    this._safeMutationObserver((obs) => obs.disconnect());
    this._mutationObserver = safeMutationObserver((records) => {
      for (const record of records) {
        if (record.type === "attributes" && record.attributeName === "style") {
          this._repairStyle();
        }
      }
    });
    this.resize();
    this._initStyle();
    await this._initCover();
    try {
      await this._initTrail();
    } catch (e2) {
      getLogger().error(e2);
    }
    this.initBackground();
    this._safeMutationObserver((obs) => {
      if (!this.element || !(this.element instanceof Node)) {
        return;
      }
      obs.observe(this.element, { attributes: true });
    });
    this.initUpdaters();
    this.initPlugins();
    this.paint();
  }
  initBackground() {
    const options = this.container.actualOptions, background = options.background, element = this.element;
    if (!element) {
      return;
    }
    const elementStyle = element.style;
    if (!elementStyle) {
      return;
    }
    if (background.color) {
      const color = rangeColorToRgb(this._engine, background.color);
      elementStyle.backgroundColor = color ? getStyleFromRgb(color, background.opacity) : "";
    } else {
      elementStyle.backgroundColor = "";
    }
    elementStyle.backgroundImage = background.image || "";
    elementStyle.backgroundPosition = background.position || "";
    elementStyle.backgroundRepeat = background.repeat || "";
    elementStyle.backgroundSize = background.size || "";
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const plugin2 of this.container.plugins.values()) {
      if (plugin2.resize) {
        this._resizePlugins.push(plugin2);
      }
      if (plugin2.particleFillColor ?? plugin2.particleStrokeColor) {
        this._colorPlugins.push(plugin2);
      }
    }
  }
  initUpdaters() {
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    for (const updater of this.container.particles.updaters) {
      if (updater.afterDraw) {
        this._postDrawUpdaters.push(updater);
      }
      if (updater.getColorStyles ?? updater.getTransformValues ?? updater.beforeDraw) {
        this._preDrawUpdaters.push(updater);
      }
    }
  }
  loadCanvas(canvas) {
    if (this._generated && this.element) {
      this.element.remove();
    }
    this._generated = canvas.dataset && generatedAttribute in canvas.dataset ? canvas.dataset[generatedAttribute] === "true" : this._generated;
    this.element = canvas;
    this.element.ariaHidden = "true";
    this._originalStyle = deepExtend({}, this.element.style);
    const standardSize = this._standardSize;
    standardSize.height = canvas.offsetHeight;
    standardSize.width = canvas.offsetWidth;
    const pxRatio = this.container.retina.pixelRatio, retinaSize = this.size;
    canvas.height = retinaSize.height = standardSize.height * pxRatio;
    canvas.width = retinaSize.width = standardSize.width * pxRatio;
    this._context = this.element.getContext("2d");
    this._safeMutationObserver((obs) => {
      if (!this.element || !(this.element instanceof Node)) {
        return;
      }
      obs.observe(this.element, { attributes: true });
    });
    this.container.retina.init();
    this.initBackground();
  }
  paint() {
    const options = this.container.actualOptions;
    this.draw((ctx) => {
      if (options.backgroundMask.enable && options.backgroundMask.cover) {
        clear(ctx, this.size);
        if (this._coverImage) {
          this._paintImage(this._coverImage.image, this._coverImage.opacity);
        } else if (this._coverColorStyle) {
          this._paintBase(this._coverColorStyle);
        } else {
          this._paintBase();
        }
      } else {
        this._paintBase();
      }
    });
  }
  resize() {
    if (!this.element) {
      return false;
    }
    const container = this.container, currentSize = container.canvas._standardSize, newSize = {
      width: this.element.offsetWidth,
      height: this.element.offsetHeight
    }, pxRatio = container.retina.pixelRatio, retinaSize = {
      width: newSize.width * pxRatio,
      height: newSize.height * pxRatio
    };
    if (newSize.height === currentSize.height && newSize.width === currentSize.width && retinaSize.height === this.element.height && retinaSize.width === this.element.width) {
      return false;
    }
    const oldSize = { ...currentSize };
    currentSize.height = newSize.height;
    currentSize.width = newSize.width;
    const canvasSize = this.size;
    this.element.width = canvasSize.width = retinaSize.width;
    this.element.height = canvasSize.height = retinaSize.height;
    if (this.container.started) {
      container.particles.setResizeFactor({
        width: currentSize.width / oldSize.width,
        height: currentSize.height / oldSize.height
      });
    }
    return true;
  }
  stop() {
    this._safeMutationObserver((obs) => obs.disconnect());
    this._mutationObserver = void 0;
    this.draw((ctx) => clear(ctx, this.size));
  }
  async windowResize() {
    if (!this.element || !this.resize()) {
      return;
    }
    const container = this.container, needsRefresh = container.updateActualOptions();
    container.particles.setDensity();
    this._applyResizePlugins();
    if (needsRefresh) {
      await container.refresh();
    }
  }
}
var InteractivityDetect;
(function(InteractivityDetect2) {
  InteractivityDetect2["canvas"] = "canvas";
  InteractivityDetect2["parent"] = "parent";
  InteractivityDetect2["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));
const double$b = 2;
function manageListener(element, event, handler4, add2, options) {
  if (add2) {
    let addOptions = { passive: true };
    if (isBoolean(options)) {
      addOptions.capture = options;
    } else if (options !== void 0) {
      addOptions = options;
    }
    element.addEventListener(event, handler4, addOptions);
  } else {
    const removeOptions = options;
    element.removeEventListener(event, handler4, removeOptions);
  }
}
class EventListeners {
  constructor(container) {
    this.container = container;
    this._doMouseTouchClick = (e2) => {
      const container2 = this.container, options = container2.actualOptions;
      if (this._canPush) {
        const mouseInteractivity = container2.interactivity.mouse, mousePos = mouseInteractivity.position;
        if (!mousePos) {
          return;
        }
        mouseInteractivity.clickPosition = { ...mousePos };
        mouseInteractivity.clickTime = (/* @__PURE__ */ new Date()).getTime();
        const onClick = options.interactivity.events.onClick;
        executeOnSingleOrMultiple(onClick.mode, (mode) => this.container.handleClickMode(mode));
      }
      if (e2.type === "touchend") {
        const touchDelay = 500;
        setTimeout(() => this._mouseTouchFinish(), touchDelay);
      }
    };
    this._handleThemeChange = (e2) => {
      const mediaEvent = e2, container2 = this.container, options = container2.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme2) => theme2.name === themeName);
      if (theme == null ? void 0 : theme.default.auto) {
        void container2.loadTheme(themeName);
      }
    };
    this._handleVisibilityChange = () => {
      const container2 = this.container, options = container2.actualOptions;
      this._mouseTouchFinish();
      if (!options.pauseOnBlur) {
        return;
      }
      if (document == null ? void 0 : document.hidden) {
        container2.pageHidden = true;
        container2.pause();
      } else {
        container2.pageHidden = false;
        if (container2.animationStatus) {
          void container2.play(true);
        } else {
          void container2.draw(true);
        }
      }
    };
    this._handleWindowResize = () => {
      if (this._resizeTimeout) {
        clearTimeout(this._resizeTimeout);
        delete this._resizeTimeout;
      }
      const handleResize = async () => {
        const canvas = this.container.canvas;
        await (canvas == null ? void 0 : canvas.windowResize());
      };
      this._resizeTimeout = setTimeout(() => void handleResize(), this.container.actualOptions.interactivity.events.resize.delay * millisecondsToSeconds);
    };
    this._manageInteractivityListeners = (mouseLeaveTmpEvent, add2) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions;
      const interactivityEl = container2.interactivity.element;
      if (!interactivityEl) {
        return;
      }
      const html = interactivityEl, canvasEl = container2.canvas.element;
      if (canvasEl) {
        canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
      }
      if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
        return;
      }
      manageListener(interactivityEl, mouseMoveEvent, handlers.mouseMove, add2);
      manageListener(interactivityEl, touchStartEvent, handlers.touchStart, add2);
      manageListener(interactivityEl, touchMoveEvent, handlers.touchMove, add2);
      if (!options.interactivity.events.onClick.enable) {
        manageListener(interactivityEl, touchEndEvent, handlers.touchEnd, add2);
      } else {
        manageListener(interactivityEl, touchEndEvent, handlers.touchEndClick, add2);
        manageListener(interactivityEl, mouseUpEvent, handlers.mouseUp, add2);
        manageListener(interactivityEl, mouseDownEvent, handlers.mouseDown, add2);
      }
      manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add2);
      manageListener(interactivityEl, touchCancelEvent, handlers.touchCancel, add2);
    };
    this._manageListeners = (add2) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container2.canvas.element;
      let mouseLeaveTmpEvent = mouseLeaveEvent;
      if (detectType === InteractivityDetect.window) {
        container2.interactivity.element = window;
        mouseLeaveTmpEvent = mouseOutEvent;
      } else if (detectType === InteractivityDetect.parent && canvasEl) {
        container2.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
      } else {
        container2.interactivity.element = canvasEl;
      }
      this._manageMediaMatch(add2);
      this._manageResize(add2);
      this._manageInteractivityListeners(mouseLeaveTmpEvent, add2);
      if (document) {
        manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add2, false);
      }
    };
    this._manageMediaMatch = (add2) => {
      const handlers = this._handlers, mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)");
      if (!mediaMatch) {
        return;
      }
      if (mediaMatch.addEventListener !== void 0) {
        manageListener(mediaMatch, "change", handlers.themeChange, add2);
        return;
      }
      if (mediaMatch.addListener === void 0) {
        return;
      }
      if (add2) {
        mediaMatch.addListener(handlers.oldThemeChange);
      } else {
        mediaMatch.removeListener(handlers.oldThemeChange);
      }
    };
    this._manageResize = (add2) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions;
      if (!options.interactivity.events.resize) {
        return;
      }
      if (typeof ResizeObserver === "undefined") {
        manageListener(window, resizeEvent, handlers.resize, add2);
        return;
      }
      const canvasEl = container2.canvas.element;
      if (this._resizeObserver && !add2) {
        if (canvasEl) {
          this._resizeObserver.unobserve(canvasEl);
        }
        this._resizeObserver.disconnect();
        delete this._resizeObserver;
      } else if (!this._resizeObserver && add2 && canvasEl) {
        this._resizeObserver = new ResizeObserver((entries) => {
          const entry = entries.find((e2) => e2.target === canvasEl);
          if (!entry) {
            return;
          }
          this._handleWindowResize();
        });
        this._resizeObserver.observe(canvasEl);
      }
    };
    this._mouseDown = () => {
      const { interactivity } = this.container;
      if (!interactivity) {
        return;
      }
      const { mouse } = interactivity;
      mouse.clicking = true;
      mouse.downPosition = mouse.position;
    };
    this._mouseTouchClick = (e2) => {
      const container2 = this.container, options = container2.actualOptions, { mouse } = container2.interactivity;
      mouse.inside = true;
      let handled = false;
      const mousePosition = mouse.position;
      if (!mousePosition || !options.interactivity.events.onClick.enable) {
        return;
      }
      for (const plugin2 of container2.plugins.values()) {
        if (!plugin2.clickPositionValid) {
          continue;
        }
        handled = plugin2.clickPositionValid(mousePosition);
        if (handled) {
          break;
        }
      }
      if (!handled) {
        this._doMouseTouchClick(e2);
      }
      mouse.clicking = false;
    };
    this._mouseTouchFinish = () => {
      const interactivity = this.container.interactivity;
      if (!interactivity) {
        return;
      }
      const mouse = interactivity.mouse;
      delete mouse.position;
      delete mouse.clickPosition;
      delete mouse.downPosition;
      interactivity.status = mouseLeaveEvent;
      mouse.inside = false;
      mouse.clicking = false;
    };
    this._mouseTouchMove = (e2) => {
      const container2 = this.container, options = container2.actualOptions, interactivity = container2.interactivity, canvasEl = container2.canvas.element;
      if (!(interactivity == null ? void 0 : interactivity.element)) {
        return;
      }
      interactivity.mouse.inside = true;
      let pos;
      if (e2.type.startsWith("pointer")) {
        this._canPush = true;
        const mouseEvent = e2;
        if (interactivity.element === window) {
          if (canvasEl) {
            const clientRect = canvasEl.getBoundingClientRect();
            pos = {
              x: mouseEvent.clientX - clientRect.left,
              y: mouseEvent.clientY - clientRect.top
            };
          }
        } else if (options.interactivity.detectsOn === InteractivityDetect.parent) {
          const source = mouseEvent.target, target = mouseEvent.currentTarget;
          if (source && target && canvasEl) {
            const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
            pos = {
              x: mouseEvent.offsetX + double$b * sourceRect.left - (targetRect.left + canvasRect.left),
              y: mouseEvent.offsetY + double$b * sourceRect.top - (targetRect.top + canvasRect.top)
            };
          } else {
            pos = {
              x: mouseEvent.offsetX ?? mouseEvent.clientX,
              y: mouseEvent.offsetY ?? mouseEvent.clientY
            };
          }
        } else if (mouseEvent.target === canvasEl) {
          pos = {
            x: mouseEvent.offsetX ?? mouseEvent.clientX,
            y: mouseEvent.offsetY ?? mouseEvent.clientY
          };
        }
      } else {
        this._canPush = e2.type !== "touchmove";
        if (canvasEl) {
          const touchEvent = e2, lengthOffset = 1, lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset], canvasRect = canvasEl.getBoundingClientRect(), defaultCoordinate = 0;
          pos = {
            x: lastTouch.clientX - (canvasRect.left ?? defaultCoordinate),
            y: lastTouch.clientY - (canvasRect.top ?? defaultCoordinate)
          };
        }
      }
      const pxRatio = container2.retina.pixelRatio;
      if (pos) {
        pos.x *= pxRatio;
        pos.y *= pxRatio;
      }
      interactivity.mouse.position = pos;
      interactivity.status = mouseMoveEvent;
    };
    this._touchEnd = (e2) => {
      const evt = e2, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.delete(touch.identifier);
      }
      this._mouseTouchFinish();
    };
    this._touchEndClick = (e2) => {
      const evt = e2, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.delete(touch.identifier);
      }
      this._mouseTouchClick(e2);
    };
    this._touchStart = (e2) => {
      const evt = e2, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.set(touch.identifier, performance.now());
      }
      this._mouseTouchMove(e2);
    };
    this._canPush = true;
    this._touches = /* @__PURE__ */ new Map();
    this._handlers = {
      mouseDown: () => this._mouseDown(),
      mouseLeave: () => this._mouseTouchFinish(),
      mouseMove: (e2) => this._mouseTouchMove(e2),
      mouseUp: (e2) => this._mouseTouchClick(e2),
      touchStart: (e2) => this._touchStart(e2),
      touchMove: (e2) => this._mouseTouchMove(e2),
      touchEnd: (e2) => this._touchEnd(e2),
      touchCancel: (e2) => this._touchEnd(e2),
      touchEndClick: (e2) => this._touchEndClick(e2),
      visibilityChange: () => this._handleVisibilityChange(),
      themeChange: (e2) => this._handleThemeChange(e2),
      oldThemeChange: (e2) => this._handleThemeChange(e2),
      resize: () => {
        this._handleWindowResize();
      }
    };
  }
  addListeners() {
    this._manageListeners(true);
  }
  removeListeners() {
    this._manageListeners(false);
  }
}
var EventType;
(function(EventType2) {
  EventType2["configAdded"] = "configAdded";
  EventType2["containerInit"] = "containerInit";
  EventType2["particlesSetup"] = "particlesSetup";
  EventType2["containerStarted"] = "containerStarted";
  EventType2["containerStopped"] = "containerStopped";
  EventType2["containerDestroyed"] = "containerDestroyed";
  EventType2["containerPaused"] = "containerPaused";
  EventType2["containerPlay"] = "containerPlay";
  EventType2["containerBuilt"] = "containerBuilt";
  EventType2["particleAdded"] = "particleAdded";
  EventType2["particleDestroyed"] = "particleDestroyed";
  EventType2["particleRemoved"] = "particleRemoved";
})(EventType || (EventType = {}));
class OptionsColor {
  constructor() {
    this.value = "";
  }
  static create(source, data2) {
    const color = new OptionsColor();
    color.load(source);
    if (data2 !== void 0) {
      if (isString(data2) || isArray(data2)) {
        color.load({ value: data2 });
      } else {
        color.load(data2);
      }
    }
    return color;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (!isNull(data2.value)) {
      this.value = data2.value;
    }
  }
}
class Background {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "";
    this.image = "";
    this.position = "";
    this.repeat = "";
    this.size = "";
    this.opacity = 1;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.color !== void 0) {
      this.color = OptionsColor.create(this.color, data2.color);
    }
    if (data2.image !== void 0) {
      this.image = data2.image;
    }
    if (data2.position !== void 0) {
      this.position = data2.position;
    }
    if (data2.repeat !== void 0) {
      this.repeat = data2.repeat;
    }
    if (data2.size !== void 0) {
      this.size = data2.size;
    }
    if (data2.opacity !== void 0) {
      this.opacity = data2.opacity;
    }
  }
}
class BackgroundMaskCover {
  constructor() {
    this.opacity = 1;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.color !== void 0) {
      this.color = OptionsColor.create(this.color, data2.color);
    }
    if (data2.image !== void 0) {
      this.image = data2.image;
    }
    if (data2.opacity !== void 0) {
      this.opacity = data2.opacity;
    }
  }
}
class BackgroundMask {
  constructor() {
    this.composite = "destination-out";
    this.cover = new BackgroundMaskCover();
    this.enable = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.composite !== void 0) {
      this.composite = data2.composite;
    }
    if (data2.cover !== void 0) {
      const cover = data2.cover, color = isString(data2.cover) ? { color: data2.cover } : data2.cover;
      this.cover.load(cover.color !== void 0 || cover.image !== void 0 ? cover : { color });
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
  }
}
class FullScreen {
  constructor() {
    this.enable = true;
    this.zIndex = 0;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.zIndex !== void 0) {
      this.zIndex = data2.zIndex;
    }
  }
}
class ClickEvent {
  constructor() {
    this.enable = false;
    this.mode = [];
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.mode !== void 0) {
      this.mode = data2.mode;
    }
  }
}
var DivType;
(function(DivType2) {
  DivType2["circle"] = "circle";
  DivType2["rectangle"] = "rectangle";
})(DivType || (DivType = {}));
class DivEvent {
  constructor() {
    this.selectors = [];
    this.enable = false;
    this.mode = [];
    this.type = DivType.circle;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.selectors !== void 0) {
      this.selectors = data2.selectors;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.mode !== void 0) {
      this.mode = data2.mode;
    }
    if (data2.type !== void 0) {
      this.type = data2.type;
    }
  }
}
class Parallax {
  constructor() {
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.force !== void 0) {
      this.force = data2.force;
    }
    if (data2.smooth !== void 0) {
      this.smooth = data2.smooth;
    }
  }
}
class HoverEvent {
  constructor() {
    this.enable = false;
    this.mode = [];
    this.parallax = new Parallax();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.mode !== void 0) {
      this.mode = data2.mode;
    }
    this.parallax.load(data2.parallax);
  }
}
class ResizeEvent {
  constructor() {
    this.delay = 0.5;
    this.enable = true;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.delay !== void 0) {
      this.delay = data2.delay;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
  }
}
class Events {
  constructor() {
    this.onClick = new ClickEvent();
    this.onDiv = new DivEvent();
    this.onHover = new HoverEvent();
    this.resize = new ResizeEvent();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    this.onClick.load(data2.onClick);
    const onDiv = data2.onDiv;
    if (onDiv !== void 0) {
      this.onDiv = executeOnSingleOrMultiple(onDiv, (t2) => {
        const tmp = new DivEvent();
        tmp.load(t2);
        return tmp;
      });
    }
    this.onHover.load(data2.onHover);
    this.resize.load(data2.resize);
  }
}
class Modes {
  constructor(engine, container) {
    this._engine = engine;
    this._container = container;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (!this._container) {
      return;
    }
    const interactors = this._engine.interactors.get(this._container);
    if (!interactors) {
      return;
    }
    for (const interactor of interactors) {
      if (!interactor.loadModeOptions) {
        continue;
      }
      interactor.loadModeOptions(this, data2);
    }
  }
}
class Interactivity {
  constructor(engine, container) {
    this.detectsOn = InteractivityDetect.window;
    this.events = new Events();
    this.modes = new Modes(engine, container);
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    const detectsOn = data2.detectsOn;
    if (detectsOn !== void 0) {
      this.detectsOn = detectsOn;
    }
    this.events.load(data2.events);
    this.modes.load(data2.modes);
  }
}
const defaultPosition = 50;
class ManualParticle {
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.position) {
      this.position = {
        x: data2.position.x ?? defaultPosition,
        y: data2.position.y ?? defaultPosition,
        mode: data2.position.mode ?? PixelMode.percent
      };
    }
    if (data2.options) {
      this.options = deepExtend({}, data2.options);
    }
  }
}
var ResponsiveMode;
(function(ResponsiveMode2) {
  ResponsiveMode2["screen"] = "screen";
  ResponsiveMode2["canvas"] = "canvas";
})(ResponsiveMode || (ResponsiveMode = {}));
class Responsive {
  constructor() {
    this.maxWidth = Infinity;
    this.options = {};
    this.mode = ResponsiveMode.canvas;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (!isNull(data2.maxWidth)) {
      this.maxWidth = data2.maxWidth;
    }
    if (!isNull(data2.mode)) {
      if (data2.mode === ResponsiveMode.screen) {
        this.mode = ResponsiveMode.screen;
      } else {
        this.mode = ResponsiveMode.canvas;
      }
    }
    if (!isNull(data2.options)) {
      this.options = deepExtend({}, data2.options);
    }
  }
}
var ThemeMode;
(function(ThemeMode2) {
  ThemeMode2["any"] = "any";
  ThemeMode2["dark"] = "dark";
  ThemeMode2["light"] = "light";
})(ThemeMode || (ThemeMode = {}));
class ThemeDefault {
  constructor() {
    this.auto = false;
    this.mode = ThemeMode.any;
    this.value = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.auto !== void 0) {
      this.auto = data2.auto;
    }
    if (data2.mode !== void 0) {
      this.mode = data2.mode;
    }
    if (data2.value !== void 0) {
      this.value = data2.value;
    }
  }
}
class Theme {
  constructor() {
    this.name = "";
    this.default = new ThemeDefault();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.name !== void 0) {
      this.name = data2.name;
    }
    this.default.load(data2.default);
    if (data2.options !== void 0) {
      this.options = deepExtend({}, data2.options);
    }
  }
}
class AnimationOptions {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.speed = 1;
    this.decay = 0;
    this.delay = 0;
    this.sync = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.count !== void 0) {
      this.count = setRangeValue(data2.count);
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.speed !== void 0) {
      this.speed = setRangeValue(data2.speed);
    }
    if (data2.decay !== void 0) {
      this.decay = setRangeValue(data2.decay);
    }
    if (data2.delay !== void 0) {
      this.delay = setRangeValue(data2.delay);
    }
    if (data2.sync !== void 0) {
      this.sync = data2.sync;
    }
  }
}
class RangedAnimationOptions extends AnimationOptions {
  constructor() {
    super();
    this.mode = AnimationMode.auto;
    this.startValue = StartValueType.random;
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    if (data2.mode !== void 0) {
      this.mode = data2.mode;
    }
    if (data2.startValue !== void 0) {
      this.startValue = data2.startValue;
    }
  }
}
class ColorAnimation extends AnimationOptions {
  constructor() {
    super();
    this.offset = 0;
    this.sync = true;
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    if (data2.offset !== void 0) {
      this.offset = setRangeValue(data2.offset);
    }
  }
}
class HslAnimation {
  constructor() {
    this.h = new ColorAnimation();
    this.s = new ColorAnimation();
    this.l = new ColorAnimation();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    this.h.load(data2.h);
    this.s.load(data2.s);
    this.l.load(data2.l);
  }
}
class AnimatableColor extends OptionsColor {
  constructor() {
    super();
    this.animation = new HslAnimation();
  }
  static create(source, data2) {
    const color = new AnimatableColor();
    color.load(source);
    if (data2 !== void 0) {
      if (isString(data2) || isArray(data2)) {
        color.load({ value: data2 });
      } else {
        color.load(data2);
      }
    }
    return color;
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    const colorAnimation = data2.animation;
    if (colorAnimation !== void 0) {
      if (colorAnimation.enable !== void 0) {
        this.animation.h.load(colorAnimation);
      } else {
        this.animation.load(data2.animation);
      }
    }
  }
}
var CollisionMode;
(function(CollisionMode2) {
  CollisionMode2["absorb"] = "absorb";
  CollisionMode2["bounce"] = "bounce";
  CollisionMode2["destroy"] = "destroy";
})(CollisionMode || (CollisionMode = {}));
class CollisionsAbsorb {
  constructor() {
    this.speed = 2;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.speed !== void 0) {
      this.speed = data2.speed;
    }
  }
}
class CollisionsOverlap {
  constructor() {
    this.enable = true;
    this.retries = 0;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.retries !== void 0) {
      this.retries = data2.retries;
    }
  }
}
class ValueWithRandom {
  constructor() {
    this.value = 0;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (!isNull(data2.value)) {
      this.value = setRangeValue(data2.value);
    }
  }
}
class AnimationValueWithRandom extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new AnimationOptions();
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    const animation = data2.animation;
    if (animation !== void 0) {
      this.animation.load(animation);
    }
  }
}
class RangedAnimationValueWithRandom extends AnimationValueWithRandom {
  constructor() {
    super();
    this.animation = new RangedAnimationOptions();
  }
  load(data2) {
    super.load(data2);
  }
}
class ParticlesBounceFactor extends ValueWithRandom {
  constructor() {
    super();
    this.value = 1;
  }
}
class ParticlesBounce {
  constructor() {
    this.horizontal = new ParticlesBounceFactor();
    this.vertical = new ParticlesBounceFactor();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    this.horizontal.load(data2.horizontal);
    this.vertical.load(data2.vertical);
  }
}
class Collisions {
  constructor() {
    this.absorb = new CollisionsAbsorb();
    this.bounce = new ParticlesBounce();
    this.enable = false;
    this.maxSpeed = 50;
    this.mode = CollisionMode.bounce;
    this.overlap = new CollisionsOverlap();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    this.absorb.load(data2.absorb);
    this.bounce.load(data2.bounce);
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.maxSpeed !== void 0) {
      this.maxSpeed = setRangeValue(data2.maxSpeed);
    }
    if (data2.mode !== void 0) {
      this.mode = data2.mode;
    }
    this.overlap.load(data2.overlap);
  }
}
class Effect {
  constructor() {
    this.close = true;
    this.fill = true;
    this.options = {};
    this.type = [];
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    const options = data2.options;
    if (options !== void 0) {
      for (const effect3 in options) {
        const item = options[effect3];
        if (item) {
          this.options[effect3] = deepExtend(this.options[effect3] ?? {}, item);
        }
      }
    }
    if (data2.close !== void 0) {
      this.close = data2.close;
    }
    if (data2.fill !== void 0) {
      this.fill = data2.fill;
    }
    if (data2.type !== void 0) {
      this.type = data2.type;
    }
  }
}
class MoveAngle {
  constructor() {
    this.offset = 0;
    this.value = 90;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.offset !== void 0) {
      this.offset = setRangeValue(data2.offset);
    }
    if (data2.value !== void 0) {
      this.value = setRangeValue(data2.value);
    }
  }
}
class MoveAttract {
  constructor() {
    this.distance = 200;
    this.enable = false;
    this.rotate = {
      x: 3e3,
      y: 3e3
    };
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.distance !== void 0) {
      this.distance = setRangeValue(data2.distance);
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.rotate) {
      const rotateX = data2.rotate.x;
      if (rotateX !== void 0) {
        this.rotate.x = rotateX;
      }
      const rotateY = data2.rotate.y;
      if (rotateY !== void 0) {
        this.rotate.y = rotateY;
      }
    }
  }
}
class MoveCenter {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.mode = PixelMode.percent;
    this.radius = 0;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.x !== void 0) {
      this.x = data2.x;
    }
    if (data2.y !== void 0) {
      this.y = data2.y;
    }
    if (data2.mode !== void 0) {
      this.mode = data2.mode;
    }
    if (data2.radius !== void 0) {
      this.radius = data2.radius;
    }
  }
}
class MoveGravity {
  constructor() {
    this.acceleration = 9.81;
    this.enable = false;
    this.inverse = false;
    this.maxSpeed = 50;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.acceleration !== void 0) {
      this.acceleration = setRangeValue(data2.acceleration);
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.inverse !== void 0) {
      this.inverse = data2.inverse;
    }
    if (data2.maxSpeed !== void 0) {
      this.maxSpeed = setRangeValue(data2.maxSpeed);
    }
  }
}
class MovePath {
  constructor() {
    this.clamp = true;
    this.delay = new ValueWithRandom();
    this.enable = false;
    this.options = {};
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.clamp !== void 0) {
      this.clamp = data2.clamp;
    }
    this.delay.load(data2.delay);
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    this.generator = data2.generator;
    if (data2.options) {
      this.options = deepExtend(this.options, data2.options);
    }
  }
}
class MoveTrailFill {
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.color !== void 0) {
      this.color = OptionsColor.create(this.color, data2.color);
    }
    if (data2.image !== void 0) {
      this.image = data2.image;
    }
  }
}
class MoveTrail {
  constructor() {
    this.enable = false;
    this.length = 10;
    this.fill = new MoveTrailFill();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.fill !== void 0) {
      this.fill.load(data2.fill);
    }
    if (data2.length !== void 0) {
      this.length = data2.length;
    }
  }
}
var OutMode;
(function(OutMode2) {
  OutMode2["bounce"] = "bounce";
  OutMode2["none"] = "none";
  OutMode2["out"] = "out";
  OutMode2["destroy"] = "destroy";
  OutMode2["split"] = "split";
})(OutMode || (OutMode = {}));
class OutModes {
  constructor() {
    this.default = OutMode.out;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.default !== void 0) {
      this.default = data2.default;
    }
    this.bottom = data2.bottom ?? data2.default;
    this.left = data2.left ?? data2.default;
    this.right = data2.right ?? data2.default;
    this.top = data2.top ?? data2.default;
  }
}
class Spin {
  constructor() {
    this.acceleration = 0;
    this.enable = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.acceleration !== void 0) {
      this.acceleration = setRangeValue(data2.acceleration);
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.position) {
      this.position = deepExtend({}, data2.position);
    }
  }
}
class Move {
  constructor() {
    this.angle = new MoveAngle();
    this.attract = new MoveAttract();
    this.center = new MoveCenter();
    this.decay = 0;
    this.distance = {};
    this.direction = MoveDirection.none;
    this.drift = 0;
    this.enable = false;
    this.gravity = new MoveGravity();
    this.path = new MovePath();
    this.outModes = new OutModes();
    this.random = false;
    this.size = false;
    this.speed = 2;
    this.spin = new Spin();
    this.straight = false;
    this.trail = new MoveTrail();
    this.vibrate = false;
    this.warp = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    this.angle.load(isNumber(data2.angle) ? { value: data2.angle } : data2.angle);
    this.attract.load(data2.attract);
    this.center.load(data2.center);
    if (data2.decay !== void 0) {
      this.decay = setRangeValue(data2.decay);
    }
    if (data2.direction !== void 0) {
      this.direction = data2.direction;
    }
    if (data2.distance !== void 0) {
      this.distance = isNumber(data2.distance) ? {
        horizontal: data2.distance,
        vertical: data2.distance
      } : { ...data2.distance };
    }
    if (data2.drift !== void 0) {
      this.drift = setRangeValue(data2.drift);
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    this.gravity.load(data2.gravity);
    const outModes = data2.outModes;
    if (outModes !== void 0) {
      if (isObject(outModes)) {
        this.outModes.load(outModes);
      } else {
        this.outModes.load({
          default: outModes
        });
      }
    }
    this.path.load(data2.path);
    if (data2.random !== void 0) {
      this.random = data2.random;
    }
    if (data2.size !== void 0) {
      this.size = data2.size;
    }
    if (data2.speed !== void 0) {
      this.speed = setRangeValue(data2.speed);
    }
    this.spin.load(data2.spin);
    if (data2.straight !== void 0) {
      this.straight = data2.straight;
    }
    this.trail.load(data2.trail);
    if (data2.vibrate !== void 0) {
      this.vibrate = data2.vibrate;
    }
    if (data2.warp !== void 0) {
      this.warp = data2.warp;
    }
  }
}
class OpacityAnimation extends RangedAnimationOptions {
  constructor() {
    super();
    this.destroy = DestroyType.none;
    this.speed = 2;
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    if (data2.destroy !== void 0) {
      this.destroy = data2.destroy;
    }
  }
}
class Opacity extends RangedAnimationValueWithRandom {
  constructor() {
    super();
    this.animation = new OpacityAnimation();
    this.value = 1;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    super.load(data2);
    const animation = data2.animation;
    if (animation !== void 0) {
      this.animation.load(animation);
    }
  }
}
class ParticlesDensity {
  constructor() {
    this.enable = false;
    this.width = 1920;
    this.height = 1080;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    const width = data2.width;
    if (width !== void 0) {
      this.width = width;
    }
    const height = data2.height;
    if (height !== void 0) {
      this.height = height;
    }
  }
}
var LimitMode;
(function(LimitMode2) {
  LimitMode2["delete"] = "delete";
  LimitMode2["wait"] = "wait";
})(LimitMode || (LimitMode = {}));
class ParticlesNumberLimit {
  constructor() {
    this.mode = LimitMode.delete;
    this.value = 0;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.mode !== void 0) {
      this.mode = data2.mode;
    }
    if (data2.value !== void 0) {
      this.value = data2.value;
    }
  }
}
class ParticlesNumber {
  constructor() {
    this.density = new ParticlesDensity();
    this.limit = new ParticlesNumberLimit();
    this.value = 0;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    this.density.load(data2.density);
    this.limit.load(data2.limit);
    if (data2.value !== void 0) {
      this.value = data2.value;
    }
  }
}
class Shadow {
  constructor() {
    this.blur = 0;
    this.color = new OptionsColor();
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
    this.color.value = "#000";
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.blur !== void 0) {
      this.blur = data2.blur;
    }
    this.color = OptionsColor.create(this.color, data2.color);
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.offset === void 0) {
      return;
    }
    if (data2.offset.x !== void 0) {
      this.offset.x = data2.offset.x;
    }
    if (data2.offset.y !== void 0) {
      this.offset.y = data2.offset.y;
    }
  }
}
class Shape {
  constructor() {
    this.close = true;
    this.fill = true;
    this.options = {};
    this.type = "circle";
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    const options = data2.options;
    if (options !== void 0) {
      for (const shape in options) {
        const item = options[shape];
        if (item) {
          this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
        }
      }
    }
    if (data2.close !== void 0) {
      this.close = data2.close;
    }
    if (data2.fill !== void 0) {
      this.fill = data2.fill;
    }
    if (data2.type !== void 0) {
      this.type = data2.type;
    }
  }
}
class SizeAnimation extends RangedAnimationOptions {
  constructor() {
    super();
    this.destroy = DestroyType.none;
    this.speed = 5;
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    if (data2.destroy !== void 0) {
      this.destroy = data2.destroy;
    }
  }
}
class Size extends RangedAnimationValueWithRandom {
  constructor() {
    super();
    this.animation = new SizeAnimation();
    this.value = 3;
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    const animation = data2.animation;
    if (animation !== void 0) {
      this.animation.load(animation);
    }
  }
}
class Stroke {
  constructor() {
    this.width = 0;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.color !== void 0) {
      this.color = AnimatableColor.create(this.color, data2.color);
    }
    if (data2.width !== void 0) {
      this.width = setRangeValue(data2.width);
    }
    if (data2.opacity !== void 0) {
      this.opacity = setRangeValue(data2.opacity);
    }
  }
}
class ZIndex extends ValueWithRandom {
  constructor() {
    super();
    this.opacityRate = 1;
    this.sizeRate = 1;
    this.velocityRate = 1;
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    if (data2.opacityRate !== void 0) {
      this.opacityRate = data2.opacityRate;
    }
    if (data2.sizeRate !== void 0) {
      this.sizeRate = data2.sizeRate;
    }
    if (data2.velocityRate !== void 0) {
      this.velocityRate = data2.velocityRate;
    }
  }
}
class ParticlesOptions {
  constructor(engine, container) {
    this._engine = engine;
    this._container = container;
    this.bounce = new ParticlesBounce();
    this.collisions = new Collisions();
    this.color = new AnimatableColor();
    this.color.value = "#fff";
    this.effect = new Effect();
    this.groups = {};
    this.move = new Move();
    this.number = new ParticlesNumber();
    this.opacity = new Opacity();
    this.reduceDuplicates = false;
    this.shadow = new Shadow();
    this.shape = new Shape();
    this.size = new Size();
    this.stroke = new Stroke();
    this.zIndex = new ZIndex();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.groups !== void 0) {
      for (const group of Object.keys(data2.groups)) {
        if (!Object.hasOwn(data2.groups, group)) {
          continue;
        }
        const item = data2.groups[group];
        if (item !== void 0) {
          this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
        }
      }
    }
    if (data2.reduceDuplicates !== void 0) {
      this.reduceDuplicates = data2.reduceDuplicates;
    }
    this.bounce.load(data2.bounce);
    this.color.load(AnimatableColor.create(this.color, data2.color));
    this.effect.load(data2.effect);
    this.move.load(data2.move);
    this.number.load(data2.number);
    this.opacity.load(data2.opacity);
    this.shape.load(data2.shape);
    this.size.load(data2.size);
    this.shadow.load(data2.shadow);
    this.zIndex.load(data2.zIndex);
    this.collisions.load(data2.collisions);
    if (data2.interactivity !== void 0) {
      this.interactivity = deepExtend({}, data2.interactivity);
    }
    const strokeToLoad = data2.stroke;
    if (strokeToLoad) {
      this.stroke = executeOnSingleOrMultiple(strokeToLoad, (t2) => {
        const tmp = new Stroke();
        tmp.load(t2);
        return tmp;
      });
    }
    if (this._container) {
      const updaters = this._engine.updaters.get(this._container);
      if (updaters) {
        for (const updater of updaters) {
          if (updater.loadOptions) {
            updater.loadOptions(this, data2);
          }
        }
      }
      const interactors = this._engine.interactors.get(this._container);
      if (interactors) {
        for (const interactor of interactors) {
          if (interactor.loadParticlesOptions) {
            interactor.loadParticlesOptions(this, data2);
          }
        }
      }
    }
  }
}
function loadOptions(options, ...sourceOptionsArr) {
  for (const sourceOptions of sourceOptionsArr) {
    options.load(sourceOptions);
  }
}
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
  const options = new ParticlesOptions(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}
class Options {
  constructor(engine, container) {
    this._findDefaultTheme = (mode) => {
      return this.themes.find((theme) => theme.default.value && theme.default.mode === mode) ?? this.themes.find((theme) => theme.default.value && theme.default.mode === ThemeMode.any);
    };
    this._importPreset = (preset) => {
      this.load(this._engine.getPreset(preset));
    };
    this._engine = engine;
    this._container = container;
    this.autoPlay = true;
    this.background = new Background();
    this.backgroundMask = new BackgroundMask();
    this.clear = true;
    this.defaultThemes = {};
    this.delay = 0;
    this.fullScreen = new FullScreen();
    this.detectRetina = true;
    this.duration = 0;
    this.fpsLimit = 120;
    this.interactivity = new Interactivity(engine, container);
    this.manualParticles = [];
    this.particles = loadParticlesOptions(this._engine, this._container);
    this.pauseOnBlur = true;
    this.pauseOnOutsideViewport = true;
    this.responsive = [];
    this.smooth = false;
    this.style = {};
    this.themes = [];
    this.zLayers = 100;
  }
  load(data2) {
    var _a, _b;
    if (isNull(data2)) {
      return;
    }
    if (data2.preset !== void 0) {
      executeOnSingleOrMultiple(data2.preset, (preset) => this._importPreset(preset));
    }
    if (data2.autoPlay !== void 0) {
      this.autoPlay = data2.autoPlay;
    }
    if (data2.clear !== void 0) {
      this.clear = data2.clear;
    }
    if (data2.key !== void 0) {
      this.key = data2.key;
    }
    if (data2.name !== void 0) {
      this.name = data2.name;
    }
    if (data2.delay !== void 0) {
      this.delay = setRangeValue(data2.delay);
    }
    const detectRetina = data2.detectRetina;
    if (detectRetina !== void 0) {
      this.detectRetina = detectRetina;
    }
    if (data2.duration !== void 0) {
      this.duration = setRangeValue(data2.duration);
    }
    const fpsLimit = data2.fpsLimit;
    if (fpsLimit !== void 0) {
      this.fpsLimit = fpsLimit;
    }
    if (data2.pauseOnBlur !== void 0) {
      this.pauseOnBlur = data2.pauseOnBlur;
    }
    if (data2.pauseOnOutsideViewport !== void 0) {
      this.pauseOnOutsideViewport = data2.pauseOnOutsideViewport;
    }
    if (data2.zLayers !== void 0) {
      this.zLayers = data2.zLayers;
    }
    this.background.load(data2.background);
    const fullScreen = data2.fullScreen;
    if (isBoolean(fullScreen)) {
      this.fullScreen.enable = fullScreen;
    } else {
      this.fullScreen.load(fullScreen);
    }
    this.backgroundMask.load(data2.backgroundMask);
    this.interactivity.load(data2.interactivity);
    if (data2.manualParticles) {
      this.manualParticles = data2.manualParticles.map((t2) => {
        const tmp = new ManualParticle();
        tmp.load(t2);
        return tmp;
      });
    }
    this.particles.load(data2.particles);
    this.style = deepExtend(this.style, data2.style);
    this._engine.loadOptions(this, data2);
    if (data2.smooth !== void 0) {
      this.smooth = data2.smooth;
    }
    const interactors = this._engine.interactors.get(this._container);
    if (interactors) {
      for (const interactor of interactors) {
        if (interactor.loadOptions) {
          interactor.loadOptions(this, data2);
        }
      }
    }
    if (data2.responsive !== void 0) {
      for (const responsive of data2.responsive) {
        const optResponsive = new Responsive();
        optResponsive.load(responsive);
        this.responsive.push(optResponsive);
      }
    }
    this.responsive.sort((a2, b2) => a2.maxWidth - b2.maxWidth);
    if (data2.themes !== void 0) {
      for (const theme of data2.themes) {
        const existingTheme = this.themes.find((t2) => t2.name === theme.name);
        if (!existingTheme) {
          const optTheme = new Theme();
          optTheme.load(theme);
          this.themes.push(optTheme);
        } else {
          existingTheme.load(theme);
        }
      }
    }
    this.defaultThemes.dark = (_a = this._findDefaultTheme(ThemeMode.dark)) == null ? void 0 : _a.name;
    this.defaultThemes.light = (_b = this._findDefaultTheme(ThemeMode.light)) == null ? void 0 : _b.name;
  }
  setResponsive(width, pxRatio, defaultOptions) {
    this.load(defaultOptions);
    const responsiveOptions = this.responsive.find((t2) => t2.mode === ResponsiveMode.screen && screen ? t2.maxWidth > screen.availWidth : t2.maxWidth * pxRatio > width);
    this.load(responsiveOptions == null ? void 0 : responsiveOptions.options);
    return responsiveOptions == null ? void 0 : responsiveOptions.maxWidth;
  }
  setTheme(name) {
    if (name) {
      const chosenTheme = this.themes.find((theme) => theme.name === name);
      if (chosenTheme) {
        this.load(chosenTheme.options);
      }
    } else {
      const mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch == null ? void 0 : mediaMatch.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? ThemeMode.dark : ThemeMode.light);
      if (defaultTheme) {
        this.load(defaultTheme.options);
      }
    }
  }
}
var InteractorType;
(function(InteractorType2) {
  InteractorType2["external"] = "external";
  InteractorType2["particles"] = "particles";
})(InteractorType || (InteractorType = {}));
class InteractionManager {
  constructor(engine, container) {
    this.container = container;
    this._engine = engine;
    this._interactors = [];
    this._externalInteractors = [];
    this._particleInteractors = [];
  }
  externalInteract(delta) {
    for (const interactor of this._externalInteractors) {
      if (interactor.isEnabled()) {
        interactor.interact(delta);
      }
    }
  }
  handleClickMode(mode) {
    var _a;
    for (const interactor of this._externalInteractors) {
      (_a = interactor.handleClickMode) == null ? void 0 : _a.call(interactor, mode);
    }
  }
  async init() {
    this._interactors = await this._engine.getInteractors(this.container, true);
    this._externalInteractors = [];
    this._particleInteractors = [];
    for (const interactor of this._interactors) {
      switch (interactor.type) {
        case InteractorType.external:
          this._externalInteractors.push(interactor);
          break;
        case InteractorType.particles:
          this._particleInteractors.push(interactor);
          break;
      }
      interactor.init();
    }
  }
  particlesInteract(particle, delta) {
    for (const interactor of this._externalInteractors) {
      interactor.clear(particle, delta);
    }
    for (const interactor of this._particleInteractors) {
      if (interactor.isEnabled(particle)) {
        interactor.interact(particle, delta);
      }
    }
  }
  reset(particle) {
    for (const interactor of this._externalInteractors) {
      if (interactor.isEnabled()) {
        interactor.reset(particle);
      }
    }
    for (const interactor of this._particleInteractors) {
      if (interactor.isEnabled(particle)) {
        interactor.reset(particle);
      }
    }
  }
}
var ParticleOutType;
(function(ParticleOutType2) {
  ParticleOutType2["normal"] = "normal";
  ParticleOutType2["inside"] = "inside";
  ParticleOutType2["outside"] = "outside";
})(ParticleOutType || (ParticleOutType = {}));
const defaultRetryCount = 0, double$a = 2, half$9 = 0.5, squareExp$3 = 2, randomString = "random";
function loadEffectData(effect3, effectOptions, id, reduceDuplicates) {
  const effectData = effectOptions.options[effect3];
  if (!effectData) {
    return;
  }
  return deepExtend({
    close: effectOptions.close,
    fill: effectOptions.fill
  }, itemFromSingleOrMultiple(effectData, id, reduceDuplicates));
}
function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
  const shapeData = shapeOptions.options[shape];
  if (!shapeData) {
    return;
  }
  return deepExtend({
    close: shapeOptions.close,
    fill: shapeOptions.fill
  }, itemFromSingleOrMultiple(shapeData, id, reduceDuplicates));
}
function fixOutMode(data2) {
  if (!isInArray(data2.outMode, data2.checkModes)) {
    return;
  }
  const diameter = data2.radius * double$a;
  if (data2.coord > data2.maxCoord - diameter) {
    data2.setCb(-data2.radius);
  } else if (data2.coord < diameter) {
    data2.setCb(data2.radius);
  }
}
class Particle {
  constructor(engine, container) {
    this.container = container;
    this._calcPosition = (container2, position, zIndex, tryCount = defaultRetryCount) => {
      for (const plugin2 of container2.plugins.values()) {
        const pluginPos = plugin2.particlePosition !== void 0 ? plugin2.particlePosition(position, this) : void 0;
        if (pluginPos) {
          return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
        }
      }
      const canvasSize = container2.canvas.size, exactPosition = calcExactPositionOrRandomFromSize({
        size: canvasSize,
        position
      }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
        fixOutMode({
          outMode,
          checkModes: [OutMode.bounce],
          coord: pos.x,
          maxCoord: container2.canvas.size.width,
          setCb: (value) => pos.x += value,
          radius
        });
      }, fixVertical = (outMode) => {
        fixOutMode({
          outMode,
          checkModes: [OutMode.bounce],
          coord: pos.y,
          maxCoord: container2.canvas.size.height,
          setCb: (value) => pos.y += value,
          radius
        });
      };
      fixHorizontal(outModes.left ?? outModes.default);
      fixHorizontal(outModes.right ?? outModes.default);
      fixVertical(outModes.top ?? outModes.default);
      fixVertical(outModes.bottom ?? outModes.default);
      if (this._checkOverlap(pos, tryCount)) {
        const increment = 1;
        return this._calcPosition(container2, void 0, zIndex, tryCount + increment);
      }
      return pos;
    };
    this._calculateVelocity = () => {
      const baseVelocity = getParticleBaseVelocity(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
      if (moveOptions.direction === MoveDirection.inside || moveOptions.direction === MoveDirection.outside) {
        return res;
      }
      const rad = degToRad(getRangeValue(moveOptions.angle.value)), radOffset = degToRad(getRangeValue(moveOptions.angle.offset)), range = {
        left: radOffset - rad * half$9,
        right: radOffset + rad * half$9
      };
      if (!moveOptions.straight) {
        res.angle += randomInRange(setRangeValue(range.left, range.right));
      }
      if (moveOptions.random && typeof moveOptions.speed === "number") {
        res.length *= getRandom();
      }
      return res;
    };
    this._checkOverlap = (pos, tryCount = defaultRetryCount) => {
      const collisionsOptions = this.options.collisions, radius = this.getRadius();
      if (!collisionsOptions.enable) {
        return false;
      }
      const overlapOptions = collisionsOptions.overlap;
      if (overlapOptions.enable) {
        return false;
      }
      const retries = overlapOptions.retries, minRetries = 0;
      if (retries >= minRetries && tryCount > retries) {
        throw new Error(`${errorPrefix} particle is overlapping and can't be placed`);
      }
      return !!this.container.particles.find((particle) => getDistance(pos, particle.position) < radius + particle.getRadius());
    };
    this._getRollColor = (color) => {
      if (!color || !this.roll || !this.backColor && !this.roll.alter) {
        return color;
      }
      const rollFactor = 1, none = 0, backFactor = this.roll.horizontal && this.roll.vertical ? double$a * rollFactor : rollFactor, backSum = this.roll.horizontal ? Math.PI * half$9 : none, rolled = Math.floor(((this.roll.angle ?? none) + backSum) / (Math.PI / backFactor)) % double$a;
      if (!rolled) {
        return color;
      }
      if (this.backColor) {
        return this.backColor;
      }
      if (this.roll.alter) {
        return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
      }
      return color;
    };
    this._initPosition = (position) => {
      const container2 = this.container, zIndexValue = getRangeValue(this.options.zIndex.value), minZ = 0;
      this.position = this._calcPosition(container2, position, clamp(zIndexValue, minZ, container2.zLayers));
      this.initialPosition = this.position.copy();
      const canvasSize = container2.canvas.size, defaultRadius = 0;
      this.moveCenter = {
        ...getPosition(this.options.move.center, canvasSize),
        radius: this.options.move.center.radius ?? defaultRadius,
        mode: this.options.move.center.mode ?? PixelMode.percent
      };
      this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
      switch (this.options.move.direction) {
        case MoveDirection.inside:
          this.outType = ParticleOutType.inside;
          break;
        case MoveDirection.outside:
          this.outType = ParticleOutType.outside;
          break;
      }
      this.offset = Vector.origin;
    };
    this._engine = engine;
  }
  destroy(override) {
    var _a, _b, _c;
    if (this.unbreakable || this.destroyed) {
      return;
    }
    this.destroyed = true;
    this.bubble.inRange = false;
    this.slow.inRange = false;
    const container = this.container, pathGenerator = this.pathGenerator, shapeDrawer = container.shapeDrawers.get(this.shape);
    (_a = shapeDrawer == null ? void 0 : shapeDrawer.particleDestroy) == null ? void 0 : _a.call(shapeDrawer, this);
    for (const plugin2 of container.plugins.values()) {
      (_b = plugin2.particleDestroyed) == null ? void 0 : _b.call(plugin2, this, override);
    }
    for (const updater of container.particles.updaters) {
      (_c = updater.particleDestroyed) == null ? void 0 : _c.call(updater, this, override);
    }
    pathGenerator == null ? void 0 : pathGenerator.reset(this);
    this._engine.dispatchEvent(EventType.particleDestroyed, {
      container: this.container,
      data: {
        particle: this
      }
    });
  }
  draw(delta) {
    const container = this.container, canvas = container.canvas;
    for (const plugin2 of container.plugins.values()) {
      canvas.drawParticlePlugin(plugin2, this, delta);
    }
    canvas.drawParticle(this, delta);
  }
  getFillColor() {
    return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.color));
  }
  getMass() {
    return this.getRadius() ** squareExp$3 * Math.PI * half$9;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z
    };
  }
  getRadius() {
    return this.bubble.radius ?? this.size.value;
  }
  getStrokeColor() {
    return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.strokeColor));
  }
  init(id, position, overrideOptions, group) {
    var _a, _b, _c, _d, _e2, _f;
    const container = this.container, engine = this._engine;
    this.id = id;
    this.group = group;
    this.effectClose = true;
    this.effectFill = true;
    this.shapeClose = true;
    this.shapeFill = true;
    this.pathRotation = false;
    this.lastPathTime = 0;
    this.destroyed = false;
    this.unbreakable = false;
    this.isRotating = false;
    this.rotation = 0;
    this.misplaced = false;
    this.retina = {
      maxDistance: {}
    };
    this.outType = ParticleOutType.normal;
    this.ignoresResizeRatio = true;
    const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(this._engine, container, mainOptions.particles), { reduceDuplicates } = particlesOptions, effectType = particlesOptions.effect.type, shapeType = particlesOptions.shape.type;
    this.effect = itemFromSingleOrMultiple(effectType, this.id, reduceDuplicates);
    this.shape = itemFromSingleOrMultiple(shapeType, this.id, reduceDuplicates);
    const effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
    if (overrideOptions) {
      if ((_a = overrideOptions.effect) == null ? void 0 : _a.type) {
        const overrideEffectType = overrideOptions.effect.type, effect3 = itemFromSingleOrMultiple(overrideEffectType, this.id, reduceDuplicates);
        if (effect3) {
          this.effect = effect3;
          effectOptions.load(overrideOptions.effect);
        }
      }
      if ((_b = overrideOptions.shape) == null ? void 0 : _b.type) {
        const overrideShapeType = overrideOptions.shape.type, shape = itemFromSingleOrMultiple(overrideShapeType, this.id, reduceDuplicates);
        if (shape) {
          this.shape = shape;
          shapeOptions.load(overrideOptions.shape);
        }
      }
    }
    if (this.effect === randomString) {
      const availableEffects = [...this.container.effectDrawers.keys()];
      this.effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
    }
    if (this.shape === randomString) {
      const availableShapes = [...this.container.shapeDrawers.keys()];
      this.shape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
    }
    this.effectData = loadEffectData(this.effect, effectOptions, this.id, reduceDuplicates);
    this.shapeData = loadShapeData(this.shape, shapeOptions, this.id, reduceDuplicates);
    particlesOptions.load(overrideOptions);
    const effectData = this.effectData;
    if (effectData) {
      particlesOptions.load(effectData.particles);
    }
    const shapeData = this.shapeData;
    if (shapeData) {
      particlesOptions.load(shapeData.particles);
    }
    const interactivity = new Interactivity(engine, container);
    interactivity.load(container.actualOptions.interactivity);
    interactivity.load(particlesOptions.interactivity);
    this.interactivity = interactivity;
    this.effectFill = (effectData == null ? void 0 : effectData.fill) ?? particlesOptions.effect.fill;
    this.effectClose = (effectData == null ? void 0 : effectData.close) ?? particlesOptions.effect.close;
    this.shapeFill = (shapeData == null ? void 0 : shapeData.fill) ?? particlesOptions.shape.fill;
    this.shapeClose = (shapeData == null ? void 0 : shapeData.close) ?? particlesOptions.shape.close;
    this.options = particlesOptions;
    const pathOptions = this.options.move.path;
    this.pathDelay = getRangeValue(pathOptions.delay.value) * millisecondsToSeconds;
    if (pathOptions.generator) {
      this.pathGenerator = this._engine.getPathGenerator(pathOptions.generator);
      if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
        this.pathGenerator.init(container);
      }
    }
    container.retina.initParticle(this);
    this.size = initParticleNumericAnimationValue(this.options.size, pxRatio);
    this.bubble = {
      inRange: false
    };
    this.slow = {
      inRange: false,
      factor: 1
    };
    this._initPosition(position);
    this.initialVelocity = this._calculateVelocity();
    this.velocity = this.initialVelocity.copy();
    const decayOffset = 1;
    this.moveDecay = decayOffset - getRangeValue(this.options.move.decay);
    const particles = container.particles;
    particles.setLastZIndex(this.position.z);
    this.zIndexFactor = this.position.z / container.zLayers;
    this.sides = 24;
    let effectDrawer = container.effectDrawers.get(this.effect);
    if (!effectDrawer) {
      effectDrawer = this._engine.getEffectDrawer(this.effect);
      if (effectDrawer) {
        container.effectDrawers.set(this.effect, effectDrawer);
      }
    }
    if (effectDrawer == null ? void 0 : effectDrawer.loadEffect) {
      effectDrawer.loadEffect(this);
    }
    let shapeDrawer = container.shapeDrawers.get(this.shape);
    if (!shapeDrawer) {
      shapeDrawer = this._engine.getShapeDrawer(this.shape);
      if (shapeDrawer) {
        container.shapeDrawers.set(this.shape, shapeDrawer);
      }
    }
    if (shapeDrawer == null ? void 0 : shapeDrawer.loadShape) {
      shapeDrawer.loadShape(this);
    }
    const sideCountFunc = shapeDrawer == null ? void 0 : shapeDrawer.getSidesCount;
    if (sideCountFunc) {
      this.sides = sideCountFunc(this);
    }
    this.spawning = false;
    this.shadowColor = rangeColorToRgb(this._engine, this.options.shadow.color);
    for (const updater of particles.updaters) {
      updater.init(this);
    }
    for (const mover of particles.movers) {
      (_c = mover.init) == null ? void 0 : _c.call(mover, this);
    }
    (_d = effectDrawer == null ? void 0 : effectDrawer.particleInit) == null ? void 0 : _d.call(effectDrawer, container, this);
    (_e2 = shapeDrawer == null ? void 0 : shapeDrawer.particleInit) == null ? void 0 : _e2.call(shapeDrawer, container, this);
    for (const plugin2 of container.plugins.values()) {
      (_f = plugin2.particleCreated) == null ? void 0 : _f.call(plugin2, this);
    }
  }
  isInsideCanvas() {
    const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
    return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    var _a;
    for (const updater of this.container.particles.updaters) {
      (_a = updater.reset) == null ? void 0 : _a.call(updater, this);
    }
  }
}
class Point {
  constructor(position, particle) {
    this.position = position;
    this.particle = particle;
  }
}
var RangeType;
(function(RangeType2) {
  RangeType2["circle"] = "circle";
  RangeType2["rectangle"] = "rectangle";
})(RangeType || (RangeType = {}));
const squareExp$2 = 2;
class BaseRange {
  constructor(x2, y2, type) {
    this.position = {
      x: x2,
      y: y2
    };
    this.type = type;
  }
}
class Circle extends BaseRange {
  constructor(x2, y2, radius) {
    super(x2, y2, RangeType.circle);
    this.radius = radius;
  }
  contains(point) {
    return getDistance(point, this.position) <= this.radius;
  }
  intersects(range) {
    const pos1 = this.position, pos2 = range.position, distPos = { x: Math.abs(pos2.x - pos1.x), y: Math.abs(pos2.y - pos1.y) }, r2 = this.radius;
    if (range instanceof Circle || range.type === RangeType.circle) {
      const circleRange = range, rSum = r2 + circleRange.radius, dist = Math.sqrt(distPos.x ** squareExp$2 + distPos.y ** squareExp$2);
      return rSum > dist;
    } else if (range instanceof Rectangle || range.type === RangeType.rectangle) {
      const rectRange = range, { width, height } = rectRange.size, edges = Math.pow(distPos.x - width, squareExp$2) + Math.pow(distPos.y - height, squareExp$2);
      return edges <= r2 ** squareExp$2 || distPos.x <= r2 + width && distPos.y <= r2 + height || distPos.x <= width || distPos.y <= height;
    }
    return false;
  }
}
class Rectangle extends BaseRange {
  constructor(x2, y2, width, height) {
    super(x2, y2, RangeType.rectangle);
    this.size = {
      height,
      width
    };
  }
  contains(point) {
    const w2 = this.size.width, h2 = this.size.height, pos = this.position;
    return point.x >= pos.x && point.x <= pos.x + w2 && point.y >= pos.y && point.y <= pos.y + h2;
  }
  intersects(range) {
    if (range instanceof Circle) {
      return range.intersects(this);
    }
    const w2 = this.size.width, h2 = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof Rectangle ? range.size : { width: 0, height: 0 }, w22 = size2.width, h22 = size2.height;
    return pos2.x < pos1.x + w2 && pos2.x + w22 > pos1.x && pos2.y < pos1.y + h2 && pos2.y + h22 > pos1.y;
  }
}
const half$8 = 0.5, double$9 = 2, subdivideCount = 4;
class QuadTree {
  constructor(rectangle, capacity) {
    this.rectangle = rectangle;
    this.capacity = capacity;
    this._subdivide = () => {
      const { x: x2, y: y2 } = this.rectangle.position, { width, height } = this.rectangle.size, { capacity: capacity2 } = this;
      for (let i2 = 0; i2 < subdivideCount; i2++) {
        const fixedIndex = i2 % double$9;
        this._subs.push(new QuadTree(new Rectangle(x2 + width * half$8 * fixedIndex, y2 + height * half$8 * (Math.round(i2 * half$8) - fixedIndex), width * half$8, height * half$8), capacity2));
      }
      this._divided = true;
    };
    this._points = [];
    this._divided = false;
    this._subs = [];
  }
  insert(point) {
    if (!this.rectangle.contains(point.position)) {
      return false;
    }
    if (this._points.length < this.capacity) {
      this._points.push(point);
      return true;
    }
    if (!this._divided) {
      this._subdivide();
    }
    return this._subs.some((sub) => sub.insert(point));
  }
  query(range, check) {
    const res = [];
    if (!range.intersects(this.rectangle)) {
      return [];
    }
    for (const p2 of this._points) {
      if (!range.contains(p2.position) && getDistance(range.position, p2.position) > p2.particle.getRadius() && (!check || check(p2.particle))) {
        continue;
      }
      res.push(p2.particle);
    }
    if (this._divided) {
      for (const sub of this._subs) {
        res.push(...sub.query(range, check));
      }
    }
    return res;
  }
  queryCircle(position, radius, check) {
    return this.query(new Circle(position.x, position.y, radius), check);
  }
  queryRectangle(position, size2, check) {
    return this.query(new Rectangle(position.x, position.y, size2.width, size2.height), check);
  }
}
const qTreeCapacity = 4, squareExp$1 = 2, defaultRemoveQuantity = 1;
const qTreeRectangle = (canvasSize) => {
  const { height, width } = canvasSize, posOffset = -0.25, sizeFactor = 1.5;
  return new Rectangle(posOffset * width, posOffset * height, sizeFactor * width, sizeFactor * height);
};
class Particles {
  constructor(engine, container) {
    this._addToPool = (...particles) => {
      this._pool.push(...particles);
    };
    this._applyDensity = (options, manualCount, group) => {
      var _a;
      const numberOptions = options.number;
      if (!((_a = options.number.density) == null ? void 0 : _a.enable)) {
        if (group === void 0) {
          this._limit = numberOptions.limit.value;
        } else if (numberOptions.limit) {
          this._groupLimits.set(group, numberOptions.limit.value);
        }
        return;
      }
      const densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, minLimit = 0, optParticlesLimit = numberOptions.limit.value > minLimit ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t2) => t2.group === group).length);
      if (group === void 0) {
        this._limit = numberOptions.limit.value * densityFactor;
      } else {
        this._groupLimits.set(group, numberOptions.limit.value * densityFactor);
      }
      if (particlesCount < particlesNumber) {
        this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
      } else if (particlesCount > particlesNumber) {
        this.removeQuantity(particlesCount - particlesNumber, group);
      }
    };
    this._initDensityFactor = (densityOptions) => {
      const container2 = this._container, defaultFactor = 1;
      if (!container2.canvas.element || !densityOptions.enable) {
        return defaultFactor;
      }
      const canvas = container2.canvas.element, pxRatio = container2.retina.pixelRatio;
      return canvas.width * canvas.height / (densityOptions.height * densityOptions.width * pxRatio ** squareExp$1);
    };
    this._pushParticle = (position, overrideOptions, group, initializer) => {
      try {
        let particle = this._pool.pop();
        if (!particle) {
          particle = new Particle(this._engine, this._container);
        }
        particle.init(this._nextId, position, overrideOptions, group);
        let canAdd = true;
        if (initializer) {
          canAdd = initializer(particle);
        }
        if (!canAdd) {
          return;
        }
        this._array.push(particle);
        this._zArray.push(particle);
        this._nextId++;
        this._engine.dispatchEvent(EventType.particleAdded, {
          container: this._container,
          data: {
            particle
          }
        });
        return particle;
      } catch (e2) {
        getLogger().warning(`${errorPrefix} adding particle: ${e2}`);
      }
    };
    this._removeParticle = (index, group, override) => {
      const particle = this._array[index];
      if (!particle || particle.group !== group) {
        return false;
      }
      const zIdx = this._zArray.indexOf(particle), deleteCount = 1;
      this._array.splice(index, deleteCount);
      this._zArray.splice(zIdx, deleteCount);
      particle.destroy(override);
      this._engine.dispatchEvent(EventType.particleRemoved, {
        container: this._container,
        data: {
          particle
        }
      });
      this._addToPool(particle);
      return true;
    };
    this._engine = engine;
    this._container = container;
    this._nextId = 0;
    this._array = [];
    this._zArray = [];
    this._pool = [];
    this._limit = 0;
    this._groupLimits = /* @__PURE__ */ new Map();
    this._needsSort = false;
    this._lastZIndex = 0;
    this._interactionManager = new InteractionManager(engine, container);
    this._pluginsInitialized = false;
    const canvasSize = container.canvas.size;
    this.quadTree = new QuadTree(qTreeRectangle(canvasSize), qTreeCapacity);
    this.movers = [];
    this.updaters = [];
  }
  get count() {
    return this._array.length;
  }
  addManualParticles() {
    const container = this._container, options = container.actualOptions;
    options.manualParticles.forEach((p2) => this.addParticle(p2.position ? getPosition(p2.position, container.canvas.size) : void 0, p2.options));
  }
  addParticle(position, overrideOptions, group, initializer) {
    const limitMode = this._container.actualOptions.particles.number.limit.mode, limit = group === void 0 ? this._limit : this._groupLimits.get(group) ?? this._limit, currentCount = this.count, minLimit = 0;
    if (limit > minLimit) {
      switch (limitMode) {
        case LimitMode.delete: {
          const countOffset = 1, minCount = 0, countToRemove = currentCount + countOffset - limit;
          if (countToRemove > minCount) {
            this.removeQuantity(countToRemove);
          }
          break;
        }
        case LimitMode.wait:
          if (currentCount >= limit) {
            return;
          }
          break;
      }
    }
    return this._pushParticle(position, overrideOptions, group, initializer);
  }
  clear() {
    this._array = [];
    this._zArray = [];
    this._pluginsInitialized = false;
  }
  destroy() {
    this._array = [];
    this._zArray = [];
    this.movers = [];
    this.updaters = [];
  }
  draw(delta) {
    const container = this._container, canvas = container.canvas;
    canvas.clear();
    this.update(delta);
    for (const plugin2 of container.plugins.values()) {
      canvas.drawPlugin(plugin2, delta);
    }
    for (const p2 of this._zArray) {
      p2.draw(delta);
    }
  }
  filter(condition) {
    return this._array.filter(condition);
  }
  find(condition) {
    return this._array.find(condition);
  }
  get(index) {
    return this._array[index];
  }
  handleClickMode(mode) {
    this._interactionManager.handleClickMode(mode);
  }
  async init() {
    var _a, _b;
    const container = this._container, options = container.actualOptions;
    this._lastZIndex = 0;
    this._needsSort = false;
    await this.initPlugins();
    let handled = false;
    for (const plugin2 of container.plugins.values()) {
      handled = ((_a = plugin2.particlesInitialization) == null ? void 0 : _a.call(plugin2)) ?? handled;
      if (handled) {
        break;
      }
    }
    this.addManualParticles();
    if (!handled) {
      const particlesOptions = options.particles, groups = particlesOptions.groups;
      for (const group in groups) {
        const groupOptions = groups[group];
        for (let i2 = this.count, j2 = 0; j2 < ((_b = groupOptions.number) == null ? void 0 : _b.value) && i2 < particlesOptions.number.value; i2++, j2++) {
          this.addParticle(void 0, groupOptions, group);
        }
      }
      for (let i2 = this.count; i2 < particlesOptions.number.value; i2++) {
        this.addParticle();
      }
    }
  }
  async initPlugins() {
    if (this._pluginsInitialized) {
      return;
    }
    const container = this._container;
    this.movers = await this._engine.getMovers(container, true);
    this.updaters = await this._engine.getUpdaters(container, true);
    await this._interactionManager.init();
    for (const pathGenerator of container.pathGenerators.values()) {
      pathGenerator.init(container);
    }
  }
  push(nb, mouse, overrideOptions, group) {
    for (let i2 = 0; i2 < nb; i2++) {
      this.addParticle(mouse == null ? void 0 : mouse.position, overrideOptions, group);
    }
  }
  async redraw() {
    this.clear();
    await this.init();
    this.draw({ value: 0, factor: 0 });
  }
  remove(particle, group, override) {
    this.removeAt(this._array.indexOf(particle), void 0, group, override);
  }
  removeAt(index, quantity = defaultRemoveQuantity, group, override) {
    const minIndex = 0;
    if (index < minIndex || index > this.count) {
      return;
    }
    let deleted = 0;
    for (let i2 = index; deleted < quantity && i2 < this.count; i2++) {
      if (this._removeParticle(i2, group, override)) {
        i2--;
        deleted++;
      }
    }
  }
  removeQuantity(quantity, group) {
    const defaultIndex = 0;
    this.removeAt(defaultIndex, quantity, group);
  }
  setDensity() {
    const options = this._container.actualOptions, groups = options.particles.groups, manualCount = 0;
    for (const group in groups) {
      this._applyDensity(groups[group], manualCount, group);
    }
    this._applyDensity(options.particles, options.manualParticles.length);
  }
  setLastZIndex(zIndex) {
    this._lastZIndex = zIndex;
    this._needsSort = this._needsSort || this._lastZIndex < zIndex;
  }
  setResizeFactor(factor) {
    this._resizeFactor = factor;
  }
  update(delta) {
    var _a, _b;
    const container = this._container, particlesToDelete = /* @__PURE__ */ new Set();
    this.quadTree = new QuadTree(qTreeRectangle(container.canvas.size), qTreeCapacity);
    for (const pathGenerator of container.pathGenerators.values()) {
      pathGenerator.update();
    }
    for (const plugin2 of container.plugins.values()) {
      (_a = plugin2.update) == null ? void 0 : _a.call(plugin2, delta);
    }
    const resizeFactor = this._resizeFactor;
    for (const particle of this._array) {
      if (resizeFactor && !particle.ignoresResizeRatio) {
        particle.position.x *= resizeFactor.width;
        particle.position.y *= resizeFactor.height;
        particle.initialPosition.x *= resizeFactor.width;
        particle.initialPosition.y *= resizeFactor.height;
      }
      particle.ignoresResizeRatio = false;
      this._interactionManager.reset(particle);
      for (const plugin2 of this._container.plugins.values()) {
        if (particle.destroyed) {
          break;
        }
        (_b = plugin2.particleUpdate) == null ? void 0 : _b.call(plugin2, particle, delta);
      }
      for (const mover of this.movers) {
        if (mover.isEnabled(particle)) {
          mover.move(particle, delta);
        }
      }
      if (particle.destroyed) {
        particlesToDelete.add(particle);
        continue;
      }
      this.quadTree.insert(new Point(particle.getPosition(), particle));
    }
    if (particlesToDelete.size) {
      const checkDelete = (p2) => !particlesToDelete.has(p2);
      this._array = this.filter(checkDelete);
      this._zArray = this._zArray.filter(checkDelete);
      for (const particle of particlesToDelete) {
        this._engine.dispatchEvent(EventType.particleRemoved, {
          container: this._container,
          data: {
            particle
          }
        });
      }
      this._addToPool(...particlesToDelete);
    }
    this._interactionManager.externalInteract(delta);
    for (const particle of this._array) {
      for (const updater of this.updaters) {
        updater.update(particle, delta);
      }
      if (!particle.destroyed && !particle.spawning) {
        this._interactionManager.particlesInteract(particle, delta);
      }
    }
    delete this._resizeFactor;
    if (this._needsSort) {
      const zArray = this._zArray;
      zArray.sort((a2, b2) => b2.position.z - a2.position.z || a2.id - b2.id);
      const lengthOffset = 1;
      this._lastZIndex = zArray[zArray.length - lengthOffset].position.z;
      this._needsSort = false;
    }
  }
}
const defaultRatio$2 = 1, defaultReduceFactor = 1;
class Retina {
  constructor(container) {
    this.container = container;
    this.pixelRatio = defaultRatio$2;
    this.reduceFactor = defaultReduceFactor;
  }
  init() {
    const container = this.container, options = container.actualOptions;
    this.pixelRatio = !options.detectRetina || isSsr() ? defaultRatio$2 : window.devicePixelRatio;
    this.reduceFactor = defaultReduceFactor;
    const ratio = this.pixelRatio, canvas = container.canvas;
    if (canvas.element) {
      const element = canvas.element;
      canvas.size.width = element.offsetWidth * ratio;
      canvas.size.height = element.offsetHeight * ratio;
    }
    const particles = options.particles, moveOptions = particles.move;
    this.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
    this.sizeAnimationSpeed = getRangeValue(particles.size.animation.speed) * ratio;
  }
  initParticle(particle) {
    const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
    props.moveDrift = getRangeValue(moveOptions.drift) * ratio;
    props.moveSpeed = getRangeValue(moveOptions.speed) * ratio;
    props.sizeAnimationSpeed = getRangeValue(options.size.animation.speed) * ratio;
    const maxDistance = props.maxDistance;
    maxDistance.horizontal = moveDistance.horizontal !== void 0 ? moveDistance.horizontal * ratio : void 0;
    maxDistance.vertical = moveDistance.vertical !== void 0 ? moveDistance.vertical * ratio : void 0;
    props.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
  }
}
function guardCheck(container) {
  return container && !container.destroyed;
}
const defaultFps = 60;
function initDelta(value, fpsLimit = defaultFps, smooth = false) {
  return {
    value,
    factor: smooth ? defaultFps / fpsLimit : defaultFps * value / millisecondsToSeconds
  };
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
  const options = new Options(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}
class Container {
  constructor(engine, id, sourceOptions) {
    this._intersectionManager = (entries) => {
      if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) {
        return;
      }
      for (const entry of entries) {
        if (entry.target !== this.interactivity.element) {
          continue;
        }
        if (entry.isIntersecting) {
          void this.play();
        } else {
          this.pause();
        }
      }
    };
    this._nextFrame = (timestamp) => {
      try {
        if (!this._smooth && this._lastFrameTime !== void 0 && timestamp < this._lastFrameTime + millisecondsToSeconds / this.fpsLimit) {
          this.draw(false);
          return;
        }
        this._lastFrameTime ?? (this._lastFrameTime = timestamp);
        const delta = initDelta(timestamp - this._lastFrameTime, this.fpsLimit, this._smooth);
        this.addLifeTime(delta.value);
        this._lastFrameTime = timestamp;
        if (delta.value > millisecondsToSeconds) {
          this.draw(false);
          return;
        }
        this.particles.draw(delta);
        if (!this.alive()) {
          this.destroy();
          return;
        }
        if (this.animationStatus) {
          this.draw(false);
        }
      } catch (e2) {
        getLogger().error(`${errorPrefix} in animation loop`, e2);
      }
    };
    this._engine = engine;
    this.id = Symbol(id);
    this.fpsLimit = 120;
    this._smooth = false;
    this._delay = 0;
    this._duration = 0;
    this._lifeTime = 0;
    this._firstStart = true;
    this.started = false;
    this.destroyed = false;
    this._paused = true;
    this._lastFrameTime = 0;
    this.zLayers = 100;
    this.pageHidden = false;
    this._clickHandlers = /* @__PURE__ */ new Map();
    this._sourceOptions = sourceOptions;
    this._initialSourceOptions = sourceOptions;
    this.retina = new Retina(this);
    this.canvas = new Canvas(this, this._engine);
    this.particles = new Particles(this._engine, this);
    this.pathGenerators = /* @__PURE__ */ new Map();
    this.interactivity = {
      mouse: {
        clicking: false,
        inside: false
      }
    };
    this.plugins = /* @__PURE__ */ new Map();
    this.effectDrawers = /* @__PURE__ */ new Map();
    this.shapeDrawers = /* @__PURE__ */ new Map();
    this._options = loadContainerOptions(this._engine, this);
    this.actualOptions = loadContainerOptions(this._engine, this);
    this._eventListeners = new EventListeners(this);
    this._intersectionObserver = safeIntersectionObserver((entries) => this._intersectionManager(entries));
    this._engine.dispatchEvent(EventType.containerBuilt, { container: this });
  }
  get animationStatus() {
    return !this._paused && !this.pageHidden && guardCheck(this);
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(callback) {
    if (!guardCheck(this)) {
      return;
    }
    const el = this.interactivity.element;
    if (!el) {
      return;
    }
    const clickOrTouchHandler = (e2, pos, radius) => {
      if (!guardCheck(this)) {
        return;
      }
      const pxRatio = this.retina.pixelRatio, posRetina = {
        x: pos.x * pxRatio,
        y: pos.y * pxRatio
      }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
      callback(e2, particles);
    }, clickHandler = (e2) => {
      if (!guardCheck(this)) {
        return;
      }
      const mouseEvent = e2, pos = {
        x: mouseEvent.offsetX || mouseEvent.clientX,
        y: mouseEvent.offsetY || mouseEvent.clientY
      }, radius = 1;
      clickOrTouchHandler(e2, pos, radius);
    }, touchStartHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touched = true;
      touchMoved = false;
    }, touchMoveHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touchMoved = true;
    }, touchEndHandler = (e2) => {
      if (!guardCheck(this)) {
        return;
      }
      if (touched && !touchMoved) {
        const touchEvent = e2, lengthOffset = 1;
        let lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset];
        if (!lastTouch) {
          lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - lengthOffset];
          if (!lastTouch) {
            return;
          }
        }
        const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : void 0, minCoordinate = 0, pos = {
          x: lastTouch.clientX - (canvasRect ? canvasRect.left : minCoordinate),
          y: lastTouch.clientY - (canvasRect ? canvasRect.top : minCoordinate)
        };
        clickOrTouchHandler(e2, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
      }
      touched = false;
      touchMoved = false;
    }, touchCancelHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touched = false;
      touchMoved = false;
    };
    let touched = false, touchMoved = false;
    this._clickHandlers.set("click", clickHandler);
    this._clickHandlers.set("touchstart", touchStartHandler);
    this._clickHandlers.set("touchmove", touchMoveHandler);
    this._clickHandlers.set("touchend", touchEndHandler);
    this._clickHandlers.set("touchcancel", touchCancelHandler);
    for (const [key, handler4] of this._clickHandlers) {
      el.addEventListener(key, handler4);
    }
  }
  addLifeTime(value) {
    this._lifeTime += value;
  }
  addPath(key, generator, override = false) {
    if (!guardCheck(this) || !override && this.pathGenerators.has(key)) {
      return false;
    }
    this.pathGenerators.set(key, generator);
    return true;
  }
  alive() {
    return !this._duration || this._lifeTime <= this._duration;
  }
  clearClickHandlers() {
    var _a;
    if (!guardCheck(this)) {
      return;
    }
    for (const [key, handler4] of this._clickHandlers) {
      (_a = this.interactivity.element) == null ? void 0 : _a.removeEventListener(key, handler4);
    }
    this._clickHandlers.clear();
  }
  destroy(remove = true) {
    var _a, _b;
    if (!guardCheck(this)) {
      return;
    }
    this.stop();
    this.clearClickHandlers();
    this.particles.destroy();
    this.canvas.destroy();
    for (const effectDrawer of this.effectDrawers.values()) {
      (_a = effectDrawer.destroy) == null ? void 0 : _a.call(effectDrawer, this);
    }
    for (const shapeDrawer of this.shapeDrawers.values()) {
      (_b = shapeDrawer.destroy) == null ? void 0 : _b.call(shapeDrawer, this);
    }
    for (const key of this.effectDrawers.keys()) {
      this.effectDrawers.delete(key);
    }
    for (const key of this.shapeDrawers.keys()) {
      this.shapeDrawers.delete(key);
    }
    this._engine.clearPlugins(this);
    this.destroyed = true;
    if (remove) {
      const mainArr = this._engine.items, idx = mainArr.findIndex((t2) => t2 === this), minIndex = 0;
      if (idx >= minIndex) {
        const deleteCount = 1;
        mainArr.splice(idx, deleteCount);
      }
    }
    this._engine.dispatchEvent(EventType.containerDestroyed, { container: this });
  }
  draw(force) {
    if (!guardCheck(this)) {
      return;
    }
    let refreshTime = force;
    const frame = (timestamp) => {
      if (refreshTime) {
        this._lastFrameTime = void 0;
        refreshTime = false;
      }
      this._nextFrame(timestamp);
    };
    this._drawAnimationFrame = animate((timestamp) => frame(timestamp));
  }
  async export(type, options = {}) {
    for (const plugin2 of this.plugins.values()) {
      if (!plugin2.export) {
        continue;
      }
      const res = await plugin2.export(type, options);
      if (!res.supported) {
        continue;
      }
      return res.blob;
    }
    getLogger().error(`${errorPrefix} - Export plugin with type ${type} not found`);
  }
  handleClickMode(mode) {
    var _a;
    if (!guardCheck(this)) {
      return;
    }
    this.particles.handleClickMode(mode);
    for (const plugin2 of this.plugins.values()) {
      (_a = plugin2.handleClickMode) == null ? void 0 : _a.call(plugin2, mode);
    }
  }
  async init() {
    var _a, _b, _c, _d;
    if (!guardCheck(this)) {
      return;
    }
    const effects = this._engine.getSupportedEffects();
    for (const type of effects) {
      const drawer = this._engine.getEffectDrawer(type);
      if (drawer) {
        this.effectDrawers.set(type, drawer);
      }
    }
    const shapes = this._engine.getSupportedShapes();
    for (const type of shapes) {
      const drawer = this._engine.getShapeDrawer(type);
      if (drawer) {
        this.shapeDrawers.set(type, drawer);
      }
    }
    await this.particles.initPlugins();
    this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
    this.actualOptions = loadContainerOptions(this._engine, this, this._options);
    const availablePlugins = await this._engine.getAvailablePlugins(this);
    for (const [id, plugin2] of availablePlugins) {
      this.plugins.set(id, plugin2);
    }
    this.retina.init();
    await this.canvas.init();
    this.updateActualOptions();
    this.canvas.initBackground();
    this.canvas.resize();
    const { zLayers, duration, delay, fpsLimit, smooth } = this.actualOptions;
    this.zLayers = zLayers;
    this._duration = getRangeValue(duration) * millisecondsToSeconds;
    this._delay = getRangeValue(delay) * millisecondsToSeconds;
    this._lifeTime = 0;
    const defaultFpsLimit = 120, minFpsLimit = 0;
    this.fpsLimit = fpsLimit > minFpsLimit ? fpsLimit : defaultFpsLimit;
    this._smooth = smooth;
    for (const drawer of this.effectDrawers.values()) {
      await ((_a = drawer.init) == null ? void 0 : _a.call(drawer, this));
    }
    for (const drawer of this.shapeDrawers.values()) {
      await ((_b = drawer.init) == null ? void 0 : _b.call(drawer, this));
    }
    for (const plugin2 of this.plugins.values()) {
      await ((_c = plugin2.init) == null ? void 0 : _c.call(plugin2));
    }
    this._engine.dispatchEvent(EventType.containerInit, { container: this });
    await this.particles.init();
    this.particles.setDensity();
    for (const plugin2 of this.plugins.values()) {
      (_d = plugin2.particlesSetup) == null ? void 0 : _d.call(plugin2);
    }
    this._engine.dispatchEvent(EventType.particlesSetup, { container: this });
  }
  async loadTheme(name) {
    if (!guardCheck(this)) {
      return;
    }
    this._currentTheme = name;
    await this.refresh();
  }
  pause() {
    var _a;
    if (!guardCheck(this)) {
      return;
    }
    if (this._drawAnimationFrame !== void 0) {
      cancelAnimation(this._drawAnimationFrame);
      delete this._drawAnimationFrame;
    }
    if (this._paused) {
      return;
    }
    for (const plugin2 of this.plugins.values()) {
      (_a = plugin2.pause) == null ? void 0 : _a.call(plugin2);
    }
    if (!this.pageHidden) {
      this._paused = true;
    }
    this._engine.dispatchEvent(EventType.containerPaused, { container: this });
  }
  play(force) {
    if (!guardCheck(this)) {
      return;
    }
    const needsUpdate = this._paused || force;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = false;
      return;
    }
    if (this._paused) {
      this._paused = false;
    }
    if (needsUpdate) {
      for (const plugin2 of this.plugins.values()) {
        if (plugin2.play) {
          plugin2.play();
        }
      }
    }
    this._engine.dispatchEvent(EventType.containerPlay, { container: this });
    this.draw(needsUpdate ?? false);
  }
  async refresh() {
    if (!guardCheck(this)) {
      return;
    }
    this.stop();
    return this.start();
  }
  async reset(sourceOptions) {
    if (!guardCheck(this)) {
      return;
    }
    this._initialSourceOptions = sourceOptions;
    this._sourceOptions = sourceOptions;
    this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
    this.actualOptions = loadContainerOptions(this._engine, this, this._options);
    return this.refresh();
  }
  async start() {
    if (!guardCheck(this) || this.started) {
      return;
    }
    await this.init();
    this.started = true;
    await new Promise((resolve) => {
      const start2 = async () => {
        var _a;
        this._eventListeners.addListeners();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
          this._intersectionObserver.observe(this.interactivity.element);
        }
        for (const plugin2 of this.plugins.values()) {
          await ((_a = plugin2.start) == null ? void 0 : _a.call(plugin2));
        }
        this._engine.dispatchEvent(EventType.containerStarted, { container: this });
        this.play();
        resolve();
      };
      this._delayTimeout = setTimeout(() => void start2(), this._delay);
    });
  }
  stop() {
    var _a;
    if (!guardCheck(this) || !this.started) {
      return;
    }
    if (this._delayTimeout) {
      clearTimeout(this._delayTimeout);
      delete this._delayTimeout;
    }
    this._firstStart = true;
    this.started = false;
    this._eventListeners.removeListeners();
    this.pause();
    this.particles.clear();
    this.canvas.stop();
    if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
      this._intersectionObserver.unobserve(this.interactivity.element);
    }
    for (const plugin2 of this.plugins.values()) {
      (_a = plugin2.stop) == null ? void 0 : _a.call(plugin2);
    }
    for (const key of this.plugins.keys()) {
      this.plugins.delete(key);
    }
    this._sourceOptions = this._options;
    this._engine.dispatchEvent(EventType.containerStopped, { container: this });
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
    this.actualOptions.setTheme(this._currentTheme);
    if (this._responsiveMaxWidth === newMaxWidth) {
      return false;
    }
    this._responsiveMaxWidth = newMaxWidth;
    return true;
  }
}
class EventDispatcher {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map();
  }
  addEventListener(type, listener) {
    this.removeEventListener(type, listener);
    let arr = this._listeners.get(type);
    if (!arr) {
      arr = [];
      this._listeners.set(type, arr);
    }
    arr.push(listener);
  }
  dispatchEvent(type, args) {
    const listeners = this._listeners.get(type);
    listeners == null ? void 0 : listeners.forEach((handler4) => handler4(args));
  }
  hasEventListener(type) {
    return !!this._listeners.get(type);
  }
  removeAllEventListeners(type) {
    if (!type) {
      this._listeners = /* @__PURE__ */ new Map();
    } else {
      this._listeners.delete(type);
    }
  }
  removeEventListener(type, listener) {
    const arr = this._listeners.get(type);
    if (!arr) {
      return;
    }
    const length = arr.length, idx = arr.indexOf(listener), minIndex = 0;
    if (idx < minIndex) {
      return;
    }
    const deleteCount = 1;
    if (length === deleteCount) {
      this._listeners.delete(type);
    } else {
      arr.splice(idx, deleteCount);
    }
  }
}
async function getItemsFromInitializer(container, map, initializers, force = false) {
  let res = map.get(container);
  if (!res || force) {
    res = await Promise.all([...initializers.values()].map((t2) => t2(container)));
    map.set(container, res);
  }
  return res;
}
async function getDataFromUrl(data2) {
  const url = itemFromSingleOrMultiple(data2.url, data2.index);
  if (!url) {
    return data2.fallback;
  }
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  getLogger().error(`${errorPrefix} ${response.status} while retrieving config file`);
  return data2.fallback;
}
const generatedTrue = "true", generatedFalse = "false", canvasTag = "canvas", getCanvasFromContainer = (domContainer) => {
  let canvasEl;
  if (domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === canvasTag) {
    canvasEl = domContainer;
    if (!canvasEl.dataset[generatedAttribute]) {
      canvasEl.dataset[generatedAttribute] = generatedFalse;
    }
  } else {
    const existingCanvases = domContainer.getElementsByTagName(canvasTag);
    if (existingCanvases.length) {
      const firstIndex2 = 0;
      canvasEl = existingCanvases[firstIndex2];
      canvasEl.dataset[generatedAttribute] = generatedFalse;
    } else {
      canvasEl = document.createElement(canvasTag);
      canvasEl.dataset[generatedAttribute] = generatedTrue;
      domContainer.appendChild(canvasEl);
    }
  }
  const fullPercent = "100%";
  if (!canvasEl.style.width) {
    canvasEl.style.width = fullPercent;
  }
  if (!canvasEl.style.height) {
    canvasEl.style.height = fullPercent;
  }
  return canvasEl;
}, getDomContainer = (id, source) => {
  let domContainer = source ?? document.getElementById(id);
  if (domContainer) {
    return domContainer;
  }
  domContainer = document.createElement("div");
  domContainer.id = id;
  domContainer.dataset[generatedAttribute] = generatedTrue;
  document.body.append(domContainer);
  return domContainer;
};
class Engine {
  constructor() {
    this._configs = /* @__PURE__ */ new Map();
    this._domArray = [];
    this._eventDispatcher = new EventDispatcher();
    this._initialized = false;
    this.plugins = [];
    this.colorManagers = /* @__PURE__ */ new Map();
    this.easingFunctions = /* @__PURE__ */ new Map();
    this._initializers = {
      interactors: /* @__PURE__ */ new Map(),
      movers: /* @__PURE__ */ new Map(),
      updaters: /* @__PURE__ */ new Map()
    };
    this.interactors = /* @__PURE__ */ new Map();
    this.movers = /* @__PURE__ */ new Map();
    this.updaters = /* @__PURE__ */ new Map();
    this.presets = /* @__PURE__ */ new Map();
    this.effectDrawers = /* @__PURE__ */ new Map();
    this.shapeDrawers = /* @__PURE__ */ new Map();
    this.pathGenerators = /* @__PURE__ */ new Map();
  }
  get configs() {
    const res = {};
    for (const [name, config] of this._configs) {
      res[name] = config;
    }
    return res;
  }
  get items() {
    return this._domArray;
  }
  get version() {
    return "3.7.1";
  }
  async addColorManager(manager, refresh = true) {
    this.colorManagers.set(manager.key, manager);
    await this.refresh(refresh);
  }
  addConfig(config) {
    const key = config.key ?? config.name ?? "default";
    this._configs.set(key, config);
    this._eventDispatcher.dispatchEvent(EventType.configAdded, { data: { name: key, config } });
  }
  async addEasing(name, easing, refresh = true) {
    if (this.getEasing(name)) {
      return;
    }
    this.easingFunctions.set(name, easing);
    await this.refresh(refresh);
  }
  async addEffect(effect3, drawer, refresh = true) {
    executeOnSingleOrMultiple(effect3, (type) => {
      if (!this.getEffectDrawer(type)) {
        this.effectDrawers.set(type, drawer);
      }
    });
    await this.refresh(refresh);
  }
  addEventListener(type, listener) {
    this._eventDispatcher.addEventListener(type, listener);
  }
  async addInteractor(name, interactorInitializer, refresh = true) {
    this._initializers.interactors.set(name, interactorInitializer);
    await this.refresh(refresh);
  }
  async addMover(name, moverInitializer, refresh = true) {
    this._initializers.movers.set(name, moverInitializer);
    await this.refresh(refresh);
  }
  async addParticleUpdater(name, updaterInitializer, refresh = true) {
    this._initializers.updaters.set(name, updaterInitializer);
    await this.refresh(refresh);
  }
  async addPathGenerator(name, generator, refresh = true) {
    if (!this.getPathGenerator(name)) {
      this.pathGenerators.set(name, generator);
    }
    await this.refresh(refresh);
  }
  async addPlugin(plugin2, refresh = true) {
    if (!this.getPlugin(plugin2.id)) {
      this.plugins.push(plugin2);
    }
    await this.refresh(refresh);
  }
  async addPreset(preset, options, override = false, refresh = true) {
    if (override || !this.getPreset(preset)) {
      this.presets.set(preset, options);
    }
    await this.refresh(refresh);
  }
  async addShape(drawer, refresh = true) {
    for (const validType of drawer.validTypes) {
      if (this.getShapeDrawer(validType)) {
        continue;
      }
      this.shapeDrawers.set(validType, drawer);
    }
    await this.refresh(refresh);
  }
  clearPlugins(container) {
    this.updaters.delete(container);
    this.movers.delete(container);
    this.interactors.delete(container);
  }
  dispatchEvent(type, args) {
    this._eventDispatcher.dispatchEvent(type, args);
  }
  dom() {
    return this.items;
  }
  domItem(index) {
    return this.item(index);
  }
  async getAvailablePlugins(container) {
    const res = /* @__PURE__ */ new Map();
    for (const plugin2 of this.plugins) {
      if (plugin2.needsPlugin(container.actualOptions)) {
        res.set(plugin2.id, await plugin2.getPlugin(container));
      }
    }
    return res;
  }
  getEasing(name) {
    return this.easingFunctions.get(name) ?? ((value) => value);
  }
  getEffectDrawer(type) {
    return this.effectDrawers.get(type);
  }
  async getInteractors(container, force = false) {
    return getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
  }
  async getMovers(container, force = false) {
    return getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
  }
  getPathGenerator(type) {
    return this.pathGenerators.get(type);
  }
  getPlugin(plugin2) {
    return this.plugins.find((t2) => t2.id === plugin2);
  }
  getPreset(preset) {
    return this.presets.get(preset);
  }
  getShapeDrawer(type) {
    return this.shapeDrawers.get(type);
  }
  getSupportedEffects() {
    return this.effectDrawers.keys();
  }
  getSupportedShapes() {
    return this.shapeDrawers.keys();
  }
  async getUpdaters(container, force = false) {
    return getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
  }
  init() {
    if (this._initialized) {
      return;
    }
    this._initialized = true;
  }
  item(index) {
    const { items } = this, item = items[index];
    if (!item || item.destroyed) {
      const deleteCount = 1;
      items.splice(index, deleteCount);
      return;
    }
    return item;
  }
  async load(params) {
    var _a;
    const randomFactor = 1e4, id = params.id ?? ((_a = params.element) == null ? void 0 : _a.id) ?? `tsparticles${Math.floor(getRandom() * randomFactor)}`, { index, url } = params, options = url ? await getDataFromUrl({ fallback: params.options, url, index }) : params.options;
    const currentOptions = itemFromSingleOrMultiple(options, index), { items } = this, oldIndex = items.findIndex((v2) => v2.id.description === id), minIndex = 0, newItem = new Container(this, id, currentOptions);
    if (oldIndex >= minIndex) {
      const old = this.item(oldIndex), one = 1, none = 0, deleteCount = old ? one : none;
      if (old && !old.destroyed) {
        old.destroy(false);
      }
      items.splice(oldIndex, deleteCount, newItem);
    } else {
      items.push(newItem);
    }
    const domContainer = getDomContainer(id, params.element), canvasEl = getCanvasFromContainer(domContainer);
    newItem.canvas.loadCanvas(canvasEl);
    await newItem.start();
    return newItem;
  }
  loadOptions(options, sourceOptions) {
    this.plugins.forEach((plugin2) => {
      var _a;
      return (_a = plugin2.loadOptions) == null ? void 0 : _a.call(plugin2, options, sourceOptions);
    });
  }
  loadParticlesOptions(container, options, ...sourceOptions) {
    const updaters = this.updaters.get(container);
    if (!updaters) {
      return;
    }
    updaters.forEach((updater) => {
      var _a;
      return (_a = updater.loadOptions) == null ? void 0 : _a.call(updater, options, ...sourceOptions);
    });
  }
  async refresh(refresh = true) {
    if (!refresh) {
      return;
    }
    await Promise.all(this.items.map((t2) => t2.refresh()));
  }
  removeEventListener(type, listener) {
    this._eventDispatcher.removeEventListener(type, listener);
  }
  setOnClickHandler(callback) {
    const { items } = this;
    if (!items.length) {
      throw new Error(`${errorPrefix} can only set click handlers after calling tsParticles.load()`);
    }
    items.forEach((item) => item.addClickHandler(callback));
  }
}
function init() {
  const engine = new Engine();
  engine.init();
  return engine;
}
class ExternalInteractorBase {
  constructor(container) {
    this.type = InteractorType.external;
    this.container = container;
  }
}
class ParticlesInteractorBase {
  constructor(container) {
    this.type = InteractorType.particles;
    this.container = container;
  }
}
var RotateDirection;
(function(RotateDirection2) {
  RotateDirection2["clockwise"] = "clockwise";
  RotateDirection2["counterClockwise"] = "counter-clockwise";
  RotateDirection2["random"] = "random";
})(RotateDirection || (RotateDirection = {}));
var GradientType;
(function(GradientType2) {
  GradientType2["linear"] = "linear";
  GradientType2["radial"] = "radial";
  GradientType2["random"] = "random";
})(GradientType || (GradientType = {}));
var EasingType;
(function(EasingType2) {
  EasingType2["easeInBack"] = "ease-in-back";
  EasingType2["easeInCirc"] = "ease-in-circ";
  EasingType2["easeInCubic"] = "ease-in-cubic";
  EasingType2["easeInLinear"] = "ease-in-linear";
  EasingType2["easeInQuad"] = "ease-in-quad";
  EasingType2["easeInQuart"] = "ease-in-quart";
  EasingType2["easeInQuint"] = "ease-in-quint";
  EasingType2["easeInExpo"] = "ease-in-expo";
  EasingType2["easeInSine"] = "ease-in-sine";
  EasingType2["easeOutBack"] = "ease-out-back";
  EasingType2["easeOutCirc"] = "ease-out-circ";
  EasingType2["easeOutCubic"] = "ease-out-cubic";
  EasingType2["easeOutLinear"] = "ease-out-linear";
  EasingType2["easeOutQuad"] = "ease-out-quad";
  EasingType2["easeOutQuart"] = "ease-out-quart";
  EasingType2["easeOutQuint"] = "ease-out-quint";
  EasingType2["easeOutExpo"] = "ease-out-expo";
  EasingType2["easeOutSine"] = "ease-out-sine";
  EasingType2["easeInOutBack"] = "ease-in-out-back";
  EasingType2["easeInOutCirc"] = "ease-in-out-circ";
  EasingType2["easeInOutCubic"] = "ease-in-out-cubic";
  EasingType2["easeInOutLinear"] = "ease-in-out-linear";
  EasingType2["easeInOutQuad"] = "ease-in-out-quad";
  EasingType2["easeInOutQuart"] = "ease-in-out-quart";
  EasingType2["easeInOutQuint"] = "ease-in-out-quint";
  EasingType2["easeInOutExpo"] = "ease-in-out-expo";
  EasingType2["easeInOutSine"] = "ease-in-out-sine";
})(EasingType || (EasingType = {}));
const tsParticles = init();
if (!isSsr()) {
  window.tsParticles = tsParticles;
}
const half$7 = 0.5, minVelocity$4 = 0, identity$4 = 1, moveSpeedFactor = 60, minSpinRadius = 0, spinFactor = 0.01;
function applyDistance(particle) {
  const initialPosition = particle.initialPosition, { dx, dy } = getDistances(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
  if (!hDistance && !vDistance) {
    return;
  }
  const hasHDistance = (hDistance && dxFixed >= hDistance) ?? false, hasVDistance = (vDistance && dyFixed >= vDistance) ?? false;
  if ((hasHDistance || hasVDistance) && !particle.misplaced) {
    particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
    if (hDistance) {
      particle.velocity.x = particle.velocity.y * half$7 - particle.velocity.x;
    }
    if (vDistance) {
      particle.velocity.y = particle.velocity.x * half$7 - particle.velocity.y;
    }
  } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
    particle.misplaced = false;
  } else if (particle.misplaced) {
    const pos = particle.position, vel = particle.velocity;
    if (hDistance && (pos.x < initialPosition.x && vel.x < minVelocity$4 || pos.x > initialPosition.x && vel.x > minVelocity$4)) {
      vel.x *= -getRandom();
    }
    if (vDistance && (pos.y < initialPosition.y && vel.y < minVelocity$4 || pos.y > initialPosition.y && vel.y > minVelocity$4)) {
      vel.y *= -getRandom();
    }
  }
}
function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta) {
  applyPath(particle, delta);
  const gravityOptions = particle.gravity, gravityFactor = (gravityOptions == null ? void 0 : gravityOptions.enable) && gravityOptions.inverse ? -identity$4 : identity$4;
  if (moveDrift && moveSpeed) {
    particle.velocity.x += moveDrift * delta.factor / (moveSpeedFactor * moveSpeed);
  }
  if ((gravityOptions == null ? void 0 : gravityOptions.enable) && moveSpeed) {
    particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (moveSpeedFactor * moveSpeed);
  }
  const decay = particle.moveDecay;
  particle.velocity.multTo(decay);
  const velocity = particle.velocity.mult(moveSpeed);
  if ((gravityOptions == null ? void 0 : gravityOptions.enable) && maxSpeed > minVelocity$4 && (!gravityOptions.inverse && velocity.y >= minVelocity$4 && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= minVelocity$4 && velocity.y <= -maxSpeed)) {
    velocity.y = gravityFactor * maxSpeed;
    if (moveSpeed) {
      particle.velocity.y = velocity.y / moveSpeed;
    }
  }
  const zIndexOptions = particle.options.zIndex, zVelocityFactor = (identity$4 - particle.zIndexFactor) ** zIndexOptions.velocityRate;
  velocity.multTo(zVelocityFactor);
  const { position } = particle;
  position.addTo(velocity);
  if (moveOptions.vibrate) {
    position.x += Math.sin(position.x * Math.cos(position.y));
    position.y += Math.cos(position.y * Math.sin(position.x));
  }
}
function spin(particle, moveSpeed) {
  const container = particle.container;
  if (!particle.spin) {
    return;
  }
  const updateFunc = {
    x: particle.spin.direction === RotateDirection.clockwise ? Math.cos : Math.sin,
    y: particle.spin.direction === RotateDirection.clockwise ? Math.sin : Math.cos
  };
  particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
  particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
  particle.spin.radius += particle.spin.acceleration;
  const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height), halfMaxSize = maxCanvasSize * half$7;
  if (particle.spin.radius > halfMaxSize) {
    particle.spin.radius = halfMaxSize;
    particle.spin.acceleration *= -identity$4;
  } else if (particle.spin.radius < minSpinRadius) {
    particle.spin.radius = minSpinRadius;
    particle.spin.acceleration *= -identity$4;
  }
  particle.spin.angle += moveSpeed * spinFactor * (identity$4 - particle.spin.radius / maxCanvasSize);
}
function applyPath(particle, delta) {
  var _a;
  const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
  if (!pathEnabled) {
    return;
  }
  if (particle.lastPathTime <= particle.pathDelay) {
    particle.lastPathTime += delta.value;
    return;
  }
  const path = (_a = particle.pathGenerator) == null ? void 0 : _a.generate(particle, delta);
  if (path) {
    particle.velocity.addTo(path);
  }
  if (pathOptions.clamp) {
    particle.velocity.x = clamp(particle.velocity.x, -identity$4, identity$4);
    particle.velocity.y = clamp(particle.velocity.y, -identity$4, identity$4);
  }
  particle.lastPathTime -= particle.pathDelay;
}
function getProximitySpeedFactor(particle) {
  return particle.slow.inRange ? particle.slow.factor : identity$4;
}
function initSpin(particle) {
  const container = particle.container, options = particle.options, spinOptions = options.move.spin;
  if (!spinOptions.enable) {
    return;
  }
  const spinPos = spinOptions.position ?? { x: 50, y: 50 }, spinFactor2 = 0.01, spinCenter = {
    x: spinPos.x * spinFactor2 * container.canvas.size.width,
    y: spinPos.y * spinFactor2 * container.canvas.size.height
  }, pos = particle.getPosition(), distance = getDistance(pos, spinCenter), spinAcceleration = getRangeValue(spinOptions.acceleration);
  particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
  const minVelocity2 = 0;
  particle.spin = {
    center: spinCenter,
    direction: particle.velocity.x >= minVelocity2 ? RotateDirection.clockwise : RotateDirection.counterClockwise,
    angle: particle.velocity.angle,
    radius: distance,
    acceleration: particle.retina.spinAcceleration
  };
}
const diffFactor = 2, defaultSizeFactor = 1, defaultDeltaFactor = 1;
class BaseMover {
  init(particle) {
    const options = particle.options, gravityOptions = options.move.gravity;
    particle.gravity = {
      enable: gravityOptions.enable,
      acceleration: getRangeValue(gravityOptions.acceleration),
      inverse: gravityOptions.inverse
    };
    initSpin(particle);
  }
  isEnabled(particle) {
    return !particle.destroyed && particle.options.move.enable;
  }
  move(particle, delta) {
    var _a, _b;
    const particleOptions = particle.options, moveOptions = particleOptions.move;
    if (!moveOptions.enable) {
      return;
    }
    const container = particle.container, pxRatio = container.retina.pixelRatio;
    (_a = particle.retina).moveSpeed ?? (_a.moveSpeed = getRangeValue(moveOptions.speed) * pxRatio);
    (_b = particle.retina).moveDrift ?? (_b.moveDrift = getRangeValue(particle.options.move.drift) * pxRatio);
    const slowFactor = getProximitySpeedFactor(particle), baseSpeed = particle.retina.moveSpeed * container.retina.reduceFactor, moveDrift = particle.retina.moveDrift, maxSize = getRangeMax(particleOptions.size.value) * pxRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : defaultSizeFactor, deltaFactor = delta.factor || defaultDeltaFactor, moveSpeed = baseSpeed * sizeFactor * slowFactor * deltaFactor / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container.retina.maxSpeed;
    if (moveOptions.spin.enable) {
      spin(particle, moveSpeed);
    } else {
      move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta);
    }
    applyDistance(particle);
  }
}
async function loadBaseMover(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addMover("base", () => {
    return Promise.resolve(new BaseMover());
  }, refresh);
}
const double$8 = 2, doublePI$1 = Math.PI * double$8, minAngle$1 = 0, origin$4 = { x: 0, y: 0 };
function drawCircle(data2) {
  const { context, particle, radius } = data2;
  if (!particle.circleRange) {
    particle.circleRange = { min: minAngle$1, max: doublePI$1 };
  }
  const circleRange = particle.circleRange;
  context.arc(origin$4.x, origin$4.y, radius, circleRange.min, circleRange.max, false);
}
const sides$4 = 12, maxAngle = 360, minAngle = 0;
class CircleDrawer {
  constructor() {
    this.validTypes = ["circle"];
  }
  draw(data2) {
    drawCircle(data2);
  }
  getSidesCount() {
    return sides$4;
  }
  particleInit(container, particle) {
    const shapeData = particle.shapeData, angle = (shapeData == null ? void 0 : shapeData.angle) ?? {
      max: maxAngle,
      min: minAngle
    };
    particle.circleRange = !isObject(angle) ? {
      min: minAngle,
      max: degToRad(angle)
    } : { min: degToRad(angle.min), max: degToRad(angle.max) };
  }
}
async function loadCircleShape(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addShape(new CircleDrawer(), refresh);
}
class ColorUpdater {
  constructor(container, engine) {
    this._container = container;
    this._engine = engine;
  }
  init(particle) {
    const hslColor = rangeColorToHsl(this._engine, particle.options.color, particle.id, particle.options.reduceDuplicates);
    if (hslColor) {
      particle.color = getHslAnimationFromHsl(hslColor, particle.options.color.animation, this._container.retina.reduceFactor);
    }
  }
  isEnabled(particle) {
    const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
    return !particle.destroyed && !particle.spawning && ((color == null ? void 0 : color.h.value) !== void 0 && hAnimation.enable || (color == null ? void 0 : color.s.value) !== void 0 && sAnimation.enable || (color == null ? void 0 : color.l.value) !== void 0 && lAnimation.enable);
  }
  update(particle, delta) {
    updateColor(particle.color, delta);
  }
}
async function loadColorUpdater(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addParticleUpdater("color", (container) => {
    return Promise.resolve(new ColorUpdater(container, engine));
  }, refresh);
}
var RgbIndexes$1;
(function(RgbIndexes2) {
  RgbIndexes2[RgbIndexes2["r"] = 1] = "r";
  RgbIndexes2[RgbIndexes2["g"] = 2] = "g";
  RgbIndexes2[RgbIndexes2["b"] = 3] = "b";
  RgbIndexes2[RgbIndexes2["a"] = 4] = "a";
})(RgbIndexes$1 || (RgbIndexes$1 = {}));
const shorthandHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, hexRadix = 16, defaultAlpha$1 = 1, alphaFactor = 255;
class HexColorManager {
  constructor() {
    this.key = "hex";
    this.stringPrefix = "#";
  }
  handleColor(color) {
    return this._parseString(color.value);
  }
  handleRangeColor(color) {
    return this._parseString(color.value);
  }
  parseString(input) {
    return this._parseString(input);
  }
  _parseString(hexColor) {
    if (typeof hexColor !== "string") {
      return;
    }
    if (!(hexColor == null ? void 0 : hexColor.startsWith(this.stringPrefix))) {
      return;
    }
    const hexFixed = hexColor.replace(shorthandHexRegex, (_2, r2, g2, b2, a2) => {
      return r2 + r2 + g2 + g2 + b2 + b2 + (a2 !== void 0 ? a2 + a2 : "");
    }), result = hexRegex.exec(hexFixed);
    return result ? {
      a: result[RgbIndexes$1.a] !== void 0 ? parseInt(result[RgbIndexes$1.a], hexRadix) / alphaFactor : defaultAlpha$1,
      b: parseInt(result[RgbIndexes$1.b], hexRadix),
      g: parseInt(result[RgbIndexes$1.g], hexRadix),
      r: parseInt(result[RgbIndexes$1.r], hexRadix)
    } : void 0;
  }
}
async function loadHexColorPlugin(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addColorManager(new HexColorManager(), refresh);
}
var HslIndexes;
(function(HslIndexes2) {
  HslIndexes2[HslIndexes2["h"] = 1] = "h";
  HslIndexes2[HslIndexes2["s"] = 2] = "s";
  HslIndexes2[HslIndexes2["l"] = 3] = "l";
  HslIndexes2[HslIndexes2["a"] = 5] = "a";
})(HslIndexes || (HslIndexes = {}));
class HslColorManager {
  constructor() {
    this.key = "hsl";
    this.stringPrefix = "hsl";
  }
  handleColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.s !== void 0 && hslColor.l !== void 0) {
      return hslToRgb(hslColor);
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.l !== void 0) {
      return hslToRgb({
        h: getRangeValue(hslColor.h),
        l: getRangeValue(hslColor.l),
        s: getRangeValue(hslColor.s)
      });
    }
  }
  parseString(input) {
    if (!input.startsWith("hsl")) {
      return;
    }
    const regex = /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i, result = regex.exec(input), minLength = 4, defaultAlpha2 = 1, radix = 10;
    return result ? hslaToRgba({
      a: result.length > minLength ? parseAlpha(result[HslIndexes.a]) : defaultAlpha2,
      h: parseInt(result[HslIndexes.h], radix),
      l: parseInt(result[HslIndexes.l], radix),
      s: parseInt(result[HslIndexes.s], radix)
    }) : void 0;
  }
}
async function loadHslColorPlugin(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addColorManager(new HslColorManager(), refresh);
}
class OpacityUpdater {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const opacityOptions = particle.options.opacity, pxRatio = 1;
    particle.opacity = initParticleNumericAnimationValue(opacityOptions, pxRatio);
    const opacityAnimation = opacityOptions.animation;
    if (opacityAnimation.enable) {
      particle.opacity.velocity = getRangeValue(opacityAnimation.speed) / percentDenominator * this.container.retina.reduceFactor;
      if (!opacityAnimation.sync) {
        particle.opacity.velocity *= getRandom();
      }
    }
  }
  isEnabled(particle) {
    const none = 0;
    return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? none) <= none || (particle.opacity.maxLoops ?? none) > none && (particle.opacity.loops ?? none) < (particle.opacity.maxLoops ?? none));
  }
  reset(particle) {
    if (particle.opacity) {
      particle.opacity.time = 0;
      particle.opacity.loops = 0;
    }
  }
  update(particle, delta) {
    if (!this.isEnabled(particle) || !particle.opacity) {
      return;
    }
    updateAnimation(particle, particle.opacity, true, particle.options.opacity.animation.destroy, delta);
  }
}
async function loadOpacityUpdater(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addParticleUpdater("opacity", (container) => {
    return Promise.resolve(new OpacityUpdater(container));
  }, refresh);
}
const minVelocity$3 = 0, boundsMin = 0;
function bounceHorizontal(data2) {
  if (data2.outMode !== OutMode.bounce && data2.outMode !== OutMode.split || data2.direction !== OutModeDirection.left && data2.direction !== OutModeDirection.right) {
    return;
  }
  if (data2.bounds.right < boundsMin && data2.direction === OutModeDirection.left) {
    data2.particle.position.x = data2.size + data2.offset.x;
  } else if (data2.bounds.left > data2.canvasSize.width && data2.direction === OutModeDirection.right) {
    data2.particle.position.x = data2.canvasSize.width - data2.size - data2.offset.x;
  }
  const velocity = data2.particle.velocity.x;
  let bounced = false;
  if (data2.direction === OutModeDirection.right && data2.bounds.right >= data2.canvasSize.width && velocity > minVelocity$3 || data2.direction === OutModeDirection.left && data2.bounds.left <= boundsMin && velocity < minVelocity$3) {
    const newVelocity = getRangeValue(data2.particle.options.bounce.horizontal.value);
    data2.particle.velocity.x *= -newVelocity;
    bounced = true;
  }
  if (!bounced) {
    return;
  }
  const minPos = data2.offset.x + data2.size;
  if (data2.bounds.right >= data2.canvasSize.width && data2.direction === OutModeDirection.right) {
    data2.particle.position.x = data2.canvasSize.width - minPos;
  } else if (data2.bounds.left <= boundsMin && data2.direction === OutModeDirection.left) {
    data2.particle.position.x = minPos;
  }
  if (data2.outMode === OutMode.split) {
    data2.particle.destroy();
  }
}
function bounceVertical(data2) {
  if (data2.outMode !== OutMode.bounce && data2.outMode !== OutMode.split || data2.direction !== OutModeDirection.bottom && data2.direction !== OutModeDirection.top) {
    return;
  }
  if (data2.bounds.bottom < boundsMin && data2.direction === OutModeDirection.top) {
    data2.particle.position.y = data2.size + data2.offset.y;
  } else if (data2.bounds.top > data2.canvasSize.height && data2.direction === OutModeDirection.bottom) {
    data2.particle.position.y = data2.canvasSize.height - data2.size - data2.offset.y;
  }
  const velocity = data2.particle.velocity.y;
  let bounced = false;
  if (data2.direction === OutModeDirection.bottom && data2.bounds.bottom >= data2.canvasSize.height && velocity > minVelocity$3 || data2.direction === OutModeDirection.top && data2.bounds.top <= boundsMin && velocity < minVelocity$3) {
    const newVelocity = getRangeValue(data2.particle.options.bounce.vertical.value);
    data2.particle.velocity.y *= -newVelocity;
    bounced = true;
  }
  if (!bounced) {
    return;
  }
  const minPos = data2.offset.y + data2.size;
  if (data2.bounds.bottom >= data2.canvasSize.height && data2.direction === OutModeDirection.bottom) {
    data2.particle.position.y = data2.canvasSize.height - minPos;
  } else if (data2.bounds.top <= boundsMin && data2.direction === OutModeDirection.top) {
    data2.particle.position.y = minPos;
  }
  if (data2.outMode === OutMode.split) {
    data2.particle.destroy();
  }
}
class BounceOutMode {
  constructor(container) {
    this.container = container;
    this.modes = [
      OutMode.bounce,
      OutMode.split
    ];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    let handled = false;
    for (const plugin2 of container.plugins.values()) {
      if (plugin2.particleBounce !== void 0) {
        handled = plugin2.particleBounce(particle, delta, direction);
      }
      if (handled) {
        break;
      }
    }
    if (handled) {
      return;
    }
    const pos = particle.getPosition(), offset = particle.offset, size2 = particle.getRadius(), bounds = calculateBounds(pos, size2), canvasSize = container.canvas.size;
    bounceHorizontal({ particle, outMode, direction, bounds, canvasSize, offset, size: size2 });
    bounceVertical({ particle, outMode, direction, bounds, canvasSize, offset, size: size2 });
  }
}
const minVelocity$2 = 0;
class DestroyOutMode {
  constructor(container) {
    this.container = container;
    this.modes = [OutMode.destroy];
  }
  update(particle, direction, _delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    switch (particle.outType) {
      case ParticleOutType.normal:
      case ParticleOutType.outside:
        if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
          return;
        }
        break;
      case ParticleOutType.inside: {
        const { dx, dy } = getDistances(particle.position, particle.moveCenter), { x: vx, y: vy } = particle.velocity;
        if (vx < minVelocity$2 && dx > particle.moveCenter.radius || vy < minVelocity$2 && dy > particle.moveCenter.radius || vx >= minVelocity$2 && dx < -particle.moveCenter.radius || vy >= minVelocity$2 && dy < -particle.moveCenter.radius) {
          return;
        }
        break;
      }
    }
    container.particles.remove(particle, particle.group, true);
  }
}
const minVelocity$1 = 0;
class NoneOutMode {
  constructor(container) {
    this.container = container;
    this.modes = [OutMode.none];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    if ((particle.options.move.distance.horizontal && (direction === OutModeDirection.left || direction === OutModeDirection.right)) ?? (particle.options.move.distance.vertical && (direction === OutModeDirection.top || direction === OutModeDirection.bottom))) {
      return;
    }
    const gravityOptions = particle.options.move.gravity, container = this.container, canvasSize = container.canvas.size, pRadius = particle.getRadius();
    if (!gravityOptions.enable) {
      if (particle.velocity.y > minVelocity$1 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < minVelocity$1 && particle.position.y >= -pRadius || particle.velocity.x > minVelocity$1 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < minVelocity$1 && particle.position.x >= -pRadius) {
        return;
      }
      if (!isPointInside(particle.position, container.canvas.size, Vector.origin, pRadius, direction)) {
        container.particles.remove(particle);
      }
    } else {
      const position = particle.position;
      if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === OutModeDirection.top) {
        container.particles.remove(particle);
      }
    }
  }
}
const minVelocity = 0, minDistance$6 = 0;
class OutOutMode {
  constructor(container) {
    this.container = container;
    this.modes = [OutMode.out];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    switch (particle.outType) {
      case ParticleOutType.inside: {
        const { x: vx, y: vy } = particle.velocity;
        const circVec = Vector.origin;
        circVec.length = particle.moveCenter.radius;
        circVec.angle = particle.velocity.angle + Math.PI;
        circVec.addTo(Vector.create(particle.moveCenter));
        const { dx, dy } = getDistances(particle.position, circVec);
        if (vx <= minVelocity && dx >= minDistance$6 || vy <= minVelocity && dy >= minDistance$6 || vx >= minVelocity && dx <= minDistance$6 || vy >= minVelocity && dy <= minDistance$6) {
          return;
        }
        particle.position.x = Math.floor(randomInRange({
          min: 0,
          max: container.canvas.size.width
        }));
        particle.position.y = Math.floor(randomInRange({
          min: 0,
          max: container.canvas.size.height
        }));
        const { dx: newDx, dy: newDy } = getDistances(particle.position, particle.moveCenter);
        particle.direction = Math.atan2(-newDy, -newDx);
        particle.velocity.angle = particle.direction;
        break;
      }
      default: {
        if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
          return;
        }
        switch (particle.outType) {
          case ParticleOutType.outside: {
            particle.position.x = Math.floor(randomInRange({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.x;
            particle.position.y = Math.floor(randomInRange({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.y;
            const { dx, dy } = getDistances(particle.position, particle.moveCenter);
            if (particle.moveCenter.radius) {
              particle.direction = Math.atan2(dy, dx);
              particle.velocity.angle = particle.direction;
            }
            break;
          }
          case ParticleOutType.normal: {
            const warp = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
              bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
              left: -particle.getRadius() - particle.offset.x,
              right: canvasSize.width + particle.getRadius() + particle.offset.x,
              top: -particle.getRadius() - particle.offset.y
            }, sizeValue = particle.getRadius(), nextBounds = calculateBounds(particle.position, sizeValue);
            if (direction === OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
              particle.position.x = newPos.left;
              particle.initialPosition.x = particle.position.x;
              if (!warp) {
                particle.position.y = getRandom() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            } else if (direction === OutModeDirection.left && nextBounds.right < -particle.offset.x) {
              particle.position.x = newPos.right;
              particle.initialPosition.x = particle.position.x;
              if (!warp) {
                particle.position.y = getRandom() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            }
            if (direction === OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
              if (!warp) {
                particle.position.x = getRandom() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.top;
              particle.initialPosition.y = particle.position.y;
            } else if (direction === OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
              if (!warp) {
                particle.position.x = getRandom() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.bottom;
              particle.initialPosition.y = particle.position.y;
            }
            break;
          }
        }
        break;
      }
    }
  }
}
const checkOutMode = (outModes, outMode) => {
  return outModes.default === outMode || outModes.bottom === outMode || outModes.left === outMode || outModes.right === outMode || outModes.top === outMode;
};
class OutOfCanvasUpdater {
  constructor(container) {
    this._addUpdaterIfMissing = (particle, outMode, getUpdater) => {
      const outModes = particle.options.move.outModes;
      if (!this.updaters.has(outMode) && checkOutMode(outModes, outMode)) {
        this.updaters.set(outMode, getUpdater(this.container));
      }
    };
    this._updateOutMode = (particle, delta, outMode, direction) => {
      for (const updater of this.updaters.values()) {
        updater.update(particle, direction, delta, outMode);
      }
    };
    this.container = container;
    this.updaters = /* @__PURE__ */ new Map();
  }
  init(particle) {
    this._addUpdaterIfMissing(particle, OutMode.bounce, (container) => new BounceOutMode(container));
    this._addUpdaterIfMissing(particle, OutMode.out, (container) => new OutOutMode(container));
    this._addUpdaterIfMissing(particle, OutMode.destroy, (container) => new DestroyOutMode(container));
    this._addUpdaterIfMissing(particle, OutMode.none, (container) => new NoneOutMode(container));
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning;
  }
  update(particle, delta) {
    const outModes = particle.options.move.outModes;
    this._updateOutMode(particle, delta, outModes.bottom ?? outModes.default, OutModeDirection.bottom);
    this._updateOutMode(particle, delta, outModes.left ?? outModes.default, OutModeDirection.left);
    this._updateOutMode(particle, delta, outModes.right ?? outModes.default, OutModeDirection.right);
    this._updateOutMode(particle, delta, outModes.top ?? outModes.default, OutModeDirection.top);
  }
}
async function loadOutModesUpdater(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addParticleUpdater("outModes", (container) => {
    return Promise.resolve(new OutOfCanvasUpdater(container));
  }, refresh);
}
var RgbIndexes;
(function(RgbIndexes2) {
  RgbIndexes2[RgbIndexes2["r"] = 1] = "r";
  RgbIndexes2[RgbIndexes2["g"] = 2] = "g";
  RgbIndexes2[RgbIndexes2["b"] = 3] = "b";
  RgbIndexes2[RgbIndexes2["a"] = 5] = "a";
})(RgbIndexes || (RgbIndexes = {}));
class RgbColorManager {
  constructor() {
    this.key = "rgb";
    this.stringPrefix = "rgb";
  }
  handleColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return rgbColor;
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return {
        r: getRangeValue(rgbColor.r),
        g: getRangeValue(rgbColor.g),
        b: getRangeValue(rgbColor.b)
      };
    }
  }
  parseString(input) {
    if (!input.startsWith(this.stringPrefix)) {
      return;
    }
    const regex = /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i, result = regex.exec(input), radix = 10, minLength = 4, defaultAlpha2 = 1;
    return result ? {
      a: result.length > minLength ? parseAlpha(result[RgbIndexes.a]) : defaultAlpha2,
      b: parseInt(result[RgbIndexes.b], radix),
      g: parseInt(result[RgbIndexes.g], radix),
      r: parseInt(result[RgbIndexes.r], radix)
    } : void 0;
  }
}
async function loadRgbColorPlugin(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addColorManager(new RgbColorManager(), refresh);
}
const minLoops = 0;
class SizeUpdater {
  init(particle) {
    const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;
    if (sizeAnimation.enable) {
      particle.size.velocity = (particle.retina.sizeAnimationSpeed ?? container.retina.sizeAnimationSpeed) / percentDenominator * container.retina.reduceFactor;
      if (!sizeAnimation.sync) {
        particle.size.velocity *= getRandom();
      }
    }
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? minLoops) <= minLoops || (particle.size.maxLoops ?? minLoops) > minLoops && (particle.size.loops ?? minLoops) < (particle.size.maxLoops ?? minLoops));
  }
  reset(particle) {
    particle.size.loops = minLoops;
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateAnimation(particle, particle.size, true, particle.options.size.animation.destroy, delta);
  }
}
async function loadSizeUpdater(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addParticleUpdater("size", () => {
    return Promise.resolve(new SizeUpdater());
  }, refresh);
}
async function loadBasic(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await loadHexColorPlugin(engine, false);
  await loadHslColorPlugin(engine, false);
  await loadRgbColorPlugin(engine, false);
  await loadBaseMover(engine, false);
  await loadCircleShape(engine, false);
  await loadColorUpdater(engine, false);
  await loadOpacityUpdater(engine, false);
  await loadOutModesUpdater(engine, false);
  await loadSizeUpdater(engine, false);
  await engine.refresh(refresh);
}
async function loadEasingQuadPlugin(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addEasing(EasingType.easeInQuad, (value) => value ** 2, false);
  await engine.addEasing(EasingType.easeOutQuad, (value) => 1 - (1 - value) ** 2, false);
  await engine.addEasing(EasingType.easeInOutQuad, (value) => value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2, false);
  await engine.refresh(refresh);
}
function drawEmoji(data2, image) {
  const { context, opacity } = data2, half2 = 0.5, previousAlpha = context.globalAlpha;
  if (!image) {
    return;
  }
  const diameter = image.width, radius = diameter * half2;
  context.globalAlpha = opacity;
  context.drawImage(image, -radius, -radius, diameter, diameter);
  context.globalAlpha = previousAlpha;
}
const defaultFont = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"', noPadding = 0;
class EmojiDrawer {
  constructor() {
    this.validTypes = ["emoji"];
    this._emojiShapeDict = /* @__PURE__ */ new Map();
  }
  destroy() {
    for (const [key, data2] of this._emojiShapeDict) {
      if (data2 instanceof ImageBitmap) {
        data2 == null ? void 0 : data2.close();
      }
      this._emojiShapeDict.delete(key);
    }
  }
  draw(data2) {
    const key = data2.particle.emojiDataKey;
    if (!key) {
      return;
    }
    const image = this._emojiShapeDict.get(key);
    if (!image) {
      return;
    }
    drawEmoji(data2, image);
  }
  async init(container) {
    const options = container.actualOptions, { validTypes } = this;
    if (!validTypes.find((t2) => isInArray(t2, options.particles.shape.type))) {
      return;
    }
    const promises = [loadFont(defaultFont)], shapeOptions = validTypes.map((t2) => options.particles.shape.options[t2]).find((t2) => !!t2);
    if (shapeOptions) {
      executeOnSingleOrMultiple(shapeOptions, (shape) => {
        if (shape.font) {
          promises.push(loadFont(shape.font));
        }
      });
    }
    await Promise.all(promises);
  }
  particleDestroy(particle) {
    particle.emojiDataKey = void 0;
  }
  particleInit(_container, particle) {
    const double2 = 2, shapeData = particle.shapeData;
    if (!(shapeData == null ? void 0 : shapeData.value)) {
      return;
    }
    const emoji = itemFromSingleOrMultiple(shapeData.value, particle.randomIndexData);
    if (!emoji) {
      return;
    }
    const emojiOptions = typeof emoji === "string" ? {
      font: shapeData.font ?? defaultFont,
      padding: shapeData.padding ?? noPadding,
      value: emoji
    } : {
      font: defaultFont,
      padding: noPadding,
      ...shapeData,
      ...emoji
    }, font = emojiOptions.font, value = emojiOptions.value;
    const key = `${value}_${font}`;
    if (this._emojiShapeDict.has(key)) {
      particle.emojiDataKey = key;
      return;
    }
    const padding = emojiOptions.padding * double2, maxSize = getRangeMax(particle.size.value), fullSize = maxSize + padding, canvasSize = fullSize * double2;
    let image;
    if (typeof OffscreenCanvas !== "undefined") {
      const canvas = new OffscreenCanvas(canvasSize, canvasSize), context = canvas.getContext("2d");
      if (!context) {
        return;
      }
      context.font = `400 ${maxSize * double2}px ${font}`;
      context.textBaseline = "middle";
      context.textAlign = "center";
      context.fillText(value, fullSize, fullSize);
      image = canvas.transferToImageBitmap();
    } else {
      const canvas = document.createElement("canvas");
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }
      context.font = `400 ${maxSize * double2}px ${font}`;
      context.textBaseline = "middle";
      context.textAlign = "center";
      context.fillText(value, fullSize, fullSize);
      image = canvas;
    }
    this._emojiShapeDict.set(key, image);
    particle.emojiDataKey = key;
  }
}
async function loadEmojiShape(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addShape(new EmojiDrawer(), refresh);
}
const minFactor = 1, identity$3 = 1, minRadius$3 = 0;
function processAttract(engine, container, position, attractRadius, area, queryCb) {
  const attractOptions = container.actualOptions.interactivity.modes.attract;
  if (!attractOptions) {
    return;
  }
  const query = container.particles.quadTree.query(area, queryCb);
  for (const particle of query) {
    const { dx, dy, distance } = getDistances(particle.position, position), velocity = attractOptions.speed * attractOptions.factor, attractFactor2 = clamp(engine.getEasing(attractOptions.easing)(identity$3 - distance / attractRadius) * velocity, minFactor, attractOptions.maxSpeed), normVec = Vector.create(!distance ? velocity : dx / distance * attractFactor2, !distance ? velocity : dy / distance * attractFactor2);
    particle.position.subFrom(normVec);
  }
}
function clickAttract(engine, container, enabledCb) {
  if (!container.attract) {
    container.attract = { particles: [] };
  }
  const { attract } = container;
  if (!attract.finish) {
    if (!attract.count) {
      attract.count = 0;
    }
    attract.count++;
    if (attract.count === container.particles.count) {
      attract.finish = true;
    }
  }
  if (attract.clicking) {
    const mousePos = container.interactivity.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;
    if (!attractRadius || attractRadius < minRadius$3 || !mousePos) {
      return;
    }
    processAttract(engine, container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p2) => enabledCb(p2));
  } else if (attract.clicking === false) {
    attract.particles = [];
  }
}
function hoverAttract(engine, container, enabledCb) {
  const mousePos = container.interactivity.mouse.position, attractRadius = container.retina.attractModeDistance;
  if (!attractRadius || attractRadius < minRadius$3 || !mousePos) {
    return;
  }
  processAttract(engine, container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p2) => enabledCb(p2));
}
class Attract {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.easing = EasingType.easeOutQuad;
    this.factor = 1;
    this.maxSpeed = 50;
    this.speed = 1;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.distance !== void 0) {
      this.distance = data2.distance;
    }
    if (data2.duration !== void 0) {
      this.duration = data2.duration;
    }
    if (data2.easing !== void 0) {
      this.easing = data2.easing;
    }
    if (data2.factor !== void 0) {
      this.factor = data2.factor;
    }
    if (data2.maxSpeed !== void 0) {
      this.maxSpeed = data2.maxSpeed;
    }
    if (data2.speed !== void 0) {
      this.speed = data2.speed;
    }
  }
}
const attractMode = "attract";
let Attractor$1 = class Attractor2 extends ExternalInteractorBase {
  constructor(engine, container) {
    super(container);
    this._engine = engine;
    if (!container.attract) {
      container.attract = { particles: [] };
    }
    this.handleClickMode = (mode) => {
      const options = this.container.actualOptions, attract = options.interactivity.modes.attract;
      if (!attract || mode !== attractMode) {
        return;
      }
      if (!container.attract) {
        container.attract = { particles: [] };
      }
      container.attract.clicking = true;
      container.attract.count = 0;
      for (const particle of container.attract.particles) {
        if (!this.isEnabled(particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      container.attract.particles = [];
      container.attract.finish = false;
      setTimeout(() => {
        if (container.destroyed) {
          return;
        }
        if (!container.attract) {
          container.attract = { particles: [] };
        }
        container.attract.clicking = false;
      }, attract.duration * millisecondsToSeconds);
    };
  }
  clear() {
  }
  init() {
    const container = this.container, attract = container.actualOptions.interactivity.modes.attract;
    if (!attract) {
      return;
    }
    container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
  }
  interact() {
    const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, { enable: hoverEnabled, mode: hoverMode } = events.onHover, { enable: clickEnabled, mode: clickMode } = events.onClick;
    if (mouseMoveStatus && hoverEnabled && isInArray(attractMode, hoverMode)) {
      hoverAttract(this._engine, this.container, (p2) => this.isEnabled(p2));
    } else if (clickEnabled && isInArray(attractMode, clickMode)) {
      clickAttract(this._engine, this.container, (p2) => this.isEnabled(p2));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events;
    if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {
      return false;
    }
    const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
    return isInArray(attractMode, hoverMode) || isInArray(attractMode, clickMode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.attract) {
      options.attract = new Attract();
    }
    for (const source of sources) {
      options.attract.load(source == null ? void 0 : source.attract);
    }
  }
  reset() {
  }
};
async function loadExternalAttractInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalAttract", (container) => {
    return Promise.resolve(new Attractor$1(engine, container));
  }, refresh);
}
const squareExp = 2, half$6 = 0.5, halfPI = Math.PI * half$6, double$7 = 2, toleranceFactor = 10, minRadius$2 = 0;
function processBounce(container, position, radius, area, enabledCb) {
  const query = container.particles.quadTree.query(area, enabledCb);
  for (const particle of query) {
    if (area instanceof Circle) {
      circleBounce(circleBounceDataFromParticle(particle), {
        position,
        radius,
        mass: radius ** squareExp * halfPI,
        velocity: Vector.origin,
        factor: Vector.origin
      });
    } else if (area instanceof Rectangle) {
      rectBounce(particle, calculateBounds(position, radius));
    }
  }
}
function singleSelectorBounce(container, selector, div, bounceCb) {
  const query = document.querySelectorAll(selector);
  if (!query.length) {
    return;
  }
  query.forEach((item) => {
    const elem = item, pxRatio = container.retina.pixelRatio, pos = {
      x: (elem.offsetLeft + elem.offsetWidth * half$6) * pxRatio,
      y: (elem.offsetTop + elem.offsetHeight * half$6) * pxRatio
    }, radius = elem.offsetWidth * half$6 * pxRatio, tolerance = toleranceFactor * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * double$7, elem.offsetHeight * pxRatio + tolerance * double$7);
    bounceCb(pos, radius, area);
  });
}
function divBounce(container, divs, bounceMode2, enabledCb) {
  divModeExecute(bounceMode2, divs, (selector, div) => singleSelectorBounce(container, selector, div, (pos, radius, area) => processBounce(container, pos, radius, area, enabledCb)));
}
function mouseBounce(container, enabledCb) {
  const pxRatio = container.retina.pixelRatio, tolerance = toleranceFactor * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;
  if (!radius || radius < minRadius$2 || !mousePos) {
    return;
  }
  processBounce(container, mousePos, radius, new Circle(mousePos.x, mousePos.y, radius + tolerance), enabledCb);
}
class Bounce {
  constructor() {
    this.distance = 200;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.distance !== void 0) {
      this.distance = data2.distance;
    }
  }
}
const bounceMode = "bounce";
class Bouncer extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
    const container = this.container, bounce2 = container.actualOptions.interactivity.modes.bounce;
    if (!bounce2) {
      return;
    }
    container.retina.bounceModeDistance = bounce2.distance * container.retina.pixelRatio;
  }
  interact() {
    const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray(bounceMode, hoverMode)) {
      mouseBounce(this.container, (p2) => this.isEnabled(p2));
    } else {
      divBounce(this.container, divs, bounceMode, (p2) => this.isEnabled(p2));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events, divs = events.onDiv;
    return !!mouse.position && events.onHover.enable && isInArray(bounceMode, events.onHover.mode) || isDivModeEnabled(bounceMode, divs);
  }
  loadModeOptions(options, ...sources) {
    if (!options.bounce) {
      options.bounce = new Bounce();
    }
    for (const source of sources) {
      options.bounce.load(source == null ? void 0 : source.bounce);
    }
  }
  reset() {
  }
}
async function loadExternalBounceInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalBounce", (container) => {
    return Promise.resolve(new Bouncer(container));
  }, refresh);
}
class BubbleBase {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.mix = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.distance !== void 0) {
      this.distance = data2.distance;
    }
    if (data2.duration !== void 0) {
      this.duration = data2.duration;
    }
    if (data2.mix !== void 0) {
      this.mix = data2.mix;
    }
    if (data2.opacity !== void 0) {
      this.opacity = data2.opacity;
    }
    if (data2.color !== void 0) {
      const sourceColor = isArray(this.color) ? void 0 : this.color;
      this.color = executeOnSingleOrMultiple(data2.color, (color) => {
        return OptionsColor.create(sourceColor, color);
      });
    }
    if (data2.size !== void 0) {
      this.size = data2.size;
    }
  }
}
class BubbleDiv extends BubbleBase {
  constructor() {
    super();
    this.selectors = [];
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    if (data2.selectors !== void 0) {
      this.selectors = data2.selectors;
    }
  }
}
class Bubble extends BubbleBase {
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    this.divs = executeOnSingleOrMultiple(data2.divs, (div) => {
      const tmp = new BubbleDiv();
      tmp.load(div);
      return tmp;
    });
  }
}
var ProcessBubbleType;
(function(ProcessBubbleType2) {
  ProcessBubbleType2["color"] = "color";
  ProcessBubbleType2["opacity"] = "opacity";
  ProcessBubbleType2["size"] = "size";
})(ProcessBubbleType || (ProcessBubbleType = {}));
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
  if (modeValue >= optionsValue) {
    const value = particleValue + (modeValue - optionsValue) * ratio;
    return clamp(value, particleValue, modeValue);
  } else if (modeValue < optionsValue) {
    const value = particleValue - (optionsValue - modeValue) * ratio;
    return clamp(value, modeValue, particleValue);
  }
}
const bubbleMode = "bubble", minDistance$5 = 0, defaultClickTime = 0, double$6 = 2, defaultOpacity$2 = 1, ratioOffset = 1, defaultBubbleValue = 0, minRatio = 0, half$5 = 0.5, defaultRatio$1 = 1;
class Bubbler extends ExternalInteractorBase {
  constructor(container, engine) {
    super(container);
    this._clickBubble = () => {
      var _a;
      const container2 = this.container, options = container2.actualOptions, mouseClickPos = container2.interactivity.mouse.clickPosition, bubbleOptions = options.interactivity.modes.bubble;
      if (!bubbleOptions || !mouseClickPos) {
        return;
      }
      if (!container2.bubble) {
        container2.bubble = {};
      }
      const distance = container2.retina.bubbleModeDistance;
      if (!distance || distance < minDistance$5) {
        return;
      }
      const query = container2.particles.quadTree.queryCircle(mouseClickPos, distance, (p2) => this.isEnabled(p2)), { bubble } = container2;
      for (const particle of query) {
        if (!bubble.clicking) {
          continue;
        }
        particle.bubble.inRange = !bubble.durationEnd;
        const pos = particle.getPosition(), distMouse = getDistance(pos, mouseClickPos), timeSpent = ((/* @__PURE__ */ new Date()).getTime() - (container2.interactivity.mouse.clickTime ?? defaultClickTime)) / millisecondsToSeconds;
        if (timeSpent > bubbleOptions.duration) {
          bubble.durationEnd = true;
        }
        if (timeSpent > bubbleOptions.duration * double$6) {
          bubble.clicking = false;
          bubble.durationEnd = false;
        }
        const sizeData = {
          bubbleObj: {
            optValue: container2.retina.bubbleModeSize,
            value: particle.bubble.radius
          },
          particlesObj: {
            optValue: getRangeMax(particle.options.size.value) * container2.retina.pixelRatio,
            value: particle.size.value
          },
          type: ProcessBubbleType.size
        };
        this._process(particle, distMouse, timeSpent, sizeData);
        const opacityData = {
          bubbleObj: {
            optValue: bubbleOptions.opacity,
            value: particle.bubble.opacity
          },
          particlesObj: {
            optValue: getRangeMax(particle.options.opacity.value),
            value: ((_a = particle.opacity) == null ? void 0 : _a.value) ?? defaultOpacity$2
          },
          type: ProcessBubbleType.opacity
        };
        this._process(particle, distMouse, timeSpent, opacityData);
        if (!bubble.durationEnd && distMouse <= distance) {
          this._hoverBubbleColor(particle, distMouse);
        } else {
          delete particle.bubble.color;
        }
      }
    };
    this._hoverBubble = () => {
      const container2 = this.container, mousePos = container2.interactivity.mouse.position, distance = container2.retina.bubbleModeDistance;
      if (!distance || distance < minDistance$5 || !mousePos) {
        return;
      }
      const query = container2.particles.quadTree.queryCircle(mousePos, distance, (p2) => this.isEnabled(p2));
      for (const particle of query) {
        particle.bubble.inRange = true;
        const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos), ratio = ratioOffset - pointDistance / distance;
        if (pointDistance <= distance) {
          if (ratio >= minRatio && container2.interactivity.status === mouseMoveEvent) {
            this._hoverBubbleSize(particle, ratio);
            this._hoverBubbleOpacity(particle, ratio);
            this._hoverBubbleColor(particle, ratio);
          }
        } else {
          this.reset(particle);
        }
        if (container2.interactivity.status === mouseLeaveEvent) {
          this.reset(particle);
        }
      }
    };
    this._hoverBubbleColor = (particle, ratio, divBubble) => {
      const options = this.container.actualOptions, bubbleOptions = divBubble ?? options.interactivity.modes.bubble;
      if (!bubbleOptions) {
        return;
      }
      if (!particle.bubble.finalColor) {
        const modeColor = bubbleOptions.color;
        if (!modeColor) {
          return;
        }
        const bubbleColor = itemFromSingleOrMultiple(modeColor);
        particle.bubble.finalColor = rangeColorToHsl(this._engine, bubbleColor);
      }
      if (!particle.bubble.finalColor) {
        return;
      }
      if (bubbleOptions.mix) {
        particle.bubble.color = void 0;
        const pColor = particle.getFillColor();
        particle.bubble.color = pColor ? rgbToHsl(colorMix(pColor, particle.bubble.finalColor, ratioOffset - ratio, ratio)) : particle.bubble.finalColor;
      } else {
        particle.bubble.color = particle.bubble.finalColor;
      }
    };
    this._hoverBubbleOpacity = (particle, ratio, divBubble) => {
      var _a, _b;
      const container2 = this.container, options = container2.actualOptions, modeOpacity = (divBubble == null ? void 0 : divBubble.opacity) ?? ((_a = options.interactivity.modes.bubble) == null ? void 0 : _a.opacity);
      if (!modeOpacity) {
        return;
      }
      const optOpacity = particle.options.opacity.value, pOpacity = ((_b = particle.opacity) == null ? void 0 : _b.value) ?? defaultOpacity$2, opacity = calculateBubbleValue(pOpacity, modeOpacity, getRangeMax(optOpacity), ratio);
      if (opacity !== void 0) {
        particle.bubble.opacity = opacity;
      }
    };
    this._hoverBubbleSize = (particle, ratio, divBubble) => {
      const container2 = this.container, modeSize = (divBubble == null ? void 0 : divBubble.size) ? divBubble.size * container2.retina.pixelRatio : container2.retina.bubbleModeSize;
      if (modeSize === void 0) {
        return;
      }
      const optSize = getRangeMax(particle.options.size.value) * container2.retina.pixelRatio, pSize = particle.size.value, size2 = calculateBubbleValue(pSize, modeSize, optSize, ratio);
      if (size2 !== void 0) {
        particle.bubble.radius = size2;
      }
    };
    this._process = (particle, distMouse, timeSpent, data2) => {
      const container2 = this.container, bubbleParam = data2.bubbleObj.optValue, options = container2.actualOptions, bubbleOptions = options.interactivity.modes.bubble;
      if (!bubbleOptions || bubbleParam === void 0) {
        return;
      }
      const bubbleDuration = bubbleOptions.duration, bubbleDistance = container2.retina.bubbleModeDistance, particlesParam = data2.particlesObj.optValue, pObjBubble = data2.bubbleObj.value, pObj = data2.particlesObj.value ?? defaultBubbleValue, type = data2.type;
      if (!bubbleDistance || bubbleDistance < minDistance$5 || bubbleParam === particlesParam) {
        return;
      }
      if (!container2.bubble) {
        container2.bubble = {};
      }
      if (container2.bubble.durationEnd) {
        if (pObjBubble) {
          if (type === ProcessBubbleType.size) {
            delete particle.bubble.radius;
          }
          if (type === ProcessBubbleType.opacity) {
            delete particle.bubble.opacity;
          }
        }
      } else {
        if (distMouse <= bubbleDistance) {
          const obj = pObjBubble ?? pObj;
          if (obj !== bubbleParam) {
            const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
            if (type === ProcessBubbleType.size) {
              particle.bubble.radius = value;
            }
            if (type === ProcessBubbleType.opacity) {
              particle.bubble.opacity = value;
            }
          }
        } else {
          if (type === ProcessBubbleType.size) {
            delete particle.bubble.radius;
          }
          if (type === ProcessBubbleType.opacity) {
            delete particle.bubble.opacity;
          }
        }
      }
    };
    this._singleSelectorHover = (delta, selector, div) => {
      const container2 = this.container, selectors = document.querySelectorAll(selector), bubble = container2.actualOptions.interactivity.modes.bubble;
      if (!bubble || !selectors.length) {
        return;
      }
      selectors.forEach((item) => {
        const elem = item, pxRatio = container2.retina.pixelRatio, pos = {
          x: (elem.offsetLeft + elem.offsetWidth * half$5) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight * half$5) * pxRatio
        }, repulseRadius = elem.offsetWidth * half$5 * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container2.particles.quadTree.query(area, (p2) => this.isEnabled(p2));
        for (const particle of query) {
          if (!area.contains(particle.getPosition())) {
            continue;
          }
          particle.bubble.inRange = true;
          const divs = bubble.divs, divBubble = divMode(divs, elem);
          if (!particle.bubble.div || particle.bubble.div !== elem) {
            this.clear(particle, delta, true);
            particle.bubble.div = elem;
          }
          this._hoverBubbleSize(particle, defaultRatio$1, divBubble);
          this._hoverBubbleOpacity(particle, defaultRatio$1, divBubble);
          this._hoverBubbleColor(particle, defaultRatio$1, divBubble);
        }
      });
    };
    this._engine = engine;
    if (!container.bubble) {
      container.bubble = {};
    }
    this.handleClickMode = (mode) => {
      if (mode !== bubbleMode) {
        return;
      }
      if (!container.bubble) {
        container.bubble = {};
      }
      container.bubble.clicking = true;
    };
  }
  clear(particle, delta, force) {
    if (particle.bubble.inRange && !force) {
      return;
    }
    delete particle.bubble.div;
    delete particle.bubble.opacity;
    delete particle.bubble.radius;
    delete particle.bubble.color;
  }
  init() {
    const container = this.container, bubble = container.actualOptions.interactivity.modes.bubble;
    if (!bubble) {
      return;
    }
    container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
    if (bubble.size !== void 0) {
      container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
    }
  }
  interact(delta) {
    const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
    if (hoverEnabled && isInArray(bubbleMode, hoverMode)) {
      this._hoverBubble();
    } else if (clickEnabled && isInArray(bubbleMode, clickMode)) {
      this._clickBubble();
    } else {
      divModeExecute(bubbleMode, divs, (selector, div) => this._singleSelectorHover(delta, selector, div));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events, { onClick, onDiv, onHover } = events, divBubble = isDivModeEnabled(bubbleMode, onDiv);
    if (!(divBubble || onHover.enable && !!mouse.position || onClick.enable && mouse.clickPosition)) {
      return false;
    }
    return isInArray(bubbleMode, onHover.mode) || isInArray(bubbleMode, onClick.mode) || divBubble;
  }
  loadModeOptions(options, ...sources) {
    if (!options.bubble) {
      options.bubble = new Bubble();
    }
    for (const source of sources) {
      options.bubble.load(source == null ? void 0 : source.bubble);
    }
  }
  reset(particle) {
    particle.bubble.inRange = false;
  }
}
async function loadExternalBubbleInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalBubble", (container) => {
    return Promise.resolve(new Bubbler(container, engine));
  }, refresh);
}
class ConnectLinks {
  constructor() {
    this.opacity = 0.5;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.opacity !== void 0) {
      this.opacity = data2.opacity;
    }
  }
}
class Connect {
  constructor() {
    this.distance = 80;
    this.links = new ConnectLinks();
    this.radius = 60;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.distance !== void 0) {
      this.distance = data2.distance;
    }
    this.links.load(data2.links);
    if (data2.radius !== void 0) {
      this.radius = data2.radius;
    }
  }
}
const gradientMin = 0, gradientMax = 1, defaultLinksWidth = 0;
function gradient(context, p1, p2, opacity) {
  const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
  if (!color1 || !color2) {
    return;
  }
  const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = colorMix(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
  grad.addColorStop(gradientMin, getStyleFromHsl(color1, opacity));
  grad.addColorStop(clamp(gradStop, gradientMin, gradientMax), getStyleFromRgb(midRgb, opacity));
  grad.addColorStop(gradientMax, getStyleFromHsl(color2, opacity));
  return grad;
}
function drawConnectLine(context, width, lineStyle2, begin, end) {
  drawLine$1(context, begin, end);
  context.lineWidth = width;
  context.strokeStyle = lineStyle2;
  context.stroke();
}
function lineStyle(container, ctx, p1, p2) {
  const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;
  if (!connectOptions) {
    return;
  }
  return gradient(ctx, p1, p2, connectOptions.links.opacity);
}
function drawConnection(container, p1, p2) {
  container.canvas.draw((ctx) => {
    const ls = lineStyle(container, ctx, p1, p2);
    if (!ls) {
      return;
    }
    const pos1 = p1.getPosition(), pos2 = p2.getPosition();
    drawConnectLine(ctx, p1.retina.linksWidth ?? defaultLinksWidth, ls, pos1, pos2);
  });
}
const connectMode = "connect", minDistance$4 = 0;
class Connector extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
    const container = this.container, connect = container.actualOptions.interactivity.modes.connect;
    if (!connect) {
      return;
    }
    container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
    container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
  }
  interact() {
    const container = this.container, options = container.actualOptions;
    if (options.interactivity.events.onHover.enable && container.interactivity.status === "pointermove") {
      const mousePos = container.interactivity.mouse.position, { connectModeDistance, connectModeRadius } = container.retina;
      if (!connectModeDistance || connectModeDistance < minDistance$4 || !connectModeRadius || connectModeRadius < minDistance$4 || !mousePos) {
        return;
      }
      const distance = Math.abs(connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p2) => this.isEnabled(p2));
      query.forEach((p1, i2) => {
        const pos1 = p1.getPosition(), indexOffset = 1;
        for (const p2 of query.slice(i2 + indexOffset)) {
          const pos2 = p2.getPosition(), distMax = Math.abs(connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
          if (xDiff < distMax && yDiff < distMax) {
            drawConnection(container, p1, p2);
          }
        }
      });
    }
  }
  isEnabled(particle) {
    const container = this.container, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? container.actualOptions.interactivity).events;
    if (!(events.onHover.enable && mouse.position)) {
      return false;
    }
    return isInArray(connectMode, events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.connect) {
      options.connect = new Connect();
    }
    for (const source of sources) {
      options.connect.load(source == null ? void 0 : source.connect);
    }
  }
  reset() {
  }
}
async function loadExternalConnectInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalConnect", (container) => {
    return Promise.resolve(new Connector(container));
  }, refresh);
}
class GrabLinks {
  constructor() {
    this.blink = false;
    this.consent = false;
    this.opacity = 1;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.blink !== void 0) {
      this.blink = data2.blink;
    }
    if (data2.color !== void 0) {
      this.color = OptionsColor.create(this.color, data2.color);
    }
    if (data2.consent !== void 0) {
      this.consent = data2.consent;
    }
    if (data2.opacity !== void 0) {
      this.opacity = data2.opacity;
    }
  }
}
class Grab {
  constructor() {
    this.distance = 100;
    this.links = new GrabLinks();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.distance !== void 0) {
      this.distance = data2.distance;
    }
    this.links.load(data2.links);
  }
}
const defaultWidth = 0;
function drawGrabLine(context, width, begin, end, colorLine, opacity) {
  drawLine$1(context, begin, end);
  context.strokeStyle = getStyleFromRgb(colorLine, opacity);
  context.lineWidth = width;
  context.stroke();
}
function drawGrab(container, particle, lineColor, opacity, mousePos) {
  container.canvas.draw((ctx) => {
    const beginPos = particle.getPosition();
    drawGrabLine(ctx, particle.retina.linksWidth ?? defaultWidth, beginPos, mousePos, lineColor, opacity);
  });
}
const grabMode = "grab", minDistance$3 = 0, minOpacity$1 = 0;
class Grabber extends ExternalInteractorBase {
  constructor(container, engine) {
    super(container);
    this._engine = engine;
  }
  clear() {
  }
  init() {
    const container = this.container, grab = container.actualOptions.interactivity.modes.grab;
    if (!grab) {
      return;
    }
    container.retina.grabModeDistance = grab.distance * container.retina.pixelRatio;
  }
  interact() {
    var _a;
    const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
    if (!interactivity.modes.grab || !interactivity.events.onHover.enable || container.interactivity.status !== mouseMoveEvent) {
      return;
    }
    const mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const distance = container.retina.grabModeDistance;
    if (!distance || distance < minDistance$3) {
      return;
    }
    const query = container.particles.quadTree.queryCircle(mousePos, distance, (p2) => this.isEnabled(p2));
    for (const particle of query) {
      const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos);
      if (pointDistance > distance) {
        continue;
      }
      const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
      if (opacityLine <= minOpacity$1) {
        continue;
      }
      const optColor = grabLineOptions.color ?? ((_a = particle.options.links) == null ? void 0 : _a.color);
      if (!container.particles.grabLineColor && optColor) {
        const linksOptions = interactivity.modes.grab.links;
        container.particles.grabLineColor = getLinkRandomColor(this._engine, optColor, linksOptions.blink, linksOptions.consent);
      }
      const colorLine = getLinkColor(particle, void 0, container.particles.grabLineColor);
      if (!colorLine) {
        continue;
      }
      drawGrab(container, particle, colorLine, opacityLine, mousePos);
    }
  }
  isEnabled(particle) {
    const container = this.container, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? container.actualOptions.interactivity).events;
    return events.onHover.enable && !!mouse.position && isInArray(grabMode, events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.grab) {
      options.grab = new Grab();
    }
    for (const source of sources) {
      options.grab.load(source == null ? void 0 : source.grab);
    }
  }
  reset() {
  }
}
async function loadExternalGrabInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalGrab", (container) => {
    return Promise.resolve(new Grabber(container, engine));
  }, refresh);
}
const pauseMode = "pause";
class Pauser extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      if (mode !== pauseMode) {
        return;
      }
      const container2 = this.container;
      if (container2.animationStatus) {
        container2.pause();
      } else {
        container2.play();
      }
    };
  }
  clear() {
  }
  init() {
  }
  interact() {
  }
  isEnabled() {
    return true;
  }
  reset() {
  }
}
async function loadExternalPauseInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalPause", (container) => {
    return Promise.resolve(new Pauser(container));
  }, refresh);
}
class Push {
  constructor() {
    this.default = true;
    this.groups = [];
    this.quantity = 4;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.default !== void 0) {
      this.default = data2.default;
    }
    if (data2.groups !== void 0) {
      this.groups = data2.groups.map((t2) => t2);
    }
    if (!this.groups.length) {
      this.default = true;
    }
    const quantity = data2.quantity;
    if (quantity !== void 0) {
      this.quantity = setRangeValue(quantity);
    }
  }
}
const pushMode = "push", minQuantity = 0;
class Pusher extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      if (mode !== pushMode) {
        return;
      }
      const container2 = this.container, options = container2.actualOptions, pushOptions = options.interactivity.modes.push;
      if (!pushOptions) {
        return;
      }
      const quantity = getRangeValue(pushOptions.quantity);
      if (quantity <= minQuantity) {
        return;
      }
      const group = itemFromArray([void 0, ...pushOptions.groups]), groupOptions = group !== void 0 ? container2.actualOptions.particles.groups[group] : void 0;
      void container2.particles.push(quantity, container2.interactivity.mouse, groupOptions, group);
    };
  }
  clear() {
  }
  init() {
  }
  interact() {
  }
  isEnabled() {
    return true;
  }
  loadModeOptions(options, ...sources) {
    if (!options.push) {
      options.push = new Push();
    }
    for (const source of sources) {
      options.push.load(source == null ? void 0 : source.push);
    }
  }
  reset() {
  }
}
async function loadExternalPushInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalPush", (container) => {
    return Promise.resolve(new Pusher(container));
  }, refresh);
}
class Remove {
  constructor() {
    this.quantity = 2;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    const quantity = data2.quantity;
    if (quantity !== void 0) {
      this.quantity = setRangeValue(quantity);
    }
  }
}
const removeMode = "remove";
class Remover extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      const container2 = this.container, options = container2.actualOptions;
      if (!options.interactivity.modes.remove || mode !== removeMode) {
        return;
      }
      const removeNb = getRangeValue(options.interactivity.modes.remove.quantity);
      container2.particles.removeQuantity(removeNb);
    };
  }
  clear() {
  }
  init() {
  }
  interact() {
  }
  isEnabled() {
    return true;
  }
  loadModeOptions(options, ...sources) {
    if (!options.remove) {
      options.remove = new Remove();
    }
    for (const source of sources) {
      options.remove.load(source == null ? void 0 : source.remove);
    }
  }
  reset() {
  }
}
async function loadExternalRemoveInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalRemove", (container) => {
    return Promise.resolve(new Remover(container));
  }, refresh);
}
class RepulseBase {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.factor = 100;
    this.speed = 1;
    this.maxSpeed = 50;
    this.easing = EasingType.easeOutQuad;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.distance !== void 0) {
      this.distance = data2.distance;
    }
    if (data2.duration !== void 0) {
      this.duration = data2.duration;
    }
    if (data2.easing !== void 0) {
      this.easing = data2.easing;
    }
    if (data2.factor !== void 0) {
      this.factor = data2.factor;
    }
    if (data2.speed !== void 0) {
      this.speed = data2.speed;
    }
    if (data2.maxSpeed !== void 0) {
      this.maxSpeed = data2.maxSpeed;
    }
  }
}
class RepulseDiv extends RepulseBase {
  constructor() {
    super();
    this.selectors = [];
  }
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    if (data2.selectors !== void 0) {
      this.selectors = data2.selectors;
    }
  }
}
class Repulse extends RepulseBase {
  load(data2) {
    super.load(data2);
    if (isNull(data2)) {
      return;
    }
    this.divs = executeOnSingleOrMultiple(data2.divs, (div) => {
      const tmp = new RepulseDiv();
      tmp.load(div);
      return tmp;
    });
  }
}
const repulseMode = "repulse", minDistance$2 = 0, repulseRadiusFactor = 6, repulseRadiusPower = 3, squarePower$1 = 2, minRadius$1 = 0, minSpeed = 0, easingOffset = 1, half$4 = 0.5;
class Repulser extends ExternalInteractorBase {
  constructor(engine, container) {
    super(container);
    this._clickRepulse = () => {
      const container2 = this.container, repulseOptions = container2.actualOptions.interactivity.modes.repulse;
      if (!repulseOptions) {
        return;
      }
      const repulse = container2.repulse ?? { particles: [] };
      if (!repulse.finish) {
        if (!repulse.count) {
          repulse.count = 0;
        }
        repulse.count++;
        if (repulse.count === container2.particles.count) {
          repulse.finish = true;
        }
      }
      if (repulse.clicking) {
        const repulseDistance = container2.retina.repulseModeDistance;
        if (!repulseDistance || repulseDistance < minDistance$2) {
          return;
        }
        const repulseRadius = Math.pow(repulseDistance / repulseRadiusFactor, repulseRadiusPower), mouseClickPos = container2.interactivity.mouse.clickPosition;
        if (mouseClickPos === void 0) {
          return;
        }
        const range = new Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container2.particles.quadTree.query(range, (p2) => this.isEnabled(p2));
        for (const particle of query) {
          const { dx, dy, distance } = getDistances(mouseClickPos, particle.position), d2 = distance ** squarePower$1, velocity = repulseOptions.speed, force = -repulseRadius * velocity / d2;
          if (d2 <= repulseRadius) {
            repulse.particles.push(particle);
            const vect = Vector.create(dx, dy);
            vect.length = force;
            particle.velocity.setTo(vect);
          }
        }
      } else if (repulse.clicking === false) {
        for (const particle of repulse.particles) {
          particle.velocity.setTo(particle.initialVelocity);
        }
        repulse.particles = [];
      }
    };
    this._hoverRepulse = () => {
      const container2 = this.container, mousePos = container2.interactivity.mouse.position, repulseRadius = container2.retina.repulseModeDistance;
      if (!repulseRadius || repulseRadius < minRadius$1 || !mousePos) {
        return;
      }
      this._processRepulse(mousePos, repulseRadius, new Circle(mousePos.x, mousePos.y, repulseRadius));
    };
    this._processRepulse = (position, repulseRadius, area, divRepulse) => {
      const container2 = this.container, query = container2.particles.quadTree.query(area, (p2) => this.isEnabled(p2)), repulseOptions = container2.actualOptions.interactivity.modes.repulse;
      if (!repulseOptions) {
        return;
      }
      const { easing, speed, factor, maxSpeed } = repulseOptions, easingFunc = this._engine.getEasing(easing), velocity = ((divRepulse == null ? void 0 : divRepulse.speed) ?? speed) * factor;
      for (const particle of query) {
        const { dx, dy, distance } = getDistances(particle.position, position), repulseFactor = clamp(easingFunc(easingOffset - distance / repulseRadius) * velocity, minSpeed, maxSpeed), normVec = Vector.create(!distance ? velocity : dx / distance * repulseFactor, !distance ? velocity : dy / distance * repulseFactor);
        particle.position.addTo(normVec);
      }
    };
    this._singleSelectorRepulse = (selector, div) => {
      const container2 = this.container, repulse = container2.actualOptions.interactivity.modes.repulse;
      if (!repulse) {
        return;
      }
      const query = document.querySelectorAll(selector);
      if (!query.length) {
        return;
      }
      query.forEach((item) => {
        const elem = item, pxRatio = container2.retina.pixelRatio, pos = {
          x: (elem.offsetLeft + elem.offsetWidth * half$4) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight * half$4) * pxRatio
        }, repulseRadius = elem.offsetWidth * half$4 * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = repulse.divs, divRepulse = divMode(divs, elem);
        this._processRepulse(pos, repulseRadius, area, divRepulse);
      });
    };
    this._engine = engine;
    if (!container.repulse) {
      container.repulse = { particles: [] };
    }
    this.handleClickMode = (mode) => {
      const options = this.container.actualOptions, repulseOpts = options.interactivity.modes.repulse;
      if (!repulseOpts || mode !== repulseMode) {
        return;
      }
      if (!container.repulse) {
        container.repulse = { particles: [] };
      }
      const repulse = container.repulse;
      repulse.clicking = true;
      repulse.count = 0;
      for (const particle of container.repulse.particles) {
        if (!this.isEnabled(particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      repulse.particles = [];
      repulse.finish = false;
      setTimeout(() => {
        if (container.destroyed) {
          return;
        }
        repulse.clicking = false;
      }, repulseOpts.duration * millisecondsToSeconds);
    };
  }
  clear() {
  }
  init() {
    const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
    if (!repulse) {
      return;
    }
    container.retina.repulseModeDistance = repulse.distance * container.retina.pixelRatio;
  }
  interact() {
    const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, hover = events.onHover, hoverEnabled = hover.enable, hoverMode = hover.mode, click = events.onClick, clickEnabled = click.enable, clickMode = click.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray(repulseMode, hoverMode)) {
      this._hoverRepulse();
    } else if (clickEnabled && isInArray(repulseMode, clickMode)) {
      this._clickRepulse();
    } else {
      divModeExecute(repulseMode, divs, (selector, div) => this._singleSelectorRepulse(selector, div));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events, divs = events.onDiv, hover = events.onHover, click = events.onClick, divRepulse = isDivModeEnabled(repulseMode, divs);
    if (!(divRepulse || hover.enable && !!mouse.position || click.enable && mouse.clickPosition)) {
      return false;
    }
    const hoverMode = hover.mode, clickMode = click.mode;
    return isInArray(repulseMode, hoverMode) || isInArray(repulseMode, clickMode) || divRepulse;
  }
  loadModeOptions(options, ...sources) {
    if (!options.repulse) {
      options.repulse = new Repulse();
    }
    for (const source of sources) {
      options.repulse.load(source == null ? void 0 : source.repulse);
    }
  }
  reset() {
  }
}
async function loadExternalRepulseInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalRepulse", (container) => {
    return Promise.resolve(new Repulser(engine, container));
  }, refresh);
}
class Slow {
  constructor() {
    this.factor = 3;
    this.radius = 200;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.factor !== void 0) {
      this.factor = data2.factor;
    }
    if (data2.radius !== void 0) {
      this.radius = data2.radius;
    }
  }
}
const slowMode = "slow", minRadius = 0;
class Slower extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  clear(particle, delta, force) {
    if (particle.slow.inRange && !force) {
      return;
    }
    particle.slow.factor = 1;
  }
  init() {
    const container = this.container, slow = container.actualOptions.interactivity.modes.slow;
    if (!slow) {
      return;
    }
    container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
  }
  interact() {
  }
  isEnabled(particle) {
    const container = this.container, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? container.actualOptions.interactivity).events;
    return events.onHover.enable && !!mouse.position && isInArray(slowMode, events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.slow) {
      options.slow = new Slow();
    }
    for (const source of sources) {
      options.slow.load(source == null ? void 0 : source.slow);
    }
  }
  reset(particle) {
    particle.slow.inRange = false;
    const container = this.container, options = container.actualOptions, mousePos = container.interactivity.mouse.position, radius = container.retina.slowModeRadius, slowOptions = options.interactivity.modes.slow;
    if (!slowOptions || !radius || radius < minRadius || !mousePos) {
      return;
    }
    const particlePos = particle.getPosition(), dist = getDistance(mousePos, particlePos), proximityFactor = dist / radius, slowFactor = slowOptions.factor, { slow } = particle;
    if (dist > radius) {
      return;
    }
    slow.inRange = true;
    slow.factor = proximityFactor / slowFactor;
  }
}
async function loadExternalSlowInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("externalSlow", (container) => {
    return Promise.resolve(new Slower(container));
  }, refresh);
}
const stringStart = 0, defaultOpacity$1 = 1;
const currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity) {
  const { svgData } = imageShape;
  if (!svgData) {
    return "";
  }
  const colorStyle = getStyleFromHsl(color, opacity);
  if (svgData.includes("fill")) {
    return svgData.replace(currentColorRegex, () => colorStyle);
  }
  const preFillIndex = svgData.indexOf(">");
  return `${svgData.substring(stringStart, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
async function loadImage(image) {
  return new Promise((resolve) => {
    image.loading = true;
    const img = new Image();
    image.element = img;
    img.addEventListener("load", () => {
      image.loading = false;
      resolve();
    });
    img.addEventListener("error", () => {
      image.element = void 0;
      image.error = true;
      image.loading = false;
      getLogger().error(`${errorPrefix} loading image: ${image.source}`);
      resolve();
    });
    img.src = image.source;
  });
}
async function downloadSvgImage(image) {
  if (image.type !== "svg") {
    await loadImage(image);
    return;
  }
  image.loading = true;
  const response = await fetch(image.source);
  if (!response.ok) {
    getLogger().error(`${errorPrefix} Image not found`);
    image.error = true;
  } else {
    image.svgData = await response.text();
  }
  image.loading = false;
}
function replaceImageColor(image, imageData, color, particle) {
  var _a;
  const svgColoredData = replaceColorSvg(image, color, ((_a = particle.opacity) == null ? void 0 : _a.value) ?? defaultOpacity$1), imageRes = {
    color,
    gif: imageData.gif,
    data: {
      ...image,
      svgData: svgColoredData
    },
    loaded: false,
    ratio: imageData.width / imageData.height,
    replaceColor: imageData.replaceColor,
    source: imageData.src
  };
  return new Promise((resolve) => {
    const svg = new Blob([svgColoredData], { type: "image/svg+xml" }), domUrl = URL || window.URL || window.webkitURL || window, url = domUrl.createObjectURL(svg), img = new Image();
    img.addEventListener("load", () => {
      imageRes.loaded = true;
      imageRes.element = img;
      resolve(imageRes);
      domUrl.revokeObjectURL(url);
    });
    const errorHandler = async () => {
      domUrl.revokeObjectURL(url);
      const img2 = {
        ...image,
        error: false,
        loading: true
      };
      await loadImage(img2);
      imageRes.loaded = true;
      imageRes.element = img2.element;
      resolve(imageRes);
    };
    img.addEventListener("error", () => void errorHandler());
    img.src = url;
  });
}
const InterlaceOffsets = [0, 4, 2, 1];
const InterlaceSteps = [8, 8, 4, 2];
class ByteStream {
  constructor(bytes) {
    this.pos = 0;
    this.data = new Uint8ClampedArray(bytes);
  }
  getString(count) {
    const slice = this.data.slice(this.pos, this.pos + count);
    this.pos += slice.length;
    return slice.reduce((acc, curr) => acc + String.fromCharCode(curr), "");
  }
  nextByte() {
    return this.data[this.pos++];
  }
  nextTwoBytes() {
    const increment = 2, previous = 1, shift = 8;
    this.pos += increment;
    return this.data[this.pos - increment] + (this.data[this.pos - previous] << shift);
  }
  readSubBlocks() {
    let blockString = "", size2 = 0;
    const minCount = 0, emptySize = 0;
    do {
      size2 = this.data[this.pos++];
      for (let count = size2; --count >= minCount; blockString += String.fromCharCode(this.data[this.pos++])) {
      }
    } while (size2 !== emptySize);
    return blockString;
  }
  readSubBlocksBin() {
    let size2 = this.data[this.pos], len = 0;
    const emptySize = 0, increment = 1;
    for (let offset = 0; size2 !== emptySize; offset += size2 + increment, size2 = this.data[this.pos + offset]) {
      len += size2;
    }
    const blockData = new Uint8Array(len);
    size2 = this.data[this.pos++];
    for (let i2 = 0; size2 !== emptySize; size2 = this.data[this.pos++]) {
      for (let count = size2; --count >= emptySize; blockData[i2++] = this.data[this.pos++]) {
      }
    }
    return blockData;
  }
  skipSubBlocks() {
    for (const increment = 1, noData = 0; this.data[this.pos] !== noData; this.pos += this.data[this.pos] + increment) {
    }
    this.pos++;
  }
}
var DisposalMethod;
(function(DisposalMethod2) {
  DisposalMethod2[DisposalMethod2["Replace"] = 0] = "Replace";
  DisposalMethod2[DisposalMethod2["Combine"] = 1] = "Combine";
  DisposalMethod2[DisposalMethod2["RestoreBackground"] = 2] = "RestoreBackground";
  DisposalMethod2[DisposalMethod2["RestorePrevious"] = 3] = "RestorePrevious";
  DisposalMethod2[DisposalMethod2["UndefinedA"] = 4] = "UndefinedA";
  DisposalMethod2[DisposalMethod2["UndefinedB"] = 5] = "UndefinedB";
  DisposalMethod2[DisposalMethod2["UndefinedC"] = 6] = "UndefinedC";
  DisposalMethod2[DisposalMethod2["UndefinedD"] = 7] = "UndefinedD";
})(DisposalMethod || (DisposalMethod = {}));
var GIFDataHeaders;
(function(GIFDataHeaders2) {
  GIFDataHeaders2[GIFDataHeaders2["Extension"] = 33] = "Extension";
  GIFDataHeaders2[GIFDataHeaders2["ApplicationExtension"] = 255] = "ApplicationExtension";
  GIFDataHeaders2[GIFDataHeaders2["GraphicsControlExtension"] = 249] = "GraphicsControlExtension";
  GIFDataHeaders2[GIFDataHeaders2["PlainTextExtension"] = 1] = "PlainTextExtension";
  GIFDataHeaders2[GIFDataHeaders2["CommentExtension"] = 254] = "CommentExtension";
  GIFDataHeaders2[GIFDataHeaders2["Image"] = 44] = "Image";
  GIFDataHeaders2[GIFDataHeaders2["EndOfFile"] = 59] = "EndOfFile";
})(GIFDataHeaders || (GIFDataHeaders = {}));
const origin$3 = {
  x: 0,
  y: 0
}, defaultFrame = 0, half$3 = 0.5, initialTime = 0, firstIndex = 0, defaultLoopCount = 0;
function parseColorTable(byteStream, count) {
  const colors = [];
  for (let i2 = 0; i2 < count; i2++) {
    colors.push({
      r: byteStream.data[byteStream.pos],
      g: byteStream.data[byteStream.pos + 1],
      b: byteStream.data[byteStream.pos + 2]
    });
    byteStream.pos += 3;
  }
  return colors;
}
function parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex) {
  switch (byteStream.nextByte()) {
    case GIFDataHeaders.GraphicsControlExtension: {
      const frame = gif.frames[getFrameIndex(false)];
      byteStream.pos++;
      const packedByte = byteStream.nextByte();
      frame.GCreserved = (packedByte & 224) >>> 5;
      frame.disposalMethod = (packedByte & 28) >>> 2;
      frame.userInputDelayFlag = (packedByte & 2) === 2;
      const transparencyFlag = (packedByte & 1) === 1;
      frame.delayTime = byteStream.nextTwoBytes() * 10;
      const transparencyIndex = byteStream.nextByte();
      if (transparencyFlag) {
        getTransparencyIndex(transparencyIndex);
      }
      byteStream.pos++;
      break;
    }
    case GIFDataHeaders.ApplicationExtension: {
      byteStream.pos++;
      const applicationExtension = {
        identifier: byteStream.getString(8),
        authenticationCode: byteStream.getString(3),
        data: byteStream.readSubBlocksBin()
      };
      gif.applicationExtensions.push(applicationExtension);
      break;
    }
    case GIFDataHeaders.CommentExtension: {
      gif.comments.push([getFrameIndex(false), byteStream.readSubBlocks()]);
      break;
    }
    case GIFDataHeaders.PlainTextExtension: {
      if (gif.globalColorTable.length === 0) {
        throw new EvalError("plain text extension without global color table");
      }
      byteStream.pos++;
      gif.frames[getFrameIndex(false)].plainTextData = {
        left: byteStream.nextTwoBytes(),
        top: byteStream.nextTwoBytes(),
        width: byteStream.nextTwoBytes(),
        height: byteStream.nextTwoBytes(),
        charSize: {
          width: byteStream.nextTwoBytes(),
          height: byteStream.nextTwoBytes()
        },
        foregroundColor: byteStream.nextByte(),
        backgroundColor: byteStream.nextByte(),
        text: byteStream.readSubBlocks()
      };
      break;
    }
    default:
      byteStream.skipSubBlocks();
      break;
  }
}
async function parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
  const frame = gif.frames[getFrameIndex(true)];
  frame.left = byteStream.nextTwoBytes();
  frame.top = byteStream.nextTwoBytes();
  frame.width = byteStream.nextTwoBytes();
  frame.height = byteStream.nextTwoBytes();
  const packedByte = byteStream.nextByte(), localColorTableFlag = (packedByte & 128) === 128, interlacedFlag = (packedByte & 64) === 64;
  frame.sortFlag = (packedByte & 32) === 32;
  frame.reserved = (packedByte & 24) >>> 3;
  const localColorCount = 1 << (packedByte & 7) + 1;
  if (localColorTableFlag) {
    frame.localColorTable = parseColorTable(byteStream, localColorCount);
  }
  const getColor = (index) => {
    const { r: r2, g: g2, b: b2 } = (localColorTableFlag ? frame.localColorTable : gif.globalColorTable)[index];
    if (index !== getTransparencyIndex(null)) {
      return { r: r2, g: g2, b: b2, a: 255 };
    }
    return { r: r2, g: g2, b: b2, a: avgAlpha ? ~~((r2 + g2 + b2) / 3) : 0 };
  };
  const image = (() => {
    try {
      return new ImageData(frame.width, frame.height, { colorSpace: "srgb" });
    } catch (error2) {
      if (error2 instanceof DOMException && error2.name === "IndexSizeError") {
        return null;
      }
      throw error2;
    }
  })();
  if (image == null) {
    throw new EvalError("GIF frame size is to large");
  }
  const minCodeSize = byteStream.nextByte(), imageData = byteStream.readSubBlocksBin(), clearCode = 1 << minCodeSize;
  const readBits = (pos, len) => {
    const bytePos = pos >>> 3, bitPos = pos & 7;
    return (imageData[bytePos] + (imageData[bytePos + 1] << 8) + (imageData[bytePos + 2] << 16) & (1 << len) - 1 << bitPos) >>> bitPos;
  };
  if (interlacedFlag) {
    for (let code = 0, size2 = minCodeSize + 1, pos = 0, dic = [[0]], pass = 0; pass < 4; pass++) {
      if (InterlaceOffsets[pass] < frame.height) {
        let pixelPos = 0, lineIndex = 0, exit = false;
        while (!exit) {
          const last = code;
          code = readBits(pos, size2);
          pos += size2 + 1;
          if (code === clearCode) {
            size2 = minCodeSize + 1;
            dic.length = clearCode + 2;
            for (let i2 = 0; i2 < dic.length; i2++) {
              dic[i2] = i2 < clearCode ? [i2] : [];
            }
          } else {
            if (code >= dic.length) {
              dic.push(dic[last].concat(dic[last][0]));
            } else if (last !== clearCode) {
              dic.push(dic[last].concat(dic[code][0]));
            }
            for (const item of dic[code]) {
              const { r: r2, g: g2, b: b2, a: a2 } = getColor(item);
              image.data.set([r2, g2, b2, a2], InterlaceOffsets[pass] * frame.width + InterlaceSteps[pass] * lineIndex + pixelPos % (frame.width * 4));
              pixelPos += 4;
            }
            if (dic.length === 1 << size2 && size2 < 12) {
              size2++;
            }
          }
          if (pixelPos === frame.width * 4 * (lineIndex + 1)) {
            lineIndex++;
            if (InterlaceOffsets[pass] + InterlaceSteps[pass] * lineIndex >= frame.height) {
              exit = true;
            }
          }
        }
      }
    }
    frame.image = image;
    frame.bitmap = await createImageBitmap(image);
  } else {
    let code = 0, size2 = minCodeSize + 1, pos = 0, pixelPos = -4, exit = false;
    const dic = [[0]];
    while (!exit) {
      const last = code;
      code = readBits(pos, size2);
      pos += size2;
      if (code === clearCode) {
        size2 = minCodeSize + 1;
        dic.length = clearCode + 2;
        for (let i2 = 0; i2 < dic.length; i2++) {
          dic[i2] = i2 < clearCode ? [i2] : [];
        }
      } else {
        if (code === clearCode + 1) {
          exit = true;
          break;
        }
        if (code >= dic.length) {
          dic.push(dic[last].concat(dic[last][0]));
        } else if (last !== clearCode) {
          dic.push(dic[last].concat(dic[code][0]));
        }
        for (const item of dic[code]) {
          const { r: r2, g: g2, b: b2, a: a2 } = getColor(item);
          image.data.set([r2, g2, b2, a2], pixelPos += 4);
        }
        if (dic.length >= 1 << size2 && size2 < 12) {
          size2++;
        }
      }
    }
    frame.image = image;
    frame.bitmap = await createImageBitmap(image);
  }
}
async function parseBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
  switch (byteStream.nextByte()) {
    case GIFDataHeaders.EndOfFile:
      return true;
    case GIFDataHeaders.Image:
      await parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex);
      break;
    case GIFDataHeaders.Extension:
      parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex);
      break;
    default:
      throw new EvalError("undefined block found");
  }
  return false;
}
function getGIFLoopAmount(gif) {
  for (const extension of gif.applicationExtensions) {
    if (extension.identifier + extension.authenticationCode !== "NETSCAPE2.0") {
      continue;
    }
    return extension.data[1] + (extension.data[2] << 8);
  }
  return NaN;
}
async function decodeGIF(gifURL, progressCallback, avgAlpha) {
  if (!avgAlpha)
    avgAlpha = false;
  const res = await fetch(gifURL);
  if (!res.ok && res.status === 404) {
    throw new EvalError("file not found");
  }
  const buffer = await res.arrayBuffer();
  const gif = {
    width: 0,
    height: 0,
    totalTime: 0,
    colorRes: 0,
    pixelAspectRatio: 0,
    frames: [],
    sortFlag: false,
    globalColorTable: [],
    backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
    comments: [],
    applicationExtensions: []
  }, byteStream = new ByteStream(new Uint8ClampedArray(buffer));
  if (byteStream.getString(6) !== "GIF89a") {
    throw new Error("not a supported GIF file");
  }
  gif.width = byteStream.nextTwoBytes();
  gif.height = byteStream.nextTwoBytes();
  const packedByte = byteStream.nextByte(), globalColorTableFlag = (packedByte & 128) === 128;
  gif.colorRes = (packedByte & 112) >>> 4;
  gif.sortFlag = (packedByte & 8) === 8;
  const globalColorCount = 1 << (packedByte & 7) + 1, backgroundColorIndex = byteStream.nextByte();
  gif.pixelAspectRatio = byteStream.nextByte();
  if (gif.pixelAspectRatio !== 0) {
    gif.pixelAspectRatio = (gif.pixelAspectRatio + 15) / 64;
  }
  if (globalColorTableFlag) {
    gif.globalColorTable = parseColorTable(byteStream, globalColorCount);
  }
  const backgroundImage = (() => {
    try {
      return new ImageData(gif.width, gif.height, { colorSpace: "srgb" });
    } catch (error2) {
      if (error2 instanceof DOMException && error2.name === "IndexSizeError") {
        return null;
      }
      throw error2;
    }
  })();
  if (backgroundImage == null) {
    throw new Error("GIF frame size is to large");
  }
  const { r: r2, g: g2, b: b2 } = gif.globalColorTable[backgroundColorIndex];
  backgroundImage.data.set(globalColorTableFlag ? [r2, g2, b2, 255] : [0, 0, 0, 0]);
  for (let i2 = 4; i2 < backgroundImage.data.length; i2 *= 2) {
    backgroundImage.data.copyWithin(i2, 0, i2);
  }
  gif.backgroundImage = backgroundImage;
  let frameIndex = -1, incrementFrameIndex = true, transparencyIndex = -1;
  const getframeIndex = (increment) => {
    if (increment) {
      incrementFrameIndex = true;
    }
    return frameIndex;
  };
  const getTransparencyIndex = (newValue) => {
    if (newValue != null) {
      transparencyIndex = newValue;
    }
    return transparencyIndex;
  };
  try {
    do {
      if (incrementFrameIndex) {
        gif.frames.push({
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          disposalMethod: DisposalMethod.Replace,
          image: new ImageData(1, 1, { colorSpace: "srgb" }),
          plainTextData: null,
          userInputDelayFlag: false,
          delayTime: 0,
          sortFlag: false,
          localColorTable: [],
          reserved: 0,
          GCreserved: 0
        });
        frameIndex++;
        transparencyIndex = -1;
        incrementFrameIndex = false;
      }
    } while (!await parseBlock(byteStream, gif, avgAlpha, getframeIndex, getTransparencyIndex, progressCallback));
    gif.frames.length--;
    for (const frame of gif.frames) {
      if (frame.userInputDelayFlag && frame.delayTime === 0) {
        gif.totalTime = Infinity;
        break;
      }
      gif.totalTime += frame.delayTime;
    }
    return gif;
  } catch (error2) {
    if (error2 instanceof EvalError) {
      throw new Error(`error while parsing frame ${frameIndex} "${error2.message}"`);
    }
    throw error2;
  }
}
function drawGif(data2) {
  const { context, radius, particle, delta } = data2, image = particle.image;
  if (!(image == null ? void 0 : image.gifData) || !image.gif) {
    return;
  }
  const offscreenCanvas = new OffscreenCanvas(image.gifData.width, image.gifData.height), offscreenContext = offscreenCanvas.getContext("2d");
  if (!offscreenContext) {
    throw new Error("could not create offscreen canvas context");
  }
  offscreenContext.imageSmoothingQuality = "low";
  offscreenContext.imageSmoothingEnabled = false;
  offscreenContext.clearRect(origin$3.x, origin$3.y, offscreenCanvas.width, offscreenCanvas.height);
  if (particle.gifLoopCount === void 0) {
    particle.gifLoopCount = image.gifLoopCount ?? defaultLoopCount;
  }
  let frameIndex = particle.gifFrame ?? defaultFrame;
  const pos = { x: -image.gifData.width * half$3, y: -image.gifData.height * half$3 }, frame = image.gifData.frames[frameIndex];
  if (particle.gifTime === void 0) {
    particle.gifTime = initialTime;
  }
  if (!frame.bitmap) {
    return;
  }
  context.scale(radius / image.gifData.width, radius / image.gifData.height);
  switch (frame.disposalMethod) {
    case DisposalMethod.UndefinedA:
    case DisposalMethod.UndefinedB:
    case DisposalMethod.UndefinedC:
    case DisposalMethod.UndefinedD:
    case DisposalMethod.Replace:
      offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
      context.drawImage(offscreenCanvas, pos.x, pos.y);
      offscreenContext.clearRect(origin$3.x, origin$3.y, offscreenCanvas.width, offscreenCanvas.height);
      break;
    case DisposalMethod.Combine:
      offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
      context.drawImage(offscreenCanvas, pos.x, pos.y);
      break;
    case DisposalMethod.RestoreBackground:
      offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
      context.drawImage(offscreenCanvas, pos.x, pos.y);
      offscreenContext.clearRect(origin$3.x, origin$3.y, offscreenCanvas.width, offscreenCanvas.height);
      if (!image.gifData.globalColorTable.length) {
        offscreenContext.putImageData(image.gifData.frames[firstIndex].image, pos.x + frame.left, pos.y + frame.top);
      } else {
        offscreenContext.putImageData(image.gifData.backgroundImage, pos.x, pos.y);
      }
      break;
    case DisposalMethod.RestorePrevious:
      {
        const previousImageData = offscreenContext.getImageData(origin$3.x, origin$3.y, offscreenCanvas.width, offscreenCanvas.height);
        offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
        context.drawImage(offscreenCanvas, pos.x, pos.y);
        offscreenContext.clearRect(origin$3.x, origin$3.y, offscreenCanvas.width, offscreenCanvas.height);
        offscreenContext.putImageData(previousImageData, origin$3.x, origin$3.y);
      }
      break;
  }
  particle.gifTime += delta.value;
  if (particle.gifTime > frame.delayTime) {
    particle.gifTime -= frame.delayTime;
    if (++frameIndex >= image.gifData.frames.length) {
      if (--particle.gifLoopCount <= defaultLoopCount) {
        return;
      }
      frameIndex = firstIndex;
      offscreenContext.clearRect(origin$3.x, origin$3.y, offscreenCanvas.width, offscreenCanvas.height);
    }
    particle.gifFrame = frameIndex;
  }
  context.scale(image.gifData.width / radius, image.gifData.height / radius);
}
async function loadGifImage(image) {
  if (image.type !== "gif") {
    await loadImage(image);
    return;
  }
  image.loading = true;
  try {
    image.gifData = await decodeGIF(image.source);
    image.gifLoopCount = getGIFLoopAmount(image.gifData) ?? defaultLoopCount;
    if (!image.gifLoopCount) {
      image.gifLoopCount = Infinity;
    }
  } catch {
    image.error = true;
  }
  image.loading = false;
}
const double$5 = 2, defaultAlpha = 1, sides$3 = 12, defaultRatio = 1;
class ImageDrawer {
  constructor(engine) {
    this.validTypes = ["image", "images"];
    this.loadImageShape = async (imageShape) => {
      if (!this._engine.loadImage) {
        throw new Error(`${errorPrefix} image shape not initialized`);
      }
      await this._engine.loadImage({
        gif: imageShape.gif,
        name: imageShape.name,
        replaceColor: imageShape.replaceColor ?? false,
        src: imageShape.src
      });
    };
    this._engine = engine;
  }
  addImage(image) {
    if (!this._engine.images) {
      this._engine.images = [];
    }
    this._engine.images.push(image);
  }
  draw(data2) {
    const { context, radius, particle, opacity } = data2, image = particle.image, element = image == null ? void 0 : image.element;
    if (!image) {
      return;
    }
    context.globalAlpha = opacity;
    if (image.gif && image.gifData) {
      drawGif(data2);
    } else if (element) {
      const ratio = image.ratio, pos = {
        x: -radius,
        y: -radius
      }, diameter = radius * double$5;
      context.drawImage(element, pos.x, pos.y, diameter, diameter / ratio);
    }
    context.globalAlpha = defaultAlpha;
  }
  getSidesCount() {
    return sides$3;
  }
  async init(container) {
    const options = container.actualOptions;
    if (!options.preload || !this._engine.loadImage) {
      return;
    }
    for (const imageData of options.preload) {
      await this._engine.loadImage(imageData);
    }
  }
  loadShape(particle) {
    if (particle.shape !== "image" && particle.shape !== "images") {
      return;
    }
    if (!this._engine.images) {
      this._engine.images = [];
    }
    const imageData = particle.shapeData;
    if (!imageData) {
      return;
    }
    const image = this._engine.images.find((t2) => t2.name === imageData.name || t2.source === imageData.src);
    if (!image) {
      void this.loadImageShape(imageData).then(() => {
        this.loadShape(particle);
      });
    }
  }
  particleInit(container, particle) {
    if (particle.shape !== "image" && particle.shape !== "images") {
      return;
    }
    if (!this._engine.images) {
      this._engine.images = [];
    }
    const images = this._engine.images, imageData = particle.shapeData;
    if (!imageData) {
      return;
    }
    const color = particle.getFillColor(), image = images.find((t2) => t2.name === imageData.name || t2.source === imageData.src);
    if (!image) {
      return;
    }
    const replaceColor = imageData.replaceColor ?? image.replaceColor;
    if (image.loading) {
      setTimeout(() => {
        this.particleInit(container, particle);
      });
      return;
    }
    void (async () => {
      let imageRes;
      if (image.svgData && color) {
        imageRes = await replaceImageColor(image, imageData, color, particle);
      } else {
        imageRes = {
          color,
          data: image,
          element: image.element,
          gif: image.gif,
          gifData: image.gifData,
          gifLoopCount: image.gifLoopCount,
          loaded: true,
          ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? defaultRatio,
          replaceColor,
          source: imageData.src
        };
      }
      if (!imageRes.ratio) {
        imageRes.ratio = 1;
      }
      const fill = imageData.fill ?? particle.shapeFill, close = imageData.close ?? particle.shapeClose, imageShape = {
        image: imageRes,
        fill,
        close
      };
      particle.image = imageShape.image;
      particle.shapeFill = imageShape.fill;
      particle.shapeClose = imageShape.close;
    })();
  }
}
class Preload {
  constructor() {
    this.src = "";
    this.gif = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.gif !== void 0) {
      this.gif = data2.gif;
    }
    if (data2.height !== void 0) {
      this.height = data2.height;
    }
    if (data2.name !== void 0) {
      this.name = data2.name;
    }
    if (data2.replaceColor !== void 0) {
      this.replaceColor = data2.replaceColor;
    }
    if (data2.src !== void 0) {
      this.src = data2.src;
    }
    if (data2.width !== void 0) {
      this.width = data2.width;
    }
  }
}
class ImagePreloaderPlugin {
  constructor(engine) {
    this.id = "imagePreloader";
    this._engine = engine;
  }
  async getPlugin() {
    await Promise.resolve();
    return {};
  }
  loadOptions(options, source) {
    if (!(source == null ? void 0 : source.preload)) {
      return;
    }
    if (!options.preload) {
      options.preload = [];
    }
    const preloadOptions = options.preload;
    for (const item of source.preload) {
      const existing = preloadOptions.find((t2) => t2.name === item.name || t2.src === item.src);
      if (existing) {
        existing.load(item);
      } else {
        const preload = new Preload();
        preload.load(item);
        preloadOptions.push(preload);
      }
    }
  }
  needsPlugin() {
    return true;
  }
}
const extLength = 3;
function addLoadImageToEngine(engine) {
  if (engine.loadImage) {
    return;
  }
  engine.loadImage = async (data2) => {
    if (!data2.name && !data2.src) {
      throw new Error(`${errorPrefix} no image source provided`);
    }
    if (!engine.images) {
      engine.images = [];
    }
    if (engine.images.find((t2) => t2.name === data2.name || t2.source === data2.src)) {
      return;
    }
    try {
      const image = {
        gif: data2.gif ?? false,
        name: data2.name ?? data2.src,
        source: data2.src,
        type: data2.src.substring(data2.src.length - extLength),
        error: false,
        loading: true,
        replaceColor: data2.replaceColor,
        ratio: data2.width && data2.height ? data2.width / data2.height : void 0
      };
      engine.images.push(image);
      let imageFunc;
      if (data2.gif) {
        imageFunc = loadGifImage;
      } else {
        imageFunc = data2.replaceColor ? downloadSvgImage : loadImage;
      }
      await imageFunc(image);
    } catch {
      throw new Error(`${errorPrefix} ${data2.name ?? data2.src} not found`);
    }
  };
}
async function loadImageShape(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  addLoadImageToEngine(engine);
  const preloader = new ImagePreloaderPlugin(engine);
  await engine.addPlugin(preloader, refresh);
  await engine.addShape(new ImageDrawer(engine), refresh);
}
class LifeDelay extends ValueWithRandom {
  constructor() {
    super();
    this.sync = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    super.load(data2);
    if (data2.sync !== void 0) {
      this.sync = data2.sync;
    }
  }
}
class LifeDuration extends ValueWithRandom {
  constructor() {
    super();
    this.sync = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    super.load(data2);
    if (data2.sync !== void 0) {
      this.sync = data2.sync;
    }
  }
}
class Life {
  constructor() {
    this.count = 0;
    this.delay = new LifeDelay();
    this.duration = new LifeDuration();
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.count !== void 0) {
      this.count = data2.count;
    }
    this.delay.load(data2.delay);
    this.duration.load(data2.duration);
  }
}
const noTime$1 = 0, infiniteValue$1 = -1, noLife = 0, minCanvasSize = 0;
function updateLife(particle, delta, canvasSize) {
  if (!particle.life) {
    return;
  }
  const life = particle.life;
  let justSpawned = false;
  if (particle.spawning) {
    life.delayTime += delta.value;
    if (life.delayTime >= particle.life.delay) {
      justSpawned = true;
      particle.spawning = false;
      life.delayTime = noTime$1;
      life.time = noTime$1;
    } else {
      return;
    }
  }
  if (life.duration === infiniteValue$1) {
    return;
  }
  if (particle.spawning) {
    return;
  }
  if (justSpawned) {
    life.time = noTime$1;
  } else {
    life.time += delta.value;
  }
  if (life.time < life.duration) {
    return;
  }
  life.time = noTime$1;
  if (particle.life.count > noLife) {
    particle.life.count--;
  }
  if (particle.life.count === noLife) {
    particle.destroy();
    return;
  }
  const widthRange = setRangeValue(minCanvasSize, canvasSize.width), heightRange = setRangeValue(minCanvasSize, canvasSize.width);
  particle.position.x = randomInRange(widthRange);
  particle.position.y = randomInRange(heightRange);
  particle.spawning = true;
  life.delayTime = noTime$1;
  life.time = noTime$1;
  particle.reset();
  const lifeOptions = particle.options.life;
  if (lifeOptions) {
    life.delay = getRangeValue(lifeOptions.delay.value) * millisecondsToSeconds;
    life.duration = getRangeValue(lifeOptions.duration.value) * millisecondsToSeconds;
  }
}
const noTime = 0, identity$2 = 1, infiniteValue = -1;
class LifeUpdater {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const container = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
    if (!lifeOptions) {
      return;
    }
    particle.life = {
      delay: container.retina.reduceFactor ? getRangeValue(lifeOptions.delay.value) * (lifeOptions.delay.sync ? identity$2 : getRandom()) / container.retina.reduceFactor * millisecondsToSeconds : noTime,
      delayTime: noTime,
      duration: container.retina.reduceFactor ? getRangeValue(lifeOptions.duration.value) * (lifeOptions.duration.sync ? identity$2 : getRandom()) / container.retina.reduceFactor * millisecondsToSeconds : noTime,
      time: noTime,
      count: lifeOptions.count
    };
    if (particle.life.duration <= noTime) {
      particle.life.duration = infiniteValue;
    }
    if (particle.life.count <= noTime) {
      particle.life.count = infiniteValue;
    }
    if (particle.life) {
      particle.spawning = particle.life.delay > noTime;
    }
  }
  isEnabled(particle) {
    return !particle.destroyed;
  }
  loadOptions(options, ...sources) {
    if (!options.life) {
      options.life = new Life();
    }
    for (const source of sources) {
      options.life.load(source == null ? void 0 : source.life);
    }
  }
  update(particle, delta) {
    if (!this.isEnabled(particle) || !particle.life) {
      return;
    }
    updateLife(particle, delta, this.container.canvas.size);
  }
}
async function loadLifeUpdater(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addParticleUpdater("life", async (container) => {
    return Promise.resolve(new LifeUpdater(container));
  }, refresh);
}
function drawLine(data2) {
  const { context, particle, radius } = data2, shapeData = particle.shapeData, centerY = 0;
  context.moveTo(-radius, centerY);
  context.lineTo(radius, centerY);
  context.lineCap = (shapeData == null ? void 0 : shapeData.cap) ?? "butt";
}
const sides$2 = 1;
class LineDrawer {
  constructor() {
    this.validTypes = ["line"];
  }
  draw(data2) {
    drawLine(data2);
  }
  getSidesCount() {
    return sides$2;
  }
}
async function loadLineShape(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addShape(new LineDrawer(), refresh);
}
const half$2 = 0.5;
class ParallaxMover {
  init() {
  }
  isEnabled(particle) {
    return !isSsr() && !particle.destroyed && particle.container.actualOptions.interactivity.events.onHover.parallax.enable;
  }
  move(particle) {
    const container = particle.container, options = container.actualOptions, parallaxOptions = options.interactivity.events.onHover.parallax;
    if (isSsr() || !parallaxOptions.enable) {
      return;
    }
    const parallaxForce = parallaxOptions.force, mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const canvasSize = container.canvas.size, canvasCenter = {
      x: canvasSize.width * half$2,
      y: canvasSize.height * half$2
    }, parallaxSmooth = parallaxOptions.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
      x: (mousePos.x - canvasCenter.x) * factor,
      y: (mousePos.y - canvasCenter.y) * factor
    }, { offset } = particle;
    offset.x += (centerDistance.x - offset.x) / parallaxSmooth;
    offset.y += (centerDistance.y - offset.y) / parallaxSmooth;
  }
}
async function loadParallaxMover(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addMover("parallax", () => {
    return Promise.resolve(new ParallaxMover());
  }, refresh);
}
const attractFactor = 1e3, identity$1 = 1;
class Attractor extends ParticlesInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
  }
  interact(p1) {
    const container = this.container;
    if (p1.attractDistance === void 0) {
      p1.attractDistance = getRangeValue(p1.options.move.attract.distance) * container.retina.pixelRatio;
    }
    const distance = p1.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);
    for (const p2 of query) {
      if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
        continue;
      }
      const pos2 = p2.getPosition(), { dx, dy } = getDistances(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * attractFactor), ay = dy / (rotate.y * attractFactor), p1Factor = p2.size.value / p1.size.value, p2Factor = identity$1 / p1Factor;
      p1.velocity.x -= ax * p1Factor;
      p1.velocity.y -= ay * p1Factor;
      p2.velocity.x += ax * p2Factor;
      p2.velocity.y += ay * p2Factor;
    }
  }
  isEnabled(particle) {
    return particle.options.move.attract.enable;
  }
  reset() {
  }
}
async function loadParticlesAttractInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("particlesAttract", (container) => {
    return Promise.resolve(new Attractor(container));
  }, refresh);
}
const half$1 = 0.5, absorbFactor = 10, minAbsorbFactor = 0;
function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
  const factor = clamp(p1.options.collisions.absorb.speed * delta.factor / absorbFactor, minAbsorbFactor, r2);
  p1.size.value += factor * half$1;
  p2.size.value -= factor;
  if (r2 <= pixelRatio) {
    p2.size.value = 0;
    p2.destroy();
  }
}
function absorb(p1, p2, delta, pixelRatio) {
  const r1 = p1.getRadius(), r2 = p2.getRadius();
  if (r1 === void 0 && r2 !== void 0) {
    p1.destroy();
  } else if (r1 !== void 0 && r2 === void 0) {
    p2.destroy();
  } else if (r1 !== void 0 && r2 !== void 0) {
    if (r1 >= r2) {
      updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
    } else {
      updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
    }
  }
}
const fixBounceSpeed = (p2) => {
  if (p2.collisionMaxSpeed === void 0) {
    p2.collisionMaxSpeed = getRangeValue(p2.options.collisions.maxSpeed);
  }
  if (p2.velocity.length > p2.collisionMaxSpeed) {
    p2.velocity.length = p2.collisionMaxSpeed;
  }
};
function bounce(p1, p2) {
  circleBounce(circleBounceDataFromParticle(p1), circleBounceDataFromParticle(p2));
  fixBounceSpeed(p1);
  fixBounceSpeed(p2);
}
function destroy(p1, p2) {
  if (!p1.unbreakable && !p2.unbreakable) {
    bounce(p1, p2);
  }
  if (p1.getRadius() === void 0 && p2.getRadius() !== void 0) {
    p1.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() === void 0) {
    p2.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() !== void 0) {
    const deleteP = p1.getRadius() >= p2.getRadius() ? p2 : p1;
    deleteP.destroy();
  }
}
function resolveCollision(p1, p2, delta, pixelRatio) {
  switch (p1.options.collisions.mode) {
    case CollisionMode.absorb: {
      absorb(p1, p2, delta, pixelRatio);
      break;
    }
    case CollisionMode.bounce: {
      bounce(p1, p2);
      break;
    }
    case CollisionMode.destroy: {
      destroy(p1, p2);
      break;
    }
  }
}
const double$4 = 2;
class Collider extends ParticlesInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
  }
  interact(p1, delta) {
    if (p1.destroyed || p1.spawning) {
      return;
    }
    const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.quadTree.queryCircle(pos1, radius1 * double$4);
    for (const p2 of query) {
      if (p1 === p2 || !p2.options.collisions.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) {
        continue;
      }
      const pos2 = p2.getPosition(), radius2 = p2.getRadius();
      if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) {
        continue;
      }
      const dist = getDistance(pos1, pos2), distP = radius1 + radius2;
      if (dist > distP) {
        continue;
      }
      resolveCollision(p1, p2, delta, container.retina.pixelRatio);
    }
  }
  isEnabled(particle) {
    return particle.options.collisions.enable;
  }
  reset() {
  }
}
async function loadParticlesCollisionsInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addInteractor("particlesCollisions", (container) => {
    return Promise.resolve(new Collider(container));
  }, refresh);
}
const double$3 = 2;
class CircleWarp extends Circle {
  constructor(x2, y2, radius, canvasSize) {
    super(x2, y2, radius);
    this.canvasSize = canvasSize;
    this.canvasSize = { ...canvasSize };
  }
  contains(point) {
    const { width, height } = this.canvasSize, { x: x2, y: y2 } = point;
    return super.contains(point) || super.contains({ x: x2 - width, y: y2 }) || super.contains({ x: x2 - width, y: y2 - height }) || super.contains({ x: x2, y: y2 - height });
  }
  intersects(range) {
    if (super.intersects(range)) {
      return true;
    }
    const rect = range, circle = range, newPos = {
      x: range.position.x - this.canvasSize.width,
      y: range.position.y - this.canvasSize.height
    };
    if (circle.radius !== void 0) {
      const biggerCircle = new Circle(newPos.x, newPos.y, circle.radius * double$3);
      return super.intersects(biggerCircle);
    } else if (rect.size !== void 0) {
      const rectSW = new Rectangle(newPos.x, newPos.y, rect.size.width * double$3, rect.size.height * double$3);
      return super.intersects(rectSW);
    }
    return false;
  }
}
class LinksShadow {
  constructor() {
    this.blur = 5;
    this.color = new OptionsColor();
    this.color.value = "#000";
    this.enable = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.blur !== void 0) {
      this.blur = data2.blur;
    }
    this.color = OptionsColor.create(this.color, data2.color);
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
  }
}
class LinksTriangle {
  constructor() {
    this.enable = false;
    this.frequency = 1;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.color !== void 0) {
      this.color = OptionsColor.create(this.color, data2.color);
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.frequency !== void 0) {
      this.frequency = data2.frequency;
    }
    if (data2.opacity !== void 0) {
      this.opacity = data2.opacity;
    }
  }
}
class Links {
  constructor() {
    this.blink = false;
    this.color = new OptionsColor();
    this.color.value = "#fff";
    this.consent = false;
    this.distance = 100;
    this.enable = false;
    this.frequency = 1;
    this.opacity = 1;
    this.shadow = new LinksShadow();
    this.triangles = new LinksTriangle();
    this.width = 1;
    this.warp = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.id !== void 0) {
      this.id = data2.id;
    }
    if (data2.blink !== void 0) {
      this.blink = data2.blink;
    }
    this.color = OptionsColor.create(this.color, data2.color);
    if (data2.consent !== void 0) {
      this.consent = data2.consent;
    }
    if (data2.distance !== void 0) {
      this.distance = data2.distance;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.frequency !== void 0) {
      this.frequency = data2.frequency;
    }
    if (data2.opacity !== void 0) {
      this.opacity = data2.opacity;
    }
    this.shadow.load(data2.shadow);
    this.triangles.load(data2.triangles);
    if (data2.width !== void 0) {
      this.width = data2.width;
    }
    if (data2.warp !== void 0) {
      this.warp = data2.warp;
    }
  }
}
const squarePower = 2, opacityOffset = 1, origin$2 = {
  x: 0,
  y: 0
}, minDistance$1 = 0;
function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
  const { dx, dy, distance } = getDistances(pos1, pos2);
  if (!warp || distance <= optDistance) {
    return distance;
  }
  const absDiffs = {
    x: Math.abs(dx),
    y: Math.abs(dy)
  }, warpDistances = {
    x: Math.min(absDiffs.x, canvasSize.width - absDiffs.x),
    y: Math.min(absDiffs.y, canvasSize.height - absDiffs.y)
  };
  return Math.sqrt(warpDistances.x ** squarePower + warpDistances.y ** squarePower);
}
class Linker extends ParticlesInteractorBase {
  constructor(container, engine) {
    super(container);
    this._setColor = (p1) => {
      if (!p1.options.links) {
        return;
      }
      const container2 = this._linkContainer, linksOptions = p1.options.links;
      let linkColor = linksOptions.id === void 0 ? container2.particles.linksColor : container2.particles.linksColors.get(linksOptions.id);
      if (linkColor) {
        return;
      }
      const optColor = linksOptions.color;
      linkColor = getLinkRandomColor(this._engine, optColor, linksOptions.blink, linksOptions.consent);
      if (linksOptions.id === void 0) {
        container2.particles.linksColor = linkColor;
      } else {
        container2.particles.linksColors.set(linksOptions.id, linkColor);
      }
    };
    this._linkContainer = container;
    this._engine = engine;
  }
  clear() {
  }
  init() {
    this._linkContainer.particles.linksColor = void 0;
    this._linkContainer.particles.linksColors = /* @__PURE__ */ new Map();
  }
  interact(p1) {
    if (!p1.options.links) {
      return;
    }
    p1.links = [];
    const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
    if (pos1.x < origin$2.x || pos1.y < origin$2.y || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
      return;
    }
    const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = p1.retina.linksDistance ?? minDistance$1, warp = linkOpt1.warp;
    let range;
    if (warp) {
      range = new CircleWarp(pos1.x, pos1.y, optDistance, canvasSize);
    } else {
      range = new Circle(pos1.x, pos1.y, optDistance);
    }
    const query = container.particles.quadTree.query(range);
    for (const p2 of query) {
      const linkOpt2 = p2.options.links;
      if (p1 === p2 || !(linkOpt2 == null ? void 0 : linkOpt2.enable) || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || !p2.links || p1.links.some((t2) => t2.destination === p2) || p2.links.some((t2) => t2.destination === p1)) {
        continue;
      }
      const pos2 = p2.getPosition();
      if (pos2.x < origin$2.x || pos2.y < origin$2.y || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
        continue;
      }
      const distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);
      if (distance > optDistance) {
        continue;
      }
      const opacityLine = (opacityOffset - distance / optDistance) * optOpacity;
      this._setColor(p1);
      p1.links.push({
        destination: p2,
        opacity: opacityLine
      });
    }
  }
  isEnabled(particle) {
    var _a;
    return !!((_a = particle.options.links) == null ? void 0 : _a.enable);
  }
  loadParticlesOptions(options, ...sources) {
    if (!options.links) {
      options.links = new Links();
    }
    for (const source of sources) {
      options.links.load(source == null ? void 0 : source.links);
    }
  }
  reset() {
  }
}
async function loadLinksInteraction(engine, refresh = true) {
  await engine.addInteractor("particlesLinks", async (container) => {
    return Promise.resolve(new Linker(container, engine));
  }, refresh);
}
function drawTriangle(context, p1, p2, p3) {
  context.beginPath();
  context.moveTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.lineTo(p3.x, p3.y);
  context.closePath();
}
function drawLinkLine(params) {
  let drawn = false;
  const { begin, end, engine, maxDistance, context, canvasSize, width, backgroundMask, colorLine, opacity, links } = params;
  if (getDistance(begin, end) <= maxDistance) {
    drawLine$1(context, begin, end);
    drawn = true;
  } else if (links.warp) {
    let pi1;
    let pi2;
    const endNE = {
      x: end.x - canvasSize.width,
      y: end.y
    };
    const d1 = getDistances(begin, endNE);
    if (d1.distance <= maxDistance) {
      const yi = begin.y - d1.dy / d1.dx * begin.x;
      pi1 = { x: 0, y: yi };
      pi2 = { x: canvasSize.width, y: yi };
    } else {
      const endSW = {
        x: end.x,
        y: end.y - canvasSize.height
      };
      const d2 = getDistances(begin, endSW);
      if (d2.distance <= maxDistance) {
        const yi = begin.y - d2.dy / d2.dx * begin.x;
        const xi = -yi / (d2.dy / d2.dx);
        pi1 = { x: xi, y: 0 };
        pi2 = { x: xi, y: canvasSize.height };
      } else {
        const endSE = {
          x: end.x - canvasSize.width,
          y: end.y - canvasSize.height
        };
        const d3 = getDistances(begin, endSE);
        if (d3.distance <= maxDistance) {
          const yi = begin.y - d3.dy / d3.dx * begin.x;
          const xi = -yi / (d3.dy / d3.dx);
          pi1 = { x: xi, y: yi };
          pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
        }
      }
    }
    if (pi1 && pi2) {
      drawLine$1(context, begin, pi1);
      drawLine$1(context, end, pi2);
      drawn = true;
    }
  }
  if (!drawn) {
    return;
  }
  context.lineWidth = width;
  if (backgroundMask.enable) {
    context.globalCompositeOperation = backgroundMask.composite;
  }
  context.strokeStyle = getStyleFromRgb(colorLine, opacity);
  const { shadow } = links;
  if (shadow.enable) {
    const shadowColor = rangeColorToRgb(engine, shadow.color);
    if (shadowColor) {
      context.shadowBlur = shadow.blur;
      context.shadowColor = getStyleFromRgb(shadowColor);
    }
  }
  context.stroke();
}
function drawLinkTriangle(params) {
  const { context, pos1, pos2, pos3, backgroundMask, colorTriangle, opacityTriangle } = params;
  drawTriangle(context, pos1, pos2, pos3);
  if (backgroundMask.enable) {
    context.globalCompositeOperation = backgroundMask.composite;
  }
  context.fillStyle = getStyleFromRgb(colorTriangle, opacityTriangle);
  context.fill();
}
function getLinkKey(ids) {
  ids.sort((a2, b2) => a2 - b2);
  return ids.join("_");
}
function setLinkFrequency(particles, dictionary) {
  const key = getLinkKey(particles.map((t2) => t2.id));
  let res = dictionary.get(key);
  if (res === void 0) {
    res = getRandom();
    dictionary.set(key, res);
  }
  return res;
}
const minOpacity = 0, minWidth = 0, minDistance = 0, half = 0.5, maxFrequency = 1;
class LinkInstance {
  constructor(container, engine) {
    this._drawLinkLine = (p1, link) => {
      const p1LinksOptions = p1.options.links;
      if (!(p1LinksOptions == null ? void 0 : p1LinksOptions.enable)) {
        return;
      }
      const container2 = this._container, options = container2.actualOptions, p2 = link.destination, pos1 = p1.getPosition(), pos2 = p2.getPosition();
      let opacity = link.opacity;
      container2.canvas.draw((ctx) => {
        var _a;
        let colorLine;
        const twinkle = (_a = p1.options.twinkle) == null ? void 0 : _a.lines;
        if (twinkle == null ? void 0 : twinkle.enable) {
          const twinkleFreq = twinkle.frequency, twinkleRgb = rangeColorToRgb(this._engine, twinkle.color), twinkling = getRandom() < twinkleFreq;
          if (twinkling && twinkleRgb) {
            colorLine = twinkleRgb;
            opacity = getRangeValue(twinkle.opacity);
          }
        }
        if (!colorLine) {
          const linkColor = p1LinksOptions.id !== void 0 ? container2.particles.linksColors.get(p1LinksOptions.id) : container2.particles.linksColor;
          colorLine = getLinkColor(p1, p2, linkColor);
        }
        if (!colorLine) {
          return;
        }
        const width = p1.retina.linksWidth ?? minWidth, maxDistance = p1.retina.linksDistance ?? minDistance, { backgroundMask } = options;
        drawLinkLine({
          context: ctx,
          width,
          begin: pos1,
          end: pos2,
          engine: this._engine,
          maxDistance,
          canvasSize: container2.canvas.size,
          links: p1LinksOptions,
          backgroundMask,
          colorLine,
          opacity
        });
      });
    };
    this._drawLinkTriangle = (p1, link1, link2) => {
      const linksOptions = p1.options.links;
      if (!(linksOptions == null ? void 0 : linksOptions.enable)) {
        return;
      }
      const triangleOptions = linksOptions.triangles;
      if (!triangleOptions.enable) {
        return;
      }
      const container2 = this._container, options = container2.actualOptions, p2 = link1.destination, p3 = link2.destination, opacityTriangle = triangleOptions.opacity ?? (link1.opacity + link2.opacity) * half;
      if (opacityTriangle <= minOpacity) {
        return;
      }
      container2.canvas.draw((ctx) => {
        const pos1 = p1.getPosition(), pos2 = p2.getPosition(), pos3 = p3.getPosition(), linksDistance = p1.retina.linksDistance ?? minDistance;
        if (getDistance(pos1, pos2) > linksDistance || getDistance(pos3, pos2) > linksDistance || getDistance(pos3, pos1) > linksDistance) {
          return;
        }
        let colorTriangle = rangeColorToRgb(this._engine, triangleOptions.color);
        if (!colorTriangle) {
          const linkColor = linksOptions.id !== void 0 ? container2.particles.linksColors.get(linksOptions.id) : container2.particles.linksColor;
          colorTriangle = getLinkColor(p1, p2, linkColor);
        }
        if (!colorTriangle) {
          return;
        }
        drawLinkTriangle({
          context: ctx,
          pos1,
          pos2,
          pos3,
          backgroundMask: options.backgroundMask,
          colorTriangle,
          opacityTriangle
        });
      });
    };
    this._drawTriangles = (options, p1, link, p1Links) => {
      var _a, _b, _c;
      const p2 = link.destination;
      if (!(((_a = options.links) == null ? void 0 : _a.triangles.enable) && ((_b = p2.options.links) == null ? void 0 : _b.triangles.enable))) {
        return;
      }
      const vertices = (_c = p2.links) == null ? void 0 : _c.filter((t2) => {
        const linkFreq = this._getLinkFrequency(p2, t2.destination), minCount = 0;
        return p2.options.links && linkFreq <= p2.options.links.frequency && p1Links.findIndex((l2) => l2.destination === t2.destination) >= minCount;
      });
      if (!(vertices == null ? void 0 : vertices.length)) {
        return;
      }
      for (const vertex of vertices) {
        const p3 = vertex.destination, triangleFreq = this._getTriangleFrequency(p1, p2, p3);
        if (triangleFreq > options.links.triangles.frequency) {
          continue;
        }
        this._drawLinkTriangle(p1, link, vertex);
      }
    };
    this._getLinkFrequency = (p1, p2) => {
      return setLinkFrequency([p1, p2], this._freqs.links);
    };
    this._getTriangleFrequency = (p1, p2, p3) => {
      return setLinkFrequency([p1, p2, p3], this._freqs.triangles);
    };
    this._container = container;
    this._engine = engine;
    this._freqs = {
      links: /* @__PURE__ */ new Map(),
      triangles: /* @__PURE__ */ new Map()
    };
  }
  drawParticle(context, particle) {
    const { links, options } = particle;
    if (!(links == null ? void 0 : links.length)) {
      return;
    }
    const p1Links = links.filter((l2) => options.links && (options.links.frequency >= maxFrequency || this._getLinkFrequency(particle, l2.destination) <= options.links.frequency));
    for (const link of p1Links) {
      this._drawTriangles(options, particle, link, p1Links);
      if (link.opacity > minOpacity && (particle.retina.linksWidth ?? minWidth) > minWidth) {
        this._drawLinkLine(particle, link);
      }
    }
  }
  async init() {
    this._freqs.links = /* @__PURE__ */ new Map();
    this._freqs.triangles = /* @__PURE__ */ new Map();
    await Promise.resolve();
  }
  particleCreated(particle) {
    particle.links = [];
    if (!particle.options.links) {
      return;
    }
    const ratio = this._container.retina.pixelRatio, { retina } = particle, { distance, width } = particle.options.links;
    retina.linksDistance = distance * ratio;
    retina.linksWidth = width * ratio;
  }
  particleDestroyed(particle) {
    particle.links = [];
  }
}
class LinksPlugin {
  constructor(engine) {
    this.id = "links";
    this._engine = engine;
  }
  getPlugin(container) {
    return Promise.resolve(new LinkInstance(container, this._engine));
  }
  loadOptions() {
  }
  needsPlugin() {
    return true;
  }
}
async function loadLinksPlugin(engine, refresh = true) {
  const plugin2 = new LinksPlugin(engine);
  await engine.addPlugin(plugin2, refresh);
}
async function loadParticlesLinksInteraction(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await loadLinksInteraction(engine, refresh);
  await loadLinksPlugin(engine, refresh);
}
const piDeg = 180, origin$1 = { x: 0, y: 0 }, sidesOffset = 2;
function drawPolygon(data2, start2, side) {
  const { context } = data2, sideCount = side.count.numerator * side.count.denominator, decimalSides = side.count.numerator / side.count.denominator, interiorAngleDegrees = piDeg * (decimalSides - sidesOffset) / decimalSides, interiorAngle = Math.PI - degToRad(interiorAngleDegrees);
  if (!context) {
    return;
  }
  context.beginPath();
  context.translate(start2.x, start2.y);
  context.moveTo(origin$1.x, origin$1.y);
  for (let i2 = 0; i2 < sideCount; i2++) {
    context.lineTo(side.length, origin$1.y);
    context.translate(side.length, origin$1.y);
    context.rotate(interiorAngle);
  }
}
const defaultSides$1 = 5;
class PolygonDrawerBase {
  draw(data2) {
    const { particle, radius } = data2, start2 = this.getCenter(particle, radius), side = this.getSidesData(particle, radius);
    drawPolygon(data2, start2, side);
  }
  getSidesCount(particle) {
    const polygon = particle.shapeData;
    return Math.round(getRangeValue((polygon == null ? void 0 : polygon.sides) ?? defaultSides$1));
  }
}
const sidesCenterFactor = 3.5, yFactor$1 = 2.66, sidesFactor = 3;
class PolygonDrawer extends PolygonDrawerBase {
  constructor() {
    super(...arguments);
    this.validTypes = ["polygon"];
  }
  getCenter(particle, radius) {
    return {
      x: -radius / (particle.sides / sidesCenterFactor),
      y: -radius / (yFactor$1 / sidesCenterFactor)
    };
  }
  getSidesData(particle, radius) {
    const sides2 = particle.sides;
    return {
      count: {
        denominator: 1,
        numerator: sides2
      },
      length: radius * yFactor$1 / (sides2 / sidesFactor)
    };
  }
}
const yFactor = 1.66, sides$1 = 3, double$2 = 2;
class TriangleDrawer extends PolygonDrawerBase {
  constructor() {
    super(...arguments);
    this.validTypes = ["triangle"];
  }
  getCenter(particle, radius) {
    return {
      x: -radius,
      y: radius / yFactor
    };
  }
  getSidesCount() {
    return sides$1;
  }
  getSidesData(particle, radius) {
    const diameter = radius * double$2;
    return {
      count: {
        denominator: 2,
        numerator: 3
      },
      length: diameter
    };
  }
}
async function loadGenericPolygonShape(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addShape(new PolygonDrawer(), refresh);
}
async function loadTriangleShape(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addShape(new TriangleDrawer(), refresh);
}
async function loadPolygonShape(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await loadGenericPolygonShape(engine, refresh);
  await loadTriangleShape(engine, refresh);
}
class RotateAnimation {
  constructor() {
    this.enable = false;
    this.speed = 0;
    this.decay = 0;
    this.sync = false;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    if (data2.enable !== void 0) {
      this.enable = data2.enable;
    }
    if (data2.speed !== void 0) {
      this.speed = setRangeValue(data2.speed);
    }
    if (data2.decay !== void 0) {
      this.decay = setRangeValue(data2.decay);
    }
    if (data2.sync !== void 0) {
      this.sync = data2.sync;
    }
  }
}
class Rotate extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new RotateAnimation();
    this.direction = RotateDirection.clockwise;
    this.path = false;
    this.value = 0;
  }
  load(data2) {
    if (isNull(data2)) {
      return;
    }
    super.load(data2);
    if (data2.direction !== void 0) {
      this.direction = data2.direction;
    }
    this.animation.load(data2.animation);
    if (data2.path !== void 0) {
      this.path = data2.path;
    }
  }
}
const double$1 = 2, doublePI = Math.PI * double$1, identity = 1, doublePIDeg = 360;
class RotateUpdater {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const rotateOptions = particle.options.rotate;
    if (!rotateOptions) {
      return;
    }
    particle.rotate = {
      enable: rotateOptions.animation.enable,
      value: degToRad(getRangeValue(rotateOptions.value)),
      min: 0,
      max: doublePI
    };
    particle.pathRotation = rotateOptions.path;
    let rotateDirection = rotateOptions.direction;
    if (rotateDirection === RotateDirection.random) {
      const index = Math.floor(getRandom() * double$1), minIndex = 0;
      rotateDirection = index > minIndex ? RotateDirection.counterClockwise : RotateDirection.clockwise;
    }
    switch (rotateDirection) {
      case RotateDirection.counterClockwise:
      case "counterClockwise":
        particle.rotate.status = AnimationStatus.decreasing;
        break;
      case RotateDirection.clockwise:
        particle.rotate.status = AnimationStatus.increasing;
        break;
    }
    const rotateAnimation = rotateOptions.animation;
    if (rotateAnimation.enable) {
      particle.rotate.decay = identity - getRangeValue(rotateAnimation.decay);
      particle.rotate.velocity = getRangeValue(rotateAnimation.speed) / doublePIDeg * this.container.retina.reduceFactor;
      if (!rotateAnimation.sync) {
        particle.rotate.velocity *= getRandom();
      }
    }
    particle.rotation = particle.rotate.value;
  }
  isEnabled(particle) {
    const rotate = particle.options.rotate;
    if (!rotate) {
      return false;
    }
    return !particle.destroyed && !particle.spawning && (!!rotate.value || rotate.animation.enable || rotate.path);
  }
  loadOptions(options, ...sources) {
    if (!options.rotate) {
      options.rotate = new Rotate();
    }
    for (const source of sources) {
      options.rotate.load(source == null ? void 0 : source.rotate);
    }
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    particle.isRotating = !!particle.rotate;
    if (!particle.rotate) {
      return;
    }
    updateAnimation(particle, particle.rotate, false, DestroyType.none, delta);
    particle.rotation = particle.rotate.value;
  }
}
async function loadRotateUpdater(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addParticleUpdater("rotate", (container) => {
    return Promise.resolve(new RotateUpdater(container));
  }, refresh);
}
const fixFactorSquared = 2, fixFactor = Math.sqrt(fixFactorSquared), double = 2;
function drawSquare(data2) {
  const { context, radius } = data2, fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * double;
  context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
}
const sides = 4;
class SquareDrawer {
  constructor() {
    this.validTypes = ["edge", "square"];
  }
  draw(data2) {
    drawSquare(data2);
  }
  getSidesCount() {
    return sides;
  }
}
async function loadSquareShape(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addShape(new SquareDrawer(), refresh);
}
const defaultInset$1 = 2, origin = { x: 0, y: 0 };
function drawStar(data2) {
  const { context, particle, radius } = data2, sides2 = particle.sides, inset = particle.starInset ?? defaultInset$1;
  context.moveTo(origin.x, origin.y - radius);
  for (let i2 = 0; i2 < sides2; i2++) {
    context.rotate(Math.PI / sides2);
    context.lineTo(origin.x, origin.y - radius * inset);
    context.rotate(Math.PI / sides2);
    context.lineTo(origin.x, origin.y - radius);
  }
}
const defaultInset = 2, defaultSides = 5;
class StarDrawer {
  constructor() {
    this.validTypes = ["star"];
  }
  draw(data2) {
    drawStar(data2);
  }
  getSidesCount(particle) {
    const star = particle.shapeData;
    return Math.round(getRangeValue((star == null ? void 0 : star.sides) ?? defaultSides));
  }
  particleInit(container, particle) {
    const star = particle.shapeData;
    particle.starInset = getRangeValue((star == null ? void 0 : star.inset) ?? defaultInset);
  }
}
async function loadStarShape(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addShape(new StarDrawer(), refresh);
}
const defaultOpacity = 1;
class StrokeColorUpdater {
  constructor(container, engine) {
    this._container = container;
    this._engine = engine;
  }
  init(particle) {
    var _a;
    const container = this._container, options = particle.options;
    const stroke = itemFromSingleOrMultiple(options.stroke, particle.id, options.reduceDuplicates);
    particle.strokeWidth = getRangeValue(stroke.width) * container.retina.pixelRatio;
    particle.strokeOpacity = getRangeValue(stroke.opacity ?? defaultOpacity);
    particle.strokeAnimation = (_a = stroke.color) == null ? void 0 : _a.animation;
    const strokeHslColor = rangeColorToHsl(this._engine, stroke.color) ?? particle.getFillColor();
    if (strokeHslColor) {
      particle.strokeColor = getHslAnimationFromHsl(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
    }
  }
  isEnabled(particle) {
    const color = particle.strokeAnimation, { strokeColor } = particle;
    return !particle.destroyed && !particle.spawning && !!color && ((strokeColor == null ? void 0 : strokeColor.h.value) !== void 0 && strokeColor.h.enable || (strokeColor == null ? void 0 : strokeColor.s.value) !== void 0 && strokeColor.s.enable || (strokeColor == null ? void 0 : strokeColor.l.value) !== void 0 && strokeColor.l.enable);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateColor(particle.strokeColor, delta);
  }
}
async function loadStrokeColorUpdater(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await engine.addParticleUpdater("strokeColor", (container) => {
    return Promise.resolve(new StrokeColorUpdater(container, engine));
  }, refresh);
}
async function loadSlim(engine, refresh = true) {
  assertValidVersion(engine, "3.7.1");
  await loadParallaxMover(engine, false);
  await loadExternalAttractInteraction(engine, false);
  await loadExternalBounceInteraction(engine, false);
  await loadExternalBubbleInteraction(engine, false);
  await loadExternalConnectInteraction(engine, false);
  await loadExternalGrabInteraction(engine, false);
  await loadExternalPauseInteraction(engine, false);
  await loadExternalPushInteraction(engine, false);
  await loadExternalRemoveInteraction(engine, false);
  await loadExternalRepulseInteraction(engine, false);
  await loadExternalSlowInteraction(engine, false);
  await loadParticlesAttractInteraction(engine, false);
  await loadParticlesCollisionsInteraction(engine, false);
  await loadParticlesLinksInteraction(engine, false);
  await loadEasingQuadPlugin(engine, false);
  await loadEmojiShape(engine, false);
  await loadImageShape(engine, false);
  await loadLineShape(engine, false);
  await loadPolygonShape(engine, false);
  await loadSquareShape(engine, false);
  await loadStarShape(engine, false);
  await loadLifeUpdater(engine, false);
  await loadRotateUpdater(engine, false);
  await loadStrokeColorUpdater(engine, false);
  await loadBasic(engine, refresh);
}
window.htmx = htmx;
window.Alpine = module_default;
async function loadParticles(options) {
  await loadSlim(tsParticles);
  await tsParticles.load({ id: "tsparticles", options });
}
const configs = {
  particles: {
    number: { value: 100 },
    color: { value: "#ffffff" },
    links: { enable: true, distance: 200 },
    shape: { type: "circle" },
    opacity: { value: 1 },
    size: { value: { min: 4, max: 6 } },
    move: { enable: true, speed: 0.5 }
  },
  background: { color: "#f3f4f6" },
  poisson: { enable: true }
};
loadParticles(configs);
module_default.start();
window.particlesInitialized = true;
document.body.addEventListener("htmx:historyRestore", () => {
  loadParticles(configs);
});
