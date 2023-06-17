<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import type { Point } from "$lib/helper";

    // upper left coordinate of building
    const ul: Point = { x: 220, y: 320 };
    const ids1 = ["420", "419", "418", "413", "412", "411", "410"];
    const ids2 = ["409", "407", "405", "404", "401"];
    const w = 50, h = 35;
    const off = 5;

    const totalH = h * 7 + off * 6 - off * 4;
    const hOfSix = totalH / 5.0;
    
</script>


<div>
    {#each ids1 as id, index}
    <Rect {id} x={ul.x} y={ul.y + 20 + (h + off) * index} {w} {h}/>
    {/each}

    {#each ids2 as id, index}
    <Rect {id} x={ul.x + w + off} y={ul.y + 20 + (hOfSix + off) * index} {w} h={hOfSix}/>
    {/each}
</div>