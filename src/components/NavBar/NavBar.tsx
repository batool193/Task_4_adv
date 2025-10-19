import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState } from "react";
interface NavLinkItem {
    title: string;
    path: string;
}
const navLinks: Array<NavLinkItem> = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "New Property", path: "/property" },
    { title: "Contact", path: "/contact" },
];
const NavBar = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <nav
                className={styles.nav}
                {...(open && { style: { background: "var(--white-color)" } })}
            >
                <img src="/assets/img/logo.svg" className={styles.logo} />
                <div className={open ? ` ${styles.open}` : `${styles.links} `}>
                    <div>
                        {navLinks.map((link) => (
                            <NavLink to={link.path} onClick={() => setOpen(false)}>
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                    <button className={styles.loginBtn}>Login</button>
                </div>
                <button className={styles.navButton} onClick={() => setOpen(!open)}>
                    <img
                        src="/assets/img/bar.svg"
                        {...(open && { style: { display: "none" } })}
                    />

                    {open && (
                        <>
                            <img src="/assets/img/close.svg" />
                        </>
                    )}
                </button>
            </nav>
        </>
    );
};

export default NavBar;
