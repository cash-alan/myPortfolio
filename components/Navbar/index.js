import Link from 'next/link'

import styles from 'styles/Navbar.module.css'

import Logo from 'components/Icons/Logo'

const NAVBAR_LINKS = [
  {
    route: '/',
    label: 'HOME'
  },
  {
    route: '/project',
    label: 'PROJECT'
  },
  {
    route: '/about',
    label: 'ABOUT'
  },
  {
    route: '/contact',
    label: 'CONTACT'
  }
]

const Navbar = () => {
  return (
    <>
      <header className={`${styles.nav} ${styles.navbar}`}>
        <Link href='/'>
          <Logo className={styles.logo}/>
        </Link>
        <navbar className={styles.links}>
          <ul>
            {NAVBAR_LINKS.slice(0, 3).map(({ route, label }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <Link href={NAVBAR_LINKS[3].route}>{NAVBAR_LINKS[3].label}</Link>
            </li>
          </ul>
        </navbar>
      </header>
    </>
  )
}

export default Navbar
