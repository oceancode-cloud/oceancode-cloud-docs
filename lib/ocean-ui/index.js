import { defineComponent as I, unref as m, openBlock as i, createBlock as E, resolveDynamicComponent as D, withCtx as $, renderSlot as h, nextTick as at, watch as fe, inject as X, provide as Q, ref as b, onMounted as W, onBeforeUnmount as Z, withDirectives as Me, createElementBlock as O, vShow as Be, mergeProps as T, createTextVNode as H, resolveComponent as x, normalizeProps as z, guardReactiveProps as K, createVNode as B, computed as N, createSlots as lt, Fragment as de, toDisplayString as q, renderList as ge, createCommentVNode as V, defineExpose as ut, createElementVNode as S, normalizeStyle as k, normalizeClass as te, pushScopeId as Ve, popScopeId as Te, h as Y, shallowRef as it } from "vue";
const ct = {
  tag: {
    type: String
  }
}, dt = I({
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
  return i(), E(D(e.componentName), null, {
    default: $(() => [
      h(e.$slots, "default")
    ]),
    _: 3
  });
}
const pt = /* @__PURE__ */ P(dt, [["render", ft]]);
var A = /* @__PURE__ */ ((e) => (e.CONFIG_KEY = "__config__", e.FORM_VISIBLE = "__form_visible__", e.COMPONENT_PARENT_DATA_ID = "__component_parent_data_id__", e.LAYOUT_CONFIG = "__layout_config__", e.USER_INFO = "__user__info__", e.USER_LOCAL_STORE_KEY = "__user_info__", e.TOKEN_LOCAL_KEY = "__TOKEN_", e.LOCAL_PROJECT_ID = "__PROJECT_ID__", e.QUERY_PARAMS = "__query_params__", e.USE_GRIDE_ITEM = "__use_grid_item__", e))(A || {});
const _t = Object.prototype.toString;
function ne(e, n) {
  return _t.call(e) === `[object ${n}]`;
}
function re(e) {
  return ne(e, "Function") || ne(e, "AsyncFunction");
}
const Ue = (e) => e !== null && ne(e, "Object");
function mt(e) {
  return ne(e, "Number");
}
function ke(e) {
  return ne(e, "Promise");
}
function Oe(e) {
  return ne(e, "String");
}
function ht(e) {
  return ne(e, "Boolean");
}
function ze(e) {
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
  at(() => {
    e && e.value ? e.value.setOptions(n) : fe(
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
function ae(e, n, t) {
  if (re(e)) {
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
  } else if (ze(e)) {
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
  return Oe(e) ? (n = parseInt(e), e.trim().length <= 10 && (n = n * 1e3)) : mt(e) ? (n = e, (e + "").length <= 10 && (n = n * 1e3)) : t = e, t || (t = new Date(n)), {
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
function oe() {
  return X(A.LAYOUT_CONFIG);
}
function M() {
  return X(A.CONFIG_KEY);
}
function Ot(e) {
  e && Q(A.COMPONENT_PARENT_DATA_ID, e);
}
function St() {
  const e = X(A.QUERY_PARAMS);
  return e ? {
    params: e.value
  } : null;
}
function F(e, n) {
  return e ? `${e}-${n}` : n;
}
function pe(e) {
  return e === "n";
}
function bt() {
  const e = X(A.FORM_VISIBLE);
  return e === !1 || e === !0 ? e : !0;
}
function J() {
  return X(A.COMPONENT_PARENT_DATA_ID) || null;
}
function Fe(e) {
  e && e.start && e.start();
}
function ie(e) {
  e && e.done && e.done();
}
function ve(e) {
  e && e.close && e.close();
}
function je(e, n) {
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
var w = /* @__PURE__ */ ((e) => (e.OPEN = "open", e.DONE = "done", e.CLOSE = "close", e.DATA_REFRESH = "data-refresh", e.SUBMIT = "submit", e.CANCLE = "cancle", e.RESET = "reset", e.MENU_CLICK = "menu-click", e.SLIDER_CLICK = "slider-click", e))(w || {});
function It(e, n, t) {
  if (!e) {
    ie(n), ve(n);
    return;
  }
  ke(e) ? e.then(() => {
    ie(n), ve(n), t && t();
  }).catch((o) => je(n, o)) : re(e) && (e(), ie(n), ve(n));
}
var ye = /* @__PURE__ */ ((e) => (e.BACKGROUND_COLOR = "#f0f2f5", e.MENU_BACKGROUND_COLOR = "#001529", e))(ye || {});
const He = {
  onLoad: Function
};
var $e = /* @__PURE__ */ ((e) => (e.BLANK = "_blank", e.SLEF = "_self", e))($e || {});
function se(e) {
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
    const t = se(n);
    if (t) {
      window.open(t, n.target ? n.target : $e.BLANK);
      return;
    }
  }
}
var ce = /* @__PURE__ */ ((e) => (e.TAB = "tab", e.COLUMN = "column", e))(ce || {});
function Et(e) {
  return {
    setPropValue: (n, t) => {
      e.formValue.value[n] = t, Ke(e.refs[n]);
    },
    getPropValue: (n) => e.formValue.value[n],
    getValues: (n) => At(e, n),
    scrollToProp: (n) => kt(e.refs[n]),
    reset: () => xt(e)
  };
}
function Ke(e) {
  e.el.updateValue();
}
function xt(e) {
  Object.keys(e.oldFormValue).forEach((n) => {
    e.formValue.value[n] = e.oldFormValue[n], Ke(e.refs[n]);
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
  const l = n.ns ? n.ns : e.namespace;
  if (s.name = F(l, "form"), Pt(s, e, t, l), t.on && t.on.info) {
    const a = t.on.info(t.formValue);
    ke(a) ? a.then((u) => {
      xe(s, n, t, o, u), r(s);
    }) : (xe(s, n, t, o, a), r(s));
  } else
    xe(s, n, t, o), r(s);
}
function Pt(e, n, t, o) {
  const r = {}, s = t.props || {};
  pe(o) && (s.labelWitdth || (r.labelWitdth = "220px"), s.labelPlacement || (r.labelPlacement = "left")), e.props = r;
}
function xe(e, n, t, o, r) {
  e.formValue = {}, e.rules = {}, Lt(e, t, o, r);
}
function Lt(e, n, t, o) {
  const s = (n.items || []).map((a) => {
    a.type != ce.TAB && (Dt(e, a, t, n.formValue, o), Rt(e, a, t));
    const u = a.show ? () => a.show(t.formValue.value) : null;
    return {
      label: a.label,
      prop: a.prop,
      tooltip: a.tooltip,
      component: a.component,
      show: u,
      slot: a.slot,
      rules: a.rules,
      traits: a.traits,
      type: a.type,
      group: a.group,
      on: a.on,
      children: []
    };
  });
  e.items = s.filter((a) => a.type === ce.TAB);
  const l = s.filter((a) => a.type != ce.TAB);
  e.items.forEach((a) => {
    a.children = l.filter((u) => u.group === a.type);
  }), e.items = e.items.concat(l);
}
function Dt(e, n, t, o, r) {
  let s = n.value;
  r ? s = r[n.prop] : o && Object.keys(o).indexOf(n.prop) != -1 && (s = o[n.prop]), e.formValue[n.prop] = s, t.oldFormValue[n.prop] = s;
}
function Rt(e, n, t) {
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
const qe = {
  component: Object,
  ns: String,
  color: String,
  size: Object,
  rotate: Number,
  type: String,
  name: String,
  spin: Boolean
}, Ye = {
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
}, We = {
  ...Ye,
  size: {
    type: String,
    default: "large"
  },
  icon: qe
}, Bt = {
  ...We
};
function Vt(e, n) {
  const t = {};
  t.name = F(e.namespace, "input"), t.props = {
    ...n
  };
  const o = n.ns || e.namespace;
  return pe(o) && n.size === "mini" && (t.props.size = "tiny"), t;
}
const Se = {
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
  ...Se
}, be = {
  ...Se
}, Ut = {
  ...Se,
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
}, Kt = {
  title: String,
  dataId: {
    type: String,
    required: !0
  },
  width: {
    type: Number,
    default: 502
  }
}, qt = {
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
}, Wt = {
  dataId: String,
  src: String
}, Gt = ["src"], Qt = {
  name: "IframeView"
}, Jt = /* @__PURE__ */ I({
  ...Qt,
  props: Wt,
  setup(e) {
    const n = e, t = M(), o = n.dataId || J(), r = b(n.src), s = b(0);
    return W(() => {
      t.registerAction(o, w.MENU_CLICK, {
        action: (l, a) => {
          console.log(l);
          const u = l;
          return u && (r.value = se(u.url), s.value++), Promise.resolve();
        }
      });
    }), Z(() => {
      t.removeAction(o, w.MENU_CLICK);
    }), (l, a) => Me((i(), O("iframe", {
      class: "iframe",
      key: s.value,
      border: "0",
      src: r.value
    }, null, 8, Gt)), [
      [Be, r.value]
    ]);
  }
});
const Xt = /* @__PURE__ */ P(Jt, [["__scopeId", "data-v-4c75b4e8"]]);
function Ge(e, n) {
  const t = Ce(e);
  return t ? `${t}-${n}` : n;
}
function Ce(e) {
  if (e)
    return e;
  const n = X("_config");
  return n ? n.namespace : "n";
}
function Qe(e) {
  return Ce(e) === "n";
}
function Zt(e) {
  return Ce(e) === "el";
}
function en(e) {
  return Ce(e) === "van";
}
const tn = I({
  name: "Button",
  props: Se,
  setup(e, { attrs: n }) {
    const t = Pe(e, n), o = M(), r = b(!1), s = J() || e.dataId, l = St(), a = (u) => {
      const C = e.action != w.DATA_REFRESH;
      o.applyAll(s, e.action, l, {
        start: () => r.value = C,
        done: () => {
          r.value = !1, o.applyAll(s, w.DONE, null, null), e.action === w.SUBMIT && o.applyAll(vt(s).dataId, w.DATA_REFRESH, null, null);
        },
        close: () => r.value = !1
      });
    };
    return {
      componentName: Ge(e.ns, "button"),
      componentProps: t.props,
      styleSheet: t.style,
      handleClick: a,
      loading: r
    };
  }
});
function nn(e, n, t, o, r, s) {
  return i(), E(D(e.componentName), T(e.componentProps, {
    style: [e.styleSheet],
    onClick: e.handleClick,
    loading: e.loading
  }), {
    default: $(() => [
      h(e.$slots, "default")
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
  return e.long && (o.block = !0), Zt(t) ? ((e.block || e.long) && (r.width = "100%"), e.bordered || (r.border = "0px"), o.plain = e.plain, e.dashed && (r["border-style"] = "dashed", o.plain = !0), e.type === "error" ? o.type = "danger" : e.type === "text" ? o.text = !0 : e.type === "link" && (o.tag = "a", o.text = !0, o.href = se(e.url), o.target = e.url.target || $e.BLANK), e.shape === "circle" ? o.circle = !0 : e.shape === "round" && (o.round = !0), e.size === "mini" ? o.size = "small" : e.size === "medium" && (o.size = "default")) : Qe(t) ? (o.ghost = e.plain, e.shape === "circle" && (o.circle = !0), o.block = e.block || e.long, o.iconPlacement = e.iconPlacement, o.renderIcon = e.renderIcon, e.type === "primary" ? o.type = "info" : e.type === "text" ? o.text = !0 : e.type === "link" && (o.tag = "a", o.text = !0, o.href = se(e.url), o.target = e.url && e.url.target ? e.url.target : $e.BLANK), e.shape === "circle" ? o.circle = !0 : e.shape === "round" && (o.round = !0), e.size === "mini" && (o.size = "tiny")) : en(t) && (e.type === "error" ? o.type = "danger" : (e.type === "text" || e.type === "link") && console.warn("not support ", e.type), e.shape === "circle" ? o.round = !0 : e.shape === "round" ? o.square = !1 : o.square = !0, e.size === "medium" && (o.size = "small"), o.block = e.block || e.long, o["icon-position"] = e.iconPlacement, e.dashed && (r["border-style"] = "dashed", o.plain = !0), e.url && (o.url = se(e.url)), o.replace = e.url && e.url.replace || e.to && e.to.replace), {
    props: o,
    style: r
  };
}
const on = I({
  name: "LoginButton",
  props: Tt,
  components: { OButton: Ne },
  setup(e, { attrs: n }) {
    const t = Pe(e, n), o = b(!1), r = M(), s = J() || e.dataId, l = () => {
      r.applyAll(
        s,
        w.SUBMIT,
        null,
        {
          start: () => o.value = !0,
          done: () => o.value = !1,
          close: () => o.value = !1
        }
      );
    };
    return {
      componentName: Ge(null, "button"),
      componentProps: gt(t.props, {
        size: "large",
        type: "info",
        long: !0,
        block: !0
      }),
      styleSheet: t.style,
      loading: o,
      handleClick: l
    };
  }
});
function sn(e, n, t, o, r, s) {
  return i(), E(D(e.componentName), T(e.componentProps, {
    loading: e.loading,
    style: [e.styleSheet],
    onClick: e.handleClick
  }), {
    default: $(() => [
      h(e.$slots, "default", {}, () => [
        H("\u767B\u5F55")
      ])
    ]),
    _: 3
  }, 16, ["loading", "style", "onClick"]);
}
const rn = /* @__PURE__ */ P(on, [["render", sn]]), an = {
  name: "SubmitButton"
}, Je = /* @__PURE__ */ I({
  ...an,
  props: be,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "submit", (o, r) => {
      const s = x("o-button");
      return i(), E(s, T({ type: "primary" }, t), {
        default: $(() => [
          h(o.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), ln = {
  name: "CancleButton"
}, un = /* @__PURE__ */ I({
  ...ln,
  props: be,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "cancle", (o, r) => {
      const s = x("o-button");
      return i(), E(s, z(K(t)), {
        default: $(() => [
          h(o.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), cn = {
  name: "AddButton"
}, dn = /* @__PURE__ */ I({
  ...cn,
  props: Ut,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "open", (o, r) => {
      const s = x("o-button");
      return i(), E(s, z(K(t)), {
        default: $(() => [
          h(o.$slots, "default", {}, () => [
            H(" \u65B0\u589E ")
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), fn = {
  name: "RefreshButton"
}, pn = /* @__PURE__ */ I({
  ...fn,
  props: be,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "data-refresh", (o, r) => {
      const s = x("o-refresh-icon"), l = x("o-button");
      return i(), E(l, z(K(t)), {
        default: $(() => [
          h(o.$slots, "default", {}, () => [
            B(s)
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), _n = {
  name: "ResetButton"
}, mn = /* @__PURE__ */ I({
  ..._n,
  props: be,
  setup(e) {
    const t = {
      ...e
    };
    return t.action = "reset", (o, r) => {
      const s = x("o-button");
      return i(), E(s, z(K(t)), {
        default: $(() => [
          h(o.$slots, "default", {}, () => [
            H("\u91CD\u7F6E")
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), G = null, hn = {
  name: "Context"
}, vn = /* @__PURE__ */ I({
  ...hn,
  props: Ct,
  setup(e) {
    const n = e, t = {
      namespace: n.namespace,
      config: n.config,
      registerAction: l,
      removeAction: a,
      removeActions: u,
      applyAll: C,
      setLayoutConfig: g
    }, o = b({
      token: "",
      userInfo: {}
    });
    Q(A.CONFIG_KEY, t), Q(A.USER_INFO, o);
    const r = b();
    Q(A.LAYOUT_CONFIG, r);
    const s = {};
    function l(c, d, f) {
      if (c || (c = "default"), !d)
        throw new Error("actionType must not empty.");
      if (!f)
        throw new Error("actionItem must not empty.");
      s[c] || (s[c] = {});
      const p = s[c];
      p[d] || (p[d] = []), p[d].push(f);
    }
    function a(c, d) {
      s[c] || (c = "default");
      const f = s[c];
      if (!f[d]) {
        s[c] = null;
        return;
      }
      const p = f[d];
      p.forEach((y) => {
        y.action = null, y = null;
      }), p.length = 0, f[d] = null;
    }
    function u(c) {
      if (c || (c = "default"), !s[c])
        return;
      const d = s[c];
      Object.keys(d).forEach((f) => {
        a(c, f);
      }), s[c] = null;
    }
    function C(c, d, f, p) {
      c || (c = "default");
      const y = s[c];
      if (!y)
        return;
      const v = d instanceof Array ? d : [d], L = [];
      return Object.keys(y).filter((R) => v.indexOf(R) != -1).forEach((R) => {
        y[R].forEach((me) => L.push(_(me.action, f, p)));
      }), Promise.all(L);
    }
    function _(c, d, f) {
      return new Promise((p, y) => {
        c(d, f).then((v) => p(v)).catch((v) => y(v));
      });
    }
    function g(c) {
      r.value = c;
    }
    return Z(() => {
      Object.keys(s).forEach((c) => u(c));
    }), (c, d) => (i(), O("div", null, [
      h(c.$slots, "default")
    ]));
  }
});
function Ie() {
  const e = M().config;
  return {
    push: (n) => {
      e && e.router ? e.router.push(n) : console.warn("router not implement.please implement router api.push failed", n);
    }
  };
}
function gn() {
  const e = X(A.USER_INFO), n = M(), t = n ? n.config : null, o = !!(t && t.crypto), r = {
    setToken: (s) => {
      !s || (e.value.token = s, o && (s = t.crypto.encode(s)), G.set(A.TOKEN_LOCAL_KEY, s, 60 * 60));
    },
    getToken: () => {
      if (e.value.token)
        return e.value.token;
      let s = G.get(A.TOKEN_LOCAL_KEY);
      return o && (s = t.crypto.decode(s)), e.value.token = s, s;
    },
    setUserInfo: (s) => {
      if (!s)
        return;
      e.value.userInfo = s;
      let l = JSON.stringify(s);
      o && (l = t.crypto.encode(l)), G.set(A.USER_LOCAL_STORE_KEY, l, 60 * 60);
    },
    getUserInfo: () => {
      if (e.value.userInfo)
        return e.value.userInfo;
      let s = G.get(A.USER_LOCAL_STORE_KEY);
      if (!!s)
        return o && (s = t.crypto.decode(s)), s = s ? JSON.parse(s) : null, e.value.userInfo = s, s;
    },
    setLoginResponse: (s) => {
      r.setToken(s.token), r.setUserInfo(s.userInfo);
    },
    logout: () => {
      G.remove(A.USER_LOCAL_STORE_KEY), G.remove(A.TOKEN_LOCAL_KEY), e.value.token = null, e.value.userInfo = null;
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
    const t = e, o = t.ns ? t.ns : M().namespace, r = N(() => F(o, "form-item")), s = N(() => {
      const d = {};
      return d.label = t.item.label, d.path = t.item.prop, d;
    }), l = b(0), a = N(() => {
      const d = {
        componentName: "",
        props: null,
        style: null
      };
      let f = "input";
      const p = t.item.component;
      return p && (p.render ? d.componentName = p.render(t.formValue) : p.name && (f = p.name), d.props = p.props || {}, p.attrs && (d.props = { ...d.props, ...p.attrs })), d.componentName || (d.componentName = F(o, f)), d;
    }), u = b(t.formValue[t.item.prop]), C = t.item.on && t.item.on.change;
    fe(
      () => u.value,
      (d, f) => {
        t.formValue[t.item.prop] = d, C && t.item.on.change(d, f, t.formValue);
      }
    );
    const _ = b();
    function g() {
      _.value.$el.scrollIntoView({
        behavior: "smooth",
        top: 0
      });
    }
    function c() {
      u.value = t.formValue[t.item.prop], l.value++;
    }
    return n({
      scrollTo: g,
      updateValue: c
    }), (d, f) => {
      const p = x("n-icon"), y = x("n-tooltip");
      return i(), E(D(r.value), z(K(s.value)), lt({
        default: $(() => [
          e.item.slot ? h(d.$slots, "default", { key: 0 }) : (i(), O(de, { key: 1 }, [
            e.item.component && e.item.component.render ? (i(), E(D(a.value.componentName), T({
              key: 0,
              style: a.value.style
            }, a.value.props, {
              modelValue: u.value,
              "onUpdate:modelValue": f[0] || (f[0] = (v) => u.value = v),
              ref_key: "itemRef",
              ref: _,
              key: l.value
            }), null, 16, ["style", "modelValue"])) : (i(), E(D(a.value.componentName), T({
              key: 1,
              style: a.value.style
            }, a.value.props, {
              value: u.value,
              "onUpdate:value": f[1] || (f[1] = (v) => u.value = v),
              ref_key: "itemRef",
              ref: _,
              key: l.value + 1
            }), null, 16, ["style", "value"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.item.tooltip ? {
          name: "label",
          fn: $(() => [
            H(q(e.item.label) + " ", 1),
            B(y, { trigger: "hover" }, {
              trigger: $(() => [
                B(p, {
                  size: "18",
                  class: "cursor-pointer text-gray-400",
                  component: e.item.tooltip.icon
                }, null, 8, ["component"])
              ]),
              default: $(() => [
                H(" " + q(e.item.tooltip.message), 1)
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
}, Sn = /* @__PURE__ */ I({
  ...On,
  props: {
    dataId: {
      type: String,
      required: !0
    },
    ns: String
  },
  setup(e, { expose: n }) {
    const t = e, o = b([]), r = b({}), s = b(!1), l = b({}), a = {}, u = b(""), C = b(), _ = {}, g = M(), c = bt(), d = J(), f = b();
    let p = null;
    const y = he();
    function v(ee) {
      s.value || Nt(g, t, ee, { formValue: l, oldFormValue: a }, (U) => {
        u.value = U.name, o.value = U.items, C.value = U.rules, l.value = U.formValue, C.value = U.rules, r.value = U.props, s.value = !0, p = ee.on, g.registerAction(y, w.SUBMIT, {
          action: (j, ue) => me(j, ue)
        });
      });
    }
    Z(() => {
      g.removeAction(y, w.SUBMIT);
    });
    function L(ee, U) {
      _[U.prop] = {
        el: ee
      };
    }
    const R = Et({ formValue: l, oldFormValue: a, refs: _ });
    n({
      setOptions: v,
      isVisible: () => c,
      getParentDataId: () => d,
      ...R
    });
    function me(ee, U, j) {
      return new Promise((ue, we) => {
        var Le;
        j && j.preventDefault(), (Le = f.value) == null || Le.validate((Ee) => {
          if (Ee)
            je(U, Ee), we(Ee);
          else {
            if (Object.keys(R.getValues(!0)).length > 0) {
              Fe(U);
              const rt = p.submit(R.getValues(), U);
              It(rt, U, () => g.applyAll(he(), w.DATA_REFRESH));
            } else
              ie(U), ve(U);
            ue(null);
          }
        });
      });
    }
    function he() {
      return J() || t.dataId;
    }
    return (ee, U) => s.value ? (i(), E(D(u.value), T({ key: 0 }, r.value, {
      model: l.value,
      rules: C.value,
      ref_key: "formRef",
      ref: f
    }), {
      default: $(() => [
        (i(!0), O(de, null, ge(o.value, (j, ue) => (i(), O("span", { key: ue }, [
          j.type === m(ce).TAB ? (i(), O("span", $n, q(j), 1)) : (i(), E(yn, {
            key: 1,
            item: j,
            formValue: l.value,
            ns: e.ns,
            ref_for: !0,
            ref: (we) => L(we, j)
          }, {
            default: $(() => [
              j.slot ? h(ee.$slots, j.slot, {
                key: 0,
                row: l.value,
                value: l.value[j.prop]
              }) : V("", !0)
            ]),
            _: 2
          }, 1032, ["item", "formValue", "ns"]))
        ]))), 128))
      ]),
      _: 3
    }, 16, ["model", "rules"])) : V("", !0);
  }
});
function bn(e) {
  const n = b();
  return Ae(n, e), n;
}
const Cn = {}, In = I({
  name: "UserLoginForm",
  props: Cn,
  setup(e) {
    return ut({
      setOptions: (t) => {
      }
    }), {
      a: "qinjiawang"
    };
  }
});
function wn(e, n, t, o, r, s) {
  const l = x("o-view");
  return i(), E(l, null, {
    default: $(() => [
      h(e.$slots, "default")
    ]),
    _: 3
  });
}
const En = /* @__PURE__ */ P(In, [["render", wn]]);
function xn(e) {
  const n = b();
  return Ae(n, e), n;
}
const kn = { style: { width: "100%" } }, An = {
  key: 0,
  class: "tooltip"
}, Nn = {
  name: "Input"
}, Pn = /* @__PURE__ */ I({
  ...Nn,
  props: Ye,
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = b(t.modelValue), r = M(), s = Vt(r, t);
    fe(
      () => o.value,
      (a) => {
        n("update:modelValue", a);
      }
    );
    function l() {
      if (!t.tooltip)
        return;
      const a = t.tooltip;
      a.onClick && a.onClick(o.value), wt(a.to, a.url);
    }
    return (a, u) => (i(), O("div", kn, [
      S("div", null, [
        (i(), E(D(m(s).name), T(m(s).props, {
          value: o.value,
          "onUpdate:value": u[0] || (u[0] = (C) => o.value = C)
        }), {
          prefix: $(() => [
            h(a.$slots, "prefix", {}, void 0, !0)
          ]),
          _: 3
        }, 16, ["value"]))
      ]),
      S("span", { onClick: l }, [
        h(a.$slots, "tooltip", {}, () => [
          a.tooltip ? (i(), O("span", An, q(a.tooltip.message), 1)) : V("", !0)
        ], !0)
      ])
    ]));
  }
});
const Xe = /* @__PURE__ */ P(Pn, [["__scopeId", "data-v-a1ef52fd"]]), Ln = {
  name: "UsernameInput"
}, Dn = /* @__PURE__ */ I({
  ...Ln,
  props: We,
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const o = b(e.modelValue);
    fe(
      () => o.value,
      (s) => {
        n("update:modelValue", s);
      }
    );
    function r(s) {
      const l = { ...s };
      return l.placeholder || (l.placeholder = "\u8BF7\u8F93\u5165\u767B\u5F55\u8D26\u53F7"), l.size || (l.size = "large"), l.icon && (l.icon.size || (l.icon.size = 18)), l;
    }
    return (s, l) => {
      const a = x("o-icon");
      return i(), E(D("o-input"), T(r(s.$props), {
        modelValue: o.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => o.value = u)
      }), {
        prefix: $(() => [
          h(s.$slots, "icon", {}, () => [
            s.icon ? (i(), E(a, z(T({ key: 0 }, s.icon)), null, 16)) : V("", !0)
          ])
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
}), Rn = {
  name: "PasswordInput"
}, Mn = /* @__PURE__ */ I({
  ...Rn,
  props: Bt,
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const o = b(e.modelValue);
    fe(
      () => o.value,
      (s) => {
        n("update:modelValue", s);
      }
    );
    function r(s) {
      const l = { ...s };
      return l.placeholder || (l.placeholder = "\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"), l.size || (l.size = "large"), l.icon && (l.icon.size || (l.icon.size = 18)), l.type = "password", l;
    }
    return (s, l) => {
      const a = x("o-icon");
      return i(), E(D("o-input"), T(r(s.$props), {
        modelValue: o.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => o.value = u)
      }), {
        prefix: $(() => [
          h(s.$slots, "icon", {}, () => [
            s.icon ? (i(), E(a, z(T({ key: 0 }, s.icon)), null, 16)) : V("", !0)
          ])
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
}), Bn = {
  name: "Icon"
}, Vn = /* @__PURE__ */ I({
  ...Bn,
  props: qe,
  setup(e) {
    const n = e, t = M(), o = F(n.ns || t.namespace, "icon"), r = {}, s = {
      color: n.color,
      size: n.size
    };
    return s.component = n.component, n.rotate && (r.transform = `rotate(${n.rotate}deg)`), n.component || (s.class = n.type + n.name), n.spin && (s.class = "icon-spin"), (l, a) => (i(), E(D(m(o)), T(s, {
      style: [r]
    }), null, 16, ["style"]));
  }
});
const Ze = /* @__PURE__ */ P(Vn, [["__scopeId", "data-v-04e04ec5"]]), Tn = ["width", "height"], Un = ["fill"], zn = {
  name: "CloseIcon"
}, Fn = /* @__PURE__ */ I({
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
    return (n, t) => (i(), O("svg", {
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
const jn = /* @__PURE__ */ P(Fn, [["__scopeId", "data-v-56c249a3"]]), Hn = ["xlink:href"], Kn = {
  name: "SvgIcon"
}, qn = /* @__PURE__ */ I({
  ...Kn,
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
    function t(l) {
      return /^(https?:|mailto:|tel:)/.test(l);
    }
    const o = N(() => t(n.icon)), r = N(() => ({
      mask: `url(${n.icon}) no-repeat 50% 50%`,
      "-webkit-mask": `url(${n.icon}) no-repeat 50% 50%`
    })), s = N(() => `#icon-${n.icon}`);
    return (l, a) => o.value ? (i(), O("div", {
      key: 0,
      style: k(r.value),
      class: te(["svg-external-icon svg-icon", e.className])
    }, null, 6)) : (i(), O("svg", {
      key: 1,
      class: te(["svg-icon", e.className]),
      "aria-hidden": "true"
    }, [
      S("use", { "xlink:href": s.value }, null, 8, Hn)
    ], 2));
  }
});
const Yn = /* @__PURE__ */ P(qn, [["__scopeId", "data-v-699aa19d"]]), Wn = ["width", "height"], Gn = ["fill"], Qn = {
  name: "RefreshIcon"
}, Jn = /* @__PURE__ */ I({
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
    return (n, t) => (i(), O("svg", {
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
      }, null, 8, Gn)
    ], 8, Wn));
  }
});
const et = /* @__PURE__ */ P(Jn, [["__scopeId", "data-v-782245e7"]]), Xn = ["width", "height"], Zn = ["fill"], eo = {
  name: "CopyIcon"
}, to = /* @__PURE__ */ I({
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
    return (n, t) => (i(), O("svg", {
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
}, ao = /* @__PURE__ */ I({
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
    return (n, t) => (i(), O("svg", {
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
const tt = /* @__PURE__ */ P(ao, [["__scopeId", "data-v-3bfd490c"]]), lo = {
  name: "Layout"
}, uo = /* @__PURE__ */ I({
  ...lo,
  setup(e) {
    const n = {
      header: {
        height: 50
      },
      slider: {
        width: 0
      },
      backgroundColor: ye.BACKGROUND_COLOR,
      menu: {
        width: 80,
        backgroundColor: ye.MENU_BACKGROUND_COLOR,
        color: "#fff"
      },
      subMenu: {
        width: 170
      },
      content: {
        offsets: [11, 10, 0, 10]
      }
    };
    return M().setLayoutConfig(n), (o, r) => h(o.$slots, "default");
  }
});
function io() {
  const e = oe();
  return {
    setBackgroundColor: (t) => e.value.backgroundColor = t,
    setLogo: (t) => e.value.menu.logo = t,
    setActiveMenu: (t) => e.value.menu.activeMenuItem = t,
    setProjectId: (t) => {
      G.set(A.LOCAL_PROJECT_ID, t, 1);
    },
    getProjectId: () => G.get(A.LOCAL_PROJECT_ID)
  };
}
const co = {
  name: "SliderLayout"
}, fo = /* @__PURE__ */ I({
  ...co,
  props: {
    overflow: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = oe(), t = N(() => {
      if (!n.value.menu.activeMenuItem)
        return 0;
      const o = n.value.menu.activeMenuItem;
      return o.children && o.children.length > 0 ? n.value.subMenu.width : 0;
    });
    return (o, r) => (i(), O("div", {
      class: "o-slider-layout",
      style: k({
        backgroundColor: m(n).backgroundColor
      })
    }, [
      S("div", {
        class: "header",
        style: k({
          height: `${m(n).header.height}px`,
          left: `${m(n).menu.width + t.value}px`,
          lineHeight: `${m(n).header.height}px`
        })
      }, [
        h(o.$slots, "header", {}, void 0, !0)
      ], 4),
      S("div", {
        class: "menu",
        style: k({
          width: `${m(n).menu.width}px`,
          backgroundColor: m(n).menu.backgroundColor,
          color: m(n).menu.color
        })
      }, [
        h(o.$slots, "menu", {}, void 0, !0)
      ], 4),
      S("div", {
        class: "content",
        style: k({
          top: `${m(n).header.height}px`,
          left: `${m(n).menu.width + t.value}px`,
          backgroundColor: m(n).content.backgroundColor
        })
      }, [
        S("div", {
          class: "content-inner",
          style: k({
            top: `${m(n).content.offsets[0]}px`,
            right: `${m(n).content.offsets[1]}px`,
            bottom: `${m(n).content.offsets[2]}px`,
            left: `${m(n).content.offsets[3]}px`,
            overflowY: `${e.overflow ? "auto" : "hidden"}`
          })
        }, [
          h(o.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 4)
    ], 4));
  }
});
const po = /* @__PURE__ */ P(fo, [["__scopeId", "data-v-ff2d45c1"]]), _o = (e) => (Ve("data-v-705ea808"), e = e(), Te(), e), mo = /* @__PURE__ */ _o(() => /* @__PURE__ */ S("a", { href: "#aa" }, "aa", -1)), ho = {
  name: "SimpleLayout"
}, vo = /* @__PURE__ */ I({
  ...ho,
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
    contentRight: Object,
    hasSlider: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = e, t = oe();
    n.headerHeight && (t.value.header.height = 64), n.menuWidth && (t.value.menu.width = n.menuWidth), n.sliderWidth && (t.value.slider.width = n.sliderWidth), n.contentRight && (t.value.contentRight = n.contentRight);
    const o = N(() => t.value.header.height > 0 && n.hasHeader), r = N(() => t.value.contentRight && t.value.contentRight.width > 0), s = N(() => t.value.slider && t.value.slider.width > 0 && n.hasSlider);
    t.value.menu.backgroundColor === ye.MENU_BACKGROUND_COLOR && (t.value.menu.backgroundColor = "#fff"), n.backgroundColor && (t.value.backgroundColor = n.backgroundColor);
    const l = N(() => 0);
    return (a, u) => (i(), O("div", {
      class: "o-simple-layout",
      style: k({ backgroundColor: `${m(t).backgroundColor}` })
    }, [
      o.value ? (i(), O("div", {
        key: 0,
        class: "header",
        style: k({
          height: `${m(t).header.height}px`,
          lineHeight: `${m(t).header.height}px`,
          left: `${s.value ? m(t).slider.width : 0}px`
        })
      }, [
        h(a.$slots, "header", {}, void 0, !0)
      ], 4)) : V("", !0),
      S("div", {
        class: "menu",
        style: k({
          top: `${o.value ? m(t).header.height : 0}px`,
          width: `${m(t).menu.width}px`,
          left: `${s.value ? m(t).slider.width : 0}px`,
          backgroundColor: m(t).menu.backgroundColor
        })
      }, [
        h(a.$slots, "menu", {}, void 0, !0)
      ], 4),
      S("div", {
        class: "content",
        style: k({
          top: `${o.value ? m(t).header.height : 0}px`,
          left: `${m(t).menu.width + l.value + (s.value ? m(t).slider.width : 0)}px`,
          backgroundColor: m(t).content.backgroundColor
        })
      }, [
        S("div", {
          class: te(["content-inner", e.overflow ? "default-scroll" : ""]),
          style: k({
            top: `${m(t).content.offsets[0]}px`,
            right: `${m(t).content.offsets[1]}px`,
            bottom: `${m(t).content.offsets[2]}px`,
            left: `${m(t).content.offsets[3]}px`
          })
        }, [
          r.value ? (i(), O("div", {
            key: 0,
            class: "content-right",
            style: k({ width: `${m(t).contentRight.width}px` })
          }, [
            h(a.$slots, "content-right", {}, () => [
              H(" content-right "),
              mo
            ], !0)
          ], 4)) : V("", !0),
          S("div", {
            style: k({
              position: "absolute",
              top: "0",
              right: `${r.value ? m(t).contentRight.width : 0}px`,
              bottom: "0px",
              left: "0px"
            })
          }, [
            h(a.$slots, "default", {}, void 0, !0)
          ], 4)
        ], 6)
      ], 4),
      s.value ? (i(), O("div", {
        key: 1,
        class: "slider",
        style: k({ width: `${m(t).slider.width}px` })
      }, [
        h(a.$slots, "slider", {}, void 0, !0)
      ], 4)) : V("", !0)
    ], 4));
  }
});
const go = /* @__PURE__ */ P(vo, [["__scopeId", "data-v-705ea808"]]), yo = {
  name: "LayoutMenu"
}, $o = /* @__PURE__ */ I({
  ...yo,
  props: He,
  setup(e) {
    const n = e, t = Ie(), o = oe(), r = N(() => {
      if (!o.value.menu.activeMenuItem)
        return 0;
      const a = o.value.menu.activeMenuItem;
      return a.children && a.children.length > 0 ? o.value.subMenu.width : 0;
    }), s = b([]);
    W(() => {
      l();
    });
    function l() {
      ae(n.onLoad, (a) => {
        s.value = a || [], s.value && s.value.length > 0 && (o.value.menu.activeMenuItem || (o.value.menu.activeMenuItem = s.value[0], s.value[0].router && t.push(s.value[0].router)));
      });
    }
    return (a, u) => h(a.$slots, "default", {
      data: s.value,
      subMenuWidth: r.value
    });
  }
}), Oo = { class: "logo" }, So = { class: "list" }, bo = ["onClick"], Co = { key: 0 }, Io = { class: "title" }, wo = ["title"], Eo = ["onClick"], xo = {
  key: 0,
  class: "sub-menu-icon"
}, ko = {
  name: "LayoutMenu"
}, Ao = /* @__PURE__ */ I({
  ...ko,
  props: He,
  setup(e) {
    const n = Ie(), t = oe(), o = N(() => t.value.menu.activeMenuItem), r = N(() => t.value.subMenu.activeMenuItem);
    function s(a) {
      t.value.menu.activeMenuItem && t.value.menu.activeMenuItem.id === a.id || (t.value.menu.activeMenuItem = a, t.value.subMenu.activeMenuItem = null, a.router && n.push(a.router));
    }
    function l(a) {
      t.value.subMenu.activeMenuItem && t.value.subMenu.activeMenuItem.id === a.id || (t.value.subMenu.activeMenuItem = a, a.router && n.push(a.router));
    }
    return (a, u) => {
      const C = x("o-icon");
      return i(), E($o, z(K(a.$props)), {
        default: $(({ data: _, subMenuWidth: g }) => [
          S("div", Oo, [
            S("div", {
              style: k({ minHeight: `${m(t).header.height}px` })
            }, [
              h(a.$slots, "logo", {}, void 0, !0)
            ], 4)
          ]),
          S("div", So, [
            (i(!0), O(de, null, ge(_, (c, d) => (i(), O("div", {
              class: te(["list-item", o.value && o.value.id === c.id ? "select" : ""]),
              key: d,
              onClick: (f) => s(c)
            }, [
              S("div", null, [
                c.icon ? (i(), O("div", Co, [
                  B(C, z(K(c.icon)), null, 16)
                ])) : V("", !0),
                S("div", Io, q(c.title), 1)
              ])
            ], 10, bo))), 128))
          ]),
          Me(S("div", {
            class: "sub-menu",
            style: k({
              width: `${g}px`,
              left: `${m(t).menu.width}px`
            })
          }, [
            S("div", {
              class: "title ellipsis",
              style: k({
                height: `${m(t).header.height}px`,
                lineHeight: `${m(t).header.height}px`
              }),
              title: g > 0 ? o.value.title : ""
            }, q(g > 0 ? o.value.title : ""), 13, wo),
            (i(!0), O(de, null, ge(g > 0 ? o.value.children : [], (c, d) => (i(), O("div", {
              class: te(["sub-menu-list-item", r.value && r.value.id === c.id ? "sub-menu-select" : ""]),
              key: d,
              onClick: (f) => l(c)
            }, [
              c.icon ? (i(), O("div", xo, [
                B(C, z(K(c.icon)), null, 16)
              ])) : V("", !0),
              S("div", null, q(c.title), 1)
            ], 10, Eo))), 128))
          ], 4), [
            [Be, g > 0]
          ])
        ]),
        _: 3
      }, 16);
    };
  }
});
const No = /* @__PURE__ */ P(Ao, [["__scopeId", "data-v-70e5d2d8"]]), Po = {
  name: "LayoutHeader"
};
const nt = (e) => (Ve("data-v-2df690e0"), e = e(), Te(), e), Lo = { class: "header" }, Do = /* @__PURE__ */ nt(() => /* @__PURE__ */ S("div", null, "left", -1)), Ro = /* @__PURE__ */ nt(() => /* @__PURE__ */ S("div", null, "right", -1)), Mo = [
  Do,
  Ro
];
function Bo(e, n, t, o, r, s) {
  return i(), O("div", Lo, Mo);
}
const Vo = /* @__PURE__ */ P(Po, [["render", Bo], ["__scopeId", "data-v-2df690e0"]]), To = {
  key: 0,
  class: "action"
}, Uo = {
  key: 0,
  class: "icon"
}, zo = {
  name: "SimpleSelect"
}, Fo = /* @__PURE__ */ I({
  ...zo,
  props: zt,
  setup(e) {
    const n = e, t = M(), o = t.namespace, r = F(t.namespace, "select"), s = Ie(), l = {
      ...n
    };
    pe(o) && n.allowCreate && (l.tag = !0, l.filterable = !0, l.multiple = !0), ae(n.options, (u) => l.options = u);
    function a() {
      n.action.onClick && n.action.onClick(), n.action.to && s.push(n.action.to);
    }
    return (u, C) => {
      const _ = x("o-icon");
      return i(), E(D(m(r)), z(K(l)), {
        action: $(() => [
          h(u.$slots, "action", {}, () => [
            u.action ? (i(), O("div", To, [
              u.action.icon ? (i(), O("div", Uo, [
                B(_, z(K(u.action.icon)), null, 16)
              ])) : V("", !0),
              S("div", { onClick: a }, q(u.action.text), 1)
            ])) : V("", !0)
          ], !0)
        ]),
        arrow: $(() => [
          h(u.$slots, "arrow", {}, () => [
            H(" f ")
          ], !0)
        ]),
        _: 3
      }, 16);
    };
  }
});
const jo = /* @__PURE__ */ P(Fo, [["__scopeId", "data-v-d2d61ef9"]]), Ho = /* @__PURE__ */ I({
  __name: "header",
  props: {
    height: String
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    function t() {
      n("close");
    }
    return (o, r) => (i(), O("div", {
      class: "header",
      style: k({ height: e.height, lineHeight: e.height })
    }, [
      S("div", null, [
        h(o.$slots, "title", {}, void 0, !0)
      ]),
      S("div", {
        class: "close",
        style: k({ height: e.height, width: e.height }),
        onClick: t
      }, [
        h(o.$slots, "close", {}, void 0, !0)
      ], 4)
    ], 4));
  }
});
const Ko = /* @__PURE__ */ P(Ho, [["__scopeId", "data-v-35904323"]]), qo = { class: "footer-right" }, Yo = {
  name: "Dialog"
}, Wo = /* @__PURE__ */ I({
  ...Yo,
  props: Ft,
  setup(e) {
    const n = e, t = M(), o = t.namespace, r = F(o, "modal"), s = b(!1), l = n.dataId;
    Q(A.COMPONENT_PARENT_DATA_ID, l);
    const a = {}, u = {
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
    pe(o) && (a.preset = "dialog", a.closeOnEsc = !1, a.maskClosable = !1, a.closable = !1, a.showIcon = !1);
    const C = N(() => n.height), _ = N(() => C.value - 50 + 8), g = N(() => 50);
    W(() => {
      const f = (y, v) => (d(), Promise.resolve()), p = (y, v) => (c(), Promise.resolve());
      t.registerAction(l, w.CANCLE, {
        action: f
      }), t.registerAction(l, w.OPEN, {
        action: p
      }), t.registerAction(l, w.DONE, {
        action: f
      });
    }), Z(() => {
      t.removeAction(l, w.OPEN), t.removeAction(l, w.CANCLE), t.removeAction(l, w.DONE);
    });
    function c() {
      s.value = !0;
    }
    function d() {
      s.value = !1;
    }
    return (f, p) => {
      const y = x("o-cancle-button"), v = x("o-submit-button"), L = x("o-space");
      return i(), E(D(m(r)), T(a, {
        style: [u],
        show: s.value,
        "onUpdate:show": p[0] || (p[0] = (R) => s.value = R)
      }), {
        header: $(() => [
          h(f.$slots, "header", {}, () => [
            B(Ko, {
              height: f.headerHeight,
              onClose: d
            }, {
              title: $(() => [
                H(q(f.title), 1)
              ]),
              close: $(() => [
                h(f.$slots, "close", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["height"])
          ], !0)
        ]),
        default: $(() => [
          S("div", {
            class: "content",
            style: k({ height: `${C.value}px` })
          }, [
            S("div", {
              class: "content-inner dialog-scroll",
              style: k({ height: `${_.value}px` })
            }, [
              S("div", {
                class: "content-wrapper",
                style: k({ width: `${f.width - 48}px` })
              }, [
                h(f.$slots, "default", {}, void 0, !0)
              ], 4)
            ], 4),
            S("div", {
              class: "footer",
              style: k({ height: `${g.value}px`, lineHeight: `${g.value}px` })
            }, [
              S("div", null, [
                h(f.$slots, "footer-left", {}, void 0, !0)
              ]),
              S("div", qo, [
                h(f.$slots, "footer-right", {}, () => [
                  B(L, null, {
                    default: $(() => [
                      B(y, { size: "small" }, {
                        default: $(() => [
                          H("\u53D6\u6D88")
                        ]),
                        _: 1
                      }),
                      B(v, {
                        size: "small",
                        type: "primary"
                      }, {
                        default: $(() => [
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
const Go = /* @__PURE__ */ P(Wo, [["__scopeId", "data-v-5f97ab7f"]]), Qo = {
  name: "Drawer"
}, Jo = /* @__PURE__ */ I({
  ...Qo,
  props: Kt,
  setup(e) {
    const n = e, t = M(), o = F(t.namespace, "drawer"), r = F(t.namespace, "drawer-content"), s = b(!1), l = {
      width: n.width
    }, a = n.dataId;
    Q(A.COMPONENT_PARENT_DATA_ID, a), W(() => {
      const _ = (c, d) => (C(), Promise.resolve()), g = (c, d) => (u(), Promise.resolve());
      t.registerAction(a, w.CANCLE, {
        action: _
      }), t.registerAction(a, w.OPEN, {
        action: g
      }), t.registerAction(a, w.DONE, {
        action: _
      });
    }), Z(() => {
      t.removeAction(a, w.OPEN), t.removeAction(a, w.CANCLE), t.removeAction(a, w.DONE);
    });
    function u() {
      s.value = !0;
    }
    function C() {
      s.value = !1;
    }
    return (_, g) => {
      const c = x("o-cancle-button"), d = x("o-submit-button"), f = x("o-space");
      return i(), E(D(m(o)), T(l, {
        show: s.value,
        "onUpdate:show": g[0] || (g[0] = (p) => s.value = p)
      }), {
        default: $(() => [
          (i(), E(D(m(r)), { title: _.title }, {
            footer: $(() => [
              h(_.$slots, "footer-right", {}, () => [
                B(f, null, {
                  default: $(() => [
                    B(c, { size: "small" }, {
                      default: $(() => [
                        H("\u53D6\u6D88")
                      ]),
                      _: 1
                    }),
                    B(d, {
                      size: "small",
                      type: "primary"
                    }, {
                      default: $(() => [
                        H("\u786E\u5B9A")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            default: $(() => [
              h(_.$slots, "default")
            ]),
            _: 3
          }, 8, ["title"]))
        ]),
        _: 3
      }, 16, ["show"]);
    };
  }
}), Xo = {
  name: "Space"
}, ot = /* @__PURE__ */ I({
  ...Xo,
  props: jt,
  setup(e) {
    const n = e, t = M(), o = F(t.namespace, "space"), r = {
      ...n
    };
    return (s, l) => (i(), E(D(m(o)), z(K(r)), {
      default: $(() => [
        h(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Zo(e) {
  return e.columns.map((n) => es(n));
}
function es(e) {
  const n = e;
  return ns(n), ss(n), rs(n), as(n), ls(n), us(n), is(n), cs(n), ds(n), n;
}
function ts(e, n) {
  if (n) {
    let t = n[e.key];
    return e.formatter && (t = e.formatter(n)), t;
  }
  e.render = (t) => Y("span", {}, { default: () => e.formatter(t) });
}
function ns(e) {
  if (e.filterOptions) {
    const n = e.filterOptions;
    re(n) && (e.filterOptions = n()), e.filter || (e.filter = (t, o) => {
      const r = o[e.key];
      return Oe(r) ? ~r.indexOf(t) : ht(t) ? r == t ? !0 : t ? r && t : !r && !t : r == t;
    });
  }
}
function os(e = [], n) {
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
function ss(e) {
  if (!e.dict)
    return;
  let n = re(e.dict) ? e.dict() : e.dict;
  const t = e.formatter;
  e.formatter = (o) => {
    const r = o[e.key], s = os(n, r);
    s && s.render && (e.render = s.render);
    const l = t ? t(o) : r;
    return s ? s.label : l;
  };
}
function le(e, n) {
  return e.traits ? e.traits.find((o) => Ue(o) && o.type === n || Oe(o) && o === n) : void 0;
}
function _e(e) {
  return x(e);
}
function rs(e) {
  !le(e, "img") || (e.render = (t) => {
    const o = t[e.key];
    return o ? Y(_e("o-image"), { src: o, width: 30 }) : Y("span");
  });
}
function as(e) {
  !le(e, "avatarGroup") || e.render || (e.render = (t) => {
    const o = t[e.key];
    return o ? Y(_e("o-group-avatar"), { options: o }) : Y("span");
  });
}
function ls(e) {
  !le(e, "avatar") || e.render || (e.render = (t) => {
    const o = t[e.key];
    return o ? Y(_e("o-avatar"), { src: o }) : Y("span");
  });
}
function us(e) {
  if (!le(e, "timestamp") || e.render)
    return;
  const t = e.formatter;
  e.formatter = (o) => {
    const r = t ? t(o) : o[e.key];
    return r && yt(r);
  };
}
function is(e) {
  !le(e, "tags") || e.render || (e.render = (t) => {
    let o = ts(e, t) || [];
    return o && Oe(o) && (o = o.split(",")), ze(o) || (o = [o]), o.filter((r) => r).map((r) => Y(_e("o-tag"), {
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
function cs(e) {
  if (!le(e, "tag") || e.render)
    return;
  const o = (e.props || {}).tags || [], r = re(e.dict) ? e.dict() : e.dict;
  e.render = (s) => {
    const l = s[e.key], a = o.find((C) => C.value == l);
    let u = r.find((C) => C.value == l);
    return !a || !u ? Y("span", {}, { default: () => l }) : Y(_e("o-tag"), a.props, { default: () => u.label });
  };
}
function ds(e) {
  if (!e.filterOptions)
    return;
  const n = e.filterOptions;
  re(n) && (e.filterOptions = n()), e.hasOwnProperty("filter") || (e.filter = (t, o) => ~(o[e.key] + "").indexOf(t + ""));
}
const fs = {
  name: "DataTable"
}, ps = /* @__PURE__ */ I({
  ...fs,
  props: Ht,
  setup(e, { expose: n }) {
    const t = e, o = M(), r = t.ns || o.namespace, s = t.dataId, l = F(o.namespace, pe(r) ? "data-table" : "table"), a = {}, u = b(!1);
    b([]);
    const C = b([]), _ = b(!1), g = b(), c = b(!1), d = {
      on: null
    };
    n({
      setOptions: f,
      refresh: y
    }), Z(() => {
      o.removeAction(s, w.DATA_REFRESH);
    });
    function f(v) {
      u.value || (a.columns = Zo(v), d.on = v.on, u.value = !0, o.registerAction(s, w.DATA_REFRESH, {
        action: p
      }), y());
    }
    function p(v, L) {
      return y(v, L), Promise.resolve();
    }
    function y(v, L) {
      let R = v;
      Ue(v) && v.params ? (g.value = v.params, c.value = !0, R = v.params) : c.value && (R = {
        ...v,
        ...g.value
      }), Fe(L), _.value = !0, ae(d.on.load, (he) => {
        C.value = he, ie(L), _.value = !1;
      }, R);
    }
    return (v, L) => u.value ? (i(), E(D(m(l)), T({ key: 0 }, a, {
      data: C.value,
      loading: _.value
    }), {
      default: $(() => [
        h(v.$slots, "default")
      ]),
      _: 3
    }, 16, ["data", "loading"])) : V("", !0);
  }
});
function _s(e) {
  const n = b();
  return Ae(n, e), n;
}
const ms = {
  name: "Query"
}, hs = /* @__PURE__ */ I({
  ...ms,
  props: {
    modelValue: Object,
    dataId: {
      type: String,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = t.modelValue ? JSON.parse(JSON.stringify(t.modelValue)) : null, r = b(t.modelValue || {});
    Q(A.QUERY_PARAMS, r);
    const s = M(), l = t.dataId;
    Ot(l), W(() => {
      s.registerAction(l, w.RESET, {
        action: a
      });
    });
    function a(u, C) {
      return Object.keys(r.value).forEach((g) => {
        const c = o ? JSON.parse(JSON.stringify(o[g])) : null;
        r.value[g] = c;
      }), n("update:modelValue", r.value), s.applyAll(l, w.DATA_REFRESH, {
        params: r.value
      }, null);
    }
    return Z(() => {
      s.removeAction(l, w.RESET);
    }), (u, C) => h(u.$slots, "default", { model: r.value });
  }
}), vs = {
  name: "Data"
}, gs = /* @__PURE__ */ I({
  ...vs,
  props: {
    dataId: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e.dataId;
    return Q(A.COMPONENT_PARENT_DATA_ID, t), (o, r) => h(o.$slots, "default");
  }
}), ys = {
  name: "Tree"
}, $s = /* @__PURE__ */ I({
  ...ys,
  props: qt,
  setup(e) {
    const n = e, t = M(), o = n.ns || t.namespace, r = J() || n.dataId, s = F(t.namespace, "tree"), l = {
      ...n
    }, a = b([]), u = b();
    Qe(o) && (l.nodeProps = ({ option: _ }) => ({
      onClick() {
        const g = _ == null ? void 0 : _.value;
        if (!u.value || u.value[n.keyField] != _[n.keyField]) {
          if (!g)
            return;
          u.value = _, t.applyAll(r, w.DATA_REFRESH, {
            params: g
          }, null);
        }
      }
    })), W(() => {
      C();
    });
    function C(_, g) {
      ae(n.onLoad, (c) => {
        a.value = c;
      }, null);
    }
    return (_, g) => (i(), E(D(m(s)), T(l, { data: a.value }), {
      default: $(() => [
        h(_.$slots, "default")
      ]),
      _: 3
    }, 16, ["data"]));
  }
}), Os = { style: { "border-right": "1px solid rgb(239, 239, 245)", height: "100%", width: "100%" } }, Ss = {
  name: "SimpleMenu"
}, bs = /* @__PURE__ */ I({
  ...Ss,
  props: Yt,
  setup(e) {
    const n = e, t = M(), o = F(t.namespace, "menu"), r = b([]), s = {
      ...n
    }, l = oe(), a = n.dataId || J(), u = b();
    W(() => {
      t.registerAction(a, w.SLIDER_CLICK, {
        action: (g, c) => (C(), Promise.resolve())
      }), C();
    }), Z(() => {
      t.removeAction(a, w.SLIDER_CLICK);
    });
    function C() {
      ae(n.options, (g) => r.value = g, l.value.slider.activeItem);
    }
    function _(g, c) {
      if (u.value !== g) {
        if (u.value = g, c.value) {
          const d = {
            url: c.url,
            value: c.value
          };
          t.applyAll(a, w.MENU_CLICK, d, null);
          return;
        }
        if (c.url) {
          const d = se(c.url);
          window.open(d, "_blank");
        }
      }
    }
    return (g, c) => (i(), O("div", Os, [
      (i(), E(D(m(o)), T(s, {
        options: r.value,
        "onUpdate:value": _
      }), {
        default: $(() => [
          h(g.$slots, "default")
        ]),
        _: 3
      }, 16, ["options"]))
    ]));
  }
}), Cs = { class: "slider" }, Is = {
  key: 0,
  class: "logo"
}, ws = ["src"], Es = { class: "title" }, xs = {
  key: 1,
  class: "menu-list"
}, ks = ["onClick"], As = {
  key: 0,
  class: "icon"
}, Ns = { class: "text" }, Ps = {
  name: "SliderLayoutMenu"
}, Ls = /* @__PURE__ */ I({
  ...Ps,
  props: {
    logo: String,
    title: String,
    dataId: String,
    options: Object
  },
  setup(e) {
    const n = e, t = n.dataId || J(), o = b(), r = M(), s = oe();
    n.logo && (s.value.menu.logo = n.logo), n.title && (s.value.menu.title = n.title);
    const l = N(() => s.value.menu.logo), a = N(() => s.value.menu.title), u = N(() => s.value.slider.activeItem);
    W(() => {
      ae(n.options, (_) => {
        o.value = _, u.value || _ && _.length > 0 && (s.value.slider.activeItem = _[0]);
      });
    });
    function C(_) {
      u.value.id !== _.id && (s.value.slider.activeItem = _, r.applyAll(t, w.SLIDER_CLICK, _));
    }
    return (_, g) => {
      const c = x("o-icon");
      return i(), O("div", Cs, [
        S("div", null, [
          l.value ? (i(), O("div", Is, [
            h(_.$slots, "logo", {}, () => [
              S("img", { src: l.value }, null, 8, ws),
              S("div", Es, q(a.value), 1)
            ], !0)
          ])) : V("", !0),
          u.value ? (i(), O("div", xs, [
            (i(!0), O(de, null, ge(o.value, (d, f) => (i(), O("div", {
              class: te(["list-item", u.value.id === d.id ? "select-item" : ""]),
              onClick: (p) => C(d),
              key: f
            }, [
              h(_.$slots, "default", {
                row: d,
                index: f,
                selected: u.value.id === d.id
              }, () => [
                d.icon ? (i(), O("div", As, [
                  B(c, z(K(d.icon)), null, 16)
                ])) : V("", !0),
                S("div", Ns, q(d.title), 1)
              ], !0)
            ], 10, ks))), 128))
          ])) : V("", !0)
        ]),
        S("div", null, [
          h(_.$slots, "bottom", {}, void 0, !0)
        ])
      ]);
    };
  }
});
const Ds = /* @__PURE__ */ P(Ls, [["__scopeId", "data-v-1dffab60"]]), Rs = { key: 0 }, Ms = { key: 1 }, Bs = {
  key: 0,
  class: "code-box"
}, Vs = ["textContent"], Ts = ["src"], Us = {
  name: "DemoDoc"
}, zs = /* @__PURE__ */ I({
  ...Us,
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
    }), o = b({
      template: "",
      language: ""
    }), r = b(0), s = b(!1);
    X(A.USER_LOCAL_STORE_KEY, !1);
    const l = N(() => (n.url + "").toLocaleLowerCase().endsWith(".html")), a = window.marked, u = b();
    a || console.error("marked not found"), W(() => {
      const f = {
        heading(p, y) {
          return `
              <h${y}>
                ${p}
              </h${y}>`;
        },
        code(p, y) {
          return g(y || "", p);
        }
      };
      a.use({ renderer: f }), n.codeUrl && c(n.codeUrl, (p) => {
        let y = (p || "").trim(), v;
        if (y.startsWith("```") && y.endsWith("```")) {
          const L = (y.indexOf(`\r
`) != -1, `\r
`);
          v = y.substring(3, y.indexOf(L)), y = y.substring(y.indexOf(v) + v.length, y.lastIndexOf("```")).trim();
        }
        o.value = {
          template: y,
          language: v
        };
      }, !1), n.url && c(n.url, (p) => {
        t.value = {
          template: p
        }, r.value++;
      });
    });
    function C() {
      _(u.value);
    }
    function _(f) {
      if (f) {
        var p = f.contentWindow || f.contentDocument.parentWindow;
        p.document.body && (f.height = p.document.documentElement.scrollHeight || p.document.body.scrollHeight);
      }
    }
    function g(f, p) {
      if (f = (f || "").toLowerCase(), f === "code-demo")
        return p;
      {
        const y = (p || "").split(p.indexOf(`\r
`) != -1 ? `\r
` : `
`) || [];
        let v = "";
        for (let L = 0; L < y.length; L++) {
          const R = y[L];
          R.toLocaleLowerCase().endsWith(".html") ? v = v + `<iframe src="${R}"></iframe>` : v = v + R;
        }
        return v;
      }
    }
    function c(f, p, y = !0) {
      fetch(f).then((v) => v.text()).then((v) => p(y ? a.parse(v) : v));
    }
    function d() {
      console.log("====showCode"), s.value = !s.value;
    }
    return (f, p) => {
      const y = x("o-code-icon"), v = x("n-tooltip"), L = x("o-span"), R = x("n-card");
      return i(), O("div", null, [
        B(R, { title: e.title }, {
          "header-extra": $(() => [
            B(L, null, {
              default: $(() => [
                B(v, { trigger: "hover" }, {
                  trigger: $(() => [
                    B(y, {
                      "font-size": 14,
                      onClick: d
                    })
                  ]),
                  default: $(() => [
                    s.value ? (i(), O("span", Ms, "\u6536\u8D77\u4EE3\u7801")) : (i(), O("span", Rs, "\u663E\u793A\u4EE3\u7801"))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          footer: $(() => [
            s.value ? (i(), O("div", Bs, [
              S("pre", {
                textContent: q(o.value.template),
                class: te(o.value.language)
              }, null, 10, Vs)
            ])) : V("", !0)
          ]),
          default: $(() => [
            l.value ? (i(), O("iframe", {
              key: 1,
              ref_key: "iframeRef",
              ref: u,
              onload: C,
              src: e.url,
              style: { width: "100%", border: "0" },
              scrolling: "no"
            }, null, 8, Ts)) : (i(), E(D(t.value), { key: r.value }))
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
});
const Fs = /* @__PURE__ */ P(zs, [["__scopeId", "data-v-62699b27"]]), js = {
  name: "DemosDoc"
}, Hs = /* @__PURE__ */ I({
  ...js,
  props: {
    alone: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (n, t) => (i(), O("div", {
      style: k(`display:grid;gap:16px;grid-template-columns:${e.alone ? "100%" : "minmax(0, 1fr) minmax(0, 1fr)"}`)
    }, [
      h(n.$slots, "default")
    ], 4));
  }
}), De = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OView: pt,
  IframeView: Xt,
  OButton: Ne,
  parseProps: Pe,
  OLoginButton: rn,
  OSubmitButton: Je,
  OCancleButton: un,
  OAddButton: dn,
  ORefreshButton: pn,
  OResetButton: mn,
  OContext: vn,
  useRouter: Ie,
  useUser: gn,
  OForm: Sn,
  useForm: bn,
  OUserLoginForm: En,
  useUserLoginForm: xn,
  OInput: Xe,
  OUsernameInput: Dn,
  OPasswordInput: Mn,
  OIcon: Ze,
  OCloseIcon: jn,
  OSvgIcon: Yn,
  ORefreshIcon: et,
  OCopyIcon: no,
  OCodeIcon: tt,
  OLayout: uo,
  useLayout: io,
  OSliderLayout: po,
  OSimpleLayout: go,
  OLayoutMenu: No,
  OLayoutHeader: Vo,
  OSimpleSelect: jo,
  ODialog: Go,
  ODrawer: Jo,
  OSpace: ot,
  ODataTable: ps,
  useDataTable: _s,
  OQuery: hs,
  OData: gs,
  OTree: $s,
  OSimpleMenu: bs,
  OSliderLayoutMenu: Ds,
  ODemoDoc: Fs,
  ODemosDoc: Hs
}, Symbol.toStringTag, { value: "Module" })), Ks = "1.0.0";
function st({ componentPrefix: e = "O", components: n = [] } = {}) {
  const t = [];
  function o(s, l, a) {
    s.component(e + l) || s.component(e + l, a);
  }
  function r(s) {
    t.includes(s) || (t.push(s), n.forEach((l) => {
      const { name: a, alias: u } = l;
      o(s, a, l), u && u.forEach((C) => {
        o(s, C, l);
      });
    }));
  }
  return {
    version: Ks,
    componentPrefix: e,
    install: r
  };
}
const qs = st({
  components: Object.keys(De).map((e) => De[e])
}), Js = qs.install, Ys = st({
  components: [
    Xe,
    Ze,
    ot,
    Ne,
    Je,
    et,
    tt
  ]
});
function Ws(e) {
  e.use(Ys);
}
function Re(e, n) {
  return e.sort((t, o) => t[n] - o[n]);
}
function Xs(e, n) {
  const t = [], o = {};
  if (e.length > 0 && !e[0].hasOwnProperty("id"))
    return e;
  e.forEach((s) => o[s.id] = s), e.forEach((s) => {
    const l = o[s.parentId];
    n && n(s), l ? (s._level = l._level + 1, (l.children || (l.children = [])).push(s)) : (s._level = 1, t.push(s));
  });
  const r = (s, l = 1) => {
    s.map((a) => {
      a._level = l, a.children instanceof Array && (a.children = Re(a.children, "orderNum"), l < 1e3 && r(a.children, l + 1));
    });
  };
  return r(t), Re(t, "orderNum");
}
async function Zs(e) {
  Ws(e);
}
export {
  Xt as IframeView,
  dn as OAddButton,
  Ne as OButton,
  un as OCancleButton,
  jn as OCloseIcon,
  tt as OCodeIcon,
  vn as OContext,
  no as OCopyIcon,
  gs as OData,
  ps as ODataTable,
  Fs as ODemoDoc,
  Hs as ODemosDoc,
  Go as ODialog,
  Jo as ODrawer,
  Sn as OForm,
  Ze as OIcon,
  Xe as OInput,
  uo as OLayout,
  Vo as OLayoutHeader,
  No as OLayoutMenu,
  rn as OLoginButton,
  Mn as OPasswordInput,
  hs as OQuery,
  pn as ORefreshButton,
  et as ORefreshIcon,
  mn as OResetButton,
  go as OSimpleLayout,
  bs as OSimpleMenu,
  jo as OSimpleSelect,
  po as OSliderLayout,
  Ds as OSliderLayoutMenu,
  ot as OSpace,
  Je as OSubmitButton,
  Yn as OSvgIcon,
  $s as OTree,
  En as OUserLoginForm,
  Dn as OUsernameInput,
  pt as OView,
  Zs as bootstrap,
  st as create,
  Xs as deepTree,
  qs as default,
  Js as install,
  Pe as parseProps,
  Ws as setupOcean,
  _s as useDataTable,
  bn as useForm,
  io as useLayout,
  Ie as useRouter,
  gn as useUser,
  xn as useUserLoginForm
};
