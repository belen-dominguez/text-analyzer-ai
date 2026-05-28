const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = document.querySelector("textarea").value;
  const action = document.querySelector('input[name="action"]:checked').value;

  const response = await fetch("http://localhost:8000/analizar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, action }),
  });

  const result = await response.json();
  document.getElementById("result").textContent = JSON.stringify(
    result,
    null,
    2,
  );
});
