import React, { useEffect, useState } from 'react'
import { Button, Select, SelectItem, Spinner } from '@nextui-org/react'
import { dataitem } from '../data'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import Sql from './components/Sql'
import Csv from './components/csv'
import DynamoDb from './components/DynamoDb'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/16/solid'

type PropsType = {
  InConvertCetagories: string
  setInConvertCetagories: React.Dispatch<React.SetStateAction<string>>
  ConvertCetagories: string
  setConvertCetagories: React.Dispatch<React.SetStateAction<string>>
  convertStatus: string
  setConvetStatus: React.Dispatch<React.SetStateAction<string>>
}

const InConvert: React.FC<PropsType> = ({
  InConvertCetagories,
  setInConvertCetagories,
  ConvertCetagories,
  setConvertCetagories,
  convertStatus,
  setConvetStatus,
}) => {
  return (
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
        <div>
          {convertStatus === 'loading' ? (
            <Button
              color="primary"
              variant="faded"
              size="sm"
              className="rounded-full bg-gray-800 text-black text-[15px] cursor-not-allowed"
              disabled
            >
              Upload file
            </Button>
          ) : (
            <Button
              color="primary"
              variant="faded"
              size="sm"
              className="rounded-full bg-transparent text-[15px]"
            >
              Upload file
            </Button>
          )}
        </div>
      </aside>
    </section>
  )
}

export default InConvert
