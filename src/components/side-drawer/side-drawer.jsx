import React, { useState } from "react";
import styles from "./side-drawer.module.scss";

const SideDrawer = () => {
  const [isOpen, setOpen] = useState(false);

  const changeDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`${!isOpen && styles.__close} ${styles.drawer}`}>
      <div className={styles.content}>
        <button onClick={changeDrawer}>X</button>
      </div>
    </div>
  );
};

export default SideDrawer;
