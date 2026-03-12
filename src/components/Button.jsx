function Button({ children, variante = "primary", onClick }) {
  return (
    <button className={`btn btn--${variante}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button