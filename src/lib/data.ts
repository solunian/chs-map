import type { Data } from "$lib/types";
import { RoomType, Subject } from "$lib/types";
import { o2m } from "$lib/helper";


const b100 = {
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
        type: RoomType.ClassRoom,
        staff: ["Ms. Hazeghi"],
        subjects: [Subject.English],
    },
    "108": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Bui"],
        subjects: [Subject.Special],
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
        type: RoomType.ClassRoom,
    },
    "office_100": {
        type: RoomType.AdminRoom,
        name: "office",
    }
};
const b200 = {
    "202": {
        type: RoomType.ClassRoom,
        staff: ["Mrs. Chen"],
        subjects: [Subject.English],    
    },
    "203": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Lowe-Weiler"],
        subjects: [Subject.History],
    },
    "204": {
        type: RoomType.ClassRoom
    },
    "205": {
        type: RoomType.ClassRoom
    },
    "206-7": {
        type: RoomType.ClassRoom,
        displayName: "206-7",
        name: "Room 206/207"
    },
    "208": {
        type: RoomType.ClassRoom,
    },
    "210": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Sato"],
        subjects: [Subject.English],
    },
    "211": {
        type: RoomType.ClassRoom
    },
    "212": {
        type: RoomType.ClassRoom
    },
    "213": {
        type: RoomType.ClassRoom
    },
    "214": {
        type: RoomType.ClassRoom
    },
    "215": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Cryan"],
        subjects: [Subject.Math, Subject.Special],
    },
};
const b300 = {
    "307": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Ferrante"],
        subjects: [Subject.Special]
    },
    "308": {
        type: RoomType.ClassRoom
    },
    "309": {
        type: RoomType.ClassRoom
    },
    "310": {
        type: RoomType.ClassRoom
    },
    "314": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Mcleod"],
        subjects: [Subject.Special],
    },
    "315": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Lucatero"],
        subjects: [Subject.Language]
    },
    "316": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Hill"],
        subjects: [Subject.Special],
    },
    "317": {
        type: RoomType.ClassRoom
    },
    "318": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Martinez"],
        subjects: [Subject.Language],
    },
    "office_300": {
        type: RoomType.AdminRoom,
        name: "office",
    },
    "staff_lounge": {
        type: RoomType.AdminRoom,
        name: "Teachers' Lounge",
    },
};
const b400 = {
    "401": {
        type: RoomType.ClassRoom
    },
    "404": {
        type: RoomType.ClassRoom
    },
    "405": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Jaehnig"],
        subjects: [Subject.Math],
    },
    "407": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Bai"],
        subjects: [Subject.Language],
    },
    "409": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Aguilar"],
        subjects: [Subject.Language],
    },
    "410": {
        type: RoomType.ClassRoom,
    },
    "411": {
        type: RoomType.ClassRoom,
        staff: ["Instructor Choe"],
        subjects: [Subject.Math],
    },
    "412": {
        type: RoomType.ClassRoom,
        staff: ["Instructor Roberts"],
        subjects: [Subject.Math],
    },
    "413": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Woo"],
        subjects: [Subject.Math],
    },
    "418": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Benson"],
        subjects: [Subject.Math]
    },
    "419": {
        type: RoomType.ClassRoom
    },
    "420": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Tsai"],
        subjects: [Subject.Math]
    },
};
const b500 = {
    "501": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Mitchell"],
        subjects: [Subject.Science],
    },
    "502": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Cheung"],
        subjects: [Subject.Science],
    },
    "503": {
        type: RoomType.ClassRoom,
        staff: ["Mrs. Solheim"],
        subjects: [Subject.Science],
    },
    "504": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Bagamaspad"],
        subjects: [Subject.Science],
    },
    "505": {
        type: RoomType.AdminRoom,
        displayName: "Staff Room",
        name: "505: Staff Room",
    },
    "506": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Steemers"],
        subjects: [Subject.Science],
    },
    "507": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Paris"],
        subjects: [Subject.Science],
    },
    "508": {
        type: RoomType.ClassRoom
    },
    "509": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Slowikowski"],
        subjects: [Subject.Science],
    },
};
const b700 = {
    "701": {
        type: RoomType.MultiPurposeRoom,
        displayName: "closet",
        name: "701: Band Closet",
        subjects: [Subject.Music],
    },
    "702": {
        type: RoomType.ClassRoom,
        displayName: "Band Room",
        name: "702: Band Room",
        staff: ["Mr. Scharf"],
        subjects: [Subject.Music],
    },
    "703": {
        type: RoomType.MultiPurposeRoom,
        displayName: "Guard/ Noise???",
        name: "703: Color Guard Room/Percussion Room???",
        subjects: [Subject.Music],
    },
    "708": {
        type: RoomType.ClassRoom,
        subjects: [Subject.Special],
    },
    "709": {
        type: RoomType.ClassRoom,
        subjects: [Subject.Special],
    },
    "721": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Paris"],
        subjects: [Subject.Special],
    },
    "722": {
        type: RoomType.ClassRoom,
    },
    "723": {
        type: RoomType.ClassRoom,
    },
    "724": {
        type: RoomType.AdminRoom,
        displayName: "ASB",
        name: "724: ASB Office",
        staff: ["Ms. Nguyen"]
    },
    "brr_700": {
        name: "Boys' Restroom",
        type: RoomType.BoyRestRoom,
    },
    "grr_700": {
        name: "Girls' Restroom",
        type: RoomType.GirlRestRoom,
    },
};
const b800 = {
    "802": {
        type: RoomType.ClassRoom,
    },
    "804": {
        type: RoomType.ClassRoom,
    },
    "810": {
        type: RoomType.ClassRoom,
    },
    "815": {
        type: RoomType.ClassRoom,
    },
    "brr_800": {
        type: RoomType.BoyRestRoom,
        name: "Boys' Restroom",
    },
    "grr_800": {
        type: RoomType.GirlRestRoom,
        name: "Girls' Restroom",
    }
};
const b900 = {
    "905": {
        type: RoomType.ClassRoom,
        subjects: [Subject.Art]
    },
    "906": {
        type: RoomType.ClassRoom,
    },
    "910": {
        type: RoomType.ClassRoom,
    },
    "911": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Lou"],
        subjects: [Subject.Math],
    },
    "912": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Maleski"],
        subjects: [Subject.Math],
    },
    "913": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Demetriou"],
        subjects: [Subject.Math],
    },
    "914": {
        type: RoomType.ClassRoom,
    },
    "915": {
        type: RoomType.ClassRoom,
    },
    "916": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Canton"],
        subjects: [Subject.Language],
    }

};
const b6000 = {
    "6101": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Jin"],
        subjects: [Subject.Language],
    },
    "6105": {
        type: RoomType.ClassRoom,
        displayName: "6105",
        name: "Robotics & Engineering",
        subjects: [Subject.Special],
    },
    "6106": {
        type: RoomType.ClassRoom,
    },
    "6110": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Aggoun"],
        subjects: [Subject.Language],
    },
    "6111": {
        type: RoomType.ClassRoom,
    },
    "6115": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Fan"],
        subjects: [Subject.Language],
    },
    "6116": {
        type: RoomType.ClassRoom,
    },
    "6120": {
        type: RoomType.ClassRoom,
    },
    "6121": {
        type: RoomType.ClassRoom,
    },
    "6126": {
        type: RoomType.ClassRoom,
    },
    "6127": {
        type: RoomType.ClassRoom,
    },
    "6131": {
        type: RoomType.ClassRoom,
    },
    "6201": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Morse"],
        subjects: [Subject.History],
    },
    "6205": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Yeh"],
        subjects: [Subject.History],
    },
    "6206": {
        type: RoomType.ClassRoom,
    },
    "6211": {
        type: RoomType.ClassRoom,
    },
    "6212": {
        type: RoomType.ClassRoom,
    },
    "6216": {
        type: RoomType.ClassRoom,
    },
    "6217": {
        type: RoomType.ClassRoom,
        staff: ["Mrs. Morse"],
        subjects: [Subject.Math],
    },
    "6221": {
        type: RoomType.ClassRoom,
    },
    "6222": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Padgett"],
        subjects: [Subject.English],
    },
    "6227": {
        type: RoomType.ClassRoom,
    },
    "6228": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Jacobs"],
        subjects: [Subject.English, Subject.Special],
    },
    "6232": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Loo"],
        subjects: [Subject.English],
    },
    "brr_6000_1": {
        name: "Boys' Restroom",
        type: RoomType.BoyRestRoom,
    },
    "grr_6000_1": {
        name: "Girls' Restroom",
        type: RoomType.GirlRestRoom,
    },
    "arr_6000_1": {
        name: "Staff Restroom",
        type: RoomType.AdminRestRoom,
    },
    "brr_6000_2": {
        name: "Boys' Restroom",
        type: RoomType.BoyRestRoom,
    },
    "grr_6000_2": {
        name: "Girls' Restroom",
        type: RoomType.GirlRestRoom,
    },
    "arr_6000_2": {
        name: "Staff Restroom",
        type: RoomType.AdminRestRoom,
    },
};
const b7000 = {
    "7101": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Goldenkranz"],
        subjects: [Subject.Science]
    },
    "7102": {
        type: RoomType.ClassRoom,
    },
    "7103": {
        type: RoomType.ClassRoom,
    },
    "7201": {
        type: RoomType.ClassRoom,
        staff: ["Ms. Plat"],
        subjects: [Subject.Science],
    },
    "7202": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Mitchell"],
        subjects: [Subject.Science],
    },
    "7203": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Stavis"],
        subjects: [Subject.Science],
    },
};
const bMain = {
    "brr_cafeteria": {
        type: RoomType.BoyRestRoom,
        name: "Boys' Restroom",
    },
    "grr_cafeteria": {
        type: RoomType.GirlRestRoom,
        name: "Girls' Restroom",
    },
    "cafeteria": {
        type: RoomType.MultiPurposeRoom,
        name: "Cafeteria",
    },
    "mezzanine": {
        type: RoomType.RecArea,
        name: "Mezzanine",
    },
    "ccc": {
        type: RoomType.AdminRoom,
        displayName: "CCC",
        name: "College and Career Center",
        staff: ["Ms. Amick"],
    },
    "main_office": {
        type: RoomType.AdminRoom,
        name: "Main Office",
        staff: ["Ms. Tomberlain"]
    },
    "library": {
        type: RoomType.MultiPurposeRoom,
        name: "Library",
    },
    "1214": {
        type: RoomType.ClassRoom,
    },
    "1215": {
        type: RoomType.ClassRoom,
        displayName: "1215",
        name: "Computer Lab",
    },
    
};
const bMisc = {
    "theater": {
        type: RoomType.MultiPurposeRoom,
        displayName: "Theater",
        name: "Robert B. Lopez Theater",
        subjects: [Subject.Music, Subject.Art],
    },
    "wagon_wheel": {
        type: RoomType.MultiPurposeRoom,
        name: "Wagon Wheel",
    },
    "gym": {
        type: RoomType.MultiPurposeRoom,
        name: "Gym",
        subjects: [Subject.PE],
    },
    "dance_studio": {
        type: RoomType.MultiPurposeRoom,
        name: "Dance Studio",
        subjects: [Subject.PE],
    },
    "g_lockers": {
        type: RoomType.MultiPurposeRoom,
        name: "Girls' Lockers",
        subjects: [Subject.PE],
    },
    "mat_room": {
        type: RoomType.MultiPurposeRoom,
        name: "Mat Room",
        subjects: [Subject.PE],
    },
    "b_lockers": {
        type: RoomType.MultiPurposeRoom,
        name: "Boys' Lockers",
        subjects: [Subject.PE],
    },
    "weight_room": {
        type: RoomType.MultiPurposeRoom,
        name: "Weight Room",
        subjects: [Subject.PE],
    },
    "field_house": {
        type: RoomType.MultiPurposeRoom,
        name: "Field House",
        subjects: [Subject.PE],
    },
};

const data: Data = {
    last_update_year: 2023,
    github_link: "https://github.com/solunian/chs-map",
    rooms: new Map([
        ...o2m(b100),
        ...o2m(b200),
        ...o2m(b300),
        ...o2m(b400),
        ...o2m(b500),
        ...o2m(b700),
        ...o2m(b800),
        ...o2m(b900),
        ...o2m(b6000),
        ...o2m(b7000),
        ...o2m(bMain),
        ...o2m(bMisc),
    ]),
}
export default data;