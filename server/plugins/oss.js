const OSS = require('ali-oss');

const config = {
    region: 'oss-cn-guangzhou', // 阿里oss地域名
    accessKeyId: 'xxxx', // 密钥
    accessKeySecret: 'xxxx'
};

const oss = new OSS(config);
oss.useBucket('xxxx'); // 使用哪个bucket储存

module.exports = oss;