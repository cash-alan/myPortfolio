import SectionContainer from 'components/SectionContainer'
import Skill from 'components/Skill'
import {
  SiApollographql,
  SiCss3,
  SiDeno,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPython,
  SiReact,
  SiTypescript
} from 'react-icons/si'

const TECHNOLOGIES_TOOLS = [
  {
    title: 'Javascript',
    icon: <SiJavascript />,
    level: 3,
    experience: '7',
    status: 0,
    color: 'yellow'
  },
  {
    title: 'HTML',
    icon: <SiHtml5 />,
    level: 4,
    experience: '8',
    status: 0,
    color: 'orange'
  },
  {
    title: 'CSS',
    icon: <SiCss3 />,
    level: 3,
    experience: '8',
    status: 3,
    color: 'lightBlue'
  },
  {
    title: 'Git',
    icon: <SiGit />,
    level: 3,
    experience: '4',
    status: 0,
    color: 'orange'
  },
  {
    title: 'Typescript',
    icon: <SiTypescript />,
    level: 1,
    experience: '2',
    status: 2,
    color: 'blue'
  },
  {
    title: 'React',
    icon: <SiReact />,
    level: 2,
    experience: '2',
    status: 0,
    color: 'blue'
  },
  {
    title: 'Node JS',
    icon: <SiNodedotjs />,
    level: 2,
    experience: '2',
    status: 2,
    color: 'green'
  },
  {
    title: 'React',
    icon: <SiReact />,
    level: 2,
    experience: '2',
    status: 0,
    color: 'blue'
  },
  {
    title: 'Python',
    icon: <SiPython />,
    level: 1,
    experience: '1',
    status: 4,
    color: 'yellow'
  },
  {
    title: 'PHP',
    icon: <SiPhp/>,
    level: 0,
    experience: '1',
    status: 4,
    color: 'violet'
  },
  {
    title: 'Bash',
    icon: <SiGnubash />,
    level: 3,
    experience: '10',
    status: 3,
    color: 'black'
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb />,
    level: 1,
    experience: '2',
    status: 3,
    color: 'green'
  },
  {
    title: 'Mongoose',
    icon: <SiMongodb />,
    level: 2,
    experience: '2',
    status: 3,
    color: 'green'
  },
  {
    title: 'Express',
    icon: <SiExpress />,
    level: 3,
    experience: '2',
    status: 0,
    color: 'black'
  },
  {
    title: 'NPM',
    icon: <SiNpm />,
    level: 1,
    experience: '4',
    status: 0,
    color: 'red'
  },
  {
    title: 'GraphQl',
    icon: <SiGraphql />,
    level: 2,
    experience: '2',
    status: 2,
    color: 'pink'
  },
  {
    title: 'ApolloClient',
    icon: <SiApollographql />,
    level: 2,
    experience: '2',
    status: 2,
    color: 'black'
  },
  {
    title: 'MySQL',
    icon: <SiMysql />,
    level: 0,
    experience: '1',
    status: 2,
    color: 'yellow'
  },
  {
    title: 'Docker',
    icon: <SiDocker />,
    level: 0,
    experience: '1',
    status: 2,
    color: 'blue'
  },
  {
    title: 'Deno',
    icon: <SiDeno />,
    level: 2,
    experience: '2',
    status: 2,
    color: 'black'
  },
  {
    title: 'Next JS',
    icon: <SiNextdotjs />,
    level: 2,
    experience: '1',
    status: 0,
    color: 'black'
  },
  {
    title: 'Github',
    icon: <SiGithub />,
    level: 3,
    experience: '2',
    status: 0,
    color: 'black'
  }
]

const SkillSection = () => {
  const skillWidth = '20.8333vw'
  const skillHeight = '11.1111vw'

  const skillsHalf = TECHNOLOGIES_TOOLS.length / 2

  const skillsUp = TECHNOLOGIES_TOOLS.slice(0, Math.floor(skillsHalf))
  const skillsDown = TECHNOLOGIES_TOOLS.slice(Math.floor(skillsHalf))

  return (
    <>
      <SectionContainer f_direction='column'>
        <div>
          <h2>TECHNOLOGIES AND TOOLS</h2>
        </div>
        <SectionContainer f_direction='column'>
          <div className='skills'>
            <div className='skills-track left'>
              {skillsUp.map(
                ({ icon, title, level, color, experience, status }) => (
                  <Skill
                    key={title}
                    icon={icon}
                    title={title}
                    level={level}
                    color={color}
                    experience={experience}
                    status={status}
                    width={skillWidth}
                    height={skillHeight}
                  />
                )
              )}
              {skillsUp.map(
                ({ icon, title, level, color, experience, status }) => (
                  <Skill
                    key={`${title}_copy`}
                    icon={icon}
                    title={title}
                    level={level}
                    color={color}
                    experience={experience}
                    status={status}
                    width={skillWidth}
                    height={skillHeight}
                  />
                )
              )}
            </div>
            <div className='skills-track right'>
              {skillsDown.map(
                ({ icon, title, level, color, experience, status }) => (
                  <Skill
                    key={title}
                    icon={icon}
                    title={title}
                    level={level}
                    color={color}
                    experience={experience}
                    status={status}
                    width={skillWidth}
                    height={skillHeight}
                  />
                )
              )}
              {skillsDown.map(
                ({ icon, title, level, color, experience, status }) => (
                  <Skill
                    key={`${title}_copy`}
                    icon={icon}
                    title={title}
                    level={level}
                    color={color}
                    experience={experience}
                    status={status}
                    width={skillWidth}
                    height={skillHeight}
                  />
                )
              )}
            </div>
          </div>
        </SectionContainer>
      </SectionContainer>
      <style jsx>{`
        .skills {
          overflow: hidden;
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skills .skills-track {
          display: flex;
          gap: 1.5vw;
        }

        .skills .left {
          animation: left 40s linear infinite;
          width: calc(${skillWidth} * ${skillsUp.length * 2});
        }

        .skills .right {
          animation: right 40s linear infinite;
          width: calc(${skillWidth} * ${skillsDown.length * 2});
        }

        .skills .skills-track:hover {
          animation-play-state: paused;
        }

        @keyframes left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc((-${skillWidth} * ${skillsUp.length})));
          }
        }

        @keyframes right {
          0% {
            transform: translateX(
              calc((-${skillWidth} * ${skillsDown.length}))
            );
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}

export default SkillSection
