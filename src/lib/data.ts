export type ID = string;
export enum RoomType {
    ClassRoom,
    AdminRoom,
    MysteryRoom,

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

// object to map function to make my life easier
const o2m = (o: Object): Map<ID, Room> => new Map(Object.entries(o));
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
    "413": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Woo"],
        subjects: [Subject.Math],
    }

});
const b500 = o2m({

});
const b700 = o2m({

});
const b800 = o2m({

});
const b900 = o2m({
    "916": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Canton"],
        subjects: [Subject.Language],
    }

});
const b6000 = o2m({

});
const b7000 = o2m({

});
const bMain = o2m({

});
const bMisc = o2m({
    "staff_lounge": {
        nickname: "Teachers' Lounge",
        type: RoomType.AdminRoom,
        teachers: [],
    },
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
    "brr_6000_1": {
        nickname: "Boys' Restroom",
        type: RoomType.BoyRestRoom,
    },
    "grr_6000_1": {
        nickname: "Girls' Restroom",
        type: RoomType.GirlRestRoom,
    },
    "arr_6000_1": {
        nickname: "Staff Restroom",
        type: RoomType.AdminRestRoom,
    },
})


const data: Data = {
    last_update_year: 2023,
    github_link: "https://github.com/solunian/chs-map",
    rooms: new Map([
        ...b100,
        ...b200,
        ...b300,
        ...b400,
        ...b500,
        ...b700,
        ...b800,
        ...b900,
        ...b6000,
        ...b7000,
        ...bMain,
        ...bMisc,
    ]),
}


export default data;