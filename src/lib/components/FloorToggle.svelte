<script lang="ts">
    import { MD_BREAKPOINT } from "$lib/constants";
    import { isSecondFloorVisible, windowWidth } from "$lib/stores";
</script>

{#if $windowWidth <= MD_BREAKPOINT}
<div class="fixed top-5 right-24 w-11 h-7 text-center z-20">

    <label class="switch">
        <input type="checkbox" bind:checked={$isSecondFloorVisible}/>
        <span class="slider round"></span>
    </label>

    {#if !$isSecondFloorVisible}
        <h3 class="text-sm relative w-20 mt-2 text-gray-500 -translate-x-4">1st floor</h3>
    {:else}
        <h3 class="text-sm relative w-20 mt-2 text-sky-500 -translate-x-4">2nd floor</h3>
    {/if}
</div>
{:else}
<div class="fixed top-5 right-44 w-11 h-7 text-center z-20">

    <label class="switch">
        <input type="checkbox" bind:checked={$isSecondFloorVisible}/>
        <span class="slider round"></span>
    </label>

    {#if !$isSecondFloorVisible}
        <h3 class="text-sm relative w-20 mt-2 text-gray-500 -translate-x-4">1st floor</h3>
    {:else}
        <h3 class="text-sm relative w-20 mt-2 text-sky-500 -translate-x-4">2nd floor</h3>
    {/if}
</div>
{/if}


<style>
    /* The switch - the box around the slider */

    /* Hide default HTML checkbox */
    .switch input {
        @apply opacity-0 w-0 h-0;
    }

    /* The slider */
    .slider {
        @apply absolute cursor-pointer top-0 left-0 right-0 bottom-0;
        @apply bg-gray-400 transition duration-200;
    } 

    .slider:before {
        @apply absolute h-5 w-5 left-1 bottom-1 bg-white duration-200;
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