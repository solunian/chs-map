<script lang="ts">
  import Rect from "$lib/components/Rect.svelte";
  import type { Point } from "$lib/types";

  // upper left coordinate of building
  const ul: Point = { x: 315, y: 650 };
  const ids = ["815", "810", "804", "802"];
  const w = 75,
    h = 45;
  const off = 5;
</script>

<div>
  <Rect id={"brr_800"} x={ul.x} y={ul.y} w={35} h={35} />
  <Rect id={"grr_800"} x={ul.x + 40} y={ul.y} w={35} h={35} />

  {#each ids as id, index}
    <Rect {id} x={ul.x} y={ul.y + 35 + 5 + (h + off) * index} {w} {h} />
  {/each}
</div>
