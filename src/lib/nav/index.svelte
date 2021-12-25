<script lang="ts">
</script>

<div class="absolute top-0 left-0 right-0 h-14 bg-white flex flex-row items-center p-4 border-b border-gray-200">
  <div class="text-xl font-bold hover:bg-gray-100 cursor-pointer p-1 px-2 w-56">
    <slot name="logo">
      <span class=" bg-yellow-500 rounded p-1 px-2 text-white" >A</span> KUAIDIAN
    </slot>
  </div>
  <div class="flex-grow" />
  <div>
    <slot name="user"></slot>
  </div>
</div>

<style>
</style>