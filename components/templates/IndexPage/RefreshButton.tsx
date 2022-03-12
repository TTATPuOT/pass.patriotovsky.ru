import React, { useCallback, useState } from 'react';
import styles from './IndexPage.module.sass';

export interface RefreshButtonProps {
    refreshPassword: () => void
}

const RefreshButton = (props: RefreshButtonProps) => {
    const [animate, setAnimate] = useState<boolean>(false);

    const handleClick = useCallback(() => {
        setAnimate(true);
        props.refreshPassword();
    }, [props]);

    return <button
        className={animate ? styles.animate : ''}
        onClick={handleClick}
        onAnimationEnd={() => setAnimate(false)}
    />;
};

export default RefreshButton;
