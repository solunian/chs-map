<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import type { Point } from "$lib/helper";

    // upper left coordinate of building
    const ul: Point = { x: 420, y: 320 };
    const ids1 = ["318", "317", "316", "315"];
    const ids2 = ["office", "310", "309", "308"]
    const w = 50, h = 30;
    const off = 5;

    const hLounge = (((35 * 7 + off * 6) - h * 4 - off * 3) - off) / 2.0;
    
</script>


<div>
    {#each ids1 as id, index}
    <Rect {id} x={ul.x} y={ul.y + 20 + (h + off) * index} {w} {h}/>
    {/each}

    {#each ids2 as id, index}
    <Rect {id} x={ul.x + w + off} y={ul.y + 20 + (h + off) * index} {w} {h}/>
    {/each}

    <Rect id="314" x={ul.x} y={ul.y + 20 + (h + off) * 4} w={w} h={hLounge}/>
    <Rect id="307" x={ul.x + w + off} y={ul.y + 20 + (h + off) * 4} w={w} h={hLounge}/>

    <Rect id="staff_lounge" x={ul.x} y={ul.y + 20 + (h + off) * 4 + hLounge + off} w={w * 2 + off} h={hLounge}/>
    
</div>