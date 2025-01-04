const data = {
    "Maths": [
      { id: "1", title: "Understanding Algebra", date: "02 Jan, 2025", author: "Alice Smith", summary:"Cool maths" },
      { id: "2", title: "Geometry Basics", date: "01 Jan, 2025", author: "Bob Johnson" },
    ],
    "Physics": [
      { id: "3", title: "Newton's Laws of Motion", date: "03 Jan, 2025", author: "Charlie Brown" },
      { id: "4", title: "Electromagnetism Explained", date: "02 Jan, 2025", author: "Diana Prince" },
    ],
    "Chemistry": [
      { id: "5", title: "Introduction to Organic Chemistry", date: "03 Jan, 2025", author: "Edward James" },
      { id: "6", title: "Periodic Table Basics", date: "02 Jan, 2025", author: "Fiona Green" },
    ],
    "Biology": [
      { id: "7", title: "Cell Biology Basics", date: "02 Jan, 2025", author: "Grace Lee" },
      { id: "8", title: "Introduction to Genetics", date: "01 Jan, 2025", author: "Henry Adams" },
    ],
    "Computer Science": [
      { id: "9", title: "Programming Basics", date: "03 Jan, 2025", author: "Ivy Watson" },
      { id: "10", title: "Data Structures Overview", date: "02 Jan, 2025", author: "Jack White" },
    ],
  };
  
  function loadCategoryPage() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
  
    const subjectTitle = document.getElementById("subject");
    const articlesContainer = document.getElementById("articles-container");
  
    if (category && data[category]) {
      subjectTitle.textContent = category; // Set the subject name
      const articles = data[category]; // Get articles for the category
  
      // Clear container
      articlesContainer.innerHTML = "";
  
      // Generate individual article boxes
      articles.forEach((article) => {
        const articleBox = document.createElement("div");
        articleBox.className = "article-box";
  
        const articleTitle = document.createElement("h1");
        articleTitle.textContent = article.title;
        articleTitle.className = "article-title";
  
        const articleDate = document.createElement("p");
        articleDate.textContent = `Date: ${article.date}`;
        articleDate.className = "article-date";
  
        const articleAuthor = document.createElement("p");
        articleAuthor.textContent = `Author: ${article.author}`;
        articleAuthor.className = "article-author";
  
        const articleSummary = document.createElement("p");
        articleSummary.textContent = article.summary;
        articleSummary.className = "article-summary";
  
        const articleLink = document.createElement("a");
        articleLink.href = `article.html?id=${article.id}`;
        articleLink.textContent = "Read More";
        articleLink.className = "article-link";
  
        // Append elements to the article box
        articleBox.appendChild(articleTitle);
        articleBox.appendChild(articleDate);
        articleBox.appendChild(articleAuthor);
        articleBox.appendChild(articleSummary); // Add the summary
        articleBox.appendChild(articleLink);
  
        // Append article box to the container
        articlesContainer.appendChild(articleBox);
      });
    } else {
      subjectTitle.textContent = "Category Not Found";
      articlesContainer.innerHTML = "<p>No articles available for this category.</p>";
    }
  }
  
  window.onload = loadCategoryPage;
  
  
  