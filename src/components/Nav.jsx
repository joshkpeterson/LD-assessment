import React from 'react'
import styles from "../styles/nav.module.scss"

function Nav() {
  return (
    <nav className={styles.navContainer} 
      role="navigation" aria-label="Main Navigation">
      <h1>Project Overview</h1>
    </nav>
  )
}

export default Nav