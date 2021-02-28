/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/manage-user/user-list/user_list.ts":
/*!*********************************************************!*\
  !*** ./resources/js/manage-user/user-list/user_list.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var UserList =
/** @class */
function () {
  function UserList(list_user) {
    this.listUser = list_user;
  }

  UserList.prototype.renderUserList = function () {
    var _this = this;

    var templateUser = '';
    this.listUser.forEach(function (user) {
      templateUser += "<tr class=\"js-user-" + user.id + "\">\n                    <td><span class=\"user-id\">" + user.id + "</span></td>\n                    <td><a href=\"#\"><img src=\"/examples/images/avatar/2.jpg\" class=\"avatar\" alt=\"Avatar\"> <span class=\"user-name\">" + user.name + "</span></a></td>\n                    <td><span class=\"date_created\">" + user.date_created + "</span></td>\n                    <td>" + user.role + "</td>\n                    <td><span class=\"status text-success\">&bull;</span> " + user.status + "</td>\n                    <td>\n                        <a href=\"#\" class=\"settings\"  data-value=\"" + user.id + "\" title=\"Settings\" data-toggle=\"tooltip\"><i class=\"material-icons\">&#xE8B8;</i></a>\n                        <a href=\"#\" class=\"delete\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"material-icons\">&#xE5C9;</i></a>\n                    </td>\n                </tr>";
    });
    var el = document.querySelector('.user-list');

    if (el) {
      el.innerHTML = templateUser;
      var settings = document.querySelectorAll('.settings');
      settings.forEach(function (setting) {
        setting.addEventListener('click', function () {
          var data = setting.getAttribute('data-value');

          if (data) {
            _this.editHandler(data);
          }
        });
      });
    }
  };

  UserList.prototype.editHandler = function (id) {
    var userClass = '.js-user-' + id;
    var userEl = document.querySelector(userClass);
    var userNameElement = userEl.querySelector('.user-name');
    var newInputElement = document.createTextNode('input');
    userNameElement.replaceChild(newInputElement, userNameElement);
  };

  UserList.prototype.render = function () {
    this.renderUserList();
  };

  return UserList;
}();

exports.default = UserList;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./resources/js/manage-user/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_list_user_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list/user_list */ "./resources/js/manage-user/user-list/user_list.ts");

var LIST_USER = [{
  id: 1,
  name: 'Michael Holz',
  date_created: '04/10/2013',
  role: 'Admin',
  status: 'active'
}, {
  id: 2,
  name: 'Michael Holz',
  date_created: '04/10/2013',
  role: 'Admin',
  status: 'Suspended'
}, {
  id: 3,
  name: 'Michael Holz',
  date_created: '04/10/2013',
  role: 'Admin',
  status: 'active'
}, {
  id: 4,
  name: 'Michael Holz',
  date_created: '04/10/2013',
  role: 'Admin',
  status: 'Inactive'
}];
var userList = new _user_list_user_list__WEBPACK_IMPORTED_MODULE_0__.default(LIST_USER);
userList.render();
})();

/******/ })()
;