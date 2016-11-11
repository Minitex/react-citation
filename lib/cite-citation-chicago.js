'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _citeCitationRender = require('../src/cite-citation-render');

var _citeCitationRender2 = _interopRequireDefault(_citeCitationRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CitationChicago = (0, _citeCitationRender2.default)(_class = function (_React$Component) {
  _inherits(CitationChicago, _React$Component);

  function CitationChicago(props) {
    _classCallCheck(this, CitationChicago);

    return _possibleConstructorReturn(this, (CitationChicago.__proto__ || Object.getPrototypeOf(CitationChicago)).call(this, props));
  }

  _createClass(CitationChicago, [{
    key: 'mappings',
    value: function mappings() {
      var map = [{ creator: { prefix: '', suffix: '.' } }, { creation_date: { prefix: ' ', suffix: '.' } }, { title: { prefix: '"', suffix: '." ' } }, { contributing_organization: { prefix: ' ', suffix: ', ' } }, { current_date: { prefix: 'Accessed ', suffix: '.' } }, { url: { prefix: '', suffix: '' } }];
      return map;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.render_citation({ mappings: this.mappings() });
    }
  }]);

  return CitationChicago;
}(_react2.default.Component)) || _class;

exports.default = CitationChicago;


var propTypes = {
  creator: _react2.default.PropTypes.string,
  creation_date: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  contributing_organization: _react2.default.PropTypes.string,
  url: _react2.default.PropTypes.string,
  mapping: _react2.default.PropTypes.object
};

CitationChicago.propTypes = propTypes;