# Cupertino High School Map 🗺️

This is an interactive map of Cupertino High School using svelte, tailwindcss, and the power of svgs!
Generally meant for freshmen, newcomers, and finding classrooms around campus. If you think it's cool, feel free to star this repo! ⭐

## Contributing

If you find some information missing on the website, you can add an issue to this repo. Or... you can fork this repo, edit the `src/lib/data.ts` file, and submit a pull request.

## Improvements

I have no further desire to extend this, so the only changes will be for maintenance/updating data.

## Tools & Resources Used

- Sveltekit: glorious components, routing, state management, etc.
- Tailwindcss: brilliantly streamlined styling
- Heroicons: nice looking icons
- Affinity Designer: to make the svgs
- Vercel: deployment
- moment.js: date formatting for last_updated
- qrcode package on npm, made a qrcode for the vercel site at `resources/qrcode.png`
- Doki Doki Literature Club Theme at `static/ddlc_theme.mp3`: cool music!
- `CHSCampusPlan.pdf`: map reference

## Dev Notes (Jul 18, 2023)

- finally got the favicon on mobile, it was because 512x512 was too big
  - 128x128 worked!
- idk does discord cache the images for embeds so it doesn't make one for testing?
  - wtvr i give up

## Dev Notes (Jun 20, 2023)

- idk if this was a waste of time or not
- I need to sleep more
- Svgs are a pain to figure out and to work with
- tailwind sometimes works against you, but mostly it's amazing
- Some of the styling I did with javascript seemed a bit hack-y; I hope it doesn't break
- vscode is giving me a ts error for importing CafeteriaF2, saying the file has no default export
- I don't want to touch this except for adding data
- please don't hardcode a bunch of stuff like I did; it's incredibly not fun
- qrcode to vercel link in the `resources/` folder

## Dev Notes (Jun 14, 2023)

- this is either gonna suck or be kinda cool
- i hope i can finish this in a couple days
- svgs are kinda cool but also kinda terrible to work with
- typescript is kinda cool when you're making the types yourself for data
