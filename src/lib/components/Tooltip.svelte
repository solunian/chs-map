<div id="tooltip-target">
    <span id="tooltip"></span>
</div>


<style>
    #tooltip::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

    #tooltip {
        display: none;
        background-color: black;
        color: #fff;
        text-align: center;
        position: absolute;
        z-index: 1;
        top: 100%;
        white-space: nowrap;
        left: -100%;
        @apply rounded-md py-0.5 px-2.5;
    }
    #tooltip-target:hover ~ #tooltip {
      display: inline;
      
    }
</style>