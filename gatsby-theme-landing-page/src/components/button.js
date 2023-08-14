import * as React from "react";
import isAbsoluteURL from "is-absolute-url";
import * as styles from "./button.module.css";

export default function Button({ href, text, children }) {
  if (isAbsoluteURL(href)) {
    return (
      <>
        <a className={styles.buttonPrimary} href={href}>
          {text || children}
        </a>

        <a
          className={styles.buttonSecondary}
          href="https://t.me/smokeonthetower"
        >
          Telegram
        </a>
      </>
    );
  }
}
