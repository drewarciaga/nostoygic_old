"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Carousel_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Carousel.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Carousel.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      carousel: 0,
      animated: 'slide',
      drag: true,
      autoPlay: true,
      pauseHover: true,
      pauseInfo: false,
      repeat: true,
      interval: 3000,
      carousels: [{
        text: 'Slide 1',
        color: '#445e00',
        img: 'url("/images/slider/1.jpg")'
      }, {
        text: 'Slide 2',
        color: '#006724',
        img: 'url("/images/slider/2.jpg")'
      }, {
        text: 'Slide 3',
        color: '#b60000',
        img: 'url("/images/slider/3.jpg")'
      }, {
        text: 'Slide 4',
        color: '#f4c300',
        img: 'url("/images/slider/4.jpg")'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Carousel.vue?vue&type=template&id=3a809eab":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Carousel.vue?vue&type=template&id=3a809eab ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "carouselExampleCaptions",
  "class": "carousel slide relative w-full",
  "data-bs-ride": "carousel"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4\"><button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button><button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button><button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></button></div><div class=\"carousel-inner relative w-full overflow-hidden\"><div class=\"carousel-item active relative float-left w-full\"><img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg\" class=\"block w-full\" alt=\"...\"><div class=\"carousel-caption hidden md:block absolute text-center\"><h5 class=\"text-xl\">First slide label</h5><p>Some representative placeholder content for the first slide.</p></div></div><div class=\"carousel-item relative float-left w-full\"><img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg\" class=\"block w-full\" alt=\"...\"><div class=\"carousel-caption hidden md:block absolute text-center\"><h5 class=\"text-xl\">Second slide label</h5><p>Some representative placeholder content for the second slide.</p></div></div><div class=\"carousel-item relative float-left w-full\"><img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg\" class=\"block w-full\" alt=\"...\"><div class=\"carousel-caption hidden md:block absolute text-center\"><h5 class=\"text-xl\">Third slide label</h5><p>Some representative placeholder content for the third slide.</p></div></div></div><button class=\"carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide=\"prev\"><span class=\"carousel-control-prev-icon inline-block bg-no-repeat\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Previous</span></button><button class=\"carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide=\"next\"><span class=\"carousel-control-next-icon inline-block bg-no-repeat\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Next</span></button>", 4);

var _hoisted_6 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_6);
}

/***/ }),

/***/ "./resources/js/Components/Carousel.vue":
/*!**********************************************!*\
  !*** ./resources/js/Components/Carousel.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Carousel_vue_vue_type_template_id_3a809eab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=3a809eab */ "./resources/js/Components/Carousel.vue?vue&type=template&id=3a809eab");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js */ "./resources/js/Components/Carousel.vue?vue&type=script&lang=js");
/* harmony import */ var C_wamp64_www_nostoygic_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_nostoygic_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Carousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Carousel_vue_vue_type_template_id_3a809eab__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Carousel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Carousel.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/Carousel.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carousel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Carousel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Carousel.vue?vue&type=template&id=3a809eab":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/Carousel.vue?vue&type=template&id=3a809eab ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carousel_vue_vue_type_template_id_3a809eab__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carousel_vue_vue_type_template_id_3a809eab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carousel.vue?vue&type=template&id=3a809eab */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Carousel.vue?vue&type=template&id=3a809eab");


/***/ })

}]);