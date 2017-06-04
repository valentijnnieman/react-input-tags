'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(_ref) {
  var value = _ref.value,
      index = _ref.index,
      bindClick = _ref.bindClick;

  var canDelete = false;
  var onClick = function onClick(e) {
    e.stopPropagation();
    canDelete = true;
  };
  var onBlur = function onBlur() {
    canDelete = false;
  };
  var remove = function remove() {
    if (canDelete) bindClick(index);
  };
  return _react2.default.createElement(
    'button',
    { type: 'button', className: 'tag', onClick: onClick, onBlur: onBlur },
    value,
    _react2.default.createElement(
      'span',
      { className: 'tag__close', onClick: remove },
      '\xD7'
    )
  );
};

exports.default = Tag;