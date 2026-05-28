const form = document.querySelector("form");
const resultElement = document.getElementById("result");
const loading = document.getElementById("loading");
const actionSelected = document.getElementById("action-selected");
const errorElement = document.getElementById("error");
const copyBtn = document.getElementById("copy-btn");

const acciones = {
  summarize: "Resumir",
  classify: "Clasificar",
  improve: "Mejorar",
};

const setInnerHtml = (html) => {
  const { result, action, error } = html;
  resultElement.innerHTML = result;
  actionSelected.innerHTML = action;
  errorElement.innerHTML = error;
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = document.querySelector("textarea").value;
  const action = document.querySelector('input[name="action"]:checked').value;

  loading.style.display = "block";
  copyBtn.style.display = "none";
  setInnerHtml({ result: "", action: "", error: "" });

  try {
    const response = await fetch("http://localhost:8000/analizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, action }),
    });
    const result = await response.json();
    setInnerHtml({
      result: marked.parse(result[action]),
      action: `Acción seleccionada: <strong>${acciones[action]}</strong>`,
      error: "",
    });
    copyBtn.style.display = "inline-block";
  } catch (e) {
    console.error(e);
    setInnerHtml({
      result: "",
      action: "",
      error: "Ocurrió un error. Intentá de nuevo. Error: " + e.message,
    });
  } finally {
    loading.style.display = "none";
  }
});

copyBtn.addEventListener("click", async () => {
  const text = resultElement.innerText;
  await navigator.clipboard.writeText(text);
  copyBtn.textContent = "Copied! ✓";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 2000);
});
