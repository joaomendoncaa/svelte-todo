import { writable } from "svelte/store";

interface TodoItem {
    id: number; 
    label: string;
    description: string;
}

export const data = writable<TodoItem[]>([
])