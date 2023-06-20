<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import type { Point } from "$lib/types";

    // upper left coordinate of building
    const ul: Point = { x: 110, y: 340 };
    const ul2: Point = { x: 80, y: 650 };
    const ids = ["916", "915", "914", "913", "912", "911"];
    const w = 50, h = 35;
    const off = 5;
</script>


<!-- FIRST ROW -->
<div>
    {#each ids as id, index}
    <Rect {id} x={ul.x} y={ul.y + 20 + (h + off) * index} {w} {h}/>
    {/each}
</div>

<!-- SECOND ROW -->
<div>
    <Rect id="910" x={ul2.x} y={ul2.y} w={65} h={50}/>
    <Rect id="906" x={ul2.x} y={ul2.y + (50 + off)} w={65} h={30}/>
    <Rect id="905" x={ul2.x} y={ul2.y + (50 + off) + (30 + off)} w={65} h={125}/>
</div>