// Simulated "database" of articles
const articles = {
    "1": {
      title: "Understanding Algebra",
      date: "02 Jan, 2025",
      author: "John Doe",
      image: "./images/Simple.jpg",
      body: "Physics is the study of matter, motion, and the universe. It's a foundational science that has shaped modern technology."
    },
    "2":{
      title: "Why do bicycles become more stable when they go faster?",
      date: "09 Feb, 2025",
      author: "Yeonwoo Kim",
      image: "./images/maxersdefault.jpg",
      body: "Most of you have likely experienced riding a bicycle. As a child learning to ride, you need the courage to pedal faster to help maintain your balance"
    },
  };
  
  // Function to load article based on query parameter
  function loadArticle() {
    // Get the URL query parameters
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id");
  
    // Debugging: Log the articleId to check if it's being read correctly
    console.log("Article ID:", articleId);
  
    // Find the article in the database
    const article = articles[articleId];
  
    // Debugging: Check if the article was found
    console.log("Article found:", article);
  
    if (article) {
      // Populate the HTML with article data
      document.getElementById("article-title").textContent = article.title;
      document.getElementById("article-date").textContent = `Last update: ${article.date}`;
      document.getElementById("article-image").src = article.image;
      document.getElementById("article-image").alt = article.title;
      document.getElementById("article-body").textContent = article.body;
      document.getElementById("article-author").textContent = `Author: ${article.author}`;
    } else {
      // If no article is found, show an error
      document.getElementById("article-title").textContent = "Article not found";
      document.getElementById("article-body").textContent = "The article you are looking for does not exist.";
      document.getElementById("article-image").style.display = "none";
    }
  }
  
  // Run the function when the page loads
  window.onload = loadArticle;
  
