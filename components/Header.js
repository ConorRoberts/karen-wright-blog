import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = ({title="Karen Wright"}) => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.headerMain}>{title}</div> */}
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href={"/"}>
              <a className={styles.navButton}>HOME</a>
            </Link>
          </li>
          <li>
            <Link href={"/login"}>
              <a className={styles.navButton}>LOGIN</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
