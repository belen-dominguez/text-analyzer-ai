const form = document.querySelector("form");
const resultElement = document.getElementById("result");
const loading = document.getElementById("loading");
const actionSelected = document.getElementById("action-selected");
const errorElement = document.getElementById("error");

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
// La inteligencia artificial (IA) está transformando radicalmente la manera en que vivimos y trabajamos. Desde asistentes virtuales hasta sistemas de diagnóstico médico, la IA está presente en casi todos los sectores. Las empresas invierten millones en desarrollar algoritmos capaces de aprender y adaptarse. Sin embargo, este avance también genera preocupaciones sobre el empleo, la privacidad y la ética. Expertos debaten si la IA será aliada o amenaza para la humanidad en las próximas décadas.
