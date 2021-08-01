export function convertToRenpyScript (json: any): string {
  let result = 'label start:\n\n'

  if (json == null) {
    return result
  }

  const nodes = json.nodes as Array<any>
  for (const node of nodes) {
    result += '\t"' + node.contents[0].content_data_text.text
    result += '" \n\n'
  }
  return result
}
