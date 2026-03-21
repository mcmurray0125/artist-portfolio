export default function Container({ children }) {
  return (
    <div className="min-h-[calc(100vh-var(--spacing-header-total))] mt-header-total max-w-6xl mx-auto px-6">
      {children}
    </div>
  )
}