export function convertToRenpyScript (json: any) : string {
  if (json == null) return ''

  let result = ''

  const nodes = json.nodes as Array<any>
  for (const node of nodes) {
    result += node.contents[0].content_data_text.text
    result += '\n'
  }
  return result
}
