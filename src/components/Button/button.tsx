
import classNames from 'classnames'
import React, { ReactNode, FC, ButtonHTMLAttributes } from "react";
import Icon from '../Icon';
export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'warnning'

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    type?: ButtonType;
    icon?: string;
    children: ReactNode;
}

export type NativeButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>

const Button: FC<NativeButtonProps> = (props) => {
    const { className, disabled, size, type, icon, children, ...restProps } = props;
    const classes = classNames(`button`, className, {
        ['primary']: type === 'primary',
        [`default`]: type === 'default',
        [`danger`]: type === 'danger',
        [`warnning`]: type === 'warnning',
        [`lg`]: size === 'lg',
        [`md`]: size === 'md',
        [`sm`]: size === 'sm',
        [`disabled`]: disabled === true
    })
    return (
        <button type="button" className={classes} {...restProps} disabled={disabled}>
            {icon ? <Icon icon={icon} /> : <></>} {children}
        </button>
    )
}

Button.defaultProps = {
    disabled: false,
    size: 'md',
    type: 'primary'
}

export default Button