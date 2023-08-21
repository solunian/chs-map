<script lang="ts">
    import Rect from "$lib/components/Rect.svelte";
    import type { Point } from "$lib/types";

    // upper left coordinate of building
    const ul: Point = { x: 200, y: 650 };
    const ul2: Point = { x: 80, y: 920 };
    const ul3: Point = { x: 505, y: 650 };
    const w = 35, h = 60;
    const off = 5;
</script>


<!-- TOP-LEFT GROUP -->
<div>
    <Rect id="708" x={ul.x} y={ul.y} {w} {h}/>
    <Rect id="709" x={ul.x + w + off} y={ul.y} {w} {h}/>
</div>

<!-- BOTTOM-LEFT GROUP -->
<div>
    <Rect id="702" x={ul2.x} y={ul2.y} w={90} h={90}/>
    <Rect id="701" x={ul2.x + (90 + off)} y={ul2.y + 60} w={60} h={30}/>
    <Rect id="703" x={ul2.x + (90 + off) + (60 + off)} y={ul2.y + 40} w={75} h={50}/>

    <Rect id={"brr_700"} x={ul2.x + (90 + off) + (60 + off) + 75 - 35 * 2 - 5} y={ul2.y} w={35} h={35}/>
    <Rect id={"grr_700"} x={ul2.x + (90 + off) + (60 + off) + 75 - 35} y={ul2.y} w={35} h={35}/>
</div>

<!-- <div>
    <Rect id="723" x={ul3.x} y={ul3.y} w={80} h={35}/>
    <Rect id="722" x={ul3.x} y={ul3.y + (35 + off)} w={80} h={35}/>
    <Rect id="721" x={ul3.x + 45} y={ul3.y + (35 + off) * 2} w={35} h={60}/>
    <Rect id="724" x={ul3.x} y={ul3.y + 35 * 2 + off * 2 + 60 - 30} w={40} h={30}/>
</div> -->