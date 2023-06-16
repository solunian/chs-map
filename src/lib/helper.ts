import { Subject } from "$lib/data";

export function getSubjectColor(subject: Subject) {
    let subjectStr = "";
    let color = "";

    switch (subject) {
        case Subject.Art: {
            subjectStr = "Art";
            color = "fuchsia";
            break;
        }
        case Subject.Science: {
            subjectStr = "Science";
            color = "green";
            break;
        }
        case Subject.Math: {
            subjectStr = "Math";
            color = "red";
            break;
        }
        case Subject.Music: {
            subjectStr = "Music";
            color = "emerald";
            break;
        }
        case Subject.English: {
            subjectStr = "English";
            color = "blue";
            break;
        }
        case Subject.History: {
            subjectStr = "History";
            color = "purple";
            break;
        }
        case Subject.Language: {
            subjectStr = "Language";
            color = "orange";
            break;
        }
        case Subject.PE: {
            subjectStr = "PE";
            color = "yellow";
            break;
        }
        case Subject.Special: {
            subjectStr = "Special";
            color = "pink";
            break;
        }
    }

    return { subjectStr, color };
}

// <span class="bg-{color}-700 text-white px-3 py-1 mx-2 my-1 rounded-xl">
// {value}
// </span>