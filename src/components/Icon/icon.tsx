import React, { FC } from "react";

export interface IconProps {
    icon: string,
    size?: number,
    color?: string
}

const Icon: FC<IconProps> = (props) => {
    let { icon, size, color } = props;
    return (
        <div><span className={`iconfont icon-${icon}`} style={{
            fontSize: size ? size + 'px' : '20px',
            color
        }}></span></div>
    )
}

export default Icon;