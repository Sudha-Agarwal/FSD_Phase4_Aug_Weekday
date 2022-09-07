const languages = new Map([
    ["java", 100],
    ["c++", 200],
    ["JS", 300]
]);

console.log(languages.get("java"));

languages.set("java", 200);

console.log(languages.get("java"));