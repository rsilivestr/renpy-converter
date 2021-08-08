import { IDialogNodeDTO } from "./IDialogNodeDTO";
import { IDocumentDTO } from "./IDocumentDTO";

export interface IDialogDTO {
  readonly dialog_id: string;
  readonly starting_node_id: string;
  readonly player_versions: Array<string>;
  readonly documents: Array<IDocumentDTO>;
  readonly nodes: Array<IDialogNodeDTO>;
}
