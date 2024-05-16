//

import React from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { dataitem } from './data'

const Convertor = () => {
  return (
    <div>
      <div>
        <div className="my-3">
          <Select
            label="Favorite Animal"
            placeholder="what do you convert to?"
            labelPlacement="outside"
            className="w-[150px]"
            disableSelectorIconRotation
            radius={'full'}
          >
            {dataitem.map(({ title }) => (
              <SelectItem key={title} value={title} className="text-black">
                {title}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  )
}

export default Convertor
