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
  import { GLOW_STYLING } from "$lib/constants";

  let x = 592,
    y = 830,
    w = 108,
    h = 90,
    id = "mezzanine"; // h is the offset for the tooltip now

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
  class="absolute z-0 inline-block rounded-lg text-center transition"
  style="left: {x}px; top: {y}px; 
    transform: translate({translateValue}px, {translateValue}px) scale({scaleValue}%, {scaleValue}%);
    {$glow.includes(id) ? GLOW_STYLING : ''}">
  <div>
    <svg
      width={w}
      viewBox="0 0 390 328"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve">
      <g transform="matrix(1,0,0,1,-554.165,-94.4606)">
        <g id="Cafeteria-Floor-2" transform="matrix(0.776127,0,0,0.906034,610.382,-331.328)">
          <rect x="-72.432" y="469.948" width="501.97" height="360.958" style="fill:none;" />

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
            <g transform="matrix(1,0,0,1.04392,0,-20.6384)">
              <g transform="matrix(1.28845,0,0,1.0802,-2448.58,-452.646)">
                <path
                  d="M1992.77,873.005C1992.77,868.406 1990.91,863.996 1987.59,860.744C1984.26,857.492 1979.76,855.665 1975.06,855.665C1946.94,855.665 1892.38,855.665 1864.01,855.665C1859.2,855.665 1854.59,857.535 1851.18,860.863C1847.79,864.192 1845.87,868.707 1845.87,873.414L1845.87,1109.28C1845.87,1113.87 1847.74,1118.29 1851.06,1121.54C1854.39,1124.79 1858.89,1126.62 1863.59,1126.62C1902.66,1126.62 1992.77,1126.62 1992.77,1126.62L1992.77,873.005Z" />
              </g>
              <g transform="matrix(1.28845,0,0,0.940244,-2448.58,-313.693)">
                <path
                  d="M2231.34,1039.61C2231.34,1034.33 2229.48,1029.26 2226.16,1025.52C2222.83,1021.79 2218.33,1019.69 2213.63,1019.69C2156.59,1019.69 1981.45,1019.69 1981.45,1019.69L1981.45,1173.99C1981.45,1179.28 1983.32,1184.35 1986.64,1188.08C1989.96,1191.82 1994.47,1193.92 1999.17,1193.92C2045.11,1193.92 2167.69,1193.92 2213.63,1193.92C2218.33,1193.92 2222.83,1191.82 2226.16,1188.08C2229.48,1184.35 2231.34,1179.28 2231.34,1173.99C2231.34,1140.46 2231.34,1073.14 2231.34,1039.61Z" />
              </g>
            </g>
            <g />
          </g>
        </g>
      </g></svg>

    <h2
      class="text-md pointer-events-none fixed leading-5"
      style="transform: translate(16px, -{h / 2 - 7}px);">
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
