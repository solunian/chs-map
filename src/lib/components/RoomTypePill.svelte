<script lang="ts">
  import type { RoomType } from "$lib/types";
  import { getCustomColor, getRoomTypeText } from "$lib/helper";

  export let roomType: RoomType;

  let pillColor = getCustomColor("gray", "500");
  let roomStr = getRoomTypeText(roomType);
</script>

<span
  class="whitespace-nowrap rounded-xl px-2 py-0.5 text-sm text-white"
  style="background-color: {pillColor};">
  {roomStr}
</span>
