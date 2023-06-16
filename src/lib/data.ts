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

enum Subject {
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

interface Room {
    type: RoomType;
    nickname?: string;
    staff?: string[];
    subjects?: Subject[];
    desc?: string;
}

interface Bldg {
    rooms?: Map<ID, Room>;
    nickname?: string;
    staff?: string[];
    desc?: string;
}

interface Data {
    last_update_year: number;
    github_link: string;
    bldgs: Map<ID, Bldg>;
}

// object to map function to make my life easier
const o2m = (o: Object): Map<ID, Bldg | Room> => new Map(Object.entries(o));
const b100 = o2m({
    "101": {
        type: RoomType.ClassRoom
    },
    "102": {
        type: RoomType.ClassRoom
    },
    "103": {
        type: RoomType.ClassRoom
    },
    "104": {
        type: RoomType.ClassRoom
    },
    "105": {
        type: RoomType.ClassRoom
    },
    "106": {
        type: RoomType.ClassRoom
    },
    "107": {
        type: RoomType.ClassRoom
    },
    "108": {
        type: RoomType.ClassRoom
    },
    "109": {
        type: RoomType.ClassRoom
    },
    "110": {
        type: RoomType.ClassRoom
    },
    "114": {
        type: RoomType.ClassRoom
    },
    "115": {
        type: RoomType.ClassRoom
    },
    "116": {
        type: RoomType.ClassRoom
    },
});
const b200 = o2m({

});
const b300 = o2m({

});
const b400 = o2m({

});
const b500 = o2m({

});
const bMisc = o2m({
    "dance_studio": {
        nickname: "Dance Studio",
        type: RoomType.MultiPurposeRoom,
        subjects: [Subject.PE],
    },
    "mat_room": {
        nickname: "Mat Room",
        type: RoomType.MultiPurposeRoom,
        subjects: [Subject.PE],
    },
    
})


const bldgs = o2m({
    "100": {
        rooms: b100,
    },
    "theater": {
        nickname: "Robert L. Gomez Theater",
    },
    "admin": {

    },
    "misc": {

    }
});


const data: Data = {
    last_update_year: 2023,
    github_link: "https://github.com/solunian/chs-map",
    bldgs: bldgs,
}


export default data;