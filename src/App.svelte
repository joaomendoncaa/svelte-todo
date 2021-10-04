<script lang="ts">
  import { data } from "./stores/data";
  import Item from "./lib/Item.svelte";
  import Form from "./lib/Form.svelte";

  interface TodoItem {
    id: number;
    label: string;
    description: string;
  }

  let todoList: TodoItem[] = [];

  data.subscribe((value: TodoItem[]) => {
    todoList = value;
  });
</script>

<main class="todo-container">
  <header class="todo-header">
    <h1>Todo List</h1>
  </header>

  <Form />

  {#each todoList.sort() as { id, label, description }, i}
    <Item {id} {label} {description} />
  {/each}
</main>

<style global>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: sans-serif;
  }

  body {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  button,
  a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .todo-container {
    width: max-content;
  }

  .todo-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 3rem 0;
  }
</style>
