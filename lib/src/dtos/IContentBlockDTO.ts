import { IContentDataReference } from './content/IContentDataReference';
import { IContentDataText } from './content/IContentDataText'

export interface IContentBlockDTO {
  readonly id: string;
    readonly dialogNodeId: string;
    readonly type: string;
    readonly index: number;
    readonly data: IContentDataReference | IContentDataText;
}
