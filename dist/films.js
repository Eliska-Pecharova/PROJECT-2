/*
 *FILMS-ROLLER
 */
document.addEventListener("DOMContentLoaded", () => {
  const roller = document.getElementById("rollerButton");
  if (!roller) {
    console.error("Roletka nenalezena");
    return;
  }
  roller.addEventListener("change", async (event) => {
    const selected = event.target.value;
    const grid = document.getElementById("posterGrid");
    //Conditions
    if (!grid) {
      console.error("Grid nenalezen");
      return;
    }
    if (
      selected === "Girl" ||
      selected === "Boy" ||
      selected === "Avengers" ||
      selected === "Horror"
    ) {
      try {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${selected.toLowerCase()}`
        );
        const data = await res.json();
        const grid = document.getElementById("posterGrid");
        if (!grid) return;
        grid.innerHTML = ""; // Clears previous content
        data.forEach((item) => {
          const show = item.show;
          const imgUrl = show.image?.original;
          if (imgUrl) {
            const img = document.createElement("img");
            img.src = imgUrl;
            img.alt = show.name;
            img.style.width = "200px";
            img.style.margin = "10px";
            grid.appendChild(img);
          }
        });
      } catch (err) {
        console.error("Chyba při načítání:", err);
      }
    } else {
      grid.innerHTML = "";
    }
  });
});
//# sourceMappingURL=films.js.map
