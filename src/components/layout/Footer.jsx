const socials = [
  {
    label: 'Discord',
    href: 'https://discord.gg/BMTmMMAwUc',
    icon: (
      <svg className="w-5 h-5" viewBox="0 -28.5 256 256" fill="currentColor">
        <path d="M216.856 16.597C200.285 8.843 182.566 3.208 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-38.203-2.961-57.533 0-1.832-4.401-4.55-9.933-6.846-14.046C73.353 3.208 55.613 8.864 39.042 16.638 5.618 67.147-3.443 116.401 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193 5.215-7.178 9.866-14.808 13.873-22.849-7.631-2.9-14.94-6.478-21.836-10.632 1.832-1.357 3.624-2.776 5.356-4.237 41.752 19.702 87.89 19.702 129.51 0 1.751 1.46 3.543 2.88 5.355 4.237-6.926 4.174-14.255 7.753-21.886 10.653 4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36zM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:streamwisegg@gmail.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 31 31" fill="none" stroke="currentColor">
        <path d="M27.82 6.27L15.32 16.69 2.82 6.27h25z" fill="currentColor" />
        <path d="M2.82 6.27l12.5 10.42 12.5-10.42M2.82 6.27v17.92h25V6.27M2.82 6.27h25" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/streamwise',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 30 31" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M28 28.606h-5.2v-9.098c0-2.496-1.101-3.889-3.076-3.889-2.149 0-3.424 1.451-3.424 3.889v9.098h-5.2V11.706h5.2v1.9s1.632-2.862 5.308-2.862c3.678 0 6.392 2.244 6.392 6.888v10.974zM5.175 9.004A3.175 3.175 0 012 5.804a3.175 3.175 0 013.175-3.198 3.173 3.173 0 013.174 3.198 3.174 3.174 0 01-3.174 3.2zM2 28.606h6.5V11.706H2v16.9z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/streamwisegg',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 31 31" fill="none" stroke="currentColor">
        <rect x="1.65" y="2.11" width="27" height="27" rx="3.5" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="15.15" cy="15.61" r="5.999" strokeWidth="3" />
        <circle cx="23.33" cy="7.39" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center gap-6">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Streamwise. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-500">
          Made with <span className="text-red-500">&hearts;</span> in Montreal
        </p>
      </div>
    </footer>
  )
}
