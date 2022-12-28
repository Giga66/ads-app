const makeArray = (response) => {
    const domains = []
    //create an array of elements, make a new element on every line break
    const responseArr = response.data.split('\n')

    //loop through every element of the array
    for (const element of responseArr) {
        //regex of a website
        const domainRegex = /^\s*[^#]*\s*(?:domain=)?\s*([^,\s]+)/

        //check if there is a match of a website name in the element
        const match = element.match(domainRegex)

        if (match && element.indexOf('#') === -1) {
            domains.push(match[0].split(' ')[0])
        }
    }
    console.log(domains)
}

module.exports = makeArray