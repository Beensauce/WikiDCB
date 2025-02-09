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
      body: "Most of you have likely experienced riding a bicycle. As a child learning to ride, you need the courage to pedal faster to help maintain your balance. Typically, objects become less stable at higher velocities, but bicycles are different. What is the reason behind the bicycle's unique stability? Gyroscopic effect
The main reason behind the stability of a bicycle is the gyroscopic effect. This effect arises from the spinning wheels. When a wheel spins, it possesses angular momentum, which makes it resistant to changes in its orientation. This resistance to tilting helps keep the bicycle upright. So, what exactly is angular momentum? It is defined as the property of any rotating object, calculated as the moment of inertia multiplied by the angular velocity. 
Experiment about gyroscopic effect How the gyroscopic effect affects stability When a bicycle is in motion, any tilt or wobble creates a force that interacts with the spinning wheels. Instead of the bike simply falling over, the gyroscopic effect causes the front wheel to naturally steer in the direction of the tilt. This phenomenon, known as gyroscopic precession, enables the rider to regain balance without consciously thinking about it. At higher speeds, the gyroscopic forces become stronger, making it easier to keep the bicycle upright with minimal effort. Angular momentum (ℓ) can be expressed with the equation:
l=I×ω where: I is the moment of inertia of the wheel (which depends on its mass and shape), and ω (omega) is the angular velocity (how fast the wheel spins). When the speed of the bicycle increases, ω increases, which in turn increases ℓ. A higher angular momentum means the wheels resist changes to their tilt more strongly, helping the rider maintain balance. Conclusion Gyroscopic motion is a crucial factor in stabilizing objects, which is why it is used in various vehicles such as trains, cars, bicycles, and ships to maintain stability during movement. Additionally, gyroscopes can assist in determining altitude, making them valuable for navigation in aircraft and smartphones. Interestingly, a yo-yo is also a popular toy that utilizes gyroscopic principles."
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
  
