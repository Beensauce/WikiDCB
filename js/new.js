const articles = [
    {
      id: 2,
      title: "Why do bicycles become more stable when they go faster?",
      date: "2025-02-09",
      author: "Yeonwoo Kim",
      summary: "Pretty cool beans if you ask me, ever wonder why?",
    },
    {
      id: 2,
      title: "Geometry Basics",
      date: "2025-01-01",
      author: "Bob Johnson",
      summary: "Explore the fundamentals of geometry, including shapes and angles.",
    },
    {
      id: 3,
      title: "Introduction to Calculus",
      date: "2024-12-31",
      author: "Eve White",
      summary: "Dive into the world of calculus with this beginner-friendly guide.",
    },
    {
      id: 4,
      title: "Advanced Statistics",
      date: "2024-12-30",
      author: "John Pork",
      summary: "Learn the advanced concepts in statistics, from probability distributions to hypothesis testing.",
    },
  ];
  
  function displayArticles() {
    const articlesContainer = document.querySelector(".articles");
  
    // Sort articles by date (latest first)
    const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    // Dynamically create article blocks
    sortedArticles.forEach((article) => {
      const articleBlock = document.createElement("article");
      articleBlock.className = "article-block";
  
      articleBlock.innerHTML = `
        <h2>${article.title}</h2>
        <p><strong>Last updated:</strong> ${new Date(article.date).toLocaleDateString()}</p>
        <p><strong>Author:</strong> ${article.author}</p>
        <p>${article.summary}</p>
        <a href="article.html?id=${article.id}">Read more</a>
      `;
  
      articlesContainer.appendChild(articleBlock);
    });
  }
  
  // Run the function when the page loads
  document.addEventListener("DOMContentLoaded", displayArticles);
  
