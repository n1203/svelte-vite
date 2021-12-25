import { registerStore } from '../../hmr';
import { writable } from 'svelte/store';

export const nav = writable(0);

registerStore('nav', nav)