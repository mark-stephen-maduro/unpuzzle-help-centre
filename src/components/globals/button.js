import React from 'react';
import styles from '../../assets/styles/modules/button.module.scss';

const Button = ({ children, style, onClick }) => {
  return (
    <button className={styles.btn} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;