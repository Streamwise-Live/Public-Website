export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-glass font-semibold text-sm transition-all duration-200 cursor-pointer'
  const variants = {
    primary: 'bg-cobalt hover:bg-cobalt-dark text-white shadow-lg shadow-cobalt/25 hover:shadow-cobalt/40',
    outline: 'border border-cobalt/50 text-cobalt hover:bg-cobalt/10 hover:border-cobalt',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
