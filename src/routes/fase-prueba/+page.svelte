<script>
  import data from "$lib/fase-prueba.json";
  import { goto } from "$app/navigation";

  const numberOfQuestions = data.length;

  /* We want to pick color shades that can be seen over a white background easily */
  const colorToHex = {
    black: "#000000",
    red: "#FF0000",
    yellow: "#EAFF72",
    blue: "#4000FF",
    green: "#00A018",
  };

  const englishToSpanish = {
    black: "negro",
    red: "rojo",
    yellow: "amarillo",
    blue: "azul",
    green: "verde",
  };

  let awaitingNext = $state(false);
  let questionNum = $state(0);
  let correct = $state(false);
  function handleClick(response) {
    if (awaitingNext === true) return;
    console.log("Clicked");
    awaitingNext = true;
    correct = response === data[questionNum].congruent;
  }

  function handleNext() {
    awaitingNext = false;
    questionNum += 1;
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
  <div class="awaiting-next">
    {#if awaitingNext === true}
      <p>Tu respuesta es {correct ? "correcta ✅" : "incorrecta ❌"}</p>
      <p>
        La solución es {data[questionNum].congruent ? "Sí" : "No"} porque la palabra es {data[questionNum]
          .word}
        y la tercera letra es de color {englishToSpanish[data[questionNum].colors[2]]}
      </p>
      <button onclick={handleNext}> Siguiente pregunta</button>
    {/if}
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

  .button-wrapper button {
    font-size: 2.5rem;
    padding: 1rem 6rem;
    background-color: #d9d9d9;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
  }

  .awaiting-next button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: black;
    background-color: #d9d9d9;
    border: none;
    border-radius: 4px;
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
