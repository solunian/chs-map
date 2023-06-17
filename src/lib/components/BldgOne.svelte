<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import type { Point } from "$lib/types";

    // upper left coordinate of building
    const ul: Point = { x: 820, y: 350 };
    const ids1 = ["116", "115", "114", "office", "110", "109", "108"];
    const ids2 = ["107", "106", "105", "104", "103", "102", "101"];
    const w = 50, h = 32;
    const off = 5;

    const totalH = h * 7 + off * 6 - off * 4;
    const hOfSix = totalH / 5.0;
    
</script>


<div>
    {#each ids1 as id, index}
    <Rect {id} x={ul.x} y={ul.y + 20 + (h + off) * index} {w} {h}/>
    {/each}

    {#each ids2 as id, index}
    <Rect {id} x={ul.x + w + off} y={ul.y + 20 + (h + off) * index} {w} {h}/>
    {/each}

</div>