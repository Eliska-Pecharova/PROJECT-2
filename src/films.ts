/*
 *FILMS-ROLLER
 */
document.addEventListener("DOMContentLoaded", () => {
  const roller = document.getElementById("rollerButton") as HTMLSelectElement;
  const grid = document.getElementById("posterGrid");

  // Check if required elements exist
  if (!roller || !grid) {
    console.error("Roletka nenalezena");
    return;
  }

  // Union type including undefined
  type T_Selected = "Girl" | "Boy" | "Avengers" | "Horror" | undefined;

  // Strict array of allowed values (readonly)
  const allowedValues = ["Girl", "Boy", "Avengers", "Horror"] as const;

  // Derived type from array (without undefined)
  type AllowedValue = (typeof allowedValues)[number];

  // Type for fetched show data
  type ShowData = {
    show: {
      name: string;
      image?: {
        original: string;
      };
    };
  };

  // Listen for dropdown change
  roller.addEventListener("change", async (event) => {
    const selected = (event.target as HTMLSelectElement).value;

    // If selected value is allowed, assign it; otherwise undefined
    const typedSelected: T_Selected = allowedValues.includes(
      selected as AllowedValue
    )
      ? (selected as AllowedValue)
      : undefined;

    // Clear previous grid content
    grid.innerHTML = "";

    // If selection is invalid, exit
    if (!typedSelected) return;

    try {
      // Fetch data from API
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${typedSelected.toLowerCase()}`
      );
      const data: ShowData[] = await response.json();

      // Loop through results and render images
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
    } catch (error) {
      console.error("Chyba při načítání:", error);
    }
  });
});

