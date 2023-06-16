<script lang="ts">
    import data from "$lib/data";

    const clickAdmin = () => {
        console.log(data);
    }
    
</script>


<!-- <img id="admin" src={adminSVG} alt="admin"/> -->

<div class="hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 transition">
    <svg viewBox="0 0 425 795" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <g transform="matrix(1,0,0,1,-4143.44,-862.854)">
            <g transform="matrix(0.942968,0,0,0.993496,987.21,348.26)">
                <rect id="Admin" x="3347.12" y="517.962" width="449.894" height="799.979" style="fill:none;"/>
                <clipPath id="_clip1">
                    <rect id="Admin1" x="3347.12" y="517.962" width="449.894" height="799.979"/>
                </clipPath>
                <g clip-path="url(#_clip1)" on:click={clickAdmin} on:keydown >
                    <g id="Admin2" transform="matrix(1.06048,0,0,1.00655,2468.98,-592.986)">
                        <g transform="matrix(1.39099,0,0,1,-1997.79,359.033)">
                            <path d="M2266.64,1194.82L2030.92,1194.82L2030.92,1474.66C2030.92,1511.07 2052.14,1540.58 2078.32,1540.58C2147.15,1540.58 2266.64,1540.58 2266.64,1540.58L2266.64,1194.82Z" />
                        </g>
                        <g transform="matrix(1,0,0,1.31217,-1203.71,-47.5897)">
                            <path d="M2456.72,1047.91C2456.72,1019.44 2426.39,996.327 2389.04,996.327L2253.67,996.327C2216.32,996.327 2185.99,1019.44 2185.99,1047.91L2185.99,1250.98C2185.99,1279.45 2216.32,1302.56 2253.67,1302.56L2389.04,1302.56C2426.39,1302.56 2456.72,1279.45 2456.72,1250.98L2456.72,1047.91Z" />
                        </g>
                        <g transform="matrix(1.2027,0,0,1.33112,-1570.88,-235.559)">
                            <rect x="2030.92" y="1194.82" width="235.712" height="345.757" />
                        </g>
                        <g transform="matrix(0.589228,0,0,1,397.001,390.765)">
                            <path d="M1452.53,713.267L1338.5,713.267C1146.08,713.267 990.098,805.177 990.098,918.555L990.098,1159.21L1452.53,1159.21L1452.53,713.267Z" />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>

    <h2 class="pointer-events-none">admin</h2>
</div>



<style>
    svg {
        position: absolute;
    }

    svg > * > g {
        @apply fill-sky-200 transition ease-in-out;
    }

    svg > * > g:hover {
        @apply fill-sky-300 cursor-pointer;
        
    }

    div {
        position: absolute;
        left: 50rem;
        top: 27rem;
        width: 6rem;
    }

    h2 {
        position: relative;
        top: 4.5rem;
        left: 25%;
        font-size: 1.2rem;
    }

    /* #admin {
        width: 10rem;
        stroke: orange !important;
        fill: aquamarine;
    } */
</style>