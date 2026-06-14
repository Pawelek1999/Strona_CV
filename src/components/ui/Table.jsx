import { cx, theme } from '../../content/theme'

function Table({ columns, rows, getRowKey, variant = 'default' }) {
  const variants = {
    default: {
      wrapper: cx(theme.colors.border.default, theme.shadow.card),
      head: 'bg-zinc-50 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300',
      divider: 'divide-zinc-200 dark:divide-zinc-800',
      cell: 'text-zinc-800 dark:text-zinc-300',
      row: 'hover:bg-zinc-50 dark:hover:bg-zinc-900/70',
    },
    accent: {
      wrapper: cx('border-emerald-800 dark:border-emerald-600', theme.shadow.accent),
      head: 'bg-zinc-50 text-slate-900 dark:bg-zinc-900 dark:text-zinc-100',
      divider: 'divide-emerald-800 dark:divide-emerald-600',
      cell: 'text-slate-800 dark:text-zinc-300',
      row: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/30',
    },
  }

  const styles = variants[variant] ?? variants.default

  return (
    <div className={cx('overflow-x-auto rounded-lg border bg-white transition-colors dark:bg-zinc-900', styles.wrapper)}>
      <table className="w-full border-collapse text-left text-sm">
        <thead className={styles.head}>
          <tr>
            {columns.map((column) => (
              <th
                className={`border border-inherit px-4 py-3 font-semibold ${column.headerClassName ?? ''}`}
                key={column.key}
                scope="col"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={styles.divider}>
          {rows.map((row, rowIndex) => (
            <tr
              className={`transition-colors ${styles.row}`}
              key={getRowKey ? getRowKey(row) : rowIndex}
            >
              {columns.map((column) => (
                <td
                  className={`border border-inherit px-4 py-3 ${styles.cell} ${column.cellClassName ?? ''}`}
                  key={column.key}
                >
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
