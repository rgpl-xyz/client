export interface StationResponse {
  payload: Station[];
}

export interface Station {
  UICCode: string;
  stationType: StationType;
  EVACode: string;
  code: string;
  sporen: Sporen[];
  synoniemen: string[];
  heeftFaciliteiten: boolean;
  heeftVertrektijden: boolean;
  heeftReisassistentie: boolean;
  namen: Namen;
  lat: number;
  lng: number;
  radius: number;
  naderenRadius: number;
  ingangsDatum: Date;
  land: string;
}

export enum StationType {
  FacultatiefStation = 'FACULTATIEF_STATION',
  IntercityStation = 'INTERCITY_STATION',
  KnooppuntIntercityStation = 'KNOOPPUNT_INTERCITY_STATION',
  KnooppuntSneltreinStation = 'KNOOPPUNT_SNELTREIN_STATION',
  KnooppuntStoptreinStation = 'KNOOPPUNT_STOPTREIN_STATION',
  MegaStation = 'MEGA_STATION',
  SneltreinStation = 'SNELTREIN_STATION',
  StoptreinStation = 'STOPTREIN_STATION'
}

export interface Sporen {
  spoorNummer: string;
}

export interface Namen {
  lang: string;
  middel: string;
  kort: string;
}
