
function minimumWaitingTime(queries) {
    queries = queries.sort((a, b) => a - b);
    let total = 0;

    for (let i = 0; i < queries.length; i++) {
        // n for the loop on queries
        total += queries[i] * (queries.length - (i + 1));
    }
    return total;
}
const queries = [3, 2, 1, 2, 6];
console.log(minimumWaitingTime(queries));

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;