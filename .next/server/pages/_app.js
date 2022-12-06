"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Components/auth/AuthUserProvider.tsx":
/*!**********************************************!*\
  !*** ./Components/auth/AuthUserProvider.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/firebase */ \"./util/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_util_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst AuthUserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AuthUserProvider = ({ children , ...auth })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthUserContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/thuypham/Data/cornell/22FA/INFO 1998/cu-music/Components/auth/AuthUserProvider.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_firebase__WEBPACK_IMPORTED_MODULE_2__.createComponentWithAuth)(AuthUserProvider));\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthUserContext);\n    if (!context) throw new Error(\"AuthUserContext has no value\");\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2F1dGgvQXV0aFVzZXJQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3FEO0FBRVE7QUFNN0QsTUFBTUcsZ0NBQWtCSCxvREFBYUEsQ0FBdUJJO0FBRTVELE1BQU1DLG1CQUE4QyxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFHQyxNQUFNLGlCQUN4RSw4REFBQ0osZ0JBQWdCSyxRQUFRO1FBQUNDLE9BQU9GO2tCQUFPRDs7Ozs7O0FBRzFDLGlFQUFlSix1RUFBdUJBLENBQUNHLGlCQUFpQkEsRUFBQTtBQUVqRCxNQUFNSyxVQUFVLElBQU07SUFDM0IsTUFBTUMsVUFBVVYsaURBQVVBLENBQUNFO0lBQzNCLElBQUksQ0FBQ1EsU0FBUyxNQUFNLElBQUlDLE1BQU0sZ0NBQStCO0lBQzdELE9BQU9EO0FBQ1QsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RpbmcvLi9Db21wb25lbnRzL2F1dGgvQXV0aFVzZXJQcm92aWRlci50c3g/MjhmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgRkMgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgV3JhcHBlZENvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXdpdGgtZmlyZWJhc2UtYXV0aFwiXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnRXaXRoQXV0aCB9IGZyb20gXCIuLi8uLi91dGlsL2ZpcmViYXNlXCJcblxudHlwZSBBdXRoRGF0YSA9IE9taXQ8V3JhcHBlZENvbXBvbmVudFByb3BzLCBcInVzZXJcIj4gJiB7XG4gIHVzZXI/OiBVc2VyIHwgbnVsbFxufVxuXG5jb25zdCBBdXRoVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhEYXRhIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG5cbmNvbnN0IEF1dGhVc2VyUHJvdmlkZXI6IEZDPFdyYXBwZWRDb21wb25lbnRQcm9wcz4gPSAoeyBjaGlsZHJlbiwgLi4uYXV0aCB9KSA9PiAoXG4gIDxBdXRoVXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L0F1dGhVc2VyQ29udGV4dC5Qcm92aWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50V2l0aEF1dGgoQXV0aFVzZXJQcm92aWRlcilcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhVc2VyQ29udGV4dClcbiAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRoVXNlckNvbnRleHQgaGFzIG5vIHZhbHVlXCIpXG4gIHJldHVybiBjb250ZXh0XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29tcG9uZW50V2l0aEF1dGgiLCJBdXRoVXNlckNvbnRleHQiLCJ1bmRlZmluZWQiLCJBdXRoVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/auth/AuthUserProvider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_auth_AuthUserProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/auth/AuthUserProvider */ \"./Components/auth/AuthUserProvider.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_auth_AuthUserProvider__WEBPACK_IMPORTED_MODULE_2__]);\n_Components_auth_AuthUserProvider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_auth_AuthUserProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/thuypham/Data/cornell/22FA/INFO 1998/cu-music/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/thuypham/Data/cornell/22FA/INFO 1998/cu-music/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/thuypham/Data/cornell/22FA/INFO 1998/cu-music/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUVpQjtBQUVuRSxTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDL0MscUJBQ0UsOERBQUNKLDREQUFjQTtrQkFDYiw0RUFBQ0MseUVBQWdCQTtzQkFDZiw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGluZy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEF1dGhVc2VyUHJvdmlkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9hdXRoL0F1dGhVc2VyUHJvdmlkZXInO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgIDxBdXRoVXNlclByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0F1dGhVc2VyUHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsIkF1dGhVc2VyUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./util/firebase.ts":
/*!**************************!*\
  !*** ./util/firebase.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"createComponentWithAuth\": () => (/* binding */ createComponentWithAuth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"signInWithGoogle\": () => (/* binding */ signInWithGoogle),\n/* harmony export */   \"signOut\": () => (/* binding */ signOutFirebase)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var react_with_firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-with-firebase-auth */ \"react-with-firebase-auth\");\n/* harmony import */ var react_with_firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_with_firebase_auth__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// TODO: Replace with your own Firebase config\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDhUwVyZ9GryliVm2Enht9nMknh_8T_zEA\",\n    authDomain: \"cu-music.firebaseapp.com\",\n    projectId: \"cu-music\",\n    storageBucket: \"cu-music.appspot.com\",\n    messagingSenderId: \"1076834371330\",\n    appId: \"1:1076834371330:web:bd15870a489834e157e41b\",\n    measurementId: \"G-Y4GMEMMPTG\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)() : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\nconst providers = {\n    googleProvider: new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider()\n};\nconst createComponentWithAuth = react_with_firebase_auth__WEBPACK_IMPORTED_MODULE_3___default()({\n    providers,\n    firebaseAppAuth: auth\n});\nconst signInWithGoogle = ()=>{\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(auth, providers.googleProvider);\n};\nconst signOutFirebase = ()=>{\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2ZpcmViYXNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDWjtBQU0zQjtBQUNpQztBQUV2RCw4Q0FBOEM7QUFDOUMsTUFBTVMsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRUEsTUFBTUMsTUFBTWhCLHFEQUFPQSxHQUFHaUIsTUFBTSxHQUFHaEIsb0RBQU1BLEtBQUtGLDJEQUFhQSxDQUFDUyxlQUFlO0FBRXZFLE1BQU1VLEtBQUtoQixnRUFBWUEsQ0FBQ2M7QUFDeEIsTUFBTUcsT0FBT2hCLHNEQUFPQSxDQUFDYTtBQUVyQixNQUFNSSxZQUFZO0lBQ2hCQyxnQkFBZ0IsSUFBSWpCLDZEQUFrQkE7QUFDeEM7QUFFQSxNQUFNa0IsMEJBQTBCZiwrREFBZ0JBLENBQUM7SUFDL0NhO0lBQ0FHLGlCQUFpQko7QUFDbkI7QUFFQSxNQUFNSyxtQkFBbUIsSUFBTTtJQUM3Qm5CLDhEQUFlQSxDQUFDYyxNQUFNQyxVQUFVQyxjQUFjO0FBQ2hEO0FBRUEsTUFBTUksa0JBQWtCLElBQU07SUFDNUJuQixzREFBT0EsQ0FBQ2E7QUFDVjtBQVFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGluZy8uL3V0aWwvZmlyZWJhc2UudHM/NWM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHBzLCBnZXRBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxuaW1wb3J0IHtcbiAgZ2V0QXV0aCxcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxuICBzaWduSW5XaXRoUG9wdXAsXG4gIHNpZ25PdXQsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcbmltcG9ydCB3aXRoRmlyZWJhc2VBdXRoIGZyb20gXCJyZWFjdC13aXRoLWZpcmViYXNlLWF1dGhcIlxuXG4vLyBUT0RPOiBSZXBsYWNlIHdpdGggeW91ciBvd24gRmlyZWJhc2UgY29uZmlnXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeURoVXdWeVo5R3J5bGlWbTJFbmh0OW5Na25oXzhUX3pFQVwiLFxuICBhdXRoRG9tYWluOiBcImN1LW11c2ljLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiY3UtbXVzaWNcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJjdS1tdXNpYy5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDc2ODM0MzcxMzMwXCIsXG4gIGFwcElkOiBcIjE6MTA3NjgzNDM3MTMzMDp3ZWI6YmQxNTg3MGE0ODk4MzRlMTU3ZTQxYlwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctWTRHTUVNTVBUR1wiXG59O1xuXG5jb25zdCBhcHAgPSBnZXRBcHBzKCkubGVuZ3RoID8gZ2V0QXBwKCkgOiBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxuXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG5cbmNvbnN0IHByb3ZpZGVycyA9IHtcbiAgZ29vZ2xlUHJvdmlkZXI6IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKSxcbn1cblxuY29uc3QgY3JlYXRlQ29tcG9uZW50V2l0aEF1dGggPSB3aXRoRmlyZWJhc2VBdXRoKHtcbiAgcHJvdmlkZXJzLFxuICBmaXJlYmFzZUFwcEF1dGg6IGF1dGgsXG59KVxuXG5jb25zdCBzaWduSW5XaXRoR29vZ2xlID0gKCkgPT4ge1xuICBzaWduSW5XaXRoUG9wdXAoYXV0aCwgcHJvdmlkZXJzLmdvb2dsZVByb3ZpZGVyKVxufVxuXG5jb25zdCBzaWduT3V0RmlyZWJhc2UgPSAoKSA9PiB7XG4gIHNpZ25PdXQoYXV0aClcbn1cblxuZXhwb3J0IHtcbiAgZGIsXG4gIGF1dGgsXG4gIGNyZWF0ZUNvbXBvbmVudFdpdGhBdXRoLFxuICBzaWduSW5XaXRoR29vZ2xlLFxuICBzaWduT3V0RmlyZWJhc2UgYXMgc2lnbk91dCxcbn0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcHMiLCJnZXRBcHAiLCJnZXRGaXJlc3RvcmUiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbk91dCIsIndpdGhGaXJlYmFzZUF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJsZW5ndGgiLCJkYiIsImF1dGgiLCJwcm92aWRlcnMiLCJnb29nbGVQcm92aWRlciIsImNyZWF0ZUNvbXBvbmVudFdpdGhBdXRoIiwiZmlyZWJhc2VBcHBBdXRoIiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25PdXRGaXJlYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/firebase.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-with-firebase-auth":
/*!*******************************************!*\
  !*** external "react-with-firebase-auth" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("react-with-firebase-auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();