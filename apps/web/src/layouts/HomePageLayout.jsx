import Header from "../components/Header"

export default function HomePageLayout({ children }) {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-var(--spacing-header-total))] pt-header-total">
        {children}
      </div>
    </>
  )
}