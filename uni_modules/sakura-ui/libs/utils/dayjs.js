/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.17.1.
 * Original file: /npm/dayjs@1.11.8/dayjs.min.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ?
	global : "undefined" != typeof self && self;
var t = { exports: {} },
	e = t.exports = function() { var t = 1e3,
			e = 6e4,
			n = 36e5,
			r = "millisecond",
			i = "second",
			s = "minute",
			u = "hour",
			a = "day",
			o = "week",
			f = "month",
			h = "quarter",
			c = "year",
			d = "date",
			l = "Invalid Date",
			$ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
			y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
			M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
						"_"), ordinal: function(t) { var e = ["th", "st", "nd", "rd"],
						n = t % 100; return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]" } },
			g = function(t, e, n) { var r = String(t); return !r || r.length >= e ? t : "" + Array(e + 1 - r.length)
					.join(n) + t },
			v = { s: g, z: function(t) { var e = -t.utcOffset(),
						n = Math.abs(e),
						r = Math.floor(n / 60),
						i = n % 60; return (e <= 0 ? "+" : "-") + g(r, 2, "0") + ":" + g(i, 2, "0") }, m: function t(e,
						n) { if (e.date() < n.date()) return -t(n, e); var r = 12 * (n.year() - e.year()) + (n.month() -
								e.month()),
							i = e.clone().add(r, f),
							s = n - i < 0,
							u = e.clone().add(r + (s ? -1 : 1), f); return +(-(r + (n - i) / (s ? i - u : u - i)) ||
						0) }, a: function(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }, p: function(
				t) { return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h } [t] || String(t || "")
						.toLowerCase().replace(/s$/, "") }, u: function(t) { return void 0 === t } },
			m = "en",
			D = {};
		D[m] = M; var p = function(t) { return t instanceof _ },
			S = function t(e, n, r) { var i; if (!e) return m; if ("string" == typeof e) { var s = e.toLowerCase();
					D[s] && (i = s), n && (D[s] = n, i = s); var u = e.split("-"); if (!i && u.length > 1) return t(u[
						0]) } else { var a = e.name;
					D[a] = e, i = a } return !r && i && (m = i), i || !r && m },
			w = function(t, e) { if (p(t)) return t.clone(); var n = "object" == typeof e ? e : {}; return n.date = t, n
					.args = arguments, new _(n) },
			O = v;
		O.l = S, O.i = p, O.w = function(t, e) { return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e
				.$offset }) }; var _ = function() {
				function M(t) { this.$L = S(t.locale, null, !0), this.parse(t) } var g = M.prototype; return g.parse =
					function(t) { this.$d = function(t) { var e = t.date,
									n = t.utc; if (null === e) return new Date(NaN); if (O.u(e)) return new Date; if (
									e instanceof Date) return new Date(e); if ("string" == typeof e && !/Z$/i.test(
									e)) { var r = e.match($); if (r) { var i = r[2] - 1 || 0,
											s = (r[7] || "0").substring(0, 3); return n ? new Date(Date.UTC(r[1], i, r[
											3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[
											3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s) } } return new Date(e) }(t),
							this.$x = t.x || {}, this.init() }, g.init = function() { var t = this.$d;
						this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(),
							this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t
							.getMilliseconds() }, g.$utils = function() { return O }, g.isValid = function() { return !(
							this.$d.toString() === l) }, g.isSame = function(t, e) { var n = w(t); return this.startOf(
							e) <= n && n <= this.endOf(e) }, g.isAfter = function(t, e) { return w(t) < this.startOf(
						e) }, g.isBefore = function(t, e) { return this.endOf(e) < w(t) }, g.$g = function(t, e,
					n) { return O.u(t) ? this[e] : this.set(n, t) }, g.unix = function() { return Math.floor(this
							.valueOf() / 1e3) }, g.valueOf = function() { return this.$d.getTime() }, g.startOf =
					function(t, e) { var n = this,
							r = !!O.u(e) || e,
							h = O.p(t),
							l = function(t, e) { var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
								n); return r ? i : i.endOf(a) },
							$ = function(t, e) { return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23,
									59, 59, 999
								]).slice(e)), n) },
							y = this.$W,
							M = this.$M,
							g = this.$D,
							v = "set" + (this.$u ? "UTC" : ""); switch (h) {
							case c:
								return r ? l(1, 0) : l(31, 11);
							case f:
								return r ? l(1, M) : l(0, M + 1);
							case o:
								var m = this.$locale().weekStart || 0,
									D = (y < m ? y + 7 : y) - m; return l(r ? g - D : g + (6 - D), M);
							case a:
							case d:
								return $(v + "Hours", 0);
							case u:
								return $(v + "Minutes", 1);
							case s:
								return $(v + "Seconds", 2);
							case i:
								return $(v + "Milliseconds", 3);
							default:
								return this.clone() } }, g.endOf = function(t) { return this.startOf(t, !1) }, g.$set =
					function(t, e) { var n, o = O.p(t),
							h = "set" + (this.$u ? "UTC" : ""),
							l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h +
								"FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h +
								"Milliseconds", n)[o],
							$ = o === a ? this.$D + (e - this.$W) : e; if (o === f || o === c) { var y = this.clone()
								.set(d, 1);
							y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d } else l &&
							this.$d[l]($); return this.init(), this }, g.set = function(t, e) { return this.clone()
							.$set(t, e) }, g.get = function(t) { return this[O.p(t)]() }, g.add = function(r, h) { var
							d, l = this;
						r = Number(r); var $ = O.p(h),
							y = function(t) { var e = w(l); return O.w(e.date(e.date() + Math.round(t * r)), l) }; if (
							$ === f) return this.set(f, this.$M + r); if ($ === c) return this.set(c, this.$y + r); if (
							$ === a) return y(1); if ($ === o) return y(7); var M = (d = {}, d[s] = e, d[u] = n, d[i] =
								t, d)[$] || 1,
							g = this.$d.getTime() + r * M; return O.w(g, this) }, g.subtract = function(t,
					e) { return this.add(-1 * t, e) }, g.format = function(t) { var e = this,
							n = this.$locale(); if (!this.isValid()) return n.invalidDate || l; var r = t ||
							"YYYY-MM-DDTHH:mm:ssZ",
							i = O.z(this),
							s = this.$H,
							u = this.$m,
							a = this.$M,
							o = n.weekdays,
							f = n.months,
							h = function(t, n, i, s) { return t && (t[n] || t(e, r)) || i[n].slice(0, s) },
							c = function(t) { return O.s(s % 12 || 12, t, "0") },
							d = n.meridiem || function(t, e, n) { var r = t < 12 ? "AM" : "PM"; return n ? r
									.toLowerCase() : r },
							$ = { YY: String(this.$y).slice(-2), YYYY: O.s(this.$y, 4, "0"), M: a + 1, MM: O.s(a + 1, 2,
									"0"), MMM: h(n.monthsShort, a, f, 3), MMMM: h(f, a), D: this.$D, DD: O.s(this.$D, 2,
									"0"), d: String(this.$W), dd: h(n.weekdaysMin, this.$W, o, 2), ddd: h(n
									.weekdaysShort, this.$W, o, 3), dddd: o[this.$W], H: String(s), HH: O.s(s, 2, "0"),
								h: c(1), hh: c(2), a: d(s, u, !0), A: d(s, u, !1), m: String(u), mm: O.s(u, 2, "0"),
								s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"),
							Z: i }; return r.replace(y, (function(t, e) { return e || $[t] || i.replace(":", "") })) },
					g.utcOffset = function() { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, g.diff =
					function(r, d, l) { var $, y = O.p(d),
							M = w(r),
							g = (M.utcOffset() - this.utcOffset()) * e,
							v = this - M,
							m = O.m(this, M); return m = ($ = {}, $[c] = m / 12, $[f] = m, $[h] = m / 3, $[o] = (v -
								g) / 6048e5, $[a] = (v - g) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] ||
							v, l ? m : O.a(m) }, g.daysInMonth = function() { return this.endOf(f).$D }, g.$locale =
					function() { return D[this.$L] }, g.locale = function(t, e) { if (!t) return this.$L; var n = this
							.clone(),
							r = S(t, e, !0); return r && (n.$L = r), n }, g.clone = function() { return O.w(this.$d,
							this) }, g.toDate = function() { return new Date(this.valueOf()) }, g.toJSON =
				function() { return this.isValid() ? this.toISOString() : null }, g.toISOString =
				function() { return this.$d.toISOString() }, g.toString = function() { return this.$d.toUTCString() },
					M }(),
			b = _.prototype; return w.prototype = b, [
			["$ms", r],
			["$s", i],
			["$m", s],
			["$H", u],
			["$W", a],
			["$M", f],
			["$y", c],
			["$D", d]
		].forEach((function(t) { b[t[1]] = function(e) { return this.$g(e, t[0], t[1]) } })), w.extend = function(t,
			e) { return t.$i || (t(e, _, w), t.$i = !0), w }, w.locale = S, w.isDayjs = p, w.unix = function(
		t) { return w(1e3 * t) }, w.en = D[m], w.Ls = D, w.p = {}, w }();
export { e as default };
//# sourceMappingURL=/sm/61e5363da64d9cb3b951ea8c25d8622653f5004780d4f023d03311dd5fd1beca.map
