<script lang="ts">
    import "../app.css";
    import MusicPlayer from "$lib/components/MusicPlayer.svelte";
    import GithubLink from "$lib/components/GithubLink.svelte";
    import { MD_BREAKPOINT } from "$lib/constants";
    import { windowWidth } from "$lib/stores";
</script>

<svelte:head>
    <title>Cupertino High School Map</title>

    <meta name="description" content="An interactive map for Cupertino High School."/>

    <meta property=”og:title” content="Cupertion High School Map"/>
    <meta property=”og:description” content="An interactive map for Cupertino High School."/>
    <meta property=”og:image” content="/map.png"/>
</svelte:head>

<svelte:window bind:innerWidth={$windowWidth}/>

<div class="w-full h-full">

    {#if $windowWidth > MD_BREAKPOINT}
    <MusicPlayer/>
    {/if}

    <GithubLink/>

    <slot/>
</div>
