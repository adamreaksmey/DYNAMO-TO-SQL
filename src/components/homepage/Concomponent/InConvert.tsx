import React, { useEffect, useState } from 'react'
import { Button, Select, SelectItem, Spinner } from '@nextui-org/react'
import { dataitem } from '../data'
import { FaArrowRight } from 'react-icons/fa'
import Sql from './components/Sql'
import Csv from './components/csv'
import DynamoDb from './components/DynamoDb'
import { CheckCircleIcon } from '@heroicons/react/16/solid'

const InConvert = () => {
  const [InConvertCetagories, setInConvertCetagories] = useState('sql')
  const [ConvertCetagories, setConvertCetagories] = useState('sql')
  const [isSuccess, setIsSuccess] = useState(true)

  return (
    <div>
      <main className="grid grid-cols-2 my-4 gap-3">
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
          <div>
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
          {isSuccess ? (
            <div className="flex gap-2 items-center text-green-700">
              <CheckCircleIcon
                className="text-green-700"
                style={{ width: '25px' }}
              />{' '}
              success convert
            </div>
          ) : (
            <Spinner size="sm" color="danger" />
          )}
          <div>
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
        </div>
      </main>
    </div>
  )
}

export default InConvert
