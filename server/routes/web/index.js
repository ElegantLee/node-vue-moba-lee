module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  const Hero = mongoose.model('Hero')

  /* 批量导入新闻数据 */
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻资讯'
    })
    console.log(parent)
    // 只找新闻分类下的子分类
    const cats = await Category.find()
      .where({
        parent: parent
      })
      .lean()

    console.log(cats)
    const newsTitles = [
      '6月10日全服不停机更新公告',
      '吕布英雄特效升级及其对应的皮肤调整【老亚瑟的答疑时间】',
      '6月2日全服不停机更新公告',
      '三街工作室|共创装备即将上线体验服！',
      '宫本武藏英雄品质升级对应的皮肤调整进展【老亚瑟的答疑时间】',
      '吕布英雄特效升级及其对应的皮肤调整【老亚瑟的答疑时间】',
      '两大赛事即将启航，王者荣耀2022年电竞规划重磅发布',
      '2022年王者荣耀职业联赛KPL夏季赛开赛主题曲上线',
      '6.5世界环境日特别活动|假如低碳生活是演艺圈，你是什么咖位？参与免费抽短鹅',
      '蔡小姬探班手记|所有等待，终将重逢——时之恋人星元皮肤海报设计故事',
      '6月10日体验服停机更新公告',
      '6月10日全服不停机更新公告',
      '6月10日全服不停机更新公告',
      '6月9日外挂专项打击公告',
      '6月9日游戏内违规签名、攻略信息处罚公告',
      '宫本武藏英雄品质升级归来！高渐离-天秀·音浪首周532点券！',
      '【夏日挑战】活动开启公告及FAQ',
      '【六月好礼-夏日无双榜】活动开启公告',
      'FMVP马超-无双飞将上线！',
      '【无双飞将的幸运礼】活动开启公告',
      'KPL今日预报丨小义回归打野，游走湘军带队迎战对抗路小夜！',
      '第五届王者荣耀全国大赛全国32强及资格赛入围名单',
      'KPL今日预报丨五冠教练久哲回归首秀，北京WB迎来S组首战！',
      '王者荣耀世界赛将于年底打响，世冠回忆主题站上线！',
      '两大赛事即将启航，王者荣耀2022年电竞规划重磅发布'
    ]
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title: title
      }
    })
    await Article.deleteMany()
    await Article.insertMany(newsList)
    res.send(newsList)
  })

  router.get('/news/list', async (req, res) => {
    // const parent = await Category.findOne({
    //   name: '新闻资讯'
    // })
    //   .populate({
    //     path: 'children',
    //     populate: {
    //       path: 'newsList'
    //     }
    //   })
    //   .lean()

    const parent = await Category.findOne({
      name: '新闻资讯'
    })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } }, // 过滤数据
      {
        // 关联查询
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      },
      {
        $addFields: {
          newsList: { $slice: ['$newsList', 5] } // 只查5条数据
        }
      }
    ])
    const subCats = cats.map(item => item._id)
    cats.unshift({
      name: '热门',
      newsList: await Article.find()
        .where({
          categories: { $in: subCats }
        })
        .populate('categories')
        .limit(5)
        .lean()
    })

    cats.map(cat => {
      cat.newsList.map(news => {
        news.categoryName = cat.name === '热门' ? news.categories[0].name : cat.name
        return news
      })
      return cat
    })
    res.send(cats)
  })

  /* 批量导入英雄数据 */
  router.get('/heroes/init', async (req, res) => {
    await Hero.deleteMany({})
    const rawData = [
      {
        name: '热门',
        heroes: [
          {
            name: '孙尚香',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg'
          },
          {
            name: '宫本武藏',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg'
          },
          {
            name: '鲁班七号',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg'
          },
          {
            name: '安琪拉',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg'
          },
          {
            name: '甄姬',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg'
          },
          {
            name: '妲己',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg'
          },
          {
            name: '马可波罗',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg'
          },
          {
            name: '瑶',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg'
          },
          {
            name: '亚瑟',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg'
          },
          {
            name: '后羿',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg'
          }
        ]
      },
      {
        name: '战士',
        heroes: [
          {
            name: '赵云',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg'
          },
          {
            name: '墨子',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg'
          },
          {
            name: '钟无艳',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg'
          },
          {
            name: '吕布',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg'
          },
          {
            name: '夏侯惇',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg'
          },
          {
            name: '曹操',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg'
          },
          {
            name: '典韦',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg'
          },
          {
            name: '宫本武藏',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg'
          },
          {
            name: '达摩',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg'
          },
          {
            name: '老夫子',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg'
          },
          {
            name: '关羽',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg'
          },
          {
            name: '程咬金',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg'
          },
          {
            name: '露娜',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg'
          },
          {
            name: '花木兰',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg'
          },
          {
            name: '橘右京',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg'
          },
          {
            name: '亚瑟',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg'
          },
          {
            name: '孙悟空',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg'
          },
          {
            name: '刘备',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg'
          },
          {
            name: '杨戬',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg'
          },
          {
            name: '雅典娜',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg'
          },
          {
            name: '哪吒',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg'
          },
          {
            name: '铠',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg'
          },
          {
            name: '梦奇',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg'
          },
          {
            name: '裴擒虎',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg'
          },
          {
            name: '狂铁',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg'
          },
          {
            name: '孙策',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg'
          },
          {
            name: '李信',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg'
          },
          {
            name: '盘古',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg'
          },
          {
            name: '云中君',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg'
          },
          {
            name: '曜',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg'
          },
          {
            name: '马超',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg'
          },
          {
            name: '蒙恬',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg'
          },
          {
            name: '夏洛特',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg'
          },
          {
            name: '司空震',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg'
          },
          {
            name: '云缨',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg'
          }
        ]
      },
      {
        name: '法师',
        heroes: [
          {
            name: '小乔',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg'
          },
          {
            name: '墨子',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg'
          },
          {
            name: '妲己',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg'
          },
          {
            name: '嬴政',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg'
          },
          {
            name: '高渐离',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg'
          },
          {
            name: '孙膑',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg'
          },
          {
            name: '扁鹊',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg'
          },
          {
            name: '芈月',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg'
          },
          {
            name: '周瑜',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg'
          },
          {
            name: '甄姬',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg'
          },
          {
            name: '武则天',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg'
          },
          {
            name: '貂蝉',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg'
          },
          {
            name: '安琪拉',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg'
          },
          {
            name: '露娜',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg'
          },
          {
            name: '姜子牙',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg'
          },
          {
            name: '王昭君',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg'
          },
          {
            name: '张良',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg'
          },
          {
            name: '不知火舞',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg'
          },
          {
            name: '钟馗',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg'
          },
          {
            name: '诸葛亮',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg'
          },
          {
            name: '干将莫邪',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg'
          },
          {
            name: '女娲',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg'
          },
          {
            name: '杨玉环',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg'
          },
          {
            name: '弈星',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg'
          },
          {
            name: '米莱狄',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg'
          },
          {
            name: '司马懿',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg'
          },
          {
            name: '沈梦溪',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg'
          },
          {
            name: '上官婉儿',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg'
          },
          {
            name: '嫦娥',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg'
          },
          {
            name: '西施',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg'
          },
          {
            name: '司空震',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg'
          },
          {
            name: '金蝉',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/540/540.jpg'
          }
        ]
      },
      {
        name: '坦克',
        heroes: [
          {
            name: '廉颇',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg'
          },
          {
            name: '庄周',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg'
          },
          {
            name: '刘禅',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg'
          },
          {
            name: '钟无艳',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg'
          },
          {
            name: '白起',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg'
          },
          {
            name: '芈月',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg'
          },
          {
            name: '吕布',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg'
          },
          {
            name: '夏侯惇',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg'
          },
          {
            name: '达摩',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg'
          },
          {
            name: '项羽',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg'
          },
          {
            name: '程咬金',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg'
          },
          {
            name: '刘邦',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg'
          },
          {
            name: '亚瑟',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg'
          },
          {
            name: '牛魔',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg'
          },
          {
            name: '张飞',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg'
          },
          {
            name: '太乙真人',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg'
          },
          {
            name: '东皇太一',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg'
          },
          {
            name: '铠',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg'
          },
          {
            name: '苏烈',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg'
          },
          {
            name: '梦奇',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg'
          },
          {
            name: '孙策',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg'
          },
          {
            name: '盾山',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg'
          },
          {
            name: '嫦娥',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg'
          },
          {
            name: '猪八戒',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg'
          },
          {
            name: '蒙恬',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg'
          },
          {
            name: '阿古朵',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg'
          }
        ]
      },
      {
        name: '刺客',
        heroes: [
          {
            name: '赵云',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg'
          },
          {
            name: '阿轲',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg'
          },
          {
            name: '李白',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg'
          },
          {
            name: '貂蝉',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg'
          },
          {
            name: '韩信',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg'
          },
          {
            name: '兰陵王',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg'
          },
          {
            name: '花木兰',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg'
          },
          {
            name: '不知火舞',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg'
          },
          {
            name: '娜可露露',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg'
          },
          {
            name: '橘右京',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg'
          },
          {
            name: '孙悟空',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg'
          },
          {
            name: '百里守约',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg'
          },
          {
            name: '百里玄策',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg'
          },
          {
            name: '裴擒虎',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg'
          },
          {
            name: '元歌',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg'
          },
          {
            name: '司马懿',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg'
          },
          {
            name: '上官婉儿',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg'
          },
          {
            name: '云中君',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg'
          },
          {
            name: '马超',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg'
          },
          {
            name: '镜',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg'
          },
          {
            name: '澜',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg'
          },
          {
            name: '云缨',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg'
          },
          {
            name: '暃',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/542/542.jpg'
          }
        ]
      },
      {
        name: '射手',
        heroes: [
          {
            name: '孙尚香',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg'
          },
          {
            name: '鲁班七号',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg'
          },
          {
            name: '马可波罗',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg'
          },
          {
            name: '狄仁杰',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg'
          },
          {
            name: '后羿',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg'
          },
          {
            name: '李元芳',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg'
          },
          {
            name: '虞姬',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg'
          },
          {
            name: '成吉思汗',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg'
          },
          {
            name: '黄忠',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg'
          },
          {
            name: '百里守约',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg'
          },
          {
            name: '公孙离',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg'
          },
          {
            name: '伽罗',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg'
          },
          {
            name: '蒙犽',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg'
          },
          {
            name: '艾琳',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg'
          }
        ]
      },
      {
        name: '辅助',
        heroes: [
          {
            name: '庄周',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg'
          },
          {
            name: '刘禅',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg'
          },
          {
            name: '孙膑',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg'
          },
          {
            name: '牛魔',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg'
          },
          {
            name: '张飞',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg'
          },
          {
            name: '钟馗',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg'
          },
          {
            name: '蔡文姬',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg'
          },
          {
            name: '太乙真人',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg'
          },
          {
            name: '大乔',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg'
          },
          {
            name: '东皇太一',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg'
          },
          {
            name: '鬼谷子',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg'
          },
          {
            name: '苏烈',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg'
          },
          {
            name: '明世隐',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg'
          },
          {
            name: '盾山',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg'
          },
          {
            name: '瑶',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg'
          },
          {
            name: '鲁班大师',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg'
          },
          {
            name: '金蝉',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/540/540.jpg'
          },
          {
            name: '桑启',
            avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/534/534.jpg'
          }
        ]
      }
    ]
    for (const cat of rawData) {
      if (cat.name === '热门') {
        continue
      }

      const category = await Category.findOne({
        name: cat.name
      })
      cat.heroes.map(hero => {
        hero.categories = [category]
        return hero
      })

      await Hero.insertMany(cat.heroes)
    }

    res.send(await Hero.find())
  })

  /* 获取英雄列表 */
  router.get('/heroes/list', async (req, res) => {
    const parent = await Category.findOne({
      name: '英雄列表'
    })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } }, // 过滤数据
      {
        // 关联查询
        $lookup: {
          from: 'heroes',
          localField: '_id',
          foreignField: 'categories',
          as: 'heroList'
        }
      }
      // {
      //   $addFields: {
      //     heroList: { $slice: ['$heroList', 5] } // 只查5条数据
      //   }
      // }
    ])

    // console.log(cats)

    const subCats = cats.map(item => item._id)
    cats.unshift({
      name: '热门',
      heroList: await Hero.find()
        .where({
          categories: { $in: subCats }
        })
        .populate('categories')
        .limit(10)
        .lean()
    })
    res.send(cats)
  })

  /* 文章详情接口 */
  router.get('/articles/:id', async (req, res) => {
    const data = await Article.findById(req.params.id)
    res.send(data)
  })

  /* 获取英雄详情信息---关联查询 */
  router.get('/heroes/:id', async (req, res) => {
    const data = await Hero.findById(req.params.id).populate('categories items1 items2 partners.hero').lean()
    res.send(data)
  })

  /* 英雄进阶攻略 */

  const strategy = [
    {
      url: 'https://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&tid=205952&e_code=pvpweb_m.statictypenew.typeundefined',
      cover: 'https://shp.qpic.cn/cfwebcap/759707493/2ad75193983b87102711a650dede3866/0/?width=230&height=140',
      title: '【快速上手英雄技能】赵云',
      fre: '1441.1万',
      date: '2017-12-11'
    },
    {
      url: 'https://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&tid=36997&e_code=pvpweb_m.statictypenew.typeundefined',
      cover: 'https://shp.qpic.cn/cfwebcap/1546387229/289a96cda86e0f25bb91adb521e9fdc6/0/?width=230&height=140',
      title: '【英雄介绍】赵云',
      fre: '439.2万',
      date: '2015-12-29'
    },
    {
      url: 'https://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&tid=243945&e_code=pvpweb_m.statictypenew.type2',
      cover: 'https://puui.qpic.cn/vpic/0/i061024lj9s.png/0',
      title: '零度带你飞53：常山赵子龙在此，尔等休得放肆！',
      fre: '739.4万',
      date: '2018-03-22'
    },
    {
      url: 'https://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&tid=174844&e_code=pvpweb_m.statictypenew.type2',
      cover: 'https://shp.qpic.cn/cfwebcap/2164452127/127a016366fd89e391d8579880ce07ee/0/',
      title: '九门兵书：吾乃常山赵子龙，龙魂觉醒苍天翔龙',
      fre: '182.6万',
      date: '2017-09-16'
    }
  ]
  router.put('/heroes/:id', async (req, res) => {
    console.log(req.params.id)
    const zy = Hero.findByIdAndUpdate(req.params.id, strategy)
    // console.log(zy)
    res.send(zy)
  })

  /* 获取视频列表信息 */
  router.get('/videoes/list', async (req, res) => {
    const parent = await Category.findOne({
      name: '精彩视频'
    })
    // 关联查询视频的所有分类的数据
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } }, // 过滤数据
      {
        // 关联查询
        $lookup: {
          from: 'videoes',
          localField: '_id',
          foreignField: 'category',
          as: 'videoList'
        }
      }
      // {
      //   $addFields: {
      //     heroList: { $slice: ['$heroList', 5] } // 只查5条数据
      //   }
      // }
    ])
    res.send(cats)
  })
  app.use('/web/api', router)
}
