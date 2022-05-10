"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Composables_Item_useLine_js"],{

/***/ "./resources/js/Composables/Item/useLine.js":
/*!**************************************************!*\
  !*** ./resources/js/Composables/Item/useLine.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLine)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function useLine() {
  var lines = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var totalLines = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  var line_list = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var line = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
    id: '',
    name: '',
    image_url: null,
    image_url_img: null,
    thumbnail_url: null,
    thumbnail_url_img: null,
    description: '',
    tags: [],
    color: '',
    active: '1',
    delete_line_logo: false
  });
  var columns = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([{
    id: 0,
    field: 'name',
    label: 'Name',
    sortable: true
  }, {
    id: 1,
    field: 'id',
    label: 'Action',
    sortable: false
  }]);

  function resetFields() {
    line.id = '';
    line.name = '';
    line.description = '';
    line.image_url = null;
    line.thumbnail_url = null;
    line.main_img = null;
    line.main_thumb_img = null;
    line.active = '1';
    line.tags = [];
    line.color = '';
    line.delete_line_logo = false;
  }

  function getLine(_x) {
    return _getLine.apply(this, arguments);
  }

  function _getLine() {
    _getLine = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(line_id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/lines/' + line_id).then(function (response) {
                if (response.data) {
                  line.id = response.data.id;
                  line.name = response.data.name;
                  line.description = response.data.description;
                  line.main_img = response.data.image_url;
                  line.main_thumb_img = response.data.thumbnail_url;
                  line.active = response.data.active.toString();
                  line.tags = response.data.tags;
                  line.color = response.data.color;
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getLine.apply(this, arguments);
  }

  function getAllLines() {
    return _getAllLines.apply(this, arguments);
  }

  function _getAllLines() {
    _getAllLines = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get('/lines/getAll').then(function (response) {
                lines.value = response.data.data;
                totalLines.value = response.data.total;
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getAllLines.apply(this, arguments);
  }

  function getLineList() {
    return _getLineList.apply(this, arguments);
  }

  function _getLineList() {
    _getLineList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.get('/getLineList').then(function (response) {
                line_list.value = response.data;
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getLineList.apply(this, arguments);
  }

  function setFormData() {
    var formData = new FormData();
    formData.append('name', line.name);
    formData.append('description', line.description);

    if (line.image_url != null) {
      formData.append('image_url', line.image_url, line.image_url.name);
    }

    if (line.color != null && line.color != '') {
      formData.append('color', line.color);
    }

    formData.append('active', line.active);

    if (line.tags != null && line.tags != '') {
      formData.append('tags', line.tags);
    }

    if (line.delete_line_logo == true) {
      formData.append('delete_line_logo', line.delete_line_logo);
    }

    return formData;
  }

  function storeLine() {
    return _storeLine.apply(this, arguments);
  }

  function _storeLine() {
    _storeLine = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              errors.value = [];
              formData = setFormData();
              _context4.next = 4;
              return axios.post('/lines', formData).then(function (response) {
                resetFields();
              })["catch"](function (error) {
                if (error.response && error.response.status == 422) {
                  errors.value = error.response.data.errors;
                }
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _storeLine.apply(this, arguments);
  }

  function updateLine(_x2) {
    return _updateLine.apply(this, arguments);
  }

  function _updateLine() {
    _updateLine = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(line_id) {
      var formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              errors.value = [];
              formData = setFormData();
              formData.append('_method', 'PUT');
              _context5.next = 5;
              return axios.post('/lines/' + line_id, formData).then(function (response) {
                resetFields();
              })["catch"](function (error) {
                if (error.response && error.response.status == 422) {
                  errors.value = error.response.data.errors;
                }
              });

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _updateLine.apply(this, arguments);
  }

  function deleteLine(_x3) {
    return _deleteLine.apply(this, arguments);
  }

  function _deleteLine() {
    _deleteLine = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(line_id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              errors.value = [];
              _context6.next = 3;
              return axios["delete"]('/lines/' + line_id).then(function (response) {
                if (response.data.error != null) {
                  errors.value = response.data.error;
                }
              })["catch"](function (error) {
                console.log('test');
                errors.value = error;
              });

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _deleteLine.apply(this, arguments);
  }

  return {
    line: line,
    lines: lines,
    line_list: line_list,
    totalLines: totalLines,
    columns: columns,
    errors: errors,
    resetFields: resetFields,
    storeLine: storeLine,
    updateLine: updateLine,
    deleteLine: deleteLine,
    getLine: getLine,
    getAllLines: getAllLines,
    getLineList: getLineList
  };
}

/***/ })

}]);