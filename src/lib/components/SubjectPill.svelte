<script lang="ts">
  import type { Subject } from "$lib/types";
  import { subjectDict, getCustomColor } from "$lib/helper";

  export let subjectType: Subject;

  let subjectInfo = subjectDict[subjectType];
  let pillColor = getCustomColor(subjectInfo.color, "600");
</script>

<span
  class="whitespace-nowrap rounded-xl px-2 py-0.5 text-sm text-white"
  style="background-color: {pillColor};">
  {subjectInfo.subjectStr}
</span>
