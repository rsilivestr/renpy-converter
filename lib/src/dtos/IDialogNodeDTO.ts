import { IContentBlockDTO } from "./IContentBlockDTO";

export interface IDialogNodeDTO {
  readonly id: string;
  readonly next_node_id: string;
  readonly contents: Array<IContentBlockDTO>;
}
