"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Composables_Item_useSeries_js"],{

/***/ "./resources/js/Composables/Item/useSeries.js":
/*!****************************************************!*\
  !*** ./resources/js/Composables/Item/useSeries.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSeries)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function useSeries() {
  var series = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var totalSeries = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  var series_list = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var series = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
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
    delete_series_logo: false
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
    series.id = '';
    series.name = '';
    series.description = '';
    series.image_url = null;
    series.thumbnail_url = null;
    series.main_img = null;
    series.main_thumb_img = null;
    series.active = '1';
    series.tags = [];
    series.color = '';
    series.delete_series_logo = false;
  }

  function getSeries(_x) {
    return _getSeries.apply(this, arguments);
  }

  function _getSeries() {
    _getSeries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(series_id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/series/' + series_id).then(function (response) {
                if (response.data) {
                  series.id = response.data.id;
                  series.name = response.data.name;
                  series.description = response.data.description;
                  series.main_img = response.data.image_url;
                  series.main_thumb_img = response.data.thumbnail_url;
                  series.active = response.data.active.toString();
                  series.tags = response.data.tags;
                  series.color = response.data.color;
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getSeries.apply(this, arguments);
  }

  function getAllSeries() {
    return _getAllSeries.apply(this, arguments);
  }

  function _getAllSeries() {
    _getAllSeries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get('/series/getAll').then(function (response) {
                series.value = response.data.data;
                totalSeries.value = response.data.total;
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getAllSeries.apply(this, arguments);
  }

  function getSeriesList() {
    return _getSeriesList.apply(this, arguments);
  }

  function _getSeriesList() {
    _getSeriesList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.get('/getSeriesList').then(function (response) {
                series_list.value = response.data;
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getSeriesList.apply(this, arguments);
  }

  function setFormData() {
    var formData = new FormData();
    formData.append('name', series.name);
    formData.append('description', series.description);

    if (series.image_url != null) {
      formData.append('image_url', series.image_url, series.image_url.name);
    }

    if (series.color != null && series.color != '') {
      formData.append('color', series.color);
    }

    formData.append('active', series.active);

    if (series.tags != null && series.tags != '') {
      formData.append('tags', series.tags);
    }

    if (series.delete_series_logo == true) {
      formData.append('delete_series_logo', series.delete_series_logo);
    }

    return formData;
  }

  function storeSeries() {
    return _storeSeries.apply(this, arguments);
  }

  function _storeSeries() {
    _storeSeries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              errors.value = [];
              formData = setFormData();
              _context4.next = 4;
              return axios.post('/series', formData).then(function (response) {
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
    return _storeSeries.apply(this, arguments);
  }

  function updateSeries(_x2) {
    return _updateSeries.apply(this, arguments);
  }

  function _updateSeries() {
    _updateSeries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(series_id) {
      var formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              errors.value = [];
              formData = setFormData();
              formData.append('_method', 'PUT');
              _context5.next = 5;
              return axios.post('/series/' + series_id, formData).then(function (response) {
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
    return _updateSeries.apply(this, arguments);
  }

  function deleteSeries(_x3) {
    return _deleteSeries.apply(this, arguments);
  }

  function _deleteSeries() {
    _deleteSeries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(series_id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              errors.value = [];
              _context6.next = 3;
              return axios["delete"]('/series/' + series_id).then(function (response) {
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
    return _deleteSeries.apply(this, arguments);
  }

  return {
    series: series,
    series: series,
    series_list: series_list,
    totalSeries: totalSeries,
    columns: columns,
    errors: errors,
    resetFields: resetFields,
    storeSeries: storeSeries,
    updateSeries: updateSeries,
    deleteSeries: deleteSeries,
    getSeries: getSeries,
    getAllSeries: getAllSeries,
    getSeriesList: getSeriesList
  };
}

/***/ })

}]);