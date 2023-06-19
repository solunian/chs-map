<script lang="ts">
    import RectSvg from "./RectSvg.svelte";


</script>

<RectSvg id="theater" x={470} y={950} w={120} h={30}>
    <svg viewBox="0 0 402 611" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <g transform="matrix(1,0,0,1,0,-824.938)">
            <g id="Theater" transform="matrix(0.238599,0,0,0.606987,-225.997,-353.834)">
                <rect x="947.185" y="1942.01" width="1684.21" height="1006.15" style="fill:none;"/>
                <g transform="matrix(17.4631,0,0,6.86451,-8058.13,-4895.56)">
                    <rect x="516.601" y="996.662" width="94.449" height="35.57" style="fill:rgb(235,235,235);"/>
                </g>
                <g transform="matrix(17.4631,0,0,6.86451,-8058.13,-4895.56)">
                    <path d="M591.865,1019.21L527.031,1019.68L519.128,1139.17L559.008,1141.48L600.394,1138.86L591.865,1019.21Z" style="fill:rgb(235,235,235);"/>
                </g>
            </g>
            <g>
            </g>
        </g>
    </svg>
</RectSvg>

<style>
    svg {
        position: absolute;
    }

    /* svg > * > g, svg {
        @apply transition ease-in rounded-md border-none p-1;
        @apply fill-sky-200 transition ease-in-out;
    } */

    svg > g:hover, svg {
        @apply scale-105 -translate-x-1 -translate-y-1;
        @apply cursor-pointer;
        
    }

    /* #admin {
        width: 10rem;
        stroke: orange !important;
        fill: aquamarine;
    } */
</style>