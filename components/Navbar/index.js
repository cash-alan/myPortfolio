import Image from 'next/image'
import Link from 'next/link'

import styles from 'styles/Navbar.module.css'

import logo from 'design/logo/logo-project_Mesa de trabajo 1 copia.png'

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
      <header className={styles.nav}>
        <navbar className={styles.navbar}>
          <div>
            <div>
              <Link href='/'>
                <Image src={logo} alt='' priority />
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <Link href={NAVBAR_LINKS[0].route}>
                  {NAVBAR_LINKS[0].label}
                </Link>
              </li>
              <li>
                <Link href={NAVBAR_LINKS[1].route}>
                  {NAVBAR_LINKS[1].label}
                </Link>
              </li>
              <li>
                <Link href={NAVBAR_LINKS[2].route}>
                  {NAVBAR_LINKS[2].label}
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={NAVBAR_LINKS[3].route}>
                  {NAVBAR_LINKS[3].label}
                </Link>
              </li>
            </ul>
          </div>
        </navbar>
      </header>
    </>
  )
}

export default Navbar
