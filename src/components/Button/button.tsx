import classNames from 'classnames'
import { ReactNode, FC, ButtonHTMLAttributes } from "react";
import { BUTTON_BASE, BUTTON_PRIMARY, BUTTON_DEFAULT, BUTTON_DANDER, BUTTON_WARNNING, BUTTON_LG, BUTTON_MD, BUTTON_SM } from './style';

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'warnning'

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    type?: ButtonType;
    children: ReactNode;
}

export type NativeButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>

const Button: FC<NativeButtonProps> = (props) => {
    console.log(props)
    const { className, disabled, size, type, children, ...restProps } = props;
    const classes = classNames(BUTTON_BASE, className, {
        [`${BUTTON_PRIMARY}`]: type === 'primary',
        [`${BUTTON_DEFAULT}`]: type === 'default',
        [`${BUTTON_DANDER}`]: type === 'danger',
        [`${BUTTON_WARNNING}`]: type === 'warnning',
        [`${BUTTON_LG}`]: size === 'lg',
        [`${BUTTON_MD}`]: size === 'md',
        [`${BUTTON_SM}`]: size === 'sm',
        'disabled': disabled
    })
    return (
        <div className={classes} {...restProps}>
            {children}
        </div>
    )
}

Button.defaultProps = {
    disabled: false,
    size: 'md',
    type: 'primary'
}

export default Button