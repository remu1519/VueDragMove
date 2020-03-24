(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-drag-move"] = factory();
	else
		root["vue-drag-move"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return install; });
/* harmony import */ var _components_VueDragMove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("96f1");

var install = function install(Vue) {
  if (install.installed) {
    return;
  }

  install.installed = true;
  Vue.component('vue-drag-move', _components_VueDragMove__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
};
var plugin = {
  install: install
};

var GlobalVue = function () {
  if (typeof window !== 'undefined') {
    return window.Vue;
  }

  if (typeof global !== 'undefined') {
    return global.Vue;
  }

  return null;
}();

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (_components_VueDragMove__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "96f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"db0c4f58-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueDragMove.vue?vue&type=template&id=4fa5f4d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-drag-move-wrapper",style:({ top: _vm.top, left: _vm.left, position: 'absolute' }),on:{"mousedown":_vm.handleStartDrag,"touchstart":_vm.handleStartDrag}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueDragMove.vue?vue&type=template&id=4fa5f4d6&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./src/classes/position.js



var position_default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    this._prevY = 0;
    this._prevX = 0;
    this._isDragging = false;
  }

  _createClass(_default, [{
    key: "prevY",
    set: function set(val) {
      this._prevY = parseInt(val, 10);
    },
    get: function get() {
      return this._prevY;
    }
  }, {
    key: "prevX",
    set: function set(val) {
      this._prevX = parseInt(val, 10);
    },
    get: function get() {
      return this._prevX;
    }
  }, {
    key: "isDragging",
    set: function set(val) {
      this._isDragging = !!val;
    },
    get: function get() {
      return this._isDragging;
    }
  }]);

  return _default;
}();


// CONCATENATED MODULE: ./src/classes/user-select-none.js


/* harmony default export */ var user_select_none = (new ( /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);

    this.defaultUserSelect = 'auto';
    this.defaultMozUserSelect = 'auto';
    this.defaultMsUserSelect = 'auto';
    this.defaultWebkitUserSelect = 'auto';
  }

  _createClass(_class, [{
    key: "enable",
    value: function enable() {
      this.defaultUserSelect = document.body.style.userSelect;
      this.defaultMozUserSelect = document.body.style.mozUserSelect;
      this.defaultMsUserSelect = document.body.style.msUserSelect;
      this.defaultWebkitUserSelect = document.body.style.webkitUserSelect;
      document.body.style.userSelect = 'none';
      document.body.style.mozUserSelect = 'none';
      document.body.style.msUserSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
    }
  }, {
    key: "disable",
    value: function disable() {
      document.body.style.userSelect = this.defaultUserSelect;
      document.body.style.mozUserSelect = this.defaultMozUserSelect;
      document.body.style.msUserSelect = this.defaultMsUserSelect;
      document.body.style.webkitUserSelect = this.defaultWebkitUserSelect;
    }
  }]);

  return _class;
}())());
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueDragMove.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var VueDragMovevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      x: 0,
      y: 0,
      position: new position_default()
    };
  },
  computed: {
    top: function top() {
      return "".concat(this.y, "px");
    },
    left: function left() {
      return "".concat(this.x, "px");
    }
  },
  created: function created() {
    document.addEventListener('pointermove', this.handleDoDrag.bind(this));
    document.addEventListener('mouseup', this.handleStopDrag.bind(this));
    document.addEventListener('touchend', this.handleStopDrag.bind(this));
  },
  methods: {
    handleStartDrag: function handleStartDrag(e) {
      this.$emit('start', e);
      user_select_none.enable();
      this.position.isDragging = true;
      this.position.prevY = e.clientY;
      this.position.prevX = e.clientX;
    },
    handleStopDrag: function handleStopDrag(e) {
      user_select_none.disable();
      this.position.isDragging = false;
      this.$emit('stop', e);
    },
    handleDoDrag: function handleDoDrag(e) {
      if (!this.position.isDragging) {
        return;
      }

      this.$emit('dragging', e);
      var diffY = e.clientY - this.position.prevY;
      var diffX = e.clientX - this.position.prevX;
      this.position.prevY = e.clientY;
      this.position.prevX = e.clientX;
      this.y += diffY;
      this.x += diffX;
    }
  },
  destroyed: function destroyed() {
    document.removeEventListener('pointermove', this.handleDoDrag.bind(this));
    document.removeEventListener('mouseup', this.handleStopDrag.bind(this));
    document.removeEventListener('touchend', this.handleStopDrag.bind(this));
  }
});
// CONCATENATED MODULE: ./src/components/VueDragMove.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueDragMovevue_type_script_lang_js_ = (VueDragMovevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VueDragMove.vue





/* normalize component */

var component = normalizeComponent(
  components_VueDragMovevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueDragMove = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ main["b" /* install */]; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/main.js
var main = __webpack_require__("56d7");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main["a" /* default */]);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-drag-move.umd.js.map