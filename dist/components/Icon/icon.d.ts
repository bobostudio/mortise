import { FC } from "react";
import './iconfont.css';
export interface IconProps {
    icon: string;
    size?: number;
    color?: string;
}
declare const Icon: FC<IconProps>;
export default Icon;
