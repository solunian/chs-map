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

  let x = 850,
    y = 763,
    w = 90,
    h = 80,
    id = "ccc"; // h is the offset for the tooltip now

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
      viewBox="0 0 278 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve">
      <g transform="matrix(1,0,0,1,-2227.89,-907.428)">
        <g id="CCC" transform="matrix(0.338112,0,0,0.323199,301.117,622.298)">
          <rect x="5698.63" y="882.209" width="820.221" height="789.366" />

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
            <g transform="matrix(2.9576,0,0,3.09407,-11598.8,-1839.7)">
              <path
                d="M5850.34,1132.96L5850.34,1087.6C5850.34,974.22 5942.25,882.31 6055.63,882.31L6122.81,882.31L6122.81,1132.48L5850.34,1132.96Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
    <h2
      class="text-md pointer-events-none fixed leading-5"
      style="transform: translate(30px, -{h / 2 + 7}px);">
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
