const button = document.getElementById("generate");

button.addEventListener("click", async function () {
  try {
    document.getElementById("fact").innerHTML = "Generating...";
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    document.getElementById("fact").innerHTML = data.fact;
  } catch (error) {
    console.error("Error:", error);
  }
});
