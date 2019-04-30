# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-11 13:52:13
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin"
#

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "admin"
#

/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'宁政','123456'),(2,'陈士顺','888888');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

#
# Structure for table "book"
#

DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `bookName` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `brief` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `publishTime` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

#
# Data for table "book"
#

/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'我们最好的十年','苑子豪','儒意欣欣','16.50','2018-12-12','book1.jpg'),(3,'熊镇','弗雷德里克·巴克曼','全球热销1300万，备受林彦俊、马思纯、 张皓宸、 池昌旭推崇的北欧小说之神巴克曼《一个叫欧维的男人决定去死》《外婆的道歉信》《清单人生》之后超越式里程碑新作！李银河、冯唐、李尚龙、丁丁张、陶立夏推荐','4','2018-10-10','book2.jpg'),(5,'儒侠金庸传','张建智','金庸的一生，既想继承祖辈留下的“儒家”理念，又不得不为世事所牵绊。 从此世间无儒侠，只留经典在人间。','24.20','2000-09-20','book3.jpg'),(6,'爱的艺术','(美)艾丽希·弗洛姆','《爱的艺术》是美国社会心理学家和哲学家、法兰克福学派重要成员艾里希·弗洛姆的著名作品，自1956年出版至今已被翻译成三十二种文字，在全世界畅销不衰。','19.30','2008-09-07','book4.jpg'),(7,'英语单词情境认知大书','儿童英语研究小组','畅销十多年，中英双语对照版，涵盖日常八大主题，情景式学习，浸入式记忆，1200个日常单词，掌握小学英语必背词汇。扫码听音频，轻松伴读。','64','2008-09-07','book5.jpg'),(9,'那不勒斯四部曲(含套版)','埃莱娜·费兰','当当独家函套版！我的天才女友+新名字的故事+离开的,留下的+失踪的孩子。“我的整个生命，只是一场为了提升社会地位的低俗斗争”—— 埃莱娜 费兰','112','2008-1-1','book6.jpg'),(10,'大都会艺术博物馆','凯瑟琳·卡利·贾','本书借由涵盖5000多年历史、横跨各种文化与大陆的绘画，捕捉令人叹为观止的形式与图像多样性，为艺术史绘出了一张丰富的视觉年表。','221','2010-10-1','book7.jpg'),(11,'剑桥倚天屠龙史','新垣平','世上再无江湖，大师永留心中。重新解构金庸经典， 马伯庸，六神磊磊，王怜花倾情作序 倪匡，史航，余世存，严锋，陈怅联袂推荐','26','2010-2-3','book8.jpg'),(12,'凯叔三国演义.群雄逐鹿','凯叔','读英雄故事，长少年志气！凯叔倾力打造，更适合孩子阅读的三国故事。2000多万家长选择的“凯叔讲故事”出品。少年读史记，少年读西游记，少年更要读三国演义','50','2008-08-09','book9.jpg');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
