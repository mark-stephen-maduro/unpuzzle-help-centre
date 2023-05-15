import React from 'react';
import styles from '../assets/styles/modules/Button.module.scss';
const Button = () => {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        I am button 2 - Press Me
      </button>
    </>
  );
};
export default Button;