export type EventObject = {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  start_date: string;
  end_date: string;
  poster: string;
  poster_url: string;
  video: string;
  trailer: string;
  amount_of_members: number;
  logo: string;
  logo_url: string;
  recent: boolean;
  registration_url: string;
  status: string;
  photo_album: string;
  partners_event: boolean;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export interface EventObjectState {
  items: EventObject[];
  status: Status;
}
