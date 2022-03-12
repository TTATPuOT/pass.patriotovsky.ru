import React, { useState } from 'react';
import styles from './Checkbox.module.sass';
import { v4 as uuid } from 'uuid';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode
    name: string
}

const Checkbox = (props: CheckboxProps) => {
    const { children, name: id, ...otherProps } = props;

    return <div className={styles.checkbox}>
        <input type="checkbox" id={`checkbox-${id}`} name={id} {...otherProps} />
        <label htmlFor={`checkbox-${id}`}>{props.children}</label>
    </div>;
};

export default Checkbox;
