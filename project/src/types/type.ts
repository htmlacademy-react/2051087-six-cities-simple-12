export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: HardwareFeatures;
  host: OfferHost;
  id: OfferId;
  isPremium: boolean;
  images: Images;
  location: Location;
  maxAdults: number;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type OfferId = number;
export type Offers = Offer[]

export type City = {
  location: Location;
  name: CityName;
}

export type CityName = string

export type CityNames = readonly CityName[]

export type Image = string
export type Images = string[]

export type HardwareFeatures = HardwareFeature[]
export type HardwareFeature = string

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Locations = Location[]

export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type OfferHost = User
export type Reviewer = User

export type UserLogin = string | null

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Reviewer;
}

export type Reviews = Review[]

export type GetNearbyOffers = (id: number) => Offers;
