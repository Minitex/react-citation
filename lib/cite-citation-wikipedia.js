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

var CitationMla = (0, _citeCitationRender2.default)(_class = function (_React$Component) {
  _inherits(CitationMla, _React$Component);

  function CitationMla(props) {
    _classCallCheck(this, CitationMla);

    return _possibleConstructorReturn(this, (CitationMla.__proto__ || Object.getPrototypeOf(CitationMla)).call(this, props));
  }

  _createClass(CitationMla, [{
    key: 'italicize',
    value: function italicize(text) {
      return '<i>' + text + '</i>';
    }
  }, {
    key: 'removeProtocols',
    value: function removeProtocols(url) {
      return url.replace(/http:\/\/|https:\/\//i, '');
    }
  }, {
    key: 'mappings',
    value: function mappings() {
      var map = [{ ref_name: { prefix: '<ref name=', suffix: '> {{' } }, { url: { prefix: 'cite web | url=', suffix: '' } }, { type: { prefix: ' | title= (', suffix: ')' } }, { title: { prefix: '', suffix: ',' } }, { creation_date: { prefix: '(', suffix: ')' } }, { creator: { prefix: ' | author=', suffix: '' } }, { current_date: { prefix: ' | accessdate=', suffix: '' } }, { contributing_organization: { prefix: ' | publisher=', suffix: '' } }];
      return map;
    }
  }, {
    key: 'wrapper',
    value: function wrapper(citation) {
      return citation + '}} </ref>';
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.render_citation(this.mappings());
    }
  }]);

  return CitationMla;
}(_react2.default.Component)) || _class;

exports.default = CitationMla;


var propTypes = {
  ref_name: _react2.default.PropTypes.string,
  creator: _react2.default.PropTypes.string,
  creation_date: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  contributing_organization: _react2.default.PropTypes.string,
  url: _react2.default.PropTypes.string,
  mapping: _react2.default.PropTypes.object
};

CitationMla.propTypes = propTypes;