import Footer from "@/src/components/footer/footer"
import Header from "@/src/components/header/header"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
