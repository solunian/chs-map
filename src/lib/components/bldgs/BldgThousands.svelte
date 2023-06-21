<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import { isSecondFloorVisible } from "$lib/stores";
    import type { Point } from "$lib/types";

    // upper left coordinate of building
    const ul: Point = { x: 120, y: 95 };

    const w = 50, h = 35;
    const off = 5;
</script>


{#if !$isSecondFloorVisible}
<!-- FLOOR 1 OF THOUSANDS -->
<div>
    <!-- 6000 BLDG, FLOOR 1-->

    <!-- LEFT SIDE: UP TO DOWN -->
    <!-- <Rect id={"6106"} x={ul.x} y={ul.y + 20} {w} {h}/>
    <Rect id={"6105"} x={ul.x} y={ul.y + 20 + (h + off)} {w} {h}/> -->
    
    <Rect id={"6105"} x={ul.x} y={ul.y + 20} {w} h={h * 2 + off}/>
    <Rect id={"arr_6000_1"} x={ul.x + 15} y={ul.y + 20 + (h + off) * 2} w={35} {h}/>
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

    <!-- 7000 BLDG, FLOOR 1: LEFT TO RIGHT -->
    <Rect id={"7101"} x={ul.x + ((w + off) * 8 + 40 * 2 + 25)/2.0 - 75/2.0 - 5 - 75} y={ul.y + 120 + 15} w={75} h={75}/>
    <Rect id={"7102"} x={ul.x + ((w + off) * 8 + 40 * 2 + 25)/2.0 - 75/2.0} y={ul.y + 120} w={75} h={75}/>
    <Rect id={"7103"} x={ul.x + ((w + off) * 8 + 40 * 2 + 25)/2.0 - 75/2.0 + 5 + 75} y={ul.y + 120 + 15} w={75} h={75}/>
</div>
{:else}
<!-- FLOOR 2 OF THOUSANDS -->
<div>
    <!-- 6000 BLDG, FLOOR 2-->

    <!-- LEFT SIDE: UP TO DOWN -->
    <Rect id={"6206"} x={ul.x} y={ul.y + 20} {w} {h}/>
    <Rect id={"6205"} x={ul.x} y={ul.y + 20 + (h + off)} {w} {h}/>
    
    <Rect id={"6201"} x={ul.x} y={ul.y + 20 + (h + off) * 2 + 40} {w} {h}/>
    
    <!-- UP SIDE: LEFT TO RIGHT -->
    <Rect id={"6211"} x={ul.x + (w + off)} y={ul.y} {w} {h}/>
    <Rect id={"6212"} x={ul.x + (w + off) * 2} y={ul.y} {w} {h}/>
    
    <Rect id={"grr_6000_2"} x={ul.x + (w + off) * 3} y={ul.y} w={35} {h}/>
    
    <Rect id={"6216"} x={ul.x + (w + off) * 3 + 40} y={ul.y} {w} {h}/>
    
    <Rect id={"6217"} x={ul.x + (w + off) * 4 + 40 + 25} y={ul.y} {w} {h}/>
    
    <Rect id={"brr_6000_2"} x={ul.x + (w + off) * 5 + 40 + 25} y={ul.y} w={35} {h}/>
    
    <Rect id={"6221"} x={ul.x + (w + off) * 5 + 40 * 2 + 25} y={ul.y} {w} {h}/>
    <Rect id={"6222"} x={ul.x + (w + off) * 6 + 40 * 2 + 25} y={ul.y} {w} {h}/>
    
    <!-- RIGHT SIDE: UP TO DOWN -->
    <Rect id={"6227"} x={ul.x + (w + off) * 7 + 40 * 2 + 25} y={ul.y + 20} {w} {h}/>
    <Rect id={"6228"} x={ul.x + (w + off) * 7 + 40 * 2 + 25} y={ul.y + 20 + (h + off)} {w} {h}/>
    
    <Rect id={"arr_6000_2"} x={ul.x + (w + off) * 7 + 40 * 2 + 25} y={ul.y + 20 + (h + off) * 2} w={35} {h}/>
    
    <Rect id={"6232"} x={ul.x + (w + off) * 7 + 40 * 2 + 25} y={ul.y + 20 + (h + off) * 2 + 40} {w} {h}/>

    <!-- 7000 BLDG, FLOOR 1: LEFT TO RIGHT -->
    <Rect id={"7201"} x={ul.x + ((w + off) * 8 + 40 * 2 + 25)/2.0 - 75/2.0 - 5 - 75} y={ul.y + 120 + 15} w={75} h={75}/>
    <Rect id={"7202"} x={ul.x + ((w + off) * 8 + 40 * 2 + 25)/2.0 - 75/2.0} y={ul.y + 120} w={75} h={75}/>
    <Rect id={"7203"} x={ul.x + ((w + off) * 8 + 40 * 2 + 25)/2.0 - 75/2.0 + 5 + 75} y={ul.y + 120 + 15} w={75} h={75}/>
</div>
{/if}