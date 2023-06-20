<script lang="ts">
    import FloorToggle from "$lib/components/FloorToggle.svelte";
    import Header from "$lib/components/Header.svelte";

    import BldgOne from "$lib/components/bldgs/BldgOne.svelte";
    import BldgTwo from "$lib/components/bldgs/BldgTwo.svelte";
    import BldgThree from "$lib/components/bldgs/BldgThree.svelte";
    import BldgFour from "$lib/components/bldgs/BldgFour.svelte";
    import BldgFive from "$lib/components/bldgs/BldgFive.svelte";
    import BldgSeven from "$lib/components/bldgs/BldgSeven.svelte";
    import BldgEight from "$lib/components/bldgs/BldgEight.svelte";
    import BldgNine from "$lib/components/bldgs/BldgNine.svelte";
    import BldgThousands from "$lib/components/bldgs/BldgThousands.svelte";
    
    import Theater from "$lib/components/svgs/Theater.svelte";
    import CafeteriaF1 from "$lib/components/svgs/CafeteriaF1.svelte";
    import CCC from "$lib/components/svgs/CCC.svelte";
    import MainOffice from "$lib/components/svgs/MainOffice.svelte";
    import Gym from "$lib/components/svgs/Gym.svelte";
    import WagonWheel from "$lib/components/bldgs/WagonWheel.svelte";
    import BldgPhysEd from "$lib/components/bldgs/BldgPhysEd.svelte";
    import CafeteriaF2 from "$lib/components/svgs/CafeteriaF2.svelte";
    import { isSecondFloorVisible } from "$lib/stores";
    import Mezzanine from "$lib/components/svgs/Mezzanine.svelte";
    import Library from "$lib/components/svgs/Library.svelte";
    import BldgMain from "$lib/components/bldgs/BldgMain.svelte";
</script>


<Header/>
<FloorToggle/>


<BldgOne/>
<BldgTwo/>
<BldgThree/>
<BldgFour/>
<BldgFive/>
<BldgSeven/>
<BldgEight/>
<BldgNine/>
<BldgThousands/>

<Theater/>
<Gym/>
<WagonWheel/>
<BldgPhysEd/>

<!-- LOL THIS IS REALLY SCUFFED, ORDERING MATTERS BECAUSE Z-INDEXES GOT A LITTLE COMPLICATED FOR ME AND I'M LAZY SORRY BYE -->
{#if !$isSecondFloorVisible}
    <CafeteriaF1/>
    <MainOffice/>
    <CCC/>
{:else}
    <Library/>
    <CafeteriaF2/>
    <BldgMain/>
    <Mezzanine/>
{/if}





