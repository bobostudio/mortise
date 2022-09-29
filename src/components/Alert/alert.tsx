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
    const { className, title, content, type, icon, closed } = props;
    const classes = classNames(`alert`, className, {
        [`primary`]: type === 'primary',
        [`default`]: type === 'default',
        [`danger`]: type === 'danger',
        [`warnning`]: type === 'warnning',
    })
    const [showClose, setShowClose] = useState<boolean>(false);
    return (
        <>
            {
                !showClose ? <div className={classes}>
                    {
                        title && <div className="text-xl">
                            {title}</div>
                    }
                    <div className="flex">
                        {
                            icon && !title && <div className="mr-2 cursor-pointer"><Icon icon={icon} /></div>
                        }
                        <div className="flex flex-row justify-between items-center w-full">
                            {content}
                            {
                                closed && !title && <div className="mr-2 cursor-pointer" onClick={() => {
                                    setShowClose(!showClose)
                                }}><Icon icon="error" color="white" size={10} /></div>
                            }
                        </div>
                    </div>
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
