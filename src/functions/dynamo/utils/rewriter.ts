import fs from 'fs'
import path from 'path'

/**
 * F - 00002 | The dynamo re-writer function.
 * @param {*} filePath
 * @param {*} fileContent
 *
 * The following function writes all the modified data to a directory.
 */
const reWriter = (filePath: string, fileContent: string): void => {
  try {
    console.log(`${filePath} file found! re-writing data!`)
    fs.writeFileSync(filePath, fileContent)
    console.log(`Content successfully written to ${filePath}`)
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      // Create the parent directory if it doesn't exist
      fs.mkdirSync(path.dirname(filePath), { recursive: true })

      // Write the file again
      fs.writeFileSync(filePath, fileContent)
      console.log('File created successfully at', filePath)
    } else {
      console.error('Error occurred while writing the file:', error)
    }
  }
}

export default reWriter
