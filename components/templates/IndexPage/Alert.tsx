import React, { useEffect, useRef, useState } from 'react';
import styles from './IndexPage.module.sass';

export interface AlertProps {
    show: any
}

const Alert = (props: AlertProps) => {
    const [show, setShow] = useState<boolean>(false);
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 500);
        } else {
            didMount.current = true;
        }
    }, [props.show]);

    return <span className={show ? styles.show : ''}>Copied!</span>
};

export default Alert;
