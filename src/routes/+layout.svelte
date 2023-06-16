<script lang="ts">
    import "../app.css";
    import MusicPlayer from "$lib/components/MusicPlayer.svelte";
    import GithubLink from "$lib/components/GithubLink.svelte";

    let width: number;
    const MD_BREAKPOINT = 700;
</script>

<svelte:head>
    <title>CHS Map</title>
</svelte:head>

<svelte:window bind:innerWidth={width}/>

<div class="w-full h-full">
    <!-- CUPERTINO HIGH SCHOOL HEADER -->
    <header class="fixed inline left-6 rounded-b-xl text-3xl bg-amber-200 font-bold py-4 px-8 text-rose-700 hover:animate-wiggle">
        {#if width <= MD_BREAKPOINT}
            CHS Map
        {:else}
            Cupertino High School Map
        {/if}
    </header>

    <MusicPlayer/>

    <GithubLink/>

    <slot/>
</div>
