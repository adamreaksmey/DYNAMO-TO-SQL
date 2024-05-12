export class DataModifier {
  //   private chosenKeys: any

  //   constructor(chosenKeys: any) {
  //     this.chosenKeys = chosenKeys
  //   }

  sqlDataModifier(data: any, tableName: string): any[] {
    const modifiedData: any[] = []

    for (const iterator of data) {
      modifiedData.push({
        tableName,
        
      })
    }
    return modifiedData
  }
}
