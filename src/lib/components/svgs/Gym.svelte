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

  let x = 945,
    y = 730,
    w = 150,
    h = 230,
    id = "gym"; // h is the offset for the tooltip now

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
      viewBox="0 0 505 774"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve">
      <g transform="matrix(1,0,0,1,-3584.59,-580.408)">
        <g id="Gym" transform="matrix(0.656187,0,0,1.14301,2892.05,708.425)">
          <rect x="1055.4" y="-112" width="768.789" height="676.864" style="fill:none;" />

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
            <g transform="matrix(6.34982,0,0,3.64536,-4395.01,-3284.79)">
              <path
                d="M978.419,875.132C978.419,872.783 976.516,870.88 974.167,870.88L863.777,870.88C861.428,870.88 859.525,872.783 859.525,875.132C859.525,896.131 859.525,988.6 859.525,1009.6C859.525,1011.95 861.428,1013.85 863.777,1013.85C882.278,1013.85 955.666,1013.85 974.167,1013.85C976.516,1013.85 978.419,1011.95 978.419,1009.6L978.419,875.132Z" />
            </g>
            <g transform="matrix(6.53603,0,0,3.64536,-4821.55,-3284.91)">
              <ellipse cx="958.006" cy="1011.65" rx="40.549" ry="43.816" />
            </g>
          </g>
        </g>
      </g>
    </svg>

    <h2
      class="text-md pointer-events-none fixed leading-5"
      style="transform: translate(60px, -{h / 2 + 20}px);">
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
