document.addEventListener("DOMContentLoaded", () => {
  const openSearchBtn = document.getElementById("openSearch");
  const searchModal = document.getElementById("searchModal");
  const searchBar = document.getElementById("searchBar");
  const resultsContainer = document.getElementById("resultsContainer");

  // Pages array with optional images
  const pages = [
    { 
      name: "Axe Discovery", 
      url: "https://landonjf4.github.io/Lumber_Tycoon_2/AxeFolder/AxeDiscovery.html",
      img: ""
    },
    { 
      name: "Basic Hatchet", 
      url: "https://landonjf4.github.io/Lumber_Tycoon_2/AxeFolder/Axes/BasicHatchet.html",
      img: "https://raw.githubusercontent.com/Landonjf4/Lumber_Tycoon_2/refs/heads/main/ImagesFolder/AxeImagesFolder/BasicHatchetFolder/BasicHatchetIcon.png"
    },
    { 
      name: "Main Wiki", 
      url: "https://landonjf4.github.io/Lumber_Tycoon_2/",
      img: ""
    }
  ];

  // Open the search modal
  openSearchBtn.addEventListener("click", () => {
    searchModal.style.display = "flex";
    document.body.classList.add("search-active");
    searchBar.focus();
  });

  // Show results while typing
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase().trim();
    resultsContainer.innerHTML = "";

    if (query === "") return;

    const matches = pages.filter(page => page.name.toLowerCase().includes(query));

    if (matches.length > 0) {
      matches.forEach(match => {
        const div = document.createElement("div");
        div.classList.add("result-item");

        // Add image only if it exists
        if (match.img) {
          const img = document.createElement("img");
          img.src = match.img;
          img.style.border = "1px solid black"; // border only if image exists
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
  });

  // Close modal if clicking outside
  document.addEventListener("click", (event) => {
    if (!searchModal.contains(event.target) && event.target !== openSearchBtn) {
      searchModal.style.display = "none";
      resultsContainer.innerHTML = "";
      searchBar.value = "";
      document.body.classList.remove("search-active");
    }
  });
});
