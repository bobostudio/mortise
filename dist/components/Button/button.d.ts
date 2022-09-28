import { ReactNode, FC, ButtonHTMLAttributes } from "react";
export declare type ButtonSize = 'lg' | 'md' | 'sm';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'warnning';
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    type?: ButtonType;
    icon?: string;
    children: ReactNode;
}
export declare type NativeButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>;
declare const Button: FC<NativeButtonProps>;
export default Button;
