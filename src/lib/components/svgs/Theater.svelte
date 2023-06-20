<script lang="ts">
    import { defaultSubjectInfo, formatTeacherList, getHoverColor, getNormalColor, subjectDict } from "$lib/helper";
    import data from "$lib/data";
    import { onMount } from "svelte";
    import RoomTypePill from "$lib/components/RoomTypePill.svelte";
    import { RoomType } from "$lib/types";
    import SubjectPill from "$lib/components/SubjectPill.svelte";

    let x = 470, y = 860, w = 120, h = 180, id = "theater"; // h is the offset for the tooltip now

    const room = data.rooms.get(id);
    let subjectInfo;
    if (room?.subjects == undefined) {
        subjectInfo = defaultSubjectInfo;
    } else {
        subjectInfo = subjectDict[room.subjects[0]];
    }

    let color = subjectInfo?.color || "gray";
    let displayName = room?.displayName || room?.name || id;

    let tooltipRoomText = room?.name || "Room " + id;
    let tooltipTeachersText = formatTeacherList(room?.staff);

    let normalColor = getNormalColor(color);
    let hoverColor = getHoverColor(color);

    let tooltipWidth: number;
    let tooltipTop = h + 15; // the offset from the top of the room in px
    let tooltipLeft: number;
    onMount(() => {
        tooltipLeft = (w - tooltipWidth) / 2; // the offset from the left to make tooltip centered
    });

    let translateValue = 0;
    let scaleValue = 100;
    let isHovering = false;
</script>

<div class="absolute transition text-center inline-block z-0" style="left: {x}px; top: {y}px; 
transform: translate({translateValue}px, {translateValue}px) scale({scaleValue}%, {scaleValue}%);">
    <div>
        <svg style="width: {w};" viewBox="0 0 402 611" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
            <g transform="matrix(1,0,0,1,0,-824.938)">
                <g transform="matrix(0.238599,0,0,0.606987,-225.997,-353.834)">
                    <rect x="947.185" y="1942.01" width="1684.21" height="1006.15"/>
        
                    <g class="svg" style="fill: {normalColor}; outline: none;"
                        on:mouseover={(e) => {
                            e.currentTarget.style.fill = hoverColor;
                            translateValue = -4;
                            scaleValue = 105;
                            isHovering = true;
                        }} 
                        on:mouseleave={(e) => {
                            e.currentTarget.style.fill = normalColor;
                            translateValue = 0;
                            scaleValue = 100;
                            isHovering = false;
                        }} on:focus>
                        
                        <g transform="matrix(17.4631,0,0,6.86451,-8058.13,-4895.56)">
                            <path d="M611.049,1000.91C611.049,999.787 610.601,998.705 609.804,997.908C609.007,997.11 607.925,996.662 606.797,996.662L520.852,996.662C519.725,996.662 518.643,997.11 517.846,997.908C517.048,998.705 516.601,999.787 516.601,1000.91L516.601,1027.98C516.601,1029.11 517.048,1030.19 517.846,1030.99C518.643,1031.79 519.725,1032.23 520.852,1032.23L606.731,1032.23C609.116,1032.23 611.049,1030.3 611.049,1027.91L611.049,1000.91Z"/>
                        </g>
                        <g transform="matrix(17.4631,0,0,6.86451,-8058.13,-4895.56)">
                            <path d="M591.865,1019.21L527.031,1019.68L519.128,1139.17L559.008,1141.48L600.394,1138.86L591.865,1019.21Z"/>
                        </g>
        
                    </g>
                </g>
            </g>
        
        </svg>
        <h2 class="fixed text-md leading-5 pointer-events-none" style="transform: translate(25px, -{h / 2}px);">{displayName}</h2>
    </div>

    <div id="tooltip" class="pointer-events-none" bind:clientWidth={tooltipWidth}
        style="top: {tooltipTop}px; left: {tooltipLeft}px; visibility: {(isHovering) ? "visible": "hidden"};">
        <h3>#️⃣ {tooltipRoomText}</h3>
    
        {#if room?.type === RoomType.ClassRoom || room?.type === RoomType.AdminRoom}
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
    svg {
        @apply fill-none;
    }

    .svg {
        @apply border-none stroke-none stroke-0;
    }

    .svg:hover {
        @apply transition ease-in-out duration-200 stroke-none;
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
</style>