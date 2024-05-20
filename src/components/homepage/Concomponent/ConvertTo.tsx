import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { Spinner } from '@nextui-org/spinner'
import React from 'react'
import Sql from './components/Sql'
import Csv from './components/csv'
import DynamoDb from './components/DynamoDb'
import { Button } from '@nextui-org/react'
import { FaDownload } from 'react-icons/fa'

type PropsType = {
  InConvertCetagories: string
  setInConvertCetagories: React.Dispatch<React.SetStateAction<string>>
  ConvertCetagories: string
  setConvertCetagories: React.Dispatch<React.SetStateAction<string>>
  convertStatus: string
  setConvetStatus: React.Dispatch<React.SetStateAction<string>>
}
const ConvertTo: React.FC<PropsType> = ({
  InConvertCetagories,
  setInConvertCetagories,
  ConvertCetagories,
  setConvertCetagories,
  convertStatus,
  setConvetStatus,
}) => {
  return (
    <>
      <div className="my-3 bg-blue-950 p-3 rounded-sm">
        <div>
          {convertStatus === 'success' ? (
            <div className="flex gap-2 items-center text-green-700 font-medium">
              <CheckCircleIcon className="text-green-700 w-[25px]" /> Success
              convert
            </div>
          ) : convertStatus === 'loading' ? (
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Spinner size="sm" color="primary" /> Loading...
            </div>
          ) : convertStatus === 'fail' ? (
            <div className="flex gap-2 items-center text-red-600 font-medium">
              <XMarkIcon className="w-[20px] h-[20px] bg-red-800 rounded-full text-white" />{' '}
              Fail convert
            </div>
          ) : (
            'None Convert'
          )}
        </div>
        <div className="my-3 h-[250px] sm:h-[300px] ">
          {ConvertCetagories == 'sql' ? (
            <Sql />
          ) : ConvertCetagories == 'csv' ? (
            <Csv />
          ) : ConvertCetagories == 'dynamodb' ? (
            <DynamoDb />
          ) : (
            'please select file formate'
          )}
        </div>
        <aside>
          {convertStatus !== 'success' ? (
            <Button
              color="primary"
              size="sm"
              className="rounded-full bg-gray-600 cursor-not-allowed text-black"
              disabled
            >
              <FaDownload />
              Download
            </Button>
          ) : (
            <Button color="primary" size="sm" className="rounded-full">
              <FaDownload />
              Download
            </Button>
          )}
        </aside>
      </div>
    </>
  )
}

export default ConvertTo
