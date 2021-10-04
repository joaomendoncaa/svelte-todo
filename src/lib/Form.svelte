<script lang="ts">
  import { data } from "../stores/data";

  const addItem = (event) => {
    event.preventDefault();

    let label = event.target.label.value;
    let description = event.target.description.value;

    if (!label) return;
    if (description.length === 0 || !description) description = "";

    data.update((currentData) => [
      ...currentData,
      {
        id: $data.length,
        label,
        description,
      },
    ]);

    event.target.reset();
    event.target.label.focus();
  };
</script>

<form class="todo-form" on:submit={addItem}>
  <input class="label-input" name="label" />
  <input class="description-input" name="description" />
  <button class="submit-button" type="submit">Add Task</button>
</form>

<style lang="scss">
  .todo-form {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;

    margin: 2rem 0;
  }

  .label-input,
  .description-input {
    padding: 0.5rem;

    flex: 1;

    border-radius: 5px;
    border: 1px solid grey;
  }

  .submit-button {
    padding: 0.5rem;
  }
</style>
