var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) i(_);
  new MutationObserver((_) => {
    for (const o of _) if (o.type === "childList") for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: true, subtree: true });
  function e(_) {
    const o = {};
    return _.integrity && (o.integrity = _.integrity), _.referrerPolicy && (o.referrerPolicy = _.referrerPolicy), _.crossOrigin === "use-credentials" ? o.credentials = "include" : _.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function i(_) {
    if (_.ep) return;
    _.ep = true;
    const o = e(_);
    fetch(_.href, o);
  }
})();
let r;
function j(n) {
  const t = r.__externref_table_alloc();
  return r.__wbindgen_export_2.set(t, n), t;
}
function y(n, t) {
  try {
    return n.apply(this, t);
  } catch (e) {
    const i = j(e);
    r.__wbindgen_exn_store(i);
  }
}
const ue = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && ue.decode();
let x = null;
function S() {
  return (x === null || x.byteLength === 0) && (x = new Uint8Array(r.memory.buffer)), x;
}
function d(n, t) {
  return n = n >>> 0, ue.decode(S().subarray(n, n + t));
}
function w(n, t) {
  return n = n >>> 0, S().subarray(n / 1, n / 1 + t);
}
let g = 0;
const $ = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, pe = typeof $.encodeInto == "function" ? function(n, t) {
  return $.encodeInto(n, t);
} : function(n, t) {
  const e = $.encode(n);
  return t.set(e), { read: n.length, written: e.length };
};
function W(n, t, e) {
  if (e === void 0) {
    const a = $.encode(n), u = t(a.length, 1) >>> 0;
    return S().subarray(u, u + a.length).set(a), g = a.length, u;
  }
  let i = n.length, _ = t(i, 1) >>> 0;
  const o = S();
  let s = 0;
  for (; s < i; s++) {
    const a = n.charCodeAt(s);
    if (a > 127) break;
    o[_ + s] = a;
  }
  if (s !== i) {
    s !== 0 && (n = n.slice(s)), _ = e(_, i, i = s + n.length * 3, 1) >>> 0;
    const a = S().subarray(_ + s, _ + i), u = pe(n, a);
    s += u.written, _ = e(_, i, s, 1) >>> 0;
  }
  return g = s, _;
}
let R = null;
function E() {
  return (R === null || R.buffer.detached === true || R.buffer.detached === void 0 && R.buffer !== r.memory.buffer) && (R = new DataView(r.memory.buffer)), R;
}
function L(n) {
  return n == null;
}
const It = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => {
  r.__wbindgen_export_6.get(n.dtor)(n.a, n.b);
});
function le(n, t, e, i) {
  const _ = { a: n, b: t, cnt: 1, dtor: e }, o = (...s) => {
    _.cnt++;
    const a = _.a;
    _.a = 0;
    try {
      return i(a, _.b, ...s);
    } finally {
      --_.cnt === 0 ? (r.__wbindgen_export_6.get(_.dtor)(a, _.b), It.unregister(_)) : _.a = a;
    }
  };
  return o.original = _, It.register(o, _, _), o;
}
function X(n) {
  const t = typeof n;
  if (t == "number" || t == "boolean" || n == null) return `${n}`;
  if (t == "string") return `"${n}"`;
  if (t == "symbol") {
    const _ = n.description;
    return _ == null ? "Symbol" : `Symbol(${_})`;
  }
  if (t == "function") {
    const _ = n.name;
    return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
  }
  if (Array.isArray(n)) {
    const _ = n.length;
    let o = "[";
    _ > 0 && (o += X(n[0]));
    for (let s = 1; s < _; s++) o += ", " + X(n[s]);
    return o += "]", o;
  }
  const e = /\[object ([^\]]+)\]/.exec(toString.call(n));
  let i;
  if (e && e.length > 1) i = e[1];
  else return toString.call(n);
  if (i == "Object") try {
    return "Object(" + JSON.stringify(n) + ")";
  } catch {
    return "Object";
  }
  return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : i;
}
function A(n, t) {
  n = n >>> 0;
  const e = E(), i = [];
  for (let _ = n; _ < n + 4 * t; _ += 4) i.push(r.__wbindgen_export_2.get(e.getUint32(_, true)));
  return r.__externref_drop_slice(n, t), i;
}
function m(n, t) {
  const e = t(n.length * 1, 1) >>> 0;
  return S().set(n, e / 1), g = n.length, e;
}
function l(n) {
  const t = r.__wbindgen_export_2.get(n);
  return r.__externref_table_dealloc(n), t;
}
function c(n, t) {
  if (!(n instanceof t)) throw new Error(`expected instance of ${t.name}`);
}
function I(n, t) {
  const e = t(n.length * 4, 4) >>> 0;
  for (let i = 0; i < n.length; i++) {
    const _ = j(n[i]);
    E().setUint32(e + 4 * i, _, true);
  }
  return g = n.length, e;
}
function fe(n, t, e) {
  r.closure382_externref_shim(n, t, e);
}
function ye(n, t, e, i) {
  r.closure526_externref_shim(n, t, e, i);
}
const kt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_access_free(n >>> 0, 1));
class z {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(z.prototype);
    return e.__wbg_ptr = t, kt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, kt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_access_free(t, 0);
  }
  static tryFromString(t) {
    const e = W(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = g, _ = r.access_tryFromString(e, i);
    return _ === 0 ? void 0 : z.__wrap(_);
  }
  toString() {
    let t, e;
    try {
      const i = r.access_toString(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
}
const jt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_addmembererror_free(n >>> 0, 1));
class tt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(tt.prototype);
    return e.__wbg_ptr = t, jt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, jt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_addmembererror_free(t, 0);
  }
  message() {
    let t, e;
    try {
      const i = r.addmembererror_message(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
}
const Et = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_agent_free(n >>> 0, 1));
class f {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(f.prototype);
    return e.__wbg_ptr = t, Et.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Et.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_agent_free(t, 0);
  }
  toString() {
    let t, e;
    try {
      const i = r.agent_toString(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
  isIndividual() {
    return r.agent_isIndividual(this.__wbg_ptr) !== 0;
  }
  isGroup() {
    return r.agent_isGroup(this.__wbg_ptr) !== 0;
  }
  isDocument() {
    return r.agent_isDocument(this.__wbg_ptr) !== 0;
  }
}
const N = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_archive_free(n >>> 0, 1));
class et {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(et.prototype);
    return e.__wbg_ptr = t, N.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, N.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_archive_free(t, 0);
  }
  constructor(t) {
    const e = m(t, r.__wbindgen_malloc), i = g, _ = r.archive_try_from_bytes(e, i);
    if (_[2]) throw l(_[1]);
    return this.__wbg_ptr = _[0] >>> 0, N.register(this, this.__wbg_ptr, this), this;
  }
  toBytes() {
    const t = r.archive_toBytes(this.__wbg_ptr);
    if (t[3]) throw l(t[2]);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  tryToKeyhive(t, e, i) {
    c(t, v);
    var _ = t.__destroy_into_raw();
    c(e, b);
    var o = e.__destroy_into_raw();
    const s = r.archive_tryToKeyhive(this.__wbg_ptr, _, o, i);
    if (s[2]) throw l(s[1]);
    return M.__wrap(s[0]);
  }
}
const St = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_cannotparseed25519signingkey_free(n >>> 0, 1));
class rt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(rt.prototype);
    return e.__wbg_ptr = t, St.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, St.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_cannotparseed25519signingkey_free(t, 0);
  }
}
const At = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_cannotparseidentifier_free(n >>> 0, 1));
class nt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(nt.prototype);
    return e.__wbg_ptr = t, At.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, At.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_cannotparseidentifier_free(t, 0);
  }
}
const Bt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_capability_free(n >>> 0, 1));
class it {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(it.prototype);
    return e.__wbg_ptr = t, Bt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Bt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_capability_free(t, 0);
  }
  get who() {
    const t = r.capability_who(this.__wbg_ptr);
    return f.__wrap(t);
  }
  get can() {
    const t = r.capability_can(this.__wbg_ptr);
    return z.__wrap(t);
  }
  get proof() {
    const t = r.capability_proof(this.__wbg_ptr);
    return F.__wrap(t);
  }
}
const Mt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_cgkaoperation_free(n >>> 0, 1));
class _t {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(_t.prototype);
    return e.__wbg_ptr = t, Mt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Mt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_cgkaoperation_free(t, 0);
  }
  get variant() {
    let t, e;
    try {
      const i = r.cgkaoperation_variant(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
}
const q = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_changeref_free(n >>> 0, 1));
class h {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(h.prototype);
    return e.__wbg_ptr = t, q.register(e, e.__wbg_ptr, e), e;
  }
  static __unwrap(t) {
    return t instanceof h ? t.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, q.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_changeref_free(t, 0);
  }
  constructor(t) {
    const e = m(t, r.__wbindgen_malloc), i = g, _ = r.changeref_new(e, i);
    return this.__wbg_ptr = _ >>> 0, q.register(this, this.__wbg_ptr, this), this;
  }
  get bytes() {
    const t = r.changeref_bytes(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
}
const Ot = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_ciphertextstore_free(n >>> 0, 1));
class v {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(v.prototype);
    return e.__wbg_ptr = t, Ot.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ot.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_ciphertextstore_free(t, 0);
  }
  static newInMemory() {
    const t = r.ciphertextstore_newInMemory();
    return v.__wrap(t);
  }
  static newFromWebStorage(t) {
    const e = r.ciphertextstore_newFromWebStorage(t);
    return v.__wrap(e);
  }
}
const V = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_contactcard_free(n >>> 0, 1));
class G {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(G.prototype);
    return e.__wbg_ptr = t, V.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, V.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_contactcard_free(t, 0);
  }
  constructor(t) {
    const e = W(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = g, _ = r.contactcard_new(e, i);
    if (_[2]) throw l(_[1]);
    return this.__wbg_ptr = _[0] >>> 0, V.register(this, this.__wbg_ptr, this), this;
  }
  get id() {
    const t = r.contactcard_id(this.__wbg_ptr);
    return B.__wrap(t);
  }
  get shareKey() {
    const t = r.contactcard_shareKey(this.__wbg_ptr);
    return O.__wrap(t);
  }
  toJson() {
    let t, e;
    try {
      const o = r.contactcard_toJson(this.__wbg_ptr);
      var i = o[0], _ = o[1];
      if (o[3]) throw i = 0, _ = 0, l(o[2]);
      return t = i, e = _, d(i, _);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
}
const xt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_delegation_free(n >>> 0, 1));
class ot {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(ot.prototype);
    return e.__wbg_ptr = t, xt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, xt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_delegation_free(t, 0);
  }
  get delegate() {
    const t = r.delegation_delegate(this.__wbg_ptr);
    return f.__wrap(t);
  }
  get can() {
    const t = r.delegation_can(this.__wbg_ptr);
    return z.__wrap(t);
  }
  get proof() {
    const t = r.delegation_proof(this.__wbg_ptr);
    return t === 0 ? void 0 : F.__wrap(t);
  }
  get after() {
    const t = r.delegation_after(this.__wbg_ptr);
    return U.__wrap(t);
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => r.__wbg_delegationerror_free(n >>> 0, 1));
const Q = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_doccontentrefs_free(n >>> 0, 1));
class st {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(st.prototype);
    return e.__wbg_ptr = t, Q.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Q.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_doccontentrefs_free(t, 0);
  }
  constructor(t, e) {
    c(t, T);
    var i = t.__destroy_into_raw();
    const _ = I(e, r.__wbindgen_malloc), o = g, s = r.doccontentrefs_new(i, _, o);
    if (s[2]) throw l(s[1]);
    return this.__wbg_ptr = s[0] >>> 0, Q.register(this, this.__wbg_ptr, this), this;
  }
  addChangeRef(t) {
    c(t, h);
    var e = t.__destroy_into_raw();
    r.doccontentrefs_addChangeRef(this.__wbg_ptr, e);
  }
  get docId() {
    const t = r.doccontentrefs_docId(this.__wbg_ptr);
    return T.__wrap(t);
  }
  get change_hashes() {
    const t = r.doccontentrefs_change_hashes(this.__wbg_ptr);
    var e = A(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 4, 4), e;
  }
}
const Tt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_document_free(n >>> 0, 1));
class p {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(p.prototype);
    return e.__wbg_ptr = t, Tt.register(e, e.__wbg_ptr, e), e;
  }
  static __unwrap(t) {
    return t instanceof p ? t.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Tt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_document_free(t, 0);
  }
  get id() {
    const t = r.document_id(this.__wbg_ptr);
    return C.__wrap(t);
  }
  toPeer() {
    const t = r.document_toPeer(this.__wbg_ptr);
    return k.__wrap(t);
  }
  toAgent() {
    const t = r.document_toAgent(this.__wbg_ptr);
    return f.__wrap(t);
  }
}
const Kt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_documentid_free(n >>> 0, 1));
class T {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(T.prototype);
    return e.__wbg_ptr = t, Kt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Kt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_documentid_free(t, 0);
  }
  fromString() {
    let t, e;
    try {
      const i = r.documentid_fromString(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
  toJsValue() {
    return r.documentid_toJsValue(this.__wbg_ptr);
  }
}
const Gt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_encrypted_free(n >>> 0, 1));
class P {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(P.prototype);
    return e.__wbg_ptr = t, Gt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Gt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_encrypted_free(t, 0);
  }
  toBytes() {
    const t = r.encrypted_toBytes(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get ciphertext() {
    const t = r.encrypted_ciphertext(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get nonce() {
    const t = r.encrypted_nonce(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get pcs_key_hash() {
    const t = r.encrypted_pcs_key_hash(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get content_ref() {
    const t = r.encrypted_content_ref(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get pred_refs() {
    const t = r.encrypted_pred_refs(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
}
const Dt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_encryptedcontentwithupdate_free(n >>> 0, 1));
class at {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(at.prototype);
    return e.__wbg_ptr = t, Dt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Dt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_encryptedcontentwithupdate_free(t, 0);
  }
  encrypted_content() {
    const t = r.encryptedcontentwithupdate_encrypted_content(this.__wbg_ptr);
    return P.__wrap(t);
  }
  update_op() {
    const t = r.encryptedcontentwithupdate_update_op(this.__wbg_ptr);
    return t === 0 ? void 0 : zt.__wrap(t);
  }
}
const Lt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_event_free(n >>> 0, 1));
class ct {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(ct.prototype);
    return e.__wbg_ptr = t, Lt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Lt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_event_free(t, 0);
  }
  get variant() {
    let t, e;
    try {
      const i = r.event_variant(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
  get isDelegated() {
    return r.event_isDelegated(this.__wbg_ptr) !== 0;
  }
  get isRevoked() {
    return r.event_isRevoked(this.__wbg_ptr) !== 0;
  }
  tryIntoSignedDelegation() {
    const t = r.event_tryIntoSignedDelegation(this.__wbg_ptr);
    return t === 0 ? void 0 : F.__wrap(t);
  }
  tryIntoSignedRevocation() {
    const t = r.event_tryIntoSignedRevocation(this.__wbg_ptr);
    return t === 0 ? void 0 : H.__wrap(t);
  }
}
const $t = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_generatedocerror_free(n >>> 0, 1));
class gt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(gt.prototype);
    return e.__wbg_ptr = t, $t.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $t.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_generatedocerror_free(t, 0);
  }
  message() {
    let t, e;
    try {
      const i = r.generatedocerror_message(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
}
const Wt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_generatewebcryptoerror_free(n >>> 0, 1));
class dt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(dt.prototype);
    return e.__wbg_ptr = t, Wt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Wt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_generatewebcryptoerror_free(t, 0);
  }
  message() {
    let t, e;
    try {
      const i = r.generatewebcryptoerror_message(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => r.__wbg_getciphertexterror_free(n >>> 0, 1));
const Pt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_group_free(n >>> 0, 1));
class wt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(wt.prototype);
    return e.__wbg_ptr = t, Pt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_group_free(t, 0);
  }
  get id() {
    const t = r.group_id(this.__wbg_ptr);
    return C.__wrap(t);
  }
  get groupId() {
    const t = r.group_groupId(this.__wbg_ptr);
    return ut.__wrap(t);
  }
  get members() {
    const t = r.group_members(this.__wbg_ptr);
    var e = A(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 4, 4), e;
  }
  toPeer() {
    const t = r.group_toPeer(this.__wbg_ptr);
    return k.__wrap(t);
  }
  toAgent() {
    const t = r.group_toAgent(this.__wbg_ptr);
    return f.__wrap(t);
  }
  toMembered() {
    const t = r.group_toMembered(this.__wbg_ptr);
    return K.__wrap(t);
  }
}
const Ut = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_groupid_free(n >>> 0, 1));
class ut {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(ut.prototype);
    return e.__wbg_ptr = t, Ut.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ut.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_groupid_free(t, 0);
  }
  toString() {
    let t, e;
    try {
      const i = r.groupid_toString(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
}
const Ht = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_history_free(n >>> 0, 1));
class U {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(U.prototype);
    return e.__wbg_ptr = t, Ht.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ht.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_history_free(t, 0);
  }
  delegations() {
    const t = r.history_delegations(this.__wbg_ptr);
    var e = A(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 4, 4), e;
  }
  revocations() {
    const t = r.history_revocations(this.__wbg_ptr);
    var e = A(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 4, 4), e;
  }
  contentRefs() {
    const t = r.history_contentRefs(this.__wbg_ptr);
    var e = A(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 4, 4), e;
  }
}
const Y = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_identifier_free(n >>> 0, 1));
class C {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(C.prototype);
    return e.__wbg_ptr = t, Y.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Y.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_identifier_free(t, 0);
  }
  constructor(t) {
    const e = m(t, r.__wbindgen_malloc), i = g, _ = r.identifier_new(e, i);
    if (_[2]) throw l(_[1]);
    return this.__wbg_ptr = _[0] >>> 0, Y.register(this, this.__wbg_ptr, this), this;
  }
  toBytes() {
    const t = r.identifier_toBytes(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
}
const Jt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_individual_free(n >>> 0, 1));
class bt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(bt.prototype);
    return e.__wbg_ptr = t, Jt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Jt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_individual_free(t, 0);
  }
  toPeer() {
    const t = r.individual_toPeer(this.__wbg_ptr);
    return k.__wrap(t);
  }
  toAgent() {
    const t = r.individual_toAgent(this.__wbg_ptr);
    return f.__wrap(t);
  }
  get id() {
    const t = r.individual_id(this.__wbg_ptr);
    return C.__wrap(t);
  }
  get individualId() {
    const t = r.individual_individualId(this.__wbg_ptr);
    return B.__wrap(t);
  }
  pickPrekey(t) {
    c(t, T);
    var e = t.__destroy_into_raw();
    const i = r.individual_pickPrekey(this.__wbg_ptr, e);
    return O.__wrap(i);
  }
}
const Nt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_individualid_free(n >>> 0, 1));
class B {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(B.prototype);
    return e.__wbg_ptr = t, Nt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Nt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_individualid_free(t, 0);
  }
  get bytes() {
    const t = r.individualid_bytes(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => r.__wbg_invocation_free(n >>> 0, 1));
const qt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_jsdecrypterror_free(n >>> 0, 1));
class pt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(pt.prototype);
    return e.__wbg_ptr = t, qt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_jsdecrypterror_free(t, 0);
  }
}
const Vt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_jsencrypterror_free(n >>> 0, 1));
class lt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(lt.prototype);
    return e.__wbg_ptr = t, Vt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Vt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_jsencrypterror_free(t, 0);
  }
}
const Qt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_jsreceiveprekeyoperror_free(n >>> 0, 1));
class ft {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(ft.prototype);
    return e.__wbg_ptr = t, Qt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Qt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_jsreceiveprekeyoperror_free(t, 0);
  }
}
const Yt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_keyhive_free(n >>> 0, 1));
class M {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(M.prototype);
    return e.__wbg_ptr = t, Yt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Yt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_keyhive_free(t, 0);
  }
  constructor(t, e, i) {
    c(t, b);
    var _ = t.__destroy_into_raw();
    c(e, v);
    var o = e.__destroy_into_raw();
    return r.keyhive_new(_, o, i);
  }
  get id() {
    const t = r.keyhive_id(this.__wbg_ptr);
    return B.__wrap(t);
  }
  get whoami() {
    const t = r.keyhive_id(this.__wbg_ptr);
    return B.__wrap(t);
  }
  get idString() {
    let t, e;
    try {
      const i = r.keyhive_idString(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
  generateGroup(t) {
    const e = I(t, r.__wbindgen_malloc), i = g;
    return r.keyhive_generateGroup(this.__wbg_ptr, e, i);
  }
  generateDocument(t, e, i) {
    const _ = I(t, r.__wbindgen_malloc), o = g;
    c(e, h);
    var s = e.__destroy_into_raw();
    const a = I(i, r.__wbindgen_malloc), u = g;
    return r.keyhive_generateDocument(this.__wbg_ptr, _, o, s, a, u);
  }
  trySign(t) {
    const e = m(t, r.__wbindgen_malloc), i = g;
    return r.keyhive_trySign(this.__wbg_ptr, e, i);
  }
  tryEncrypt(t, e, i, _) {
    c(t, p);
    var o = t.__destroy_into_raw();
    c(e, h);
    var s = e.__destroy_into_raw();
    const a = I(i, r.__wbindgen_malloc), u = g, D = m(_, r.__wbindgen_malloc), J = g;
    return r.keyhive_tryEncrypt(this.__wbg_ptr, o, s, a, u, D, J);
  }
  tryEncryptArchive(t, e, i, _) {
    c(t, p);
    var o = t.__destroy_into_raw();
    c(e, h);
    var s = e.__destroy_into_raw();
    const a = I(i, r.__wbindgen_malloc), u = g, D = m(_, r.__wbindgen_malloc), J = g;
    return r.keyhive_tryEncryptArchive(this.__wbg_ptr, o, s, a, u, D, J);
  }
  tryDecrypt(t, e) {
    c(t, p);
    var i = t.__destroy_into_raw();
    c(e, P);
    var _ = e.__destroy_into_raw();
    const o = r.keyhive_tryDecrypt(this.__wbg_ptr, i, _);
    if (o[3]) throw l(o[2]);
    var s = w(o[0], o[1]).slice();
    return r.__wbindgen_free(o[0], o[1] * 1, 1), s;
  }
  addMember(t, e, i, _) {
    c(t, f), c(e, K), c(i, z);
    var o = i.__destroy_into_raw();
    const s = I(_, r.__wbindgen_malloc), a = g;
    return r.keyhive_addMember(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, o, s, a);
  }
  revokeMember(t, e, i) {
    return c(t, f), c(i, K), r.keyhive_revokeMember(this.__wbg_ptr, t.__wbg_ptr, e, i.__wbg_ptr);
  }
  reachableDocs() {
    const t = r.keyhive_reachableDocs(this.__wbg_ptr);
    var e = A(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 4, 4), e;
  }
  forcePcsUpdate(t) {
    return c(t, p), r.keyhive_forcePcsUpdate(this.__wbg_ptr, t.__wbg_ptr);
  }
  rotatePrekey(t) {
    c(t, O);
    var e = t.__destroy_into_raw();
    return r.keyhive_rotatePrekey(this.__wbg_ptr, e);
  }
  expandPrekeys() {
    return r.keyhive_expandPrekeys(this.__wbg_ptr);
  }
  contactCard() {
    return r.keyhive_contactCard(this.__wbg_ptr);
  }
  receiveContactCard(t) {
    c(t, G);
    var e = t.__destroy_into_raw();
    const i = r.keyhive_receiveContactCard(this.__wbg_ptr, e);
    if (i[2]) throw l(i[1]);
    return bt.__wrap(i[0]);
  }
  getAgent(t) {
    c(t, C);
    var e = t.__destroy_into_raw();
    const i = r.keyhive_getAgent(this.__wbg_ptr, e);
    return i === 0 ? void 0 : f.__wrap(i);
  }
  intoArchive() {
    const t = this.__destroy_into_raw(), e = r.keyhive_intoArchive(t);
    return et.__wrap(e);
  }
}
const Xt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_membered_free(n >>> 0, 1));
class K {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(K.prototype);
    return e.__wbg_ptr = t, Xt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Xt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_membered_free(t, 0);
  }
}
const Zt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_peer_free(n >>> 0, 1));
class k {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(k.prototype);
    return e.__wbg_ptr = t, Zt.register(e, e.__wbg_ptr, e), e;
  }
  static __unwrap(t) {
    return t instanceof k ? t.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Zt.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_peer_free(t, 0);
  }
  toString() {
    let t, e;
    try {
      const i = r.peer_toString(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
  isIndividual() {
    return r.peer_isIndividual(this.__wbg_ptr) !== 0;
  }
  isGroup() {
    return r.peer_isGroup(this.__wbg_ptr) !== 0;
  }
  isDocument() {
    return r.peer_isDocument(this.__wbg_ptr) !== 0;
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => r.__wbg_removeciphertexterror_free(n >>> 0, 1));
const te = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_revocation_free(n >>> 0, 1));
class yt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(yt.prototype);
    return e.__wbg_ptr = t, te.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, te.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_revocation_free(t, 0);
  }
  get subject_id() {
    const t = r.revocation_subject_id(this.__wbg_ptr);
    return C.__wrap(t);
  }
  get revoked() {
    const t = r.revocation_revoked(this.__wbg_ptr);
    return F.__wrap(t);
  }
  get proof() {
    const t = r.revocation_proof(this.__wbg_ptr);
    return t === 0 ? void 0 : F.__wrap(t);
  }
  get after() {
    const t = r.revocation_after(this.__wbg_ptr);
    return U.__wrap(t);
  }
}
const ee = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_revokemembererror_free(n >>> 0, 1));
class ht {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(ht.prototype);
    return e.__wbg_ptr = t, ee.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ee.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_revokemembererror_free(t, 0);
  }
  get message() {
    let t, e;
    try {
      const i = r.revokemembererror_message(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
}
const re = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_serializationerror_free(n >>> 0, 1));
class mt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(mt.prototype);
    return e.__wbg_ptr = t, re.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, re.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_serializationerror_free(t, 0);
  }
  toError() {
    const t = this.__destroy_into_raw();
    return r.serializationerror_toError(t);
  }
}
const ne = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_sharekey_free(n >>> 0, 1));
class O {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(O.prototype);
    return e.__wbg_ptr = t, ne.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ne.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_sharekey_free(t, 0);
  }
}
const ie = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_signed_free(n >>> 0, 1));
class vt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(vt.prototype);
    return e.__wbg_ptr = t, ie.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ie.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_signed_free(t, 0);
  }
  verify() {
    return r.signed_verify(this.__wbg_ptr) !== 0;
  }
  get payload() {
    const t = r.signed_payload(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get verifyingKey() {
    const t = r.signed_verifyingKey(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get signature() {
    const t = r.signed_signature(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
}
const _e = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_signedcgkaoperation_free(n >>> 0, 1));
class zt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(zt.prototype);
    return e.__wbg_ptr = t, _e.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _e.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_signedcgkaoperation_free(t, 0);
  }
  verify() {
    return r.signedcgkaoperation_verify(this.__wbg_ptr) !== 0;
  }
  get delegation() {
    const t = r.signedcgkaoperation_delegation(this.__wbg_ptr);
    return _t.__wrap(t);
  }
  get verifyingKey() {
    const t = r.signedcgkaoperation_verifyingKey(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get signature() {
    const t = r.signedcgkaoperation_signature(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
}
const oe = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_signeddelegation_free(n >>> 0, 1));
class F {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(F.prototype);
    return e.__wbg_ptr = t, oe.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, oe.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_signeddelegation_free(t, 0);
  }
  verify() {
    return r.signeddelegation_verify(this.__wbg_ptr) !== 0;
  }
  get delegation() {
    const t = r.signeddelegation_delegation(this.__wbg_ptr);
    return ot.__wrap(t);
  }
  get verifyingKey() {
    const t = r.signeddelegation_verifyingKey(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get signature() {
    const t = r.signeddelegation_signature(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
}
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => r.__wbg_signedinvocation_free(n >>> 0, 1));
const se = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_signedrevocation_free(n >>> 0, 1));
class H {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(H.prototype);
    return e.__wbg_ptr = t, se.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, se.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_signedrevocation_free(t, 0);
  }
  verify() {
    return r.signedrevocation_verify(this.__wbg_ptr) !== 0;
  }
  get delegation() {
    const t = r.signedrevocation_delegation(this.__wbg_ptr);
    return yt.__wrap(t);
  }
  get verifyingKey() {
    const t = r.signedrevocation_verifyingKey(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  get signature() {
    const t = r.signedrevocation_signature(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
}
const ae = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_signer_free(n >>> 0, 1));
class b {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(b.prototype);
    return e.__wbg_ptr = t, ae.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ae.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_signer_free(t, 0);
  }
  constructor() {
    return r.signer_generate();
  }
  static generateMemory() {
    const t = r.signer_generateMemory();
    return b.__wrap(t);
  }
  static generateWebCrypto() {
    return r.signer_generateWebCrypto();
  }
  static memorySignerFromBytes(t) {
    const e = m(t, r.__wbindgen_malloc), i = g, _ = r.signer_memorySignerFromBytes(e, i);
    if (_[2]) throw l(_[1]);
    return b.__wrap(_[0]);
  }
  static webCryptoSigner(t) {
    return r.signer_webCryptoSigner(t);
  }
  get variant() {
    let t, e;
    try {
      const i = r.signer_variant(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
  trySign(t) {
    const e = m(t, r.__wbindgen_malloc), i = g;
    return r.signer_trySign(this.__wbg_ptr, e, i);
  }
  get verifyingKey() {
    const t = r.signer_verifyingKey(this.__wbg_ptr);
    var e = w(t[0], t[1]).slice();
    return r.__wbindgen_free(t[0], t[1] * 1, 1), e;
  }
  clone() {
    const t = r.signer_clone(this.__wbg_ptr);
    return b.__wrap(t);
  }
}
const ce = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_signingerror_free(n >>> 0, 1));
class Ft {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Ft.prototype);
    return e.__wbg_ptr = t, ce.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ce.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_signingerror_free(t, 0);
  }
  message() {
    let t, e;
    try {
      const i = r.signingerror_message(this.__wbg_ptr);
      return t = i[0], e = i[1], d(i[0], i[1]);
    } finally {
      r.__wbindgen_free(t, e, 1);
    }
  }
}
const ge = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_summary_free(n >>> 0, 1));
class Ct {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Ct.prototype);
    return e.__wbg_ptr = t, ge.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ge.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_summary_free(t, 0);
  }
  get doc() {
    const t = r.summary_doc(this.__wbg_ptr);
    return p.__wrap(t);
  }
  get access() {
    const t = r.summary_access(this.__wbg_ptr);
    return z.__wrap(t);
  }
}
const de = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => r.__wbg_tryfromarchiveerror_free(n >>> 0, 1));
class Rt {
  static __wrap(t) {
    t = t >>> 0;
    const e = Object.create(Rt.prototype);
    return e.__wbg_ptr = t, de.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, de.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    r.__wbg_tryfromarchiveerror_free(t, 0);
  }
  toError() {
    const t = this.__destroy_into_raw();
    return r.tryfromarchiveerror_toError(t);
  }
}
async function he(n, t) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, t);
    } catch (i) {
      if (n.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", i);
      else throw i;
    }
    const e = await n.arrayBuffer();
    return await WebAssembly.instantiate(e, t);
  } else {
    const e = await WebAssembly.instantiate(n, t);
    return e instanceof WebAssembly.Instance ? { instance: e, module: n } : e;
  }
}
function me() {
  const n = {};
  return n.wbg = {}, n.wbg.__wbg_addmembererror_new = function(t) {
    return tt.__wrap(t);
  }, n.wbg.__wbg_buffer_609cc3eee51ed158 = function(t) {
    return t.buffer;
  }, n.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return y(function(t, e) {
      return t.call(e);
    }, arguments);
  }, n.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return y(function(t, e, i) {
      return t.call(e, i);
    }, arguments);
  }, n.wbg.__wbg_cannotparseed25519signingkey_new = function(t) {
    return rt.__wrap(t);
  }, n.wbg.__wbg_cannotparseidentifier_new = function(t) {
    return nt.__wrap(t);
  }, n.wbg.__wbg_capability_new = function(t) {
    return it.__wrap(t);
  }, n.wbg.__wbg_changeref_new = function(t) {
    return h.__wrap(t);
  }, n.wbg.__wbg_changeref_unwrap = function(t) {
    return h.__unwrap(t);
  }, n.wbg.__wbg_contactcard_new = function(t) {
    return G.__wrap(t);
  }, n.wbg.__wbg_crypto_12576cd66246998b = function() {
    return y(function(t) {
      return t.crypto;
    }, arguments);
  }, n.wbg.__wbg_crypto_574e78ad8b13b65f = function(t) {
    return t.crypto;
  }, n.wbg.__wbg_doccontentrefs_new = function(t) {
    return st.__wrap(t);
  }, n.wbg.__wbg_document_new = function(t) {
    return p.__wrap(t);
  }, n.wbg.__wbg_document_unwrap = function(t) {
    return p.__unwrap(t);
  }, n.wbg.__wbg_encryptedcontentwithupdate_new = function(t) {
    return at.__wrap(t);
  }, n.wbg.__wbg_error_7534b8e9a36f1ab4 = function(t, e) {
    let i, _;
    try {
      i = t, _ = e, console.error(d(t, e));
    } finally {
      r.__wbindgen_free(i, _, 1);
    }
  }, n.wbg.__wbg_event_new = function(t) {
    return ct.__wrap(t);
  }, n.wbg.__wbg_exportKey_d8fbe6e8de2fbb6a = function() {
    return y(function(t, e, i, _) {
      return t.exportKey(d(e, i), _);
    }, arguments);
  }, n.wbg.__wbg_generateKey_614dd8336c46ede9 = function() {
    return y(function(t, e, i, _, o) {
      return t.generateKey(d(e, i), _ !== 0, o);
    }, arguments);
  }, n.wbg.__wbg_generatedocerror_new = function(t) {
    return gt.__wrap(t);
  }, n.wbg.__wbg_generatewebcryptoerror_new = function(t) {
    return dt.__wrap(t);
  }, n.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
    return y(function(t, e) {
      t.getRandomValues(e);
    }, arguments);
  }, n.wbg.__wbg_getprivatekey_c03ce2e8935f16db = function(t) {
    return t.privateKey;
  }, n.wbg.__wbg_getpublickey_66fc5575903e8954 = function(t) {
    return t.publicKey;
  }, n.wbg.__wbg_group_new = function(t) {
    return wt.__wrap(t);
  }, n.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(t) {
    let e;
    try {
      e = t instanceof Window;
    } catch {
      e = false;
    }
    return e;
  }, n.wbg.__wbg_jsdecrypterror_new = function(t) {
    return pt.__wrap(t);
  }, n.wbg.__wbg_jsencrypterror_new = function(t) {
    return lt.__wrap(t);
  }, n.wbg.__wbg_jsreceiveprekeyoperror_new = function(t) {
    return ft.__wrap(t);
  }, n.wbg.__wbg_keyhive_new = function(t) {
    return M.__wrap(t);
  }, n.wbg.__wbg_length_a446193dc22c12f8 = function(t) {
    return t.length;
  }, n.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(t) {
    return t.msCrypto;
  }, n.wbg.__wbg_new_23a2665fac83c611 = function(t, e) {
    try {
      var i = { a: t, b: e }, _ = (s, a) => {
        const u = i.a;
        i.a = 0;
        try {
          return ye(u, i.b, s, a);
        } finally {
          i.a = u;
        }
      };
      return new Promise(_);
    } finally {
      i.a = i.b = 0;
    }
  }, n.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    return new Error();
  }, n.wbg.__wbg_new_a12002a7f91c75be = function(t) {
    return new Uint8Array(t);
  }, n.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    return new Function(d(t, e));
  }, n.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(t, e, i) {
    return new Uint8Array(t, e >>> 0, i >>> 0);
  }, n.wbg.__wbg_newwithlength_a381634e90c276d4 = function(t) {
    return new Uint8Array(t >>> 0);
  }, n.wbg.__wbg_node_905d3e251edff8a2 = function(t) {
    return t.node;
  }, n.wbg.__wbg_peer_unwrap = function(t) {
    return k.__unwrap(t);
  }, n.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(t) {
    return t.process;
  }, n.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5 = function(t) {
    queueMicrotask(t);
  }, n.wbg.__wbg_queueMicrotask_d3219def82552485 = function(t) {
    return t.queueMicrotask;
  }, n.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
    return y(function(t, e) {
      t.randomFillSync(e);
    }, arguments);
  }, n.wbg.__wbg_require_60cc747a6bc5215a = function() {
    return y(function() {
      return module.require;
    }, arguments);
  }, n.wbg.__wbg_resolve_4851785c9c5f573d = function(t) {
    return Promise.resolve(t);
  }, n.wbg.__wbg_revokemembererror_new = function(t) {
    return ht.__wrap(t);
  }, n.wbg.__wbg_serializationerror_new = function(t) {
    return mt.__wrap(t);
  }, n.wbg.__wbg_set_65595bdd868b3009 = function(t, e, i) {
    t.set(e, i >>> 0);
  }, n.wbg.__wbg_sharekey_new = function(t) {
    return O.__wrap(t);
  }, n.wbg.__wbg_sign_163254c0ca9f0994 = function() {
    return y(function(t, e, i, _, o) {
      return t.sign(e, i, w(_, o));
    }, arguments);
  }, n.wbg.__wbg_signed_new = function(t) {
    return vt.__wrap(t);
  }, n.wbg.__wbg_signeddelegation_new = function(t) {
    return F.__wrap(t);
  }, n.wbg.__wbg_signedrevocation_new = function(t) {
    return H.__wrap(t);
  }, n.wbg.__wbg_signer_new = function(t) {
    return b.__wrap(t);
  }, n.wbg.__wbg_signingerror_new = function(t) {
    return Ft.__wrap(t);
  }, n.wbg.__wbg_stack_0ed75d68575b0f3c = function(t, e) {
    const i = e.stack, _ = W(i, r.__wbindgen_malloc, r.__wbindgen_realloc), o = g;
    E().setInt32(t + 4, o, true), E().setInt32(t + 0, _, true);
  }, n.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return L(t) ? 0 : j(t);
  }, n.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return L(t) ? 0 : j(t);
  }, n.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return L(t) ? 0 : j(t);
  }, n.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return L(t) ? 0 : j(t);
  }, n.wbg.__wbg_subarray_aa9065fa9dc5df96 = function(t, e, i) {
    return t.subarray(e >>> 0, i >>> 0);
  }, n.wbg.__wbg_subtle_d0614193a0b7a626 = function(t) {
    return t.subtle;
  }, n.wbg.__wbg_summary_new = function(t) {
    return Ct.__wrap(t);
  }, n.wbg.__wbg_then_44b73946d2fb3e7d = function(t, e) {
    return t.then(e);
  }, n.wbg.__wbg_then_48b406749878a531 = function(t, e, i) {
    return t.then(e, i);
  }, n.wbg.__wbg_tryfromarchiveerror_new = function(t) {
    return Rt.__wrap(t);
  }, n.wbg.__wbg_versions_c01dfd4722a88165 = function(t) {
    return t.versions;
  }, n.wbg.__wbindgen_array_new = function() {
    return [];
  }, n.wbg.__wbindgen_array_push = function(t, e) {
    t.push(e);
  }, n.wbg.__wbindgen_cb_drop = function(t) {
    const e = t.original;
    return e.cnt-- == 1 ? (e.a = 0, true) : false;
  }, n.wbg.__wbindgen_closure_wrapper1810 = function(t, e, i) {
    return le(t, e, 383, fe);
  }, n.wbg.__wbindgen_debug_string = function(t, e) {
    const i = X(e), _ = W(i, r.__wbindgen_malloc, r.__wbindgen_realloc), o = g;
    E().setInt32(t + 4, o, true), E().setInt32(t + 0, _, true);
  }, n.wbg.__wbindgen_error_new = function(t, e) {
    return new Error(d(t, e));
  }, n.wbg.__wbindgen_init_externref_table = function() {
    const t = r.__wbindgen_export_2, e = t.grow(4);
    t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, true), t.set(e + 3, false);
  }, n.wbg.__wbindgen_is_function = function(t) {
    return typeof t == "function";
  }, n.wbg.__wbindgen_is_object = function(t) {
    const e = t;
    return typeof e == "object" && e !== null;
  }, n.wbg.__wbindgen_is_string = function(t) {
    return typeof t == "string";
  }, n.wbg.__wbindgen_is_undefined = function(t) {
    return t === void 0;
  }, n.wbg.__wbindgen_memory = function() {
    return r.memory;
  }, n.wbg.__wbindgen_string_new = function(t, e) {
    return d(t, e);
  }, n.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(d(t, e));
  }, n;
}
function ve(n, t) {
  return r = n.exports, Z.__wbindgen_wasm_module = t, R = null, x = null, r.__wbindgen_start(), r;
}
async function Z(n) {
  if (r !== void 0) return r;
  typeof n < "u" && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof n > "u" && (n = new URL("/assets/keyhive_wasm_bg-Bi87mnVM.wasm", import.meta.url));
  const t = me();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const { instance: e, module: i } = await he(await n, t);
  return ve(e, i);
}
class we {
  constructor() {
    __publicField(this, "keyhive", null);
    __publicField(this, "signer", null);
    __publicField(this, "store", null);
  }
  get keyhiveInstance() {
    return this.keyhive;
  }
  async initialize() {
    try {
      await Z();
      try {
        this.signer = await b.generateWebCrypto(), console.log("Using WebCrypto signer");
      } catch (e) {
        console.log("WebCrypto not available, using memory signer:", e), this.signer = b.generateMemory(), console.log("Using memory signer");
      }
      if (!this.signer) throw new Error("Failed to create Signer instance");
      console.log("Signer created successfully:", this.signer), this.store = v.newInMemory();
      const t = (e) => {
        console.log("Keyhive event:", e);
      };
      return this.keyhive = await new M(this.signer, this.store, t), console.log("Keyhive instance created:", this.keyhive), console.log("Keyhive id:", this.keyhive.id), console.log("Keyhive idString:", this.keyhive.idString), console.log("Keyhive whoami:", this.keyhive.whoami), { keyhive: this.keyhive, signer: this.signer, store: this.store };
    } catch (t) {
      throw console.error("Failed to initialize Keyhive:", t), t;
    }
  }
  getAgent(t) {
    if (!this.keyhive) throw new Error("Keyhive not initialized. Call initialize() first.");
    return this.keyhive.getAgent(t);
  }
  async createGroup(t = []) {
    if (!this.keyhive) throw new Error("Keyhive not initialized. Call initialize() first.");
    return await this.keyhive.generateGroup(t);
  }
  async addMemberToGroup(t, e, i, _ = []) {
    try {
      if (!this.keyhive) throw new Error("Keyhive not initialized. Call initialize() first.");
      const o = t.toMembered();
      return await this.keyhive.addMember(e, o, i, _);
    } catch (o) {
      const s = o && typeof o == "object" && "message" in o ? o.message : o;
      throw new Error("addMemberToGroup issue :/" + s);
    }
  }
  async removeMemberFromGroup(t, e, i = true) {
    if (!this.keyhive) throw new Error("Keyhive not initialized. Call initialize() first.");
    const _ = t.toMembered();
    return await this.keyhive.revokeMember(e, i, _);
  }
  async createContactCard() {
    if (!this.keyhive) throw new Error("Keyhive not initialized. Call initialize() first.");
    return await this.keyhive.contactCard();
  }
  async exportContactCard() {
    return (await this.createContactCard()).toJson();
  }
  async importContactCard(t) {
    var _a;
    try {
      const e = new G(t);
      return console.log("Imported ContactCard data:", e), await ((_a = this.keyhive) == null ? void 0 : _a.receiveContactCard(e));
    } catch (e) {
      throw console.error("Failed to import ContactCard:", e), new Error(`Invalid ContactCard: ${e}`);
    }
  }
  getKeyhiveId() {
    if (!this.keyhive) throw new Error("Keyhive not initialized. Call initialize() first.");
    const t = this.keyhive.id;
    return t && t.bytes ? t.bytes : this.keyhive.whoami.bytes;
  }
  getGroupMembers(t) {
    return t.members;
  }
  async createSecondInstance() {
    try {
      await Z();
      let t;
      try {
        t = await b.generateWebCrypto(), console.log("Using WebCrypto signer for second instance");
      } catch (o) {
        console.log("WebCrypto not available for second instance, using memory signer:", o), t = b.generateMemory(), console.log("Using memory signer for second instance");
      }
      if (!t) throw new Error("Failed to create Signer instance for second instance");
      const e = v.newInMemory(), i = (o) => {
        console.log("Keyhive 2 event:", o);
      };
      return { keyhive: await new M(t, e, i), signer: t, store: e };
    } catch (t) {
      throw console.error("Failed to create second Keyhive instance:", t), t;
    }
  }
}
class ze {
  constructor() {
    __publicField(this, "managerBob");
    __publicField(this, "managerAlice", null);
    __publicField(this, "currentGroup", null);
    __publicField(this, "aliceInstance", null);
    __publicField(this, "importedAgent");
    this.managerBob = new we();
  }
  async initialize() {
    const t = document.querySelector("#app");
    t.innerHTML = `
      <div>
        <h1>Keyhive Group Management Demo</h1>
        <div class="card">
          <p>This demo shows the process of initialising instances, creating a group, and adding a member to the group.
          The outcome of adding a member to a group is a signed delegation chain: each delegation may include a proof, which is another signed delegation.</p>
          <p>If I verify each delegation was signed by the issuer, I can prove that the delegation was issued to me, which means I can also delegate that capability.</p>
          <h2>Status</h2>
          <div id="status">Ready to start</div>
        </div>

        <div class="card">
          <h2>Alice Instance</h2>
          <div id="instance-alice-info"></div>
          <button id="init-alice-btn" disabled>Initialize Instance Alice</button>
          <div id="instance-alice-contact-card" style="display: none;">
            <h4>ContactCard Export (for sharing)</h4>
            <textarea id="contact-card-export" readonly style="width: 100%; height: 100px; font-family: monospace; font-size: 0.8em;"></textarea>
            <button id="copy-contact-card-btn">Copy ContactCard</button>
          </div>
        </div>

        <div class="card">
          <h2>Bob Instance</h2>
          <div id="instance-bob-info"></div>
          <button id="init-btn" disabled>Initialize Instance Bob</button>
          <button id="create-group-btn" disabled>Create Group</button>
          <h2>Import Contact Card (Out-of-Band)</h2>
          <div id="contact-card-exchange">
            <h4>Paste ContactCard to Import</h4>
            <textarea id="contact-card-import" placeholder="Paste the ContactCard JSON from Instance Alice here..." style="width: 100%; height: 100px; font-family: monospace; font-size: 0.8em;"></textarea>
            <button id="import-contact-card-btn" disabled>Import ContactCard</button>
            <div id="import-status" style="margin-top: 0.5rem;"></div>
          </div>
          <h2>Group Management</h2>
          <div id="group-info">No group created yet</div>
          <button id="add-member-btn" disabled>Add Imported Member to Group</button>
          <button id="remove-member-btn" disabled>Remove Member from Group</button>
          <p style="font-size: 0.9em; color: #888; margin-top: 1rem;">
            <strong>Workflow:</strong> First initialize both instances, then copy the ContactCard from Instance Alice
            and paste it in the import section. This simulates the out-of-band exchange process that would
            happen in real Keyhive applications (e.g., via QR codes, secure messaging, or in-person exchange).
          </p>
        </div>

        <div class="card">
          <h2>Logs</h2>
          <div id="logs"></div>
        </div>
      </div>
    `, this.setupEventListeners(), this.log('UI initialized. Click "Initialize Instance Alice" to start.');
  }
  setupEventListeners() {
    const t = document.getElementById("init-btn"), e = document.getElementById("init-alice-btn"), i = document.getElementById("create-group-btn"), _ = document.getElementById("add-member-btn"), o = document.getElementById("remove-member-btn"), s = document.getElementById("copy-contact-card-btn"), a = document.getElementById("import-contact-card-btn");
    t.addEventListener("click", () => this.initializeInstanceBob()), e.addEventListener("click", () => this.initializeInstanceAlice()), i.addEventListener("click", () => this.createGroup()), _.addEventListener("click", () => this.addMember()), o.addEventListener("click", () => this.removeMember()), s.addEventListener("click", () => this.copyContactCard()), a.addEventListener("click", () => this.importContactCard()), t.disabled = false, e.disabled = false;
    const u = document.getElementById("contact-card-import");
    u.addEventListener("input", () => {
      document.getElementById("import-contact-card-btn").disabled = u.value.trim() === "";
    });
  }
  async initializeInstanceBob() {
    try {
      this.log("Initializing Keyhive instance Bob..."), this.updateStatus("Initializing instance Bob..."), await this.managerBob.initialize();
      const t = this.managerBob.getKeyhiveId();
      this.log(`Instance Bob initialized with ID: ${this.decimalArrayToHexString(this.convertBufferToArray(t))}`), document.getElementById("instance-bob-info").innerHTML = `
        <strong>Instance Bob ID:</strong> ${this.decimalArrayToHexString(this.convertBufferToArray(t))}
      `, this.updateStatus("Instance Bob ready"), document.getElementById("init-alice-btn").disabled = false, document.getElementById("create-group-btn").disabled = false;
    } catch (t) {
      console.error("Error initializing instance Bob:", t), this.log(`Error initializing instance Bob: ${t}`), this.updateStatus("Error initializing instance Bob"), t instanceof Error && (t.message.includes("generate") ? this.log("This might be a signer initialization issue. Check console for details.") : t.message.includes("WASM") && this.log("WASM module initialization failed. Make sure the WASM files are available."));
    }
  }
  async initializeInstanceAlice() {
    try {
      this.log("Initializing Keyhive instance Alice..."), this.updateStatus("Initializing instance Alice..."), this.managerAlice = new we(), this.aliceInstance = await this.managerAlice.initialize();
      const t = this.managerAlice.getKeyhiveId();
      this.log(`Instance Alice initialized with ID: ${this.decimalArrayToHexString(this.convertBufferToArray(t))}`), document.getElementById("instance-alice-info").innerHTML = `
        <strong>Instance Alice ID:</strong> ${this.decimalArrayToHexString(this.convertBufferToArray(t))}
      `, await this.showContactCardExport(), this.updateStatus("Both instances ready");
    } catch (t) {
      this.log(`Error initializing instance Alice: ${t}`), this.updateStatus("Error initializing instance Alice");
    }
  }
  decimalArrayToHexString(t) {
    return t.map((e) => "0x" + e.toString(16).padStart(2, "0")).join("");
  }
  convertBufferToArray(t) {
    return t instanceof Uint8Array ? Array.from(t) : t;
  }
  async createGroup() {
    try {
      this.log("Creating group..."), this.updateStatus("Creating group...");
      let t = [];
      this.aliceInstance && this.log("Attempting to create group with second instance as coparent..."), this.currentGroup = await this.managerBob.createGroup(t);
      const e = this.currentGroup.id, i = this.managerBob.getGroupMembers(this.currentGroup);
      let _ = "Unknown ID";
      e && typeof e == "object" ? e.toBytes ? _ = this.decimalArrayToHexString(this.convertBufferToArray(e.toBytes())) : _ = JSON.stringify(e) : typeof e == "string" && (_ = e), this.log(`Group created with ID: ${_}`), this.log(`Initial members count: ${i.length}`), document.getElementById("group-info").innerHTML = `
        <strong>Group ID:</strong> ${_}<br>
        <strong>Members:</strong> ${i.length}
        <div id="member-list">${this.formatMembers(i)}</div>
      `, this.updateStatus("Group created"), this.importedAgent && (document.getElementById("add-member-btn").disabled = false);
    } catch (t) {
      this.log(`Error creating group: ${t}`), this.updateStatus("Error creating group");
    }
  }
  async addMember() {
    try {
      if (!this.currentGroup) {
        this.log("No group created yet");
        return;
      }
      if (!this.importedAgent) {
        this.log("No agent imported yet. Please import a ContactCard first.");
        return;
      }
      this.log("Adding member to group..."), this.updateStatus("Adding member..."), this.log("Using imported Agent for member addition"), this.log(`Adding member with ID: ${this.importedAgent.id.toBytes()}...`);
      const t = this.importedAgent.toAgent();
      console.log("agent", t);
      const e = z.tryFromString("read");
      if (!e || !t) throw new Error("Failed to create Read access");
      console.log("access", e);
      const i = await this.managerBob.addMemberToGroup(this.currentGroup, t, e);
      this.log("Member added successfully"), this.log(`Signature valid?: ${i.verify()}`);
      const _ = i.delegation;
      this.log(`Delegation (should match Alice's ID): ${_.delegate.toString()}`), this.log(`(Alice) can: ${_.can.toString()}`);
      const o = _.proof;
      if (o) {
        this.log(`Proof signature valid?: ${o.verify()}`);
        const a = o.delegation;
        this.log(`Proof Delegation (should match Bob's ID): ${a.delegate.toString()}`), this.log(`can: ${a.can.toString()}`);
      } else this.log("No proof");
      const s = this.managerBob.getGroupMembers(this.currentGroup);
      document.getElementById("member-list").innerHTML = this.formatMembers(s), this.updateStatus("Member added"), document.getElementById("remove-member-btn").disabled = false;
    } catch (t) {
      console.log("error", t), this.log("Error adding member: " + JSON.stringify(t)), this.updateStatus("Error adding member");
    }
  }
  async removeMember() {
    var _a;
    try {
      if (!this.currentGroup || !this.managerAlice || !this.aliceInstance) {
        this.log("Group or second instance not ready");
        return;
      }
      this.log("Removing member from group..."), this.updateStatus("Removing member...");
      const t = await this.managerAlice.createContactCard(), e = new C(t.id.bytes), i = (_a = this.managerBob.keyhiveInstance) == null ? void 0 : _a.getAgent(e);
      if (!i) throw new Error("Could not get agent for contact card");
      (await this.managerBob.removeMemberFromGroup(this.currentGroup, i, true)).forEach((s) => this.log(`revocation subject id (should match group id): ${this.decimalArrayToHexString(this.convertBufferToArray(s.delegation.subject_id.toBytes()))}`)), this.log("Member removed successfully");
      const o = this.managerBob.getGroupMembers(this.currentGroup);
      document.getElementById("member-list").innerHTML = this.formatMembers(o), this.updateStatus("Member removed"), document.getElementById("remove-member-btn").disabled = true;
    } catch (t) {
      this.log(`Error removing member: ${t}`), this.updateStatus("Error removing member");
    }
  }
  formatMembers(t) {
    return t.length === 0 ? "<em>No members</em>" : t.map((e, i) => `<div>Member ${i + 1}: ${e.who || "Unknown"}</div>`).join("");
  }
  log(t) {
    const e = (/* @__PURE__ */ new Date()).toLocaleTimeString(), i = document.getElementById("logs");
    i.innerHTML += `<div>[${e}] ${t}</div>`, i.scrollTop = i.scrollHeight, console.log(t);
  }
  async showContactCardExport() {
    if (this.managerAlice) try {
      const t = await this.managerAlice.exportContactCard();
      document.getElementById("contact-card-export").textContent = t, document.getElementById("instance-alice-contact-card").style.display = "block", this.log("ContactCard ready for export. Copy it to share with Instance Bob.");
    } catch (t) {
      this.log(`Error exporting ContactCard: ${t}`);
    }
  }
  async copyContactCard() {
    const t = document.getElementById("contact-card-export");
    try {
      await navigator.clipboard.writeText(t.value), this.log("ContactCard copied to clipboard!");
    } catch {
      t.select(), document.execCommand("copy"), this.log("ContactCard selected. Press Ctrl+C to copy.");
    }
  }
  async importContactCard() {
    const t = document.getElementById("contact-card-import"), e = document.getElementById("import-status");
    try {
      this.log("Importing ContactCard...");
      const i = t.value.trim(), _ = await this.managerBob.importContactCard(i);
      this.importedAgent = _, e.innerHTML = '<span style="color: green;">\u2713 ContactCard imported successfully!</span>', this.log("ContactCard imported. You can now add this member to the group."), this.currentGroup && (document.getElementById("add-member-btn").disabled = false);
    } catch (i) {
      e.innerHTML = '<span style="color: red;">\u2717 Invalid ContactCard format</span>', this.log(`Error importing ContactCard: ${i}`);
    }
  }
  updateStatus(t) {
    document.getElementById("status").textContent = t;
  }
}
async function Fe() {
  try {
    await new ze().initialize();
  } catch (n) {
    console.error("Failed to initialize application:", n), document.querySelector("#app").innerHTML = `
      <h1>Error</h1>
      <p>Failed to initialize the Keyhive demo application.</p>
      <p>Error: ${n}</p>
    `;
  }
}
Fe();
