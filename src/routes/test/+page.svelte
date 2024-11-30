<script>
  import data from "$lib/data.json";
  import { onMount } from "svelte";
  import { responses } from "./../../stores.js";
  import { goto } from "$app/navigation";

  let questionNum = $state(0);
  let numberOfQuestions = data.length;

  let startTime;

  onMount(() => {
    startTime = Date.now();
    $responses = [];
  });

  /* We want to pick color shades that can be seen over a white background easily */
  const colorToHex = {
    black: "#000000",
    red: "#FF0000",
    yellow: "#FFFF00",
      blue: "#4000FF",
    green: "#00A018",
  };

  function handleClick(response) {
    let now = new Date();
    let secondsElapsed = (now - startTime) / 1000;

    $responses.push({
      response,
      correct: response === data[questionNum].congruent,
      secondsElapsed,
    });

    if (questionNum + 1 === numberOfQuestions) {
      goto("/results");
    }
    startTime = now;
    questionNum++;
  }
</script>

<div class="container">
  <p class="word">
    {#each data[questionNum].word as letter, i}
      <span style="color:{colorToHex[data[questionNum].colors[i]]}"> {letter}</span>
    {/each}
  </p>
  <div class="button-wrapper">
    <button onclick={() => handleClick(true)}> Sí </button>
    <button onclick={() => handleClick(false)}> No </button>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }

  .word {
    font-size: 9rem;
    text-align: center;
    margin-bottom: 5rem;
  }
  .button-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 2em;
  }

  button {
    font-size: 2.5rem;
    padding: 1rem 6rem;
    background-color: #d9d9d9;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
  }

  button:hover {
    background-color: #e0e0e0;
  }

  button:focus {
    outline: none;
    border-color: #007bff;
  }
</style>
