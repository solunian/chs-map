type ID = string | number;
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
    teachers?: string[];
    desc?: string;
}

interface Bldg {
    id: ID;
    rooms?: Room[];
    nickname?: string;
    teachers?: string[];
    desc?: string;
}


interface Data {
    last_update_year: number;
    github_link: string,
    bldgs: Bldg[]

}

const data: Data = {
    last_update_year: 2023,
    github_link: "https://github.com/solunian/chs-map",
    bldgs: []
}


export default { data };