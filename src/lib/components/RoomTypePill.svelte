<script lang="ts">
    import type { RoomType } from "$lib/data";
    import { getCustomColor, getRoomTypeText } from "$lib/helper";

    export let roomType: RoomType;

    let pillColor = getCustomColor("gray", "500");
    let roomStr = getRoomTypeText(roomType);
</script>

<span class="rounded-xl whitespace-nowrap py-0.5 px-2 text-white text-sm"
    style="background-color: {pillColor};">
    {roomStr}
</span>

