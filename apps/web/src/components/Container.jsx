const FIXED_HEADER = false;

export default function Container({ children }) {
  return (
    <div className={`mx-auto min-h-[calc(100vh-var(--spacing-header-total))] ${FIXED_HEADER && 'pt-header-total'} max-w-7xl px-6 pb-10`}>
      {children}
    </div>
  )
}