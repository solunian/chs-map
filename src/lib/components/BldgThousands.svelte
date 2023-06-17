<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import type { Point } from "$lib/helper";

    // upper left coordinate of building
    const ul: Point = { x: 120, y: 95 };

    const w = 50, h = 35;
    const off = 5;
</script>

<!-- 6000 BLDG, FLOOR 1-->
<div>
    <!-- LEFT SIDE: UP TO DOWN -->
    <Rect id={"6105"} x={ul.x} y={ul.y + 20} {w} {h}/>
    <Rect id={"6105"} x={ul.x} y={ul.y + 20 + (h + off)} {w} {h}/>
    <Rect id={"6101"} x={ul.x} y={ul.y + 20 + (h + off) * 2 + 40} {w} {h}/>
    
    <!-- UP SIDE: LEFT TO RIGHT -->
    <Rect id={"6110"} x={ul.x + (w + off)} y={ul.y} {w} {h}/>
    <Rect id={"6111"} x={ul.x + (w + off) * 2} y={ul.y} {w} {h}/>
    
    <Rect id={"grr_6000_1"} x={ul.x + (w + off) * 3} y={ul.y} w={35} {h}/>
    
    <Rect id={"6115"} x={ul.x + (w + off) * 3 + 40} y={ul.y} {w} {h}/>
    
    <Rect id={"6116"} x={ul.x + (w + off) * 4 + 40 + 25} y={ul.y} {w} {h}/>
    
    <Rect id={"brr_6000_1"} x={ul.x + (w + off) * 5 + 40 + 25} y={ul.y} w={35} {h}/>
    
    <Rect id={"6120"} x={ul.x + (w + off) * 5 + 40 * 2 + 25} y={ul.y} {w} {h}/>
    <Rect id={"6121"} x={ul.x + (w + off) * 6 + 40 * 2 + 25} y={ul.y} {w} {h}/>
    
    <!-- RIGHT SIDE: UP TO DOWN -->
    <Rect id={"6126"} x={ul.x + (w + off) * 7 + 40 * 2 + 25} y={ul.y + 20} {w} {h}/>
    <Rect id={"6127"} x={ul.x + (w + off) * 7 + 40 * 2 + 25} y={ul.y + 20 + (h + off)} {w} {h}/>
    
    <Rect id={"arr_6000_1"} x={ul.x + (w + off) * 7 + 40 * 2 + 25} y={ul.y + 20 + (h + off) * 2} w={35} {h}/>
    
    <Rect id={"6131"} x={ul.x + (w + off) * 7 + 40 * 2 + 25} y={ul.y + 20 + (h + off) * 2 + 40} {w} {h}/>
</div>


<!-- 7000 BLDG, FLOOR 1: LEFT TO RIGHT -->
<Rect id={"7101"} x={ul.x + ((w + off) * 8 + 40 * 2 + 25)/2.0 - 75/2.0 - 5 - 75} y={ul.y + 120 + 15} w={75} h={75}/>
<Rect id={"7102"} x={ul.x + ((w + off) * 8 + 40 * 2 + 25)/2.0 - 75/2.0} y={ul.y + 120} w={75} h={75}/>
<Rect id={"7103"} x={ul.x + ((w + off) * 8 + 40 * 2 + 25)/2.0 - 75/2.0 + 5 + 75} y={ul.y + 120 + 15} w={75} h={75}/>
