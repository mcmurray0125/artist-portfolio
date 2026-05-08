export default function GridContainer({ children }) {
  return (
    <div className="mx-auto min-h-[calc(100vh-var(--spacing-header-total))] pt-header-total max-w-8xl px-6">
      {children}
    </div>
  )
}