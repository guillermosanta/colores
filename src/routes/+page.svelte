<script>
  import { goto } from "$app/navigation";
  import { participantNumber, condition, gender, age } from "./../stores.js";

  function handleSubmit() {
    if (!$participantNumber || !$age || !$gender || !$condition) alert("Rellene todos los campos");
    else if ($age <= 0) alert("Edad incorrecta");
    else if ($participantNumber < 0) alert("Número de participante incorrecto");
    else goto("/fase-prueba");
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Número de participante <input
      bind:value={$participantNumber}
      name="participant-number"
      type="number"
    /></label
  >
  <label>
    Género
    <select bind:value={$gender} name="gender">
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
      <option value="Otro">Otro</option>
      <option value="Prefiero no responder">Prefiero no responder</option>
    </select>
  </label>
  <label>
    Condición
    <select bind:value={$condition} name="gender">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  </label>
  <label> Edad <input bind:value={$age} name="age" type="number" /></label>
  <button> Entrar </button>
</form>

<style>
  :global(body) {
    font-family: Arial, sans-serif;
  }

  :global(h1, p, span) {
    font-family: Arial, sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 20em;
    margin: 0 auto;
    padding: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    font-weight: bold;
    color: #333;
  }

  input[type="number"],
  select {
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  form button {
    align-self: flex-end;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  form button:hover {
    background-color: #0056b3;
  }
</style>
