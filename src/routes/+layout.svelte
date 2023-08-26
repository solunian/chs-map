<script lang="ts">
  import "../app.css";
  import MusicPlayer from "$lib/components/MusicPlayer.svelte";
  import GithubLink from "$lib/components/GithubLink.svelte";
</script>

<div class="h-full w-full">
  <MusicPlayer />

  <GithubLink />

  <slot />
</div>
