<script lang="ts">
    import "../app.css";
    import MusicPlayer from "$lib/components/MusicPlayer.svelte";
    import GithubLink from "$lib/components/GithubLink.svelte";
    import FloorToggle from "$lib/components/FloorToggle.svelte";
    import { MD_BREAKPOINT } from "$lib/constants";
    import { windowWidth } from "$lib/stores";


    let width: number = 1000;
    setInterval(() => {
        windowWidth.set(width);
    });
</script>

<svelte:head>
    <title>Cupertino High School Map</title>
</svelte:head>

<svelte:window bind:innerWidth={width}/>

<div class="w-full h-full">
    <!-- CUPERTINO HIGH SCHOOL HEADER -->
    <header class="fixed inline left-6 rounded-b-xl text-3xl bg-amber-200 font-bold py-4 px-8 text-rose-700 hover:animate-wiggle z-20">
        {#if $windowWidth <= MD_BREAKPOINT}
            CHS Map
        {:else}
            Cupertino High School Map
        {/if}
    </header>

    <FloorToggle/>

    {#if width > MD_BREAKPOINT}
    <MusicPlayer/>
    {/if}

    <GithubLink/>

    <slot/>
</div>
