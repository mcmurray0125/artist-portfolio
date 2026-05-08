import Header from "../components/Header"
import GridContainer from "../components/GridContainer"

export default function GridLayout({ children }) {
  return (
    <>
      <Header />
      <GridContainer>
        {children}
      </GridContainer>
    </>
  )
}