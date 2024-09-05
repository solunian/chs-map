import type { Bldg, ID, Room } from "$lib/types";
import { RoomType, Subject } from "$lib/types";
import colors from "$lib/tailwindColors";

interface SubjectInfo {
  subjectStr: string;
  color: string;
}

// lol this an javascript array acting as a dictionary
export const subjectDict: SubjectInfo[] = [];
// all the subject color definitions
{
  subjectDict[Subject.Art] = {
    subjectStr: "art",
    color: "fuchsia",
  };
  subjectDict[Subject.ASB] = {
    subjectStr: "ASB",
    color: "pink",
  };
  subjectDict[Subject.English] = {
    subjectStr: "english",
    color: "blue",
  };
  subjectDict[Subject.SocialStudies] = {
    subjectStr: "social studies",
    color: "purple",
  };
  subjectDict[Subject.Language] = {
    subjectStr: "language",
    color: "orange",
  };
  subjectDict[Subject.Math] = {
    subjectStr: "math",
    color: "red",
  };
  subjectDict[Subject.Music] = {
    subjectStr: "music",
    color: "indigo",
  };
  subjectDict[Subject.PE] = {
    subjectStr: "pe",
    color: "yellow",
  };
  subjectDict[Subject.Science] = {
    subjectStr: "science",
    color: "green",
  };
  subjectDict[Subject.Special] = {
    subjectStr: "special",
    color: "pink",
  };
  subjectDict[Subject.CTE] = {
    subjectStr: "cte",
    color: "cyan",
  };
  subjectDict[Subject.Drama] = {
    subjectStr: "drama",
    color: "fuchsia",
  };
  subjectDict[Subject.Cooking] = {
    subjectStr: "cooking",
    color: "cyan",
  };
  subjectDict[Subject.GuidedStudies] = {
    subjectStr: "guided studies",
    color: "pink",
  };
  
  subjectDict[Subject.Cooking] = {
    subjectStr: "cooking",
    color: "fuchsia"
  }
  subjectDict[Subject.Drama] = {
    subjectStr: "drama",
    color: "fuchsia"
  }
  subjectDict[Subject.Yearbook] = {
    subjectStr: "yearbook",
    color: "indigo"
  }
  subjectDict[Subject.AVID] = {
    subjectStr: "AVID",
    color: "cyan"
  }
  subjectDict[Subject.GuidedStudies] = {
    subjectStr: "guided studies",
    color: "pink"
  }
}
export const defaultSubjectInfo: SubjectInfo = {
  subjectStr: "",
  color: "gray",
};

export const getRoomTypeText = (roomType: RoomType): string => {
  switch (roomType) {
    case RoomType.AdminRestRoom:
    case RoomType.BoyRestRoom:
    case RoomType.GirlRestRoom:
    case RoomType.UnisexRestRoom:
      return "restroom";
    case RoomType.ClassRoom:
      return "classroom";
    case RoomType.AdminRoom:
      return "staff room";
    case RoomType.MultiPurposeRoom:
      return "multi-purpose";
    case RoomType.RecArea:
      return "recreation";
    case RoomType.ParkingLot:
      return "parking lot";
  }
};

export const getCustomColor = (color: string, shade: string) => colors[color][shade];
export const getNormalColor = (color: string) => getCustomColor(color, "200");
export const getHoverColor = (color: string) => getCustomColor(color, "300");

export const formatTeacherList = (teacherArr: string[] | undefined) => {
  if (teacherArr == undefined || teacherArr.length === 0) {
    return "none/missing...";
  } else if (teacherArr.length === 1) {
    return teacherArr[0];
  } else if (teacherArr.length <= 3) {
    let result = "";
    for (let i = 0; i < teacherArr.length - 1; i++) {
      result += teacherArr[i] + ", ";
    }
    return result + teacherArr[teacherArr.length - 1];
  } else {
    let result = "";
    for (let i = 0; i < 2; i++) {
      result += teacherArr[i] + ", ";
    }
    return result + teacherArr[2] + "...";
  }
};

// object to map function to make my life easier
export const o2m = (o: Bldg): Map<ID, Room> => new Map(Object.entries(o));

export const isSecondFloor = (id: ID): boolean =>
  id.startsWith("62") ||
  id.startsWith("72") ||
  ["balcony", "1214", "1215", "library", "mezzanine"].includes(id);
