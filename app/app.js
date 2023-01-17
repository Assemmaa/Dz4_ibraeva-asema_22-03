var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', "div", "div"]
var collectTags = {}
    for (var i = 0; i < tags.length; i++){
        if (collectTags[tags[i]]) {
            collectTags[tags[i]]++
        }else {
            collectTags[tags[i]] = 1
        }
    }

collectTags = Object.keys(collectTags).sort((a, b) => {
        if (collectTags[a] < collectTags[b]){
            return -1
        }else if (collectTags[a] < collectTags[b]){
            return 1
        }else return 0
})
console.log(collectTags);

function maxCount (numbers) {
    let maxNumber = 0
    numbers.forEach(number =>{
        if (maxNumber < number) {
            maxNumber = number
        }
    })
    return maxNumber
}

console.log(maxCount([2,3,21,543,3]));

