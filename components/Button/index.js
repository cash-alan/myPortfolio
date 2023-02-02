function Button ({ text, handleClick, colorHover, styles }) {
  return (
    <>
      <button onClick={handleClick} style={styles}>{text}</button>
      <style jsx>{`
        button {
          background-color: transparent;
          border-radius: 32px;
          border: var(--text-color) 2px solid;
          color: var(--text-color);
          font-family: var(--text-font);
          font-size: 24px;
          font-weight: bold;
          padding: 24px 16px;
          text-align: center;
        }

        button:hover {
          background-color: var(--text-color);
          color: ${colorHover || 'white'};
        }
      `}</style>
    </>
  )
}

export default Button
