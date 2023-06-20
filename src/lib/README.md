# How To Edit

> Don't forget to change last_updated in the data object!

The `data.ts` file has all the values for the map, all in a Javascript object. Here's an example...

```ts
...
"6228": {
        type: RoomType.ClassRoom,
        staff: ["Mr. Jacobs"],
        subjects: [Subject.English, Subject.Special],
    },
...
```

- The display name depends on if the property is defined. It goes `displayName`, then `name`, then the id used.
- The first subject in the subjects array determines the color of the `Rect`.

Here's the interface definition for Room:
```ts
interface Room {
    type: RoomType;
    displayName?: string;
    name?: string;
    staff?: string[];
    subjects?: Subject[];
}
```
All other types are in the `types.ts` file.