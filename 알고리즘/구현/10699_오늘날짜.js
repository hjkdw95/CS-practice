let today = new Date();

let thisYear = today.getUTCFullYear();

let thisMonth = () => {
    if(today.getUTCMonth() < 9) {
        return `0${today.getUTCMonth() + 1}`;
    }
    return today.getUTCMonth() + 1;
}

let thisDate = () => {
    if (today.getUTCDate() < 10) {
        return `0${today.getUTCDate}`;
    }
    return today.getUTCDate() + 1;
} 
console.log(`${thisYear}-${thisMonth()}-${thisDate()}`);
