import { defineComponent as O, unref as m, openBlock as d, createBlock as I, resolveDynamicComponent as N, withCtx as h, renderSlot as v, nextTick as st, watch as ie, inject as Q, provide as W, ref as $, onMounted as J, onBeforeUnmount as te, withDirectives as Me, createElementBlock as b, vShow as Ve, mergeProps as B, createTextVNode as H, resolveComponent as x, normalizeProps as T, guardReactiveProps as q, createVNode as L, computed as V, createSlots as rt, Fragment as ve, toDisplayString as K, renderList as xe, createCommentVNode as j, defineExpose as at, createElementVNode as S, normalizeStyle as A, normalizeClass as ue, pushScopeId as lt, popScopeId as ut, h as Y, shallowRef as it } from "vue";
const ct = {
  tag: {
    type: String
  }
}, dt = O({
  name: "View",
  props: ct,
  setup(e) {
    return {
      componentName: m(e.tag)
    };
  }
}), P = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
};
function ft(e, n, t, o, r, s) {
  return d(), I(N(e.componentName), null, {
    default: h(() => [
      v(e.$slots, "default")
    ]),
    _: 3
  });
}
const pt = /* @__PURE__ */ P(dt, [["render", ft]]);
var E = /* @__PURE__ */ ((e) => (e.CONFIG_KEY = "__config__", e.FORM_VISIBLE = "__form_visible__", e.COMPONENT_PARENT_DATA_ID = "__component_parent_data_id__", e.LAYOUT_CONFIG = "__layout_config__", e.USER_INFO = "__user__info__", e.USER_LOCAL_STORE_KEY = "__user_info__", e.TOKEN_LOCAL_KEY = "__TOKEN_", e.LOCAL_PROJECT_ID = "__PROJECT_ID__", e.QUERY_PARAMS = "__query_params__", e.USE_GRIDE_ITEM = "__use_grid_item__", e))(E || {});
const _t = Object.prototype.toString;
function Z(e, n) {
  return _t.call(e) === `[object ${n}]`;
}
function oe(e) {
  return Z(e, "Function") || Z(e, "AsyncFunction");
}
const Re = (e) => e !== null && Z(e, "Object");
function mt(e) {
  return Z(e, "Number");
}
function ke(e) {
  return Z(e, "Promise");
}
function $e(e) {
  return Z(e, "String");
}
function ht(e) {
  return Z(e, "Boolean");
}
function Te(e) {
  return e && Array.isArray(e);
}
function vt(e) {
  const n = e.split(":");
  return {
    dataId: n[0],
    type: n[1]
  };
}
function Ae(e, n) {
  st(() => {
    e && e.value ? e.value.setOptions(n) : ie(
      () => e == null ? void 0 : e.value,
      () => {
        e.value && e.value.setOptions(n);
      }
    );
  });
}
function gt(e, n) {
  const t = { ...e };
  return Object.keys(n || {}).forEach((o) => {
    n[o] && (t[o] = n[o]);
  }), t;
}
function ce(e, n, t) {
  if (oe(e)) {
    const o = e(t) || [];
    if (ke(o)) {
      o.then((r) => {
        n && n(r);
      });
      return;
    } else {
      n && n(o);
      return;
    }
  } else if (Te(e)) {
    n && n(e || []);
    return;
  }
  n(e);
}
function yt(e, n = "yyyy-MM-dd hh:mm:ss") {
  let t = $t(e), o = t.hour < 12 ? "\u4E0A\u5348" : "\u4E0B\u5348", r = t.hour < 12 ? "AM" : "PM";
  var s = n.replace(/yyyy/g, t.year).replace(/MM/g, t.month).replace(/dd/g, t.day).replace(/hh/g, t.hour).replace(/mm/g, t.minute).replace(/ss/g, t.seconds).replace(/a/g, o).replace(/A/g, r);
  return s;
}
function $t(e) {
  let n, t;
  return $e(e) ? (n = parseInt(e), e.trim().length <= 10 && (n = n * 1e3)) : mt(e) ? (n = e, (e + "").length <= 10 && (n = n * 1e3)) : t = e, t || (t = new Date(n)), {
    year: t.getFullYear(),
    month: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
    day: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
    hour: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
    minute: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
    seconds: t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds(),
    milliseconds: t.getMilliseconds(),
    quarter: Math.floor((t.getMonth() + 3) / 3)
  };
}
function de() {
  return Q(E.LAYOUT_CONFIG);
}
function D() {
  return Q(E.CONFIG_KEY);
}
function Ot(e) {
  e && W(E.COMPONENT_PARENT_DATA_ID, e);
}
function St() {
  const e = Q(E.QUERY_PARAMS);
  return e ? {
    params: e.value
  } : null;
}
function U(e, n) {
  return e ? `${e}-${n}` : n;
}
function fe(e) {
  return e === "n";
}
function bt() {
  const e = Q(E.FORM_VISIBLE);
  return e === !1 || e === !0 ? e : !0;
}
function ee() {
  return Q(E.COMPONENT_PARENT_DATA_ID) || null;
}
function Ue(e) {
  e && e.start && e.start();
}
function ae(e) {
  e && e.done && e.done();
}
function he(e) {
  e && e.close && e.close();
}
function ze(e, n) {
  e && e.error && e.error(n);
}
const Ct = {
  namespace: {
    type: String,
    default: "n"
  },
  config: {
    type: Object,
    default: () => {
    }
  }
};
var C = /* @__PURE__ */ ((e) => (e.OPEN = "open", e.DONE = "done", e.CLOSE = "close", e.DATA_REFRESH = "data-refresh", e.SUBMIT = "submit", e.CANCLE = "cancle", e.RESET = "reset", e.MENU_CLICK = "menu-click", e))(C || {});
function It(e, n, t) {
  if (!e) {
    ae(n), he(n);
    return;
  }
  ke(e) ? e.then(() => {
    ae(n), he(n), t && t();
  }).catch((o) => ze(n, o)) : oe(e) && (e(), ae(n), he(n));
}
var ge = /* @__PURE__ */ ((e) => (e.BACKGROUND_COLOR = "#f0f2f5", e.MENU_BACKGROUND_COLOR = "#001529", e))(ge || {});
const Fe = {
  onLoad: Function
};
var ye = /* @__PURE__ */ ((e) => (e.BLANK = "_blank", e.SLEF = "_self", e))(ye || {});
function ne(e) {
  if (!e)
    return;
  let n = e.url;
  n.indexOf("?") == -1 && (n = n + "?");
  let t = "";
  return Object.keys(e.query || {}).forEach((o) => {
    const r = e.query[o];
    t = o + "=" + (r || "") + "&";
  }), t && (t = t.substring(0, t.length - 1)), n.endsWith("&") || n.endsWith("?") ? n + t : n + "&" + t;
}
function wt(e, n) {
  if (n) {
    const t = ne(n);
    if (t) {
      window.open(t, n.target ? n.target : ye.BLANK);
      return;
    }
  }
}
var le = /* @__PURE__ */ ((e) => (e.TAB = "tab", e.COLUMN = "column", e))(le || {});
function Et(e) {
  return {
    setPropValue: (n, t) => {
      e.formValue.value[n] = t, je(e.refs[n]);
    },
    getPropValue: (n) => e.formValue.value[n],
    getValues: (n) => At(e, n),
    scrollToProp: (n) => kt(e.refs[n]),
    reset: () => xt(e)
  };
}
function je(e) {
  e.el.updateValue();
}
function xt(e) {
  Object.keys(e.oldFormValue).forEach((n) => {
    e.formValue.value[n] = e.oldFormValue[n], je(e.refs[n]);
  });
}
function kt(e) {
  !e || !e.el || e.el.scrollTo();
}
function At(e, n) {
  const t = {}, o = e.formValue.value || {}, r = e.oldFormValue || {};
  return Object.keys(o).forEach((s) => {
    n ? o[s] !== r[s] && (t[s] = o[s]) : t[s] = o[s];
  }), t;
}
async function Nt(e, n, t, o, r) {
  const s = {};
  if (!t) {
    r(s);
    return;
  }
  const a = n.ns ? n.ns : e.namespace;
  if (s.name = U(a, "form"), Pt(s, e, t, a), t.on && t.on.info) {
    const l = t.on.info(t.formValue);
    ke(l) ? l.then((c) => {
      Ee(s, n, t, o, c), r(s);
    }) : (Ee(s, n, t, o, l), r(s));
  } else
    Ee(s, n, t, o), r(s);
}
function Pt(e, n, t, o) {
  const r = {}, s = t.props || {};
  fe(o) && (s.labelWitdth || (r.labelWitdth = "220px"), s.labelPlacement || (r.labelPlacement = "left")), e.props = r;
}
function Ee(e, n, t, o, r) {
  e.formValue = {}, e.rules = {}, Dt(e, t, o, r);
}
function Dt(e, n, t, o) {
  const s = (n.items || []).map((l) => {
    l.type != le.TAB && (Lt(e, l, t, n.formValue, o), Bt(e, l, t));
    const c = l.show ? () => l.show(t.formValue.value) : null;
    return {
      label: l.label,
      prop: l.prop,
      tooltip: l.tooltip,
      component: l.component,
      show: c,
      slot: l.slot,
      rules: l.rules,
      traits: l.traits,
      type: l.type,
      group: l.group,
      on: l.on,
      children: []
    };
  });
  e.items = s.filter((l) => l.type === le.TAB);
  const a = s.filter((l) => l.type != le.TAB);
  e.items.forEach((l) => {
    l.children = a.filter((c) => c.group === l.type);
  }), e.items = e.items.concat(a);
}
function Lt(e, n, t, o, r) {
  let s = n.value;
  r ? s = r[n.prop] : o && Object.keys(o).indexOf(n.prop) != -1 && (s = o[n.prop]), e.formValue[n.prop] = s, t.oldFormValue[n.prop] = s;
}
function Bt(e, n, t) {
  if (!n.rules)
    return;
  const o = {
    required: n.rules.required,
    type: n.rules.type
  };
  n.rules.validator ? Mt(o, n, t) : o.message = n.rules.message, o.trigger = n.rules.trigger || ["input", "blur"], e.rules[n.prop] = o;
}
function Mt(e, n, t) {
  e.validator = (o, r) => n.rules.validator(r, t.formValue.value);
}
const He = {
  component: Object,
  ns: String,
  color: String,
  size: Object,
  rotate: Number,
  type: String,
  name: String,
  spin: Boolean
}, qe = {
  modelValue: {
    type: Object
  },
  tooltip: Object,
  size: String,
  placeholder: String,
  clearable: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  maxlength: Number,
  minlength: Number,
  readonly: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: Number,
    default: 3
  },
  showCount: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    default: "text"
  }
}, Ke = {
  ...qe,
  size: {
    type: String,
    default: "large"
  },
  icon: He
}, Vt = {
  ...Ke
};
function Rt(e, n) {
  const t = {};
  t.name = U(e.namespace, "input"), t.props = {
    ...n
  };
  const o = n.ns || e.namespace;
  return fe(o) && n.size === "mini" && (t.props.size = "tiny"), t;
}
const Oe = {
  action: String,
  type: {
    type: String,
    default: "default"
  },
  shape: {
    type: String,
    default: "default"
  },
  plain: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  iconPlacement: {
    type: String,
    default: "left"
  },
  loading: {
    type: Boolean,
    default: !1
  },
  renderIcon: Function,
  size: String,
  long: {
    type: Boolean,
    default: !1
  },
  color: String,
  textColor: String,
  bordered: {
    type: Boolean,
    default: !1
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  to: Object,
  url: Object,
  dataId: {
    type: String,
    require: !0
  },
  ns: {
    type: String
  }
}, Tt = {
  ...Oe
}, Se = {
  ...Oe
}, Ut = {
  ...Oe,
  type: {
    type: String,
    default: "primary"
  }
}, zt = {
  clearable: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  maxTagCount: {
    type: Number
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  options: Object,
  defaultValue: Object,
  placeholder: String,
  size: String,
  valueField: String,
  labelField: String,
  allowCreate: {
    type: Boolean,
    default: !1
  },
  action: Object
}, Ft = {
  top: {
    type: String,
    default: "20%"
  },
  left: {
    type: String,
    default: "30%"
  },
  right: String,
  bottom: String,
  width: {
    type: Number,
    default: 500
  },
  height: {
    type: Number,
    default: 200
  },
  maxHeight: String,
  title: String,
  headerHeight: {
    type: String,
    default: "40px"
  },
  dataId: {
    type: String,
    required: !0
  }
}, jt = {
  align: String,
  inline: {
    type: Boolean,
    default: !1
  },
  justify: {
    type: String,
    default: "start"
  },
  reverse: {
    type: Boolean,
    default: !1
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, Ht = {
  ns: String,
  dataId: {
    type: String,
    required: !0
  }
}, qt = {
  title: String,
  dataId: {
    type: String,
    required: !0
  },
  width: {
    type: Number,
    default: 502
  }
}, Kt = {
  keyField: {
    type: String,
    default: "key"
  },
  labelField: {
    type: String,
    default: "label"
  },
  onLoad: {
    type: Function,
    required: !0
  },
  ns: String,
  dataId: {
    type: String
  }
}, Yt = {
  dataId: String,
  options: Object
}, Gt = {
  dataId: String,
  src: String
}, Wt = ["src"], Qt = {
  name: "IframeView"
}, Jt = /* @__PURE__ */ O({
  ...Qt,
  props: Gt,
  setup(e) {
    const n = e, t = D(), o = n.dataId || ee(), r = $(n.src), s = $(0);
    return J(() => {
      t.registerAction(o, C.MENU_CLICK, {
        action: (a, l) => {
          console.log(a);
          const c = a;
          return c && (r.value = ne(c.url), s.value++), Promise.resolve();
        }
      });
    }), te(() => {
      t.removeAction(o, C.MENU_CLICK);
    }), (a, l) => Me((d(), b("iframe", {
      class: "iframe",
      key: s.value,
      border: "0",
      src: r.value
    }, null, 8, Wt)), [
      [Ve, r.value]
    ]);
  }
});
const Xt = /* @__PURE__ */ P(Jt, [["__scopeId", "data-v-4c75b4e8"]]);
function Ye(e, n) {
  const t = be(e);
  return t ? `${t}-${n}` : n;
}
function be(e) {
  if (e)
    return e;
  const n = Q("_config");
  return n ? n.namespace : "n";
}
function Ge(e) {
  return be(e) === "n";
}
function Zt(e) {
  return be(e) === "el";
}
function en(e) {
  return be(e) === "van";
}
const tn = O({
  name: "Button",
  props: Oe,
  setup(e, { attrs: n }) {
    const t = Pe(e, n), o = D(), r = $(!1), s = ee() || e.dataId, a = St(), l = (c) => {
      const g = e.action != C.DATA_REFRESH;
      o.applyAll(s, e.action, a, {
        start: () => r.value = g,
        done: () => {
          r.value = !1, o.applyAll(s, C.DONE, null, null), e.action === C.SUBMIT && o.applyAll(vt(s).dataId, C.DATA_REFRESH, null, null);
        },
        close: () => r.value = !1
      });
    };
    return {
      componentName: Ye(e.ns, "button"),
      componentProps: t.props,
      styleSheet: t.style,
      handleClick: l,
      loading: r
    };
  }
});
function nn(e, n, t, o, r, s) {
  return d(), I(N(e.componentName), B(e.componentProps, {
    style: [e.styleSheet],
    onClick: e.handleClick,
    loading: e.loading
  }), {
    default: h(() => [
      v(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["style", "onClick", "loading"]);
}
const Ne = /* @__PURE__ */ P(tn, [["render", nn]]);
function Pe(e, n) {
  const t = e.ns, o = {
    ...n,
    plain: e.plain,
    type: e.type,
    color: e.color,
    textColor: e.textColor,
    loading: e.loading,
    size: e.size
  }, r = {};
  return e.long && (o.block = !0), Zt(t) ? ((e.block || e.long) && (r.width = "100%"), e.bordered || (r.border = "0px"), o.plain = e.plain, e.dashed && (r["border-style"] = "dashed", o.plain = !0), e.type === "error" ? o.type = "danger" : e.type === "text" ? o.text = !0 : e.type === "link" && (o.tag = "a", o.text = !0, o.href = ne(e.url), o.target = e.url.target || ye.BLANK), e.shape === "circle" ? o.circle = !0 : e.shape === "round" && (o.round = !0), e.size === "mini" ? o.size = "small" : e.size === "medium" && (o.size = "default")) : Ge(t) ? (o.ghost = e.plain, e.shape === "circle" && (o.circle = !0), o.block = e.block || e.long, o.iconPlacement = e.iconPlacement, o.renderIcon = e.renderIcon, e.type === "primary" ? o.type = "info" : e.type === "text" ? o.text = !0 : e.type === "link" && (o.tag = "a", o.text = !0, o.href = ne(e.url), o.target = e.url && e.url.target ? e.url.target : ye.BLANK), e.shape === "circle" ? o.circle = !0 : e.shape === "round" && (o.round = !0), e.size === "mini" && (o.size = "tiny")) : en(t) && (e.type === "error" ? o.type = "danger" : (e.type === "text" || e.type === "link") && console.warn("not support ", e.type), e.shape === "circle" ? o.round = !0 : e.shape === "round" ? o.square = !1 : o.square = !0, e.size === "medium" && (o.size = "small"), o.block = e.block || e.long, o["icon-position"] = e.iconPlacement, e.dashed && (r["border-style"] = "dashed", o.plain = !0), e.url && (o.url = ne(e.url)), o.replace = e.url && e.url.replace || e.to && e.to.replace), {
    props: o,
    style: r
  };
}
const on = O({
  name: "LoginButton",
  props: Tt,
  components: { OButton: Ne },
  setup(e, { attrs: n }) {
    const t = Pe(e, n), o = $(!1), r = D(), s = ee() || e.dataId, a = () => {
      r.applyAll(
        s,
        C.SUBMIT,
        null,
        {
          start: () => o.value = !0,
          done: () => o.value = !1,
          close: () => o.value = !1
        }
      );
    };
    return {
      componentName: Ye(null, "button"),
      componentProps: gt(t.props, {
        size: "large",
        type: "info",
        long: !0,
        block: !0
      }),
      styleSheet: t.style,
      loading: o,
      handleClick: a
    };
  }
});
function sn(e, n, t, o, r, s) {
  return d(), I(N(e.componentName), B(e.componentProps, {
    loading: e.loading,
    style: [e.styleSheet],
    onClick: e.handleClick
  }), {
    default: h(() => [
      v(e.$slots, "default", {}, () => [
        H("\u767B\u5F55")
      ])
    ]),
    _: 3
  }, 16, ["loading", "style", "onClick"]);
}
const rn = /* @__PURE__ */ P(on, [["render", sn]]), an = {
  name: "SubmitButton"
}, We = /* @__PURE__ */ O({
  ...an,
  props: Se,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "submit", (o, r) => {
      const s = x("o-button");
      return d(), I(s, B({ type: "primary" }, t), {
        default: h(() => [
          v(o.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), ln = {
  name: "CancleButton"
}, un = /* @__PURE__ */ O({
  ...ln,
  props: Se,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "cancle", (o, r) => {
      const s = x("o-button");
      return d(), I(s, T(q(t)), {
        default: h(() => [
          v(o.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), cn = {
  name: "AddButton"
}, dn = /* @__PURE__ */ O({
  ...cn,
  props: Ut,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "open", (o, r) => {
      const s = x("o-button");
      return d(), I(s, T(q(t)), {
        default: h(() => [
          v(o.$slots, "default", {}, () => [
            H(" \u65B0\u589E ")
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), fn = {
  name: "RefreshButton"
}, pn = /* @__PURE__ */ O({
  ...fn,
  props: Se,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "data-refresh", (o, r) => {
      const s = x("o-refresh-icon"), a = x("o-button");
      return d(), I(a, T(q(t)), {
        default: h(() => [
          v(o.$slots, "default", {}, () => [
            L(s)
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), _n = {
  name: "ResetButton"
}, mn = /* @__PURE__ */ O({
  ..._n,
  props: Se,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "reset", (o, r) => {
      const s = x("o-button");
      return d(), I(s, T(q(t)), {
        default: h(() => [
          v(o.$slots, "default", {}, () => [
            H("\u91CD\u7F6E")
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), G = null, hn = {
  name: "Context"
}, vn = /* @__PURE__ */ O({
  ...hn,
  props: Ct,
  setup(e) {
    const n = e, t = {
      namespace: n.namespace,
      config: n.config,
      registerAction: a,
      removeAction: l,
      removeActions: c,
      applyAll: g,
      setLayoutConfig: f
    }, o = $({
      token: "",
      userInfo: {}
    });
    W(E.CONFIG_KEY, t), W(E.USER_INFO, o);
    const r = $();
    W(E.LAYOUT_CONFIG, r);
    const s = {};
    function a(u, i, _) {
      if (u || (u = "default"), !i)
        throw new Error("actionType must not empty.");
      if (!_)
        throw new Error("actionItem must not empty.");
      s[u] || (s[u] = {});
      const y = s[u];
      y[i] || (y[i] = []), y[i].push(_);
    }
    function l(u, i) {
      s[u] || (u = "default");
      const _ = s[u];
      if (!_[i]) {
        s[u] = null;
        return;
      }
      const y = _[i];
      y.forEach((k) => {
        k.action = null, k = null;
      }), y.length = 0, _[i] = null;
    }
    function c(u) {
      if (u || (u = "default"), !s[u])
        return;
      const i = s[u];
      Object.keys(i).forEach((_) => {
        l(u, _);
      }), s[u] = null;
    }
    function g(u, i, _, y) {
      u || (u = "default");
      const k = s[u];
      if (!k)
        return;
      const w = i instanceof Array ? i : [i], z = [];
      return Object.keys(k).filter((R) => w.indexOf(R) != -1).forEach((R) => {
        k[R].forEach((_e) => z.push(p(_e.action, _, y)));
      }), Promise.all(z);
    }
    function p(u, i, _) {
      return new Promise((y, k) => {
        u(i, _).then((w) => y(w)).catch((w) => k(w));
      });
    }
    function f(u) {
      r.value = u;
    }
    return te(() => {
      Object.keys(s).forEach((u) => c(u));
    }), (u, i) => (d(), b("div", null, [
      v(u.$slots, "default")
    ]));
  }
});
function Ce() {
  const e = D().config;
  return {
    push: (n) => {
      e && e.router ? e.router.push(n) : console.warn("router not implement.please implement router api.push failed", n);
    }
  };
}
function gn() {
  const e = Q(E.USER_INFO), n = D(), t = n ? n.config : null, o = !!(t && t.crypto), r = {
    setToken: (s) => {
      !s || (e.value.token = s, o && (s = t.crypto.encode(s)), G.set(E.TOKEN_LOCAL_KEY, s, 60 * 60));
    },
    getToken: () => {
      if (e.value.token)
        return e.value.token;
      let s = G.get(E.TOKEN_LOCAL_KEY);
      return o && (s = t.crypto.decode(s)), e.value.token = s, s;
    },
    setUserInfo: (s) => {
      if (!s)
        return;
      e.value.userInfo = s;
      let a = JSON.stringify(s);
      o && (a = t.crypto.encode(a)), G.set(E.USER_LOCAL_STORE_KEY, a, 60 * 60);
    },
    getUserInfo: () => {
      if (e.value.userInfo)
        return e.value.userInfo;
      let s = G.get(E.USER_LOCAL_STORE_KEY);
      if (!!s)
        return o && (s = t.crypto.decode(s)), s = s ? JSON.parse(s) : null, e.value.userInfo = s, s;
    },
    setLoginResponse: (s) => {
      r.setToken(s.token), r.setUserInfo(s.userInfo);
    },
    logout: () => {
      G.remove(E.USER_LOCAL_STORE_KEY), G.remove(E.TOKEN_LOCAL_KEY), e.value.token = null, e.value.userInfo = null;
    },
    isLogin: () => !!r.getToken()
  };
  return r;
}
const yn = {
  __name: "item",
  props: {
    item: Object,
    formValue: Object,
    ns: String
  },
  setup(e, { expose: n }) {
    const t = e, o = t.ns ? t.ns : D().namespace, r = V(() => U(o, "form-item")), s = V(() => {
      const i = {};
      return i.label = t.item.label, i.path = t.item.prop, i;
    }), a = $(0), l = V(() => {
      const i = {
        componentName: "",
        props: null,
        style: null
      };
      let _ = "input";
      const y = t.item.component;
      return y && (y.render ? i.componentName = y.render(t.formValue) : y.name && (_ = y.name), i.props = y.props || {}, y.attrs && (i.props = { ...i.props, ...y.attrs })), i.componentName || (i.componentName = U(o, _)), i;
    }), c = $(t.formValue[t.item.prop]), g = t.item.on && t.item.on.change;
    ie(
      () => c.value,
      (i, _) => {
        t.formValue[t.item.prop] = i, g && t.item.on.change(i, _, t.formValue);
      }
    );
    const p = $();
    function f() {
      p.value.$el.scrollIntoView({
        behavior: "smooth",
        top: 0
      });
    }
    function u() {
      c.value = t.formValue[t.item.prop], a.value++;
    }
    return n({
      scrollTo: f,
      updateValue: u
    }), (i, _) => {
      const y = x("n-icon"), k = x("n-tooltip");
      return d(), I(N(r.value), T(q(s.value)), rt({
        default: h(() => [
          e.item.slot ? v(i.$slots, "default", { key: 0 }) : (d(), b(ve, { key: 1 }, [
            e.item.component && e.item.component.render ? (d(), I(N(l.value.componentName), B({
              key: 0,
              style: l.value.style
            }, l.value.props, {
              modelValue: c.value,
              "onUpdate:modelValue": _[0] || (_[0] = (w) => c.value = w),
              ref_key: "itemRef",
              ref: p,
              key: a.value
            }), null, 16, ["style", "modelValue"])) : (d(), I(N(l.value.componentName), B({
              key: 1,
              style: l.value.style
            }, l.value.props, {
              value: c.value,
              "onUpdate:value": _[1] || (_[1] = (w) => c.value = w),
              ref_key: "itemRef",
              ref: p,
              key: a.value + 1
            }), null, 16, ["style", "value"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.item.tooltip ? {
          name: "label",
          fn: h(() => [
            H(K(e.item.label) + " ", 1),
            L(k, { trigger: "hover" }, {
              trigger: h(() => [
                L(y, {
                  size: "18",
                  class: "cursor-pointer text-gray-400",
                  component: e.item.tooltip.icon
                }, null, 8, ["component"])
              ]),
              default: h(() => [
                H(" " + K(e.item.tooltip.message), 1)
              ]),
              _: 1
            })
          ]),
          key: "0"
        } : void 0
      ]), 1040);
    };
  }
}, $n = { key: 0 }, On = {
  name: "Form"
}, Sn = /* @__PURE__ */ O({
  ...On,
  props: {
    dataId: {
      type: String,
      required: !0
    },
    ns: String
  },
  setup(e, { expose: n }) {
    const t = e, o = $([]), r = $({}), s = $(!1), a = $({}), l = {}, c = $(""), g = $(), p = {}, f = D(), u = bt(), i = ee(), _ = $();
    let y = null;
    const k = me();
    function w(X) {
      s.value || Nt(f, t, X, { formValue: a, oldFormValue: l }, (M) => {
        c.value = M.name, o.value = M.items, g.value = M.rules, a.value = M.formValue, g.value = M.rules, r.value = M.props, s.value = !0, y = X.on, f.registerAction(k, C.SUBMIT, {
          action: (F, re) => _e(F, re)
        });
      });
    }
    te(() => {
      f.removeAction(k, C.SUBMIT);
    });
    function z(X, M) {
      p[M.prop] = {
        el: X
      };
    }
    const R = Et({ formValue: a, oldFormValue: l, refs: p });
    n({
      setOptions: w,
      isVisible: () => u,
      getParentDataId: () => i,
      ...R
    });
    function _e(X, M, F) {
      return new Promise((re, Ie) => {
        var De;
        F && F.preventDefault(), (De = _.value) == null || De.validate((we) => {
          if (we)
            ze(M, we), Ie(we);
          else {
            if (Object.keys(R.getValues(!0)).length > 0) {
              Ue(M);
              const ot = y.submit(R.getValues(), M);
              It(ot, M, () => f.applyAll(me(), C.DATA_REFRESH));
            } else
              ae(M), he(M);
            re(null);
          }
        });
      });
    }
    function me() {
      return ee() || t.dataId;
    }
    return (X, M) => s.value ? (d(), I(N(c.value), B({ key: 0 }, r.value, {
      model: a.value,
      rules: g.value,
      ref_key: "formRef",
      ref: _
    }), {
      default: h(() => [
        (d(!0), b(ve, null, xe(o.value, (F, re) => (d(), b("span", { key: re }, [
          F.type === m(le).TAB ? (d(), b("span", $n, K(F), 1)) : (d(), I(yn, {
            key: 1,
            item: F,
            formValue: a.value,
            ns: e.ns,
            ref_for: !0,
            ref: (Ie) => z(Ie, F)
          }, {
            default: h(() => [
              F.slot ? v(X.$slots, F.slot, {
                key: 0,
                row: a.value,
                value: a.value[F.prop]
              }) : j("", !0)
            ]),
            _: 2
          }, 1032, ["item", "formValue", "ns"]))
        ]))), 128))
      ]),
      _: 3
    }, 16, ["model", "rules"])) : j("", !0);
  }
});
function bn(e) {
  const n = $();
  return Ae(n, e), n;
}
const Cn = {}, In = O({
  name: "UserLoginForm",
  props: Cn,
  setup(e) {
    return at({
      setOptions: (t) => {
      }
    }), {
      a: "qinjiawang"
    };
  }
});
function wn(e, n, t, o, r, s) {
  const a = x("o-view");
  return d(), I(a, null, {
    default: h(() => [
      v(e.$slots, "default")
    ]),
    _: 3
  });
}
const En = /* @__PURE__ */ P(In, [["render", wn]]);
function xn(e) {
  const n = $();
  return Ae(n, e), n;
}
const kn = { style: { width: "100%" } }, An = {
  key: 0,
  class: "tooltip"
}, Nn = {
  name: "Input"
}, Pn = /* @__PURE__ */ O({
  ...Nn,
  props: qe,
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = $(t.modelValue), r = D(), s = Rt(r, t);
    ie(
      () => o.value,
      (l) => {
        n("update:modelValue", l);
      }
    );
    function a() {
      if (!t.tooltip)
        return;
      const l = t.tooltip;
      l.onClick && l.onClick(o.value), wt(l.to, l.url);
    }
    return (l, c) => (d(), b("div", kn, [
      S("div", null, [
        (d(), I(N(m(s).name), B(m(s).props, {
          value: o.value,
          "onUpdate:value": c[0] || (c[0] = (g) => o.value = g)
        }), {
          prefix: h(() => [
            v(l.$slots, "prefix", {}, void 0, !0)
          ]),
          _: 3
        }, 16, ["value"]))
      ]),
      S("span", { onClick: a }, [
        v(l.$slots, "tooltip", {}, () => [
          l.tooltip ? (d(), b("span", An, K(l.tooltip.message), 1)) : j("", !0)
        ], !0)
      ])
    ]));
  }
});
const Qe = /* @__PURE__ */ P(Pn, [["__scopeId", "data-v-a1ef52fd"]]), Dn = {
  name: "UsernameInput"
}, Ln = /* @__PURE__ */ O({
  ...Dn,
  props: Ke,
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const o = $(e.modelValue);
    ie(
      () => o.value,
      (s) => {
        n("update:modelValue", s);
      }
    );
    function r(s) {
      const a = { ...s };
      return a.placeholder || (a.placeholder = "\u8BF7\u8F93\u5165\u767B\u5F55\u8D26\u53F7"), a.size || (a.size = "large"), a.icon && (a.icon.size || (a.icon.size = 18)), a;
    }
    return (s, a) => {
      const l = x("o-icon");
      return d(), I(N("o-input"), B(r(s.$props), {
        modelValue: o.value,
        "onUpdate:modelValue": a[0] || (a[0] = (c) => o.value = c)
      }), {
        prefix: h(() => [
          v(s.$slots, "icon", {}, () => [
            s.icon ? (d(), I(l, T(B({ key: 0 }, s.icon)), null, 16)) : j("", !0)
          ])
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
}), Bn = {
  name: "PasswordInput"
}, Mn = /* @__PURE__ */ O({
  ...Bn,
  props: Vt,
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const o = $(e.modelValue);
    ie(
      () => o.value,
      (s) => {
        n("update:modelValue", s);
      }
    );
    function r(s) {
      const a = { ...s };
      return a.placeholder || (a.placeholder = "\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"), a.size || (a.size = "large"), a.icon && (a.icon.size || (a.icon.size = 18)), a.type = "password", a;
    }
    return (s, a) => {
      const l = x("o-icon");
      return d(), I(N("o-input"), B(r(s.$props), {
        modelValue: o.value,
        "onUpdate:modelValue": a[0] || (a[0] = (c) => o.value = c)
      }), {
        prefix: h(() => [
          v(s.$slots, "icon", {}, () => [
            s.icon ? (d(), I(l, T(B({ key: 0 }, s.icon)), null, 16)) : j("", !0)
          ])
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
}), Vn = {
  name: "Icon"
}, Rn = /* @__PURE__ */ O({
  ...Vn,
  props: He,
  setup(e) {
    const n = e, t = D(), o = U(n.ns || t.namespace, "icon"), r = {}, s = {
      color: n.color,
      size: n.size
    };
    return s.component = n.component, n.rotate && (r.transform = `rotate(${n.rotate}deg)`), n.component || (s.class = n.type + n.name), n.spin && (s.class = "icon-spin"), (a, l) => (d(), I(N(m(o)), B(s, {
      style: [r]
    }), null, 16, ["style"]));
  }
});
const Je = /* @__PURE__ */ P(Rn, [["__scopeId", "data-v-04e04ec5"]]), Tn = ["width", "height"], Un = ["fill"], zn = {
  name: "CloseIcon"
}, Fn = /* @__PURE__ */ O({
  ...zn,
  props: {
    fontSize: {
      type: [String, Number],
      default: "18px"
    },
    color: {
      type: String,
      default: "#000"
    }
  },
  setup(e) {
    return (n, t) => (d(), b("svg", {
      t: "1711249203230",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2401",
      width: e.fontSize,
      height: e.fontSize,
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }, [
      S("path", {
        d: "M572.16 512l183.467-183.04a42.667 42.667 0 1 0-60.587-60.587L512 451.84 328.96 268.373a42.667 42.667 0 0 0-60.587 60.587L451.84 512 268.373 695.04a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.587 0L512 572.16l183.04 183.467a42.667 42.667 0 0 0 60.587 0 42.667 42.667 0 0 0 0-60.587z",
        fill: e.color,
        "p-id": "2402"
      }, null, 8, Un)
    ], 8, Tn));
  }
});
const jn = /* @__PURE__ */ P(Fn, [["__scopeId", "data-v-56c249a3"]]), Hn = ["xlink:href"], qn = {
  name: "SvgIcon"
}, Kn = /* @__PURE__ */ O({
  ...qn,
  props: {
    icon: {
      type: String,
      required: !0
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = e;
    function t(a) {
      return /^(https?:|mailto:|tel:)/.test(a);
    }
    const o = V(() => t(n.icon)), r = V(() => ({
      mask: `url(${n.icon}) no-repeat 50% 50%`,
      "-webkit-mask": `url(${n.icon}) no-repeat 50% 50%`
    })), s = V(() => `#icon-${n.icon}`);
    return (a, l) => o.value ? (d(), b("div", {
      key: 0,
      style: A(r.value),
      class: ue(["svg-external-icon svg-icon", e.className])
    }, null, 6)) : (d(), b("svg", {
      key: 1,
      class: ue(["svg-icon", e.className]),
      "aria-hidden": "true"
    }, [
      S("use", { "xlink:href": s.value }, null, 8, Hn)
    ], 2));
  }
});
const Yn = /* @__PURE__ */ P(Kn, [["__scopeId", "data-v-699aa19d"]]), Gn = ["width", "height"], Wn = ["fill"], Qn = {
  name: "RefreshIcon"
}, Jn = /* @__PURE__ */ O({
  ...Qn,
  props: {
    fontSize: {
      type: [String, Number],
      default: "18px"
    },
    color: {
      type: String,
      default: "#000"
    }
  },
  setup(e) {
    return (n, t) => (d(), b("svg", {
      t: "1711264544094",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "3496",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: e.fontSize,
      height: e.fontSize
    }, [
      S("path", {
        d: "M894.481158 505.727133c0 49.589418-9.711176 97.705276-28.867468 143.007041-18.501376 43.74634-44.98454 83.031065-78.712713 116.759237-33.728172 33.728172-73.012897 60.211337-116.759237 78.712713-45.311998 19.156292-93.417623 28.877701-143.007041 28.877701s-97.695043-9.721409-142.996808-28.877701c-43.756573-18.501376-83.031065-44.98454-116.76947-78.712713-33.728172-33.728172-60.211337-73.012897-78.712713-116.759237-19.156292-45.301765-28.867468-93.417623-28.867468-143.007041 0-49.579185 9.711176-97.695043 28.867468-142.996808 18.501376-43.74634 44.98454-83.031065 78.712713-116.759237 33.738405-33.728172 73.012897-60.211337 116.76947-78.712713 45.301765-19.166525 93.40739-28.877701 142.996808-28.877701 52.925397 0 104.008842 11.010775 151.827941 32.745798 46.192042 20.977777 86.909395 50.79692 121.016191 88.608084 4.389984 4.860704 8.646937 9.854439 12.781094 14.97097l0-136.263453c0-11.307533 9.168824-20.466124 20.466124-20.466124 11.307533 0 20.466124 9.15859 20.466124 20.466124l0 183.64253c0 5.433756-2.148943 10.632151-5.986341 14.46955-3.847631 3.837398-9.046027 5.996574-14.479783 5.996574l-183.64253-0.020466c-11.307533 0-20.466124-9.168824-20.466124-20.466124 0-11.307533 9.168824-20.466124 20.466124-20.466124l132.293025 0.020466c-3.960195-4.952802-8.063653-9.782807-12.289907-14.479783-30.320563-33.605376-66.514903-60.098773-107.549481-78.753645-42.467207-19.289322-87.850837-29.072129-134.902456-29.072129-87.195921 0-169.172981 33.9533-230.816946 95.597265-61.654198 61.654198-95.597265 143.621025-95.597265 230.816946s33.943067 169.172981 95.597265 230.816946c61.643965 61.654198 143.621025 95.607498 230.816946 95.607498s169.172981-33.9533 230.816946-95.607498c61.654198-61.643965 95.597265-143.621025 95.597265-230.816946 0-11.2973 9.168824-20.466124 20.466124-20.466124C885.322567 485.261009 894.481158 494.429833 894.481158 505.727133z",
        "p-id": "3497",
        fill: e.color
      }, null, 8, Wn)
    ], 8, Gn));
  }
});
const Xe = /* @__PURE__ */ P(Jn, [["__scopeId", "data-v-782245e7"]]), Xn = ["width", "height"], Zn = ["fill"], eo = {
  name: "CopyIcon"
}, to = /* @__PURE__ */ O({
  ...eo,
  props: {
    fontSize: {
      type: [String, Number],
      default: "18px"
    },
    color: {
      type: String,
      default: "#000"
    }
  },
  setup(e) {
    return (n, t) => (d(), b("svg", {
      style: { cursor: "pointer" },
      t: "1711378460175",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4540",
      width: e.fontSize,
      height: e.fontSize
    }, [
      S("path", {
        d: "M832 128c-12.8-76.8-76.8-128-160-128h-448C102.4 0 0 102.4 0 224v448c0 76.8 57.6 140.8 128 160 12.8 76.8 76.8 128 160 128h512c89.6 0 160-70.4 160-160v-512c0-76.8-57.6-140.8-128-160zM64 672v-448C64 134.4 134.4 64 224 64h448c44.8 0 76.8 25.6 89.6 64H288C198.4 128 128 198.4 128 288v473.6c-38.4-12.8-64-44.8-64-89.6z m832 128c0 51.2-44.8 96-96 96h-512c-51.2 0-96-44.8-96-96v-512C192 236.8 236.8 192 288 192h512c51.2 0 96 44.8 96 96v512z",
        fill: e.color,
        "p-id": "4541"
      }, null, 8, Zn)
    ], 8, Xn));
  }
});
const no = /* @__PURE__ */ P(to, [["__scopeId", "data-v-a1ddcf82"]]), oo = ["width", "height"], so = ["fill"], ro = {
  name: "CodeIcon"
}, ao = /* @__PURE__ */ O({
  ...ro,
  props: {
    fontSize: {
      type: [String, Number],
      default: "18px"
    },
    color: {
      type: String,
      default: "#000"
    }
  },
  setup(e) {
    return (n, t) => (d(), b("svg", {
      t: "1711378947909",
      style: { cursor: "pointer" },
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "5546",
      width: e.fontSize,
      height: e.fontSize
    }, [
      S("path", {
        d: "M375.893333 810.666667c-12.501333 0-23.466667-4.48-32.853333-13.482667l-286.293333-274.304c-18.773333-17.962667-18.773333-46.464 0-62.933333l286.293333-275.797334c18.773333-17.962667 48.512-17.962667 65.706667 0 18.773333 18.005333 18.773333 46.506667 0 62.976l-253.44 242.773334 253.44 242.816c18.773333 18.005333 18.773333 46.506667 0 62.976-7.808 10.496-20.352 14.976-32.853334 14.976zM648.106667 810.666667c-12.501333 0-23.466667-4.48-32.853334-13.482667-18.773333-18.005333-18.773333-46.506667 0-62.976l253.44-242.773333-255.018666-244.309334c-18.773333-18.005333-18.773333-46.506667 0-62.976 18.773333-17.962667 48.512-17.962667 65.706666 0l286.293334 275.797334c18.773333 17.962667 18.773333 46.464 0 62.933333l-284.714667 274.304c-9.386667 8.96-21.888 13.482667-32.853333 13.482667z",
        fill: e.color,
        "p-id": "5547"
      }, null, 8, so)
    ], 8, oo));
  }
});
const Ze = /* @__PURE__ */ P(ao, [["__scopeId", "data-v-3bfd490c"]]), lo = {
  name: "Layout"
}, uo = /* @__PURE__ */ O({
  ...lo,
  setup(e) {
    const n = {
      header: {
        height: 50
      },
      slider: {
        width: 0
      },
      backgroundColor: ge.BACKGROUND_COLOR,
      menu: {
        width: 80,
        backgroundColor: ge.MENU_BACKGROUND_COLOR,
        color: "#fff"
      },
      subMenu: {
        width: 170
      },
      content: {
        offsets: [11, 10, 0, 10]
      }
    };
    return D().setLayoutConfig(n), (o, r) => v(o.$slots, "default");
  }
});
function io() {
  const e = de();
  return {
    setBackgroundColor: (t) => e.value.backgroundColor = t,
    setLogo: (t) => e.value.menu.logo = t,
    setActiveMenu: (t) => e.value.menu.activeMenuItem = t,
    setProjectId: (t) => {
      G.set(E.LOCAL_PROJECT_ID, t, 1);
    },
    getProjectId: () => G.get(E.LOCAL_PROJECT_ID)
  };
}
const co = {
  name: "SliderLayout"
}, fo = /* @__PURE__ */ O({
  ...co,
  props: {
    overflow: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = de(), t = V(() => {
      if (!n.value.menu.activeMenuItem)
        return 0;
      const o = n.value.menu.activeMenuItem;
      return o.children && o.children.length > 0 ? n.value.subMenu.width : 0;
    });
    return (o, r) => (d(), b("div", {
      class: "o-slider-layout",
      style: A({
        backgroundColor: m(n).backgroundColor
      })
    }, [
      S("div", {
        class: "header",
        style: A({
          height: `${m(n).header.height}px`,
          left: `${m(n).menu.width + t.value}px`,
          lineHeight: `${m(n).header.height}px`
        })
      }, [
        v(o.$slots, "header", {}, void 0, !0)
      ], 4),
      S("div", {
        class: "menu",
        style: A({
          width: `${m(n).menu.width}px`,
          backgroundColor: m(n).menu.backgroundColor,
          color: m(n).menu.color
        })
      }, [
        v(o.$slots, "menu", {}, void 0, !0)
      ], 4),
      S("div", {
        class: "content",
        style: A({
          top: `${m(n).header.height}px`,
          left: `${m(n).menu.width + t.value}px`,
          backgroundColor: m(n).content.backgroundColor
        })
      }, [
        S("div", {
          class: "content-inner",
          style: A({
            top: `${m(n).content.offsets[0]}px`,
            right: `${m(n).content.offsets[1]}px`,
            bottom: `${m(n).content.offsets[2]}px`,
            left: `${m(n).content.offsets[3]}px`,
            overflowY: `${e.overflow ? "auto" : "hidden"}`
          })
        }, [
          v(o.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 4)
    ], 4));
  }
});
const po = /* @__PURE__ */ P(fo, [["__scopeId", "data-v-ff2d45c1"]]), _o = {
  name: "SimpleLayout"
}, mo = /* @__PURE__ */ O({
  ..._o,
  props: {
    overflow: {
      type: Boolean,
      default: !1
    },
    backgroundColor: String,
    headerPlacement: {
      type: String,
      default: "left"
    },
    headerHeight: {
      type: Number,
      default: 64
    },
    sliderWidth: {
      type: Number,
      default: 64
    },
    hasHeader: {
      type: Boolean,
      default: !0
    },
    menuWidth: {
      type: Number,
      default: 272
    },
    hasSlider: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = e, t = de();
    n.headerHeight && (t.value.header.height = 64), n.menuWidth && (t.value.menu.width = n.menuWidth), n.sliderWidth && (t.value.slider.width = n.sliderWidth);
    const o = V(() => t.value.header.height > 0 && n.hasHeader), r = V(() => t.value.slider && t.value.slider.width > 0 && n.hasSlider);
    t.value.menu.backgroundColor === ge.MENU_BACKGROUND_COLOR && (t.value.menu.backgroundColor = "#fff"), n.backgroundColor && (t.value.backgroundColor = n.backgroundColor);
    const s = V(() => 0);
    return (a, l) => (d(), b("div", {
      class: "o-simple-layout",
      style: A({ backgroundColor: `${m(t).backgroundColor}` })
    }, [
      o.value ? (d(), b("div", {
        key: 0,
        class: "header",
        style: A({
          height: `${m(t).header.height}px`,
          lineHeight: `${m(t).header.height}px`,
          left: `${r.value ? m(t).slider.width : 0}px`
        })
      }, [
        v(a.$slots, "header", {}, void 0, !0)
      ], 4)) : j("", !0),
      S("div", {
        class: "menu",
        style: A({
          top: `${o.value ? m(t).header.height : 0}px`,
          width: `${m(t).menu.width}px`,
          backgroundColor: m(t).menu.backgroundColor
        })
      }, [
        v(a.$slots, "menu", {}, void 0, !0)
      ], 4),
      S("div", {
        class: "content",
        style: A({
          top: `${o.value ? m(t).header.height : 0}px`,
          left: `${m(t).menu.width + s.value}px`,
          backgroundColor: m(t).content.backgroundColor
        })
      }, [
        S("div", {
          class: "content-inner",
          style: A({
            top: `${m(t).content.offsets[0]}px`,
            right: `${m(t).content.offsets[1]}px`,
            bottom: `${m(t).content.offsets[2]}px`,
            left: `${m(t).content.offsets[3]}px`,
            overflowY: `${e.overflow ? "auto" : "hidden"}`
          })
        }, [
          v(a.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 4)
    ], 4));
  }
});
const ho = /* @__PURE__ */ P(mo, [["__scopeId", "data-v-7885c5f7"]]), vo = {
  name: "LayoutMenu"
}, go = /* @__PURE__ */ O({
  ...vo,
  props: Fe,
  setup(e) {
    const n = e, t = Ce(), o = de(), r = V(() => {
      if (!o.value.menu.activeMenuItem)
        return 0;
      const l = o.value.menu.activeMenuItem;
      return l.children && l.children.length > 0 ? o.value.subMenu.width : 0;
    }), s = $([]);
    J(() => {
      a();
    });
    function a() {
      ce(n.onLoad, (l) => {
        s.value = l || [], s.value && s.value.length > 0 && (o.value.menu.activeMenuItem || (o.value.menu.activeMenuItem = s.value[0], s.value[0].router && t.push(s.value[0].router)));
      });
    }
    return (l, c) => v(l.$slots, "default", {
      data: s.value,
      subMenuWidth: r.value
    });
  }
}), yo = { class: "logo" }, $o = { class: "list" }, Oo = ["onClick"], So = { key: 0 }, bo = { class: "title" }, Co = ["title"], Io = ["onClick"], wo = {
  key: 0,
  class: "sub-menu-icon"
}, Eo = {
  name: "LayoutMenu"
}, xo = /* @__PURE__ */ O({
  ...Eo,
  props: Fe,
  setup(e) {
    const n = Ce(), t = de(), o = V(() => t.value.menu.activeMenuItem), r = V(() => t.value.subMenu.activeMenuItem);
    function s(l) {
      t.value.menu.activeMenuItem && t.value.menu.activeMenuItem.id === l.id || (t.value.menu.activeMenuItem = l, t.value.subMenu.activeMenuItem = null, l.router && n.push(l.router));
    }
    function a(l) {
      t.value.subMenu.activeMenuItem && t.value.subMenu.activeMenuItem.id === l.id || (t.value.subMenu.activeMenuItem = l, l.router && n.push(l.router));
    }
    return (l, c) => {
      const g = x("o-icon");
      return d(), I(go, T(q(l.$props)), {
        default: h(({ data: p, subMenuWidth: f }) => [
          S("div", yo, [
            S("div", {
              style: A({ minHeight: `${m(t).header.height}px` })
            }, [
              v(l.$slots, "logo", {}, void 0, !0)
            ], 4)
          ]),
          S("div", $o, [
            (d(!0), b(ve, null, xe(p, (u, i) => (d(), b("div", {
              class: ue(["list-item", o.value && o.value.id === u.id ? "select" : ""]),
              key: i,
              onClick: (_) => s(u)
            }, [
              S("div", null, [
                u.icon ? (d(), b("div", So, [
                  L(g, T(q(u.icon)), null, 16)
                ])) : j("", !0),
                S("div", bo, K(u.title), 1)
              ])
            ], 10, Oo))), 128))
          ]),
          Me(S("div", {
            class: "sub-menu",
            style: A({
              width: `${f}px`,
              left: `${m(t).menu.width}px`
            })
          }, [
            S("div", {
              class: "title ellipsis",
              style: A({
                height: `${m(t).header.height}px`,
                lineHeight: `${m(t).header.height}px`
              }),
              title: f > 0 ? o.value.title : ""
            }, K(f > 0 ? o.value.title : ""), 13, Co),
            (d(!0), b(ve, null, xe(f > 0 ? o.value.children : [], (u, i) => (d(), b("div", {
              class: ue(["sub-menu-list-item", r.value && r.value.id === u.id ? "sub-menu-select" : ""]),
              key: i,
              onClick: (_) => a(u)
            }, [
              u.icon ? (d(), b("div", wo, [
                L(g, T(q(u.icon)), null, 16)
              ])) : j("", !0),
              S("div", null, K(u.title), 1)
            ], 10, Io))), 128))
          ], 4), [
            [Ve, f > 0]
          ])
        ]),
        _: 3
      }, 16);
    };
  }
});
const ko = /* @__PURE__ */ P(xo, [["__scopeId", "data-v-70e5d2d8"]]), Ao = {
  name: "LayoutHeader"
};
const et = (e) => (lt("data-v-2df690e0"), e = e(), ut(), e), No = { class: "header" }, Po = /* @__PURE__ */ et(() => /* @__PURE__ */ S("div", null, "left", -1)), Do = /* @__PURE__ */ et(() => /* @__PURE__ */ S("div", null, "right", -1)), Lo = [
  Po,
  Do
];
function Bo(e, n, t, o, r, s) {
  return d(), b("div", No, Lo);
}
const Mo = /* @__PURE__ */ P(Ao, [["render", Bo], ["__scopeId", "data-v-2df690e0"]]), Vo = {
  key: 0,
  class: "action"
}, Ro = {
  key: 0,
  class: "icon"
}, To = {
  name: "SimpleSelect"
}, Uo = /* @__PURE__ */ O({
  ...To,
  props: zt,
  setup(e) {
    const n = e, t = D(), o = t.namespace, r = U(t.namespace, "select"), s = Ce(), a = {
      ...n
    };
    fe(o) && n.allowCreate && (a.tag = !0, a.filterable = !0, a.multiple = !0), ce(n.options, (c) => a.options = c);
    function l() {
      n.action.onClick && n.action.onClick(), n.action.to && s.push(n.action.to);
    }
    return (c, g) => {
      const p = x("o-icon");
      return d(), I(N(m(r)), T(q(a)), {
        action: h(() => [
          v(c.$slots, "action", {}, () => [
            c.action ? (d(), b("div", Vo, [
              c.action.icon ? (d(), b("div", Ro, [
                L(p, T(q(c.action.icon)), null, 16)
              ])) : j("", !0),
              S("div", { onClick: l }, K(c.action.text), 1)
            ])) : j("", !0)
          ], !0)
        ]),
        arrow: h(() => [
          v(c.$slots, "arrow", {}, () => [
            H(" f ")
          ], !0)
        ]),
        _: 3
      }, 16);
    };
  }
});
const zo = /* @__PURE__ */ P(Uo, [["__scopeId", "data-v-d2d61ef9"]]), Fo = /* @__PURE__ */ O({
  __name: "header",
  props: {
    height: String
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    function t() {
      n("close");
    }
    return (o, r) => (d(), b("div", {
      class: "header",
      style: A({ height: e.height, lineHeight: e.height })
    }, [
      S("div", null, [
        v(o.$slots, "title", {}, void 0, !0)
      ]),
      S("div", {
        class: "close",
        style: A({ height: e.height, width: e.height }),
        onClick: t
      }, [
        v(o.$slots, "close", {}, void 0, !0)
      ], 4)
    ], 4));
  }
});
const jo = /* @__PURE__ */ P(Fo, [["__scopeId", "data-v-35904323"]]), Ho = { class: "footer-right" }, qo = {
  name: "Dialog"
}, Ko = /* @__PURE__ */ O({
  ...qo,
  props: Ft,
  setup(e) {
    const n = e, t = D(), o = t.namespace, r = U(o, "modal"), s = $(!1), a = n.dataId;
    W(E.COMPONENT_PARENT_DATA_ID, a);
    const l = {}, c = {
      maxWidth: "100%",
      position: "absolute",
      padding: 0,
      left: n.left,
      top: n.top,
      right: n.right,
      bottom: n.bottom,
      width: n.width + "px",
      maxHeight: n.maxHeight
    };
    fe(o) && (l.preset = "dialog", l.closeOnEsc = !1, l.maskClosable = !1, l.closable = !1, l.showIcon = !1);
    const g = V(() => n.height), p = V(() => g.value - 50 + 8), f = V(() => 50);
    J(() => {
      const _ = (k, w) => (i(), Promise.resolve()), y = (k, w) => (u(), Promise.resolve());
      t.registerAction(a, C.CANCLE, {
        action: _
      }), t.registerAction(a, C.OPEN, {
        action: y
      }), t.registerAction(a, C.DONE, {
        action: _
      });
    }), te(() => {
      t.removeAction(a, C.OPEN), t.removeAction(a, C.CANCLE), t.removeAction(a, C.DONE);
    });
    function u() {
      s.value = !0;
    }
    function i() {
      s.value = !1;
    }
    return (_, y) => {
      const k = x("o-cancle-button"), w = x("o-submit-button"), z = x("o-space");
      return d(), I(N(m(r)), B(l, {
        style: [c],
        show: s.value,
        "onUpdate:show": y[0] || (y[0] = (R) => s.value = R)
      }), {
        header: h(() => [
          v(_.$slots, "header", {}, () => [
            L(jo, {
              height: _.headerHeight,
              onClose: i
            }, {
              title: h(() => [
                H(K(_.title), 1)
              ]),
              close: h(() => [
                v(_.$slots, "close", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["height"])
          ], !0)
        ]),
        default: h(() => [
          S("div", {
            class: "content",
            style: A({ height: `${g.value}px` })
          }, [
            S("div", {
              class: "content-inner dialog-scroll",
              style: A({ height: `${p.value}px` })
            }, [
              S("div", {
                class: "content-wrapper",
                style: A({ width: `${_.width - 48}px` })
              }, [
                v(_.$slots, "default", {}, void 0, !0)
              ], 4)
            ], 4),
            S("div", {
              class: "footer",
              style: A({ height: `${f.value}px`, lineHeight: `${f.value}px` })
            }, [
              S("div", null, [
                v(_.$slots, "footer-left", {}, void 0, !0)
              ]),
              S("div", Ho, [
                v(_.$slots, "footer-right", {}, () => [
                  L(z, null, {
                    default: h(() => [
                      L(k, { size: "small" }, {
                        default: h(() => [
                          H("\u53D6\u6D88")
                        ]),
                        _: 1
                      }),
                      L(w, {
                        size: "small",
                        type: "primary"
                      }, {
                        default: h(() => [
                          H("\u786E\u5B9A")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], !0)
              ])
            ], 4)
          ], 4)
        ]),
        _: 3
      }, 16, ["style", "show"]);
    };
  }
});
const Yo = /* @__PURE__ */ P(Ko, [["__scopeId", "data-v-5f97ab7f"]]), Go = {
  name: "Drawer"
}, Wo = /* @__PURE__ */ O({
  ...Go,
  props: qt,
  setup(e) {
    const n = e, t = D(), o = U(t.namespace, "drawer"), r = U(t.namespace, "drawer-content"), s = $(!1), a = {
      width: n.width
    }, l = n.dataId;
    W(E.COMPONENT_PARENT_DATA_ID, l), J(() => {
      const p = (u, i) => (g(), Promise.resolve()), f = (u, i) => (c(), Promise.resolve());
      t.registerAction(l, C.CANCLE, {
        action: p
      }), t.registerAction(l, C.OPEN, {
        action: f
      }), t.registerAction(l, C.DONE, {
        action: p
      });
    }), te(() => {
      t.removeAction(l, C.OPEN), t.removeAction(l, C.CANCLE), t.removeAction(l, C.DONE);
    });
    function c() {
      s.value = !0;
    }
    function g() {
      s.value = !1;
    }
    return (p, f) => {
      const u = x("o-cancle-button"), i = x("o-submit-button"), _ = x("o-space");
      return d(), I(N(m(o)), B(a, {
        show: s.value,
        "onUpdate:show": f[0] || (f[0] = (y) => s.value = y)
      }), {
        default: h(() => [
          (d(), I(N(m(r)), { title: p.title }, {
            footer: h(() => [
              v(p.$slots, "footer-right", {}, () => [
                L(_, null, {
                  default: h(() => [
                    L(u, { size: "small" }, {
                      default: h(() => [
                        H("\u53D6\u6D88")
                      ]),
                      _: 1
                    }),
                    L(i, {
                      size: "small",
                      type: "primary"
                    }, {
                      default: h(() => [
                        H("\u786E\u5B9A")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            default: h(() => [
              v(p.$slots, "default")
            ]),
            _: 3
          }, 8, ["title"]))
        ]),
        _: 3
      }, 16, ["show"]);
    };
  }
}), Qo = {
  name: "Space"
}, tt = /* @__PURE__ */ O({
  ...Qo,
  props: jt,
  setup(e) {
    const n = e, t = D(), o = U(t.namespace, "space"), r = {
      ...n
    };
    return (s, a) => (d(), I(N(m(o)), T(q(r)), {
      default: h(() => [
        v(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Jo(e) {
  return e.columns.map((n) => Xo(n));
}
function Xo(e) {
  const n = e;
  return es(n), ns(n), os(n), ss(n), rs(n), as(n), ls(n), us(n), is(n), n;
}
function Zo(e, n) {
  if (n) {
    let t = n[e.key];
    return e.formatter && (t = e.formatter(n)), t;
  }
  e.render = (t) => Y("span", {}, { default: () => e.formatter(t) });
}
function es(e) {
  if (e.filterOptions) {
    const n = e.filterOptions;
    oe(n) && (e.filterOptions = n()), e.filter || (e.filter = (t, o) => {
      const r = o[e.key];
      return $e(r) ? ~r.indexOf(t) : ht(t) ? r == t ? !0 : t ? r && t : !r && !t : r == t;
    });
  }
}
function ts(e = [], n) {
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    if (o.type && o.type === "group") {
      const r = (o.children || []).find((s) => s.value == n);
      if (r)
        return r;
    } else if (o.value == n)
      return o;
  }
}
function ns(e) {
  if (!e.dict)
    return;
  let n = oe(e.dict) ? e.dict() : e.dict;
  const t = e.formatter;
  e.formatter = (o) => {
    const r = o[e.key], s = ts(n, r);
    s && s.render && (e.render = s.render);
    const a = t ? t(o) : r;
    return s ? s.label : a;
  };
}
function se(e, n) {
  return e.traits ? e.traits.find((o) => Re(o) && o.type === n || $e(o) && o === n) : void 0;
}
function pe(e) {
  return x(e);
}
function os(e) {
  !se(e, "img") || (e.render = (t) => {
    const o = t[e.key];
    return o ? Y(pe("o-image"), { src: o, width: 30 }) : Y("span");
  });
}
function ss(e) {
  !se(e, "avatarGroup") || e.render || (e.render = (t) => {
    const o = t[e.key];
    return o ? Y(pe("o-group-avatar"), { options: o }) : Y("span");
  });
}
function rs(e) {
  !se(e, "avatar") || e.render || (e.render = (t) => {
    const o = t[e.key];
    return o ? Y(pe("o-avatar"), { src: o }) : Y("span");
  });
}
function as(e) {
  if (!se(e, "timestamp") || e.render)
    return;
  const t = e.formatter;
  e.formatter = (o) => {
    const r = t ? t(o) : o[e.key];
    return r && yt(r);
  };
}
function ls(e) {
  !se(e, "tags") || e.render || (e.render = (t) => {
    let o = Zo(e, t) || [];
    return o && $e(o) && (o = o.split(",")), Te(o) || (o = [o]), o.filter((r) => r).map((r) => Y(pe("o-tag"), {
      type: "info",
      bordered: !1,
      style: {
        marginRight: "6px"
      }
    }, {
      default: () => r
    }));
  });
}
function us(e) {
  if (!se(e, "tag") || e.render)
    return;
  const o = (e.props || {}).tags || [], r = oe(e.dict) ? e.dict() : e.dict;
  e.render = (s) => {
    const a = s[e.key], l = o.find((g) => g.value == a);
    let c = r.find((g) => g.value == a);
    return !l || !c ? Y("span", {}, { default: () => a }) : Y(pe("o-tag"), l.props, { default: () => c.label });
  };
}
function is(e) {
  if (!e.filterOptions)
    return;
  const n = e.filterOptions;
  oe(n) && (e.filterOptions = n()), e.hasOwnProperty("filter") || (e.filter = (t, o) => ~(o[e.key] + "").indexOf(t + ""));
}
const cs = {
  name: "DataTable"
}, ds = /* @__PURE__ */ O({
  ...cs,
  props: Ht,
  setup(e, { expose: n }) {
    const t = e, o = D(), r = t.ns || o.namespace, s = t.dataId, a = U(o.namespace, fe(r) ? "data-table" : "table"), l = {}, c = $(!1);
    $([]);
    const g = $([]), p = $(!1), f = $(), u = $(!1), i = {
      on: null
    };
    n({
      setOptions: _,
      refresh: k
    }), te(() => {
      o.removeAction(s, C.DATA_REFRESH);
    });
    function _(w) {
      c.value || (l.columns = Jo(w), i.on = w.on, c.value = !0, o.registerAction(s, C.DATA_REFRESH, {
        action: y
      }), k());
    }
    function y(w, z) {
      return k(w, z), Promise.resolve();
    }
    function k(w, z) {
      let R = w;
      Re(w) && w.params ? (f.value = w.params, u.value = !0, R = w.params) : u.value && (R = {
        ...w,
        ...f.value
      }), Ue(z), p.value = !0, ce(i.on.load, (me) => {
        g.value = me, ae(z), p.value = !1;
      }, R);
    }
    return (w, z) => c.value ? (d(), I(N(m(a)), B({ key: 0 }, l, {
      data: g.value,
      loading: p.value
    }), {
      default: h(() => [
        v(w.$slots, "default")
      ]),
      _: 3
    }, 16, ["data", "loading"])) : j("", !0);
  }
});
function fs(e) {
  const n = $();
  return Ae(n, e), n;
}
const ps = {
  name: "Query"
}, _s = /* @__PURE__ */ O({
  ...ps,
  props: {
    modelValue: Object,
    dataId: {
      type: String,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = t.modelValue ? JSON.parse(JSON.stringify(t.modelValue)) : null, r = $(t.modelValue || {});
    W(E.QUERY_PARAMS, r);
    const s = D(), a = t.dataId;
    Ot(a), J(() => {
      s.registerAction(a, C.RESET, {
        action: l
      });
    });
    function l(c, g) {
      return Object.keys(r.value).forEach((f) => {
        const u = o ? JSON.parse(JSON.stringify(o[f])) : null;
        r.value[f] = u;
      }), n("update:modelValue", r.value), s.applyAll(a, C.DATA_REFRESH, {
        params: r.value
      }, null);
    }
    return te(() => {
      s.removeAction(a, C.RESET);
    }), (c, g) => v(c.$slots, "default", { model: r.value });
  }
}), ms = {
  name: "Data"
}, hs = /* @__PURE__ */ O({
  ...ms,
  props: {
    dataId: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e.dataId;
    return W(E.COMPONENT_PARENT_DATA_ID, t), (o, r) => v(o.$slots, "default");
  }
}), vs = {
  name: "Tree"
}, gs = /* @__PURE__ */ O({
  ...vs,
  props: Kt,
  setup(e) {
    const n = e, t = D(), o = n.ns || t.namespace, r = ee() || n.dataId, s = U(t.namespace, "tree"), a = {
      ...n
    }, l = $([]), c = $();
    Ge(o) && (a.nodeProps = ({ option: p }) => ({
      onClick() {
        const f = p == null ? void 0 : p.value;
        if (!c.value || c.value[n.keyField] != p[n.keyField]) {
          if (!f)
            return;
          c.value = p, t.applyAll(r, C.DATA_REFRESH, {
            params: f
          }, null);
        }
      }
    })), J(() => {
      g();
    });
    function g(p, f) {
      ce(n.onLoad, (u) => {
        l.value = u;
      }, null);
    }
    return (p, f) => (d(), I(N(m(s)), B(a, { data: l.value }), {
      default: h(() => [
        v(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["data"]));
  }
}), ys = {
  name: "SimpleMenu"
}, $s = /* @__PURE__ */ O({
  ...ys,
  props: Yt,
  setup(e) {
    const n = e, t = D(), o = U(t.namespace, "menu"), r = $([]), s = {
      ...n
    }, a = n.dataId || ee();
    J(() => {
      l();
    });
    function l() {
      ce(n.options, (g) => r.value = g);
    }
    function c(g, p) {
      if (p.value) {
        const f = {
          url: p.url,
          value: p.value
        };
        t.applyAll(a, C.MENU_CLICK, f, null);
        return;
      }
      if (p.url) {
        const f = ne(p.url);
        window.open(f, "_blank");
      }
    }
    return (g, p) => (d(), I(N(m(o)), B(s, {
      options: r.value,
      "onUpdate:value": c
    }), {
      default: h(() => [
        v(g.$slots, "default")
      ]),
      _: 3
    }, 16, ["options"]));
  }
}), Os = { key: 0 }, Ss = { key: 1 }, bs = {
  key: 0,
  class: "code-box"
}, Cs = ["textContent"], Is = {
  name: "DemoDoc"
}, ws = /* @__PURE__ */ O({
  ...Is,
  props: {
    url: {
      type: String,
      required: !0
    },
    codeUrl: {
      type: String,
      required: !1
    },
    title: {
      type: String
    }
  },
  setup(e) {
    const n = e, t = it({
      template: ""
    }), o = $({
      template: "",
      language: ""
    }), r = $(0), s = $(!1);
    Q(E.USER_LOCAL_STORE_KEY, !1);
    const a = window.marked;
    a || console.error("marked not found"), J(() => {
      const p = {
        heading(f, u) {
          return `
              <h${u}>
                ${f}
              </h${u}>`;
        },
        code(f, u) {
          return l(u || "", f);
        }
      };
      a.use({ renderer: p }), n.codeUrl && c(n.codeUrl, (f) => {
        let u = (f || "").trim(), i;
        if (u.startsWith("```") && u.endsWith("```")) {
          const _ = (u.indexOf(`\r
`) != -1, `\r
`);
          i = u.substring(3, u.indexOf(_)), u = u.substring(u.indexOf(i) + i.length, u.lastIndexOf("```")).trim();
        }
        o.value = {
          template: u,
          language: i
        };
      }, !1), n.url && c(n.url, (f) => {
        t.value = {
          template: f
        }, r.value++;
      });
    });
    function l(p, f) {
      if (p = (p || "").toLowerCase(), p === "code-demo")
        return f;
      {
        const u = (f || "").split(f.indexOf(`\r
`) != -1 ? `\r
` : `
`) || [];
        let i = "";
        for (let _ = 0; _ < u.length; _++) {
          const y = u[_];
          y.toLocaleLowerCase().endsWith(".html") ? i = i + `<iframe src="${y}"></iframe>` : i = i + y;
        }
        return i;
      }
    }
    function c(p, f, u = !0) {
      fetch(p).then((i) => i.text()).then((i) => f(u ? a.parse(i) : i));
    }
    function g() {
      console.log("====showCode"), s.value = !s.value;
    }
    return (p, f) => {
      const u = x("o-code-icon"), i = x("n-tooltip"), _ = x("o-span"), y = x("n-card");
      return d(), b("div", null, [
        L(y, { title: e.title }, {
          "header-extra": h(() => [
            L(_, null, {
              default: h(() => [
                L(i, { trigger: "hover" }, {
                  trigger: h(() => [
                    L(u, {
                      "font-size": 14,
                      onClick: g
                    })
                  ]),
                  default: h(() => [
                    s.value ? (d(), b("span", Ss, "\u6536\u8D77\u4EE3\u7801")) : (d(), b("span", Os, "\u663E\u793A\u4EE3\u7801"))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          footer: h(() => [
            s.value ? (d(), b("div", bs, [
              S("pre", {
                textContent: K(o.value.template),
                class: ue(o.value.language)
              }, null, 10, Cs)
            ])) : j("", !0)
          ]),
          default: h(() => [
            (d(), I(N(t.value), { key: r.value }))
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
});
const Es = /* @__PURE__ */ P(ws, [["__scopeId", "data-v-b3eb02ef"]]), xs = {
  name: "DemosDoc"
}, ks = /* @__PURE__ */ O({
  ...xs,
  props: {
    alone: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (n, t) => (d(), b("div", {
      style: A(`display:grid;gap:16px;grid-template-columns:${e.alone ? "100%" : "minmax(0, 1fr) minmax(0, 1fr)"}`)
    }, [
      v(n.$slots, "default")
    ], 4));
  }
}), Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OView: pt,
  IframeView: Xt,
  OButton: Ne,
  parseProps: Pe,
  OLoginButton: rn,
  OSubmitButton: We,
  OCancleButton: un,
  OAddButton: dn,
  ORefreshButton: pn,
  OResetButton: mn,
  OContext: vn,
  useRouter: Ce,
  useUser: gn,
  OForm: Sn,
  useForm: bn,
  OUserLoginForm: En,
  useUserLoginForm: xn,
  OInput: Qe,
  OUsernameInput: Ln,
  OPasswordInput: Mn,
  OIcon: Je,
  OCloseIcon: jn,
  OSvgIcon: Yn,
  ORefreshIcon: Xe,
  OCopyIcon: no,
  OCodeIcon: Ze,
  OLayout: uo,
  useLayout: io,
  OSliderLayout: po,
  OSimpleLayout: ho,
  OLayoutMenu: ko,
  OLayoutHeader: Mo,
  OSimpleSelect: zo,
  ODialog: Yo,
  ODrawer: Wo,
  OSpace: tt,
  ODataTable: ds,
  useDataTable: fs,
  OQuery: _s,
  OData: hs,
  OTree: gs,
  OSimpleMenu: $s,
  ODemoDoc: Es,
  ODemosDoc: ks
}, Symbol.toStringTag, { value: "Module" })), As = "1.0.0";
function nt({ componentPrefix: e = "O", components: n = [] } = {}) {
  const t = [];
  function o(s, a, l) {
    s.component(e + a) || s.component(e + a, l);
  }
  function r(s) {
    t.includes(s) || (t.push(s), n.forEach((a) => {
      const { name: l, alias: c } = a;
      o(s, l, a), c && c.forEach((g) => {
        o(s, g, a);
      });
    }));
  }
  return {
    version: As,
    componentPrefix: e,
    install: r
  };
}
const Ns = nt({
  components: Object.keys(Le).map((e) => Le[e])
}), Ms = Ns.install, Ps = nt({
  components: [
    Qe,
    Je,
    tt,
    Ne,
    We,
    Xe,
    Ze
  ]
});
function Ds(e) {
  e.use(Ps);
}
function Be(e, n) {
  return e.sort((t, o) => t[n] - o[n]);
}
function Vs(e, n) {
  const t = [], o = {};
  if (e.length > 0 && !e[0].hasOwnProperty("id"))
    return e;
  e.forEach((s) => o[s.id] = s), e.forEach((s) => {
    const a = o[s.parentId];
    n && n(s), a ? (s._level = a._level + 1, (a.children || (a.children = [])).push(s)) : (s._level = 1, t.push(s));
  });
  const r = (s, a = 1) => {
    s.map((l) => {
      l._level = a, l.children instanceof Array && (l.children = Be(l.children, "orderNum"), a < 1e3 && r(l.children, a + 1));
    });
  };
  return r(t), Be(t, "orderNum");
}
async function Rs(e) {
  Ds(e);
}
export {
  Xt as IframeView,
  dn as OAddButton,
  Ne as OButton,
  un as OCancleButton,
  jn as OCloseIcon,
  Ze as OCodeIcon,
  vn as OContext,
  no as OCopyIcon,
  hs as OData,
  ds as ODataTable,
  Es as ODemoDoc,
  ks as ODemosDoc,
  Yo as ODialog,
  Wo as ODrawer,
  Sn as OForm,
  Je as OIcon,
  Qe as OInput,
  uo as OLayout,
  Mo as OLayoutHeader,
  ko as OLayoutMenu,
  rn as OLoginButton,
  Mn as OPasswordInput,
  _s as OQuery,
  pn as ORefreshButton,
  Xe as ORefreshIcon,
  mn as OResetButton,
  ho as OSimpleLayout,
  $s as OSimpleMenu,
  zo as OSimpleSelect,
  po as OSliderLayout,
  tt as OSpace,
  We as OSubmitButton,
  Yn as OSvgIcon,
  gs as OTree,
  En as OUserLoginForm,
  Ln as OUsernameInput,
  pt as OView,
  Rs as bootstrap,
  nt as create,
  Vs as deepTree,
  Ns as default,
  Ms as install,
  Pe as parseProps,
  Ds as setupOcean,
  fs as useDataTable,
  bn as useForm,
  io as useLayout,
  Ce as useRouter,
  gn as useUser,
  xn as useUserLoginForm
};
