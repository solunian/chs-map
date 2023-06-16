<script lang="ts">
    import type { Subject } from "$lib/data";
    import { subjectDict, getCustomColor } from "$lib/helper";

    export let subjectType: Subject;
    
    let subjectInfo = subjectDict[subjectType];
    let pillColor = getCustomColor(subjectInfo.color, "500");
</script>

<span class="rounded-xl whitespace-nowrap py-0.5 px-2 text-white text-sm"
    style="background-color: {pillColor};">
    {subjectInfo.subjectStr}
</span>

