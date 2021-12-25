<script lang="ts">
  import Icon from '../../lib/icon/index.svelte'
  import Line from '../../lib/chart/line/index.svelte'
</script>

<div class="dashboard">
 <div class="indicators">
  <div>
    <div class="flex flex-row justify-between">
      <div>
        <div class=" text-black">总收入</div>
        <div class=" text-2xl text-black my-4">¥ 19022.00</div>
      </div>
      <div class=" w-40 h-16">
        <Line />
      </div>
    </div>
    <div class="flex flex-row justify-between items-center">
      <div>自上周以来
        <span class=" text-red-600 bg-red-50 px-2 rounded">+20.5%</span>
      </div>
      <div>
        <Icon icon="BigChevronRight" />
      </div>
    </div>
  </div>
  <div>测试</div>
  <div>测试</div>
  <div>测试</div>
 </div>
</div>

<style>
  .dashboard {
    @apply w-full;
  }
  .indicators {
    @apply flex flex-row w-full;
  }
  .indicators > div {
    @apply bg-white w-full m-4 p-4 border border-gray-200 hover:bg-gray-50 text-gray-500 rounded;
  }
</style>