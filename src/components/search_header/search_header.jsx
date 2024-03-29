import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo((props) => {
  const inputRef = useRef();

  const keypress = (event) => {
    const charCode = event.charCode;
    if (charCode === 13) {
      props.onSearch(inputRef.current.value);
    }
  };

  const click = () => {
    props.onSearch(inputRef.current.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logoImg"></img>
        <h1 className={styles.title}>Chotube</h1>
      </div>
      <input
        className={styles.input}
        ref={inputRef}
        type="search"
        onKeyPress={keypress}
      />
      <button className={styles.button} onClick={click}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="searchImg"
        ></img>
      </button>
    </header>
  );
});

export default SearchHeader;
