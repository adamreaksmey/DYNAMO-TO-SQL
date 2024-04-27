import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-3 sm:px-4">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
