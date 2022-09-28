import { FC } from "react";
export declare type AlertType = 'primary' | 'default' | 'danger' | 'warnning';
interface AlertProps {
    className?: string;
    title?: string;
    content: string;
    type?: AlertType;
    icon?: string;
    closed?: boolean;
}
declare const Alert: FC<AlertProps>;
export default Alert;
