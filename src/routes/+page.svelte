<script lang="ts">
  import "../rooms.css";
  import { isSecondFloor } from "$lib/helper";

  import FloorToggle from "$lib/components/FloorToggle.svelte";
  import Header from "$lib/components/Header.svelte";

  import BldgOne from "$lib/components/bldgs/BldgOne.svelte";
  import BldgTwo from "$lib/components/bldgs/BldgTwo.svelte";
  import BldgThree from "$lib/components/bldgs/BldgThree.svelte";
  import BldgFour from "$lib/components/bldgs/BldgFour.svelte";
  import BldgFive from "$lib/components/bldgs/BldgFive.svelte";
  import BldgSeven from "$lib/components/bldgs/BldgSeven.svelte";
  import BldgEight from "$lib/components/bldgs/BldgEight.svelte";
  import BldgNine from "$lib/components/bldgs/BldgNine.svelte";
  import BldgThousands from "$lib/components/bldgs/BldgThousands.svelte";

  import Theater from "$lib/components/svgs/Theater.svelte";
  import CafeteriaF1 from "$lib/components/svgs/CafeteriaF1.svelte";
  import CCC from "$lib/components/svgs/CCC.svelte";
  import MainOffice from "$lib/components/svgs/MainOffice.svelte";
  import Gym from "$lib/components/svgs/Gym.svelte";
  import WagonWheel from "$lib/components/bldgs/WagonWheel.svelte";
  import BldgPhysEd from "$lib/components/bldgs/BldgPhysEd.svelte";
  import CafeteriaF2 from "$lib/components/svgs/CafeteriaF2.svelte";
  import { isSecondFloorVisible, glow } from "$lib/stores";
  import Balcony from "$lib/components/svgs/Balcony.svelte";
  import Library from "$lib/components/svgs/Library.svelte";
  import BldgMain from "$lib/components/bldgs/BldgMain.svelte";
  import Roads from "$lib/components/Roads.svelte";
  import BldgSix from "$lib/components/bldgs/BldgSix.svelte";

  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { fade } from "svelte/transition";

  export let data: PageData;

  // if some rooms are on first floor (and are hidden in second floor mode), others on second, second floor one will show first, toggle can be used to show the glowing rooms on first floor
  $glow = data.rooms;
  onMount(() => {
    if (data.rooms.some(isSecondFloor)) {
      $isSecondFloorVisible = true;
    }
  });
</script>

<svelte:head>
  <title>Cupertino High School Map</title>
</svelte:head>

<Header />
<FloorToggle />

{#if $glow.length > 0}
  <button
    out:fade
    class="invisible fixed right-[16.5rem] top-4 z-20 flex flex-row flex-nowrap items-center gap-1
    rounded-full border-2 border-gray-500 bg-gray-200 py-1 pl-2 pr-1 font-semibold text-gray-500 transition ease-in-out hover:scale-105 lg:visible"
    on:click={() => {
      $glow = [];
      goto("/");
    }}>
    clear highlighting
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="h-6 w-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </button>
{/if}

<BldgOne />
<BldgTwo />
<BldgThree />
<BldgFour />
<BldgFive />
<BldgSix />
<BldgSeven />
<BldgEight />
<BldgNine />
<BldgThousands />

<Theater />
<Gym />
<WagonWheel />
<BldgPhysEd />

<!-- LOL THIS IS REALLY SCUFFED, ORDERING MATTERS BECAUSE Z-INDEXES GOT A LITTLE COMPLICATED FOR ME AND I'M LAZY SORRY BYE -->
{#if !$isSecondFloorVisible}
  <CafeteriaF1 />
  <MainOffice />
  <CCC />
{:else}
  <Library />
  <CafeteriaF2 />
  <BldgMain />
  <Balcony />
{/if}

<Roads />
