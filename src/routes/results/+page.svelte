<script>
  import data from "$lib/data.json";
  import { age, gender, participantNumber, responses } from "../../stores";

  const correctResponses = $responses.filter((res) => res.correct).length;
  const porcentage = parseFloat(((correctResponses / data.length) * 100).toFixed(2));
  const totalSeconds = parseFloat($responses.reduce((sum, r) => sum + r.secondsElapsed, 0).toFixed(2));
  const avgSeconds = parseFloat((totalSeconds / data.length).toFixed(2));
</script>

<div class="user-data">
  <p>Participante #{$participantNumber}</p>
  <p>Género: {$gender}</p>
  <p>Edad: {$age}</p>
</div>

<div class="response-stats">
  <p>Acertadas: {correctResponses} / {data.length} ({porcentage}%)</p>
  <p>Tiempo Total: {totalSeconds}s</p>
  <p>Tiempo Promedio: {avgSeconds}s</p>
</div>
{#each $responses as response, i}
  <p>
    {i + 1}. Respuesta {response.correct ? "correcta ✅" : "incorrecta ❌"} -
    {response.secondsElapsed}s
  </p>{/each}
