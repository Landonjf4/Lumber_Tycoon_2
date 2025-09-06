document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const resultsContainer = document.getElementById("resultsContainer");

  if (!searchBar) return;

  const pages = [
    { name: "Axe Discovery", url: "AxeFolder/AxeDiscovery.html", img: "" },
    { name: "Basic Hatchet", url: "AxeFolder/Axes/BasicHatchet.html", img: "https://raw.githubusercontent.com/Landonjf4/Lumber_Tycoon_2/refs/heads/main/ImagesFolder/AxeImagesFolder/BasicHatchetFolder/BasicHatchetIcon2.png" },
    { name: "Main Wiki", url: "#", img: "" }
  ];

  // Clear search results when navigating back
  window.addEventListener("pageshow", () => {
    resultsContainer.style.display = "none";
    resultsContainer.innerHTML = "";
    searchBar.value = "";
  });

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

    const matches = pages.filter(page => page.name.toLowerCase().startsWith(query));

    if (matches.length === 0) {
      resultsContainer.style.display = "none";
      return;
    }

    matches.forEach(match => {
      const div = document.createElement("div");
      div.classList.add("result-item");

      const textWrapper = document.createElement("div");
      textWrapper.classList.add("result-text");
      textWrapper.textContent = match.name;

      div.appendChild(textWrapper);

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

    resultsContainer.style.display = "flex";
  });

  document.addEventListener("click", (event) => {
    if (!searchBar.contains(event.target) && !resultsContainer.contains(event.target)) {
      resultsContainer.style.display = "none";
      resultsContainer.innerHTML = "";
      document.body.classList.remove("search-active");
    }
  });
});
