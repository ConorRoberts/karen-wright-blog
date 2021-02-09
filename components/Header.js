import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

import { Icon } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";

const Header = ({ user }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href={"/"}>
              <a className={styles.navButton}>
                <Icon as={IoHome} />
              </a>
            </Link>
          </li>
          <li className={styles.rightSide}>
            <ul>
              <li>
                {user ? (
                  <Link href={"/admin/write"}>
                    <a className={styles.navButton}>NEW POST</a>
                  </Link>
                ) : null}
              </li>
              <li>
                {user ? (
                  <Link href={"/api/logout"}>
                    <a className={styles.navButton}>LOGOUT</a>
                  </Link>
                ) : (
                  <Link href={"/login"}>
                    <a className={styles.navButton}>LOGIN</a>
                  </Link>
                )}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
