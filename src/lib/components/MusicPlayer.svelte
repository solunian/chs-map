<script lang="ts">
  let musicPlayer: HTMLAudioElement;
  let isPlaying = false;

  const togglePlayPause = () => {
    if (musicPlayer.paused) {
      musicPlayer.play();
      isPlaying = true;
    } else {
      musicPlayer.pause();
      isPlaying = false;
    }
  };
</script>

<audio bind:this={musicPlayer} src="ddlc_theme.mp3" loop />

<div class="fixed right-24 top-4 z-20">
  <button id="tooltip-target">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <svg
      on:click={togglePlayPause}
      on:keydown
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-10 w-10 stroke-amber-400 transition ease-in hover:scale-110">
      {#if isPlaying}
        <!-- (||) button -->
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      {:else}
        <!-- (|>) button -->
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      {/if}
    </svg>
    <span id="tooltip" class="pointer-events-none">{"cool music!"}</span>
  </button>
</div>

<style>
  #tooltip::before {
    content: "";
    transform: translate(-50%, -100%);
    @apply absolute left-1/2 top-0 z-10 block w-0;
    @apply border-8 border-transparent border-b-black;
  }

  #tooltip {
    top: 100%;
    left: -70%;
    @apply invisible bg-black text-center text-white;
    @apply absolute z-10 whitespace-nowrap;
    @apply rounded-md px-2.5 py-0.5;
  }
  #tooltip-target:hover > #tooltip {
    @apply visible;
  }
</style>
