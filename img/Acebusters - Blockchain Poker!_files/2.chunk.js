webpackJsonp([2],{

/***/ "./app/components/Container/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables__ = __webpack_require__("./app/variables.js");
var _templateObject = _taggedTemplateLiteral(['\n  margin: 3em auto;\n  padding-right: 2em;\n  padding-left: 2em;\n  padding-top: 2em;\n  border-radius: 0.5em;\n  min-height: 50em;\n  background: ', ';\n  @media (min-width: 768px) {\n    width: 750px;\n  }\n'], ['\n  margin: 3em auto;\n  padding-right: 2em;\n  padding-left: 2em;\n  padding-top: 2em;\n  border-radius: 0.5em;\n  min-height: 50em;\n  background: ', ';\n  @media (min-width: 768px) {\n    width: 750px;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by helge on 26.02.17.
 */




var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject, __WEBPACK_IMPORTED_MODULE_1__variables__["a" /* white */]);

/* harmony default export */ exports["a"] = Container;

/***/ },

/***/ "./app/components/H2/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  font-size: 1.5em;\n'], ['\n  text-align: center;\n  font-size: 1.5em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var H2 = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].h2(_templateObject);

/* harmony default export */ exports["a"] = H2;

/***/ },

/***/ "./app/components/List/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js__ = __webpack_require__("./node_modules/redbox-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js__ = __webpack_require__("./node_modules/react-transform-catch-errors/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js__ = __webpack_require__("./node_modules/react-transform-hmr/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WithLoading__ = __webpack_require__("./app/components/WithLoading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ListItem__ = __webpack_require__("./app/components/ListItem/index.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return TableStriped; });





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  border-collapse: collapse;\n  background-color: transparent;\n'], ['\n  border-collapse: collapse;\n  background-color: transparent;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  & th {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #eceeef;\n  }\n  & thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #eceeef;\n  }\n  & tbody + tbody {\n    border-top: 2px solid #eceeef;\n  }\n  & & {\n    background-color: #fff;\n  }\n'], ['\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  & th {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #eceeef;\n  }\n  & thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #eceeef;\n  }\n  & tbody + tbody {\n    border-top: 2px solid #eceeef;\n  }\n  & & {\n    background-color: #fff;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  -webkit-user-select: none;\n  cursor: pointer;\n  color: inherit;\n\n  span {\n    text-decoration: underline;\n  }\n'], ['\n  -webkit-user-select: none;\n  cursor: pointer;\n  color: inherit;\n\n  span {\n    text-decoration: underline;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  & tbody tr:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n'], ['\n  & tbody tr:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _components = {
  List: {
    displayName: 'List'
  }
};

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/components/List/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/components/List/index.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2(_UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}






var Table = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].table(_templateObject);

var TableStyled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_components__["default"])(Table)(_templateObject2);

var SortButton = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].a(_templateObject3);

var TableStriped = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_components__["default"])(TableStyled)(_templateObject4);

var List = _wrapComponent('List')(function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.state = {
      sortBy: null, // column index
      sortDir: -1 };
    return _this;
  }

  _createClass(List, [{
    key: 'sortedItems',
    value: function sortedItems() {
      var items = this.props.items;
      var _state = this.state,
          sortBy = _state.sortBy,
          sortDir = _state.sortDir;


      if (items && sortBy) {
        return items.sort(function (a, b) {
          return (a[sortBy] - b[sortBy]) * sortDir;
        });
      }

      return items;
    }
  }, {
    key: 'handleHeaderClick',
    value: function handleHeaderClick(i) {
      this.setState(function (_ref) {
        var sortBy = _ref.sortBy,
            sortDir = _ref.sortDir;
        return {
          sortBy: i,
          sortDir: sortBy === i ? sortDir * -1 : sortDir
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          headers = _props.headers,
          _props$sortableColumn = _props.sortableColumns,
          sortableColumns = _props$sortableColumn === undefined ? [] : _props$sortableColumn,
          _props$noDataMsg = _props.noDataMsg,
          noDataMsg = _props$noDataMsg === undefined ? 'No Data' : _props$noDataMsg;
      var _state2 = this.state,
          sortBy = _state2.sortBy,
          sortDir = _state2.sortDir;

      var items = this.sortedItems();

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          TableStriped,
          null,
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'thead',
            null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'tr',
              null,
              headers && headers.map(function (header, i) {
                var sortable = sortableColumns.indexOf(i) !== -1;
                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'th',
                  { key: i },
                  !sortable && header,
                  sortable && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    SortButton,
                    { onClick: function onClick() {
                        return _this2.handleHeaderClick(i);
                      } },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'span',
                      null,
                      header
                    ),
                    sortBy === i && sortDir === 1 && ' ▲',
                    sortBy === i && sortDir === -1 && ' ▼'
                  )
                );
              }),
              !headers && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('th', null)
            )
          ),
          items && items.length > 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'tbody',
            null,
            items.map(function (item) {
              return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ListItem__["a" /* default */], {
                key: item,
                values: item
              });
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__WithLoading__["a" /* default */],
          {
            isLoading: !items,
            styles: {}
          },
          items && items.length === 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { style: { textAlign: 'center' } },
            noDataMsg
          )
        )
      );
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

List.propTypes = {
  items: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].node),
  headers: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].node),
  sortableColumns: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].number),
  noDataMsg: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].string
};

/* harmony default export */ exports["a"] = List;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ "./app/components/ListItem/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
var _templateObject = _taggedTemplateLiteral(['\n  &:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n'], ['\n  &:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: left;\n  color: #464a4c;\n'], ['\n  text-align: left;\n  color: #464a4c;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 0.75rem;\n  vertical-align: top;\n  text-align: center;\n  border-top: 1px solid #eceeef;\n'], ['\n  padding: 0.75rem;\n  vertical-align: top;\n  text-align: center;\n  border-top: 1px solid #eceeef;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Tr = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].tr(_templateObject);

var Th = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].th(_templateObject2);

//   background-color: #eceeef;

var Td = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].td(_templateObject3);

function ListItem(_ref) {
  var values = _ref.values;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Tr,
    null,
    !values && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('td', null),
    values && values.map(function (val, i) {
      var Comp = i === 0 ? Th : Td;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Comp,
        { key: i },
        typeof val === 'number' ? String(val).replace(/^-/, '−') : val
      );
    })
  );
}

ListItem.propTypes = {
  values: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array
};

/* harmony default export */ exports["a"] = ListItem;

/***/ },

/***/ "./app/components/WithLoading/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
var _templateObject = _taggedTemplateLiteral(['\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n'], ['\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint no-multi-spaces: "off", key-spacing: "off" */




var spinnerAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(_templateObject);

var defaultBlockStyle = {
  outer: {},
  inner: {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '100px'
  },
  layout: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)'
  },
  spinner: {
    width: '30px',
    height: '30px',
    fontSize: '30px',
    animation: spinnerAnimation + ' 1s linear infinite'
  }
};

var defaultInlineStyle = {
  outer: {},
  inner: {},
  layout: {},
  spinner: {
    animation: spinnerAnimation + ' 1s linear infinite'
  }
};

var WithLoading = function WithLoading(_ref) {
  var children = _ref.children,
      isLoading = _ref.isLoading,
      loadingSize = _ref.loadingSize,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'block' : _ref$type,
      _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles;

  var defaultStyle = type === 'inline' ? defaultInlineStyle : defaultBlockStyle;
  var outerStyle = Object.assign({}, defaultStyle.outer, styles.outer || {});
  var innerStyle = Object.assign({}, defaultStyle.inner, styles.inner || {});
  var layoutStyle = Object.assign({}, defaultStyle.layout, styles.layout || {});
  var spinnerStyle = Object.assign({}, defaultStyle.spinner, loadingSize ? {
    width: loadingSize,
    height: loadingSize,
    fontSize: loadingSize
  } : {}, styles.spinner || {});

  var display = function display() {
    if (isLoading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { style: innerStyle },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { style: layoutStyle },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'fa fa-circle-o-notch', style: spinnerStyle })
        )
      );
    }

    return children;
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { style: outerStyle },
    display()
  );
};

WithLoading.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.node,
  isLoading: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool.isRequired,
  loadingSize: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  styles: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object
};

/* harmony default export */ exports["a"] = WithLoading;

/***/ },

/***/ "./app/containers/AccountProvider/generateContractApi.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./app/containers/AccountProvider/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sagas__ = __webpack_require__("./app/containers/AccountProvider/sagas.js");
/* harmony export (immutable) */ exports["a"] = generateContractAPI;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function degrade(fn, fallback) {
  try {
    return fn();
  } catch (e) {
    return fallback;
  }
}

function getMethodKey(_ref) {
  var groupName = _ref.groupName,
      methodName = _ref.methodName,
      args = _ref.args;

  return (groupName || '') + '.' + methodName + '(' + JSON.stringify(args) + ')';
}

function generateContractInstanceApi(_ref2) {
  var abi = _ref2.abi,
      address = _ref2.address,
      getState = _ref2.getState,
      dispatch = _ref2.dispatch;

  // cached version doesn't exist, create it
  var contractInstance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sagas__["b" /* getWeb3 */])().eth.contract(abi).at(address);
  // // reduce the abi into the redux methods
  var api = abi.reduce(function (o, definition) {
    // skip if we're not dealing with a function
    if (definition.type !== 'function') {
      return o;
    }
    var methodName = definition.name;
    // build the actions
    var actions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])({
      // dispatches action to read contract method results and write into store
      call: function call() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions__["h" /* contractMethodCall */])({
          args: args, address: address, key: getMethodKey({ methodName: methodName, args: args }), method: contractInstance[methodName].call
        });
      },
      // creates receipt for to invoke contract through account controller
      sendTransaction: function sendTransaction() {
        var _contractInstance$met;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions__["i" /* contractTxSend */])({
          key: getMethodKey({ methodName: methodName, args: args }),
          dest: address,
          data: (_contractInstance$met = contractInstance[methodName]).getData.apply(_contractInstance$met, args),
          privKey: getState().get('privKey')
        });
      }
    }, dispatch);
    // base getter
    // reads cached contract method call from state
    var contractMethod = function contractMethod() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return degrade(function () {
        var methodKey = getMethodKey({ methodName: methodName, args: args });
        return getState().getIn([address, 'methods', methodKey, 'value']);
      });
    };
    // calls contract method without changing state
    var callPromise = function callPromise() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return new Promise(function (resolve, reject) {
        var _contractInstance$met2;

        (_contractInstance$met2 = contractInstance[methodName]).call.apply(_contractInstance$met2, args.concat([function (err, value) {
          if (err) {
            return reject(err);
          }
          return resolve(value);
        }]));
      });
    };
    // add actions to base getter
    contractMethod.call = actions.call;
    contractMethod.sendTransaction = actions.sendTransaction;
    contractMethod.callPromise = callPromise;
    // // reduce with added actions
    return _extends({}, o, _defineProperty({}, methodName, contractMethod));
  }, {});
  // decorate
  api.address = address;
  api.allEvents = contractInstance.allEvents;
  return api;
}

function generateContractAPI(_ref3) {
  var getState = _ref3.getState,
      dispatch = _ref3.dispatch;

  var cache = {};
  return function (abi) {
    var api = {
      at: function at(address) {
        if (!cache[address]) {
          cache[address] = generateContractInstanceApi({ abi: abi, address: address, getState: getState, dispatch: dispatch });
        }
        return cache[address];
      }
    };
    return api;
  };
}

/***/ },

/***/ "./app/containers/AccountProvider/web3Connect.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("./app/containers/AccountProvider/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectors__ = __webpack_require__("./app/containers/AccountProvider/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sagas__ = __webpack_require__("./app/containers/AccountProvider/sagas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generateContractApi__ = __webpack_require__("./app/containers/AccountProvider/generateContractApi.js");
/* unused harmony export getMethodKey */
/* harmony export (immutable) */ exports["a"] = web3Connect;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function degrade(fn, fallback) {
  try {
    return fn();
  } catch (e) {
    return fallback;
  }
}

function getMethodKey(_ref) {
  var groupName = _ref.groupName,
      methodName = _ref.methodName,
      args = _ref.args;

  return (groupName || '') + '.' + methodName + '(' + JSON.stringify(args) + ')';
}

// returns the value of the gotten web3 method
function generateWeb3Getter(_ref2) {
  var getState = _ref2.getState,
      methodName = _ref2.methodName,
      groupName = _ref2.groupName;

  if (methodName.indexOf('get') !== 0) {
    return null;
  }
  var getterFragment = methodName.split('get')[1];
  var getterName = '' + getterFragment[0].toLowerCase() + getterFragment.slice(1);
  // TODO add other statuses (fetching, created, error, etc.)
  var getter = _defineProperty({}, getterName, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (getterName.indexOf('transaction') === 0) {
      return degrade(function () {
        return getState().getIn(['web3', 'transactions', args[0], 'value']);
      });
    }
    return degrade(function () {
      var methodKey = getMethodKey({ groupName: groupName, methodName: methodName, args: args });
      return getState().getIn(['web3', 'methods', methodKey, 'value']);
    });
  });
  return getter;
}

function generateWeb3ActionCreator(_ref3) {
  var groupName = _ref3.groupName,
      methodName = _ref3.methodName,
      dispatch = _ref3.dispatch;

  // use the defined action creator, or fallback to regular web3 method
  var web3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__sagas__["b" /* getWeb3 */])();
  var method = web3[groupName][methodName];
  var acOverride = __WEBPACK_IMPORTED_MODULE_2__actions__["f" /* SUPPORTED_WEB3_METHODS */][groupName][methodName].actionCreator;
  var actionCreator = acOverride || __WEBPACK_IMPORTED_MODULE_2__actions__["g" /* web3MethodCall */];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(_defineProperty({}, methodName, function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return actionCreator({ method: method, args: args, key: !acOverride && getMethodKey({ groupName: groupName, methodName: methodName, args: args }) });
  }), dispatch);
}

function generateWeb3Methods(params) {
  return _extends({}, generateWeb3Getter(params), generateWeb3ActionCreator(params));
}

// TODO should we scope this? this the right place to put it?
var updatedState = void 0;
function getCurrentState() {
  return updatedState;
}

function generateNetworkApi(state, dispatch) {
  updatedState = state;
  // reduce the supported api into action creators and getters
  var web3 = Object.keys(__WEBPACK_IMPORTED_MODULE_2__actions__["f" /* SUPPORTED_WEB3_METHODS */]).reduce(function (o, groupName) {
    return _extends({}, o, _defineProperty({}, groupName, Object.keys(__WEBPACK_IMPORTED_MODULE_2__actions__["f" /* SUPPORTED_WEB3_METHODS */][groupName]).reduce(function (o2, methodName) {
      return _extends({}, o2, generateWeb3Methods({ methodName: methodName, getState: getCurrentState, dispatch: dispatch, groupName: groupName }));
    }, {})));
  }, {});
  // nice little helper function
  web3.eth.waitForMined = function (tx) {
    var pollTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5 * 1000;
    return new Promise(function (resolve, reject) {
      function poll() {
        return web3.eth.getTransactionReceipt(tx).then(function (res) {
          if (res) {
            resolve(res);
          } else {
            setTimeout(poll, pollTime);
          }
        }).catch(reject);
      }
      setTimeout(poll, 10); // timeout for testrpc
    });
  };
  // custom contract creation api
  web3.eth.contract = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__generateContractApi__["a" /* default */])({ web3: web3, getState: getCurrentState, dispatch: dispatch });

  return { web3: web3 };
}

function web3Connect(passedMapStateToProps, passedActions) {
  // allow user to map custom map
  function mapStateToProps(state, props) {
    return _extends({}, passedMapStateToProps(state, props), { web3Redux: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__selectors__["c" /* selectAccount */])(state) });
  }

  function mapDispatchToProps(dispatch) {
    return _extends({ dispatch: dispatch }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(passedActions(dispatch), dispatch));
  }

  function mergeProps(stateProps, dispatchProps, ownProps) {
    var dispatch = dispatchProps.dispatch,
        customActions = _objectWithoutProperties(dispatchProps, ['dispatch']);

    return _extends({}, stateProps, ownProps, customActions, {
      dispatch: dispatch,
      web3Redux: generateNetworkApi(stateProps.web3Redux, dispatch)
    });
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps, mergeProps);
}

/***/ },

/***/ "./app/containers/Lobby/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grid_styled__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grid_styled___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grid_styled__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Button__ = __webpack_require__("./app/components/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Container__ = __webpack_require__("./app/components/Container/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_List__ = __webpack_require__("./app/components/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_H2__ = __webpack_require__("./app/components/H2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reselect__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__LobbyItem__ = __webpack_require__("./app/containers/LobbyItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Table_actions__ = __webpack_require__("./app/containers/Table/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selectors__ = __webpack_require__("./app/containers/Lobby/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_tableService__ = __webpack_require__("./app/services/tableService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_WithLoading__ = __webpack_require__("./app/components/WithLoading/index.js");
/* harmony export (immutable) */ exports["mapDispatchToProps"] = mapDispatchToProps;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by helge on 06.10.16.
 */















var LobbyComponent = function (_React$PureComponent) {
  _inherits(LobbyComponent, _React$PureComponent);

  // eslint-disable-line

  function LobbyComponent(props) {
    _classCallCheck(this, LobbyComponent);

    var _this = _possibleConstructorReturn(this, (LobbyComponent.__proto__ || Object.getPrototypeOf(LobbyComponent)).call(this, props));

    _this.handleGetTables = _this.handleGetTables.bind(_this);
    _this.handleGetTables();
    return _this;
  }

  _createClass(LobbyComponent, [{
    key: 'handleGetTables',
    value: function handleGetTables() {
      var _this2 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__services_tableService__["c" /* fetchTables */])().then(function (tables) {
        if (tables) {
          tables.forEach(function (tableAddr) {
            return _this2.props.tableReceived(tableAddr);
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var lobby = this.props.lobby;

      var content = [];

      if (lobby) {
        content = lobby.map(function (tableAddr, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__LobbyItem__["a" /* default */], { key: i, tableAddr: tableAddr });
        });
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_components_Container__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_components_H2__["a" /* default */],
          null,
          ' Table Overview '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_components_List__["b" /* TableStriped */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'thead',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { key: 'number' },
                ' # '
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { key: 'blind' },
                ' Blind '
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { key: 'play' },
                ' Players '
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { key: 'hand' },
                ' Hand '
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { key: 'actn' },
                ' Action '
              )
            )
          ),
          lobby && lobby.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tbody',
            null,
            content
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_WithLoading__["a" /* default */], {
          isLoading: lobby.length === 0
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_grid_styled___default.a,
          { xs: 1 / 4 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { float: 'left' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_components_Button__["a" /* default */],
              { onClick: this.handleGetTables, size: 'medium', icon: 'fa fa-refresh' },
              'REFRESH'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grid_styled___default.a, { xs: 3 / 4 })
      );
    }
  }]);

  return LobbyComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

function mapDispatchToProps(dispatch) {
  return {
    tableReceived: function tableReceived(tableAddr) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__Table_actions__["w" /* tableReceived */])(tableAddr));
    }
  };
}

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_reselect__["createStructuredSelector"])({
  lobby: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__selectors__["a" /* makeSelectLobby */])()
});

LobbyComponent.propTypes = {
  lobby: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  tableReceived: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func
};

/* harmony default export */ exports["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(LobbyComponent);

/***/ },

/***/ "./app/containers/Lobby/selectors.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return makeSelectLobby; });


var selectTables = function selectTables(state) {
  return state.get('table');
};

var makeSelectLobby = function makeSelectLobby() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(selectTables, function (tableState) {
    var tableAddresses = [];
    tableState.keySeq().forEach(function (key) {
      if (key.length > 20) {
        tableAddresses.push(key);
      }
    });
    return tableAddresses;
  });
};



/***/ },

/***/ "./app/containers/LobbyItem/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Button__ = __webpack_require__("./app/components/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AccountProvider_web3Connect__ = __webpack_require__("./app/containers/AccountProvider/web3Connect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Table_actions__ = __webpack_require__("./app/containers/Table/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tableService__ = __webpack_require__("./app/services/tableService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selectors__ = __webpack_require__("./app/containers/LobbyItem/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_config__ = __webpack_require__("./app/app.config.js");
/* unused harmony export mapDispatchToProps */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  &:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n'], ['\n  &:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 0.75rem;\n  vertical-align: top;\n  text-align: center;\n  border-top: 1px solid #eceeef;\n'], ['\n  padding: 0.75rem;\n  vertical-align: top;\n  text-align: center;\n  border-top: 1px solid #eceeef;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var Tr = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].tr(_templateObject);

var Td = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].td(_templateObject2);

var ADDR_EMPTY = '0x0000000000000000000000000000000000000000';

var getTableData = function getTableData(table, props) {
  var lineup = table.getLineup.callPromise();
  var sb = table.smallBlind.callPromise();
  return Promise.all([lineup, sb]).then(function (rsp) {
    props.lineupReceived(table.address, rsp[0], rsp[1]);
    return Promise.resolve();
  });
};

var getTableHand = function getTableHand(props) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__services_tableService__["d" /* fetchTableState */])(props.tableAddr).then(function (rsp) {
    return props.updateReceived(props.tableAddr, rsp);
  });
};

var LobbyItem = function (_React$PureComponent) {
  _inherits(LobbyItem, _React$PureComponent);

  // eslint-disable-line

  function LobbyItem(props) {
    _classCallCheck(this, LobbyItem);

    var _this = _possibleConstructorReturn(this, (LobbyItem.__proto__ || Object.getPrototypeOf(LobbyItem)).call(this, props));

    _this.handleView = _this.handleView.bind(_this);
    _this.web3 = props.web3Redux.web3;
    _this.table = _this.web3.eth.contract(__WEBPACK_IMPORTED_MODULE_9__app_config__["b" /* ABI_TABLE */]).at(props.tableAddr);
    getTableData(_this.table, props);
    getTableHand(props);
    return _this;
  }

  _createClass(LobbyItem, [{
    key: 'handleView',
    value: function handleView() {
      __WEBPACK_IMPORTED_MODULE_3_react_router__["browserHistory"].push('/table/' + this.props.tableAddr + '/hand/' + this.props.lastHandId);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.data || !this.props.data.seats) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('tr', null);
      }
      var players = 0;
      this.props.data.seats.forEach(function (seat) {
        if (seat && seat.address && seat.address.length >= 40 && seat.address !== ADDR_EMPTY) {
          players += 1;
        }
      });
      var ta = this.props.tableAddr.substring(2, 8);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Tr,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Td,
          { key: 'ta' },
          ta
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Td,
          { key: 'sb' },
          this.props.data.smallBlind
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Td,
          { key: 'np' },
          players + '/' + this.props.data.seats.length
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Td,
          { key: 'lh' },
          this.props.lastHandId
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Td,
          { key: 'ac' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_Button__["a" /* default */], { onClick: this.handleView, size: 'medium', icon: 'fa fa-eye' })
        )
      );
    }
  }]);

  return LobbyItem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

LobbyItem.propTypes = {
  tableAddr: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  web3Redux: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.any,
  lastHandId: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number
};

function mapDispatchToProps() {
  return {
    lineupReceived: function lineupReceived(tableAddr, lineup, smallBlind) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Table_actions__["d" /* lineupReceived */])(tableAddr, lineup, smallBlind);
    },
    updateReceived: function updateReceived(tableAddr, hand) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Table_actions__["g" /* updateReceived */])(tableAddr, hand);
    }
  };
}

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_reselect__["createStructuredSelector"])({
  data: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__selectors__["a" /* makeSelectTableData */])(),
  lastHandId: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__selectors__["b" /* makeSelectTableLastHandId */])()
});

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__AccountProvider_web3Connect__["a" /* default */])(mapStateToProps, mapDispatchToProps)(LobbyItem);

/***/ },

/***/ "./app/containers/LobbyItem/selectors.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return makeSelectTableData; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return makeSelectTableLastHandId; });


var tableSelector = function tableSelector(state, props) {
  return state && props ? state.getIn(['table', props.tableAddr]) : null;
};

var makeSelectTableData = function makeSelectTableData() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(tableSelector, function (table) {
    if (!table || !table.get('data')) {
      return null;
    }
    return table.get('data').toJS();
  });
};

var makeSelectTableLastHandId = function makeSelectTableLastHandId() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(tableSelector, function (table) {
    if (!table) {
      return null;
    }
    var max = 0;
    table.keySeq().forEach(function (k) {
      if (!isNaN(k)) {
        var handId = parseInt(k, 10);
        if (handId > max) {
          max = handId;
        }
      }
    });
    if (max > 0) {
      return max;
    }
    return table.getIn(['data', 'lastHandNetted']) + 1;
  });
};



/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db250YWluZXIvaW5kZXguanM/OTkzMyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IMi9pbmRleC5qcz9jZjczKiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0L2luZGV4LmpzPzMxMjciLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdEl0ZW0vaW5kZXguanM/ZjQ3NCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9XaXRoTG9hZGluZy9pbmRleC5qcz9hMTIxIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0FjY291bnRQcm92aWRlci9nZW5lcmF0ZUNvbnRyYWN0QXBpLmpzPzE5NzkqIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0FjY291bnRQcm92aWRlci93ZWIzQ29ubmVjdC5qcz9hOTlhKiIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Mb2JieS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Mb2JieS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvTG9iYnlJdGVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0xvYmJ5SXRlbS9zZWxlY3RvcnMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSDIiLCJoMiIsIlRhYmxlIiwidGFibGUiLCJUYWJsZVN0eWxlZCIsIlNvcnRCdXR0b24iLCJhIiwiVGFibGVTdHJpcGVkIiwicHJvcHMiLCJzdGF0ZSIsInNvcnRCeSIsInNvcnREaXIiLCJpdGVtcyIsInNvcnQiLCJiIiwiaSIsInNldFN0YXRlIiwiaGVhZGVycyIsInNvcnRhYmxlQ29sdW1ucyIsIm5vRGF0YU1zZyIsInNvcnRlZEl0ZW1zIiwibWFwIiwiaGVhZGVyIiwic29ydGFibGUiLCJpbmRleE9mIiwiaGFuZGxlSGVhZGVyQ2xpY2siLCJsZW5ndGgiLCJpdGVtIiwidGV4dEFsaWduIiwiUmVhY3QiLCJDb21wb25lbnQiLCJMaXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm5vZGUiLCJudW1iZXIiLCJzdHJpbmciLCJUciIsInRyIiwiVGgiLCJ0aCIsIlRkIiwidGQiLCJMaXN0SXRlbSIsInZhbHVlcyIsInZhbCIsIkNvbXAiLCJTdHJpbmciLCJyZXBsYWNlIiwiYXJyYXkiLCJzcGlubmVyQW5pbWF0aW9uIiwiZGVmYXVsdEJsb2NrU3R5bGUiLCJvdXRlciIsImlubmVyIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwic3Bpbm5lciIsImZvbnRTaXplIiwiYW5pbWF0aW9uIiwiZGVmYXVsdElubGluZVN0eWxlIiwiV2l0aExvYWRpbmciLCJjaGlsZHJlbiIsImlzTG9hZGluZyIsImxvYWRpbmdTaXplIiwidHlwZSIsInN0eWxlcyIsImRlZmF1bHRTdHlsZSIsIm91dGVyU3R5bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJpbm5lclN0eWxlIiwibGF5b3V0U3R5bGUiLCJzcGlubmVyU3R5bGUiLCJib29sIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImRlZ3JhZGUiLCJmbiIsImZhbGxiYWNrIiwiZSIsImdldE1ldGhvZEtleSIsImdyb3VwTmFtZSIsIm1ldGhvZE5hbWUiLCJhcmdzIiwiSlNPTiIsInN0cmluZ2lmeSIsImdlbmVyYXRlQ29udHJhY3RJbnN0YW5jZUFwaSIsImFiaSIsImFkZHJlc3MiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwiY29udHJhY3RJbnN0YW5jZSIsImdldFdlYjMiLCJldGgiLCJjb250cmFjdCIsImF0IiwiYXBpIiwicmVkdWNlIiwibyIsImRlZmluaXRpb24iLCJuYW1lIiwiYWN0aW9ucyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNhbGwiLCJjb250cmFjdE1ldGhvZENhbGwiLCJrZXkiLCJtZXRob2QiLCJzZW5kVHJhbnNhY3Rpb24iLCJjb250cmFjdFR4U2VuZCIsImRlc3QiLCJkYXRhIiwiZ2V0RGF0YSIsInByaXZLZXkiLCJnZXQiLCJjb250cmFjdE1ldGhvZCIsIm1ldGhvZEtleSIsImdldEluIiwiY2FsbFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsInZhbHVlIiwiYWxsRXZlbnRzIiwiZ2VuZXJhdGVDb250cmFjdEFQSSIsImNhY2hlIiwiZ2VuZXJhdGVXZWIzR2V0dGVyIiwiZ2V0dGVyRnJhZ21lbnQiLCJzcGxpdCIsImdldHRlck5hbWUiLCJ0b0xvd2VyQ2FzZSIsInNsaWNlIiwiZ2V0dGVyIiwiZ2VuZXJhdGVXZWIzQWN0aW9uQ3JlYXRvciIsIndlYjMiLCJhY092ZXJyaWRlIiwiU1VQUE9SVEVEX1dFQjNfTUVUSE9EUyIsImFjdGlvbkNyZWF0b3IiLCJnZW5lcmF0ZVdlYjNNZXRob2RzIiwicGFyYW1zIiwidXBkYXRlZFN0YXRlIiwiZ2V0Q3VycmVudFN0YXRlIiwiZ2VuZXJhdGVOZXR3b3JrQXBpIiwia2V5cyIsIm8yIiwid2FpdEZvck1pbmVkIiwidHgiLCJwb2xsVGltZSIsInBvbGwiLCJnZXRUcmFuc2FjdGlvblJlY2VpcHQiLCJ0aGVuIiwicmVzIiwic2V0VGltZW91dCIsImNhdGNoIiwiZ2VuZXJhdGVDb250cmFjdEFwaSIsIndlYjNDb25uZWN0IiwicGFzc2VkTWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkQWN0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsIndlYjNSZWR1eCIsInNlbGVjdEFjY291bnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJtZXJnZVByb3BzIiwic3RhdGVQcm9wcyIsImRpc3BhdGNoUHJvcHMiLCJvd25Qcm9wcyIsImN1c3RvbUFjdGlvbnMiLCJjb25uZWN0IiwiTG9iYnlDb21wb25lbnQiLCJoYW5kbGVHZXRUYWJsZXMiLCJiaW5kIiwiZmV0Y2hUYWJsZXMiLCJ0YWJsZXMiLCJmb3JFYWNoIiwidGFibGVBZGRyIiwidGFibGVSZWNlaXZlZCIsImxvYmJ5IiwiY29udGVudCIsImZsb2F0IiwiUHVyZUNvbXBvbmVudCIsImNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciIsIm1ha2VTZWxlY3RMb2JieSIsImZ1bmMiLCJzZWxlY3RUYWJsZXMiLCJjcmVhdGVTZWxlY3RvciIsInRhYmxlU3RhdGUiLCJ0YWJsZUFkZHJlc3NlcyIsImtleVNlcSIsInB1c2giLCJBRERSX0VNUFRZIiwiZ2V0VGFibGVEYXRhIiwibGluZXVwIiwiZ2V0TGluZXVwIiwic2IiLCJzbWFsbEJsaW5kIiwiYWxsIiwicnNwIiwibGluZXVwUmVjZWl2ZWQiLCJnZXRUYWJsZUhhbmQiLCJmZXRjaFRhYmxlU3RhdGUiLCJ1cGRhdGVSZWNlaXZlZCIsIkxvYmJ5SXRlbSIsImhhbmRsZVZpZXciLCJicm93c2VySGlzdG9yeSIsImxhc3RIYW5kSWQiLCJzZWF0cyIsInBsYXllcnMiLCJzZWF0IiwidGEiLCJzdWJzdHJpbmciLCJhbnkiLCJoYW5kIiwibWFrZVNlbGVjdFRhYmxlRGF0YSIsIm1ha2VTZWxlY3RUYWJsZUxhc3RIYW5kSWQiLCJ0YWJsZVNlbGVjdG9yIiwidG9KUyIsIm1heCIsImsiLCJpc05hTiIsImhhbmRJZCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUlBO0FBQ0E7O0FBSUEsSUFBTUEsWUFBWSwwREFBQUMsQ0FBT0MsR0FBbkIsa0JBT1UseURBUFYsQ0FBTjs7QUFhQSw0Q0FBZUYsU0FBZixDOzs7Ozs7Ozs7Ozs7O0FDdEJBOztBQUVBLElBQU1HLEtBQUssMERBQUFGLENBQU9HLEVBQVosaUJBQU47O0FBS0EsNENBQWVELEVBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsUUFBUSwwREFBQUosQ0FBT0ssS0FBZixpQkFBTjs7QUFLQSxJQUFNQyxjQUFjLGlGQUFBTixD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QSxtQkFBc0I7QUFBQSxTQUFNLCtFQUFBNUIsQ0FDaEM4QixhQURnQyxFQUVoQyxVQUFDMU4sS0FBRCxFQUFXO0FBQ1QsUUFBSSxDQUFDQSxLQUFELElBQVUsQ0FBQ0EsTUFBTXFILEdBQU4sQ0FBVSxNQUFWLENBQWYsRUFBa0M7QUFDaEMsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPckgsTUFBTXFILEdBQU4sQ0FBVSxNQUFWLEVBQWtCc0csSUFBbEIsRUFBUDtBQUNELEdBUCtCLENBQU47QUFBQSxDQUE1Qjs7QUFVQSxJQUFNRiw0QkFBNEIsU0FBNUJBLHlCQUE0QjtBQUFBLFNBQU0sK0VBQUE3QixDQUN0QzhCLGFBRHNDLEVBRXRDLFVBQUMxTixLQUFELEVBQVc7QUFDVCxRQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLGFBQU8sSUFBUDtBQUNEO0FBQ0QsUUFBSTROLE1BQU0sQ0FBVjtBQUNBNU4sVUFBTStMLE1BQU4sR0FBZWQsT0FBZixDQUF1QixVQUFDNEMsQ0FBRCxFQUFPO0FBQzVCLFVBQUksQ0FBQ0MsTUFBTUQsQ0FBTixDQUFMLEVBQWU7QUFDYixZQUFNRSxTQUFTQyxTQUFTSCxDQUFULEVBQVksRUFBWixDQUFmO0FBQ0EsWUFBSUUsU0FBU0gsR0FBYixFQUFrQjtBQUNoQkEsZ0JBQU1HLE1BQU47QUFDRDtBQUNGO0FBQ0YsS0FQRDtBQVFBLFFBQUlILE1BQU0sQ0FBVixFQUFhO0FBQ1gsYUFBT0EsR0FBUDtBQUNEO0FBQ0QsV0FBTzVOLE1BQU13SCxLQUFOLENBQVksQ0FBQyxNQUFELEVBQVMsZ0JBQVQsQ0FBWixJQUEwQyxDQUFqRDtBQUNELEdBbkJxQyxDQUFOO0FBQUEsQ0FBbEMiLCJmaWxlIjoiMi5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBoZWxnZSBvbiAyNi4wMi4xNy5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIHdoaXRlLFxufSBmcm9tICcuLi8uLi92YXJpYWJsZXMnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDNlbSBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBwYWRkaW5nLXRvcDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgbWluLWhlaWdodDogNTBlbTtcbiAgYmFja2dyb3VuZDogJHt3aGl0ZX07XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiA3NTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQ29udGFpbmVyL2luZGV4LmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEgyID0gc3R5bGVkLmgyYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIMjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0gyL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFdpdGhMb2FkaW5nIGZyb20gJy4uL1dpdGhMb2FkaW5nJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi9MaXN0SXRlbSc7XG5cbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbmA7XG5cbmNvbnN0IFRhYmxlU3R5bGVkID0gc3R5bGVkKFRhYmxlKWBcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgJiB0aCB7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlZWVmO1xuICB9XG4gICYgdGhlYWQgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2VlZWY7XG4gIH1cbiAgJiB0Ym9keSArIHRib2R5IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2VjZWVlZjtcbiAgfVxuICAmICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbmA7XG5cbmNvbnN0IFNvcnRCdXR0b24gPSBzdHlsZWQuYWBcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcblxuICBzcGFuIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRhYmxlU3RyaXBlZCA9IHN0eWxlZChUYWJsZVN0eWxlZClgXG4gICYgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuYDtcblxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNvcnRCeTogbnVsbCwgLy8gY29sdW1uIGluZGV4XG4gICAgICBzb3J0RGlyOiAtMSwgLy8gMSDigJQgYXNjZW5kaW5nLCAtMSDigJQgZGVzY2VuZGluZ1xuICAgIH07XG4gIH1cblxuICBzb3J0ZWRJdGVtcygpIHtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc29ydEJ5LCBzb3J0RGlyIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGl0ZW1zICYmIHNvcnRCeSkge1xuICAgICAgcmV0dXJuIGl0ZW1zLnNvcnQoKGEsIGIpID0+IChhW3NvcnRCeV0gLSBiW3NvcnRCeV0pICogc29ydERpcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgaGFuZGxlSGVhZGVyQ2xpY2soaSkge1xuICAgIHRoaXMuc2V0U3RhdGUoKHsgc29ydEJ5LCBzb3J0RGlyIH0pID0+ICh7XG4gICAgICBzb3J0Qnk6IGksXG4gICAgICBzb3J0RGlyOiBzb3J0QnkgPT09IGkgPyBzb3J0RGlyICogLTEgOiBzb3J0RGlyLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhlYWRlcnMsIHNvcnRhYmxlQ29sdW1ucyA9IFtdLCBub0RhdGFNc2cgPSAnTm8gRGF0YScgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzb3J0QnksIHNvcnREaXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnNvcnRlZEl0ZW1zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRhYmxlU3RyaXBlZD5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIHtoZWFkZXJzICYmIGhlYWRlcnMubWFwKChoZWFkZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0YWJsZSA9IHNvcnRhYmxlQ29sdW1ucy5pbmRleE9mKGkpICE9PSAtMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRoIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIHshc29ydGFibGUgJiYgaGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICB7c29ydGFibGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICA8U29ydEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUhlYWRlckNsaWNrKGkpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntoZWFkZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NvcnRCeSA9PT0gaSAmJiBzb3J0RGlyID09PSAxICYmICcg4payJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzb3J0QnkgPT09IGkgJiYgc29ydERpciA9PT0gLTEgJiYgJyDilrwnfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU29ydEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgeyFoZWFkZXJzICYmIDx0aCAvPn1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICB7aXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlcz17aXRlbX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UYWJsZVN0cmlwZWQ+XG4gICAgICAgIDxXaXRoTG9hZGluZ1xuICAgICAgICAgIGlzTG9hZGluZz17IWl0ZW1zfVxuICAgICAgICAgIHN0eWxlcz17e319XG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMgJiYgaXRlbXMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAge25vRGF0YU1zZ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvV2l0aExvYWRpbmc+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpc3QucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICBoZWFkZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gIHNvcnRhYmxlQ29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gIG5vRGF0YU1zZzogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9MaXN0L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUciA9IHN0eWxlZC50cmBcbiAgJjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG5gO1xuXG5jb25zdCBUaCA9IHN0eWxlZC50aGBcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM0NjRhNGM7XG5gO1xuXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY7XG5cbmNvbnN0IFRkID0gc3R5bGVkLnRkYFxuICBwYWRkaW5nOiAwLjc1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlZWVmO1xuYDtcblxuZnVuY3Rpb24gTGlzdEl0ZW0oeyB2YWx1ZXMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUcj5cbiAgICAgIHshdmFsdWVzICYmIDx0ZCAvPn1cbiAgICAgIHt2YWx1ZXMgJiYgdmFsdWVzLm1hcCgodmFsLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IENvbXAgPSBpID09PSAwID8gVGggOiBUZDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q29tcCBrZXk9e2l9PlxuICAgICAgICAgICAge3R5cGVvZiB2YWwgPT09ICdudW1iZXInXG4gICAgICAgICAgICAgID8gU3RyaW5nKHZhbCkucmVwbGFjZSgvXi0vLCAn4oiSJylcbiAgICAgICAgICAgICAgOiB2YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0NvbXA+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L1RyPlxuICApO1xufVxuXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9MaXN0SXRlbS9pbmRleC5qcyIsIi8qIGVzbGludCBuby1tdWx0aS1zcGFjZXM6IFwib2ZmXCIsIGtleS1zcGFjaW5nOiBcIm9mZlwiICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IHNwaW5uZXJBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbmA7XG5cbmNvbnN0IGRlZmF1bHRCbG9ja1N0eWxlID0ge1xuICBvdXRlcjoge30sXG4gIGlubmVyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMHB4JyxcbiAgfSxcbiAgbGF5b3V0OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKScsXG4gIH0sXG4gIHNwaW5uZXI6IHtcbiAgICB3aWR0aDogJzMwcHgnLFxuICAgIGhlaWdodDogJzMwcHgnLFxuICAgIGZvbnRTaXplOiAnMzBweCcsXG4gICAgYW5pbWF0aW9uOiBgJHtzcGlubmVyQW5pbWF0aW9ufSAxcyBsaW5lYXIgaW5maW5pdGVgLFxuICB9LFxufTtcblxuY29uc3QgZGVmYXVsdElubGluZVN0eWxlID0ge1xuICBvdXRlcjoge30sXG4gIGlubmVyOiB7fSxcbiAgbGF5b3V0OiB7fSxcbiAgc3Bpbm5lcjoge1xuICAgIGFuaW1hdGlvbjogYCR7c3Bpbm5lckFuaW1hdGlvbn0gMXMgbGluZWFyIGluZmluaXRlYCxcbiAgfSxcbn07XG5cblxuY29uc3QgV2l0aExvYWRpbmcgPSAoeyBjaGlsZHJlbiwgaXNMb2FkaW5nLCBsb2FkaW5nU2l6ZSwgdHlwZSA9ICdibG9jaycsIHN0eWxlcyA9IHt9IH0pID0+IHtcbiAgY29uc3QgZGVmYXVsdFN0eWxlICA9IHR5cGUgPT09ICdpbmxpbmUnID8gZGVmYXVsdElubGluZVN0eWxlIDogZGVmYXVsdEJsb2NrU3R5bGU7XG4gIGNvbnN0IG91dGVyU3R5bGUgICAgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGUub3V0ZXIsIHN0eWxlcy5vdXRlciB8fCB7fSk7XG4gIGNvbnN0IGlubmVyU3R5bGUgICAgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGUuaW5uZXIsIHN0eWxlcy5pbm5lciB8fCB7fSk7XG4gIGNvbnN0IGxheW91dFN0eWxlICAgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGUubGF5b3V0LCBzdHlsZXMubGF5b3V0IHx8IHt9KTtcbiAgY29uc3Qgc3Bpbm5lclN0eWxlICA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgZGVmYXVsdFN0eWxlLnNwaW5uZXIsXG4gICAgbG9hZGluZ1NpemUgPyB7XG4gICAgICB3aWR0aDogbG9hZGluZ1NpemUsXG4gICAgICBoZWlnaHQ6IGxvYWRpbmdTaXplLFxuICAgICAgZm9udFNpemU6IGxvYWRpbmdTaXplLFxuICAgIH0gOiB7fSxcbiAgICBzdHlsZXMuc3Bpbm5lciB8fCB7fVxuICApO1xuXG4gIGNvbnN0IGRpc3BsYXkgPSAoKSA9PiB7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gc3R5bGU9e2lubmVyU3R5bGV9PlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtby1ub3RjaFwiIHN0eWxlPXtzcGlubmVyU3R5bGV9Pjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNwYW4gc3R5bGU9e291dGVyU3R5bGV9PlxuICAgICAge2Rpc3BsYXkoKX1cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5XaXRoTG9hZGluZy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgaXNMb2FkaW5nOiAgUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9hZGluZ1NpemU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6ICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZXM6ICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aExvYWRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9XaXRoTG9hZGluZy9pbmRleC5qcyIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbnRyYWN0TWV0aG9kQ2FsbCwgY29udHJhY3RUeFNlbmQgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0V2ViMyB9IGZyb20gJy4vc2FnYXMnO1xuXG5mdW5jdGlvbiBkZWdyYWRlKGZuLCBmYWxsYmFjaykge1xuICB0cnkge1xuICAgIHJldHVybiBmbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE1ldGhvZEtleSh7IGdyb3VwTmFtZSwgbWV0aG9kTmFtZSwgYXJncyB9KSB7XG4gIHJldHVybiBgJHtncm91cE5hbWUgfHwgJyd9LiR7bWV0aG9kTmFtZX0oJHtKU09OLnN0cmluZ2lmeShhcmdzKX0pYDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250cmFjdEluc3RhbmNlQXBpKHsgYWJpLCBhZGRyZXNzLCBnZXRTdGF0ZSwgZGlzcGF0Y2ggfSkge1xuICAvLyBjYWNoZWQgdmVyc2lvbiBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXRcbiAgY29uc3QgY29udHJhY3RJbnN0YW5jZSA9IGdldFdlYjMoKS5ldGguY29udHJhY3QoYWJpKS5hdChhZGRyZXNzKTtcbiAgLy8gLy8gcmVkdWNlIHRoZSBhYmkgaW50byB0aGUgcmVkdXggbWV0aG9kc1xuICBjb25zdCBhcGkgPSBhYmkucmVkdWNlKChvLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgLy8gc2tpcCBpZiB3ZSdyZSBub3QgZGVhbGluZyB3aXRoIGEgZnVuY3Rpb25cbiAgICBpZiAoZGVmaW5pdGlvbi50eXBlICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBvOyB9XG4gICAgY29uc3QgbWV0aG9kTmFtZSA9IGRlZmluaXRpb24ubmFtZTtcbiAgICAvLyBidWlsZCB0aGUgYWN0aW9uc1xuICAgIGNvbnN0IGFjdGlvbnMgPSBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xuICAgICAgLy8gZGlzcGF0Y2hlcyBhY3Rpb24gdG8gcmVhZCBjb250cmFjdCBtZXRob2QgcmVzdWx0cyBhbmQgd3JpdGUgaW50byBzdG9yZVxuICAgICAgY2FsbDogKC4uLmFyZ3MpID0+IGNvbnRyYWN0TWV0aG9kQ2FsbCh7XG4gICAgICAgIGFyZ3MsIGFkZHJlc3MsIGtleTogZ2V0TWV0aG9kS2V5KHsgbWV0aG9kTmFtZSwgYXJncyB9KSwgbWV0aG9kOiBjb250cmFjdEluc3RhbmNlW21ldGhvZE5hbWVdLmNhbGwsXG4gICAgICB9KSxcbiAgICAgIC8vIGNyZWF0ZXMgcmVjZWlwdCBmb3IgdG8gaW52b2tlIGNvbnRyYWN0IHRocm91Z2ggYWNjb3VudCBjb250cm9sbGVyXG4gICAgICBzZW5kVHJhbnNhY3Rpb246ICguLi5hcmdzKSA9PiBjb250cmFjdFR4U2VuZCh7XG4gICAgICAgIGtleTogZ2V0TWV0aG9kS2V5KHsgbWV0aG9kTmFtZSwgYXJncyB9KSxcbiAgICAgICAgZGVzdDogYWRkcmVzcyxcbiAgICAgICAgZGF0YTogY29udHJhY3RJbnN0YW5jZVttZXRob2ROYW1lXS5nZXREYXRhKC4uLmFyZ3MpLFxuICAgICAgICBwcml2S2V5OiBnZXRTdGF0ZSgpLmdldCgncHJpdktleScpLFxuICAgICAgfSksXG4gICAgfSwgZGlzcGF0Y2gpO1xuICAgIC8vIGJhc2UgZ2V0dGVyXG4gICAgLy8gcmVhZHMgY2FjaGVkIGNvbnRyYWN0IG1ldGhvZCBjYWxsIGZyb20gc3RhdGVcbiAgICBjb25zdCBjb250cmFjdE1ldGhvZCA9ICguLi5hcmdzKSA9PiAoXG4gICAgICBkZWdyYWRlKCgpID0+IHtcbiAgICAgICAgY29uc3QgbWV0aG9kS2V5ID0gZ2V0TWV0aG9kS2V5KHsgbWV0aG9kTmFtZSwgYXJncyB9KTtcbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKCkuZ2V0SW4oW2FkZHJlc3MsICdtZXRob2RzJywgbWV0aG9kS2V5LCAndmFsdWUnXSk7XG4gICAgICB9KVxuICAgICk7XG4gICAgLy8gY2FsbHMgY29udHJhY3QgbWV0aG9kIHdpdGhvdXQgY2hhbmdpbmcgc3RhdGVcbiAgICBjb25zdCBjYWxsUHJvbWlzZSA9ICguLi5hcmdzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb250cmFjdEluc3RhbmNlW21ldGhvZE5hbWVdLmNhbGwoLi4uYXJncywgKGVyciwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBhZGQgYWN0aW9ucyB0byBiYXNlIGdldHRlclxuICAgIGNvbnRyYWN0TWV0aG9kLmNhbGwgPSBhY3Rpb25zLmNhbGw7XG4gICAgY29udHJhY3RNZXRob2Quc2VuZFRyYW5zYWN0aW9uID0gYWN0aW9ucy5zZW5kVHJhbnNhY3Rpb247XG4gICAgY29udHJhY3RNZXRob2QuY2FsbFByb21pc2UgPSBjYWxsUHJvbWlzZTtcbiAgICAvLyAvLyByZWR1Y2Ugd2l0aCBhZGRlZCBhY3Rpb25zXG4gICAgcmV0dXJuIHsgLi4ubywgW21ldGhvZE5hbWVdOiBjb250cmFjdE1ldGhvZCB9O1xuICB9LCB7fSk7XG4gIC8vIGRlY29yYXRlXG4gIGFwaS5hZGRyZXNzID0gYWRkcmVzcztcbiAgYXBpLmFsbEV2ZW50cyA9IGNvbnRyYWN0SW5zdGFuY2UuYWxsRXZlbnRzO1xuICByZXR1cm4gYXBpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRyYWN0QVBJKHsgZ2V0U3RhdGUsIGRpc3BhdGNoIH0pIHtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIChhYmkpID0+IHtcbiAgICBjb25zdCBhcGkgPSB7XG4gICAgICBhdChhZGRyZXNzKSB7XG4gICAgICAgIGlmICghY2FjaGVbYWRkcmVzc10pIHtcbiAgICAgICAgICBjYWNoZVthZGRyZXNzXSA9IGdlbmVyYXRlQ29udHJhY3RJbnN0YW5jZUFwaSh7IGFiaSwgYWRkcmVzcywgZ2V0U3RhdGUsIGRpc3BhdGNoIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVthZGRyZXNzXTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gYXBpO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvQWNjb3VudFByb3ZpZGVyL2dlbmVyYXRlQ29udHJhY3RBcGkuanMiLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB3ZWIzTWV0aG9kQ2FsbCwgU1VQUE9SVEVEX1dFQjNfTUVUSE9EUyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3RBY2NvdW50IH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0V2ViMyB9IGZyb20gJy4vc2FnYXMnO1xuaW1wb3J0IGdlbmVyYXRlQ29udHJhY3RBcGkgZnJvbSAnLi9nZW5lcmF0ZUNvbnRyYWN0QXBpJztcblxuZnVuY3Rpb24gZGVncmFkZShmbiwgZmFsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0aG9kS2V5KHsgZ3JvdXBOYW1lLCBtZXRob2ROYW1lLCBhcmdzIH0pIHtcbiAgcmV0dXJuIGAke2dyb3VwTmFtZSB8fCAnJ30uJHttZXRob2ROYW1lfSgke0pTT04uc3RyaW5naWZ5KGFyZ3MpfSlgO1xufVxuXG4vLyByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ290dGVuIHdlYjMgbWV0aG9kXG5mdW5jdGlvbiBnZW5lcmF0ZVdlYjNHZXR0ZXIoeyBnZXRTdGF0ZSwgbWV0aG9kTmFtZSwgZ3JvdXBOYW1lIH0pIHtcbiAgaWYgKG1ldGhvZE5hbWUuaW5kZXhPZignZ2V0JykgIT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBnZXR0ZXJGcmFnbWVudCA9IG1ldGhvZE5hbWUuc3BsaXQoJ2dldCcpWzFdO1xuICBjb25zdCBnZXR0ZXJOYW1lID0gYCR7Z2V0dGVyRnJhZ21lbnRbMF0udG9Mb3dlckNhc2UoKX0ke2dldHRlckZyYWdtZW50LnNsaWNlKDEpfWA7XG4gIC8vIFRPRE8gYWRkIG90aGVyIHN0YXR1c2VzIChmZXRjaGluZywgY3JlYXRlZCwgZXJyb3IsIGV0Yy4pXG4gIGNvbnN0IGdldHRlciA9IHtcbiAgICBbZ2V0dGVyTmFtZV06ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoZ2V0dGVyTmFtZS5pbmRleE9mKCd0cmFuc2FjdGlvbicpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBkZWdyYWRlKCgpID0+IGdldFN0YXRlKCkuZ2V0SW4oWyd3ZWIzJywgJ3RyYW5zYWN0aW9ucycsIGFyZ3NbMF0sICd2YWx1ZSddKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVncmFkZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZEtleSA9IGdldE1ldGhvZEtleSh7IGdyb3VwTmFtZSwgbWV0aG9kTmFtZSwgYXJncyB9KTtcbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKCkuZ2V0SW4oWyd3ZWIzJywgJ21ldGhvZHMnLCBtZXRob2RLZXksICd2YWx1ZSddKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBnZXR0ZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV2ViM0FjdGlvbkNyZWF0b3IoeyBncm91cE5hbWUsIG1ldGhvZE5hbWUsIGRpc3BhdGNoIH0pIHtcbiAgLy8gdXNlIHRoZSBkZWZpbmVkIGFjdGlvbiBjcmVhdG9yLCBvciBmYWxsYmFjayB0byByZWd1bGFyIHdlYjMgbWV0aG9kXG4gIGNvbnN0IHdlYjMgPSBnZXRXZWIzKCk7XG4gIGNvbnN0IG1ldGhvZCA9IHdlYjNbZ3JvdXBOYW1lXVttZXRob2ROYW1lXTtcbiAgY29uc3QgYWNPdmVycmlkZSA9IFNVUFBPUlRFRF9XRUIzX01FVEhPRFNbZ3JvdXBOYW1lXVttZXRob2ROYW1lXS5hY3Rpb25DcmVhdG9yO1xuICBjb25zdCBhY3Rpb25DcmVhdG9yID0gYWNPdmVycmlkZSB8fCB3ZWIzTWV0aG9kQ2FsbDtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgW21ldGhvZE5hbWVdOiAoLi4uYXJncykgPT4gYWN0aW9uQ3JlYXRvcih7IG1ldGhvZCwgYXJncywga2V5OiAhYWNPdmVycmlkZSAmJiBnZXRNZXRob2RLZXkoeyBncm91cE5hbWUsIG1ldGhvZE5hbWUsIGFyZ3MgfSkgfSksXG4gIH0sIGRpc3BhdGNoKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVXZWIzTWV0aG9kcyhwYXJhbXMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5nZW5lcmF0ZVdlYjNHZXR0ZXIocGFyYW1zKSxcbiAgICAuLi5nZW5lcmF0ZVdlYjNBY3Rpb25DcmVhdG9yKHBhcmFtcyksXG4gIH07XG59XG5cbi8vIFRPRE8gc2hvdWxkIHdlIHNjb3BlIHRoaXM/IHRoaXMgdGhlIHJpZ2h0IHBsYWNlIHRvIHB1dCBpdD9cbmxldCB1cGRhdGVkU3RhdGU7XG5mdW5jdGlvbiBnZXRDdXJyZW50U3RhdGUoKSB7IHJldHVybiB1cGRhdGVkU3RhdGU7IH1cblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXR3b3JrQXBpKHN0YXRlLCBkaXNwYXRjaCkge1xuICB1cGRhdGVkU3RhdGUgPSBzdGF0ZTtcbiAgLy8gcmVkdWNlIHRoZSBzdXBwb3J0ZWQgYXBpIGludG8gYWN0aW9uIGNyZWF0b3JzIGFuZCBnZXR0ZXJzXG4gIGNvbnN0IHdlYjMgPSBPYmplY3Qua2V5cyhTVVBQT1JURURfV0VCM19NRVRIT0RTKS5yZWR1Y2UoKG8sIGdyb3VwTmFtZSkgPT4gKHtcbiAgICAuLi5vLFxuICAgIFtncm91cE5hbWVdOiBPYmplY3Qua2V5cyhTVVBQT1JURURfV0VCM19NRVRIT0RTW2dyb3VwTmFtZV0pLnJlZHVjZSgobzIsIG1ldGhvZE5hbWUpID0+ICh7XG4gICAgICAuLi5vMixcbiAgICAgIC4uLmdlbmVyYXRlV2ViM01ldGhvZHMoeyBtZXRob2ROYW1lLCBnZXRTdGF0ZTogZ2V0Q3VycmVudFN0YXRlLCBkaXNwYXRjaCwgZ3JvdXBOYW1lIH0pLFxuICAgIH0pLFxuICAgIHt9KSxcbiAgfSksXG4gIHt9KTtcbiAgLy8gbmljZSBsaXR0bGUgaGVscGVyIGZ1bmN0aW9uXG4gIHdlYjMuZXRoLndhaXRGb3JNaW5lZCA9ICh0eCwgcG9sbFRpbWUgPSA1ICogMTAwMCkgPT4gKFxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZ1bmN0aW9uIHBvbGwoKSB7XG4gICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRUcmFuc2FjdGlvblJlY2VpcHQodHgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChwb2xsLCBwb2xsVGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dChwb2xsLCAxMCk7IC8vIHRpbWVvdXQgZm9yIHRlc3RycGNcbiAgICB9KVxuICApO1xuICAvLyBjdXN0b20gY29udHJhY3QgY3JlYXRpb24gYXBpXG4gIHdlYjMuZXRoLmNvbnRyYWN0ID0gZ2VuZXJhdGVDb250cmFjdEFwaSh7IHdlYjMsIGdldFN0YXRlOiBnZXRDdXJyZW50U3RhdGUsIGRpc3BhdGNoIH0pO1xuXG4gIHJldHVybiB7IHdlYjMgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2ViM0Nvbm5lY3QocGFzc2VkTWFwU3RhdGVUb1Byb3BzLCBwYXNzZWRBY3Rpb25zKSB7XG4gIC8vIGFsbG93IHVzZXIgdG8gbWFwIGN1c3RvbSBtYXBcbiAgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBwcm9wcykge1xuICAgIHJldHVybiB7IC4uLnBhc3NlZE1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgcHJvcHMpLCB3ZWIzUmVkdXg6IHNlbGVjdEFjY291bnQoc3RhdGUpIH07XG4gIH1cblxuICBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4geyBkaXNwYXRjaCwgLi4uYmluZEFjdGlvbkNyZWF0b3JzKHBhc3NlZEFjdGlvbnMoZGlzcGF0Y2gpLCBkaXNwYXRjaCkgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCAuLi5jdXN0b21BY3Rpb25zIH0gPSBkaXNwYXRjaFByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZVByb3BzLFxuICAgICAgLi4ub3duUHJvcHMsXG4gICAgICAuLi5jdXN0b21BY3Rpb25zLFxuICAgICAgZGlzcGF0Y2gsXG4gICAgICB3ZWIzUmVkdXg6IGdlbmVyYXRlTmV0d29ya0FwaShzdGF0ZVByb3BzLndlYjNSZWR1eCwgZGlzcGF0Y2gpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9BY2NvdW50UHJvdmlkZXIvd2ViM0Nvbm5lY3QuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVsZ2Ugb24gMDYuMTAuMTYuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmlkIGZyb20gJ2dyaWQtc3R5bGVkJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9Db250YWluZXInO1xuaW1wb3J0IHsgVGFibGVTdHJpcGVkIH0gZnJvbSAnY29tcG9uZW50cy9MaXN0JztcbmltcG9ydCBIMiBmcm9tICdjb21wb25lbnRzL0gyJztcbmltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBMb2JieUl0ZW0gZnJvbSAnLi4vTG9iYnlJdGVtJztcbmltcG9ydCB7IHRhYmxlUmVjZWl2ZWQgfSBmcm9tICcuLi9UYWJsZS9hY3Rpb25zJztcbmltcG9ydCB7IG1ha2VTZWxlY3RMb2JieSB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGZldGNoVGFibGVzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGFibGVTZXJ2aWNlJztcbmltcG9ydCBXaXRoTG9hZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dpdGhMb2FkaW5nJztcblxuXG5jbGFzcyBMb2JieUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQgeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlR2V0VGFibGVzID0gdGhpcy5oYW5kbGVHZXRUYWJsZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUdldFRhYmxlcygpO1xuICB9XG5cbiAgaGFuZGxlR2V0VGFibGVzKCkge1xuICAgIGZldGNoVGFibGVzKCkudGhlbigodGFibGVzKSA9PiB7XG4gICAgICBpZiAodGFibGVzKSB7XG4gICAgICAgIHRhYmxlcy5mb3JFYWNoKCh0YWJsZUFkZHIpID0+IHRoaXMucHJvcHMudGFibGVSZWNlaXZlZCh0YWJsZUFkZHIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYmJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBpZiAobG9iYnkpIHtcbiAgICAgIGNvbnRlbnQgPSBsb2JieS5tYXAoKHRhYmxlQWRkciwgaSkgPT5cbiAgICAgICAgPExvYmJ5SXRlbSBrZXk9e2l9IHRhYmxlQWRkcj17dGFibGVBZGRyfSAvPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIMj4gVGFibGUgT3ZlcnZpZXcgPC9IMj5cblxuICAgICAgICA8VGFibGVTdHJpcGVkPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIGtleT1cIm51bWJlclwiPiAjIDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBrZXk9XCJibGluZFwiPiBCbGluZCA8L3RoPlxuICAgICAgICAgICAgICA8dGgga2V5PVwicGxheVwiPiBQbGF5ZXJzIDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBrZXk9XCJoYW5kXCI+IEhhbmQgPC90aD5cbiAgICAgICAgICAgICAgPHRoIGtleT1cImFjdG5cIj4gQWN0aW9uIDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAge2xvYmJ5ICYmIGxvYmJ5Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UYWJsZVN0cmlwZWQ+XG5cbiAgICAgICAgPFdpdGhMb2FkaW5nXG4gICAgICAgICAgaXNMb2FkaW5nPXtsb2JieS5sZW5ndGggPT09IDB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEdyaWQgeHM9ezEgLyA0fSA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnIH19PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUdldFRhYmxlc30gc2l6ZT1cIm1lZGl1bVwiIGljb249XCJmYSBmYS1yZWZyZXNoXCI+UkVGUkVTSDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIHhzPXszIC8gNH0+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIHRhYmxlUmVjZWl2ZWQ6ICh0YWJsZUFkZHIpID0+IGRpc3BhdGNoKHRhYmxlUmVjZWl2ZWQodGFibGVBZGRyKSksXG4gIH07XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3Rvcih7XG4gIGxvYmJ5OiBtYWtlU2VsZWN0TG9iYnkoKSxcbn0pO1xuXG5Mb2JieUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGxvYmJ5OiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHRhYmxlUmVjZWl2ZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9iYnlDb21wb25lbnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvTG9iYnkvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcblxuY29uc3Qgc2VsZWN0VGFibGVzID0gKHN0YXRlKSA9PiBzdGF0ZS5nZXQoJ3RhYmxlJyk7XG5cbmNvbnN0IG1ha2VTZWxlY3RMb2JieSA9ICgpID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RUYWJsZXMsXG4gICh0YWJsZVN0YXRlKSA9PiB7XG4gICAgY29uc3QgdGFibGVBZGRyZXNzZXMgPSBbXTtcbiAgICB0YWJsZVN0YXRlLmtleVNlcSgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleS5sZW5ndGggPiAyMCkge1xuICAgICAgICB0YWJsZUFkZHJlc3Nlcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhYmxlQWRkcmVzc2VzO1xuICB9XG4pO1xuXG5leHBvcnQge1xuICBtYWtlU2VsZWN0TG9iYnksXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvTG9iYnkvc2VsZWN0b3JzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbic7XG5cbmltcG9ydCB3ZWIzQ29ubmVjdCBmcm9tICcuLi9BY2NvdW50UHJvdmlkZXIvd2ViM0Nvbm5lY3QnO1xuaW1wb3J0IHsgbGluZXVwUmVjZWl2ZWQsIHVwZGF0ZVJlY2VpdmVkIH0gZnJvbSAnLi4vVGFibGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBmZXRjaFRhYmxlU3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90YWJsZVNlcnZpY2UnO1xuaW1wb3J0IHsgbWFrZVNlbGVjdFRhYmxlRGF0YSwgbWFrZVNlbGVjdFRhYmxlTGFzdEhhbmRJZCB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IEFCSV9UQUJMRSB9IGZyb20gJy4uLy4uL2FwcC5jb25maWcnO1xuXG5jb25zdCBUciA9IHN0eWxlZC50cmBcbiAgJjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG5gO1xuXG5jb25zdCBUZCA9IHN0eWxlZC50ZGBcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VjZWVlZjtcbmA7XG5cbmNvbnN0IEFERFJfRU1QVFkgPSAnMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJztcblxuY29uc3QgZ2V0VGFibGVEYXRhID0gKHRhYmxlLCBwcm9wcykgPT4ge1xuICBjb25zdCBsaW5ldXAgPSB0YWJsZS5nZXRMaW5ldXAuY2FsbFByb21pc2UoKTtcbiAgY29uc3Qgc2IgPSB0YWJsZS5zbWFsbEJsaW5kLmNhbGxQcm9taXNlKCk7XG4gIHJldHVybiBQcm9taXNlLmFsbChbbGluZXVwLCBzYl0pLnRoZW4oKHJzcCkgPT4ge1xuICAgIHByb3BzLmxpbmV1cFJlY2VpdmVkKHRhYmxlLmFkZHJlc3MsIHJzcFswXSwgcnNwWzFdKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0VGFibGVIYW5kID0gKHByb3BzKSA9PiBmZXRjaFRhYmxlU3RhdGUocHJvcHMudGFibGVBZGRyKS50aGVuKChyc3ApID0+IHByb3BzLnVwZGF0ZVJlY2VpdmVkKHByb3BzLnRhYmxlQWRkciwgcnNwKSk7XG5cbmNsYXNzIExvYmJ5SXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQgeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlVmlldyA9IHRoaXMuaGFuZGxlVmlldy5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2ViMyA9IHByb3BzLndlYjNSZWR1eC53ZWIzO1xuICAgIHRoaXMudGFibGUgPSB0aGlzLndlYjMuZXRoLmNvbnRyYWN0KEFCSV9UQUJMRSkuYXQocHJvcHMudGFibGVBZGRyKTtcbiAgICBnZXRUYWJsZURhdGEodGhpcy50YWJsZSwgcHJvcHMpO1xuICAgIGdldFRhYmxlSGFuZChwcm9wcyk7XG4gIH1cblxuICBoYW5kbGVWaWV3KCkge1xuICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goYC90YWJsZS8ke3RoaXMucHJvcHMudGFibGVBZGRyfS9oYW5kLyR7dGhpcy5wcm9wcy5sYXN0SGFuZElkfWApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kYXRhIHx8ICF0aGlzLnByb3BzLmRhdGEuc2VhdHMpIHtcbiAgICAgIHJldHVybiAoPHRyIC8+KTtcbiAgICB9XG4gICAgbGV0IHBsYXllcnMgPSAwO1xuICAgIHRoaXMucHJvcHMuZGF0YS5zZWF0cy5mb3JFYWNoKChzZWF0KSA9PiB7XG4gICAgICBpZiAoc2VhdCAmJiBzZWF0LmFkZHJlc3MgJiZcbiAgICAgICAgc2VhdC5hZGRyZXNzLmxlbmd0aCA+PSA0MCAmJiBzZWF0LmFkZHJlc3MgIT09IEFERFJfRU1QVFkpIHtcbiAgICAgICAgcGxheWVycyArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHRhID0gdGhpcy5wcm9wcy50YWJsZUFkZHIuc3Vic3RyaW5nKDIsIDgpO1xuICAgIHJldHVybiAoXG4gICAgICA8VHI+XG4gICAgICAgIDxUZCBrZXk9XCJ0YVwiPnt0YX08L1RkPlxuICAgICAgICA8VGQga2V5PVwic2JcIj57dGhpcy5wcm9wcy5kYXRhLnNtYWxsQmxpbmR9PC9UZD5cbiAgICAgICAgPFRkIGtleT1cIm5wXCI+e2Ake3BsYXllcnN9LyR7dGhpcy5wcm9wcy5kYXRhLnNlYXRzLmxlbmd0aH1gfTwvVGQ+XG4gICAgICAgIDxUZCBrZXk9XCJsaFwiPnt0aGlzLnByb3BzLmxhc3RIYW5kSWR9PC9UZD5cbiAgICAgICAgPFRkIGtleT1cImFjXCI+PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVZpZXd9IHNpemU9XCJtZWRpdW1cIiBpY29uPVwiZmEgZmEtZXllXCI+PC9CdXR0b24+PC9UZD5cbiAgICAgIDwvVHI+XG4gICAgKTtcbiAgfVxufVxuXG5Mb2JieUl0ZW0ucHJvcFR5cGVzID0ge1xuICB0YWJsZUFkZHI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIHdlYjNSZWR1eDogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgbGFzdEhhbmRJZDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgbGluZXVwUmVjZWl2ZWQ6ICh0YWJsZUFkZHIsIGxpbmV1cCwgc21hbGxCbGluZCkgPT4gKGxpbmV1cFJlY2VpdmVkKHRhYmxlQWRkciwgbGluZXVwLCBzbWFsbEJsaW5kKSksXG4gICAgdXBkYXRlUmVjZWl2ZWQ6ICh0YWJsZUFkZHIsIGhhbmQpID0+ICh1cGRhdGVSZWNlaXZlZCh0YWJsZUFkZHIsIGhhbmQpKSxcbiAgfTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgZGF0YTogbWFrZVNlbGVjdFRhYmxlRGF0YSgpLFxuICBsYXN0SGFuZElkOiBtYWtlU2VsZWN0VGFibGVMYXN0SGFuZElkKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2ViM0Nvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvYmJ5SXRlbSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9Mb2JieUl0ZW0vaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcblxuY29uc3QgdGFibGVTZWxlY3RvciA9IChzdGF0ZSwgcHJvcHMpID0+IChzdGF0ZSAmJiBwcm9wcykgPyBzdGF0ZS5nZXRJbihbJ3RhYmxlJywgcHJvcHMudGFibGVBZGRyXSkgOiBudWxsO1xuXG5jb25zdCBtYWtlU2VsZWN0VGFibGVEYXRhID0gKCkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHRhYmxlU2VsZWN0b3IsXG4gICh0YWJsZSkgPT4ge1xuICAgIGlmICghdGFibGUgfHwgIXRhYmxlLmdldCgnZGF0YScpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRhYmxlLmdldCgnZGF0YScpLnRvSlMoKTtcbiAgfVxuKTtcblxuY29uc3QgbWFrZVNlbGVjdFRhYmxlTGFzdEhhbmRJZCA9ICgpID0+IGNyZWF0ZVNlbGVjdG9yKFxuICB0YWJsZVNlbGVjdG9yLFxuICAodGFibGUpID0+IHtcbiAgICBpZiAoIXRhYmxlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IG1heCA9IDA7XG4gICAgdGFibGUua2V5U2VxKCkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKCFpc05hTihrKSkge1xuICAgICAgICBjb25zdCBoYW5kSWQgPSBwYXJzZUludChrLCAxMCk7XG4gICAgICAgIGlmIChoYW5kSWQgPiBtYXgpIHtcbiAgICAgICAgICBtYXggPSBoYW5kSWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobWF4ID4gMCkge1xuICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgcmV0dXJuIHRhYmxlLmdldEluKFsnZGF0YScsICdsYXN0SGFuZE5ldHRlZCddKSArIDE7XG4gIH1cbik7XG5cbmV4cG9ydCB7XG4gIG1ha2VTZWxlY3RUYWJsZURhdGEsXG4gIG1ha2VTZWxlY3RUYWJsZUxhc3RIYW5kSWQsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvTG9iYnlJdGVtL3NlbGVjdG9ycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=