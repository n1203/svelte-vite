<script lang="ts">
  import {push, location} from 'svelte-spa-router'
  import { fly } from 'svelte/transition';
  import Icon from '../icon/index.svelte'
  import Tooltip from '../tooltip/index.svelte'
  import {store} from "./stores";
  import {routes} from '../../router'

  let list = []
  Object.entries(routes).forEach(([k, v]) => {
    if (!(v as any).hide) {
      list.push({path: k, ...v})
    }
  })
  let activePath = '/'
  location.subscribe(path => {
    activePath = path
  })
  function go(params) {
    push(params.path)
    activePath = params.path
  }

  let isFold = false
  const unSubscribeStore = store.subscribe(o => {
    isFold = o.isFold
  })

  function toggleFold() {
    store.update(o => ({...o, isFold: !isFold}))
  }
</script>

<div class={`sidebar-container ${isFold ? 'width-20' : 'width-64'}`}>
  {#each list as item}
		<div class={`menu-item ${activePath === item.path ? ' bg-yellow-500 bg-opacity-10' : 'bg-white'}`} on:click={() => go(item)}>
      {#if isFold}
        <Tooltip  title={`${item.name}`}>
          <Icon icon={item.icon} className="text-xl px-1" />
        </Tooltip>
        {#if !item.icon}
          <div class="text-center">{item.name.split('')[0]}</div>
        {/if}
      {/if }
      {#if !isFold}
        <Icon icon={item.icon} className="text-xl px-1" />
        <span class="ml-2 text-base text-gray-500" in:fly="{{ x: -200, duration: 600 }}">{item.name}</span>
      {/if}
    </div>
	{/each}

  <div class="toggle-button" on:click={toggleFold}>
    <Icon className="text-xl" icon={!isFold ? "chevrons_left" : 'chevrons_right'} />
  </div>
</div>

<style>
  .width-20 {
    width: 80px;
    max-width: 80px;
    min-width: 80px;
  }
  .width-64 {
    width: 240px;
    min-width: 240px;
    max-width: 240px;
  }
  .sidebar-container {
    @apply bg-white flex flex-col items-start justify-start p-4 border-r border-gray-200 relative gap-2;
  }
  .toggle-button {
    @apply rounded-full cursor-pointer absolute p-1 text-gray-600 border border-gray-200 hover:bg-gray-100 bg-white -right-4 top-1/2 -translate-y-4;
  }
  .menu-item {
    @apply p-1 px-2 text-gray-600 hover:bg-gray-100 w-full cursor-pointer flex flex-row items-center ;
  }
</style>