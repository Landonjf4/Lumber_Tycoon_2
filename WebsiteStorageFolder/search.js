document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const resultsContainer = document.getElementById("resultsContainer");

  if (!searchBar) return;

  const pages = [
    { name: "Axe Discovery", url: "AxeFolder/AxeDiscovery.html", img: "" },
    { name: "Basic Hatchet", url: "AxeFolder/Axes/BasicHatchet.html", img: "https://raw.githubusercontent.com/Landonjf4/Lumber_Tycoon_2/refs/heads/main/ImagesFolder/AxeImagesFolder/BasicHatchetFolder/BasicHatchetIcon.png" },
    { name: "Main Wiki", url: "#", img: "" }
  ];

  // Blur behind everything except overlay
  searchBar.addEventListener("focus", () => {
    document.body.classList.add("search-active");
  });

  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase().trim();
    resultsContainer.innerHTML = "";

    if (!query) {
      resultsContainer.style.display = "none";
      return;
    }

    const matches = pages.filter(page => page.name.toLowerCase().includes(query));

    matches.forEach(match => {
      const div = document.createElement("div");
      div.classList.add("result-item");

      // Text left
      const span = document.createElement("span");
      span.textContent = match.name;
      div.appendChild(span);

      // Image right if exists
      if (match.img) {
        const img = document.createElement("img");
        img.src = match.img;
        div.appendChild(img);
      }

      div.addEventListener("click", () => {
        window.location.href = match.url;
      });

      resultsContainer.appendChild(div);
    });

    if (matches.length === 0) {
      const div = document.createElement("div");
      div.classList.add("result-item");
      div.textContent = "No results found";
      resultsContainer.appendChild(div);
    }

    resultsContainer.style.display = "flex";
  });

  // Click outside: hide results & remove blur
  document.addEventListener("click", (event) => {
    if (!searchBar.contains(event.target) && !resultsContainer.contains(event.target)) {
      resultsContainer.style.display = "none";
      resultsContainer.innerHTML = "";
      document.body.classList.remove("search-active");
    }
  });
});
