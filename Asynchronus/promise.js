function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched after 5 seconds");
      }, 5000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.log(err));
