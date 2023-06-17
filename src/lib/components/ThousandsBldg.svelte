<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import type { Point } from "$lib/helper";

    // upper left coordinate of building
    const ul: Point = { x: 120, y: 95 };
</script>

<!-- 6000 BLDG, FLOOR 1-->
<div>
    <!-- LEFT SIDE: UP TO DOWN -->
    <Rect id={"6105"} x={ul.x} y={ul.y + 20} w={60} h={50}/>
    <Rect id={"6105"} x={ul.x} y={ul.y + 20 + 55} w={60} h={50}/>
    <Rect id={"6101"} x={ul.x} y={ul.y + 20 + 55 * 2 + 40} w={60} h={50}/>
    
    <!-- UP SIDE: LEFT TO RIGHT -->
    <Rect id={"6110"} x={ul.x + 65} y={ul.y} w={60} h={50}/>
    <Rect id={"6111"} x={ul.x + 65 * 2} y={ul.y} w={60} h={50}/>
    
    <Rect id={"grr_6000_1"} x={ul.x + 65 * 3} y={ul.y} w={35} h={50}/>
    
    <Rect id={"6115"} x={ul.x + 65 * 3 + 40} y={ul.y} w={60} h={50}/>
    
    <Rect id={"6116"} x={ul.x + 65 * 4 + 40 + 25} y={ul.y} w={60} h={50}/>
    
    <Rect id={"brr_6000_1"} x={ul.x + 65 * 5 + 40 + 25} y={ul.y} w={35} h={50}/>
    
    <Rect id={"6120"} x={ul.x + 65 * 5 + 40 * 2 + 25} y={ul.y} w={60} h={50}/>
    <Rect id={"6121"} x={ul.x + 65 * 6 + 40 * 2 + 25} y={ul.y} w={60} h={50}/>
    
    <!-- RIGHT SIDE: UP TO DOWN -->
    <Rect id={"6126"} x={ul.x + 65 * 7 + 40 * 2 + 25} y={ul.y + 20} w={60} h={50}/>
    <Rect id={"6127"} x={ul.x + 65 * 7 + 40 * 2 + 25} y={ul.y + 20 + 55} w={60} h={50}/>
    
    <Rect id={"arr_6000_1"} x={ul.x + 65 * 7 + 40 * 2 + 25} y={ul.y + 20 + 55 * 2} w={60} h={35}/>
    
    <Rect id={"6131"} x={ul.x + 65 * 7 + 40 * 2 + 25} y={ul.y + 20 + 55 * 2 + 40} w={60} h={50}/>
</div>


<!-- 7000 BLDG, FLOOR 1: LEFT TO RIGHT -->
<Rect id={"7101"} x={ul.x + (65 * 8 + 40 * 2 + 25) / 2 - 45 - 95} y={ul.y + 150 + 30} w={90} h={80}/>
<Rect id={"7102"} x={ul.x + (65 * 8 + 40 * 2 + 25) / 2 - 45} y={ul.y + 150} w={90} h={80}/>
<Rect id={"7103"} x={ul.x + (65 * 8 + 40 * 2 + 25) / 2 - 45 + 95} y={ul.y + 150 + 30} w={90} h={80}/>
