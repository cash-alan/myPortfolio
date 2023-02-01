function SectionContainer ({ children, color, f_direction }) {
  return (
    <>
      <section>{children}</section>
      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: ${color || 'transparent'};
          flex-direction: ${f_direction || 'row'};
        }
      `}</style>
    </>
  )
}
export default SectionContainer
