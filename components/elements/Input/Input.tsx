import React from 'react';
import styles from './Input.module.sass';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = (props: InputProps) => {
    return <div className={styles.input}>
        <input {...props} />
    </div>;
};

export default Input;
