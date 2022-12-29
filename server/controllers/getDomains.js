const getDomains = (response) => {
    const domainCount = {}
    //create an array of elements, make a new element on every line break
    const responseArr = response.data.split('\n')

    //loop through every element of the array
    for (const element of responseArr) {
        //regex of a website
        const domainRegex = /^([^#][^,\s]*)/

        //check if there is a match of a website name in the element
        const match = element.match(domainRegex)

        if (match) {
            //catch the domain URL in a variable
            const domainURL = match[0]
            //if the domain URL isn't in the object, add a key with the URL name and a value of 1
            if (!domainCount[domainURL]) {
                domainCount[domainURL] = 1
            //if the URL name is there just add 1 to the count
            } else {
                domainCount[domainURL]++
            }
        }
    }

    return domainCount
}



module.exports = getDomains