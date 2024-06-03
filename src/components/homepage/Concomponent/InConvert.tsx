import React, { useContext, useEffect, useState } from 'react'
import { Button, Select, SelectItem, Spinner } from '@nextui-org/react'
import { dataitem } from '../data'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import Sql from './components/Sql'
import Csv from './components/Csv'
import DynamoDb from './components/DynamoDb'
import DisabledButton from '../button/DisabledButton'
import { FileContext } from '@/pages'

type FileContextType = {
  fileImport: () => void
}

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
  const { fileImport } = useContext<any>(FileContext)
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
          <DisabledButton title="Convert" />
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
            <DisabledButton title={'Upload file'} />
          ) : (
            <Button
              color="primary"
              variant="faded"
              size="sm"
              className="rounded-full bg-transparent text-[15px]"
              onClick={() => fileImport()}
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
