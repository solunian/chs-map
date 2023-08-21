<script lang="ts">
  import Rect from "$lib/components/Rect.svelte";
  import type { Point } from "$lib/types";

  // upper left coordinate of building
  const ul: Point = { x: 200, y: 650 };
  const ul2: Point = { x: 80, y: 920 };
  const ul3: Point = { x: 505, y: 650 };
  const w = 35, h = 60;
  const off = 5;
</script>

<div>
  <Rect id="603" x={ul3.x} y={ul3.y} w={80} h={35}/>
  <Rect id="602" x={ul3.x} y={ul3.y + (35 + off)} w={80} h={35}/>
  <Rect id="601" x={ul3.x + 45} y={ul3.y + (35 + off) * 2} w={35} h={60}/>
  <Rect id="604" x={ul3.x} y={ul3.y + 35 * 2 + off * 2 + 60 - 30} w={40} h={30}/>
</div>