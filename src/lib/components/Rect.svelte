<script lang="ts">
    import data, { RoomType } from "$lib/data";
    import { defaultSubjectInfo, subjectDict, getNormalColor, getHoverColor } from "$lib/helper";
    import { onMount } from "svelte";
    import RoomTypePill from "./RoomTypePill.svelte";
    import SubjectPill from "./SubjectPill.svelte";

    export let x: number, y: number, w: number, h: number, id: string;

    const room = data.rooms.get(id);
    let subjectInfo;
    if (room?.subjects == undefined) {
        subjectInfo = defaultSubjectInfo;
    } else {
        subjectInfo = subjectDict[room.subjects[0]];
    }

    let normalColor = getNormalColor(subjectInfo.color);
    let hoverColor = getHoverColor(subjectInfo.color);

    // let mainDiv: HTMLDivElement; bind:this={mainDiv}

    let diplayText = room?.nickname || id;
    let tooltipRoomText = room?.nickname || "Room " + id;
    let tooltipTeachersText = room?.staff?.toString() || "anarchy?";

    let tooltipWidth: number;

    let tooltipTop = h + 20; // the offset from the top of the room in px
    let tooltipLeft: number;
    onMount(() => {
        tooltipLeft = (w - tooltipWidth) / 2; // the offset from the left to make tooltip centered
    });

</script>

<div id="tooltip-target"
class="absolute border-none transition ease-in rounded-md border p-2 hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 text-center flex flex-col justify-center" 
style="left: {x}px; top: {y}px; width: {w}px; height: {h}px; background-color: {normalColor};"
on:mouseover={(e) => e.currentTarget.style.backgroundColor = hoverColor} 
on:mouseleave={(e) => e.currentTarget.style.backgroundColor = normalColor} on:focus>
    
    <h2>{diplayText}</h2>

    <div id="tooltip" class="pointer-events-none" bind:clientWidth={tooltipWidth}
    style="top: {tooltipTop}px; left: {tooltipLeft}px;">
        <h2>#️⃣ {tooltipRoomText}</h2>
        <h2>🍎 {tooltipTeachersText}</h2>
        
        <div class="flex flex-row gap-1 mt-1">
            <RoomTypePill roomType={room?.type || RoomType.ClassRoom}/>
            {#each room?.subjects || [] as subject}
                <SubjectPill subjectType={subject}/>
            {/each}
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
        @apply invisible bg-black text-white text-center;
        @apply absolute z-10 whitespace-nowrap;
        @apply rounded-md py-3 px-3;
    }
    #tooltip-target:hover > #tooltip {
        @apply visible;
    }
</style>