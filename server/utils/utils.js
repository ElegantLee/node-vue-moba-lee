async function getSearchOption(req, Category) {
  let searchOptions = {}
  if (req.query.search) {
    const reg = new RegExp(req.query.search, 'i') // 首个参数为字符串模式的构造函数
    const category = await Category.find({ name: { $regex: reg } })
    searchOptions = {
      $or: [
        { name: { $regex: reg } },
        { title: { $regex: reg } },
        { body: { $regex: req.query.search, $options: '$i' } },
        { parent: category },
        { category: category },
        { categories: { $in: category } },
        { path: { $regex: reg } },
        { description: { $regex: reg } },
        { methods: { $regex: reg } }
      ]
    }
  }
  return searchOptions
}

function getSkipFields(req) {
  let skipFields = {
    // password: 0,
    body: 0
  }

  if (req.Model.modelName === 'Hero') {
    skipFields = {
      avatar: 1,
      categories: 1,
      name: 1
    }
  } else if (req.Model.modelName === 'Item') {
    skipFields = {
      name: 1,
      category: 1,
      icon: 1
    }
  }
  return skipFields
}

module.exports = {
  getSearchOption,
  getSkipFields
}
