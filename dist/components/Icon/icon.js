import { jsx as _jsx } from "react/jsx-runtime";
import './iconfont.css';
var Icon = function (props) {
    var icon = props.icon, size = props.size, color = props.color;
    return (_jsx("div", { children: _jsx("span", { className: "iconfont icon-".concat(icon), style: {
                fontSize: size ? size + 'px' : '20px',
                color: color
            } }) }));
};
export default Icon;
