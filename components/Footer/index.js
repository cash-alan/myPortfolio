import Link from 'next/link'

import {
  BsGithub as Github,
  BsLinkedin as Linkedin,
  BsStackOverflow as StackOverflow
} from 'react-icons/bs'

const SOCIAL_NETWORKS = [
  {
    url: 'https://github.com/heyalandev',
    icon: <Github />
  },
  {
    url: 'https://www.linkedin.com/in/alan-valencia/',
    icon: <Linkedin />
  },
  {
    url: 'https://stackoverflow.com/users/19041900/heyalandev',
    icon: <StackOverflow />
  }
]

function Footer () {
  return (
    <>
      <footer>
        <div>
          <p>
            Sino quedo claro me llamo Alan y con un hola puedes contactarme
            en...
          </p>
          <span>
            <a href='mailto:contact@alanvalencia.me'><span>contact@alanvalencia.me</span></a>
            <p>+346246154101</p>
          </span>
        </div>
        <div>
          <p>o sígueme en mis redes sociales</p>
          <div>
            {SOCIAL_NETWORKS.map(({ url, icon }) => (
              <Link key={url} href={url} legacyBehavior>
                <a>{icon}</a>
              </Link>
            ))}
          </div>
        </div>
        <span>© 2022 by Alan Valencia</span>
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 40%;
          background-color: var(--contact-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3vw;
          gap: 48px;
        }

        footer div {
          display: flex;
          gap: 0 8.3333vw;
        }

        p {
          font-family: var(--funny-font);
          font-size: 1.5em;
        }

        span a {
          font-size: 1.5em;
        }

        a {
          text-decoration: none;
          color: var(--text-color);
          font-size: 2em;
        }

        a:hover {
          color: var(--hover-color);
        }

        a span:hover {
          color: var(--hover-color);
          border-bottom: 1px solid;
        }

        footer > div:last-of-type {
          justify-content: space-between;
          align-items: center;
        }

        footer > span {
          align-self: end;
        }
      `}</style>
    </>
  )
}

export default Footer
