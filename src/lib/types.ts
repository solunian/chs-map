import type { Moment } from "moment";

export type ID = string;
export type Club = string;
export enum RoomType {
  ClassRoom,
  AdminRoom,

  BoyRestRoom,
  GirlRestRoom,
  UnisexRestRoom,
  AdminRestRoom,

  MultiPurposeRoom,
  RecArea,
  ParkingLot,
}
export enum Subject {
  Science,
  Math,
  Art,
  Music,
  English,
  SocialStudies,
  Language,
  PE,
  Special,
  CTE,
}

export interface Room {
  type: RoomType;
  displayName?: string;
  name?: string;
  staff?: string[];
  subjects?: Subject[];
}

export interface Bldg {
  [key: string]: Room;
}

export interface Data {
  last_updated: Moment;
  github_link: string;
  rooms: Map<ID, Room>;
}

export type Point = { x: number; y: number };
