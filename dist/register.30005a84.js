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
})({"js/register.js":[function(require,module,exports) {
/*
; =======================================================
; Title: register.js ( familysocial website - js folder )
; Authors: Aaron Wilson
; Instructor: Kevin Imhoff
; Date: 26 July 2020
; Description: JS Register Page file.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/
// The variables to pinpoint the form.
var regForm = document.getElementById('register-form'); // Make a variable that captures an empty object and others for the values.

var rFn = regForm.getElementById('rd-fn');
var rLn = regForm.getElementById('rd-ln');
var rAd = regForm.getElementById('rd-ad');
var rAp = regForm.getElementById('rd-ap');
var rCy = regForm.getElementById('rd-cy');
var rSt = regForm.getElementById('rd-st');
var rZp = regForm.getElementById('rd-zp');
var rEm = regForm.getElementById('rd-em');
var rUn = regForm.getElementById('rd-un');
var rPw = regForm.getElementById('rd-pw');
var rAm = regForm.getElementById('rd-am');
var rJn = regForm.getElementById('rd-jn'); // This variable stores the HTML value for the REGISTER page.

var pgRegister = document.getElementById('pgContent').innerHTML("\n\n  <div class=\"container\">\n\n    <form id=\"register-form\">\n\n      <div class=\"row\">\n\n        <div class=\"col-sm\" id=\"col-one\">\n\n          <div class=\"form-group\">\n            <label for=\"fnLbl\">FIRST NAME:</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-fn\" aria-describedby=\"fnHlp\">\n            <small id=\"fnHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"lnLbl\">LAST NAME:</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-ln\" aria-describedby=\"lnHlp\">\n            <small id=\"lnHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"adLbl\">STREET ADDRESS:</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-ad\" aria-describedby=\"adHlp\">\n            <small id=\"adHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"apLbl\">APT / SUITE / PO BOX:</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-ap\" aria-describedby=\"apHlp\">\n            <small id=\"apHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n        </div>\n\n        <div class=\"col-sm\" id=\"col-two\">\n\n          <div class=\"form-group\">\n            <label for=\"cyLbl\">CITY:</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-cy\" aria-describedby=\"cyHlp\">\n            <small id=\"cyHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"stLbl\">STATE:</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-st\" aria-describedby=\"stHlp\">\n            <small id=\"stHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"zpLbl\">ZIP CODE:</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-zp\" aria-describedby=\"zpHlp\">\n            <small id=\"zpHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"emLbl\">EMAIL:</label>\n            <input type=\"email\" class=\"form-control\" id=\"rd-em\" aria-describedby=\"emHlp\">\n            <small id=\"emHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n        </div>\n\n        <div class=\"col-sm\" id=\"col-three\">\n\n          <div class=\"form-group\">\n            <label for=\"unLbl\">USERNAME:</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-un\" aria-describedby=\"pwHlp\">\n            <small id=\"unHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"pwLbl\">PASSWORD:</label>\n            <input type=\"password\" class=\"form-control\" id=\"rd-pw\" aria-describedby=\"pwHlp\">\n            <small id=\"pwHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"amLbl\">ARE YOU A FAMILY ADMIN (Answer, yes or no):</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-am\" aria-describedby=\"amHlp\">\n            <small id=\"amHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"jnLbl\">TRACK NEWLY JOINED FAMILY MEMBERS (Answer, yes or no):</label>\n            <input type=\"text\" class=\"form-control\" id=\"rd-jn\" aria-describedby=\"jnHlp\">\n            <small id=\"jnHlp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n\n          <div class=\"form-group\" id=\"connect-buttons\">\n\n            <button type=\"button\" class=\"btn btn-raised btn-info\" data-toggle=\"modal\" data-target=\"#undoModal\">undo</button>\n            <button type=\"button\" onclick=\"setRegisterData(rFn, rLn, rAd, rAp, rCy, rSt, rZp, rEm, rUn, rPw, rAm, rJn);\" class=\"btn btn-raised btn-info\" id=\"submit-rf\">submit</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <!-- Undo Form Modal ---------------------------------------------------------------------------------------------------------------------->\n\n  <div class=\"modal fade\" id=\"undoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"undoModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"undoModalLabel\">UNDO THIS ENTIRE FORM?</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">CANCEL</button>\n          <button type=\"button\" onclick=\"undoForm(regData, pgRegister);\" class=\"btn btn-primary\">UNDO FORM</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Separation between mobile and desktop ---------------------------------------------------->\n\n  <div id=\"reg-one-mobile\">\n\n    <header id=\"mobile-header\">\n\n      <nav class=\"navbar navbar-expand-md\">\n\n        <!-- Brand -->\n        <a id=\"logo\" onclick=\"changePage(pgHome);\" class=\"navbar-brand\" href=\"\"></a>\n\n        <!-- Toggler/collapsing Button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n        <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n\n          <!-- Standard White navigation -->\n          <ul class=\"nav nav-tabs\">\n\n            <li class=\"nav-item\">\n              <a id=\"logo\" onclick=\"changePage(pgHome);\" class=\"nav-link\" href=\"#\" ></a>\n            </li>\n            <li class=\"nav-item\">\n              <a id=\"home\" onclick=\"changePage(pgHome);\" class=\"nav-link active\" href=\"#\">HOME</a>\n            </li>\n            <li class=\"nav-item\">\n              <a id=\"about\" onclick=\"changePage(pgAbout);\" class=\"nav-link\" href=\"#\">ABOUT</a>\n            </li>\n            <li class=\"nav-item\">\n              <a id=\"app\" onclick=\"changePage(pgApp);\" class=\"nav-link\" href=\"#\">THE APP</a>\n            </li>\n            <li class=\"nav-item\">\n              <a id=\"contact\" onclick=\"changePage(pgContact);\" class=\"nav-link\" href=\"#\" >CONTACT</a>\n            </li>\n            <li class=\"nav-item\">\n              <button id=\"register\" type=\"button\" onclick=\"changePage(pgRegister);\" class=\"btn btn-raised btn-lg btn-info\">REGISTER</button>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </header>\n\n    <form id=\"conForm\" action=\"\">\n\n      <h1>Register Information:</h1>\n\n      <!-- One \"tab\" for each step in the form: -->\n      <div class=\"tab\">Name & Address:\n        <p><input placeholder=\"First name...\" id=\"rm-fn\" oninput=\"this.className = ''\"></p>\n        <p><input placeholder=\"Last name...\" id=\"rm-ln\" oninput=\"this.className = ''\"></p>\n        <p><input placeholder=\"Street Address...\" id=\"rm-ad\" oninput=\"this.className = ''\"></p>\n        <p><input placeholder=\"Apt  Suite  PO Box...\" id=\"rm-ap\" oninput=\"this.className = ''\"></p>\n      </div>\n\n      <div class=\"tab\">Address Info (continued):\n        <p><input type=\"text\" placeholder=\"City...\" id=\"rm-cy\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"State...\" id=\"rm-st\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"Zip Code...\" id=\"rm-zp\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"email\" placeholder=\"Email...\" id=\"rm-em\" oninput=\"this.className = ''\"></p>\n      </div>\n\n      <div class=\"tab\">Additional Info:\n        <p><input type=\"text\" placeholder=\"Username...\" id=\"rm-un\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"password\" placeholder=\"Password...\" id=\"rm-pw\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"Family Admin (yes or no)...\" id=\"rm-am\" oninput=\"this.className = ''\"></p>\n        <p><input type=\"text\" placeholder=\"Notify if Family joins (yes or no)...\" id=\"rm-jn\" oninput=\"this.className = ''\"></p>\n      </div>\n\n      <div style=\"overflow:auto;\">\n        <div style=\"float:right;\">\n          <button type=\"button\" id=\"prevBtn\" onclick=\"nextPrev(-1)\">Previous</button>\n          <button type=\"button\" id=\"nextBtn\" onclick=\"nextPrev(1)\">Next</button>\n        </div>\n      </div>\n\n      <!-- Circles which indicates the steps of the form: -->\n      <div style=\"text-align:center;margin-top:40px;\">\n          <span class=\"step\"></span>\n          <span class=\"step\"></span>\n          <span class=\"step\"></span>\n      </div>\n    </form>\n\n  </div>\n\n");

var setRegisterData = function setRegisterData(firstname, lastname, address, apt, city, state, zip, email, username, password, admin, join) {
  // Object
  var regObj = {
    firstname: firstname.value,
    lastname: lastname.value,
    address: address.value,
    apt: apt.value,
    city: city.value,
    state: state.value,
    zip: zip.value,
    email: email.value,
    username: username.value,
    password: password.value,
    admin: admin.value,
    join: join.value
  };
  var registerOutput = document.getElementById('pgContent').innerHTML("\n    <div class=\"container\">\n\n      <div class=\"card\">\n\n        <div class=\"card-header\">\n          ".concat(regObj.firstname, "'s CONTACT OUTPUT DATA\n        </div>\n\n        <div class=\"card-body\">\n\n          <h5 class=\"card-title\">REMINDER: This is a simulated database store</h5>\n\n          <table class=\"table\">\n\n            <thead class=\"thead-dark\">\n\n              <tr>\n                <th scope=\"col\">FIELDS</th>\n                <th scope=\"col\">YOUR ENTRY</th>\n              </tr>\n            </thead>\n\n            <tbody>\n\n              <tr>\n                <th scope=\"row\">FIRST NAME:</th>\n                <td>").concat(regObj.firstname, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">LAST NAME:</th>\n                <td>").concat(regObj.lastname, "/td>\n              </tr>\n              <tr>\n                <th scope=\"row\">STREET ADDRESS:</th>\n                <td>").concat(regObj.address, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">APT / SUITE / PO BOX:</th>\n                <td>").concat(regObj.apt, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">CITY:</th>\n                <td>").concat(regObj.city, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">STATE:</th>\n                <td>").concat(regObj.state, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">ZIP CODE:</th>\n                <td>").concat(regObj.zip, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">EMAIL:</th>\n                <td>").concat(regObj.email, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">PASSWORD:</th>\n                <td>").concat(regObj.password, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">IS ADMIN:</th>\n                <td>").concat(regObj.admin, "</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">WILL TRACK JOINED MEMBERS:</th>\n                <td>").concat(regObj.join, "</td>\n              </tr>\n            </tbody>\n          </table>\n\n          <a href=\"#\" onclick=\"changePage(pgHome);\" class=\"btn btn-primary\">BACK TO HOME</a>\n        </div>\n      </div>\n    </div>\n  ")); // Return a output webpage.

  return registerOutput;
};

var clearForm = function clearForm() {
  var undo = document.querySelector('button[type=button]');
  var conInputs = document.querySelectorAll('input');
  undo.addEventListener('click', function () {
    conInputs.forEach(function (input) {
      return input.value = '';
    });
  });
};

var undoForm = function undoForm(array, page) {
  if (!array.length) {
    var undoModal = document.getElementsByTagName('body').innerHTML("\n      <p id=\"no-data\"> It appears that there is no data to undo? </p>\n    ");
  }

  array = [];
  return page;
};

var checkValue = function checkValue(arrStrValue) {
  if (arrStrValue == '') {
    arrStrValue = 'Enter input data here';
    return arrStrValue;
  }

  return arrStrValue;
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/register.js"], null)
//# sourceMappingURL=/register.30005a84.js.map