<script lang="ts">
    import { defaultSubjectInfo, formatTeacherList, getHoverColor, getNormalColor, subjectDict } from "$lib/helper";
    import data from "$lib/data";
    import { onMount } from "svelte";
    import RoomTypePill from "$lib/components/RoomTypePill.svelte";
    import { RoomType } from "$lib/types";
    import SubjectPill from "$lib/components/SubjectPill.svelte";

    let x = 812, y = 850, w = 127, h = 165, id = "main_office"; // h is the offset for the tooltip now

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
        <svg style="width: {w};" viewBox="0 0 425 545" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
            <g transform="matrix(1,0,0,1,-2073.76,-1181.02)">
                <g id="Office" transform="matrix(0.942968,0,0,0.681205,-1082.46,828.182)">
                    <rect x="3347.12" y="517.962" width="449.894" height="799.979" style="fill:none;"/>
                    
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
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

                        <clipPath id="_clip1">
                            <rect x="3347.12" y="517.962" width="449.894" height="799.979"/>
                        </clipPath>
                        <g clip-path="url(#_clip1)">
                            <g id="Admin" transform="matrix(1.06048,0,0,1.46799,2468.98,-1469.03)">
                                <clipPath id="_clip2">
                                    <rect x="827.216" y="1355.14" width="425.799" height="544.47"/>
                                </clipPath>
                                <g clip-path="url(#_clip2)">
                                    <g transform="matrix(1.39099,0,0,1,-1997.79,359.033)">
                                        <path d="M2266.64,1194.82L2043.66,1194.82C2036.63,1194.82 2030.92,1202.76 2030.92,1212.54C2030.92,1271.92 2030.92,1463.49 2030.92,1522.87C2030.92,1532.65 2036.63,1540.58 2043.66,1540.58C2084.66,1540.58 2212.9,1540.58 2253.9,1540.58C2260.93,1540.58 2266.64,1532.65 2266.64,1522.87L2266.64,1194.82Z"/>
                                    </g>
                                    <g transform="matrix(0.843371,0,0,1.01522,-842.443,152.589)">
                                        <path d="M2483.66,1310.28L2083.78,1310.28L2083.78,1486.5L2462.7,1486.5C2474.27,1486.5 2483.66,1478.71 2483.66,1469.09C2483.66,1424.61 2483.66,1310.28 2483.66,1310.28Z" />
                                    </g>
                                    <g transform="matrix(1.2027,0,0,1.33112,-1570.88,-235.559)">
                                        <path d="M2266.64,1194.82L2045.65,1194.82C2037.52,1194.82 2030.92,1200.78 2030.92,1208.13C2030.92,1271.62 2030.92,1540.58 2030.92,1540.58L2266.64,1540.58L2266.64,1194.82Z"/>
                                    </g>
                                    <g transform="matrix(1,0,0,1,-1244.15,171.608)">
                                        <path d="M2496.5,1200.88C2496.5,1191.1 2488.57,1183.17 2478.79,1183.17L2266.93,1183.17L2266.93,1391.46L2496.5,1391.46L2496.5,1200.88Z" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        


        <h2 class="fixed text-md leading-5 pointer-events-none" style="transform: translate(25px, -{h / 2 + 20}px);">{displayName}</h2>
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
        @apply invisible bg-black text-white text-center z-20;
        @apply absolute whitespace-nowrap;
        @apply rounded-md py-3 px-3;
    }
</style>