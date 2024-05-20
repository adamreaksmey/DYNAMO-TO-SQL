import React, { useEffect, useState } from 'react'
import { Button, Select, SelectItem, Spinner } from '@nextui-org/react'
import { dataitem } from '../data'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import Sql from './components/Sql'
import Csv from './components/csv'
import DynamoDb from './components/DynamoDb'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/16/solid'

const InConvert = () => {
  const [InConvertCetagories, setInConvertCetagories] = useState('sql')
  const [ConvertCetagories, setConvertCetagories] = useState('sql')
  const [convertStatus, setConvetStatus] = useState('')

  return (
    <div>
      <main className="sm:grid grid-cols-2 my-4 gap-3">
        <section className="my-3 bg-blue-950 p-3 rounded-sm">
          <div className="flex items-center gap-4">
            <Select
              required
              placeholder="Select one"
              className="w-[125px] font-bold"
              defaultSelectedKeys={['SQL']}
              radius="full"
              color="success"
              size={'sm'}
              onChange={(e) =>
                setInConvertCetagories(e.target.value.toLocaleLowerCase())
              }
            >
              {dataitem.map(({ title }) => (
                <SelectItem key={title} value={title} className="text-black">
                  {title}
                </SelectItem>
              ))}
            </Select>
            <FaArrowRight />
            <Select
              placeholder="Select one"
              className="w-[125px] font-bold"
              defaultSelectedKeys={['SQL']}
              radius="full"
              color="success"
              size={'sm'}
              onChange={(e) =>
                setConvertCetagories(e.target.value.toLocaleLowerCase())
              }
            >
              {dataitem.map(({ title }) => (
                <SelectItem key={title} value={title} className="text-black">
                  {title}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="my-3 h-[250px] sm:h-[300px]">
            {InConvertCetagories == 'sql' ? (
              <Sql />
            ) : InConvertCetagories == 'csv' ? (
              <Csv />
            ) : InConvertCetagories == 'dynamodb' ? (
              <DynamoDb />
            ) : (
              'please select file formate'
            )}
          </div>
          <aside className="flex gap-3">
            {ConvertCetagories === '' ||
            InConvertCetagories === '' ||
            ConvertCetagories === InConvertCetagories ? (
              <Button
                variant="solid"
                size="sm"
                className="rounded-full text-[15px] bg-gray-600 cursor-not-allowed"
                disabled
              >
                Convert
              </Button>
            ) : (
              <Button
                color="primary"
                variant="solid"
                size="sm"
                className="rounded-full text-[15px]"
              >
                Convert
              </Button>
            )}
            <Button
              color="primary"
              variant="faded"
              size="sm"
              className="rounded-full bg-transparent text-[15px]"
            >
              Upload file
            </Button>
          </aside>
        </section>
        {/* part two */}
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
      </main>
    </div>
  )
}

export default InConvert
