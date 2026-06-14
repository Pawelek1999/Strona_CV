import { theme } from '../../content/theme'

function Tag({ children }) {
  return (
    <span className={theme.components.tag}>
      {children}
    </span>
  )
}

export default Tag
