type ID = string;
enum RoomType {
    ClassRoom,
    AdminRoom,

    BoyRestRoom,
    GirlRestRoom,
    AdminRestRoom,

    MultiPurposeRoom,
    RecArea,
    ParkingLot,
}

interface Room {
    id: ID;
    type: RoomType;
    nickname?: string;
    staff?: string[];
    desc?: string;
}

interface Bldg {
    id: ID;
    rooms?: Room[];
    nickname?: string;
    staff?: string[];
    desc?: string;
}


interface Data {
    last_update_year: number;
    github_link: string;
    bldgs: Map<ID, Bldg>;
}


let bldgs = {
    "100": {
        id: "100",
        rooms: 
    }
}


const data: Data = {
    last_update_year: 2023,
    github_link: "https://github.com/solunian/chs-map",
    bldgs: new Map(
        
    ),
}


export default data;