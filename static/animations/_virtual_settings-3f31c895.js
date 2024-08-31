function iu(n) {
  return typeof n == "function" ? n : () => n
}
class pn {
  constructor() {
    ;(this.subscribable = new mi(this)), (this.subscribers = new Set())
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.unsubscribe(t)
  }
  unsubscribe(t) {
    this.subscribers.delete(t)
  }
  clear() {
    this.subscribers.clear()
  }
  notifySubscribers(t) {
    return [...this.subscribers].map((e) => e(t))
  }
}
class mi {
  constructor(t) {
    this.dispatcher = t
  }
  subscribe(t) {
    return this.dispatcher.subscribe(t)
  }
  unsubscribe(t) {
    this.dispatcher.unsubscribe(t)
  }
}
class Ft extends pn {
  dispatch(t) {
    this.notifySubscribers(t)
  }
}
class au extends pn {
  constructor() {
    super(...arguments), (this.value = !1)
  }
  raise() {
    this.value || ((this.value = !0), this.notifySubscribers())
  }
  reset() {
    this.value = !1
  }
  isRaised() {
    return this.value
  }
  subscribe(t) {
    const e = super.subscribe(t)
    return this.value && t(), e
  }
}
class we extends pn {
  get current() {
    return this.value
  }
  set current(t) {
    ;(this.value = t), this.notifySubscribers(t)
  }
  constructor(t) {
    super(), (this.value = t), (this.subscribable = new ou(this))
  }
  subscribe(t, e = !0) {
    const r = super.subscribe(t)
    return e && t(this.value), r
  }
}
class ou extends mi {
  get current() {
    return this.dispatcher.current
  }
  subscribe(t, e = !0) {
    return this.dispatcher.subscribe(t, e)
  }
}
class Ct {
  get onChanged() {
    return this.value.subscribable
  }
  get onDisabled() {
    return this.disabled.subscribable
  }
  constructor(t, e) {
    ;(this.name = t),
      (this.initial = e),
      (this.type = void 0),
      (this.spacing = !1),
      (this.description = ""),
      (this.disabled = new we(!1)),
      (this.value = new we(e))
  }
  get() {
    return this.value.current
  }
  set(t) {
    this.value.current = this.parse(t)
  }
  parse(t) {
    return t
  }
  serialize() {
    return this.value.current
  }
  clone() {
    return new this.constructor(this.name, this.get())
  }
  disable(t = !0) {
    return (this.disabled.current = t), this
  }
  space(t = !0) {
    return (this.spacing = t), this
  }
  describe(t) {
    return (this.description = t), this
  }
}
class yr extends Ct {
  constructor() {
    super(...arguments), (this.type = Boolean)
  }
  parse(t) {
    return !!t
  }
}
class bi extends Error {
  constructor(t, e) {
    typeof t == "string"
      ? (super(t), (this.remarks = e))
      : (super(t.message),
        (this.remarks = t.remarks),
        (this.object = t.object),
        (this.durationMs = t.durationMs),
        (this.inspect = t.inspect))
  }
}
class lu {
  constructor() {
    ;(this.resolveCurrent = null), (this.current = null)
  }
  async acquire() {
    for (; this.current; ) await this.current
    this.current = new Promise((t) => {
      this.resolveCurrent = t
    })
  }
  release() {
    var t
    ;(this.current = null),
      (t = this.resolveCurrent) == null || t.call(this),
      (this.resolveCurrent = null)
  }
}
const xr = []
function Ye() {
  const n = xr.at(-1)
  if (!n) throw new Error("The scene is not available in the current context.")
  return n
}
function hu(n) {
  xr.push(n)
}
function uu(n) {
  if (xr.pop() !== n)
    throw new Error("startScene/endScene were called out of order.")
}
function mt() {
  var n
  return ((n = xr.at(-1)) == null ? void 0 : n.logger) ?? console
}
const gn = []
function Tr() {
  const n = gn.at(-1)
  if (!n)
    throw new bi(
      "The thread is not available in the current context.",
      `<p><code>useThread()</code> can only be called from within generator functions.
      It&#39;s not available during rendering.</p>
`
    )
  return n
}
function ii(n) {
  gn.push(n)
}
function ai(n) {
  if (gn.pop() !== n)
    throw new Error("startThread/endThread was called out of order.")
}
function ve(n) {
  return n[0].toUpperCase() + n.slice(1)
}
function mc() {
  let n
  return (e) => {
    if (e !== void 0) n = e
    else return n
  }
}
function bc(n, t) {
  return (e) => {
    n[t] = e
  }
}
function yi(n) {
  return { message: n.message, stack: n.stack, remarks: n.remarks }
}
const oi = [
    { value: 0.25, text: "0.25x (Quarter)" },
    { value: 0.5, text: "0.5x (Half)" },
    { value: 1, text: "1.0x (Full)" },
    { value: 2, text: "2.0x (Double)" }
  ],
  cu = [
    { value: "srgb", text: "sRGB" },
    { value: "display-p3", text: "DCI-P3" }
  ],
  li = [
    { value: 30, text: "30 FPS" },
    { value: 60, text: "60 FPS" }
  ]
var Ot
;(function (n) {
  ;(n.Error = "error"),
    (n.Warn = "warn"),
    (n.Info = "info"),
    (n.Http = "http"),
    (n.Verbose = "verbose"),
    (n.Debug = "debug"),
    (n.Silly = "silly")
})(Ot || (Ot = {}))
class fu {
  constructor() {
    ;(this.logged = new Ft()), (this.history = []), (this.profilers = {})
  }
  get onLogged() {
    return this.logged.subscribable
  }
  log(t) {
    this.logged.dispatch(t), this.history.push(t)
  }
  error(t) {
    this.logLevel(Ot.Error, t)
  }
  warn(t) {
    this.logLevel(Ot.Warn, t)
  }
  info(t) {
    this.logLevel(Ot.Info, t)
  }
  http(t) {
    this.logLevel(Ot.Http, t)
  }
  verbose(t) {
    this.logLevel(Ot.Verbose, t)
  }
  debug(t) {
    this.logLevel(Ot.Debug, t)
  }
  silly(t) {
    this.logLevel(Ot.Silly, t)
  }
  logLevel(t, e) {
    const r = typeof e == "string" ? { message: e } : e
    ;(r.level = t), this.log(r)
  }
  profile(t, e) {
    const r = performance.now()
    if (this.profilers[t]) {
      const i = this.profilers[t]
      delete this.profilers[t]
      const a = e ?? { message: t }
      a.level ?? (a.level = Ot.Debug), (a.durationMs = r - i), this.log(a)
      return
    }
    this.profilers[t] = r
  }
}
var Ze
;(function (n) {
  ;(n[(n.Playing = 0)] = "Playing"),
    (n[(n.Rendering = 1)] = "Rendering"),
    (n[(n.Paused = 2)] = "Paused"),
    (n[(n.Presenting = 3)] = "Presenting")
})(Ze || (Ze = {}))
function yc(n) {
  return n
}
function du(n) {
  const t = {
    version: new Ct("version", 1),
    shared: new Ht("General", {
      background: new un("background", null),
      range: new Rr("range", [0, 1 / 0]),
      size: new Li("resolution", new g(1920, 1080)),
      audioOffset: new on("audio offset", 0)
    }),
    preview: new Ht("Preview", {
      fps: new on("frame rate", 30).setPresets(li).setRange(1),
      resolutionScale: new ye("scale", oi, 1)
    }),
    rendering: new Ht("Rendering", {
      fps: new on("frame rate", 60).setPresets(li).setRange(1),
      resolutionScale: new ye("scale", oi, 1),
      colorSpace: new ye("color space", cu),
      exporter: new Yu("exporter", n)
    })
  }
  return t.shared.audioOffset.disable(!n.audio), t
}
class Zu extends Ct {
  get onFieldsChanged() {
    return this.event.subscribable
  }
  constructor(t, e) {
    const r = new Map(Object.entries(e))
    super(t, Object.fromEntries(Array.from(r, ([i, a]) => [i, a.get()]))),
      (this.type = Object),
      (this.ignoreChange = !1),
      (this.customFields = {}),
      (this.handleChange = () => {
        this.ignoreChange ||
          (this.value.current = {
            ...this.transform("get"),
            ...this.customFields
          })
      }),
      (this.event = new we([...r.values()])),
      (this.fields = r)
    for (const [i, a] of this.fields)
      Object.defineProperty(this, i, { value: a }),
        a.onChanged.subscribe(this.handleChange)
  }
  set(t) {
    this.ignoreChange = !0
    for (const [e, r] of Object.entries(t)) {
      const i = this.fields.get(e)
      i ? i.set(r) : (this.customFields[e] = r)
    }
    ;(this.ignoreChange = !1), this.handleChange()
  }
  serialize() {
    return { ...this.transform("serialize"), ...this.customFields }
  }
  clone() {
    const t = new this.constructor(this.name, this.transform("clone"))
    return t.set(structuredClone(this.customFields)), t
  }
  transform(t) {
    return Object.fromEntries(Array.from(this.fields, ([r, i]) => [r, i[t]()]))
  }
}
const Ht = Zu
class pu extends Ht {
  constructor(t) {
    super("project", du(t))
  }
  getFullPreviewSettings() {
    return { ...this.shared.get(), ...this.preview.get() }
  }
  getFullRenderingSettings() {
    return { ...this.shared.get(), ...this.rendering.get() }
  }
}
function gu() {
  return new Ht("Application Settings", {
    version: new Ct("version", 1),
    appearance: new Ht("Appearance", {
      color: new un("accent color", new ne("#33a6ff")).describe(
        "The accent color for the user interface. (Leave empty to use the default color)"
      ),
      font: new yr("legacy font", !1).describe(
        "Use the 'JetBrains Mono' font for the user interface."
      ),
      coordinates: new yr("coordinates", !0).describe(
        "Display mouse coordinates within the preview window."
      )
    }),
    defaults: new Ht("Defaults", {
      background: new un("background", null).describe(
        "The default background color used in new projects."
      ),
      size: new Li("resolution", new g(1920, 1080)).describe(
        "The default resolution used in new projects."
      )
    })
  })
}
function wc(n, t, e, r, i, a, h = r.logger ?? new fu()) {
  const c = gu()
  a.attach(c)
  const b = { name: n, ...r, plugins: e, versions: t, settings: c, logger: h }
  return (
    (b.meta = new pu(b)),
    b.meta.shared.set(c.defaults.get()),
    b.experimentalFeatures ?? (b.experimentalFeatures = !1),
    i.attach(b.meta),
    b
  )
}
function vu(n, t) {
  return {
    level: Ot.Error,
    message: n,
    remarks:
      (t ?? "") +
      `<p>This feature requires enabling the <code>experimentalFeatures</code> flag in your project
configuration:</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-attr">experimentalFeatures</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-comment">// ...</span>
});</code></pre><p><a href='https://motioncanvas.io/docs/experimental' target='_blank'>Learn more</a> about experimental
features.</p>
`
  }
}
const mu = 180 / Math.PI,
  ln = Math.PI / 180
function hi(n, t, e) {
  let r = 0,
    i = n
  t !== void 0 && ((r = n), (i = t)), (e = e === void 0 ? (r < i ? 1 : -1) : e)
  const a = []
  let h = Math.max(Math.ceil((i - r) / e), 0),
    c = 0
  for (; h--; ) (a[c++] = r), (r += e)
  return a
}
function bu(n) {
  const t = Ye(),
    e = Tr()
  return t.timeEvents.register(n, e.time())
}
const vn = []
function wi() {
  const n = vn.at(-1)
  if (!n)
    throw new Error("The playback is not available in the current context.")
  return n
}
function yu(n) {
  vn.push(n)
}
function wu(n) {
  if (vn.pop() !== n)
    throw new Error("startPlayback/endPlayback were called out of order.")
}
function Yt(n, ...t) {
  const e = { [n.name]: n },
    r = Object.getOwnPropertyDescriptor(e, n.name)
  if (r) for (let i = t.length - 1; i >= 0; i--) t[i](e, n.name, r)
}
const ui = Symbol.for("@motion-canvas/core/decorators/UNINITIALIZED")
function Cr(n) {
  return (t, e) => {
    let r = ui
    Object.defineProperty(t, e, {
      get() {
        return r === ui && (r = n.call(this)), r
      }
    })
  }
}
function ot(n) {
  return function (t, e, r) {
    ;(r.value.prototype.name = n ?? e), (r.value.prototype.threadable = !0)
  }
}
Yt(me, ot())
function* me(...n) {
  for (const t of n) yield t
  yield* mn(...n)
}
Yt(xu, ot())
function* xu(n, t) {
  yield* kr(bu(n)), t && (yield* t)
}
Yt(kr, ot())
function* kr(n = 0, t) {
  const e = Tr(),
    r = wi().framesToSeconds(1),
    i = e.time() + n
  for (; i - r > e.fixed; ) yield
  e.time(i), t && (yield* t)
}
Yt(xi, ot())
function* xi() {}
function ci(n, t) {
  let e
  return typeof n == "string" ? ((e = t()), wr(e, n)) : ((e = n()), wr(e, e)), e
}
Yt(Tu, ot())
function* Tu(n, ...t) {
  for (const e of t) yield e, yield* kr(n)
  yield* mn(...t)
}
function Cu(n) {
  return (
    n && (typeof n == "object" || typeof n == "function") && "toPromise" in n
  )
}
function Ti(n) {
  return (
    n !== null && typeof n == "object" && Symbol.iterator in n && "next" in n
  )
}
function wr(n, t) {
  const e = Object.getPrototypeOf(n)
  e.threadable ||
    ((e.threadable = !0), (e.name = typeof t == "string" ? t : Ci(t)))
}
function Ci(n) {
  return Object.getPrototypeOf(n).name ?? null
}
class an {
  get onDeferred() {
    return this.deferred.subscribable
  }
  get fixed() {
    return this.fixedTime
  }
  get canceled() {
    var t
    return (
      this.isCanceled ||
      (((t = this.parent) == null ? void 0 : t.canceled) ?? !1)
    )
  }
  get paused() {
    var t
    return (
      this.isPaused || (((t = this.parent) == null ? void 0 : t.paused) ?? !1)
    )
  }
  get root() {
    var t
    return ((t = this.parent) == null ? void 0 : t.root) ?? this
  }
  constructor(t) {
    ;(this.runner = t),
      (this.deferred = new Ft()),
      (this.children = []),
      (this.time = je(0)),
      (this.parent = null),
      (this.isCanceled = !1),
      (this.isPaused = !1),
      (this.fixedTime = 0),
      (this.queue = []),
      this.runner.task &&
        (mt().error({
          message: `The generator "${Ci(
            this.runner
          )}" is already being executed by another thread.`,
          remarks: `<p>This usually happens when you mistakenly reuse a generator that is already
running.</p>
<p>For example, using <code>yield</code> here will run the opacity generator concurrently and
store it in the <code>task</code> variable (in case you want to cancel or await it later):</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">const</span> task = <span class="hljs-keyword">yield</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>);</code></pre><p>Trying to <code>yield</code> this task again will cause the current error:</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">yield</span> task;</code></pre><p>Passing it to other flow functions will also cause the error:</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">yield</span>* <span class="hljs-title function_">all</span>(task);</code></pre><p>Try to investigate your code looking for <code>yield</code> statements whose return value
is reused in this way. Here&#39;s an example of a common mistake:</p>
<pre class="wrong"><code class="language-ts"><span class="hljs-keyword">yield</span>* <span class="hljs-title function_">all</span>(
  <span class="hljs-keyword">yield</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), 
  <span class="hljs-keyword">yield</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">x</span>(<span class="hljs-number">200</span>, <span class="hljs-number">1</span>),
);</code></pre><pre class="correct"><code class="language-ts"><span class="hljs-keyword">yield</span>* <span class="hljs-title function_">all</span>(
  <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), 
  <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">x</span>(<span class="hljs-number">200</span>, <span class="hljs-number">1</span>),
);</code></pre>`
        }),
        (this.runner = xi())),
      (this.runner.task = this)
  }
  next() {
    if (this.paused) return { value: null, done: !1 }
    ii(this)
    const t = this.runner.next(this.value)
    return ai(this), (this.value = null), t
  }
  update(t) {
    this.paused || (this.time(this.time() + t), (this.fixedTime += t)),
      (this.children = this.children.filter((e) => !e.canceled))
  }
  spawn(t) {
    return Ti(t) || (t = t()), this.queue.push(t), t
  }
  add(t) {
    ;(t.parent = this),
      (t.isCanceled = !1),
      t.time(this.time()),
      (t.fixedTime = this.fixedTime),
      this.children.push(t),
      wr(t.runner, `unknown ${this.children.length}`)
  }
  drain(t) {
    this.queue.forEach(t), (this.queue = [])
  }
  cancel() {
    this.deferred.clear(),
      this.runner.return(),
      (this.isCanceled = !0),
      (this.parent = null),
      this.drain((t) => t.return())
  }
  pause(t) {
    this.isPaused = t
  }
  runDeferred() {
    ii(this), this.deferred.dispatch(), ai(this)
  }
}
Yt(mn, ot())
function* mn(n, ...t) {
  let e = !0
  typeof n == "boolean" ? (e = n) : t.push(n)
  const r = Tr(),
    i = t.map((c) => r.children.find((b) => b.runner === c)).filter((c) => c),
    a = r.time()
  let h
  if (e) {
    for (; i.find((c) => !c.canceled); ) yield
    h = Math.max(...i.map((c) => c.time()))
  } else {
    for (; !i.find((b) => b.canceled); ) yield
    const c = i.filter((b) => b.canceled)
    h = Math.min(...c.map((b) => b.time()))
  }
  r.time(Math.max(a, h))
}
function ku(n) {
  return typeof (n == null ? void 0 : n.then) == "function"
}
Yt(ki, ot())
function* ki(n, t) {
  const e = wi(),
    r = n()
  wr(r, "root")
  const i = new an(r)
  t == null || t(i)
  let a = [i]
  for (; a.length > 0; ) {
    const h = [],
      c = [...a],
      b = e.deltaTime
    for (; c.length > 0; ) {
      const y = c.pop()
      if (!y || y.canceled) continue
      const k = y.next()
      if (k.done) {
        y.cancel()
        continue
      }
      if (Ti(k.value)) {
        const I = new an(k.value)
        ;(y.value = k.value), y.add(I), c.push(y), c.push(I)
      } else
        k.value
          ? ((y.value = yield k.value), c.push(y))
          : (y.update(b),
            y.drain((I) => {
              const J = new an(I)
              y.add(J), h.unshift(J)
            }),
            h.unshift(y))
    }
    a = []
    for (const y of h) y.canceled || (a.push(y), y.runDeferred())
    a.length > 0 && (yield)
  }
}
var jt
;(function (n) {
  ;(n[(n.BeforeRender = 0)] = "BeforeRender"),
    (n[(n.BeginRender = 1)] = "BeginRender"),
    (n[(n.FinishRender = 2)] = "FinishRender"),
    (n[(n.AfterRender = 3)] = "AfterRender")
})(jt || (jt = {}))
class Su {
  get onBeforeRender() {
    return this.beforeRender.subscribable
  }
  get onBeginRender() {
    return this.beginRender.subscribable
  }
  get onFinishRender() {
    return this.finishRender.subscribable
  }
  get onAfterRender() {
    return this.afterRender.subscribable
  }
  constructor(t) {
    ;(this.scene = t),
      (this.beforeRender = new Ft()),
      (this.beginRender = new Ft()),
      (this.finishRender = new Ft()),
      (this.afterRender = new Ft()),
      this.scene.onRenderLifecycle.subscribe(([e, r]) => {
        switch (e) {
          case jt.BeforeRender:
            return this.beforeRender.dispatch(r)
          case jt.BeginRender:
            return this.beginRender.dispatch(r)
          case jt.FinishRender:
            return this.finishRender.dispatch(r)
          case jt.AfterRender:
            return this.afterRender.dispatch(r)
        }
      }),
      this.scene.onReset.subscribe(() => {
        this.beforeRender.clear(),
          this.beginRender.clear(),
          this.finishRender.clear(),
          this.afterRender.clear()
      })
  }
}
class _e {
  constructor(t) {
    ;(this.state = t), (this.nextGauss = null)
  }
  static createSeed() {
    return Math.floor(Math.random() * 4294967296)
  }
  nextFloat(t = 0, e = 1) {
    return Q(t, e, this.next())
  }
  nextInt(t = 0, e = 4294967296) {
    let r = Math.floor(Q(t, e, this.next()))
    return r === e && (r = t), r
  }
  gauss(t = 0, e = 1) {
    let r = this.nextGauss
    if (((this.nextGauss = null), r === null)) {
      const i = this.next() * 2 * Math.PI,
        a = Math.sqrt(-2 * Math.log(1 - this.next()))
      ;(r = Math.cos(i) * a), (this.nextGauss = Math.sin(i) * a)
    }
    return t + r * e
  }
  floatArray(t, e = 0, r = 1) {
    return hi(t).map(() => this.nextFloat(e, r))
  }
  intArray(t, e = 0, r = 4294967296) {
    return hi(t).map(() => this.nextInt(e, r))
  }
  spawn() {
    return new _e(this.nextInt())
  }
  next() {
    ;(this.state |= 0), (this.state = (this.state + 1831565813) | 0)
    let t = Math.imul(this.state ^ (this.state >>> 15), 1 | this.state)
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    )
  }
}
var gt
;(function (n) {
  ;(n[(n.Initial = 0)] = "Initial"),
    (n[(n.AfterTransitionIn = 1)] = "AfterTransitionIn"),
    (n[(n.CanTransitionOut = 2)] = "CanTransitionOut"),
    (n[(n.Finished = 3)] = "Finished")
})(gt || (gt = {}))
const Ru = "resolution",
  Pu = "destinationTexture",
  Mu = "sourceTexture",
  fi = "time",
  Lu = "deltaTime",
  $u = "framerate",
  Ou = "sourceMatrix",
  Au = "destinationMatrix",
  Fu = `#version 300 es

in vec2 position;

out vec2 screenUV;
out vec2 sourceUV;
out vec2 destinationUV;

uniform mat4 sourceMatrix;
uniform mat4 destinationMatrix;

void main() {
    vec2 position_source = position * 0.5 + 0.5;
    vec4 position_screen = sourceMatrix * vec4(position_source, 0, 1);

    screenUV = position_screen.xy;
    sourceUV = position_source;
    destinationUV = (destinationMatrix * position_screen).xy;

    gl_Position = (position_screen - 0.5) * 2.0;
}
`
class zu {
  constructor(t, e) {
    ;(this.scene = t),
      (this.sharedContext = e),
      (this.gl = null),
      (this.positionBuffer = null),
      (this.sourceTexture = null),
      (this.destinationTexture = null),
      (this.positionLocation = 0),
      (this.quadPositions = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1])),
      (this.handleReload = () => {
        this.gl && this.updateViewport()
      }),
      t.onReloaded.subscribe(this.handleReload)
  }
  setup(t) {
    ;(this.gl = t),
      this.updateViewport(),
      (this.positionBuffer = t.createBuffer()),
      t.bindBuffer(t.ARRAY_BUFFER, this.positionBuffer),
      t.bufferData(t.ARRAY_BUFFER, this.quadPositions, t.STATIC_DRAW),
      t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, 0, 0),
      t.enableVertexAttribArray(this.positionLocation),
      (this.sourceTexture = t.createTexture()),
      t.activeTexture(t.TEXTURE0),
      t.bindTexture(t.TEXTURE_2D, this.sourceTexture),
      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
      (this.destinationTexture = t.createTexture()),
      t.activeTexture(t.TEXTURE1),
      t.bindTexture(t.TEXTURE_2D, this.destinationTexture),
      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
      t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
  }
  teardown(t) {
    t.deleteBuffer(this.positionBuffer),
      t.disableVertexAttribArray(this.positionLocation),
      t.deleteTexture(this.sourceTexture),
      t.deleteTexture(this.destinationTexture),
      (this.positionBuffer = null),
      (this.sourceTexture = null),
      (this.destinationTexture = null),
      (this.gl = null)
  }
  updateViewport() {
    if (this.gl) {
      const t = this.scene.getRealSize()
      ;(this.gl.canvas.width = t.width),
        (this.gl.canvas.height = t.height),
        this.gl.viewport(0, 0, t.width, t.height)
    }
  }
  getGL() {
    return this.gl ?? this.sharedContext.borrow(this)
  }
  getProgram(t) {
    const e = this.sharedContext.getProgram(t, Fu)
    if (!e) return null
    const r = this.scene.getRealSize(),
      i = this.getGL()
    return (
      i.useProgram(e),
      i.uniform1i(i.getUniformLocation(e, Mu), 0),
      i.uniform1i(i.getUniformLocation(e, Pu), 1),
      i.uniform2f(i.getUniformLocation(e, Ru), r.x, r.y),
      i.uniform1f(i.getUniformLocation(e, Lu), this.scene.playback.deltaTime),
      i.uniform1f(i.getUniformLocation(e, $u), this.scene.playback.fps),
      e
    )
  }
  copyTextures(t, e) {
    this.copyTexture(e, this.sourceTexture),
      this.copyTexture(t, this.destinationTexture)
  }
  clear() {
    const t = this.getGL()
    t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT)
  }
  render() {
    const t = this.getGL()
    t.drawArrays(t.TRIANGLE_STRIP, 0, 4)
  }
  copyTexture(t, e) {
    const r = this.getGL()
    r.bindTexture(r.TEXTURE_2D, e),
      r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
      r.generateMipmap(r.TEXTURE_2D)
  }
}
class Iu {
  get onChanged() {
    return this.slides.subscribable
  }
  constructor(t) {
    ;(this.scene = t),
      (this.slides = new we([])),
      (this.lookup = new Map()),
      (this.collisionLookup = new Set()),
      (this.current = null),
      (this.canResume = !1),
      (this.waitsForId = null),
      (this.targetId = null),
      (this.handleReload = () => {
        this.lookup.clear(),
          this.collisionLookup.clear(),
          (this.current = null),
          (this.waitsForId = null),
          (this.targetId = null)
      }),
      (this.handleReset = () => {
        this.collisionLookup.clear(),
          (this.current = null),
          (this.waitsForId = null)
      }),
      (this.handleRecalculated = () => {
        this.slides.current = [...this.lookup.values()]
      }),
      this.scene.onReloaded.subscribe(this.handleReload),
      this.scene.onReset.subscribe(this.handleReset),
      this.scene.onRecalculated.subscribe(this.handleRecalculated)
  }
  setTarget(t) {
    this.targetId = t
  }
  resume() {
    this.canResume = !0
  }
  isWaitingFor(t) {
    return this.waitsForId === t
  }
  isWaiting() {
    return this.waitsForId !== null
  }
  didHappen(t) {
    var e
    if (this.current === null) return !1
    for (const r of this.lookup.keys()) {
      if (r === t) return !0
      if (r === ((e = this.current) == null ? void 0 : e.id)) return !1
    }
    return !1
  }
  getCurrent() {
    return this.current
  }
  register(t, e) {
    if (this.waitsForId !== null)
      throw new Error(
        `The animation already waits for a slide: ${this.waitsForId}.`
      )
    const r = this.toId(t)
    this.scene.playback.state !== Ze.Presenting &&
      (this.lookup.has(r) ||
        this.lookup.set(r, {
          id: r,
          name: t,
          time: e,
          scene: this.scene,
          stack: new Error().stack
        }),
      this.collisionLookup.has(t)
        ? this.scene.logger.warn({
            message: `A slide named "${t}" already exists.`,
            stack: new Error().stack
          })
        : this.collisionLookup.add(t)),
      (this.waitsForId = r),
      (this.current = this.lookup.get(r) ?? null),
      (this.canResume = !1)
  }
  shouldWait(t) {
    const e = this.toId(t)
    if (this.waitsForId !== e)
      throw new Error(
        `The animation waits for a different slide: ${this.waitsForId}.`
      )
    if (!this.lookup.get(e)) throw new Error(`Could not find the "${t}" slide.`)
    let i = this.canResume
    return (
      this.scene.playback.state !== Ze.Presenting && (i = e !== this.targetId),
      i && (this.waitsForId = null),
      !i
    )
  }
  toId(t) {
    return `${this.scene.name}:${t}`
  }
}
class Eu {
  constructor(t) {
    ;(this.scene = t),
      (this.signals = {}),
      (this.variables = {}),
      (this.handleReset = () => {
        this.signals = {}
      }),
      t.onReset.subscribe(this.handleReset)
  }
  get(t, e) {
    var r
    return (
      (r = this.signals)[t] ?? (r[t] = je(this.variables[t] ?? e)),
      () => this.signals[t]()
    )
  }
  updateSignals(t) {
    ;(this.variables = t),
      Object.keys(t).map((e) => {
        e in this.signals && this.signals[e](t[e])
      })
  }
}
class _u {
  get firstFrame() {
    return this.cache.current.firstFrame
  }
  get lastFrame() {
    return this.firstFrame + this.cache.current.duration
  }
  get onCacheChanged() {
    return this.cache.subscribable
  }
  get onReloaded() {
    return this.reloaded.subscribable
  }
  get onRecalculated() {
    return this.recalculated.subscribable
  }
  get onThreadChanged() {
    return this.thread.subscribable
  }
  get onRenderLifecycle() {
    return this.renderLifecycle.subscribable
  }
  get onReset() {
    return this.afterReset.subscribable
  }
  get LifecycleEvents() {
    return (
      this.logger.warn(
        "LifecycleEvents is deprecated. Use lifecycleEvents instead."
      ),
      this.lifecycleEvents
    )
  }
  get previous() {
    return this.previousScene
  }
  constructor(t) {
    ;(this.cache = new we({
      firstFrame: 0,
      transitionDuration: 0,
      duration: 0,
      lastFrame: 0
    })),
      (this.reloaded = new Ft()),
      (this.recalculated = new Ft()),
      (this.thread = new we(null)),
      (this.renderLifecycle = new Ft()),
      (this.afterReset = new Ft()),
      (this.lifecycleEvents = new Su(this)),
      (this.previousScene = null),
      (this.runner = null),
      (this.state = gt.Initial),
      (this.cached = !1),
      (this.counters = {}),
      (this.name = t.name),
      (this.size = t.size),
      (this.resolutionScale = t.resolutionScale),
      (this.logger = t.logger),
      (this.playback = t.playback),
      (this.meta = t.meta),
      (this.runnerFactory = t.config),
      (this.creationStack = t.stack),
      (this.experimentalFeatures = t.experimentalFeatures ?? !1),
      Yt(this.runnerFactory, ot(this.name)),
      (this.timeEvents = new t.timeEventsClass(this)),
      (this.variables = new Eu(this)),
      (this.shaders = new zu(this, t.sharedWebGLContext)),
      (this.slides = new Iu(this)),
      (this.random = new _e(this.meta.seed.get())),
      (this.previousOnTop = !1)
  }
  update() {}
  async render(t) {
    let e = 0
    do
      e++,
        await ut.consumePromises(),
        t.save(),
        t.clearRect(0, 0, t.canvas.width, t.canvas.height),
        this.execute(() => this.draw(t)),
        t.restore()
    while (ut.hasPromises() && e < 10)
    e > 1 && this.logger.debug(`render iterations: ${e}`)
  }
  reload({ config: t, size: e, stack: r, resolutionScale: i } = {}) {
    t && (this.runnerFactory = t),
      e && (this.size = e),
      i && (this.resolutionScale = i),
      r && (this.creationStack = r),
      (this.cached = !1),
      this.reloaded.dispatch()
  }
  async recalculate(t) {
    const e = this.cache.current
    if (
      ((e.firstFrame = this.playback.frame),
      (e.lastFrame = e.firstFrame + e.duration),
      this.isCached())
    ) {
      t(e.lastFrame), (this.cache.current = { ...e })
      return
    }
    for (
      e.transitionDuration = -1, await this.reset();
      !this.canTransitionOut();

    )
      e.transitionDuration < 0 &&
        this.state === gt.AfterTransitionIn &&
        (e.transitionDuration = this.playback.frame - e.firstFrame),
        t(this.playback.frame + 1),
        await this.next()
    e.transitionDuration === -1 && (e.transitionDuration = 0),
      (e.lastFrame = this.playback.frame),
      (e.duration = e.lastFrame - e.firstFrame),
      await new Promise((r) => setTimeout(r, 0)),
      (this.cached = !0),
      (this.cache.current = { ...e }),
      this.recalculated.dispatch()
  }
  async next() {
    var e
    if (!this.runner) return
    let t = this.execute(() => this.runner.next())
    for (this.update(); t.value; ) {
      if (Cu(t.value)) {
        const r = await t.value.toPromise()
        t = this.execute(() => this.runner.next(r))
      } else if (ku(t.value)) {
        const r = await t.value
        t = this.execute(() => this.runner.next(r))
      } else
        this.logger.warn({
          message: "Invalid value yielded by the scene.",
          object: t.value
        }),
          (t = this.execute(() => this.runner.next(t.value)))
      this.update()
    }
    if (ut.hasPromises()) {
      const r = await ut.consumePromises()
      this.logger.error({
        message:
          "Tried to access an asynchronous property before the node was ready. Make sure to yield the node before accessing the property.",
        stack: r[0].stack,
        inspect: ((e = r[0].owner) == null ? void 0 : e.key) ?? void 0
      })
    }
    t.done && (this.state = gt.Finished)
  }
  async reset(t = null) {
    ;(this.counters = {}),
      (this.previousScene = t),
      (this.previousOnTop = !1),
      (this.random = new _e(this.meta.seed.get())),
      (this.runner = ki(
        () => this.runnerFactory(this.getView()),
        (e) => {
          this.thread.current = e
        }
      )),
      (this.state = gt.AfterTransitionIn),
      this.afterReset.dispatch(),
      await this.next()
  }
  getSize() {
    return this.size
  }
  getRealSize() {
    return this.size.mul(this.resolutionScale)
  }
  isAfterTransitionIn() {
    return this.state === gt.AfterTransitionIn
  }
  canTransitionOut() {
    return this.state === gt.CanTransitionOut || this.state === gt.Finished
  }
  isFinished() {
    return this.state === gt.Finished
  }
  enterInitial() {
    this.state === gt.AfterTransitionIn
      ? (this.state = gt.Initial)
      : this.logger.warn(
          `Scene ${this.name} entered initial in an unexpected state: ${this.state}`
        )
  }
  enterAfterTransitionIn() {
    this.state === gt.Initial
      ? (this.state = gt.AfterTransitionIn)
      : this.logger.warn(
          `Scene ${this.name} transitioned in an unexpected state: ${this.state}`
        )
  }
  enterCanTransitionOut() {
    this.state === gt.AfterTransitionIn || this.state === gt.Initial
      ? (this.state = gt.CanTransitionOut)
      : this.logger.warn(
          `Scene ${this.name} was marked as finished in an unexpected state: ${this.state}`
        )
  }
  isCached() {
    return this.cached
  }
  execute(t) {
    let e
    hu(this), yu(this.playback)
    try {
      e = t()
    } finally {
      wu(this.playback), uu(this)
    }
    return e
  }
}
function Du() {
  return new Ht("scene", {
    version: new Ct("version", 1),
    timeEvents: new Ct("time events", []),
    seed: new Ct("seed", _e.createSeed())
  })
}
function xc(n, t = !0) {
  return typeof n == "number"
    ? new _e(t ? n : n + Ye().meta.seed.get())
    : Ye().random
}
function Si(n, t, e) {
  if (t.length >= n.length) {
    const r = Math.floor(t.length * e),
      i = Math.floor(Q(n.length - 1, t.length, e))
    let a = ""
    for (let h = 0; h < t.length; h++)
      h < r ? (a += t[h]) : (n[h] || h <= i) && (a += n[h] ?? t[h])
    return a
  } else {
    const r = Math.round(n.length * (1 - e)),
      i = Math.floor(Q(n.length + 1, t.length, e)),
      a = []
    for (let h = n.length - 1; h >= 0; h--)
      h < r ? a.unshift(n[h]) : (t[h] || h < i) && a.unshift(t[h] ?? n[h])
    return a.join("")
  }
}
function De(n, t, e, r = !1) {
  if (e === 0) return n
  if (e === 1) return t
  if (n == null || t == null) {
    r ||
      mt().warn(
        `Attempting to lerp ${n} -> ${t} may result in unexpected behavior.`
      )
    return
  }
  if (typeof n == "number" && typeof t == "number") return Q(n, t, e)
  if (typeof n == "string" && typeof t == "string") return Si(n, t, e)
  if (typeof n == "boolean" && typeof t == "boolean") return e < 0.5 ? n : t
  if ("lerp" in n) return n.lerp(t, e)
  if (n && t && typeof n == "object" && typeof t == "object")
    if (Array.isArray(n) && Array.isArray(t)) {
      if (n.length === t.length) return n.map((i, a) => De(i, t[a], e))
    } else {
      let i = !1
      if (
        (!(n instanceof Map) &&
          !(t instanceof Map) &&
          ((i = !0),
          (n = new Map(Object.entries(n))),
          (t = new Map(Object.entries(t)))),
        n instanceof Map && t instanceof Map)
      ) {
        const a = new Map()
        for (const h of new Set([...n.keys(), ...t.keys()])) {
          const c = De(n.get(h), t.get(h), e, !0)
          c !== void 0 && a.set(h, c)
        }
        return i ? Object.fromEntries(a) : a
      }
    }
  return t
}
function ju(n, t, e) {
  return e < 0.5 ? n : t
}
function Q(n, t, e) {
  return n + (t - n) * e
}
function Nu(n, t, e, r, i) {
  return e + ((i - n) * (r - e)) / (t - n)
}
function wt(n, t, e) {
  return e < n ? n : e > t ? t : e
}
function Ri(n, t, e) {
  let r = t
  e > 1 ? (e = 1 / e) : (r = !r)
  const i = r ? Math.acos(wt(-1, 1, 1 - n)) : Math.asin(n),
    a = Q(i, Q(0, Math.PI / 2, n), e)
  let h = Math.sin(a),
    c = 1 - Math.cos(a)
  return t && ([h, c] = [c, h]), new g(h, c)
}
function Tc(n, t = 0, e = 1) {
  return (n = 1 - Math.pow(1 - n, 3)), Q(t, e, n)
}
function _t(n, t = 0, e = 1) {
  return (
    (n = n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2), Q(t, e, n)
  )
}
function Bu(n, t = 0, e = 1) {
  return (n = n === 1 ? 1 : 1 - Math.pow(2, -10 * n)), Q(t, e, n)
}
function Wu(n, t = 0, e = 1) {
  return Q(t, e, n)
}
Yt(Dt, ot())
function* Dt(n, t, e) {
  const r = Tr(),
    i = r.time(),
    a = r.time() + n
  for (t(0, 0); a > r.fixed; ) {
    const h = r.fixed - i,
      c = h / n
    h > 0 && t(c, h), yield
  }
  r.time(a), t(1, n), e == null || e(1, n)
}
class ut {
  static collectPromise(t, e = null) {
    const r = { promise: t, value: e, stack: new Error().stack },
      i = this.collectionStack.at(-1)
    return (
      i && (r.owner = i.owner),
      t.then((a) => {
        ;(r.value = a), i == null || i.markDirty()
      }),
      this.promises.push(r),
      r
    )
  }
  static hasPromises() {
    return this.promises.length > 0
  }
  static async consumePromises() {
    const t = [...this.promises]
    return (
      await Promise.all(t.map((e) => e.promise)),
      (this.promises = this.promises.filter((e) => !t.includes(e))),
      t
    )
  }
  constructor(t) {
    ;(this.owner = t),
      (this.dependencies = new Set()),
      (this.event = new au()),
      (this.markDirty = () => this.event.raise()),
      (this.invokable = this.invoke.bind(this)),
      Object.defineProperty(this.invokable, "context", { value: this }),
      Object.defineProperty(this.invokable, "toPromise", {
        value: this.toPromise.bind(this)
      })
  }
  invoke() {}
  startCollecting() {
    if (ut.collectionSet.has(this))
      throw new bi(
        "A circular dependency occurred between signals.",
        `This can happen when signals reference each other in a loop.
        Try using the attached stack trace to locate said loop.`
      )
    ut.collectionSet.add(this), ut.collectionStack.push(this)
  }
  finishCollecting() {
    if ((ut.collectionSet.delete(this), ut.collectionStack.pop() !== this))
      throw new Error("collectStart/collectEnd was called out of order.")
  }
  clearDependencies() {
    this.dependencies.forEach((t) => t.unsubscribe(this.markDirty)),
      this.dependencies.clear()
  }
  collect() {
    const t = ut.collectionStack.at(-1)
    t &&
      (t.dependencies.add(this.event.subscribable),
      this.event.subscribe(t.markDirty))
  }
  dispose() {
    this.clearDependencies(), this.event.clear(), (this.owner = null)
  }
  async toPromise() {
    do await ut.consumePromises(), this.invokable()
    while (ut.hasPromises())
    return this.invokable
  }
}
ut.collectionSet = new Set()
ut.collectionStack = []
ut.promises = []
const Ee = Symbol.for("@motion-canvas/core/signals/default")
function Xt(n) {
  return typeof n == "function"
}
function be(n, t) {
  return Xt(n) ? () => t(n()) : t(n)
}
function xe(n) {
  return Xt(n) ? n() : n
}
class Te extends ut {
  constructor(t, e, r = void 0, i = (h) => h, a = {}) {
    super(r),
      (this.initial = t),
      (this.interpolation = e),
      (this.parser = i),
      (this.tweening = !1),
      Object.defineProperty(this.invokable, "reset", {
        value: this.reset.bind(this)
      }),
      Object.defineProperty(this.invokable, "save", {
        value: this.save.bind(this)
      }),
      Object.defineProperty(this.invokable, "isInitial", {
        value: this.isInitial.bind(this)
      }),
      this.initial !== void 0 &&
        ((this.current = this.initial),
        this.markDirty(),
        Xt(this.initial) || (this.last = this.parse(this.initial))),
      (this.extensions = {
        getter: this.getter.bind(this),
        setter: this.setter.bind(this),
        tweener: this.tweener.bind(this),
        ...a
      })
  }
  toSignal() {
    return this.invokable
  }
  parse(t) {
    return this.parser(t)
  }
  set(t) {
    return this.extensions.setter(t), this.owner
  }
  setter(t) {
    return (
      t === Ee && (t = this.initial),
      this.current === t
        ? this.owner
        : ((this.current = t),
          this.clearDependencies(),
          Xt(t) || (this.last = this.parse(t)),
          this.markDirty(),
          this.owner)
    )
  }
  get() {
    return this.extensions.getter()
  }
  getter() {
    var t
    if (this.event.isRaised() && Xt(this.current)) {
      this.clearDependencies(), this.startCollecting()
      try {
        this.last = this.parse(this.current())
      } catch (e) {
        mt().error({
          ...yi(e),
          inspect: (t = this.owner) == null ? void 0 : t.key
        })
      }
      this.finishCollecting()
    }
    return this.event.reset(), this.collect(), this.last
  }
  invoke(t, e, r = _t, i = this.interpolation) {
    return t === void 0
      ? this.get()
      : e === void 0
      ? this.set(t)
      : this.createQueue(r, i).to(t, e)
  }
  createQueue(t, e) {
    const r = this.get(),
      i = [],
      a = ci("animation chain", function* () {
        for (; i.length > 0; ) yield* i.shift()
      })
    return (
      (a.to = (h, c, b = t, y = e) => (
        (t = b), (e = y), i.push(this.tween(h, c, b, y)), a
      )),
      (a.back = (h, c = t, b = e) => (
        (t = c), (e = b), i.push(this.tween(r, h, t, e)), a
      )),
      (a.wait = (h) => (i.push(kr(h)), a)),
      (a.run = (h) => (i.push(h), a)),
      (a.do = (h) => (
        i.push(
          ci(function* () {
            h()
          })
        ),
        a
      )),
      a
    )
  }
  *tween(t, e, r, i) {
    t === Ee && (t = this.initial),
      (this.tweening = !0),
      yield* this.extensions.tweener(t, e, r, i),
      this.set(t),
      (this.tweening = !1)
  }
  *tweener(t, e, r, i) {
    const a = this.get()
    yield* Dt(e, (h) => {
      this.set(i(a, this.parse(xe(t)), r(h)))
    })
  }
  dispose() {
    super.dispose(),
      (this.initial = void 0),
      (this.current = void 0),
      (this.last = void 0)
  }
  reset() {
    return this.initial !== void 0 && this.set(this.initial), this.owner
  }
  save() {
    return this.set(this.get())
  }
  isInitial() {
    return this.collect(), this.current === this.initial
  }
  getInitial() {
    return this.initial
  }
  raw() {
    return this.current
  }
  isTweening() {
    return this.tweening
  }
}
class Sr extends Te {
  constructor(t, e, r, i, a = void 0, h = {}) {
    var c
    super(void 0, i, a, e, h),
      (this.entries = t),
      (this.signals = []),
      (this.parser = e)
    for (const b of t) {
      let y, k
      Array.isArray(b)
        ? (([y, k] = b), (c = k.context).owner ?? (c.owner = this))
        : ((y = b),
          (k = new Te(
            be(r, (I) => e(I)[b]),
            Q,
            a ?? this.invokable
          ).toSignal())),
        this.signals.push([y, k]),
        Object.defineProperty(this.invokable, y, { value: k })
    }
  }
  toSignal() {
    return this.invokable
  }
  parse(t) {
    return this.parser(t)
  }
  getter() {
    return this.parse(
      Object.fromEntries(this.signals.map(([t, e]) => [t, e()]))
    )
  }
  setter(t) {
    if (Xt(t)) for (const [e, r] of this.signals) r(() => this.parser(t())[e])
    else {
      const e = this.parse(t)
      for (const [r, i] of this.signals) i(e[r])
    }
    return this.owner
  }
  reset() {
    for (const [, t] of this.signals) t.reset()
    return this.owner
  }
  save() {
    for (const [, t] of this.signals) t.save()
    return this.owner
  }
  isInitial() {
    for (const [, t] of this.signals) if (!t.isInitial()) return !1
    return !0
  }
  raw() {
    return Object.fromEntries(
      this.signals.map(([t, e]) => [t, e.context.raw()])
    )
  }
}
class Uu extends ut {
  constructor(t, e) {
    super(e), (this.factory = t), this.markDirty()
  }
  toSignal() {
    return this.invokable
  }
  dispose() {
    super.dispose(), (this.last = void 0)
  }
  invoke(...t) {
    var e
    if (this.event.isRaised()) {
      this.clearDependencies(), this.startCollecting()
      try {
        this.last = this.factory(...t)
      } catch (r) {
        mt().error({
          ...yi(r),
          inspect: (e = this.owner) == null ? void 0 : e.key
        })
      }
      this.finishCollecting()
    }
    return this.event.reset(), this.collect(), this.last
  }
}
class Pi extends Sr {
  constructor(t, e, r, i, a = void 0, h = {}) {
    super(t, e, r, i, a, h),
      Object.defineProperty(this.invokable, "edit", {
        value: this.edit.bind(this)
      }),
      Object.defineProperty(this.invokable, "mul", {
        value: this.mul.bind(this)
      }),
      Object.defineProperty(this.invokable, "div", {
        value: this.div.bind(this)
      }),
      Object.defineProperty(this.invokable, "add", {
        value: this.add.bind(this)
      }),
      Object.defineProperty(this.invokable, "sub", {
        value: this.sub.bind(this)
      }),
      Object.defineProperty(this.invokable, "dot", {
        value: this.dot.bind(this)
      }),
      Object.defineProperty(this.invokable, "cross", {
        value: this.cross.bind(this)
      }),
      Object.defineProperty(this.invokable, "mod", {
        value: this.mod.bind(this)
      })
  }
  toSignal() {
    return this.invokable
  }
  edit(t, e, r, i) {
    const a = t(this.get())
    return this.invoke(a, e, r, i)
  }
  mul(t, e, r, i) {
    const a = (h) => h.mul(t)
    return e === void 0 ? this.edit(a) : this.edit(a, e, r, i)
  }
  div(t, e, r, i) {
    const a = (h) => h.div(t)
    return e === void 0 ? this.edit(a) : this.edit(a, e, r, i)
  }
  add(t, e, r, i) {
    const a = (h) => h.add(t)
    return e === void 0 ? this.edit(a) : this.edit(a, e, r, i)
  }
  sub(t, e, r, i) {
    const a = (h) => h.sub(t)
    return e === void 0 ? this.edit(a) : this.edit(a, e, r, i)
  }
  dot(t, e, r, i) {
    const a = (h) => h.dot(t)
    return e === void 0 ? this.edit(a) : this.edit(a, e, r, i)
  }
  cross(t, e, r, i) {
    const a = (h) => h.cross(t)
    return e === void 0 ? this.edit(a) : this.edit(a, e, r, i)
  }
  mod(t, e, r, i) {
    const a = (h) => h.mod(t)
    return e === void 0 ? this.edit(a) : this.edit(a, e, r, i)
  }
}
function Gu(n, t) {
  return new Uu(n, t).toSignal()
}
function je(n, t = De, e) {
  return new Te(n, t, e).toSignal()
}
class At {
  static createSignal(t, e = At.lerp) {
    return new Sr(
      ["top", "right", "bottom", "left"],
      (r) => new At(r),
      t,
      e
    ).toSignal()
  }
  static lerp(t, e, r) {
    return new At(
      Q(t.top, e.top, r),
      Q(t.right, e.right, r),
      Q(t.bottom, e.bottom, r),
      Q(t.left, e.left, r)
    )
  }
  get x() {
    return this.left + this.right
  }
  get y() {
    return this.top + this.bottom
  }
  constructor(t = 0, e, r, i) {
    if (
      ((this.top = 0),
      (this.right = 0),
      (this.bottom = 0),
      (this.left = 0),
      t != null)
    ) {
      if (
        (Array.isArray(t) && ((i = t[3]), (r = t[2]), (e = t[1]), (t = t[0])),
        typeof t == "number")
      ) {
        ;(this.top = t),
          (this.right = e !== void 0 ? e : t),
          (this.bottom = r !== void 0 ? r : t),
          (this.left = i !== void 0 ? i : e !== void 0 ? e : t)
        return
      }
      ;(this.top = t.top),
        (this.right = t.right),
        (this.bottom = t.bottom),
        (this.left = t.left)
    }
  }
  lerp(t, e) {
    return At.lerp(this, t, e)
  }
  scale(t) {
    return new At(this.top * t, this.right * t, this.bottom * t, this.left * t)
  }
  addScalar(t) {
    return new At(this.top + t, this.right + t, this.bottom + t, this.left + t)
  }
  toSymbol() {
    return At.symbol
  }
  toString() {
    return `Spacing(${this.top}, ${this.right}, ${this.bottom}, ${this.left})`
  }
  toUniform(t, e) {
    t.uniform4f(e, this.top, this.right, this.bottom, this.left)
  }
  serialize() {
    return {
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left
    }
  }
}
At.symbol = Symbol.for("@motion-canvas/core/types/Spacing")
const Xe = 1e-6
class st {
  static fromRotation(t) {
    return st.identity.rotate(t)
  }
  static fromTranslation(t) {
    return st.identity.translate(new g(t))
  }
  static fromScaling(t) {
    return st.identity.scale(new g(t))
  }
  get x() {
    return new g(this.values[0], this.values[1])
  }
  get y() {
    return new g(this.values[2], this.values[3])
  }
  get scaleX() {
    return this.values[0]
  }
  set scaleX(t) {
    this.values[0] = this.x.normalized.scale(t).x
  }
  get skewX() {
    return this.values[1]
  }
  set skewX(t) {
    this.values[1] = t
  }
  get scaleY() {
    return this.values[3]
  }
  set scaleY(t) {
    this.values[3] = this.y.normalized.scale(t).y
  }
  get skewY() {
    return this.values[2]
  }
  set skewY(t) {
    this.values[2] = t
  }
  get translateX() {
    return this.values[4]
  }
  set translateX(t) {
    this.values[4] = t
  }
  get translateY() {
    return this.values[5]
  }
  set translateY(t) {
    this.values[5] = t
  }
  get rotation() {
    return g.degrees(this.values[0], this.values[1])
  }
  set rotation(t) {
    const e = this.rotate(t - this.rotation)
    ;(this.values[0] = e.values[0]),
      (this.values[1] = e.values[1]),
      (this.values[2] = e.values[2]),
      (this.values[3] = e.values[3])
  }
  get translation() {
    return new g(this.values[4], this.values[5])
  }
  set translation(t) {
    const e = new g(t)
    ;(this.values[4] = e.x), (this.values[5] = e.y)
  }
  get scaling() {
    return new g(this.values[0], this.values[3])
  }
  set scaling(t) {
    const e = new g(t),
      r = new g(this.values[0], this.values[1]).normalized,
      i = new g(this.values[2], this.values[3]).normalized
    ;(this.values[0] = r.x * e.x),
      (this.values[1] = r.y * e.y),
      (this.values[2] = i.x * e.x),
      (this.values[3] = i.y * e.y)
  }
  get inverse() {
    const t = this.values[0],
      e = this.values[1],
      r = this.values[2],
      i = this.values[3],
      a = this.values[4],
      h = this.values[5]
    let c = t * i - e * r
    return c
      ? ((c = 1 / c),
        new st(
          i * c,
          -e * c,
          -r * c,
          t * c,
          (r * h - i * a) * c,
          (e * a - t * h) * c
        ))
      : null
  }
  get determinant() {
    return this.values[0] * this.values[3] - this.values[1] * this.values[2]
  }
  get domMatrix() {
    return new DOMMatrix([
      this.values[0],
      this.values[1],
      this.values[2],
      this.values[3],
      this.values[4],
      this.values[5]
    ])
  }
  constructor(t, e, r, i, a, h) {
    if (((this.values = new Float32Array(6)), arguments.length === 0)) {
      this.values = new Float32Array([1, 0, 0, 1, 0, 0])
      return
    }
    if (arguments.length === 6) {
      ;(this.values[0] = t),
        (this.values[1] = e),
        (this.values[2] = r),
        (this.values[3] = i),
        (this.values[4] = a),
        (this.values[5] = h)
      return
    }
    if (t instanceof DOMMatrix) {
      ;(this.values[0] = t.m11),
        (this.values[1] = t.m12),
        (this.values[2] = t.m21),
        (this.values[3] = t.m22),
        (this.values[4] = t.m41),
        (this.values[5] = t.m42)
      return
    }
    if (t instanceof st) {
      this.values = t.values
      return
    }
    if (Array.isArray(t)) {
      if (t.length === 2) {
        ;(this.values[0] = t[0]),
          (this.values[1] = t[1]),
          (this.values[2] = e[0]),
          (this.values[3] = e[1]),
          (this.values[4] = r[0]),
          (this.values[5] = r[1])
        return
      }
      if (t.length === 3) {
        const k = new g(t[0]),
          I = new g(t[1]),
          J = new g(t[2])
        ;(this.values[0] = k.x),
          (this.values[1] = k.y),
          (this.values[2] = I.x),
          (this.values[3] = I.y),
          (this.values[4] = J.x),
          (this.values[5] = J.y)
        return
      }
      ;(this.values[0] = t[0]),
        (this.values[1] = t[1]),
        (this.values[2] = t[2]),
        (this.values[3] = t[3]),
        (this.values[4] = t[4]),
        (this.values[5] = t[5])
      return
    }
    const c = new g(t),
      b = new g(e),
      y = new g(r)
    ;(this.values[0] = c.x),
      (this.values[1] = c.y),
      (this.values[2] = b.x),
      (this.values[3] = b.y),
      (this.values[4] = y.x),
      (this.values[5] = y.y)
  }
  column(t) {
    return new g(this.values[t * 2], this.values[t * 2 + 1])
  }
  row(t) {
    return [this.values[t], this.values[t + 2], this.values[t + 4]]
  }
  mul(t) {
    const e = this.values[0],
      r = this.values[1],
      i = this.values[2],
      a = this.values[3],
      h = this.values[4],
      c = this.values[5],
      b = t.values[0],
      y = t.values[1],
      k = t.values[2],
      I = t.values[3],
      J = t.values[4],
      tt = t.values[5]
    return new st(
      e * b + i * y,
      r * b + a * y,
      e * k + i * I,
      r * k + a * I,
      e * J + i * tt + h,
      r * J + a * tt + c
    )
  }
  rotate(t, e = !0) {
    e && (t *= ln)
    const r = this.values[0],
      i = this.values[1],
      a = this.values[2],
      h = this.values[3],
      c = this.values[4],
      b = this.values[5],
      y = Math.sin(t),
      k = Math.cos(t)
    return new st(
      r * k + a * y,
      i * k + h * y,
      r * -y + a * k,
      i * -y + h * k,
      c,
      b
    )
  }
  scale(t) {
    const e = new g(t)
    return new st(
      this.values[0] * e.x,
      this.values[1] * e.x,
      this.values[2] * e.y,
      this.values[3] * e.y,
      this.values[4],
      this.values[5]
    )
  }
  mulScalar(t) {
    return new st(
      this.values[0] * t,
      this.values[1] * t,
      this.values[2] * t,
      this.values[3] * t,
      this.values[4] * t,
      this.values[5] * t
    )
  }
  translate(t) {
    const e = new g(t)
    return new st(
      this.values[0],
      this.values[1],
      this.values[2],
      this.values[3],
      this.values[0] * e.x + this.values[2] * e.y + this.values[4],
      this.values[1] * e.x + this.values[3] * e.y + this.values[5]
    )
  }
  add(t) {
    return new st(
      this.values[0] + t.values[0],
      this.values[1] + t.values[1],
      this.values[2] + t.values[2],
      this.values[3] + t.values[3],
      this.values[4] + t.values[4],
      this.values[5] + t.values[5]
    )
  }
  sub(t) {
    return new st(
      this.values[0] - t.values[0],
      this.values[1] - t.values[1],
      this.values[2] - t.values[2],
      this.values[3] - t.values[3],
      this.values[4] - t.values[4],
      this.values[5] - t.values[5]
    )
  }
  toSymbol() {
    return st.symbol
  }
  toUniform(t, e) {
    t.uniformMatrix3fv(e, !1, [
      this.values[0],
      this.values[1],
      0,
      this.values[2],
      this.values[3],
      0,
      this.values[4],
      this.values[5],
      1
    ])
  }
  equals(t, e = Xe) {
    return (
      Math.abs(this.values[0] - t.values[0]) <= e + Number.EPSILON &&
      Math.abs(this.values[1] - t.values[1]) <= e + Number.EPSILON &&
      Math.abs(this.values[2] - t.values[2]) <= e + Number.EPSILON &&
      Math.abs(this.values[3] - t.values[3]) <= e + Number.EPSILON &&
      Math.abs(this.values[4] - t.values[4]) <= e + Number.EPSILON &&
      Math.abs(this.values[5] - t.values[5]) <= e + Number.EPSILON
    )
  }
  exactlyEquals(t) {
    return (
      this.values[0] === t.values[0] &&
      this.values[1] === t.values[1] &&
      this.values[2] === t.values[2] &&
      this.values[3] === t.values[3] &&
      this.values[4] === t.values[4] &&
      this.values[5] === t.values[5]
    )
  }
}
st.symbol = Symbol.for("@motion-canvas/core/types/Matrix2D")
st.identity = new st(1, 0, 0, 1, 0, 0)
st.zero = new st(0, 0, 0, 0, 0, 0)
var di
;(function (n) {
  ;(n[(n.Vertical = 1)] = "Vertical"), (n[(n.Horizontal = 2)] = "Horizontal")
})(di || (di = {}))
var xt
;(function (n) {
  ;(n[(n.Top = 4)] = "Top"),
    (n[(n.Bottom = 8)] = "Bottom"),
    (n[(n.Left = 16)] = "Left"),
    (n[(n.Right = 32)] = "Right")
})(xt || (xt = {}))
var it
;(function (n) {
  ;(n[(n.Middle = 3)] = "Middle"),
    (n[(n.Top = 5)] = "Top"),
    (n[(n.Bottom = 9)] = "Bottom"),
    (n[(n.Left = 18)] = "Left"),
    (n[(n.Right = 34)] = "Right"),
    (n[(n.TopLeft = 20)] = "TopLeft"),
    (n[(n.TopRight = 36)] = "TopRight"),
    (n[(n.BottomLeft = 24)] = "BottomLeft"),
    (n[(n.BottomRight = 40)] = "BottomRight")
})(it || (it = {}))
function qu(n) {
  if (n === it.Middle) return g.zero
  let t = 0
  n & xt.Left ? (t = -1) : n & xt.Right && (t = 1)
  let e = 0
  return n & xt.Top ? (e = -1) : n & xt.Bottom && (e = 1), new g(t, e)
}
class g {
  static createSignal(t, e = g.lerp, r) {
    return new Pi(["x", "y"], (i) => new g(i), t, e, r).toSignal()
  }
  static lerp(t, e, r) {
    let i, a
    return (
      typeof r == "number" ? (i = a = r) : ((i = r.x), (a = r.y)),
      new g(Q(t.x, e.x, i), Q(t.y, e.y, a))
    )
  }
  static arcLerp(t, e, r, i = !1, a) {
    return a ?? (a = t.sub(e).ctg), g.lerp(t, e, Ri(r, i, a))
  }
  static createArcLerp(t, e) {
    return (r, i, a) => g.arcLerp(r, i, a, t, e)
  }
  static polarLerp(t, e, r, i = !1, a = g.zero) {
    ;(t = t.sub(a)), (e = e.sub(a))
    const h = t.degrees
    let c = e.degrees
    h > c !== i && (c = c + (i ? -360 : 360))
    const y = Q(h, c, r) * ln,
      k = Q(t.magnitude, e.magnitude, r)
    return new g(k * Math.cos(y) + a.x, k * Math.sin(y) + a.y)
  }
  static createPolarLerp(t = !1, e = g.zero) {
    return (r, i, a) => g.polarLerp(r, i, a, t, new g(e))
  }
  static fromOrigin(t) {
    const e = new g()
    return (
      t === it.Middle ||
        (t & xt.Left ? (e.x = -1) : t & xt.Right && (e.x = 1),
        t & xt.Top ? (e.y = -1) : t & xt.Bottom && (e.y = 1)),
      e
    )
  }
  static fromScalar(t) {
    return new g(t, t)
  }
  static fromRadians(t) {
    return new g(Math.cos(t), Math.sin(t))
  }
  static fromDegrees(t) {
    return g.fromRadians(t * ln)
  }
  static radians(t, e) {
    return Math.atan2(e, t)
  }
  static degrees(t, e) {
    return g.radians(t, e) * mu
  }
  static magnitude(t, e) {
    return Math.sqrt(t * t + e * e)
  }
  static squaredMagnitude(t, e) {
    return t * t + e * e
  }
  static angleBetween(t, e) {
    return (
      Math.acos(wt(-1, 1, t.dot(e) / (t.magnitude * e.magnitude))) *
      (t.cross(e) >= 0 ? 1 : -1)
    )
  }
  get width() {
    return this.x
  }
  set width(t) {
    this.x = t
  }
  get height() {
    return this.y
  }
  set height(t) {
    this.y = t
  }
  get magnitude() {
    return g.magnitude(this.x, this.y)
  }
  get squaredMagnitude() {
    return g.squaredMagnitude(this.x, this.y)
  }
  get normalized() {
    return this.scale(1 / g.magnitude(this.x, this.y))
  }
  get safe() {
    return new g(isNaN(this.x) ? 0 : this.x, isNaN(this.y) ? 0 : this.y)
  }
  get flipped() {
    return new g(-this.x, -this.y)
  }
  get floored() {
    return new g(Math.floor(this.x), Math.floor(this.y))
  }
  get rounded() {
    return new g(Math.round(this.x), Math.round(this.y))
  }
  get ceiled() {
    return new g(Math.ceil(this.x), Math.ceil(this.y))
  }
  get perpendicular() {
    return new g(this.y, -this.x)
  }
  get radians() {
    return g.radians(this.x, this.y)
  }
  get degrees() {
    return g.degrees(this.x, this.y)
  }
  get ctg() {
    return this.x / this.y
  }
  constructor(t, e) {
    if (((this.x = 0), (this.y = 0), t != null)) {
      if (typeof t != "object") {
        ;(this.x = t), (this.y = e ?? t)
        return
      }
      if (Array.isArray(t)) {
        ;(this.x = t[0]), (this.y = t[1])
        return
      }
      if ("width" in t) {
        ;(this.x = t.width), (this.y = t.height)
        return
      }
      ;(this.x = t.x), (this.y = t.y)
    }
  }
  lerp(t, e) {
    return g.lerp(this, t, e)
  }
  getOriginOffset(t) {
    const e = g.fromOrigin(t)
    return (e.x *= this.x / 2), (e.y *= this.y / 2), e
  }
  scale(t) {
    return new g(this.x * t, this.y * t)
  }
  transformAsPoint(t) {
    const e = new st(t)
    return new g(
      this.x * e.scaleX + this.y * e.skewY + e.translateX,
      this.x * e.skewX + this.y * e.scaleY + e.translateY
    )
  }
  transform(t) {
    const e = new st(t)
    return new g(
      this.x * e.scaleX + this.y * e.skewY,
      this.x * e.skewX + this.y * e.scaleY
    )
  }
  mul(t) {
    const e = new g(t)
    return new g(this.x * e.x, this.y * e.y)
  }
  div(t) {
    const e = new g(t)
    return new g(this.x / e.x, this.y / e.y)
  }
  add(t) {
    const e = new g(t)
    return new g(this.x + e.x, this.y + e.y)
  }
  sub(t) {
    const e = new g(t)
    return new g(this.x - e.x, this.y - e.y)
  }
  dot(t) {
    const e = new g(t)
    return this.x * e.x + this.y * e.y
  }
  cross(t) {
    const e = new g(t)
    return this.x * e.y - this.y * e.x
  }
  mod(t) {
    const e = new g(t)
    return new g(this.x % e.x, this.y % e.y)
  }
  rotate(t, e = g.zero) {
    const r = new g(e),
      i = st.fromTranslation(r).rotate(t).translate(r.flipped)
    return this.transformAsPoint(i)
  }
  addX(t) {
    return new g(this.x + t, this.y)
  }
  addY(t) {
    return new g(this.x, this.y + t)
  }
  map(t) {
    return new g(t(this.x, 0), t(this.y, 1))
  }
  toSymbol() {
    return g.symbol
  }
  toString() {
    return `Vector2(${this.x}, ${this.y})`
  }
  toArray() {
    return [this.x, this.y]
  }
  toUniform(t, e) {
    t.uniform2f(e, this.x, this.y)
  }
  serialize() {
    return { x: this.x, y: this.y }
  }
  exactlyEquals(t) {
    return this.x === t.x && this.y === t.y
  }
  equals(t, e = Xe) {
    return (
      Math.abs(this.x - t.x) <= e + Number.EPSILON &&
      Math.abs(this.y - t.y) <= e + Number.EPSILON
    )
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y
  }
}
g.symbol = Symbol.for("@motion-canvas/core/types/Vector2")
g.zero = new g()
g.one = new g(1, 1)
g.right = new g(1, 0)
g.left = new g(-1, 0)
g.up = new g(0, 1)
g.down = new g(0, -1)
g.top = new g(0, -1)
g.bottom = new g(0, 1)
g.topLeft = new g(-1, -1)
g.topRight = new g(1, -1)
g.bottomLeft = new g(-1, 1)
g.bottomRight = new g(1, 1)
class H {
  static createSignal(t, e = H.lerp) {
    return new Sr(
      ["x", "y", "width", "height"],
      (r) => new H(r),
      t,
      e
    ).toSignal()
  }
  static lerp(t, e, r) {
    let i, a, h, c
    return (
      typeof r == "number"
        ? (i = a = h = c = r)
        : r instanceof g
        ? ((i = h = r.x), (a = c = r.y))
        : ((i = r.x), (a = r.y), (h = r.width), (c = r.height)),
      new H(
        Q(t.x, e.x, i),
        Q(t.y, e.y, a),
        Q(t.width, e.width, h),
        Q(t.height, e.height, c)
      )
    )
  }
  static arcLerp(t, e, r, i = !1, a) {
    return (
      a ?? (a = (t.position.sub(e.position).ctg + t.size.sub(e.size).ctg) / 2),
      H.lerp(t, e, Ri(r, i, a))
    )
  }
  static fromSizeCentered(t) {
    return new H(-t.width / 2, -t.height / 2, t.width, t.height)
  }
  static fromPoints(...t) {
    let e = 1 / 0,
      r = 1 / 0,
      i = -1 / 0,
      a = -1 / 0
    for (const h of t)
      h.x > i && (i = h.x),
        h.x < e && (e = h.x),
        h.y > a && (a = h.y),
        h.y < r && (r = h.y)
    return new H(e, r, i - e, a - r)
  }
  static fromBBoxes(...t) {
    let e = 1 / 0,
      r = 1 / 0,
      i = -1 / 0,
      a = -1 / 0
    for (const h of t) {
      const c = h.x + h.width
      c > i && (i = c), h.x < e && (e = h.x)
      const b = h.y + h.height
      b > a && (a = b), h.y < r && (r = h.y)
    }
    return new H(e, r, i - e, a - r)
  }
  lerp(t, e) {
    return H.lerp(this, t, e)
  }
  get position() {
    return new g(this.x, this.y)
  }
  set position(t) {
    ;(this.x = t.x), (this.y = t.y)
  }
  get size() {
    return new g(this.width, this.height)
  }
  get center() {
    return new g(this.x + this.width / 2, this.y + this.height / 2)
  }
  get left() {
    return this.x
  }
  set left(t) {
    ;(this.width += this.x - t), (this.x = t)
  }
  get right() {
    return this.x + this.width
  }
  set right(t) {
    this.width = t - this.x
  }
  get top() {
    return this.y
  }
  set top(t) {
    ;(this.height += this.y - t), (this.y = t)
  }
  get bottom() {
    return this.y + this.height
  }
  set bottom(t) {
    this.height = t - this.y
  }
  get topLeft() {
    return this.position
  }
  get topRight() {
    return new g(this.x + this.width, this.y)
  }
  get bottomLeft() {
    return new g(this.x, this.y + this.height)
  }
  get bottomRight() {
    return new g(this.x + this.width, this.y + this.height)
  }
  get corners() {
    return [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft]
  }
  get pixelPerfect() {
    return new H(
      Math.floor(this.x),
      Math.floor(this.y),
      Math.ceil(this.width + 1),
      Math.ceil(this.height + 1)
    )
  }
  constructor(t, e = 0, r = 0, i = 0) {
    if (
      ((this.x = 0),
      (this.y = 0),
      (this.width = 0),
      (this.height = 0),
      t != null)
    ) {
      if (typeof t == "number") {
        ;(this.x = t), (this.y = e), (this.width = r), (this.height = i)
        return
      }
      if (t instanceof g) {
        ;(this.x = t.x),
          (this.y = t.y),
          e instanceof g && ((this.width = e.x), (this.height = e.y))
        return
      }
      if (Array.isArray(t)) {
        ;(this.x = t[0]),
          (this.y = t[1]),
          (this.width = t[2]),
          (this.height = t[3])
        return
      }
      ;(this.x = t.x),
        (this.y = t.y),
        (this.width = t.width),
        (this.height = t.height)
    }
  }
  transform(t) {
    return new H(this.position.transformAsPoint(t), this.size.transform(t))
  }
  transformCorners(t) {
    return this.corners.map((e) => e.transformAsPoint(t))
  }
  expand(t) {
    const e = new At(t),
      r = new H(this)
    return (
      (r.left -= e.left),
      (r.top -= e.top),
      (r.right += e.right),
      (r.bottom += e.bottom),
      r
    )
  }
  addSpacing(t) {
    return this.expand(t)
  }
  includes(t) {
    return (
      t.x >= this.x &&
      t.x <= this.x + this.width &&
      t.y >= this.y &&
      t.y <= this.y + this.height
    )
  }
  intersects(t) {
    return (
      this.left < t.right &&
      this.right > t.left &&
      this.top < t.bottom &&
      this.bottom > t.top
    )
  }
  intersection(t) {
    const e = new H()
    return (
      this.intersects(t) &&
        ((e.left = Math.max(this.left, t.left)),
        (e.top = Math.max(this.top, t.top)),
        (e.right = Math.min(this.right, t.right)),
        (e.bottom = Math.min(this.bottom, t.bottom))),
      e
    )
  }
  union(t) {
    const e = new H()
    return (
      (e.left = Math.min(this.left, t.left)),
      (e.top = Math.min(this.top, t.top)),
      (e.right = Math.max(this.right, t.right)),
      (e.bottom = Math.max(this.bottom, t.bottom)),
      e
    )
  }
  toSymbol() {
    return H.symbol
  }
  toString() {
    return `BBox(${this.x}, ${this.y}, ${this.width}, ${this.height})`
  }
  toUniform(t, e) {
    t.uniform4f(e, this.x, this.y, this.width, this.height)
  }
  serialize() {
    return { x: this.x, y: this.y, width: this.width, height: this.height }
  }
}
H.symbol = Symbol.for("@motion-canvas/core/types/Rect")
var Xu =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Mi = { exports: {} }
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */ ;(function (n, t) {
  ;(function (e, r) {
    n.exports = r()
  })(Xu, function () {
    for (
      var e = function (s, o, l) {
          return (
            o === void 0 && (o = 0),
            l === void 0 && (l = 1),
            s < o ? o : s > l ? l : s
          )
        },
        r = e,
        i = function (s) {
          ;(s._clipped = !1), (s._unclipped = s.slice(0))
          for (var o = 0; o <= 3; o++)
            o < 3
              ? ((s[o] < 0 || s[o] > 255) && (s._clipped = !0),
                (s[o] = r(s[o], 0, 255)))
              : o === 3 && (s[o] = r(s[o], 0, 1))
          return s
        },
        a = {},
        h = 0,
        c = [
          "Boolean",
          "Number",
          "String",
          "Function",
          "Array",
          "Date",
          "RegExp",
          "Undefined",
          "Null"
        ];
      h < c.length;
      h += 1
    ) {
      var b = c[h]
      a["[object " + b + "]"] = b.toLowerCase()
    }
    var y = function (s) {
        return a[Object.prototype.toString.call(s)] || "object"
      },
      k = y,
      I = function (s, o) {
        return (
          o === void 0 && (o = null),
          s.length >= 3
            ? Array.prototype.slice.call(s)
            : k(s[0]) == "object" && o
            ? o
                .split("")
                .filter(function (l) {
                  return s[0][l] !== void 0
                })
                .map(function (l) {
                  return s[0][l]
                })
            : s[0]
        )
      },
      J = y,
      tt = function (s) {
        if (s.length < 2) return null
        var o = s.length - 1
        return J(s[o]) == "string" ? s[o].toLowerCase() : null
      },
      at = Math.PI,
      S = {
        clip_rgb: i,
        limit: e,
        type: y,
        unpack: I,
        last: tt,
        PI: at,
        TWOPI: at * 2,
        PITHIRD: at / 3,
        DEG2RAD: at / 180,
        RAD2DEG: 180 / at
      },
      rt = { format: {}, autodetect: [] },
      Pt = S.last,
      nt = S.clip_rgb,
      Be = S.type,
      Et = rt,
      Pn = function () {
        for (var o = [], l = arguments.length; l--; ) o[l] = arguments[l]
        var u = this
        if (
          Be(o[0]) === "object" &&
          o[0].constructor &&
          o[0].constructor === this.constructor
        )
          return o[0]
        var d = Pt(o),
          p = !1
        if (!d) {
          ;(p = !0),
            Et.sorted ||
              ((Et.autodetect = Et.autodetect.sort(function (x, R) {
                return R.p - x.p
              })),
              (Et.sorted = !0))
          for (var f = 0, v = Et.autodetect; f < v.length; f += 1) {
            var m = v[f]
            if (((d = m.test.apply(m, o)), d)) break
          }
        }
        if (Et.format[d]) {
          var w = Et.format[d].apply(null, p ? o : o.slice(0, -1))
          u._rgb = nt(w)
        } else throw new Error("unknown format: " + o)
        u._rgb.length === 3 && u._rgb.push(1)
      }
    Pn.prototype.toString = function () {
      return Be(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var D = Pn,
      nr = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(nr.Color, [null].concat(s)))()
      }
    ;(nr.Color = D), (nr.version = "2.4.2")
    var lt = nr,
      zi = S.unpack,
      Mn = Math.max,
      Ii = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = zi(s, "rgb"),
          u = l[0],
          d = l[1],
          p = l[2]
        ;(u = u / 255), (d = d / 255), (p = p / 255)
        var f = 1 - Mn(u, Mn(d, p)),
          v = f < 1 ? 1 / (1 - f) : 0,
          m = (1 - u - f) * v,
          w = (1 - d - f) * v,
          x = (1 - p - f) * v
        return [m, w, x, f]
      },
      Ei = Ii,
      _i = S.unpack,
      Di = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        s = _i(s, "cmyk")
        var l = s[0],
          u = s[1],
          d = s[2],
          p = s[3],
          f = s.length > 4 ? s[4] : 1
        return p === 1
          ? [0, 0, 0, f]
          : [
              l >= 1 ? 0 : 255 * (1 - l) * (1 - p),
              u >= 1 ? 0 : 255 * (1 - u) * (1 - p),
              d >= 1 ? 0 : 255 * (1 - d) * (1 - p),
              f
            ]
      },
      ji = Di,
      Ni = lt,
      Ln = D,
      $n = rt,
      Bi = S.unpack,
      Wi = S.type,
      Ui = Ei
    ;(Ln.prototype.cmyk = function () {
      return Ui(this._rgb)
    }),
      (Ni.cmyk = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Ln,
          [null].concat(s, ["cmyk"])
        ))()
      }),
      ($n.format.cmyk = ji),
      $n.autodetect.push({
        p: 2,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (((s = Bi(s, "cmyk")), Wi(s) === "array" && s.length === 4))
            return "cmyk"
        }
      })
    var Gi = S.unpack,
      qi = S.last,
      Lr = function (s) {
        return Math.round(s * 100) / 100
      },
      Xi = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = Gi(s, "hsla"),
          u = qi(s) || "lsa"
        return (
          (l[0] = Lr(l[0] || 0)),
          (l[1] = Lr(l[1] * 100) + "%"),
          (l[2] = Lr(l[2] * 100) + "%"),
          u === "hsla" || (l.length > 3 && l[3] < 1)
            ? ((l[3] = l.length > 3 ? l[3] : 1), (u = "hsla"))
            : (l.length = 3),
          u + "(" + l.join(",") + ")"
        )
      },
      Hi = Xi,
      Yi = S.unpack,
      Zi = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        s = Yi(s, "rgba")
        var l = s[0],
          u = s[1],
          d = s[2]
        ;(l /= 255), (u /= 255), (d /= 255)
        var p = Math.min(l, u, d),
          f = Math.max(l, u, d),
          v = (f + p) / 2,
          m,
          w
        return (
          f === p
            ? ((m = 0), (w = Number.NaN))
            : (m = v < 0.5 ? (f - p) / (f + p) : (f - p) / (2 - f - p)),
          l == f
            ? (w = (u - d) / (f - p))
            : u == f
            ? (w = 2 + (d - l) / (f - p))
            : d == f && (w = 4 + (l - u) / (f - p)),
          (w *= 60),
          w < 0 && (w += 360),
          s.length > 3 && s[3] !== void 0 ? [w, m, v, s[3]] : [w, m, v]
        )
      },
      On = Zi,
      Ji = S.unpack,
      Vi = S.last,
      Qi = Hi,
      Ki = On,
      $r = Math.round,
      ta = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = Ji(s, "rgba"),
          u = Vi(s) || "rgb"
        return u.substr(0, 3) == "hsl"
          ? Qi(Ki(l), u)
          : ((l[0] = $r(l[0])),
            (l[1] = $r(l[1])),
            (l[2] = $r(l[2])),
            (u === "rgba" || (l.length > 3 && l[3] < 1)) &&
              ((l[3] = l.length > 3 ? l[3] : 1), (u = "rgba")),
            u + "(" + l.slice(0, u === "rgb" ? 3 : 4).join(",") + ")")
      },
      ea = ta,
      ra = S.unpack,
      Or = Math.round,
      na = function () {
        for (var s, o = [], l = arguments.length; l--; ) o[l] = arguments[l]
        o = ra(o, "hsl")
        var u = o[0],
          d = o[1],
          p = o[2],
          f,
          v,
          m
        if (d === 0) f = v = m = p * 255
        else {
          var w = [0, 0, 0],
            x = [0, 0, 0],
            R = p < 0.5 ? p * (1 + d) : p + d - p * d,
            T = 2 * p - R,
            L = u / 360
          ;(w[0] = L + 1 / 3), (w[1] = L), (w[2] = L - 1 / 3)
          for (var M = 0; M < 3; M++)
            w[M] < 0 && (w[M] += 1),
              w[M] > 1 && (w[M] -= 1),
              6 * w[M] < 1
                ? (x[M] = T + (R - T) * 6 * w[M])
                : 2 * w[M] < 1
                ? (x[M] = R)
                : 3 * w[M] < 2
                ? (x[M] = T + (R - T) * (2 / 3 - w[M]) * 6)
                : (x[M] = T)
          ;(s = [Or(x[0] * 255), Or(x[1] * 255), Or(x[2] * 255)]),
            (f = s[0]),
            (v = s[1]),
            (m = s[2])
        }
        return o.length > 3 ? [f, v, m, o[3]] : [f, v, m, 1]
      },
      An = na,
      Fn = An,
      zn = rt,
      In = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      En =
        /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      _n =
        /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Dn =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      jn =
        /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Nn =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Bn = Math.round,
      Wn = function (s) {
        s = s.toLowerCase().trim()
        var o
        if (zn.format.named)
          try {
            return zn.format.named(s)
          } catch {}
        if ((o = s.match(In))) {
          for (var l = o.slice(1, 4), u = 0; u < 3; u++) l[u] = +l[u]
          return (l[3] = 1), l
        }
        if ((o = s.match(En))) {
          for (var d = o.slice(1, 5), p = 0; p < 4; p++) d[p] = +d[p]
          return d
        }
        if ((o = s.match(_n))) {
          for (var f = o.slice(1, 4), v = 0; v < 3; v++) f[v] = Bn(f[v] * 2.55)
          return (f[3] = 1), f
        }
        if ((o = s.match(Dn))) {
          for (var m = o.slice(1, 5), w = 0; w < 3; w++) m[w] = Bn(m[w] * 2.55)
          return (m[3] = +m[3]), m
        }
        if ((o = s.match(jn))) {
          var x = o.slice(1, 4)
          ;(x[1] *= 0.01), (x[2] *= 0.01)
          var R = Fn(x)
          return (R[3] = 1), R
        }
        if ((o = s.match(Nn))) {
          var T = o.slice(1, 4)
          ;(T[1] *= 0.01), (T[2] *= 0.01)
          var L = Fn(T)
          return (L[3] = +o[4]), L
        }
      }
    Wn.test = function (s) {
      return (
        In.test(s) ||
        En.test(s) ||
        _n.test(s) ||
        Dn.test(s) ||
        jn.test(s) ||
        Nn.test(s)
      )
    }
    var sa = Wn,
      ia = lt,
      Un = D,
      Gn = rt,
      aa = S.type,
      oa = ea,
      qn = sa
    ;(Un.prototype.css = function (s) {
      return oa(this._rgb, s)
    }),
      (ia.css = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Un,
          [null].concat(s, ["css"])
        ))()
      }),
      (Gn.format.css = qn),
      Gn.autodetect.push({
        p: 5,
        test: function (s) {
          for (var o = [], l = arguments.length - 1; l-- > 0; )
            o[l] = arguments[l + 1]
          if (!o.length && aa(s) === "string" && qn.test(s)) return "css"
        }
      })
    var Xn = D,
      la = lt,
      ha = rt,
      ua = S.unpack
    ;(ha.format.gl = function () {
      for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
      var l = ua(s, "rgba")
      return (l[0] *= 255), (l[1] *= 255), (l[2] *= 255), l
    }),
      (la.gl = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Xn,
          [null].concat(s, ["gl"])
        ))()
      }),
      (Xn.prototype.gl = function () {
        var s = this._rgb
        return [s[0] / 255, s[1] / 255, s[2] / 255, s[3]]
      })
    var ca = S.unpack,
      fa = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = ca(s, "rgb"),
          u = l[0],
          d = l[1],
          p = l[2],
          f = Math.min(u, d, p),
          v = Math.max(u, d, p),
          m = v - f,
          w = (m * 100) / 255,
          x = (f / (255 - m)) * 100,
          R
        return (
          m === 0
            ? (R = Number.NaN)
            : (u === v && (R = (d - p) / m),
              d === v && (R = 2 + (p - u) / m),
              p === v && (R = 4 + (u - d) / m),
              (R *= 60),
              R < 0 && (R += 360)),
          [R, w, x]
        )
      },
      da = fa,
      pa = S.unpack,
      ga = Math.floor,
      va = function () {
        for (var s, o, l, u, d, p, f = [], v = arguments.length; v--; )
          f[v] = arguments[v]
        f = pa(f, "hcg")
        var m = f[0],
          w = f[1],
          x = f[2],
          R,
          T,
          L
        x = x * 255
        var M = w * 255
        if (w === 0) R = T = L = x
        else {
          m === 360 && (m = 0),
            m > 360 && (m -= 360),
            m < 0 && (m += 360),
            (m /= 60)
          var j = ga(m),
            W = m - j,
            G = x * (1 - w),
            X = G + M * (1 - W),
            dt = G + M * W,
            ft = G + M
          switch (j) {
            case 0:
              ;(s = [ft, dt, G]), (R = s[0]), (T = s[1]), (L = s[2])
              break
            case 1:
              ;(o = [X, ft, G]), (R = o[0]), (T = o[1]), (L = o[2])
              break
            case 2:
              ;(l = [G, ft, dt]), (R = l[0]), (T = l[1]), (L = l[2])
              break
            case 3:
              ;(u = [G, X, ft]), (R = u[0]), (T = u[1]), (L = u[2])
              break
            case 4:
              ;(d = [dt, G, ft]), (R = d[0]), (T = d[1]), (L = d[2])
              break
            case 5:
              ;(p = [ft, G, X]), (R = p[0]), (T = p[1]), (L = p[2])
              break
          }
        }
        return [R, T, L, f.length > 3 ? f[3] : 1]
      },
      ma = va,
      ba = S.unpack,
      ya = S.type,
      wa = lt,
      Hn = D,
      Yn = rt,
      xa = da
    ;(Hn.prototype.hcg = function () {
      return xa(this._rgb)
    }),
      (wa.hcg = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Hn,
          [null].concat(s, ["hcg"])
        ))()
      }),
      (Yn.format.hcg = ma),
      Yn.autodetect.push({
        p: 1,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (((s = ba(s, "hcg")), ya(s) === "array" && s.length === 3))
            return "hcg"
        }
      })
    var Ta = S.unpack,
      Ca = S.last,
      sr = Math.round,
      ka = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = Ta(s, "rgba"),
          u = l[0],
          d = l[1],
          p = l[2],
          f = l[3],
          v = Ca(s) || "auto"
        f === void 0 && (f = 1),
          v === "auto" && (v = f < 1 ? "rgba" : "rgb"),
          (u = sr(u)),
          (d = sr(d)),
          (p = sr(p))
        var m = (u << 16) | (d << 8) | p,
          w = "000000" + m.toString(16)
        w = w.substr(w.length - 6)
        var x = "0" + sr(f * 255).toString(16)
        switch (((x = x.substr(x.length - 2)), v.toLowerCase())) {
          case "rgba":
            return "#" + w + x
          case "argb":
            return "#" + x + w
          default:
            return "#" + w
        }
      },
      Zn = ka,
      Sa = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      Ra = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      Pa = function (s) {
        if (s.match(Sa)) {
          ;(s.length === 4 || s.length === 7) && (s = s.substr(1)),
            s.length === 3 &&
              ((s = s.split("")), (s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2]))
          var o = parseInt(s, 16),
            l = o >> 16,
            u = (o >> 8) & 255,
            d = o & 255
          return [l, u, d, 1]
        }
        if (s.match(Ra)) {
          ;(s.length === 5 || s.length === 9) && (s = s.substr(1)),
            s.length === 4 &&
              ((s = s.split("")),
              (s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2] + s[3] + s[3]))
          var p = parseInt(s, 16),
            f = (p >> 24) & 255,
            v = (p >> 16) & 255,
            m = (p >> 8) & 255,
            w = Math.round(((p & 255) / 255) * 100) / 100
          return [f, v, m, w]
        }
        throw new Error("unknown hex color: " + s)
      },
      Jn = Pa,
      Ma = lt,
      Vn = D,
      La = S.type,
      Qn = rt,
      $a = Zn
    ;(Vn.prototype.hex = function (s) {
      return $a(this._rgb, s)
    }),
      (Ma.hex = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Vn,
          [null].concat(s, ["hex"])
        ))()
      }),
      (Qn.format.hex = Jn),
      Qn.autodetect.push({
        p: 4,
        test: function (s) {
          for (var o = [], l = arguments.length - 1; l-- > 0; )
            o[l] = arguments[l + 1]
          if (
            !o.length &&
            La(s) === "string" &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(s.length) >= 0
          )
            return "hex"
        }
      })
    var Oa = S.unpack,
      Kn = S.TWOPI,
      Aa = Math.min,
      Fa = Math.sqrt,
      za = Math.acos,
      Ia = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = Oa(s, "rgb"),
          u = l[0],
          d = l[1],
          p = l[2]
        ;(u /= 255), (d /= 255), (p /= 255)
        var f,
          v = Aa(u, d, p),
          m = (u + d + p) / 3,
          w = m > 0 ? 1 - v / m : 0
        return (
          w === 0
            ? (f = NaN)
            : ((f = (u - d + (u - p)) / 2),
              (f /= Fa((u - d) * (u - d) + (u - p) * (d - p))),
              (f = za(f)),
              p > d && (f = Kn - f),
              (f /= Kn)),
          [f * 360, w, m]
        )
      },
      Ea = Ia,
      _a = S.unpack,
      Ar = S.limit,
      Se = S.TWOPI,
      Fr = S.PITHIRD,
      Re = Math.cos,
      Da = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        s = _a(s, "hsi")
        var l = s[0],
          u = s[1],
          d = s[2],
          p,
          f,
          v
        return (
          isNaN(l) && (l = 0),
          isNaN(u) && (u = 0),
          l > 360 && (l -= 360),
          l < 0 && (l += 360),
          (l /= 360),
          l < 1 / 3
            ? ((v = (1 - u) / 3),
              (p = (1 + (u * Re(Se * l)) / Re(Fr - Se * l)) / 3),
              (f = 1 - (v + p)))
            : l < 2 / 3
            ? ((l -= 1 / 3),
              (p = (1 - u) / 3),
              (f = (1 + (u * Re(Se * l)) / Re(Fr - Se * l)) / 3),
              (v = 1 - (p + f)))
            : ((l -= 2 / 3),
              (f = (1 - u) / 3),
              (v = (1 + (u * Re(Se * l)) / Re(Fr - Se * l)) / 3),
              (p = 1 - (f + v))),
          (p = Ar(d * p * 3)),
          (f = Ar(d * f * 3)),
          (v = Ar(d * v * 3)),
          [p * 255, f * 255, v * 255, s.length > 3 ? s[3] : 1]
        )
      },
      ja = Da,
      Na = S.unpack,
      Ba = S.type,
      Wa = lt,
      ts = D,
      es = rt,
      Ua = Ea
    ;(ts.prototype.hsi = function () {
      return Ua(this._rgb)
    }),
      (Wa.hsi = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ts,
          [null].concat(s, ["hsi"])
        ))()
      }),
      (es.format.hsi = ja),
      es.autodetect.push({
        p: 2,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (((s = Na(s, "hsi")), Ba(s) === "array" && s.length === 3))
            return "hsi"
        }
      })
    var Ga = S.unpack,
      qa = S.type,
      Xa = lt,
      rs = D,
      ns = rt,
      Ha = On
    ;(rs.prototype.hsl = function () {
      return Ha(this._rgb)
    }),
      (Xa.hsl = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          rs,
          [null].concat(s, ["hsl"])
        ))()
      }),
      (ns.format.hsl = An),
      ns.autodetect.push({
        p: 2,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (((s = Ga(s, "hsl")), qa(s) === "array" && s.length === 3))
            return "hsl"
        }
      })
    var Ya = S.unpack,
      Za = Math.min,
      Ja = Math.max,
      Va = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        s = Ya(s, "rgb")
        var l = s[0],
          u = s[1],
          d = s[2],
          p = Za(l, u, d),
          f = Ja(l, u, d),
          v = f - p,
          m,
          w,
          x
        return (
          (x = f / 255),
          f === 0
            ? ((m = Number.NaN), (w = 0))
            : ((w = v / f),
              l === f && (m = (u - d) / v),
              u === f && (m = 2 + (d - l) / v),
              d === f && (m = 4 + (l - u) / v),
              (m *= 60),
              m < 0 && (m += 360)),
          [m, w, x]
        )
      },
      Qa = Va,
      Ka = S.unpack,
      to = Math.floor,
      eo = function () {
        for (var s, o, l, u, d, p, f = [], v = arguments.length; v--; )
          f[v] = arguments[v]
        f = Ka(f, "hsv")
        var m = f[0],
          w = f[1],
          x = f[2],
          R,
          T,
          L
        if (((x *= 255), w === 0)) R = T = L = x
        else {
          m === 360 && (m = 0),
            m > 360 && (m -= 360),
            m < 0 && (m += 360),
            (m /= 60)
          var M = to(m),
            j = m - M,
            W = x * (1 - w),
            G = x * (1 - w * j),
            X = x * (1 - w * (1 - j))
          switch (M) {
            case 0:
              ;(s = [x, X, W]), (R = s[0]), (T = s[1]), (L = s[2])
              break
            case 1:
              ;(o = [G, x, W]), (R = o[0]), (T = o[1]), (L = o[2])
              break
            case 2:
              ;(l = [W, x, X]), (R = l[0]), (T = l[1]), (L = l[2])
              break
            case 3:
              ;(u = [W, G, x]), (R = u[0]), (T = u[1]), (L = u[2])
              break
            case 4:
              ;(d = [X, W, x]), (R = d[0]), (T = d[1]), (L = d[2])
              break
            case 5:
              ;(p = [x, W, G]), (R = p[0]), (T = p[1]), (L = p[2])
              break
          }
        }
        return [R, T, L, f.length > 3 ? f[3] : 1]
      },
      ro = eo,
      no = S.unpack,
      so = S.type,
      io = lt,
      ss = D,
      is = rt,
      ao = Qa
    ;(ss.prototype.hsv = function () {
      return ao(this._rgb)
    }),
      (io.hsv = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ss,
          [null].concat(s, ["hsv"])
        ))()
      }),
      (is.format.hsv = ro),
      is.autodetect.push({
        p: 2,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (((s = no(s, "hsv")), so(s) === "array" && s.length === 3))
            return "hsv"
        }
      })
    var ir = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452
      },
      Pe = ir,
      oo = S.unpack,
      as = Math.pow,
      lo = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = oo(s, "rgb"),
          u = l[0],
          d = l[1],
          p = l[2],
          f = ho(u, d, p),
          v = f[0],
          m = f[1],
          w = f[2],
          x = 116 * m - 16
        return [x < 0 ? 0 : x, 500 * (v - m), 200 * (m - w)]
      },
      zr = function (s) {
        return (s /= 255) <= 0.04045 ? s / 12.92 : as((s + 0.055) / 1.055, 2.4)
      },
      Ir = function (s) {
        return s > Pe.t3 ? as(s, 1 / 3) : s / Pe.t2 + Pe.t0
      },
      ho = function (s, o, l) {
        ;(s = zr(s)), (o = zr(o)), (l = zr(l))
        var u = Ir((0.4124564 * s + 0.3575761 * o + 0.1804375 * l) / Pe.Xn),
          d = Ir((0.2126729 * s + 0.7151522 * o + 0.072175 * l) / Pe.Yn),
          p = Ir((0.0193339 * s + 0.119192 * o + 0.9503041 * l) / Pe.Zn)
        return [u, d, p]
      },
      os = lo,
      Me = ir,
      uo = S.unpack,
      co = Math.pow,
      fo = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        s = uo(s, "lab")
        var l = s[0],
          u = s[1],
          d = s[2],
          p,
          f,
          v,
          m,
          w,
          x
        return (
          (f = (l + 16) / 116),
          (p = isNaN(u) ? f : f + u / 500),
          (v = isNaN(d) ? f : f - d / 200),
          (f = Me.Yn * _r(f)),
          (p = Me.Xn * _r(p)),
          (v = Me.Zn * _r(v)),
          (m = Er(3.2404542 * p - 1.5371385 * f - 0.4985314 * v)),
          (w = Er(-0.969266 * p + 1.8760108 * f + 0.041556 * v)),
          (x = Er(0.0556434 * p - 0.2040259 * f + 1.0572252 * v)),
          [m, w, x, s.length > 3 ? s[3] : 1]
        )
      },
      Er = function (s) {
        return 255 * (s <= 0.00304 ? 12.92 * s : 1.055 * co(s, 1 / 2.4) - 0.055)
      },
      _r = function (s) {
        return s > Me.t1 ? s * s * s : Me.t2 * (s - Me.t0)
      },
      ls = fo,
      po = S.unpack,
      go = S.type,
      vo = lt,
      hs = D,
      us = rt,
      mo = os
    ;(hs.prototype.lab = function () {
      return mo(this._rgb)
    }),
      (vo.lab = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          hs,
          [null].concat(s, ["lab"])
        ))()
      }),
      (us.format.lab = ls),
      us.autodetect.push({
        p: 2,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (((s = po(s, "lab")), go(s) === "array" && s.length === 3))
            return "lab"
        }
      })
    var bo = S.unpack,
      yo = S.RAD2DEG,
      wo = Math.sqrt,
      xo = Math.atan2,
      To = Math.round,
      Co = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = bo(s, "lab"),
          u = l[0],
          d = l[1],
          p = l[2],
          f = wo(d * d + p * p),
          v = (xo(p, d) * yo + 360) % 360
        return To(f * 1e4) === 0 && (v = Number.NaN), [u, f, v]
      },
      cs = Co,
      ko = S.unpack,
      So = os,
      Ro = cs,
      Po = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = ko(s, "rgb"),
          u = l[0],
          d = l[1],
          p = l[2],
          f = So(u, d, p),
          v = f[0],
          m = f[1],
          w = f[2]
        return Ro(v, m, w)
      },
      Mo = Po,
      Lo = S.unpack,
      $o = S.DEG2RAD,
      Oo = Math.sin,
      Ao = Math.cos,
      Fo = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = Lo(s, "lch"),
          u = l[0],
          d = l[1],
          p = l[2]
        return isNaN(p) && (p = 0), (p = p * $o), [u, Ao(p) * d, Oo(p) * d]
      },
      fs = Fo,
      zo = S.unpack,
      Io = fs,
      Eo = ls,
      _o = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        s = zo(s, "lch")
        var l = s[0],
          u = s[1],
          d = s[2],
          p = Io(l, u, d),
          f = p[0],
          v = p[1],
          m = p[2],
          w = Eo(f, v, m),
          x = w[0],
          R = w[1],
          T = w[2]
        return [x, R, T, s.length > 3 ? s[3] : 1]
      },
      ds = _o,
      Do = S.unpack,
      jo = ds,
      No = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = Do(s, "hcl").reverse()
        return jo.apply(void 0, l)
      },
      Bo = No,
      Wo = S.unpack,
      Uo = S.type,
      ps = lt,
      ar = D,
      Dr = rt,
      gs = Mo
    ;(ar.prototype.lch = function () {
      return gs(this._rgb)
    }),
      (ar.prototype.hcl = function () {
        return gs(this._rgb).reverse()
      }),
      (ps.lch = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ar,
          [null].concat(s, ["lch"])
        ))()
      }),
      (ps.hcl = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ar,
          [null].concat(s, ["hcl"])
        ))()
      }),
      (Dr.format.lch = ds),
      (Dr.format.hcl = Bo),
      ["lch", "hcl"].forEach(function (s) {
        return Dr.autodetect.push({
          p: 2,
          test: function () {
            for (var o = [], l = arguments.length; l--; ) o[l] = arguments[l]
            if (((o = Wo(o, s)), Uo(o) === "array" && o.length === 3)) return s
          }
        })
      })
    var Go = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflower: "#6495ed",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        laserlemon: "#ffff54",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrod: "#fafad2",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        maroon2: "#7f0000",
        maroon3: "#b03060",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        purple2: "#7f007f",
        purple3: "#a020f0",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      },
      vs = Go,
      qo = D,
      ms = rt,
      Xo = S.type,
      We = vs,
      Ho = Jn,
      Yo = Zn
    ;(qo.prototype.name = function () {
      for (
        var s = Yo(this._rgb, "rgb"), o = 0, l = Object.keys(We);
        o < l.length;
        o += 1
      ) {
        var u = l[o]
        if (We[u] === s) return u.toLowerCase()
      }
      return s
    }),
      (ms.format.named = function (s) {
        if (((s = s.toLowerCase()), We[s])) return Ho(We[s])
        throw new Error("unknown color name: " + s)
      }),
      ms.autodetect.push({
        p: 5,
        test: function (s) {
          for (var o = [], l = arguments.length - 1; l-- > 0; )
            o[l] = arguments[l + 1]
          if (!o.length && Xo(s) === "string" && We[s.toLowerCase()])
            return "named"
        }
      })
    var Zo = S.unpack,
      Jo = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = Zo(s, "rgb"),
          u = l[0],
          d = l[1],
          p = l[2]
        return (u << 16) + (d << 8) + p
      },
      Vo = Jo,
      Qo = S.type,
      Ko = function (s) {
        if (Qo(s) == "number" && s >= 0 && s <= 16777215) {
          var o = s >> 16,
            l = (s >> 8) & 255,
            u = s & 255
          return [o, l, u, 1]
        }
        throw new Error("unknown num color: " + s)
      },
      tl = Ko,
      el = lt,
      bs = D,
      ys = rt,
      rl = S.type,
      nl = Vo
    ;(bs.prototype.num = function () {
      return nl(this._rgb)
    }),
      (el.num = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          bs,
          [null].concat(s, ["num"])
        ))()
      }),
      (ys.format.num = tl),
      ys.autodetect.push({
        p: 5,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (
            s.length === 1 &&
            rl(s[0]) === "number" &&
            s[0] >= 0 &&
            s[0] <= 16777215
          )
            return "num"
        }
      })
    var sl = lt,
      jr = D,
      ws = rt,
      xs = S.unpack,
      Ts = S.type,
      Cs = Math.round
    ;(jr.prototype.rgb = function (s) {
      return (
        s === void 0 && (s = !0),
        s === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Cs)
      )
    }),
      (jr.prototype.rgba = function (s) {
        return (
          s === void 0 && (s = !0),
          this._rgb.slice(0, 4).map(function (o, l) {
            return l < 3 ? (s === !1 ? o : Cs(o)) : o
          })
        )
      }),
      (sl.rgb = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          jr,
          [null].concat(s, ["rgb"])
        ))()
      }),
      (ws.format.rgb = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = xs(s, "rgba")
        return l[3] === void 0 && (l[3] = 1), l
      }),
      ws.autodetect.push({
        p: 3,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (
            ((s = xs(s, "rgba")),
            Ts(s) === "array" &&
              (s.length === 3 ||
                (s.length === 4 &&
                  Ts(s[3]) == "number" &&
                  s[3] >= 0 &&
                  s[3] <= 1)))
          )
            return "rgb"
        }
      })
    var or = Math.log,
      il = function (s) {
        var o = s / 100,
          l,
          u,
          d
        return (
          o < 66
            ? ((l = 255),
              (u =
                o < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (u = o - 2) +
                    104.49216199393888 * or(u)),
              (d =
                o < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (d = o - 10) +
                    115.67994401066147 * or(d)))
            : ((l =
                351.97690566805693 +
                0.114206453784165 * (l = o - 55) -
                40.25366309332127 * or(l)),
              (u =
                325.4494125711974 +
                0.07943456536662342 * (u = o - 50) -
                28.0852963507957 * or(u)),
              (d = 255)),
          [l, u, d, 1]
        )
      },
      ks = il,
      al = ks,
      ol = S.unpack,
      ll = Math.round,
      hl = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        for (
          var l = ol(s, "rgb"),
            u = l[0],
            d = l[2],
            p = 1e3,
            f = 4e4,
            v = 0.4,
            m;
          f - p > v;

        ) {
          m = (f + p) * 0.5
          var w = al(m)
          w[2] / w[0] >= d / u ? (f = m) : (p = m)
        }
        return ll(m)
      },
      ul = hl,
      Nr = lt,
      lr = D,
      Br = rt,
      cl = ul
    ;(lr.prototype.temp =
      lr.prototype.kelvin =
      lr.prototype.temperature =
        function () {
          return cl(this._rgb)
        }),
      (Nr.temp =
        Nr.kelvin =
        Nr.temperature =
          function () {
            for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
            return new (Function.prototype.bind.apply(
              lr,
              [null].concat(s, ["temp"])
            ))()
          }),
      (Br.format.temp = Br.format.kelvin = Br.format.temperature = ks)
    var fl = S.unpack,
      Wr = Math.cbrt,
      dl = Math.pow,
      pl = Math.sign,
      gl = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = fl(s, "rgb"),
          u = l[0],
          d = l[1],
          p = l[2],
          f = [Ur(u / 255), Ur(d / 255), Ur(p / 255)],
          v = f[0],
          m = f[1],
          w = f[2],
          x = Wr(0.4122214708 * v + 0.5363325363 * m + 0.0514459929 * w),
          R = Wr(0.2119034982 * v + 0.6806995451 * m + 0.1073969566 * w),
          T = Wr(0.0883024619 * v + 0.2817188376 * m + 0.6299787005 * w)
        return [
          0.2104542553 * x + 0.793617785 * R - 0.0040720468 * T,
          1.9779984951 * x - 2.428592205 * R + 0.4505937099 * T,
          0.0259040371 * x + 0.7827717662 * R - 0.808675766 * T
        ]
      },
      Ss = gl
    function Ur(s) {
      var o = Math.abs(s)
      return o < 0.04045
        ? s / 12.92
        : (pl(s) || 1) * dl((o + 0.055) / 1.055, 2.4)
    }
    var vl = S.unpack,
      hr = Math.pow,
      ml = Math.sign,
      bl = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        s = vl(s, "lab")
        var l = s[0],
          u = s[1],
          d = s[2],
          p = hr(l + 0.3963377774 * u + 0.2158037573 * d, 3),
          f = hr(l - 0.1055613458 * u - 0.0638541728 * d, 3),
          v = hr(l - 0.0894841775 * u - 1.291485548 * d, 3)
        return [
          255 * Gr(4.0767416621 * p - 3.3077115913 * f + 0.2309699292 * v),
          255 * Gr(-1.2684380046 * p + 2.6097574011 * f - 0.3413193965 * v),
          255 * Gr(-0.0041960863 * p - 0.7034186147 * f + 1.707614701 * v),
          s.length > 3 ? s[3] : 1
        ]
      },
      Rs = bl
    function Gr(s) {
      var o = Math.abs(s)
      return o > 0.0031308
        ? (ml(s) || 1) * (1.055 * hr(o, 1 / 2.4) - 0.055)
        : s * 12.92
    }
    var yl = S.unpack,
      wl = S.type,
      xl = lt,
      Ps = D,
      Ms = rt,
      Tl = Ss
    ;(Ps.prototype.oklab = function () {
      return Tl(this._rgb)
    }),
      (xl.oklab = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Ps,
          [null].concat(s, ["oklab"])
        ))()
      }),
      (Ms.format.oklab = Rs),
      Ms.autodetect.push({
        p: 3,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (((s = yl(s, "oklab")), wl(s) === "array" && s.length === 3))
            return "oklab"
        }
      })
    var Cl = S.unpack,
      kl = Ss,
      Sl = cs,
      Rl = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        var l = Cl(s, "rgb"),
          u = l[0],
          d = l[1],
          p = l[2],
          f = kl(u, d, p),
          v = f[0],
          m = f[1],
          w = f[2]
        return Sl(v, m, w)
      },
      Pl = Rl,
      Ml = S.unpack,
      Ll = fs,
      $l = Rs,
      Ol = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        s = Ml(s, "lch")
        var l = s[0],
          u = s[1],
          d = s[2],
          p = Ll(l, u, d),
          f = p[0],
          v = p[1],
          m = p[2],
          w = $l(f, v, m),
          x = w[0],
          R = w[1],
          T = w[2]
        return [x, R, T, s.length > 3 ? s[3] : 1]
      },
      Al = Ol,
      Fl = S.unpack,
      zl = S.type,
      Il = lt,
      Ls = D,
      $s = rt,
      El = Pl
    ;(Ls.prototype.oklch = function () {
      return El(this._rgb)
    }),
      (Il.oklch = function () {
        for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Ls,
          [null].concat(s, ["oklch"])
        ))()
      }),
      ($s.format.oklch = Al),
      $s.autodetect.push({
        p: 3,
        test: function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          if (((s = Fl(s, "oklch")), zl(s) === "array" && s.length === 3))
            return "oklch"
        }
      })
    var Os = D,
      _l = S.type
    Os.prototype.alpha = function (s, o) {
      return (
        o === void 0 && (o = !1),
        s !== void 0 && _l(s) === "number"
          ? o
            ? ((this._rgb[3] = s), this)
            : new Os([this._rgb[0], this._rgb[1], this._rgb[2], s], "rgb")
          : this._rgb[3]
      )
    }
    var Dl = D
    Dl.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var ce = D,
      jl = ir
    ;(ce.prototype.darken = function (s) {
      s === void 0 && (s = 1)
      var o = this,
        l = o.lab()
      return (l[0] -= jl.Kn * s), new ce(l, "lab").alpha(o.alpha(), !0)
    }),
      (ce.prototype.brighten = function (s) {
        return s === void 0 && (s = 1), this.darken(-s)
      }),
      (ce.prototype.darker = ce.prototype.darken),
      (ce.prototype.brighter = ce.prototype.brighten)
    var Nl = D
    Nl.prototype.get = function (s) {
      var o = s.split("."),
        l = o[0],
        u = o[1],
        d = this[l]()
      if (u) {
        var p = l.indexOf(u) - (l.substr(0, 2) === "ok" ? 2 : 0)
        if (p > -1) return d[p]
        throw new Error("unknown channel " + u + " in mode " + l)
      } else return d
    }
    var Le = D,
      Bl = S.type,
      Wl = Math.pow,
      Ul = 1e-7,
      Gl = 20
    Le.prototype.luminance = function (s) {
      if (s !== void 0 && Bl(s) === "number") {
        if (s === 0) return new Le([0, 0, 0, this._rgb[3]], "rgb")
        if (s === 1) return new Le([255, 255, 255, this._rgb[3]], "rgb")
        var o = this.luminance(),
          l = "rgb",
          u = Gl,
          d = function (f, v) {
            var m = f.interpolate(v, 0.5, l),
              w = m.luminance()
            return Math.abs(s - w) < Ul || !u-- ? m : w > s ? d(f, m) : d(m, v)
          },
          p = (
            o > s
              ? d(new Le([0, 0, 0]), this)
              : d(this, new Le([255, 255, 255]))
          ).rgb()
        return new Le(p.concat([this._rgb[3]]))
      }
      return ql.apply(void 0, this._rgb.slice(0, 3))
    }
    var ql = function (s, o, l) {
        return (
          (s = qr(s)),
          (o = qr(o)),
          (l = qr(l)),
          0.2126 * s + 0.7152 * o + 0.0722 * l
        )
      },
      qr = function (s) {
        return (
          (s /= 255), s <= 0.03928 ? s / 12.92 : Wl((s + 0.055) / 1.055, 2.4)
        )
      },
      Tt = {},
      As = D,
      Fs = S.type,
      ur = Tt,
      zs = function (s, o, l) {
        l === void 0 && (l = 0.5)
        for (var u = [], d = arguments.length - 3; d-- > 0; )
          u[d] = arguments[d + 3]
        var p = u[0] || "lrgb"
        if ((!ur[p] && !u.length && (p = Object.keys(ur)[0]), !ur[p]))
          throw new Error("interpolation mode " + p + " is not defined")
        return (
          Fs(s) !== "object" && (s = new As(s)),
          Fs(o) !== "object" && (o = new As(o)),
          ur[p](s, o, l).alpha(s.alpha() + l * (o.alpha() - s.alpha()))
        )
      },
      Is = D,
      Xl = zs
    Is.prototype.mix = Is.prototype.interpolate = function (s, o) {
      o === void 0 && (o = 0.5)
      for (var l = [], u = arguments.length - 2; u-- > 0; )
        l[u] = arguments[u + 2]
      return Xl.apply(void 0, [this, s, o].concat(l))
    }
    var Es = D
    Es.prototype.premultiply = function (s) {
      s === void 0 && (s = !1)
      var o = this._rgb,
        l = o[3]
      return s
        ? ((this._rgb = [o[0] * l, o[1] * l, o[2] * l, l]), this)
        : new Es([o[0] * l, o[1] * l, o[2] * l, l], "rgb")
    }
    var Xr = D,
      Hl = ir
    ;(Xr.prototype.saturate = function (s) {
      s === void 0 && (s = 1)
      var o = this,
        l = o.lch()
      return (
        (l[1] += Hl.Kn * s),
        l[1] < 0 && (l[1] = 0),
        new Xr(l, "lch").alpha(o.alpha(), !0)
      )
    }),
      (Xr.prototype.desaturate = function (s) {
        return s === void 0 && (s = 1), this.saturate(-s)
      })
    var _s = D,
      Ds = S.type
    _s.prototype.set = function (s, o, l) {
      l === void 0 && (l = !1)
      var u = s.split("."),
        d = u[0],
        p = u[1],
        f = this[d]()
      if (p) {
        var v = d.indexOf(p) - (d.substr(0, 2) === "ok" ? 2 : 0)
        if (v > -1) {
          if (Ds(o) == "string")
            switch (o.charAt(0)) {
              case "+":
                f[v] += +o
                break
              case "-":
                f[v] += +o
                break
              case "*":
                f[v] *= +o.substr(1)
                break
              case "/":
                f[v] /= +o.substr(1)
                break
              default:
                f[v] = +o
            }
          else if (Ds(o) === "number") f[v] = o
          else throw new Error("unsupported value for Color.set")
          var m = new _s(f, d)
          return l ? ((this._rgb = m._rgb), this) : m
        }
        throw new Error("unknown channel " + p + " in mode " + d)
      } else return f
    }
    var Yl = D,
      Zl = function (s, o, l) {
        var u = s._rgb,
          d = o._rgb
        return new Yl(
          u[0] + l * (d[0] - u[0]),
          u[1] + l * (d[1] - u[1]),
          u[2] + l * (d[2] - u[2]),
          "rgb"
        )
      }
    Tt.rgb = Zl
    var Jl = D,
      Hr = Math.sqrt,
      $e = Math.pow,
      Vl = function (s, o, l) {
        var u = s._rgb,
          d = u[0],
          p = u[1],
          f = u[2],
          v = o._rgb,
          m = v[0],
          w = v[1],
          x = v[2]
        return new Jl(
          Hr($e(d, 2) * (1 - l) + $e(m, 2) * l),
          Hr($e(p, 2) * (1 - l) + $e(w, 2) * l),
          Hr($e(f, 2) * (1 - l) + $e(x, 2) * l),
          "rgb"
        )
      }
    Tt.lrgb = Vl
    var Ql = D,
      Kl = function (s, o, l) {
        var u = s.lab(),
          d = o.lab()
        return new Ql(
          u[0] + l * (d[0] - u[0]),
          u[1] + l * (d[1] - u[1]),
          u[2] + l * (d[2] - u[2]),
          "lab"
        )
      }
    Tt.lab = Kl
    var js = D,
      Oe = function (s, o, l, u) {
        var d, p, f, v
        u === "hsl"
          ? ((f = s.hsl()), (v = o.hsl()))
          : u === "hsv"
          ? ((f = s.hsv()), (v = o.hsv()))
          : u === "hcg"
          ? ((f = s.hcg()), (v = o.hcg()))
          : u === "hsi"
          ? ((f = s.hsi()), (v = o.hsi()))
          : u === "lch" || u === "hcl"
          ? ((u = "hcl"), (f = s.hcl()), (v = o.hcl()))
          : u === "oklch" &&
            ((f = s.oklch().reverse()), (v = o.oklch().reverse()))
        var m, w, x, R, T, L
        ;(u.substr(0, 1) === "h" || u === "oklch") &&
          ((d = f),
          (m = d[0]),
          (x = d[1]),
          (T = d[2]),
          (p = v),
          (w = p[0]),
          (R = p[1]),
          (L = p[2]))
        var M, j, W, G
        return (
          !isNaN(m) && !isNaN(w)
            ? (w > m && w - m > 180
                ? (G = w - (m + 360))
                : w < m && m - w > 180
                ? (G = w + 360 - m)
                : (G = w - m),
              (j = m + l * G))
            : isNaN(m)
            ? isNaN(w)
              ? (j = Number.NaN)
              : ((j = w), (T == 1 || T == 0) && u != "hsv" && (M = R))
            : ((j = m), (L == 1 || L == 0) && u != "hsv" && (M = x)),
          M === void 0 && (M = x + l * (R - x)),
          (W = T + l * (L - T)),
          u === "oklch" ? new js([W, M, j], u) : new js([j, M, W], u)
        )
      },
      th = Oe,
      Ns = function (s, o, l) {
        return th(s, o, l, "lch")
      }
    ;(Tt.lch = Ns), (Tt.hcl = Ns)
    var eh = D,
      rh = function (s, o, l) {
        var u = s.num(),
          d = o.num()
        return new eh(u + l * (d - u), "num")
      }
    Tt.num = rh
    var nh = Oe,
      sh = function (s, o, l) {
        return nh(s, o, l, "hcg")
      }
    Tt.hcg = sh
    var ih = Oe,
      ah = function (s, o, l) {
        return ih(s, o, l, "hsi")
      }
    Tt.hsi = ah
    var oh = Oe,
      lh = function (s, o, l) {
        return oh(s, o, l, "hsl")
      }
    Tt.hsl = lh
    var hh = Oe,
      uh = function (s, o, l) {
        return hh(s, o, l, "hsv")
      }
    Tt.hsv = uh
    var ch = D,
      fh = function (s, o, l) {
        var u = s.oklab(),
          d = o.oklab()
        return new ch(
          u[0] + l * (d[0] - u[0]),
          u[1] + l * (d[1] - u[1]),
          u[2] + l * (d[2] - u[2]),
          "oklab"
        )
      }
    Tt.oklab = fh
    var dh = Oe,
      ph = function (s, o, l) {
        return dh(s, o, l, "oklch")
      }
    Tt.oklch = ph
    var Yr = D,
      gh = S.clip_rgb,
      Zr = Math.pow,
      Jr = Math.sqrt,
      Vr = Math.PI,
      Bs = Math.cos,
      Ws = Math.sin,
      vh = Math.atan2,
      mh = function (s, o, l) {
        o === void 0 && (o = "lrgb"), l === void 0 && (l = null)
        var u = s.length
        l ||
          (l = Array.from(new Array(u)).map(function () {
            return 1
          }))
        var d =
          u /
          l.reduce(function (j, W) {
            return j + W
          })
        if (
          (l.forEach(function (j, W) {
            l[W] *= d
          }),
          (s = s.map(function (j) {
            return new Yr(j)
          })),
          o === "lrgb")
        )
          return bh(s, l)
        for (
          var p = s.shift(), f = p.get(o), v = [], m = 0, w = 0, x = 0;
          x < f.length;
          x++
        )
          if (
            ((f[x] = (f[x] || 0) * l[0]),
            v.push(isNaN(f[x]) ? 0 : l[0]),
            o.charAt(x) === "h" && !isNaN(f[x]))
          ) {
            var R = (f[x] / 180) * Vr
            ;(m += Bs(R) * l[0]), (w += Ws(R) * l[0])
          }
        var T = p.alpha() * l[0]
        s.forEach(function (j, W) {
          var G = j.get(o)
          T += j.alpha() * l[W + 1]
          for (var X = 0; X < f.length; X++)
            if (!isNaN(G[X]))
              if (((v[X] += l[W + 1]), o.charAt(X) === "h")) {
                var dt = (G[X] / 180) * Vr
                ;(m += Bs(dt) * l[W + 1]), (w += Ws(dt) * l[W + 1])
              } else f[X] += G[X] * l[W + 1]
        })
        for (var L = 0; L < f.length; L++)
          if (o.charAt(L) === "h") {
            for (var M = (vh(w / v[L], m / v[L]) / Vr) * 180; M < 0; ) M += 360
            for (; M >= 360; ) M -= 360
            f[L] = M
          } else f[L] = f[L] / v[L]
        return (T /= u), new Yr(f, o).alpha(T > 0.99999 ? 1 : T, !0)
      },
      bh = function (s, o) {
        for (var l = s.length, u = [0, 0, 0, 0], d = 0; d < s.length; d++) {
          var p = s[d],
            f = o[d] / l,
            v = p._rgb
          ;(u[0] += Zr(v[0], 2) * f),
            (u[1] += Zr(v[1], 2) * f),
            (u[2] += Zr(v[2], 2) * f),
            (u[3] += v[3] * f)
        }
        return (
          (u[0] = Jr(u[0])),
          (u[1] = Jr(u[1])),
          (u[2] = Jr(u[2])),
          u[3] > 0.9999999 && (u[3] = 1),
          new Yr(gh(u))
        )
      },
      Mt = lt,
      Ae = S.type,
      yh = Math.pow,
      Qr = function (s) {
        var o = "rgb",
          l = Mt("#ccc"),
          u = 0,
          d = [0, 1],
          p = [],
          f = [0, 0],
          v = !1,
          m = [],
          w = !1,
          x = 0,
          R = 1,
          T = !1,
          L = {},
          M = !0,
          j = 1,
          W = function (C) {
            if (
              ((C = C || ["#fff", "#000"]),
              C &&
                Ae(C) === "string" &&
                Mt.brewer &&
                Mt.brewer[C.toLowerCase()] &&
                (C = Mt.brewer[C.toLowerCase()]),
              Ae(C) === "array")
            ) {
              C.length === 1 && (C = [C[0], C[0]]), (C = C.slice(0))
              for (var F = 0; F < C.length; F++) C[F] = Mt(C[F])
              p.length = 0
              for (var B = 0; B < C.length; B++) p.push(B / (C.length - 1))
            }
            return yt(), (m = C)
          },
          G = function (C) {
            if (v != null) {
              for (var F = v.length - 1, B = 0; B < F && C >= v[B]; ) B++
              return B - 1
            }
            return 0
          },
          X = function (C) {
            return C
          },
          dt = function (C) {
            return C
          },
          ft = function (C, F) {
            var B, N
            if ((F == null && (F = !1), isNaN(C) || C === null)) return l
            if (F) N = C
            else if (v && v.length > 2) {
              var pt = G(C)
              N = pt / (v.length - 2)
            } else R !== x ? (N = (C - x) / (R - x)) : (N = 1)
            ;(N = dt(N)),
              F || (N = X(N)),
              j !== 1 && (N = yh(N, j)),
              (N = f[0] + N * (1 - f[0] - f[1])),
              (N = Math.min(1, Math.max(0, N)))
            var K = Math.floor(N * 1e4)
            if (M && L[K]) B = L[K]
            else {
              if (Ae(m) === "array")
                for (var q = 0; q < p.length; q++) {
                  var Y = p[q]
                  if (N <= Y) {
                    B = m[q]
                    break
                  }
                  if (N >= Y && q === p.length - 1) {
                    B = m[q]
                    break
                  }
                  if (N > Y && N < p[q + 1]) {
                    ;(N = (N - Y) / (p[q + 1] - Y)),
                      (B = Mt.interpolate(m[q], m[q + 1], N, o))
                    break
                  }
                }
              else Ae(m) === "function" && (B = m(N))
              M && (L[K] = B)
            }
            return B
          },
          yt = function () {
            return (L = {})
          }
        W(s)
        var U = function (C) {
          var F = Mt(ft(C))
          return w && F[w] ? F[w]() : F
        }
        return (
          (U.classes = function (C) {
            if (C != null) {
              if (Ae(C) === "array") (v = C), (d = [C[0], C[C.length - 1]])
              else {
                var F = Mt.analyze(d)
                C === 0 ? (v = [F.min, F.max]) : (v = Mt.limits(F, "e", C))
              }
              return U
            }
            return v
          }),
          (U.domain = function (C) {
            if (!arguments.length) return d
            ;(x = C[0]), (R = C[C.length - 1]), (p = [])
            var F = m.length
            if (C.length === F && x !== R)
              for (var B = 0, N = Array.from(C); B < N.length; B += 1) {
                var pt = N[B]
                p.push((pt - x) / (R - x))
              }
            else {
              for (var K = 0; K < F; K++) p.push(K / (F - 1))
              if (C.length > 2) {
                var q = C.map(function (Z, V) {
                    return V / (C.length - 1)
                  }),
                  Y = C.map(function (Z) {
                    return (Z - x) / (R - x)
                  })
                Y.every(function (Z, V) {
                  return q[V] === Z
                }) ||
                  (dt = function (Z) {
                    if (Z <= 0 || Z >= 1) return Z
                    for (var V = 0; Z >= Y[V + 1]; ) V++
                    var $t = (Z - Y[V]) / (Y[V + 1] - Y[V]),
                      Kt = q[V] + $t * (q[V + 1] - q[V])
                    return Kt
                  })
              }
            }
            return (d = [x, R]), U
          }),
          (U.mode = function (C) {
            return arguments.length ? ((o = C), yt(), U) : o
          }),
          (U.range = function (C, F) {
            return W(C), U
          }),
          (U.out = function (C) {
            return (w = C), U
          }),
          (U.spread = function (C) {
            return arguments.length ? ((u = C), U) : u
          }),
          (U.correctLightness = function (C) {
            return (
              C == null && (C = !0),
              (T = C),
              yt(),
              T
                ? (X = function (F) {
                    for (
                      var B = ft(0, !0).lab()[0],
                        N = ft(1, !0).lab()[0],
                        pt = B > N,
                        K = ft(F, !0).lab()[0],
                        q = B + (N - B) * F,
                        Y = K - q,
                        Z = 0,
                        V = 1,
                        $t = 20;
                      Math.abs(Y) > 0.01 && $t-- > 0;

                    )
                      (function () {
                        return (
                          pt && (Y *= -1),
                          Y < 0
                            ? ((Z = F), (F += (V - F) * 0.5))
                            : ((V = F), (F += (Z - F) * 0.5)),
                          (K = ft(F, !0).lab()[0]),
                          (Y = K - q)
                        )
                      })()
                    return F
                  })
                : (X = function (F) {
                    return F
                  }),
              U
            )
          }),
          (U.padding = function (C) {
            return C != null
              ? (Ae(C) === "number" && (C = [C, C]), (f = C), U)
              : f
          }),
          (U.colors = function (C, F) {
            arguments.length < 2 && (F = "hex")
            var B = []
            if (arguments.length === 0) B = m.slice(0)
            else if (C === 1) B = [U(0.5)]
            else if (C > 1) {
              var N = d[0],
                pt = d[1] - N
              B = wh(0, C, !1).map(function (V) {
                return U(N + (V / (C - 1)) * pt)
              })
            } else {
              s = []
              var K = []
              if (v && v.length > 2)
                for (
                  var q = 1, Y = v.length, Z = 1 <= Y;
                  Z ? q < Y : q > Y;
                  Z ? q++ : q--
                )
                  K.push((v[q - 1] + v[q]) * 0.5)
              else K = d
              B = K.map(function (V) {
                return U(V)
              })
            }
            return (
              Mt[F] &&
                (B = B.map(function (V) {
                  return V[F]()
                })),
              B
            )
          }),
          (U.cache = function (C) {
            return C != null ? ((M = C), U) : M
          }),
          (U.gamma = function (C) {
            return C != null ? ((j = C), U) : j
          }),
          (U.nodata = function (C) {
            return C != null ? ((l = Mt(C)), U) : l
          }),
          U
        )
      }
    function wh(s, o, l) {
      for (
        var u = [], d = s < o, p = l ? (d ? o + 1 : o - 1) : o, f = s;
        d ? f < p : f > p;
        d ? f++ : f--
      )
        u.push(f)
      return u
    }
    var Ue = D,
      xh = Qr,
      Th = function (s) {
        for (var o = [1, 1], l = 1; l < s; l++) {
          for (var u = [1], d = 1; d <= o.length; d++)
            u[d] = (o[d] || 0) + o[d - 1]
          o = u
        }
        return o
      },
      Ch = function (s) {
        var o, l, u, d, p, f, v
        if (
          ((s = s.map(function (T) {
            return new Ue(T)
          })),
          s.length === 2)
        )
          (o = s.map(function (T) {
            return T.lab()
          })),
            (p = o[0]),
            (f = o[1]),
            (d = function (T) {
              var L = [0, 1, 2].map(function (M) {
                return p[M] + T * (f[M] - p[M])
              })
              return new Ue(L, "lab")
            })
        else if (s.length === 3)
          (l = s.map(function (T) {
            return T.lab()
          })),
            (p = l[0]),
            (f = l[1]),
            (v = l[2]),
            (d = function (T) {
              var L = [0, 1, 2].map(function (M) {
                return (
                  (1 - T) * (1 - T) * p[M] +
                  2 * (1 - T) * T * f[M] +
                  T * T * v[M]
                )
              })
              return new Ue(L, "lab")
            })
        else if (s.length === 4) {
          var m
          ;(u = s.map(function (T) {
            return T.lab()
          })),
            (p = u[0]),
            (f = u[1]),
            (v = u[2]),
            (m = u[3]),
            (d = function (T) {
              var L = [0, 1, 2].map(function (M) {
                return (
                  (1 - T) * (1 - T) * (1 - T) * p[M] +
                  3 * (1 - T) * (1 - T) * T * f[M] +
                  3 * (1 - T) * T * T * v[M] +
                  T * T * T * m[M]
                )
              })
              return new Ue(L, "lab")
            })
        } else if (s.length >= 5) {
          var w, x, R
          ;(w = s.map(function (T) {
            return T.lab()
          })),
            (R = s.length - 1),
            (x = Th(R)),
            (d = function (T) {
              var L = 1 - T,
                M = [0, 1, 2].map(function (j) {
                  return w.reduce(function (W, G, X) {
                    return W + x[X] * Math.pow(L, R - X) * Math.pow(T, X) * G[j]
                  }, 0)
                })
              return new Ue(M, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color."
          )
        return d
      },
      kh = function (s) {
        var o = Ch(s)
        return (
          (o.scale = function () {
            return xh(o)
          }),
          o
        )
      },
      Kr = lt,
      Lt = function (s, o, l) {
        if (!Lt[l]) throw new Error("unknown blend mode " + l)
        return Lt[l](s, o)
      },
      Vt = function (s) {
        return function (o, l) {
          var u = Kr(l).rgb(),
            d = Kr(o).rgb()
          return Kr.rgb(s(u, d))
        }
      },
      Qt = function (s) {
        return function (o, l) {
          var u = []
          return (
            (u[0] = s(o[0], l[0])),
            (u[1] = s(o[1], l[1])),
            (u[2] = s(o[2], l[2])),
            u
          )
        }
      },
      Sh = function (s) {
        return s
      },
      Rh = function (s, o) {
        return (s * o) / 255
      },
      Ph = function (s, o) {
        return s > o ? o : s
      },
      Mh = function (s, o) {
        return s > o ? s : o
      },
      Lh = function (s, o) {
        return 255 * (1 - (1 - s / 255) * (1 - o / 255))
      },
      $h = function (s, o) {
        return o < 128
          ? (2 * s * o) / 255
          : 255 * (1 - 2 * (1 - s / 255) * (1 - o / 255))
      },
      Oh = function (s, o) {
        return 255 * (1 - (1 - o / 255) / (s / 255))
      },
      Ah = function (s, o) {
        return s === 255
          ? 255
          : ((s = (255 * (o / 255)) / (1 - s / 255)), s > 255 ? 255 : s)
      }
    ;(Lt.normal = Vt(Qt(Sh))),
      (Lt.multiply = Vt(Qt(Rh))),
      (Lt.screen = Vt(Qt(Lh))),
      (Lt.overlay = Vt(Qt($h))),
      (Lt.darken = Vt(Qt(Ph))),
      (Lt.lighten = Vt(Qt(Mh))),
      (Lt.dodge = Vt(Qt(Ah))),
      (Lt.burn = Vt(Qt(Oh)))
    for (
      var Fh = Lt,
        tn = S.type,
        zh = S.clip_rgb,
        Ih = S.TWOPI,
        Eh = Math.pow,
        _h = Math.sin,
        Dh = Math.cos,
        Us = lt,
        jh = function (s, o, l, u, d) {
          s === void 0 && (s = 300),
            o === void 0 && (o = -1.5),
            l === void 0 && (l = 1),
            u === void 0 && (u = 1),
            d === void 0 && (d = [0, 1])
          var p = 0,
            f
          tn(d) === "array" ? (f = d[1] - d[0]) : ((f = 0), (d = [d, d]))
          var v = function (m) {
            var w = Ih * ((s + 120) / 360 + o * m),
              x = Eh(d[0] + f * m, u),
              R = p !== 0 ? l[0] + m * p : l,
              T = (R * x * (1 - x)) / 2,
              L = Dh(w),
              M = _h(w),
              j = x + T * (-0.14861 * L + 1.78277 * M),
              W = x + T * (-0.29227 * L - 0.90649 * M),
              G = x + T * (1.97294 * L)
            return Us(zh([j * 255, W * 255, G * 255, 1]))
          }
          return (
            (v.start = function (m) {
              return m == null ? s : ((s = m), v)
            }),
            (v.rotations = function (m) {
              return m == null ? o : ((o = m), v)
            }),
            (v.gamma = function (m) {
              return m == null ? u : ((u = m), v)
            }),
            (v.hue = function (m) {
              return m == null
                ? l
                : ((l = m),
                  tn(l) === "array"
                    ? ((p = l[1] - l[0]), p === 0 && (l = l[1]))
                    : (p = 0),
                  v)
            }),
            (v.lightness = function (m) {
              return m == null
                ? d
                : (tn(m) === "array"
                    ? ((d = m), (f = m[1] - m[0]))
                    : ((d = [m, m]), (f = 0)),
                  v)
            }),
            (v.scale = function () {
              return Us.scale(v)
            }),
            v.hue(l),
            v
          )
        },
        Nh = D,
        Bh = "0123456789abcdef",
        Wh = Math.floor,
        Uh = Math.random,
        Gh = function () {
          for (var s = "#", o = 0; o < 6; o++) s += Bh.charAt(Wh(Uh() * 16))
          return new Nh(s, "hex")
        },
        en = y,
        Gs = Math.log,
        qh = Math.pow,
        Xh = Math.floor,
        Hh = Math.abs,
        qs = function (s, o) {
          o === void 0 && (o = null)
          var l = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0
          }
          return (
            en(s) === "object" && (s = Object.values(s)),
            s.forEach(function (u) {
              o && en(u) === "object" && (u = u[o]),
                u != null &&
                  !isNaN(u) &&
                  (l.values.push(u),
                  (l.sum += u),
                  u < l.min && (l.min = u),
                  u > l.max && (l.max = u),
                  (l.count += 1))
            }),
            (l.domain = [l.min, l.max]),
            (l.limits = function (u, d) {
              return Xs(l, u, d)
            }),
            l
          )
        },
        Xs = function (s, o, l) {
          o === void 0 && (o = "equal"),
            l === void 0 && (l = 7),
            en(s) == "array" && (s = qs(s))
          var u = s.min,
            d = s.max,
            p = s.values.sort(function (nn, sn) {
              return nn - sn
            })
          if (l === 1) return [u, d]
          var f = []
          if (
            (o.substr(0, 1) === "c" && (f.push(u), f.push(d)),
            o.substr(0, 1) === "e")
          ) {
            f.push(u)
            for (var v = 1; v < l; v++) f.push(u + (v / l) * (d - u))
            f.push(d)
          } else if (o.substr(0, 1) === "l") {
            if (u <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0"
              )
            var m = Math.LOG10E * Gs(u),
              w = Math.LOG10E * Gs(d)
            f.push(u)
            for (var x = 1; x < l; x++) f.push(qh(10, m + (x / l) * (w - m)))
            f.push(d)
          } else if (o.substr(0, 1) === "q") {
            f.push(u)
            for (var R = 1; R < l; R++) {
              var T = ((p.length - 1) * R) / l,
                L = Xh(T)
              if (L === T) f.push(p[L])
              else {
                var M = T - L
                f.push(p[L] * (1 - M) + p[L + 1] * M)
              }
            }
            f.push(d)
          } else if (o.substr(0, 1) === "k") {
            var j,
              W = p.length,
              G = new Array(W),
              X = new Array(l),
              dt = !0,
              ft = 0,
              yt = null
            ;(yt = []), yt.push(u)
            for (var U = 1; U < l; U++) yt.push(u + (U / l) * (d - u))
            for (yt.push(d); dt; ) {
              for (var C = 0; C < l; C++) X[C] = 0
              for (var F = 0; F < W; F++)
                for (
                  var B = p[F], N = Number.MAX_VALUE, pt = void 0, K = 0;
                  K < l;
                  K++
                ) {
                  var q = Hh(yt[K] - B)
                  q < N && ((N = q), (pt = K)), X[pt]++, (G[F] = pt)
                }
              for (var Y = new Array(l), Z = 0; Z < l; Z++) Y[Z] = null
              for (var V = 0; V < W; V++)
                (j = G[V]), Y[j] === null ? (Y[j] = p[V]) : (Y[j] += p[V])
              for (var $t = 0; $t < l; $t++) Y[$t] *= 1 / X[$t]
              dt = !1
              for (var Kt = 0; Kt < l; Kt++)
                if (Y[Kt] !== yt[Kt]) {
                  dt = !0
                  break
                }
              ;(yt = Y), ft++, ft > 200 && (dt = !1)
            }
            for (var te = {}, Fe = 0; Fe < l; Fe++) te[Fe] = []
            for (var ze = 0; ze < W; ze++) (j = G[ze]), te[j].push(p[ze])
            for (var Wt = [], fe = 0; fe < l; fe++)
              Wt.push(te[fe][0]), Wt.push(te[fe][te[fe].length - 1])
            ;(Wt = Wt.sort(function (nn, sn) {
              return nn - sn
            })),
              f.push(Wt[0])
            for (var Ge = 1; Ge < Wt.length; Ge += 2) {
              var de = Wt[Ge]
              !isNaN(de) && f.indexOf(de) === -1 && f.push(de)
            }
          }
          return f
        },
        Hs = { analyze: qs, limits: Xs },
        Ys = D,
        Yh = function (s, o) {
          ;(s = new Ys(s)), (o = new Ys(o))
          var l = s.luminance(),
            u = o.luminance()
          return l > u ? (l + 0.05) / (u + 0.05) : (u + 0.05) / (l + 0.05)
        },
        Zs = D,
        Bt = Math.sqrt,
        ht = Math.pow,
        Zh = Math.min,
        Jh = Math.max,
        Js = Math.atan2,
        Vs = Math.abs,
        cr = Math.cos,
        Qs = Math.sin,
        Vh = Math.exp,
        Ks = Math.PI,
        Qh = function (s, o, l, u, d) {
          l === void 0 && (l = 1),
            u === void 0 && (u = 1),
            d === void 0 && (d = 1)
          var p = function (de) {
              return (360 * de) / (2 * Ks)
            },
            f = function (de) {
              return (2 * Ks * de) / 360
            }
          ;(s = new Zs(s)), (o = new Zs(o))
          var v = Array.from(s.lab()),
            m = v[0],
            w = v[1],
            x = v[2],
            R = Array.from(o.lab()),
            T = R[0],
            L = R[1],
            M = R[2],
            j = (m + T) / 2,
            W = Bt(ht(w, 2) + ht(x, 2)),
            G = Bt(ht(L, 2) + ht(M, 2)),
            X = (W + G) / 2,
            dt = 0.5 * (1 - Bt(ht(X, 7) / (ht(X, 7) + ht(25, 7)))),
            ft = w * (1 + dt),
            yt = L * (1 + dt),
            U = Bt(ht(ft, 2) + ht(x, 2)),
            C = Bt(ht(yt, 2) + ht(M, 2)),
            F = (U + C) / 2,
            B = p(Js(x, ft)),
            N = p(Js(M, yt)),
            pt = B >= 0 ? B : B + 360,
            K = N >= 0 ? N : N + 360,
            q = Vs(pt - K) > 180 ? (pt + K + 360) / 2 : (pt + K) / 2,
            Y =
              1 -
              0.17 * cr(f(q - 30)) +
              0.24 * cr(f(2 * q)) +
              0.32 * cr(f(3 * q + 6)) -
              0.2 * cr(f(4 * q - 63)),
            Z = K - pt
          ;(Z = Vs(Z) <= 180 ? Z : K <= pt ? Z + 360 : Z - 360),
            (Z = 2 * Bt(U * C) * Qs(f(Z) / 2))
          var V = T - m,
            $t = C - U,
            Kt = 1 + (0.015 * ht(j - 50, 2)) / Bt(20 + ht(j - 50, 2)),
            te = 1 + 0.045 * F,
            Fe = 1 + 0.015 * F * Y,
            ze = 30 * Vh(-ht((q - 275) / 25, 2)),
            Wt = 2 * Bt(ht(F, 7) / (ht(F, 7) + ht(25, 7))),
            fe = -Wt * Qs(2 * f(ze)),
            Ge = Bt(
              ht(V / (l * Kt), 2) +
                ht($t / (u * te), 2) +
                ht(Z / (d * Fe), 2) +
                fe * ($t / (u * te)) * (Z / (d * Fe))
            )
          return Jh(0, Zh(100, Ge))
        },
        ti = D,
        Kh = function (s, o, l) {
          l === void 0 && (l = "lab"), (s = new ti(s)), (o = new ti(o))
          var u = s.get(l),
            d = o.get(l),
            p = 0
          for (var f in u) {
            var v = (u[f] || 0) - (d[f] || 0)
            p += v * v
          }
          return Math.sqrt(p)
        },
        tu = D,
        eu = function () {
          for (var s = [], o = arguments.length; o--; ) s[o] = arguments[o]
          try {
            return (
              new (Function.prototype.bind.apply(tu, [null].concat(s)))(), !0
            )
          } catch {
            return !1
          }
        },
        ei = lt,
        ri = Qr,
        ru = {
          cool: function () {
            return ri([ei.hsl(180, 1, 0.9), ei.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return ri(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
          }
        },
        fr = {
          OrRd: [
            "#fff7ec",
            "#fee8c8",
            "#fdd49e",
            "#fdbb84",
            "#fc8d59",
            "#ef6548",
            "#d7301f",
            "#b30000",
            "#7f0000"
          ],
          PuBu: [
            "#fff7fb",
            "#ece7f2",
            "#d0d1e6",
            "#a6bddb",
            "#74a9cf",
            "#3690c0",
            "#0570b0",
            "#045a8d",
            "#023858"
          ],
          BuPu: [
            "#f7fcfd",
            "#e0ecf4",
            "#bfd3e6",
            "#9ebcda",
            "#8c96c6",
            "#8c6bb1",
            "#88419d",
            "#810f7c",
            "#4d004b"
          ],
          Oranges: [
            "#fff5eb",
            "#fee6ce",
            "#fdd0a2",
            "#fdae6b",
            "#fd8d3c",
            "#f16913",
            "#d94801",
            "#a63603",
            "#7f2704"
          ],
          BuGn: [
            "#f7fcfd",
            "#e5f5f9",
            "#ccece6",
            "#99d8c9",
            "#66c2a4",
            "#41ae76",
            "#238b45",
            "#006d2c",
            "#00441b"
          ],
          YlOrBr: [
            "#ffffe5",
            "#fff7bc",
            "#fee391",
            "#fec44f",
            "#fe9929",
            "#ec7014",
            "#cc4c02",
            "#993404",
            "#662506"
          ],
          YlGn: [
            "#ffffe5",
            "#f7fcb9",
            "#d9f0a3",
            "#addd8e",
            "#78c679",
            "#41ab5d",
            "#238443",
            "#006837",
            "#004529"
          ],
          Reds: [
            "#fff5f0",
            "#fee0d2",
            "#fcbba1",
            "#fc9272",
            "#fb6a4a",
            "#ef3b2c",
            "#cb181d",
            "#a50f15",
            "#67000d"
          ],
          RdPu: [
            "#fff7f3",
            "#fde0dd",
            "#fcc5c0",
            "#fa9fb5",
            "#f768a1",
            "#dd3497",
            "#ae017e",
            "#7a0177",
            "#49006a"
          ],
          Greens: [
            "#f7fcf5",
            "#e5f5e0",
            "#c7e9c0",
            "#a1d99b",
            "#74c476",
            "#41ab5d",
            "#238b45",
            "#006d2c",
            "#00441b"
          ],
          YlGnBu: [
            "#ffffd9",
            "#edf8b1",
            "#c7e9b4",
            "#7fcdbb",
            "#41b6c4",
            "#1d91c0",
            "#225ea8",
            "#253494",
            "#081d58"
          ],
          Purples: [
            "#fcfbfd",
            "#efedf5",
            "#dadaeb",
            "#bcbddc",
            "#9e9ac8",
            "#807dba",
            "#6a51a3",
            "#54278f",
            "#3f007d"
          ],
          GnBu: [
            "#f7fcf0",
            "#e0f3db",
            "#ccebc5",
            "#a8ddb5",
            "#7bccc4",
            "#4eb3d3",
            "#2b8cbe",
            "#0868ac",
            "#084081"
          ],
          Greys: [
            "#ffffff",
            "#f0f0f0",
            "#d9d9d9",
            "#bdbdbd",
            "#969696",
            "#737373",
            "#525252",
            "#252525",
            "#000000"
          ],
          YlOrRd: [
            "#ffffcc",
            "#ffeda0",
            "#fed976",
            "#feb24c",
            "#fd8d3c",
            "#fc4e2a",
            "#e31a1c",
            "#bd0026",
            "#800026"
          ],
          PuRd: [
            "#f7f4f9",
            "#e7e1ef",
            "#d4b9da",
            "#c994c7",
            "#df65b0",
            "#e7298a",
            "#ce1256",
            "#980043",
            "#67001f"
          ],
          Blues: [
            "#f7fbff",
            "#deebf7",
            "#c6dbef",
            "#9ecae1",
            "#6baed6",
            "#4292c6",
            "#2171b5",
            "#08519c",
            "#08306b"
          ],
          PuBuGn: [
            "#fff7fb",
            "#ece2f0",
            "#d0d1e6",
            "#a6bddb",
            "#67a9cf",
            "#3690c0",
            "#02818a",
            "#016c59",
            "#014636"
          ],
          Viridis: [
            "#440154",
            "#482777",
            "#3f4a8a",
            "#31678e",
            "#26838f",
            "#1f9d8a",
            "#6cce5a",
            "#b6de2b",
            "#fee825"
          ],
          Spectral: [
            "#9e0142",
            "#d53e4f",
            "#f46d43",
            "#fdae61",
            "#fee08b",
            "#ffffbf",
            "#e6f598",
            "#abdda4",
            "#66c2a5",
            "#3288bd",
            "#5e4fa2"
          ],
          RdYlGn: [
            "#a50026",
            "#d73027",
            "#f46d43",
            "#fdae61",
            "#fee08b",
            "#ffffbf",
            "#d9ef8b",
            "#a6d96a",
            "#66bd63",
            "#1a9850",
            "#006837"
          ],
          RdBu: [
            "#67001f",
            "#b2182b",
            "#d6604d",
            "#f4a582",
            "#fddbc7",
            "#f7f7f7",
            "#d1e5f0",
            "#92c5de",
            "#4393c3",
            "#2166ac",
            "#053061"
          ],
          PiYG: [
            "#8e0152",
            "#c51b7d",
            "#de77ae",
            "#f1b6da",
            "#fde0ef",
            "#f7f7f7",
            "#e6f5d0",
            "#b8e186",
            "#7fbc41",
            "#4d9221",
            "#276419"
          ],
          PRGn: [
            "#40004b",
            "#762a83",
            "#9970ab",
            "#c2a5cf",
            "#e7d4e8",
            "#f7f7f7",
            "#d9f0d3",
            "#a6dba0",
            "#5aae61",
            "#1b7837",
            "#00441b"
          ],
          RdYlBu: [
            "#a50026",
            "#d73027",
            "#f46d43",
            "#fdae61",
            "#fee090",
            "#ffffbf",
            "#e0f3f8",
            "#abd9e9",
            "#74add1",
            "#4575b4",
            "#313695"
          ],
          BrBG: [
            "#543005",
            "#8c510a",
            "#bf812d",
            "#dfc27d",
            "#f6e8c3",
            "#f5f5f5",
            "#c7eae5",
            "#80cdc1",
            "#35978f",
            "#01665e",
            "#003c30"
          ],
          RdGy: [
            "#67001f",
            "#b2182b",
            "#d6604d",
            "#f4a582",
            "#fddbc7",
            "#ffffff",
            "#e0e0e0",
            "#bababa",
            "#878787",
            "#4d4d4d",
            "#1a1a1a"
          ],
          PuOr: [
            "#7f3b08",
            "#b35806",
            "#e08214",
            "#fdb863",
            "#fee0b6",
            "#f7f7f7",
            "#d8daeb",
            "#b2abd2",
            "#8073ac",
            "#542788",
            "#2d004b"
          ],
          Set2: [
            "#66c2a5",
            "#fc8d62",
            "#8da0cb",
            "#e78ac3",
            "#a6d854",
            "#ffd92f",
            "#e5c494",
            "#b3b3b3"
          ],
          Accent: [
            "#7fc97f",
            "#beaed4",
            "#fdc086",
            "#ffff99",
            "#386cb0",
            "#f0027f",
            "#bf5b17",
            "#666666"
          ],
          Set1: [
            "#e41a1c",
            "#377eb8",
            "#4daf4a",
            "#984ea3",
            "#ff7f00",
            "#ffff33",
            "#a65628",
            "#f781bf",
            "#999999"
          ],
          Set3: [
            "#8dd3c7",
            "#ffffb3",
            "#bebada",
            "#fb8072",
            "#80b1d3",
            "#fdb462",
            "#b3de69",
            "#fccde5",
            "#d9d9d9",
            "#bc80bd",
            "#ccebc5",
            "#ffed6f"
          ],
          Dark2: [
            "#1b9e77",
            "#d95f02",
            "#7570b3",
            "#e7298a",
            "#66a61e",
            "#e6ab02",
            "#a6761d",
            "#666666"
          ],
          Paired: [
            "#a6cee3",
            "#1f78b4",
            "#b2df8a",
            "#33a02c",
            "#fb9a99",
            "#e31a1c",
            "#fdbf6f",
            "#ff7f00",
            "#cab2d6",
            "#6a3d9a",
            "#ffff99",
            "#b15928"
          ],
          Pastel2: [
            "#b3e2cd",
            "#fdcdac",
            "#cbd5e8",
            "#f4cae4",
            "#e6f5c9",
            "#fff2ae",
            "#f1e2cc",
            "#cccccc"
          ],
          Pastel1: [
            "#fbb4ae",
            "#b3cde3",
            "#ccebc5",
            "#decbe4",
            "#fed9a6",
            "#ffffcc",
            "#e5d8bd",
            "#fddaec",
            "#f2f2f2"
          ]
        },
        rn = 0,
        ni = Object.keys(fr);
      rn < ni.length;
      rn += 1
    ) {
      var si = ni[rn]
      fr[si.toLowerCase()] = fr[si]
    }
    var nu = fr,
      ct = lt
    ;(ct.average = mh),
      (ct.bezier = kh),
      (ct.blend = Fh),
      (ct.cubehelix = jh),
      (ct.mix = ct.interpolate = zs),
      (ct.random = Gh),
      (ct.scale = Qr),
      (ct.analyze = Hs.analyze),
      (ct.contrast = Yh),
      (ct.deltaE = Qh),
      (ct.distance = Kh),
      (ct.limits = Hs.limits),
      (ct.valid = eu),
      (ct.scales = ru),
      (ct.colors = vs),
      (ct.brewer = nu)
    var su = ct
    return su
  })
})(Mi)
var et = Mi.exports
const ne = (() => (
  (et.Color.symbol = et.Color.prototype.symbol =
    Symbol.for("@motion-canvas/core/types/Color")),
  (et.Color.lerp = et.Color.prototype.lerp =
    (n, t, e, r = "lch") => {
      typeof n == "string" && (n = new et.Color(n)),
        typeof t == "string" && (t = new et.Color(t))
      const i = n instanceof et.Color,
        a = t instanceof et.Color
      return (
        i || (n = a ? t.alpha(0) : new et.Color("rgba(0, 0, 0, 0)")),
        a || (t = i ? n.alpha(0) : new et.Color("rgba(0, 0, 0, 0)")),
        et.mix(n, t, e, r)
      )
    }),
  (et.Color.createLerp = et.Color.prototype.createLerp =
    (n) => (t, e, r) =>
      et.Color.lerp(t, e, r, n)),
  (et.Color.createSignal = (n, t = et.Color.lerp) =>
    new Te(n, t, void 0, (e) => new et.Color(e)).toSignal()),
  (et.Color.prototype.toSymbol = () => et.Color.symbol),
  (et.Color.prototype.toUniform = function (n, t) {
    n.uniform4fv(t, this.gl())
  }),
  (et.Color.prototype.serialize = function () {
    return this.css()
  }),
  (et.Color.prototype.lerp = function (n, t, e) {
    return et.Color.lerp(this, n, t, e)
  }),
  et.Color
))()
function Hu(n, t) {
  return g.fromDegrees(n).transform(t).degrees
}
function hn(n, t) {
  return g.magnitude(t.m11, t.m12) * n
}
class un extends Ct {
  constructor() {
    super(...arguments), (this.type = ne.symbol)
  }
  parse(t) {
    return t === null ? null : new ne(t)
  }
  serialize() {
    var t
    return ((t = this.value.current) == null ? void 0 : t.serialize()) ?? null
  }
}
class ye extends Ct {
  constructor(t, e, r = ((i) => ((i = e[0]) == null ? void 0 : i.value))()) {
    super(t, r), (this.options = e), (this.type = ye.symbol)
  }
  set(t) {
    var e
    super.set((e = this.getOption(t)) == null ? void 0 : e.value)
  }
  parse(t) {
    var e
    return (e = this.getOption(t)) == null ? void 0 : e.value
  }
  getOption(t) {
    return this.options.find((e) => e.value === t) ?? this.options[0]
  }
}
ye.symbol = Symbol.for("@motion-canvas/core/meta/EnumMetaField")
class Yu extends Ct {
  get onFieldsChanged() {
    return this.fields.subscribable
  }
  get options() {
    return this.optionFields[this.current]
  }
  constructor(t, e, r = 0) {
    var c, b
    const i = e.plugins.flatMap((y) => {
        var k
        return ((k = y.exporters) == null ? void 0 : k.call(y, e)) ?? []
      }),
      a = i.map((y) => y.meta(e)),
      h = new ye(
        "exporter",
        i.map((y) => ({ value: y.id, text: y.displayName })),
        (c = i[r]) == null ? void 0 : c.id
      )
    super(t, { name: h.get(), options: (b = a[r]) == null ? void 0 : b.get() }),
      (this.current = r),
      (this.type = Object),
      (this.handleChange = () => {
        var I, J, tt
        const y = this.exporterField.get(),
          k = Math.max(
            this.exporters.findIndex((at) => at.id === y),
            0
          )
        this.current !== k &&
          ((I = this.options) == null ||
            I.onChanged.unsubscribe(this.handleChange),
          (this.current = k),
          (J = this.options) == null ||
            J.onChanged.subscribe(this.handleChange, !1),
          (this.fields.current = this.options
            ? [this.exporterField, this.options]
            : [this.exporterField])),
          (this.value.current = {
            name: this.exporterField.get(),
            options: ((tt = this.options) == null ? void 0 : tt.get()) ?? null
          })
      }),
      (this.exporters = i),
      (this.exporterField = h),
      this.exporterField.onChanged.subscribe(this.handleChange, !1),
      this.exporterField.disable(a.length < 2).space(),
      (this.optionFields = a),
      (this.fields = new we([this.exporterField])),
      this.options &&
        (this.options.onChanged.subscribe(this.handleChange, !1),
        (this.fields.current = [this.exporterField, this.options]))
  }
  set(t) {
    var e
    this.exporterField.set(t.name),
      (e = this.options) == null || e.set(t.options ?? {})
  }
  serialize() {
    var t
    return {
      name: this.exporterField.serialize(),
      options: ((t = this.options) == null ? void 0 : t.serialize()) ?? null
    }
  }
  clone() {
    return new this.constructor(this.name, this.exporters, this.current)
  }
}
var qe
class bn {
  constructor(t, e = !1) {
    ;(this.name = t),
      (this.source = e),
      (this.lock = new lu()),
      (this.ignoreChange = !1),
      (this.cache = null),
      (this.metaField = null),
      (this.handleChanged = async () => {})
  }
  attach(t) {
    var e
    this.metaField ||
      ((this.metaField = t),
      this.cache && this.metaField.set(this.cache),
      (e = this.metaField) == null || e.onChanged.subscribe(this.handleChanged))
  }
  async saveData(t) {
    if (this.source === !1) return
    if (!this.source)
      throw new Error(`The meta file for ${this.name} is missing.`)
    if (qe.sourceLookup[this.source])
      throw new Error(`Metadata for ${this.name} is already being updated`)
    const e = this.source
    await new Promise((r, i) => {
      setTimeout(() => {
        delete qe.sourceLookup[e],
          i(`Connection timeout when updating metadata for ${this.name}`)
      }, 1e3),
        (qe.sourceLookup[e] = () => {
          delete qe.sourceLookup[e], r()
        }),
        (void 0).send("motion-canvas:meta", { source: e, data: t })
    })
  }
  loadData(t) {
    var e
    ;(this.ignoreChange = !0),
      (this.cache = t),
      (e = this.metaField) == null || e.set(t),
      (this.ignoreChange = !1)
  }
}
qe = bn
bn.sourceLookup = {}
class on extends Ct {
  constructor() {
    super(...arguments), (this.type = Number), (this.presets = [])
  }
  parse(t) {
    let e = parseFloat(t)
    return (
      this.min !== void 0 && e < this.min && (e = this.min),
      this.max !== void 0 && e > this.max && (e = this.max),
      e
    )
  }
  getPresets() {
    return this.presets
  }
  setPresets(t) {
    return (this.presets = t), this
  }
  setRange(t, e) {
    return (this.min = t), (this.max = e), this
  }
  getMin() {
    return this.min ?? -1 / 0
  }
  getMax() {
    return this.max ?? 1 / 0
  }
}
class Rr extends Ct {
  constructor() {
    super(...arguments), (this.type = Rr.symbol)
  }
  parse(t) {
    return this.parseRange(1 / 0, t[0], t[1] ?? 1 / 0)
  }
  update(t, e, r, i) {
    this.value.current = this.parseRange(r / i - Xe, t / i - Xe, e / i - Xe)
  }
  parseRange(t, e = this.value.current[0], r = this.value.current[1]) {
    return (
      (e = wt(0, t, e)),
      (r = wt(0, t, r ?? 1 / 0)),
      e > r && ([e, r] = [r, e]),
      r >= t && (r = 1 / 0),
      [e, r]
    )
  }
}
Rr.symbol = Symbol.for("@motion-canvas/core/meta/RangeMetaField")
class Li extends Ct {
  constructor() {
    super(...arguments), (this.type = g.symbol)
  }
  parse(t) {
    return new g(t)
  }
  serialize() {
    return this.value.current.serialize()
  }
}
class Ne {
  static meta(t) {
    return new Ht(this.displayName, {
      fastStart: new yr("fast start", !0),
      includeAudio: new yr("include audio", !0).disable(!t.audio)
    })
  }
  static async create(t, e) {
    return new Ne(t, e)
  }
  constructor(t, e) {
    ;(this.project = t), (this.settings = e)
  }
  async start() {
    const t = this.settings.exporter.options
    await this.invoke("start", {
      ...this.settings,
      ...t,
      audio: this.project.audio,
      audioOffset:
        this.project.meta.shared.audioOffset.get() - this.settings.range[0]
    })
  }
  async handleFrame(t) {
    await this.invoke("handleFrame", { data: t.toDataURL("image/png") })
  }
  async stop(t) {
    await this.invoke("end", t)
  }
  invoke(t, e) {
    throw new Error("FFmpegExporter can only be used locally.")
  }
}
Ne.id = "@motion-canvas/ffmpeg"
Ne.displayName = "Video (FFmpeg)"
Ne.response = new Ft()
const Cc = iu({
  name: "ffmpeg-plugin",
  exporters() {
    return [Ne]
  }
})
function Ju(n) {
  var t
  return !!((t = n.prototype) != null && t.isClass)
}
const Vu = Symbol.for("@motion-canvas/2d/fragment")
function kc(n, t, e) {
  const { ref: r, children: i, ...a } = t,
    h = Array.isArray(i) ? i.flat() : i
  if (n === Vu) return h
  if (Ju(n)) {
    const c = new n({ ...a, children: h, key: e })
    return r == null || r(c), c
  } else return n({ ...a, ref: r, children: h, key: e })
}
const pi = {
  invert: { name: "invert" },
  sepia: { name: "sepia" },
  grayscale: { name: "grayscale" },
  brightness: { name: "brightness", default: 1 },
  contrast: { name: "contrast", default: 1 },
  saturate: { name: "saturate", default: 1 },
  hue: { name: "hue-rotate", unit: "deg", scale: 1 },
  blur: { name: "blur", transform: !0, unit: "px", scale: 1 }
}
class Qu {
  get name() {
    return this.props.name
  }
  get default() {
    return this.props.default
  }
  constructor(t) {
    ;(this.props = {
      name: "invert",
      default: 0,
      unit: "%",
      scale: 100,
      transform: !1,
      ...t,
      value: t.value ?? t.default ?? 0
    }),
      (this.value = je(this.props.value, Q, this))
  }
  isActive() {
    return this.value() !== this.props.default
  }
  serialize(t) {
    let e = this.value()
    return (
      this.props.transform && (e = hn(e, t)),
      `${this.props.name}(${e * this.props.scale}${this.props.unit})`
    )
  }
}
const Ut = Symbol.for("@motion-canvas/2d/decorators/initializers")
function Je(n, t) {
  if (!n[Ut]) n[Ut] = []
  else if (n[Ut] && !Object.prototype.hasOwnProperty.call(n, Ut)) {
    const e = Object.getPrototypeOf(n)
    n[Ut] = [...e[Ut]]
  }
  n[Ut].push(t)
}
function Ku(n, t) {
  if (n[Ut])
    try {
      n[Ut].forEach((e) => e(n, t))
    } catch (e) {
      throw (e.inspect ?? (e.inspect = n.key), e)
    }
}
function E() {
  return (n, t) => {
    Je(n, (e) => {
      const r = Object.getPrototypeOf(e)[t]
      e[t] = Gu(r.bind(e), e)
    })
  }
}
function cn(n = {}, t, e) {
  const r = {}
  if (e && t) {
    const i = n.setter ?? (t == null ? void 0 : t[`set${ve(e)}`])
    i && (r.setter = i.bind(t))
    const a = n.getter ?? (t == null ? void 0 : t[`get${ve(e)}`])
    a && (r.getter = a.bind(t))
    const h = n.tweener ?? (t == null ? void 0 : t[`tween${ve(e)}`])
    h && (r.tweener = h.bind(t))
  }
  return r
}
const Gt = Symbol.for("@motion-canvas/2d/decorators/properties")
function Ce(n, t) {
  var e
  return ((e = n[Gt]) == null ? void 0 : e[t]) ?? null
}
function yn(n, t) {
  let e
  return (
    n[Gt]
      ? n[Gt] && !Object.prototype.hasOwnProperty.call(n, Gt)
        ? (n[Gt] = e =
            Object.fromEntries(
              Object.entries(n[Gt]).map(([r, i]) => [r, { ...i }])
            ))
        : (e = n[Gt])
      : (n[Gt] = e = {}),
    e[t] ?? (e[t] = { cloneable: !0, inspectable: !0, compoundEntries: [] }),
    e[t]
  )
}
function $i(n) {
  return n && typeof n == "object" ? n[Gt] ?? {} : {}
}
function wn(n, t) {
  Ku(n)
  for (const [e, r] of Object.entries($i(n))) {
    const i = n[e]
    if ((i.reset(), t[e] !== void 0 && i(t[e]), r.compoundEntries !== void 0))
      for (const [a, h] of r.compoundEntries) h in t && i[a](t[h])
  }
}
function P() {
  return (n, t) => {
    const e = yn(n, t)
    Je(n, (r) => {
      var c
      let i = e.default
      const a = r[`getDefault${ve(t)}`]
      a && (i = () => a.call(r, e.default))
      const h = new Te(
        i,
        e.interpolationFunction ?? De,
        r,
        (c = e.parser) == null ? void 0 : c.bind(r),
        cn(e, r, t)
      )
      r[t] = h.toSignal()
    })
  }
}
function O(n) {
  return (t, e) => {
    const r = Ce(t, e)
    if (!r) {
      mt().error(`Missing property decorator for "${e.toString()}"`)
      return
    }
    r.default = n
  }
}
function xn(n) {
  return (t, e) => {
    const r = Ce(t, e)
    if (!r) {
      mt().error(`Missing property decorator for "${e.toString()}"`)
      return
    }
    r.interpolationFunction = n
  }
}
function Tn(n) {
  return (t, e) => {
    const r = Ce(t, e)
    if (!r) {
      mt().error(`Missing property decorator for "${e.toString()}"`)
      return
    }
    r.parser = n
  }
}
function Ve(n) {
  return (t, e) => {
    const r = Ce(t, e)
    if (!r) {
      mt().error(`Missing property decorator for "${e.toString()}"`)
      return
    }
    ;(r.parser = (i) => new n(i)),
      "lerp" in n &&
        (r.interpolationFunction ?? (r.interpolationFunction = n.lerp))
  }
}
function ke(n = !0) {
  return (t, e) => {
    const r = Ce(t, e)
    if (!r) {
      mt().error(`Missing property decorator for "${e.toString()}"`)
      return
    }
    r.cloneable = n
  }
}
function Oi(n = !0) {
  return (t, e) => {
    const r = Ce(t, e)
    if (!r) {
      mt().error(`Missing property decorator for "${e.toString()}"`)
      return
    }
    r.inspectable = n
  }
}
function Ai(n, t = Sr) {
  return (e, r) => {
    const i = yn(e, r)
    ;(i.compound = !0),
      (i.compoundEntries = Object.entries(n)),
      Je(e, (a) => {
        if (!i.parser) {
          mt().error(`Missing parser decorator for "${r.toString()}"`)
          return
        }
        const h = i.default,
          c = i.parser.bind(a),
          b = new t(
            i.compoundEntries.map(([y, k]) => {
              const I = new Te(
                be(h, (J) => c(J)[y]),
                Q,
                a,
                void 0,
                cn(void 0, a, k)
              ).toSignal()
              return [y, I]
            }),
            c,
            h,
            i.interpolationFunction ?? De,
            a,
            cn(i, a, r)
          )
        a[r] = b.toSignal()
      })
  }
}
function Zt(n) {
  return (t, e) => {
    Ai(
      typeof n == "object" ? n : { x: n ? `${n}X` : "x", y: n ? `${n}Y` : "y" },
      Pi
    )(t, e),
      Ve(g)(t, e)
  }
}
var oe =
  (globalThis && globalThis.__decorate) ||
  function (n, t, e, r) {
    var i = arguments.length,
      a =
        i < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, e))
          : r,
      h
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      a = Reflect.decorate(n, t, e, r)
    else
      for (var c = n.length - 1; c >= 0; c--)
        (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
    return i > 3 && a && Object.defineProperty(t, e, a), a
  }
class Nt {
  constructor(t) {
    wn(this, t)
  }
  canvasGradient(t) {
    let e
    switch (this.type()) {
      case "linear":
        e = t.createLinearGradient(
          this.from.x(),
          this.from.y(),
          this.to.x(),
          this.to.y()
        )
        break
      case "conic":
        e = t.createConicGradient(this.angle(), this.from.x(), this.from.y())
        break
      case "radial":
        e = t.createRadialGradient(
          this.from.x(),
          this.from.y(),
          this.fromRadius(),
          this.to.x(),
          this.to.y(),
          this.toRadius()
        )
        break
    }
    for (const { offset: r, color: i } of this.stops())
      e.addColorStop(xe(r), new ne(xe(i)).serialize())
    return e
  }
}
oe([O("linear"), P()], Nt.prototype, "type", void 0)
oe([Zt("from")], Nt.prototype, "from", void 0)
oe([Zt("to")], Nt.prototype, "to", void 0)
oe([O(0), P()], Nt.prototype, "angle", void 0)
oe([O(0), P()], Nt.prototype, "fromRadius", void 0)
oe([O(0), P()], Nt.prototype, "toRadius", void 0)
oe([O([]), P()], Nt.prototype, "stops", void 0)
oe([E()], Nt.prototype, "canvasGradient", null)
var Cn =
  (globalThis && globalThis.__decorate) ||
  function (n, t, e, r) {
    var i = arguments.length,
      a =
        i < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, e))
          : r,
      h
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      a = Reflect.decorate(n, t, e, r)
    else
      for (var c = n.length - 1; c >= 0; c--)
        (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
    return i > 3 && a && Object.defineProperty(t, e, a), a
  }
class Qe {
  constructor(t) {
    wn(this, t)
  }
  canvasPattern(t) {
    return t.createPattern(this.image(), this.repetition())
  }
}
Cn([P()], Qe.prototype, "image", void 0)
Cn([O(null), P()], Qe.prototype, "repetition", void 0)
Cn([E()], Qe.prototype, "canvasPattern", null)
function tc(n) {
  return n === null ? null : n instanceof Nt || n instanceof Qe ? n : new ne(n)
}
function fn(n, t) {
  return n === null
    ? ""
    : n instanceof ne
    ? n.serialize()
    : n instanceof Nt
    ? n.canvasGradient(t)
    : n instanceof Qe
    ? n.canvasPattern(t) ?? ""
    : ""
}
function gi(n, t, e, r, i) {
  if (e.top === 0 && e.right === 0 && e.bottom === 0 && e.left === 0) {
    ec(n, t)
    return
  }
  const a = re(e.top, e.right, e.left, t),
    h = re(e.right, e.top, e.bottom, t),
    c = re(e.bottom, e.left, e.right, t),
    b = re(e.left, e.bottom, e.top, t)
  if (r) {
    const y = (k) => {
      const I = k * i
      return k - I
    }
    n.moveTo(t.left + a, t.top),
      n.lineTo(t.right - h, t.top),
      n.bezierCurveTo(
        t.right - y(h),
        t.top,
        t.right,
        t.top + y(h),
        t.right,
        t.top + h
      ),
      n.lineTo(t.right, t.bottom - c),
      n.bezierCurveTo(
        t.right,
        t.bottom - y(c),
        t.right - y(c),
        t.bottom,
        t.right - c,
        t.bottom
      ),
      n.lineTo(t.left + b, t.bottom),
      n.bezierCurveTo(
        t.left + y(b),
        t.bottom,
        t.left,
        t.bottom - y(b),
        t.left,
        t.bottom - b
      ),
      n.lineTo(t.left, t.top + a),
      n.bezierCurveTo(
        t.left,
        t.top + y(a),
        t.left + y(a),
        t.top,
        t.left + a,
        t.top
      )
    return
  }
  n.moveTo(t.left + a, t.top),
    n.arcTo(t.right, t.top, t.right, t.bottom, h),
    n.arcTo(t.right, t.bottom, t.left, t.bottom, c),
    n.arcTo(t.left, t.bottom, t.left, t.top, b),
    n.arcTo(t.left, t.top, t.right, t.top, a)
}
function re(n, t, e, r) {
  const i = n + t > r.width ? r.width * (n / (n + t)) : n,
    a = n + e > r.height ? r.height * (n / (n + e)) : n
  return Math.min(i, a)
}
function ec(n, t) {
  n.rect(t.x, t.y, t.width, t.height)
}
function Pr(n, t) {
  n.moveTo(t.x, t.y)
}
function qt(n, t) {
  n.lineTo(t.x, t.y)
}
function ge(n, t) {
  if (!(t.length < 2)) {
    Pr(n, t[0])
    for (const e of t.slice(1)) qt(n, e)
  }
}
function rc(n, t, e = 8) {
  qt(n, t.addY(-e)), qt(n, t.addY(e)), qt(n, t), qt(n, t.addX(-e)), nc(n, t, e)
}
function nc(n, t, e, r = 0, i = Math.PI * 2, a = !1) {
  n.arc(t.x, t.y, e, r, i, a)
}
function sc(n, t, e, r) {
  n.bezierCurveTo(t.x, t.y, e.x, e.y, r.x, r.y)
}
function kn(n) {
  return (t) => t instanceof n
}
function Fi() {
  return (n, t) => {
    P()(n, t), Tn(tc)(n, t), xn(ne.lerp)(n, t), O(null)(n, t)
  }
}
function ic() {
  return (n, t) => {
    P()(n, t), Ve(ne)(n, t)
  }
}
function le(n, t = (e) => e) {
  return (e, r) => {
    e[`getDefault${ve(r)}`] = function () {
      this.requestLayoutUpdate()
      const i = this.element.style[n]
      this.element.style[n] = ""
      const a = t.call(this, this.styles.getPropertyValue(n))
      return (this.element.style[n] = i), a
    }
  }
}
class ac extends Te {
  constructor(t, e) {
    super(t, De, e)
    for (const r in pi) {
      const i = pi[r]
      Object.defineProperty(this.invokable, r, {
        value: (a, h, c = _t) => {
          var y, k, I
          if (a === void 0)
            return (
              ((k =
                (y = this.get()) == null
                  ? void 0
                  : y.find((J) => J.name === i.name)) == null
                ? void 0
                : k.value()) ??
              i.default ??
              0
            )
          let b =
            (I = this.get()) == null ? void 0 : I.find((J) => J.name === i.name)
          return (
            b || ((b = new Qu(i)), this.set([...this.get(), b])),
            h === void 0 ? (b.value(a), this.owner) : b.value(a, h, c)
          )
        }
      })
    }
  }
  *tweener(t, e, r) {
    const i = this.get(),
      a = xe(t)
    if (lc(i, a)) {
      yield* me(...i.map((b, y) => b.value(a[y].value(), e, r))), this.set(a)
      return
    }
    for (const b of a) b.value(b.default)
    const h = a.map((b) => b.value.context.raw()),
      c = i.length > 0 && a.length > 0 ? e / 2 : e
    i.length > 0 && (yield* me(...i.map((b) => b.value(b.default, c, r)))),
      this.set(a),
      a.length > 0 && (yield* me(...a.map((b, y) => b.value(h[y], c, r))))
  }
}
function oc() {
  return (n, t) => {
    const e = yn(n, t)
    Je(n, (r) => {
      r[t] = new ac(e.default ?? [], r).toSignal()
    })
  }
}
function lc(n, t) {
  if (n.length !== t.length) return !1
  for (let e = 0; e < n.length; e++) if (n[e].name !== t[e].name) return !1
  return !0
}
const hc = Symbol.for("@motion-canvas/2d/nodeName")
function he(n) {
  return function (t) {
    t.prototype[hc] = n
  }
}
function vi(n, t) {
  const e = wt(0, n.arcLength, t)
  let r = 0
  for (const i of n.segments) {
    const a = r
    if (((r += i.arcLength), r >= e)) {
      const h = (e - a) / i.arcLength
      return i.getPoint(wt(0, 1, h))
    }
  }
  return { position: g.zero, tangent: g.up, normal: g.up }
}
function Mr(n) {
  return (t, e) => {
    Ai({
      top: n ? `${n}Top` : "top",
      right: n ? `${n}Right` : "right",
      bottom: n ? `${n}Bottom` : "bottom",
      left: n ? `${n}Left` : "left"
    })(t, e),
      Ve(At)(t, e)
  }
}
function uc(n) {
  let t
  return (
    n
      ? typeof n == "string"
        ? (t = [{ fragment: n }])
        : Array.isArray(n)
        ? (t = n.map((e) => (typeof e == "string" ? { fragment: e } : e)))
        : (t = [n])
      : (t = []),
    !Ye().experimentalFeatures &&
      t.length > 0 &&
      ((t = []),
      mt().log({
        ...vu("Node uses experimental shaders."),
        inspect: this.key
      })),
    t
  )
}
function gr() {
  return Ye()
}
var _ =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var i = arguments.length,
        a =
          i < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        h
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        a = Reflect.decorate(n, t, e, r)
      else
        for (var c = n.length - 1; c >= 0; c--)
          (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
      return i > 3 && a && Object.defineProperty(t, e, a), a
    },
  vr
let z = (vr = class {
  get x() {
    return this.position.x
  }
  get y() {
    return this.position.y
  }
  getAbsolutePosition() {
    return new g(this.parentToWorld().transformPoint(this.position()))
  }
  setAbsolutePosition(t) {
    this.position(be(t, (e) => new g(e).transformAsPoint(this.worldToParent())))
  }
  getAbsoluteRotation() {
    const t = this.localToWorld()
    return g.degrees(t.m11, t.m12)
  }
  setAbsoluteRotation(t) {
    this.rotation(be(t, (e) => Hu(e, this.worldToParent())))
  }
  getAbsoluteScale() {
    const t = this.localToWorld()
    return new g(g.magnitude(t.m11, t.m12), g.magnitude(t.m21, t.m22))
  }
  setAbsoluteScale(t) {
    this.scale(be(t, (e) => this.getRelativeScale(new g(e))))
  }
  getRelativeScale(t) {
    var r
    const e =
      ((r = this.parent()) == null ? void 0 : r.absoluteScale()) ?? g.one
    return t.div(e)
  }
  *tweenCompositeOperation(t, e, r) {
    const i = xe(t)
    i === "source-over"
      ? (yield* this.compositeOverride(1, e, r),
        this.compositeOverride(0),
        this.compositeOperation(i))
      : (this.compositeOperation(i),
        this.compositeOverride(1),
        yield* this.compositeOverride(0, e, r))
  }
  absoluteOpacity() {
    var t
    return (
      (((t = this.parent()) == null ? void 0 : t.absoluteOpacity()) ?? 1) *
      this.opacity()
    )
  }
  hasFilters() {
    return !!this.filters().find((t) => t.isActive())
  }
  hasShadow() {
    return (
      !!this.shadowColor() &&
      (this.shadowBlur() > 0 ||
        this.shadowOffset.x() !== 0 ||
        this.shadowOffset.y() !== 0)
    )
  }
  filterString() {
    let t = ""
    const e = this.compositeToWorld()
    for (const r of this.filters()) r.isActive() && (t += " " + r.serialize(e))
    return t
  }
  getSpawner() {
    return this.children()
  }
  setSpawner(t) {
    this.children(t)
  }
  setChildren(t) {
    if (this.children.context.raw() !== t) {
      if ((this.children.context.setter(t), !Xt(t))) this.spawnChildren(!1, t)
      else if (!this.hasSpawnedChildren)
        for (const e of this.realChildren) e.parent(null)
    }
  }
  getChildren() {
    return this.children.context.getter(), this.spawnedChildren()
  }
  spawnedChildren() {
    const t = this.children.context.getter()
    return (
      Xt(this.children.context.raw()) && this.spawnChildren(!0, t),
      this.realChildren
    )
  }
  sortedChildren() {
    return [...this.children()].sort((t, e) =>
      Math.sign(t.zIndex() - e.zIndex())
    )
  }
  constructor({ children: t, spawner: e, key: r, ...i }) {
    ;(this.compositeOverride = je(0)),
      (this.stateStack = []),
      (this.realChildren = []),
      (this.hasSpawnedChildren = !1),
      (this.parent = je(null)),
      (this.properties = $i(this))
    const a = gr()
    ;([this.key, this.unregister] = a.registerNode(this, r)),
      (this.view2D = a.getView()),
      (this.creationStack = new Error().stack),
      wn(this, i),
      e &&
        mt().warn({
          message: "Node.spawner() has been deprecated.",
          remarks: "Use <code>Node.children()</code> instead.",
          inspect: this.key,
          stack: new Error().stack
        }),
      this.children(e ?? t)
  }
  localToWorld() {
    const t = this.parent()
    return t
      ? t.localToWorld().multiply(this.localToParent())
      : this.localToParent()
  }
  worldToLocal() {
    return this.localToWorld().inverse()
  }
  worldToParent() {
    var t
    return (
      ((t = this.parent()) == null ? void 0 : t.worldToLocal()) ??
      new DOMMatrix()
    )
  }
  parentToWorld() {
    var t
    return (
      ((t = this.parent()) == null ? void 0 : t.localToWorld()) ??
      new DOMMatrix()
    )
  }
  localToParent() {
    const t = new DOMMatrix()
    return (
      t.translateSelf(this.x(), this.y()),
      t.rotateSelf(0, 0, this.rotation()),
      t.scaleSelf(this.scale.x(), this.scale.y()),
      t.skewXSelf(this.skew.x()),
      t.skewYSelf(this.skew.y()),
      t
    )
  }
  compositeToWorld() {
    var t
    return (
      ((t = this.compositeRoot()) == null ? void 0 : t.localToWorld()) ??
      new DOMMatrix()
    )
  }
  compositeRoot() {
    var t
    return this.composite()
      ? this
      : ((t = this.parent()) == null ? void 0 : t.compositeRoot()) ?? null
  }
  compositeToLocal() {
    const t = this.compositeRoot()
    if (t) {
      const e = this.worldToLocal()
      return (e.m44 = 1), t.localToWorld().multiply(e)
    }
    return new DOMMatrix()
  }
  view() {
    return this.view2D
  }
  add(t) {
    return this.insert(t, 1 / 0)
  }
  insert(t, e = 0) {
    const r = Array.isArray(t) ? t : [t]
    if (r.length === 0) return this
    const i = this.children(),
      a = i.slice(0, e)
    for (const h of r)
      h instanceof vr && (a.push(h), h.remove(), h.parent(this))
    return a.push(...i.slice(e)), this.setParsedChildren(a), this
  }
  remove() {
    const t = this.parent()
    return t === null ? this : (t.removeChild(this), this.parent(null), this)
  }
  move(t = 1) {
    const e = this.parent()
    if (t === 0 || !e) return this
    const r = e.children(),
      i = []
    if (t > 0)
      for (let a = 0; a < r.length; a++) {
        const h = r[a]
        if (h === this) {
          const c = a + t
          for (; a < c && a + 1 < r.length; a++) i[a] = r[a + 1]
        }
        i[a] = h
      }
    else
      for (let a = r.length - 1; a >= 0; a--) {
        const h = r[a]
        if (h === this) {
          const c = a + t
          for (; a > c && a > 0; a--) i[a] = r[a - 1]
        }
        i[a] = h
      }
    return e.setParsedChildren(i), this
  }
  moveUp() {
    return this.move(1)
  }
  moveDown() {
    return this.move(-1)
  }
  moveToTop() {
    return this.move(1 / 0)
  }
  moveToBottom() {
    return this.move(-1 / 0)
  }
  moveTo(t) {
    const e = this.parent()
    if (!e) return this
    const r = e.children().indexOf(this),
      i = t - r
    return this.move(i)
  }
  moveBelow(t, e = !1) {
    const r = this.parent()
    if (!r) return this
    if (t.parent() !== r)
      return (
        mt().error(
          "Cannot position nodes relative to each other if they don't belong to the same parent."
        ),
        this
      )
    const i = r.children(),
      a = i.indexOf(this),
      h = i.indexOf(t)
    if (!e && a < h) return this
    const c = h - a - 1
    return this.move(c)
  }
  moveAbove(t, e = !1) {
    const r = this.parent()
    if (!r) return this
    if (t.parent() !== r)
      return (
        mt().error(
          "Cannot position nodes relative to each other if they don't belong to the same parent."
        ),
        this
      )
    const i = r.children(),
      a = i.indexOf(this),
      h = i.indexOf(t)
    if (!e && a > h) return this
    const c = h - a + 1
    return this.move(c)
  }
  reparent(t) {
    const e = this.absolutePosition(),
      r = this.absoluteRotation(),
      i = this.absoluteScale()
    return (
      t.add(this),
      this.absolutePosition(e),
      this.absoluteRotation(r),
      this.absoluteScale(i),
      this
    )
  }
  removeChildren() {
    for (const t of this.realChildren) t.parent(null)
    return this.setParsedChildren([]), this
  }
  peekChildren() {
    return this.realChildren
  }
  findAll(t) {
    const e = [],
      r = this.reversedChildren()
    for (; r.length > 0; ) {
      const i = r.pop()
      t(i) && e.push(i)
      const a = i.children()
      for (let h = a.length - 1; h >= 0; h--) r.push(a[h])
    }
    return e
  }
  findFirst(t) {
    const e = this.reversedChildren()
    for (; e.length > 0; ) {
      const r = e.pop()
      if (t(r)) return r
      const i = r.children()
      for (let a = i.length - 1; a >= 0; a--) e.push(i[a])
    }
    return null
  }
  findLast(t) {
    const e = [],
      r = this.reversedChildren()
    for (; r.length > 0; ) {
      const i = r.pop()
      e.push(i)
      const a = i.children()
      for (let h = a.length - 1; h >= 0; h--) r.push(a[h])
    }
    for (; e.length > 0; ) {
      const i = e.pop()
      if (t(i)) return i
    }
    return null
  }
  findAncestor(t) {
    let e = this.parent()
    for (; e; ) {
      if (t(e)) return e
      e = e.parent()
    }
    return null
  }
  childAs(t) {
    return this.children()[t] ?? null
  }
  childrenAs() {
    return this.children()
  }
  parentAs() {
    return this.parent() ?? null
  }
  dispose() {
    if (this.unregister) {
      ;(this.stateStack = []), this.unregister(), (this.unregister = null)
      for (const { signal: t } of this) t == null || t.context.dispose()
      for (const t of this.realChildren) t.dispose()
    }
  }
  clone(t = {}) {
    const e = { ...t }
    Xt(this.children.context.raw())
      ? e.children ?? (e.children = this.children.context.raw())
      : this.children().length > 0 &&
        (e.children ?? (e.children = this.children().map((r) => r.clone())))
    for (const { key: r, meta: i, signal: a } of this)
      if (!(!i.cloneable || r in e))
        if (i.compound)
          for (const [h, c] of i.compoundEntries) {
            if (c in e) continue
            const b = a[h]
            b.context.isInitial() || (e[c] = b.context.raw())
          }
        else a.context.isInitial() || (e[r] = a.context.raw())
    return this.instantiate(e)
  }
  snapshotClone(t = {}) {
    const e = { ...this.getState(), ...t }
    return (
      this.children().length > 0 &&
        (e.children ??
          (e.children = this.children().map((r) => r.snapshotClone()))),
      this.instantiate(e)
    )
  }
  reactiveClone(t = {}) {
    const e = { ...t }
    this.children().length > 0 &&
      (e.children ??
        (e.children = this.children().map((r) => r.reactiveClone())))
    for (const { key: r, meta: i, signal: a } of this)
      !i.cloneable || r in e || (e[r] = () => a())
    return this.instantiate(e)
  }
  instantiate(t = {}) {
    return new this.constructor(t)
  }
  setParsedChildren(t) {
    this.children.context.setter(t), (this.realChildren = t)
  }
  spawnChildren(t, e) {
    const r = this.parseChildren(e),
      i = new Set()
    for (const a of r) {
      const h = a.parent.context.raw()
      h && h !== this && h.removeChild(a), i.add(a.key), a.parent(this)
    }
    for (const a of this.realChildren) i.has(a.key) || a.parent(null)
    ;(this.hasSpawnedChildren = t), (this.realChildren = r)
  }
  parseChildren(t) {
    const e = [],
      r = Array.isArray(t) ? t : [t]
    for (const i of r) i instanceof vr && e.push(i)
    return e
  }
  removeChild(t) {
    this.setParsedChildren(this.children().filter((e) => e !== t))
  }
  requiresCache() {
    return (
      this.cache() ||
      this.opacity() < 1 ||
      this.compositeOperation() !== "source-over" ||
      this.hasFilters() ||
      this.hasShadow() ||
      this.shaders().length > 0
    )
  }
  cacheCanvas() {
    const t = document.createElement("canvas").getContext("2d")
    if (!t) throw new Error("Could not create a cache canvas")
    return t
  }
  cachedCanvas() {
    const t = this.cacheCanvas(),
      e = this.worldSpaceCacheBBox(),
      r = this.localToWorld()
    return (
      (t.canvas.width = e.width),
      (t.canvas.height = e.height),
      t.setTransform(r.a, r.b, r.c, r.d, r.e - e.x, r.f - e.y),
      this.draw(t),
      t
    )
  }
  getCacheBBox() {
    return new H()
  }
  cacheBBox() {
    const t = this.getCacheBBox(),
      e = this.children(),
      r = this.cachePadding()
    if (e.length === 0) return t.addSpacing(r)
    const i = t.corners
    for (const h of e) {
      const c = h.fullCacheBBox(),
        b = h.localToParent()
      i.push(...c.corners.map((y) => y.transformAsPoint(b)))
    }
    return H.fromPoints(...i).addSpacing(r)
  }
  fullCacheBBox() {
    const t = this.compositeToLocal(),
      e = this.shadowOffset().transform(t),
      r = hn(this.shadowBlur(), t),
      i = this.cacheBBox().expand(this.filters.blur() * 2 + r)
    return (
      e.x < 0 ? ((i.x += e.x), (i.width -= e.x)) : (i.width += e.x),
      e.y < 0 ? ((i.y += e.y), (i.height -= e.y)) : (i.height += e.y),
      i
    )
  }
  worldSpaceCacheBBox() {
    const t = H.fromSizeCentered(this.view().size()).expand(
        this.view().cachePadding()
      ),
      e = H.fromPoints(...t.transformCorners(this.view().localToWorld())),
      r = H.fromPoints(
        ...this.cacheBBox().transformCorners(this.localToWorld())
      ).pixelPerfect.expand(2)
    return e.intersection(r)
  }
  parentWorldSpaceCacheBBox() {
    var t
    return (
      ((t = this.findAncestor((e) => e.requiresCache())) == null
        ? void 0
        : t.worldSpaceCacheBBox()) ?? new H(g.zero, gr().getRealSize())
    )
  }
  setupDrawFromCache(t) {
    if (
      ((t.globalCompositeOperation = this.compositeOperation()),
      (t.globalAlpha *= this.opacity()),
      this.hasFilters() && (t.filter = this.filterString()),
      this.hasShadow())
    ) {
      const r = this.compositeToWorld(),
        i = this.shadowOffset().transform(r),
        a = hn(this.shadowBlur(), r)
      ;(t.shadowColor = this.shadowColor().serialize()),
        (t.shadowBlur = a),
        (t.shadowOffsetX = i.x),
        (t.shadowOffsetY = i.y)
    }
    const e = this.worldToLocal()
    t.transform(e.a, e.b, e.c, e.d, e.e, e.f)
  }
  renderFromSource(t, e, r, i) {
    this.setupDrawFromCache(t)
    const a = this.compositeOverride()
    t.drawImage(e, r, i),
      a > 0 &&
        (t.save(),
        (t.globalAlpha *= a),
        (t.globalCompositeOperation = "source-over"),
        t.drawImage(e, r, i),
        t.restore())
  }
  shaderCanvas(t, e) {
    var I, J
    const r = this.shaders()
    if (r.length === 0) return null
    const i = gr(),
      a = i.getRealSize(),
      h = this.parentWorldSpaceCacheBBox(),
      c = new DOMMatrix()
        .scaleSelf(a.width / h.width, a.height / -h.height)
        .translateSelf(h.x / -a.width, h.y / a.height - 1),
      b = this.worldSpaceCacheBBox(),
      y = new DOMMatrix()
        .scaleSelf(a.width / b.width, a.height / -b.height)
        .translateSelf(b.x / -a.width, b.y / a.height - 1)
        .invertSelf(),
      k = i.shaders.getGL()
    i.shaders.copyTextures(t, e), i.shaders.clear()
    for (const tt of r) {
      const at = i.shaders.getProgram(tt.fragment)
      if (at) {
        if (tt.uniforms)
          for (const [S, rt] of Object.entries(tt.uniforms)) {
            const Pt = k.getUniformLocation(at, S)
            if (Pt === null) continue
            const nt = xe(rt)
            typeof nt == "number"
              ? k.uniform1f(Pt, nt)
              : "toUniform" in nt
              ? nt.toUniform(k, Pt)
              : nt.length === 1
              ? k.uniform1f(Pt, nt[0])
              : nt.length === 2
              ? k.uniform2f(Pt, nt[0], nt[1])
              : nt.length === 3
              ? k.uniform3f(Pt, nt[0], nt[1], nt[2])
              : nt.length === 4 && k.uniform4f(Pt, nt[0], nt[1], nt[2], nt[3])
          }
        k.uniform1f(k.getUniformLocation(at, fi), this.view2D.globalTime()),
          k.uniform1i(k.getUniformLocation(at, fi), i.playback.frame),
          k.uniformMatrix4fv(
            k.getUniformLocation(at, Ou),
            !1,
            y.toFloat32Array()
          ),
          k.uniformMatrix4fv(
            k.getUniformLocation(at, Au),
            !1,
            c.toFloat32Array()
          ),
          (I = tt.setup) == null || I.call(tt, k, at),
          i.shaders.render(),
          (J = tt.teardown) == null || J.call(tt, k, at)
      }
    }
    return k.canvas
  }
  render(t) {
    if (!(this.absoluteOpacity() <= 0)) {
      if ((t.save(), this.transformContext(t), this.requiresCache())) {
        const e = this.worldSpaceCacheBBox()
        if (e.width !== 0 && e.height !== 0) {
          const r = this.cachedCanvas().canvas,
            i = this.shaderCanvas(t.canvas, r)
          i
            ? this.renderFromSource(t, i, 0, 0)
            : this.renderFromSource(t, r, e.position.x, e.position.y)
        }
      } else this.draw(t)
      t.restore()
    }
  }
  draw(t) {
    this.drawChildren(t)
  }
  drawChildren(t) {
    for (const e of this.sortedChildren()) e.render(t)
  }
  drawOverlay(t, e) {
    const r = this.cacheBBox().transformCorners(e),
      i = this.getCacheBBox().transformCorners(e)
    ;(t.strokeStyle = "white"),
      (t.lineWidth = 1),
      t.beginPath(),
      ge(t, r),
      t.closePath(),
      t.stroke(),
      (t.strokeStyle = "blue"),
      t.beginPath(),
      ge(t, i),
      t.closePath(),
      t.stroke()
  }
  transformContext(t) {
    const e = this.localToParent()
    t.transform(e.a, e.b, e.c, e.d, e.e, e.f)
  }
  hit(t) {
    let e = null
    const r = t.transformAsPoint(this.localToParent().inverse()),
      i = this.children()
    for (let a = i.length - 1; a >= 0 && ((e = i[a].hit(r)), !e); a--);
    return e
  }
  collectAsyncResources() {
    for (const t of this.children()) t.collectAsyncResources()
  }
  async toPromise() {
    do await ut.consumePromises(), this.collectAsyncResources()
    while (ut.hasPromises())
    return this
  }
  getState() {
    const t = {}
    for (const { key: e, meta: r, signal: i } of this)
      !r.cloneable || e in t || (t[e] = i())
    return t
  }
  applyState(t, e, r = _t) {
    if (e === void 0)
      for (const a in t) {
        const h = this.signalByKey(a)
        h && h(t[a])
      }
    const i = []
    for (const a in t) {
      const h = this.signalByKey(a)
      t[a] !== h.context.raw() && i.push(h(t[a], e, r))
    }
    return me(...i)
  }
  save() {
    this.stateStack.push(this.getState())
  }
  restore(t, e = _t) {
    const r = this.stateStack.pop()
    if (r !== void 0) return this.applyState(r, t, e)
  }
  *[Symbol.iterator]() {
    for (const t in this.properties) {
      const e = this.properties[t],
        r = this.signalByKey(t)
      yield { meta: e, signal: r, key: t }
    }
  }
  signalByKey(t) {
    return this[t]
  }
  reversedChildren() {
    const t = this.children(),
      e = []
    for (let r = t.length - 1; r >= 0; r--) e.push(t[r])
    return e
  }
})
_([Zt()], z.prototype, "position", void 0)
_([Ve(g), ke(!1), P()], z.prototype, "absolutePosition", void 0)
_([O(0), P()], z.prototype, "rotation", void 0)
_([ke(!1), P()], z.prototype, "absoluteRotation", void 0)
_([O(g.one), Zt("scale")], z.prototype, "scale", void 0)
_([O(g.zero), Zt("skew")], z.prototype, "skew", void 0)
_([Ve(g), ke(!1), P()], z.prototype, "absoluteScale", void 0)
_([O(0), P()], z.prototype, "zIndex", void 0)
_([O(!1), P()], z.prototype, "cache", void 0)
_([Mr("cachePadding")], z.prototype, "cachePadding", void 0)
_([O(!1), P()], z.prototype, "composite", void 0)
_([O("source-over"), P()], z.prototype, "compositeOperation", void 0)
_([ot()], z.prototype, "tweenCompositeOperation", null)
_([O(1), Tn((n) => wt(0, 1, n)), P()], z.prototype, "opacity", void 0)
_([E()], z.prototype, "absoluteOpacity", null)
_([oc()], z.prototype, "filters", void 0)
_([O("#0000"), ic()], z.prototype, "shadowColor", void 0)
_([O(0), P()], z.prototype, "shadowBlur", void 0)
_([Zt("shadowOffset")], z.prototype, "shadowOffset", void 0)
_([O([]), Tn(uc), P()], z.prototype, "shaders", void 0)
_([E()], z.prototype, "hasFilters", null)
_([E()], z.prototype, "hasShadow", null)
_([E()], z.prototype, "filterString", null)
_([Oi(!1), ke(!1), P()], z.prototype, "spawner", void 0)
_([Oi(!1), ke(!1), P()], z.prototype, "children", void 0)
_([E()], z.prototype, "spawnedChildren", null)
_([E()], z.prototype, "sortedChildren", null)
_([E()], z.prototype, "localToWorld", null)
_([E()], z.prototype, "worldToLocal", null)
_([E()], z.prototype, "worldToParent", null)
_([E()], z.prototype, "parentToWorld", null)
_([E()], z.prototype, "localToParent", null)
_([E()], z.prototype, "compositeToWorld", null)
_([E()], z.prototype, "compositeRoot", null)
_([E()], z.prototype, "compositeToLocal", null)
_([E()], z.prototype, "cacheCanvas", null)
_([E()], z.prototype, "cachedCanvas", null)
_([E()], z.prototype, "cacheBBox", null)
_([E()], z.prototype, "fullCacheBBox", null)
_([E()], z.prototype, "worldSpaceCacheBBox", null)
_([E()], z.prototype, "parentWorldSpaceCacheBBox", null)
z = vr = _([he("Node")], z)
z.prototype.isClass = !0
var A =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var i = arguments.length,
        a =
          i < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        h
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        a = Reflect.decorate(n, t, e, r)
      else
        for (var c = n.length - 1; c >= 0; c--)
          (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
      return i > 3 && a && Object.defineProperty(t, e, a), a
    },
  mr
let $ = (mr = class extends z {
  get columnGap() {
    return this.gap.x
  }
  get rowGap() {
    return this.gap.y
  }
  getX() {
    return this.isLayoutRoot()
      ? this.x.context.getter()
      : this.computedPosition().x
  }
  setX(t) {
    this.x.context.setter(t)
  }
  getY() {
    return this.isLayoutRoot()
      ? this.y.context.getter()
      : this.computedPosition().y
  }
  setY(t) {
    this.y.context.setter(t)
  }
  get width() {
    return this.size.x
  }
  get height() {
    return this.size.y
  }
  getWidth() {
    return this.computedSize().width
  }
  setWidth(t) {
    this.width.context.setter(t)
  }
  *tweenWidth(t, e, r, i) {
    const a = this.desiredSize().x,
      h = typeof a != "number" || typeof t != "number"
    let c
    h ? (c = this.size.x()) : (c = a)
    let b
    h ? (this.size.x(t), (b = this.size.x())) : (b = t),
      this.size.x(c),
      h && this.lockSize(),
      yield* Dt(e, (y) => this.size.x(i(c, b, r(y)))),
      this.size.x(t),
      h && this.releaseSize()
  }
  getHeight() {
    return this.computedSize().height
  }
  setHeight(t) {
    this.height.context.setter(t)
  }
  *tweenHeight(t, e, r, i) {
    const a = this.desiredSize().y,
      h = typeof a != "number" || typeof t != "number"
    let c
    h ? (c = this.size.y()) : (c = a)
    let b
    h ? (this.size.y(t), (b = this.size.y())) : (b = t),
      this.size.y(c),
      h && this.lockSize(),
      yield* Dt(e, (y) => this.size.y(i(c, b, r(y)))),
      this.size.y(t),
      h && this.releaseSize()
  }
  desiredSize() {
    return { x: this.width.context.getter(), y: this.height.context.getter() }
  }
  *tweenSize(t, e, r, i) {
    const a = this.desiredSize()
    let h
    typeof a.x != "number" || typeof a.y != "number"
      ? (h = this.size())
      : (h = new g(a))
    let c
    typeof t == "object" && typeof t.x == "number" && typeof t.y == "number"
      ? (c = new g(t))
      : (this.size(t), (c = this.size())),
      this.size(h),
      this.lockSize(),
      yield* Dt(e, (b) => this.size(i(h, c, r(b)))),
      this.releaseSize(),
      this.size(t)
  }
  cardinalPoint(t) {
    switch (t) {
      case it.TopLeft:
        return this.topLeft
      case it.TopRight:
        return this.topRight
      case it.BottomLeft:
        return this.bottomLeft
      case it.BottomRight:
        return this.bottomRight
      case it.Top:
      case xt.Top:
        return this.top
      case it.Bottom:
      case xt.Bottom:
        return this.bottom
      case it.Left:
      case xt.Left:
        return this.left
      case it.Right:
      case xt.Right:
        return this.right
      default:
        return this.middle
    }
  }
  constructor(t) {
    super(t), (this.element.dataset.motionCanvasKey = this.key)
  }
  lockSize() {
    this.sizeLockCounter(this.sizeLockCounter() + 1)
  }
  releaseSize() {
    this.sizeLockCounter(this.sizeLockCounter() - 1)
  }
  parentTransform() {
    return this.findAncestor(kn(mr))
  }
  anchorPosition() {
    const t = this.computedSize(),
      e = this.offset()
    return t.scale(0.5).mul(e)
  }
  layoutEnabled() {
    var t
    return (
      this.layout() ??
      ((t = this.parentTransform()) == null ? void 0 : t.layoutEnabled()) ??
      !1
    )
  }
  isLayoutRoot() {
    var t
    return (
      !this.layoutEnabled() ||
      !((t = this.parentTransform()) != null && t.layoutEnabled())
    )
  }
  localToParent() {
    const t = super.localToParent(),
      e = this.offset()
    if (!e.exactlyEquals(g.zero)) {
      const r = this.size().mul(e).scale(-0.5)
      t.translateSelf(r.x, r.y)
    }
    return t
  }
  scalingRotationMatrix() {
    const t = new DOMMatrix()
    t.rotateSelf(0, 0, this.rotation()),
      t.scaleSelf(this.scale.x(), this.scale.y())
    const e = this.offset()
    if (!e.exactlyEquals(g.zero)) {
      const r = this.size().mul(e).scale(-0.5)
      t.translateSelf(r.x, r.y)
    }
    return t
  }
  getComputedLayout() {
    return new H(this.element.getBoundingClientRect())
  }
  computedPosition() {
    this.requestLayoutUpdate()
    const t = this.getComputedLayout(),
      e = new g(
        t.x + (t.width / 2) * this.offset.x(),
        t.y + (t.height / 2) * this.offset.y()
      ),
      r = this.parentTransform()
    if (r) {
      const i = r.getComputedLayout()
      ;(e.x -= i.x + (i.width - t.width) / 2),
        (e.y -= i.y + (i.height - t.height) / 2)
    }
    return e
  }
  computedSize() {
    return this.requestLayoutUpdate(), this.getComputedLayout().size
  }
  requestLayoutUpdate() {
    const t = this.parentTransform()
    this.appendedToView()
      ? (t == null || t.requestFontUpdate(), this.updateLayout())
      : t.requestLayoutUpdate()
  }
  appendedToView() {
    const t = this.isLayoutRoot()
    return t && this.view().element.append(this.element), t
  }
  updateLayout() {
    if ((this.applyFont(), this.applyFlex(), this.layoutEnabled())) {
      const t = this.layoutChildren()
      for (const e of t) e.updateLayout()
    }
  }
  layoutChildren() {
    const t = [...this.children()],
      e = [],
      r = []
    for (; t.length; ) {
      const i = t.shift()
      i instanceof mr
        ? i.layoutEnabled() && (e.push(i), r.push(i.element))
        : i && t.unshift(...i.children())
    }
    return this.element.replaceChildren(...r), e
  }
  requestFontUpdate() {
    var t
    this.appendedToView(),
      (t = this.parentTransform()) == null || t.requestFontUpdate(),
      this.applyFont()
  }
  getCacheBBox() {
    return H.fromSizeCentered(this.computedSize())
  }
  draw(t) {
    if (this.clip()) {
      const e = this.computedSize()
      if (e.width === 0 || e.height === 0) return
      t.beginPath(),
        t.rect(e.width / -2, e.height / -2, e.width, e.height),
        t.closePath(),
        t.clip()
    }
    this.drawChildren(t)
  }
  drawOverlay(t, e) {
    const r = this.computedSize(),
      i = r.mul(this.offset()).scale(0.5).transformAsPoint(e),
      a = H.fromSizeCentered(r),
      h = a.transformCorners(e),
      c = a.addSpacing(this.padding().scale(-1)).transformCorners(e),
      b = a.addSpacing(this.margin()).transformCorners(e)
    t.beginPath(),
      ge(t, b),
      ge(t, h),
      t.closePath(),
      (t.fillStyle = "rgba(255,193,125,0.6)"),
      t.fill("evenodd"),
      t.beginPath(),
      ge(t, h),
      ge(t, c),
      t.closePath(),
      (t.fillStyle = "rgba(180,255,147,0.6)"),
      t.fill("evenodd"),
      t.beginPath(),
      ge(t, h),
      t.closePath(),
      (t.lineWidth = 1),
      (t.strokeStyle = "white"),
      t.stroke(),
      t.beginPath(),
      rc(t, i),
      t.stroke()
  }
  getOriginDelta(t) {
    const e = this.computedSize().scale(0.5),
      r = this.offset().mul(e)
    return t === it.Middle ? r.flipped : qu(t).mul(e).sub(r)
  }
  moveOffset(t) {
    const e = this.computedSize().scale(0.5),
      r = this.offset().mul(e),
      i = t.mul(e)
    this.offset(t), this.position(this.position().add(i).sub(r))
  }
  parsePixels(t) {
    return t === null ? "" : `${t}px`
  }
  parseLength(t) {
    return t === null ? "" : typeof t == "string" ? t : `${t}px`
  }
  applyFlex() {
    this.element.style.position = this.isLayoutRoot() ? "absolute" : "relative"
    const t = this.desiredSize()
    ;(this.element.style.width = this.parseLength(t.x)),
      (this.element.style.height = this.parseLength(t.y)),
      (this.element.style.maxWidth = this.parseLength(this.maxWidth())),
      (this.element.style.minWidth = this.parseLength(this.minWidth())),
      (this.element.style.maxHeight = this.parseLength(this.maxHeight())),
      (this.element.style.minHeight = this.parseLength(this.minHeight())),
      (this.element.style.aspectRatio =
        this.ratio() === null ? "" : this.ratio().toString()),
      (this.element.style.marginTop = this.parsePixels(this.margin.top())),
      (this.element.style.marginBottom = this.parsePixels(
        this.margin.bottom()
      )),
      (this.element.style.marginLeft = this.parsePixels(this.margin.left())),
      (this.element.style.marginRight = this.parsePixels(this.margin.right())),
      (this.element.style.paddingTop = this.parsePixels(this.padding.top())),
      (this.element.style.paddingBottom = this.parsePixels(
        this.padding.bottom()
      )),
      (this.element.style.paddingLeft = this.parsePixels(this.padding.left())),
      (this.element.style.paddingRight = this.parsePixels(
        this.padding.right()
      )),
      (this.element.style.flexDirection = this.direction()),
      (this.element.style.flexBasis = this.parseLength(this.basis())),
      (this.element.style.flexWrap = this.wrap()),
      (this.element.style.justifyContent = this.justifyContent()),
      (this.element.style.alignContent = this.alignContent()),
      (this.element.style.alignItems = this.alignItems()),
      (this.element.style.alignSelf = this.alignSelf()),
      (this.element.style.columnGap = this.parseLength(this.gap.x())),
      (this.element.style.rowGap = this.parseLength(this.gap.y())),
      this.sizeLockCounter() > 0
        ? ((this.element.style.flexGrow = "0"),
          (this.element.style.flexShrink = "0"))
        : ((this.element.style.flexGrow = this.grow().toString()),
          (this.element.style.flexShrink = this.shrink().toString()))
  }
  applyFont() {
    if (
      ((this.element.style.fontFamily = this.fontFamily.isInitial()
        ? ""
        : this.fontFamily()),
      (this.element.style.fontSize = this.fontSize.isInitial()
        ? ""
        : `${this.fontSize()}px`),
      (this.element.style.fontStyle = this.fontStyle.isInitial()
        ? ""
        : this.fontStyle()),
      this.lineHeight.isInitial())
    )
      this.element.style.lineHeight = ""
    else {
      const t = this.lineHeight()
      this.element.style.lineHeight =
        typeof t == "string" ? (parseFloat(t) / 100).toString() : `${t}px`
    }
    if (
      ((this.element.style.fontWeight = this.fontWeight.isInitial()
        ? ""
        : this.fontWeight().toString()),
      (this.element.style.letterSpacing = this.letterSpacing.isInitial()
        ? ""
        : `${this.letterSpacing()}px`),
      (this.element.style.textAlign = this.textAlign.isInitial()
        ? ""
        : this.textAlign()),
      this.textWrap.isInitial())
    )
      this.element.style.whiteSpace = ""
    else {
      const t = this.textWrap()
      typeof t == "boolean"
        ? (this.element.style.whiteSpace = t ? "normal" : "nowrap")
        : (this.element.style.whiteSpace = t)
    }
  }
  dispose() {
    var t
    super.dispose(),
      (t = this.sizeLockCounter) == null || t.context.dispose(),
      this.element && (this.element.remove(), (this.element.innerHTML = "")),
      (this.element = null),
      (this.styles = null)
  }
  hit(t) {
    const e = t.transformAsPoint(this.localToParent().inverse())
    return this.cacheBBox().includes(e) ? super.hit(t) ?? this : null
  }
})
A([O(null), xn(ju), P()], $.prototype, "layout", void 0)
A([O(null), P()], $.prototype, "maxWidth", void 0)
A([O(null), P()], $.prototype, "maxHeight", void 0)
A([O(null), P()], $.prototype, "minWidth", void 0)
A([O(null), P()], $.prototype, "minHeight", void 0)
A([O(null), P()], $.prototype, "ratio", void 0)
A([Mr("margin")], $.prototype, "margin", void 0)
A([Mr("padding")], $.prototype, "padding", void 0)
A([O("row"), P()], $.prototype, "direction", void 0)
A([O(null), P()], $.prototype, "basis", void 0)
A([O(0), P()], $.prototype, "grow", void 0)
A([O(1), P()], $.prototype, "shrink", void 0)
A([O("nowrap"), P()], $.prototype, "wrap", void 0)
A([O("start"), P()], $.prototype, "justifyContent", void 0)
A([O("normal"), P()], $.prototype, "alignContent", void 0)
A([O("stretch"), P()], $.prototype, "alignItems", void 0)
A([O("auto"), P()], $.prototype, "alignSelf", void 0)
A([O(0), Zt({ x: "columnGap", y: "rowGap" })], $.prototype, "gap", void 0)
A([le("font-family"), P()], $.prototype, "fontFamily", void 0)
A([le("font-size", parseFloat), P()], $.prototype, "fontSize", void 0)
A([le("font-style"), P()], $.prototype, "fontStyle", void 0)
A([le("font-weight", parseInt), P()], $.prototype, "fontWeight", void 0)
A([le("line-height", parseFloat), P()], $.prototype, "lineHeight", void 0)
A(
  [le("letter-spacing", (n) => (n === "normal" ? 0 : parseFloat(n))), P()],
  $.prototype,
  "letterSpacing",
  void 0
)
A(
  [le("white-space", (n) => (n === "pre" ? "pre" : n === "normal")), P()],
  $.prototype,
  "textWrap",
  void 0
)
A([O("inherit"), P()], $.prototype, "textDirection", void 0)
A([le("text-align"), P()], $.prototype, "textAlign", void 0)
A(
  [O({ x: null, y: null }), Zt({ x: "width", y: "height" })],
  $.prototype,
  "size",
  void 0
)
A([ot()], $.prototype, "tweenWidth", null)
A([ot()], $.prototype, "tweenHeight", null)
A([E()], $.prototype, "desiredSize", null)
A([ot()], $.prototype, "tweenSize", null)
A([Zt("offset")], $.prototype, "offset", void 0)
A([Jt(it.Middle)], $.prototype, "middle", void 0)
A([Jt(it.Top)], $.prototype, "top", void 0)
A([Jt(it.Bottom)], $.prototype, "bottom", void 0)
A([Jt(it.Left)], $.prototype, "left", void 0)
A([Jt(it.Right)], $.prototype, "right", void 0)
A([Jt(it.TopLeft)], $.prototype, "topLeft", void 0)
A([Jt(it.TopRight)], $.prototype, "topRight", void 0)
A([Jt(it.BottomLeft)], $.prototype, "bottomLeft", void 0)
A([Jt(it.BottomRight)], $.prototype, "bottomRight", void 0)
A([O(!1), P()], $.prototype, "clip", void 0)
A([O(0), P()], $.prototype, "sizeLockCounter", void 0)
A([E()], $.prototype, "parentTransform", null)
A([E()], $.prototype, "anchorPosition", null)
A([E()], $.prototype, "layoutEnabled", null)
A([E()], $.prototype, "isLayoutRoot", null)
A([E()], $.prototype, "scalingRotationMatrix", null)
A([E()], $.prototype, "computedPosition", null)
A([E()], $.prototype, "computedSize", null)
A([E()], $.prototype, "requestLayoutUpdate", null)
A([E()], $.prototype, "appendedToView", null)
A([E()], $.prototype, "updateLayout", null)
A([E()], $.prototype, "layoutChildren", null)
A([E()], $.prototype, "requestFontUpdate", null)
A([E()], $.prototype, "applyFlex", null)
A([E()], $.prototype, "applyFont", null)
$ = mr = A([he("Layout")], $)
function Jt(n) {
  return (t, e) => {
    P()(t, e), ke(!1)(t, e)
    const r = Ce(t, e)
    ;(r.parser = (i) => new g(i)),
      (r.getter = function () {
        return this.computedSize()
          .getOriginOffset(n)
          .transformAsPoint(this.localToParent())
      }),
      (r.setter = function (i) {
        return (
          this.position(
            be(i, (a) =>
              this.getOriginDelta(n)
                .transform(this.scalingRotationMatrix())
                .flipped.add(a)
            )
          ),
          this
        )
      })
  }
}
Je($.prototype, (n) => {
  ;(n.element = document.createElement("div")),
    (n.element.style.display = "flex"),
    (n.element.style.boxSizing = "border-box"),
    (n.styles = getComputedStyle(n.element))
})
var St =
  (globalThis && globalThis.__decorate) ||
  function (n, t, e, r) {
    var i = arguments.length,
      a =
        i < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, e))
          : r,
      h
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      a = Reflect.decorate(n, t, e, r)
    else
      for (var c = n.length - 1; c >= 0; c--)
        (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
    return i > 3 && a && Object.defineProperty(t, e, a), a
  }
let vt = class extends $ {
  rippleSize() {
    return Bu(this.rippleStrength(), 0, 50)
  }
  constructor(t) {
    super(t), (this.rippleStrength = je(0))
  }
  applyText(t) {
    ;(t.direction = this.textDirection()),
      (this.element.dir = this.textDirection())
  }
  applyStyle(t) {
    ;(t.fillStyle = fn(this.fill(), t)),
      (t.strokeStyle = fn(this.stroke(), t)),
      (t.lineWidth = this.lineWidth()),
      (t.lineJoin = this.lineJoin()),
      (t.lineCap = this.lineCap()),
      t.setLineDash(this.lineDash()),
      (t.lineDashOffset = this.lineDashOffset()),
      this.antialiased() ||
        (t.filter =
          "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVGdW5jUiB0eXBlPSJpZGVudGl0eSIvPjxmZUZ1bmNHIHR5cGU9ImlkZW50aXR5Ii8+PGZlRnVuY0IgdHlwZT0iaWRlbnRpdHkiLz48ZmVGdW5jQSB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4=#filter)")
  }
  draw(t) {
    this.drawShape(t),
      this.clip() && t.clip(this.getPath()),
      this.drawChildren(t)
  }
  drawShape(t) {
    const e = this.getPath(),
      r = this.lineWidth() > 0 && this.stroke() !== null,
      i = this.fill() !== null
    t.save(),
      this.applyStyle(t),
      this.drawRipple(t),
      this.strokeFirst()
        ? (r && t.stroke(e), i && t.fill(e))
        : (i && t.fill(e), r && t.stroke(e)),
      t.restore()
  }
  getCacheBBox() {
    return super.getCacheBBox().expand(this.lineWidth() / 2)
  }
  getPath() {
    return new Path2D()
  }
  getRipplePath() {
    return new Path2D()
  }
  drawRipple(t) {
    const e = this.rippleStrength()
    if (e > 0) {
      const r = this.getRipplePath()
      t.save(), (t.globalAlpha *= Q(0.54, 0, e)), t.fill(r), t.restore()
    }
  }
  *ripple(t = 1) {
    this.rippleStrength(0),
      yield* this.rippleStrength(1, t, Wu),
      this.rippleStrength(0)
  }
}
St([Fi()], vt.prototype, "fill", void 0)
St([Fi()], vt.prototype, "stroke", void 0)
St([O(!1), P()], vt.prototype, "strokeFirst", void 0)
St([O(0), P()], vt.prototype, "lineWidth", void 0)
St([O("miter"), P()], vt.prototype, "lineJoin", void 0)
St([O("butt"), P()], vt.prototype, "lineCap", void 0)
St([O([]), P()], vt.prototype, "lineDash", void 0)
St([O(0), P()], vt.prototype, "lineDashOffset", void 0)
St([O(!0), P()], vt.prototype, "antialiased", void 0)
St([E()], vt.prototype, "rippleSize", null)
St([E()], vt.prototype, "getPath", null)
St([ot()], vt.prototype, "ripple", null)
vt = St([he("Shape")], vt)
var zt =
  (globalThis && globalThis.__decorate) ||
  function (n, t, e, r) {
    var i = arguments.length,
      a =
        i < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, e))
          : r,
      h
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      a = Reflect.decorate(n, t, e, r)
    else
      for (var c = n.length - 1; c >= 0; c--)
        (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
    return i > 3 && a && Object.defineProperty(t, e, a), a
  }
let kt = class extends vt {
  desiredSize() {
    return this.childrenBBox().size
  }
  constructor(t) {
    super(t), (this.canHaveSubpath = !1)
  }
  percentageToDistance(t) {
    return wt(
      0,
      this.baseArcLength(),
      this.startOffset() + this.offsetArcLength() * t
    )
  }
  distanceToPercentage(t) {
    return (t - this.startOffset()) / this.offsetArcLength()
  }
  baseArcLength() {
    return this.profile().arcLength
  }
  offsetArcLength() {
    const t = this.startOffset(),
      e = this.endOffset(),
      r = this.baseArcLength()
    return wt(0, r, r - t - e)
  }
  arcLength() {
    return this.offsetArcLength() * Math.abs(this.start() - this.end())
  }
  completion() {
    return Math.abs(this.start() - this.end())
  }
  processSubpath(t, e, r) {}
  curveDrawingInfo() {
    const t = new Path2D()
    let e = new Path2D()
    const r = this.profile()
    let i = this.percentageToDistance(this.start()),
      a = this.percentageToDistance(this.end())
    i > a && ([i, a] = [a, i])
    const h = a - i,
      c = Math.min(h / 2, this.arrowSize())
    this.startArrow() && (i += c / 2), this.endArrow() && (a -= c / 2)
    let b = 0,
      y = null,
      k = null,
      I = null,
      J = null
    for (const tt of r.segments) {
      const at = b
      if (((b += tt.arcLength), b < i)) continue
      const S = (i - at) / tt.arcLength,
        rt = (a - at) / tt.arcLength,
        Pt = wt(0, 1, S),
        nt = wt(0, 1, rt)
      this.canHaveSubpath &&
        I &&
        !tt.getPoint(0).position.equals(I) &&
        (t.addPath(e),
        this.processSubpath(e, y, I),
        (e = new Path2D()),
        (y = null))
      const [Be, Et] = tt.draw(e, Pt, nt, y === null)
      if (
        (y === null &&
          ((y = Be.position), (k = Be.normal.flipped.perpendicular)),
        (I = Et.position),
        (J = Et.normal.flipped.perpendicular),
        b > a)
      )
        break
    }
    return (
      this.closed() &&
        this.start.isInitial() &&
        this.end.isInitial() &&
        this.startOffset.isInitial() &&
        this.endOffset.isInitial() &&
        e.closePath(),
      this.processSubpath(e, y, I),
      t.addPath(e),
      {
        startPoint: y ?? g.zero,
        startTangent: k ?? g.right,
        endPoint: I ?? g.zero,
        endTangent: J ?? g.right,
        arrowSize: c,
        path: t,
        startOffset: i
      }
    )
  }
  getPointAtDistance(t) {
    return vi(this.profile(), t + this.startOffset())
  }
  getPointAtPercentage(t) {
    return vi(this.profile(), this.percentageToDistance(t))
  }
  getComputedLayout() {
    return this.offsetComputedLayout(super.getComputedLayout())
  }
  offsetComputedLayout(t) {
    return (t.position = t.position.sub(this.childrenBBox().center)), t
  }
  getPath() {
    return this.curveDrawingInfo().path
  }
  getCacheBBox() {
    const t = this.childrenBBox(),
      e = this.startArrow() || this.endArrow() ? this.arrowSize() : 0,
      r = this.lineWidth(),
      i = this.lineWidthCoefficient()
    return t.expand(Math.max(0, e, r * i))
  }
  lineWidthCoefficient() {
    return this.lineCap() === "square" ? 0.5 * 1.4143 : 0.5
  }
  requiresProfile() {
    return (
      !this.start.isInitial() ||
      !this.startOffset.isInitial() ||
      !this.startArrow.isInitial() ||
      !this.end.isInitial() ||
      !this.endOffset.isInitial() ||
      !this.endArrow.isInitial()
    )
  }
  drawShape(t) {
    super.drawShape(t),
      (this.startArrow() || this.endArrow()) && this.drawArrows(t)
  }
  drawArrows(t) {
    const {
      startPoint: e,
      startTangent: r,
      endPoint: i,
      endTangent: a,
      arrowSize: h
    } = this.curveDrawingInfo()
    h < 0.001 ||
      (t.save(),
      t.beginPath(),
      this.endArrow() && this.drawArrow(t, i, a.flipped, h),
      this.startArrow() && this.drawArrow(t, e, r, h),
      (t.fillStyle = fn(this.stroke(), t)),
      t.closePath(),
      t.fill(),
      t.restore())
  }
  drawArrow(t, e, r, i) {
    const a = r.perpendicular,
      h = e.add(r.scale(-i / 2))
    Pr(t, h),
      qt(t, h.add(r.add(a).scale(i))),
      qt(t, h.add(r.sub(a).scale(i))),
      qt(t, h),
      t.closePath()
  }
}
zt([O(!1), P()], kt.prototype, "closed", void 0)
zt([O(0), P()], kt.prototype, "start", void 0)
zt([O(0), P()], kt.prototype, "startOffset", void 0)
zt([O(!1), P()], kt.prototype, "startArrow", void 0)
zt([O(1), P()], kt.prototype, "end", void 0)
zt([O(0), P()], kt.prototype, "endOffset", void 0)
zt([O(!1), P()], kt.prototype, "endArrow", void 0)
zt([O(24), P()], kt.prototype, "arrowSize", void 0)
zt([E()], kt.prototype, "arcLength", null)
zt([E()], kt.prototype, "curveDrawingInfo", null)
kt = zt([he("Curve")], kt)
class Sn {}
class cc extends Sn {
  constructor(t, e, r, i, a) {
    super(),
      (this.center = t),
      (this.radius = e),
      (this.from = r),
      (this.to = i),
      (this.counter = a),
      (this.angle = Math.acos(wt(-1, 1, r.dot(i)))),
      (this.length = Math.abs(this.angle * e))
    const h = new g(1, 1).scale(e)
    this.points = [t.sub(h), t.add(h)]
  }
  get arcLength() {
    return this.length
  }
  draw(t, e, r) {
    const i = this.counter ? -1 : 1,
      a = this.from.radians + e * this.angle * i,
      h = this.to.radians - (1 - r) * this.angle * i
    Math.abs(this.angle) > 1e-4 &&
      t.arc(this.center.x, this.center.y, this.radius, a, h, this.counter)
    const c = g.fromRadians(a),
      b = g.fromRadians(h)
    return [
      {
        position: this.center.add(c.scale(this.radius)),
        tangent: this.counter ? c : c.flipped,
        normal: this.counter ? c.flipped : c
      },
      {
        position: this.center.add(b.scale(this.radius)),
        tangent: this.counter ? b.flipped : b,
        normal: this.counter ? b.flipped : b
      }
    ]
  }
  getPoint(t) {
    const e = this.counter ? -1 : 1,
      r = this.from.radians + t * this.angle * e,
      i = g.fromRadians(r)
    return {
      position: this.center.add(i.scale(this.radius)),
      tangent: this.counter ? i : i.flipped,
      normal: this.counter ? i : i.flipped
    }
  }
}
class bt {
  static constant(t) {
    return new bt(t)
  }
  static linear(t, e) {
    return new bt(t, e)
  }
  static quadratic(t, e, r) {
    return new bt(t, e, r)
  }
  static cubic(t, e, r, i) {
    return new bt(t, e, r, i)
  }
  get degree() {
    return this.c3 !== 0 ? 3 : this.c2 !== 0 ? 2 : this.c1 !== 0 ? 1 : 0
  }
  constructor(t, e, r, i) {
    ;(this.c0 = t), (this.c1 = e ?? 0), (this.c2 = r ?? 0), (this.c3 = i ?? 0)
  }
  differentiate(t = 1) {
    switch (t) {
      case 0:
        return this
      case 1:
        return new bt(this.c1, 2 * this.c2, 3 * this.c3, 0)
      case 2:
        return new bt(2 * this.c2, 6 * this.c3, 0, 0)
      case 3:
        return new bt(6 * this.c3, 0, 0, 0)
      default:
        throw new Error("Unsupported derivative")
    }
  }
  eval(t, e = 0) {
    return e !== 0
      ? this.differentiate(e).eval(t)
      : this.c3 * (t * t * t) + this.c2 * (t * t) + this.c1 * t + this.c0
  }
  split(t) {
    const e = 1 - t,
      r = new bt(this.c0, this.c1 * t, this.c2 * t * t, this.c3 * t * t * t),
      i = new bt(
        this.eval(0),
        e * this.differentiate(1).eval(t),
        ((e * e) / 2) * this.differentiate(2).eval(t),
        ((e * e * e) / 6) * this.differentiate(3).eval(t)
      )
    return [r, i]
  }
  roots() {
    switch (this.degree) {
      case 3:
        return this.solveCubicRoots()
      case 2:
        return this.solveQuadraticRoots()
      case 1:
        return this.solveLinearRoot()
      case 0:
        return []
      default:
        throw new Error(`Unsupported polynomial degree: ${this.degree}`)
    }
  }
  localExtrema() {
    return this.differentiate().roots()
  }
  localExtrema01() {
    const t = this.localExtrema(),
      e = []
    for (let r = 0; r < t.length; r++) {
      const i = t[r]
      i >= 0 && i <= 1 && e.push(t[r])
    }
    return e
  }
  outputRange01() {
    let t = [this.eval(0), this.eval(1)]
    const e = (r) => {
      t[1] > t[0]
        ? (t = [Math.min(t[0], r), Math.max(t[1], r)])
        : (t = [Math.min(t[1], r), Math.max(t[0], r)])
    }
    return this.localExtrema01().forEach((r) => e(this.eval(r))), t
  }
  solveCubicRoots() {
    const t = this.c0,
      e = this.c1,
      r = this.c2,
      i = this.c3,
      a = t * t,
      h = t * r,
      c = e * e,
      b = (3 * h - c) / (3 * a),
      y = (2 * c * e - 9 * h * e + 27 * a * i) / (27 * a * t),
      k = this.solveDepressedCubicRoots(b, y),
      I = (J) => J - e / (3 * t)
    switch (k.length) {
      case 1:
        return [I(k[0])]
      case 2:
        return [I(k[0]), I(k[1])]
      case 3:
        return [I(k[0]), I(k[1]), I(k[2])]
      default:
        return []
    }
  }
  solveDepressedCubicRoots(t, e) {
    if (this.almostZero(t)) return [Math.cbrt(-e)]
    const r = Math.PI * 2,
      i = 4 * t * t * t + 27 * e * e
    if (i < 1e-5) {
      const a = 2 * Math.sqrt(-t / 3),
        h = ((3 * e) / (2 * t)) * Math.sqrt(-3 / t),
        c = (b) => a * Math.cos((1 / 3) * Math.acos(wt(-1, 1, h)) - (r / 3) * b)
      return h >= 0.9999
        ? [c(0), c(2)]
        : h <= -0.9999
        ? [c(1), c(2)]
        : [c(0), c(1), c(2)]
    }
    if (i > 0 && t < 0) {
      const a =
        0.3333333333333333 *
        Math.acosh(((-3 * Math.abs(e)) / (2 * t)) * Math.sqrt(-3 / t))
      return [-2 * Math.sign(e) * Math.sqrt(-t / 3) * Math.cosh(a)]
    }
    if (t > 0) {
      const a =
        0.3333333333333333 * Math.asinh(((3 * e) / (2 * t)) * Math.sqrt(3 / t))
      return [-2 * Math.sqrt(t / 3) * Math.sinh(a)]
    }
    return []
  }
  solveQuadraticRoots() {
    const t = this.c2,
      e = this.c1,
      r = this.c0,
      i = e * e - 4 * t * r
    if (this.almostZero(i)) return [-e / (2 * t)]
    if (i >= 0) {
      const a = Math.sqrt(i),
        h = (-e - a) / (2 * t),
        c = (-e + a) / (2 * t)
      return [Math.min(h, c), Math.max(h, c)]
    }
    return []
  }
  solveLinearRoot() {
    return [-this.c0 / this.c1]
  }
  almostZero(t) {
    return Math.abs(0 - t) <= Number.EPSILON
  }
}
class He {
  constructor(t, e, r, i) {
    ;(this.c0 = t),
      (this.c1 = e),
      (this.c2 = r),
      (this.c3 = i),
      t instanceof bt
        ? ((this.x = t), (this.y = e))
        : i !== void 0
        ? ((this.x = new bt(t.x, e.x, r.x, i.x)),
          (this.y = new bt(t.y, e.y, r.y, i.y)))
        : ((this.x = new bt(t.x, e.x, r.x)), (this.y = new bt(t.y, e.y, r.y)))
  }
  eval(t, e = 0) {
    return new g(
      this.x.differentiate(e).eval(t),
      this.y.differentiate(e).eval(t)
    )
  }
  split(t) {
    const [e, r] = this.x.split(t),
      [i, a] = this.y.split(t)
    return [new He(e, i), new He(r, a)]
  }
  differentiate(t = 1) {
    return new He(this.x.differentiate(t), this.y.differentiate(t))
  }
  evalDerivative(t) {
    return this.differentiate().eval(t)
  }
  getBounds() {
    const t = this.x.outputRange01(),
      e = this.y.outputRange01()
    return H.fromPoints(
      new g(Math.min(...t), Math.max(...e)),
      new g(Math.max(...t), Math.min(...e))
    )
  }
}
class fc {
  constructor(t, e = 20) {
    ;(this.curve = t), (this.sampledDistances = []), this.resample(e)
  }
  resample(t) {
    this.sampledDistances = [0]
    let e = 0,
      r = this.curve.eval(0).position
    for (let i = 1; i < t; i++) {
      const a = i / (t - 1),
        h = this.curve.eval(a),
        c = r.sub(h.position).magnitude
      ;(e += c), this.sampledDistances.push(e), (r = h.position)
    }
    this.sampledDistances[this.sampledDistances.length - 1] =
      this.curve.arcLength
  }
  pointAtDistance(t) {
    return this.curve.eval(this.distanceToT(t))
  }
  distanceToT(t) {
    const e = this.sampledDistances.length
    t = wt(0, this.curve.arcLength, t)
    for (let r = 0; r < e; r++) {
      const i = this.sampledDistances[r],
        a = this.sampledDistances[r + 1]
      if (t >= i && t <= a) return Nu(i, a, r / (e - 1), (r + 1) / (e - 1), t)
    }
    return 1
  }
}
class dc extends Sn {
  get arcLength() {
    return this.length
  }
  constructor(t, e) {
    super(),
      (this.curve = t),
      (this.length = e),
      (this.pointSampler = new fc(this))
  }
  getBBox() {
    return this.curve.getBounds()
  }
  eval(t) {
    const e = this.tangent(t)
    return { position: this.curve.eval(t), tangent: e, normal: e.perpendicular }
  }
  getPoint(t) {
    const e = this.pointSampler.pointAtDistance(this.arcLength * t)
    return {
      position: e.position,
      tangent: e.tangent,
      normal: e.tangent.perpendicular
    }
  }
  transformPoints(t) {
    return this.points.map((e) => e.transformAsPoint(t))
  }
  tangent(t) {
    return this.curve.evalDerivative(t).normalized
  }
  draw(t, e = 0, r = 1, i = !0) {
    let a = null,
      h = e,
      c = r,
      b = this.points
    if (e !== 0 || r !== 1) {
      const I = this.length * e,
        J = this.length * r
      ;(h = this.pointSampler.distanceToT(I)),
        (c = this.pointSampler.distanceToT(J))
      const tt = (c - h) / (1 - h),
        [, at] = this.split(h)
      ;([a] = at.split(tt)), (b = a.points)
    }
    i && Pr(t, b[0]), (a ?? this).doDraw(t)
    const y = this.tangent(h),
      k = this.tangent(c)
    return [
      { position: b[0], tangent: y, normal: y.perpendicular },
      { position: b.at(-1), tangent: k, normal: k.perpendicular }
    ]
  }
}
var pc =
  (globalThis && globalThis.__decorate) ||
  function (n, t, e, r) {
    var i = arguments.length,
      a =
        i < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, e))
          : r,
      h
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      a = Reflect.decorate(n, t, e, r)
    else
      for (var c = n.length - 1; c >= 0; c--)
        (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
    return i > 3 && a && Object.defineProperty(t, e, a), a
  }
class ee extends dc {
  get points() {
    return [this.p0, this.p1, this.p2, this.p3]
  }
  constructor(t, e, r, i) {
    super(
      new He(
        t,
        t.flipped.add(e).scale(3),
        t.scale(3).sub(e.scale(6)).add(r.scale(3)),
        t.flipped.add(e.scale(3)).sub(r.scale(3)).add(i)
      ),
      ee.getLength(t, e, r, i)
    ),
      (this.p0 = t),
      (this.p1 = e),
      (this.p2 = r),
      (this.p3 = i)
  }
  split(t) {
    const e = new g(
        this.p0.x + (this.p1.x - this.p0.x) * t,
        this.p0.y + (this.p1.y - this.p0.y) * t
      ),
      r = new g(
        this.p1.x + (this.p2.x - this.p1.x) * t,
        this.p1.y + (this.p2.y - this.p1.y) * t
      ),
      i = new g(
        this.p2.x + (this.p3.x - this.p2.x) * t,
        this.p2.y + (this.p3.y - this.p2.y) * t
      ),
      a = new g(e.x + (r.x - e.x) * t, e.y + (r.y - e.y) * t),
      h = new g(r.x + (i.x - r.x) * t, r.y + (i.y - r.y) * t),
      c = new g(a.x + (h.x - a.x) * t, a.y + (h.y - a.y) * t),
      b = new ee(this.p0, e, a, c),
      y = new ee(c, h, i, this.p3)
    return [b, y]
  }
  doDraw(t) {
    sc(t, this.p1, this.p2, this.p3)
  }
  static getLength(t, e, r, i) {
    return (
      ee.el.setAttribute(
        "d",
        `M ${t.x} ${t.y} C ${e.x} ${e.y} ${r.x} ${r.y} ${i.x} ${i.y}`
      ),
      ee.el.getTotalLength()
    )
  }
}
pc(
  [Cr(() => document.createElementNS("http://www.w3.org/2000/svg", "path"))],
  ee,
  "el",
  void 0
)
class dr extends Sn {
  constructor(t, e) {
    super(),
      (this.from = t),
      (this.to = e),
      (this.vector = e.sub(t)),
      (this.length = this.vector.magnitude),
      (this.normal = this.vector.perpendicular.normalized.safe),
      (this.points = [t, e])
  }
  get arcLength() {
    return this.length
  }
  draw(t, e = 0, r = 1, i = !1) {
    const a = this.from.add(this.vector.scale(e)),
      h = this.from.add(this.vector.scale(r))
    return (
      i && Pr(t, a),
      qt(t, h),
      [
        { position: a, tangent: this.normal.flipped, normal: this.normal },
        { position: h, tangent: this.normal, normal: this.normal }
      ]
    )
  }
  getPoint(t) {
    return {
      position: this.from.add(this.vector.scale(t)),
      tangent: this.normal.flipped,
      normal: this.normal
    }
  }
}
function gc(n, t, e, r) {
  const i = { arcLength: 0, segments: [], minSin: 1 },
    a = re(t.top, t.right, t.left, n),
    h = re(t.right, t.top, t.bottom, n),
    c = re(t.bottom, t.left, t.right, n),
    b = re(t.left, t.bottom, t.top, n)
  let y = new g(n.left + a, n.top),
    k = new g(n.right - h, n.top)
  return (
    Ie(i, new dr(y, k)),
    (y = new g(n.right, n.top + h)),
    (k = new g(n.right, n.bottom - c)),
    h > 0 && pr(i, y.addX(-h), h, g.down, g.right, e, r),
    Ie(i, new dr(y, k)),
    (y = new g(n.right - c, n.bottom)),
    (k = new g(n.left + b, n.bottom)),
    c > 0 && pr(i, y.addY(-c), c, g.right, g.up, e, r),
    Ie(i, new dr(y, k)),
    (y = new g(n.left, n.bottom - b)),
    (k = new g(n.left, n.top + a)),
    b > 0 && pr(i, y.addX(b), b, g.up, g.left, e, r),
    Ie(i, new dr(y, k)),
    (y = new g(n.left + a, n.top)),
    a > 0 && pr(i, y.addY(a), a, g.left, g.down, e, r),
    i
  )
}
function Ie(n, t) {
  n.segments.push(t), (n.arcLength += t.arcLength)
}
function pr(n, t, e, r, i, a, h) {
  const c = t.add(r.scale(e)),
    b = t.add(i.scale(e))
  a
    ? Ie(n, new ee(c, c.add(i.scale(h * e)), b.add(r.scale(h * e)), b))
    : Ie(n, new cc(t, e, r, i, !1))
}
var Ke =
  (globalThis && globalThis.__decorate) ||
  function (n, t, e, r) {
    var i = arguments.length,
      a =
        i < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, e))
          : r,
      h
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      a = Reflect.decorate(n, t, e, r)
    else
      for (var c = n.length - 1; c >= 0; c--)
        (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
    return i > 3 && a && Object.defineProperty(t, e, a), a
  }
let se = class extends kt {
  constructor(t) {
    super(t)
  }
  profile() {
    return gc(
      this.childrenBBox(),
      this.radius(),
      this.smoothCorners(),
      this.cornerSharpness()
    )
  }
  desiredSize() {
    return { x: this.width.context.getter(), y: this.height.context.getter() }
  }
  offsetComputedLayout(t) {
    return t
  }
  childrenBBox() {
    return H.fromSizeCentered(this.computedSize())
  }
  getPath() {
    if (this.requiresProfile()) return this.curveDrawingInfo().path
    const t = new Path2D(),
      e = this.radius(),
      r = this.smoothCorners(),
      i = this.cornerSharpness(),
      a = H.fromSizeCentered(this.size())
    return gi(t, a, e, r, i), t
  }
  getCacheBBox() {
    return super.getCacheBBox().expand(this.rippleSize())
  }
  getRipplePath() {
    const t = new Path2D(),
      e = this.rippleSize(),
      r = this.radius().addScalar(e),
      i = this.smoothCorners(),
      a = this.cornerSharpness(),
      h = H.fromSizeCentered(this.size()).expand(e)
    return gi(t, h, r, i, a), t
  }
}
Ke([Mr("radius")], se.prototype, "radius", void 0)
Ke([O(!1), P()], se.prototype, "smoothCorners", void 0)
Ke([O(0.6), P()], se.prototype, "cornerSharpness", void 0)
Ke([E()], se.prototype, "profile", null)
se = Ke([he("Rect")], se)
var ue =
  (globalThis && globalThis.__decorate) ||
  function (n, t, e, r) {
    var i = arguments.length,
      a =
        i < 3
          ? t
          : r === null
          ? (r = Object.getOwnPropertyDescriptor(t, e))
          : r,
      h
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      a = Reflect.decorate(n, t, e, r)
    else
      for (var c = n.length - 1; c >= 0; c--)
        (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
    return i > 3 && a && Object.defineProperty(t, e, a), a
  }
class It extends z {
  constructor({ children: t, ...e }) {
    super(e), this.scene() || this.scene(new z({})), t && this.scene().add(t)
  }
  getZoom() {
    return 1 / this.scale.x()
  }
  setZoom(t) {
    this.scale(be(t, (e) => 1 / e))
  }
  getDefaultZoom() {
    return this.scale.x.context.getInitial()
  }
  *tweenZoom(t, e, r, i) {
    const a = this.scale.x()
    yield* Dt(e, (h) => {
      this.zoom(1 / i(a, 1 / xe(t), r(h)))
    })
  }
  *reset(t, e = _t) {
    yield* me(
      this.position(Ee, t, e),
      this.zoom(Ee, t, e),
      this.rotation(Ee, t, e)
    )
  }
  *centerOn(t, e, r = _t, i = g.lerp) {
    const a =
      t instanceof z
        ? t.absolutePosition().transformAsPoint(this.scene().worldToLocal())
        : t
    yield* this.position(a, e, r, i)
  }
  *followCurve(t, e, r = _t) {
    yield* Dt(e, (i) => {
      const a = r(i),
        h = t
          .getPointAtPercentage(a)
          .position.transformAsPoint(t.localToWorld())
      this.position(h)
    })
  }
  *followCurveReverse(t, e, r = _t) {
    yield* Dt(e, (i) => {
      const a = 1 - r(i),
        h = t
          .getPointAtPercentage(a)
          .position.transformAsPoint(t.localToWorld())
      this.position(h)
    })
  }
  *followCurveWithRotation(t, e, r = _t) {
    yield* Dt(e, (i) => {
      const a = r(i),
        { position: h, normal: c } = t.getPointAtPercentage(a),
        b = h.transformAsPoint(t.localToWorld()),
        y = c.flipped.perpendicular.degrees
      this.position(b), this.rotation(y)
    })
  }
  *followCurveWithRotationReverse(t, e, r = _t) {
    yield* Dt(e, (i) => {
      const a = 1 - r(i),
        { position: h, normal: c } = t.getPointAtPercentage(a),
        b = h.transformAsPoint(t.localToWorld()),
        y = c.flipped.perpendicular.degrees
      this.position(b), this.rotation(y)
    })
  }
  transformContext(t) {
    const e = this.localToParent().inverse()
    t.transform(e.a, e.b, e.c, e.d, e.e, e.f)
  }
  hit(t) {
    const e = t.transformAsPoint(this.localToParent())
    return this.scene().hit(e)
  }
  drawChildren(t) {
    this.scene().drawChildren(t)
  }
  static Stage({ children: t, cameraRef: e, scene: r, ...i }) {
    const a = new It({ scene: r, children: t })
    return e == null || e(a), new se({ clip: !0, ...i, children: [a] })
  }
}
ue([P()], It.prototype, "scene", void 0)
ue([ke(!1), P()], It.prototype, "zoom", void 0)
ue([ot()], It.prototype, "reset", null)
ue([ot()], It.prototype, "centerOn", null)
ue([ot()], It.prototype, "followCurve", null)
ue([ot()], It.prototype, "followCurveReverse", null)
ue([ot()], It.prototype, "followCurveWithRotation", null)
ue([ot()], It.prototype, "followCurveWithRotationReverse", null)
var tr =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var i = arguments.length,
        a =
          i < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        h
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        a = Reflect.decorate(n, t, e, r)
      else
        for (var c = n.length - 1; c >= 0; c--)
          (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
      return i > 3 && a && Object.defineProperty(t, e, a), a
    },
  dn
let ie = (dn = class extends se {
  constructor(t) {
    super({
      composite: !0,
      fontFamily: "Roboto",
      fontSize: 48,
      lineHeight: "120%",
      textWrap: !1,
      fontStyle: "normal",
      ...t
    }),
      (this.view2D = this),
      dn.shadowRoot.append(this.element),
      this.applyFlex()
  }
  dispose() {
    this.removeChildren(), super.dispose()
  }
  render(t) {
    this.computedSize(), this.computedPosition(), super.render(t)
  }
  findKey(t) {
    return gr().getNode(t) ?? null
  }
  requestLayoutUpdate() {
    this.updateLayout()
  }
  requestFontUpdate() {
    this.applyFont()
  }
  view() {
    return this
  }
})
tr([O(Ze.Paused), P()], ie.prototype, "playbackState", void 0)
tr([O(0), P()], ie.prototype, "globalTime", void 0)
tr([P()], ie.prototype, "assetHash", void 0)
tr(
  [
    Cr(() => {
      const n = "motion-canvas-2d-frame"
      let t = document.querySelector(`#${n}`)
      return (
        t ||
          ((t = document.createElement("div")),
          (t.id = n),
          (t.style.position = "absolute"),
          (t.style.pointerEvents = "none"),
          (t.style.top = "0"),
          (t.style.left = "0"),
          (t.style.opacity = "0"),
          (t.style.overflow = "hidden"),
          document.body.prepend(t)),
        t.shadowRoot ?? t.attachShadow({ mode: "open" })
      )
    })
  ],
  ie,
  "shadowRoot",
  void 0
)
ie = dn = tr([he("View2D")], ie)
var er =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var i = arguments.length,
        a =
          i < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        h
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        a = Reflect.decorate(n, t, e, r)
      else
        for (var c = n.length - 1; c >= 0; c--)
          (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
      return i > 3 && a && Object.defineProperty(t, e, a), a
    },
  br
let Rt = (br = class extends vt {
  constructor({ children: t, ...e }) {
    super(e), t && this.text(t)
  }
  parentTxt() {
    const t = this.parent()
    return t instanceof ae ? t : null
  }
  draw(t) {
    this.requestFontUpdate(),
      this.applyStyle(t),
      this.applyText(t),
      (t.font = this.styles.font),
      "letterSpacing" in t && (t.letterSpacing = `${this.letterSpacing()}px`)
    const e = this.element.getBoundingClientRect(),
      { width: r, height: i } = this.size(),
      a = document.createRange()
    let h = ""
    const c = new H()
    for (const b of this.element.childNodes) {
      if (!b.textContent) continue
      a.selectNodeContents(b)
      const y = a.getBoundingClientRect(),
        k = r / -2 + y.left - e.left,
        I = i / -2 + y.top - e.top
      c.y === I
        ? ((c.width += y.width), (h += b.textContent))
        : (this.drawText(t, h, c),
          (c.x = k),
          (c.y = I),
          (c.width = y.width),
          (c.height = y.height),
          (h = b.textContent))
    }
    this.drawText(t, h, c)
  }
  drawText(t, e, r) {
    const i = r.y + r.height / 2
    t.save(),
      (t.textBaseline = "middle"),
      (e = e.replace(/\s+/g, " ")),
      this.lineWidth() <= 0
        ? t.fillText(e, r.x, i)
        : this.strokeFirst()
        ? (t.strokeText(e, r.x, i), t.fillText(e, r.x, i))
        : (t.fillText(e, r.x, i), t.strokeText(e, r.x, i)),
      t.restore()
  }
  getCacheBBox() {
    const t = this.computedSize(),
      e = document.createRange()
    e.selectNodeContents(this.element)
    const r = e.getBoundingClientRect(),
      i = this.lineWidth(),
      a = this.lineJoin() === "miter" ? 0.5 * 10 : 0.5
    return new H(-t.width / 2, -t.height / 2, r.width, r.height)
      .expand([0, this.fontSize() * 0.5])
      .expand(i * a)
  }
  applyFlex() {
    super.applyFlex(), (this.element.style.display = "inline")
  }
  updateLayout() {
    if (
      (this.applyFont(),
      this.applyFlex(),
      this.justifyContent.isInitial() &&
        (this.element.style.justifyContent =
          this.styles.getPropertyValue("text-align")),
      this.styles.whiteSpace !== "nowrap" && this.styles.whiteSpace !== "pre")
    )
      if (((this.element.innerText = ""), br.segmenter))
        for (const e of br.segmenter.segment(this.text()))
          this.element.appendChild(document.createTextNode(e.segment))
      else
        for (const e of this.text().split(""))
          this.element.appendChild(document.createTextNode(e))
    else if (this.styles.whiteSpace === "pre") {
      this.element.innerText = ""
      for (const e of this.text().split(`
`))
        this.element.appendChild(
          document.createTextNode(
            e +
              `
`
          )
        )
    } else this.element.innerText = this.text()
  }
})
er([O(""), xn(Si), P()], Rt.prototype, "text", void 0)
er([E()], Rt.prototype, "parentTxt", null)
er(
  [
    Cr(() => {
      const n = document.createElement("span")
      return ie.shadowRoot.append(n), n
    })
  ],
  Rt,
  "formatter",
  void 0
)
er(
  [
    Cr(() => {
      try {
        return new Intl.Segmenter(void 0, { granularity: "grapheme" })
      } catch {
        return null
      }
    })
  ],
  Rt,
  "segmenter",
  void 0
)
Rt = br = er([he("TxtLeaf")], Rt)
;[
  "fill",
  "stroke",
  "lineWidth",
  "strokeFirst",
  "lineCap",
  "lineJoin",
  "lineDash",
  "lineDashOffset"
].forEach((n) => {
  Rt.prototype[`get${ve(n)}`] = function () {
    var t
    return (
      ((t = this.parentTxt()) == null ? void 0 : t[n]()) ??
      this[n].context.getInitial()
    )
  }
})
var rr =
    (globalThis && globalThis.__decorate) ||
    function (n, t, e, r) {
      var i = arguments.length,
        a =
          i < 3
            ? t
            : r === null
            ? (r = Object.getOwnPropertyDescriptor(t, e))
            : r,
        h
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        a = Reflect.decorate(n, t, e, r)
      else
        for (var c = n.length - 1; c >= 0; c--)
          (h = n[c]) && (a = (i < 3 ? h(a) : i > 3 ? h(t, e, a) : h(t, e)) || a)
      return i > 3 && a && Object.defineProperty(t, e, a), a
    },
  pe
let ae = (pe = class extends vt {
  static b(t) {
    return new pe({ ...t, fontWeight: 700 })
  }
  static i(t) {
    return new pe({ ...t, fontStyle: "italic" })
  }
  getText() {
    return this.innerText()
  }
  setText(t) {
    const e = this.children()
    let r = null
    for (let i = 0; i < e.length; i++) {
      const a = e[i]
      r === null && a instanceof Rt ? (r = a) : a.parent(null)
    }
    r === null ? ((r = new Rt({ text: t })), r.parent(this)) : r.text(t),
      this.setParsedChildren([r])
  }
  setChildren(t) {
    this.children.context.raw() !== t &&
      (typeof t == "string" ? this.text(t) : super.setChildren(t))
  }
  *tweenText(t, e, r, i) {
    const a = this.children()
    ;(a.length !== 1 || !(a[0] instanceof Rt)) && this.text.save()
    const h = this.childAs(0),
      c = h.text.context.raw(),
      b = this.size.context.raw()
    h.text(t)
    const y = this.size()
    h.text(c ?? Ee),
      this.height() === 0 && this.height(y.height),
      yield* me(this.size(y, e, r), h.text(t, e, r, i)),
      this.children.context.setter(t),
      this.size(b)
  }
  getLayout() {
    return !0
  }
  constructor({ children: t, text: e, ...r }) {
    super(r), this.children(e ?? t)
  }
  innerText() {
    const t = this.childrenAs()
    let e = ""
    for (const r of t) e += r.text()
    return e
  }
  parentTxt() {
    const t = this.parent()
    return t instanceof pe ? t : null
  }
  parseChildren(t) {
    const e = [],
      r = Array.isArray(t) ? t : [t]
    for (const i of r)
      i instanceof pe || i instanceof Rt
        ? e.push(i)
        : typeof i == "string" && e.push(new Rt({ text: i }))
    return e
  }
  applyFlex() {
    super.applyFlex(),
      (this.element.style.display = this.findAncestor(kn(pe))
        ? "inline"
        : "block")
  }
  draw(t) {
    this.drawChildren(t)
  }
})
rr([O(""), P()], ae.prototype, "text", void 0)
rr([ot()], ae.prototype, "tweenText", null)
rr([E()], ae.prototype, "innerText", null)
rr([E()], ae.prototype, "parentTxt", null)
ae = pe = rr([he("Txt")], ae)
;[
  "fill",
  "stroke",
  "lineWidth",
  "strokeFirst",
  "lineCap",
  "lineJoin",
  "lineDash",
  "lineDashOffset"
].forEach((n) => {
  ae.prototype[`getDefault${ve(n)}`] = function (t) {
    var e
    return ((e = this.parentTxt()) == null ? void 0 : e[n]()) ?? t
  }
})
class vc extends _u {
  constructor(t) {
    super(t),
      (this.view = null),
      (this.registeredNodes = new Map()),
      (this.nodeCounters = new Map()),
      (this.assetHash = Date.now().toString()),
      this.recreateView()
  }
  getView() {
    return this.view
  }
  next() {
    var t
    return (
      (t = this.getView()) == null ||
        t.playbackState(this.playback.state).globalTime(this.playback.time),
      super.next()
    )
  }
  draw(t) {
    t.save(),
      this.renderLifecycle.dispatch([jt.BeforeRender, t]),
      t.save(),
      this.renderLifecycle.dispatch([jt.BeginRender, t]),
      this.getView()
        .playbackState(this.playback.state)
        .globalTime(this.playback.time),
      this.getView().render(t),
      this.renderLifecycle.dispatch([jt.FinishRender, t]),
      t.restore(),
      this.renderLifecycle.dispatch([jt.AfterRender, t]),
      t.restore()
  }
  reset(t) {
    for (const e of this.registeredNodes.keys())
      try {
        this.registeredNodes.get(e).dispose()
      } catch (r) {
        this.logger.error(r)
      }
    return (
      this.registeredNodes.clear(),
      (this.registeredNodes = new Map()),
      this.nodeCounters.clear(),
      this.recreateView(),
      super.reset(t)
    )
  }
  inspectPosition(t, e) {
    return this.execute(() => {
      var r
      return (
        ((r = this.getView().hit(new g(t, e))) == null ? void 0 : r.key) ?? null
      )
    })
  }
  validateInspection(t) {
    var e
    return ((e = this.getNode(t)) == null ? void 0 : e.key) ?? null
  }
  inspectAttributes(t) {
    const e = this.getNode(t)
    if (!e) return null
    const r = { stack: e.creationStack, key: e.key }
    for (const { key: i, meta: a, signal: h } of e)
      a.inspectable && (r[i] = h())
    return r
  }
  drawOverlay(t, e, r) {
    const i = this.getNode(t)
    i &&
      this.execute(() => {
        const a = this.getView().findAll(kn(It)),
          h = []
        for (const c of a) {
          const b = c.scene()
          b && (b === i || b.findFirst((y) => y === i)) && h.push(c)
        }
        if (h.length > 0)
          for (const c of h) {
            const b = c.parentToWorld(),
              y = c.localToParent().inverse(),
              k = i.localToWorld()
            i.drawOverlay(r, e.multiply(b).multiply(y).multiply(k))
          }
        else i.drawOverlay(r, e.multiply(i.localToWorld()))
      })
  }
  transformMousePosition(t, e) {
    return new g(t, e).transformAsPoint(
      this.getView().localToParent().inverse()
    )
  }
  registerNode(t, e) {
    var h
    const r = ((h = t.constructor) == null ? void 0 : h.name) ?? "unknown",
      i = (this.nodeCounters.get(r) ?? 0) + 1
    this.nodeCounters.set(r, i),
      e &&
        this.registeredNodes.has(e) &&
        (mt().error({
          message: `Duplicated node key: "${e}".`,
          inspect: e,
          stack: new Error().stack
        }),
        (e = void 0)),
      e ?? (e = `${this.name}/${r}[${i}]`),
      this.registeredNodes.set(e, t)
    const a = this.registeredNodes
    return [e, () => a.delete(e)]
  }
  getNode(t) {
    return typeof t != "string" ? null : this.registeredNodes.get(t) ?? null
  }
  *getDetachedNodes() {
    for (const t of this.registeredNodes.values())
      !t.parent() && t !== this.view && (yield t)
  }
  recreateView() {
    this.execute(() => {
      const t = this.getSize()
      this.view = new ie({
        position: t.scale(this.resolutionScale / 2),
        scale: this.resolutionScale,
        assetHash: this.assetHash,
        size: t
      })
    })
  }
}
function Fc(n) {
  return {
    klass: vc,
    config: n,
    stack: new Error().stack,
    meta: Du(),
    plugins: ["@motion-canvas/2d/editor"]
  }
}
const zc = {
    whiteLabel: "rgba(255, 255, 255, 0.54)",
    blackLabel: "rgba(0, 0, 0, 0.87)",
    background: "#141414",
    surface: "#242424",
    surfaceLight: "#c0b3a3",
    KEYWORD: "#ff6470",
    TEXT: "#ACB3BF",
    FUNCTION: "#ffc66d",
    STRING: "#99C47A",
    NUMBER: "#68ABDF",
    PROPERTY: "#AC7BB5",
    COMMENT: "#808586",
    red: "#ef5350",
    green: "#8bc34a",
    blue: "#2196f3",
    orange: "#f37e21",
    purple: "#824ac3",
    black: "#141414",
    transparent: "#00000000",
    cyan: "#00BCD4",
    pink: "#FF4081",
    yellow: "#FFC107",
    white: "#FFFFFF"
  },
  Ic = {
    paddingTop: 10,
    fontFamily: "JetBrains Mono",
    fill: "rgba(255, 255, 255, 0.8)"
  }
let Rn
Rn ?? (Rn = new bn("\0virtual:settings", !1))
Rn.loadData({
  version: 1,
  appearance: { color: "rgb(51,166,255)", font: !1, coordinates: !0 },
  defaults: { background: null, size: { x: 1920, y: 1080 } }
})
const Ec = Rn
export {
  ge as $,
  Cr as A,
  H as B,
  zc as C,
  ln as D,
  ne as E,
  Vu as F,
  ie as G,
  dr as H,
  wt as I,
  cc as J,
  kt as K,
  $ as L,
  bn as M,
  z as N,
  E as O,
  he as P,
  xe as Q,
  se as R,
  Sn as S,
  ae as T,
  Dt as U,
  we as V,
  mt as W,
  Pr as X,
  qt as Y,
  nc as Z,
  rc as _,
  xc as a,
  At as a0,
  bc as b,
  me as c,
  mc as d,
  Tc as e,
  yc as f,
  wc as g,
  Ec as h,
  O as i,
  kc as j,
  ic as k,
  P as l,
  Fc as m,
  _t as n,
  je as o,
  Cc as p,
  Yt as q,
  hi as r,
  Tu as s,
  Ic as t,
  Ye as u,
  Ti as v,
  kr as w,
  ot as x,
  g as y,
  st as z
}
