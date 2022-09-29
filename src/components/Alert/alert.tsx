import classNames from "classnames";
import React, { FC, useState } from "react";
import Icon from '../Icon';

export type AlertType = 'primary' | 'default' | 'danger' | 'warnning'

interface AlertProps {
    className?: string;
    title?: string;
    content: string;
    type?: AlertType;
    icon?: string;
    closed?: boolean;
}

const Alert: FC<AlertProps> = (props) => {
    const [show, setShow] = useState<boolean>(false);
    const { className, title, content, type, icon, closed } = props;
    const classes = classNames(`alert`, className, {
        [`primary`]: type === 'primary',
        [`default`]: type === 'default',
        [`danger`]: type === 'danger',
        [`warnning`]: type === 'warnning',
    })
    return (
        <>
            {
                !show ? <div className={classes}>
                    {
                        title && <div className="text-xl">
                            {title}</div>
                    }
                    <span className="flex">
                        {
                            icon && !title && <span className="mr-2 cursor-pointer"><Icon icon={icon} /></span>
                        }
                        <div className="flex flex-row justify-between items-center w-full">
                            {content}
                            {
                                closed && !title && <span className="mr-2 cursor-pointer" onClick={() => {
                                    setShow(!show)
                                }}><Icon icon="error" color="white" size={10} /></span>
                            }
                        </div>
                    </span>
                </div> :
                    <></>
            }
        </>
    )
}

Alert.defaultProps = {
    closed: false,
    type: 'primary'
}

export default Alert;
