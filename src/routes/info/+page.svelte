<script lang="ts">
  import data from "$lib/data";
</script>

<svelte:head>
  <title>Info - CHS Map</title>
</svelte:head>

<div class="flex flex-row justify-center text-lg">
  <div class="flex flex-col p-8 py-20" style="width: 36rem;">
    <div class="flex flex-row whitespace-nowrap text-3xl">
      <div
        class="inline-block stroke-black transition hover:-translate-x-0.5 hover:stroke-rose-800">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline-block h-7 w-7 -translate-y-1 stroke-inherit">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
        </a>
      </div>

      <h1>Info</h1>
    </div>

    <h2 class="text-sm">created by: Daniel Cui</h2>

    <h2 class="pb-4 text-sm text-amber-800">
      last updated: {data.last_updated.format("MMM Do, YYYY")}
    </h2>

    <p>
      Well, hello there! This is a map for Cupertino High School. I hope students get a bit of use
      of this; otherwise, it'd be a little sad. Ah well, I only spent a week on this. 🤓
    </p>

    <h2 class="mb-2 mt-8 text-xl underline">Contributing!</h2>
    <div class="flex flex-col gap-6">
      <p>
        Since the map includes data about the names, teachers, and subjects of rooms, it would be
        appreciated if you, a highly intelligent CHS student, could contribute some of your valuable
        knowlege to this project!
      </p>
      <p>
        Just DM me on <span class="text-blue-700">Discord</span> or
        <span class="text-pink-700">Instagram</span>
        with the room #/name, teacher(s), and subject(s) that is missing or inaccurate. Contact info
        is below.
      </p>

      <p>
        If you want to be extra amazing, you can open an issue on the <span class="text-green-600"
          >GitHub</span>
        repo on the issues tab instead of messaging me. Or... you can fork the repo and submit a pull
        request by editing the src/lib/data.ts file. Also, please leave a star if you like this!
        <a href="https://www.youtube.com/watch?v=S9AoqEYVs1c" target="_blank">⭐</a>
      </p>
    </div>

    <h2 class="mb-2 mt-8 text-xl underline">Contact Info</h2>
    <div class="flex flex-col gap-1">
      <div class="flex flex-row text-blue-700">
        Discord:
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="ml-1 h-5 w-5 translate-y-1 stroke-amber-800">
          <path
            stroke-linecap="round"
            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
        </svg>
        <span class=" text-amber-800">solunian</span>
      </div>

      <div class="flex flex-row text-pink-700">
        Instagram:
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="ml-1 h-5 w-5 translate-y-1 stroke-amber-800">
          <path
            stroke-linecap="round"
            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
        </svg>
        <span class=" text-amber-800">solunian</span>
      </div>

      <div class="text-green-600">
        GitHub: <a
          class="text-amber-800 decoration-rose-800 decoration-wavy underline-offset-4 hover:underline"
          href={data.github_link}
          target="_blank">github.com/solunian/chs-map</a>
      </div>

      <div class="flex flex-row">
        Google Maps:
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="ml-1 h-6 w-6 stroke-amber-800">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <a
          class="text-amber-800 decoration-rose-800 decoration-wavy underline-offset-4 hover:underline"
          href="https://goo.gl/maps/8iUWZxH9hubNiYJv8"
          target="_blank">Cupertino High School</a>
      </div>
    </div>
  </div>
</div>
