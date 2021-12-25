<script lang="ts">
  import { fade } from 'svelte/transition';
  import Nav from './lib/nav/index.svelte'
  import Loading from './lib/loading/index.svelte'
  import Sidebar from './lib/sidebar/index.svelte'
  import Tailwind from './Tailwind.svelte';
  import Router from 'svelte-spa-router'
  import routes from './router'
  import { onMount } from 'svelte';

  let loading = true
  onMount(async () => {
    loading = false
  })
</script>


{#if loading}
  <div class="absolute top-0 left-0 right-0 bottom-0 z-50 flex flex-row items-center justify-center">
    <Loading />
  </div>
{/if}
<Tailwind />
<main class={`relative w-screen h-screen bg-gray-100 ${loading ? 'opacity-0' : 'opacity-100'}`}>
    <Nav />
    <div class="absolute bottom-0 top-14 left-0 right-0 flex flex-row">
      <Sidebar />
      <Router {routes}/>
    </div>
</main>

<style>
</style>