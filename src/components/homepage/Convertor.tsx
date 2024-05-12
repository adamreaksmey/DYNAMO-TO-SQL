//

import React from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { dataitem } from './data'

const Convertor = () => {
  return (
    <div>
      <div>
        <div>
          <Select size={'md'} label="Select an animal" className="max-w-xs">
            {dataitem.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  )
}

export default Convertor
