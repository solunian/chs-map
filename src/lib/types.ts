export type ID = string;
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
    History,
    Language,
    PE,
    Special,
}

export interface Room {
    type: RoomType;
    nickname?: string;
    staff?: string[];
    subjects?: Subject[];
    desc?: string;
}

export interface Data {
    last_update_year: number;
    github_link: string;
    rooms: Map<ID, Room>;
}

export type Point = { x: number, y: number };