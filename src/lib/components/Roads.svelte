<script lang="ts">
  const x1 = 620,
    y1 = 1030; // finch ave
  const x2 = -80,
    y2 = 400; // stevens creek
  const x3 = 1220,
    y3 = 400; // tilson ave and
</script>

<div
  class="absolute -z-10 flex cursor-default flex-col items-center p-8"
  style="left: {x1}px; top: {y1}px;">
  <h2 class="text-center">Finch Avenue</h2>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
</div>

<div
  class="absolute -z-10 flex rotate-90 cursor-default flex-col items-center p-8"
  style="left: {x2}px; top: {y2}px;">
  <h2 class="text-center">Stevens Creek Boulevard</h2>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-6 w-6">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
  </svg>
</div>

<div
  class="absolute -z-10 flex -rotate-90 cursor-default flex-col items-center p-12"
  style="left: {x3}px; top: {y3}px;">
  <h2 class="text-center">Tilson Avenue</h2>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-6 w-6">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
  </svg>
</div>
