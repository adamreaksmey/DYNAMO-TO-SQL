import Link from 'next/link'
import Layout from './Layout'
import { useState } from 'react'
import Convertor from '@/components/homepage/Convertor'
import Modifier from '@/components/homepage/Modifier'
import { Button } from '@nextui-org/react'

const index = () => {
  const [isConvertor, setIsConvertor] = useState(true)

  return (
    <Layout>
      <div className="flex gap-4">
        <Button
          className={`h-[30px] ${isConvertor ? 'border-none bg-blue-500 text-white' : 'bg-transparent border-1 text-blue-600'}`}
          onClick={() => setIsConvertor(true)}
        >
          Convertor
        </Button>
        <Button
          onClick={() => setIsConvertor(false)}
          color="primary"
          variant="faded"
          className={`h-[30px] bg-transparent border-1 ${!isConvertor ? 'bg-blue-500 text-white border-none' : ''}`}
        >
          Modifier
        </Button>
      </div>
      {isConvertor ? <Convertor /> : <Modifier />}
    </Layout>
  )
}

export default index
