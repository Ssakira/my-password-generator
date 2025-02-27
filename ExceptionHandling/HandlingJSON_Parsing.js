const jsonString = '{ "name": "John", "age": 30 ';  //syntax error
try {
    const data = JSON.parse(jsonString);
    console.log(data);
} catch (error) {
    console.error("JSON Parse Error:", error.message);
}
