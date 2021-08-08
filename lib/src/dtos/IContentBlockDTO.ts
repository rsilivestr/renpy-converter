
export interface IContentBlockDTO {
  readonly id: string;
  readonly content_data_text: IContentDatText | null;
  readonly content_data_reference: null;
}

interface IContentDatText {
  readonly text: string;
}
