import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
