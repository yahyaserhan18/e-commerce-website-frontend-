const correctAnswers = ["E", "E", "E", "E", "E"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnsers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];
  console.log(userAnsers);
  userAnsers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  result.classList.remove("d-none");
  let puan = 0;
  const bastir = setInterval(() => {
    result.querySelector("span").textContent = `${puan}%`;
    if (puan == score) {
      clearInterval(bastir); //setintervali durdurmayı salıyor
    } else {
      puan++;
    }
  }, 10);

  if (score == 100) {
    document.getElementById("coupon").innerHTML =
      "Congratulations, you have received a support coupon : SUPPORT100%";
  }
});
