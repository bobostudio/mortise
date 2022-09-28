var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import Icon from '../Icon';
import { BUTTON_BASE, BUTTON_PRIMARY, BUTTON_DEFAULT, BUTTON_DANDER, BUTTON_WARNNING, BUTTON_LG, BUTTON_MD, BUTTON_SM, BUTTON_DISABLED } from './style';
var Button = function (props) {
    var _a;
    var className = props.className, disabled = props.disabled, size = props.size, type = props.type, icon = props.icon, children = props.children, restProps = __rest(props, ["className", "disabled", "size", "type", "icon", "children"]);
    var classes = classNames(BUTTON_BASE, className, (_a = {},
        _a["".concat(BUTTON_PRIMARY)] = type === 'primary',
        _a["".concat(BUTTON_DEFAULT)] = type === 'default',
        _a["".concat(BUTTON_DANDER)] = type === 'danger',
        _a["".concat(BUTTON_WARNNING)] = type === 'warnning',
        _a["".concat(BUTTON_LG)] = size === 'lg',
        _a["".concat(BUTTON_MD)] = size === 'md',
        _a["".concat(BUTTON_SM)] = size === 'sm',
        _a["".concat(BUTTON_DISABLED)] = disabled === true,
        _a));
    return (_jsxs("button", __assign({ className: classes }, restProps, { disabled: disabled }, { children: [icon ? _jsx(Icon, { icon: icon }) : _jsx(_Fragment, {}), " ", _jsx("span", __assign({ style: { marginLeft: '4px' } }, { children: children }))] })));
};
Button.defaultProps = {
    disabled: false,
    size: 'md',
    type: 'primary'
};
export default Button;
