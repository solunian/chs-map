<script lang="ts">
  import "../app.css";
  import MusicPlayer from "$lib/components/MusicPlayer.svelte";
  import GithubLink from "$lib/components/GithubLink.svelte";

  // vercel analytics snippet
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
</script>

<div class="h-full w-full">
  <MusicPlayer />

  <GithubLink />

  <slot />
</div>
