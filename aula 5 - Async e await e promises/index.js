
console.log("inicio");

const data = await new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise resolvida");
    }, 2000);
});

console.log(data);


(async () => {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise resolvida");
        }, 2000);
    });

    console.log(data);
})();