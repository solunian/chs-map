<script lang="ts">
    import "../app.css";
    import MusicPlayer from "$lib/components/MusicPlayer.svelte";
    import GithubLink from "$lib/components/GithubLink.svelte";
    import FloorToggle from "$lib/components/FloorToggle.svelte";
    import { MD_BREAKPOINT } from "$lib/constants";
    import { windowWidth } from "$lib/stores";
    import Header from "$lib/components/Header.svelte";


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

    {#if width > MD_BREAKPOINT}
    <MusicPlayer/>
    {/if}

    <GithubLink/>

    <slot/>
</div>
