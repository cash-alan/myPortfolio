function SectionContainer ({ children, color }) {
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
        }
      `}</style>
    </>
  )
}
export default SectionContainer
