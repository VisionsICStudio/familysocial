// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/contact.js":[function(require,module,exports) {
/*
; =======================================================
; Title: contact.js ( familysocial website - js folder )
; Authors: Aaron Wilson
; Instructor: Kevin Imhoff
; Date: 26 July 2020
; Description: JS Contact Page file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/
var contactForm = document.getElementById('contact-form');
var cFn = contactForm.getElementById('cd-fn');
var cLn = contactForm.getElementById('cd-ln');
var CEm = contactForm.getElementById('cd-em');
var cAd = contactForm.getElementById('cd-ad');
var cAp = contactForm.getElementById('cd-ap');
var cCy = contactForm.getElementById('cd-cy');
var cSt = contactForm.getElementById('cd-st');
var cZp = contactForm.getElementById('cd-zp');
var cPr = contactForm.getElementById('cd-pr');
var cSc = contactForm.getElementById('cd-sc');
var cTm = contactForm.getElementById('cd-tm'); // This variable stores the HTML value for the CONTACT page.

var pgContact = document.getElementById('pgContent').innerHTML("\n\n  <div id=\"contact-desktop\">\n\n    <div class=\"container\">\n\n      <form id=\"contact-form\">\n\n        <div class=\"row\">\n\n          <div class=\"col-sm\" id=\"contact-col-one\">\n\n            <div class=\"form-group\">\n              <label for=\"fnLbl\">FIRST NAME/label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-fn\" aria-describedby=\"fnHlp\">\n              <small id=\"fnHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"lnLbl\">LAST NAME</label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-ln\" aria-describedby=\"lnHlp\">\n              <small id=\"lnHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"emLbl\">EMAIL</label>\n              <input type=\"email\" class=\"form-control\" id=\"cd-em\" aria-describedby=\"emHlp\">\n              <small id=\"emHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"adLbl\">STREET ADDRESS</label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-ad\" aria-describedby=\"adHlp\">\n              <small id=\"adHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n          </div>\n\n          <div class=\"col-sm\" id=\"contact-col-two\">\n\n            <div class=\"form-group\">\n              <label for=\"apLbl\">APT / SUITE / PO BOX</label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-ap\" aria-describedby=\"apHlp\">\n              <small id=\"apHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"cyLbl\">CITY</label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-cy\" aria-describedby=\"cyHlp\">\n              <small id=\"cyHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"stLbl\">STATE</label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-st\" aria-describedby=\"stHlp\">\n              <small id=\"stHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"zpLbl\">ZIP CODE</label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-zp\" aria-describedby=\"zpHlp\">\n              <small id=\"zpHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n          </div>\n\n          <div class=\"col-sm\" id=\"contact-col-three\">\n\n            <div class=\"form-group\">\n              <label for=\"prLbl\">PRIMARY PHONE NUMBER</label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-pr\" aria-describedby=\"prHlp\">\n              <small id=\"prHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"scLbl\">SECONDARY PHONE NUMBER</label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-sc\" aria-describedby=\"scHlp\">\n              <small id=\"scHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"tmLbl\">BEST AVAILABLE CONTACT TIME (one entry of either morning, afternoon, or night):</label>\n              <input type=\"text\" class=\"form-control\" id=\"cd-tm\" aria-describedby=\"tmHlp\">\n              <small id=\"tmHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n\n\n            <div class=\"form-group\" id=\"contact-button-bank\">\n              <button type=\"button\" onclick=\"clearForm();\" class=\"btn btn-primary\">CLEAR FORM</button>\n              <button type=\"submit\" onclick=\"setContactData(cFn, cLn, cEm, cAd, cAp, cCy, cSt, cZp, cPr, cSc, cTm);\" class=\"btn btn-raised btn-info\" id=\"submit-conform\">SUBMIT</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <!-- Undo Desktop Contact Modal ------------------------------------------------------------------------------------->\n\n  <div class=\"modal fade\" id=\"undoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"undoModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"undoModalLabel\">UNDO THIS ENTIRE FORM?</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">CANCEL</button>\n          <button type=\"button\" onclick=\"undoForm(conData, pgContact);\" class=\"btn btn-primary\">UNDO FORM</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Separation between contact mobile and desktop --------------------------------------------------------------------------->\n\n  <div id=\"contact-mobile\">\n\n  <header id=\"mobile-header\">\n\n      <nav class=\"navbar navbar-expand-md\">\n\n        <!-- Brand -->\n        <a id=\"logo\" onclick=\"changePage(pgHome);\" class=\"navbar-brand\" href=\"\"></a>\n\n        <!-- Toggler/collapsing Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n        <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n\n          <!-- Standard White navigation -->\n          <ul class=\"nav nav-tabs\">\n\n            <li class=\"nav-item\">\n              <a id=\"logo\" onclick=\"changePage(pgHome);\" class=\"nav-link\" href=\"#\" ></a>\n            </li>\n            <li class=\"nav-item\">\n              <a id=\"home\" onclick=\"changePage(pgHome);\" class=\"nav-link active\" href=\"#\">HOME</a>\n            </li>\n            <li class=\"nav-item\">\n              <a id=\"about\" onclick=\"changePage(pgAbout);\" class=\"nav-link\" href=\"#\">ABOUT</a>\n            </li>\n            <li class=\"nav-item\">\n              <a id=\"app\" onclick=\"changePage(pgApp);\" class=\"nav-link\" href=\"#\">THE APP</a>\n            </li>\n            <li class=\"nav-item\">\n              <a id=\"contact\" onclick=\"changePage(pgContact);\" class=\"nav-link\" href=\"#\" >CONTACT</a>\n            </li>\n            <li class=\"nav-item\">\n              <a id=\"register\" type=\"button\" onclick=\"changePage(pgRegister);\" class=\"btn btn-raised btn-lg btn-info\">REGISTER</button>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </header>\n\n    <form id=\"conForm\" action=\"\">\n\n      <h1>Contact Information:</h1>\n\n      <!-- One \"tab\" for each step in the form: -->\n      <div class=\"tab\">Formal Name:\n        <p><input type=\"text\" placeholder=\"First name...\" id=\"cm-fn\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"Last name...\" id=\"cm-ln\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"email\" placeholder=\"Email...\" id=\"cm-em\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"Street Address...\" id=\"cm-ad\" oninput=\"this.className = ''\"></p>\n      </div>\n\n      <div class=\"tab\">Address Info:\n        <p><input type=\"text\" placeholder=\"Apt  Suite  PO Box...\" id=\"cm-ap\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"City...\" id=\"cm-cy\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"State...\" id=\"cm-st\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"Zip Code...\" id=\"cm-zp\" oninput=\"this.className = ''\"></p>\n      </div>\n\n      <div class=\"tab\">Additional Info:\n        <p><input type=\"text\" placeholder=\"Primary Phone Number...\" id=\"cm-pr\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"Secondary Phone Number...\" id=\"cm-sc\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"Best time to reach you...\" id=\"cm-tm\" oninput=\"this.className = ''\"></p>\n        <p><label id=\"time-day\"> options: (Morning, Afternoon, Night)</label>\n      </div>\n\n      <div style=\"overflow:auto;\">\n        <div style=\"float:right;\">\n          <button type=\"button\" id=\"prevBtn\" onclick=\"nextPrev(-1)\">Previous</button>\n          <button type=\"button\" id=\"nextBtn\" onclick=\"nextPrev(1)\">Next</button>\n        </div>\n      </div>\n\n      <!-- Circles which indicates the steps of the form: -->\n      <div style=\"text-align:center;margin-top:40px;\">\n          <span class=\"step\"></span>\n          <span class=\"step\"></span>\n          <span class=\"step\"></span>\n      </div>\n    </form>\n  </div>\n\n");

var setContactData = function setContactData(firstname, lastname, email, address, apt, city, state, zip, primary, secondary, time) {
  var thisContactObject = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    address: address.value,
    apt: apt.value,
    city: city.value,
    state: state.value,
    zip: zip.value,
    primary: primary.value,
    secondary: secondary.value,
    time: time.value
  };
  var thisContactOutput = document.getElementById('pgContent').innerHTML("\n\n    <div class=\"container\">\n\n      <div class=\"card\">\n\n        <div class=\"card-header\">\n          ".concat(thisObject.firstname, "'s CONTACT OUTPUT DATA\n        </div>\n\n        <div class=\"card-body\">\n\n          <h5 class=\"card-title\">REMINDER: This is a simulated database store</h5>\n\n          <table class=\"table\">\n\n            <thead class=\"thead-dark\">\n\n              <tr>\n                <th scope=\"col\">FIELDS</th>\n                <th scope=\"col\">YOUR ENTRY</th>\n              </tr>\n            </thead>\n\n            <tbody>\n\n              <tr>\n                <th scope=\"row\">FIRST NAME:</th>\n                <td>").concat(thisContactObject.firstname, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">LAST NAME:</th>\n                <td>").concat(thisContactObject.lastname, "/td>\n              </tr>\n              <tr>\n                <th scope=\"row\">EMAIL:</th>\n                <td>").concat(thisContactObject.email, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">STREET ADDRESS:</th>\n                <td>").concat(thisContactObject.address, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">APT / SUITE / PO BOX:</th>\n                <td>").concat(thisContactObject.apt, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">CITY:</th>\n                <td>").concat(thisContactObject.city, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">STATE:</th>\n                <td>").concat(thisContactObject.state, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">ZIP CODE:</th>\n                <td>").concat(thisContactObject.zip, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">PRIMARY PHONE NUMBER:</th>\n                <td>").concat(thisContactObject.primary, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">SECONDARY PHONE NUMBER:</th>\n                <td>").concat(thisContactObject.secondary, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">TIME OF DAY SELECTED:</th>\n                <td>").concat(thisContactObject.time, "</td>\n              </tr>\n            </tbody>\n          </table>\n\n          <a href=\"#\" onclick=\"changePage(pgHome);\" class=\"btn btn-primary\">BACK TO HOME</a>\n\n        </div>\n      </div>\n    </div>\n  "));
  return thisContactOutput;
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50268" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/contact.js"], null)
//# sourceMappingURL=/contact.d3f2fcf9.js.map