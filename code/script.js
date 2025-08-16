const dice = document.querySelector(".dice");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
    const idOfAdvice = data.slip.id;
    const advice = data.slip.advice;
    console.log(idOfAdvice);
    console.log(advice);
    const container = document.querySelector(".box");
    container.innerHTML = `
    <p class="adviceN">Advice #${idOfAdvice}</p>
    <h1 class="advice"> “${advice}“</h1>
    `;
  } catch (error) {
    alert(error.message);
  }
}
getAdvice();

dice.addEventListener("click", () => {
  window.location.reload();
});
