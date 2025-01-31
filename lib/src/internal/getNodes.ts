import DialogNode from "./entities/DialogNode";
import { LoreHubJson, LoreHubJsonNode } from "./dto/LoreHubJson";

export default function getNodes(json: LoreHubJson): Array<DialogNode> {

  const startNode = json.nodes.find(n => n.id === json.starting_node_id);
  if (startNode == null) throw new Error("Cannot build nodes because start node is null");
  const orderedNodes: Array<LoreHubJsonNode> = [];
  orderedNodes.push(startNode);
  let nextNode: LoreHubJsonNode | undefined = startNode;
  while (nextNode != null && nextNode.next_node_id != null) {
    nextNode = json.nodes.find(n => n.id === nextNode?.next_node_id);
    if (nextNode == null) break;
    orderedNodes.push(nextNode);
  }

  const result = [];
  for (let i = 0; i < orderedNodes.length; i++) {
    const node = DialogNode.buildFromUnknown(orderedNodes[i])
    result.push(node);
  }
  return result;
}

