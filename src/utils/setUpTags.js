const setUpTags = (recipes) => {
  const allTags = {}
  recipes.forEach((recipe) => {
    recipe.type.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags)
  return newTags
}

export default setUpTags
