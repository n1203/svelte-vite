<script lang="ts">
  export let direction = "right"; // 方向
  export let title = ""; // 方向
</script>

<div class="relative group">
  <slot />
  {#if direction === "right"}
    <div class="tooltip-title">
      {title}
    </div>
  {/if}
</div>

<style>
  .tooltip-title {
    @apply absolute top-0 -translate-y-1/2 w-auto whitespace-nowrap bg-black bg-opacity-60 py-1 px-2 text-xs rounded text-white opacity-0;
    @apply group-hover:opacity-100 transition-all duration-1000 left-full
  }
</style>
