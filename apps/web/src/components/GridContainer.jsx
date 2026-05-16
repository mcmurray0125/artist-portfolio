const FIXED_HEADER = false;

export default function GridContainer({ children }) {
  return (
    <div className={`mx-auto min-h-[calc(100vh-var(--spacing-header-total))] ${FIXED_HEADER && 'pt-header-total'} max-w-8xl px-6`}>
      {children}
    </div>
  )
}