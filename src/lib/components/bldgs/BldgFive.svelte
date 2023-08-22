<script lang="ts">
  import Rect from "$lib/components/Rect.svelte";
  import type { Point } from "$lib/types";

  // upper left coordinate of building
  const ul: Point = { x: 790, y: 95 };

  const w = 60,
    h = 50;
  const off = 5;
</script>

<!-- LEFT SIDE: UP TO DOWN -->
<Rect id={"506"} x={ul.x} y={ul.y + 20} {w} {h} />
<Rect id={"507"} x={ul.x + 40} y={ul.y + 20 + (h + off)} {w} {h} />
<Rect id={"508"} x={ul.x + 40} y={ul.y + 20 + (h + off) * 2} {w} {h} />
<Rect id={"509"} x={ul.x + 32} y={ul.y + 20 + (h + off) * 3} {w} {h} />

<!-- MIDDLE: STAFF ROOM -->
<Rect id={"505"} x={ul.x + w + off} y={ul.y + 20} w={w * 1.6} {h} />

<!-- RIGHT SIDE: UP TO DOWN -->
<Rect id={"504"} x={ul.x + w + off * 2 + w * 1.6} y={ul.y + 20} {w} {h} />
<Rect id={"503"} x={ul.x + w + off * 2 + w * 1.6 - 20} y={ul.y + 20 + (h + off)} {w} {h} />
<Rect id={"502"} x={ul.x + w + off * 2 + w * 1.6 - 20} y={ul.y + 20 + (h + off) * 2} {w} {h} />
<Rect id={"501"} x={ul.x + w + off * 2 + w * 1.6} y={ul.y + 20 + (h + off) * 3} {w} {h} />
