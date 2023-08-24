<script lang="ts">
  import { MD_BREAKPOINT } from "$lib/constants";
  import { windowWidth } from "$lib/stores";

  let isHovering = false;
</script>

<!-- CUPERTINO HIGH SCHOOL HEADER -->
<header
  class="fixed left-6 z-30 inline rounded-b-xl bg-amber-200 px-5 pb-3 pt-4 text-3xl font-bold text-rose-700">
  <div class="flex flex-row content-center gap-3">
    {#if $windowWidth <= MD_BREAKPOINT}
      CHS Map
    {:else}
      Cupertino High School Map
    {/if}

    <a
      href="/info"
      class="inline-block"
      on:mouseenter={() => (isHovering = true)}
      on:mouseleave={() => (isHovering = false)}>
      {#if !isHovering}
        <!-- outline svg -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8 fill-none transition duration-200 hover:scale-110">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      {:else}
        <!-- solid svg -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-8 w-8 fill-current transition duration-200 hover:scale-110">
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd" />
        </svg>
      {/if}
    </a>
  </div>
</header>
