'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tag = require('./tag.js');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagInput = function (_React$Component) {
  _inherits(TagInput, _React$Component);

  function TagInput(props) {
    _classCallCheck(this, TagInput);

    var _this = _possibleConstructorReturn(this, (TagInput.__proto__ || Object.getPrototypeOf(TagInput)).call(this, props));

    _this.state = {
      input: "",
      tags: [],
      isFocused: false
    };
    _this.onClick = _this.onClick.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.removeTag = _this.removeTag.bind(_this);
    return _this;
  }

  _createClass(TagInput, [{
    key: 'resetInput',
    value: function resetInput() {
      // reset input to default state
      this.refs.input.size = 1;
      var input = "";
      this.setState({ input: input });
    }
  }, {
    key: 'createTag',
    value: function createTag(input) {
      if (this.state.tags.length >= this.props.maxTags) {
        this.props.maxExceeded();
        this.resetInput();
        return;
      }
      var newTags = [].concat(_toConsumableArray(this.state.tags));
      newTags.push(input);
      this.setState({ tags: newTags });
      this.resetInput();
    }
  }, {
    key: 'removeTag',
    value: function removeTag(index) {
      var newTags = [].concat(_toConsumableArray(this.state.tags.slice(0, index)), _toConsumableArray(this.state.tags.slice(index + 1)));

      this.setState({ tags: newTags });
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      var input = event.target.value;

      // grow input field
      this.refs.input.size = input.length + 1;

      if (input.slice(-1) == ',') {
        this.createTag(input.slice(0, -1));
      } else {
        this.setState({
          input: input
        });
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      this.refs.input.focus();
      this.setState({ isFocused: true });
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      switch (event.key) {
        case 'Tab':
          if (this.state.input.length > 0) {
            event.preventDefault();
            this.createTag(this.state.input);
          }
          break;
        case 'Backspace':
          if (this.state.input.length <= 0) {
            event.preventDefault();
            this.removeTag(this.state.tags.length - 1);
          }
          break;
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      var isFocused = !this.state.isFocused;
      this.setState({ isFocused: isFocused });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var renderedTags = this.state.tags.map(function (tag, index) {
        return _react2.default.createElement(_tag2.default, { value: tag, key: index, index: index, bindClick: _this2.removeTag });
      });
      return _react2.default.createElement(
        'div',
        { className: this.state.isFocused ? 'tag-input tag-input--focused' : 'tag-input', onClick: this.onClick },
        renderedTags,
        _react2.default.createElement('input', { size: '1', className: 'tag-input__input', type: 'text', ref: 'input', value: this.state.input, onChange: this.onChange, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onFocus })
      );
    }
  }]);

  return TagInput;
}(_react2.default.Component);

exports.default = TagInput;