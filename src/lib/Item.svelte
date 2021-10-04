<script lang="ts">
  export let id: number;
  export let label: string;
  export let description: string;

  import IoMdTrash from "svelte-icons/io/IoMdTrash.svelte";
  import IoMdEye from "svelte-icons/io/IoMdEye.svelte";
  import IoMdEyeOff from "svelte-icons/io/IoMdEyeOff.svelte";

  import { data } from "../stores/data";

  let isDescriptionVisible = false;
  let hasDescription = description.length > 0 || description;

  function setDescriptionVisible() {
    isDescriptionVisible = !isDescriptionVisible;
  }

  function deleteItem(event) {
    event.preventDefault();

    const itemID = event.target.dataset.itemId;

    console.log("To remove => ", itemID);

    console.log("Before removal", $data);

    data.update((currentData) => currentData.filter((obj) => obj.id != itemID));

    console.log("After removal", $data);
  }
</script>

<div class="item-container">
  <div class="item-content">
    <div class="item-title">
      <h3>{label}</h3>
      {#if hasDescription}
        <button on:click={setDescriptionVisible} class="item-title-see-more">
          {#if isDescriptionVisible}
            <IoMdEye />
          {/if}
          {#if !isDescriptionVisible}
            <IoMdEyeOff />
          {/if}
        </button>
      {/if}
    </div>
  </div>
  <button on:click={deleteItem} class="item-delete-btn" data-item-id={id}>
    <IoMdTrash />
    Delete
  </button>
  {#if isDescriptionVisible}
    <p class="item-description">{description}</p>
  {/if}
</div>

<style lang="scss">
  .item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 500px;
    width: 500px;

    flex-wrap: wrap;

    cursor: pointer;

    padding: 1rem 0;

    border-bottom: 1px solid rgba(175, 175, 175, 0.2);

    .item-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.5rem;
    }

    .item-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        font-weight: bold;
        font-size: 1.2rem;

        max-width: 200px;
      }

      .item-title-see-more {
        padding: 0 0.25rem;
        font-weight: bold;

        height: 20px;

        border: none;
        border-radius: 5px;

        background: transparent;

        transition: all 0.1s ease-in-out;

        white-space: nowrap;

        display: flex;
        align-items: center;

        &:hover {
          background: rgba(0, 0, 0, 0.05);
        }
      }
    }

    .item-description {
      width: 100%;
      white-space: wrap;
      word-break: break-word;

      color: grey;

      margin: 0.5rem 0;
    }

    .item-delete-btn {
      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 0.25rem;

      padding: 0.5rem;

      height: 38px;

      border: 1px solid rgba(100, 100, 100, 0.1);
      border-radius: 5px;

      background: transparent;

      font-weight: bold;

      transition: all 0.1s ease-in-out;

      &:hover {
        background: rgba(255, 0, 0, 0.05);
        border: 1px solid red;
        color: red;
      }
    }
  }
</style>
