export interface TrainDepartureGrid {
  plannedDepartureTime: Date;
  direction: string;
  platform: string;
  trainType: string;
  trainDepartureStatus: string;
}

export interface TrainDepartureResponse {
  payload: Payload;
}

export interface Payload {
  source: string;
  departures: TrainDeparture[];
}

export interface TrainDeparture {
  direction: string;
  name: string;
  plannedDateTime: Date;
  plannedTimeZoneOffset: number;
  plannedTrack: string;
  trainCategory: TrainCategory;
  cancelled: boolean;
  journeyDetailRef: string;
  routeStations: any[];
  messages: any[];
  departureStatus: TrainDepartureStatus;
  actualDateTime?: string;
  actualTimeZoneOffset?: number;
  product: Product;
}

export enum TrainDepartureStatus {
  Unknown = 'UNKNOWN',
  Incoming = 'INCOMING',
  OnStation = 'ON_STATION'
}

export enum TrainCategory {
  IC = 'IC',
  Spr = 'SPR',
  Ice = 'ICE',
  Re = 'RE',
  S = 's',
  TrainCategoryS = 'S'
}

export interface Product {
  number: string;
  categoryCode: TrainCategory;
  longCategoryName: LongCategoryName;
}

export enum LongCategoryName {
  Intercity = 'Intercity',
  Sprinter = 'Sprinter',
  ICEInternational = 'ICE International',
  RegionalExpress = 'Regional-Express',
  SBahn = 'S-Bahn',
  Sneltrein = 'Sneltrein'
}
