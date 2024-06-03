import { Button } from '@nextui-org/react'
import React from 'react'

type DisabledButtonType = {
  title: string
}

const DisabledButton: React.FC<DisabledButtonType> = ({ title }) => {
  return (
    <Button
      color="primary"
      variant="faded"
      size="sm"
      className="rounded-full bg-gray-600 text-black text-[15px] cursor-not-allowed border-none"
      disabled
    >
      {title}
    </Button>
  )
}

export default DisabledButton
