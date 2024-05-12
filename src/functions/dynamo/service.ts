import * as fs from 'fs'
import * as path from 'path'
import { Logger } from '../utils/functions'

export class DynamoService {
  constructor() {}

  /**
   * F - 00001 | The Dynamo parser function.
   *
   * The following function converts and parse DynamoDB json into a proper
   * JavaScript json.
   */
  public formatDynamoDBJson(
    inputFilename: string,
    outputFilename: string
  ): void {
    try {
      Logger({
        message: 'Correcting your dynamoJSON file to proper json :) ',
        option: 'progress',
      })

      let content: string = fs.readFileSync(inputFilename, { encoding: 'utf8' })
      // Replace all instances of "}\n" with "},\n" to separate the objects correctly
      let formattedContent: string = content.replace(/\}\n/g, '},\n')
      // Remove any trailing comma which may exist after the last JSON object
      formattedContent = formattedContent.replace(/,\n$/, '\n')

      // Enclose the entire content within square brackets to form a valid JSON array
      if (DynamoService.contentIsArray(formattedContent)) {
        formattedContent = `[${formattedContent.trim().replace(/,$/, '')}]`
      }

      // Save the formatted content to a new file
      fs.writeFileSync(outputFilename, formattedContent, { encoding: 'utf8' })

      Logger({
        message: 'File has been successfully corrected & formatted and saved.',
        option: 'success',
      })
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        Logger({
          message: `File ${inputFilename} not found.`,
          option: 'danger',
        })
      } else {
        Logger({
          message: `An error occurred: ${error}`,
          option: 'error',
        })
      }
    }
  }

  /**
   * F - 00002 | The dynamo re-writer function.
   *
   * The following function writes all the modified data to a directory.
   */
  public reWriter(filePath: string, fileContent: string): void {
    try {
      Logger({
        message: `${filePath} file found! re-writing data!`,
        option: 'progress',
      })

      fs.writeFileSync(filePath, fileContent)

      Logger({
        message: `Content successfully written to ${filePath}`,
        option: 'success',
      })
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        // Create the parent directory if it doesn't exist
        fs.mkdirSync(path.dirname(filePath), { recursive: true })

        // Write the file again
        fs.writeFileSync(filePath, fileContent)
        Logger({
          message: `File created successfully at ${filePath}`,
          option: 'success',
        })
      } else {
        Logger({
          message: `Error occurred while writing the file: ${error}`,
          option: 'error',
        })
      }
    }
  }

  /**
   * @param formattedContent
   * @returns
   */
  private static contentIsArray(formattedContent: string): boolean {
    return !formattedContent.startsWith('[') || !formattedContent.endsWith(']')
  }
}
