import { registerStore } from '../../hmr';
import { writable } from 'svelte/store';
import storage from 'store2'

const SIDEBAR_FOLD_KET = 'SIDEBAR_FOLD_KET'

export const store = writable({
  isFold: !!storage.get(SIDEBAR_FOLD_KET)?.isFold // 是否折叠
});

store.subscribe((values) => {
  storage.set(SIDEBAR_FOLD_KET, values)
})

registerStore('sidebar', store)