async function fetchData() {
  try {
      const response = await fetch("https://Sakira-url.com");  
      if (!response.ok) {
          throw new Error("Network response was not OK");
      }
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error("Fetch Error:", error.message);
  }
}

fetchData();