<script lang="ts">
    import { RoomType } from "$lib/types";
    import data from "$lib/data";
    import { defaultSubjectInfo, subjectDict, getNormalColor, getHoverColor, formatTeacherList } from "$lib/helper";
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

    let color = subjectInfo.color;
    let displayText = room?.nickname || id;

    if (room?.type === RoomType.BoyRestRoom || room?.type === RoomType.GirlRestRoom || room?.type === RoomType.AdminRestRoom || room?.type === RoomType.UnisexRestRoom) {
        displayText = "🚽";
        color = "stone";
    } 

    let tooltipRoomText = room?.nickname || "Room " + id;
    let tooltipTeachersText = formatTeacherList(room?.staff);
    
    let normalColor = getNormalColor(color);
    let hoverColor = getHoverColor(color);


    let tooltipWidth: number;
    let tooltipTop = h + 15; // the offset from the top of the room in px
    let tooltipLeft: number;
    onMount(() => {
        tooltipLeft = (w - tooltipWidth) / 2; // the offset from the left to make tooltip centered
    });

</script>

<div>
    <div id="tooltip-target"
    class="absolute border-none transition ease-in rounded-md border p-2 hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 text-center flex flex-col justify-center cursor-default" 
    style="left: {x}px; top: {y}px; width: {w}px; height: {h}px; background-color: {normalColor};"
    on:mouseover={(e) => e.currentTarget.style.backgroundColor = hoverColor} 
    on:mouseleave={(e) => e.currentTarget.style.backgroundColor = normalColor} on:focus>
        
        <h2 class="text-md">{displayText}</h2>
        
    </div>

    <div id="tooltip" class="pointer-events-none" bind:clientWidth={tooltipWidth}
    style="top: {y + tooltipTop}px; left: {x + tooltipLeft}px;">
        <h3>#️⃣ {tooltipRoomText}</h3>

        {#if room?.type === RoomType.ClassRoom}
            <h3>🍎 {tooltipTeachersText}</h3>
        {/if}
        
        <div class="flex flex-row gap-1 mt-1">
            <RoomTypePill roomType={room?.type || RoomType.ClassRoom}/>
            {#each room?.subjects || [] as subject}
                <SubjectPill subjectType={subject}/>
            {/each}
        </div>
    </div>
</div>


<style>
    #tooltip-target {
        @apply z-0;
    }

    #tooltip::before {
        content: '';
        transform: translate(-50%, -100%);
        @apply absolute block w-0 left-1/2 top-0;
        @apply border-transparent border-b-black border-8;
    }

    #tooltip {
        @apply invisible bg-black text-white text-center z-10;
        @apply absolute whitespace-nowrap;
        @apply rounded-md py-3 px-3;
    }
    #tooltip-target:hover ~ #tooltip {
        @apply visible;
    }
</style>