<script lang="ts">
  import {
    defaultSubjectInfo,
    formatTeacherList,
    getHoverColor,
    getNormalColor,
    subjectDict,
  } from "$lib/helper";
  import data from "$lib/data";
  import { onMount } from "svelte";
  import RoomTypePill from "$lib/components/RoomTypePill.svelte";
  import { RoomType } from "$lib/types";
  import SubjectPill from "$lib/components/SubjectPill.svelte";
  import { glow } from "$lib/stores";

  let x = 808,
    y = 763,
    w = 131,
    h = 158,
    id = "balcony"; // h is the offset for the tooltip now

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

<div
  class="absolute inline-block text-center transition"
  style="left: {x}px; top: {y}px; 
transform: translate({translateValue}px, {translateValue}px) scale({scaleValue}%, {scaleValue}%);{$glow.includes(
    id
  )
    ? ' box-shadow: 8px 8px 20px yellow, -8px 8px 20px yellow, 8px -8px 20px yellow, -8px -8px 20px yellow; z-index: 1;'
    : ''}">
  <div>
    <svg
      width={w}
      viewBox="0 0 431 543"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <g transform="matrix(1,0,0,1,-2311.58,-795.538)">
        <g id="Balcony" transform="matrix(0.851092,0,0,1.09039,3232.04,407.008)">
          <rect x="-1081.51" y="356.321" width="505.481" height="497.298" style="fill:none;" />

          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <g
            class="svg"
            style="fill: {normalColor}; outline: none;"
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
            }}
            on:focus>
            <g transform="matrix(1,0,0,1,2.12036,2.28671)">
              <g transform="matrix(1.17496,0,0,0.917102,-2067.26,-290.963)">
                <path
                  d="M940.581,1157.02L858.373,1157.02C848.588,1157.02 840.656,1164.95 840.656,1174.73C840.656,1189.44 840.656,1210.26 840.656,1224.97C840.656,1234.75 848.588,1242.68 858.373,1242.68C876.555,1242.68 904.683,1242.68 922.865,1242.68C932.649,1242.68 940.581,1234.75 940.581,1224.97C940.581,1199.88 940.581,1157.02 940.581,1157.02Z" />
              </g>
              <g transform="matrix(1.17482,0,0,0.903511,-2208.59,-99.7491)">
                <path
                  d="M1387.72,765.73L1034.33,765.73C1024.54,765.73 1016.61,773.782 1016.61,783.713C1016.61,842.824 1016.61,1027.37 1016.61,1027.37L1370,1027.37C1379.79,1027.37 1387.72,1019.32 1387.72,1009.38C1387.72,950.272 1387.72,765.73 1387.72,765.73Z" />
              </g>
              <g transform="matrix(0.69232,0,0,0.917102,-1583.89,-296.969)">
                <path
                  d="M1452.53,713.267L1338.5,713.267C1146.08,713.267 990.098,805.177 990.098,918.555L990.098,1159.21L1452.53,1159.21L1452.53,713.267Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>

    <h2
      class="text-md pointer-events-none fixed leading-5"
      style="transform: translate(47px, -{h / 2 - 15}px);">
      {displayName}
    </h2>
  </div>

  <div
    class="tooltip pointer-events-none"
    bind:clientWidth={tooltipWidth}
    style="top: {tooltipTop}px; left: {tooltipLeft}px; visibility: {isHovering
      ? 'visible'
      : 'hidden'};">
    <h3>#️⃣ {tooltipRoomText}</h3>

    {#if room?.type === RoomType.ClassRoom || room?.type === RoomType.AdminRoom}
      <h3>🍎 {tooltipTeachersText}</h3>
    {/if}

    <div class="mt-1 flex flex-row gap-1">
      <RoomTypePill roomType={room?.type || RoomType.ClassRoom} />
      {#each room?.subjects || [] as subject}
        <SubjectPill subjectType={subject} />
      {/each}
    </div>
  </div>
</div>
