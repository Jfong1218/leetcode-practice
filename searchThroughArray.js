
/* 
  Given an array of objects, a searchFor string, and searchBy key that exists
  in the object return a new array of only those objects whose value for the
  given key starts with the given search string.
  You can assume the key will exist on the object and the value of that key will be a string.
  Bonus: make the search case insensitive.
  Bonus: re-write it with functional programming, using built in methods.
  Bonus: allow the search method to be provided as a parameter, e.g.,
      string methods: includes, startsWith, endsWith.
    - you can assume the searchMethod will be valid.
  This kind of algorithm can be used in react onChange as you type into a
  search bar to live-filter a list.
*/

const people = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
    {
      firstName: "Edward",
      lastName: "Kim",
    },
  ];
  
  const searchFor1 = "Jo";
  const searchBy1 = "firstName";
  const expected1 = [
  {
  firstName: "John",
  lastName: "Doe",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
  ];
  
  const searchFor2 = "ohn";
  const searchBy2 = "firstName";
  const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"
  
  // level 2 - case insensitive
  const searchFor3 = "do";
  const searchBy3 = "lastName";
  const expected3 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ];
  
  // Bonus
  const searchFor4 = "E";
  const searchBy4 = "lastName";
  const searchMethod4 = "includes";
  const expected4 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
  ];
  
  // /**
  //  * Filters the given items based on the search criteria using a startsWith
  //  * search method.
  //  * - Time: O(?).
  //  * - Space: O(?).
  //  * @param {Array<Object>} items The items to be filtered.
  //  * @param {string} searchBy The key to search by.
  //  * @param {string} searchFor The value of the given key to search for.
  //  * @returns {Array<Objects>} The matched items.
  //  */
  // Level 1: case-sensitive
  // Level 2: case-insensitive
  // Level 3: use different searchMethod
  // Level 4: make it functional
  function filterByKeyStartsWith(items, searchFor, searchBy) {
    // searchFor : value (i.e. Jo)
    // searchBy: key to search (i.e. firstName)
    // Filters the given items based on the search criteria using a startsWith
    result = []
    count=0;
    for (person of items) {
    //console.log(person[searchBy])
      if (person[searchBy].toLowerCase().includes(searchFor.toLowerCase()))
        for (i = 0 ; i<searchFor.length; i++) {
          if (person[searchBy][i].toLowerCase() == searchFor[i].toLowerCase()){
            count++;
            // console.log(person[searchBy][i])
            if(searchFor.length===count){
              result.push(person)
              count=0;
            }
          }
          else {
            // console.log("before break")
            break
          }
        }
      // console.log("we're still in 113")
    }
    return result
  }
  
  console.log(filterByKeyStartsWith(people,searchFor1,searchBy1))
  console.log(filterByKeyStartsWith(people,searchFor2,searchBy2))
  console.log(filterByKeyStartsWith(people,searchFor3,searchBy3))
  console.log(filterByKeyStartsWith(people,searchFor4,searchBy4))
  
  
  function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
    // Filters the given items based on the search criteria using different search method
    // search method : includes, startsWith, endsWith
  
  }
  
  
  function functionalFilterByKey(items, searchFor, searchBy) { }
  