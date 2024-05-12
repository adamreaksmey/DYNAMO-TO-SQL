import { loggerMessageOption } from '@/data/configurations/setting'

const Logger = (args: any): void => {
  const { message, option = null } = args

  switch (option) {
    case 'error':
      console.error(`%c ${message}`)
      break
    case null:
      console.log(`%c ${message}`)
    default:
      console.log(`%c ${message}`, loggerMessageOption[option])
      break
  }
}

export { Logger }
