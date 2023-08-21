export type Person = {
  id: number,
  name: string,
  surname: string,
  fathers_name: string,
  email: string,
  where_knew: string,
  telegram: string,
  position?: string,
  photo?: string,
  photo_url?: string
}

export type Photo = {
  url: string,
  image: string,
  title: string,
  album: string | null
}

type SortObject = {
  name: string,
  property: string,
  type: string
}

export type FilterObject  = {
  showPast: boolean,
  startDate: string,
  endDate: string,
  sort: SortObject
}

export type PhotoObject = {
  id: number,
  image: string,
  album: string,
  title: string
}

export type sponsorObject = {
  id: number,
  name: string,
  logo: string,
  logo_url: string,
  site_link: string
}