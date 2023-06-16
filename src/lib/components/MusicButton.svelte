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

<audio bind:this={musicPlayer} src="ddlc_theme.mp3"></audio>

<div class="absolute right-24 top-4">
    <button on:click={togglePlayPause}>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 stroke-amber-400 transition ease-in hover:scale-110">
            {#if isPlaying}
            <!-- (||) button -->
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            {:else}
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            {/if}
        </svg>
    </button>
</div>