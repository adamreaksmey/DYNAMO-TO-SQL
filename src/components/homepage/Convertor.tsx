//

import React, { useState } from 'react'
import InConvert from './Concomponent/InConvert'
import ConvertTo from './Concomponent/ConvertTo'

const Convertor = () => {
  const [InConvertCetagories, setInConvertCetagories] = useState('sql')
  const [ConvertCetagories, setConvertCetagories] = useState('sql')
  const [convertStatus, setConvetStatus] = useState('')
  const props = {
    InConvertCetagories,
    setInConvertCetagories,
    ConvertCetagories,
    setConvertCetagories,
    convertStatus,
    setConvetStatus,
  }

  return (
    <div>
      <div className="sm:grid grid-cols-2 my-4 gap-3">
        <InConvert {...props} />
        <ConvertTo {...props} />
      </div>
    </div>
  )
}

export default Convertor
