import Image from 'next/image'
import Link from 'next/link'

import styles from 'styles/NavBar.module.css'

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

const NavBar = () => {
  return (
      <header className={styles.logo}>
        <Link href='/'>
          <Image src={logo} alt='' width={397} height={61} layout='responsive' priority />
        </Link>
        <ul>
          {NAVBAR_LINKS.map(({ route, label }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </header>
  )
}

export default NavBar
