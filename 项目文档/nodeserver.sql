/*
MySQL Data Transfer
Source Host: localhost
Source Database: nodeserver
Target Host: localhost
Target Database: nodeserver
Date: 2019/1/15 18:47:43
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cname` char(255) NOT NULL,
  `time` date NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` char(50) NOT NULL,
  `newsimgfrom` char(100) DEFAULT NULL,
  `sourselogfrom` char(100) NOT NULL,
  `sourcefrom` char(20) NOT NULL,
  `pinglunnum` int(11) DEFAULT NULL,
  `kind` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for stu
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(255) NOT NULL,
  `psw` char(255) DEFAULT NULL,
  `sex` char(255) DEFAULT '男',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `class` VALUES ('1', 'h5181011111222', '2019-01-08', '0');
INSERT INTO `class` VALUES ('2', 'h51809', '2019-01-09', '1');
INSERT INTO `class` VALUES ('3', 'qq群', '2019-01-09', '1');
INSERT INTO `class` VALUES ('4', 'qq', '2019-01-09', '0');
INSERT INTO `class` VALUES ('5', '三年二班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('6', '五班', '2019-01-09', '1');
INSERT INTO `class` VALUES ('7', '九班', '2019-01-09', '1');
INSERT INTO `class` VALUES ('8', '一班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('9', '二班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('10', '三班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('11', '四班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('12', '五班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('13', '六班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('14', '七班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('15', '八班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('16', '九班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('17', '十班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('18', '是一般', '2019-01-09', '0');
INSERT INTO `class` VALUES ('19', '十二班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('20', '十三班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('21', '十四班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('22', '十5班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('23', '十6班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('24', '十7班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('25', '十八班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('26', '十9班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('27', '而是班', '2019-01-09', '0');
INSERT INTO `class` VALUES ('28', 'qq123qq', '2019-01-09', '0');
INSERT INTO `class` VALUES ('29', 'bashi', '2019-01-10', '1');
INSERT INTO `news` VALUES ('1', '无论愿不愿意 2019年必须面对的六个事实与趋势', '/img/a_1.png', '/img/a_sourcelog.png', '参考消息', '8', null);
INSERT INTO `news` VALUES ('2', '美国建墙拨款谈判又破裂，特朗普拍桌子后愤然离场', '/img/a_2.png', '/img/a_sourcelog.png', '环球时评', '662', null);
INSERT INTO `news` VALUES ('3', '特朗普大变卦！盟友被坑惨，强劲挑战来袭，蓬佩奥千里救急！', '/img/a_3.png', '/img/a_sourcelog.png', '长江新闻号', '2', null);
INSERT INTO `news` VALUES ('4', '美国政府关门19天！却悄悄推动这一石油项目，或暴露了美国野心？', '/img/a_4.png', '/img/a_sourcelog.png', '金十数据', '8', null);
INSERT INTO `news` VALUES ('5', '美政府停摆将破纪录：民主党议员抬着垃圾到白宫抗议', '/img/a_5.png', '/img/a_sourcelog.png', '文汇网', '278', null);
INSERT INTO `news` VALUES ('6', '最终的好结果仍需中美双方共同努力', '/img/a_6.png', '/img/a_sourcelog.png', '人民日报', '2', null);
INSERT INTO `news` VALUES ('7', '市值1年蒸发140亿！华谊兄弟22亿中期票据月底到期，“债务压顶”向银行申请授信“救急”', '/img/a_7.png', '/img/a_sourcelog.png', '中国网财经', '157', null);
INSERT INTO `news` VALUES ('8', '刚刚中俄贸易额成功超过1000亿美元：石油之后，农产品成新引擎？', '/img/a_8.png', '/img/a_sourcelog.png', '金十数据', '6', null);
INSERT INTO `news` VALUES ('9', '乌克兰承认本国政客曾干预美国总统大选 导致特朗普前幕僚辞职', '/img/a_9.png', '/img/a_sourcelog.png', '新闻看点', '1', null);
INSERT INTO `news` VALUES ('10', '《江苏省不动产登记条例》出台，成为全国首个不动产登记省级地方法规', null, '/img/a_sourcelog.png', '中国江苏网', '45', null);
INSERT INTO `news` VALUES ('13', '禀性难移 这四家运营商竟然还在卖用户数据！', '/1547479861318_594101.png', '/1547479861319_122548.png', '环球网', '161', '热点');
INSERT INTO `news` VALUES ('14', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480547576_154618.png', '/1547480547576_723081.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('15', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480592556_219037.png', '/1547480592558_644784.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('16', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480593138_222445.png', '/1547480593141_585960.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('17', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480593603_667773.png', '/1547480593603_704257.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('18', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480594120_105423.png', '/1547480594121_485963.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('19', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480594600_735188.png', '/1547480594601_840922.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('20', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480595164_178579.png', '/1547480595164_799962.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('21', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480595595_879140.png', '/1547480595596_008196.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('22', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480595962_056336.png', '/1547480595963_533203.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('23', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480596337_032889.png', '/1547480596338_017686.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('24', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480596721_996131.png', '/1547480596721_644412.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('25', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480597066_207118.png', '/1547480597068_547285.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('26', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480597500_303432.png', '/1547480597501_486188.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('27', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480597873_809910.png', '/1547480597873_471313.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('28', '“二胎大省”也不想生了，生娃为何这样难？', '/1547480598283_028833.png', '/1547480598283_924498.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('29', '哈哈', '/1547520308873_896415.png', '/1547520308875_265541.png', '环球网', '161', '热点');
INSERT INTO `news` VALUES ('30', '音乐', null, '/1547520877527_195842.png', '环球网', '1611', '热点');
INSERT INTO `news` VALUES ('31', '音', null, '/1547520954985_658128.png', '环球网', '11', '热点');
INSERT INTO `news` VALUES ('32', '今天天气很好', null, '/1547541541579_875651.png', '环球网', '161', '热点');
INSERT INTO `stu` VALUES ('1', 'jamin', '123', 'man');
INSERT INTO `stu` VALUES ('3', 'mary', '111', 'woman');
INSERT INTO `stu` VALUES ('6', 'jack', '2222222', 'man');
INSERT INTO `stu` VALUES ('7', 'jason', '123', '男');
INSERT INTO `stu` VALUES ('8', '小明', '123', '男');
INSERT INTO `stu` VALUES ('9', 'tom', '123', '男');
INSERT INTO `stu` VALUES ('10', 'blue', '123', '男');
INSERT INTO `stu` VALUES ('12', '小豪', 'abc123', '男');
INSERT INTO `stu` VALUES ('13', '杰克', 'qq123', '男');
