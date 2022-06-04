const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String }, // 英雄名称
  avator: { type: String }, // 英雄图标
  title: { type: String }, // 英雄称号
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' }], // 英雄类型
  scores: { // 英雄评价
    difficult: { type: Number }, // 难度
    skills: { type: Number }, // 技能
    attack: { type: Number }, // 攻击
    survive: { type: Number } // 生存
  },
  skills: [{ // 技能
    icon: { type: String }, // 图标
    name: { type: String }, // 名称
    description: { type: String }, // 描述
    tips: { type: String } // 小提示
  }],
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }], // 顺风出装
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }], // 逆风出装
  usageTips: { type: String }, // 使用技巧
  battleTips: { type: String }, // 对抗技巧
  teamTips: { type: String }, // 团战思路
  partners: [{ // 最佳搭档
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    description: { type: String }
  }]

})

module.exports = mongoose.model('Hero', schema)
