SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `book_id` int(11) AUTO_INCREMENT,
  `isbn` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `inventory` int(11) DEFAULT NULL,
  `sales` int(11) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `available` tinyint(1) NOT NULL,
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO book VALUES ('1', '9787513319720', '区块链：新经济蓝图及导读', '梅兰妮·斯万', '编程', '36', '比特币作为数字货币开始进入人们的视野，但是比特币背后的区块链技术则可被证明具有 重大的意义。这本《区块链(新经济蓝图及导读)/万向区块链实验室丛书》将带领你 货币(区块链1.0)和智能合约(区块链2.0)，论证区块链如何能成为继大型机、个人电脑、互联网和移动／社交网络后的第五个颠覆性计算机范式。', '100', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/1-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/1-2.png','1');
INSERT INTO book VALUES ('2', '9787513337175', '斯泰尔斯庄园奇案', '阿加莎·克里斯蒂', '推理', '31', '斯泰尔斯庄园的女主人英格尔索普太太掌管着财政大权。某日凌晨，她在自己的房间里毒发身亡，而房间的三个门都是从里面锁上的。侦探波洛在调查此案的过程中发现了一系列疑点，但*大的疑犯——英格尔索普太太的丈夫却有不在场的证据。*让波洛感到头痛的是，庄园里的每个人似乎都隐瞒了什么……', '900', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/2-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/2-2.png','1');
INSERT INTO book VALUES ('3', '9787513326971', '解体诸因', '西泽保彦', '推理', '25', '推理名家西泽保彦的超强脑洞，完美诠释“解体”这么高的犯罪成本，凶手们为什么要一次次地支付。', '900', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/3-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/3-2.png','1');
INSERT INTO book VALUES ('4', '9787513336185', '相亲中毒', '秋吉理香子', '推理', '27', '四个因相亲而发生的“神奇故事”。', '900', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/4-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/4-2.png','1');
INSERT INTO book VALUES ('5', '9787513331906', '扭曲的铰链', '约翰·迪克森·卡尔', '推理', '31', '《扭曲的铰链》是卡尔的代表作之一；位列“不可能犯罪”第四名。', '900', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/5-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/5-2.png','1');
INSERT INTO book VALUES ('6', '9787513337700', '我们盗走星座的理由', '北山猛邦', '推理', '27', '人性的绮丽与阴暗交织，令人胆寒的纯净梦幻故事！ 充滿奇思妙想、余味苦涩悠长的短篇推理杰作集', '100', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/6-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/6-2.png','1');
INSERT INTO book VALUES ('7', '9787513311298', '奇想，天动', '岛田庄司', '推理', '25', '一个在东京流浪的老人，只因小小的纷争便在浅草寺刺死了一位食品店老板娘。刑警吉敷竹史认为案子另有隐情，多方追查之下，一桩三十多年前发生在北海道暴风雪之夜的未解奇案渐渐浮出水面……惊天的诡计背后，究竟隐藏着多少艰辛与苦难？', '600', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/7-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/7-2.png','1');
INSERT INTO book VALUES ('8', '9787513306775', '占星术杀人魔法', '岛田庄司', '推理', '18', '用最邪恶的方式，去换取永恒的生命。', '930', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/8-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/8-2.png','1');
INSERT INTO book VALUES ('9', '9787513307741', '异邦骑士', '岛田庄司', '推理', '25', '我在长椅上醒来，全身酸痛，丝毫也记不起是怎么来到这儿的，记忆像是烟雾一般消失了。 但是当我偶然认识石川良子和占星师御手洗洁之后，我的命运被引向另一个方向。我发现了自己以前留下的日记： 我要为最爱的妻子报仇！ 丧失的记忆开始一一浮现，却是恐怖的杀人事件……', '20', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/9-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/9-2.png','1');
INSERT INTO book VALUES ('10', '9787513326469', '死了七次的男人', '西泽保彦', '推理', '23', '我有一种独一无二的“体质”——可以让现实像玩电子游戏一样，存档，读档，再存档……每年的一月一日，我都会和家人到外公家过新年。由于遗产继承的问题，气氛很不愉快。然而就在被灌酒灌到猛吐的夜晚，我发现自己陷入了时空黑洞中，依照惯例，这难熬的一天必须要重复九次，时间才能继续前进……更加不幸的是，在“第一个循环”中还活得好好的外公，在“第二个循环”中却被杀死了！这可是会引发家族冲突的大麻烦。没办法，我只好利用自己特殊的“体质”，在接下来不断重复的七天里，找到让外公幸存下来的方法……', '80', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/10-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/10-2.png','1');
INSERT INTO book VALUES ('11', '9787513306782', '斜屋犯罪', '岛田庄司', '推理', '25', '在日本最北端、可以俯瞰鄂霍次克海的悬崖上，有座造型奇特的建筑“流冰馆”，因为其怪异的斜倾结构，被当地人称为“斜屋”。一个飘雪的平安夜，馆主滨本幸三郎在派对上出了一道谜题，只要谁先解开花坛中神秘图腾的意义，就有资格可以与幸三郎的女儿英子结婚，并继承庞大的遗产！没想到，连续两天夜里，馆内竟接连发生了密室杀人案件！第一名死者被人用利刃刺入心脏毙命，宛如“跳舞”般复杂扭曲的尸体旁，还留下了以血画成的“死亡讯息”！第二名死者则在重重反锁的室内，被人从背后袭击！然而，所有的人却都具备完整的不在场证明，更诡异的是，第一名死者遇害后，竟然有人在腾空的三楼窗外，看见幸三郎所搜集的人偶“葛雷姆”！传说在暴风雨的夜晚，“葛雷姆”就会开始活动，难道是真有其事吗？事实的真相，又是否与神秘的花坛图腾有关呢？邪恶无比的杀意，正潜伏在失去平衡的斜屋之中，渐渐扩散……', '430', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/11-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/11-2.png','1');
INSERT INTO book VALUES ('12', '9787513320955', '钟表馆事件', '绫辻行人', '推理', '22', '镰仓的寂静山林，隐藏着又一处中村青司设计的神秘建筑---钟表馆。馆内上百个不同的钟表，以不可思议的方式惊人地指向相同的时刻并等速行进着；馆外竖立着一座没有指针的钟塔，其钟铃也从未响起过。十年前，馆主人古峨伦典最心爱的女儿不幸去世，随之而来的是古峨家另外六个相关人物的死亡。此后，在那沉默的钟塔下，出现了一个美丽的少女的幽灵，徘徊在静谧的森林中……十年后，以关注超自然现象而闻名的《CHAOS》杂志社，为了采查亡灵的真相，连同W大学超常现象研究会的几名成员，和一位通灵师一起，步入了诡异的钟表馆。然而他们没有想到，为期三天与世隔绝的通灵会，却演变成了疯狂的杀戮时刻。随着时光飞逝，他们一个接一个的倒下，死神的指针最终划破了冷酷的表盘……', '990', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/12-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/12-2.png','1');
INSERT INTO book VALUES ('13', '9787513321211', '十角馆事件', '绫辻行人', '推理', '18', '大学推理社团一行七人来到了角岛，天才设计师中村青司建造的“十角馆”就坐落在这里。若干年前，中村青司一家离奇丧命；现在，一幕幕谋杀在这群大学生之间接连上演！谁能阻止“无人生还”的悲剧重演？也许，只有那个名叫“岛田洁”的男人才能破解“十角馆”中的迷局。', '12', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/13-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/13-2.png','1');
INSERT INTO book VALUES ('14', '9787513343893', '盲剑楼奇谭', '岛田庄司', '推理', '44', '一九四五年九月，金泽著名的艺伎馆“盲剑楼”发生了一起密室袭击案，在出入口皆被封住的屋子里，五个无赖被一瞬间斩杀，目击者声称他们是被一位“美剑客”处决的。莫非这位“美剑客”就是盲剑楼庭院的祭祠内供奉的“盲剑大人”？七十多年后，吉敷竹史与前妻通子卷入一起绑架案，受害人正是当年盲剑楼的幸存者。跨越半个多世纪的奇案，真相究竟是……', '70', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/14-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/14-2.png','1');
INSERT INTO book VALUES ('15', '9787513318570', '帝都卫星轨道', '岛田庄司', '推理', '20', '岛田庄司创作的《帝都卫星轨道》讲述了绀野贞三的儿子裕司遭人绑架，他的妻子美砂子被指名出面交付仅仅十五万日元的赎金。警方做好了完全的准备，却在东京的山手铁路线上被高智商的绑匪玩弄于股掌之间，彻底跟丢了目标。正当警方垂头丧气之时，裕司回来了，美砂子却自此再也没有露面……为了寻找消失的爱人，贞三踏上了漫长的调查之旅，却惊讶地发现，妻子很可能与多年前的一桩冤案有关。', '97', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/15-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/15-2.png','1');
INSERT INTO book VALUES ('16', '9781408865675', '盐的代价', '帕特里夏·海史密斯', '同性爱情', '50', '电影《卡罗尔》同名原著小说，i姐姬崽必看。', '54', '0', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/16-1.png', 'https://raw.githubusercontent.com/yiyimeimei/img/main/img/16-2.png','1');
-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_type` int(1) NOT NULL,
  `user_state` int(1) NOT NULL,
  `consumption` int(11) DEFAULT 0  NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1',  '敏宝1', '18721970292', '上海市','826518320@qq.com', '1','1','0');
INSERT INTO `user` VALUES ('2',  '敏宝2', '18721970293', '杭州市','826518320@qq.com',  '1','1','0');
INSERT INTO `user` VALUES ('3',  '敏宝3', '18721970294', '深圳市','826518320@qq.com',  '1','1','0');
INSERT INTO `user` VALUES ('4',  '敏宝4', '18721970295', '北京市','826518320@qq.com',  '1','1','0');
INSERT INTO `user` VALUES ('5',  '管理员敏子', '18721970292', '上海市','826518320@qq.com',  '0','1','0');
-- ----------------------------
-- Table structure for user_auth
-- ----------------------------
DROP TABLE IF EXISTS `user_auth`;
CREATE TABLE `user_auth` (
  `user_id` int(11) AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT '123',
  `user_type` int(1) NOT NULL,
  `user_state` int(1) NOT NULL,
    PRIMARY KEY (`user_id`),
    FOREIGN KEY (user_id) REFERENCES user (user_id)
    /*FOREIGN KEY (user_type) REFERENCES user (user_type)*/
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_auth
-- ----------------------------
INSERT INTO `user_auth` VALUES ('1', 'minbao1', '123', '1','1');
INSERT INTO `user_auth` VALUES ('2', 'minbao2', '123', '1','1');
INSERT INTO `user_auth` VALUES ('3', 'minbao3', '123', '1','1');
INSERT INTO `user_auth` VALUES ('4', 'minbao4', '123', '1','1');
INSERT INTO `user_auth` VALUES ('5', 'yiyi', '123', '0','1');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cart_id` INT UNSIGNED AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `book_number` int(11) NOT NULL,
  PRIMARY KEY (`cart_id`),
  FOREIGN KEY (user_id) REFERENCES user (user_id),
  FOREIGN KEY (book_id) REFERENCES book (book_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `order_info`;
CREATE TABLE `order_info` (
  `order_id` int(11) AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `order_address` varchar(255) NOT NULL ,
  `order_tel` varchar(255) NOT NULL ,
  `order_receiver` varchar(255) NOT NULL ,
  `order_date` DATE NOT NULL ,
  PRIMARY KEY (`order_id`),
  FOREIGN KEY (`user_id`) REFERENCES user (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*INSERT INTO `order_info` VALUES ('1', '2', '上海市', '18721970292','敏宝1','2021-06-13 08:11:58.526');
*/
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` INT UNSIGNED AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `book_number` int(11) NOT NULL ,
  PRIMARY KEY (`id`),
  FOREIGN KEY (book_id) REFERENCES book (book_id),
  FOREIGN KEY (order_id) REFERENCES order_info (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;