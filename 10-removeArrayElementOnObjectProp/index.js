const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
]; 

const filterField = "money"

function removeArrayElement(filterField) {
    return array.filter(function (item) { return item.field !== filterField });

}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
