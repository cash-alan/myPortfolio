import SectionContainer from 'components/SectionContainer'

function BigText ({ text, color, icon, direction = 'row' }) {
  return (
    <>
      <SectionContainer f_direction={direction}>
        {direction === 'column' && <div></div>}
        <div>{text}</div>
        <div className='big-svg'>{icon}</div>
      </SectionContainer>
      <style jsx>{`
        section {
          padding: 0 31px;
          margin-left: auto;
          margin-right: auto;
        }

        div {
          align-items: center;
          color: ${color};
          display: flex;
          fill: ${color};
          stroke: ${color};
          font-family: var(--big-font);
          font-size: 10vmax;
          font-weight: 800;
          height: 100%;
          justify-content: center;
          line-height: 0.892308;
          padding: 0 10vw;
          position: relative;
          text-align: center;
          user-select: none;
          white-space: pre-line;
          width: 80%;
        }

        div {
          width: auto;
          ${direction === 'row' && 'padding: 0 24px;'}
        }

        .big-svg :global(svg) {
          font-size: 0.5em;
          height: 1.2em;
          width: 1.2em;
          ${direction === 'column'
            ? 'transform: rotate(90deg)'
            : 'transform: rotate(0deg);'};
        }
      `}</style>
    </>
  )
}

export default BigText
