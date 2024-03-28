import { defineComponent as I, unref as y, openBlock as c, createBlock as C, resolveDynamicComponent as M, withCtx as O, renderSlot as h, nextTick as bt, watch as ae, inject as J, provide as Q, ref as w, onMounted as G, onBeforeUnmount as te, withDirectives as Xe, createElementBlock as b, vShow as Ze, mergeProps as D, createTextVNode as j, resolveComponent as x, normalizeProps as z, guardReactiveProps as F, createVNode as B, computed as L, createSlots as Ct, Fragment as ve, toDisplayString as H, renderList as be, createCommentVNode as T, defineExpose as Et, createElementVNode as v, normalizeStyle as k, normalizeClass as le, pushScopeId as De, popScopeId as Re, h as W, shallowRef as xt } from "vue";
const Pt = {
  tag: {
    type: String
  }
}, kt = I({
  name: "View",
  props: Pt,
  setup(e) {
    return {
      componentName: y(e.tag)
    };
  }
}), N = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
function Nt(e, t, n, o, r, s) {
  return c(), C(M(e.componentName), null, {
    default: O(() => [
      h(e.$slots, "default")
    ]),
    _: 3
  });
}
const At = /* @__PURE__ */ N(kt, [["render", Nt]]);
var P = /* @__PURE__ */ ((e) => (e.CONFIG_KEY = "__config__", e.FORM_VISIBLE = "__form_visible__", e.COMPONENT_PARENT_DATA_ID = "__component_parent_data_id__", e.LAYOUT_CONFIG = "__layout_config__", e.USER_INFO = "__user__info__", e.USER_LOCAL_STORE_KEY = "__user_info__", e.TOKEN_LOCAL_KEY = "__TOKEN_", e.PERMISSION_LOCAL_KEY = "__PERMISSION__", e.LOCAL_PROJECT_ID = "__PROJECT_ID__", e.QUERY_PARAMS = "__query_params__", e.USE_GRIDE_ITEM = "__use_grid_item__", e))(P || {});
const Lt = Object.prototype.toString;
function ie(e, t) {
  return Lt.call(e) === `[object ${t}]`;
}
function ce(e) {
  return ie(e, "Function") || ie(e, "AsyncFunction");
}
const et = (e) => e !== null && ie(e, "Object");
function Mt(e) {
  return ie(e, "Number");
}
function Be(e) {
  return ie(e, "Promise");
}
function ge(e) {
  return ie(e, "String");
}
function Dt(e) {
  return ie(e, "Boolean");
}
function Ve(e) {
  return e && Array.isArray(e);
}
function Rt(e) {
  const t = e.split(":");
  return {
    dataId: t[0],
    type: t[1]
  };
}
function Te(e, t) {
  bt(() => {
    e && e.value ? e.value.setOptions(t) : ae(
      () => e == null ? void 0 : e.value,
      () => {
        e.value && e.value.setOptions(t);
      }
    );
  });
}
function Bt(e, t) {
  const n = { ...e };
  return Object.keys(t || {}).forEach((o) => {
    t[o] && (n[o] = t[o]);
  }), n;
}
function ne(e, t, n) {
  if (ce(e)) {
    const o = e(n) || [];
    if (Be(o)) {
      o.then((r) => {
        t && t(r);
      });
      return;
    } else {
      t && t(o);
      return;
    }
  } else if (Ve(e)) {
    t && t(e || []);
    return;
  }
  t(e);
}
function Vt(e, t = "yyyy-MM-dd hh:mm:ss") {
  let n = Tt(e), o = n.hour < 12 ? "\u4E0A\u5348" : "\u4E0B\u5348", r = n.hour < 12 ? "AM" : "PM";
  var s = t.replace(/yyyy/g, n.year).replace(/MM/g, n.month).replace(/dd/g, n.day).replace(/hh/g, n.hour).replace(/mm/g, n.minute).replace(/ss/g, n.seconds).replace(/a/g, o).replace(/A/g, r);
  return s;
}
function Tt(e) {
  let t, n;
  return ge(e) ? (t = parseInt(e), e.trim().length <= 10 && (t = t * 1e3)) : Mt(e) ? (t = e, (e + "").length <= 10 && (t = t * 1e3)) : n = e, n || (n = new Date(t)), {
    year: n.getFullYear(),
    month: n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1,
    day: n.getDate() < 10 ? "0" + n.getDate() : n.getDate(),
    hour: n.getHours() < 10 ? "0" + n.getHours() : n.getHours(),
    minute: n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes(),
    seconds: n.getSeconds() < 10 ? "0" + n.getSeconds() : n.getSeconds(),
    milliseconds: n.getMilliseconds(),
    quarter: Math.floor((n.getMonth() + 3) / 3)
  };
}
function oe() {
  return J(P.LAYOUT_CONFIG, null);
}
function A() {
  return J(P.CONFIG_KEY, null);
}
function ze(e, t) {
  return A().config.errorHanlder(e, t);
}
function zt(e) {
  e && Q(P.COMPONENT_PARENT_DATA_ID, e);
}
function Ut() {
  const e = J(P.QUERY_PARAMS, null);
  return e ? {
    params: e.value
  } : null;
}
function q(e, t) {
  return e ? `${e}-${t}` : t;
}
function ye(e) {
  return e === "n";
}
function jt() {
  const e = J(P.FORM_VISIBLE, null);
  return e === !1 || e === !0 ? e : !0;
}
function ee() {
  return J(P.COMPONENT_PARENT_DATA_ID, null) || null;
}
function tt(e) {
  e && e.start && e.start();
}
function me(e) {
  e && e.done && e.done();
}
function we(e) {
  e && e.close && e.close();
}
function nt(e, t) {
  e && e.error && e.error(t);
}
var $e = /* @__PURE__ */ ((e) => (e.NOT_PERMISSION = "no_permission", e))($e || {});
const Ue = {
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
var E = /* @__PURE__ */ ((e) => (e.OPEN = "open", e.DONE = "done", e.CLOSE = "close", e.DATA_REFRESH = "data-refresh", e.SUBMIT = "submit", e.CANCLE = "cancle", e.RESET = "reset", e.MENU_CLICK = "menu-click", e.SLIDER_CLICK = "slider-click", e))(E || {});
function Ft(e, t, n) {
  if (!e) {
    me(t), we(t);
    return;
  }
  Be(e) ? e.then(() => {
    me(t), we(t), n && n();
  }).catch((o) => nt(t, o)) : ce(e) && (e(), me(t), we(t));
}
var Ce = /* @__PURE__ */ ((e) => (e.BACKGROUND_COLOR = "#f0f2f5", e.MENU_BACKGROUND_COLOR = "#001529", e))(Ce || {});
const ot = {
  onLoad: Function
};
var pe = /* @__PURE__ */ ((e) => (e.BLANK = "_blank", e.SLEF = "_self", e))(pe || {});
function de(e) {
  if (!e)
    return;
  let t = e.url;
  t.indexOf("?") == -1 && (t = t + "?");
  let n = "";
  return Object.keys(e.query || {}).forEach((o) => {
    const r = e.query[o];
    n = o + "=" + (r || "") + "&";
  }), n && (n = n.substring(0, n.length - 1)), t.endsWith("&") || t.endsWith("?") ? t + n : t + "&" + n;
}
function Ht(e, t) {
  if (t) {
    const n = de(t);
    if (n) {
      window.open(n, t.target ? t.target : pe.BLANK);
      return;
    }
  }
}
var he = /* @__PURE__ */ ((e) => (e.TAB = "tab", e.COLUMN = "column", e))(he || {});
function qt(e) {
  return {
    setPropValue: (t, n) => {
      e.formValue.value[t] = n, st(e.refs[t]);
    },
    getPropValue: (t) => e.formValue.value[t],
    getValues: (t) => Gt(e, t),
    scrollToProp: (t) => Yt(e.refs[t]),
    reset: () => Kt(e)
  };
}
function st(e) {
  e.el.updateValue();
}
function Kt(e) {
  Object.keys(e.oldFormValue).forEach((t) => {
    e.formValue.value[t] = e.oldFormValue[t], st(e.refs[t]);
  });
}
function Yt(e) {
  !e || !e.el || e.el.scrollTo();
}
function Gt(e, t) {
  const n = {}, o = e.formValue.value || {}, r = e.oldFormValue || {};
  return Object.keys(o).forEach((s) => {
    t ? o[s] !== r[s] && (n[s] = o[s]) : n[s] = o[s];
  }), n;
}
async function Wt(e, t, n, o, r) {
  const s = {};
  if (!n) {
    r(s);
    return;
  }
  const a = t.ns ? t.ns : e.namespace;
  if (s.name = q(a, "form"), Jt(s, e, n, a), n.on && n.on.info) {
    const l = n.on.info(n.formValue);
    Be(l) ? l.then((i) => {
      Le(s, t, n, o, i), r(s);
    }) : (Le(s, t, n, o, l), r(s));
  } else
    Le(s, t, n, o), r(s);
}
function Jt(e, t, n, o) {
  const r = {}, s = n.props || {};
  ye(o) && (s.labelWitdth || (r.labelWitdth = "220px"), s.labelPlacement || (r.labelPlacement = "left")), e.props = r;
}
function Le(e, t, n, o, r) {
  e.formValue = {}, e.rules = {}, Qt(e, n, o, r);
}
function Qt(e, t, n, o) {
  const s = (t.items || []).map((l) => {
    l.type != he.TAB && (Xt(e, l, n, t.formValue, o), Zt(e, l, n));
    const i = l.show ? () => l.show(n.formValue.value) : null;
    return {
      label: l.label,
      prop: l.prop,
      tooltip: l.tooltip,
      component: l.component,
      show: i,
      slot: l.slot,
      rules: l.rules,
      traits: l.traits,
      type: l.type,
      group: l.group,
      on: l.on,
      children: []
    };
  });
  e.items = s.filter((l) => l.type === he.TAB);
  const a = s.filter((l) => l.type != he.TAB);
  e.items.forEach((l) => {
    l.children = a.filter((i) => i.group === l.type);
  }), e.items = e.items.concat(a);
}
function Xt(e, t, n, o, r) {
  let s = t.value;
  r ? s = r[t.prop] : o && Object.keys(o).indexOf(t.prop) != -1 && (s = o[t.prop]), e.formValue[t.prop] = s, n.oldFormValue[t.prop] = s;
}
function Zt(e, t, n) {
  if (!t.rules)
    return;
  const o = {
    required: t.rules.required,
    type: t.rules.type
  };
  t.rules.validator ? en(o, t, n) : o.message = t.rules.message, o.trigger = t.rules.trigger || ["input", "blur"], e.rules[t.prop] = o;
}
function en(e, t, n) {
  e.validator = (o, r) => t.rules.validator(r, n.formValue.value);
}
const je = {
  component: Object,
  ns: String,
  color: String,
  size: Object,
  rotate: Number,
  type: String,
  name: String,
  spin: Boolean
}, rt = {
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
}, at = {
  ...rt,
  size: {
    type: String,
    default: "large"
  },
  icon: je
}, tn = {
  ...at,
  encode: {
    type: Boolean,
    default: !0
  }
};
function nn(e, t) {
  const n = {};
  n.name = q(e.namespace, "input"), n.props = {
    ...t
  };
  const o = t.ns || e.namespace;
  return ye(o) && t.size === "mini" && (n.props.size = "tiny"), n;
}
const Ee = {
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
}, on = {
  ...Ee
}, xe = {
  ...Ee
}, sn = {
  ...Ee,
  type: {
    type: String,
    default: "primary"
  }
}, lt = {
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
}, rn = {
  ...lt,
  placeholder: {
    type: String,
    default: "\u8BF7\u9009\u62E9\u5DE5\u4F5C\u533A"
  }
}, an = {
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
}, ln = {
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
}, un = {
  ns: String,
  dataId: {
    type: String,
    required: !0
  }
}, cn = {
  title: String,
  dataId: {
    type: String,
    required: !0
  },
  width: {
    type: Number,
    default: 502
  }
}, dn = {
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
}, pn = {
  dataId: String,
  options: Object
}, fn = {
  dataId: String,
  src: String
}, _n = {
  options: Object,
  trigger: {
    type: String,
    default: "hover"
  }
}, it = {
  src: {
    type: String,
    required: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  size: {
    type: String,
    default: "medium"
  }
}, mn = {
  ...it,
  username: {
    type: String,
    required: !0
  },
  detail: {
    type: String,
    required: !1
  },
  round: {
    type: Boolean,
    default: !0
  }
}, hn = ["src"], vn = {
  name: "IframeView"
}, gn = /* @__PURE__ */ I({
  ...vn,
  props: fn,
  setup(e) {
    const t = e, n = A(), o = t.dataId || ee(), r = w(t.src), s = w(0);
    return G(() => {
      n.registerAction(o, E.MENU_CLICK, {
        action: (a, l) => {
          const i = a;
          return i && (r.value = de(i.url), s.value++), Promise.resolve();
        }
      });
    }), te(() => {
      n.removeAction(o, E.MENU_CLICK);
    }), (a, l) => Xe((c(), b("iframe", {
      class: "iframe",
      key: s.value,
      border: "0",
      src: r.value
    }, null, 8, hn)), [
      [Ze, r.value]
    ]);
  }
});
const yn = /* @__PURE__ */ N(gn, [["__scopeId", "data-v-43bbe2c9"]]);
function ut(e, t) {
  const n = Pe(e);
  return n ? `${n}-${t}` : t;
}
function Pe(e) {
  if (e)
    return e;
  const t = J("_config", null);
  return t ? t.namespace : "n";
}
function ct(e) {
  return Pe(e) === "n";
}
function $n(e) {
  return Pe(e) === "el";
}
function On(e) {
  return Pe(e) === "van";
}
const In = I({
  name: "Button",
  props: Ee,
  setup(e, { attrs: t }) {
    const n = He(e, t), o = A(), r = e.ns || o.namespace, s = w(!1), a = ee() || e.dataId, l = Ut(), i = (u) => {
      const f = e.action != E.DATA_REFRESH;
      o.applyAll(a, e.action, l, {
        start: () => s.value = f,
        done: () => {
          s.value = !1, o.applyAll(a, E.DONE, null, null), e.action === E.SUBMIT && o.applyAll(Rt(a).dataId, E.DATA_REFRESH, null, null);
        },
        close: () => s.value = !1
      });
    };
    return {
      componentName: ut(r, "button"),
      componentProps: n.props,
      styleSheet: n.style,
      handleClick: i,
      loading: s
    };
  }
});
function Sn(e, t, n, o, r, s) {
  return c(), C(M(e.componentName), D(e.componentProps, {
    style: [e.styleSheet],
    onClick: e.handleClick,
    loading: e.loading
  }), {
    default: O(() => [
      h(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["style", "onClick", "loading"]);
}
const Fe = /* @__PURE__ */ N(In, [["render", Sn]]);
function He(e, t) {
  const n = e.ns, o = {
    ...t,
    plain: e.plain,
    type: e.type,
    color: e.color,
    textColor: e.textColor,
    loading: e.loading,
    size: e.size
  }, r = {};
  return e.long && (o.block = !0), $n(n) ? ((e.block || e.long) && (r.width = "100%"), e.bordered || (r.border = "0px"), o.plain = e.plain, e.dashed && (r["border-style"] = "dashed", o.plain = !0), e.type === "error" ? o.type = "danger" : e.type === "text" ? o.text = !0 : e.type === "link" && (o.tag = "a", o.text = !0, o.href = de(e.url), o.target = e.url.target || pe.BLANK), e.shape === "circle" ? o.circle = !0 : e.shape === "round" && (o.round = !0), e.size === "mini" ? o.size = "small" : e.size === "medium" && (o.size = "default")) : ct(n) ? (o.ghost = e.plain, e.shape === "circle" && (o.circle = !0), o.block = e.block || e.long, o.iconPlacement = e.iconPlacement, o.renderIcon = e.renderIcon, e.type === "primary" ? o.type = "info" : e.type === "text" ? o.text = !0 : e.type === "link" && (o.tag = "a", o.text = !0, o.href = de(e.url), o.target = e.url && e.url.target ? e.url.target : pe.BLANK), e.shape === "circle" ? o.circle = !0 : e.shape === "round" && (o.round = !0), e.size === "mini" && (o.size = "tiny")) : On(n) && (e.type === "error" ? o.type = "danger" : (e.type === "text" || e.type === "link") && console.warn("not support ", e.type), e.shape === "circle" ? o.round = !0 : e.shape === "round" ? o.square = !1 : o.square = !0, e.size === "medium" && (o.size = "small"), o.block = e.block || e.long, o["icon-position"] = e.iconPlacement, e.dashed && (r["border-style"] = "dashed", o.plain = !0), e.url && (o.url = de(e.url)), o.replace = e.url && e.url.replace || e.to && e.to.replace), {
    props: o,
    style: r
  };
}
const wn = I({
  name: "LoginButton",
  props: on,
  components: { OButton: Fe },
  setup(e, { attrs: t }) {
    const n = He(e, t), o = w(!1), r = A(), s = ee() || e.dataId, a = () => {
      r.applyAll(
        s,
        E.SUBMIT,
        null,
        {
          start: () => o.value = !0,
          done: () => o.value = !1,
          close: () => o.value = !1
        }
      );
    };
    return {
      componentName: ut(null, "button"),
      componentProps: Bt(n.props, {
        size: "large",
        type: "info"
      }),
      styleSheet: n.style,
      loading: o,
      handleClick: a
    };
  }
});
function bn(e, t, n, o, r, s) {
  return c(), C(M(e.componentName), D(e.componentProps, {
    loading: e.loading,
    style: [e.styleSheet],
    onClick: e.handleClick
  }), {
    default: O(() => [
      h(e.$slots, "default", {}, () => [
        j("\u767B\u5F55")
      ])
    ]),
    _: 3
  }, 16, ["loading", "style", "onClick"]);
}
const Cn = /* @__PURE__ */ N(wn, [["render", bn]]), En = {
  name: "SubmitButton"
}, dt = /* @__PURE__ */ I({
  ...En,
  props: xe,
  setup(e) {
    const n = {
      ...e
    };
    return n.action = "submit", (o, r) => {
      const s = x("o-button");
      return c(), C(s, D({ type: "primary" }, n), {
        default: O(() => [
          h(o.$slots, "default", {}, () => [
            j("\u786E\u8BA4")
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), xn = {
  name: "CancleButton"
}, Pn = /* @__PURE__ */ I({
  ...xn,
  props: xe,
  setup(e) {
    const n = {
      ...e
    };
    return n.action = "cancle", (o, r) => {
      const s = x("o-button");
      return c(), C(s, z(F(n)), {
        default: O(() => [
          h(o.$slots, "default", {}, () => [
            j("\u53D6\u6D88")
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), kn = {
  name: "AddButton"
}, Nn = /* @__PURE__ */ I({
  ...kn,
  props: sn,
  setup(e) {
    const n = {
      ...e
    };
    return n.action = "open", (o, r) => {
      const s = x("o-button");
      return c(), C(s, z(F(n)), {
        default: O(() => [
          h(o.$slots, "default", {}, () => [
            j(" \u65B0\u589E ")
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), An = {
  name: "RefreshButton"
}, Ln = /* @__PURE__ */ I({
  ...An,
  props: xe,
  setup(e) {
    const n = {
      ...e
    };
    return n.action = "data-refresh", (o, r) => {
      const s = x("o-refresh-icon"), a = x("o-button");
      return c(), C(a, z(F(n)), {
        default: O(() => [
          h(o.$slots, "default", {}, () => [
            B(s)
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), Mn = {
  name: "ResetButton"
}, Dn = /* @__PURE__ */ I({
  ...Mn,
  props: xe,
  setup(e) {
    const n = {
      ...e
    };
    return n.action = "reset", (o, r) => {
      const s = x("o-button");
      return c(), C(s, z(F(n)), {
        default: O(() => [
          h(o.$slots, "default", {}, () => [
            j("\u91CD\u7F6E")
          ])
        ]),
        _: 3
      }, 16);
    };
  }
}), Ye = 60 * 60 * 24 * 7;
class Rn {
  constructor(t = "", n = localStorage) {
    this.storage = n, this.prefixKey = t;
  }
  getKey(t) {
    return `${this.prefixKey}${t}`.toUpperCase();
  }
  set(t, n, o = Ye) {
    const r = JSON.stringify({
      value: n,
      expire: o !== null ? new Date().getTime() + o * 1e3 : null
    });
    this.storage.setItem(this.getKey(t), r);
  }
  get(t, n = null) {
    const o = this.storage.getItem(this.getKey(t));
    if (o)
      try {
        const r = JSON.parse(o), { value: s, expire: a } = r;
        if (a === null || a >= Date.now())
          return s;
        this.remove(t);
      } catch {
        return n;
      }
    return n;
  }
  remove(t) {
    this.storage.removeItem(this.getKey(t));
  }
  clear() {
    this.storage.clear();
  }
  setCookie(t, n, o = Ye) {
    document.cookie = `${this.getKey(t)}=${n}; Max-Age=${o}`;
  }
  getCookie(t) {
    const n = document.cookie.split("; ");
    for (let o = 0, r = n.length; o < r; o++) {
      const s = n[o].split("=");
      if (s[0] === this.getKey(t))
        return s[1];
    }
    return "";
  }
  removeCookie(t) {
    this.setCookie(t, 1, -1);
  }
  clearCookie() {
    const t = document.cookie.match(/[^ =;]+(?==)/g);
    if (t)
      for (let n = t.length; n--; )
        document.cookie = t[n] + "=0;expire=" + new Date(0).toUTCString();
  }
}
const Y = new Rn(""), se = {};
function aa(e) {
  se.i18n = e;
}
function la(e) {
  se.message = e;
}
function ia(e) {
  se.request = e;
}
function ua(e) {
  se.crypto = e;
}
function Bn() {
  return se.request;
}
function Vn() {
  return se.message;
}
function Tn() {
  return se.crypto;
}
function Ge() {
  return se.i18n;
}
function Me() {
  const e = Tn();
  return e && console.warn("not found crypto plugin"), e;
}
const zn = {
  name: "App"
}, qe = /* @__PURE__ */ I({
  ...zn,
  props: Ue,
  setup(e) {
    const t = e, n = {
      namespace: t.namespace,
      config: t.config,
      registerAction: a,
      removeAction: l,
      removeActions: i,
      applyAll: u,
      setLayoutConfig: g
    }, o = w({
      token: "",
      userInfo: {}
    });
    Q(P.CONFIG_KEY, n), Q(P.USER_INFO, o);
    const r = w();
    Q(P.LAYOUT_CONFIG, r);
    const s = {};
    function a(d, m, p) {
      if (d || (d = "default"), !m)
        throw new Error("actionType must not empty.");
      if (!p)
        throw new Error("actionItem must not empty.");
      s[d] || (s[d] = {});
      const _ = s[d];
      _[m] || (_[m] = []), _[m].push(p);
    }
    function l(d, m) {
      s[d] || (d = "default");
      const p = s[d];
      if (!p[m]) {
        s[d] = null;
        return;
      }
      const _ = p[m];
      _.forEach(($) => {
        $.action = null, $ = null;
      }), _.length = 0, p[m] = null;
    }
    function i(d) {
      if (d || (d = "default"), !s[d])
        return;
      const m = s[d];
      Object.keys(m).forEach((p) => {
        l(d, p);
      }), s[d] = null;
    }
    function u(d, m, p, _) {
      d || (d = "default");
      const $ = s[d];
      if (!$)
        return;
      const S = m instanceof Array ? m : [m], R = [];
      return Object.keys($).filter((V) => S.indexOf(V) != -1).forEach((V) => {
        $[V].forEach((Ie) => R.push(f(Ie.action, p, _)));
      }), Promise.all(R);
    }
    function f(d, m, p) {
      return new Promise((_, $) => {
        d(m, p).then((S) => _(S)).catch((S) => $(S));
      });
    }
    function g(d) {
      r.value = d;
    }
    return te(() => {
      Object.keys(s).forEach((d) => i(d));
    }), (d, m) => (c(), b("div", null, [
      h(d.$slots, "default")
    ]));
  }
}), Un = {
  name: "NApp"
}, jn = /* @__PURE__ */ I({
  ...Un,
  props: Ue,
  setup(e) {
    const n = {
      ...e,
      namespace: "n"
    };
    return (o, r) => (c(), C(qe, z(F(n)), {
      default: O(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fn = {
  name: "ElApp"
}, Hn = /* @__PURE__ */ I({
  ...Fn,
  props: Ue,
  setup(e) {
    const n = {
      ...e,
      namespace: "el"
    };
    return (o, r) => (c(), C(qe, z(F(n)), {
      default: O(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var pt = /* @__PURE__ */ ((e) => (e.LOGIN = "login", e.UNLOGIN = "unlogin", e))(pt || {});
function ue(e, t, n) {
  if (!e || !t)
    return !0;
  const o = n || Z(), r = o.getPermission(e);
  if (t.and) {
    if (!r)
      return !1;
    for (let s of t.and)
      if (s === "login") {
        if (!o.isLogin())
          return !1;
      } else if (s === "unlogin") {
        if (o.isLogin())
          return !1;
      } else if (s && r.indexOf(s) == -1)
        return !1;
    return !0;
  }
  if (t.or) {
    for (let s of t.or)
      if (r.indexOf(s) != -1)
        return !0;
    return !1;
  }
}
function X() {
  const e = A(), t = e ? e.config : null, n = {
    toHome(o) {
      t && t.router ? t.router.toHome(o) : console.warn("router not implement.please implement router api.push failed", o);
    },
    toLogin(o) {
      t && t.router ? t.router.toLogin(o) : console.warn("router not implement.please implement router api.push failed", o);
    },
    push: (o, r) => {
      t && t.router ? (r && (o.params = { ...o.params, ...r }), t.router.push(o)) : console.warn("router not implement.please implement router api.push failed", o);
    },
    projectId() {
      return n.params() ? n.params().projectId : null;
    },
    name() {
      if (t && t.router)
        return t.router.name();
      console.warn("router not implement.please implement router api.push failed");
    },
    params() {
      if (t && t.router)
        return t.router.params();
      console.warn("router not implement.please implement router api.push failed");
    },
    query() {
      if (t && t.router)
        return t.router.query();
      console.warn("router not implement.please implement router api.push failed");
    }
  };
  return n;
}
function Z() {
  const e = J(P.USER_INFO, null);
  A();
  const t = X(), n = Me(), o = !!n, r = {
    setPermissions(s) {
      e.value.permissions = s;
      let a = JSON.stringify(s);
      o && (a = n.encode(a)), Y.set(P.PERMISSION_LOCAL_KEY, a, 60 * 60);
    },
    getPermissions() {
      if (e.value.permissions)
        return e.value.permissions;
      let s = Y.get(P.PERMISSION_LOCAL_KEY);
      return o && (s = n.decode(s)), e.value.permissions = JSON.parse(s || "{}"), e.value.permissions;
    },
    getPermission(s) {
      const a = r.getPermissions();
      return a ? a[s] || [] : [];
    },
    setToken: (s) => {
      !s || (o && (s = n.encode(s)), Y.set(P.TOKEN_LOCAL_KEY, s, 60 * 60));
    },
    getToken: () => {
      let s = Y.get(P.TOKEN_LOCAL_KEY);
      return s && (o && (s = n.decode(s)), s);
    },
    setUserInfo: (s) => {
      if (!s)
        return;
      e.value.userInfo = s;
      let a = JSON.stringify(s);
      o && (a = n.encode(a)), Y.set(P.USER_LOCAL_STORE_KEY, a, 60 * 60);
    },
    getUserInfo: () => {
      if (e.value.userInfo)
        return e.value.userInfo;
      let s = Y.get(P.USER_LOCAL_STORE_KEY);
      if (!!s)
        return o && (s = n.decode(s)), s = s ? JSON.parse(s) : null, e.value.userInfo = s, s;
    },
    setLoginResponse: (s) => {
      r.setToken(s.token), r.setUserInfo(s.userInfo);
    },
    logout: () => {
      Y.remove(P.USER_LOCAL_STORE_KEY), Y.remove(P.TOKEN_LOCAL_KEY), Y.remove(P.LOCAL_PROJECT_ID), e.value.token = null, e.value.userInfo = null, t.toLogin({ name: null, target: pe.SLEF });
    },
    isLogin: () => !!r.getToken(),
    setProjectId: (s) => {
      Y.set(P.LOCAL_PROJECT_ID, s);
    },
    getProjectId: () => Y.get(P.LOCAL_PROJECT_ID)
  };
  return r;
}
const qn = {
  __name: "item",
  props: {
    item: Object,
    formValue: Object,
    ns: String
  },
  setup(e, { expose: t }) {
    const n = e, o = n.ns ? n.ns : A().namespace, r = L(() => q(o, "form-item")), s = L(() => {
      const m = {};
      return m.label = n.item.label, m.path = n.item.prop, m;
    }), a = w(0), l = L(() => {
      const m = {
        componentName: "",
        props: null,
        style: null
      };
      let p = "input";
      const _ = n.item.component;
      return _ && (_.render ? m.componentName = _.render(n.formValue) : _.name && (p = _.name), m.props = _.props || {}, _.attrs && (m.props = { ...m.props, ..._.attrs })), m.componentName || (m.componentName = q(o, p)), m;
    }), i = w(n.formValue[n.item.prop]), u = n.item.on && n.item.on.change;
    ae(
      () => i.value,
      (m, p) => {
        n.formValue[n.item.prop] = m, u && n.item.on.change(m, p, n.formValue);
      }
    );
    const f = w();
    function g() {
      f.value.$el.scrollIntoView({
        behavior: "smooth",
        top: 0
      });
    }
    function d() {
      i.value = n.formValue[n.item.prop], a.value++;
    }
    return t({
      scrollTo: g,
      updateValue: d
    }), (m, p) => {
      const _ = x("n-icon"), $ = x("n-tooltip");
      return c(), C(M(r.value), z(F(s.value)), Ct({
        default: O(() => [
          e.item.slot ? h(m.$slots, "default", { key: 0 }) : (c(), b(ve, { key: 1 }, [
            e.item.component && e.item.component.render ? (c(), C(M(l.value.componentName), D({
              key: 0,
              style: l.value.style
            }, l.value.props, {
              modelValue: i.value,
              "onUpdate:modelValue": p[0] || (p[0] = (S) => i.value = S),
              ref_key: "itemRef",
              ref: f,
              key: a.value
            }), null, 16, ["style", "modelValue"])) : (c(), C(M(l.value.componentName), D({
              key: 1,
              style: l.value.style
            }, l.value.props, {
              value: i.value,
              "onUpdate:value": p[1] || (p[1] = (S) => i.value = S),
              ref_key: "itemRef",
              ref: f,
              key: a.value + 1
            }), null, 16, ["style", "value"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.item.tooltip ? {
          name: "label",
          fn: O(() => [
            j(H(e.item.label) + " ", 1),
            B($, { trigger: "hover" }, {
              trigger: O(() => [
                B(_, {
                  size: "18",
                  class: "cursor-pointer text-gray-400",
                  component: e.item.tooltip.icon
                }, null, 8, ["component"])
              ]),
              default: O(() => [
                j(" " + H(e.item.tooltip.message), 1)
              ]),
              _: 1
            })
          ]),
          key: "0"
        } : void 0
      ]), 1040);
    };
  }
}, Kn = { key: 0 }, Yn = {
  name: "Form"
}, Gn = /* @__PURE__ */ I({
  ...Yn,
  props: {
    dataId: {
      type: String,
      required: !0
    },
    ns: String
  },
  setup(e, { expose: t }) {
    const n = e, o = w([]), r = w({}), s = w(!1), a = w({}), l = {}, i = w(""), u = w(), f = {}, g = A(), d = jt(), m = ee(), p = w();
    let _ = null;
    const $ = Se();
    function S(re) {
      s.value || Wt(g, n, re, { formValue: a, oldFormValue: l }, (U) => {
        i.value = U.name, o.value = U.items, u.value = U.rules, a.value = U.formValue, u.value = U.rules, r.value = U.props, s.value = !0, _ = re.on, g.registerAction($, E.SUBMIT, {
          action: (K, _e) => Ie(K, _e)
        });
      });
    }
    te(() => {
      g.removeAction($, E.SUBMIT);
    });
    function R(re, U) {
      f[U.prop] = {
        el: re
      };
    }
    const V = qt({ formValue: a, oldFormValue: l, refs: f });
    t({
      setOptions: S,
      isVisible: () => d,
      getParentDataId: () => m,
      ...V
    });
    function Ie(re, U, K) {
      return new Promise((_e, Ne) => {
        var Ke;
        K && K.preventDefault(), (Ke = p.value) == null || Ke.validate((Ae) => {
          if (Ae)
            nt(U, Ae), Ne(Ae);
          else {
            if (Object.keys(V.getValues(!0)).length > 0) {
              tt(U);
              const wt = _.submit(V.getValues(), U);
              Ft(wt, U, () => g.applyAll(Se(), E.DATA_REFRESH));
            } else
              me(U), we(U);
            _e(null);
          }
        });
      });
    }
    function Se() {
      return ee() || n.dataId;
    }
    return (re, U) => s.value ? (c(), C(M(i.value), D({ key: 0 }, r.value, {
      model: a.value,
      rules: u.value,
      ref_key: "formRef",
      ref: p
    }), {
      default: O(() => [
        (c(!0), b(ve, null, be(o.value, (K, _e) => (c(), b("span", { key: _e }, [
          K.type === y(he).TAB ? (c(), b("span", Kn, H(K), 1)) : (c(), C(qn, {
            key: 1,
            item: K,
            formValue: a.value,
            ns: e.ns,
            ref_for: !0,
            ref: (Ne) => R(Ne, K)
          }, {
            default: O(() => [
              K.slot ? h(re.$slots, K.slot, {
                key: 0,
                row: a.value,
                value: a.value[K.prop]
              }) : T("", !0)
            ]),
            _: 2
          }, 1032, ["item", "formValue", "ns"]))
        ]))), 128))
      ]),
      _: 3
    }, 16, ["model", "rules"])) : T("", !0);
  }
});
function Wn(e) {
  const t = w();
  return Te(t, e), t;
}
const Jn = {}, Qn = I({
  name: "UserLoginForm",
  props: Jn,
  setup(e) {
    return Et({
      setOptions: (n) => {
      }
    }), {
      a: "qinjiawang"
    };
  }
});
function Xn(e, t, n, o, r, s) {
  const a = x("o-view");
  return c(), C(a, null, {
    default: O(() => [
      h(e.$slots, "default")
    ]),
    _: 3
  });
}
const Zn = /* @__PURE__ */ N(Qn, [["render", Xn]]);
function eo(e) {
  const t = w();
  return Te(t, e), t;
}
const to = { style: { width: "100%" } }, no = {
  key: 0,
  class: "tooltip"
}, oo = {
  name: "Input"
}, so = /* @__PURE__ */ I({
  ...oo,
  props: rt,
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = w(n.modelValue), r = A(), s = nn(r, n);
    ae(
      () => o.value,
      (l) => {
        t("update:modelValue", l);
      }
    );
    function a() {
      if (!n.tooltip)
        return;
      const l = n.tooltip;
      l.onClick && l.onClick(o.value), Ht(l.to, l.url);
    }
    return (l, i) => (c(), b("div", to, [
      v("div", null, [
        (c(), C(M(y(s).name), D(y(s).props, {
          value: o.value,
          "onUpdate:value": i[0] || (i[0] = (u) => o.value = u)
        }), {
          prefix: O(() => [
            h(l.$slots, "prefix", {}, void 0, !0)
          ]),
          _: 3
        }, 16, ["value"]))
      ]),
      v("span", { onClick: a }, [
        h(l.$slots, "tooltip", {}, () => [
          l.tooltip ? (c(), b("span", no, H(l.tooltip.message), 1)) : T("", !0)
        ], !0)
      ])
    ]));
  }
});
const ft = /* @__PURE__ */ N(so, [["__scopeId", "data-v-a1ef52fd"]]), ro = {
  name: "UsernameInput"
}, ao = /* @__PURE__ */ I({
  ...ro,
  props: at,
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = w(e.modelValue);
    ae(
      () => o.value,
      (s) => {
        t("update:modelValue", s);
      }
    );
    function r(s) {
      const a = { ...s };
      return a.placeholder || (a.placeholder = "\u8BF7\u8F93\u5165\u767B\u5F55\u8D26\u53F7"), a.size || (a.size = "large"), a.icon && (a.icon.size || (a.icon.size = 18)), a;
    }
    return (s, a) => {
      const l = x("o-icon");
      return c(), C(M("o-input"), D(r(s.$props), {
        modelValue: o.value,
        "onUpdate:modelValue": a[0] || (a[0] = (i) => o.value = i)
      }), {
        prefix: O(() => [
          h(s.$slots, "prefix", {}, () => [
            s.icon ? (c(), C(l, z(D({ key: 0 }, s.icon)), null, 16)) : T("", !0)
          ])
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
}), lo = {
  name: "PasswordInput"
}, io = /* @__PURE__ */ I({
  ...lo,
  props: tn,
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = w(n.modelValue), r = !!Me();
    ae(
      () => o.value,
      (a) => {
        let l = a;
        n.encode && r && (l = Me().encode(a)), t("update:modelValue", l);
      }
    );
    function s(a) {
      const l = { ...a };
      return l.placeholder || (l.placeholder = "\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"), l.size || (l.size = "large"), l.icon && (l.icon.size || (l.icon.size = 18)), l.type = "password", l;
    }
    return (a, l) => {
      const i = x("o-icon");
      return c(), C(M("o-input"), D(s(a.$props), {
        modelValue: o.value,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => o.value = u)
      }), {
        prefix: O(() => [
          h(a.$slots, "prefix", {}, () => [
            a.icon ? (c(), C(i, z(D({ key: 0 }, a.icon)), null, 16)) : T("", !0)
          ])
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
}), uo = {
  name: "Icon"
}, co = /* @__PURE__ */ I({
  ...uo,
  props: je,
  setup(e) {
    const t = e, n = A(), o = q(t.ns || n.namespace, "icon"), r = {}, s = {
      color: t.color,
      size: t.size
    };
    return s.component = t.component, t.rotate && (r.transform = `rotate(${t.rotate}deg)`), t.component || (s.class = t.type + t.name), t.spin && (s.class = "icon-spin"), (a, l) => (c(), C(M(y(o)), D(s, {
      style: [r]
    }), null, 16, ["style"]));
  }
});
const _t = /* @__PURE__ */ N(co, [["__scopeId", "data-v-04e04ec5"]]), po = ["width", "height"], fo = ["fill"], _o = {
  name: "CloseIcon"
}, mo = /* @__PURE__ */ I({
  ..._o,
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
    return (t, n) => (c(), b("svg", {
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
      v("path", {
        d: "M572.16 512l183.467-183.04a42.667 42.667 0 1 0-60.587-60.587L512 451.84 328.96 268.373a42.667 42.667 0 0 0-60.587 60.587L451.84 512 268.373 695.04a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.587 0L512 572.16l183.04 183.467a42.667 42.667 0 0 0 60.587 0 42.667 42.667 0 0 0 0-60.587z",
        fill: e.color,
        "p-id": "2402"
      }, null, 8, fo)
    ], 8, po));
  }
});
const ho = /* @__PURE__ */ N(mo, [["__scopeId", "data-v-56c249a3"]]), vo = ["xlink:href"], go = {
  name: "SvgIcon"
}, yo = /* @__PURE__ */ I({
  ...go,
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
    const t = e;
    function n(a) {
      return /^(https?:|mailto:|tel:)/.test(a);
    }
    const o = L(() => n(t.icon)), r = L(() => ({
      mask: `url(${t.icon}) no-repeat 50% 50%`,
      "-webkit-mask": `url(${t.icon}) no-repeat 50% 50%`
    })), s = L(() => `#icon-${t.icon}`);
    return (a, l) => o.value ? (c(), b("div", {
      key: 0,
      style: k(r.value),
      class: le(["svg-external-icon svg-icon", e.className])
    }, null, 6)) : (c(), b("svg", {
      key: 1,
      class: le(["svg-icon", e.className]),
      "aria-hidden": "true"
    }, [
      v("use", { "xlink:href": s.value }, null, 8, vo)
    ], 2));
  }
});
const $o = /* @__PURE__ */ N(yo, [["__scopeId", "data-v-699aa19d"]]), Oo = ["width", "height"], Io = ["fill"], So = {
  name: "RefreshIcon"
}, wo = /* @__PURE__ */ I({
  ...So,
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
    return (t, n) => (c(), b("svg", {
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
      v("path", {
        d: "M894.481158 505.727133c0 49.589418-9.711176 97.705276-28.867468 143.007041-18.501376 43.74634-44.98454 83.031065-78.712713 116.759237-33.728172 33.728172-73.012897 60.211337-116.759237 78.712713-45.311998 19.156292-93.417623 28.877701-143.007041 28.877701s-97.695043-9.721409-142.996808-28.877701c-43.756573-18.501376-83.031065-44.98454-116.76947-78.712713-33.728172-33.728172-60.211337-73.012897-78.712713-116.759237-19.156292-45.301765-28.867468-93.417623-28.867468-143.007041 0-49.579185 9.711176-97.695043 28.867468-142.996808 18.501376-43.74634 44.98454-83.031065 78.712713-116.759237 33.738405-33.728172 73.012897-60.211337 116.76947-78.712713 45.301765-19.166525 93.40739-28.877701 142.996808-28.877701 52.925397 0 104.008842 11.010775 151.827941 32.745798 46.192042 20.977777 86.909395 50.79692 121.016191 88.608084 4.389984 4.860704 8.646937 9.854439 12.781094 14.97097l0-136.263453c0-11.307533 9.168824-20.466124 20.466124-20.466124 11.307533 0 20.466124 9.15859 20.466124 20.466124l0 183.64253c0 5.433756-2.148943 10.632151-5.986341 14.46955-3.847631 3.837398-9.046027 5.996574-14.479783 5.996574l-183.64253-0.020466c-11.307533 0-20.466124-9.168824-20.466124-20.466124 0-11.307533 9.168824-20.466124 20.466124-20.466124l132.293025 0.020466c-3.960195-4.952802-8.063653-9.782807-12.289907-14.479783-30.320563-33.605376-66.514903-60.098773-107.549481-78.753645-42.467207-19.289322-87.850837-29.072129-134.902456-29.072129-87.195921 0-169.172981 33.9533-230.816946 95.597265-61.654198 61.654198-95.597265 143.621025-95.597265 230.816946s33.943067 169.172981 95.597265 230.816946c61.643965 61.654198 143.621025 95.607498 230.816946 95.607498s169.172981-33.9533 230.816946-95.607498c61.654198-61.643965 95.597265-143.621025 95.597265-230.816946 0-11.2973 9.168824-20.466124 20.466124-20.466124C885.322567 485.261009 894.481158 494.429833 894.481158 505.727133z",
        "p-id": "3497",
        fill: e.color
      }, null, 8, Io)
    ], 8, Oo));
  }
});
const mt = /* @__PURE__ */ N(wo, [["__scopeId", "data-v-782245e7"]]), bo = ["width", "height"], Co = ["fill"], Eo = {
  name: "CopyIcon"
}, xo = /* @__PURE__ */ I({
  ...Eo,
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
    return (t, n) => (c(), b("svg", {
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
      v("path", {
        d: "M832 128c-12.8-76.8-76.8-128-160-128h-448C102.4 0 0 102.4 0 224v448c0 76.8 57.6 140.8 128 160 12.8 76.8 76.8 128 160 128h512c89.6 0 160-70.4 160-160v-512c0-76.8-57.6-140.8-128-160zM64 672v-448C64 134.4 134.4 64 224 64h448c44.8 0 76.8 25.6 89.6 64H288C198.4 128 128 198.4 128 288v473.6c-38.4-12.8-64-44.8-64-89.6z m832 128c0 51.2-44.8 96-96 96h-512c-51.2 0-96-44.8-96-96v-512C192 236.8 236.8 192 288 192h512c51.2 0 96 44.8 96 96v512z",
        fill: e.color,
        "p-id": "4541"
      }, null, 8, Co)
    ], 8, bo));
  }
});
const Po = /* @__PURE__ */ N(xo, [["__scopeId", "data-v-a1ddcf82"]]), ko = ["width", "height"], No = ["fill"], Ao = {
  name: "CodeIcon"
}, Lo = /* @__PURE__ */ I({
  ...Ao,
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
    return (t, n) => (c(), b("svg", {
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
      v("path", {
        d: "M375.893333 810.666667c-12.501333 0-23.466667-4.48-32.853333-13.482667l-286.293333-274.304c-18.773333-17.962667-18.773333-46.464 0-62.933333l286.293333-275.797334c18.773333-17.962667 48.512-17.962667 65.706667 0 18.773333 18.005333 18.773333 46.506667 0 62.976l-253.44 242.773334 253.44 242.816c18.773333 18.005333 18.773333 46.506667 0 62.976-7.808 10.496-20.352 14.976-32.853334 14.976zM648.106667 810.666667c-12.501333 0-23.466667-4.48-32.853334-13.482667-18.773333-18.005333-18.773333-46.506667 0-62.976l253.44-242.773333-255.018666-244.309334c-18.773333-18.005333-18.773333-46.506667 0-62.976 18.773333-17.962667 48.512-17.962667 65.706666 0l286.293334 275.797334c18.773333 17.962667 18.773333 46.464 0 62.933333l-284.714667 274.304c-9.386667 8.96-21.888 13.482667-32.853333 13.482667z",
        fill: e.color,
        "p-id": "5547"
      }, null, 8, No)
    ], 8, ko));
  }
});
const ht = /* @__PURE__ */ N(Lo, [["__scopeId", "data-v-3bfd490c"]]), Mo = (e) => (De("data-v-5ffbcb66"), e = e(), Re(), e), Do = ["width", "height"], Ro = /* @__PURE__ */ Mo(() => /* @__PURE__ */ v("path", {
  d: "M736 800a32 32 0 0 0-32 32v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v128a32 32 0 0 0 64 0V96a96.11 96.11 0 0 0-96-96H96A96.11 96.11 0 0 0 0 96v832a96.11 96.11 0 0 0 96 96h576a96.11 96.11 0 0 0 96-96v-96a32 32 0 0 0-32-32z",
  fill: "#1F1F21",
  "p-id": "6519"
}, null, -1)), Bo = ["fill"], Vo = {
  name: "LogoutIcon"
}, To = /* @__PURE__ */ I({
  ...Vo,
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
    return (t, n) => (c(), b("svg", {
      t: "1711462810865",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "6518",
      width: e.fontSize,
      height: e.fontSize
    }, [
      Ro,
      v("path", {
        d: "M1024 510.42v-0.24c0-0.63-0.09-1.25-0.16-1.88 0-0.15 0-0.3-0.05-0.46a31.043 31.043 0 0 0-0.84-4.21l-0.06-0.23a31.84 31.84 0 0 0-1.5-4.22l-0.05-0.12a31.73 31.73 0 0 0-2.1-4l-0.14-0.22a31.93 31.93 0 0 0-2.59-3.51l-0.34-0.4c-0.46-0.52-0.93-1-1.43-1.54l-160-160a32 32 0 1 0-45.26 45.25L914.75 480H544a32 32 0 0 0 0 64h370.75L809.38 649.37a32 32 0 1 0 45.25 45.25l160-160 0.28-0.3 0.45-0.47q0.59-0.63 1.13-1.27l0.24-0.28c0.46-0.55 0.89-1.12 1.3-1.7l0.19-0.27c0.41-0.59 0.81-1.18 1.17-1.79q0.61-1 1.14-2.06a31.78 31.78 0 0 0 1.81-4.36l0.05-0.17a32 32 0 0 0 1.07-4.29l0.08-0.47c0.11-0.68 0.21-1.37 0.27-2.05v-0.17c0.06-0.63 0.09-1.26 0.11-1.9v-0.58c0.08-0.73 0.08-1.4 0.08-2.07z",
        fill: e.color,
        "p-id": "6520"
      }, null, 8, Bo)
    ], 8, Do));
  }
});
const zo = /* @__PURE__ */ N(To, [["__scopeId", "data-v-5ffbcb66"]]), Uo = ["width", "height"], jo = ["fill"], Fo = {
  name: "UsernameIcon"
}, Ho = /* @__PURE__ */ I({
  ...Fo,
  props: {
    fontSize: {
      type: [String, Number],
      default: "18px"
    },
    color: {
      type: String,
      default: "#808695"
    }
  },
  setup(e) {
    return (t, n) => (c(), b("svg", {
      t: "1711638813202",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "8318",
      width: e.fontSize,
      height: e.fontSize
    }, [
      v("path", {
        d: "M612.753 957H422.251c-162.786 0-294.904 0-294.904-65.277v-18.819c2.262-160.785 133.631-289.939 294.904-289.923h190.502c161.269-0.016 292.646 129.138 294.9 289.923v18.819C907.653 957 776.128 957 612.753 957zM507.767 508.293c-126.384 0-228.835-100.575-228.835-224.642C278.931 159.579 381.383 59 507.767 59c126.388 0 228.847 100.579 228.847 224.65 0 124.068-102.46 224.643-228.847 224.643z",
        fill: e.color,
        "p-id": "8319"
      }, null, 8, jo)
    ], 8, Uo));
  }
});
const qo = /* @__PURE__ */ N(Ho, [["__scopeId", "data-v-06901fe7"]]), Ko = (e) => (De("data-v-36b24f6f"), e = e(), Re(), e), Yo = ["width", "height"], Go = /* @__PURE__ */ Ko(() => /* @__PURE__ */ v("path", {
  d: "M839.68 384h-43.52v-97.28C796.16 135.68 673.28 10.24 519.68 10.24S245.76 135.68 245.76 286.72V384H184.32c-46.08 0-84.48 38.4-84.48 84.48v460.8c0 46.08 38.4 84.48 84.48 84.48h657.92c46.08 0 84.48-38.4 84.48-84.48v-460.8c-2.56-46.08-40.96-84.48-87.04-84.48z m-529.92-97.28c0-115.2 94.72-212.48 212.48-212.48s212.48 94.72 212.48 212.48V384H309.76v-97.28z m550.4 642.56c0 10.24-7.68 20.48-20.48 20.48H184.32c-10.24 0-20.48-7.68-20.48-20.48v-460.8c0-10.24 7.68-20.48 20.48-20.48h657.92c10.24 0 20.48 7.68 20.48 20.48v460.8z",
  fill: "#737373",
  "p-id": "9324"
}, null, -1)), Wo = ["fill"], Jo = {
  name: "PasswordIcon"
}, Qo = /* @__PURE__ */ I({
  ...Jo,
  props: {
    fontSize: {
      type: [String, Number],
      default: "18"
    },
    color: {
      type: String,
      default: "#000"
    }
  },
  setup(e) {
    return (t, n) => (c(), b("svg", {
      t: "1711638958894",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "9323",
      width: e.fontSize,
      height: e.fontSize
    }, [
      Go,
      v("path", {
        d: "M512 814.08c-20.48 0-38.4-17.92-38.4-38.4v-156.16c0-20.48 17.92-38.4 38.4-38.4s38.4 17.92 38.4 38.4v156.16c0 20.48-17.92 38.4-38.4 38.4z",
        fill: e.color,
        "p-id": "9325"
      }, null, 8, Wo)
    ], 8, Yo));
  }
});
const Xo = /* @__PURE__ */ N(Qo, [["__scopeId", "data-v-36b24f6f"]]), Zo = {
  name: "Layout"
}, es = /* @__PURE__ */ I({
  ...Zo,
  setup(e) {
    const t = {
      header: {
        height: 50
      },
      slider: {
        width: 0
      },
      backgroundColor: Ce.BACKGROUND_COLOR,
      menu: {
        width: 80,
        backgroundColor: Ce.MENU_BACKGROUND_COLOR,
        color: "#fff"
      },
      subMenu: {
        width: 170
      },
      content: {
        offsets: [11, 10, 0, 10]
      }
    }, n = A();
    n.setLayoutConfig(t);
    const o = oe(), r = L(() => o.value && o.value.menu && o.value.menu.activeMenuItem && o.value.menu.activeMenuItem.id), s = L(() => o.value && o.value.subMenu && o.value.subMenu.activeMenuItem && o.value.subMenu.activeMenuItem.id), a = X();
    ae(
      () => r.value,
      (u) => {
        if (!u)
          return;
        const f = o.value.menu.activeMenuItem;
        console.log("======menu changed", f), i(f);
      }
    ), ae(
      () => s.value,
      (u) => {
        if (!u)
          return;
        const f = o.value.subMenu.activeMenuItem;
        i(f), console.log("======sub menu changed", f);
      }
    );
    const l = Z();
    function i(u) {
      if (!ue(u.id, u.permission, l)) {
        if (!n.config) {
          console.error("errorHandler is null");
          return;
        }
        if (!l.isLogin()) {
          a.toLogin();
          return;
        }
        n.config.errorHanlder($e.NOT_PERMISSION, u);
      }
    }
    return (u, f) => h(u.$slots, "default");
  }
});
function vt() {
  const e = oe();
  return {
    setBackgroundColor: (n) => e.value.backgroundColor = n,
    setLogo: (n) => e.value.menu.logo = n,
    setActiveMenu: (n) => {
      if (console.log("======"), !ue(n.id, n.permission)) {
        ze($e.NOT_PERMISSION, n);
        return;
      }
      e.value.menu.activeMenuItem && e.value.menu.activeMenuItem.id === n.id || (e.value.menu.activeMenuItem = n, e.value.subMenu.activeMenuItem = null);
    }
  };
}
const ts = {
  name: "SliderLayout"
}, ns = /* @__PURE__ */ I({
  ...ts,
  props: {
    overflow: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = oe(), n = L(() => {
      if (!t.value.menu.activeMenuItem)
        return 0;
      const o = t.value.menu.activeMenuItem;
      return o.children && o.children.length > 0 ? t.value.subMenu.width : 0;
    });
    return (o, r) => (c(), b("div", {
      class: "o-slider-layout",
      style: k({
        backgroundColor: y(t).backgroundColor
      })
    }, [
      v("div", {
        class: "header",
        style: k({
          height: `${y(t).header.height}px`,
          left: `${y(t).menu.width + n.value}px`
        })
      }, [
        h(o.$slots, "header", {}, void 0, !0)
      ], 4),
      v("div", {
        class: "menu",
        style: k({
          width: `${y(t).menu.width}px`,
          backgroundColor: y(t).menu.backgroundColor,
          color: y(t).menu.color
        })
      }, [
        h(o.$slots, "menu", {}, void 0, !0)
      ], 4),
      v("div", {
        class: "content",
        style: k({
          top: `${y(t).header.height}px`,
          left: `${y(t).menu.width + n.value}px`,
          backgroundColor: y(t).content.backgroundColor
        })
      }, [
        v("div", {
          class: "content-inner",
          style: k({
            top: `${y(t).content.offsets[0]}px`,
            right: `${y(t).content.offsets[1]}px`,
            bottom: `${y(t).content.offsets[2]}px`,
            left: `${y(t).content.offsets[3]}px`,
            overflowY: `${e.overflow ? "auto" : "hidden"}`
          })
        }, [
          h(o.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 4)
    ], 4));
  }
});
const os = /* @__PURE__ */ N(ns, [["__scopeId", "data-v-a12d0a24"]]), ss = (e) => (De("data-v-2fc98325"), e = e(), Re(), e), rs = /* @__PURE__ */ ss(() => /* @__PURE__ */ v("a", { href: "#aa" }, "aa", -1)), as = {
  name: "SimpleLayout"
}, ls = /* @__PURE__ */ I({
  ...as,
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
    const t = e, n = oe();
    t.headerHeight && (n.value.header.height = 64), t.menuWidth && (n.value.menu.width = t.menuWidth), t.sliderWidth && (n.value.slider.width = t.sliderWidth), t.contentRight && (n.value.contentRight = t.contentRight);
    const o = L(() => n.value.header.height > 0 && t.hasHeader), r = L(() => n.value.contentRight && n.value.contentRight.width > 0), s = L(() => n.value.slider && n.value.slider.width > 0 && t.hasSlider);
    n.value.menu.backgroundColor === Ce.MENU_BACKGROUND_COLOR && (n.value.menu.backgroundColor = "#fff"), t.backgroundColor && (n.value.backgroundColor = t.backgroundColor);
    const a = L(() => 0);
    return (l, i) => (c(), b("div", {
      class: "o-simple-layout",
      style: k({ backgroundColor: `${y(n).backgroundColor}` })
    }, [
      o.value ? (c(), b("div", {
        key: 0,
        class: "header",
        style: k({
          height: `${y(n).header.height}px`,
          left: `${s.value ? y(n).slider.width : 0}px`
        })
      }, [
        h(l.$slots, "header", {}, void 0, !0)
      ], 4)) : T("", !0),
      v("div", {
        class: "menu",
        style: k({
          top: `${o.value ? y(n).header.height : 0}px`,
          width: `${y(n).menu.width}px`,
          left: `${s.value ? y(n).slider.width : 0}px`,
          backgroundColor: y(n).menu.backgroundColor
        })
      }, [
        h(l.$slots, "menu", {}, void 0, !0)
      ], 4),
      v("div", {
        class: "content",
        style: k({
          top: `${o.value ? y(n).header.height : 0}px`,
          left: `${y(n).menu.width + a.value + (s.value ? y(n).slider.width : 0)}px`,
          backgroundColor: y(n).content.backgroundColor
        })
      }, [
        v("div", {
          class: le(["content-inner", e.overflow ? "default-scroll" : ""]),
          style: k({
            top: `${y(n).content.offsets[0]}px`,
            right: `${y(n).content.offsets[1]}px`,
            bottom: `${y(n).content.offsets[2]}px`,
            left: `${y(n).content.offsets[3]}px`
          })
        }, [
          r.value ? (c(), b("div", {
            key: 0,
            class: "content-right",
            style: k({ width: `${y(n).contentRight.width}px` })
          }, [
            h(l.$slots, "content-right", {}, () => [
              j(" content-right "),
              rs
            ], !0)
          ], 4)) : T("", !0),
          v("div", {
            style: k({
              position: "absolute",
              top: "0",
              right: `${r.value ? y(n).contentRight.width : 0}px`,
              bottom: "0px",
              left: "0px"
            })
          }, [
            h(l.$slots, "default", {}, void 0, !0)
          ], 4)
        ], 6)
      ], 4),
      s.value ? (c(), b("div", {
        key: 1,
        class: "slider",
        style: k({ width: `${y(n).slider.width}px` })
      }, [
        h(l.$slots, "slider", {}, void 0, !0)
      ], 4)) : T("", !0)
    ], 4));
  }
});
const is = /* @__PURE__ */ N(ls, [["__scopeId", "data-v-2fc98325"]]), us = {
  name: "LayoutMenu"
}, cs = /* @__PURE__ */ I({
  ...us,
  props: ot,
  setup(e) {
    const t = e, n = X(), o = Z(), r = oe(), s = L(() => {
      if (!r.value.menu.activeMenuItem)
        return 0;
      const i = r.value.menu.activeMenuItem;
      return i.children && i.children.length > 0 ? r.value.subMenu.width : 0;
    }), a = w([]);
    G(() => {
      l();
    });
    function l() {
      ne(t.onLoad, (i) => {
        if (a.value = i || [], a.value && a.value.length > 0 && !r.value.menu.activeMenuItem && (r.value.menu.activeMenuItem = a.value[0], a.value[0].router)) {
          const u = { ...a.value[0].router, replace: !0 };
          o.getProjectId() && (u.params || (u.params = {}), u.params.projectId = o.getProjectId()), n.push(u);
        }
      });
    }
    return (i, u) => h(i.$slots, "default", {
      data: a.value,
      subMenuWidth: s.value
    });
  }
}), ds = { class: "logo" }, ps = { class: "list" }, fs = ["onClick"], _s = { key: 0 }, ms = { class: "title" }, hs = ["title"], vs = ["onClick"], gs = {
  key: 0,
  class: "sub-menu-icon"
}, ys = {
  name: "LayoutMenu"
}, $s = /* @__PURE__ */ I({
  ...ys,
  props: ot,
  setup(e) {
    const t = X(), n = oe(), o = L(() => n.value.menu.activeMenuItem), r = L(() => n.value.subMenu.activeMenuItem), s = Z();
    vt();
    function a(u) {
      n.value.menu.activeMenuItem && n.value.menu.activeMenuItem.id === u.id || (n.value.menu.activeMenuItem = u, n.value.subMenu.activeMenuItem = null, u.router && t.push(i({ ...u.router, replace: !0 })));
    }
    function l(u) {
      n.value.subMenu.activeMenuItem && n.value.subMenu.activeMenuItem.id === u.id || (n.value.subMenu.activeMenuItem = u, u.router && t.push(i({ ...u.router, replace: !0 })));
    }
    function i(u) {
      const f = u;
      return s.getProjectId() && (f.params || (f.params = {}), f.params.projectId = s.getProjectId()), u;
    }
    return (u, f) => {
      const g = x("o-icon");
      return c(), C(cs, z(F(u.$props)), {
        default: O(({ data: d, subMenuWidth: m }) => [
          v("div", ds, [
            v("div", {
              style: k({ minHeight: `${y(n).header.height}px` })
            }, [
              h(u.$slots, "logo", {}, void 0, !0)
            ], 4)
          ]),
          v("div", ps, [
            (c(!0), b(ve, null, be(d, (p, _) => (c(), b("div", {
              class: le(["list-item", o.value && o.value.id === p.id ? "select" : ""]),
              key: _,
              onClick: ($) => a(p)
            }, [
              v("div", null, [
                p.icon ? (c(), b("div", _s, [
                  B(g, z(F(p.icon)), null, 16)
                ])) : T("", !0),
                v("div", ms, H(p.title), 1)
              ])
            ], 10, fs))), 128))
          ]),
          Xe(v("div", {
            class: "sub-menu",
            style: k({
              width: `${m}px`,
              left: `${y(n).menu.width}px`
            })
          }, [
            v("div", {
              class: "title ellipsis",
              style: k({
                height: `${y(n).header.height}px`,
                lineHeight: `${y(n).header.height}px`
              }),
              title: m > 0 ? o.value.title : ""
            }, H(m > 0 ? o.value.title : ""), 13, hs),
            (c(!0), b(ve, null, be(m > 0 ? o.value.children : [], (p, _) => (c(), b("div", {
              class: le(["sub-menu-list-item", r.value && r.value.id === p.id ? "sub-menu-select" : ""]),
              key: _,
              onClick: ($) => l(p)
            }, [
              p.icon ? (c(), b("div", gs, [
                B(g, z(F(p.icon)), null, 16)
              ])) : T("", !0),
              v("div", null, H(p.title), 1)
            ], 10, vs))), 128))
          ], 4), [
            [Ze, m > 0]
          ])
        ]),
        _: 3
      }, 16);
    };
  }
});
const Os = /* @__PURE__ */ N($s, [["__scopeId", "data-v-413a7832"]]), Is = {
  name: "LayoutHeader"
};
const Ss = { class: "header" }, ws = { class: "item" }, bs = { class: "project" }, Cs = { style: { "padding-top": "10px", "padding-right": "10px" } };
function Es(e, t, n, o, r, s) {
  return c(), b("div", Ss, [
    v("div", null, [
      h(e.$slots, "left", {}, void 0, !0)
    ]),
    v("div", ws, [
      v("div", null, [
        h(e.$slots, "right", {}, void 0, !0)
      ]),
      v("div", bs, [
        h(e.$slots, "project", {}, void 0, !0)
      ]),
      v("div", Cs, [
        h(e.$slots, "user-info", {}, void 0, !0)
      ])
    ])
  ]);
}
const xs = /* @__PURE__ */ N(Is, [["render", Es], ["__scopeId", "data-v-004b2647"]]), Ps = {
  key: 0,
  class: "action"
}, ks = {
  key: 0,
  class: "icon"
}, Ns = {
  name: "SimpleSelect"
}, As = /* @__PURE__ */ I({
  ...Ns,
  props: lt,
  setup(e) {
    const t = e, n = A(), o = n.namespace, r = q(n.namespace, "select"), s = X(), a = {
      ...t
    };
    ye(o) && t.allowCreate && (a.tag = !0, a.filterable = !0, a.multiple = !0);
    const l = Z();
    ne(t.options, (u) => a.options = u);
    function i() {
      t.action.onClick && t.action.onClick(), t.action.to && s.push(t.action.to, { projectId: l.getProjectId() });
    }
    return (u, f) => {
      const g = x("o-icon");
      return c(), C(M(y(r)), D(a, { style: { width: "100px" } }), {
        action: O(() => [
          h(u.$slots, "action", {}, () => [
            u.action ? (c(), b("div", Ps, [
              u.action.icon ? (c(), b("div", ks, [
                B(g, z(F(u.action.icon)), null, 16)
              ])) : T("", !0),
              v("div", { onClick: i }, H(u.action.text), 1)
            ])) : T("", !0)
          ], !0)
        ]),
        arrow: O(() => [
          h(u.$slots, "arrow", {}, void 0, !0)
        ]),
        _: 3
      }, 16);
    };
  }
});
const gt = /* @__PURE__ */ N(As, [["__scopeId", "data-v-241c36e7"]]), Ls = {
  name: "ProjectSelect"
}, Ms = /* @__PURE__ */ I({
  ...Ls,
  props: rn,
  setup(e) {
    const t = e;
    A();
    const n = Z(), o = X(), r = w([]), s = w(), a = w(0);
    G(() => {
      console.log("=====projectId"), ne(t.options, (f) => l(f));
    });
    function l(f) {
      if (r.value = f, o.projectId()) {
        const d = o.projectId();
        try {
          s.value = parseInt(d);
        } catch {
          s.value = d;
        }
      }
      if (!s.value) {
        const d = n.getProjectId();
        try {
          s.value = parseInt(d);
        } catch {
          s.value = d;
        }
      }
      f.find((d) => d.value == s.value) || (s.value = null, f && f.length > 0 && (s.value = f[0].value, n.setProjectId(s.value), u(s.value))), a.value++;
    }
    function i(f, g) {
      if (console.log(f, g), g.value == s.value)
        return;
      const d = g.value;
      n.setProjectId(d), u(d);
    }
    function u(f) {
      o.push({
        name: o.name(),
        params: { ...o.params(), projectId: f },
        query: o.query(),
        target: pe.SLEF,
        replace: !0
      });
    }
    return (f, g) => {
      const d = x("o-simple-select");
      return c(), C(d, D({
        style: { width: "150px" },
        "onUpdate:value": i,
        placeholder: "\u8BF7\u9009\u62E9\u5DE5\u4F5C\u533A"
      }, f.$props, {
        value: s.value,
        "onUpdate:value": g[0] || (g[0] = (m) => s.value = m),
        options: r.value,
        key: a.value
      }), null, 16, ["value", "options"]);
    };
  }
}), Ds = /* @__PURE__ */ I({
  __name: "header",
  props: {
    height: String
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    function n() {
      t("close");
    }
    return (o, r) => (c(), b("div", {
      class: "header",
      style: k({ height: e.height })
    }, [
      v("div", null, [
        h(o.$slots, "title", {}, void 0, !0)
      ]),
      v("div", {
        class: "close",
        style: k({ height: e.height, width: e.height }),
        onClick: n
      }, [
        h(o.$slots, "close", {}, void 0, !0)
      ], 4)
    ], 4));
  }
});
const Rs = /* @__PURE__ */ N(Ds, [["__scopeId", "data-v-d4e8c8cc"]]), Bs = { class: "footer-right" }, Vs = {
  name: "Dialog"
}, Ts = /* @__PURE__ */ I({
  ...Vs,
  props: an,
  setup(e) {
    const t = e, n = A(), o = n.namespace, r = q(o, "modal"), s = w(!1), a = t.dataId;
    Q(P.COMPONENT_PARENT_DATA_ID, a);
    const l = {}, i = {
      maxWidth: "100%",
      position: "absolute",
      padding: 0,
      left: t.left,
      top: t.top,
      right: t.right,
      bottom: t.bottom,
      width: t.width + "px",
      maxHeight: t.maxHeight
    };
    ye(o) && (l.preset = "dialog", l.closeOnEsc = !1, l.maskClosable = !1, l.closable = !1, l.showIcon = !1);
    const u = L(() => t.height), f = L(() => u.value - 50 + 8), g = L(() => 50);
    G(() => {
      const p = ($, S) => (m(), Promise.resolve()), _ = ($, S) => (d(), Promise.resolve());
      n.registerAction(a, E.CANCLE, {
        action: p
      }), n.registerAction(a, E.OPEN, {
        action: _
      }), n.registerAction(a, E.DONE, {
        action: p
      });
    }), te(() => {
      n.removeAction(a, E.OPEN), n.removeAction(a, E.CANCLE), n.removeAction(a, E.DONE);
    });
    function d() {
      s.value = !0;
    }
    function m() {
      s.value = !1;
    }
    return (p, _) => {
      const $ = x("o-cancle-button"), S = x("o-submit-button"), R = x("o-space");
      return c(), C(M(y(r)), D(l, {
        style: [i],
        show: s.value,
        "onUpdate:show": _[0] || (_[0] = (V) => s.value = V)
      }), {
        header: O(() => [
          h(p.$slots, "header", {}, () => [
            B(Rs, {
              height: p.headerHeight,
              onClose: m
            }, {
              title: O(() => [
                j(H(p.title), 1)
              ]),
              close: O(() => [
                h(p.$slots, "close", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["height"])
          ], !0)
        ]),
        default: O(() => [
          v("div", {
            class: "content",
            style: k({ height: `${u.value}px` })
          }, [
            v("div", {
              class: "content-inner dialog-scroll",
              style: k({ height: `${f.value}px` })
            }, [
              v("div", {
                class: "content-wrapper",
                style: k({ width: `${p.width - 48}px` })
              }, [
                h(p.$slots, "default", {}, void 0, !0)
              ], 4)
            ], 4),
            v("div", {
              class: "footer",
              style: k({ height: `${g.value}px`, lineHeight: `${g.value}px` })
            }, [
              v("div", null, [
                h(p.$slots, "footer-left", {}, void 0, !0)
              ]),
              v("div", Bs, [
                h(p.$slots, "footer-right", {}, () => [
                  B(R, null, {
                    default: O(() => [
                      B($, { size: "small" }, {
                        default: O(() => [
                          j("\u53D6\u6D88")
                        ]),
                        _: 1
                      }),
                      B(S, {
                        size: "small",
                        type: "primary"
                      }, {
                        default: O(() => [
                          j("\u786E\u5B9A")
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
const zs = /* @__PURE__ */ N(Ts, [["__scopeId", "data-v-5f97ab7f"]]), Us = {
  name: "Drawer"
}, js = /* @__PURE__ */ I({
  ...Us,
  props: cn,
  setup(e) {
    const t = e, n = A(), o = q(n.namespace, "drawer"), r = q(n.namespace, "drawer-content"), s = w(!1), a = {
      width: t.width
    }, l = t.dataId;
    Q(P.COMPONENT_PARENT_DATA_ID, l), G(() => {
      const f = (d, m) => (u(), Promise.resolve()), g = (d, m) => (i(), Promise.resolve());
      n.registerAction(l, E.CANCLE, {
        action: f
      }), n.registerAction(l, E.OPEN, {
        action: g
      }), n.registerAction(l, E.DONE, {
        action: f
      });
    }), te(() => {
      n.removeAction(l, E.OPEN), n.removeAction(l, E.CANCLE), n.removeAction(l, E.DONE);
    });
    function i() {
      s.value = !0;
    }
    function u() {
      s.value = !1;
    }
    return (f, g) => {
      const d = x("o-cancle-button"), m = x("o-submit-button"), p = x("o-space");
      return c(), C(M(y(o)), D(a, {
        show: s.value,
        "onUpdate:show": g[0] || (g[0] = (_) => s.value = _)
      }), {
        default: O(() => [
          (c(), C(M(y(r)), { title: f.title }, {
            footer: O(() => [
              h(f.$slots, "footer-right", {}, () => [
                B(p, null, {
                  default: O(() => [
                    B(d, { size: "small" }, {
                      default: O(() => [
                        j("\u53D6\u6D88")
                      ]),
                      _: 1
                    }),
                    B(m, {
                      size: "small",
                      type: "primary"
                    }, {
                      default: O(() => [
                        j("\u786E\u5B9A")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            default: O(() => [
              h(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["title"]))
        ]),
        _: 3
      }, 16, ["show"]);
    };
  }
}), Fs = {
  name: "Space"
}, yt = /* @__PURE__ */ I({
  ...Fs,
  props: ln,
  setup(e) {
    const t = e, n = A(), o = q(n.namespace, "space"), r = {
      ...t
    };
    return (s, a) => (c(), C(M(y(o)), z(F(r)), {
      default: O(() => [
        h(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Hs(e) {
  return e.columns.map((t) => qs(t));
}
function qs(e) {
  const t = e;
  return Ys(t), Ws(t), Js(t), Qs(t), Xs(t), Zs(t), er(t), tr(t), nr(t), t;
}
function Ks(e, t) {
  if (t) {
    let n = t[e.key];
    return e.formatter && (n = e.formatter(t)), n;
  }
  e.render = (n) => W("span", {}, { default: () => e.formatter(n) });
}
function Ys(e) {
  if (e.filterOptions) {
    const t = e.filterOptions;
    ce(t) && (e.filterOptions = t()), e.filter || (e.filter = (n, o) => {
      const r = o[e.key];
      return ge(r) ? ~r.indexOf(n) : Dt(n) ? r == n ? !0 : n ? r && n : !r && !n : r == n;
    });
  }
}
function Gs(e = [], t) {
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (o.type && o.type === "group") {
      const r = (o.children || []).find((s) => s.value == t);
      if (r)
        return r;
    } else if (o.value == t)
      return o;
  }
}
function Ws(e) {
  if (!e.dict)
    return;
  let t = ce(e.dict) ? e.dict() : e.dict;
  const n = e.formatter;
  e.formatter = (o) => {
    const r = o[e.key], s = Gs(t, r);
    s && s.render && (e.render = s.render);
    const a = n ? n(o) : r;
    return s ? s.label : a;
  };
}
function fe(e, t) {
  return e.traits ? e.traits.find((o) => et(o) && o.type === t || ge(o) && o === t) : void 0;
}
function Oe(e) {
  return x(e);
}
function Js(e) {
  !fe(e, "img") || (e.render = (n) => {
    const o = n[e.key];
    return o ? W(Oe("o-image"), { src: o, width: 30 }) : W("span");
  });
}
function Qs(e) {
  !fe(e, "avatarGroup") || e.render || (e.render = (n) => {
    const o = n[e.key];
    return o ? W(Oe("o-group-avatar"), { options: o }) : W("span");
  });
}
function Xs(e) {
  !fe(e, "avatar") || e.render || (e.render = (n) => {
    const o = n[e.key];
    return o ? W(Oe("o-avatar"), { src: o }) : W("span");
  });
}
function Zs(e) {
  if (!fe(e, "timestamp") || e.render)
    return;
  const n = e.formatter;
  e.formatter = (o) => {
    const r = n ? n(o) : o[e.key];
    return r && Vt(r);
  };
}
function er(e) {
  !fe(e, "tags") || e.render || (e.render = (n) => {
    let o = Ks(e, n) || [];
    return o && ge(o) && (o = o.split(",")), Ve(o) || (o = [o]), o.filter((r) => r).map((r) => W(Oe("o-tag"), {
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
function tr(e) {
  if (!fe(e, "tag") || e.render)
    return;
  const o = (e.props || {}).tags || [], r = ce(e.dict) ? e.dict() : e.dict;
  e.render = (s) => {
    const a = s[e.key], l = o.find((u) => u.value == a);
    let i = r.find((u) => u.value == a);
    return !l || !i ? W("span", {}, { default: () => a }) : W(Oe("o-tag"), l.props, { default: () => i.label });
  };
}
function nr(e) {
  if (!e.filterOptions)
    return;
  const t = e.filterOptions;
  ce(t) && (e.filterOptions = t()), e.hasOwnProperty("filter") || (e.filter = (n, o) => ~(o[e.key] + "").indexOf(n + ""));
}
const or = {
  name: "DataTable"
}, sr = /* @__PURE__ */ I({
  ...or,
  props: un,
  setup(e, { expose: t }) {
    const n = e, o = A(), r = n.ns || o.namespace, s = n.dataId, a = q(o.namespace, ye(r) ? "data-table" : "table"), l = {}, i = w(!1);
    w([]);
    const u = w([]), f = w(!1), g = w(), d = w(!1), m = {
      on: null
    };
    t({
      setOptions: p,
      refresh: $
    }), te(() => {
      o.removeAction(s, E.DATA_REFRESH);
    });
    function p(S) {
      i.value || (l.columns = Hs(S), m.on = S.on, i.value = !0, o.registerAction(s, E.DATA_REFRESH, {
        action: _
      }), $());
    }
    function _(S, R) {
      return $(S, R), Promise.resolve();
    }
    function $(S, R) {
      let V = S;
      et(S) && S.params ? (g.value = S.params, d.value = !0, V = S.params) : d.value && (V = {
        ...S,
        ...g.value
      }), tt(R), f.value = !0, ne(m.on.load, (Se) => {
        u.value = Se, me(R), f.value = !1;
      }, V);
    }
    return (S, R) => i.value ? (c(), C(M(y(a)), D({ key: 0 }, l, {
      data: u.value,
      loading: f.value
    }), {
      default: O(() => [
        h(S.$slots, "default")
      ]),
      _: 3
    }, 16, ["data", "loading"])) : T("", !0);
  }
});
function rr(e) {
  const t = w();
  return Te(t, e), t;
}
const ar = {
  name: "Query"
}, lr = /* @__PURE__ */ I({
  ...ar,
  props: {
    modelValue: Object,
    dataId: {
      type: String,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = n.modelValue ? JSON.parse(JSON.stringify(n.modelValue)) : null, r = w(n.modelValue || {});
    Q(P.QUERY_PARAMS, r);
    const s = A(), a = n.dataId;
    zt(a), G(() => {
      s.registerAction(a, E.RESET, {
        action: l
      });
    });
    function l(i, u) {
      return Object.keys(r.value).forEach((g) => {
        const d = o ? JSON.parse(JSON.stringify(o[g])) : null;
        r.value[g] = d;
      }), t("update:modelValue", r.value), s.applyAll(a, E.DATA_REFRESH, {
        params: r.value
      }, null);
    }
    return te(() => {
      s.removeAction(a, E.RESET);
    }), (i, u) => h(i.$slots, "default", { model: r.value });
  }
}), ir = {
  name: "Data"
}, ur = /* @__PURE__ */ I({
  ...ir,
  props: {
    dataId: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const n = e.dataId;
    return Q(P.COMPONENT_PARENT_DATA_ID, n), (o, r) => h(o.$slots, "default");
  }
}), cr = {
  name: "Tree"
}, dr = /* @__PURE__ */ I({
  ...cr,
  props: dn,
  setup(e) {
    const t = e, n = A(), o = t.ns || n.namespace, r = ee() || t.dataId, s = q(n.namespace, "tree"), a = {
      ...t
    }, l = w([]), i = w();
    ct(o) && (a.nodeProps = ({ option: f }) => ({
      onClick() {
        const g = f == null ? void 0 : f.value;
        if (!i.value || i.value[t.keyField] != f[t.keyField]) {
          if (!g)
            return;
          i.value = f, n.applyAll(r, E.DATA_REFRESH, {
            params: g
          }, null);
        }
      }
    })), G(() => {
      u();
    });
    function u(f, g) {
      ne(t.onLoad, (d) => {
        l.value = d;
      }, null);
    }
    return (f, g) => (c(), C(M(y(s)), D(a, { data: l.value }), {
      default: O(() => [
        h(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["data"]));
  }
}), pr = { style: { "border-right": "1px solid rgb(239, 239, 245)", height: "100%", width: "100%" } }, fr = {
  name: "SimpleMenu"
}, _r = /* @__PURE__ */ I({
  ...fr,
  props: pn,
  setup(e) {
    const t = e, n = A(), o = q(n.namespace, "menu"), r = w([]), s = {
      ...t
    }, a = oe(), l = t.dataId || ee(), i = w(), u = X();
    G(() => {
      n.registerAction(l, E.SLIDER_CLICK, {
        action: (m, p) => (f(), Promise.resolve())
      }), f();
    }), te(() => {
      n.removeAction(l, E.SLIDER_CLICK);
    });
    function f() {
      ne(t.options, (m) => r.value = m, a.value.slider.activeItem);
    }
    const g = Z();
    function d(m, p) {
      if (i.value !== m) {
        if (i.value = m, p.value) {
          const _ = {
            url: p.url,
            value: p.value
          };
          if (!ue(p.key, p.permission)) {
            if (!g.isLogin()) {
              u.toLogin();
              return;
            }
            ze($e.NOT_PERMISSION, p);
            return;
          }
          n.applyAll(l, E.MENU_CLICK, _, null);
          return;
        }
        if (p.url) {
          const _ = de(p.url);
          window.open(_, "_blank");
        }
      }
    }
    return (m, p) => (c(), b("div", pr, [
      (c(), C(M(y(o)), D(s, {
        options: r.value,
        "onUpdate:value": d
      }), {
        default: O(() => [
          h(m.$slots, "default")
        ]),
        _: 3
      }, 16, ["options"]))
    ]));
  }
}), mr = { class: "slider" }, hr = {
  key: 0,
  class: "logo"
}, vr = ["src"], gr = { class: "title" }, yr = {
  key: 1,
  class: "menu-list"
}, $r = ["onClick"], Or = {
  key: 0,
  class: "icon"
}, Ir = { class: "text" }, Sr = {
  name: "SliderLayoutMenu"
}, wr = /* @__PURE__ */ I({
  ...Sr,
  props: {
    logo: String,
    title: String,
    dataId: String,
    options: Object
  },
  setup(e) {
    const t = e, n = t.dataId || ee(), o = w(), r = A(), s = oe();
    t.logo && (s.value.menu.logo = t.logo), t.title && (s.value.menu.title = t.title);
    const a = L(() => s.value.menu.logo), l = L(() => s.value.menu.title), i = L(() => s.value.slider.activeItem), u = X();
    G(() => {
      ne(t.options, (d) => {
        o.value = d, i.value || d && d.length > 0 && (s.value.slider.activeItem = d[0]);
      });
    });
    const f = Z();
    function g(d) {
      if (i.value.id !== d.id) {
        if (!ue(d.id, d.permission)) {
          if (!f.isLogin()) {
            u.toLogin();
            return;
          }
          ze($e.NOT_PERMISSION, d);
          return;
        }
        s.value.slider.activeItem = d, r.applyAll(n, E.SLIDER_CLICK, d);
      }
    }
    return (d, m) => {
      const p = x("o-icon");
      return c(), b("div", mr, [
        v("div", null, [
          a.value ? (c(), b("div", hr, [
            h(d.$slots, "logo", {}, () => [
              v("img", { src: a.value }, null, 8, vr),
              v("div", gr, H(l.value), 1)
            ], !0)
          ])) : T("", !0),
          i.value ? (c(), b("div", yr, [
            (c(!0), b(ve, null, be(o.value, (_, $) => (c(), b("div", {
              class: le(["list-item", i.value.id === _.id ? "select-item" : ""]),
              onClick: (S) => g(_),
              key: $
            }, [
              h(d.$slots, "default", {
                row: _,
                index: $,
                selected: i.value.id === _.id
              }, () => [
                _.icon ? (c(), b("div", Or, [
                  B(p, z(F(_.icon)), null, 16)
                ])) : T("", !0),
                v("div", Ir, H(_.title), 1)
              ], !0)
            ], 10, $r))), 128))
          ])) : T("", !0)
        ]),
        v("div", null, [
          h(d.$slots, "bottom", {}, void 0, !0)
        ])
      ]);
    };
  }
});
const br = /* @__PURE__ */ N(wr, [["__scopeId", "data-v-f6871164"]]), Cr = { key: 0 }, Er = { key: 1 }, xr = {
  key: 0,
  class: "code-box"
}, Pr = ["textContent"], kr = ["src"], Nr = {
  name: "DemoDoc"
}, Ar = /* @__PURE__ */ I({
  ...Nr,
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
    const t = e, n = xt({
      template: ""
    }), o = w({
      template: "",
      language: ""
    }), r = w(0), s = w(!1);
    J(P.USER_LOCAL_STORE_KEY, !1);
    const a = L(() => (t.url + "").toLocaleLowerCase().endsWith(".html")), l = window.marked, i = w();
    l || console.error("marked not found"), G(() => {
      const p = {
        heading(_, $) {
          return `
              <h${$}>
                ${_}
              </h${$}>`;
        },
        code(_, $) {
          return g($ || "", _);
        }
      };
      l.use({ renderer: p }), t.codeUrl && d(t.codeUrl, (_) => {
        let $ = (_ || "").trim(), S;
        if ($.startsWith("```") && $.endsWith("```")) {
          const R = ($.indexOf(`\r
`) != -1, `\r
`);
          S = $.substring(3, $.indexOf(R)), $ = $.substring($.indexOf(S) + S.length, $.lastIndexOf("```")).trim();
        }
        o.value = {
          template: $,
          language: S
        };
      }, !1), t.url && d(t.url, (_) => {
        n.value = {
          template: _
        }, r.value++;
      });
    });
    function u() {
      f(i.value);
    }
    function f(p) {
      if (p) {
        var _ = p.contentWindow || p.contentDocument.parentWindow;
        _.document.body && (p.height = _.document.documentElement.scrollHeight || _.document.body.scrollHeight);
      }
    }
    function g(p, _) {
      if (p = (p || "").toLowerCase(), p === "code-demo")
        return _;
      {
        const $ = (_ || "").split(_.indexOf(`\r
`) != -1 ? `\r
` : `
`) || [];
        let S = "";
        for (let R = 0; R < $.length; R++) {
          const V = $[R];
          V.toLocaleLowerCase().endsWith(".html") ? S = S + `<iframe src="${V}"></iframe>` : S = S + V;
        }
        return S;
      }
    }
    function d(p, _, $ = !0) {
      fetch(p).then((S) => S.text()).then((S) => _($ ? l.parse(S) : S));
    }
    function m() {
      console.log("====showCode"), s.value = !s.value;
    }
    return (p, _) => {
      const $ = x("o-code-icon"), S = x("n-tooltip"), R = x("o-span"), V = x("n-card");
      return c(), b("div", null, [
        B(V, { title: e.title }, {
          "header-extra": O(() => [
            B(R, null, {
              default: O(() => [
                B(S, { trigger: "hover" }, {
                  trigger: O(() => [
                    B($, {
                      "font-size": 14,
                      onClick: m
                    })
                  ]),
                  default: O(() => [
                    s.value ? (c(), b("span", Er, "\u6536\u8D77\u4EE3\u7801")) : (c(), b("span", Cr, "\u663E\u793A\u4EE3\u7801"))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          footer: O(() => [
            s.value ? (c(), b("div", xr, [
              v("pre", {
                textContent: H(o.value.template),
                class: le(o.value.language)
              }, null, 10, Pr)
            ])) : T("", !0)
          ]),
          default: O(() => [
            h(p.$slots, "default", {}, () => [
              a.value ? (c(), b("iframe", {
                key: 1,
                ref_key: "iframeRef",
                ref: i,
                onload: u,
                src: e.url,
                style: { width: "100%", border: "0" },
                scrolling: "no"
              }, null, 8, kr)) : (c(), C(M(n.value), { key: r.value }))
            ], !0)
          ]),
          _: 3
        }, 8, ["title"])
      ]);
    };
  }
});
const Lr = /* @__PURE__ */ N(Ar, [["__scopeId", "data-v-0e979bec"]]), Mr = {
  name: "DemosDoc"
}, Dr = /* @__PURE__ */ I({
  ...Mr,
  props: {
    alone: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => (c(), b("div", {
      style: k(`display:grid;gap:16px;grid-template-columns:${e.alone ? "100%" : "minmax(0, 1fr) minmax(0, 1fr)"}`)
    }, [
      h(t.$slots, "default")
    ], 4));
  }
}), Rr = {
  name: "Dropdown"
}, Br = /* @__PURE__ */ I({
  ...Rr,
  props: _n,
  setup(e) {
    const t = e, n = A(), o = q(n.namespace, "dropdown"), r = {
      trigger: "hover"
    }, s = w([]), a = w(!1);
    Q("dropdown_show", a), G(() => {
      ne(t.options, (f) => l(f));
    });
    function l(f) {
      s.value = f.map((g) => (g.render && (g.type || (g.type = "render")), g));
    }
    function i() {
      a.value = !0;
    }
    function u() {
      t.trigger === "hover" && (a.value = !0);
    }
    return (f, g) => (c(), C(M(y(o)), D(r, {
      options: s.value,
      show: a.value
    }), {
      default: O(() => [
        v("div", {
          onClick: i,
          onMouseenter: u
        }, [
          h(f.$slots, "default")
        ], 32)
      ]),
      _: 3
    }, 16, ["options", "show"]));
  }
}), Vr = {
  name: "Avatar"
}, $t = /* @__PURE__ */ I({
  ...Vr,
  props: it,
  setup(e) {
    const t = e, n = A(), o = q(n.namespace, "avatar"), r = {
      ...t
    };
    return (s, a) => (c(), C(M(y(o)), D(r, { style: { cursor: "pointer" } }), null, 16));
  }
}), Tr = { style: { position: "relative", top: "1px" } }, zr = { style: { "font-size": "12px", color: "rgb(51, 54, 57)" } }, Ur = { style: { "font-size": "12px", color: "rgb(118, 124, 130)" } }, jr = {
  name: "AvatarDropdownItem"
}, Fr = /* @__PURE__ */ I({
  ...jr,
  props: mn,
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e;
    A();
    const o = {
      ...n
    }, r = J("dropdown_show");
    function s() {
      r.value = !1, t("click");
    }
    return (a, l) => {
      const i = x("o-avatar"), u = x("o-space");
      return c(), C(u, {
        style: { cursor: "pointer" },
        onClick: s
      }, {
        default: O(() => [
          v("div", Tr, [
            B(i, z(F(o)), null, 16)
          ]),
          v("div", null, [
            v("div", zr, [
              h(a.$slots, "username", {}, () => [
                j(H(a.username), 1)
              ])
            ]),
            v("div", Ur, [
              h(a.$slots, "detail", {}, () => [
                j(H(a.detail), 1)
              ])
            ])
          ])
        ]),
        _: 3
      });
    };
  }
}), Hr = { key: 0 }, qr = {
  name: "DropdownItem"
}, Kr = /* @__PURE__ */ I({
  ...qr,
  props: {
    icon: je,
    label: String
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = J("dropdown_show");
    function o() {
      n.value = !1, t("click");
    }
    return (r, s) => {
      const a = x("o-icon"), l = x("o-space");
      return c(), C(l, {
        style: { padding: "8px 12px", cursor: "pointer" },
        onClick: o
      }, {
        default: O(() => [
          e.icon ? (c(), b("div", Hr, [
            h(r.$slots, "icon", {}, () => [
              B(a, z(F(e.icon)), null, 16)
            ])
          ])) : T("", !0),
          v("div", null, [
            h(r.$slots, "default", {}, () => [
              j(H(e.label), 1)
            ])
          ])
        ]),
        _: 3
      });
    };
  }
}), We = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OView: At,
  IframeView: yn,
  OButton: Fe,
  parseProps: He,
  OLoginButton: Cn,
  OSubmitButton: dt,
  OCancleButton: Pn,
  OAddButton: Nn,
  ORefreshButton: Ln,
  OResetButton: Dn,
  OApp: qe,
  ONApp: jn,
  OElApp: Hn,
  PermissionConst: pt,
  hasPermission: ue,
  useRouter: X,
  useUser: Z,
  OForm: Gn,
  useForm: Wn,
  OUserLoginForm: Zn,
  useUserLoginForm: eo,
  OInput: ft,
  OUsernameInput: ao,
  OPasswordInput: io,
  OIcon: _t,
  OCloseIcon: ho,
  OSvgIcon: $o,
  ORefreshIcon: mt,
  OCopyIcon: Po,
  OCodeIcon: ht,
  OLogoutIcon: zo,
  OUsernameIcon: qo,
  OPasswordIcon: Xo,
  OLayout: es,
  useLayout: vt,
  OSliderLayout: os,
  OSimpleLayout: is,
  OLayoutMenu: Os,
  OLayoutHeader: xs,
  OSimpleSelect: gt,
  OProjectSelect: Ms,
  ODialog: zs,
  ODrawer: js,
  OSpace: yt,
  ODataTable: sr,
  useDataTable: rr,
  OQuery: lr,
  OData: ur,
  OTree: dr,
  OSimpleMenu: _r,
  OSliderLayoutMenu: br,
  ODemoDoc: Lr,
  ODemosDoc: Dr,
  ODropdown: Br,
  OAvatar: $t,
  OAvatarDropdownItem: Fr,
  ODropdownItem: Kr
}, Symbol.toStringTag, { value: "Module" })), Yr = "1.0.0";
function Ot({ componentPrefix: e = "O", components: t = [] } = {}) {
  const n = [];
  function o(s, a, l) {
    s.component(e + a) || s.component(e + a, l);
  }
  function r(s) {
    n.includes(s) || (n.push(s), t.forEach((a) => {
      const { name: l, alias: i } = a;
      o(s, l, a), i && i.forEach((u) => {
        o(s, u, a);
      });
    }));
  }
  return {
    version: Yr,
    componentPrefix: e,
    install: r
  };
}
const Gr = Ot({
  components: Object.keys(We).map((e) => We[e])
}), ca = Gr.install, Wr = Ot({
  components: [
    ft,
    _t,
    yt,
    Fe,
    dt,
    mt,
    ht,
    gt,
    $t
  ]
});
function Jr(e) {
  e.use(Wr);
}
var Qr = /* @__PURE__ */ ((e) => (e.SUCCESS = "000000", e.ERROR = "1", e.NOT_LOGIN = "biz.client.not_login", e))(Qr || {});
function da(e, t) {
  return new Promise((n, o) => {
    e.then((r) => {
      if (r.code === "000000") {
        const s = r.data;
        n(t ? t(s) : s);
      } else
        o(r);
    });
  });
}
function pa() {
  return {
    get: Xr,
    post: Zr,
    put: ea,
    delete: ta
  };
}
function ke() {
  const e = Bn();
  return e && console.error("not found request plugin"), e;
}
function Xr(e, t, n) {
  return ke().get(e, t, n);
}
function Zr(e, t, n) {
  return ke().post(e, t, n);
}
function ea(e, t, n) {
  return ke().put(e, t, n);
}
function ta(e, t, n) {
  return ke().delete(e, t, n);
}
function It() {
  const e = Vn();
  return e && console.warn("not found message plugin"), e;
}
function fa() {
  return {
    error: na,
    warning: oa
  };
}
function St(e) {
  if (!e)
    return e;
  const t = e, n = t.code ? t.message : t, o = t.code ? t.code : t;
  return !Ge() || o.indexOf(".") == -1 ? n : Ge().get(o, n);
}
function na(e, t) {
  return It().error(St(e), t);
}
function oa(e, t) {
  return It().warning(St(e), t);
}
function Je(e, t) {
  return e.sort((n, o) => n[t] - o[t]);
}
function _a(e, t) {
  const n = [], o = {};
  if (e.length > 0 && !e[0].hasOwnProperty("id"))
    return e;
  e.forEach((s) => o[s.id] = s), e.forEach((s) => {
    const a = o[s.parentId];
    t && t(s), a ? (s._level = a._level + 1, (a.children || (a.children = [])).push(s)) : (s._level = 1, n.push(s));
  });
  const r = (s, a = 1) => {
    s.map((l) => {
      l._level = a, l.children instanceof Array && (l.children = Je(l.children, "orderNum"), a < 1e3 && r(l.children, a + 1));
    });
  };
  return r(n), Je(n, "orderNum");
}
function Qe(e) {
  const t = e.split(":")[0], n = e.substring(t.length).trim();
  return {
    resourceId: t.trim(),
    permission: n.startsWith(":") ? n.substring(1).trim() : n
  };
}
async function ma(e) {
  Jr(e), e.config.globalProperties.$permission = (t) => {
    if (!t)
      return !1;
    if (ge(t)) {
      const n = Qe(t);
      return ue(n.resourceId, { and: [n.permission] }) ? "auto" : "none";
    } else if (Ve(t)) {
      for (let n of t) {
        const o = Qe(n);
        if (ue(o.resourceId, { and: [o.permission] }))
          return !0;
      }
      return !1;
    } else if (ce(t))
      return t();
    return !1;
  };
}
export {
  $e as ErrorCode,
  yn as IframeView,
  Nn as OAddButton,
  qe as OApp,
  $t as OAvatar,
  Fr as OAvatarDropdownItem,
  Fe as OButton,
  Pn as OCancleButton,
  ho as OCloseIcon,
  ht as OCodeIcon,
  Po as OCopyIcon,
  ur as OData,
  sr as ODataTable,
  Lr as ODemoDoc,
  Dr as ODemosDoc,
  zs as ODialog,
  js as ODrawer,
  Br as ODropdown,
  Kr as ODropdownItem,
  Hn as OElApp,
  Gn as OForm,
  _t as OIcon,
  ft as OInput,
  es as OLayout,
  xs as OLayoutHeader,
  Os as OLayoutMenu,
  Cn as OLoginButton,
  zo as OLogoutIcon,
  jn as ONApp,
  Xo as OPasswordIcon,
  io as OPasswordInput,
  Ms as OProjectSelect,
  lr as OQuery,
  Ln as ORefreshButton,
  mt as ORefreshIcon,
  Dn as OResetButton,
  is as OSimpleLayout,
  _r as OSimpleMenu,
  gt as OSimpleSelect,
  os as OSliderLayout,
  br as OSliderLayoutMenu,
  yt as OSpace,
  dt as OSubmitButton,
  $o as OSvgIcon,
  dr as OTree,
  Zn as OUserLoginForm,
  qo as OUsernameIcon,
  ao as OUsernameInput,
  At as OView,
  pt as PermissionConst,
  Qr as ResultEnum,
  da as apiResponseWrapper,
  ma as bootstrap,
  Ot as create,
  ua as cryptoPlugin,
  _a as deepTree,
  Gr as default,
  Tn as getCryptoPlugin,
  Ge as getI18nPlugin,
  Vn as getMessagePlugin,
  Bn as getRequestPlugin,
  ue as hasPermission,
  aa as i18nPlugin,
  ca as install,
  la as messagePlugin,
  He as parseProps,
  ia as requestPlugin,
  Jr as setupOcean,
  rr as useDataTable,
  Wn as useForm,
  vt as useLayout,
  fa as useMessage,
  pa as useRequest,
  X as useRouter,
  Z as useUser,
  eo as useUserLoginForm
};
