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
  import Rect from "../Rect.svelte";
  import { glow } from "$lib/stores";
  import { GLOW_STYLING } from "$lib/constants";

  let x = 592,
    y = 815,
    w = 125,
    h = 200,
    id = "cafeteria"; // h is the offset for the tooltip now

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
      viewBox="0 0 450 720"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve">
      <g transform="matrix(1,0,0,1,-852.257,0)">
        <g transform="matrix(0.797824,0,0,0.775545,125.083,-809.972)">
          <rect x="911.447" y="1044.39" width="563.139" height="927.704" style="fill:none;" />

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
            <g transform="matrix(1.25341,0,0,1.10746,-1399.18,300.405)">
              <path
                d="M2231.83,857.763L1867.51,857.763C1857.73,857.763 1849.8,866.998 1849.8,878.39L1849.8,1480.09C1849.8,1491.49 1857.73,1500.72 1867.51,1500.72L2214.11,1500.72C2223.89,1500.72 2231.83,1491.49 2231.83,1480.09L2231.83,857.763Z" />
            </g>
            <g transform="matrix(1.25341,0,0,1.28942,-1399.18,27.3432)">
              <path
                d="M2284.5,811.032C2284.5,806.334 2282.63,801.827 2279.31,798.505C2275.99,795.182 2271.48,793.316 2266.78,793.316L2004.97,793.316C2000.27,793.316 1995.76,795.182 1992.44,798.505C1989.12,801.827 1987.25,806.334 1987.25,811.032L1987.25,1008.69C1987.25,1013.38 1989.12,1017.89 1992.44,1021.21C1995.76,1024.54 2000.27,1026.4 2004.97,1026.4L2266.78,1026.4C2271.48,1026.4 2275.99,1024.54 2279.31,1021.21C2282.63,1017.89 2284.5,1013.38 2284.5,1008.69L2284.5,811.032Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>

    <h2
      class="text-md pointer-events-none fixed leading-5"
      style="transform: translate(20px, -{h / 2}px);">
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

<Rect id="brr_cafeteria" x={572} y={827} w={25} h={25} />
<Rect id="grr_cafeteria" x={601} y={827} w={25} h={25} />
