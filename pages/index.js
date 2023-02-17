import SectionContainer from 'components/SectionContainer'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from 'styles/Home.module.css'
import explosion from 'design/avatar-image/AvatarPhotos/Chill-2.png'

import ArrowRare from 'components/Icons/ArrowRare'
import Arrow from 'components/Icons/Arrow'

import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'

import Button from 'components/Button'
import Footer from 'components/Footer'
import SkillSection from 'components/SkillSection'
import BigText from 'components/BigText'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alan Valencia</title>
        <meta name='description' content='Genera  ted by create next app' />
        <link rel='icon' href='/favicons/home.svg' />
      </Head>

      <main className={styles.home}>
        <SectionContainer className={styles.slider}>
          <div className={styles['content-images-slider']}>
            <div className={styles['image-slider']}>
              <Image src={explosion} alt='' fill />
            </div>
            <div className={styles['text-slider']}>
              <div></div>
              <div>
                <div className={styles['slider-text']}>
                  <div></div>
                  <div>
                    <div className={styles['s-text']}>
                      <h1>Hello, I&apos;m Alan Smith Valencia Izquierdo</h1>
                    </div>
                  </div>
                  <div className={styles.links}>
                    <div className={styles['s-links']}>
                      <Link href='/contact' legacyBehavior>
                        <a>
                          <GoMarkGithub />
                        </a>
                      </Link>
                      <Link href='/contact' legacyBehavior>
                        <a>
                          <BsLinkedin />
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href='/project' className={styles['p-link']}>
                        All Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        <BigText
          text={'FEATURED PROJECTS'}
          color='var(--project-color)'
          icon={<ArrowRare />}
          direction='column'
        />

        <SectionContainer
          color='var(--nose-color)'
          f_direction='column'
          className={styles['first-project']}
        >
          <SectionContainer className={styles['fp-imgs']} no_aligncenter='true'>
            <SectionContainer f_direction='column' no_aligncenter='true'>
              <div className={styles['fp-img']}></div>
              <div className={styles['fp-description']}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  enim atque nesciunt illum voluptates, quam voluptatem neque
                  deserunt fugiat, mollitia ea doloremque a aperiam commodi
                  magni pariatur non! Fugiat, unde! Ab saepe dolorem corrupti
                  officiis deserunt nihil ea animi placeat, aperiam ducimus cum
                  ad error fugiat sit autem deleniti, veritatis neque
                  accusantium maxime! Ducimus aperiam eius obcaecati ex dolores
                  laboriosam.
                </p>
              </div>
            </SectionContainer>
            <div className={styles['fp-img']}></div>
          </SectionContainer>

          <div className={styles['fp-text']}>
            <div>
              <span>Lorem ipsum dolor sit amet</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet</span>
              <span>left</span>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer
          color='var(--contact-color)'
          f_direction='column'
          className={styles['second-project']}
        >
          <SectionContainer
            f_direction='row-reverse'
            className={styles['fp-imgs']}
            no_aligncenter='true'
          >
            <SectionContainer
              f_direction='column-reverse'
              no_aligncenter='true'
            >
              <div className={styles['fp-img']}></div>
              <div className={styles['fp-description']}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  enim atque nesciunt illum voluptates, quam voluptatem neque
                  deserunt fugiat, mollitia ea doloremque a aperiam commodi
                  magni pariatur non! Fugiat, unde! Ab saepe dolorem corrupti
                  officiis deserunt nihil ea animi placeat, aperiam ducimus cum
                  ad error fugiat sit autem deleniti, veritatis neque
                  accusantium maxime! Ducimus aperiam eius obcaecati ex dolores
                  laboriosam.
                </p>
              </div>
            </SectionContainer>
            <div className={styles['fp-img']}></div>
          </SectionContainer>

          <div className={styles['fp-text']}>
            <div>
              <span>Lorem ipsum dolor sit amet</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet</span>
              <span>left</span>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer
          color='var(--project-color)'
          f_direction='column'
          className={styles['third-project']}
        >
          <div className={styles['fp-text']}>
            <div>
              <span>Lorem ipsum dolor sit amet</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet</span>
            </div>
          </div>
          <SectionContainer f_direction='column' no_aligncenter='true'>
            <div className={styles['fp-img']}></div>
            <SectionContainer className={styles['fp-description']}>
              <div>
                <h2>Lorem ipsum dolor sit amet</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  enim atque nesciunt illum voluptates, quam voluptatem neque
                  deserunt fugiat, mollitia ea doloremque a aperiam commodi
                  magni pariatur non! Fugiat, unde! Ab saepe dolorem corrupti
                  officiis deserunt nihil ea animi placeat, aperiam ducimus cum
                  ad error fugiat sit autem deleniti, veritatis neque
                  accusantium maxime! Ducimus aperiam eius obcaecati ex dolores
                  laboriosam.
                </p>

                <span>left</span>
              </div>
            </SectionContainer>
          </SectionContainer>
        </SectionContainer>

        <SkillSection />

        <SectionContainer
          f_direction='column'
          color='var(--about-color)'
          className={styles['meet-me']}
        >
          <SectionContainer className={styles['meetme-text']}>
            <div>
              <p>Espero que podamos</p>
              <p>relación laboral</p>
            </div>
            <div className={styles['meetme-img']}></div>
            <div>
              <p>desarrollar una</p>
              <p>próspera y productiva</p>
            </div>
          </SectionContainer>
          <div>
            <Button text='Download CV' />
          </div>
        </SectionContainer>

        <BigText
          text='Meet me more'
          color='var(--about-color)'
          icon={<Arrow />}
          direction='row'
        />

        <Footer />
      </main>
    </>
  )
}

