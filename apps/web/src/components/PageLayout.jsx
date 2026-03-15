import Header from "./Header"
import Container from "./Container"

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}