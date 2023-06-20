<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import type { Point } from "$lib/types";

    // upper left coordinate of building
    const ul: Point = { x: 620, y: 350 };
    const ids1 = ["215", "214", "213", "212", "211", "210"];
    const ids2 = ["208", "206-7", "205", "204", "203", "202"];
    const w = 50, h = 38;
    const off = 5;
</script>


<div>
    {#each ids1 as id, index}
    <Rect {id} x={ul.x} y={ul.y + 20 + (h + off) * index} {w} {h}/>
    {/each}

    {#each ids2 as id, index}
    <Rect {id} x={ul.x + w + off} y={ul.y + 20 + (h + off) * index} {w} {h}/>
    {/each}

</div>