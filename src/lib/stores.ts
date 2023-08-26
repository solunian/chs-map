import { writable } from "svelte/store";

export const isSecondFloorVisible = writable(false);
export const glow = writable([""]); //I can't really get it to work with `writable(undefined)`
