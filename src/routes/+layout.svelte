<script lang="ts">
    import "../app.css";
    import MusicPlayer from "$lib/components/MusicPlayer.svelte";
    import GithubLink from "$lib/components/GithubLink.svelte";
    import { MD_BREAKPOINT } from "$lib/constants";
    import { windowWidth } from "$lib/stores";
</script>

<svelte:window bind:innerWidth={$windowWidth}/>

<div class="w-full h-full">

    {#if $windowWidth > MD_BREAKPOINT}
    <MusicPlayer/>
    {/if}

    <GithubLink/>

    <slot/>
</div>
