webpackJsonp([0],{

/***/ "./app/components/ActionBar/ActionButton.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/ActionBar/styles.js");




var ActionButton = function ActionButton(props) {
  // disable button if actioBar is not active or if mode matches
  var disabled = !props.active || props.mode === props.newMode;
  var handleThisClick = function handleThisClick() {
    if (disabled) return;
    props.setActionBarBetSlider(false);
    props.setActionBarMode(props.newMode);
    props.handleClick();
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["f" /* ActionButtonWrapper */],
    {
      name: props.name,
      onClick: handleThisClick,
      disabled: disabled
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["g" /* ActionIndicator */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["h" /* ActionText */],
      null,
      props.text
    )
  );
};

ActionButton.propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
  mode: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  name: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  newMode: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  handleClick: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  setActionBarMode: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  setActionBarBetSlider: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  text: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/* harmony default export */ exports["a"] = ActionButton;

/***/ },

/***/ "./app/components/ActionBar/ControlBetRaise.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActionButton__ = __webpack_require__("./app/components/ActionBar/ActionButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ControlBlank__ = __webpack_require__("./app/components/ActionBar/ControlBlank.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var ControlBetRaise = function ControlBetRaise(props) {
  var amountToCall = props.amountToCall,
      handleAllIn = props.handleAllIn,
      handleBet = props.handleBet,
      minRaise = props.minRaise,
      myStack = props.myStack,
      sliderOpen = props.sliderOpen,
      setActionBarBetSlider = props.setActionBarBetSlider;

  if (sliderOpen) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActionButton__["a" /* default */], _extends({
      name: 'bet-button',
      text: 'CONFIRM',
      newMode: 'CONFIRM',
      handleClick: function handleClick() {
        return handleBet();
      }
    }, props));
  }
  if (amountToCall === 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActionButton__["a" /* default */], _extends({
      name: 'button-bet',
      text: 'BET',
      newMode: 'BET',
      handleClick: function handleClick() {
        return setActionBarBetSlider(true);
      }
    }, props));
  }
  if (myStack < amountToCall || myStack < minRaise) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActionButton__["a" /* default */], _extends({
      name: 'button-all-in',
      text: 'ALL-IN',
      newMode: 'ALL-IN',
      handleClick: function handleClick() {
        return handleAllIn();
      }
    }, props));
  }
  if (myStack > amountToCall) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActionButton__["a" /* default */], _extends({
      name: 'button-raise',
      text: 'RAISE',
      newMode: 'RAISE',
      handleClick: function handleClick() {
        return setActionBarBetSlider(true);
      }
    }, props));
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ControlBlank__["a" /* default */], props);
};
ControlBetRaise.propTypes = {
  amountToCall: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  handleBet: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  handleAllIn: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  minRaise: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  myStack: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  sliderOpen: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
  setActionBarBetSlider: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func
};

/* harmony default export */ exports["a"] = ControlBetRaise;

/***/ },

/***/ "./app/components/ActionBar/ControlBlank.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/ActionBar/styles.js");




/* harmony default export */ exports["a"] = function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["f" /* ActionButtonWrapper */],
    { name: 'button-blank', disabled: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["g" /* ActionIndicator */], null)
  );
};

/***/ },

/***/ "./app/components/ActionBar/ControlCheckCall.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActionButton__ = __webpack_require__("./app/components/ActionBar/ActionButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ControlBlank__ = __webpack_require__("./app/components/ActionBar/ControlBlank.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var ControlCheckCall = function ControlCheckCall(props) {
  var amountToCall = props.amountToCall,
      handleCall = props.handleCall,
      handleCheck = props.handleCheck,
      myStack = props.myStack;

  if (amountToCall > myStack) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ControlBlank__["a" /* default */], props);
  }
  if (amountToCall > 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActionButton__["a" /* default */], _extends({
      name: 'button-call',
      text: 'CALL',
      newMode: 'CALL',
      handleClick: function handleClick() {
        return handleCall();
      }
    }, props));
  }
  if (amountToCall === 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActionButton__["a" /* default */], _extends({
      name: 'button-check',
      text: 'CHECK',
      newMode: 'CHECK',
      handleClick: function handleClick() {
        return handleCheck();
      }
    }, props));
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ControlBlank__["a" /* default */], props);
};
ControlCheckCall.propTypes = {
  amountToCall: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  handleCall: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  handleCheck: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  myStack: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number
};

/* harmony default export */ exports["a"] = ControlCheckCall;

/***/ },

/***/ "./app/components/ActionBar/ControlFold.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActionButton__ = __webpack_require__("./app/components/ActionBar/ActionButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ControlBlank__ = __webpack_require__("./app/components/ActionBar/ControlBlank.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var ControlFold = function ControlFold(props) {
  var amountToCall = props.amountToCall,
      handleFold = props.handleFold;

  if (amountToCall > 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ActionButton__["a" /* default */], _extends({
      name: 'button-fold',
      text: 'FOLD',
      newMode: 'FOLD',
      handleClick: function handleClick() {
        return handleFold();
      }
    }, props));
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ControlBlank__["a" /* default */], props);
};
ControlFold.propTypes = {
  amountToCall: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  handleFold: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func
};

/* harmony default export */ exports["a"] = ControlFold;

/***/ },

/***/ "./app/components/ActionBar/FlagAmountBet.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/ActionBar/styles.js");




var FlagAmountBet = function FlagAmountBet(_ref) {
  var amount = _ref.amount,
      amountToCall = _ref.amountToCall,
      sliderOpen = _ref.sliderOpen;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["j" /* FlagBet */],
    { sliderOpen: sliderOpen },
    amountToCall !== 0 ? 'RAISE ' + amount : 'BET ' + amount
  );
};
FlagAmountBet.propTypes = {
  amount: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  amountToCall: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  sliderOpen: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool
};

/* harmony default export */ exports["a"] = FlagAmountBet;

/***/ },

/***/ "./app/components/ActionBar/FlagAmountCall.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/ActionBar/styles.js");




var FlagAmountCall = function FlagAmountCall(_ref) {
  var amountToCall = _ref.amountToCall,
      sliderOpen = _ref.sliderOpen,
      myStack = _ref.myStack;

  // hide flag if only option is to 'check' or 'all-in'
  if (amountToCall === 0 || amountToCall > myStack) {
    return null;
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["k" /* FlagCall */],
    { sliderOpen: sliderOpen },
    amountToCall
  );
};
FlagAmountCall.propTypes = {
  amountToCall: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  myStack: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  sliderOpen: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool
};

/* harmony default export */ exports["a"] = FlagAmountCall;

/***/ },

/***/ "./app/components/ActionBar/FlagButton.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/ActionBar/styles.js");




var FlagButton = function FlagButton(_ref) {
  var type = _ref.type,
      sliderOpen = _ref.sliderOpen;

  var textType = function textType() {
    if (type === 'quarter') return '1/4';
    if (type === 'half') return '1/2';
    if (type === 'pot') return 'POT';
    return null;
  };
  // only display if slider is Open
  if (sliderOpen) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["i" /* FlagButtonWrapper */],
      { name: 'flag-button' },
      textType()
    );
  }
  return null;
};
FlagButton.propTypes = {
  type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  sliderOpen: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool
};

/* harmony default export */ exports["a"] = FlagButton;

/***/ },

/***/ "./app/components/ActionBar/Slider.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_slider_lib_Slider__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_slider_lib_Slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rc_slider_lib_Slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_slider_assets_index_css__ = __webpack_require__("./node_modules/rc-slider/assets/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_slider_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rc_slider_assets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles__ = __webpack_require__("./app/components/ActionBar/styles.js");





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Slider: {
    displayName: 'Slider'
  }
};

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/components/ActionBar/Slider.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/components/ActionBar/Slider.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2(_UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}







var styles = {
  handle: {
    position: 'absolute',
    width: '34px',
    height: '50px',
    marginLeft: '-12px',
    marginTop: '-20px',
    cursor: 'pointer',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    border: 'none',
    backgroundColor: '#999'
  },
  rail: {
    backgroundColor: '#333',
    height: '6px'
  },
  track: {
    backgroundColor: '#333',
    height: '6px'
  }
};

var Slider = _wrapComponent('Slider')(function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.state = {
      value: 0
    };
    _this.onSliderChange = _this.onSliderChange.bind(_this);
    _this.onSliderUpdate = _this.onSliderUpdate.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ value: this.props.minRaise });
      this.props.updateAmount(this.props.minRaise);
    }
  }, {
    key: 'onSliderChange',
    value: function onSliderChange(value) {
      this.setState({ value: value });
      this.props.updateAmount(value);
    }
  }, {
    key: 'onSliderUpdate',
    value: function onSliderUpdate(value) {
      this.props.updateAmount(value);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6__styles__["e" /* SliderWrapper */],
        { name: 'slider-wrapper' },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_slider_lib_Slider___default.a, {
          min: this.props.minRaise,
          max: this.props.myStack,
          value: this.state.value,
          onChange: this.onSliderChange,
          onAfterChange: this.onSliderUpdate,
          handleStyle: styles.handle,
          railStyle: styles.rail,
          trackStyle: styles.track
        })
      );
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

Slider.propTypes = {
  updateAmount: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.func,
  minRaise: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number,
  myStack: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number
};

/* harmony default export */ exports["a"] = Slider;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ "./app/components/ActionBar/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FlagAmountBet__ = __webpack_require__("./app/components/ActionBar/FlagAmountBet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FlagAmountCall__ = __webpack_require__("./app/components/ActionBar/FlagAmountCall.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FlagButton__ = __webpack_require__("./app/components/ActionBar/FlagButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ControlBetRaise__ = __webpack_require__("./app/components/ActionBar/ControlBetRaise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ControlCheckCall__ = __webpack_require__("./app/components/ActionBar/ControlCheckCall.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ControlFold__ = __webpack_require__("./app/components/ActionBar/ControlFold.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Slider__ = __webpack_require__("./app/components/ActionBar/Slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles__ = __webpack_require__("./app/components/ActionBar/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by helge on 24.08.16.
 */












var ActionBar = function ActionBar(props) {
  var active = props.active,
      sliderOpen = props.sliderOpen,
      visible = props.visible;

  if (visible) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_8__styles__["a" /* ActionBarWrapper */],
      { active: active, name: 'action-bar-wrapper' },
      sliderOpen ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__styles__["b" /* FlagContainer */],
        { active: active, name: 'flag-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FlagAmountCall__["a" /* default */], props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FlagAmountBet__["a" /* default */], props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FlagButton__["a" /* default */], _extends({ type: 'quarter' }, props)),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FlagButton__["a" /* default */], _extends({ type: 'half' }, props)),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FlagButton__["a" /* default */], _extends({ type: 'pot' }, props))
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__styles__["b" /* FlagContainer */],
        { active: active, name: 'flag-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FlagAmountCall__["a" /* default */], props)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__styles__["c" /* ControlPanel */],
        { name: 'control-panel-visible' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__styles__["d" /* ControlWrapper */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ControlFold__["a" /* default */], props),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ControlCheckCall__["a" /* default */], props),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ControlBetRaise__["a" /* default */], props),
          sliderOpen ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Slider__["a" /* default */], props) : null
        )
      )
    );
  }
  return null;
};

ActionBar.propTypes = {
  visible: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool.isRequired,
  active: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool.isRequired,
  sliderOpen: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool.isRequired
};

/* harmony default export */ exports["a"] = ActionBar;

/***/ },

/***/ "./app/components/ActionBar/styles.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ActionBarWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ControlPanel; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return ControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return ActionButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return ActionIndicator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return ActionText; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return SliderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return FlagContainer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return FlagButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return FlagBet; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return FlagCall; });
var _templateObject = _taggedTemplateLiteral(['\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n  &:disabled{\n    cursor: default;\n  }\n'], ['\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n  &:disabled{\n    cursor: default;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n  display: flex;\n  flex-direction: column;\n  opacity: ', ';\n'], ['\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n  display: flex;\n  flex-direction: column;\n  opacity: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  padding-top: 4px;\n  padding-left: 4px;\n  padding-right: 4px;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  background-color: #999;\n'], ['\n  display: flex;\n  padding-top: 4px;\n  padding-left: 4px;\n  padding-right: 4px;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  background-color: #999;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding-top: 4px;\n  padding-left: 4px;\n  padding-right: 4px;\n  background-color: #666;\n'], ['\n  display: flex;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding-top: 4px;\n  padding-left: 4px;\n  padding-right: 4px;\n  background-color: #666;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  height: 50px;\n  min-width: 100px;\n  margin-left: 6px;\n  background-color: #999;\n  color: white;\n  font-weight: 400;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  &:first-child {\n    margin-left: 0;\n    border-top-left-radius: 8px;\n  }\n  &:nth-child(3) {\n    border-top-right-radius: 8px;\n  }\n  &:active {\n    background-color: #666;\n    color: #DDD;\n  }\n  &:disabled {\n    background-color: #777;\n    color: #DDD;\n  }\n'], ['\n  display: flex;\n  height: 50px;\n  min-width: 100px;\n  margin-left: 6px;\n  background-color: #999;\n  color: white;\n  font-weight: 400;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  &:first-child {\n    margin-left: 0;\n    border-top-left-radius: 8px;\n  }\n  &:nth-child(3) {\n    border-top-right-radius: 8px;\n  }\n  &:active {\n    background-color: #666;\n    color: #DDD;\n  }\n  &:disabled {\n    background-color: #777;\n    color: #DDD;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  margin-left: 10px;\n  margin-top: 10px;\n  height: 40px;\n  width: 8px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  background-color: #444;\n'], ['\n  margin-left: 10px;\n  margin-top: 10px;\n  height: 40px;\n  width: 8px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  background-color: #444;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  align-self: center;\n  margin-left: 8px;\n'], ['\n  align-self: center;\n  margin-left: 8px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  align-self: center;\n  width: 200px;\n  height: 20px;\n  margin-left: 24px;\n  margin-right: 24px;\n'], ['\n  align-self: center;\n  width: 200px;\n  height: 20px;\n  margin-left: 24px;\n  margin-right: 24px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 12px;\n  opacity: ', ';\n'], ['\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 12px;\n  opacity: ', ';\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  margin-left: 4px;\n  padding: 5px;\n  padding-left: 18px;\n  padding-right: 18px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom: solid 2px #666;\n  background-color: #999;\n'], ['\n  margin-left: 4px;\n  padding: 5px;\n  padding-left: 18px;\n  padding-right: 18px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom: solid 2px #666;\n  background-color: #999;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  margin-right: 10px;\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 20px;\n  width: 142px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  background-color: #DDD;\n  color: #333;\n'], ['\n  margin-right: 10px;\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 20px;\n  width: 142px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  background-color: #DDD;\n  color: #333;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  ', ';\n  padding-left: 6px;\n  padding-right: 6px;\n  text-align: center;\n  min-width: 80px;\n  padding: 5px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  background-color: #DDD;\n  color: #333;\n'], ['\n  ', ';\n  padding-left: 6px;\n  padding-right: 6px;\n  text-align: center;\n  min-width: 80px;\n  padding: 5px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  background-color: #DDD;\n  color: #333;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
* Created by jzobro 20170531
*/


var Button = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].button(_templateObject);

var ActionBarWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject2, function (props) {
  return props.active ? 1 : 0.3;
});

var ControlPanel = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject3);

var ControlWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject4);

var ActionButtonWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(Button)(_templateObject5);

var ActionIndicator = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject6);

var ActionText = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject7);

var SliderWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject8);

var FlagContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject9, function (props) {
  return props.active ? 1 : 0;
});

var FlagButtonWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(Button)(_templateObject10);

var FlagBet = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject11);

var FlagCall = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject12, function (props) {
  if (props.sliderOpen) {
    return '\n        margin-right: 18px;\n      ';
  }
  return '\n      margin: 0 auto;\n    ';
});

/***/ },

/***/ "./app/components/Card/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ab_vector_cards__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ab_vector_cards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ab_vector_cards__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Seat_styles__ = __webpack_require__("./app/components/Seat/styles.js");
/**
 * Created by helge on 24.08.16.
 */





var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];

function Card(props) {
  var vc = new __WEBPACK_IMPORTED_MODULE_1_ab_vector_cards__["VectorCards"]();
  var link = void 0;
  var suit = suits[Math.floor(props.cardNumber / 13)];
  var value = values[props.cardNumber % 13];

  // Note: meaning of card numbers
  //  * -1 stands for back side of cards,
  //  * null stands for no card
  //  * > 0  stands for normal cards
  if (!props.folded && props.cardNumber === -1) {
    link = vc.getBackData(props.size, '#32B7D3', '#217C8F');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__Seat_styles__["a" /* CardBack */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Seat_styles__["b" /* CardStyle */], {
        key: suit + value,
        src: link,
        alt: ''
      })
    );
  }
  if (!props.folded && props.cardNumber !== null) {
    link = vc.getCardData(props.size, suit, value);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__Seat_styles__["c" /* CardFront */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Seat_styles__["b" /* CardStyle */], {
        key: suit + value,
        src: link,
        alt: ''
      })
    );
  }
  return null;
}

Card.propTypes = {
  cardNumber: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  size: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  folded: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool
};

/* harmony default export */ exports["a"] = Card;

/***/ },

/***/ "./app/components/Chat/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_variables__ = __webpack_require__("./app/variables.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChatPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ChatContainer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ChatArea; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return ChatBox; });
var _templateObject = _taggedTemplateLiteral(['\n  padding: 10px;\n  font-style: italic;\n  color: ', ';\n'], ['\n  padding: 10px;\n  font-style: italic;\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: calc(100% - 80px);\n'], ['\n  height: calc(100% - 80px);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: calc(100% - 40px);\n'], ['\n  width: 100%;\n  height: calc(100% - 40px);\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 40px;\n'], ['\n  width: 100%;\n  height: 40px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ChatPlaceholder = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject, __WEBPACK_IMPORTED_MODULE_1_variables__["c" /* baseColor */]);

var ChatContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject2);

var ChatArea = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject3);

var ChatBox = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject4);

/***/ },

/***/ "./app/components/Curtain/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_variables__ = __webpack_require__("./app/variables.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CurtainWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CurtainToggler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return CurtainHeader; });
var _templateObject = _taggedTemplateLiteral(['\n  width: ', ';\n  background-color: #5D5D5D;\n  position: absolute;\n  top: 0px;\n  bottom: 0;\n  left: ', ';\n  z-index: 6;\n  padding: 20px;\n  transition: .15s ease left;\n  \n  @media (min-width: ', ') {\n    left: 0px;\n  }\n'], ['\n  width: ', ';\n  background-color: #5D5D5D;\n  position: absolute;\n  top: 0px;\n  bottom: 0;\n  left: ', ';\n  z-index: 6;\n  padding: 20px;\n  transition: .15s ease left;\n  \n  @media (min-width: ', ') {\n    left: 0px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  cursor: pointer;\n\n  ', '\n  \n  &:before {\n    content: \'\';\n    display: block;\n    position: absolute;\n    border: 35px solid transparent;\n    border-top-width: 25px;\n    border-bottom-width: 25px;\n    ', '\n  }\n    \n  &:after {\n    position: absolute;\n    display: block;\n    white-space: nowrap;\n    font-size: large;\n    color: ', ';\n    ', '\n  }\n  \n  @media (min-width: ', ') {\n    display: none;\n  }\n'], ['\n  position: absolute;\n  cursor: pointer;\n\n  ', '\n  \n  &:before {\n    content: \'\';\n    display: block;\n    position: absolute;\n    border: 35px solid transparent;\n    border-top-width: 25px;\n    border-bottom-width: 25px;\n    ', '\n  }\n    \n  &:after {\n    position: absolute;\n    display: block;\n    white-space: nowrap;\n    font-size: large;\n    color: ', ';\n    ', '\n  }\n  \n  @media (min-width: ', ') {\n    display: none;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n'], ['\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 60px;\n  height: 60px;\n  padding-right: 20px;\n  box-sizing: content-box;\n'], ['\n  width: 60px;\n  height: 60px;\n  padding-right: 20px;\n  box-sizing: content-box;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 20px;\n  font-weight: bold;\n'], ['\n  font-size: 20px;\n  font-weight: bold;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var CurtainWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject, __WEBPACK_IMPORTED_MODULE_2_variables__["j" /* curtainWidth */], function (props) {
  return props.isOpen ? '0' : '-' + __WEBPACK_IMPORTED_MODULE_2_variables__["j" /* curtainWidth */];
}, __WEBPACK_IMPORTED_MODULE_2_variables__["i" /* curtainStickyWidth */]);

var CurtainToggler = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject2, function (props) {
  return props.isOpen ? '\n    left : ' + __WEBPACK_IMPORTED_MODULE_2_variables__["j" /* curtainWidth */] + ';\n    width: 100vh;\n    top: 0;\n    height: 100vh;\n  ' : '\n    top: 40px;\n    right: 0px;\n  ';
}, function (props) {
  return props.isOpen ? '\n      border-right-color: ' + __WEBPACK_IMPORTED_MODULE_2_variables__["b" /* black */] + ';\n      left: -70px;\n      top: 50px;\n    ' : '\n      border-left-color: ' + __WEBPACK_IMPORTED_MODULE_2_variables__["k" /* gray */] + ';\n    ';
}, __WEBPACK_IMPORTED_MODULE_2_variables__["a" /* white */], function (props) {
  return props.isOpen ? '\n      content: \'\';\n      left: 20px;\n      top: 63px;\n    ' : '\n      content: \'\uD83D\uDCAC \\00a0 \\00a0 Chat\';\n      left: 40px;\n      top: 13px;\n    ';
}, __WEBPACK_IMPORTED_MODULE_2_variables__["i" /* curtainStickyWidth */]);

var CurtainHeaderContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject3);

var CurtainLogoContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject4);

var CurtainLogo = function CurtainLogo() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    CurtainLogoContainer,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'svg',
      { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', viewBox: '0 0 1000 1000' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M500,10C367,173.8,317.1,228.9,282.6,268.6C215,349.5,31.5,486.9,31.5,634.4c0,169.7,181,192,234.3,192c53.3,0,208.9-34.3,208.9-103.1c0,64.7-40.4,257.1-105.1,266.7c121.2,0,272.8,0,272.8,0s-101-84.9-101-266.7c0,56.4,145.5,101,222.3,101s205-66.7,205-192c0-138.2-137.3-259.3-247.4-361.7C605.5,163.2,500,10,500,10z' })
    )
  );
};

var CurtainNameContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject5);

var ContainerName = function ContainerName() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    CurtainNameContainer,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { style: { color: __WEBPACK_IMPORTED_MODULE_2_variables__["c" /* baseColor */] } },
      'ACE'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { style: { color: __WEBPACK_IMPORTED_MODULE_2_variables__["a" /* white */] } },
      'BUSTERS'
    )
  );
};

var CurtainHeader = function CurtainHeader() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    CurtainHeaderContainer,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CurtainLogo, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContainerName, null)
  );
};

/***/ },

/***/ "./app/components/Form/FormField.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormGroup__ = __webpack_require__("./app/components/Form/FormGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Input__ = __webpack_require__("./app/components/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Label__ = __webpack_require__("./app/components/Label/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_FormMessages__ = __webpack_require__("./app/components/FormMessages/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var FormField = function FormField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__FormGroup__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__Label__["a" /* default */],
      { htmlFor: input.name },
      label
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Input__["a" /* default */], _extends({}, input, { type: type })),
    touched && error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_FormMessages__["a" /* ErrorMessage */], { error: error }),
    touched && warning && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_FormMessages__["b" /* WarningMessage */], { error: warning })
  );
};

FormField.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  label: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node,
  type: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  meta: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
};

/* harmony default export */ exports["a"] = FormField;

/***/ },

/***/ "./app/components/Form/FormGroup.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin-bottom: 15px;\n  vertical-align: middle;\n  width: 100%;\n'], ['\n  display: inline-block;\n  margin-bottom: 15px;\n  vertical-align: middle;\n  width: 100%;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by helge on 26.02.17.
 */



var FormGroup = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject);

/* harmony default export */ exports["a"] = FormGroup;

/***/ },

/***/ "./app/components/FormMessages/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__("./app/variables.js");
/* harmony export (immutable) */ exports["a"] = ErrorMessage;
/* harmony export (immutable) */ exports["b"] = WarningMessage;
var _templateObject = _taggedTemplateLiteral(['\n  margin: 0;\n  padding: 0.5em 1em;\n  font-size: 0.8em;\n  font-family: $text-font-stack;\n  float: left;\n  color: ', ';\n  width: 100%;\n'], ['\n  margin: 0;\n  padding: 0.5em 1em;\n  font-size: 0.8em;\n  font-family: $text-font-stack;\n  float: left;\n  color: ', ';\n  width: 100%;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var FormError = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].span(_templateObject, __WEBPACK_IMPORTED_MODULE_2__variables__["c" /* baseColor */]);

var FormWarning = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].span(_templateObject, __WEBPACK_IMPORTED_MODULE_2__variables__["b" /* black */]);

function ErrorMessage(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    FormError,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'strong',
      null,
      props.error
    )
  );
}

ErrorMessage.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

function WarningMessage(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    FormWarning,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'strong',
      null,
      props.warning
    )
  );
}

WarningMessage.propTypes = {
  warning: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/***/ },

/***/ "./app/components/H1/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
var _templateObject = _taggedTemplateLiteral(['\n  font-size: 2em;\n  margin-bottom: 1.5em;\n  text-align: center;\n'], ['\n  font-size: 2em;\n  margin-bottom: 1.5em;\n  text-align: center;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var H1 = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].h1(_templateObject);

/* harmony default export */ exports["a"] = H1;

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

/***/ "./app/components/Input/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables__ = __webpack_require__("./app/variables.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CheckBox; });
var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  -webkit-box-shadow: 0 0 0px 1000px white inset !important\n  padding: 10px;\n  border: solid 1px gainsboro;\n  -webkit-transition: box-shadow 0.3s, border 0.3s;\n  -moz-transition: box-shadow 0.3s, border 0.3s;\n  -o-transition: box-shadow 0.3s, border 0.3s;\n  transition: box-shadow 0.3s, border 0.3s;\n  display: block;\n  margin: 0;\n  color: black;\n  width: 100%;\n  font-family: "Open Sans", sans-serif;\n  font-size: 18px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  -webkit-border-radius: none;\n  -moz-border-radius: none;\n  -ms-border-radius: none;\n  -o-border-radius: none;\n  border-radius: 4px;\n'], ['\n  ', '\n  -webkit-box-shadow: 0 0 0px 1000px white inset !important\n  padding: 10px;\n  border: solid 1px gainsboro;\n  -webkit-transition: box-shadow 0.3s, border 0.3s;\n  -moz-transition: box-shadow 0.3s, border 0.3s;\n  -o-transition: box-shadow 0.3s, border 0.3s;\n  transition: box-shadow 0.3s, border 0.3s;\n  display: block;\n  margin: 0;\n  color: black;\n  width: 100%;\n  font-family: "Open Sans", sans-serif;\n  font-size: 18px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  -webkit-border-radius: none;\n  -moz-border-radius: none;\n  -ms-border-radius: none;\n  -o-border-radius: none;\n  border-radius: 4px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin-top: 0.7em;\n  margin-right: 1em;\n  padding-right: 5px;\n  float: left;\n'], ['\n  display: inline-block;\n  margin-top: 0.7em;\n  margin-right: 1em;\n  padding-right: 5px;\n  float: left;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by helge on 26.02.17.
 */





var InputStyled = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].input(_templateObject, function (props) {
  if (props.touched && !props.error) {
    return 'border: 2px solid ' + __WEBPACK_IMPORTED_MODULE_1__variables__["g" /* green */];
  }
  return 'border: 1px solid #ccc';
});

var CheckBox = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].input(_templateObject2);

/* harmony default export */ exports["a"] = InputStyled;

/***/ },

/***/ "./app/components/Label/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  float:left;\n  line-height: 2em;\n'], ['\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  float:left;\n  line-height: 2em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by helge on 26.02.17.
 */



var Label = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject);

/* harmony default export */ exports["a"] = Label;

/***/ },

/***/ "./app/components/Pot/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./app/app.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("./app/variables.js");
/* unused harmony export Chip */
var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  box-sizing: border-box;\n  left: 0;\n  bottom: ', ';\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  border: .1em dashed white;\n  transition: all .1s ease;\n  transform: perspective(200px) rotateX(55deg) rotateZ(-40deg);\n  box-shadow:\n    -1px 1px 0px #555,\n    -2px 2px 0px #555,\n    -3px 3px 0px #555,\n    -4px 4px 0px #555,\n    -2px 2px 2px #555;\n  font-size: 1.2em;\n  backface-visibility: hidden;\n  background: ', ';\n'], ['\n  position: absolute;\n  box-sizing: border-box;\n  left: 0;\n  bottom: ', ';\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  border: .1em dashed white;\n  transition: all .1s ease;\n  transform: perspective(200px) rotateX(55deg) rotateZ(-40deg);\n  box-shadow:\n    -1px 1px 0px #555,\n    -2px 2px 0px #555,\n    -3px 3px 0px #555,\n    -4px 4px 0px #555,\n    -2px 2px 2px #555;\n  font-size: 1.2em;\n  backface-visibility: hidden;\n  background: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  float: left;\n  position: relative;\n  margin-right: 0.5em;\n  width: 1em;\n  height: 2em;\n'], ['\n  float: left;\n  position: relative;\n  margin-right: 0.5em;\n  width: 1em;\n  height: 2em;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  color: ', ';\n'], ['\n  position: absolute;\n  color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: ', ';\n  left: ', ';\n'], ['\n  position: absolute;\n  top: ', ';\n  left: ', ';\n']);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Copyright (c) 2017 Acebusters
 * Use of this source code is governed by an ISC
 * license that can be found in the LICENSE file.
*/






var Chip = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject, function (props) {
  return 0.3 * props.index + 'em';
}, function (props) {
  return props.color;
});

var ChipStack = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject2);

var Amount = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject3, __WEBPACK_IMPORTED_MODULE_3__variables__["a" /* white */]);

var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject4, function (props) {
  return props.top;
}, function (props) {
  return props.left;
});

var createChipStacks = function createChipStacks(chipVals, potSize) {
  // Note: chipValue format is [value, color]
  var ret = chipVals.reduce(function (prev, chipValue) {
    var stacks = prev.stacks,
        remain = prev.remain;

    var value = chipValue[0];

    if (remain <= 0 || remain < value) return prev;

    return {
      remain: remain % value,
      stacks: [].concat(_toConsumableArray(stacks), [{
        value: chipValue[0],
        color: chipValue[1],
        count: Math.floor(remain / value)
      }])
    };
  }, { stacks: [], remain: potSize });

  return ret.stacks;
};

var range = function range(start, end) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var ret = [];

  for (var i = start; i < end; i += step) {
    ret.push(i);
  }

  return ret;
};

function Pot(props) {
  var chipStacks = createChipStacks(__WEBPACK_IMPORTED_MODULE_2__app_config__["l" /* chipValues */], props.potSize);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    { top: props.top, left: props.left },
    chipStacks.map(function (stack, i) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        ChipStack,
        { index: i, key: i },
        range(0, stack.count).map(function (j) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Chip, { color: stack.color, index: j, key: j });
        })
      );
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Amount,
      null,
      props.potSize
    )
  );
}

Pot.propTypes = {
  potSize: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  top: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  left: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/* harmony default export */ exports["a"] = Pot;

/***/ },

/***/ "./app/components/RadialProgress/enhancer.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by helge on 22.04.17.
 */

var enhancer = function enhancer(WrappedComponent) {
  return function (_WrappedComponent) {
    _inherits(Progress, _WrappedComponent);

    function Progress() {
      _classCallCheck(this, Progress);

      return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
    }

    _createClass(Progress, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var now = Date.now();
        this.path.style.transitionDuration = '0.3s, 0.3s';
        if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
          this.path.style.transitionDuration = '0s, 0s';
        }
        this.prevTimeStamp = Date.now();
      }
    }, {
      key: 'render',
      value: function render() {
        return _get(Progress.prototype.__proto__ || Object.getPrototypeOf(Progress.prototype), 'render', this).call(this);
      }
    }]);

    return Progress;
  }(WrappedComponent);
};

/* harmony default export */ exports["a"] = enhancer;

/***/ },

/***/ "./app/components/RadialProgress/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enhancer__ = __webpack_require__("./app/components/RadialProgress/enhancer.js");





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  border-radius: 50%;\n  background-image: url(', ');\n'], ['\n  position: relative;\n  border-radius: 50%;\n  background-image: url(', ');\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n'], ['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _components = {
  Radial: {
    displayName: 'Radial'
  }
};

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/components/RadialProgress/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/components/RadialProgress/index.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2(_UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

/* eslint react/prop-types: 0 */




var Wrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject, function (props) {
  return props.bgImg;
});

var Label = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject2);

var Radial = _wrapComponent('Radial')(function (_Component) {
  _inherits(Radial, _Component);

  function Radial() {
    _classCallCheck(this, Radial);

    return _possibleConstructorReturn(this, (Radial.__proto__ || Object.getPrototypeOf(Radial)).apply(this, arguments));
  }

  _createClass(Radial, [{
    key: 'getPathStyles',
    value: function getPathStyles() {
      var _props = this.props,
          percent = _props.percent,
          strokeWidth = _props.strokeWidth,
          _props$gapDegree = _props.gapDegree,
          gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
          gapPosition = _props.gapPosition;

      var radius = 50 - strokeWidth / 2;
      var beginPositionX = 0;
      var beginPositionY = -radius;
      var endPositionX = 0;
      var endPositionY = -2 * radius;
      switch (gapPosition) {
        case 'left':
          beginPositionX = -radius;
          beginPositionY = 0;
          endPositionX = 2 * radius;
          endPositionY = 0;
          break;
        case 'right':
          beginPositionX = radius;
          beginPositionY = 0;
          endPositionX = -2 * radius;
          endPositionY = 0;
          break;
        case 'bottom':
          beginPositionY = radius;
          endPositionY = 2 * radius;
          break;
        default:
      }
      var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
      var len = Math.PI * 2 * radius;
      var trailPathStyle = {
        strokeDasharray: len - gapDegree + 'px ' + len + 'px',
        strokeDashoffset: '-' + gapDegree / 2 + 'px',
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
      };
      var strokePathStyle = {
        strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
        strokeDashoffset: '-' + gapDegree / 2 + 'px',
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
      };
      return { pathString: pathString, trailPathStyle: trailPathStyle, strokePathStyle: strokePathStyle };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          strokeWidth = _props2.strokeWidth,
          trailWidth = _props2.trailWidth,
          strokeColor = _props2.strokeColor,
          trailColor = _props2.trailColor,
          strokeLinecap = _props2.strokeLinecap,
          style = _props2.style,
          bgImg = _props2.bgImg,
          className = _props2.className,
          restProps = _objectWithoutProperties(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'strokeColor', 'trailColor', 'strokeLinecap', 'style', 'bgImg', 'className']);

      var _getPathStyles = this.getPathStyles(),
          pathString = _getPathStyles.pathString,
          trailPathStyle = _getPathStyles.trailPathStyle,
          strokePathStyle = _getPathStyles.strokePathStyle;

      delete restProps.percent;
      delete restProps.gapDegree;
      delete restProps.gapPosition;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        Wrapper,
        { bgImg: bgImg },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          Label,
          null,
          ' ',
          this.props.label,
          ' '
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'svg',
          _extends({
            className: prefixCls + '-circle ' + className,
            viewBox: '0 0 100 100',
            style: style
          }, restProps),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', {
            className: prefixCls + '-circle-trail',
            d: pathString,
            stroke: trailColor,
            strokeWidth: trailWidth || strokeWidth,
            fillOpacity: '0',
            style: trailPathStyle
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('path', {
            className: prefixCls + '-circle-path',
            d: pathString,
            strokeLinecap: strokeLinecap,
            stroke: strokeColor,
            strokeWidth: strokeWidth,
            fillOpacity: '0',
            ref: function ref(path) {
              _this2.path = path;
            },
            style: strokePathStyle
          })
        )
      );
    }
  }]);

  return Radial;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

Radial.PropTypes = {
  className: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.string,
  percent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.oneOfType([__WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number, __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.string]),
  prefixCls: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.string,
  strokeColor: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.string,
  strokeLinecap: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.oneOf(['round', 'square']),
  strokeWidth: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.oneOfType([__WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number, __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.string]),
  style: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.object,
  trailColor: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.string,
  trailWidth: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.oneOfType([__WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number, __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.string]),
  gapPosition: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

Radial.defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1,
  gapPosition: 'top'
};

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__enhancer__["a" /* default */])(Radial);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ "./app/components/Seat/ButtonInvite.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/Seat/styles.js");
/**
* Created by jzobro 20170519
*/



var ButtonInvite = function ButtonInvite(_ref) {
  var coords = _ref.coords,
      onClickHandler = _ref.onClickHandler;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["d" /* SeatWrapper */],
    { className: 'seat-wrapper', coords: coords },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["v" /* ButtonWrapper */],
      { className: 'button-wrapper', onClick: onClickHandler },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__styles__["w" /* ButtonStyle */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["x" /* ButtonIcon */], { className: 'fa fa-envelope', 'aria-hidden': 'true' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__styles__["y" /* ButtonText */],
          null,
          'Invite'
        )
      )
    )
  );
};
ButtonInvite.propTypes = {
  onClickHandler: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  coords: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array
};

/* harmony default export */ exports["a"] = ButtonInvite;

/***/ },

/***/ "./app/components/Seat/ButtonJoinSeat.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/Seat/styles.js");
/**
* Created by jzobro 20170518
*/



var ButtonJoinSeat = function ButtonJoinSeat(_ref) {
  var coords = _ref.coords,
      onClickHandler = _ref.onClickHandler,
      pending = _ref.pending;

  var iconType = pending ? 'fa fa-refresh fa-spin' : 'fa fa-plus';
  var message = pending ? 'Pending' : 'Join';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["d" /* SeatWrapper */],
    { coords: coords },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["v" /* ButtonWrapper */],
      { onClick: onClickHandler },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__styles__["w" /* ButtonStyle */],
        { pending: pending },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["x" /* ButtonIcon */], { className: iconType, 'aria-hidden': 'true' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__styles__["y" /* ButtonText */],
          null,
          message
        )
      )
    )
  );
};
ButtonJoinSeat.propTypes = {
  coords: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  onClickHandler: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  pending: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool
};

/* harmony default export */ exports["a"] = ButtonJoinSeat;

/***/ },

/***/ "./app/components/Seat/CardsComponent.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Card__ = __webpack_require__("./app/components/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__("./app/components/Seat/styles.js");
/**
* Created by jzobro 20170524
*/






var cardSize = 48;

var CardsComponent = function CardsComponent(_ref) {
  var holeCards = _ref.holeCards,
      folded = _ref.folded;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__styles__["u" /* CardContainer */],
    {
      className: 'card-container',
      empty: holeCards[0] === null || folded
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], {
      cardNumber: holeCards[0],
      folded: folded,
      size: cardSize
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], {
      cardNumber: holeCards[1],
      folded: folded,
      size: cardSize
    })
  );
};
CardsComponent.propTypes = {
  folded: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
  holeCards: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array };

/* harmony default export */ exports["a"] = CardsComponent;

/***/ },

/***/ "./app/components/Seat/Seat.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardsComponent__ = __webpack_require__("./app/components/Seat/CardsComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SeatInfo__ = __webpack_require__("./app/components/Seat/SeatInfo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StatusAction__ = __webpack_require__("./app/components/Seat/StatusAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("./app/app.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles__ = __webpack_require__("./app/components/Seat/styles.js");
/**
* Created by jzobro 20170520
*/









var Seat = function Seat(props) {
  var coords = props.coords,
      seatStatus = props.seatStatus;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5__styles__["d" /* SeatWrapper */],
    { coords: coords },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5__styles__["e" /* SeatContainer */],
      {
        activePlayer: seatStatus && seatStatus === __WEBPACK_IMPORTED_MODULE_4__app_config__["k" /* STATUS_MSG */].active
      },
      seatStatus && seatStatus !== __WEBPACK_IMPORTED_MODULE_4__app_config__["k" /* STATUS_MSG */].active ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__styles__["f" /* StatusSeatWrapper */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__styles__["g" /* StatusSeat */],
          null,
          seatStatus.msg
        )
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardsComponent__["a" /* default */], props),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SeatInfo__["a" /* default */], props),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StatusAction__["a" /* default */], props)
    )
  );
};
Seat.propTypes = {
  coords: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  seatStatus: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object
};

/* harmony default export */ exports["a"] = Seat;

/***/ },

/***/ "./app/components/Seat/SeatInfo.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pot__ = __webpack_require__("./app/components/Pot/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nicknames__ = __webpack_require__("./app/services/nicknames.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__("./app/components/Seat/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("./app/app.config.js");








var stackToString = function stackToString(stackSize) {
  if (!stackSize) return '0';
  return stackSize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var SeatInfo = function SeatInfo(_ref) {
  var amountCoords = _ref.amountCoords,
      blocky = _ref.blocky,
      dealer = _ref.dealer,
      lastAmount = _ref.lastAmount,
      pos = _ref.pos,
      signerAddr = _ref.signerAddr,
      seatStatus = _ref.seatStatus,
      stackSize = _ref.stackSize;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__styles__["m" /* InfoWrapper */],
    null,
    seatStatus && seatStatus === __WEBPACK_IMPORTED_MODULE_4__app_config__["k" /* STATUS_MSG */].active ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__styles__["n" /* ChipButtonContainer */],
      { className: 'chip-button-container' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__styles__["o" /* DealerButton */],
        { dealer: dealer, pos: pos },
        'D'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__styles__["p" /* AmountBox */],
        { amountCoords: amountCoords },
        lastAmount > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Pot__["a" /* default */], { className: 'pot', potSize: lastAmount, left: '0%', top: '0%' })
      )
    ) : null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["q" /* AvatarImage */], { className: 'avatar-image', bgImg: blocky }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__styles__["r" /* DetailWrapper */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__styles__["s" /* NameBox */],
        { className: 'name-box' },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_nicknames__["a" /* nickNameByAddress */])(signerAddr)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__styles__["t" /* StackBox */],
        { className: 'stack-box' },
        stackToString(stackSize)
      )
    )
  );
};
SeatInfo.propTypes = {
  amountCoords: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  blocky: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  dealer: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number, // which seat is dealer
  lastAmount: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  pos: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number, // which position is THIS seat
  signerAddr: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  seatStatus: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  stackSize: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number
};

/* harmony default export */ exports["a"] = SeatInfo;

/***/ },

/***/ "./app/components/Seat/SeatTimer.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/Seat/styles.js");
/**
* Created by jzobro 20170519
*/




var timerDisplayColor = function timerDisplayColor(timerProgress) {
  if (timerProgress >= 60) return 'active';
  if (timerProgress >= 30) return 'warning';
  if (timerProgress >= 0) return 'danger';
  return 'active';
};

var SeatTimer = function SeatTimer(_ref) {
  var timeLeft = _ref.timeLeft;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["j" /* TimerWrapper */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["k" /* TimerBackground */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["l" /* TimerBar */], {
        type: timerDisplayColor(timeLeft),
        width: timeLeft + '%'
      })
    )
  );
};

SeatTimer.propTypes = {
  timeLeft: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number
};

/* harmony default export */ exports["a"] = SeatTimer;

/***/ },

/***/ "./app/components/Seat/SitoutTimer.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/Seat/styles.js");
/**
* Created by jzobro 20170519
*/




var SitoutTimer = function SitoutTimer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["j" /* TimerWrapper */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["k" /* TimerBackground */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["l" /* TimerBar */], {
        type: 'sitout',
        width: 100 + '%'
      })
    )
  );
};

SitoutTimer.propTypes = {
  // sitout: React.PropTypes.number,
};

/* harmony default export */ exports["a"] = SitoutTimer;

/***/ },

/***/ "./app/components/Seat/StatusAction.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__ = __webpack_require__("./node_modules/lodash/isEmpty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SeatTimer__ = __webpack_require__("./app/components/Seat/SeatTimer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SitoutTimer__ = __webpack_require__("./app/components/Seat/SitoutTimer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles__ = __webpack_require__("./app/components/Seat/styles.js");
/**
* Created by jzobro 20170520
*/








var StatusAction = function StatusAction(_ref) {
  var showStatus = _ref.showStatus,
      sitout = _ref.sitout,
      timeLeft = _ref.timeLeft,
      pos = _ref.pos,
      whosTurn = _ref.whosTurn,
      wasMostRecentAction = _ref.wasMostRecentAction;

  // if seat's turn for action, show timer for action
  if (whosTurn === pos) {
    if (timeLeft >= 0) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SeatTimer__["a" /* default */], { timeLeft: timeLeft });
  }

  // if seat is in sitout, show the sitout timer
  if (sitout >= 0) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SitoutTimer__["a" /* default */], { sitout: sitout });

  // if seat has a status, show action status
  if (!__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(showStatus)) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__styles__["h" /* StatusWrapper */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__styles__["i" /* StatusActionStyle */],
        {
          type: showStatus.style,
          recent: wasMostRecentAction
        },
        showStatus.msg
      )
    );
  }

  // else show nothing
  return null;
};
StatusAction.propTypes = {
  pos: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  showStatus: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  sitout: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  timeLeft: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  wasMostRecentAction: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
  whosTurn: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number
};

/* harmony default export */ exports["a"] = StatusAction;

/***/ },

/***/ "./app/components/Seat/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Seat__ = __webpack_require__("./app/components/Seat/Seat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ButtonJoinSeat__ = __webpack_require__("./app/components/Seat/ButtonJoinSeat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ButtonInvite__ = __webpack_require__("./app/components/Seat/ButtonInvite.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
* Created by jzobro 20170517
*/






var SeatComponent = function SeatComponent(props) {
  var isTaken = props.isTaken,
      myPos = props.myPos,
      open = props.open,
      pos = props.pos,
      pending = props.pending;

  if (open) {
    if (myPos === undefined) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ButtonJoinSeat__["a" /* default */], _extends({
        onClickHandler: function onClickHandler() {
          return isTaken(open, myPos, pending, pos);
        }
      }, props));
    }
    if (typeof myPos === 'number') {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ButtonInvite__["a" /* default */], _extends({
        onClickHandler: function onClickHandler() {
          return isTaken(open, myPos, pending, pos);
        }
      }, props));
    }
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Seat__["a" /* default */], props);
};
SeatComponent.propTypes = {
  isTaken: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  myPos: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number, // action bar position
  open: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
  pos: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  pending: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool
};

/* harmony default export */ exports["a"] = SeatComponent;

/***/ },

/***/ "./app/components/Seat/styles.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
/* unused harmony export SharedMiddle */
/* unused harmony export SharedLower */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return SeatWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return SeatContainer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "n", function() { return ChipButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "o", function() { return DealerButton; });
/* harmony export (binding) */ __webpack_require__.d(exports, "p", function() { return AmountBox; });
/* harmony export (binding) */ __webpack_require__.d(exports, "u", function() { return CardContainer; });
/* unused harmony export CardShared */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CardBack; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return CardFront; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CardStyle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "m", function() { return InfoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "q", function() { return AvatarImage; });
/* harmony export (binding) */ __webpack_require__.d(exports, "r", function() { return DetailWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "s", function() { return NameBox; });
/* harmony export (binding) */ __webpack_require__.d(exports, "t", function() { return StackBox; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return StatusWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return StatusActionStyle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return StatusSeatWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return StatusSeat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return TimerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return TimerBackground; });
/* harmony export (binding) */ __webpack_require__.d(exports, "l", function() { return TimerBar; });
/* harmony export (binding) */ __webpack_require__.d(exports, "w", function() { return ButtonStyle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "v", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "x", function() { return ButtonIcon; });
/* harmony export (binding) */ __webpack_require__.d(exports, "y", function() { return ButtonText; });
var _templateObject = _taggedTemplateLiteral(['\n  background-color: #333;\n  background-image: linear-gradient(-180deg, #787878 0%, #393939 50%, #1F1F1F 50%, #3C3C3C 100%);\n  box-shadow: ', ';\n'], ['\n  background-color: #333;\n  background-image: linear-gradient(-180deg, #787878 0%, #393939 50%, #1F1F1F 50%, #3C3C3C 100%);\n  box-shadow: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-left: ', ';\n  box-shadow: ', ';\n  border-radius: 0 0 ', ' ', ';\n'], ['\n  margin-left: ', ';\n  box-shadow: ', ';\n  border-radius: 0 0 ', ' ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  ', '\n  top: ', '%;\n  color: \'white\';\n  width: 10%;\n  height: 25%;\n'], ['\n  position: absolute;\n  ', '\n  top: ', '%;\n  color: \'white\';\n  width: 10%;\n  height: 25%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: ', ';\n  left: ', ';\n  display: flex;\n  flex-direction: column;\n  width: ', ';\n  height: auto;\n\n  color: white;\n  background-color: none;\n  opacity: ', ';\n'], ['\n  position: absolute;\n  top: ', ';\n  left: ', ';\n  display: flex;\n  flex-direction: column;\n  width: ', ';\n  height: auto;\n\n  color: white;\n  background-color: none;\n  opacity: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n  height: 0;\n'], ['\n  position: relative;\n  height: 0;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: ', ';\n  position: absolute;\n  top: ', ';\n  left: ', ';\n  width: ', ';\n  height: ', ';\n\n  background: white;\n  border-radius: 50%;\n  box-shadow: ', ';\n\n  text-align: center;\n  font-weight: 600;\n  font-size: ', ';\n  color: #353535;\n'], ['\n  display: ', ';\n  position: absolute;\n  top: ', ';\n  left: ', ';\n  width: ', ';\n  height: ', ';\n\n  background: white;\n  border-radius: 50%;\n  box-shadow: ', ';\n\n  text-align: center;\n  font-weight: 600;\n  font-size: ', ';\n  color: #353535;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  position: absolute;\n  left: ', ';\n  top: ', ';\n  border-radius: 25%;\n  color: white;\n  line-height: 3em;\n  text-align: center;\n  width: 100%;\n'], ['\n  position: absolute;\n  left: ', ';\n  top: ', ';\n  border-radius: 25%;\n  color: white;\n  line-height: 3em;\n  text-align: center;\n  width: 100%;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: flex-end;\n  margin-right: ', ';\n  margin-top: ', ';\n\n  background-color: none;\n'], ['\n  display: flex;\n  justify-content: flex-end;\n  margin-right: ', ';\n  margin-top: ', ';\n\n  background-color: none;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  background-color: none;\n  margin-right: ', ';\n  width:', ';\n'], ['\n  background-color: none;\n  margin-right: ', ';\n  width:', ';\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  margin-top: ', ';\n  height: ', ';\n'], ['\n  margin-top: ', ';\n  height: ', ';\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  height: ', ';\n'], ['\n  height: ', ';\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  max-width: 100%;\n  height: auto;\n\n  box-shadow: ', ';\n'], ['\n  max-width: 100%;\n  height: auto;\n\n  box-shadow: ', ';\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  display: flex;\n  border-radius: ', ';\n\n  color: #D5D5D5;\n  font-weight: 400;\n'], ['\n  display: flex;\n  border-radius: ', ';\n\n  color: #D5D5D5;\n  font-weight: 400;\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  background-color: AliceBlue;\n  background-image: url(', ');\n  background-size: ', ' ', ';\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  margin: ', ' ', ';\n'], ['\n  background-color: AliceBlue;\n  background-image: url(', ');\n  background-size: ', ' ', ';\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  margin: ', ' ', ';\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  background-color: none;\n  margin-left: ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  background-color: none;\n  margin-left: ', ';\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n  padding-bottom: ', ';\n  font-size: ', ';\n  background-color: none;\n  color: white;\n'], ['\n  padding-bottom: ', ';\n  font-size: ', ';\n  background-color: none;\n  color: white;\n']),
    _templateObject17 = _taggedTemplateLiteral(['\n  padding-top: ', ';\n  font-size: ', ';\n  background-color: none;\n  color: white;\n'], ['\n  padding-top: ', ';\n  font-size: ', ';\n  background-color: none;\n  color: white;\n']),
    _templateObject18 = _taggedTemplateLiteral(['\n  display: flex;\n\n  background-color: none;\n'], ['\n  display: flex;\n\n  background-color: none;\n']),
    _templateObject19 = _taggedTemplateLiteral(['\n  padding-top: 0;\n  padding-left: ', ';\n  padding-bottom: ', ';\n  padding-right: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n\n  color: ', ';\n  background: ', ';\n  opacity: ', ';\n'], ['\n  padding-top: 0;\n  padding-left: ', ';\n  padding-bottom: ', ';\n  padding-right: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n\n  color: ', ';\n  background: ', ';\n  opacity: ', ';\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n  padding-top: 0;\n  padding-left: ', ';\n  padding-bottom: ', ';\n  padding-right: ', ';\n  height: ', ';\n\n  font-weight: ', ';\n  font-size: ', ';\n  color: ', ';\n\n  background: ', ';\n  box-shadow: ', ';\n  border-radius: ', ' ', ' 0 0;\n'], ['\n  padding-top: 0;\n  padding-left: ', ';\n  padding-bottom: ', ';\n  padding-right: ', ';\n  height: ', ';\n\n  font-weight: ', ';\n  font-size: ', ';\n  color: ', ';\n\n  background: ', ';\n  box-shadow: ', ';\n  border-radius: ', ' ', ' 0 0;\n']),
    _templateObject21 = _taggedTemplateLiteral(['\n  width: ', ';\n  background-color: #393939;\n'], ['\n  width: ', ';\n  background-color: #393939;\n']),
    _templateObject22 = _taggedTemplateLiteral(['\n  position: relative;\n  height: ', ';\n  margin-top: 0;\n  margin-right: ', ';\n  margin-bottom: ', ';\n  margin-left: ', ';\n  background-color: #727272;\n  border-radius: 0 0 ', ' ', ';\n'], ['\n  position: relative;\n  height: ', ';\n  margin-top: 0;\n  margin-right: ', ';\n  margin-bottom: ', ';\n  margin-left: ', ';\n  background-color: #727272;\n  border-radius: 0 0 ', ' ', ';\n']),
    _templateObject23 = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  width: ', ';\n  border-radius: 0 0 ', ' ', ';\n  background: ', ';\n'], ['\n  position: absolute;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  width: ', ';\n  border-radius: 0 0 ', ' ', ';\n  background: ', ';\n']),
    _templateObject24 = _taggedTemplateLiteral(['\n  border-radius: ', ';\n  width: ', ';\n'], ['\n  border-radius: ', ';\n  width: ', ';\n']),
    _templateObject25 = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  color: #D5D5D5;\n  font-weight: 400;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    color: white;\n    transform: scale(1.1, 1.1);\n    ', '\n  }\n  &:active {\n    color: ', ';\n    transform: scale(1.0, 1.0);\n  }\n'], ['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  color: #D5D5D5;\n  font-weight: 400;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    color: white;\n    transform: scale(1.1, 1.1);\n    ', '\n  }\n  &:active {\n    color: ', ';\n    transform: scale(1.0, 1.0);\n  }\n']),
    _templateObject26 = _taggedTemplateLiteral(['\n  flex: auto;\n  padding-top: ', ';\n  padding-right: ', ';\n  padding-bottom: ', ';\n  padding-left: ', ';\n  &:before {\n    font-size: ', ';\n  }\n'], ['\n  flex: auto;\n  padding-top: ', ';\n  padding-right: ', ';\n  padding-bottom: ', ';\n  padding-left: ', ';\n  &:before {\n    font-size: ', ';\n  }\n']),
    _templateObject27 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  font-weight: 600;\n  flex: auto;\n  padding-top: ', ';\n  padding-bottom: ', ';\n'], ['\n  font-size: ', ';\n  font-weight: 600;\n  flex: auto;\n  padding-top: ', ';\n  padding-bottom: ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
* Created by jzobro 20170517
*/


// colors
var successBg = 'linear-gradient(0deg, #B4ED50 0%, #78D049 100%)';
var infoBg = 'linear-gradient(0deg, #D4D4D4 0%, #4D4D4D 100%)';
var infoReverseBg = 'linear-gradient(0deg, #4D4D4D 0%, #D4D4D4 100%)';
var warningBg = 'linear-gradient(0deg, #F7F8CB 0%, #F7F51C 100%)';
var dangerBg = 'linear-gradient(0deg, #FBDA61 0%, #F76B1C 100%)';
var activeColor = '#35C5E3'; // tealish
var successColor = '#305209'; // greenish
var infoColor = 'white'; // white
var warningColor = '#5E5F3B'; // yellowish
var dangerColor = '#63430F'; // orangish
// shadows
var smallShadow = '0 1px 4px 0 rgba(0,0,0,0.50)';
var medShadow = '0 2px 4px 0 rgba(0,0,0,0.50)';
// size
var seatScale = 128;
var joinButtonScale = 64;
// font
var fontWeightInfo = 500;
var fontWeigthBold = 600;

var calcSize = function calcSize(baseSize, scaleSize, dimToScale) {
  var convertedNum = Math.round(scaleSize / baseSize * dimToScale);
  return convertedNum + 'px';
};

var scaleSeat = function scaleSeat(dimToScale) {
  var baseSeatSize = 128;
  return calcSize(baseSeatSize, seatScale, dimToScale);
};

var scaleButtonJoin = function scaleButtonJoin(dimToScale) {
  var baseJoinButtonSize = 64;
  return calcSize(baseJoinButtonSize, joinButtonScale, dimToScale);
};

// shared styles
var SharedMiddle = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject, medShadow);

var SharedLower = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject2, scaleSeat(8), smallShadow, scaleSeat(3), scaleSeat(3));

// seat
var SeatWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject3, function (props) {
  if (props.coords[2] === 0) {
    return 'left:' + props.coords[0] + '%;';
  }
  return 'right:' + props.coords[0] + '%;';
}, function (props) {
  return props.coords[1];
});

var SeatContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject4, scaleSeat(-20), scaleSeat(-64), scaleSeat(128), function (props) {
  return props.activePlayer ? 1 : 0.5;
});

// chips & dealer button
var ChipButtonContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject5);

var DealerButton = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject6, function (props) {
  return !(props.dealer === props.pos) ? 'none' : 'inherit';
}, scaleSeat(-28), scaleSeat(12), scaleSeat(20), scaleSeat(20), smallShadow, scaleSeat(14));

var AmountBox = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject7, function (props) {
  return props.amountCoords[0] + 'px';
}, function (props) {
  return props.amountCoords[1] + 'px';
});

// cards
var CardContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject8, scaleSeat(4), function (props) {
  return props.empty ? scaleSeat(40) : 0;
});

// referenced in components/Card
var CardShared = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject9, scaleSeat(2), scaleSeat(36));

var CardBack = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(CardShared)(_templateObject10, scaleSeat(28), scaleSeat(12));

var CardFront = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(CardShared)(_templateObject11, scaleSeat(40));

var CardStyle = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].img(_templateObject12, smallShadow);

// info
var InfoWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(SharedMiddle)(_templateObject13, scaleSeat(4));

var AvatarImage = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject14, function (props) {
  return props.bgImg;
}, scaleSeat(38), scaleSeat(38), scaleSeat(38), scaleSeat(38), scaleSeat(3), scaleSeat(3), scaleSeat(4));

var DetailWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject15, scaleSeat(2));

var NameBox = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject16, scaleSeat(2), scaleSeat(11));

var StackBox = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject17, scaleSeat(2), scaleSeat(11));

// status
var StatusWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject18);

var StatusActionStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(SharedLower)(_templateObject19, scaleSeat(10), scaleSeat(1), scaleSeat(10), function (props) {
  return props.type === 'info' ? fontWeightInfo : fontWeigthBold;
}, scaleSeat(11), function (props) {
  if (props.type === 'success') return successColor;
  if (props.type === 'info') return 'black';
  if (props.type === 'warning') return warningColor;
  if (props.type === 'danger') return dangerColor;
  return infoColor;
}, function (props) {
  if (props.type === 'success') return successBg;
  if (props.type === 'info') return 'white';
  if (props.type === 'warning') return warningBg;
  if (props.type === 'danger') return dangerBg;
  return infoBg;
}, function (props) {
  return props.recent ? 1 : 0.4;
});

var StatusSeatWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject8, scaleSeat(6), scaleSeat(22));

var StatusSeat = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject20, scaleSeat(14), scaleSeat(1), scaleSeat(14), scaleSeat(18), fontWeightInfo, scaleSeat(11), infoColor, infoReverseBg, smallShadow, scaleSeat(3), scaleSeat(3));

// timer
var TimerWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(SharedLower)(_templateObject21, scaleSeat(110));

var TimerBackground = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject22, scaleSeat(6), scaleSeat(3), scaleSeat(3), scaleSeat(3), scaleSeat(2), scaleSeat(2));

var TimerBar = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject23, function (props) {
  return props.width;
}, scaleSeat(2), scaleSeat(2), function (props) {
  if (props.type === 'sitout') return 'white';
  if (props.type === 'active') return activeColor;
  if (props.type === 'warning') return warningBg;
  if (props.type === 'danger') return dangerBg;
  return infoBg;
});

// ButtonJoin
var ButtonStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(SharedMiddle)(_templateObject24, scaleButtonJoin(4), function (props) {
  return props.pending ? scaleButtonJoin(60) : scaleButtonJoin(44);
});

var ButtonWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].button(_templateObject25, '' /* box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.50); */, activeColor);

var ButtonIcon = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].i(_templateObject26, scaleButtonJoin(2), scaleButtonJoin(6), scaleButtonJoin(5), scaleButtonJoin(6), scaleButtonJoin(12));

var ButtonText = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject27, scaleButtonJoin(10), scaleButtonJoin(1), scaleButtonJoin(3));

/***/ },

/***/ "./app/components/Slides/index.js":
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





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  position: relative;\n  padding: 30px 50px 10px;\n'], ['\n  ', '\n  position: relative;\n  padding: 30px 50px 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  overflow: hidden;\n'], ['\n  ', '\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  position: relative;\n  overflow-y: hidden;\n  width: 10000px;\n  transition: 0.5s;\n'], ['\n  ', '\n  position: relative;\n  overflow-y: hidden;\n  width: 10000px;\n  transition: 0.5s;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  float: left;\n'], ['\n  ', '\n  float: left;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  left: 10px;\n'], ['\n  ', '\n  ', '\n  left: 10px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  right: 10px;\n'], ['\n  ', '\n  ', '\n  right: 10px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  margin-top: 30px;\n  text-align: center;\n'], ['\n  ', '\n  margin-top: 30px;\n  text-align: center;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n  display: inline-block;\n  background: ', ';\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  margin-right: 16px;\n  cursor: pointer;\n\n  &:last-child {\n    margin-right: 0;\n  }\n'], ['\n  ', '\n  display: inline-block;\n  background: ', ';\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  margin-right: 16px;\n  cursor: pointer;\n\n  &:last-child {\n    margin-right: 0;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _components = {
  Slides: {
    displayName: 'Slides'
  }
};

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/components/Slides/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/components/Slides/index.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2(_UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}




var boxSizing = 'box-sizing: content-box;';

var SlidesWrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject, boxSizing);

var SlidesOuter = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject2, boxSizing);

var SlidesInner = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject3, boxSizing);

var SlideBox = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject4, boxSizing);

var slideDirectionStyle = '\n  ' + boxSizing + '\n  position: absolute;\n  top: 50%;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  transform: translateY(-50%);\n  text-align: center;\n  cursor: pointer;\n';

var SlideLeft = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject5, boxSizing, slideDirectionStyle);

var SlideRight = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject6, boxSizing, slideDirectionStyle);

var DotBox = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject7, boxSizing);

var Dot = __WEBPACK_IMPORTED_MODULE_4_styled_components__["default"].div(_templateObject8, boxSizing, function (props) {
  return props.isOn ? '#666' : '#ccc';
});

var Slides = _wrapComponent('Slides')(function (_React$Component) {
  _inherits(Slides, _React$Component);

  function Slides(props) {
    _classCallCheck(this, Slides);

    var _this = _possibleConstructorReturn(this, (Slides.__proto__ || Object.getPrototypeOf(Slides)).call(this, props));

    _this.state = {
      slideIndex: 0
    };

    _this.genGoto = _this.genGoto.bind(_this);
    _this.next = _this.next.bind(_this);
    _this.prev = _this.prev.bind(_this);
    return _this;
  }

  _createClass(Slides, [{
    key: 'prev',
    value: function prev() {
      var index = this.state.slideIndex;
      var total = this.props.children.length;

      this.setState({
        slideIndex: (total + index - 1) % total
      });
    }
  }, {
    key: 'next',
    value: function next() {
      var index = this.state.slideIndex;
      var total = this.props.children.length;

      this.setState({
        slideIndex: (index + 1) % total
      });
    }
  }, {
    key: 'genGoto',
    value: function genGoto(index) {
      var _this2 = this;

      return function () {
        _this2.setState({
          slideIndex: index
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          _props$width = _props.width,
          width = _props$width === undefined ? 500 : _props$width,
          _props$height = _props.height,
          height = _props$height === undefined ? 400 : _props$height,
          _props$SlidesWrapperC = _props.SlidesWrapperComponent,
          SlidesWrapperComponent = _props$SlidesWrapperC === undefined ? SlidesWrapper : _props$SlidesWrapperC,
          _props$SlidesOuterCom = _props.SlidesOuterComponent,
          SlidesOuterComponent = _props$SlidesOuterCom === undefined ? SlidesOuter : _props$SlidesOuterCom,
          _props$SlidesInnerCom = _props.SlidesInnerComponent,
          SlidesInnerComponent = _props$SlidesInnerCom === undefined ? SlidesInner : _props$SlidesInnerCom,
          _props$SlideBoxCompon = _props.SlideBoxComponent,
          SlideBoxComponent = _props$SlideBoxCompon === undefined ? SlideBox : _props$SlideBoxCompon,
          _props$SlideLeftCompo = _props.SlideLeftComponent,
          SlideLeftComponent = _props$SlideLeftCompo === undefined ? SlideLeft : _props$SlideLeftCompo,
          _props$SlideRightComp = _props.SlideRightComponent,
          SlideRightComponent = _props$SlideRightComp === undefined ? SlideRight : _props$SlideRightComp,
          _props$DotBoxComponen = _props.DotBoxComponent,
          DotBoxComponent = _props$DotBoxComponen === undefined ? DotBox : _props$DotBoxComponen,
          _props$DotComponent = _props.DotComponent,
          DotComponent = _props$DotComponent === undefined ? Dot : _props$DotComponent;
      var slideIndex = this.state.slideIndex;


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        SlidesWrapperComponent,
        { style: { width: width + 'px' } },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          SlidesOuterComponent,
          { style: { width: width + 'px' } },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            SlidesInnerComponent,
            { style: { height: height + 'px', left: -1 * width * slideIndex + 'px' } },
            children.map(function (slide, index) {
              return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                SlideBoxComponent,
                { key: index, style: { width: width + 'px', height: height + 'px' } },
                slide
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          SlideLeftComponent,
          { onClick: this.prev },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'fa fa-angle-left', style: { fontSize: '30px' } })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          SlideRightComponent,
          { onClick: this.next },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'fa fa-angle-right', style: { fontSize: '30px' } })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          DotBoxComponent,
          null,
          children.map(function (slide, index) {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(DotComponent, {
              key: index,
              onClick: _this3.genGoto(index),
              isOn: index === slideIndex
            });
          })
        )
      );
    }
  }]);

  return Slides;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

Slides.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.array.isRequired,
  width: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
  height: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number.isRequired,
  SlidesWrapperComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.instanceOf(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component),
  SlideBoxComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.instanceOf(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component),
  SlidesOuterComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.instanceOf(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component),
  SlidesInnerComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.instanceOf(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component),
  SlideLeftComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.instanceOf(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component),
  SlideRightComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.instanceOf(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component),
  DotBoxComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.instanceOf(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component),
  DotComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.instanceOf(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component)
};

/* harmony default export */ exports["a"] = Slides;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ "./app/components/Table/Board.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Board; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BoardCardWrapper; });
var _templateObject = _taggedTemplateLiteral(['\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 255px;\n  transform: translate(-50%, -50%);\n'], ['\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 255px;\n  transform: translate(-50%, -50%);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  float: left;\n  margin-left: 0.5em;\n'], ['\n  float: left;\n  margin-left: 0.5em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by helge on 16.02.17.
 */



var Board = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject);

var BoardCardWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject2);

/***/ },

/***/ "./app/components/Table/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Board__ = __webpack_require__("./app/components/Table/Board.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_TableMenu__ = __webpack_require__("./app/containers/TableMenu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_ActionBar__ = __webpack_require__("./app/containers/ActionBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tableBG_svg__ = __webpack_require__("./app/components/Table/tableBG.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tableBG_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tableBG_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pot__ = __webpack_require__("./app/components/Pot/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_Curtain__ = __webpack_require__("./app/containers/Curtain/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_FeedbackButton__ = __webpack_require__("./app/containers/FeedbackButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles__ = __webpack_require__("./app/components/Table/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by helge on 14.02.17.
 */












var Seats = function Seats(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { name: 'seats' },
    props.seats
  );
};

var TableComponent = function TableComponent(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { name: 'table-component' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_Curtain__["a" /* default */], props),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_8__styles__["a" /* TableContainer */],
      { name: 'table-container' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__styles__["b" /* TableHeader */],
        { className: 'table-header' },
        'state: ' + props.state,
        ' ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__styles__["c" /* TableAndChairs */],
        { id: 'table-and-chairs' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_4__tableBG_svg___default.a, alt: '' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Pot__["a" /* default */], { potSize: props.potSize, top: '55%', left: '50%' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Seats, { seats: props.seats }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Board__["b" /* Board */],
          { id: 'board', board: props.board },
          props.board
        ),
        props.winners.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__styles__["d" /* Winner */],
          { className: 'winner' },
          props.winners
        )
      ),
      props.myHand && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__styles__["e" /* HandBox */],
        { className: 'hand-box' },
        ' ',
        props.myHand.descr
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_TableMenu__["a" /* default */], props),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_ActionBar__["a" /* default */], _extends({ className: 'action-bar' }, props, { sb: props.sb }))
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__containers_FeedbackButton__["a" /* default */], null)
  );
};

TableComponent.propTypes = {
  seats: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array
};

TableComponent.propTypes = {
  state: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  board: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  seats: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  potSize: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  winners: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  myHand: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  sb: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number
};

/* harmony default export */ exports["a"] = TableComponent;

/***/ },

/***/ "./app/components/Table/styles.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_variables__ = __webpack_require__("./app/variables.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TableContainer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return TableHeader; });
/* unused harmony export Wrapper */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return Winner; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return TableAndChairs; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return HandBox; });
var _templateObject = _taggedTemplateLiteral(['\n  background-image: ', ';\n  margin-top: 18px;\n  margin-right: auto;\n  margin-left: auto;\n  \n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n'], ['\n  background-image: ', ';\n  margin-top: 18px;\n  margin-right: auto;\n  margin-left: auto;\n  \n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n   position: relative;\n   text-align: left;\n   color: ', ';\n   padding-left: 10em;\n'], ['\n   position: relative;\n   text-align: left;\n   color: ', ';\n   padding-left: 10em;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 2em;\n  z-index: 1;\n  height: 10%\n  width: 20%;\n  bottom: 2em;\n\n  @media (min-width: ', ') {\n    left: calc(', ' + 2em);\n  }\n'], ['\n  position: absolute;\n  left: 2em;\n  z-index: 1;\n  height: 10%\n  width: 20%;\n  bottom: 2em;\n\n  @media (min-width: ', ') {\n    left: calc(', ' + 2em);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  left: 50%;\n  top: 100%;\n  position: absolute;\n  padding: 0.5em;\n  background-color: ', ';\n  border-radius: 0.5em;\n  color: ', ';\n  transform: translate(-50%,-20%);\n'], ['\n  left: 50%;\n  top: 100%;\n  position: absolute;\n  padding: 0.5em;\n  background-color: ', ';\n  border-radius: 0.5em;\n  color: ', ';\n  transform: translate(-50%,-20%);\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;   \n  width: 100%\n  padding: 25%;\n'], ['\n  position: relative;   \n  width: 100%\n  padding: 25%;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  left: 80%;\n  top: 80%;\n  position: absolute;\n  padding: 0.5em;\n  background-color: ', ';\n  border-radius: 0.5em;\n  color: ', ';\n  transform: translate(-50%,-20%);\n'], ['\n  left: 80%;\n  top: 80%;\n  position: absolute;\n  padding: 0.5em;\n  background-color: ', ';\n  border-radius: 0.5em;\n  color: ', ';\n  transform: translate(-50%,-20%);\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** TableMenu styles
 * Created by zobroj on 20170531
 */





var TableContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject, __WEBPACK_IMPORTED_MODULE_1_variables__["h" /* backgroundTable */], __WEBPACK_IMPORTED_MODULE_1_variables__["i" /* curtainStickyWidth */], __WEBPACK_IMPORTED_MODULE_1_variables__["j" /* curtainWidth */]);

var TableHeader = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject2, __WEBPACK_IMPORTED_MODULE_1_variables__["a" /* white */]);

var Wrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject3, __WEBPACK_IMPORTED_MODULE_1_variables__["i" /* curtainStickyWidth */], __WEBPACK_IMPORTED_MODULE_1_variables__["j" /* curtainWidth */]);

var Winner = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject4, __WEBPACK_IMPORTED_MODULE_1_variables__["b" /* black */], __WEBPACK_IMPORTED_MODULE_1_variables__["a" /* white */]);

var TableAndChairs = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject5);

var HandBox = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject6, __WEBPACK_IMPORTED_MODULE_1_variables__["b" /* black */], __WEBPACK_IMPORTED_MODULE_1_variables__["a" /* white */]);

/***/ },

/***/ "./app/components/Table/tableBG.svg":
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "702c9cd102fc40c5cc9243f217b860cc.svg";

/***/ },

/***/ "./app/components/TableMenu/MenuHeader.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/TableMenu/styles.js");




var MenuHeader = function MenuHeader(_ref) {
  var active = _ref.active,
      blocky = _ref.blocky,
      toggleMenuOpen = _ref.toggleMenuOpen,
      toggleMenuActive = _ref.toggleMenuActive,
      nickName = _ref.nickName,
      open = _ref.open;

  var handleOnLeave = function handleOnLeave() {
    return active ? toggleMenuActive() : null;
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["h" /* MenuHeader */],
    {
      open: open,
      onClick: toggleMenuOpen,
      onMouseDown: toggleMenuActive,
      onMouseUp: toggleMenuActive,
      onMouseLeave: handleOnLeave
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["i" /* Identicon */], { name: 'identicon', bgImg: blocky }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["g" /* ItemTitle */],
      { name: 'item-title' },
      nickName
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["j" /* Hamburger */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["k" /* Patty */], { active: active }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["k" /* Patty */], { active: active }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["k" /* Patty */], { active: active })
    )
  );
};

MenuHeader.propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
  blocky: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  nickName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  toggleMenuActive: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  toggleMenuOpen: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  open: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool
};

/* harmony default export */ exports["a"] = MenuHeader;

/***/ },

/***/ "./app/components/TableMenu/MenuItem.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./app/components/TableMenu/styles.js");




var MenuItems = function MenuItems(props) {
  var item = props.item;
  // if the menu is open, close it

  var handleClick = function handleClick() {
    if (props.open) {
      props.toggleMenuOpen();
    }
    item.onClick();
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["e" /* ItemWrapper */],
    {
      name: item.name,
      disabled: item.disabled,
      onClick: handleClick
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__styles__["f" /* ItemIcon */], { className: item.icon, 'aria-hidden': true }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["g" /* ItemTitle */],
      null,
      item.title
    )
  );
};
MenuItems.propTypes = {
  item: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  open: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
  toggleMenuOpen: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func
};

/* harmony default export */ exports["a"] = MenuItems;

/***/ },

/***/ "./app/components/TableMenu/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuHeader__ = __webpack_require__("./app/components/TableMenu/MenuHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MenuItem__ = __webpack_require__("./app/components/TableMenu/MenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles__ = __webpack_require__("./app/components/TableMenu/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









var TableMenu = function TableMenu(props) {
  var loggedIn = props.loggedIn,
      open = props.open,
      myPos = props.myPos,
      sitout = props.sitout,
      handleClickLogout = props.handleClickLogout,
      onLeave = props.onLeave,
      onSitout = props.onSitout;

  var menuClose = [
  // Note: sitout value possibilities
  // sitout > 0, for enabled "play"
  // sitout === 0, for disabled "play"
  // sitout === undefined, for enabled "pause"
  // sitout === null, for disabled
  // myPos === -1, then not at table"pause"
  {
    name: 'sitout',
    icon: typeof sitout === 'number' ? 'fa fa-play' : 'fa fa-pause',
    title: typeof sitout === 'number' ? 'Sit-In' : 'Sit-Out',
    onClick: onSitout,
    disabled: myPos === undefined || sitout === 0 || sitout === null
  }, {
    name: 'standup',
    icon: 'fa fa-external-link',
    title: 'Stand-Up',
    onClick: onLeave,
    disabled: myPos === undefined
  }];
  var menuUserOpen = [{
    name: 'lobby',
    icon: 'fa fa-search',
    title: 'Lobby',
    onClick: function onClick() {
      return __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"].push('/lobby');
    },
    disabled: false
  }, {
    name: 'dashboard',
    icon: 'fa fa-tachometer',
    title: 'Dashboard',
    onClick: function onClick() {
      return __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"].push('/dashboard');
    },
    disabled: false
  }, {
    name: 'preferences',
    icon: 'fa fa-cog',
    title: 'Preferences',
    onClick: function onClick() {},
    disabled: true
  }, {
    name: 'logout',
    icon: 'fa fa-sign-out',
    title: 'Log-Out',
    onClick: function onClick() {
      return handleClickLogout();
    },
    disabled: false
  }];
  var menuGuestOpen = [{
    name: 'lobby',
    icon: 'fa fa-search',
    title: 'Lobby',
    onClick: function onClick() {
      return __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"].push('/lobby');
    },
    disabled: false
  }, {
    name: 'register',
    icon: 'fa fa-user-plus',
    title: 'Register',
    onClick: function onClick() {
      return __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"].push('/register');
    },
    disabled: false
  }, {
    name: 'signin',
    icon: 'fa fa-sign-in',
    title: 'Log-In',
    onClick: function onClick() {
      return __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"].push('/login');
    },
    disabled: false
  }];
  var renderMenu = function renderMenu() {
    if (loggedIn && open) {
      return menuUserOpen;
    }
    if (!loggedIn && open) {
      return menuGuestOpen;
    }
    return menuClose;
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4__styles__["a" /* Container */],
    { name: 'container' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__styles__["b" /* LogoWrapper */],
      { name: 'logo-wrapper' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__styles__["c" /* Logo */],
        null,
        'AceBusters Logo'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__styles__["d" /* MenuContainer */],
      { open: open, name: 'menu-container-guest' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__MenuHeader__["a" /* default */], props),
      renderMenu().map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__MenuItem__["a" /* default */], _extends({ key: index, item: item }, props));
      })
    )
  );
};

TableMenu.propTypes = {
  loggedIn: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
  myPos: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  handleClickLogout: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  onLeave: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  sitout: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.any, // TODO change to only number
  onSitout: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  open: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool
};

/* harmony default export */ exports["a"] = TableMenu;

/***/ },

/***/ "./app/components/TableMenu/styles.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
/* unused harmony export Button */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return MenuHeader; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return Identicon; });
/* unused harmony export NickName */
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return Hamburger; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return Patty; });
/* unused harmony export MenuItemsWrapper */
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return ItemIcon; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return ItemTitle; });
var _templateObject = _taggedTemplateLiteral(['\n  padding: 0;\n  margin: 0;\n  color: ', ';\n  border: none;\n  background: none;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    cursor: pointer;\n    box-shadow: ', ';\n  }\n  &:active {\n    box-shadow: ', ';\n    color: ', ';\n  }\n  &:disabled{\n    color: #8e8e8e;\n    cursor: default;\n    ', '\n    box-shadow: none;\n  }\n'], ['\n  padding: 0;\n  margin: 0;\n  color: ', ';\n  border: none;\n  background: none;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    cursor: pointer;\n    box-shadow: ', ';\n  }\n  &:active {\n    box-shadow: ', ';\n    color: ', ';\n  }\n  &:disabled{\n    color: #8e8e8e;\n    cursor: default;\n    ', '\n    box-shadow: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  width: 128px;\n  height: 46px;\n  border: 1px dashed red;\n'], ['\n  display: flex;\n  width: 128px;\n  height: 46px;\n  border: 1px dashed red;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: grey;\n'], ['\n  color: grey;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  min-width: 148px;\n  margin-left: auto;\n  background: ', ';\n  border-bottom-left-radius: 8px;\n  box-shadow: ', ';\n  z-index: ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  min-width: 148px;\n  margin-left: auto;\n  background: ', ';\n  border-bottom-left-radius: 8px;\n  box-shadow: ', ';\n  z-index: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  height: 42px;\n  margin-bottom: 4px;\n  padding-left: 14px;\n  border-bottom-left-radius: 8px;\n  background: ', ';\n  box-shadow: ', ' !important;\n  &:hover {\n    transform: scale(1.1, 1.1);\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  height: 42px;\n  margin-bottom: 4px;\n  padding-left: 14px;\n  border-bottom-left-radius: 8px;\n  background: ', ';\n  box-shadow: ', ' !important;\n  &:hover {\n    transform: scale(1.1, 1.1);\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #33bcd9;\n  background-image: url(', ');\n  background-size: 24px 24px;\n'], ['\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #33bcd9;\n  background-image: url(', ');\n  background-size: 24px 24px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  min-width: 40px;\n  padding-left: 6px;\n  font-size: 14px;\n  font-weight: normal;\n'], ['\n  min-width: 40px;\n  padding-left: 6px;\n  font-size: 14px;\n  font-weight: normal;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  padding-right: 12px;\n  min-width: 20px;\n  min-height: 20px;\n'], ['\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  padding-right: 12px;\n  min-width: 20px;\n  min-height: 20px;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  width: 20px;\n  height: 4px;\n  margin-bottom: 3px;\n  background-color: ', ';\n  box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.41);\n  border-radius: 1px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n'], ['\n  width: 20px;\n  height: 4px;\n  margin-bottom: 3px;\n  background-color: ', ';\n  box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.41);\n  border-radius: 1px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n'], ['\n  display: flex;\n  flex-direction: column;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  display: flex;\n  height: 40px;\n  margin-left: 8px;\n  padding-left: 12px;\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n  &:last-child {\n    height: 40px;\n    margin-bottom: 10px;\n  }\n'], ['\n  display: flex;\n  height: 40px;\n  margin-left: 8px;\n  padding-left: 12px;\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n  &:last-child {\n    height: 40px;\n    margin-bottom: 10px;\n  }\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  &:before {\n    font-size: 16px;\n  }\n'], ['\n  &:before {\n    font-size: 16px;\n  }\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  padding-left: 10px;\n  font-size: 14px;\n'], ['\n  padding-left: 10px;\n  font-size: 14px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
* Created by jzobro 20170602
*/


var menuActiveBG = '#35c5e3'; // electric blue
var menuBoxShadow = '0 2px 4px 0 rgba(0,0,0,0.31)';
var menuColor = '#ebe8e8'; // light gray
var menuClose = 'linear-gradient(0deg, #606060 0%, #808080 100%)';
var menuOpen = 'linear-gradient(0deg, #383838 0%, #717171 100%)';
var menuHoverBoxShadow = 'inset 1px 1px 5px 1px rgba(0,0,0,0.3)';
var menuActiveBoxShadow = 'inset 2px 1px 5px 2px rgba(0,0,0,0.50)';

var Button = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].button(_templateObject, menuColor, menuHoverBoxShadow, menuActiveBoxShadow, menuActiveBG, '' /* box-shadow: ${menuActiveBoxShadow}; */);

var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject2);

// Logo
var LogoWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject3);

var Logo = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject4);

// table-menu
var MenuContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject5, function (props) {
  return props.open ? menuOpen : 'none';
}, function (props) {
  return props.open ? menuBoxShadow : 'none';
}, function (props) {
  return props.open ? 100 : 0;
});

// header-item
var MenuHeader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(Button)(_templateObject6, function (props) {
  return props.open ? 'none' : menuClose;
}, function (props) {
  return props.open ? 'none' : menuBoxShadow;
});

var Identicon = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject7, function (props) {
  return props.bgImg;
});

var NickName = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].span(_templateObject8);

var Hamburger = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].span(_templateObject9);

var Patty = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject10, function (props) {
  return props.active ? menuActiveBG : '#5b5a5a';
});

// menu item
var MenuItemsWrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].div(_templateObject11);

var ItemWrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["default"])(Button)(_templateObject12);

var ItemIcon = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].i(_templateObject13);

var ItemTitle = __WEBPACK_IMPORTED_MODULE_0_styled_components__["default"].span(_templateObject14);

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

/***/ "./app/containers/ActionBar/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_raven_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reselect__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tableService__ = __webpack_require__("./app/services/tableService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions__ = __webpack_require__("./app/containers/ActionBar/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectors__ = __webpack_require__("./app/containers/ActionBar/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AccountProvider_selectors__ = __webpack_require__("./app/containers/AccountProvider/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Table_selectors__ = __webpack_require__("./app/containers/Table/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Seat_selectors__ = __webpack_require__("./app/containers/Seat/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Table_actions__ = __webpack_require__("./app/containers/Table/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ActionBar__ = __webpack_require__("./app/components/ActionBar/index.js");
/* unused harmony export mapDispatchToProps */





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ActionBarContainer: {
    displayName: 'ActionBarContainer'
  }
};

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/containers/ActionBar/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/containers/ActionBar/index.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2(_UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

/**
 * Created by helge on 24.08.16.
 */





















var ActionBarContainer = _wrapComponent('ActionBarContainer')(function (_React$Component) {
  _inherits(ActionBarContainer, _React$Component);

  function ActionBarContainer(props) {
    _classCallCheck(this, ActionBarContainer);

    var _this = _possibleConstructorReturn(this, (ActionBarContainer.__proto__ || Object.getPrototypeOf(ActionBarContainer)).call(this, props));

    _this.handleAllIn = _this.handleAllIn.bind(_this);
    _this.handleBet = _this.handleBet.bind(_this);
    _this.handleCheck = _this.handleCheck.bind(_this);
    _this.handleCall = _this.handleCall.bind(_this);
    _this.handleFold = _this.handleFold.bind(_this);
    _this.updateAmount = _this.updateAmount.bind(_this);
    _this.table = new __WEBPACK_IMPORTED_MODULE_7__services_tableService__["a" /* default */](props.params.tableAddr, _this.props.privKey);
    _this.state = { amount: 0 };
    return _this;
  }

  _createClass(ActionBarContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isMyTurn === true) {
        this.props.setActionBarActive(true);
        this.props.setActionBarMode(null);
      }
    }
  }, {
    key: 'updateAmount',
    value: function updateAmount(value) {
      var amount = parseInt(value, 10);
      amount = amount > this.props.myStack ? this.props.myStack : amount;
      this.setState({ amount: amount });
    }
  }, {
    key: 'captureError',
    value: function captureError(handId) {
      var _this2 = this;

      var self = this;

      return function (err) {
        __WEBPACK_IMPORTED_MODULE_4_raven_js___default.a.captureException(err, { tags: {
            tableAddr: self.props.params.tableAddr,
            handId: handId
          } });
        _this2.props.setActionBarActive(true);
        _this2.props.setActionBarMode(null);
      };
    }
  }, {
    key: 'handleAllIn',
    value: function handleAllIn() {
      var _this3 = this;

      // if player wants to raise and their stack is smaller than the minRaise amount, then bet their stack
      var _props = this.props,
          minRaise = _props.minRaise,
          myStack = _props.myStack;

      var amount = myStack < minRaise ? myStack : minRaise;
      this.setState({ amount: amount }, function () {
        return _this3.handleBet();
      });
    }
  }, {
    key: 'handleBet',
    value: function handleBet() {
      var _this4 = this;

      this.props.setActionBarActive(false);
      var amount = this.state.amount + this.props.myMaxBet;
      var handId = parseInt(this.props.params.handId, 10);

      var betAction = this.props.bet(this.props.params.tableAddr, handId, amount, this.props.privKey, this.props.myPos, this.props.lastReceipt);
      return this.props.pay(betAction, this.props.dispatch).then(function (cards) {
        _this4.props.setCards(_this4.props.params.tableAddr, handId, cards);
      }).catch(this.captureError(handId));
    }
  }, {
    key: 'handleCall',
    value: function handleCall() {
      var _this5 = this;

      var amount = parseInt(this.props.callAmount, 10);
      this.setState({ amount: amount }, function () {
        _this5.handleBet();
      });
    }
  }, {
    key: 'handleCheck',
    value: function handleCheck() {
      var _this6 = this;

      this.props.setActionBarActive(false);
      var amount = this.props.myMaxBet;
      var handId = parseInt(this.props.params.handId, 10);
      var checkStates = ['preflop', 'turn', 'river', 'flop'];
      var state = this.props.state;
      var checkType = checkStates.indexOf(state) !== -1 ? state : 'flop';
      var action = this.props.check(this.props.params.tableAddr, handId, amount, this.props.privKey, this.props.myPos, this.props.lastReceipt, checkType);

      return this.props.pay(action, this.props.dispatch).then(function (cards) {
        _this6.props.setCards(_this6.props.params.tableAddr, handId, cards);
      }).catch(this.captureError(handId));
    }
  }, {
    key: 'handleFold',
    value: function handleFold() {
      var _this7 = this;

      this.props.setActionBarActive(false);
      var amount = this.props.myMaxBet;
      var handId = parseInt(this.props.params.handId, 10);
      var action = this.props.fold(this.props.params.tableAddr, handId, amount, this.props.privKey, this.props.myPos, this.props.lastReceipt);

      return this.props.pay(action, this.props.dispatch).then(function (cards) {
        _this7.props.setCards(_this7.props.params.tableAddr, handId, cards);
      }).catch(this.captureError(handId));
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_ActionBar__["a" /* default */], _extends({
        amount: this.state.amount,
        handleAllIn: this.handleAllIn,
        handleBet: this.handleBet,
        handleCheck: this.handleCheck,
        handleCall: this.handleCall,
        handleFold: this.handleFold,
        updateAmount: this.updateAmount
      }, this.props));
    }
  }]);

  return ActionBarContainer;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

ActionBarContainer.propTypes = {
  bet: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.func,
  callAmount: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number,
  check: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.func,
  dispatch: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.func,
  fold: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.func,
  lastReceipt: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.object,
  minRaise: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number,
  myMaxBet: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number,
  myPos: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number,
  myStack: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number,
  pay: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.func,
  params: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.object,
  privKey: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.string,
  setCards: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.func,
  state: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.string,
  setActionBarActive: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.func,
  setActionBarMode: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    setCards: function setCards(tableAddr, handId, cards) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__Table_actions__["i" /* setCards */])(tableAddr, handId, cards);
    },
    bet: function bet(tableAddr, handId, amount, privKey, myPos, lastReceipt) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__Table_actions__["a" /* bet */])(tableAddr, handId, amount, privKey, myPos, lastReceipt);
    },
    pay: function pay(betAction) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__Table_actions__["j" /* pay */])(betAction, dispatch);
    },
    fold: function fold(tableAddr, handId, amount, privKey, myPos, lastReceipt) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__Table_actions__["k" /* fold */])(tableAddr, handId, amount, privKey, myPos, lastReceipt);
    },
    check: function check(tableAddr, handId, amount, privKey, myPos, lastReceipt, checkType) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__Table_actions__["l" /* check */])(tableAddr, handId, amount, privKey, myPos, lastReceipt, checkType);
    },
    setActionBarActive: function setActionBarActive(active) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions__["a" /* setActionBarActive */])(active));
    },
    setActionBarBetSlider: function setActionBarBetSlider(open) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions__["b" /* setActionBarBetSlider */])(open));
    },
    setActionBarMode: function setActionBarMode(mode) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions__["c" /* setActionBarMode */])(mode));
    }
  };
}

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_reselect__["createStructuredSelector"])({
  active: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__selectors__["a" /* makeSelectActionBarActive */])(),
  amountToCall: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__selectors__["b" /* makeAmountToCallSelector */])(),
  callAmount: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__selectors__["c" /* makeCallAmountSelector */])(),
  cards: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__Seat_selectors__["b" /* makeMyCardsSelector */])(),
  isMyTurn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__Table_selectors__["d" /* makeIsMyTurnSelector */])(),
  playerCount: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__Table_selectors__["q" /* makePlayersCountSelector */])(),
  privKey: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__AccountProvider_selectors__["e" /* makeSelectPrivKey */])(),
  messages: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__Table_selectors__["r" /* makeMessagesSelector */])(),
  mode: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__selectors__["d" /* getActionBarMode */])(),
  minRaise: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__selectors__["e" /* makeMinSelector */])(),
  myMaxBet: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__Table_selectors__["s" /* makeMyMaxBetSelector */])(),
  myStack: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__Seat_selectors__["c" /* makeMyStackSelector */])(),
  sliderOpen: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__selectors__["f" /* getActionBarSliderOpen */])(),
  visible: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__selectors__["g" /* makeSelectActionBarVisible */])()
});

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ActionBarContainer);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ "./app/containers/ActionBar/selectors.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_poker_helper__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_poker_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_poker_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Table_selectors__ = __webpack_require__("./app/containers/Table/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Seat_selectors__ = __webpack_require__("./app/containers/Seat/selectors.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return makeSelectActionBarActive; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return makeSelectActionBarVisible; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return getActionBarMode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return getActionBarSliderOpen; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return makeAmountToCallSelector; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return makeMinSelector; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return makeCallAmountSelector; });
/**
 * Created by helge on 29.03.17.
 */








var getIsMyTurn = function getIsMyTurn(_, props) {
  return props.isMyTurn;
};
var getActionBarState = function getActionBarState(state) {
  return state.get('actionBar');
};
var rc = new __WEBPACK_IMPORTED_MODULE_1_poker_helper__["ReceiptCache"]();
var pokerHelper = new __WEBPACK_IMPORTED_MODULE_1_poker_helper__["PokerHelper"](rc);

/*
 * ActionBar related selectors
 */
var makeSelectActionBarActive = function makeSelectActionBarActive() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])([makeSelectActionBarVisible(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Table_selectors__["l" /* makeHandStateSelector */])(), getIsMyTurn], function (visible, handState, isMyTurn) {
    var isAppropriateState = handState !== 'waiting' && handState !== 'dealing' && handState !== 'showdown';
    if (visible && isMyTurn && isAppropriateState) {
      return true;
    }
    return false;
  });
};

// show the ActionBar if the player is sitting at the table
var makeSelectActionBarVisible = function makeSelectActionBarVisible() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Table_selectors__["i" /* makeMyPosSelector */])()], function (myPos) {
    if (myPos === undefined) return false;
    if (typeof myPos === 'number') return true;
    return false;
  });
};

var getActionBarMode = function getActionBarMode() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getActionBarState, function (actionBar) {
    return actionBar.get('mode');
  });
};

var getActionBarSliderOpen = function getActionBarSliderOpen() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getActionBarState, function (actionBar) {
    return actionBar.get('sliderOpen');
  });
};

// Other selectors
var makeAmountToCallSelector = function makeAmountToCallSelector() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Table_selectors__["t" /* makeMaxBetSelector */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Table_selectors__["s" /* makeMyMaxBetSelector */])()], function (maxBet, myMaxbet) {
    if (maxBet === undefined || myMaxbet === undefined) {
      return undefined;
    }
    return maxBet - myMaxbet;
  });
};

var makeMinSelector = function makeMinSelector() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Table_selectors__["p" /* makeSbSelector */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Table_selectors__["c" /* makeHandSelector */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Seat_selectors__["c" /* makeMyStackSelector */])(), makeAmountToCallSelector(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Table_selectors__["t" /* makeMaxBetSelector */])()], function (sb, hand, stack, amountToCall, maxBet) {
    if (!sb || !hand || hand.get('state') === 'waiting') {
      return undefined;
    }
    // if my stack smaller than BB return the left behind stack
    if (stack < sb * 2) {
      return stack;
    }
    var lineup = hand.get('lineup').toJS();
    var dealer = hand.get('dealer');
    // check if there was a raise exclude preflop sb and bb
    var lastRoundMaxBet = hand.get('lastRoundMaxBet');
    var minRaise = void 0;
    try {
      minRaise = pokerHelper.findMinRaiseAmount(lineup, dealer, lastRoundMaxBet);
    } catch (e) {
      // there was no raise
      if (e.message === 'can not find minRaiseAmount.') {
        return sb * 2 + amountToCall;
      }
      throw e;
    }

    if (minRaise > 0 && maxBet !== sb * 2) {
      return minRaise + amountToCall;
    }
    return sb * 2 + amountToCall;
  });
};

var makeCallAmountSelector = function makeCallAmountSelector() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])([makeAmountToCallSelector(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Seat_selectors__["c" /* makeMyStackSelector */])()], function (amountToCall, stack) {
    return amountToCall > stack ? stack : amountToCall;
  });
};



/***/ },

/***/ "./app/containers/Chat/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Chat__ = __webpack_require__("./app/components/Chat/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_list__ = __webpack_require__("./app/containers/Chat/message-list.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_box__ = __webpack_require__("./app/containers/Chat/message-box.js");
/* unused harmony export Chat */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Chat = function (_React$PureComponent) {
  _inherits(Chat, _React$PureComponent);

  // eslint-disable-line react/prefer-stateless-function
  function Chat(props) {
    _classCallCheck(this, Chat);

    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

    _this.onAddMessage = _this.onAddMessage.bind(_this);
    return _this;
  }

  _createClass(Chat, [{
    key: 'onAddMessage',
    value: function onAddMessage(message) {
      this.props.onAddMessage(message);
    }
  }, {
    key: 'render',
    value: function render() {
      var box = this.props.readonly ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__message_box__["a" /* default */], { onAddMessage: this.onAddMessage });
      var area = this.props.messages && this.props.messages.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__message_list__["a" /* default */], { messages: this.props.messages }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Chat__["a" /* ChatPlaceholder */],
        null,
        this.props.placeholder
      );
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Chat__["b" /* ChatContainer */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__components_Chat__["c" /* ChatArea */],
          null,
          area
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__components_Chat__["d" /* ChatBox */],
          null,
          box
        )
      );
    }
  }]);

  return Chat;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

Chat.propTypes = {
  messages: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].array,
  onAddMessage: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  readonly: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  placeholder: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string
};

/* harmony default export */ exports["a"] = Chat;

/***/ },

/***/ "./app/containers/Chat/message-box.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MessageBox = function (_React$PureComponent) {
  _inherits(MessageBox, _React$PureComponent);

  // eslint-disable-line react/prefer-stateless-function

  function MessageBox(props) {
    _classCallCheck(this, MessageBox);

    var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this, props));

    _this.handleSend = _this.handleSend.bind(_this);
    return _this;
  }

  _createClass(MessageBox, [{
    key: 'handleSend',
    value: function handleSend(event) {
      if (event.which === 13) {
        var text = this.input.value.trim();
        event.preventDefault();
        this.props.onAddMessage(text);
        this.input.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          placeholder: 'enter message...',
          onKeyDown: this.handleSend,
          ref: function ref(input) {
            _this2.input = input;
          },
          style: {
            width: '100%',
            background: 'whitesmoke',
            boxShadow: 'inset black 0 0 3px 0px',
            padding: '10px',
            fontSize: 'large'
          }
        })
      );
    }
  }]);

  return MessageBox;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

MessageBox.propTypes = {
  onAddMessage: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func
};

/* harmony default export */ exports["a"] = MessageBox;

/***/ },

/***/ "./app/containers/Chat/message-list.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_variables__ = __webpack_require__("./app/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nicknames__ = __webpack_require__("./app/services/nicknames.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MessageList = function (_React$PureComponent) {
  _inherits(MessageList, _React$PureComponent);

  function MessageList() {
    _classCallCheck(this, MessageList);

    return _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).apply(this, arguments));
  }

  _createClass(MessageList, [{
    key: 'componentDidMount',
    // eslint-disable-line react/prefer-stateless-function
    value: function componentDidMount() {
      this.scrollToBottom();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.scrollToBottom();
    }
  }, {
    key: 'scrollToBottom',
    value: function scrollToBottom() {
      this.list.scrollTop = this.list.scrollHeight - this.list.clientHeight;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = {
        width: '100%',
        margin: '0',
        listStyleType: 'none',
        padding: '0 0 5px 0',
        overflow: 'auto',
        height: '100%'
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { style: style, ref: function ref(el) {
            _this2.list = el;
          } },
        (this.props.messages || []).map(function (message, i) {
          var string = message.signer ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { style: { color: __WEBPACK_IMPORTED_MODULE_1_variables__["a" /* white */] } },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__services_nicknames__["a" /* nickNameByAddress */])(message.signer),
            ': ',
            message.message
          ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'i',
            { style: { color: __WEBPACK_IMPORTED_MODULE_1_variables__["c" /* baseColor */] } },
            'ORACLE: ',
            message.message
          );
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { style: { padding: '5px 5px 0 5px' }, key: i },
            string
          );
        })
      );
    }
  }]);

  return MessageList;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

MessageList.propTypes = {
  messages: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array
};

/* harmony default export */ exports["a"] = MessageList;

/***/ },

/***/ "./app/containers/Curtain/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Curtain__ = __webpack_require__("./app/components/Curtain/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Chat__ = __webpack_require__("./app/containers/Chat/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_Table_selectors__ = __webpack_require__("./app/containers/Table/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_AccountProvider_selectors__ = __webpack_require__("./app/containers/AccountProvider/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_Table_actions__ = __webpack_require__("./app/containers/Table/actions.js");
/* unused harmony export mapDispatchToProps */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var Curtain = function (_React$PureComponent) {
  _inherits(Curtain, _React$PureComponent);

  // eslint-disable-line react/prefer-stateless-function

  function Curtain(props) {
    _classCallCheck(this, Curtain);

    var _this = _possibleConstructorReturn(this, (Curtain.__proto__ || Object.getPrototypeOf(Curtain)).call(this, props));

    _this.sendMessage = _this.sendMessage.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.state = { isOpen: false };
    return _this;
  }

  _createClass(Curtain, [{
    key: 'sendMessage',
    value: function sendMessage(message) {
      this.props.sendMessage(message, this.props.params.tableAddr, this.props.privKey);
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var isTakePartOfAGame = this.props.myPos != null;
      var ta = this.props.params.tableAddr.substring(2, 8);
      var chatPlaceholder = 'table <' + ta + '> in state ' + this.props.state + ' has ' + (this.props.playerCount || 'no') + ' player' + (this.props.playerCount === 1 ? '' : 's') + '.';
      var isOpen = this.state.isOpen;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_Curtain__["a" /* CurtainWrapper */],
        { isOpen: isOpen },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Curtain__["b" /* CurtainToggler */], { onClick: this.toggle, isOpen: isOpen }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Curtain__["c" /* CurtainHeader */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_Chat__["a" /* default */], {
          onAddMessage: this.sendMessage,
          messages: this.props.messages,
          readonly: !isTakePartOfAGame,
          placeholder: chatPlaceholder
        })
      );
    }
  }]);

  return Curtain;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    sendMessage: function sendMessage(message, tableAddr, privKey) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__containers_Table_actions__["m" /* sendMessage */])(message, tableAddr, privKey));
    }
  };
}

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createStructuredSelector"])({
  privKey: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__containers_AccountProvider_selectors__["e" /* makeSelectPrivKey */])(),
  state: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__containers_Table_selectors__["l" /* makeHandStateSelector */])(),
  messages: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__containers_Table_selectors__["r" /* makeMessagesSelector */])(),
  playerCount: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__containers_Table_selectors__["q" /* makePlayersCountSelector */])(),
  myPos: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__containers_Table_selectors__["i" /* makeMyPosSelector */])()
});

Curtain.propTypes = {
  state: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  privKey: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  myPos: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  sendMessage: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  messages: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  playerCount: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  params: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object
};

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Curtain);

/***/ },

/***/ "./app/containers/FeedbackButton/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raven_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("./app/app.config.js");
/* unused harmony export FeedbackButton */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer; \n  padding: 5px 10px;\n  background-color: cornflowerblue;\n  transform: rotate(90deg);\n  display: inline-block;\n  position: fixed;\n  right: -36px;\n  bottom: 150px;\n  color: white;\n  border-radius: 0 0 3px 3px;\n'], ['\n  cursor: pointer; \n  padding: 5px 10px;\n  background-color: cornflowerblue;\n  transform: rotate(90deg);\n  display: inline-block;\n  position: fixed;\n  right: -36px;\n  bottom: 150px;\n  color: white;\n  border-radius: 0 0 3px 3px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Link = __WEBPACK_IMPORTED_MODULE_2_styled_components__["default"].a(_templateObject);

var FeedbackButton = function (_React$PureComponent) {
  _inherits(FeedbackButton, _React$PureComponent);

  function FeedbackButton() {
    _classCallCheck(this, FeedbackButton);

    return _possibleConstructorReturn(this, (FeedbackButton.__proto__ || Object.getPrototypeOf(FeedbackButton)).apply(this, arguments));
  }

  _createClass(FeedbackButton, [{
    key: 'showReport',
    // eslint-disable-line react/prefer-stateless-function

    value: function showReport() {
      __WEBPACK_IMPORTED_MODULE_1_raven_js___default.a.captureMessage('Feedback Button ' + Date.now());
      __WEBPACK_IMPORTED_MODULE_1_raven_js___default.a.showReportDialog({
        eventId: __WEBPACK_IMPORTED_MODULE_1_raven_js___default.a.lastEventId(),
        dsn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* conf */])().sentryDSN
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Link,
        { onClick: this.showReport },
        'Report Crash'
      );
    }
  }]);

  return FeedbackButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/* harmony default export */ exports["a"] = FeedbackButton;

/***/ },

/***/ "./app/containers/InviteDialog/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_form_immutable__ = __webpack_require__("./node_modules/redux-form/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_form_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_form_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_intl__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Button__ = __webpack_require__("./app/components/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Form_FormField__ = __webpack_require__("./app/components/Form/FormField.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__messages__ = __webpack_require__("./app/containers/InviteDialog/messages.js");





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  InviteDialog: {
    displayName: 'InviteDialog'
  }
};

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/containers/InviteDialog/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/containers/InviteDialog/index.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2(_UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

/**
 * Created by helge on 10.03.17.
 */










var validate = function validate(values) {
  var errors = {};
  if (!values.get('email')) {
    errors.amount = 'Required';
  }
  return errors;
};

var warn = function warn() {
  var warnings = {};
  return warnings;
};

var InviteDialog = _wrapComponent('InviteDialog')(function (_React$Component) {
  _inherits(InviteDialog, _React$Component);

  // eslint-disable-line react/prefer-stateless-function
  function InviteDialog(props) {
    _classCallCheck(this, InviteDialog);

    var _this = _possibleConstructorReturn(this, (InviteDialog.__proto__ || Object.getPrototypeOf(InviteDialog)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(InviteDialog, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      values.get('email');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          error = _props.error,
          handleSubmit = _props.handleSubmit,
          submitting = _props.submitting;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_9__messages__["a" /* default */].header),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_redux_form_immutable__["Form"],
          { onSubmit: handleSubmit(this.handleSubmit) },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_redux_form_immutable__["Field"], { name: 'email', component: __WEBPACK_IMPORTED_MODULE_8__components_Form_FormField__["a" /* default */], type: 'text', placeholder: 'e-mail' }),
          error && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'strong',
            null,
            error
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__components_Button__["a" /* default */],
              { type: 'submit', disabled: submitting },
              'Submit'
            )
          )
        )
      );
    }
  }]);

  return InviteDialog;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

InviteDialog.propTypes = {
  submitting: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].bool,
  handleSubmit: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].func,
  error: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].any
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var mapStateToProps = function mapStateToProps() {
  return {};
};

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_redux_form_immutable__["reduxForm"])({ form: 'join', validate: validate, warn: warn })(InviteDialog));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ "./app/containers/InviteDialog/messages.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(8);
/**
 * Created by helge on 10.03.17.
 */



/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["defineMessages"])({
  header: {
    id: 'app.containers.JoinDialog.header',
    defaultMessage: 'Invite a friend:'
  }
});

/***/ },

/***/ "./app/containers/JoinDialog/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_rangeslider__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_rangeslider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_rangeslider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_rangeslider_lib_index_css__ = __webpack_require__("./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_rangeslider_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_rangeslider_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reselect__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Button__ = __webpack_require__("./app/components/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_H2__ = __webpack_require__("./app/components/H2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Table_selectors__ = __webpack_require__("./app/containers/Table/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AccountProvider_selectors__ = __webpack_require__("./app/containers/AccountProvider/selectors.js");
/* unused harmony export JoinDialog */





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  JoinDialog: {
    displayName: 'JoinDialog'
  }
};

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/containers/JoinDialog/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1__Users_helge_WebstormProjects_ab_web_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: '/Users/helge/WebstormProjects/ab-web/app/containers/JoinDialog/index.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0__Users_helge_WebstormProjects_ab_web_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformHmrLibIndexJs2(_UsersHelgeWebstormProjectsAbWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}












var JoinDialog = _wrapComponent('JoinDialog')(function (_React$Component) {
  _inherits(JoinDialog, _React$Component);

  // eslint-disable-line react/prefer-stateless-function

  function JoinDialog(props) {
    _classCallCheck(this, JoinDialog);

    var _this = _possibleConstructorReturn(this, (JoinDialog.__proto__ || Object.getPrototypeOf(JoinDialog)).call(this, props));

    _this.state = {
      amount: props.sb * 40
    };
    _this.updateAmount = _this.updateAmount.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(JoinDialog, [{
    key: 'updateAmount',
    value: function updateAmount(value) {
      var amount = value;
      this.setState({ amount: amount });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.handleJoin(this.props.pos, this.state.amount);
    }
  }, {
    key: 'render',
    value: function render() {
      var min = this.props.sb * 40;
      var tableMax = this.props.sb * 200;
      var max = this.props.balance < tableMax ? this.props.balance : tableMax;
      if (this.props.balance < min) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          { style: { minWidth: '20em' } },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9__components_H2__["a" /* default */],
            null,
            'Sorry!'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            null,
            'Your balance is not sufficient to join this table!'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Button__["a" /* default */],
            { onClick: this.props.modalDismiss },
            'OK'
          )
        );
      }
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        { style: { minWidth: '20em' } },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_rangeslider___default.a, {
          'data-orientation': 'vertical',
          value: this.state.amount,
          tooltip: false,
          min: min,
          max: max,
          step: 1,
          onChange: this.updateAmount
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          null,
          ' Max: ',
          max
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          null,
          this.state ? this.state.amount : min
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__components_Button__["a" /* default */],
          { onClick: this.handleSubmit },
          'Join'
        )
      );
    }
  }]);

  return JoinDialog;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_reselect__["createStructuredSelector"])({
  sb: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__Table_selectors__["p" /* makeSbSelector */])(),
  proxyAddr: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__AccountProvider_selectors__["f" /* makeSelectProxyAddr */])()
});

JoinDialog.propTypes = {
  handleJoin: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].func,
  modalDismiss: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].func,
  pos: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].any,
  sb: __WEBPACK_IMPORTED_MODULE_2_react__["PropTypes"].number,
  balance: __WEBPACK_IMPORTED_MODULE_2_react___default.a.PropTypes.number
};

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(JoinDialog);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },

/***/ "./app/containers/JoinDialog/messages.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(8);


/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["defineMessages"])({
  header: {
    id: 'app.containers.JoinDialog.header',
    defaultMessage: 'Join Dialog:'
  },
  slides: {
    id: 'app.containers.JoinDialog.slides',
    first: {
      id: 'app.containers.JoinDialog.slides.first',
      header: {
        id: 'app.containers.JoinDialog.slides.first.header',
        defaultMessage: 'Request send!'
      },
      text: {
        id: 'app.containers.JoinDialog.slides.first.text',
        defaultMessage: 'Waiting for the blockchain to confirm your request. This usually takes a couple of seconds up to about \n                        2 minutes!'
      }
    },
    second: {
      id: 'app.containers.JoinDialog.slides.first',
      header: {
        id: 'app.containers.JoinDialog.slides.second.header',
        defaultMessage: 'Different Seat States'
      },
      active: {
        id: 'app.containers.JoinDialog.slides.second.active',
        defaultMessage: 'Player is active. But it is not his turn.'
      },
      isTurn: {
        id: 'app.containers.JoinDialog.slides.second.isTurn',
        defaultMessage: 'It is this players turn '
      },
      sitOut: {
        id: 'app.containers.JoinDialog.slides.second.sitOut',
        defaultMessage: 'Player is in sitout or all-in '
      }
    },
    third: {
      id: 'app.containers.JoinDialog.slides.first',
      header: {
        id: 'app.containers.JoinDialog.slides.second.header',
        defaultMessage: 'Your funds are secure!'
      },
      text: {
        id: 'app.containers.JoinDialog.slides.second.active',
        defaultMessage: 'Funds are stored in a smart contract on the blockchain. You are in full control!'
      }
    }
  }
});

/***/ },

/***/ "./app/containers/JoinDialog/slides.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_variables__ = __webpack_require__("./app/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grid_styled__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grid_styled___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grid_styled__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_H1__ = __webpack_require__("./app/components/H1/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_RadialProgress__ = __webpack_require__("./app/components/RadialProgress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages__ = __webpack_require__("./app/containers/JoinDialog/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Slides__ = __webpack_require__("./app/components/Slides/index.js");
var _templateObject = _taggedTemplateLiteral(['\n    font-size: 8em;\n    text-align: center;\n'], ['\n    font-size: 8em;\n    text-align: center;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var StyledDiv = __WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject);

function JoinSlides() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_8__components_Slides__["a" /* default */],
    { width: 600, height: 400 },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__components_H1__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_7__messages__["a" /* default */].slides.first.header)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_7__messages__["a" /* default */].slides.first.text)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledDiv,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-cogs fa-5' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__components_H1__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_7__messages__["a" /* default */].slides.second.header)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_grid_styled___default.a,
        { sm: 1 / 3 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_RadialProgress__["a" /* default */], {
          percent: '100',
          strokeWidth: '10',
          strokeColor: __WEBPACK_IMPORTED_MODULE_3_variables__["c" /* baseColor */]
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_7__messages__["a" /* default */].slides.second.active)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_grid_styled___default.a,
        { sm: 1 / 3 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_RadialProgress__["a" /* default */], {
          percent: '100',
          strokeWidth: '10',
          strokeColor: __WEBPACK_IMPORTED_MODULE_3_variables__["g" /* green */]
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_7__messages__["a" /* default */].slides.second.isTurn)
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_grid_styled___default.a,
        { sm: 1 / 3 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_RadialProgress__["a" /* default */], {
          percent: '100',
          strokeWidth: '10',
          strokeColor: __WEBPACK_IMPORTED_MODULE_3_variables__["k" /* gray */]
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_7__messages__["a" /* default */].slides.second.sitOut)
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__components_H1__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_7__messages__["a" /* default */].slides.third.header)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_7__messages__["a" /* default */].slides.third.text)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledDiv,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-shield fa-5' })
      )
    )
  );
}

/* harmony default export */ exports["a"] = JoinSlides;

/***/ },

/***/ "./app/containers/Seat/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_actions__ = __webpack_require__("./app/containers/App/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Table_actions__ = __webpack_require__("./app/containers/Table/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__("./app/containers/Seat/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Table_selectors__ = __webpack_require__("./app/containers/Table/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__("./app/app.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Seat__ = __webpack_require__("./app/components/Seat/index.js");
/* unused harmony export mapDispatchToProps */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by helge on 24.08.16.
 */
















var Seat = function (_React$PureComponent) {
  _inherits(Seat, _React$PureComponent);

  // eslint-disable-line react/prefer-stateless-function
  function Seat(props) {
    _classCallCheck(this, Seat);

    var _this = _possibleConstructorReturn(this, (Seat.__proto__ || Object.getPrototypeOf(Seat)).call(this, props));

    _this.state = { wasMostRecentAction: false };
    return _this;
  }

  _createClass(Seat, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      // Show Action if most recent action
      this.setState({
        wasMostRecentAction: nextProps.lastAmount === this.props.lastAmount
      });

      // manage timer
      var timeLeft = __WEBPACK_IMPORTED_MODULE_7__app_config__["m" /* timeoutSeconds */];
      if (nextProps.whosTurn === nextProps.pos) {
        // TODO: Make timeLeft count down from 100 - 0, right now is 360 - 0?
        if (!this.interval) {
          this.interval = setInterval(function () {
            if (_this2.props.changed) {
              var deadline = _this2.props.changed + __WEBPACK_IMPORTED_MODULE_7__app_config__["m" /* timeoutSeconds */];
              timeLeft = deadline - Math.floor(Date.now() / 1000);
              if (timeLeft <= 0) {
                clearInterval(_this2.interval);
                _this2.interval = null;
              } else {
                _this2.setState({ timeLeft: timeLeft });
              }
            }
          }, 1000);
        }
      } else if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
      this.setState({ timeLeft: timeLeft });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // manage timer
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var timeLeft = this.state && this.props.whosTurn === this.props.pos ? this.state.timeLeft * 100 / __WEBPACK_IMPORTED_MODULE_7__app_config__["m" /* timeoutSeconds */] : __WEBPACK_IMPORTED_MODULE_7__app_config__["m" /* timeoutSeconds */];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Seat__["a" /* default */], _extends({}, this.props, {
        timeLeft: timeLeft,
        wasMostRecentAction: this.state.wasMostRecentAction
      }));
    }
  }]);

  return Seat;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

function mapDispatchToProps() {
  return {
    modalAdd: function modalAdd(node) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__App_actions__["b" /* modalAdd */])(node);
    },
    modalDismiss: function modalDismiss() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__App_actions__["c" /* modalDismiss */])();
    },
    pendingToggle: function pendingToggle(tableAddr, handId, pos) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__Table_actions__["e" /* pendingToggle */])(tableAddr, handId, pos);
    }
  };
}

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_reselect__["createStructuredSelector"])({
  state: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Table_selectors__["l" /* makeHandStateSelector */])(),
  dealer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["d" /* makeDealerSelector */])(),
  open: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["e" /* makeOpenSelector */])(),
  seatStatus: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["f" /* makeSeatStatusSelector */])(),
  pending: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["g" /* makePendingSelector */])(),
  sitout: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["h" /* makeSitoutSelector */])(),
  showStatus: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["i" /* makeShowStatusSelector */])(),
  coords: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["j" /* makeCoordsSelector */])(),
  amountCoords: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["k" /* makeAmountCoordsSelector */])(),
  myPos: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Table_selectors__["i" /* makeMyPosSelector */])(),
  blocky: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["l" /* makeBlockySelector */])(),
  whosTurn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Table_selectors__["u" /* makeWhosTurnSelector */])(),
  lastAmount: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["m" /* makeLastAmountSelector */])(),
  lastAction: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["n" /* makeLastActionSelector */])(),
  holeCards: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["o" /* makeCardsSelector */])(),
  folded: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["p" /* makeFoldedSelector */])(),
  stackSize: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["q" /* makeStackSelector */])()
});

Seat.propTypes = {
  lastAmount: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  changed: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  whosTurn: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  pos: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number
};

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Seat);

/***/ },

/***/ "./app/containers/Table/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pusher_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_raven_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_intl__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_poker_helper__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_poker_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_poker_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Card__ = __webpack_require__("./app/components/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Table_Board__ = __webpack_require__("./app/components/Table/Board.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Seat__ = __webpack_require__("./app/containers/Seat/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Button__ = __webpack_require__("./app/components/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Slides__ = __webpack_require__("./app/components/Slides/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_nicknames__ = __webpack_require__("./app/services/nicknames.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__messages__ = __webpack_require__("./app/containers/Table/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_config__ = __webpack_require__("./app/app.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__App_actions__ = __webpack_require__("./app/containers/App/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__actions__ = __webpack_require__("./app/containers/Table/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__AccountProvider_selectors__ = __webpack_require__("./app/containers/AccountProvider/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Seat_selectors__ = __webpack_require__("./app/containers/Seat/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__AccountProvider_actions__ = __webpack_require__("./app/containers/AccountProvider/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__selectors__ = __webpack_require__("./app/containers/Table/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_Table__ = __webpack_require__("./app/components/Table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__AccountProvider_web3Connect__ = __webpack_require__("./app/containers/AccountProvider/web3Connect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_tableService__ = __webpack_require__("./app/services/tableService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__JoinDialog__ = __webpack_require__("./app/containers/JoinDialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__JoinDialog_slides__ = __webpack_require__("./app/containers/JoinDialog/slides.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__InviteDialog__ = __webpack_require__("./app/containers/InviteDialog/index.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "Table", function() { return Table; });
/* harmony export (immutable) */ exports["mapDispatchToProps"] = mapDispatchToProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by helge on 24.08.16.
 */
// react + redux








// components and styles








// config data



// actions

// selectors















var getTableData = function getTableData(table, props) {
  var lineup = table.getLineup.callPromise();
  var sb = table.smallBlind.callPromise();
  return Promise.all([lineup, sb]).then(function (rsp) {
    props.lineupReceived(table.address, rsp[0], rsp[1]);
    return Promise.resolve();
  });
};

var Table = function (_React$PureComponent) {
  _inherits(Table, _React$PureComponent);

  // eslint-disable-line react/prefer-stateless-function

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.watchTable = _this.watchTable.bind(_this);
    _this.handleUpdate = _this.handleUpdate.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    _this.handleSitout = _this.handleSitout.bind(_this);
    _this.handleJoin = _this.handleJoin.bind(_this);
    _this.handleJoinComplete = _this.handleJoinComplete.bind(_this);
    _this.handleRebuy = _this.handleRebuy.bind(_this);
    _this.isTaken = _this.isTaken.bind(_this);

    _this.tableAddr = props.params.tableAddr;
    _this.web3 = props.web3Redux.web3;
    _this.table = _this.web3.eth.contract(__WEBPACK_IMPORTED_MODULE_14__app_config__["b" /* ABI_TABLE */]).at(_this.tableAddr);
    _this.token = _this.web3.eth.contract(__WEBPACK_IMPORTED_MODULE_14__app_config__["c" /* ABI_TOKEN_CONTRACT */]).at(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__app_config__["a" /* conf */])().ntzAddr);
    // register event listener for table
    _this.tableEvents = _this.table.allEvents({ fromBlock: 'latest' });
    _this.tableEvents.watch(_this.watchTable);

    // getting table data from oracle
    _this.pusher = new __WEBPACK_IMPORTED_MODULE_3_pusher_js___default.a('d4832b88a2a81f296f53', { cluster: 'eu', encrypted: true });
    _this.channel = _this.pusher.subscribe(_this.tableAddr);
    getTableData(_this.table, props).then(function () {
      _this.props.handRequest(_this.tableAddr, props.params.handId); // get initial state
      _this.channel.bind('update', _this.handleUpdate); // bind to future state updates
    });
    var handId = parseInt(_this.props.params.handId, 10);
    __WEBPACK_IMPORTED_MODULE_4_raven_js___default.a.setTagsContext({
      tableAddr: _this.tableAddr,
      handId: handId
    });
    return _this;
  }

  _createClass(Table, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var handId = parseInt(this.props.params.handId, 10);
      // take care of timing out players
      if (this.props.myPos !== undefined && this.props.hand && this.props.hand.get('changed') < nextProps.hand.get('changed')) {
        if (this.timeOut) {
          clearTimeout(this.timeOut);
        }

        var passed = Math.floor(Date.now() / 1000) - nextProps.hand.get('changed');
        passed = passed > __WEBPACK_IMPORTED_MODULE_14__app_config__["d" /* TIMEOUT_PERIOD */] ? __WEBPACK_IMPORTED_MODULE_14__app_config__["d" /* TIMEOUT_PERIOD */] : passed;
        var random = Math.random() * 9000;
        var timeOut = __WEBPACK_IMPORTED_MODULE_14__app_config__["d" /* TIMEOUT_PERIOD */] * 1000 - passed * 1000 + random;

        if (timeOut > 0) {
          this.timeOut = setTimeout(function () {
            var table = new __WEBPACK_IMPORTED_MODULE_23__services_tableService__["a" /* default */](_this2.props.params.tableAddr);
            table.timeOut().then(function (res) {
              __WEBPACK_IMPORTED_MODULE_4_raven_js___default.a.captureMessage('timeout: ' + res, { tags: {
                  tableAddr: _this2.props.params.tableAddr,
                  handId: handId
                } });
            });
          }, timeOut);
        }
      }

      // get balance of player
      this.balance = this.token.balanceOf(this.props.proxyAddr);
      if (!this.balance && nextProps.proxyAddr) {
        this.token.balanceOf.call(nextProps.proxyAddr);
      }

      // show winner and forward browser to url of next hand
      this.pushed = this.pushed ? this.pushed : {};
      if (nextProps.latestHand) {
        var nextHandStr = nextProps.latestHand.toString();
        if (nextProps.latestHand > handId && !this.pushed[nextHandStr]) {
          this.pushed[nextHandStr] = true;
          setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_react_router__["browserHistory"].push('/table/' + _this2.tableAddr + '/hand/' + nextHandStr);
          }, 2000);
        }
      }

      // fetch hands that we might need for stack calculation
      if (nextProps.missingHands && nextProps.missingHands.length > 0) {
        this.getHandStarted = this.getHandStarted ? this.getHandStarted : {};
        for (var i = 0; i < nextProps.missingHands.length; i += 1) {
          if (!this.getHandStarted[nextProps.missingHands[i].toString()]) {
            this.getHandStarted[nextProps.missingHands[i].toString()] = true;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_23__services_tableService__["b" /* getHand */])(this.tableAddr, nextProps.missingHands[i]).then(function (rsp) {
              _this2.props.updateReceived(_this2.tableAddr, rsp);
            });
          }
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeOut) {
        clearInterval(this.timeOut);
      }
      this.channel.unbind('update', this.handleUpdate);

      // Note: with wsProvider, the request made by stopWatching will throw an error
      try {
        this.tableEvents.stopWatching();
      } catch (e) {
        this.tableEvents = null;
      }
    }
  }, {
    key: 'handleUpdate',
    value: function handleUpdate(event) {
      if (event.type === 'chatMessage') {
        var msg = __WEBPACK_IMPORTED_MODULE_6_poker_helper__["Receipt"].parse(event.payload);
        this.props.addMessage(msg.message, msg.tableAddr, msg.signer, msg.created);
      } else if (event.type === 'handUpdate') {
        this.props.updateReceived(this.tableAddr, event.payload);
      } else if (event.type === 'joinRequest') {
        // not yet implemented
      }
    }
  }, {
    key: 'handleRebuy',
    value: function handleRebuy(amount) {
      this.table.rebuy.sendTransaction(amount);

      var slides = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11__components_Slides__["a" /* default */],
        { width: 600, height: 400 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Request for rebuy sent! Please wait!'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Here is the introduction to the online poker game'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'FAQ'
          )
        )
      );

      this.props.modalDismiss();
      this.props.modalAdd(slides);
    }
  }, {
    key: 'handleJoin',
    value: function handleJoin(pos, amount) {
      this.token.approve.sendTransaction(this.tableAddr, amount);
      this.table.join.sendTransaction(amount, this.props.signerAddr, pos + 1, '');

      var slides = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__JoinDialog_slides__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10__components_Button__["a" /* default */],
          { size: 'large', onClick: this.props.modalDismiss },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_13__messages__["a" /* default */].joinModal.buttonDismiss)
        )
      );

      this.props.modalDismiss();
      this.props.modalAdd(slides);
      this.props.pendingToggle(this.tableAddr, this.props.params.handId, pos);
    }
  }, {
    key: 'isTaken',
    value: function isTaken(open, myPos, pending, pos) {
      if (!this.props.account.loggedIn) {
        var loc = this.props.location;
        var curUrl = '' + loc.pathname + loc.search + loc.hash;

        __WEBPACK_IMPORTED_MODULE_2_react_router__["browserHistory"].push('/login?redirect=' + curUrl);
        return;
      }

      var balance = void 0;

      if (this.balance) {
        balance = parseInt(this.balance.toString(), 10);
      }

      if (open && myPos === undefined && !pending) {
        this.props.modalAdd(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__JoinDialog__["a" /* default */], {
          pos: pos,
          handleJoin: this.handleJoin,
          modalDismiss: this.props.modalDismiss,
          params: this.props.params,
          balance: balance
        }));
      } else if (open && this.props.myPos !== undefined && !pending) {
        this.props.modalAdd(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__InviteDialog__["a" /* default */], null));
      }
    }
  }, {
    key: 'handleSitout',
    value: function handleSitout() {
      // Note: sitout value possibilities
      //    sitout > 0, for enabled "play"
      //    sitout === 0, for disabled "play"
      //    sitout === undefined, for enabled "pause"
      //    sitout === null, for disabled "pause"
      // And we are only able to toggle sitout when it's enabled.
      var sitout = this.props.sitout;

      if (sitout !== undefined && sitout <= 0) return null;
      if (this.props.sitoutAmount <= -1) return null;

      // Note: if it's enabled "play" (> 0), then set it to disabled "pause" (null)
      // otherwise it's enabled "pause", then set it to disabled "play" (0)
      var nextSitoutState = sitout > 0 ? null : 0;
      var handId = parseInt(this.props.params.handId, 10);

      var sitoutAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__actions__["a" /* bet */])(this.props.params.tableAddr, handId, this.props.sitoutAmount, this.props.privKey, this.props.myPos, this.props.lastReceipt, {
        originalSitout: sitout,
        nextSitoutState: nextSitoutState
      });
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__actions__["b" /* sitOutToggle */])(sitoutAction, this.props.dispatch);
    }
  }, {
    key: 'handleLeave',
    value: function handleLeave(pos) {
      var _this3 = this;

      var handId = parseInt(this.props.params.handId, 10);
      var state = this.props.state;
      var exitHand = state !== 'waiting' ? handId : handId - 1;
      var table = new __WEBPACK_IMPORTED_MODULE_23__services_tableService__["a" /* default */](this.props.params.tableAddr, this.props.privKey);
      this.props.setExitHand(this.tableAddr, this.props.params.handId, pos, exitHand);
      var statusElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Please wait until your leave request is processed! Until then your status will be shown as pending.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10__components_Button__["a" /* default */],
          { onClick: this.props.modalDismiss },
          'OK!'
        )
      );

      this.props.modalDismiss();
      this.props.modalAdd(statusElement);

      return table.leave(exitHand).catch(function (err) {
        __WEBPACK_IMPORTED_MODULE_4_raven_js___default.a.captureException(err, { tags: {
            tableAddr: _this3.props.params.tableAddr,
            handId: handId
          } });
      });
    }
  }, {
    key: 'handleJoinComplete',
    value: function handleJoinComplete() {
      var lineup = this.props.lineup ? this.props.lineup.toJS() : null;
      if (lineup && this.props.state !== 'waiting' && typeof lineup[this.props.myPos].sitout === 'number') {
        var handId = parseInt(this.props.params.handId, 10);
        var sitoutAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__actions__["a" /* bet */])(this.props.params.tableAddr, handId, 1, this.props.privKey, this.props.myPos);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__actions__["b" /* sitOutToggle */])(sitoutAction, this.props.dispatch);
      }
      this.props.modalDismiss();
    }
  }, {
    key: 'watchTable',
    value: function watchTable(error, result) {
      var _this4 = this;

      if (error) {
        var errorElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          error,
          '/'
        );
        this.props.modalAdd(errorElement);
        return;
      }

      // dispatch action according to event type
      switch (result.event) {
        case 'Join':
          {
            var lineupReceivedArgs = function lineupReceivedArgs(rsp) {
              return [_this4.tableAddr, rsp, _this4.props.data.get('smallBlind'), _this4.props.params.handId];
            };

            if (result.args && result.args.addr === this.props.proxyAddr) {
              // notify backend about new block
              this.props.blockNotify();
              // show modal

              // const statusElement = (<div>
              //   <h2>Join Successful!</h2>
              //   <Button onClick={this.handleJoinComplete}>OK!</Button>
              // </div>);
              // this.props.modalDismiss();
              // this.props.modalAdd(statusElement);
            }

            // update lineup when join successful
            this.table.getLineup.callPromise().then(function (rsp) {
              var _props;

              (_props = _this4.props).lineupReceived.apply(_props, _toConsumableArray(lineupReceivedArgs(rsp)));
            });

            break;
          }

        case 'NettingRequest':
          {
            // disptach action to sign netting request
            break;
          }

        case 'Error':
          {
            if (!result.args || result.args.addr !== this.props.proxyAddr) break;

            var msg = 'Ups Something went wrong';
            var errorCode = result.args.errorCode.toNumber();
            this.props.pendingToggle(this.tableAddr, this.props.params.handId);
            if (errorCode === 1) {
              msg = 'Wrong Amount';
            }

            if (errorCode === 2) {
              msg = 'Not enough Moniezz';
            }

            if (errorCode === 3) {
              msg = 'You are already in lineup';
            }

            if (errorCode === 4) {
              msg = 'Sorry the Seat is taken';
            }

            var _errorElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                msg
              )
            );

            this.props.modalAdd(_errorElement);
            break;
          }

        default:
          {
            break;
          }
      }
    }
  }, {
    key: 'renderSeats',
    value: function renderSeats(lineup, changed) {
      var seats = [];

      if (!lineup) {
        return seats;
      }
      for (var i = 0; i < lineup.length; i += 1) {
        var sitout = lineup[i].sitout;
        var seat = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Seat__["a" /* default */], {
          key: i,
          pos: i,
          sitout: sitout,
          signerAddr: lineup[i].address,
          params: this.props.params,
          changed: changed,
          isTaken: this.isTaken
        });
        seats.push(seat);
      }
      return seats;
    }
  }, {
    key: 'renderBoard',
    value: function renderBoard() {
      var board = [];
      var cards = this.props.board;
      var cardSize = 50;
      if (cards && cards.length > 0) {
        for (var i = 0; i < cards.length; i += 1) {
          board.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__components_Table_Board__["a" /* BoardCardWrapper */],
            { key: i },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Card__["a" /* default */], { cardNumber: cards[i], size: cardSize })
          ));
        }
      }
      return board;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var lineup = this.props.lineup ? this.props.lineup.toJS() : null;
      var changed = this.props.hand ? this.props.hand.get('changed') : null;
      var seats = this.renderSeats(lineup, changed);
      var board = this.renderBoard();
      var winners = [];
      if (this.props.winners && this.props.winners.length > 0) {
        winners = this.props.winners.map(function (winner, index) {
          var handString = winner.hand ? 'with ' + winner.hand : '';
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: index },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__services_nicknames__["a" /* nickNameByAddress */])(winner.addr),
            ' won ',
            winner.amount,
            ' ',
            handString
          );
        });
      }
      var sb = this.props.data && this.props.data.get('smallBlind') ? this.props.data.get('smallBlind') : 0;
      var pending = lineup && lineup[this.props.myPos] ? lineup[this.props.myPos].pending : false;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        this.props.state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__components_Table__["a" /* default */], _extends({}, this.props, {
          id: 'table',
          sb: sb,
          winners: winners,
          myHand: this.props.myHand,
          pending: pending,
          sitout: this.props.sitout,
          board: board,
          seats: seats,
          onLeave: function onLeave() {
            return _this5.handleLeave(_this5.props.myPos);
          },
          onSitout: this.handleSitout
        }))
      );
    }
  }]);

  return Table;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

function mapDispatchToProps() {
  return {
    handRequest: function handRequest(tableAddr, handId) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__actions__["c" /* handRequest */])(tableAddr, handId);
    },
    lineupReceived: function lineupReceived() {
      return __WEBPACK_IMPORTED_MODULE_16__actions__["d" /* lineupReceived */].apply(undefined, arguments);
    },
    modalAdd: function modalAdd(node) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__App_actions__["b" /* modalAdd */])(node);
    },
    modalDismiss: function modalDismiss() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__App_actions__["c" /* modalDismiss */])();
    },
    pendingToggle: function pendingToggle(tableAddr, handId, pos) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__actions__["e" /* pendingToggle */])(tableAddr, handId, pos);
    },
    setExitHand: function setExitHand(tableAddr, handId, pos, exitHand) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__actions__["f" /* setExitHand */])(tableAddr, handId, pos, exitHand);
    },
    updateReceived: function updateReceived(tableAddr, hand) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__actions__["g" /* updateReceived */])(tableAddr, hand);
    },
    addMessage: function addMessage(message, tableAddr, privKey, created) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__actions__["h" /* addMessage */])(message, tableAddr, privKey, created);
    },
    blockNotify: function blockNotify() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__AccountProvider_actions__["e" /* blockNotify */])();
    }
  };
}

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createStructuredSelector"])({
  account: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__AccountProvider_selectors__["d" /* default */])(),
  board: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["a" /* makeBoardSelector */])(),
  data: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["b" /* makeTableDataSelector */])(),
  hand: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["c" /* makeHandSelector */])(),
  isMyTurn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["d" /* makeIsMyTurnSelector */])(),
  lineup: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["e" /* makeLineupSelector */])(),
  latestHand: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["f" /* makeLatestHandSelector */])(),
  lastReceipt: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__Seat_selectors__["a" /* makeLastReceiptSelector */])(),
  missingHands: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["g" /* makeMissingHandSelector */])(),
  myHand: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["h" /* makeMyHandValueSelector */])(),
  myPos: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["i" /* makeMyPosSelector */])(),
  potSize: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["j" /* makePotSizeSelector */])(),
  privKey: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__AccountProvider_selectors__["e" /* makeSelectPrivKey */])(),
  proxyAddr: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__AccountProvider_selectors__["f" /* makeSelectProxyAddr */])(),
  sitoutAmount: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["k" /* makeSitoutAmountSelector */])(),
  state: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["l" /* makeHandStateSelector */])(),
  signerAddr: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__AccountProvider_selectors__["g" /* makeSignerAddrSelector */])(),
  sitout: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["m" /* makeMySitoutSelector */])(),
  winners: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__selectors__["n" /* makeSelectWinners */])()
});

Table.propTypes = {
  state: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  board: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  hand: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  myHand: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  lineup: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  sitout: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.any,
  params: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  privKey: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  lastReceipt: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  sitoutAmount: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
  proxyAddr: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  signerAddr: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  web3Redux: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.any,
  data: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.any,
  myPos: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.any,
  modalAdd: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  blockNotify: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  handRequest: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  pendingToggle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  setExitHand: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  modalDismiss: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  winners: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  lineupReceived: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  updateReceived: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  addMessage: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  location: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  account: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object
};

/* harmony default export */ exports["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__AccountProvider_web3Connect__["a" /* default */])(mapStateToProps, mapDispatchToProps)(Table);

/***/ },

/***/ "./app/containers/Table/messages.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(8);


/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["defineMessages"])({
  joinModal: {
    id: 'app.containers.Table.joinModal',
    buttonDismiss: {
      id: 'app.containers.Table.joinModal.buttonDismiss',
      defaultMessage: 'Got It!'
    }
  }
});

/***/ },

/***/ "./app/containers/TableMenu/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AccountProvider_actions__ = __webpack_require__("./app/containers/AccountProvider/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__("./app/containers/TableMenu/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AccountProvider_selectors__ = __webpack_require__("./app/containers/AccountProvider/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__("./app/containers/TableMenu/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_TableMenu__ = __webpack_require__("./app/components/TableMenu/index.js");










var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleClickLogout: function handleClickLogout() {
      __WEBPACK_IMPORTED_MODULE_2_react_router__["browserHistory"].push('/login');
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__AccountProvider_actions__["d" /* setAuthState */])({ loggedIn: false }));
    },
    toggleMenuOpen: function toggleMenuOpen() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__actions__["a" /* toggleMenuOpen */])());
    },
    toggleMenuActive: function toggleMenuActive() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* toggleMenuActive */])());
    }
  };
};

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createStructuredSelector"])({
  loggedIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__AccountProvider_selectors__["h" /* makeSelectLoggedIn */])(),
  open: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__selectors__["a" /* makeSelectOpen */])(),
  active: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__selectors__["b" /* makeSelectActive */])(),
  blocky: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__AccountProvider_selectors__["i" /* makeBlockySelector */])(),
  nickName: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__AccountProvider_selectors__["j" /* makeNickNameSelector */])()
});

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_7__components_TableMenu__["a" /* default */]);

/***/ },

/***/ "./app/containers/TableMenu/selectors.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return makeSelectOpen; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return makeSelectActive; });


/**
 * Direct selector to the state domain
 */
var selectTableMenu = function selectTableMenu(state) {
  return state.get('tableMenu');
};

/**
 * Other specific selectors
 */
var makeSelectOpen = function makeSelectOpen() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(selectTableMenu, function (tableMenu) {
    return tableMenu.get('open');
  });
};

var makeSelectActive = function makeSelectActive() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(selectTableMenu, function (tableMenu) {
    return tableMenu.get('active');
  });
};

/***/ },

/***/ "./node_modules/css-loader/index.js!./node_modules/rc-slider/assets/index.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  -ms-touch-action: none;\n      touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n}\n.rc-slider-handle {\n  position: absolute;\n  margin-left: -7px;\n  margin-top: -5px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  -ms-touch-action: pan-x;\n      touch-action: pan-x;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot:first-child {\n  margin-left: -4px;\n}\n.rc-slider-dot:last-child {\n  margin-left: -4px;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  margin-bottom: -7px;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n", ""]);

// exports


/***/ },

/***/ "./node_modules/css-loader/index.js!./node_modules/react-rangeslider/lib/index.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "/**\n* Rangeslider\n*/\n.rangeslider {\n  margin: 20px 0;\n  position: relative;\n  background: #e6e6e6;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n.rangeslider,\n.rangeslider .rangeslider__fill {\n  display: block;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n}\n.rangeslider .rangeslider__handle {\n  background: #fff;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n}\n.rangeslider .rangeslider__handle:hover .rangeslider__tooltip {\n  opacity: 1;\n}\n.rangeslider .rangeslider__tooltip {\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-weight: normal;\n  font-size: 14px;\n  transition: all 100ms ease-in;\n  border-radius: 4px;\n  display: inline-block;\n  color: white;\n  opacity: 0;\n}\n.rangeslider .rangeslider__tooltip span {\n  margin-top: 12px;\n  display: inline-block;\n  line-height: 100%;\n}\n.rangeslider .rangeslider__tooltip:after {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n/**\n* Rangeslider - Horizontal slider\n*/\n.rangeslider-horizontal {\n  height: 12px;\n  border-radius: 10px;\n}\n.rangeslider-horizontal .rangeslider__fill {\n  height: 100%;\n  background-color: #7CB342;\n  border-radius: 10px;\n  top: 0;\n}\n.rangeslider-horizontal .rangeslider__handle {\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  top: -10px;\n}\n.rangeslider-horizontal .rangeslider__handle:after {\n  content: ' ';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 6px;\n  left: 6px;\n  border-radius: 50%;\n  background-color: #dadada;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n}\n.rangeslider-horizontal .rangeslider__tooltip {\n  top: -55px;\n}\n.rangeslider-horizontal .rangeslider__tooltip:after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-top: 8px solid rgba(0, 0, 0, 0.8);\n  left: 12px;\n  bottom: -8px;\n}\n/**\n* Rangeslider - Vertical slider\n*/\n.rangeslider-vertical {\n  margin: 20px auto;\n  height: 150px;\n  max-width: 10px;\n  background-color: transparent;\n}\n.rangeslider-vertical .rangeslider__fill,\n.rangeslider-vertical .rangeslider__handle {\n  position: absolute;\n}\n.rangeslider-vertical .rangeslider__fill {\n  width: 100%;\n  background-color: #7CB342;\n  box-shadow: none;\n  bottom: 0;\n}\n.rangeslider-vertical .rangeslider__handle {\n  width: 30px;\n  height: 10px;\n  left: -10px;\n  box-shadow: none;\n}\n.rangeslider-vertical .rangeslider__tooltip {\n  left: -55px;\n  top: -15px;\n}\n.rangeslider-vertical .rangeslider__tooltip:after {\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid rgba(0, 0, 0, 0.8);\n  left: 100%;\n  top: 12px;\n}\n/**\n* Rangeslider - Reverse\n*/\n.rangeslider-reverse.rangeslider-horizontal .rangeslider__fill {\n  right: 0;\n}\n.rangeslider-reverse.rangeslider-vertical .rangeslider__fill {\n  top: 0;\n  bottom: inherit;\n}\n/**\n* Rangeslider - Labels\n*/\n.rangeslider-vertical .rangeslider__label-list {\n  position: relative;\n  list-style-type: none;\n  margin: 0 0 0 24px;\n  padding: 0;\n  text-align: left;\n  width: 250px;\n}\n.rangeslider-vertical .rangeslider__label-list .rangeslider__label {\n  position: absolute;\n}\n.rangeslider-vertical .rangeslider__label-list .rangeslider__label::before {\n  content: '';\n  width: 10px;\n  height: 2px;\n  background: black;\n  position: absolute;\n  left: -14px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: -1;\n}\n.rangeslider__label-list .rangeslider__label {\n  position: absolute;\n  font-size: 14px;\n  cursor: pointer;\n  display: inline-block;\n  top: 10px;\n}\n", ""]);

// exports


/***/ },

/***/ "./node_modules/rc-slider/assets/index.css":
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/rc-slider/assets/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/rc-slider/assets/index.css", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/rc-slider/assets/index.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ "./node_modules/react-rangeslider/lib/index.css":
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/react-rangeslider/lib/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js!./node_modules/react-rangeslider/lib/index.css", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/react-rangeslider/lib/index.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/ab-vector-cards/dist/index.js");

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/pusher-js/dist/web/pusher.js");

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/rc-slider/lib/Slider.js");

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))("./node_modules/react-rangeslider/lib/index.js");

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvQWN0aW9uQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FjdGlvbkJhci9Db250cm9sQmV0UmFpc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQWN0aW9uQmFyL0NvbnRyb2xCbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvQ29udHJvbENoZWNrQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvQ29udHJvbEZvbGQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQWN0aW9uQmFyL0ZsYWdBbW91bnRCZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQWN0aW9uQmFyL0ZsYWdBbW91bnRDYWxsLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FjdGlvbkJhci9GbGFnQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FjdGlvbkJhci9TbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQWN0aW9uQmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FjdGlvbkJhci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQ2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9DaGF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0N1cnRhaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybU1lc3NhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0gxL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0gyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xhYmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BvdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SYWRpYWxQcm9ncmVzcy9lbmhhbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SYWRpYWxQcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9TZWF0L0J1dHRvbkludml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9TZWF0L0J1dHRvbkpvaW5TZWF0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1NlYXQvQ2FyZHNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU2VhdC9TZWF0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1NlYXQvU2VhdEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU2VhdC9TZWF0VGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU2VhdC9TaXRvdXRUaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9TZWF0L1N0YXR1c0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9TZWF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1NlYXQvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1NsaWRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZS9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVGFibGUvdGFibGVCRy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVGFibGVNZW51L01lbnVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVGFibGVNZW51L01lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RhYmxlTWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZU1lbnUvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0FjY291bnRQcm92aWRlci9nZW5lcmF0ZUNvbnRyYWN0QXBpLmpzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0FjY291bnRQcm92aWRlci93ZWIzQ29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9BY3Rpb25CYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvQWN0aW9uQmFyL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9DaGF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0NoYXQvbWVzc2FnZS1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvQ2hhdC9tZXNzYWdlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvQ3VydGFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9GZWVkYmFja0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnZpdGVEaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvSW52aXRlRGlhbG9nL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0pvaW5EaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvSm9pbkRpYWxvZy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Kb2luRGlhbG9nL3NsaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9TZWF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL1RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL1RhYmxlL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL1RhYmxlTWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UYWJsZU1lbnUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL34vcmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzIiwid2VicGFjazovLy8uL34vcmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3M/NDBiZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3M/ZGFiOCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FiLXZlY3Rvci1jYXJkcy9kaXN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSByZWFjdEJvaWxlcnBsYXRlRGVwcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3B1c2hlci1qcy9kaXN0L3dlYi9wdXNoZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHJlYWN0Qm9pbGVycGxhdGVEZXBzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2xpYi9TbGlkZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHJlYWN0Qm9pbGVycGxhdGVEZXBzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSByZWFjdEJvaWxlcnBsYXRlRGVwcyJdLCJuYW1lcyI6WyJBY3Rpb25CdXR0b24iLCJwcm9wcyIsImRpc2FibGVkIiwiYWN0aXZlIiwibW9kZSIsIm5ld01vZGUiLCJoYW5kbGVUaGlzQ2xpY2siLCJzZXRBY3Rpb25CYXJCZXRTbGlkZXIiLCJzZXRBY3Rpb25CYXJNb2RlIiwiaGFuZGxlQ2xpY2siLCJuYW1lIiwidGV4dCIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImZ1bmMiLCJDb250cm9sQmV0UmFpc2UiLCJhbW91bnRUb0NhbGwiLCJoYW5kbGVBbGxJbiIsImhhbmRsZUJldCIsIm1pblJhaXNlIiwibXlTdGFjayIsInNsaWRlck9wZW4iLCJudW1iZXIiLCJDb250cm9sQ2hlY2tDYWxsIiwiaGFuZGxlQ2FsbCIsImhhbmRsZUNoZWNrIiwiQ29udHJvbEZvbGQiLCJoYW5kbGVGb2xkIiwiRmxhZ0Ftb3VudEJldCIsImFtb3VudCIsIkZsYWdBbW91bnRDYWxsIiwiRmxhZ0J1dHRvbiIsInR5cGUiLCJ0ZXh0VHlwZSIsInN0eWxlcyIsImhhbmRsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiY3Vyc29yIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwicmFpbCIsInRyYWNrIiwic3RhdGUiLCJ2YWx1ZSIsIm9uU2xpZGVyQ2hhbmdlIiwiYmluZCIsIm9uU2xpZGVyVXBkYXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVBbW91bnQiLCJDb21wb25lbnQiLCJTbGlkZXIiLCJBY3Rpb25CYXIiLCJ2aXNpYmxlIiwiaXNSZXF1aXJlZCIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsIkFjdGlvbkJhcldyYXBwZXIiLCJkaXYiLCJDb250cm9sUGFuZWwiLCJDb250cm9sV3JhcHBlciIsIkFjdGlvbkJ1dHRvbldyYXBwZXIiLCJBY3Rpb25JbmRpY2F0b3IiLCJBY3Rpb25UZXh0IiwiU2xpZGVyV3JhcHBlciIsIkZsYWdDb250YWluZXIiLCJGbGFnQnV0dG9uV3JhcHBlciIsIkZsYWdCZXQiLCJGbGFnQ2FsbCIsInZhbHVlcyIsInN1aXRzIiwiQ2FyZCIsInZjIiwibGluayIsInN1aXQiLCJNYXRoIiwiZmxvb3IiLCJjYXJkTnVtYmVyIiwiZm9sZGVkIiwiZ2V0QmFja0RhdGEiLCJzaXplIiwiZ2V0Q2FyZERhdGEiLCJDaGF0UGxhY2Vob2xkZXIiLCJDaGF0Q29udGFpbmVyIiwiQ2hhdEFyZWEiLCJDaGF0Qm94IiwiQ3VydGFpbldyYXBwZXIiLCJpc09wZW4iLCJDdXJ0YWluVG9nZ2xlciIsIkN1cnRhaW5IZWFkZXJDb250YWluZXIiLCJDdXJ0YWluTG9nb0NvbnRhaW5lciIsIkN1cnRhaW5Mb2dvIiwiQ3VydGFpbk5hbWVDb250YWluZXIiLCJDb250YWluZXJOYW1lIiwiY29sb3IiLCJDdXJ0YWluSGVhZGVyIiwiRm9ybUZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsIm1ldGEiLCJ0b3VjaGVkIiwiZXJyb3IiLCJ3YXJuaW5nIiwib2JqZWN0Iiwibm9kZSIsIkZvcm1Hcm91cCIsIkZvcm1FcnJvciIsInNwYW4iLCJGb3JtV2FybmluZyIsIkVycm9yTWVzc2FnZSIsIldhcm5pbmdNZXNzYWdlIiwiSDEiLCJoMSIsIkgyIiwiaDIiLCJJbnB1dFN0eWxlZCIsIkNoZWNrQm94IiwiTGFiZWwiLCJDaGlwIiwiaW5kZXgiLCJDaGlwU3RhY2siLCJBbW91bnQiLCJXcmFwcGVyIiwidG9wIiwibGVmdCIsImNyZWF0ZUNoaXBTdGFja3MiLCJjaGlwVmFscyIsInBvdFNpemUiLCJyZXQiLCJyZWR1Y2UiLCJwcmV2IiwiY2hpcFZhbHVlIiwic3RhY2tzIiwicmVtYWluIiwiY291bnQiLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwic3RlcCIsImkiLCJwdXNoIiwiUG90IiwiY2hpcFN0YWNrcyIsIm1hcCIsInN0YWNrIiwiaiIsImVuaGFuY2VyIiwiV3JhcHBlZENvbXBvbmVudCIsIm5vdyIsIkRhdGUiLCJwYXRoIiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJwcmV2VGltZVN0YW1wIiwiYmdJbWciLCJwZXJjZW50Iiwic3Ryb2tlV2lkdGgiLCJnYXBEZWdyZWUiLCJnYXBQb3NpdGlvbiIsInJhZGl1cyIsImJlZ2luUG9zaXRpb25YIiwiYmVnaW5Qb3NpdGlvblkiLCJlbmRQb3NpdGlvblgiLCJlbmRQb3NpdGlvblkiLCJwYXRoU3RyaW5nIiwibGVuIiwiUEkiLCJ0cmFpbFBhdGhTdHlsZSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJ0cmFuc2l0aW9uIiwic3Ryb2tlUGF0aFN0eWxlIiwicHJlZml4Q2xzIiwidHJhaWxXaWR0aCIsInN0cm9rZUNvbG9yIiwidHJhaWxDb2xvciIsInN0cm9rZUxpbmVjYXAiLCJjbGFzc05hbWUiLCJyZXN0UHJvcHMiLCJnZXRQYXRoU3R5bGVzIiwiUmFkaWFsIiwib25lT2ZUeXBlIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJCdXR0b25JbnZpdGUiLCJjb29yZHMiLCJvbkNsaWNrSGFuZGxlciIsImFycmF5IiwiQnV0dG9uSm9pblNlYXQiLCJwZW5kaW5nIiwiaWNvblR5cGUiLCJtZXNzYWdlIiwiY2FyZFNpemUiLCJDYXJkc0NvbXBvbmVudCIsImhvbGVDYXJkcyIsIlNlYXQiLCJzZWF0U3RhdHVzIiwiU1RBVFVTX01TRyIsIm1zZyIsInN0YWNrVG9TdHJpbmciLCJzdGFja1NpemUiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJTZWF0SW5mbyIsImFtb3VudENvb3JkcyIsImJsb2NreSIsImRlYWxlciIsImxhc3RBbW91bnQiLCJwb3MiLCJzaWduZXJBZGRyIiwibmlja05hbWVCeUFkZHJlc3MiLCJ0aW1lckRpc3BsYXlDb2xvciIsInRpbWVyUHJvZ3Jlc3MiLCJTZWF0VGltZXIiLCJ0aW1lTGVmdCIsIlNpdG91dFRpbWVyIiwiU3RhdHVzQWN0aW9uIiwic2hvd1N0YXR1cyIsInNpdG91dCIsIndob3NUdXJuIiwid2FzTW9zdFJlY2VudEFjdGlvbiIsImlzRW1wdHkiLCJTZWF0Q29tcG9uZW50IiwiaXNUYWtlbiIsIm15UG9zIiwib3BlbiIsInVuZGVmaW5lZCIsInN1Y2Nlc3NCZyIsImluZm9CZyIsImluZm9SZXZlcnNlQmciLCJ3YXJuaW5nQmciLCJkYW5nZXJCZyIsImFjdGl2ZUNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiaW5mb0NvbG9yIiwid2FybmluZ0NvbG9yIiwiZGFuZ2VyQ29sb3IiLCJzbWFsbFNoYWRvdyIsIm1lZFNoYWRvdyIsInNlYXRTY2FsZSIsImpvaW5CdXR0b25TY2FsZSIsImZvbnRXZWlnaHRJbmZvIiwiZm9udFdlaWd0aEJvbGQiLCJjYWxjU2l6ZSIsImJhc2VTaXplIiwic2NhbGVTaXplIiwiZGltVG9TY2FsZSIsImNvbnZlcnRlZE51bSIsInJvdW5kIiwic2NhbGVTZWF0IiwiYmFzZVNlYXRTaXplIiwic2NhbGVCdXR0b25Kb2luIiwiYmFzZUpvaW5CdXR0b25TaXplIiwiU2hhcmVkTWlkZGxlIiwiU2hhcmVkTG93ZXIiLCJTZWF0V3JhcHBlciIsIlNlYXRDb250YWluZXIiLCJhY3RpdmVQbGF5ZXIiLCJDaGlwQnV0dG9uQ29udGFpbmVyIiwiRGVhbGVyQnV0dG9uIiwiQW1vdW50Qm94IiwiQ2FyZENvbnRhaW5lciIsImVtcHR5IiwiQ2FyZFNoYXJlZCIsIkNhcmRCYWNrIiwiQ2FyZEZyb250IiwiQ2FyZFN0eWxlIiwiaW1nIiwiSW5mb1dyYXBwZXIiLCJBdmF0YXJJbWFnZSIsIkRldGFpbFdyYXBwZXIiLCJOYW1lQm94IiwiU3RhY2tCb3giLCJTdGF0dXNXcmFwcGVyIiwiU3RhdHVzQWN0aW9uU3R5bGUiLCJyZWNlbnQiLCJTdGF0dXNTZWF0V3JhcHBlciIsIlN0YXR1c1NlYXQiLCJUaW1lcldyYXBwZXIiLCJUaW1lckJhY2tncm91bmQiLCJUaW1lckJhciIsIkJ1dHRvblN0eWxlIiwiQnV0dG9uV3JhcHBlciIsIkJ1dHRvbkljb24iLCJCdXR0b25UZXh0IiwiYm94U2l6aW5nIiwiU2xpZGVzV3JhcHBlciIsIlNsaWRlc091dGVyIiwiU2xpZGVzSW5uZXIiLCJTbGlkZUJveCIsInNsaWRlRGlyZWN0aW9uU3R5bGUiLCJTbGlkZUxlZnQiLCJTbGlkZVJpZ2h0IiwiRG90Qm94IiwiRG90IiwiaXNPbiIsInNsaWRlSW5kZXgiLCJnZW5Hb3RvIiwibmV4dCIsInRvdGFsIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJTbGlkZXNXcmFwcGVyQ29tcG9uZW50IiwiU2xpZGVzT3V0ZXJDb21wb25lbnQiLCJTbGlkZXNJbm5lckNvbXBvbmVudCIsIlNsaWRlQm94Q29tcG9uZW50IiwiU2xpZGVMZWZ0Q29tcG9uZW50IiwiU2xpZGVSaWdodENvbXBvbmVudCIsIkRvdEJveENvbXBvbmVudCIsIkRvdENvbXBvbmVudCIsInNsaWRlIiwiZm9udFNpemUiLCJTbGlkZXMiLCJpbnN0YW5jZU9mIiwiQm9hcmQiLCJCb2FyZENhcmRXcmFwcGVyIiwiU2VhdHMiLCJzZWF0cyIsIlRhYmxlQ29tcG9uZW50IiwiYm9hcmQiLCJ3aW5uZXJzIiwibXlIYW5kIiwiZGVzY3IiLCJzYiIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkZXIiLCJXaW5uZXIiLCJUYWJsZUFuZENoYWlycyIsIkhhbmRCb3giLCJNZW51SGVhZGVyIiwidG9nZ2xlTWVudU9wZW4iLCJ0b2dnbGVNZW51QWN0aXZlIiwibmlja05hbWUiLCJoYW5kbGVPbkxlYXZlIiwiTWVudUl0ZW1zIiwiaXRlbSIsIm9uQ2xpY2siLCJpY29uIiwidGl0bGUiLCJUYWJsZU1lbnUiLCJsb2dnZWRJbiIsImhhbmRsZUNsaWNrTG9nb3V0Iiwib25MZWF2ZSIsIm9uU2l0b3V0IiwibWVudUNsb3NlIiwibWVudVVzZXJPcGVuIiwiYnJvd3Nlckhpc3RvcnkiLCJtZW51R3Vlc3RPcGVuIiwicmVuZGVyTWVudSIsImFueSIsIm1lbnVBY3RpdmVCRyIsIm1lbnVCb3hTaGFkb3ciLCJtZW51Q29sb3IiLCJtZW51T3BlbiIsIm1lbnVIb3ZlckJveFNoYWRvdyIsIm1lbnVBY3RpdmVCb3hTaGFkb3ciLCJDb250YWluZXIiLCJMb2dvV3JhcHBlciIsIkxvZ28iLCJNZW51Q29udGFpbmVyIiwiSWRlbnRpY29uIiwiTmlja05hbWUiLCJIYW1idXJnZXIiLCJQYXR0eSIsIk1lbnVJdGVtc1dyYXBwZXIiLCJJdGVtV3JhcHBlciIsIkl0ZW1JY29uIiwiSXRlbVRpdGxlIiwiZGVncmFkZSIsImZuIiwiZmFsbGJhY2siLCJlIiwiZ2V0TWV0aG9kS2V5IiwiZ3JvdXBOYW1lIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2VuZXJhdGVDb250cmFjdEluc3RhbmNlQXBpIiwiYWJpIiwiYWRkcmVzcyIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJjb250cmFjdEluc3RhbmNlIiwiZ2V0V2ViMyIsImV0aCIsImNvbnRyYWN0IiwiYXQiLCJhcGkiLCJvIiwiZGVmaW5pdGlvbiIsImFjdGlvbnMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjYWxsIiwiY29udHJhY3RNZXRob2RDYWxsIiwia2V5IiwibWV0aG9kIiwic2VuZFRyYW5zYWN0aW9uIiwiY29udHJhY3RUeFNlbmQiLCJkZXN0IiwiZGF0YSIsImdldERhdGEiLCJwcml2S2V5IiwiZ2V0IiwiY29udHJhY3RNZXRob2QiLCJtZXRob2RLZXkiLCJnZXRJbiIsImNhbGxQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJhbGxFdmVudHMiLCJnZW5lcmF0ZUNvbnRyYWN0QVBJIiwiY2FjaGUiLCJnZW5lcmF0ZVdlYjNHZXR0ZXIiLCJpbmRleE9mIiwiZ2V0dGVyRnJhZ21lbnQiLCJzcGxpdCIsImdldHRlck5hbWUiLCJ0b0xvd2VyQ2FzZSIsInNsaWNlIiwiZ2V0dGVyIiwiZ2VuZXJhdGVXZWIzQWN0aW9uQ3JlYXRvciIsIndlYjMiLCJhY092ZXJyaWRlIiwiU1VQUE9SVEVEX1dFQjNfTUVUSE9EUyIsImFjdGlvbkNyZWF0b3IiLCJnZW5lcmF0ZVdlYjNNZXRob2RzIiwicGFyYW1zIiwidXBkYXRlZFN0YXRlIiwiZ2V0Q3VycmVudFN0YXRlIiwiZ2VuZXJhdGVOZXR3b3JrQXBpIiwiT2JqZWN0Iiwia2V5cyIsIm8yIiwid2FpdEZvck1pbmVkIiwidHgiLCJwb2xsVGltZSIsInBvbGwiLCJnZXRUcmFuc2FjdGlvblJlY2VpcHQiLCJ0aGVuIiwicmVzIiwic2V0VGltZW91dCIsImNhdGNoIiwiZ2VuZXJhdGVDb250cmFjdEFwaSIsIndlYjNDb25uZWN0IiwicGFzc2VkTWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkQWN0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsIndlYjNSZWR1eCIsInNlbGVjdEFjY291bnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJtZXJnZVByb3BzIiwic3RhdGVQcm9wcyIsImRpc3BhdGNoUHJvcHMiLCJvd25Qcm9wcyIsImN1c3RvbUFjdGlvbnMiLCJjb25uZWN0IiwidGFibGUiLCJ0YWJsZUFkZHIiLCJuZXh0UHJvcHMiLCJpc015VHVybiIsInNldEFjdGlvbkJhckFjdGl2ZSIsInBhcnNlSW50IiwiaGFuZElkIiwic2VsZiIsIlJhdmVuIiwiY2FwdHVyZUV4Y2VwdGlvbiIsInRhZ3MiLCJteU1heEJldCIsImJldEFjdGlvbiIsImJldCIsImxhc3RSZWNlaXB0IiwicGF5IiwiY2FyZHMiLCJzZXRDYXJkcyIsImNhcHR1cmVFcnJvciIsImNhbGxBbW91bnQiLCJjaGVja1N0YXRlcyIsImNoZWNrVHlwZSIsImFjdGlvbiIsImNoZWNrIiwiZm9sZCIsIkFjdGlvbkJhckNvbnRhaW5lciIsImNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciIsIm1ha2VTZWxlY3RBY3Rpb25CYXJBY3RpdmUiLCJtYWtlQW1vdW50VG9DYWxsU2VsZWN0b3IiLCJtYWtlQ2FsbEFtb3VudFNlbGVjdG9yIiwibWFrZU15Q2FyZHNTZWxlY3RvciIsIm1ha2VJc015VHVyblNlbGVjdG9yIiwicGxheWVyQ291bnQiLCJtYWtlUGxheWVyc0NvdW50U2VsZWN0b3IiLCJtYWtlU2VsZWN0UHJpdktleSIsIm1lc3NhZ2VzIiwibWFrZU1lc3NhZ2VzU2VsZWN0b3IiLCJnZXRBY3Rpb25CYXJNb2RlIiwibWFrZU1pblNlbGVjdG9yIiwibWFrZU15TWF4QmV0U2VsZWN0b3IiLCJtYWtlTXlTdGFja1NlbGVjdG9yIiwiZ2V0QWN0aW9uQmFyU2xpZGVyT3BlbiIsIm1ha2VTZWxlY3RBY3Rpb25CYXJWaXNpYmxlIiwiZ2V0SXNNeVR1cm4iLCJfIiwiZ2V0QWN0aW9uQmFyU3RhdGUiLCJyYyIsInBva2VySGVscGVyIiwiY3JlYXRlU2VsZWN0b3IiLCJtYWtlSGFuZFN0YXRlU2VsZWN0b3IiLCJoYW5kU3RhdGUiLCJpc0FwcHJvcHJpYXRlU3RhdGUiLCJtYWtlTXlQb3NTZWxlY3RvciIsImFjdGlvbkJhciIsIm1ha2VNYXhCZXRTZWxlY3RvciIsIm1heEJldCIsIm15TWF4YmV0IiwibWFrZVNiU2VsZWN0b3IiLCJtYWtlSGFuZFNlbGVjdG9yIiwiaGFuZCIsImxpbmV1cCIsInRvSlMiLCJsYXN0Um91bmRNYXhCZXQiLCJmaW5kTWluUmFpc2VBbW91bnQiLCJDaGF0Iiwib25BZGRNZXNzYWdlIiwiYm94IiwicmVhZG9ubHkiLCJhcmVhIiwicGxhY2Vob2xkZXIiLCJQdXJlQ29tcG9uZW50IiwiTWVzc2FnZUJveCIsImhhbmRsZVNlbmQiLCJldmVudCIsIndoaWNoIiwidHJpbSIsInByZXZlbnREZWZhdWx0IiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsInBhZGRpbmciLCJNZXNzYWdlTGlzdCIsInNjcm9sbFRvQm90dG9tIiwibGlzdCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm1hcmdpbiIsImxpc3RTdHlsZVR5cGUiLCJvdmVyZmxvdyIsImVsIiwic2lnbmVyIiwiQ3VydGFpbiIsInNlbmRNZXNzYWdlIiwidG9nZ2xlIiwiaXNUYWtlUGFydE9mQUdhbWUiLCJ0YSIsInN1YnN0cmluZyIsImNoYXRQbGFjZWhvbGRlciIsIkxpbmsiLCJhIiwiRmVlZGJhY2tCdXR0b24iLCJjYXB0dXJlTWVzc2FnZSIsInNob3dSZXBvcnREaWFsb2ciLCJldmVudElkIiwibGFzdEV2ZW50SWQiLCJkc24iLCJjb25mIiwic2VudHJ5RFNOIiwic2hvd1JlcG9ydCIsInZhbGlkYXRlIiwiZXJyb3JzIiwid2FybiIsIndhcm5pbmdzIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0dGluZyIsImhlYWRlciIsIkludml0ZURpYWxvZyIsInJlZHV4Rm9ybSIsImZvcm0iLCJkZWZpbmVNZXNzYWdlcyIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJoYW5kbGVKb2luIiwibWluIiwidGFibGVNYXgiLCJtYXgiLCJiYWxhbmNlIiwibWluV2lkdGgiLCJtb2RhbERpc21pc3MiLCJwcm94eUFkZHIiLCJtYWtlU2VsZWN0UHJveHlBZGRyIiwiSm9pbkRpYWxvZyIsInNsaWRlcyIsImZpcnN0Iiwic2Vjb25kIiwiaXNUdXJuIiwic2l0T3V0IiwidGhpcmQiLCJTdHlsZWREaXYiLCJKb2luU2xpZGVzIiwiYmFzZUNvbG9yIiwiZ3JlZW4iLCJncmF5IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNoYW5nZWQiLCJkZWFkbGluZSIsImNsZWFySW50ZXJ2YWwiLCJtb2RhbEFkZCIsInBlbmRpbmdUb2dnbGUiLCJtYWtlRGVhbGVyU2VsZWN0b3IiLCJtYWtlT3BlblNlbGVjdG9yIiwibWFrZVNlYXRTdGF0dXNTZWxlY3RvciIsIm1ha2VQZW5kaW5nU2VsZWN0b3IiLCJtYWtlU2l0b3V0U2VsZWN0b3IiLCJtYWtlU2hvd1N0YXR1c1NlbGVjdG9yIiwibWFrZUNvb3Jkc1NlbGVjdG9yIiwibWFrZUFtb3VudENvb3Jkc1NlbGVjdG9yIiwibWFrZUJsb2NreVNlbGVjdG9yIiwibWFrZVdob3NUdXJuU2VsZWN0b3IiLCJtYWtlTGFzdEFtb3VudFNlbGVjdG9yIiwibGFzdEFjdGlvbiIsIm1ha2VMYXN0QWN0aW9uU2VsZWN0b3IiLCJtYWtlQ2FyZHNTZWxlY3RvciIsIm1ha2VGb2xkZWRTZWxlY3RvciIsIm1ha2VTdGFja1NlbGVjdG9yIiwiZ2V0VGFibGVEYXRhIiwiZ2V0TGluZXVwIiwic21hbGxCbGluZCIsImFsbCIsInJzcCIsImxpbmV1cFJlY2VpdmVkIiwiVGFibGUiLCJ3YXRjaFRhYmxlIiwiaGFuZGxlVXBkYXRlIiwiaGFuZGxlTGVhdmUiLCJoYW5kbGVTaXRvdXQiLCJoYW5kbGVKb2luQ29tcGxldGUiLCJoYW5kbGVSZWJ1eSIsInRva2VuIiwibnR6QWRkciIsInRhYmxlRXZlbnRzIiwiZnJvbUJsb2NrIiwid2F0Y2giLCJwdXNoZXIiLCJjbHVzdGVyIiwiZW5jcnlwdGVkIiwiY2hhbm5lbCIsInN1YnNjcmliZSIsImhhbmRSZXF1ZXN0Iiwic2V0VGFnc0NvbnRleHQiLCJ0aW1lT3V0IiwiY2xlYXJUaW1lb3V0IiwicGFzc2VkIiwicmFuZG9tIiwiVElNRU9VVF9QRVJJT0QiLCJiYWxhbmNlT2YiLCJwdXNoZWQiLCJsYXRlc3RIYW5kIiwibmV4dEhhbmRTdHIiLCJtaXNzaW5nSGFuZHMiLCJnZXRIYW5kU3RhcnRlZCIsImdldEhhbmQiLCJ1cGRhdGVSZWNlaXZlZCIsInVuYmluZCIsInN0b3BXYXRjaGluZyIsIlJlY2VpcHQiLCJwYXJzZSIsInBheWxvYWQiLCJhZGRNZXNzYWdlIiwiY3JlYXRlZCIsInJlYnV5IiwiYXBwcm92ZSIsImpvaW4iLCJqb2luTW9kYWwiLCJidXR0b25EaXNtaXNzIiwiYWNjb3VudCIsImxvYyIsImxvY2F0aW9uIiwiY3VyVXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJoYXNoIiwic2l0b3V0QW1vdW50IiwibmV4dFNpdG91dFN0YXRlIiwic2l0b3V0QWN0aW9uIiwib3JpZ2luYWxTaXRvdXQiLCJzaXRPdXRUb2dnbGUiLCJleGl0SGFuZCIsInNldEV4aXRIYW5kIiwic3RhdHVzRWxlbWVudCIsImxlYXZlIiwicmVzdWx0IiwiZXJyb3JFbGVtZW50IiwibGluZXVwUmVjZWl2ZWRBcmdzIiwiYWRkciIsImJsb2NrTm90aWZ5IiwiZXJyb3JDb2RlIiwidG9OdW1iZXIiLCJzZWF0IiwicmVuZGVyU2VhdHMiLCJyZW5kZXJCb2FyZCIsIndpbm5lciIsImhhbmRTdHJpbmciLCJtYWtlU2VsZWN0QWNjb3VudERhdGEiLCJtYWtlQm9hcmRTZWxlY3RvciIsIm1ha2VUYWJsZURhdGFTZWxlY3RvciIsIm1ha2VMaW5ldXBTZWxlY3RvciIsIm1ha2VMYXRlc3RIYW5kU2VsZWN0b3IiLCJtYWtlTGFzdFJlY2VpcHRTZWxlY3RvciIsIm1ha2VNaXNzaW5nSGFuZFNlbGVjdG9yIiwibWFrZU15SGFuZFZhbHVlU2VsZWN0b3IiLCJtYWtlUG90U2l6ZVNlbGVjdG9yIiwibWFrZVNpdG91dEFtb3VudFNlbGVjdG9yIiwibWFrZVNpZ25lckFkZHJTZWxlY3RvciIsIm1ha2VNeVNpdG91dFNlbGVjdG9yIiwibWFrZVNlbGVjdFdpbm5lcnMiLCJzZXRBdXRoU3RhdGUiLCJtYWtlU2VsZWN0TG9nZ2VkSW4iLCJtYWtlU2VsZWN0T3BlbiIsIm1ha2VTZWxlY3RBY3RpdmUiLCJtYWtlTmlja05hbWVTZWxlY3RvciIsInNlbGVjdFRhYmxlTWVudSIsInRhYmxlTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBTUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QjtBQUNBLE1BQU1DLFdBQVcsQ0FBQ0QsTUFBTUUsTUFBUCxJQUFrQkYsTUFBTUcsSUFBTixLQUFlSCxNQUFNSSxPQUF4RDtBQUNBLE1BQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFJSixRQUFKLEVBQWM7QUFDZEQsVUFBTU0scUJBQU4sQ0FB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LHVCQUF1QiwwQkFBMEIsdUJBQXVCLGVBQWUscUJBQXFCLGlCQUFpQixHQUFHLHNFQUFzRSx1QkFBdUIsR0FBRyw4RUFBOEUsZ0JBQWdCLGdCQUFnQixnQkFBZ0Isc0JBQXNCLHVCQUF1QixnQkFBZ0IsYUFBYSxnQ0FBZ0MsZ0JBQWdCLEdBQUcsZ0RBQWdELHVCQUF1QixvQkFBb0Isb0JBQW9CLDBCQUEwQixjQUFjLEdBQUc7O0FBRXR4SDs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQSwwRjs7Ozs7OztBQ0FBLHlGOzs7Ozs7O0FDQUEsb0Y7Ozs7Ozs7QUNBQSwyRiIsImZpbGUiOiIwLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQWN0aW9uQnV0dG9uV3JhcHBlcixcbiAgQWN0aW9uSW5kaWNhdG9yLFxuICBBY3Rpb25UZXh0LFxufSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IEFjdGlvbkJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICAvLyBkaXNhYmxlIGJ1dHRvbiBpZiBhY3Rpb0JhciBpcyBub3QgYWN0aXZlIG9yIGlmIG1vZGUgbWF0Y2hlc1xuICBjb25zdCBkaXNhYmxlZCA9ICFwcm9wcy5hY3RpdmUgfHwgKHByb3BzLm1vZGUgPT09IHByb3BzLm5ld01vZGUpO1xuICBjb25zdCBoYW5kbGVUaGlzQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgcHJvcHMuc2V0QWN0aW9uQmFyQmV0U2xpZGVyKGZhbHNlKTtcbiAgICBwcm9wcy5zZXRBY3Rpb25CYXJNb2RlKHByb3BzLm5ld01vZGUpO1xuICAgIHByb3BzLmhhbmRsZUNsaWNrKCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEFjdGlvbkJ1dHRvbldyYXBwZXJcbiAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVUaGlzQ2xpY2t9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgPlxuICAgICAgPEFjdGlvbkluZGljYXRvciAvPlxuICAgICAgPEFjdGlvblRleHQ+e3Byb3BzLnRleHR9PC9BY3Rpb25UZXh0PlxuICAgIDwvQWN0aW9uQnV0dG9uV3JhcHBlcj5cbiAgKTtcbn07XG5cbkFjdGlvbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG1vZGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG5ld01vZGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGhhbmRsZUNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2V0QWN0aW9uQmFyTW9kZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNldEFjdGlvbkJhckJldFNsaWRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvQWN0aW9uQnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICcuL0FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgQ29udHJvbEJsYW5rIGZyb20gJy4vQ29udHJvbEJsYW5rJztcblxuY29uc3QgQ29udHJvbEJldFJhaXNlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhbW91bnRUb0NhbGwsXG4gICAgaGFuZGxlQWxsSW4sXG4gICAgaGFuZGxlQmV0LFxuICAgIG1pblJhaXNlLFxuICAgIG15U3RhY2ssXG4gICAgc2xpZGVyT3BlbixcbiAgICBzZXRBY3Rpb25CYXJCZXRTbGlkZXIsXG4gIH0gPSBwcm9wcztcbiAgaWYgKHNsaWRlck9wZW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICBuYW1lPVwiYmV0LWJ1dHRvblwiXG4gICAgICAgIHRleHQ9XCJDT05GSVJNXCJcbiAgICAgICAgbmV3TW9kZT1cIkNPTkZJUk1cIlxuICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4gaGFuZGxlQmV0KCl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICBpZiAoYW1vdW50VG9DYWxsID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBY3Rpb25CdXR0b25cbiAgICAgICAgbmFtZT1cImJ1dHRvbi1iZXRcIlxuICAgICAgICB0ZXh0PVwiQkVUXCJcbiAgICAgICAgbmV3TW9kZT1cIkJFVFwiXG4gICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiBzZXRBY3Rpb25CYXJCZXRTbGlkZXIodHJ1ZSl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICBpZiAobXlTdGFjayA8IGFtb3VudFRvQ2FsbCB8fCBteVN0YWNrIDwgbWluUmFpc2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICBuYW1lPVwiYnV0dG9uLWFsbC1pblwiXG4gICAgICAgIHRleHQ9XCJBTEwtSU5cIlxuICAgICAgICBuZXdNb2RlPVwiQUxMLUlOXCJcbiAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IGhhbmRsZUFsbEluKCl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICBpZiAobXlTdGFjayA+IGFtb3VudFRvQ2FsbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWN0aW9uQnV0dG9uXG4gICAgICAgIG5hbWU9XCJidXR0b24tcmFpc2VcIlxuICAgICAgICB0ZXh0PVwiUkFJU0VcIlxuICAgICAgICBuZXdNb2RlPVwiUkFJU0VcIlxuICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4gc2V0QWN0aW9uQmFyQmV0U2xpZGVyKHRydWUpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxDb250cm9sQmxhbmsgey4uLnByb3BzfSAvPjtcbn07XG5Db250cm9sQmV0UmFpc2UucHJvcFR5cGVzID0ge1xuICBhbW91bnRUb0NhbGw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGhhbmRsZUJldDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGhhbmRsZUFsbEluOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgbWluUmFpc2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG15U3RhY2s6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIHNsaWRlck9wZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBzZXRBY3Rpb25CYXJCZXRTbGlkZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbEJldFJhaXNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQWN0aW9uQmFyL0NvbnRyb2xCZXRSYWlzZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIEFjdGlvbkJ1dHRvbldyYXBwZXIsXG4gIEFjdGlvbkluZGljYXRvcixcbn0gZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxBY3Rpb25CdXR0b25XcmFwcGVyIG5hbWU9XCJidXR0b24tYmxhbmtcIiBkaXNhYmxlZD5cbiAgICA8QWN0aW9uSW5kaWNhdG9yIC8+XG4gIDwvQWN0aW9uQnV0dG9uV3JhcHBlcj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvQ29udHJvbEJsYW5rLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICcuL0FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgQ29udHJvbEJsYW5rIGZyb20gJy4vQ29udHJvbEJsYW5rJztcblxuXG5jb25zdCBDb250cm9sQ2hlY2tDYWxsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhbW91bnRUb0NhbGwsXG4gICAgaGFuZGxlQ2FsbCxcbiAgICBoYW5kbGVDaGVjayxcbiAgICBteVN0YWNrLFxuICB9ID0gcHJvcHM7XG4gIGlmIChhbW91bnRUb0NhbGwgPiBteVN0YWNrKSB7XG4gICAgcmV0dXJuIDxDb250cm9sQmxhbmsgey4uLnByb3BzfSAvPjtcbiAgfVxuICBpZiAoYW1vdW50VG9DYWxsID4gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWN0aW9uQnV0dG9uXG4gICAgICAgIG5hbWU9XCJidXR0b24tY2FsbFwiXG4gICAgICAgIHRleHQ9XCJDQUxMXCJcbiAgICAgICAgbmV3TW9kZT1cIkNBTExcIlxuICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4gaGFuZGxlQ2FsbCgpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgaWYgKGFtb3VudFRvQ2FsbCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWN0aW9uQnV0dG9uXG4gICAgICAgIG5hbWU9XCJidXR0b24tY2hlY2tcIlxuICAgICAgICB0ZXh0PVwiQ0hFQ0tcIlxuICAgICAgICBuZXdNb2RlPVwiQ0hFQ0tcIlxuICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4gaGFuZGxlQ2hlY2soKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJldHVybiA8Q29udHJvbEJsYW5rIHsuLi5wcm9wc30gLz47XG59O1xuQ29udHJvbENoZWNrQ2FsbC5wcm9wVHlwZXMgPSB7XG4gIGFtb3VudFRvQ2FsbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgaGFuZGxlQ2FsbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGhhbmRsZUNoZWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgbXlTdGFjazogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDaGVja0NhbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvQ29udHJvbENoZWNrQ2FsbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnLi9BY3Rpb25CdXR0b24nO1xuaW1wb3J0IENvbnRyb2xCbGFuayBmcm9tICcuL0NvbnRyb2xCbGFuayc7XG5cbmNvbnN0IENvbnRyb2xGb2xkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhbW91bnRUb0NhbGwsXG4gICAgaGFuZGxlRm9sZCxcbiAgfSA9IHByb3BzO1xuICBpZiAoYW1vdW50VG9DYWxsID4gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWN0aW9uQnV0dG9uXG4gICAgICAgIG5hbWU9XCJidXR0b24tZm9sZFwiXG4gICAgICAgIHRleHQ9XCJGT0xEXCJcbiAgICAgICAgbmV3TW9kZT1cIkZPTERcIlxuICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4gaGFuZGxlRm9sZCgpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxDb250cm9sQmxhbmsgey4uLnByb3BzfSAvPjtcbn07XG5Db250cm9sRm9sZC5wcm9wVHlwZXMgPSB7XG4gIGFtb3VudFRvQ2FsbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgaGFuZGxlRm9sZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sRm9sZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0FjdGlvbkJhci9Db250cm9sRm9sZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZsYWdCZXQgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IEZsYWdBbW91bnRCZXQgPSAoe1xuICBhbW91bnQsXG4gIGFtb3VudFRvQ2FsbCxcbiAgc2xpZGVyT3Blbixcbn0pID0+IChcbiAgPEZsYWdCZXQgc2xpZGVyT3Blbj17c2xpZGVyT3Blbn0+XG4gICAge2Ftb3VudFRvQ2FsbCAhPT0gMCA/XG4gICAgICAgIGBSQUlTRSAke2Ftb3VudH1gXG4gICAgICA6XG4gICAgICAgIGBCRVQgJHthbW91bnR9YFxuICAgICAgfVxuICA8L0ZsYWdCZXQ+XG4pO1xuRmxhZ0Ftb3VudEJldC5wcm9wVHlwZXMgPSB7XG4gIGFtb3VudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgYW1vdW50VG9DYWxsOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBzbGlkZXJPcGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsYWdBbW91bnRCZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvRmxhZ0Ftb3VudEJldC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZsYWdDYWxsIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBGbGFnQW1vdW50Q2FsbCA9ICh7XG4gIGFtb3VudFRvQ2FsbCxcbiAgc2xpZGVyT3BlbixcbiAgbXlTdGFjayxcbn0pID0+IHtcbiAgLy8gaGlkZSBmbGFnIGlmIG9ubHkgb3B0aW9uIGlzIHRvICdjaGVjaycgb3IgJ2FsbC1pbidcbiAgaWYgKGFtb3VudFRvQ2FsbCA9PT0gMCB8fCBhbW91bnRUb0NhbGwgPiBteVN0YWNrKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RmxhZ0NhbGwgc2xpZGVyT3Blbj17c2xpZGVyT3Blbn0+XG4gICAgICB7YW1vdW50VG9DYWxsfVxuICAgIDwvRmxhZ0NhbGw+XG4gICk7XG59O1xuRmxhZ0Ftb3VudENhbGwucHJvcFR5cGVzID0ge1xuICBhbW91bnRUb0NhbGw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG15U3RhY2s6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIHNsaWRlck9wZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxhZ0Ftb3VudENhbGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvRmxhZ0Ftb3VudENhbGwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBGbGFnQnV0dG9uV3JhcHBlciB9IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgRmxhZ0J1dHRvbiA9ICh7XG4gIHR5cGUsXG4gIHNsaWRlck9wZW4sXG59KSA9PiB7XG4gIGNvbnN0IHRleHRUeXBlID0gKCkgPT4ge1xuICAgIGlmICh0eXBlID09PSAncXVhcnRlcicpIHJldHVybiAnMS80JztcbiAgICBpZiAodHlwZSA9PT0gJ2hhbGYnKSByZXR1cm4gJzEvMic7XG4gICAgaWYgKHR5cGUgPT09ICdwb3QnKSByZXR1cm4gJ1BPVCc7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIC8vIG9ubHkgZGlzcGxheSBpZiBzbGlkZXIgaXMgT3BlblxuICBpZiAoc2xpZGVyT3Blbikge1xuICAgIHJldHVybiAoXG4gICAgICA8RmxhZ0J1dHRvbldyYXBwZXIgbmFtZT1cImZsYWctYnV0dG9uXCI+XG4gICAgICAgIHt0ZXh0VHlwZSgpfVxuICAgICAgPC9GbGFnQnV0dG9uV3JhcHBlcj5cbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbkZsYWdCdXR0b24ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzbGlkZXJPcGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsYWdCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvRmxhZ0J1dHRvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUkNTbGlkZXIgZnJvbSAncmMtc2xpZGVyL2xpYi9TbGlkZXInO1xuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IFNsaWRlcldyYXBwZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGFuZGxlOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICczNHB4JyxcbiAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnLTEycHgnLFxuICAgIG1hcmdpblRvcDogJy0yMHB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnNnB4JyxcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzZweCcsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMCxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTk5JyxcbiAgfSxcbiAgcmFpbDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMnLFxuICAgIGhlaWdodDogJzZweCcsXG4gIH0sXG4gIHRyYWNrOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzMzMycsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgfSxcbn07XG5cbmNsYXNzIFNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogMCxcbiAgICB9O1xuICAgIHRoaXMub25TbGlkZXJDaGFuZ2UgPSB0aGlzLm9uU2xpZGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNsaWRlclVwZGF0ZSA9IHRoaXMub25TbGlkZXJVcGRhdGUuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnByb3BzLm1pblJhaXNlIH0pO1xuICAgIHRoaXMucHJvcHMudXBkYXRlQW1vdW50KHRoaXMucHJvcHMubWluUmFpc2UpO1xuICB9XG4gIG9uU2xpZGVyQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICAgIHRoaXMucHJvcHMudXBkYXRlQW1vdW50KHZhbHVlKTtcbiAgfVxuICBvblNsaWRlclVwZGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMudXBkYXRlQW1vdW50KHZhbHVlKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbGlkZXJXcmFwcGVyIG5hbWU9XCJzbGlkZXItd3JhcHBlclwiPlxuICAgICAgICA8UkNTbGlkZXJcbiAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWluUmFpc2V9XG4gICAgICAgICAgbWF4PXt0aGlzLnByb3BzLm15U3RhY2t9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TbGlkZXJDaGFuZ2V9XG4gICAgICAgICAgb25BZnRlckNoYW5nZT17dGhpcy5vblNsaWRlclVwZGF0ZX1cbiAgICAgICAgICBoYW5kbGVTdHlsZT17c3R5bGVzLmhhbmRsZX1cbiAgICAgICAgICByYWlsU3R5bGU9e3N0eWxlcy5yYWlsfVxuICAgICAgICAgIHRyYWNrU3R5bGU9e3N0eWxlcy50cmFja31cbiAgICAgICAgLz5cbiAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5TbGlkZXIucHJvcFR5cGVzID0ge1xuICB1cGRhdGVBbW91bnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBtaW5SYWlzZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgbXlTdGFjazogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0FjdGlvbkJhci9TbGlkZXIuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVsZ2Ugb24gMjQuMDguMTYuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGbGFnQW1vdW50QmV0IGZyb20gJy4vRmxhZ0Ftb3VudEJldCc7XG5pbXBvcnQgRmxhZ0Ftb3VudENhbGwgZnJvbSAnLi9GbGFnQW1vdW50Q2FsbCc7XG5pbXBvcnQgRmxhZ0J1dHRvbiBmcm9tICcuL0ZsYWdCdXR0b24nO1xuaW1wb3J0IENvbnRyb2xCZXRSYWlzZSBmcm9tICcuL0NvbnRyb2xCZXRSYWlzZSc7XG5pbXBvcnQgQ29udHJvbENoZWNrQ2FsbCBmcm9tICcuL0NvbnRyb2xDaGVja0NhbGwnO1xuaW1wb3J0IENvbnRyb2xGb2xkIGZyb20gJy4vQ29udHJvbEZvbGQnO1xuaW1wb3J0IFNsaWRlciBmcm9tICcuL1NsaWRlcic7XG5cbmltcG9ydCB7XG4gIEFjdGlvbkJhcldyYXBwZXIsXG4gIENvbnRyb2xQYW5lbCxcbiAgQ29udHJvbFdyYXBwZXIsXG4gIEZsYWdDb250YWluZXIsXG59IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgQWN0aW9uQmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgc2xpZGVyT3BlbixcbiAgICB2aXNpYmxlLFxuICB9ID0gcHJvcHM7XG4gIGlmICh2aXNpYmxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBY3Rpb25CYXJXcmFwcGVyIGFjdGl2ZT17YWN0aXZlfSBuYW1lPVwiYWN0aW9uLWJhci13cmFwcGVyXCI+XG5cbiAgICAgICAge3NsaWRlck9wZW4gP1xuICAgICAgICAgIDxGbGFnQ29udGFpbmVyIGFjdGl2ZT17YWN0aXZlfSBuYW1lPVwiZmxhZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxGbGFnQW1vdW50Q2FsbCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8RmxhZ0Ftb3VudEJldCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8RmxhZ0J1dHRvbiB0eXBlPVwicXVhcnRlclwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgIDxGbGFnQnV0dG9uIHR5cGU9XCJoYWxmXCIgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgPEZsYWdCdXR0b24gdHlwZT1cInBvdFwiIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8L0ZsYWdDb250YWluZXI+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxGbGFnQ29udGFpbmVyIGFjdGl2ZT17YWN0aXZlfSBuYW1lPVwiZmxhZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxGbGFnQW1vdW50Q2FsbCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgPC9GbGFnQ29udGFpbmVyPlxuICAgICAgICB9XG5cbiAgICAgICAgPENvbnRyb2xQYW5lbCBuYW1lPVwiY29udHJvbC1wYW5lbC12aXNpYmxlXCI+XG4gICAgICAgICAgPENvbnRyb2xXcmFwcGVyPlxuICAgICAgICAgICAgPENvbnRyb2xGb2xkIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgIDxDb250cm9sQ2hlY2tDYWxsIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgIDxDb250cm9sQmV0UmFpc2Ugey4uLnByb3BzfSAvPlxuICAgICAgICAgICAge3NsaWRlck9wZW4gPyA8U2xpZGVyIHsuLi5wcm9wc30gLz4gOiBudWxsIH1cbiAgICAgICAgICA8L0NvbnRyb2xXcmFwcGVyPlxuICAgICAgICA8L0NvbnRyb2xQYW5lbD5cblxuICAgICAgPC9BY3Rpb25CYXJXcmFwcGVyPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5BY3Rpb25CYXIucHJvcFR5cGVzID0ge1xuICB2aXNpYmxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBhY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNsaWRlck9wZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9BY3Rpb25CYXIvaW5kZXguanMiLCIvKipcbiogQ3JlYXRlZCBieSBqem9icm8gMjAxNzA1MzFcbiovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICY6ZGlzYWJsZWR7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQWN0aW9uQmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID8gMSA6IDAuM307XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udHJvbFBhbmVsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udHJvbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbmA7XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25CdXR0b25XcmFwcGVyID0gc3R5bGVkKEJ1dHRvbilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgfVxuICAmOm50aC1jaGlsZCgzKSB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgfVxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICBjb2xvcjogI0RERDtcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICAgIGNvbG9yOiAjREREO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQWN0aW9uSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDhweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFjdGlvblRleHQgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgRmxhZ0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA/IDEgOiAwfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBGbGFnQnV0dG9uV3JhcHBlciA9IHN0eWxlZChCdXR0b24pYFxuICBtYXJnaW4tbGVmdDogNHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgcGFkZGluZy1yaWdodDogMThweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzY2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbmA7XG5cbmV4cG9ydCBjb25zdCBGbGFnQmV0ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgd2lkdGg6IDE0MnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGNvbG9yOiAjMzMzO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZsYWdDYWxsID0gc3R5bGVkLmRpdmBcbiAgJHsocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMuc2xpZGVyT3Blbikge1xuICAgICAgcmV0dXJuIGBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgICAgYDtcbiAgICB9XG4gICAgcmV0dXJuIGBcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGA7XG4gIH19O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogODBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGNvbG9yOiAjMzMzO1xuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0FjdGlvbkJhci9zdHlsZXMuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVsZ2Ugb24gMjQuMDguMTYuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWZWN0b3JDYXJkcyB9IGZyb20gJ2FiLXZlY3Rvci1jYXJkcyc7XG5cbmltcG9ydCB7IENhcmRCYWNrLCBDYXJkRnJvbnQsIENhcmRTdHlsZSB9IGZyb20gJy4uL1NlYXQvc3R5bGVzJztcblxuY29uc3QgdmFsdWVzID0gWycyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnaicsICdxJywgJ2snLCAnYSddO1xuY29uc3Qgc3VpdHMgPSBbJ2NsdWJzJywgJ2RpYW1vbmRzJywgJ2hlYXJ0cycsICdzcGFkZXMnXTtcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICBjb25zdCB2YyA9IG5ldyBWZWN0b3JDYXJkcygpO1xuICBsZXQgbGluaztcbiAgY29uc3Qgc3VpdCA9IHN1aXRzW01hdGguZmxvb3IocHJvcHMuY2FyZE51bWJlciAvIDEzKV07XG4gIGNvbnN0IHZhbHVlID0gdmFsdWVzW3Byb3BzLmNhcmROdW1iZXIgJSAxM107XG5cbiAgLy8gTm90ZTogbWVhbmluZyBvZiBjYXJkIG51bWJlcnNcbiAgLy8gICogLTEgc3RhbmRzIGZvciBiYWNrIHNpZGUgb2YgY2FyZHMsXG4gIC8vICAqIG51bGwgc3RhbmRzIGZvciBubyBjYXJkXG4gIC8vICAqID4gMCAgc3RhbmRzIGZvciBub3JtYWwgY2FyZHNcbiAgaWYgKCFwcm9wcy5mb2xkZWQgJiYgcHJvcHMuY2FyZE51bWJlciA9PT0gLTEpIHtcbiAgICBsaW5rID0gdmMuZ2V0QmFja0RhdGEocHJvcHMuc2l6ZSwgJyMzMkI3RDMnLCAnIzIxN0M4RicpO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZEJhY2s+XG4gICAgICAgIDxDYXJkU3R5bGVcbiAgICAgICAgICBrZXk9e3N1aXQgKyB2YWx1ZX1cbiAgICAgICAgICBzcmM9e2xpbmt9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQ2FyZEJhY2s+XG4gICAgKTtcbiAgfVxuICBpZiAoIXByb3BzLmZvbGRlZCAmJiBwcm9wcy5jYXJkTnVtYmVyICE9PSBudWxsKSB7XG4gICAgbGluayA9IHZjLmdldENhcmREYXRhKHByb3BzLnNpemUsIHN1aXQsIHZhbHVlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRGcm9udD5cbiAgICAgICAgPENhcmRTdHlsZVxuICAgICAgICAgIGtleT17c3VpdCArIHZhbHVlfVxuICAgICAgICAgIHNyYz17bGlua31cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgPC9DYXJkRnJvbnQ+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNhcmROdW1iZXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIHNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGZvbGRlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQ2FyZC9pbmRleC5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgYmFzZUNvbG9yLFxufSBmcm9tICd2YXJpYWJsZXMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdFBsYWNlaG9sZGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogJHtiYXNlQ29sb3J9O1xuYDtcblxuZXhwb3J0IGNvbnN0IENoYXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xuYDtcblxuZXhwb3J0IGNvbnN0IENoYXRBcmVhID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hhdEJveCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQ2hhdC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtcbiAgYmFzZUNvbG9yLFxuICBncmF5LFxuICBibGFjayxcbiAgd2hpdGUsXG4gIGN1cnRhaW5TdGlja3lXaWR0aCxcbiAgY3VydGFpbldpZHRoLFxufSBmcm9tICd2YXJpYWJsZXMnO1xuXG5leHBvcnQgY29uc3QgQ3VydGFpbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHtjdXJ0YWluV2lkdGh9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ1RDVEO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6ICR7KHByb3BzKSA9PiBwcm9wcy5pc09wZW4gPyAnMCcgOiBgLSR7Y3VydGFpbldpZHRofWB9O1xuICB6LWluZGV4OiA2O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAuMTVzIGVhc2UgbGVmdDtcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAke2N1cnRhaW5TdGlja3lXaWR0aH0pIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDdXJ0YWluVG9nZ2xlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7KHByb3BzKSA9PiBwcm9wcy5pc09wZW4gPyBgXG4gICAgbGVmdCA6ICR7Y3VydGFpbldpZHRofTtcbiAgICB3aWR0aDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIGAgOiBgXG4gICAgdG9wOiA0MHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gIGB9XG4gIFxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMzVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDI1cHg7XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmlzT3BlbiA/IGBcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHtibGFja307XG4gICAgICBsZWZ0OiAtNzBweDtcbiAgICAgIHRvcDogNTBweDtcbiAgICBgIDogYFxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7Z3JheX07XG4gICAgYH1cbiAgfVxuICAgIFxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGNvbG9yOiAke3doaXRlfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuaXNPcGVuID8gYFxuICAgICAgY29udGVudDogJyc7XG4gICAgICBsZWZ0OiAyMHB4O1xuICAgICAgdG9wOiA2M3B4O1xuICAgIGAgOiBgXG4gICAgICBjb250ZW50OiAn8J+SrCBcXFxcMDBhMCBcXFxcMDBhMCBDaGF0JztcbiAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICB0b3A6IDEzcHg7XG4gICAgYH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7Y3VydGFpblN0aWNreVdpZHRofSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IEN1cnRhaW5IZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYDtcblxuY29uc3QgQ3VydGFpbkxvZ29Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbmA7XG5cbmNvbnN0IEN1cnRhaW5Mb2dvID0gKCkgPT4gKFxuICA8Q3VydGFpbkxvZ29Db250YWluZXI+XG4gICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIj5cbiAgICAgIDxwYXRoIGQ9XCJNNTAwLDEwQzM2NywxNzMuOCwzMTcuMSwyMjguOSwyODIuNiwyNjguNkMyMTUsMzQ5LjUsMzEuNSw0ODYuOSwzMS41LDYzNC40YzAsMTY5LjcsMTgxLDE5MiwyMzQuMywxOTJjNTMuMywwLDIwOC45LTM0LjMsMjA4LjktMTAzLjFjMCw2NC43LTQwLjQsMjU3LjEtMTA1LjEsMjY2LjdjMTIxLjIsMCwyNzIuOCwwLDI3Mi44LDBzLTEwMS04NC45LTEwMS0yNjYuN2MwLDU2LjQsMTQ1LjUsMTAxLDIyMi4zLDEwMXMyMDUtNjYuNywyMDUtMTkyYzAtMTM4LjItMTM3LjMtMjU5LjMtMjQ3LjQtMzYxLjdDNjA1LjUsMTYzLjIsNTAwLDEwLDUwMCwxMHpcIiAvPlxuICAgIDwvc3ZnPlxuICA8L0N1cnRhaW5Mb2dvQ29udGFpbmVyPlxuKTtcblxuY29uc3QgQ3VydGFpbk5hbWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuY29uc3QgQ29udGFpbmVyTmFtZSA9ICgpID0+IChcbiAgPEN1cnRhaW5OYW1lQ29udGFpbmVyPlxuICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBiYXNlQ29sb3IgfX0+QUNFPC9zcGFuPlxuICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiB3aGl0ZSB9fT5CVVNURVJTPC9zcGFuPlxuICA8L0N1cnRhaW5OYW1lQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IEN1cnRhaW5IZWFkZXIgPSAoKSA9PiAoXG4gIDxDdXJ0YWluSGVhZGVyQ29udGFpbmVyPlxuICAgIDxDdXJ0YWluTG9nbyAvPlxuICAgIDxDb250YWluZXJOYW1lIC8+XG4gIDwvQ3VydGFpbkhlYWRlckNvbnRhaW5lcj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9DdXJ0YWluL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi9Gb3JtR3JvdXAnO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0lucHV0JztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9MYWJlbCc7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UsIFdhcm5pbmdNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtTWVzc2FnZXMnO1xuXG5jb25zdCBGb3JtRmllbGQgPSAoeyBpbnB1dCwgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IsIHdhcm5pbmcgfSB9KSA9PiAoXG4gIDxGb3JtR3JvdXA+XG4gICAgPExhYmVsIGh0bWxGb3I9e2lucHV0Lm5hbWV9PntsYWJlbH08L0xhYmVsPlxuICAgIDxJbnB1dCB7Li4uaW5wdXR9IHR5cGU9e3R5cGV9IC8+XG4gICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+fVxuICAgIHt0b3VjaGVkICYmIHdhcm5pbmcgJiYgPFdhcm5pbmdNZXNzYWdlIGVycm9yPXt3YXJuaW5nfSAvPn1cbiAgPC9Gb3JtR3JvdXA+XG4pO1xuXG5Gb3JtRmllbGQucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZXRhOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtRmllbGQuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVsZ2Ugb24gMjYuMDIuMTcuXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEZvcm1Hcm91cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtR3JvdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1Hcm91cC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtcbiAgYmFzZUNvbG9yLFxuICBibGFjayxcbn0gZnJvbSAnLi4vLi4vdmFyaWFibGVzJztcblxuY29uc3QgRm9ybUVycm9yID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LWZhbWlseTogJHRleHQtZm9udC1zdGFjaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAke2Jhc2VDb2xvcn07XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgRm9ybVdhcm5pbmcgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250LXN0YWNrO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICR7YmxhY2t9O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvck1lc3NhZ2UocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUVycm9yPlxuICAgICAgPHN0cm9uZz57cHJvcHMuZXJyb3J9PC9zdHJvbmc+XG4gICAgPC9Gb3JtRXJyb3I+XG4gICk7XG59XG5cbkVycm9yTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFdhcm5pbmdNZXNzYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1XYXJuaW5nPlxuICAgICAgPHN0cm9uZz57cHJvcHMud2FybmluZ308L3N0cm9uZz5cbiAgICA8L0Zvcm1XYXJuaW5nPlxuICApO1xufVxuXG5XYXJuaW5nTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIHdhcm5pbmc6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Gb3JtTWVzc2FnZXMvaW5kZXguanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSDEgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSDE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9IMS9pbmRleC5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIMiA9IHN0eWxlZC5oMmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNWVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSDI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9IMi9pbmRleC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBoZWxnZSBvbiAyNi4wMi4xNy5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtcbiAgZ3JlZW4sXG59IGZyb20gJy4uLy4uL3ZhcmlhYmxlcyc7XG5cblxuY29uc3QgSW5wdXRTdHlsZWQgPSBzdHlsZWQuaW5wdXRgXG4gICR7KHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLnRvdWNoZWQgJiYgIXByb3BzLmVycm9yKSB7XG4gICAgICByZXR1cm4gYGJvcmRlcjogMnB4IHNvbGlkICR7Z3JlZW59YDtcbiAgICB9XG4gICAgcmV0dXJuICdib3JkZXI6IDFweCBzb2xpZCAjY2NjJztcbiAgfX1cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB3aGl0ZSBpbnNldCAhaW1wb3J0YW50XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGdhaW5zYm9ybztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MsIGJvcmRlciAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyIDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyIDAuM3M7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyIDAuM3M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiBub25lO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IG5vbmU7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiBub25lO1xuICAtby1ib3JkZXItcmFkaXVzOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tCb3ggPSBzdHlsZWQuaW5wdXRgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMC43ZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRTdHlsZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9JbnB1dC9pbmRleC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBoZWxnZSBvbiAyNi4wMi4xNy5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZsb2F0OmxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0xhYmVsL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgQWNlYnVzdGVyc1xuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXG4qL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBjaGlwVmFsdWVzIH0gZnJvbSAnLi4vLi4vYXBwLmNvbmZpZyc7XG5pbXBvcnQge1xuICB3aGl0ZSxcbn0gZnJvbSAnLi4vLi4vdmFyaWFibGVzJztcblxuZXhwb3J0IGNvbnN0IENoaXAgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogJHsocHJvcHMpID0+IGAkezAuMyAqIHByb3BzLmluZGV4fWVtYH07XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogLjFlbSBkYXNoZWQgd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyMDBweCkgcm90YXRlWCg1NWRlZykgcm90YXRlWigtNDBkZWcpO1xuICBib3gtc2hhZG93OlxuICAgIC0xcHggMXB4IDBweCAjNTU1LFxuICAgIC0ycHggMnB4IDBweCAjNTU1LFxuICAgIC0zcHggM3B4IDBweCAjNTU1LFxuICAgIC00cHggNHB4IDBweCAjNTU1LFxuICAgIC0ycHggMnB4IDJweCAjNTU1O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG5gO1xuXG5jb25zdCBDaGlwU3RhY2sgPSBzdHlsZWQuZGl2YFxuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDJlbTtcbmA7XG5cbmNvbnN0IEFtb3VudCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICR7d2hpdGV9O1xuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAkeyhwcm9wcykgPT4gcHJvcHMudG9wfTtcbiAgbGVmdDogJHsocHJvcHMpID0+IHByb3BzLmxlZnR9O1xuYDtcblxuY29uc3QgY3JlYXRlQ2hpcFN0YWNrcyA9IChjaGlwVmFscywgcG90U2l6ZSkgPT4ge1xuICAvLyBOb3RlOiBjaGlwVmFsdWUgZm9ybWF0IGlzIFt2YWx1ZSwgY29sb3JdXG4gIGNvbnN0IHJldCA9IGNoaXBWYWxzLnJlZHVjZSgocHJldiwgY2hpcFZhbHVlKSA9PiB7XG4gICAgY29uc3QgeyBzdGFja3MsIHJlbWFpbiB9ID0gcHJldjtcbiAgICBjb25zdCB2YWx1ZSA9IGNoaXBWYWx1ZVswXTtcblxuICAgIGlmIChyZW1haW4gPD0gMCB8fCByZW1haW4gPCB2YWx1ZSkgcmV0dXJuIHByZXY7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVtYWluOiByZW1haW4gJSB2YWx1ZSxcbiAgICAgIHN0YWNrczogW1xuICAgICAgICAuLi5zdGFja3MsXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogY2hpcFZhbHVlWzBdLFxuICAgICAgICAgIGNvbG9yOiBjaGlwVmFsdWVbMV0sXG4gICAgICAgICAgY291bnQ6IE1hdGguZmxvb3IocmVtYWluIC8gdmFsdWUpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LCB7IHN0YWNrczogW10sIHJlbWFpbjogcG90U2l6ZSB9KTtcblxuICByZXR1cm4gcmV0LnN0YWNrcztcbn07XG5cbmNvbnN0IHJhbmdlID0gKHN0YXJ0LCBlbmQsIHN0ZXAgPSAxKSA9PiB7XG4gIGNvbnN0IHJldCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSBzdGVwKSB7XG4gICAgcmV0LnB1c2goaSk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gUG90KHByb3BzKSB7XG4gIGNvbnN0IGNoaXBTdGFja3MgPSBjcmVhdGVDaGlwU3RhY2tzKGNoaXBWYWx1ZXMsIHByb3BzLnBvdFNpemUpO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgdG9wPXtwcm9wcy50b3B9IGxlZnQ9e3Byb3BzLmxlZnR9PlxuICAgICAge2NoaXBTdGFja3MubWFwKChzdGFjaywgaSkgPT4gKFxuICAgICAgICA8Q2hpcFN0YWNrIGluZGV4PXtpfSBrZXk9e2l9PlxuICAgICAgICAgIHtyYW5nZSgwLCBzdGFjay5jb3VudCkubWFwKChqKSA9PiAoXG4gICAgICAgICAgICA8Q2hpcCBjb2xvcj17c3RhY2suY29sb3J9IGluZGV4PXtqfSBrZXk9e2p9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2hpcFN0YWNrPlxuICAgICAgKSl9XG4gICAgICA8QW1vdW50PnsgcHJvcHMucG90U2l6ZSB9PC9BbW91bnQ+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5Qb3QucHJvcFR5cGVzID0ge1xuICBwb3RTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICB0b3A6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGxlZnQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Qb3QvaW5kZXguanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVsZ2Ugb24gMjIuMDQuMTcuXG4gKi9cblxuY29uc3QgZW5oYW5jZXIgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4gY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBXcmFwcGVkQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgdGhpcy5wYXRoLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwLjNzLCAwLjNzJztcbiAgICBpZiAodGhpcy5wcmV2VGltZVN0YW1wICYmIG5vdyAtIHRoaXMucHJldlRpbWVTdGFtcCA8IDEwMCkge1xuICAgICAgdGhpcy5wYXRoLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcywgMHMnO1xuICAgIH1cbiAgICB0aGlzLnByZXZUaW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBzdXBlci5yZW5kZXIoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9SYWRpYWxQcm9ncmVzcy9lbmhhbmNlci5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZW5oYW5jZXIgZnJvbSAnLi9lbmhhbmNlcic7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7KHByb3BzKSA9PiBwcm9wcy5iZ0ltZ30pO1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5gO1xuXG5jbGFzcyBSYWRpYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRQYXRoU3R5bGVzKCkge1xuICAgIGNvbnN0IHsgcGVyY2VudCwgc3Ryb2tlV2lkdGgsIGdhcERlZ3JlZSA9IDAsIGdhcFBvc2l0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gKHN0cm9rZVdpZHRoIC8gMik7XG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xuICAgIGxldCBlbmRQb3NpdGlvblkgPSAtMiAqIHJhZGl1cztcbiAgICBzd2l0Y2ggKGdhcFBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IDIgKiByYWRpdXM7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSAtMiAqIHJhZGl1cztcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMiAqIHJhZGl1cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgICBjb25zdCBwYXRoU3RyaW5nID0gYE0gNTAsNTAgbSAke2JlZ2luUG9zaXRpb25YfSwke2JlZ2luUG9zaXRpb25ZfVxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cbiAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcbiAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcbiAgICBjb25zdCB0cmFpbFBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7bGVuIC0gZ2FwRGVncmVlfXB4ICR7bGVufXB4YCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YCxcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcycsXG4gICAgfTtcbiAgICBjb25zdCBzdHJva2VQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAkeyhwZXJjZW50IC8gMTAwKSAqIChsZW4gLSBnYXBEZWdyZWUpfXB4ICR7bGVufXB4YCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YCxcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcycsXG4gICAgfTtcbiAgICByZXR1cm4geyBwYXRoU3RyaW5nLCB0cmFpbFBhdGhTdHlsZSwgc3Ryb2tlUGF0aFN0eWxlIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJlZml4Q2xzLCBzdHJva2VXaWR0aCwgdHJhaWxXaWR0aCwgc3Ryb2tlQ29sb3IsXG4gICAgICB0cmFpbENvbG9yLCBzdHJva2VMaW5lY2FwLCBzdHlsZSwgYmdJbWcsIGNsYXNzTmFtZSwgLi4ucmVzdFByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYXRoU3RyaW5nLCB0cmFpbFBhdGhTdHlsZSwgc3Ryb2tlUGF0aFN0eWxlIH0gPSB0aGlzLmdldFBhdGhTdHlsZXMoKTtcbiAgICBkZWxldGUgcmVzdFByb3BzLnBlcmNlbnQ7XG4gICAgZGVsZXRlIHJlc3RQcm9wcy5nYXBEZWdyZWU7XG4gICAgZGVsZXRlIHJlc3RQcm9wcy5nYXBQb3NpdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgYmdJbWc9e2JnSW1nfT5cbiAgICAgICAgPExhYmVsPiB7IHRoaXMucHJvcHMubGFiZWwgfSA8L0xhYmVsPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWNpcmNsZSAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWNpcmNsZS10cmFpbGB9XG4gICAgICAgICAgICBkPXtwYXRoU3RyaW5nfVxuICAgICAgICAgICAgc3Ryb2tlPXt0cmFpbENvbG9yfVxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e3RyYWlsV2lkdGggfHwgc3Ryb2tlV2lkdGh9XG4gICAgICAgICAgICBmaWxsT3BhY2l0eT1cIjBcIlxuICAgICAgICAgICAgc3R5bGU9e3RyYWlsUGF0aFN0eWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1jaXJjbGUtcGF0aGB9XG4gICAgICAgICAgICBkPXtwYXRoU3RyaW5nfVxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD17c3Ryb2tlTGluZWNhcH1cbiAgICAgICAgICAgIHN0cm9rZT17c3Ryb2tlQ29sb3J9XG4gICAgICAgICAgICBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgICAgICAgICBmaWxsT3BhY2l0eT1cIjBcIlxuICAgICAgICAgICAgcmVmPXsocGF0aCkgPT4geyB0aGlzLnBhdGggPSBwYXRoOyB9fVxuICAgICAgICAgICAgc3R5bGU9e3N0cm9rZVBhdGhTdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cblJhZGlhbC5Qcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgcGVyY2VudDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLm51bWJlciwgUmVhY3QuUHJvcFR5cGVzLnN0cmluZ10pLFxuICBwcmVmaXhDbHM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHN0cm9rZUNvbG9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzdHJva2VMaW5lY2FwOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydyb3VuZCcsICdzcXVhcmUnXSksXG4gIHN0cm9rZVdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLCBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gIHN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICB0cmFpbENvbG9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFpbFdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLCBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXSksXG4gIGdhcFBvc2l0aW9uOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXSksXG59O1xuXG5SYWRpYWwuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBwZXJjZW50OiAwLFxuICBwcmVmaXhDbHM6ICdyYy1wcm9ncmVzcycsXG4gIHN0cm9rZUNvbG9yOiAnIzJkYjdmNScsXG4gIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gIHN0cm9rZVdpZHRoOiAxLFxuICBzdHlsZToge30sXG4gIHRyYWlsQ29sb3I6ICcjRDlEOUQ5JyxcbiAgdHJhaWxXaWR0aDogMSxcbiAgZ2FwUG9zaXRpb246ICd0b3AnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZXIoUmFkaWFsKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1JhZGlhbFByb2dyZXNzL2luZGV4LmpzIiwiLyoqXG4qIENyZWF0ZWQgYnkganpvYnJvIDIwMTcwNTE5XG4qL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbkljb24sXG4gIEJ1dHRvblN0eWxlLFxuICBCdXR0b25UZXh0LFxuICBCdXR0b25XcmFwcGVyLFxuICBTZWF0V3JhcHBlcixcbn0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBCdXR0b25JbnZpdGUgPSAoeyBjb29yZHMsIG9uQ2xpY2tIYW5kbGVyIH0pID0+IChcbiAgPFNlYXRXcmFwcGVyIGNsYXNzTmFtZT1cInNlYXQtd3JhcHBlclwiIGNvb3Jkcz17Y29vcmRzfT5cbiAgICA8QnV0dG9uV3JhcHBlciBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfT5cbiAgICAgIDxCdXR0b25TdHlsZT5cbiAgICAgICAgPEJ1dHRvbkljb24gY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICA8QnV0dG9uVGV4dD5JbnZpdGU8L0J1dHRvblRleHQ+XG4gICAgICA8L0J1dHRvblN0eWxlPlxuICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgPC9TZWF0V3JhcHBlcj5cbik7XG5CdXR0b25JbnZpdGUucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrSGFuZGxlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGNvb3JkczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uSW52aXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvU2VhdC9CdXR0b25JbnZpdGUuanMiLCIvKipcbiogQ3JlYXRlZCBieSBqem9icm8gMjAxNzA1MThcbiovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uSWNvbixcbiAgQnV0dG9uU3R5bGUsXG4gIEJ1dHRvblRleHQsXG4gIEJ1dHRvbldyYXBwZXIsXG4gIFNlYXRXcmFwcGVyLFxufSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IEJ1dHRvbkpvaW5TZWF0ID0gKHsgY29vcmRzLCBvbkNsaWNrSGFuZGxlciwgcGVuZGluZyB9KSA9PiB7XG4gIGNvbnN0IGljb25UeXBlID0gcGVuZGluZyA/ICdmYSBmYS1yZWZyZXNoIGZhLXNwaW4nIDogJ2ZhIGZhLXBsdXMnO1xuICBjb25zdCBtZXNzYWdlID0gcGVuZGluZyA/ICdQZW5kaW5nJyA6ICdKb2luJztcbiAgcmV0dXJuIChcbiAgICA8U2VhdFdyYXBwZXIgY29vcmRzPXtjb29yZHN9PlxuICAgICAgPEJ1dHRvbldyYXBwZXIgb25DbGljaz17b25DbGlja0hhbmRsZXJ9PlxuICAgICAgICA8QnV0dG9uU3R5bGUgcGVuZGluZz17cGVuZGluZ30+XG4gICAgICAgICAgPEJ1dHRvbkljb24gY2xhc3NOYW1lPXtpY29uVHlwZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICA8QnV0dG9uVGV4dD57bWVzc2FnZX08L0J1dHRvblRleHQ+XG4gICAgICAgIDwvQnV0dG9uU3R5bGU+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9TZWF0V3JhcHBlcj5cbiAgKTtcbn07XG5CdXR0b25Kb2luU2VhdC5wcm9wVHlwZXMgPSB7XG4gIGNvb3JkczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBvbkNsaWNrSGFuZGxlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHBlbmRpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uSm9pblNlYXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9TZWF0L0J1dHRvbkpvaW5TZWF0LmpzIiwiLyoqXG4qIENyZWF0ZWQgYnkganpvYnJvIDIwMTcwNTI0XG4qL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmltcG9ydCB7IENhcmRDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IGNhcmRTaXplID0gNDg7XG5cbmNvbnN0IENhcmRzQ29tcG9uZW50ID0gKHtcbiAgaG9sZUNhcmRzLFxuICBmb2xkZWQsXG59KSA9PiAoXG4gIDxDYXJkQ29udGFpbmVyXG4gICAgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXJcIlxuICAgIGVtcHR5PXtob2xlQ2FyZHNbMF0gPT09IG51bGwgfHwgZm9sZGVkfVxuICA+XG4gICAgPENhcmRcbiAgICAgIGNhcmROdW1iZXI9e2hvbGVDYXJkc1swXX1cbiAgICAgIGZvbGRlZD17Zm9sZGVkfVxuICAgICAgc2l6ZT17Y2FyZFNpemV9XG4gICAgLz5cbiAgICA8Q2FyZFxuICAgICAgY2FyZE51bWJlcj17aG9sZUNhcmRzWzFdfVxuICAgICAgZm9sZGVkPXtmb2xkZWR9XG4gICAgICBzaXplPXtjYXJkU2l6ZX1cbiAgICAvPlxuICA8L0NhcmRDb250YWluZXI+XG4pO1xuQ2FyZHNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBmb2xkZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBob2xlQ2FyZHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSwgLy8gYXJyYXkgb2YgY2FyZHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRzQ29tcG9uZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvU2VhdC9DYXJkc0NvbXBvbmVudC5qcyIsIi8qKlxuKiBDcmVhdGVkIGJ5IGp6b2JybyAyMDE3MDUyMFxuKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDYXJkc0NvbXBvbmVudCBmcm9tICcuL0NhcmRzQ29tcG9uZW50JztcbmltcG9ydCBTZWF0SW5mbyBmcm9tICcuL1NlYXRJbmZvJztcbmltcG9ydCBTdGF0dXNBY3Rpb24gZnJvbSAnLi9TdGF0dXNBY3Rpb24nO1xuaW1wb3J0IHsgU1RBVFVTX01TRyB9IGZyb20gJy4uLy4uL2FwcC5jb25maWcnO1xuXG5pbXBvcnQge1xuICBTZWF0Q29udGFpbmVyLFxuICBTZWF0V3JhcHBlcixcbiAgU3RhdHVzU2VhdCxcbiAgU3RhdHVzU2VhdFdyYXBwZXIsXG59IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgU2VhdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29vcmRzLFxuICAgIHNlYXRTdGF0dXMsXG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8U2VhdFdyYXBwZXIgY29vcmRzPXtjb29yZHN9PlxuICAgICAgPFNlYXRDb250YWluZXJcbiAgICAgICAgYWN0aXZlUGxheWVyPXtzZWF0U3RhdHVzICYmIHNlYXRTdGF0dXMgPT09IFNUQVRVU19NU0cuYWN0aXZlfVxuICAgICAgPlxuICAgICAgICB7c2VhdFN0YXR1cyAmJiBzZWF0U3RhdHVzICE9PSBTVEFUVVNfTVNHLmFjdGl2ZSA/XG4gICAgICAgICAgPFN0YXR1c1NlYXRXcmFwcGVyPlxuICAgICAgICAgICAgPFN0YXR1c1NlYXQ+e3NlYXRTdGF0dXMubXNnfTwvU3RhdHVzU2VhdD5cbiAgICAgICAgICA8L1N0YXR1c1NlYXRXcmFwcGVyPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8Q2FyZHNDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICB9XG5cbiAgICAgICAgPFNlYXRJbmZvIHsuLi5wcm9wc30gLz5cblxuICAgICAgICA8U3RhdHVzQWN0aW9uIHsuLi5wcm9wc30gLz5cblxuICAgICAgPC9TZWF0Q29udGFpbmVyPlxuICAgIDwvU2VhdFdyYXBwZXI+XG4gICk7XG59O1xuU2VhdC5wcm9wVHlwZXMgPSB7XG4gIGNvb3JkczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBzZWF0U3RhdHVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1NlYXQvU2VhdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQb3QgZnJvbSAnLi4vUG90JztcbmltcG9ydCB7IG5pY2tOYW1lQnlBZGRyZXNzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmlja25hbWVzJztcblxuaW1wb3J0IHtcbiAgQXZhdGFySW1hZ2UsXG4gIEFtb3VudEJveCxcbiAgQ2hpcEJ1dHRvbkNvbnRhaW5lcixcbiAgRGVhbGVyQnV0dG9uLFxuICBEZXRhaWxXcmFwcGVyLFxuICBJbmZvV3JhcHBlcixcbiAgTmFtZUJveCxcbiAgU3RhY2tCb3gsXG59IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IFNUQVRVU19NU0cgfSBmcm9tICcuLi8uLi9hcHAuY29uZmlnJztcblxuY29uc3Qgc3RhY2tUb1N0cmluZyA9IChzdGFja1NpemUpID0+IHtcbiAgaWYgKCFzdGFja1NpemUpIHJldHVybiAnMCc7XG4gIHJldHVybiBzdGFja1NpemUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xufTtcblxuY29uc3QgU2VhdEluZm8gPSAoe1xuICBhbW91bnRDb29yZHMsXG4gIGJsb2NreSxcbiAgZGVhbGVyLFxuICBsYXN0QW1vdW50LFxuICBwb3MsXG4gIHNpZ25lckFkZHIsXG4gIHNlYXRTdGF0dXMsXG4gIHN0YWNrU2l6ZSxcbn0pID0+IChcbiAgPEluZm9XcmFwcGVyPlxuICAgIHtzZWF0U3RhdHVzICYmIHNlYXRTdGF0dXMgPT09IFNUQVRVU19NU0cuYWN0aXZlID9cbiAgICAgIDxDaGlwQnV0dG9uQ29udGFpbmVyIGNsYXNzTmFtZT1cImNoaXAtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8RGVhbGVyQnV0dG9uIGRlYWxlcj17ZGVhbGVyfSBwb3M9e3Bvc30+RDwvRGVhbGVyQnV0dG9uPlxuXG4gICAgICAgIDxBbW91bnRCb3ggYW1vdW50Q29vcmRzPXthbW91bnRDb29yZHN9PlxuICAgICAgICAgIHsgKGxhc3RBbW91bnQgPiAwKSAmJlxuICAgICAgICAgICAgPFBvdCBjbGFzc05hbWU9XCJwb3RcIiBwb3RTaXplPXtsYXN0QW1vdW50fSBsZWZ0PVwiMCVcIiB0b3A9XCIwJVwiIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L0Ftb3VudEJveD5cbiAgICAgIDwvQ2hpcEJ1dHRvbkNvbnRhaW5lcj5cbiAgICAgIDogbnVsbFxuICAgIH1cblxuICAgIDxBdmF0YXJJbWFnZSBjbGFzc05hbWU9XCJhdmF0YXItaW1hZ2VcIiBiZ0ltZz17YmxvY2t5fSAvPlxuXG4gICAgPERldGFpbFdyYXBwZXI+XG4gICAgICA8TmFtZUJveCBjbGFzc05hbWU9XCJuYW1lLWJveFwiPntuaWNrTmFtZUJ5QWRkcmVzcyhzaWduZXJBZGRyKX08L05hbWVCb3g+XG4gICAgICA8U3RhY2tCb3ggY2xhc3NOYW1lPVwic3RhY2stYm94XCI+e3N0YWNrVG9TdHJpbmcoc3RhY2tTaXplKX08L1N0YWNrQm94PlxuICAgIDwvRGV0YWlsV3JhcHBlcj5cbiAgPC9JbmZvV3JhcHBlcj5cbik7XG5TZWF0SW5mby5wcm9wVHlwZXMgPSB7XG4gIGFtb3VudENvb3JkczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBibG9ja3k6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGRlYWxlcjogUmVhY3QuUHJvcFR5cGVzLm51bWJlciwgLy8gd2hpY2ggc2VhdCBpcyBkZWFsZXJcbiAgbGFzdEFtb3VudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgcG9zOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLCAvLyB3aGljaCBwb3NpdGlvbiBpcyBUSElTIHNlYXRcbiAgc2lnbmVyQWRkcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VhdFN0YXR1czogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc3RhY2tTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhdEluZm87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9TZWF0L1NlYXRJbmZvLmpzIiwiLyoqXG4qIENyZWF0ZWQgYnkganpvYnJvIDIwMTcwNTE5XG4qL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgVGltZXJCYWNrZ3JvdW5kLFxuICBUaW1lckJhcixcbiAgVGltZXJXcmFwcGVyLFxufSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IHRpbWVyRGlzcGxheUNvbG9yID0gKHRpbWVyUHJvZ3Jlc3MpID0+IHtcbiAgaWYgKHRpbWVyUHJvZ3Jlc3MgPj0gNjApIHJldHVybiAnYWN0aXZlJztcbiAgaWYgKHRpbWVyUHJvZ3Jlc3MgPj0gMzApIHJldHVybiAnd2FybmluZyc7XG4gIGlmICh0aW1lclByb2dyZXNzID49IDApIHJldHVybiAnZGFuZ2VyJztcbiAgcmV0dXJuICdhY3RpdmUnO1xufTtcblxuY29uc3QgU2VhdFRpbWVyID0gKHsgdGltZUxlZnQgfSkgPT4gKFxuICA8VGltZXJXcmFwcGVyPlxuICAgIDxUaW1lckJhY2tncm91bmQ+XG4gICAgICA8VGltZXJCYXJcbiAgICAgICAgdHlwZT17dGltZXJEaXNwbGF5Q29sb3IodGltZUxlZnQpfVxuICAgICAgICB3aWR0aD17YCR7dGltZUxlZnR9JWB9XG4gICAgICAvPlxuICAgIDwvVGltZXJCYWNrZ3JvdW5kPlxuICA8L1RpbWVyV3JhcHBlcj5cbik7XG5cblNlYXRUaW1lci5wcm9wVHlwZXMgPSB7XG4gIHRpbWVMZWZ0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhdFRpbWVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvU2VhdC9TZWF0VGltZXIuanMiLCIvKipcbiogQ3JlYXRlZCBieSBqem9icm8gMjAxNzA1MTlcbiovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBUaW1lckJhY2tncm91bmQsXG4gIFRpbWVyQmFyLFxuICBUaW1lcldyYXBwZXIsXG59IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgU2l0b3V0VGltZXIgPSAoKSA9PiAoXG4gIDxUaW1lcldyYXBwZXI+XG4gICAgPFRpbWVyQmFja2dyb3VuZD5cbiAgICAgIDxUaW1lckJhclxuICAgICAgICB0eXBlPVwic2l0b3V0XCJcbiAgICAgICAgd2lkdGg9e2AkezEwMH0lYH1cbiAgICAgIC8+XG4gICAgPC9UaW1lckJhY2tncm91bmQ+XG4gIDwvVGltZXJXcmFwcGVyPlxuKTtcblxuU2l0b3V0VGltZXIucHJvcFR5cGVzID0ge1xuICAvLyBzaXRvdXQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaXRvdXRUaW1lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1NlYXQvU2l0b3V0VGltZXIuanMiLCIvKipcbiogQ3JlYXRlZCBieSBqem9icm8gMjAxNzA1MjBcbiovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgU2VhdFRpbWVyIGZyb20gJy4vU2VhdFRpbWVyJztcbmltcG9ydCBTaXRvdXRUaW1lciBmcm9tICcuL1NpdG91dFRpbWVyJztcblxuaW1wb3J0IHsgU3RhdHVzV3JhcHBlciwgU3RhdHVzQWN0aW9uU3R5bGUgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFN0YXR1c0FjdGlvbiA9ICh7XG4gIHNob3dTdGF0dXMsXG4gIHNpdG91dCxcbiAgdGltZUxlZnQsXG4gIHBvcyxcbiAgd2hvc1R1cm4sXG4gIHdhc01vc3RSZWNlbnRBY3Rpb24sXG59KSA9PiB7XG4gIC8vIGlmIHNlYXQncyB0dXJuIGZvciBhY3Rpb24sIHNob3cgdGltZXIgZm9yIGFjdGlvblxuICBpZiAod2hvc1R1cm4gPT09IHBvcykge1xuICAgIGlmICh0aW1lTGVmdCA+PSAwKSByZXR1cm4gPFNlYXRUaW1lciB0aW1lTGVmdD17dGltZUxlZnR9IC8+O1xuICB9XG5cbiAgLy8gaWYgc2VhdCBpcyBpbiBzaXRvdXQsIHNob3cgdGhlIHNpdG91dCB0aW1lclxuICBpZiAoc2l0b3V0ID49IDApIHJldHVybiA8U2l0b3V0VGltZXIgc2l0b3V0PXtzaXRvdXR9IC8+O1xuXG4gIC8vIGlmIHNlYXQgaGFzIGEgc3RhdHVzLCBzaG93IGFjdGlvbiBzdGF0dXNcbiAgaWYgKCFpc0VtcHR5KHNob3dTdGF0dXMpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGF0dXNXcmFwcGVyPlxuICAgICAgICA8U3RhdHVzQWN0aW9uU3R5bGVcbiAgICAgICAgICB0eXBlPXtzaG93U3RhdHVzLnN0eWxlfVxuICAgICAgICAgIHJlY2VudD17d2FzTW9zdFJlY2VudEFjdGlvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93U3RhdHVzLm1zZ31cbiAgICAgICAgPC9TdGF0dXNBY3Rpb25TdHlsZT5cbiAgICAgIDwvU3RhdHVzV3JhcHBlcj5cbiAgICApO1xuICB9XG5cbiAgLy8gZWxzZSBzaG93IG5vdGhpbmdcbiAgcmV0dXJuIG51bGw7XG59O1xuU3RhdHVzQWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgcG9zOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBzaG93U3RhdHVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBzaXRvdXQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIHRpbWVMZWZ0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICB3YXNNb3N0UmVjZW50QWN0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgd2hvc1R1cm46IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9TZWF0L1N0YXR1c0FjdGlvbi5qcyIsIi8qKlxuKiBDcmVhdGVkIGJ5IGp6b2JybyAyMDE3MDUxN1xuKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTZWF0IGZyb20gJy4vU2VhdCc7XG5pbXBvcnQgQnV0dG9uSm9pblNlYXQgZnJvbSAnLi9CdXR0b25Kb2luU2VhdCc7XG5pbXBvcnQgQnV0dG9uSW52aXRlIGZyb20gJy4vQnV0dG9uSW52aXRlJztcblxuY29uc3QgU2VhdENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaXNUYWtlbixcbiAgICBteVBvcyxcbiAgICBvcGVuLFxuICAgIHBvcyxcbiAgICBwZW5kaW5nLFxuICB9ID0gcHJvcHM7XG4gIGlmIChvcGVuKSB7XG4gICAgaWYgKG15UG9zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25Kb2luU2VhdFxuICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXsoKSA9PiBpc1Rha2VuKG9wZW4sIG15UG9zLCBwZW5kaW5nLCBwb3MpfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbXlQb3MgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uSW52aXRlXG4gICAgICAgICAgb25DbGlja0hhbmRsZXI9eygpID0+IGlzVGFrZW4ob3BlbiwgbXlQb3MsIHBlbmRpbmcsIHBvcyl9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDxTZWF0IHsuLi5wcm9wc30gLz47XG59O1xuU2VhdENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGlzVGFrZW46IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBteVBvczogUmVhY3QuUHJvcFR5cGVzLm51bWJlciwgLy8gYWN0aW9uIGJhciBwb3NpdGlvblxuICBvcGVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgcG9zOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBwZW5kaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXRDb21wb25lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9TZWF0L2luZGV4LmpzIiwiLyoqXG4qIENyZWF0ZWQgYnkganpvYnJvIDIwMTcwNTE3XG4qL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIGNvbG9yc1xuY29uc3Qgc3VjY2Vzc0JnID0gJ2xpbmVhci1ncmFkaWVudCgwZGVnLCAjQjRFRDUwIDAlLCAjNzhEMDQ5IDEwMCUpJztcbmNvbnN0IGluZm9CZyA9ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgI0Q0RDRENCAwJSwgIzRENEQ0RCAxMDAlKSc7XG5jb25zdCBpbmZvUmV2ZXJzZUJnID0gJ2xpbmVhci1ncmFkaWVudCgwZGVnLCAjNEQ0RDREIDAlLCAjRDRENEQ0IDEwMCUpJztcbmNvbnN0IHdhcm5pbmdCZyA9ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgI0Y3RjhDQiAwJSwgI0Y3RjUxQyAxMDAlKSc7XG5jb25zdCBkYW5nZXJCZyA9ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgI0ZCREE2MSAwJSwgI0Y3NkIxQyAxMDAlKSc7XG5jb25zdCBhY3RpdmVDb2xvciA9ICcjMzVDNUUzJzsgLy8gdGVhbGlzaFxuY29uc3Qgc3VjY2Vzc0NvbG9yID0gJyMzMDUyMDknOyAvLyBncmVlbmlzaFxuY29uc3QgaW5mb0NvbG9yID0gJ3doaXRlJzsgLy8gd2hpdGVcbmNvbnN0IHdhcm5pbmdDb2xvciA9ICcjNUU1RjNCJzsgLy8geWVsbG93aXNoXG5jb25zdCBkYW5nZXJDb2xvciA9ICcjNjM0MzBGJzsgIC8vIG9yYW5naXNoXG4vLyBzaGFkb3dzXG5jb25zdCBzbWFsbFNoYWRvdyA9ICcwIDFweCA0cHggMCByZ2JhKDAsMCwwLDAuNTApJztcbmNvbnN0IG1lZFNoYWRvdyA9ICcwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuNTApJztcbi8vIHNpemVcbmNvbnN0IHNlYXRTY2FsZSA9IDEyODtcbmNvbnN0IGpvaW5CdXR0b25TY2FsZSA9IDY0O1xuLy8gZm9udFxuY29uc3QgZm9udFdlaWdodEluZm8gPSA1MDA7XG5jb25zdCBmb250V2VpZ3RoQm9sZCA9IDYwMDtcblxuXG5jb25zdCBjYWxjU2l6ZSA9IChiYXNlU2l6ZSwgc2NhbGVTaXplLCBkaW1Ub1NjYWxlKSA9PiB7XG4gIGNvbnN0IGNvbnZlcnRlZE51bSA9IE1hdGgucm91bmQoKHNjYWxlU2l6ZSAvIGJhc2VTaXplKSAqIGRpbVRvU2NhbGUpO1xuICByZXR1cm4gYCR7Y29udmVydGVkTnVtfXB4YDtcbn07XG5cbmNvbnN0IHNjYWxlU2VhdCA9IChkaW1Ub1NjYWxlKSA9PiB7XG4gIGNvbnN0IGJhc2VTZWF0U2l6ZSA9IDEyODtcbiAgcmV0dXJuIGNhbGNTaXplKGJhc2VTZWF0U2l6ZSwgc2VhdFNjYWxlLCBkaW1Ub1NjYWxlKTtcbn07XG5cbmNvbnN0IHNjYWxlQnV0dG9uSm9pbiA9IChkaW1Ub1NjYWxlKSA9PiB7XG4gIGNvbnN0IGJhc2VKb2luQnV0dG9uU2l6ZSA9IDY0O1xuICByZXR1cm4gY2FsY1NpemUoYmFzZUpvaW5CdXR0b25TaXplLCBqb2luQnV0dG9uU2NhbGUsIGRpbVRvU2NhbGUpO1xufTtcblxuLy8gc2hhcmVkIHN0eWxlc1xuZXhwb3J0IGNvbnN0IFNoYXJlZE1pZGRsZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNzg3ODc4IDAlLCAjMzkzOTM5IDUwJSwgIzFGMUYxRiA1MCUsICMzQzNDM0MgMTAwJSk7XG4gIGJveC1zaGFkb3c6ICR7bWVkU2hhZG93fTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTaGFyZWRMb3dlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3NjYWxlU2VhdCg4KX07XG4gIGJveC1zaGFkb3c6ICR7c21hbGxTaGFkb3d9O1xuICBib3JkZXItcmFkaXVzOiAwIDAgJHtzY2FsZVNlYXQoMyl9ICR7c2NhbGVTZWF0KDMpfTtcbmA7XG5cbi8vIHNlYXRcbmV4cG9ydCBjb25zdCBTZWF0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgJHsocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMuY29vcmRzWzJdID09PSAwKSB7XG4gICAgICByZXR1cm4gYGxlZnQ6JHsgcHJvcHMuY29vcmRzWzBdfSU7YDtcbiAgICB9IFxuICAgIHJldHVybiBgcmlnaHQ6JHsgcHJvcHMuY29vcmRzWzBdfSU7YDtcbiAgfX1cbiAgdG9wOiAkeyhwcm9wcykgPT4gcHJvcHMuY29vcmRzWzFdfSU7XG4gIGNvbG9yOiAnd2hpdGUnO1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDI1JTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWF0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7c2NhbGVTZWF0KC0yMCl9O1xuICBsZWZ0OiAke3NjYWxlU2VhdCgtNjQpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6ICR7c2NhbGVTZWF0KDEyOCl9O1xuICBoZWlnaHQ6IGF1dG87XG5cbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlUGxheWVyID8gMSA6IDAuNX07XG5gO1xuXG4vLyBjaGlwcyAmIGRlYWxlciBidXR0b25cbmV4cG9ydCBjb25zdCBDaGlwQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRGVhbGVyQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHsocHJvcHMpID0+ICEocHJvcHMuZGVhbGVyID09PSBwcm9wcy5wb3MpID8gJ25vbmUnIDogJ2luaGVyaXQnfTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7c2NhbGVTZWF0KC0yOCl9O1xuICBsZWZ0OiAke3NjYWxlU2VhdCgxMil9O1xuICB3aWR0aDogJHtzY2FsZVNlYXQoMjApfTtcbiAgaGVpZ2h0OiAke3NjYWxlU2VhdCgyMCl9O1xuXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6ICR7c21hbGxTaGFkb3d9O1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAke3NjYWxlU2VhdCgxNCl9O1xuICBjb2xvcjogIzM1MzUzNTtcbmA7XG5cbmV4cG9ydCBjb25zdCBBbW91bnRCb3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6ICR7KHByb3BzKSA9PiBgJHtwcm9wcy5hbW91bnRDb29yZHNbMF19cHhgfTtcbiAgdG9wOiAkeyhwcm9wcykgPT4gYCR7cHJvcHMuYW1vdW50Q29vcmRzWzFdfXB4YH07XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuLy8gY2FyZHNcbmV4cG9ydCBjb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAke3NjYWxlU2VhdCg0KX07XG4gIG1hcmdpbi10b3A6ICR7KHByb3BzKSA9PiBwcm9wcy5lbXB0eSA/IHNjYWxlU2VhdCg0MCkgOiAwfTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuYDtcblxuLy8gcmVmZXJlbmNlZCBpbiBjb21wb25lbnRzL0NhcmRcbmV4cG9ydCBjb25zdCBDYXJkU2hhcmVkID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAke3NjYWxlU2VhdCgyKX07XG4gIHdpZHRoOiR7c2NhbGVTZWF0KDM2KX07XG5gO1xuXG5leHBvcnQgY29uc3QgQ2FyZEJhY2sgPSBzdHlsZWQoQ2FyZFNoYXJlZClgXG4gIG1hcmdpbi10b3A6ICR7c2NhbGVTZWF0KDI4KX07XG4gIGhlaWdodDogJHtzY2FsZVNlYXQoMTIpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkRnJvbnQgPSBzdHlsZWQoQ2FyZFNoYXJlZClgXG4gIGhlaWdodDogJHtzY2FsZVNlYXQoNDApfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkU3R5bGUgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcblxuICBib3gtc2hhZG93OiAke3NtYWxsU2hhZG93fTtcbmA7XG5cbi8vIGluZm9cbmV4cG9ydCBjb25zdCBJbmZvV3JhcHBlciA9IHN0eWxlZChTaGFyZWRNaWRkbGUpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAke3NjYWxlU2VhdCg0KX07XG5cbiAgY29sb3I6ICNENUQ1RDU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQXZhdGFySW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBBbGljZUJsdWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMuYmdJbWd9KTtcbiAgYmFja2dyb3VuZC1zaXplOiAke3NjYWxlU2VhdCgzOCl9ICR7c2NhbGVTZWF0KDM4KX07XG4gIHdpZHRoOiAke3NjYWxlU2VhdCgzOCl9O1xuICBoZWlnaHQ6ICR7c2NhbGVTZWF0KDM4KX07XG4gIGJvcmRlci1yYWRpdXM6ICR7c2NhbGVTZWF0KDMpfTtcbiAgbWFyZ2luOiAke3NjYWxlU2VhdCgzKX0gJHtzY2FsZVNlYXQoNCl9O1xuYDtcblxuZXhwb3J0IGNvbnN0IERldGFpbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICBtYXJnaW4tbGVmdDogJHtzY2FsZVNlYXQoMil9O1xuYDtcblxuZXhwb3J0IGNvbnN0IE5hbWVCb3ggPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWJvdHRvbTogJHtzY2FsZVNlYXQoMil9O1xuICBmb250LXNpemU6ICR7c2NhbGVTZWF0KDExKX07XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdGFja0JveCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAke3NjYWxlU2VhdCgyKX07XG4gIGZvbnQtc2l6ZTogJHtzY2FsZVNlYXQoMTEpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuYDtcblxuLy8gc3RhdHVzXG5leHBvcnQgY29uc3QgU3RhdHVzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdGF0dXNBY3Rpb25TdHlsZSA9IHN0eWxlZChTaGFyZWRMb3dlcilgXG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6ICR7c2NhbGVTZWF0KDEwKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3NjYWxlU2VhdCgxKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7c2NhbGVTZWF0KDEwKX07XG4gIGZvbnQtd2VpZ2h0OiAke1xuICAgIChwcm9wcykgPT4gKHByb3BzLnR5cGUgPT09ICdpbmZvJykgPyBmb250V2VpZ2h0SW5mbyA6IGZvbnRXZWlndGhCb2xkXG4gIH07XG4gIGZvbnQtc2l6ZTogJHtzY2FsZVNlYXQoMTEpfTtcblxuICBjb2xvcjogJHsocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gJ3N1Y2Nlc3MnKSByZXR1cm4gc3VjY2Vzc0NvbG9yO1xuICAgIGlmIChwcm9wcy50eXBlID09PSAnaW5mbycpIHJldHVybiAnYmxhY2snO1xuICAgIGlmIChwcm9wcy50eXBlID09PSAnd2FybmluZycpIHJldHVybiB3YXJuaW5nQ29sb3I7XG4gICAgaWYgKHByb3BzLnR5cGUgPT09ICdkYW5nZXInKSByZXR1cm4gZGFuZ2VyQ29sb3I7XG4gICAgcmV0dXJuIGluZm9Db2xvcjtcbiAgfX07XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiB7XG4gICAgaWYgKHByb3BzLnR5cGUgPT09ICdzdWNjZXNzJykgcmV0dXJuIHN1Y2Nlc3NCZztcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2luZm8nKSByZXR1cm4gJ3doaXRlJztcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gJ3dhcm5pbmcnKSByZXR1cm4gd2FybmluZ0JnO1xuICAgIGlmIChwcm9wcy50eXBlID09PSAnZGFuZ2VyJykgcmV0dXJuIGRhbmdlckJnO1xuICAgIHJldHVybiBpbmZvQmc7XG4gIH19O1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gcHJvcHMucmVjZW50ID8gMSA6IDAuNH07XG5gO1xuXG5leHBvcnQgY29uc3QgU3RhdHVzU2VhdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tcmlnaHQ6ICR7c2NhbGVTZWF0KDYpfTtcbiAgbWFyZ2luLXRvcDogJHtzY2FsZVNlYXQoMjIpfTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0YXR1c1NlYXQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAke3NjYWxlU2VhdCgxNCl9O1xuICBwYWRkaW5nLWJvdHRvbTogJHtzY2FsZVNlYXQoMSl9O1xuICBwYWRkaW5nLXJpZ2h0OiAke3NjYWxlU2VhdCgxNCl9O1xuICBoZWlnaHQ6ICR7c2NhbGVTZWF0KDE4KX07XG5cbiAgZm9udC13ZWlnaHQ6ICR7Zm9udFdlaWdodEluZm99O1xuICBmb250LXNpemU6ICR7c2NhbGVTZWF0KDExKX07XG4gIGNvbG9yOiAke2luZm9Db2xvcn07XG5cbiAgYmFja2dyb3VuZDogJHtpbmZvUmV2ZXJzZUJnfTtcbiAgYm94LXNoYWRvdzogJHtzbWFsbFNoYWRvd307XG4gIGJvcmRlci1yYWRpdXM6ICR7c2NhbGVTZWF0KDMpfSAke3NjYWxlU2VhdCgzKX0gMCAwO1xuYDtcblxuLy8gdGltZXJcbmV4cG9ydCBjb25zdCBUaW1lcldyYXBwZXIgPSBzdHlsZWQoU2hhcmVkTG93ZXIpYFxuICB3aWR0aDogJHtzY2FsZVNlYXQoMTEwKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XG5gO1xuXG5leHBvcnQgY29uc3QgVGltZXJCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6ICR7c2NhbGVTZWF0KDYpfTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAke3NjYWxlU2VhdCgzKX07XG4gIG1hcmdpbi1ib3R0b206ICR7c2NhbGVTZWF0KDMpfTtcbiAgbWFyZ2luLWxlZnQ6ICR7c2NhbGVTZWF0KDMpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzI3MjtcbiAgYm9yZGVyLXJhZGl1czogMCAwICR7c2NhbGVTZWF0KDIpfSAke3NjYWxlU2VhdCgyKX07XG5gO1xuXG5leHBvcnQgY29uc3QgVGltZXJCYXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aH07XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAke3NjYWxlU2VhdCgyKX0gJHtzY2FsZVNlYXQoMil9O1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlID09PSAnc2l0b3V0JykgcmV0dXJuICd3aGl0ZSc7XG4gICAgaWYgKHByb3BzLnR5cGUgPT09ICdhY3RpdmUnKSByZXR1cm4gYWN0aXZlQ29sb3I7XG4gICAgaWYgKHByb3BzLnR5cGUgPT09ICd3YXJuaW5nJykgcmV0dXJuIHdhcm5pbmdCZztcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2RhbmdlcicpIHJldHVybiBkYW5nZXJCZztcbiAgICByZXR1cm4gaW5mb0JnO1xuICB9fTtcbmA7XG5cbi8vIEJ1dHRvbkpvaW5cbmV4cG9ydCBjb25zdCBCdXR0b25TdHlsZSA9IHN0eWxlZChTaGFyZWRNaWRkbGUpYFxuICBib3JkZXItcmFkaXVzOiAke3NjYWxlQnV0dG9uSm9pbig0KX07XG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMucGVuZGluZyA/IHNjYWxlQnV0dG9uSm9pbig2MCkgOiBzY2FsZUJ1dHRvbkpvaW4oNDQpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGNvbG9yOiAjRDVENUQ1O1xuICBmb250LXdlaWdodDogNDAwO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbiAgICAkeycnLyogYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwwLjUwKTsgKi99XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIGNvbG9yOiAke2FjdGl2ZUNvbG9yfTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCwgMS4wKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkljb24gPSBzdHlsZWQuaWBcbiAgZmxleDogYXV0bztcbiAgcGFkZGluZy10b3A6ICR7c2NhbGVCdXR0b25Kb2luKDIpfTtcbiAgcGFkZGluZy1yaWdodDogJHtzY2FsZUJ1dHRvbkpvaW4oNil9O1xuICBwYWRkaW5nLWJvdHRvbTogJHtzY2FsZUJ1dHRvbkpvaW4oNSl9O1xuICBwYWRkaW5nLWxlZnQ6ICR7c2NhbGVCdXR0b25Kb2luKDYpfTtcbiAgJjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogJHtzY2FsZUJ1dHRvbkpvaW4oMTIpfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6ICR7c2NhbGVCdXR0b25Kb2luKDEwKX07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZsZXg6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAke3NjYWxlQnV0dG9uSm9pbigxKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3NjYWxlQnV0dG9uSm9pbigzKX07XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvU2VhdC9zdHlsZXMuanMiLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgYm94U2l6aW5nID0gJ2JveC1zaXppbmc6IGNvbnRlbnQtYm94Oyc7XG5cbmNvbnN0IFNsaWRlc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAke2JveFNpemluZ31cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMHB4IDUwcHggMTBweDtcbmA7XG5cbmNvbnN0IFNsaWRlc091dGVyID0gc3R5bGVkLmRpdmBcbiAgJHtib3hTaXppbmd9XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBTbGlkZXNJbm5lciA9IHN0eWxlZC5kaXZgXG4gICR7Ym94U2l6aW5nfVxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMDAwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG5gO1xuXG5jb25zdCBTbGlkZUJveCA9IHN0eWxlZC5kaXZgXG4gICR7Ym94U2l6aW5nfVxuICBmbG9hdDogbGVmdDtcbmA7XG5cbmNvbnN0IHNsaWRlRGlyZWN0aW9uU3R5bGUgPSBgXG4gICR7Ym94U2l6aW5nfVxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IFNsaWRlTGVmdCA9IHN0eWxlZC5kaXZgXG4gICR7Ym94U2l6aW5nfVxuICAke3NsaWRlRGlyZWN0aW9uU3R5bGV9XG4gIGxlZnQ6IDEwcHg7XG5gO1xuXG5jb25zdCBTbGlkZVJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgJHtib3hTaXppbmd9XG4gICR7c2xpZGVEaXJlY3Rpb25TdHlsZX1cbiAgcmlnaHQ6IDEwcHg7XG5gO1xuXG5jb25zdCBEb3RCb3ggPSBzdHlsZWQuZGl2YFxuICAke2JveFNpemluZ31cbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgRG90ID0gc3R5bGVkLmRpdmBcbiAgJHtib3hTaXppbmd9XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLmlzT24gPyAnIzY2NicgOiAnI2NjYyd9O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5gO1xuXG5cbmNsYXNzIFNsaWRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzbGlkZUluZGV4OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmdlbkdvdG8gPSB0aGlzLmdlbkdvdG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLnByZXYuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLnNsaWRlSW5kZXg7XG4gICAgY29uc3QgdG90YWwgPSB0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVJbmRleDogKCh0b3RhbCArIGluZGV4KSAtIDEpICUgdG90YWwsXG4gICAgfSk7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS5zbGlkZUluZGV4O1xuICAgIGNvbnN0IHRvdGFsID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNsaWRlSW5kZXg6IChpbmRleCArIDEpICUgdG90YWwsXG4gICAgfSk7XG4gIH1cblxuICBnZW5Hb3RvKGluZGV4KSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzbGlkZUluZGV4OiBpbmRleCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICB3aWR0aCA9IDUwMCxcbiAgICAgIGhlaWdodCA9IDQwMCxcbiAgICAgIFNsaWRlc1dyYXBwZXJDb21wb25lbnQgPSBTbGlkZXNXcmFwcGVyLFxuICAgICAgU2xpZGVzT3V0ZXJDb21wb25lbnQgPSBTbGlkZXNPdXRlcixcbiAgICAgIFNsaWRlc0lubmVyQ29tcG9uZW50ID0gU2xpZGVzSW5uZXIsXG4gICAgICBTbGlkZUJveENvbXBvbmVudCA9IFNsaWRlQm94LFxuICAgICAgU2xpZGVMZWZ0Q29tcG9uZW50ID0gU2xpZGVMZWZ0LFxuICAgICAgU2xpZGVSaWdodENvbXBvbmVudCA9IFNsaWRlUmlnaHQsXG4gICAgICBEb3RCb3hDb21wb25lbnQgPSBEb3RCb3gsXG4gICAgICBEb3RDb21wb25lbnQgPSBEb3QsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IHNsaWRlSW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNsaWRlc1dyYXBwZXJDb21wb25lbnQgc3R5bGU9e3sgd2lkdGg6IGAke3dpZHRofXB4YCB9fT5cbiAgICAgICAgPFNsaWRlc091dGVyQ29tcG9uZW50IHN0eWxlPXt7IHdpZHRoOiBgJHt3aWR0aH1weGAgfX0+XG4gICAgICAgICAgPFNsaWRlc0lubmVyQ29tcG9uZW50IHN0eWxlPXt7IGhlaWdodDogYCR7aGVpZ2h0fXB4YCwgbGVmdDogYCR7LTEgKiB3aWR0aCAqIHNsaWRlSW5kZXh9cHhgIH19PlxuICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxTbGlkZUJveENvbXBvbmVudCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogYCR7d2lkdGh9cHhgLCBoZWlnaHQ6IGAke2hlaWdodH1weGAgfX0+XG4gICAgICAgICAgICAgICAge3NsaWRlfVxuICAgICAgICAgICAgICA8L1NsaWRlQm94Q29tcG9uZW50PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TbGlkZXNJbm5lckNvbXBvbmVudD5cbiAgICAgICAgPC9TbGlkZXNPdXRlckNvbXBvbmVudD5cbiAgICAgICAgPFNsaWRlTGVmdENvbXBvbmVudCBvbkNsaWNrPXt0aGlzLnByZXZ9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnRcIiBzdHlsZT17eyBmb250U2l6ZTogJzMwcHgnIH19PjwvaT5cbiAgICAgICAgPC9TbGlkZUxlZnRDb21wb25lbnQ+XG4gICAgICAgIDxTbGlkZVJpZ2h0Q29tcG9uZW50IG9uQ2xpY2s9e3RoaXMubmV4dH0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIiBzdHlsZT17eyBmb250U2l6ZTogJzMwcHgnIH19PjwvaT5cbiAgICAgICAgPC9TbGlkZVJpZ2h0Q29tcG9uZW50PlxuICAgICAgICA8RG90Qm94Q29tcG9uZW50PlxuICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKHNsaWRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPERvdENvbXBvbmVudFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbkdvdG8oaW5kZXgpfVxuICAgICAgICAgICAgICBpc09uPXtpbmRleCA9PT0gc2xpZGVJbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRG90Qm94Q29tcG9uZW50PlxuICAgICAgPC9TbGlkZXNXcmFwcGVyQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cblxuU2xpZGVzLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgU2xpZGVzV3JhcHBlckNvbXBvbmVudDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSxcbiAgU2xpZGVCb3hDb21wb25lbnQ6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFJlYWN0LkNvbXBvbmVudCksXG4gIFNsaWRlc091dGVyQ29tcG9uZW50OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihSZWFjdC5Db21wb25lbnQpLFxuICBTbGlkZXNJbm5lckNvbXBvbmVudDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSxcbiAgU2xpZGVMZWZ0Q29tcG9uZW50OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihSZWFjdC5Db21wb25lbnQpLFxuICBTbGlkZVJpZ2h0Q29tcG9uZW50OiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihSZWFjdC5Db21wb25lbnQpLFxuICBEb3RCb3hDb21wb25lbnQ6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFJlYWN0LkNvbXBvbmVudCksXG4gIERvdENvbXBvbmVudDogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1NsaWRlcy9pbmRleC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBoZWxnZSBvbiAxNi4wMi4xNy5cbiAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEJvYXJkID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1pbi13aWR0aDogMjU1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJvYXJkQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1RhYmxlL0JvYXJkLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbGdlIG9uIDE0LjAyLjE3LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IFRhYmxlTWVudSBmcm9tICcuLi8uLi9jb250YWluZXJzL1RhYmxlTWVudSc7XG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvQWN0aW9uQmFyJztcbmltcG9ydCB0YWJsZUltYWdlIGZyb20gJy4vdGFibGVCRy5zdmcnO1xuaW1wb3J0IFBvdCBmcm9tICcuLi9Qb3QnO1xuaW1wb3J0IEN1cnRhaW4gZnJvbSAnLi4vLi4vY29udGFpbmVycy9DdXJ0YWluJztcbmltcG9ydCBGZWVkYmFja0J1dHRvbiBmcm9tICcuLi8uLi9jb250YWluZXJzL0ZlZWRiYWNrQnV0dG9uJztcblxuaW1wb3J0IHtcbiAgVGFibGVIZWFkZXIsXG4gIFRhYmxlQ29udGFpbmVyLFxuICBUYWJsZUFuZENoYWlycyxcbiAgSGFuZEJveCxcbiAgV2lubmVyLFxufSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IFNlYXRzID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgbmFtZT1cInNlYXRzXCI+XG4gICAgeyBwcm9wcy5zZWF0cyB9XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGFibGVDb21wb25lbnQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBuYW1lPVwidGFibGUtY29tcG9uZW50XCI+XG4gICAgPEN1cnRhaW4gey4uLnByb3BzfSAvPlxuXG4gICAgPFRhYmxlQ29udGFpbmVyIG5hbWU9XCJ0YWJsZS1jb250YWluZXJcIj5cblxuICAgICAgPFRhYmxlSGVhZGVyIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiPlxuICAgICAgICB7IGBzdGF0ZTogJHtwcm9wcy5zdGF0ZX1gIH0gPGJyIC8+XG4gICAgICA8L1RhYmxlSGVhZGVyPlxuXG4gICAgICA8VGFibGVBbmRDaGFpcnMgaWQ9XCJ0YWJsZS1hbmQtY2hhaXJzXCIgPlxuXG4gICAgICAgIDxpbWcgc3JjPXt0YWJsZUltYWdlfSBhbHQ9XCJcIiAvPlxuXG4gICAgICAgIDxQb3QgcG90U2l6ZT17cHJvcHMucG90U2l6ZX0gdG9wPVwiNTUlXCIgbGVmdD1cIjUwJVwiIC8+XG5cbiAgICAgICAgPFNlYXRzIHNlYXRzPXtwcm9wcy5zZWF0c30gLz5cblxuICAgICAgICA8Qm9hcmQgaWQ9XCJib2FyZFwiIGJvYXJkPXtwcm9wcy5ib2FyZH0+XG4gICAgICAgICAgeyBwcm9wcy5ib2FyZCB9XG4gICAgICAgIDwvQm9hcmQ+XG5cbiAgICAgICAgeyBwcm9wcy53aW5uZXJzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgPFdpbm5lciBjbGFzc05hbWU9XCJ3aW5uZXJcIj57IHByb3BzLndpbm5lcnMgfTwvV2lubmVyPlxuICAgICAgICB9XG5cbiAgICAgIDwvVGFibGVBbmRDaGFpcnM+XG5cbiAgICAgIHsgcHJvcHMubXlIYW5kICYmXG4gICAgICAgIDxIYW5kQm94IGNsYXNzTmFtZT1cImhhbmQtYm94XCI+IHsgcHJvcHMubXlIYW5kLmRlc2NyIH08L0hhbmRCb3g+XG4gICAgICB9XG5cbiAgICAgIDxUYWJsZU1lbnUgey4uLnByb3BzfSAvPlxuXG4gICAgICA8QWN0aW9uQmFyIGNsYXNzTmFtZT1cImFjdGlvbi1iYXJcIiB7Li4ucHJvcHN9IHNiPXtwcm9wcy5zYn0+PC9BY3Rpb25CYXI+XG5cbiAgICA8L1RhYmxlQ29udGFpbmVyPlxuXG4gICAgPEZlZWRiYWNrQnV0dG9uIC8+XG5cbiAgPC9kaXY+XG4pO1xuXG5UYWJsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIHNlYXRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG59O1xuXG5UYWJsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIHN0YXRlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBib2FyZDogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBzZWF0czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBwb3RTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICB3aW5uZXJzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIG15SGFuZDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc2I6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1RhYmxlL2luZGV4LmpzIiwiLyoqIFRhYmxlTWVudSBzdHlsZXNcbiAqIENyZWF0ZWQgYnkgem9icm9qIG9uIDIwMTcwNTMxXG4gKi9cblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gIGJsYWNrLFxuICB3aGl0ZSxcbiAgYmFja2dyb3VuZFRhYmxlLFxuICBjdXJ0YWluU3RpY2t5V2lkdGgsXG4gIGN1cnRhaW5XaWR0aCxcbn0gZnJvbSAndmFyaWFibGVzJztcblxuZXhwb3J0IGNvbnN0IFRhYmxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1pbWFnZTogJHtiYWNrZ3JvdW5kVGFibGV9O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7Y3VydGFpblN0aWNreVdpZHRofSkge1xuICAgIG1hcmdpbi1sZWZ0OiAke2N1cnRhaW5XaWR0aH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWJsZUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgY29sb3I6ICR7d2hpdGV9O1xuICAgcGFkZGluZy1sZWZ0OiAxMGVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDJlbTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAxMCVcbiAgd2lkdGg6IDIwJTtcbiAgYm90dG9tOiAyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7Y3VydGFpblN0aWNreVdpZHRofSkge1xuICAgIGxlZnQ6IGNhbGMoJHtjdXJ0YWluV2lkdGh9ICsgMmVtKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFdpbm5lciA9IHN0eWxlZC5kaXZgXG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JsYWNrfTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGNvbG9yOiAke3doaXRlfTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMjAlKTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUYWJsZUFuZENoYWlycyA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgICBcbiAgd2lkdGg6IDEwMCVcbiAgcGFkZGluZzogMjUlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhhbmRCb3ggPSBzdHlsZWQuZGl2YFxuICBsZWZ0OiA4MCU7XG4gIHRvcDogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JsYWNrfTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGNvbG9yOiAke3doaXRlfTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMjAlKTtcbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9UYWJsZS9zdHlsZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MDJjOWNkMTAyZmM0MGM1Y2M5MjQzZjIxN2I4NjBjYy5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL1RhYmxlL3RhYmxlQkcuc3ZnXG4vLyBtb2R1bGUgaWQgPSAuL2FwcC9jb21wb25lbnRzL1RhYmxlL3RhYmxlQkcuc3ZnXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIEhhbWJ1cmdlcixcbiAgSWRlbnRpY29uLFxuICBJdGVtVGl0bGUsXG4gIE1lbnVIZWFkZXIgYXMgSGVhZGVyU3R5bGUsXG4gIFBhdHR5LFxufSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IE1lbnVIZWFkZXIgPSAoe1xuICBhY3RpdmUsXG4gIGJsb2NreSxcbiAgdG9nZ2xlTWVudU9wZW4sXG4gIHRvZ2dsZU1lbnVBY3RpdmUsXG4gIG5pY2tOYW1lLFxuICBvcGVuLFxufSkgPT4ge1xuICBjb25zdCBoYW5kbGVPbkxlYXZlID0gKCkgPT4gYWN0aXZlID8gdG9nZ2xlTWVudUFjdGl2ZSgpIDogbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyU3R5bGVcbiAgICAgIG9wZW49e29wZW59XG4gICAgICBvbkNsaWNrPXt0b2dnbGVNZW51T3Blbn1cbiAgICAgIG9uTW91c2VEb3duPXt0b2dnbGVNZW51QWN0aXZlfVxuICAgICAgb25Nb3VzZVVwPXt0b2dnbGVNZW51QWN0aXZlfVxuICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVPbkxlYXZlfVxuICAgID5cbiAgICAgIDxJZGVudGljb24gbmFtZT1cImlkZW50aWNvblwiIGJnSW1nPXtibG9ja3l9IC8+XG4gICAgICA8SXRlbVRpdGxlIG5hbWU9XCJpdGVtLXRpdGxlXCI+e25pY2tOYW1lfTwvSXRlbVRpdGxlPlxuICAgICAgPEhhbWJ1cmdlcj5cbiAgICAgICAgPFBhdHR5IGFjdGl2ZT17YWN0aXZlfSAvPlxuICAgICAgICA8UGF0dHkgYWN0aXZlPXthY3RpdmV9IC8+XG4gICAgICAgIDxQYXR0eSBhY3RpdmU9e2FjdGl2ZX0gLz5cbiAgICAgIDwvSGFtYnVyZ2VyPlxuICAgIDwvSGVhZGVyU3R5bGU+XG4gICk7XG59O1xuXG5NZW51SGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgYmxvY2t5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBuaWNrTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlTWVudUFjdGl2ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHRvZ2dsZU1lbnVPcGVuOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb3BlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51SGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVGFibGVNZW51L01lbnVIZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuIEl0ZW1XcmFwcGVyLFxuIEl0ZW1JY29uLFxuIEl0ZW1UaXRsZSxcbn0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBNZW51SXRlbXMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpdGVtIH0gPSBwcm9wcztcbiAgLy8gaWYgdGhlIG1lbnUgaXMgb3BlbiwgY2xvc2UgaXRcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIHByb3BzLnRvZ2dsZU1lbnVPcGVuKCk7XG4gICAgfVxuICAgIGl0ZW0ub25DbGljaygpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxJdGVtV3JhcHBlclxuICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgZGlzYWJsZWQ9e2l0ZW0uZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICA+XG4gICAgICA8SXRlbUljb24gY2xhc3NOYW1lPXtpdGVtLmljb259IGFyaWEtaGlkZGVuIC8+XG4gICAgICA8SXRlbVRpdGxlPlxuICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgIDwvSXRlbVRpdGxlPlxuICAgIDwvSXRlbVdyYXBwZXI+XG4gICk7XG59O1xuTWVudUl0ZW1zLnByb3BUeXBlcyA9IHtcbiAgaXRlbTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgb3BlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHRvZ2dsZU1lbnVPcGVuOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1RhYmxlTWVudS9NZW51SXRlbS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBNZW51SGVhZGVyIGZyb20gJy4vTWVudUhlYWRlcic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSc7XG5cbmltcG9ydCB7XG4gQ29udGFpbmVyLFxuIExvZ28sXG4gTG9nb1dyYXBwZXIsXG4gTWVudUNvbnRhaW5lcixcbn0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBUYWJsZU1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGxvZ2dlZEluLCBvcGVuLCBteVBvcywgc2l0b3V0LCBoYW5kbGVDbGlja0xvZ291dCwgb25MZWF2ZSwgb25TaXRvdXQsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgbWVudUNsb3NlID0gW1xuICAgIC8vIE5vdGU6IHNpdG91dCB2YWx1ZSBwb3NzaWJpbGl0aWVzXG4gICAgLy8gc2l0b3V0ID4gMCwgZm9yIGVuYWJsZWQgXCJwbGF5XCJcbiAgICAvLyBzaXRvdXQgPT09IDAsIGZvciBkaXNhYmxlZCBcInBsYXlcIlxuICAgIC8vIHNpdG91dCA9PT0gdW5kZWZpbmVkLCBmb3IgZW5hYmxlZCBcInBhdXNlXCJcbiAgICAvLyBzaXRvdXQgPT09IG51bGwsIGZvciBkaXNhYmxlZFxuICAgIC8vIG15UG9zID09PSAtMSwgdGhlbiBub3QgYXQgdGFibGVcInBhdXNlXCJcbiAgICB7XG4gICAgICBuYW1lOiAnc2l0b3V0JyxcbiAgICAgIGljb246ICh0eXBlb2Ygc2l0b3V0ID09PSAnbnVtYmVyJykgPyAnZmEgZmEtcGxheScgOiAnZmEgZmEtcGF1c2UnLFxuICAgICAgdGl0bGU6ICh0eXBlb2Ygc2l0b3V0ID09PSAnbnVtYmVyJykgPyAnU2l0LUluJyA6ICdTaXQtT3V0JyxcbiAgICAgIG9uQ2xpY2s6IG9uU2l0b3V0LFxuICAgICAgZGlzYWJsZWQ6IG15UG9zID09PSB1bmRlZmluZWQgfHwgc2l0b3V0ID09PSAwIHx8IHNpdG91dCA9PT0gbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzdGFuZHVwJyxcbiAgICAgIGljb246ICdmYSBmYS1leHRlcm5hbC1saW5rJyxcbiAgICAgIHRpdGxlOiAnU3RhbmQtVXAnLFxuICAgICAgb25DbGljazogb25MZWF2ZSxcbiAgICAgIGRpc2FibGVkOiBteVBvcyA9PT0gdW5kZWZpbmVkLFxuICAgICAgLyogVE9ETyBhZGQgc2VhdFN0YXR1cyB0byBVSSByZWR1eCBzdGF0ZSBhbmRcbiAgICAgICAgbWFwU3RhdGVUb1Byb3BzIGluIFRhYmxlTWVudSBjb250YWluZXIgdG8gYmUgdXNlZCBoZXJlICovXG4gICAgICAvLyBkaXNhYmxlZDogbXlQb3MgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgLy8gICBzZWF0U3RhdHVzID09PSBTVEFUVVNfTVNHLnNpdHRpbmdJbiB8fFxuICAgICAgLy8gICBzZWF0U3RhdHVzID09PSBTVEFUVVNfTVNHLnN0YW5kaW5nVXAsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgbWVudVVzZXJPcGVuID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdsb2JieScsXG4gICAgICBpY29uOiAnZmEgZmEtc2VhcmNoJyxcbiAgICAgIHRpdGxlOiAnTG9iYnknLFxuICAgICAgb25DbGljazogKCkgPT4gYnJvd3Nlckhpc3RvcnkucHVzaCgnL2xvYmJ5JyksXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGFzaGJvYXJkJyxcbiAgICAgIGljb246ICdmYSBmYS10YWNob21ldGVyJyxcbiAgICAgIHRpdGxlOiAnRGFzaGJvYXJkJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IGJyb3dzZXJIaXN0b3J5LnB1c2goJy9kYXNoYm9hcmQnKSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdwcmVmZXJlbmNlcycsXG4gICAgICBpY29uOiAnZmEgZmEtY29nJyxcbiAgICAgIHRpdGxlOiAnUHJlZmVyZW5jZXMnLFxuICAgICAgb25DbGljazogKCkgPT4ge30sXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdsb2dvdXQnLFxuICAgICAgaWNvbjogJ2ZhIGZhLXNpZ24tb3V0JyxcbiAgICAgIHRpdGxlOiAnTG9nLU91dCcsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBoYW5kbGVDbGlja0xvZ291dCgpLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IG1lbnVHdWVzdE9wZW4gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2xvYmJ5JyxcbiAgICAgIGljb246ICdmYSBmYS1zZWFyY2gnLFxuICAgICAgdGl0bGU6ICdMb2JieScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBicm93c2VySGlzdG9yeS5wdXNoKCcvbG9iYnknKSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdyZWdpc3RlcicsXG4gICAgICBpY29uOiAnZmEgZmEtdXNlci1wbHVzJyxcbiAgICAgIHRpdGxlOiAnUmVnaXN0ZXInLFxuICAgICAgb25DbGljazogKCkgPT4gYnJvd3Nlckhpc3RvcnkucHVzaCgnL3JlZ2lzdGVyJyksXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnc2lnbmluJyxcbiAgICAgIGljb246ICdmYSBmYS1zaWduLWluJyxcbiAgICAgIHRpdGxlOiAnTG9nLUluJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IGJyb3dzZXJIaXN0b3J5LnB1c2goJy9sb2dpbicpLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gICAgaWYgKGxvZ2dlZEluICYmIG9wZW4pIHtcbiAgICAgIHJldHVybiBtZW51VXNlck9wZW47XG4gICAgfVxuICAgIGlmICghbG9nZ2VkSW4gJiYgb3Blbikge1xuICAgICAgcmV0dXJuIG1lbnVHdWVzdE9wZW47XG4gICAgfVxuICAgIHJldHVybiBtZW51Q2xvc2U7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBuYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8TG9nb1dyYXBwZXIgbmFtZT1cImxvZ28td3JhcHBlclwiPlxuICAgICAgICA8TG9nbz5BY2VCdXN0ZXJzIExvZ288L0xvZ28+XG4gICAgICA8L0xvZ29XcmFwcGVyPlxuICAgICAgPE1lbnVDb250YWluZXIgb3Blbj17b3Blbn0gbmFtZT1cIm1lbnUtY29udGFpbmVyLWd1ZXN0XCI+XG4gICAgICAgIDxNZW51SGVhZGVyIHsuLi5wcm9wc30gLz5cbiAgICAgICAge3JlbmRlck1lbnUoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9IGl0ZW09e2l0ZW19IHsuLi5wcm9wc30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L01lbnVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5UYWJsZU1lbnUucHJvcFR5cGVzID0ge1xuICBsb2dnZWRJbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIG15UG9zOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBoYW5kbGVDbGlja0xvZ291dDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTGVhdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzaXRvdXQ6IFJlYWN0LlByb3BUeXBlcy5hbnksIC8vIFRPRE8gY2hhbmdlIHRvIG9ubHkgbnVtYmVyXG4gIG9uU2l0b3V0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb3BlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZU1lbnU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9UYWJsZU1lbnUvaW5kZXguanMiLCIvKipcbiogQ3JlYXRlZCBieSBqem9icm8gMjAxNzA2MDJcbiovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbWVudUFjdGl2ZUJHID0gJyMzNWM1ZTMnOyAvLyBlbGVjdHJpYyBibHVlXG5jb25zdCBtZW51Qm94U2hhZG93ID0gJzAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4zMSknO1xuY29uc3QgbWVudUNvbG9yID0gJyNlYmU4ZTgnOyAvLyBsaWdodCBncmF5XG5jb25zdCBtZW51Q2xvc2UgPSAnbGluZWFyLWdyYWRpZW50KDBkZWcsICM2MDYwNjAgMCUsICM4MDgwODAgMTAwJSknO1xuY29uc3QgbWVudU9wZW4gPSAnbGluZWFyLWdyYWRpZW50KDBkZWcsICMzODM4MzggMCUsICM3MTcxNzEgMTAwJSknO1xuY29uc3QgbWVudUhvdmVyQm94U2hhZG93ID0gJ2luc2V0IDFweCAxcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMyknO1xuY29uc3QgbWVudUFjdGl2ZUJveFNoYWRvdyA9ICdpbnNldCAycHggMXB4IDVweCAycHggcmdiYSgwLDAsMCwwLjUwKSc7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAke21lbnVDb2xvcn07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogJHttZW51SG92ZXJCb3hTaGFkb3d9O1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAke21lbnVBY3RpdmVCb3hTaGFkb3d9O1xuICAgIGNvbG9yOiAke21lbnVBY3RpdmVCR307XG4gIH1cbiAgJjpkaXNhYmxlZHtcbiAgICBjb2xvcjogIzhlOGU4ZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgJHsnJy8qIGJveC1zaGFkb3c6ICR7bWVudUFjdGl2ZUJveFNoYWRvd307ICovfVxuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG4vLyBMb2dvXG5leHBvcnQgY29uc3QgTG9nb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJlZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IGdyZXk7XG5gO1xuXG4vLyB0YWJsZS1tZW51XG5leHBvcnQgY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMTQ4cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMub3BlbiA/IG1lbnVPcGVuIDogJ25vbmUnfTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAkeyhwcm9wcykgPT4gcHJvcHMub3BlbiA/IG1lbnVCb3hTaGFkb3cgOiAnbm9uZSd9O1xuICB6LWluZGV4OiAkeyhwcm9wcykgPT4gcHJvcHMub3BlbiA/IDEwMCA6IDB9O1xuYDtcblxuLy8gaGVhZGVyLWl0ZW1cbmV4cG9ydCBjb25zdCBNZW51SGVhZGVyID0gc3R5bGVkKEJ1dHRvbilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLm9wZW4gPyAnbm9uZScgOiBtZW51Q2xvc2V9O1xuICBib3gtc2hhZG93OiAkeyhwcm9wcykgPT4gcHJvcHMub3BlbiA/ICdub25lJyA6IG1lbnVCb3hTaGFkb3d9ICFpbXBvcnRhbnQ7XG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSWRlbnRpY29uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiY2Q5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLmJnSW1nfSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IE5pY2tOYW1lID0gc3R5bGVkLnNwYW5gXG4gIG1pbi13aWR0aDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbmA7XG5cbmV4cG9ydCBjb25zdCBIYW1idXJnZXIgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgbWluLWhlaWdodDogMjBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYXR0eSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID8gbWVudUFjdGl2ZUJHIDogJyM1YjVhNWEnfTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwwLjQxKTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbi8vIG1lbnUgaXRlbVxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1XcmFwcGVyID0gc3R5bGVkKEJ1dHRvbilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1JY29uID0gc3R5bGVkLmlgXG4gICY6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtVGl0bGUgPSBzdHlsZWQuc3BhbmBcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVGFibGVNZW51L3N0eWxlcy5qcyIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbnRyYWN0TWV0aG9kQ2FsbCwgY29udHJhY3RUeFNlbmQgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0V2ViMyB9IGZyb20gJy4vc2FnYXMnO1xuXG5mdW5jdGlvbiBkZWdyYWRlKGZuLCBmYWxsYmFjaykge1xuICB0cnkge1xuICAgIHJldHVybiBmbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE1ldGhvZEtleSh7IGdyb3VwTmFtZSwgbWV0aG9kTmFtZSwgYXJncyB9KSB7XG4gIHJldHVybiBgJHtncm91cE5hbWUgfHwgJyd9LiR7bWV0aG9kTmFtZX0oJHtKU09OLnN0cmluZ2lmeShhcmdzKX0pYDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250cmFjdEluc3RhbmNlQXBpKHsgYWJpLCBhZGRyZXNzLCBnZXRTdGF0ZSwgZGlzcGF0Y2ggfSkge1xuICAvLyBjYWNoZWQgdmVyc2lvbiBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXRcbiAgY29uc3QgY29udHJhY3RJbnN0YW5jZSA9IGdldFdlYjMoKS5ldGguY29udHJhY3QoYWJpKS5hdChhZGRyZXNzKTtcbiAgLy8gLy8gcmVkdWNlIHRoZSBhYmkgaW50byB0aGUgcmVkdXggbWV0aG9kc1xuICBjb25zdCBhcGkgPSBhYmkucmVkdWNlKChvLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgLy8gc2tpcCBpZiB3ZSdyZSBub3QgZGVhbGluZyB3aXRoIGEgZnVuY3Rpb25cbiAgICBpZiAoZGVmaW5pdGlvbi50eXBlICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBvOyB9XG4gICAgY29uc3QgbWV0aG9kTmFtZSA9IGRlZmluaXRpb24ubmFtZTtcbiAgICAvLyBidWlsZCB0aGUgYWN0aW9uc1xuICAgIGNvbnN0IGFjdGlvbnMgPSBiaW5kQWN0aW9uQ3JlYXRvcnMoe1xuICAgICAgLy8gZGlzcGF0Y2hlcyBhY3Rpb24gdG8gcmVhZCBjb250cmFjdCBtZXRob2QgcmVzdWx0cyBhbmQgd3JpdGUgaW50byBzdG9yZVxuICAgICAgY2FsbDogKC4uLmFyZ3MpID0+IGNvbnRyYWN0TWV0aG9kQ2FsbCh7XG4gICAgICAgIGFyZ3MsIGFkZHJlc3MsIGtleTogZ2V0TWV0aG9kS2V5KHsgbWV0aG9kTmFtZSwgYXJncyB9KSwgbWV0aG9kOiBjb250cmFjdEluc3RhbmNlW21ldGhvZE5hbWVdLmNhbGwsXG4gICAgICB9KSxcbiAgICAgIC8vIGNyZWF0ZXMgcmVjZWlwdCBmb3IgdG8gaW52b2tlIGNvbnRyYWN0IHRocm91Z2ggYWNjb3VudCBjb250cm9sbGVyXG4gICAgICBzZW5kVHJhbnNhY3Rpb246ICguLi5hcmdzKSA9PiBjb250cmFjdFR4U2VuZCh7XG4gICAgICAgIGtleTogZ2V0TWV0aG9kS2V5KHsgbWV0aG9kTmFtZSwgYXJncyB9KSxcbiAgICAgICAgZGVzdDogYWRkcmVzcyxcbiAgICAgICAgZGF0YTogY29udHJhY3RJbnN0YW5jZVttZXRob2ROYW1lXS5nZXREYXRhKC4uLmFyZ3MpLFxuICAgICAgICBwcml2S2V5OiBnZXRTdGF0ZSgpLmdldCgncHJpdktleScpLFxuICAgICAgfSksXG4gICAgfSwgZGlzcGF0Y2gpO1xuICAgIC8vIGJhc2UgZ2V0dGVyXG4gICAgLy8gcmVhZHMgY2FjaGVkIGNvbnRyYWN0IG1ldGhvZCBjYWxsIGZyb20gc3RhdGVcbiAgICBjb25zdCBjb250cmFjdE1ldGhvZCA9ICguLi5hcmdzKSA9PiAoXG4gICAgICBkZWdyYWRlKCgpID0+IHtcbiAgICAgICAgY29uc3QgbWV0aG9kS2V5ID0gZ2V0TWV0aG9kS2V5KHsgbWV0aG9kTmFtZSwgYXJncyB9KTtcbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKCkuZ2V0SW4oW2FkZHJlc3MsICdtZXRob2RzJywgbWV0aG9kS2V5LCAndmFsdWUnXSk7XG4gICAgICB9KVxuICAgICk7XG4gICAgLy8gY2FsbHMgY29udHJhY3QgbWV0aG9kIHdpdGhvdXQgY2hhbmdpbmcgc3RhdGVcbiAgICBjb25zdCBjYWxsUHJvbWlzZSA9ICguLi5hcmdzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb250cmFjdEluc3RhbmNlW21ldGhvZE5hbWVdLmNhbGwoLi4uYXJncywgKGVyciwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBhZGQgYWN0aW9ucyB0byBiYXNlIGdldHRlclxuICAgIGNvbnRyYWN0TWV0aG9kLmNhbGwgPSBhY3Rpb25zLmNhbGw7XG4gICAgY29udHJhY3RNZXRob2Quc2VuZFRyYW5zYWN0aW9uID0gYWN0aW9ucy5zZW5kVHJhbnNhY3Rpb247XG4gICAgY29udHJhY3RNZXRob2QuY2FsbFByb21pc2UgPSBjYWxsUHJvbWlzZTtcbiAgICAvLyAvLyByZWR1Y2Ugd2l0aCBhZGRlZCBhY3Rpb25zXG4gICAgcmV0dXJuIHsgLi4ubywgW21ldGhvZE5hbWVdOiBjb250cmFjdE1ldGhvZCB9O1xuICB9LCB7fSk7XG4gIC8vIGRlY29yYXRlXG4gIGFwaS5hZGRyZXNzID0gYWRkcmVzcztcbiAgYXBpLmFsbEV2ZW50cyA9IGNvbnRyYWN0SW5zdGFuY2UuYWxsRXZlbnRzO1xuICByZXR1cm4gYXBpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRyYWN0QVBJKHsgZ2V0U3RhdGUsIGRpc3BhdGNoIH0pIHtcbiAgY29uc3QgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIChhYmkpID0+IHtcbiAgICBjb25zdCBhcGkgPSB7XG4gICAgICBhdChhZGRyZXNzKSB7XG4gICAgICAgIGlmICghY2FjaGVbYWRkcmVzc10pIHtcbiAgICAgICAgICBjYWNoZVthZGRyZXNzXSA9IGdlbmVyYXRlQ29udHJhY3RJbnN0YW5jZUFwaSh7IGFiaSwgYWRkcmVzcywgZ2V0U3RhdGUsIGRpc3BhdGNoIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVthZGRyZXNzXTtcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gYXBpO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvQWNjb3VudFByb3ZpZGVyL2dlbmVyYXRlQ29udHJhY3RBcGkuanMiLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB3ZWIzTWV0aG9kQ2FsbCwgU1VQUE9SVEVEX1dFQjNfTUVUSE9EUyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3RBY2NvdW50IH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0V2ViMyB9IGZyb20gJy4vc2FnYXMnO1xuaW1wb3J0IGdlbmVyYXRlQ29udHJhY3RBcGkgZnJvbSAnLi9nZW5lcmF0ZUNvbnRyYWN0QXBpJztcblxuZnVuY3Rpb24gZGVncmFkZShmbiwgZmFsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0aG9kS2V5KHsgZ3JvdXBOYW1lLCBtZXRob2ROYW1lLCBhcmdzIH0pIHtcbiAgcmV0dXJuIGAke2dyb3VwTmFtZSB8fCAnJ30uJHttZXRob2ROYW1lfSgke0pTT04uc3RyaW5naWZ5KGFyZ3MpfSlgO1xufVxuXG4vLyByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ290dGVuIHdlYjMgbWV0aG9kXG5mdW5jdGlvbiBnZW5lcmF0ZVdlYjNHZXR0ZXIoeyBnZXRTdGF0ZSwgbWV0aG9kTmFtZSwgZ3JvdXBOYW1lIH0pIHtcbiAgaWYgKG1ldGhvZE5hbWUuaW5kZXhPZignZ2V0JykgIT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBnZXR0ZXJGcmFnbWVudCA9IG1ldGhvZE5hbWUuc3BsaXQoJ2dldCcpWzFdO1xuICBjb25zdCBnZXR0ZXJOYW1lID0gYCR7Z2V0dGVyRnJhZ21lbnRbMF0udG9Mb3dlckNhc2UoKX0ke2dldHRlckZyYWdtZW50LnNsaWNlKDEpfWA7XG4gIC8vIFRPRE8gYWRkIG90aGVyIHN0YXR1c2VzIChmZXRjaGluZywgY3JlYXRlZCwgZXJyb3IsIGV0Yy4pXG4gIGNvbnN0IGdldHRlciA9IHtcbiAgICBbZ2V0dGVyTmFtZV06ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoZ2V0dGVyTmFtZS5pbmRleE9mKCd0cmFuc2FjdGlvbicpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBkZWdyYWRlKCgpID0+IGdldFN0YXRlKCkuZ2V0SW4oWyd3ZWIzJywgJ3RyYW5zYWN0aW9ucycsIGFyZ3NbMF0sICd2YWx1ZSddKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVncmFkZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZEtleSA9IGdldE1ldGhvZEtleSh7IGdyb3VwTmFtZSwgbWV0aG9kTmFtZSwgYXJncyB9KTtcbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKCkuZ2V0SW4oWyd3ZWIzJywgJ21ldGhvZHMnLCBtZXRob2RLZXksICd2YWx1ZSddKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBnZXR0ZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV2ViM0FjdGlvbkNyZWF0b3IoeyBncm91cE5hbWUsIG1ldGhvZE5hbWUsIGRpc3BhdGNoIH0pIHtcbiAgLy8gdXNlIHRoZSBkZWZpbmVkIGFjdGlvbiBjcmVhdG9yLCBvciBmYWxsYmFjayB0byByZWd1bGFyIHdlYjMgbWV0aG9kXG4gIGNvbnN0IHdlYjMgPSBnZXRXZWIzKCk7XG4gIGNvbnN0IG1ldGhvZCA9IHdlYjNbZ3JvdXBOYW1lXVttZXRob2ROYW1lXTtcbiAgY29uc3QgYWNPdmVycmlkZSA9IFNVUFBPUlRFRF9XRUIzX01FVEhPRFNbZ3JvdXBOYW1lXVttZXRob2ROYW1lXS5hY3Rpb25DcmVhdG9yO1xuICBjb25zdCBhY3Rpb25DcmVhdG9yID0gYWNPdmVycmlkZSB8fCB3ZWIzTWV0aG9kQ2FsbDtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgW21ldGhvZE5hbWVdOiAoLi4uYXJncykgPT4gYWN0aW9uQ3JlYXRvcih7IG1ldGhvZCwgYXJncywga2V5OiAhYWNPdmVycmlkZSAmJiBnZXRNZXRob2RLZXkoeyBncm91cE5hbWUsIG1ldGhvZE5hbWUsIGFyZ3MgfSkgfSksXG4gIH0sIGRpc3BhdGNoKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVXZWIzTWV0aG9kcyhwYXJhbXMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5nZW5lcmF0ZVdlYjNHZXR0ZXIocGFyYW1zKSxcbiAgICAuLi5nZW5lcmF0ZVdlYjNBY3Rpb25DcmVhdG9yKHBhcmFtcyksXG4gIH07XG59XG5cbi8vIFRPRE8gc2hvdWxkIHdlIHNjb3BlIHRoaXM/IHRoaXMgdGhlIHJpZ2h0IHBsYWNlIHRvIHB1dCBpdD9cbmxldCB1cGRhdGVkU3RhdGU7XG5mdW5jdGlvbiBnZXRDdXJyZW50U3RhdGUoKSB7IHJldHVybiB1cGRhdGVkU3RhdGU7IH1cblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXR3b3JrQXBpKHN0YXRlLCBkaXNwYXRjaCkge1xuICB1cGRhdGVkU3RhdGUgPSBzdGF0ZTtcbiAgLy8gcmVkdWNlIHRoZSBzdXBwb3J0ZWQgYXBpIGludG8gYWN0aW9uIGNyZWF0b3JzIGFuZCBnZXR0ZXJzXG4gIGNvbnN0IHdlYjMgPSBPYmplY3Qua2V5cyhTVVBQT1JURURfV0VCM19NRVRIT0RTKS5yZWR1Y2UoKG8sIGdyb3VwTmFtZSkgPT4gKHtcbiAgICAuLi5vLFxuICAgIFtncm91cE5hbWVdOiBPYmplY3Qua2V5cyhTVVBQT1JURURfV0VCM19NRVRIT0RTW2dyb3VwTmFtZV0pLnJlZHVjZSgobzIsIG1ldGhvZE5hbWUpID0+ICh7XG4gICAgICAuLi5vMixcbiAgICAgIC4uLmdlbmVyYXRlV2ViM01ldGhvZHMoeyBtZXRob2ROYW1lLCBnZXRTdGF0ZTogZ2V0Q3VycmVudFN0YXRlLCBkaXNwYXRjaCwgZ3JvdXBOYW1lIH0pLFxuICAgIH0pLFxuICAgIHt9KSxcbiAgfSksXG4gIHt9KTtcbiAgLy8gbmljZSBsaXR0bGUgaGVscGVyIGZ1bmN0aW9uXG4gIHdlYjMuZXRoLndhaXRGb3JNaW5lZCA9ICh0eCwgcG9sbFRpbWUgPSA1ICogMTAwMCkgPT4gKFxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZ1bmN0aW9uIHBvbGwoKSB7XG4gICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRUcmFuc2FjdGlvblJlY2VpcHQodHgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChwb2xsLCBwb2xsVGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dChwb2xsLCAxMCk7IC8vIHRpbWVvdXQgZm9yIHRlc3RycGNcbiAgICB9KVxuICApO1xuICAvLyBjdXN0b20gY29udHJhY3QgY3JlYXRpb24gYXBpXG4gIHdlYjMuZXRoLmNvbnRyYWN0ID0gZ2VuZXJhdGVDb250cmFjdEFwaSh7IHdlYjMsIGdldFN0YXRlOiBnZXRDdXJyZW50U3RhdGUsIGRpc3BhdGNoIH0pO1xuXG4gIHJldHVybiB7IHdlYjMgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2ViM0Nvbm5lY3QocGFzc2VkTWFwU3RhdGVUb1Byb3BzLCBwYXNzZWRBY3Rpb25zKSB7XG4gIC8vIGFsbG93IHVzZXIgdG8gbWFwIGN1c3RvbSBtYXBcbiAgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBwcm9wcykge1xuICAgIHJldHVybiB7IC4uLnBhc3NlZE1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgcHJvcHMpLCB3ZWIzUmVkdXg6IHNlbGVjdEFjY291bnQoc3RhdGUpIH07XG4gIH1cblxuICBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4geyBkaXNwYXRjaCwgLi4uYmluZEFjdGlvbkNyZWF0b3JzKHBhc3NlZEFjdGlvbnMoZGlzcGF0Y2gpLCBkaXNwYXRjaCkgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCAuLi5jdXN0b21BY3Rpb25zIH0gPSBkaXNwYXRjaFByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZVByb3BzLFxuICAgICAgLi4ub3duUHJvcHMsXG4gICAgICAuLi5jdXN0b21BY3Rpb25zLFxuICAgICAgZGlzcGF0Y2gsXG4gICAgICB3ZWIzUmVkdXg6IGdlbmVyYXRlTmV0d29ya0FwaShzdGF0ZVByb3BzLndlYjNSZWR1eCwgZGlzcGF0Y2gpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9BY2NvdW50UHJvdmlkZXIvd2ViM0Nvbm5lY3QuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVsZ2Ugb24gMjQuMDguMTYuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmF2ZW4gZnJvbSAncmF2ZW4tanMnO1xuaW1wb3J0IHsgY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFRhYmxlU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90YWJsZVNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBzZXRBY3Rpb25CYXJBY3RpdmUsXG4gIHNldEFjdGlvbkJhck1vZGUsXG4gIHNldEFjdGlvbkJhckJldFNsaWRlcixcbn0gZnJvbSAnLi9hY3Rpb25zJztcblxuaW1wb3J0IHtcbiAgZ2V0QWN0aW9uQmFyU2xpZGVyT3BlbixcbiAgZ2V0QWN0aW9uQmFyTW9kZSxcbiAgbWFrZVNlbGVjdEFjdGlvbkJhckFjdGl2ZSxcbiAgbWFrZVNlbGVjdEFjdGlvbkJhclZpc2libGUsXG4gIG1ha2VNaW5TZWxlY3RvcixcbiAgbWFrZUNhbGxBbW91bnRTZWxlY3RvcixcbiAgbWFrZUFtb3VudFRvQ2FsbFNlbGVjdG9yLFxufSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IG1ha2VTZWxlY3RQcml2S2V5IH0gZnJvbSAnLi4vQWNjb3VudFByb3ZpZGVyL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7XG4gIG1ha2VJc015VHVyblNlbGVjdG9yLFxuICBtYWtlTXlNYXhCZXRTZWxlY3RvcixcbiAgbWFrZU1lc3NhZ2VzU2VsZWN0b3IsXG4gIG1ha2VQbGF5ZXJzQ291bnRTZWxlY3Rvcixcbn0gZnJvbSAnLi4vVGFibGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IHtcbiAgbWFrZU15Q2FyZHNTZWxlY3RvcixcbiAgbWFrZU15U3RhY2tTZWxlY3Rvcixcbn0gZnJvbSAnLi4vU2VhdC9zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBzZXRDYXJkcywgYmV0LCBwYXksIGZvbGQsIGNoZWNrIH0gZnJvbSAnLi4vVGFibGUvYWN0aW9ucyc7XG5cbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BY3Rpb25CYXInO1xuXG5jbGFzcyBBY3Rpb25CYXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUFsbEluID0gdGhpcy5oYW5kbGVBbGxJbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQmV0ID0gdGhpcy5oYW5kbGVCZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoZWNrID0gdGhpcy5oYW5kbGVDaGVjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2FsbCA9IHRoaXMuaGFuZGxlQ2FsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRm9sZCA9IHRoaXMuaGFuZGxlRm9sZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlQW1vdW50ID0gdGhpcy51cGRhdGVBbW91bnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRhYmxlID0gbmV3IFRhYmxlU2VydmljZShwcm9wcy5wYXJhbXMudGFibGVBZGRyLCB0aGlzLnByb3BzLnByaXZLZXkpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGFtb3VudDogMCB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmlzTXlUdXJuID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnByb3BzLnNldEFjdGlvbkJhckFjdGl2ZSh0cnVlKTtcbiAgICAgIHRoaXMucHJvcHMuc2V0QWN0aW9uQmFyTW9kZShudWxsKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbW91bnQodmFsdWUpIHtcbiAgICBsZXQgYW1vdW50ID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICBhbW91bnQgPSAoYW1vdW50ID4gdGhpcy5wcm9wcy5teVN0YWNrKSA/IHRoaXMucHJvcHMubXlTdGFjayA6IGFtb3VudDtcbiAgICB0aGlzLnNldFN0YXRlKHsgYW1vdW50IH0pO1xuICB9XG5cbiAgY2FwdHVyZUVycm9yKGhhbmRJZCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIChlcnIpID0+IHtcbiAgICAgIFJhdmVuLmNhcHR1cmVFeGNlcHRpb24oZXJyLCB7IHRhZ3M6IHtcbiAgICAgICAgdGFibGVBZGRyOiBzZWxmLnByb3BzLnBhcmFtcy50YWJsZUFkZHIsXG4gICAgICAgIGhhbmRJZCxcbiAgICAgIH0gfSk7XG4gICAgICB0aGlzLnByb3BzLnNldEFjdGlvbkJhckFjdGl2ZSh0cnVlKTtcbiAgICAgIHRoaXMucHJvcHMuc2V0QWN0aW9uQmFyTW9kZShudWxsKTtcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQWxsSW4oKSB7XG4gICAgLy8gaWYgcGxheWVyIHdhbnRzIHRvIHJhaXNlIGFuZCB0aGVpciBzdGFjayBpcyBzbWFsbGVyIHRoYW4gdGhlIG1pblJhaXNlIGFtb3VudCwgdGhlbiBiZXQgdGhlaXIgc3RhY2tcbiAgICBjb25zdCB7IG1pblJhaXNlLCBteVN0YWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFtb3VudCA9IChteVN0YWNrIDwgbWluUmFpc2UpID8gbXlTdGFjayA6IG1pblJhaXNlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhbW91bnQgfSwgKCkgPT4gdGhpcy5oYW5kbGVCZXQoKSk7XG4gIH1cblxuICBoYW5kbGVCZXQoKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRBY3Rpb25CYXJBY3RpdmUoZmFsc2UpO1xuICAgIGNvbnN0IGFtb3VudCA9IHRoaXMuc3RhdGUuYW1vdW50ICsgdGhpcy5wcm9wcy5teU1heEJldDtcbiAgICBjb25zdCBoYW5kSWQgPSBwYXJzZUludCh0aGlzLnByb3BzLnBhcmFtcy5oYW5kSWQsIDEwKTtcblxuICAgIGNvbnN0IGJldEFjdGlvbiA9IHRoaXMucHJvcHMuYmV0KHRoaXMucHJvcHMucGFyYW1zLnRhYmxlQWRkciwgaGFuZElkLCBhbW91bnQsIHRoaXMucHJvcHMucHJpdktleSwgdGhpcy5wcm9wcy5teVBvcywgdGhpcy5wcm9wcy5sYXN0UmVjZWlwdCk7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucGF5KGJldEFjdGlvbiwgdGhpcy5wcm9wcy5kaXNwYXRjaClcbiAgICAudGhlbigoY2FyZHMpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2V0Q2FyZHModGhpcy5wcm9wcy5wYXJhbXMudGFibGVBZGRyLCBoYW5kSWQsIGNhcmRzKTtcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmNhcHR1cmVFcnJvcihoYW5kSWQpKTtcbiAgfVxuXG4gIGhhbmRsZUNhbGwoKSB7XG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jYWxsQW1vdW50LCAxMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFtb3VudCB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUJldCgpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2soKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRBY3Rpb25CYXJBY3RpdmUoZmFsc2UpO1xuICAgIGNvbnN0IGFtb3VudCA9IHRoaXMucHJvcHMubXlNYXhCZXQ7XG4gICAgY29uc3QgaGFuZElkID0gcGFyc2VJbnQodGhpcy5wcm9wcy5wYXJhbXMuaGFuZElkLCAxMCk7XG4gICAgY29uc3QgY2hlY2tTdGF0ZXMgPSBbJ3ByZWZsb3AnLCAndHVybicsICdyaXZlcicsICdmbG9wJ107XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnByb3BzLnN0YXRlO1xuICAgIGNvbnN0IGNoZWNrVHlwZSA9IGNoZWNrU3RhdGVzLmluZGV4T2Yoc3RhdGUpICE9PSAtMSA/IHN0YXRlIDogJ2Zsb3AnO1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMucHJvcHMuY2hlY2soXG4gICAgICB0aGlzLnByb3BzLnBhcmFtcy50YWJsZUFkZHIsXG4gICAgICBoYW5kSWQsXG4gICAgICBhbW91bnQsXG4gICAgICB0aGlzLnByb3BzLnByaXZLZXksXG4gICAgICB0aGlzLnByb3BzLm15UG9zLFxuICAgICAgdGhpcy5wcm9wcy5sYXN0UmVjZWlwdCxcbiAgICAgIGNoZWNrVHlwZSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMucGF5KGFjdGlvbiwgdGhpcy5wcm9wcy5kaXNwYXRjaClcbiAgICAgIC50aGVuKChjYXJkcykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNldENhcmRzKHRoaXMucHJvcHMucGFyYW1zLnRhYmxlQWRkciwgaGFuZElkLCBjYXJkcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuY2FwdHVyZUVycm9yKGhhbmRJZCkpO1xuICB9XG5cbiAgaGFuZGxlRm9sZCgpIHtcbiAgICB0aGlzLnByb3BzLnNldEFjdGlvbkJhckFjdGl2ZShmYWxzZSk7XG4gICAgY29uc3QgYW1vdW50ID0gdGhpcy5wcm9wcy5teU1heEJldDtcbiAgICBjb25zdCBoYW5kSWQgPSBwYXJzZUludCh0aGlzLnByb3BzLnBhcmFtcy5oYW5kSWQsIDEwKTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnByb3BzLmZvbGQoXG4gICAgICB0aGlzLnByb3BzLnBhcmFtcy50YWJsZUFkZHIsXG4gICAgICBoYW5kSWQsXG4gICAgICBhbW91bnQsXG4gICAgICB0aGlzLnByb3BzLnByaXZLZXksXG4gICAgICB0aGlzLnByb3BzLm15UG9zLFxuICAgICAgdGhpcy5wcm9wcy5sYXN0UmVjZWlwdFxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wYXkoYWN0aW9uLCB0aGlzLnByb3BzLmRpc3BhdGNoKVxuICAgICAgLnRoZW4oKGNhcmRzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0Q2FyZHModGhpcy5wcm9wcy5wYXJhbXMudGFibGVBZGRyLCBoYW5kSWQsIGNhcmRzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5jYXB0dXJlRXJyb3IoaGFuZElkKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBY3Rpb25CYXJcbiAgICAgICAgYW1vdW50PXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgaGFuZGxlQWxsSW49e3RoaXMuaGFuZGxlQWxsSW59XG4gICAgICAgIGhhbmRsZUJldD17dGhpcy5oYW5kbGVCZXR9XG4gICAgICAgIGhhbmRsZUNoZWNrPXt0aGlzLmhhbmRsZUNoZWNrfVxuICAgICAgICBoYW5kbGVDYWxsPXt0aGlzLmhhbmRsZUNhbGx9XG4gICAgICAgIGhhbmRsZUZvbGQ9e3RoaXMuaGFuZGxlRm9sZH1cbiAgICAgICAgdXBkYXRlQW1vdW50PXt0aGlzLnVwZGF0ZUFtb3VudH1cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuQWN0aW9uQmFyQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgYmV0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgY2FsbEFtb3VudDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgY2hlY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBkaXNwYXRjaDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGZvbGQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBsYXN0UmVjZWlwdDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgbWluUmFpc2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG15TWF4QmV0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBteVBvczogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgbXlTdGFjazogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgcGF5OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgcGFyYW1zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBwcml2S2V5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzZXRDYXJkczogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHN0YXRlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzZXRBY3Rpb25CYXJBY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBzZXRBY3Rpb25CYXJNb2RlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBkaXNwYXRjaCxcbiAgICBzZXRDYXJkczogKHRhYmxlQWRkciwgaGFuZElkLCBjYXJkcykgPT4gc2V0Q2FyZHModGFibGVBZGRyLCBoYW5kSWQsIGNhcmRzKSxcbiAgICBiZXQ6ICh0YWJsZUFkZHIsIGhhbmRJZCwgYW1vdW50LCBwcml2S2V5LCBteVBvcywgbGFzdFJlY2VpcHQpID0+IGJldChcbiAgICAgIHRhYmxlQWRkciwgaGFuZElkLCBhbW91bnQsIHByaXZLZXksIG15UG9zLCBsYXN0UmVjZWlwdCxcbiAgICApLFxuICAgIHBheTogKGJldEFjdGlvbikgPT4gcGF5KGJldEFjdGlvbiwgZGlzcGF0Y2gpLFxuICAgIGZvbGQ6ICh0YWJsZUFkZHIsIGhhbmRJZCwgYW1vdW50LCBwcml2S2V5LCBteVBvcywgbGFzdFJlY2VpcHQpID0+IGZvbGQoXG4gICAgICB0YWJsZUFkZHIsIGhhbmRJZCwgYW1vdW50LCBwcml2S2V5LCBteVBvcywgbGFzdFJlY2VpcHQpLFxuICAgIGNoZWNrOiAodGFibGVBZGRyLCBoYW5kSWQsIGFtb3VudCwgcHJpdktleSwgbXlQb3MsIGxhc3RSZWNlaXB0LCBjaGVja1R5cGVcbiAgICAgICkgPT4gY2hlY2soXG4gICAgICAgIHRhYmxlQWRkciwgaGFuZElkLCBhbW91bnQsIHByaXZLZXksIG15UG9zLCBsYXN0UmVjZWlwdCwgY2hlY2tUeXBlXG4gICAgKSxcbiAgICBzZXRBY3Rpb25CYXJBY3RpdmU6IChhY3RpdmUpID0+IGRpc3BhdGNoKHNldEFjdGlvbkJhckFjdGl2ZShhY3RpdmUpKSxcbiAgICBzZXRBY3Rpb25CYXJCZXRTbGlkZXI6IChvcGVuKSA9PiBkaXNwYXRjaChzZXRBY3Rpb25CYXJCZXRTbGlkZXIob3BlbikpLFxuICAgIHNldEFjdGlvbkJhck1vZGU6IChtb2RlKSA9PiBkaXNwYXRjaChzZXRBY3Rpb25CYXJNb2RlKG1vZGUpKSxcbiAgfTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgYWN0aXZlOiBtYWtlU2VsZWN0QWN0aW9uQmFyQWN0aXZlKCksXG4gIGFtb3VudFRvQ2FsbDogbWFrZUFtb3VudFRvQ2FsbFNlbGVjdG9yKCksXG4gIGNhbGxBbW91bnQ6IG1ha2VDYWxsQW1vdW50U2VsZWN0b3IoKSxcbiAgY2FyZHM6IG1ha2VNeUNhcmRzU2VsZWN0b3IoKSxcbiAgaXNNeVR1cm46IG1ha2VJc015VHVyblNlbGVjdG9yKCksXG4gIHBsYXllckNvdW50OiBtYWtlUGxheWVyc0NvdW50U2VsZWN0b3IoKSxcbiAgcHJpdktleTogbWFrZVNlbGVjdFByaXZLZXkoKSxcbiAgbWVzc2FnZXM6IG1ha2VNZXNzYWdlc1NlbGVjdG9yKCksXG4gIG1vZGU6IGdldEFjdGlvbkJhck1vZGUoKSxcbiAgbWluUmFpc2U6IG1ha2VNaW5TZWxlY3RvcigpLFxuICBteU1heEJldDogbWFrZU15TWF4QmV0U2VsZWN0b3IoKSxcbiAgbXlTdGFjazogbWFrZU15U3RhY2tTZWxlY3RvcigpLFxuICBzbGlkZXJPcGVuOiBnZXRBY3Rpb25CYXJTbGlkZXJPcGVuKCksXG4gIHZpc2libGU6IG1ha2VTZWxlY3RBY3Rpb25CYXJWaXNpYmxlKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWN0aW9uQmFyQ29udGFpbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL0FjdGlvbkJhci9pbmRleC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBoZWxnZSBvbiAyOS4wMy4xNy5cbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7IFBva2VySGVscGVyLCBSZWNlaXB0Q2FjaGUgfSBmcm9tICdwb2tlci1oZWxwZXInO1xuXG5pbXBvcnQge1xuICBtYWtlTWF4QmV0U2VsZWN0b3IsXG4gIG1ha2VNeU1heEJldFNlbGVjdG9yLFxuICBtYWtlU2JTZWxlY3RvcixcbiAgbWFrZUhhbmRTZWxlY3RvcixcbiAgbWFrZUhhbmRTdGF0ZVNlbGVjdG9yLFxuICBtYWtlTXlQb3NTZWxlY3Rvcixcbn0gZnJvbSAnLi4vVGFibGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IHtcbiAgbWFrZU15U3RhY2tTZWxlY3Rvcixcbn0gZnJvbSAnLi4vU2VhdC9zZWxlY3RvcnMnO1xuXG5jb25zdCBnZXRJc015VHVybiA9IChfLCBwcm9wcykgPT4gcHJvcHMuaXNNeVR1cm47XG5jb25zdCBnZXRBY3Rpb25CYXJTdGF0ZSA9IChzdGF0ZSkgPT4gc3RhdGUuZ2V0KCdhY3Rpb25CYXInKTtcbmNvbnN0IHJjID0gbmV3IFJlY2VpcHRDYWNoZSgpO1xuY29uc3QgcG9rZXJIZWxwZXIgPSBuZXcgUG9rZXJIZWxwZXIocmMpO1xuXG4vKlxuICogQWN0aW9uQmFyIHJlbGF0ZWQgc2VsZWN0b3JzXG4gKi9cbmV4cG9ydCBjb25zdCBtYWtlU2VsZWN0QWN0aW9uQmFyQWN0aXZlID0gKCkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIFttYWtlU2VsZWN0QWN0aW9uQmFyVmlzaWJsZSgpLCBtYWtlSGFuZFN0YXRlU2VsZWN0b3IoKSwgZ2V0SXNNeVR1cm5dLFxuICAodmlzaWJsZSwgaGFuZFN0YXRlLCBpc015VHVybikgPT4ge1xuICAgIGNvbnN0IGlzQXBwcm9wcmlhdGVTdGF0ZSA9IChcbiAgICAgIGhhbmRTdGF0ZSAhPT0gJ3dhaXRpbmcnICYmIGhhbmRTdGF0ZSAhPT0gJ2RlYWxpbmcnICYmIGhhbmRTdGF0ZSAhPT0gJ3Nob3dkb3duJ1xuICAgICk7XG4gICAgaWYgKHZpc2libGUgJiYgaXNNeVR1cm4gJiYgaXNBcHByb3ByaWF0ZVN0YXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4pO1xuXG4vLyBzaG93IHRoZSBBY3Rpb25CYXIgaWYgdGhlIHBsYXllciBpcyBzaXR0aW5nIGF0IHRoZSB0YWJsZVxuZXhwb3J0IGNvbnN0IG1ha2VTZWxlY3RBY3Rpb25CYXJWaXNpYmxlID0gKCkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIFttYWtlTXlQb3NTZWxlY3RvcigpXSxcbiAgKG15UG9zKSA9PiB7XG4gICAgaWYgKG15UG9zID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIG15UG9zID09PSAnbnVtYmVyJykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aW9uQmFyTW9kZSA9ICgpID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBY3Rpb25CYXJTdGF0ZSxcbiAgKGFjdGlvbkJhcikgPT4gYWN0aW9uQmFyLmdldCgnbW9kZScpLFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGlvbkJhclNsaWRlck9wZW4gPSAoKSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0QWN0aW9uQmFyU3RhdGUsXG4gIChhY3Rpb25CYXIpID0+IGFjdGlvbkJhci5nZXQoJ3NsaWRlck9wZW4nKSxcbik7XG5cbi8vIE90aGVyIHNlbGVjdG9yc1xuY29uc3QgbWFrZUFtb3VudFRvQ2FsbFNlbGVjdG9yID0gKCkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIFttYWtlTWF4QmV0U2VsZWN0b3IoKSwgbWFrZU15TWF4QmV0U2VsZWN0b3IoKV0sXG4gIChtYXhCZXQsIG15TWF4YmV0KSA9PiB7XG4gICAgaWYgKG1heEJldCA9PT0gdW5kZWZpbmVkIHx8IG15TWF4YmV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtYXhCZXQgLSBteU1heGJldDtcbiAgfVxuKTtcblxuY29uc3QgbWFrZU1pblNlbGVjdG9yID0gKCkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIFttYWtlU2JTZWxlY3RvcigpLCBtYWtlSGFuZFNlbGVjdG9yKCksIG1ha2VNeVN0YWNrU2VsZWN0b3IoKSwgbWFrZUFtb3VudFRvQ2FsbFNlbGVjdG9yKCksIG1ha2VNYXhCZXRTZWxlY3RvcigpXSxcbiAgKHNiLCBoYW5kLCBzdGFjaywgYW1vdW50VG9DYWxsLCBtYXhCZXQpID0+IHtcbiAgICBpZiAoIXNiIHx8ICFoYW5kIHx8IGhhbmQuZ2V0KCdzdGF0ZScpID09PSAnd2FpdGluZycpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIGlmIG15IHN0YWNrIHNtYWxsZXIgdGhhbiBCQiByZXR1cm4gdGhlIGxlZnQgYmVoaW5kIHN0YWNrXG4gICAgaWYgKHN0YWNrIDwgc2IgKiAyKSB7XG4gICAgICByZXR1cm4gc3RhY2s7XG4gICAgfVxuICAgIGNvbnN0IGxpbmV1cCA9IGhhbmQuZ2V0KCdsaW5ldXAnKS50b0pTKCk7XG4gICAgY29uc3QgZGVhbGVyID0gaGFuZC5nZXQoJ2RlYWxlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZXJlIHdhcyBhIHJhaXNlIGV4Y2x1ZGUgcHJlZmxvcCBzYiBhbmQgYmJcbiAgICBjb25zdCBsYXN0Um91bmRNYXhCZXQgPSBoYW5kLmdldCgnbGFzdFJvdW5kTWF4QmV0Jyk7XG4gICAgbGV0IG1pblJhaXNlO1xuICAgIHRyeSB7XG4gICAgICBtaW5SYWlzZSA9IHBva2VySGVscGVyLmZpbmRNaW5SYWlzZUFtb3VudChsaW5ldXAsIGRlYWxlciwgbGFzdFJvdW5kTWF4QmV0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyB0aGVyZSB3YXMgbm8gcmFpc2VcbiAgICAgIGlmIChlLm1lc3NhZ2UgPT09ICdjYW4gbm90IGZpbmQgbWluUmFpc2VBbW91bnQuJykge1xuICAgICAgICByZXR1cm4gKHNiICogMikgKyBhbW91bnRUb0NhbGw7XG4gICAgICB9XG4gICAgICB0aHJvdyAoZSk7XG4gICAgfVxuXG4gICAgaWYgKG1pblJhaXNlID4gMCAmJiBtYXhCZXQgIT09IHNiICogMikge1xuICAgICAgcmV0dXJuIG1pblJhaXNlICsgYW1vdW50VG9DYWxsO1xuICAgIH1cbiAgICByZXR1cm4gKHNiICogMikgKyBhbW91bnRUb0NhbGw7XG4gIH1cbik7XG5cbmNvbnN0IG1ha2VDYWxsQW1vdW50U2VsZWN0b3IgPSAoKSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgW21ha2VBbW91bnRUb0NhbGxTZWxlY3RvcigpLCBtYWtlTXlTdGFja1NlbGVjdG9yKCldLFxuICAoYW1vdW50VG9DYWxsLCBzdGFjaykgPT4gKGFtb3VudFRvQ2FsbCA+IHN0YWNrKSA/IHN0YWNrIDogYW1vdW50VG9DYWxsXG4pO1xuXG5leHBvcnQge1xuICBtYWtlQW1vdW50VG9DYWxsU2VsZWN0b3IsXG4gIG1ha2VNaW5TZWxlY3RvcixcbiAgbWFrZUNhbGxBbW91bnRTZWxlY3Rvcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9BY3Rpb25CYXIvc2VsZWN0b3JzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ2hhdFBsYWNlaG9sZGVyLFxuICBDaGF0Q29udGFpbmVyLFxuICBDaGF0QXJlYSxcbiAgQ2hhdEJveCxcbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DaGF0JztcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuL21lc3NhZ2UtbGlzdCc7XG5pbXBvcnQgTWVzc2FnZUJveCBmcm9tICcuL21lc3NhZ2UtYm94JztcblxuZXhwb3J0IGNsYXNzIENoYXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25BZGRNZXNzYWdlID0gdGhpcy5vbkFkZE1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgfVxuICBvbkFkZE1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMucHJvcHMub25BZGRNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBib3ggPSB0aGlzLnByb3BzLnJlYWRvbmx5ID8gbnVsbCA6IDxNZXNzYWdlQm94IG9uQWRkTWVzc2FnZT17dGhpcy5vbkFkZE1lc3NhZ2V9IC8+O1xuICAgIGNvbnN0IGFyZWEgPSAodGhpcy5wcm9wcy5tZXNzYWdlcyAmJiB0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aClcbiAgICAgID8gPE1lc3NhZ2VMaXN0IG1lc3NhZ2VzPXt0aGlzLnByb3BzLm1lc3NhZ2VzfSAvPlxuICAgICAgOiA8Q2hhdFBsYWNlaG9sZGVyPnt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfTwvQ2hhdFBsYWNlaG9sZGVyPjtcbiAgICByZXR1cm4gKFxuICAgICAgPENoYXRDb250YWluZXI+XG4gICAgICAgIDxDaGF0QXJlYT57YXJlYX08L0NoYXRBcmVhPlxuICAgICAgICA8Q2hhdEJveD57Ym94fTwvQ2hhdEJveD5cbiAgICAgIDwvQ2hhdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbkNoYXQucHJvcFR5cGVzID0ge1xuICBtZXNzYWdlczogUHJvcFR5cGVzLmFycmF5LFxuICBvbkFkZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL0NoYXQvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBNZXNzYWdlQm94IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlU2VuZCA9IHRoaXMuaGFuZGxlU2VuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2VuZChldmVudCkge1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLm9uQWRkTWVzc2FnZSh0ZXh0KTtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgbWVzc2FnZS4uLlwiXG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZVNlbmR9XG4gICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5pbnB1dCA9IGlucHV0OyB9fVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlc21va2UnLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnaW5zZXQgYmxhY2sgMCAwIDNweCAwcHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6ICdsYXJnZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTWVzc2FnZUJveC5wcm9wVHlwZXMgPSB7XG4gIG9uQWRkTWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQm94O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvQ2hhdC9tZXNzYWdlLWJveC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBiYXNlQ29sb3IsXG4gIHdoaXRlLFxufSBmcm9tICd2YXJpYWJsZXMnO1xuXG5pbXBvcnQgeyBuaWNrTmFtZUJ5QWRkcmVzcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25pY2tuYW1lcyc7XG5cbmNsYXNzIE1lc3NhZ2VMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxuICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICB0aGlzLmxpc3Quc2Nyb2xsVG9wID0gdGhpcy5saXN0LnNjcm9sbEhlaWdodCAtIHRoaXMubGlzdC5jbGllbnRIZWlnaHQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxuICAgICAgcGFkZGluZzogJzAgMCA1cHggMCcsXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIHN0eWxlPXtzdHlsZX0gcmVmPXsoZWwpID0+IHsgdGhpcy5saXN0ID0gZWw7IH19PlxuICAgICAgICB7KHRoaXMucHJvcHMubWVzc2FnZXMgfHwgW10pLm1hcCgobWVzc2FnZSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0cmluZyA9IG1lc3NhZ2Uuc2lnbmVyXG4gICAgICAgICAgICA/IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiB3aGl0ZSB9fT57IG5pY2tOYW1lQnlBZGRyZXNzKG1lc3NhZ2Uuc2lnbmVyKSB9OiB7bWVzc2FnZS5tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDogPGkgc3R5bGU9e3sgY29sb3I6IGJhc2VDb2xvciB9fT5PUkFDTEU6IHttZXNzYWdlLm1lc3NhZ2V9PC9pPjtcbiAgICAgICAgICByZXR1cm4gKDxsaSBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDVweCAwIDVweCcgfX0ga2V5PXtpfT57c3RyaW5nfTwvbGk+KTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn1cblxuTWVzc2FnZUxpc3QucHJvcFR5cGVzID0ge1xuICBtZXNzYWdlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUxpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9DaGF0L21lc3NhZ2UtbGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQge1xuICBDdXJ0YWluV3JhcHBlcixcbiAgQ3VydGFpblRvZ2dsZXIsXG4gIEN1cnRhaW5IZWFkZXIsXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3VydGFpbic7XG5cbmltcG9ydCBDaGF0IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvQ2hhdCc7XG5cbmltcG9ydCB7XG4gIG1ha2VIYW5kU3RhdGVTZWxlY3RvcixcbiAgbWFrZU1lc3NhZ2VzU2VsZWN0b3IsXG4gIG1ha2VQbGF5ZXJzQ291bnRTZWxlY3RvcixcbiAgbWFrZU15UG9zU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvVGFibGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgbWFrZVNlbGVjdFByaXZLZXkgfSBmcm9tICcuLi8uLi9jb250YWluZXJzL0FjY291bnRQcm92aWRlci9zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvVGFibGUvYWN0aW9ucyc7XG5cbmNsYXNzIEN1cnRhaW4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZW5kTWVzc2FnZSA9IHRoaXMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSB9O1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMucHJvcHMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgdGhpcy5wcm9wcy5wYXJhbXMudGFibGVBZGRyLCB0aGlzLnByb3BzLnByaXZLZXkpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlbiB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc1Rha2VQYXJ0T2ZBR2FtZSA9IHRoaXMucHJvcHMubXlQb3MgIT0gbnVsbDtcbiAgICBjb25zdCB0YSA9IHRoaXMucHJvcHMucGFyYW1zLnRhYmxlQWRkci5zdWJzdHJpbmcoMiwgOCk7XG4gICAgY29uc3QgY2hhdFBsYWNlaG9sZGVyID0gYHRhYmxlIDwke3RhfT4gaW4gc3RhdGUgJHt0aGlzLnByb3BzLnN0YXRlfSBoYXMgJHt0aGlzLnByb3BzLnBsYXllckNvdW50IHx8ICdubyd9IHBsYXllciR7dGhpcy5wcm9wcy5wbGF5ZXJDb3VudCA9PT0gMSA/ICcnIDogJ3MnfS5gO1xuICAgIGNvbnN0IGlzT3BlbiA9IHRoaXMuc3RhdGUuaXNPcGVuO1xuICAgIHJldHVybiAoXG4gICAgICA8Q3VydGFpbldyYXBwZXIgaXNPcGVuPXtpc09wZW59PlxuICAgICAgICA8Q3VydGFpblRvZ2dsZXIgb25DbGljaz17dGhpcy50b2dnbGV9IGlzT3Blbj17aXNPcGVufSAvPlxuICAgICAgICA8Q3VydGFpbkhlYWRlciAvPlxuICAgICAgICA8Q2hhdFxuICAgICAgICAgIG9uQWRkTWVzc2FnZT17dGhpcy5zZW5kTWVzc2FnZX1cbiAgICAgICAgICBtZXNzYWdlcz17dGhpcy5wcm9wcy5tZXNzYWdlc31cbiAgICAgICAgICByZWFkb25seT17IWlzVGFrZVBhcnRPZkFHYW1lfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtjaGF0UGxhY2Vob2xkZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L0N1cnRhaW5XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGRpc3BhdGNoLFxuICAgIHNlbmRNZXNzYWdlOiAobWVzc2FnZSwgdGFibGVBZGRyLCBwcml2S2V5KSA9PiBkaXNwYXRjaChzZW5kTWVzc2FnZShtZXNzYWdlLCB0YWJsZUFkZHIsIHByaXZLZXkpKSxcbiAgfTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgcHJpdktleTogbWFrZVNlbGVjdFByaXZLZXkoKSxcbiAgc3RhdGU6IG1ha2VIYW5kU3RhdGVTZWxlY3RvcigpLFxuICBtZXNzYWdlczogbWFrZU1lc3NhZ2VzU2VsZWN0b3IoKSxcbiAgcGxheWVyQ291bnQ6IG1ha2VQbGF5ZXJzQ291bnRTZWxlY3RvcigpLFxuICBteVBvczogbWFrZU15UG9zU2VsZWN0b3IoKSxcbn0pO1xuXG5DdXJ0YWluLnByb3BUeXBlcyA9IHtcbiAgc3RhdGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHByaXZLZXk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIG15UG9zOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBzZW5kTWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG1lc3NhZ2VzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHBsYXllckNvdW50OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBwYXJhbXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDdXJ0YWluKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL0N1cnRhaW4vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhdmVuIGZyb20gJ3JhdmVuLWpzJztcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGNvbmYgfSBmcm9tICcuLi8uLi9hcHAuY29uZmlnJztcblxuY29uc3QgTGluayA9IHN0eWxlZC5hYFxuICBjdXJzb3I6IHBvaW50ZXI7IFxuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAtMzZweDtcbiAgYm90dG9tOiAxNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbmA7XG5cbmV4cG9ydCBjbGFzcyBGZWVkYmFja0J1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cblxuICBzaG93UmVwb3J0KCkge1xuICAgIFJhdmVuLmNhcHR1cmVNZXNzYWdlKGBGZWVkYmFjayBCdXR0b24gJHtEYXRlLm5vdygpfWApO1xuICAgIFJhdmVuLnNob3dSZXBvcnREaWFsb2coe1xuICAgICAgZXZlbnRJZDogUmF2ZW4ubGFzdEV2ZW50SWQoKSxcbiAgICAgIGRzbjogY29uZigpLnNlbnRyeURTTixcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgb25DbGljaz17dGhpcy5zaG93UmVwb3J0fT5SZXBvcnQgQ3Jhc2g8L0xpbms+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFja0J1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL0ZlZWRiYWNrQnV0dG9uL2luZGV4LmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbGdlIG9uIDEwLjAzLjE3LlxuICovXG5cblxuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb3JtLCBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybS9pbW11dGFibGUnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybS9Gb3JtRmllbGQnO1xuXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcykgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgaWYgKCF2YWx1ZXMuZ2V0KCdlbWFpbCcpKSB7XG4gICAgZXJyb3JzLmFtb3VudCA9ICdSZXF1aXJlZCc7XG4gIH1cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmNvbnN0IHdhcm4gPSAoKSA9PiB7XG4gIGNvbnN0IHdhcm5pbmdzID0ge307XG4gIHJldHVybiB3YXJuaW5ncztcbn07XG5cbmNsYXNzIEludml0ZURpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQodmFsdWVzKSB7XG4gICAgdmFsdWVzLmdldCgnZW1haWwnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVycm9yLCBoYW5kbGVTdWJtaXQsIHN1Ym1pdHRpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5oZWFkZXJ9IC8+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVTdWJtaXQpfT5cbiAgICAgICAgICA8RmllbGQgbmFtZT1cImVtYWlsXCIgY29tcG9uZW50PXtGb3JtRmllbGR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlLW1haWxcIiAvPlxuICAgICAgICAgIHtlcnJvciAmJiA8c3Ryb25nPntlcnJvcn08L3N0cm9uZz59XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdWJtaXR0aW5nfT5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5JbnZpdGVEaWFsb2cucHJvcFR5cGVzID0ge1xuICBzdWJtaXR0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgZXJyb3I6IFByb3BUeXBlcy5hbnksXG59O1xuXG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGRpc3BhdGNoLFxuICB9O1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoKSA9PiAoe1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHJlZHV4Rm9ybSh7IGZvcm06ICdqb2luJywgdmFsaWRhdGUsIHdhcm4gfSkoSW52aXRlRGlhbG9nKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9JbnZpdGVEaWFsb2cvaW5kZXguanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVsZ2Ugb24gMTAuMDMuMTcuXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lTWVzc2FnZXMoe1xuICBoZWFkZXI6IHtcbiAgICBpZDogJ2FwcC5jb250YWluZXJzLkpvaW5EaWFsb2cuaGVhZGVyJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0ludml0ZSBhIGZyaWVuZDonLFxuICB9LFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9JbnZpdGVEaWFsb2cvbWVzc2FnZXMuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3QtcmFuZ2VzbGlkZXInO1xuaW1wb3J0ICdyZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzJztcbmltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IEgyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSDInO1xuXG5pbXBvcnQgeyBtYWtlU2JTZWxlY3RvciB9IGZyb20gJy4uL1RhYmxlL3NlbGVjdG9ycyc7XG5pbXBvcnQge1xuICBtYWtlU2VsZWN0UHJveHlBZGRyLFxufSBmcm9tICcuLi9BY2NvdW50UHJvdmlkZXIvc2VsZWN0b3JzJztcblxuZXhwb3J0IGNsYXNzIEpvaW5EaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW1vdW50OiBwcm9wcy5zYiAqIDQwLFxuICAgIH07XG4gICAgdGhpcy51cGRhdGVBbW91bnQgPSB0aGlzLnVwZGF0ZUFtb3VudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZUFtb3VudCh2YWx1ZSkge1xuICAgIGNvbnN0IGFtb3VudCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhbW91bnQgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVKb2luKHRoaXMucHJvcHMucG9zLCB0aGlzLnN0YXRlLmFtb3VudCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbWluID0gdGhpcy5wcm9wcy5zYiAqIDQwO1xuICAgIGNvbnN0IHRhYmxlTWF4ID0gdGhpcy5wcm9wcy5zYiAqIDIwMDtcbiAgICBjb25zdCBtYXggPSAodGhpcy5wcm9wcy5iYWxhbmNlIDwgdGFibGVNYXgpID8gdGhpcy5wcm9wcy5iYWxhbmNlIDogdGFibGVNYXg7XG4gICAgaWYgKHRoaXMucHJvcHMuYmFsYW5jZSA8IG1pbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtaW5XaWR0aDogJzIwZW0nIH19PlxuICAgICAgICAgIDxIMj5Tb3JyeSE8L0gyPlxuICAgICAgICAgIDxwPllvdXIgYmFsYW5jZSBpcyBub3Qgc3VmZmljaWVudCB0byBqb2luIHRoaXMgdGFibGUhPC9wPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5tb2RhbERpc21pc3N9Pk9LPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWluV2lkdGg6ICcyMGVtJyB9fT5cbiAgICAgICAgPFNsaWRlclxuICAgICAgICAgIGRhdGEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgIHRvb2x0aXA9e2ZhbHNlfVxuICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgIHN0ZXA9ezF9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlQW1vdW50fVxuICAgICAgICA+XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8ZGl2PiBNYXg6IHttYXh9PC9kaXY+XG4gICAgICAgIDxkaXY+eyAodGhpcy5zdGF0ZSkgPyB0aGlzLnN0YXRlLmFtb3VudCA6IG1pbiB9PC9kaXY+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PkpvaW48L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBkaXNwYXRjaCxcbiAgfTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgc2I6IG1ha2VTYlNlbGVjdG9yKCksXG4gIHByb3h5QWRkcjogbWFrZVNlbGVjdFByb3h5QWRkcigpLFxufSk7XG5cbkpvaW5EaWFsb2cucHJvcFR5cGVzID0ge1xuICBoYW5kbGVKb2luOiBQcm9wVHlwZXMuZnVuYyxcbiAgbW9kYWxEaXNtaXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgcG9zOiBQcm9wVHlwZXMuYW55LFxuICBzYjogUHJvcFR5cGVzLm51bWJlcixcbiAgYmFsYW5jZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEpvaW5EaWFsb2cpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvSm9pbkRpYWxvZy9pbmRleC5qcyIsImltcG9ydCB7IGRlZmluZU1lc3NhZ2VzIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZU1lc3NhZ2VzKHtcbiAgaGVhZGVyOiB7XG4gICAgaWQ6ICdhcHAuY29udGFpbmVycy5Kb2luRGlhbG9nLmhlYWRlcicsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdKb2luIERpYWxvZzonLFxuICB9LFxuICBzbGlkZXM6IHtcbiAgICBpZDogJ2FwcC5jb250YWluZXJzLkpvaW5EaWFsb2cuc2xpZGVzJyxcbiAgICBmaXJzdDoge1xuICAgICAgaWQ6ICdhcHAuY29udGFpbmVycy5Kb2luRGlhbG9nLnNsaWRlcy5maXJzdCcsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgaWQ6ICdhcHAuY29udGFpbmVycy5Kb2luRGlhbG9nLnNsaWRlcy5maXJzdC5oZWFkZXInLFxuICAgICAgICBkZWZhdWx0TWVzc2FnZTogJ1JlcXVlc3Qgc2VuZCEnLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgaWQ6ICdhcHAuY29udGFpbmVycy5Kb2luRGlhbG9nLnNsaWRlcy5maXJzdC50ZXh0JyxcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGBXYWl0aW5nIGZvciB0aGUgYmxvY2tjaGFpbiB0byBjb25maXJtIHlvdXIgcmVxdWVzdC4gVGhpcyB1c3VhbGx5IHRha2VzIGEgY291cGxlIG9mIHNlY29uZHMgdXAgdG8gYWJvdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAyIG1pbnV0ZXMhYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWNvbmQ6IHtcbiAgICAgIGlkOiAnYXBwLmNvbnRhaW5lcnMuSm9pbkRpYWxvZy5zbGlkZXMuZmlyc3QnLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGlkOiAnYXBwLmNvbnRhaW5lcnMuSm9pbkRpYWxvZy5zbGlkZXMuc2Vjb25kLmhlYWRlcicsXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiAnRGlmZmVyZW50IFNlYXQgU3RhdGVzJyxcbiAgICAgIH0sXG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgaWQ6ICdhcHAuY29udGFpbmVycy5Kb2luRGlhbG9nLnNsaWRlcy5zZWNvbmQuYWN0aXZlJyxcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdQbGF5ZXIgaXMgYWN0aXZlLiBCdXQgaXQgaXMgbm90IGhpcyB0dXJuLicsXG4gICAgICB9LFxuICAgICAgaXNUdXJuOiB7XG4gICAgICAgIGlkOiAnYXBwLmNvbnRhaW5lcnMuSm9pbkRpYWxvZy5zbGlkZXMuc2Vjb25kLmlzVHVybicsXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiAnSXQgaXMgdGhpcyBwbGF5ZXJzIHR1cm4gJyxcbiAgICAgIH0sXG4gICAgICBzaXRPdXQ6IHtcbiAgICAgICAgaWQ6ICdhcHAuY29udGFpbmVycy5Kb2luRGlhbG9nLnNsaWRlcy5zZWNvbmQuc2l0T3V0JyxcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdQbGF5ZXIgaXMgaW4gc2l0b3V0IG9yIGFsbC1pbiAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRoaXJkOiB7XG4gICAgICBpZDogJ2FwcC5jb250YWluZXJzLkpvaW5EaWFsb2cuc2xpZGVzLmZpcnN0JyxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBpZDogJ2FwcC5jb250YWluZXJzLkpvaW5EaWFsb2cuc2xpZGVzLnNlY29uZC5oZWFkZXInLFxuICAgICAgICBkZWZhdWx0TWVzc2FnZTogJ1lvdXIgZnVuZHMgYXJlIHNlY3VyZSEnLFxuICAgICAgfSxcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgaWQ6ICdhcHAuY29udGFpbmVycy5Kb2luRGlhbG9nLnNsaWRlcy5zZWNvbmQuYWN0aXZlJyxcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdGdW5kcyBhcmUgc3RvcmVkIGluIGEgc21hcnQgY29udHJhY3Qgb24gdGhlIGJsb2NrY2hhaW4uIFlvdSBhcmUgaW4gZnVsbCBjb250cm9sIScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL0pvaW5EaWFsb2cvbWVzc2FnZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7XG4gIGJhc2VDb2xvcixcbiAgZ3JlZW4sXG4gIGdyYXksXG59IGZyb20gJ3ZhcmlhYmxlcyc7XG5cbmltcG9ydCBHcmlkIGZyb20gJ2dyaWQtc3R5bGVkJztcbmltcG9ydCBIMSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0gxJztcbmltcG9ydCBSYWRpYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SYWRpYWxQcm9ncmVzcyc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcyc7XG5pbXBvcnQgU2xpZGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2xpZGVzJztcblxuY29uc3QgU3R5bGVkRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBmb250LXNpemU6IDhlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5mdW5jdGlvbiBKb2luU2xpZGVzKCkge1xuICByZXR1cm4gKFxuICAgIDxTbGlkZXMgd2lkdGg9ezYwMH0gaGVpZ2h0PXs0MDB9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEgxPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zbGlkZXMuZmlyc3QuaGVhZGVyfSAvPlxuICAgICAgICA8L0gxPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnNsaWRlcy5maXJzdC50ZXh0fSAvPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8U3R5bGVkRGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ3MgZmEtNVwiPjwvaT5cbiAgICAgICAgPC9TdHlsZWREaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxIMT5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2xpZGVzLnNlY29uZC5oZWFkZXJ9IC8+XG4gICAgICAgIDwvSDE+XG4gICAgICAgIDxHcmlkIHNtPXsxIC8gM30+XG4gICAgICAgICAgPFJhZGlhbFxuICAgICAgICAgICAgcGVyY2VudD1cIjEwMFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwXCJcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yPXtiYXNlQ29sb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zbGlkZXMuc2Vjb25kLmFjdGl2ZX0gLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgc209ezEgLyAzfT5cbiAgICAgICAgICA8UmFkaWFsXG4gICAgICAgICAgICBwZXJjZW50PVwiMTAwXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I9e2dyZWVufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2xpZGVzLnNlY29uZC5pc1R1cm59IC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIHNtPXsxIC8gM30+XG4gICAgICAgICAgPFJhZGlhbFxuICAgICAgICAgICAgcGVyY2VudD1cIjEwMFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwXCJcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yPXtncmF5fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2xpZGVzLnNlY29uZC5zaXRPdXR9IC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxIMT5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2xpZGVzLnRoaXJkLmhlYWRlcn0gLz5cbiAgICAgICAgPC9IMT5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zbGlkZXMudGhpcmQudGV4dH0gLz5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPFN0eWxlZERpdj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaGllbGQgZmEtNVwiPjwvaT5cbiAgICAgICAgPC9TdHlsZWREaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NsaWRlcz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9pblNsaWRlcztcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvSm9pbkRpYWxvZy9zbGlkZXMuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVsZ2Ugb24gMjQuMDguMTYuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG5pbXBvcnQgeyBtb2RhbEFkZCwgbW9kYWxEaXNtaXNzIH0gZnJvbSAnLi4vQXBwL2FjdGlvbnMnO1xuXG5pbXBvcnQge1xuICBwZW5kaW5nVG9nZ2xlLFxufSBmcm9tICcuLi9UYWJsZS9hY3Rpb25zJztcblxuaW1wb3J0IHtcbiAgbWFrZUNhcmRzU2VsZWN0b3IsXG4gIG1ha2VMYXN0QW1vdW50U2VsZWN0b3IsXG4gIG1ha2VGb2xkZWRTZWxlY3RvcixcbiAgbWFrZU9wZW5TZWxlY3RvcixcbiAgbWFrZVNpdG91dFNlbGVjdG9yLFxuICBtYWtlUGVuZGluZ1NlbGVjdG9yLFxuICBtYWtlQW1vdW50Q29vcmRzU2VsZWN0b3IsXG4gIG1ha2VMYXN0QWN0aW9uU2VsZWN0b3IsXG4gIG1ha2VDb29yZHNTZWxlY3RvcixcbiAgbWFrZVNob3dTdGF0dXNTZWxlY3RvcixcbiAgbWFrZURlYWxlclNlbGVjdG9yLFxuICBtYWtlQmxvY2t5U2VsZWN0b3IsXG4gIG1ha2VTdGFja1NlbGVjdG9yLFxuICBtYWtlU2VhdFN0YXR1c1NlbGVjdG9yLFxufSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7XG4gIG1ha2VNeVBvc1NlbGVjdG9yLFxuICBtYWtlSGFuZFN0YXRlU2VsZWN0b3IsXG4gIG1ha2VXaG9zVHVyblNlbGVjdG9yLFxufSBmcm9tICcuLi9UYWJsZS9zZWxlY3RvcnMnO1xuXG5pbXBvcnQge1xuICB0aW1lb3V0U2Vjb25kcyxcbn0gZnJvbSAnLi4vLi4vYXBwLmNvbmZpZyc7XG5cbmltcG9ydCBTZWF0Q29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhdCc7XG5cbmNsYXNzIFNlYXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdhc01vc3RSZWNlbnRBY3Rpb246IGZhbHNlIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvLyBTaG93IEFjdGlvbiBpZiBtb3N0IHJlY2VudCBhY3Rpb25cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdhc01vc3RSZWNlbnRBY3Rpb246IG5leHRQcm9wcy5sYXN0QW1vdW50ID09PSB0aGlzLnByb3BzLmxhc3RBbW91bnQsXG4gICAgfSk7XG5cbiAgICAvLyBtYW5hZ2UgdGltZXJcbiAgICBsZXQgdGltZUxlZnQgPSB0aW1lb3V0U2Vjb25kcztcbiAgICBpZiAobmV4dFByb3BzLndob3NUdXJuID09PSBuZXh0UHJvcHMucG9zKSB7XG4gICAgICAvLyBUT0RPOiBNYWtlIHRpbWVMZWZ0IGNvdW50IGRvd24gZnJvbSAxMDAgLSAwLCByaWdodCBub3cgaXMgMzYwIC0gMD9cbiAgICAgIGlmICghdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlYWRsaW5lID0gdGhpcy5wcm9wcy5jaGFuZ2VkICsgdGltZW91dFNlY29uZHM7XG4gICAgICAgICAgICB0aW1lTGVmdCA9IGRlYWRsaW5lIC0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lTGVmdCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZUxlZnQgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBtYW5hZ2UgdGltZXJcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGltZUxlZnQgPSAodGhpcy5zdGF0ZSAmJiB0aGlzLnByb3BzLndob3NUdXJuID09PSB0aGlzLnByb3BzLnBvcykgPyAoKHRoaXMuc3RhdGUudGltZUxlZnQgKiAxMDApIC8gdGltZW91dFNlY29uZHMpIDogdGltZW91dFNlY29uZHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWF0Q29tcG9uZW50XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICB0aW1lTGVmdD17dGltZUxlZnR9XG4gICAgICAgIHdhc01vc3RSZWNlbnRBY3Rpb249e3RoaXMuc3RhdGUud2FzTW9zdFJlY2VudEFjdGlvbn1cbiAgICAgID5cbiAgICAgIDwvU2VhdENvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgbW9kYWxBZGQ6IChub2RlKSA9PiAobW9kYWxBZGQobm9kZSkpLFxuICAgIG1vZGFsRGlzbWlzczogKCkgPT4gKG1vZGFsRGlzbWlzcygpKSxcbiAgICBwZW5kaW5nVG9nZ2xlOiAodGFibGVBZGRyLCBoYW5kSWQsIHBvcykgPT4gKHBlbmRpbmdUb2dnbGUodGFibGVBZGRyLCBoYW5kSWQsIHBvcykpLFxuICB9O1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioe1xuICBzdGF0ZTogbWFrZUhhbmRTdGF0ZVNlbGVjdG9yKCksXG4gIGRlYWxlcjogbWFrZURlYWxlclNlbGVjdG9yKCksXG4gIG9wZW46IG1ha2VPcGVuU2VsZWN0b3IoKSxcbiAgc2VhdFN0YXR1czogbWFrZVNlYXRTdGF0dXNTZWxlY3RvcigpLFxuICBwZW5kaW5nOiBtYWtlUGVuZGluZ1NlbGVjdG9yKCksXG4gIHNpdG91dDogbWFrZVNpdG91dFNlbGVjdG9yKCksXG4gIHNob3dTdGF0dXM6IG1ha2VTaG93U3RhdHVzU2VsZWN0b3IoKSxcbiAgY29vcmRzOiBtYWtlQ29vcmRzU2VsZWN0b3IoKSxcbiAgYW1vdW50Q29vcmRzOiBtYWtlQW1vdW50Q29vcmRzU2VsZWN0b3IoKSxcbiAgbXlQb3M6IG1ha2VNeVBvc1NlbGVjdG9yKCksXG4gIGJsb2NreTogbWFrZUJsb2NreVNlbGVjdG9yKCksXG4gIHdob3NUdXJuOiBtYWtlV2hvc1R1cm5TZWxlY3RvcigpLFxuICBsYXN0QW1vdW50OiBtYWtlTGFzdEFtb3VudFNlbGVjdG9yKCksXG4gIGxhc3RBY3Rpb246IG1ha2VMYXN0QWN0aW9uU2VsZWN0b3IoKSxcbiAgaG9sZUNhcmRzOiBtYWtlQ2FyZHNTZWxlY3RvcigpLFxuICBmb2xkZWQ6IG1ha2VGb2xkZWRTZWxlY3RvcigpLFxuICBzdGFja1NpemU6IG1ha2VTdGFja1NlbGVjdG9yKCksXG59KTtcblxuU2VhdC5wcm9wVHlwZXMgPSB7XG4gIGxhc3RBbW91bnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGNoYW5nZWQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIHdob3NUdXJuOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBwb3M6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWF0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL1NlYXQvaW5kZXguanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVsZ2Ugb24gMjQuMDguMTYuXG4gKi9cbi8vIHJlYWN0ICsgcmVkdXhcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XG5pbXBvcnQgUmF2ZW4gZnJvbSAncmF2ZW4tanMnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgUmVjZWlwdCB9IGZyb20gJ3Bva2VyLWhlbHBlcic7XG5cbi8vIGNvbXBvbmVudHMgYW5kIHN0eWxlc1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCB7IEJvYXJkQ2FyZFdyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlL0JvYXJkJztcbmltcG9ydCBTZWF0IGZyb20gJy4uL1NlYXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgU2xpZGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2xpZGVzJztcbmltcG9ydCB7IG5pY2tOYW1lQnlBZGRyZXNzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmlja25hbWVzJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuL21lc3NhZ2VzJztcblxuLy8gY29uZmlnIGRhdGFcbmltcG9ydCB7XG4gIEFCSV9UQUJMRSxcbiAgQUJJX1RPS0VOX0NPTlRSQUNULFxuICBUSU1FT1VUX1BFUklPRCxcbiAgY29uZixcbn0gZnJvbSAnLi4vLi4vYXBwLmNvbmZpZyc7XG5cbmltcG9ydCB7IG1vZGFsQWRkLCBtb2RhbERpc21pc3MgfSBmcm9tICcuLi9BcHAvYWN0aW9ucyc7XG4vLyBhY3Rpb25zXG5pbXBvcnQge1xuICBoYW5kUmVxdWVzdCxcbiAgbGluZXVwUmVjZWl2ZWQsXG4gIHVwZGF0ZVJlY2VpdmVkLFxuICBhZGRNZXNzYWdlLFxuICBwZW5kaW5nVG9nZ2xlLFxuICBzZXRFeGl0SGFuZCxcbiAgc2l0T3V0VG9nZ2xlLFxuICBiZXQsXG59IGZyb20gJy4vYWN0aW9ucyc7XG4vLyBzZWxlY3RvcnNcbmltcG9ydCBtYWtlU2VsZWN0QWNjb3VudERhdGEsIHtcbiAgbWFrZVNlbGVjdFByaXZLZXksXG4gIG1ha2VTZWxlY3RQcm94eUFkZHIsXG4gIG1ha2VTaWduZXJBZGRyU2VsZWN0b3IsXG59IGZyb20gJy4uL0FjY291bnRQcm92aWRlci9zZWxlY3RvcnMnO1xuXG5pbXBvcnQge1xuICBtYWtlTGFzdFJlY2VpcHRTZWxlY3Rvcixcbn0gZnJvbSAnLi4vU2VhdC9zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBibG9ja05vdGlmeSB9IGZyb20gJy4uL0FjY291bnRQcm92aWRlci9hY3Rpb25zJztcblxuaW1wb3J0IHtcbiAgbWFrZVRhYmxlRGF0YVNlbGVjdG9yLFxuICBtYWtlSXNNeVR1cm5TZWxlY3RvcixcbiAgbWFrZVBvdFNpemVTZWxlY3RvcixcbiAgbWFrZUJvYXJkU2VsZWN0b3IsXG4gIG1ha2VIYW5kU2VsZWN0b3IsXG4gIG1ha2VIYW5kU3RhdGVTZWxlY3RvcixcbiAgbWFrZUxpbmV1cFNlbGVjdG9yLFxuICBtYWtlTXlIYW5kVmFsdWVTZWxlY3RvcixcbiAgbWFrZU15UG9zU2VsZWN0b3IsXG4gIG1ha2VTaXRvdXRBbW91bnRTZWxlY3RvcixcbiAgbWFrZU1pc3NpbmdIYW5kU2VsZWN0b3IsXG4gIG1ha2VNeVNpdG91dFNlbGVjdG9yLFxuICBtYWtlTGF0ZXN0SGFuZFNlbGVjdG9yLFxuICBtYWtlU2VsZWN0V2lubmVycyxcbn0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5pbXBvcnQgVGFibGVDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgd2ViM0Nvbm5lY3QgZnJvbSAnLi4vQWNjb3VudFByb3ZpZGVyL3dlYjNDb25uZWN0JztcbmltcG9ydCBUYWJsZVNlcnZpY2UsIHsgZ2V0SGFuZCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RhYmxlU2VydmljZSc7XG5pbXBvcnQgSm9pbkRpYWxvZyBmcm9tICcuLi9Kb2luRGlhbG9nJztcbmltcG9ydCBKb2luU2xpZGVzIGZyb20gJy4uL0pvaW5EaWFsb2cvc2xpZGVzJztcbmltcG9ydCBJbnZpdGVEaWFsb2cgZnJvbSAnLi4vSW52aXRlRGlhbG9nJztcblxuY29uc3QgZ2V0VGFibGVEYXRhID0gKHRhYmxlLCBwcm9wcykgPT4ge1xuICBjb25zdCBsaW5ldXAgPSB0YWJsZS5nZXRMaW5ldXAuY2FsbFByb21pc2UoKTtcbiAgY29uc3Qgc2IgPSB0YWJsZS5zbWFsbEJsaW5kLmNhbGxQcm9taXNlKCk7XG4gIHJldHVybiBQcm9taXNlLmFsbChbbGluZXVwLCBzYl0pLnRoZW4oKHJzcCkgPT4ge1xuICAgIHByb3BzLmxpbmV1cFJlY2VpdmVkKHRhYmxlLmFkZHJlc3MsIHJzcFswXSwgcnNwWzFdKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMud2F0Y2hUYWJsZSA9IHRoaXMud2F0Y2hUYWJsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVXBkYXRlID0gdGhpcy5oYW5kbGVVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUxlYXZlID0gdGhpcy5oYW5kbGVMZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2l0b3V0ID0gdGhpcy5oYW5kbGVTaXRvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUpvaW4gPSB0aGlzLmhhbmRsZUpvaW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUpvaW5Db21wbGV0ZSA9IHRoaXMuaGFuZGxlSm9pbkNvbXBsZXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVSZWJ1eSA9IHRoaXMuaGFuZGxlUmVidXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzVGFrZW4gPSB0aGlzLmlzVGFrZW4uYmluZCh0aGlzKTtcblxuICAgIHRoaXMudGFibGVBZGRyID0gcHJvcHMucGFyYW1zLnRhYmxlQWRkcjtcbiAgICB0aGlzLndlYjMgPSBwcm9wcy53ZWIzUmVkdXgud2ViMztcbiAgICB0aGlzLnRhYmxlID0gdGhpcy53ZWIzLmV0aC5jb250cmFjdChBQklfVEFCTEUpLmF0KHRoaXMudGFibGVBZGRyKTtcbiAgICB0aGlzLnRva2VuID0gdGhpcy53ZWIzLmV0aC5jb250cmFjdChBQklfVE9LRU5fQ09OVFJBQ1QpLmF0KGNvbmYoKS5udHpBZGRyKTtcbiAgICAvLyByZWdpc3RlciBldmVudCBsaXN0ZW5lciBmb3IgdGFibGVcbiAgICB0aGlzLnRhYmxlRXZlbnRzID0gdGhpcy50YWJsZS5hbGxFdmVudHMoeyBmcm9tQmxvY2s6ICdsYXRlc3QnIH0pO1xuICAgIHRoaXMudGFibGVFdmVudHMud2F0Y2godGhpcy53YXRjaFRhYmxlKTtcblxuICAgIC8vIGdldHRpbmcgdGFibGUgZGF0YSBmcm9tIG9yYWNsZVxuICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcignZDQ4MzJiODhhMmE4MWYyOTZmNTMnLCB7IGNsdXN0ZXI6ICdldScsIGVuY3J5cHRlZDogdHJ1ZSB9KTtcbiAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUodGhpcy50YWJsZUFkZHIpO1xuICAgIGdldFRhYmxlRGF0YSh0aGlzLnRhYmxlLCBwcm9wcykudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmhhbmRSZXF1ZXN0KHRoaXMudGFibGVBZGRyLCBwcm9wcy5wYXJhbXMuaGFuZElkKTsgLy8gZ2V0IGluaXRpYWwgc3RhdGVcbiAgICAgIHRoaXMuY2hhbm5lbC5iaW5kKCd1cGRhdGUnLCB0aGlzLmhhbmRsZVVwZGF0ZSk7IC8vIGJpbmQgdG8gZnV0dXJlIHN0YXRlIHVwZGF0ZXNcbiAgICB9KTtcbiAgICBjb25zdCBoYW5kSWQgPSBwYXJzZUludCh0aGlzLnByb3BzLnBhcmFtcy5oYW5kSWQsIDEwKTtcbiAgICBSYXZlbi5zZXRUYWdzQ29udGV4dCh7XG4gICAgICB0YWJsZUFkZHI6IHRoaXMudGFibGVBZGRyLFxuICAgICAgaGFuZElkLFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBoYW5kSWQgPSBwYXJzZUludCh0aGlzLnByb3BzLnBhcmFtcy5oYW5kSWQsIDEwKTtcbiAgICAvLyB0YWtlIGNhcmUgb2YgdGltaW5nIG91dCBwbGF5ZXJzXG4gICAgaWYgKHRoaXMucHJvcHMubXlQb3MgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLmhhbmRcbiAgICAgICYmIHRoaXMucHJvcHMuaGFuZC5nZXQoJ2NoYW5nZWQnKSA8IG5leHRQcm9wcy5oYW5kLmdldCgnY2hhbmdlZCcpKSB7XG4gICAgICBpZiAodGhpcy50aW1lT3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVPdXQpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGFzc2VkID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkgLSBuZXh0UHJvcHMuaGFuZC5nZXQoJ2NoYW5nZWQnKTtcbiAgICAgIHBhc3NlZCA9IChwYXNzZWQgPiBUSU1FT1VUX1BFUklPRCkgPyBUSU1FT1VUX1BFUklPRCA6IHBhc3NlZDtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IChNYXRoLnJhbmRvbSgpICogOTAwMCk7XG4gICAgICBjb25zdCB0aW1lT3V0ID0gKChUSU1FT1VUX1BFUklPRCAqIDEwMDApIC0gKHBhc3NlZCAqIDEwMDApKSArIHJhbmRvbTtcblxuICAgICAgaWYgKHRpbWVPdXQgPiAwKSB7XG4gICAgICAgIHRoaXMudGltZU91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlU2VydmljZSh0aGlzLnByb3BzLnBhcmFtcy50YWJsZUFkZHIpO1xuICAgICAgICAgIHRhYmxlLnRpbWVPdXQoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIFJhdmVuLmNhcHR1cmVNZXNzYWdlKGB0aW1lb3V0OiAke3Jlc31gLCB7IHRhZ3M6IHtcbiAgICAgICAgICAgICAgdGFibGVBZGRyOiB0aGlzLnByb3BzLnBhcmFtcy50YWJsZUFkZHIsXG4gICAgICAgICAgICAgIGhhbmRJZCxcbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRpbWVPdXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBiYWxhbmNlIG9mIHBsYXllclxuICAgIHRoaXMuYmFsYW5jZSA9IHRoaXMudG9rZW4uYmFsYW5jZU9mKHRoaXMucHJvcHMucHJveHlBZGRyKTtcbiAgICBpZiAoIXRoaXMuYmFsYW5jZSAmJiBuZXh0UHJvcHMucHJveHlBZGRyKSB7XG4gICAgICB0aGlzLnRva2VuLmJhbGFuY2VPZi5jYWxsKG5leHRQcm9wcy5wcm94eUFkZHIpO1xuICAgIH1cblxuICAgIC8vIHNob3cgd2lubmVyIGFuZCBmb3J3YXJkIGJyb3dzZXIgdG8gdXJsIG9mIG5leHQgaGFuZFxuICAgIHRoaXMucHVzaGVkID0gKHRoaXMucHVzaGVkKSA/IHRoaXMucHVzaGVkIDoge307XG4gICAgaWYgKG5leHRQcm9wcy5sYXRlc3RIYW5kKSB7XG4gICAgICBjb25zdCBuZXh0SGFuZFN0ciA9IG5leHRQcm9wcy5sYXRlc3RIYW5kLnRvU3RyaW5nKCk7XG4gICAgICBpZiAobmV4dFByb3BzLmxhdGVzdEhhbmQgPiBoYW5kSWQgJiYgIXRoaXMucHVzaGVkW25leHRIYW5kU3RyXSkge1xuICAgICAgICB0aGlzLnB1c2hlZFtuZXh0SGFuZFN0cl0gPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKGAvdGFibGUvJHt0aGlzLnRhYmxlQWRkcn0vaGFuZC8ke25leHRIYW5kU3RyfWApO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIGZldGNoIGhhbmRzIHRoYXQgd2UgbWlnaHQgbmVlZCBmb3Igc3RhY2sgY2FsY3VsYXRpb25cbiAgICBpZiAobmV4dFByb3BzLm1pc3NpbmdIYW5kcyAmJiBuZXh0UHJvcHMubWlzc2luZ0hhbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZ2V0SGFuZFN0YXJ0ZWQgPSAodGhpcy5nZXRIYW5kU3RhcnRlZCkgPyB0aGlzLmdldEhhbmRTdGFydGVkIDoge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5leHRQcm9wcy5taXNzaW5nSGFuZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldEhhbmRTdGFydGVkW25leHRQcm9wcy5taXNzaW5nSGFuZHNbaV0udG9TdHJpbmcoKV0pIHtcbiAgICAgICAgICB0aGlzLmdldEhhbmRTdGFydGVkW25leHRQcm9wcy5taXNzaW5nSGFuZHNbaV0udG9TdHJpbmcoKV0gPSB0cnVlO1xuICAgICAgICAgIGdldEhhbmQodGhpcy50YWJsZUFkZHIsIG5leHRQcm9wcy5taXNzaW5nSGFuZHNbaV0pLnRoZW4oKHJzcCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVSZWNlaXZlZCh0aGlzLnRhYmxlQWRkciwgcnNwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnRpbWVPdXQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lT3V0KTtcbiAgICB9XG4gICAgdGhpcy5jaGFubmVsLnVuYmluZCgndXBkYXRlJywgdGhpcy5oYW5kbGVVcGRhdGUpO1xuXG4gICAgLy8gTm90ZTogd2l0aCB3c1Byb3ZpZGVyLCB0aGUgcmVxdWVzdCBtYWRlIGJ5IHN0b3BXYXRjaGluZyB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudGFibGVFdmVudHMuc3RvcFdhdGNoaW5nKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy50YWJsZUV2ZW50cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjaGF0TWVzc2FnZScpIHtcbiAgICAgIGNvbnN0IG1zZyA9IFJlY2VpcHQucGFyc2UoZXZlbnQucGF5bG9hZCk7XG4gICAgICB0aGlzLnByb3BzLmFkZE1lc3NhZ2UobXNnLm1lc3NhZ2UsIG1zZy50YWJsZUFkZHIsIG1zZy5zaWduZXIsIG1zZy5jcmVhdGVkKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdoYW5kVXBkYXRlJykge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVSZWNlaXZlZCh0aGlzLnRhYmxlQWRkciwgZXZlbnQucGF5bG9hZCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnam9pblJlcXVlc3QnKSB7XG4gICAgICAvLyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVidXkoYW1vdW50KSB7XG4gICAgdGhpcy50YWJsZS5yZWJ1eS5zZW5kVHJhbnNhY3Rpb24oYW1vdW50KTtcblxuICAgIGNvbnN0IHNsaWRlcyA9IChcbiAgICAgIDxTbGlkZXMgd2lkdGg9ezYwMH0gaGVpZ2h0PXs0MDB9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5SZXF1ZXN0IGZvciByZWJ1eSBzZW50ISBQbGVhc2Ugd2FpdCE8L2gxPlxuICAgICAgICAgIDxwPkhlcmUgaXMgdGhlIGludHJvZHVjdGlvbiB0byB0aGUgb25saW5lIHBva2VyIGdhbWU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5GQVE8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2xpZGVzPlxuICAgICk7XG5cbiAgICB0aGlzLnByb3BzLm1vZGFsRGlzbWlzcygpO1xuICAgIHRoaXMucHJvcHMubW9kYWxBZGQoc2xpZGVzKTtcbiAgfVxuXG4gIGhhbmRsZUpvaW4ocG9zLCBhbW91bnQpIHtcbiAgICB0aGlzLnRva2VuLmFwcHJvdmUuc2VuZFRyYW5zYWN0aW9uKHRoaXMudGFibGVBZGRyLCBhbW91bnQpO1xuICAgIHRoaXMudGFibGUuam9pbi5zZW5kVHJhbnNhY3Rpb24oYW1vdW50LCB0aGlzLnByb3BzLnNpZ25lckFkZHIsIHBvcyArIDEsICcnKTtcblxuICAgIGNvbnN0IHNsaWRlcyA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxKb2luU2xpZGVzPjwvSm9pblNsaWRlcz5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm1vZGFsRGlzbWlzc30+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmpvaW5Nb2RhbC5idXR0b25EaXNtaXNzfSAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICB0aGlzLnByb3BzLm1vZGFsRGlzbWlzcygpO1xuICAgIHRoaXMucHJvcHMubW9kYWxBZGQoc2xpZGVzKTtcbiAgICB0aGlzLnByb3BzLnBlbmRpbmdUb2dnbGUodGhpcy50YWJsZUFkZHIsIHRoaXMucHJvcHMucGFyYW1zLmhhbmRJZCwgcG9zKTtcbiAgfVxuXG4gIGlzVGFrZW4ob3BlbiwgbXlQb3MsIHBlbmRpbmcsIHBvcykge1xuICAgIGlmICghdGhpcy5wcm9wcy5hY2NvdW50LmxvZ2dlZEluKSB7XG4gICAgICBjb25zdCBsb2MgPSB0aGlzLnByb3BzLmxvY2F0aW9uO1xuICAgICAgY29uc3QgY3VyVXJsID0gYCR7bG9jLnBhdGhuYW1lfSR7bG9jLnNlYXJjaH0ke2xvYy5oYXNofWA7XG5cbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goYC9sb2dpbj9yZWRpcmVjdD0ke2N1clVybH1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYmFsYW5jZTtcblxuICAgIGlmICh0aGlzLmJhbGFuY2UpIHtcbiAgICAgIGJhbGFuY2UgPSBwYXJzZUludCh0aGlzLmJhbGFuY2UudG9TdHJpbmcoKSwgMTApO1xuICAgIH1cblxuICAgIGlmIChvcGVuICYmIG15UG9zID09PSB1bmRlZmluZWQgJiYgIXBlbmRpbmcpIHtcbiAgICAgIHRoaXMucHJvcHMubW9kYWxBZGQoKFxuICAgICAgICA8Sm9pbkRpYWxvZ1xuICAgICAgICAgIHBvcz17cG9zfVxuICAgICAgICAgIGhhbmRsZUpvaW49e3RoaXMuaGFuZGxlSm9pbn1cbiAgICAgICAgICBtb2RhbERpc21pc3M9e3RoaXMucHJvcHMubW9kYWxEaXNtaXNzfVxuICAgICAgICAgIHBhcmFtcz17dGhpcy5wcm9wcy5wYXJhbXN9XG4gICAgICAgICAgYmFsYW5jZT17YmFsYW5jZX1cbiAgICAgICAgLz5cbiAgICAgICkpO1xuICAgIH0gZWxzZSBpZiAob3BlbiAmJiB0aGlzLnByb3BzLm15UG9zICE9PSB1bmRlZmluZWQgJiYgIXBlbmRpbmcpIHtcbiAgICAgIHRoaXMucHJvcHMubW9kYWxBZGQoKFxuICAgICAgICA8SW52aXRlRGlhbG9nIC8+XG4gICAgICApKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTaXRvdXQoKSB7XG4gICAgLy8gTm90ZTogc2l0b3V0IHZhbHVlIHBvc3NpYmlsaXRpZXNcbiAgICAvLyAgICBzaXRvdXQgPiAwLCBmb3IgZW5hYmxlZCBcInBsYXlcIlxuICAgIC8vICAgIHNpdG91dCA9PT0gMCwgZm9yIGRpc2FibGVkIFwicGxheVwiXG4gICAgLy8gICAgc2l0b3V0ID09PSB1bmRlZmluZWQsIGZvciBlbmFibGVkIFwicGF1c2VcIlxuICAgIC8vICAgIHNpdG91dCA9PT0gbnVsbCwgZm9yIGRpc2FibGVkIFwicGF1c2VcIlxuICAgIC8vIEFuZCB3ZSBhcmUgb25seSBhYmxlIHRvIHRvZ2dsZSBzaXRvdXQgd2hlbiBpdCdzIGVuYWJsZWQuXG4gICAgY29uc3Qgc2l0b3V0ID0gdGhpcy5wcm9wcy5zaXRvdXQ7XG5cbiAgICBpZiAoc2l0b3V0ICE9PSB1bmRlZmluZWQgJiYgc2l0b3V0IDw9IDApIHJldHVybiBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLnNpdG91dEFtb3VudCA8PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBOb3RlOiBpZiBpdCdzIGVuYWJsZWQgXCJwbGF5XCIgKD4gMCksIHRoZW4gc2V0IGl0IHRvIGRpc2FibGVkIFwicGF1c2VcIiAobnVsbClcbiAgICAvLyBvdGhlcndpc2UgaXQncyBlbmFibGVkIFwicGF1c2VcIiwgdGhlbiBzZXQgaXQgdG8gZGlzYWJsZWQgXCJwbGF5XCIgKDApXG4gICAgY29uc3QgbmV4dFNpdG91dFN0YXRlID0gc2l0b3V0ID4gMCA/IG51bGwgOiAwO1xuICAgIGNvbnN0IGhhbmRJZCA9IHBhcnNlSW50KHRoaXMucHJvcHMucGFyYW1zLmhhbmRJZCwgMTApO1xuXG4gICAgY29uc3Qgc2l0b3V0QWN0aW9uID0gYmV0KFxuICAgICAgdGhpcy5wcm9wcy5wYXJhbXMudGFibGVBZGRyLFxuICAgICAgaGFuZElkLFxuICAgICAgdGhpcy5wcm9wcy5zaXRvdXRBbW91bnQsXG4gICAgICB0aGlzLnByb3BzLnByaXZLZXksXG4gICAgICB0aGlzLnByb3BzLm15UG9zLFxuICAgICAgdGhpcy5wcm9wcy5sYXN0UmVjZWlwdCxcbiAgICAgIHtcbiAgICAgICAgb3JpZ2luYWxTaXRvdXQ6IHNpdG91dCxcbiAgICAgICAgbmV4dFNpdG91dFN0YXRlLFxuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHNpdE91dFRvZ2dsZShzaXRvdXRBY3Rpb24sIHRoaXMucHJvcHMuZGlzcGF0Y2gpO1xuICB9XG5cbiAgaGFuZGxlTGVhdmUocG9zKSB7XG4gICAgY29uc3QgaGFuZElkID0gcGFyc2VJbnQodGhpcy5wcm9wcy5wYXJhbXMuaGFuZElkLCAxMCk7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnByb3BzLnN0YXRlO1xuICAgIGNvbnN0IGV4aXRIYW5kID0gKHN0YXRlICE9PSAnd2FpdGluZycpID8gaGFuZElkIDogaGFuZElkIC0gMTtcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZVNlcnZpY2UodGhpcy5wcm9wcy5wYXJhbXMudGFibGVBZGRyLCB0aGlzLnByb3BzLnByaXZLZXkpO1xuICAgIHRoaXMucHJvcHMuc2V0RXhpdEhhbmQodGhpcy50YWJsZUFkZHIsIHRoaXMucHJvcHMucGFyYW1zLmhhbmRJZCwgcG9zLCBleGl0SGFuZCk7XG4gICAgY29uc3Qgc3RhdHVzRWxlbWVudCA9ICg8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIFBsZWFzZSB3YWl0IHVudGlsIHlvdXIgbGVhdmUgcmVxdWVzdCBpcyBwcm9jZXNzZWQhXG4gICAgICAgIFVudGlsIHRoZW4geW91ciBzdGF0dXMgd2lsbCBiZSBzaG93biBhcyBwZW5kaW5nLlxuICAgICAgPC9wPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm1vZGFsRGlzbWlzc30+T0shPC9CdXR0b24+XG4gICAgPC9kaXY+KTtcblxuICAgIHRoaXMucHJvcHMubW9kYWxEaXNtaXNzKCk7XG4gICAgdGhpcy5wcm9wcy5tb2RhbEFkZChzdGF0dXNFbGVtZW50KTtcblxuICAgIHJldHVybiB0YWJsZS5sZWF2ZShleGl0SGFuZCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgUmF2ZW4uY2FwdHVyZUV4Y2VwdGlvbihlcnIsIHsgdGFnczoge1xuICAgICAgICB0YWJsZUFkZHI6IHRoaXMucHJvcHMucGFyYW1zLnRhYmxlQWRkcixcbiAgICAgICAgaGFuZElkLFxuICAgICAgfSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUpvaW5Db21wbGV0ZSgpIHtcbiAgICBjb25zdCBsaW5ldXAgPSAodGhpcy5wcm9wcy5saW5ldXApID8gdGhpcy5wcm9wcy5saW5ldXAudG9KUygpIDogbnVsbDtcbiAgICBpZiAobGluZXVwICYmIHRoaXMucHJvcHMuc3RhdGUgIT09ICd3YWl0aW5nJyAmJiB0eXBlb2YgbGluZXVwW3RoaXMucHJvcHMubXlQb3NdLnNpdG91dCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IGhhbmRJZCA9IHBhcnNlSW50KHRoaXMucHJvcHMucGFyYW1zLmhhbmRJZCwgMTApO1xuICAgICAgY29uc3Qgc2l0b3V0QWN0aW9uID0gYmV0KHRoaXMucHJvcHMucGFyYW1zLnRhYmxlQWRkciwgaGFuZElkLCAxLCB0aGlzLnByb3BzLnByaXZLZXksIHRoaXMucHJvcHMubXlQb3MpO1xuICAgICAgc2l0T3V0VG9nZ2xlKHNpdG91dEFjdGlvbiwgdGhpcy5wcm9wcy5kaXNwYXRjaCk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMubW9kYWxEaXNtaXNzKCk7XG4gIH1cblxuXG4gIHdhdGNoVGFibGUoZXJyb3IsIHJlc3VsdCkge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gKDxwPntlcnJvcn0vPC9wPik7XG4gICAgICB0aGlzLnByb3BzLm1vZGFsQWRkKGVycm9yRWxlbWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGlzcGF0Y2ggYWN0aW9uIGFjY29yZGluZyB0byBldmVudCB0eXBlXG4gICAgc3dpdGNoIChyZXN1bHQuZXZlbnQpIHtcbiAgICAgIGNhc2UgJ0pvaW4nOiB7XG4gICAgICAgIGNvbnN0IGxpbmV1cFJlY2VpdmVkQXJncyA9IChyc3ApID0+IFtcbiAgICAgICAgICB0aGlzLnRhYmxlQWRkcixcbiAgICAgICAgICByc3AsXG4gICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLmdldCgnc21hbGxCbGluZCcpLFxuICAgICAgICAgIHRoaXMucHJvcHMucGFyYW1zLmhhbmRJZCxcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAocmVzdWx0LmFyZ3MgJiYgcmVzdWx0LmFyZ3MuYWRkciA9PT0gdGhpcy5wcm9wcy5wcm94eUFkZHIpIHtcbiAgICAgICAgICAvLyBub3RpZnkgYmFja2VuZCBhYm91dCBuZXcgYmxvY2tcbiAgICAgICAgICB0aGlzLnByb3BzLmJsb2NrTm90aWZ5KCk7XG4gICAgICAgICAgLy8gc2hvdyBtb2RhbFxuXG4gICAgICAgICAgLy8gY29uc3Qgc3RhdHVzRWxlbWVudCA9ICg8ZGl2PlxuICAgICAgICAgIC8vICAgPGgyPkpvaW4gU3VjY2Vzc2Z1bCE8L2gyPlxuICAgICAgICAgIC8vICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUpvaW5Db21wbGV0ZX0+T0shPC9CdXR0b24+XG4gICAgICAgICAgLy8gPC9kaXY+KTtcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLm1vZGFsRGlzbWlzcygpO1xuICAgICAgICAgIC8vIHRoaXMucHJvcHMubW9kYWxBZGQoc3RhdHVzRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgbGluZXVwIHdoZW4gam9pbiBzdWNjZXNzZnVsXG4gICAgICAgIHRoaXMudGFibGUuZ2V0TGluZXVwLmNhbGxQcm9taXNlKCkudGhlbigocnNwKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5saW5ldXBSZWNlaXZlZCguLi5saW5ldXBSZWNlaXZlZEFyZ3MocnNwKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdOZXR0aW5nUmVxdWVzdCc6IHtcbiAgICAgICAgLy8gZGlzcHRhY2ggYWN0aW9uIHRvIHNpZ24gbmV0dGluZyByZXF1ZXN0XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdFcnJvcic6IHtcbiAgICAgICAgaWYgKCFyZXN1bHQuYXJncyB8fCByZXN1bHQuYXJncy5hZGRyICE9PSB0aGlzLnByb3BzLnByb3h5QWRkcikgYnJlYWs7XG5cbiAgICAgICAgbGV0IG1zZyA9ICdVcHMgU29tZXRoaW5nIHdlbnQgd3JvbmcnO1xuICAgICAgICBjb25zdCBlcnJvckNvZGUgPSByZXN1bHQuYXJncy5lcnJvckNvZGUudG9OdW1iZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5wZW5kaW5nVG9nZ2xlKHRoaXMudGFibGVBZGRyLCB0aGlzLnByb3BzLnBhcmFtcy5oYW5kSWQpO1xuICAgICAgICBpZiAoZXJyb3JDb2RlID09PSAxKSB7XG4gICAgICAgICAgbXNnID0gJ1dyb25nIEFtb3VudCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JDb2RlID09PSAyKSB7XG4gICAgICAgICAgbXNnID0gJ05vdCBlbm91Z2ggTW9uaWV6eic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3JDb2RlID09PSAzKSB7XG4gICAgICAgICAgbXNnID0gJ1lvdSBhcmUgYWxyZWFkeSBpbiBsaW5ldXAnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yQ29kZSA9PT0gNCkge1xuICAgICAgICAgIG1zZyA9ICdTb3JyeSB0aGUgU2VhdCBpcyB0YWtlbic7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlcnJvckVsZW1lbnQgPSAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj57bXNnfTwvaDI+XG4gICAgICAgICAgPC9kaXY+KTtcblxuICAgICAgICB0aGlzLnByb3BzLm1vZGFsQWRkKGVycm9yRWxlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNlYXRzKGxpbmV1cCwgY2hhbmdlZCkge1xuICAgIGNvbnN0IHNlYXRzID0gW107XG5cbiAgICBpZiAoIWxpbmV1cCkge1xuICAgICAgcmV0dXJuIHNlYXRzO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmV1cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2l0b3V0ID0gbGluZXVwW2ldLnNpdG91dDtcbiAgICAgIGNvbnN0IHNlYXQgPSAoXG4gICAgICAgIDxTZWF0XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIHBvcz17aX1cbiAgICAgICAgICBzaXRvdXQ9e3NpdG91dH1cbiAgICAgICAgICBzaWduZXJBZGRyPXtsaW5ldXBbaV0uYWRkcmVzc31cbiAgICAgICAgICBwYXJhbXM9e3RoaXMucHJvcHMucGFyYW1zfVxuICAgICAgICAgIGNoYW5nZWQ9e2NoYW5nZWR9XG4gICAgICAgICAgaXNUYWtlbj17dGhpcy5pc1Rha2VufVxuICAgICAgICA+XG4gICAgICAgIDwvU2VhdD4pO1xuICAgICAgc2VhdHMucHVzaChzZWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlYXRzO1xuICB9XG5cbiAgcmVuZGVyQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMucHJvcHMuYm9hcmQ7XG4gICAgY29uc3QgY2FyZFNpemUgPSA1MDtcbiAgICBpZiAoY2FyZHMgJiYgY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZC5wdXNoKFxuICAgICAgICAgIDxCb2FyZENhcmRXcmFwcGVyIGtleT17aX0+XG4gICAgICAgICAgICA8Q2FyZCBjYXJkTnVtYmVyPXtjYXJkc1tpXX0gc2l6ZT17Y2FyZFNpemV9IC8+XG4gICAgICAgICAgPC9Cb2FyZENhcmRXcmFwcGVyPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbGluZXVwID0gKHRoaXMucHJvcHMubGluZXVwKSA/IHRoaXMucHJvcHMubGluZXVwLnRvSlMoKSA6IG51bGw7XG4gICAgY29uc3QgY2hhbmdlZCA9ICh0aGlzLnByb3BzLmhhbmQpID8gdGhpcy5wcm9wcy5oYW5kLmdldCgnY2hhbmdlZCcpIDogbnVsbDtcbiAgICBjb25zdCBzZWF0cyA9IHRoaXMucmVuZGVyU2VhdHMobGluZXVwLCBjaGFuZ2VkKTtcbiAgICBjb25zdCBib2FyZCA9IHRoaXMucmVuZGVyQm9hcmQoKTtcbiAgICBsZXQgd2lubmVycyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLndpbm5lcnMgJiYgdGhpcy5wcm9wcy53aW5uZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHdpbm5lcnMgPSB0aGlzLnByb3BzLndpbm5lcnMubWFwKCh3aW5uZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRTdHJpbmcgPSAod2lubmVyLmhhbmQpID8gYHdpdGggJHt3aW5uZXIuaGFuZH1gIDogJyc7XG4gICAgICAgIHJldHVybiAoPGRpdiBrZXk9e2luZGV4fT57bmlja05hbWVCeUFkZHJlc3Mod2lubmVyLmFkZHIpfSB3b24ge3dpbm5lci5hbW91bnR9IHtoYW5kU3RyaW5nfTwvZGl2Pik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc2IgPSAodGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMuZGF0YS5nZXQoJ3NtYWxsQmxpbmQnKSkgPyB0aGlzLnByb3BzLmRhdGEuZ2V0KCdzbWFsbEJsaW5kJykgOiAwO1xuICAgIGNvbnN0IHBlbmRpbmcgPSAobGluZXVwICYmIGxpbmV1cFt0aGlzLnByb3BzLm15UG9zXSkgPyBsaW5ldXBbdGhpcy5wcm9wcy5teVBvc10ucGVuZGluZyA6IGZhbHNlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7IHRoaXMucHJvcHMuc3RhdGUgJiZcbiAgICAgICAgPFRhYmxlQ29tcG9uZW50XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgaWQ9XCJ0YWJsZVwiXG4gICAgICAgICAgc2I9e3NifVxuICAgICAgICAgIHdpbm5lcnM9e3dpbm5lcnN9XG4gICAgICAgICAgbXlIYW5kPXt0aGlzLnByb3BzLm15SGFuZH1cbiAgICAgICAgICBwZW5kaW5nPXtwZW5kaW5nfVxuICAgICAgICAgIHNpdG91dD17dGhpcy5wcm9wcy5zaXRvdXR9XG4gICAgICAgICAgYm9hcmQ9e2JvYXJkfVxuICAgICAgICAgIHNlYXRzPXtzZWF0c31cbiAgICAgICAgICBvbkxlYXZlPXsoKSA9PiB0aGlzLmhhbmRsZUxlYXZlKHRoaXMucHJvcHMubXlQb3MpfVxuICAgICAgICAgIG9uU2l0b3V0PXt0aGlzLmhhbmRsZVNpdG91dH1cbiAgICAgICAgPlxuICAgICAgICA8L1RhYmxlQ29tcG9uZW50PiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcygpIHtcbiAgcmV0dXJuIHtcbiAgICBoYW5kUmVxdWVzdDogKHRhYmxlQWRkciwgaGFuZElkKSA9PiBoYW5kUmVxdWVzdCh0YWJsZUFkZHIsIGhhbmRJZCksXG4gICAgbGluZXVwUmVjZWl2ZWQ6ICguLi5hcmdzKSA9PiAobGluZXVwUmVjZWl2ZWQoLi4uYXJncykpLFxuICAgIG1vZGFsQWRkOiAobm9kZSkgPT4gKG1vZGFsQWRkKG5vZGUpKSxcbiAgICBtb2RhbERpc21pc3M6ICgpID0+IChtb2RhbERpc21pc3MoKSksXG4gICAgcGVuZGluZ1RvZ2dsZTogKHRhYmxlQWRkciwgaGFuZElkLCBwb3MpID0+IChwZW5kaW5nVG9nZ2xlKHRhYmxlQWRkciwgaGFuZElkLCBwb3MpKSxcbiAgICBzZXRFeGl0SGFuZDogKHRhYmxlQWRkciwgaGFuZElkLCBwb3MsIGV4aXRIYW5kKSA9PiAoc2V0RXhpdEhhbmQodGFibGVBZGRyLCBoYW5kSWQsIHBvcywgZXhpdEhhbmQpKSxcbiAgICB1cGRhdGVSZWNlaXZlZDogKHRhYmxlQWRkciwgaGFuZCkgPT4gKHVwZGF0ZVJlY2VpdmVkKHRhYmxlQWRkciwgaGFuZCkpLFxuICAgIGFkZE1lc3NhZ2U6IChtZXNzYWdlLCB0YWJsZUFkZHIsIHByaXZLZXksIGNyZWF0ZWQpID0+IChhZGRNZXNzYWdlKG1lc3NhZ2UsIHRhYmxlQWRkciwgcHJpdktleSwgY3JlYXRlZCkpLFxuICAgIGJsb2NrTm90aWZ5OiAoKSA9PiAoYmxvY2tOb3RpZnkoKSksXG4gIH07XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3Rvcih7XG4gIGFjY291bnQ6IG1ha2VTZWxlY3RBY2NvdW50RGF0YSgpLFxuICBib2FyZDogbWFrZUJvYXJkU2VsZWN0b3IoKSxcbiAgZGF0YTogbWFrZVRhYmxlRGF0YVNlbGVjdG9yKCksXG4gIGhhbmQ6IG1ha2VIYW5kU2VsZWN0b3IoKSxcbiAgaXNNeVR1cm46IG1ha2VJc015VHVyblNlbGVjdG9yKCksXG4gIGxpbmV1cDogbWFrZUxpbmV1cFNlbGVjdG9yKCksXG4gIGxhdGVzdEhhbmQ6IG1ha2VMYXRlc3RIYW5kU2VsZWN0b3IoKSxcbiAgbGFzdFJlY2VpcHQ6IG1ha2VMYXN0UmVjZWlwdFNlbGVjdG9yKCksXG4gIG1pc3NpbmdIYW5kczogbWFrZU1pc3NpbmdIYW5kU2VsZWN0b3IoKSxcbiAgbXlIYW5kOiBtYWtlTXlIYW5kVmFsdWVTZWxlY3RvcigpLFxuICBteVBvczogbWFrZU15UG9zU2VsZWN0b3IoKSxcbiAgcG90U2l6ZTogbWFrZVBvdFNpemVTZWxlY3RvcigpLFxuICBwcml2S2V5OiBtYWtlU2VsZWN0UHJpdktleSgpLFxuICBwcm94eUFkZHI6IG1ha2VTZWxlY3RQcm94eUFkZHIoKSxcbiAgc2l0b3V0QW1vdW50OiBtYWtlU2l0b3V0QW1vdW50U2VsZWN0b3IoKSxcbiAgc3RhdGU6IG1ha2VIYW5kU3RhdGVTZWxlY3RvcigpLFxuICBzaWduZXJBZGRyOiBtYWtlU2lnbmVyQWRkclNlbGVjdG9yKCksXG4gIHNpdG91dDogbWFrZU15U2l0b3V0U2VsZWN0b3IoKSxcbiAgd2lubmVyczogbWFrZVNlbGVjdFdpbm5lcnMoKSxcbn0pO1xuXG5UYWJsZS5wcm9wVHlwZXMgPSB7XG4gIHN0YXRlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBib2FyZDogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBoYW5kOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBteUhhbmQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGxpbmV1cDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc2l0b3V0OiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBwYXJhbXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIHByaXZLZXk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGxhc3RSZWNlaXB0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzaXRvdXRBbW91bnQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIHByb3h5QWRkcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2lnbmVyQWRkcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgd2ViM1JlZHV4OiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBteVBvczogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgbW9kYWxBZGQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBibG9ja05vdGlmeTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGhhbmRSZXF1ZXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgcGVuZGluZ1RvZ2dsZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHNldEV4aXRIYW5kOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgbW9kYWxEaXNtaXNzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgd2lubmVyczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBkaXNwYXRjaDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGxpbmV1cFJlY2VpdmVkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgdXBkYXRlUmVjZWl2ZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBhZGRNZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgbG9jYXRpb246IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGFjY291bnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdlYjNDb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUYWJsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9UYWJsZS9pbmRleC5qcyIsImltcG9ydCB7IGRlZmluZU1lc3NhZ2VzIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZU1lc3NhZ2VzKHtcbiAgam9pbk1vZGFsOiB7XG4gICAgaWQ6ICdhcHAuY29udGFpbmVycy5UYWJsZS5qb2luTW9kYWwnLFxuICAgIGJ1dHRvbkRpc21pc3M6IHtcbiAgICAgIGlkOiAnYXBwLmNvbnRhaW5lcnMuVGFibGUuam9pbk1vZGFsLmJ1dHRvbkRpc21pc3MnLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdHb3QgSXQhJyxcbiAgICB9LFxuICB9LFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9UYWJsZS9tZXNzYWdlcy5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBzZXRBdXRoU3RhdGUgfSBmcm9tICcuLi9BY2NvdW50UHJvdmlkZXIvYWN0aW9ucyc7XG5pbXBvcnQge1xuICBtYWtlU2VsZWN0T3BlbixcbiAgbWFrZVNlbGVjdEFjdGl2ZSxcbn0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHtcbiAgbWFrZUJsb2NreVNlbGVjdG9yLFxuICBtYWtlTmlja05hbWVTZWxlY3RvcixcbiAgbWFrZVNlbGVjdExvZ2dlZEluLFxufSBmcm9tICcuLi9BY2NvdW50UHJvdmlkZXIvc2VsZWN0b3JzJztcbmltcG9ydCB7XG4gIHRvZ2dsZU1lbnVPcGVuLFxuICB0b2dnbGVNZW51QWN0aXZlLFxufSBmcm9tICcuL2FjdGlvbnMnO1xuXG5pbXBvcnQgVGFibGVNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGVNZW51JztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBoYW5kbGVDbGlja0xvZ291dDogKCkgPT4ge1xuICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goJy9sb2dpbicpO1xuICAgIHJldHVybiBkaXNwYXRjaChzZXRBdXRoU3RhdGUoeyBsb2dnZWRJbjogZmFsc2UgfSkpO1xuICB9LFxuICB0b2dnbGVNZW51T3BlbjogKCkgPT4gZGlzcGF0Y2godG9nZ2xlTWVudU9wZW4oKSksXG4gIHRvZ2dsZU1lbnVBY3RpdmU6ICgpID0+IGRpc3BhdGNoKHRvZ2dsZU1lbnVBY3RpdmUoKSksXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgbG9nZ2VkSW46IG1ha2VTZWxlY3RMb2dnZWRJbigpLFxuICBvcGVuOiBtYWtlU2VsZWN0T3BlbigpLFxuICBhY3RpdmU6IG1ha2VTZWxlY3RBY3RpdmUoKSxcbiAgYmxvY2t5OiBtYWtlQmxvY2t5U2VsZWN0b3IoKSxcbiAgbmlja05hbWU6IG1ha2VOaWNrTmFtZVNlbGVjdG9yKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGFibGVNZW51KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL1RhYmxlTWVudS9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuXG4vKipcbiAqIERpcmVjdCBzZWxlY3RvciB0byB0aGUgc3RhdGUgZG9tYWluXG4gKi9cbmNvbnN0IHNlbGVjdFRhYmxlTWVudSA9IChzdGF0ZSkgPT4gc3RhdGUuZ2V0KCd0YWJsZU1lbnUnKTtcblxuLyoqXG4gKiBPdGhlciBzcGVjaWZpYyBzZWxlY3RvcnNcbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2VTZWxlY3RPcGVuID0gKCkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdFRhYmxlTWVudSxcbiAgKHRhYmxlTWVudSkgPT4gdGFibGVNZW51LmdldCgnb3BlbicpLFxuKTtcblxuZXhwb3J0IGNvbnN0IG1ha2VTZWxlY3RBY3RpdmUgPSAoKSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0VGFibGVNZW51LFxuICAodGFibGVNZW51KSA9PiB0YWJsZU1lbnUuZ2V0KCdhY3RpdmUnKSxcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9UYWJsZU1lbnUvc2VsZWN0b3JzLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmMtc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTRweDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXIgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG4ucmMtc2xpZGVyLXJhaWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5yYy1zbGlkZXItdHJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiZTJmYjtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogc29saWQgMnB4ICM5NmRiZmE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXg7XFxuICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcXG59XFxuLnJjLXNsaWRlci1oYW5kbGU6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTdjNWY3O1xcbn1cXG4ucmMtc2xpZGVyLWhhbmRsZTphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTdjNWY3O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjNTdjNWY3O1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuLnJjLXNsaWRlci1tYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMThweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnJjLXNsaWRlci1tYXJrLXRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4ucmMtc2xpZGVyLW1hcmstdGV4dC1hY3RpdmUge1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbi5yYy1zbGlkZXItc3RlcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5yYy1zbGlkZXItZG90IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZTllOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ucmMtc2xpZGVyLWRvdDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogLTRweDtcXG59XFxuLnJjLXNsaWRlci1kb3Q6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogLTRweDtcXG59XFxuLnJjLXNsaWRlci1kb3QtYWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzk2ZGJmYTtcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCAucmMtc2xpZGVyLWhhbmRsZSxcXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItZG90IHtcXG4gIGJvcmRlci1jb2xvcjogI2NjYztcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnJjLXNsaWRlci1kaXNhYmxlZCAucmMtc2xpZGVyLW1hcmstdGV4dCxcXG4ucmMtc2xpZGVyLWRpc2FibGVkIC5yYy1zbGlkZXItZG90IHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItcmFpbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItdHJhY2sge1xcbiAgbGVmdDogNXB4O1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDRweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLWhhbmRsZSB7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIG1hcmdpbi1ib3R0b206IC03cHg7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcXG4gICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItbWFyayB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxOHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItc3RlcCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNHB4O1xcbn1cXG4ucmMtc2xpZGVyLXZlcnRpY2FsIC5yYy1zbGlkZXItZG90IHtcXG4gIGxlZnQ6IDJweDtcXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XFxufVxcbi5yYy1zbGlkZXItdmVydGljYWwgLnJjLXNsaWRlci1kb3Q6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG59XFxuLnJjLXNsaWRlci12ZXJ0aWNhbCAucmMtc2xpZGVyLWRvdDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tZW50ZXIsXFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1hcHBlYXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IC4zcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWxlYXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1lbnRlci5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tZW50ZXItYWN0aXZlLFxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tYXBwZWFyLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1hcHBlYXItYWN0aXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duSW47XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiByY1NsaWRlclRvb2x0aXBab29tRG93bkluO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tbGVhdmUucmMtc2xpZGVyLXRvb2x0aXAtem9vbS1kb3duLWxlYXZlLWFjdGl2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByY1NsaWRlclRvb2x0aXBab29tRG93bk91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duT3V0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC16b29tLWRvd24tZW50ZXIsXFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1hcHBlYXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXpvb20tZG93bi1sZWF2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByY1NsaWRlclRvb2x0aXBab29tRG93bkluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByY1NsaWRlclRvb2x0aXBab29tRG93bk91dCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJjU2xpZGVyVG9vbHRpcFpvb21Eb3duT3V0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XFxuICB9XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtOTk5OXB4O1xcbiAgdG9wOiAtOTk5OXB4O1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcCAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnJjLXNsaWRlci10b29sdGlwLXBsYWNlbWVudC10b3Age1xcbiAgcGFkZGluZzogNHB4IDAgOHB4IDA7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1pbm5lciB7XFxuICBwYWRkaW5nOiA2cHggMnB4O1xcbiAgbWluLXdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzZjNmM7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4ICNkOWQ5ZDk7XFxufVxcbi5yYy1zbGlkZXItdG9vbHRpcC1hcnJvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ucmMtc2xpZGVyLXRvb2x0aXAtcGxhY2VtZW50LXRvcCAucmMtc2xpZGVyLXRvb2x0aXAtYXJyb3cge1xcbiAgYm90dG9tOiA0cHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTRweDtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzZjNmM2YztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuKiBSYW5nZXNsaWRlclxcbiovXFxuLnJhbmdlc2xpZGVyIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcbi5yYW5nZXNsaWRlcixcXG4ucmFuZ2VzbGlkZXIgLnJhbmdlc2xpZGVyX19maWxsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuLnJhbmdlc2xpZGVyIC5yYW5nZXNsaWRlcl9faGFuZGxlIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSwgMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcbi5yYW5nZXNsaWRlciAucmFuZ2VzbGlkZXJfX2hhbmRsZTpob3ZlciAucmFuZ2VzbGlkZXJfX3Rvb2x0aXAge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnJhbmdlc2xpZGVyIC5yYW5nZXNsaWRlcl9fdG9vbHRpcCB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5yYW5nZXNsaWRlciAucmFuZ2VzbGlkZXJfX3Rvb2x0aXAgc3BhbiB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxufVxcbi5yYW5nZXNsaWRlciAucmFuZ2VzbGlkZXJfX3Rvb2x0aXA6YWZ0ZXIge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi8qKlxcbiogUmFuZ2VzbGlkZXIgLSBIb3Jpem9udGFsIHNsaWRlclxcbiovXFxuLnJhbmdlc2xpZGVyLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnJhbmdlc2xpZGVyLWhvcml6b250YWwgLnJhbmdlc2xpZGVyX19maWxsIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Q0IzNDI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdG9wOiAwO1xcbn1cXG4ucmFuZ2VzbGlkZXItaG9yaXpvbnRhbCAucmFuZ2VzbGlkZXJfX2hhbmRsZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB0b3A6IC0xMHB4O1xcbn1cXG4ucmFuZ2VzbGlkZXItaG9yaXpvbnRhbCAucmFuZ2VzbGlkZXJfX2hhbmRsZTphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIHRvcDogNnB4O1xcbiAgbGVmdDogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCkgaW5zZXQsIDAgLTFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpIGluc2V0O1xcbn1cXG4ucmFuZ2VzbGlkZXItaG9yaXpvbnRhbCAucmFuZ2VzbGlkZXJfX3Rvb2x0aXAge1xcbiAgdG9wOiAtNTVweDtcXG59XFxuLnJhbmdlc2xpZGVyLWhvcml6b250YWwgLnJhbmdlc2xpZGVyX190b29sdGlwOmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBsZWZ0OiAxMnB4O1xcbiAgYm90dG9tOiAtOHB4O1xcbn1cXG4vKipcXG4qIFJhbmdlc2xpZGVyIC0gVmVydGljYWwgc2xpZGVyXFxuKi9cXG4ucmFuZ2VzbGlkZXItdmVydGljYWwge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWF4LXdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5yYW5nZXNsaWRlci12ZXJ0aWNhbCAucmFuZ2VzbGlkZXJfX2ZpbGwsXFxuLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9faGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnJhbmdlc2xpZGVyLXZlcnRpY2FsIC5yYW5nZXNsaWRlcl9fZmlsbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Q0IzNDI7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19oYW5kbGUge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBsZWZ0OiAtMTBweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5yYW5nZXNsaWRlci12ZXJ0aWNhbCAucmFuZ2VzbGlkZXJfX3Rvb2x0aXAge1xcbiAgbGVmdDogLTU1cHg7XFxuICB0b3A6IC0xNXB4O1xcbn1cXG4ucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX190b29sdGlwOmFmdGVyIHtcXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgbGVmdDogMTAwJTtcXG4gIHRvcDogMTJweDtcXG59XFxuLyoqXFxuKiBSYW5nZXNsaWRlciAtIFJldmVyc2VcXG4qL1xcbi5yYW5nZXNsaWRlci1yZXZlcnNlLnJhbmdlc2xpZGVyLWhvcml6b250YWwgLnJhbmdlc2xpZGVyX19maWxsIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4ucmFuZ2VzbGlkZXItcmV2ZXJzZS5yYW5nZXNsaWRlci12ZXJ0aWNhbCAucmFuZ2VzbGlkZXJfX2ZpbGwge1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiBpbmhlcml0O1xcbn1cXG4vKipcXG4qIFJhbmdlc2xpZGVyIC0gTGFiZWxzXFxuKi9cXG4ucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19sYWJlbC1saXN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMCAwIDAgMjRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG4ucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19sYWJlbC1saXN0IC5yYW5nZXNsaWRlcl9fbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ucmFuZ2VzbGlkZXItdmVydGljYWwgLnJhbmdlc2xpZGVyX19sYWJlbC1saXN0IC5yYW5nZXNsaWRlcl9fbGFiZWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0xNHB4O1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLnJhbmdlc2xpZGVyX19sYWJlbC1saXN0IC5yYW5nZXNsaWRlcl9fbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdG9wOiAxMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vcmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9yZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKFwiLi9ub2RlX21vZHVsZXMvYWItdmVjdG9yLWNhcmRzL2Rpc3QvaW5kZXguanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FiLXZlY3Rvci1jYXJkcy9kaXN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSByZWFjdEJvaWxlcnBsYXRlRGVwc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoXCIuL25vZGVfbW9kdWxlcy9wdXNoZXItanMvZGlzdC93ZWIvcHVzaGVyLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wdXNoZXItanMvZGlzdC93ZWIvcHVzaGVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSByZWFjdEJvaWxlcnBsYXRlRGVwc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoXCIuL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvbGliL1NsaWRlci5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2xpYi9TbGlkZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHJlYWN0Qm9pbGVycGxhdGVEZXBzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmFuZ2VzbGlkZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSByZWFjdEJvaWxlcnBsYXRlRGVwc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==