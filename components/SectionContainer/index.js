function SectionContainer(props) {
  return (
    <>
      <section {...props}>{props.children}</section>
      <style jsx>{`
        section {
          display: flex;
          ${props.no_aligncenter || 'align-items: center;'}
          justify-content: center;
          width: 100%;
          height: var(--app-height);
          overflow: hidden;
          background-color: ${props.color || 'transparent'};
          flex-direction: ${props.f_direction || 'row'};
          padding: 6.25vw 0 2vw;
        }
      `}</style>
    </>
  )
}
export default SectionContainer
