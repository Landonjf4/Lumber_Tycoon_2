document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const resultsContainer = document.getElementById("resultsContainer");

  const pages = [
    { name: "Axe Discovery", url: "AxeFolder/AxeDiscovery.html", img: "ImagesFolder/AxeDiscovery.png" },
    { name: "Basic Hatchet", url: "AxeFolder/Axes/BasicHatchet.html", img: "ImagesFolder/BasicHatchet.png" },
    { name: "Main Wiki", url: "#", img: "" } // no image
  ];

  // Focus event: add blur to background
  searchBar.addEventListener("focus", () => {
    document.body.classList.add("search-active");
  });

  // Show results while typing
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase().trim();
    resultsContainer.innerHTML = "";

    if (!query) {
      resultsContainer.style.display = "none";
      return;
    }

    const matches = pages.filter(page => page.name.toLowerCase().includes(query));

    if (matches.length > 0) {
      matches.forEach(match => {
        const div = document.createElement("div");
        div.classList.add("result-item");

        // Only add image if it exists
        if (match.img) {
          const img = document.createElement("img");
          img.src = match.img;
          div.appendChild(img);
        }

        const span = document.createElement("span");
        span.textContent = match.name;
        div.appendChild(span);

        div.addEventListener("click", () => {
          window.location.href = match.url;
        });

        resultsContainer.appendChild(div);
      });
    } else {
      const div = document.createElement("div");
      div.classList.add("result-item");
      div.textContent = "No results found";
      resultsContainer.appendChild(div);
    }

    resultsContainer.style.display = "flex";
  });

  // Click outside: hide results and remove blur
  document.addEventListener("click", (event) => {
    if (!searchBar.contains(event.target) && !resultsContainer.contains(event.target)) {
      resultsContainer.style.display = "none";
      resultsContainer.innerHTML = "";
      document.body.classList.remove("search-active");
    }
  });
});
