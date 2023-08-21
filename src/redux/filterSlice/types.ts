export enum SortPropertyEnum {
  NAME_ASC = "name",
  NAME_DESC = "-name",
  DATE_ASC = "date",
  DATE_DESC = "-date",
}

export type Sort = {
  title: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  showPast: boolean;
  startDate: string;
  endDate: string;
  sort: Sort;
}
