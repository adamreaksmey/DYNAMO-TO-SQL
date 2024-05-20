import Link from 'next/link'
import Layout from './layout/Layout'
import { useRef, useState, createContext } from 'react'
import Convertor from '@/components/homepage/Convertor'
import Modifier from '@/components/homepage/Modifier'
import { Button } from '@nextui-org/react'

type FileContextType = {
  fileImport: () => void
}

export const FileContext = createContext<FileContextType | null>(null)

const index = () => {
  const [isConvertor, setIsConvertor] = useState(true)
  const fileRef = useRef<HTMLInputElement>(null)

  const fileImport = () => {
    if (fileRef.current) {
      fileRef.current.click()
    }
  }

  const contextValue = { fileImport }

  return (
    <FileContext.Provider value={contextValue}>
      <Layout>
        <div className="flex gap-4">
          <Button
            className={`h-[30px] ${isConvertor ? 'border-none bg-blue-500 text-white' : 'bg-transparent border text-blue-600'}`}
            onClick={() => setIsConvertor(true)}
          >
            Convertor
          </Button>
          <Button
            onClick={() => setIsConvertor(false)}
            color="primary"
            variant="faded"
            className={`h-[30px] bg-transparent border ${!isConvertor ? 'bg-blue-500 text-white border-none' : ''}`}
          >
            Modifier
          </Button>
        </div>
        {isConvertor ? <Convertor /> : <Modifier />}
        <input type="file" ref={fileRef} style={{ display: 'none' }} />
      </Layout>
    </FileContext.Provider>
  )
}

export default index
