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

  // Strict array of allowed values (readonly)
  const allowedValues = [
    "Girl",
    "Boy",
    "Monster",
    "Avengers",
    "Romance",
    "SciFi",
    "Fantasy",
    "Drama",
    "Horror",
  ] as const;
  // Type of all values from allowedValues array
  type AllowedValue = (typeof allowedValues)[number] | undefined;

  // Type for fetched show data
  type ShowData = {
    show: {
      name: string;
      image?: {
        original: string;
      };
    };
  };
  // Listen for changes in the dropdown selection
  roller.addEventListener("change", async () => {
    // Get the selected value from the dropdown
    const selectedValue = roller.value as AllowedValue;

    // If nothing is selected, prompt the user to choose a category
    if (!selectedValue) {
      grid.innerHTML = "<p>Please select a category.</p>";
      return;
    }

    // Show loading message while fetching data
    grid.innerHTML = "<p>Loading...</p>";

    try {
      // Fetch show data from the TVmaze API based on selected category
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${selectedValue.toLowerCase()}`
      );
      const data: ShowData[] = await response.json();

      // Clear the grid before displaying new results
      grid.innerHTML = "";

      // If no results are found, show a message
      if (data.length === 0) {
        grid.innerHTML = "<p>No results found.</p>";
        return;
      }

      // Loop through each show and display its image
      data.forEach(({ show }) => {
        if (show.image?.original) {
          const img = document.createElement("img");
          img.src = show.image.original;
          img.alt = show.name;
          img.style.width = "200px";
          img.style.margin = "10px";
          img.style.borderRadius = "8px";
          img.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          grid.appendChild(img);
        }
      });
    } catch (error) {
      // Handle any errors that occur during fetch
      console.error("Error fetching data:", error);
      grid.innerHTML = "<p>Something went wrong while loading data.</p>";
    }
  });
});
