'use client';

import Link from "next/link"
import styles from "./navbar.module.css"
import {useState} from "react";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About Us</Link>
        </div>
        <button className={styles.menuButton} onClick={()=>setOpen(prev=>!prev)}>Menu</button>
        {
            open && (
                <div className={styles.mobileLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About Us</Link>
                </div>
            )
        }
    </div>
    );
}

export default Navbar;