document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const resultsContainer = document.getElementById("resultsContainer");

  // Example search data
  const pages = [
    { name: "Axe Discovery", url: "AxeFolder/AxeDiscovery.html" },
    { name: "Basic Hatchet", url: "AxeFolder/Axes/BasicHatchet.html" },
    { name: "Main Wiki", url: "index.html" }
  ];

  // Show results while typing
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase().trim();
    resultsContainer.innerHTML = "";

    if (query === "") {
      resultsContainer.style.display = "none";
      return;
    }

    const matches = pages.filter(page => page.name.toLowerCase().includes(query));

    if (matches.length > 0) {
      resultsContainer.style.display = "flex";
      matches.forEach(match => {
        const div = document.createElement("div");
        div.textContent = match.name;
        div.addEventListener("click", () => {
          window.location.href = match.url;
        });
        resultsContainer.appendChild(div);
      });
    } else {
      resultsContainer.style.display = "flex";
      const div = document.createElement("div");
      div.textContent = "No results found";
      resultsContainer.appendChild(div);
    }
  });

  // Hide results when clicking outside
  document.addEventListener("click", (event) => {
    if (!searchBar.contains(event.target) && !resultsContainer.contains(event.target)) {
      resultsContainer.style.display = "none";
    }
  });
});
