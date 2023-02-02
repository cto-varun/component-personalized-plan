"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PersonalizedPlan;
var _react = _interopRequireDefault(require("react"));
require("./styles.css");
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function PersonalizedPlan(props) {
  let {
    data
  } = props.data;
  let {
    lineDetails,
    plans
  } = data;
  const noOfLines = lineDetails && lineDetails.length > 0 ? lineDetails.length >= 5 ? 4 : lineDetails.length : 4;
  const defaultPlans = {
    1: [{
      description: '2 Lines for $90/mo.',
      title: '$45 per line/mo.',
      otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
      shortDetails: 'Nationwide 5G Access',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }, {
      description: '3 Lines for $110/mo.',
      title: '$37 per line/mo.',
      otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
      shortDetails: 'Nationwide 5G Access',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }, {
      description: '4 Lines for $130/mo.',
      title: '$33 per line/mo.',
      otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
      shortDetails: 'Nationwide 5G Access',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }],
    2: [{
      description: '3 Lines for $110/mo.',
      title: '$37 per line/mo.',
      otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
      shortDetails: 'Nationwide 5G Access',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }, {
      description: '4 Lines for $130/mo.',
      title: '$33 per line/mo.',
      otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
      shortDetails: 'Nationwide 5G Access',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }, {
      description: '5 Lines for $160/mo.',
      title: '$32 per line/mo.',
      otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
      shortDetails: 'Nationwide 5G Access',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }],
    3: [{
      description: '4 Lines for $130/mo.',
      title: '$33 per line/mo.',
      otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
      shortDetails: 'Nationwide 5G Access',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }, {
      description: '4 Lines for $100/mo.',
      title: '$25 per line/mo.',
      otherDetails: 'Unlimited',
      shortDetails: 'High-Speed Data',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }, {
      description: '5 Lines for $160/mo.',
      title: '$32 per line/mo.',
      otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
      shortDetails: 'Nationwide 5G Access',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }],
    4: [{
      description: '5 Lines for $160/mo.',
      title: '$32 per line/mo.',
      otherDetails: 'Unlimited + 15 GB Mobile Hotspot',
      shortDetails: 'Nationwide 5G Access',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }, {
      description: '5 Lines for $125/mo.',
      title: '$25 per line/mo.',
      otherDetails: 'Unlimited',
      shortDetails: 'High-Speed Data',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }, {
      description: '5 Lines for $130/mo.',
      title: '$26 per line/mo.',
      otherDetails: '10 GB',
      shortDetails: 'High-Speed Data',
      button: {
        type: 'primary',
        name: 'UPGRADE',
        buttonProps: {
          size: 12
        }
      }
    }]
  };
  const personalizedPlans = plans ? plans : defaultPlans[noOfLines];
  return /*#__PURE__*/_react.default.createElement(_antd.Col, {
    xs: {
      span: 24
    },
    className: "p-0"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "personalized-plan-header"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "personalized-plan-header-text m-0"
  }, "Personalized Plans For This Customer")), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    className: "personalized-plan-body"
  }, personalizedPlans && personalizedPlans.map((plan, planIndex) => {
    return /*#__PURE__*/_react.default.createElement(_antd.Col, {
      key: planIndex,
      xs: {
        span: 24
      },
      lg: {
        span: 8
      },
      className: "personalized-plan-body-col"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "personalized-plan-body-header"
    }, plan.description), /*#__PURE__*/_react.default.createElement("h3", {
      className: "personalized-plan-body-header-green m-0"
    }, plan.title), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-row justify-content-between mt-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "personalized-plan-body-header subtext-color"
    }, /*#__PURE__*/_react.default.createElement("div", null, plan.otherDetails), /*#__PURE__*/_react.default.createElement("div", null, plan.shortDetails)), /*#__PURE__*/_react.default.createElement(_antd.Button, _extends({
      className: "personalized-plan-button"
    }, plan.button.buttonProps), plan.button.name && plan.button.name)));
  }))));
}
module.exports = exports.default;