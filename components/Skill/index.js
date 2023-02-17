import { useState } from 'react'

const LEVEL_T_T = [
  'Principiante',
  'Bajo',
  'Intermedio',
  'Avanzado',
  'Profesional'
]

const STATUS_T_T = ['Work it', 'Learn', 'Practice', 'In pause']

const colors = {
  lightBlue: '#9ed9f0',
  blue: '#7eaec0',
  green: '#a6d1a0',
  yellow: '#f7e47c',
  orange: '#f7b282',
  red: '#ee7375',
  pink: '#f3a6cb',
  violet: '#c29cc8',
  black: '#565656',
  white: '#fefffe',
}

function Skill ({
  icon,
  title,
  level = 1,
  experience = 1,
  status,
  color,
  width,
  height,
  marginRight,
  ...props
}) {
  const [hover, setHover] = useState(false)

  return (
    <>
      <div
        {...props}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover
          ? (
          <>
            <p>{title}</p>
            <div>
              <p>Level: ({LEVEL_T_T[level]})</p>
              <div className='progress'>
                <div className='progress-value color-animation'></div>
              </div>
              <p>Experience: {experience} years</p>
              <p>Status: {STATUS_T_T[status]}</p>
            </div>
            <span>{icon}</span>
          </>
            )
          : (
          <>
            <span>{icon}</span>
            <p>{title}</p>
          </>
            )}
      </div>
      <style jsx>{`
        div {
          color: var(--about-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: ${width};
          height: ${height || 'auto'};
          font-size: 2em;
          ${hover &&
          `background-color: ${(hover && colors[color]) || '#fff'};
          padding: 10px;
          font-size: 1em;
          color: #fff;
          border-radius: 10%;`}
        }

        div div {
          padding: 0;
          margin: 0;
          text-align: right;
          align-items: flex-start;
          padding-left: 10px;
        }
        
        div p {
          user-select: none;
        }

        div .progress {
          display: flex;
          background: rgba(255, 255, 255, 0.4);
          justify-content: flex-start;
          position: relative;
          border-radius: 100px;
          align-items: center;
          padding: 0 5px;
          display: flex;
          height: 0.5em;
          width: 70%;
        }

        div .progress-value {
          animation: load 3s normal forwards, colorAnimation 1s infinite;
          box-shadow: 0 10px 40px -10px #fff;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 100px;
          background-image: linear-gradient(
            to right,
            ${colors.green},
            ${colors.violet},
            ${colors.blue},
            ${colors.lightBlue},
            ${colors.pink},
            ${colors.red}
          );
          height: 100%;
          width: 0;
        }

        div span {
          ${hover &&
          `align-self: flex-end;
          height: 2em;
          font-size: 2em;
          color: ${color};`}
        }

        @keyframes ${hover && 'colorAnimation'} {
          0% {
            background-image: linear-gradient(
              to right,
              ${colors.green},
              ${colors.violet},
              ${colors.blue},
              ${colors.lightBlue},
              ${colors.pink},
              ${colors.red}
            );
          }
          20% {
            background-image: linear-gradient(
              to right,
              ${colors.violet},
              ${colors.blue},
              ${colors.lightBlue},
              ${colors.pink},
              ${colors.red},
              ${colors.green}
            );
          }
          40% {
            background-image: linear-gradient(
              to right,
              ${colors.blue},
              ${colors.lightBlue},
              ${colors.pink},
              ${colors.red},
              ${colors.green},
              ${colors.violet}
            );
          }
          60% {
            background-image: linear-gradient(
              to right,
              ${colors.lightBlue},
              ${colors.pink},
              ${colors.red},
              ${colors.green},
              ${colors.violet},
              ${colors.blue}
            );
          }
          100% {
            background-image: linear-gradient(
              to right,
              ${colors.pink},
              ${colors.red},
              ${colors.green},
              ${colors.violet},
              ${colors.blue},
              ${colors.lightBlue}
            );
          }
        }

        @keyframes ${hover && 'load'} {
          0% {
            width: 0;
          }
          100% {
            width: ${((level + 1) * 100) / LEVEL_T_T.length}%;
          }
        }
      `}</style>
      <style jsx global>{`
        span svg {
          ${hover && 'color: var(--background-color);'}
        }
      `}</style>
    </>
  )
}

export default Skill
