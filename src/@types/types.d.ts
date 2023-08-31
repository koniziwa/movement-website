export type PersonType = {
  name: string;
  surname: string;
  fathers_name: string;
  email: string;
  where_knew: string;
  telegram: string;
  position?: string;
  photo?: string;
  photo_url?: string;
  from_hse: boolean;
  university: string;
  faculty: string | null;
  event: string;
  event_id: number;
};

export type PhotoType = {
  id: number;
  image: string;
  album: string | null;
  title: string;
};

export type AlbumType = {
  id: number;
  name: string;
  photos: string[];
};

export type TeamType = {
  name: string;
  telegram: string;
  email: string;
  captain: string;
  members: string;
  event: string;
  event_id: number;
  amount_of_members: number;
  where_knew: string;
};
