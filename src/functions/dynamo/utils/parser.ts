import fs from 'fs'

/**
 * F - 00001 | The Dynamo parser function.
 * @param {*} inputFilename
 * @param {*} outputFilename
 * 
 * The following function converts and parse DynamoDB json into a proper
 * JavaScript json.
 */

const formatDynamoDBJson = (inputFilename: string, outputFilename: string): void => {
  try {
    console.log('Correcting your dynamoJSON file to proper json :) ')
    let content: string = fs.readFileSync(inputFilename, { encoding: 'utf8' })
    // Replace all instances of "}\n" with "},\n" to separate the objects correctly
    let formattedContent: string = content.replace(/\}\n/g, '},\n')

    // Remove any trailing comma which may exist after the last JSON object
    formattedContent = formattedContent.replace(/,\n$/, '\n')

    // Enclose the entire content within square brackets to form a valid JSON array
    if (!formattedContent.startsWith('[') || !formattedContent.endsWith(']')) {
      formattedContent = `[${formattedContent.trim().replace(/,$/, '')}]`
    }

    // Save the formatted content to a new file
    fs.writeFileSync(outputFilename, formattedContent, { encoding: 'utf8' })

    console.log('File has been successfully corrected & formatted and saved.')
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      console.log(`File ${inputFilename} not found.`)
    } else {
      console.log(`An error occurred: ${error}`)
    }
  }
}

export default formatDynamoDBJson
