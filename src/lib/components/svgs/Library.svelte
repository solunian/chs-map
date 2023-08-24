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

  let x = 592,
    y = 913,
    w = 245,
    h = 85,
    id = "library"; // h is the offset for the tooltip now

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
  class="absolute z-0 inline-block text-center transition"
  style="left: {x}px; top: {y}px; 
transform: translate({translateValue}px, {translateValue}px) scale({scaleValue}%, {scaleValue}%);{$glow.includes(
    id
  )
    ? ' box-shadow: 8px 8px 20px yellow, -8px 8px 20px yellow, 8px -8px 20px yellow, -8px -8px 20px yellow; z-index: 1;'
    : ''}">
  <div>
    <svg
      width={w}
      viewBox="0 0 1041 345"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve">
      <g transform="matrix(1,0,0,1,-620.049,-951.059)">
        <g id="Library" transform="matrix(0.934808,0,0,0.669962,1343.37,303.616)">
          <rect x="-773.759" y="966.389" width="1113.23" height="514.828" style="fill:none;" />

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
            <g transform="matrix(1.06974,0,0,1.49262,-2404.97,-1419.02)">
              <g transform="matrix(2.63577,0,0,1,255.646,441.58)">
                <path
                  d="M874.023,1262.01C874.023,1252.23 871.014,1244.29 867.301,1244.29C827.83,1244.29 627.903,1244.29 627.903,1244.29L627.903,1410.81L874.023,1410.81L874.023,1262.01Z" />
              </g>
              <g transform="matrix(1.19407,0,0,0.466531,1235.17,1241.81)">
                <path
                  d="M638.136,896.432C638.136,886.361 636.572,876.701 633.79,869.58C631.007,862.458 627.234,858.457 623.299,858.457C551.684,858.457 245.198,858.457 245.198,858.457L245.198,1462.08C245.198,1472.15 246.761,1481.81 249.544,1488.93C252.326,1496.06 256.1,1500.06 260.035,1500.06C322.176,1500.06 561.158,1500.06 623.299,1500.06C627.234,1500.06 631.007,1496.06 633.79,1488.93C636.572,1481.81 638.136,1472.15 638.136,1462.08C638.136,1348.19 638.136,1010.33 638.136,896.432Z" />
              </g>
              <g transform="matrix(0.891409,0,0,0.607734,233.907,917.312)">
                <path
                  d="M1605.57,1152.75C1605.57,1145.02 1603.48,1137.6 1599.75,1132.13C1596.03,1126.67 1590.97,1123.6 1585.7,1123.6C1556.28,1123.6 1501.47,1123.6 1472.06,1123.6C1466.79,1123.6 1461.73,1126.67 1458,1132.13C1454.28,1137.6 1452.18,1145.02 1452.18,1152.75C1452.18,1177.99 1452.18,1210.48 1452.18,1210.48L1605.57,1210.48L1605.57,1152.75Z" />
              </g>
              <g transform="matrix(0.903425,0,0,1,626.21,443.083)">
                <path
                  d="M2140.16,1341.37L2034.82,1341.37L2034.82,1481.11C2034.82,1490.89 2043.6,1498.82 2054.43,1498.82C2073.3,1498.82 2101.68,1498.82 2120.55,1498.82C2131.38,1498.82 2140.16,1490.89 2140.16,1481.11C2140.16,1439.95 2140.16,1341.37 2140.16,1341.37Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>

    <h2
      class="text-md pointer-events-none fixed leading-5"
      style="transform: translate(100px, -{h / 2 + 8}px);">
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
