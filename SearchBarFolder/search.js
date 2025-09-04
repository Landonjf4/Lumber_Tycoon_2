const searchItems = [
  {
    keyword: "Axe Discovery",
    href: "AxeFolder/AxeDiscovery.html",
    sideImage: "https://via.placeholder.com/50"
  },
  {
    keyword: "Axe Throwing",
    href: "https://example.com/axe-throwing",
    sideImage: "https://via.placeholder.com/50/ff0000"
  }
];

function search(query) {
  const lowerQuery = query.toLowerCase();
  return searchItems
    .filter(item => item.keyword.toLowerCase().includes(lowerQuery))
    .sort((a, b) => a.keyword.localeCompare(b.keyword));
}

function renderResults(results) {
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  if (results.length === 0) {
    container.style.display = "none";
    return;
  }

  container.style.display = "flex";

  results.forEach(item => {
    const box = document.createElement("div");
    box.className = "resultBox";

    box.innerHTML = `
      <a href="${item.href}">${item.keyword}</a>
      <img src="${item.sideImage}" alt="${item.keyword}" class="sideImage">
    `;

    box.addEventListener("click", () => {
      window.location.href = item.href;
    });

    container.appendChild(box);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const resultsContainer = document.getElementById("resultsContainer");

  searchBar.addEventListener("input", (e) => {
    const query = e.target.value;
    const results = search(query);
    renderResults(results);
  });

  // Hide results when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && !resultsContainer.contains(e.target)) {
      resultsContainer.style.display = "none";
    }
  });

  // Show results again when focusing back
  searchBar.addEventListener("focus", () => {
    if (searchBar.value.trim() !== "") {
      const results = search(searchBar.value);
      renderResults(results);
    }
  });
});
