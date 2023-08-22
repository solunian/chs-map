<script lang="ts">
  import { MD_BREAKPOINT } from "$lib/constants";
  import { isSecondFloorVisible, windowWidth } from "$lib/stores";
</script>

{#if $windowWidth <= MD_BREAKPOINT}
  <div class="fixed right-24 top-5 z-20 h-7 w-11 text-center">
    <label class="switch">
      <input type="checkbox" bind:checked={$isSecondFloorVisible} />
      <span class="slider round" />
    </label>

    {#if !$isSecondFloorVisible}
      <h3 class="relative mt-2 w-20 -translate-x-4 text-sm text-gray-500">1st floor</h3>
    {:else}
      <h3 class="relative mt-2 w-20 -translate-x-4 text-sm text-sky-500">2nd floor</h3>
    {/if}
  </div>
{:else}
  <div class="fixed right-44 top-5 z-20 h-7 w-11 text-center">
    <label class="switch">
      <input type="checkbox" bind:checked={$isSecondFloorVisible} />
      <span class="slider round" />
    </label>

    {#if !$isSecondFloorVisible}
      <h3 class="relative mt-2 w-20 -translate-x-4 text-sm text-gray-500">1st floor</h3>
    {:else}
      <h3 class="relative mt-2 w-20 -translate-x-4 text-sm text-sky-500">2nd floor</h3>
    {/if}
  </div>
{/if}

<style>
  /* The switch - the box around the slider */

  /* Hide default HTML checkbox */
  .switch input {
    @apply h-0 w-0 opacity-0;
  }

  /* The slider */
  .slider {
    @apply absolute bottom-0 left-0 right-0 top-0 cursor-pointer;
    @apply bg-gray-400 transition duration-200;
  }

  .slider:before {
    @apply absolute bottom-1 left-1 h-5 w-5 bg-white duration-200;
    content: "";
  }

  input:checked + .slider {
    @apply bg-sky-400;
  }

  input:checked + .slider:before {
    @apply translate-x-4;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
