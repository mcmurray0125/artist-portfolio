import Header from "../components/Header"

const FIXED_HEADER = false;

export default function HomePageLayout({ children }) {
  return (
    <>
      <Header />
      <div className={`min-h-[calc(100vh-var(--spacing-header-total))] ${FIXED_HEADER && 'pt-header-total'}`}>
        {children}
      </div>
    </>
  )
}