import { writable } from 'svelte/store';
export const participantNumber = writable();
export const gender = writable(0);
export const age = writable();
export const responses = writable([]);