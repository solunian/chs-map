<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import type { Point } from "$lib/helper";

    // upper left coordinate of building
    const ul: Point = { x: 110, y: 340 };
    const ids = ["916", "915", "914", "913", "912", "911"];
    const w = 50, h = 35;
    const off = 5;
</script>


<div>
    {#each ids as id, index}
    <Rect {id} x={ul.x} y={ul.y + 20 + (h + off) * index} {w} {h}/>
    {/each}
</div>