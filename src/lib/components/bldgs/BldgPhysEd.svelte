<script lang="ts">
  import Rect from "$lib/components/Rect.svelte";

  const off = 5;
</script>

<Rect id={"dance_studio"} x={1160} y={603} w={90} h={60} />
<Rect id={"g_lockers"} x={1160} y={603 + 60 + off} w={190} h={50} />
<Rect id={"mat_room"} x={1160} y={603 + (60 + off) + (50 + off)} w={90} h={130} />
<Rect id={"b_lockers"} x={1160} y={603 + (60 + off) + (50 + off) + 130 + off} w={190} h={50} />
