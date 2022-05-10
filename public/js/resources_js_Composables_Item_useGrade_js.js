"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Composables_Item_useGrade_js"],{

/***/ "./resources/js/Composables/Item/useGrade.js":
/*!***************************************************!*\
  !*** ./resources/js/Composables/Item/useGrade.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useGrade)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function useGrade() {
  var grades = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var totalGrades = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  var grade_list = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var grade = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
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
    delete_grade_logo: false
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
    grade.id = '';
    grade.name = '';
    grade.description = '';
    grade.image_url = null;
    grade.thumbnail_url = null;
    grade.main_img = null;
    grade.main_thumb_img = null;
    grade.active = '1';
    grade.tags = [];
    grade.color = '';
    grade.delete_grade_logo = false;
  }

  function getGrade(_x) {
    return _getGrade.apply(this, arguments);
  }

  function _getGrade() {
    _getGrade = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(grade_id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/grades/' + grade_id).then(function (response) {
                if (response.data) {
                  grade.id = response.data.id;
                  grade.name = response.data.name;
                  grade.description = response.data.description;
                  grade.main_img = response.data.image_url;
                  grade.main_thumb_img = response.data.thumbnail_url;
                  grade.active = response.data.active.toString();
                  grade.tags = response.data.tags;
                  grade.color = response.data.color;
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getGrade.apply(this, arguments);
  }

  function getAllGrades() {
    return _getAllGrades.apply(this, arguments);
  }

  function _getAllGrades() {
    _getAllGrades = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get('/grades/getAll').then(function (response) {
                grades.value = response.data.data;
                totalGrades.value = response.data.total;
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getAllGrades.apply(this, arguments);
  }

  function getGradeList() {
    return _getGradeList.apply(this, arguments);
  }

  function _getGradeList() {
    _getGradeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.get('/getGradeList').then(function (response) {
                grade_list.value = response.data;
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getGradeList.apply(this, arguments);
  }

  function setFormData() {
    var formData = new FormData();
    formData.append('name', grade.name);
    formData.append('description', grade.description);

    if (grade.image_url != null) {
      formData.append('image_url', grade.image_url, grade.image_url.name);
    }

    if (grade.color != null && grade.color != '') {
      formData.append('color', grade.color);
    }

    formData.append('active', grade.active);

    if (grade.tags != null && grade.tags != '') {
      formData.append('tags', grade.tags);
    }

    if (grade.delete_grade_logo == true) {
      formData.append('delete_grade_logo', grade.delete_grade_logo);
    }

    return formData;
  }

  function storeGrade() {
    return _storeGrade.apply(this, arguments);
  }

  function _storeGrade() {
    _storeGrade = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              errors.value = [];
              formData = setFormData();
              _context4.next = 4;
              return axios.post('/grades', formData).then(function (response) {
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
    return _storeGrade.apply(this, arguments);
  }

  function updateGrade(_x2) {
    return _updateGrade.apply(this, arguments);
  }

  function _updateGrade() {
    _updateGrade = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(grade_id) {
      var formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              errors.value = [];
              formData = setFormData();
              formData.append('_method', 'PUT');
              _context5.next = 5;
              return axios.post('/grades/' + grade_id, formData).then(function (response) {
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
    return _updateGrade.apply(this, arguments);
  }

  function deleteGrade(_x3) {
    return _deleteGrade.apply(this, arguments);
  }

  function _deleteGrade() {
    _deleteGrade = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(grade_id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              errors.value = [];
              _context6.next = 3;
              return axios["delete"]('/grades/' + grade_id).then(function (response) {
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
    return _deleteGrade.apply(this, arguments);
  }

  return {
    grade: grade,
    grades: grades,
    grade_list: grade_list,
    totalGrades: totalGrades,
    columns: columns,
    errors: errors,
    resetFields: resetFields,
    storeGrade: storeGrade,
    updateGrade: updateGrade,
    deleteGrade: deleteGrade,
    getGrade: getGrade,
    getAllGrades: getAllGrades,
    getGradeList: getGradeList
  };
}

/***/ })

}]);