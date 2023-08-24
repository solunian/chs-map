<script lang="ts">
  import { RoomType } from "$lib/types";
  import data from "$lib/data";
  import {
    defaultSubjectInfo,
    subjectDict,
    getNormalColor,
    getHoverColor,
    formatTeacherList,
  } from "$lib/helper";
  import { glow } from "$lib/stores";
  import { onMount } from "svelte";
  import RoomTypePill from "$lib/components/RoomTypePill.svelte";
  import SubjectPill from "$lib/components/SubjectPill.svelte";

  export let x: number, y: number, w: number, h: number, id: string;

  const room = data.rooms.get(id);
  let subjectInfo;
  if (room?.subjects == undefined) {
    subjectInfo = defaultSubjectInfo;
  } else {
    subjectInfo = subjectDict[room.subjects[0]];
  }

  let color = subjectInfo?.color || "gray";
  let displayName = room?.displayName || room?.name || id;

  if (
    room?.type === RoomType.BoyRestRoom ||
    room?.type === RoomType.GirlRestRoom ||
    room?.type === RoomType.AdminRestRoom ||
    room?.type === RoomType.UnisexRestRoom
  ) {
    displayName = "🚽";
    color = "stone";
  }

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
</script>

<div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="tooltip-target absolute flex cursor-default flex-col justify-center rounded-md border border-none p-1 text-center transition ease-in hover:-translate-x-1 hover:-translate-y-1 hover:scale-105"
    style="left: {x}px; top: {y}px; width: {w}px; height: {h}px; background-color: {normalColor};{ $glow.includes(id) ? " box-shadow: 8px 8px 20px yellow, -8px 8px 20px yellow, 8px -8px 20px yellow, -8px -8px 20px yellow; z-index: 1;" : "" }"
    on:mouseover={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
    on:mouseleave={(e) => (e.currentTarget.style.backgroundColor = normalColor)}
    on:focus>
    <h2 class="text-md leading-5">{displayName}</h2>
  </div>

  <div
    class="tooltip pointer-events-none"
    bind:clientWidth={tooltipWidth}
    style="top: {y + tooltipTop}px; left: {x + tooltipLeft}px;">
    <h3>#️⃣ {tooltipRoomText}</h3>

    {#if room?.type === RoomType.ClassRoom || (room?.type === RoomType.AdminRoom && room?.staff?.length) || 0 > 0}
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

<style>
  .tooltip-target {
    @apply z-0;
  }

  .tooltip-target:hover + .tooltip {
    @apply visible;
  }
</style>
