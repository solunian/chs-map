<script lang="ts">
    import data, { Subject, type Room } from "$lib/data";
    import { onMount } from "svelte";
    import { getSubjectColor } from "$lib/helper";

    export let x: number, y: number, w: number, h: number, id: string, color: string;

    const room = data.rooms.get(id)!;

    let subjectStr;
    // ( { subjectStr, color } = getSubjectColor(room.subjects![0] || Subject.Special));
    console.log(color)
</script>

<div id="tooltip-target" 
class="absolute transition ease-in rounded hover:rounded-md border p-2 bg-{color}-700 hover:scale-105 hover:-translate-x-1 hover:-translate-y-1" 
style="left: {x}px; top: {y}px; width: {w}px; height: {h}px">
    
    <div id="tooltip" class="pointer-events-none">
        <h2>#️⃣ {room?.nickname || "Room " + id}</h2>
        <h2>🍎 {room?.staff?.toString()}</h2>
        <div class="flex flex-row">

        </div>
    </div>
</div>


<style>
    #tooltip::before {
        content: '';
        transform: translate(-50%, -100%);
        @apply absolute block w-0 left-1/2 top-0 z-10;
        @apply border-transparent border-b-black border-8;
    }

    #tooltip {
        top: 130%;
        left: -10%;
        @apply invisible bg-black text-white text-center;
        @apply absolute z-10 whitespace-nowrap;
        @apply rounded-md py-0.5 px-2.5;
    }
    #tooltip-target:hover > #tooltip {
        @apply visible;
    }
</style>