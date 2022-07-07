const rightMapping = {
  GET: '获取数据',
  POST: '新增操作',
  PUT: '修改操作',
  DELETE: '删除操作',
  SEARCH: '搜索操作'
}

function makePageItem(item, isTree) {
  item.type = 'page'
  if (isTree) {
    item.label = item.name
    item.id = item._id
    item.children = item.rights.map(right => {
      return {
        id: right + '-' + item._id,
        label: right,
        type: 'right',
        right: right,
        parentId: item._id,
        desc: rightMapping[right]
      }
    })
  }

  return item
}

function makeWebTree(adminWebs, isTree) {
  // console.log('makeWebTree')
  const hasMenu = [] // 有对应菜单的页面
  const noMenu = [] // 没有对应菜单的页面

  // 找到有菜单的页面
  adminWebs.forEach(adminWeb => {
    if (adminWeb.menu) {
      hasMenu.push(adminWeb)
    } else {
      noMenu.push(adminWeb)
    }
  })

  const obj = {} // 记录这个页面的分类是否已经添加
  // 找到侧边栏的所有菜单
  const uniqueCate = hasMenu.reduce((arr, item) => {
    let category = item.menu.parent.parent // 这里有一定局限性，只是页面设计是只有二级菜单
    if (!obj[category._id]) {
      obj[category._id] = true
      arr.push(category)
    }
    return arr
  }, new Array())

  // 找到侧边栏每个父级菜单的子菜单项
  const uniqueGroup = hasMenu.reduce((arr, item) => {
    let category = item.menu.parent
    if (!obj[category._id]) {
      obj[category._id] = true
      arr.push({
        _id: category._id,
        name: category.name,
        parentId: category.parent._id
        // icon: category.icon
      })
    }
    return arr
  }, new Array())

  // debugger

  // 构建一个树形结构的结果
  const resData = uniqueCate.map((categoryRoot, index1) => {
    // debugger
    if (isTree) {
      categoryRoot.label = categoryRoot.name + '分类' // 用于角色编辑页面的显示
      // console.log(categoryRoot.label)
      categoryRoot.id = index1 + 1
    }

    categoryRoot.type = 'category' // 方便角色编辑页面的显示
    categoryRoot.children = []
    uniqueGroup.forEach((group, index2) => {
      if (isTree) {
        group.label = group.name + '分组'
        // console.log(group.label)
        group.id = Number(categoryRoot.id + '00' + (index2 + 1))
      }
      group.type = 'group'
      group.children = []
      // debugger
      hasMenu.forEach(item => {
        item = makePageItem(item, isTree)
        if (item.menu.parent._id === group._id) {
          group.children.push(item)
        }
      })

      if (group.parentId === categoryRoot._id) {
        categoryRoot.children.push(group)
      }
    })
    return categoryRoot
  })

  if (noMenu.length > 0 && isTree) {
    const noMenuCategory = {
      id: 99999,
      label: '无菜单页面分类',
      type: 'category',
      children: []
    }

    noMenu.forEach(item => {
      item = makePageItem(item, isTree)
      noMenuCategory.children.push(item)
    })
    resData.push(noMenuCategory)
  }
  return resData
}

export { makeWebTree }
