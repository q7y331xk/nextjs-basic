import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './nav-bar.module.scss'

const NavBar: NextPage = () => {
    const router = useRouter()
    return (
        <>
            <nav>
                <Link href="/">
                    <a className={`${styles.navColor} ${styles.navBg}`}>
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === '/about' ? styles.nav : ""}>
                        About
                    </a>
                </Link>
            </nav>
        </>
    )
}

export default NavBar;