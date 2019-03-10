export interface ListItem {
  id: number;
  value: string;
  checked: boolean;
}

export interface ListState {
  index: number;
  items: ListItem[];
}
