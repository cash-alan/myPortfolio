function Button ({ text, handleClick, colorHover, styles }) {
  return (
    <>
      <button onClick={handleClick} style={styles}>{text}</button>
      <style jsx>{`
        button {
          background-color: transparent;
          border-radius: 32px;
          border: #707070 2px solid;
          color: #707070;
          font-family: var(--text-font);
          font-size: 24px;
          font-weight: bold;
          padding: 24px 16px;
          text-align: center;
        }

        button:hover {
          background-color: #707070;
          color: ${colorHover || 'white'};
        }
      `}</style>
    </>
  )
}

export default Button
