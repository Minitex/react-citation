"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Thumbnail = function Thumbnail(props) {
  return _react2.default.createElement(
    "div",
    { className: "row" },
    _react2.default.createElement(
      "div",
      { className: "col-md-2" },
      _react2.default.createElement(
        "a",
        { className: "thumbnail", hgref: props.url },
        _react2.default.createElement("img", { src: props.src }),
        _react2.default.createElement("span", { className: "glyphicon glyphicon-download-alt" }),
        " ",
        props.text
      )
    )
  );
};

var propTypes = {
  url: _react2.default.PropTypes.string.isRequired,
  src: _react2.default.PropTypes.string.isRequired,
  text: _react2.default.PropTypes.string
};

Thumbnail.propTypes = propTypes;

exports.default = Thumbnail;