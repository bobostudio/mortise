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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from "classnames";
import { useState } from "react";
import { ALERT_BASE, ALERT_DANDER, ALERT_DEFAULT, ALERT_PRIMARY, ALERT_WARNNING } from "./style";
import Icon from '../Icon';
var Alert = function (props) {
    var _a;
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var className = props.className, title = props.title, content = props.content, type = props.type, icon = props.icon, closed = props.closed;
    var classes = classNames(ALERT_BASE, className, (_a = {},
        _a["".concat(ALERT_PRIMARY)] = type === 'primary',
        _a["".concat(ALERT_DEFAULT)] = type === 'default',
        _a["".concat(ALERT_DANDER)] = type === 'danger',
        _a["".concat(ALERT_WARNNING)] = type === 'warnning',
        _a));
    return (_jsx(_Fragment, { children: !show ? _jsxs("div", __assign({ className: classes }, { children: [title && _jsx("div", __assign({ className: "text-xl" }, { children: title })), _jsxs("span", __assign({ className: "flex" }, { children: [icon && !title && _jsx("span", __assign({ className: "mr-2 cursor-pointer" }, { children: _jsx(Icon, { icon: icon }) })), _jsxs("div", __assign({ className: "flex flex-row justify-between items-center w-full" }, { children: [content, closed && !title && _jsx("span", __assign({ className: "mr-2 cursor-pointer", onClick: function () {
                                        setShow(!show);
                                    } }, { children: _jsx(Icon, { icon: "error", color: "white", size: 10 }) }))] }))] }))] })) :
            _jsx(_Fragment, {}) }));
};
Alert.defaultProps = {
    closed: false,
    type: 'primary'
};
export default Alert;
