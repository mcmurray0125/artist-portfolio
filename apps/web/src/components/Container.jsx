export default function Container({ children }) {
  return (
    <div className="mx-auto min-h-[calc(100vh-var(--spacing-header-total))] mt-header-total max-w-7xl px-6">
      {children}
    </div>
  )
}