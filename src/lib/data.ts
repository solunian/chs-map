import type { Bldg, Data } from "$lib/types";
import { RoomType, Subject } from "$lib/types";
import { o2m } from "$lib/helper";
import moment from "moment";

const mapData: Data = {
  // ======================================================== //
  // MAKE SURE TO UPDATE THE DATE AFTER CHANGING THIS FILE!!! //
  // ======================================================== //
  last_updated: moment("2023-09-14", "YYYY-MM-DD"),
  github_link: "https://github.com/solunian/chs-map",
  rooms: new Map(),
};

const b100: Bldg = {
  "101": {
    type: RoomType.ClassRoom,
  },
  "102": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Morgan"],
    subjects: [Subject.SocialStudies],
  },
  "103": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Cryan"],
    subjects: [Subject.Math, Subject.Special],
  },
  "104": {
    type: RoomType.ClassRoom,
    staff: ["Mrs. Merrick"],
    subjects: [Subject.English],
  },
  "105": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Stavis"],
    subjects: [Subject.Special],
  },
  "106": {
    type: RoomType.ClassRoom,
  },
  "107": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Hazeghi"],
    subjects: [Subject.English],
  },
  "108": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Bui"],
    subjects: [Subject.CTE],
  },
  "109": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Santa Cruz"],
    subjects: [Subject.SocialStudies],
  },
  "110": {
    type: RoomType.ClassRoom,
    staff: ["Mrs. Avvakumovits"],
    subjects: [Subject.English],
  },
  "114": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Morgan"],
    subjects: [Subject.English],
  },
  "115": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Coleman"],
    subjects: [Subject.SocialStudies],
  },
  "116": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Phelps"],
    subjects: [Subject.English, Subject.Special],
  },
  office_100: {
    type: RoomType.AdminRoom,
    name: "office",
  },
};
const b200: Bldg = {
  "202": {
    type: RoomType.ClassRoom,
    staff: ["Mrs. Chen"],
    subjects: [Subject.English],
  },
  "203": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Lowe Weiler"],
    subjects: [Subject.SocialStudies],
  },
  "204": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Hazeghi"],
    subjects: [Subject.English],
  },
  "205": {
    type: RoomType.ClassRoom,
  },
  "206-7": {
    type: RoomType.ClassRoom,
    displayName: "206-7",
    name: "Room 206/207",
  },
  "208": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Nguyen"],
    subjects: [Subject.SocialStudies],
  },
  "210": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Shriver"],
    subjects: [Subject.English, Subject.Special],
  },
  "211": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Masuda"],
    subjects: [Subject.English, Subject.Special],
  },
  "212": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Joy"],
    subjects: [Subject.Special],
  },
  "213": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Ray"],
    subjects: [Subject.English],
  },
  "214": {
    type: RoomType.RecArea,
    displayName: "214",
    name: "Wellness Room",
  },
  "215": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Coleman"],
    subjects: [Subject.SocialStudies],
  },
};
const b300: Bldg = {
  "307": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Ferrante"],
    subjects: [Subject.CTE, Subject.Math],
  },
  "308": {
    type: RoomType.ClassRoom,
  },
  "309": {
    type: RoomType.ClassRoom,
    // staff: ["Ms. Sato"],
    // subjects: [Subject.SocialStudies, Subject.Special],
    //i'm not sure who teaches here now but sato isn't at tino anymore
  },
  "310": {
    type: RoomType.ClassRoom,
  },
  "314": {
    type: RoomType.ClassRoom,
    staff: ["Mr. McLeod"],
    subjects: [Subject.CTE],
  },
  "315": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Lucatero"],
    subjects: [Subject.Language],
  },
  "316": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Hill"],
    subjects: [Subject.CTE],
  },
  "317": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Conrad"],
    subjects: [Subject.English],
  },
  "318": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Martinez"],
    subjects: [Subject.Language],
  },
  office_300: {
    type: RoomType.AdminRoom,
    name: "office",
  },
  staff_lounge: {
    type: RoomType.AdminRoom,
    name: "Teachers' Lounge",
  },
};
const b400: Bldg = {
  "401": {
    type: RoomType.ClassRoom,
  },
  "404": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Lowe Weiler"],
    subjects: [Subject.CTE],
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
    staff: ["Ms. Aguilar", "Ms. Keifer"],
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
  },
  "413": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Woo"],
    subjects: [Subject.Math],
  },
  "418": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Benson"],
    subjects: [Subject.Math],
  },
  "419": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Stubbs"],
    subjects: [Subject.Math],
  },
  "420": {
    type: RoomType.ClassRoom,
    staff: ["Instructor Roberts"],
    subjects: [Subject.Math],
  },
};
const b500: Bldg = {
  "501": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Stavis", "Mr. Mitchell"],
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
    type: RoomType.ClassRoom,
    displayName: "508",
    name: "508: Empty Room",
  },
  "509": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Slowikowski"],
    subjects: [Subject.Science],
  },
};
const b600: Bldg = {
  "601": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Paris"],
    subjects: [Subject.Special],
  },
  "602": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Filice"],
    subjects: [Subject.English],
  },
  "603": {
    type: RoomType.ClassRoom,
  },
  "604": {
    type: RoomType.AdminRoom,
    displayName: "ASB",
    name: "604: ASB Office",
    staff: ["Ms. Nguyen"],
  },
};
const b700: Bldg = {
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
    staff: ["Mr. Iruegas", "Mr. Scharf"],
    subjects: [Subject.Music],
  },
  "703": {
    type: RoomType.MultiPurposeRoom,
    displayName: "Pit Room",
    name: "703: Pit Room",
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
  brr_700: {
    name: "Boys' Restroom",
    type: RoomType.BoyRestRoom,
  },
  grr_700: {
    name: "Girls' Restroom",
    type: RoomType.GirlRestRoom,
  },
};
const b800: Bldg = {
  "802": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Aron"],
    subjects: [Subject.Music],
  },
  "804": {
    type: RoomType.ClassRoom,
  },
  "810": {
    type: RoomType.ClassRoom,
  },
  "815": {
    type: RoomType.ClassRoom,
    staff: ["Instructor Steele"],
    subjects: [Subject.Art],
  },
  brr_800: {
    type: RoomType.BoyRestRoom,
    name: "Boys' Restroom",
  },
  grr_800: {
    type: RoomType.GirlRestRoom,
    name: "Girls' Restroom",
  },
};
const b900: Bldg = {
  "901": {
    type: RoomType.MultiPurposeRoom,
    displayName: "901",
    name: "Changing Room",
  },
  "902/903": {
    type: RoomType.ClassRoom,
    displayName: "Drama",
    name: "902/903: Drama",
    staff: ["Ms. Conrad"],
    subjects: [Subject.Art],
  },
  "906": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Conrad"],
    subjects: [Subject.Art],
  },
  "910": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Conrad"],
    subjects: [Subject.Art],
    //i'm p sure this should be cooking, not drama (idk the teacher tho)
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
    staff: ["Ms. Jacob"],
    subjects: [Subject.Language],
  },
  "914": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Demetriou"],
    subjects: [Subject.Math],
  },
  "915": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Schaetzke"],
    subjects: [Subject.Language],
  },
  "916": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Canton"],
    subjects: [Subject.Language],
  },
};
const b6000: Bldg = {
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
  },
  "6111": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Aggoun"],
    subjects: [Subject.Language],
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
    staff: ["Ms. Reeve"],
    subjects: [Subject.Special],
  },
  "6121": {
    type: RoomType.ClassRoom,
  },
  "6126": {
    type: RoomType.ClassRoom,
    staff: ["Mrs. Ward, Mr. Heskett"],
    subjects: [Subject.Special],
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
    subjects: [Subject.SocialStudies],
  },
  "6205": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Yeh"],
    subjects: [Subject.SocialStudies],
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
    staff: ["Ms. Williams"],
    subjects: [Subject.Math],
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
    staff: ["Mrs. Hooper"],
    subjects: [Subject.English],
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
  brr_6000_1: {
    name: "Boys' Restroom",
    type: RoomType.BoyRestRoom,
  },
  grr_6000_1: {
    name: "Girls' Restroom",
    type: RoomType.GirlRestRoom,
  },
  arr_6000_1: {
    name: "Staff Restroom",
    type: RoomType.AdminRestRoom,
  },
  brr_6000_2: {
    name: "Boys' Restroom",
    type: RoomType.BoyRestRoom,
  },
  grr_6000_2: {
    name: "Girls' Restroom",
    type: RoomType.GirlRestRoom,
  },
  arr_6000_2: {
    name: "Staff Restroom",
    type: RoomType.AdminRestRoom,
  },
};
const b7000: Bldg = {
  "7101": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Kuehn", "Mr. Stavis"],
    subjects: [Subject.Science],
  },
  "7102": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Kuehn"],
    subjects: [Subject.Science],
  },
  "7103": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Goldenkranz"],
    subjects: [Subject.Science],
  },
  "7201": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Stavis"],
    subjects: [Subject.Science],
  },
  "7202": {
    type: RoomType.ClassRoom,
    staff: ["Mr. Mitchell"],
    subjects: [Subject.Science],
  },
  "7203": {
    type: RoomType.ClassRoom,
    staff: ["Ms. Plat"],
    subjects: [Subject.Science],
  },
};
const bMain: Bldg = {
  brr_cafeteria: {
    type: RoomType.BoyRestRoom,
    name: "Boys' Restroom",
  },
  grr_cafeteria: {
    type: RoomType.GirlRestRoom,
    name: "Girls' Restroom",
  },
  cafeteria: {
    type: RoomType.MultiPurposeRoom,
    name: "Cafeteria",
  },
  mezzanine: {
    type: RoomType.MultiPurposeRoom,
    displayName: "Mezzanine",
    name: "Mezzanine | Cafeteria F2",
  },
  balcony: {
    type: RoomType.RecArea,
    name: "Balcony",
  },
  ccc: {
    type: RoomType.AdminRoom,
    displayName: "CCC",
    name: "College and Career Center",
    staff: ["Ms. Amick"],
  },
  main_office: {
    type: RoomType.AdminRoom,
    name: "Main Office",
    staff: ["Ms. Tomberlain"],
  },
  library: {
    type: RoomType.MultiPurposeRoom,
    name: "Library",
    staff: ["Mrs. Hedstrom"],
  },
  "1214": {
    type: RoomType.AdminRoom,
    displayName: "1214",
    name: "Staff Support",
  },
  "1215": {
    type: RoomType.MultiPurposeRoom,
    displayName: "1215",
    name: "Computer Lab",
  },
};
const bMisc: Bldg = {
  theater: {
    type: RoomType.MultiPurposeRoom,
    displayName: "Theater",
    name: "Robert L. Lopez Center",
    subjects: [Subject.Music, Subject.Art],
  },
  wagon_wheel: {
    type: RoomType.MultiPurposeRoom,
    name: "Wagon Wheel",
  },
  gym: {
    type: RoomType.MultiPurposeRoom,
    name: "Gym",
    subjects: [Subject.PE],
  },
  dance_studio: {
    type: RoomType.MultiPurposeRoom,
    name: "Dance Studio",
    subjects: [Subject.Art, Subject.PE],
  },
  g_lockers: {
    type: RoomType.MultiPurposeRoom,
    name: "Girls' Lockers",
    subjects: [Subject.PE],
  },
  mat_room: {
    type: RoomType.MultiPurposeRoom,
    name: "Mat Room",
    subjects: [Subject.PE],
  },
  b_lockers: {
    type: RoomType.MultiPurposeRoom,
    name: "Boys' Lockers",
    subjects: [Subject.PE],
  },
  weight_room: {
    type: RoomType.MultiPurposeRoom,
    name: "Weight Room",
    subjects: [Subject.PE],
  },
  field_house: {
    type: RoomType.MultiPurposeRoom,
    name: "Field House",
    subjects: [Subject.PE],
  },
};
//why is there no athletic trainer room :(

mapData.rooms = new Map([
  ...o2m(b100),
  ...o2m(b200),
  ...o2m(b300),
  ...o2m(b400),
  ...o2m(b500),
  ...o2m(b600),
  ...o2m(b700),
  ...o2m(b800),
  ...o2m(b900),
  ...o2m(b6000),
  ...o2m(b7000),
  ...o2m(bMain),
  ...o2m(bMisc),
]);

export default mapData;
