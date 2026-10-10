import { originalArchive } from './originalArchive';
export const profile = {
  name: '耿萁鸿', englishName: 'GENG QIHONG',
  email: 'b1120235451@163.com', phone: '+86 15339047176',
  location: 'Hatfield, United Kingdom', artstation: 'https://johnnyclark09.artstation.com',
};

export const categories = [
  {
    "name": "场景与建筑",
    "en": "ENVIRONMENTS & ARCHITECTURE",
    "intro": "从城市全景到建筑单体，建立同一个世界的空间秩序。"
  },
  {
    "name": "角色设计",
    "en": "CHARACTER DESIGN",
    "intro": "从轮廓与服装出发，赋予角色清晰的身份和叙事。"
  },
  {
    "name": "武器与道具",
    "en": "WEAPONS & PROPS",
    "intro": "在细节中连接角色身份、叙事线索与使用功能。"
  },
  {
    "name": "生态植被",
    "en": "FLORA & ECOLOGY",
    "intro": "让世界规则进入自然形态，形成独特的环境生态。"
  },
  {
    "name": "3D 场景开发",
    "en": "3D ENVIRONMENT DEVELOPMENT",
    "intro": "通过模型、镜头与光照，把二维构想转化为空间。"
  },
  {
    "name": "游戏视觉与关卡",
    "en": "GAME VISUALS & LEVEL DESIGN",
    "intro": "将卡牌视觉、空间动线与游戏规则组织为可理解的体验。"
  }
];

export const projects = [
  {
    "id": "chronohaven",
    "title": "Chronohaven",
    "cn": "时间庇护之城 · 城市环境概念",
    "category": "场景与建筑",
    "type": "ENVIRONMENT / WORLD BUILDING",
    "image": "/art/selected/city-final.webp",
    "project": "Sands of the Damned",
    "role": "场景概念设计 · 耿萁鸿",
    "credit": "合作世界观项目，与 Shizhao Tian 共同开发；本组展示耿萁鸿负责的环境设计。",
    "description": "以波斯建筑语言为基础，构建被不稳定时间影响的城市。以高处主城、商业区域与外城区的层级关系，将时间稳定性、资源分配和社会秩序转化为可读的环境叙事。",
    "images": [
      {
        "src": "/art/selected/city-final.webp",
        "caption": "Chronohaven 城市全景",
        "stage": "最终设计",
        "brief": "Chronohaven 是时间秩序崩塌后的庇护城市。城中的建筑高度与时间稳定性、社会地位和资源分配相联系：高处的核心区域受到更稳定的保护，外围则逐渐遭受时间侵蚀。"
      },
      {
        "src": "/art/selected/city-map.webp",
        "caption": "城市规划与时间分布",
        "stage": "世界观与规划",
        "brief": "城市依照时间影响程度分区：主建筑区域空间开阔、结构稳定、资源集中；上层商业区以市场和风塔为主；外围居住区更密集，并出现侵蚀、废墟与不稳定的时间现象。"
      },
      {
        "src": "/art/selected/city-sketch.webp",
        "caption": "早期黑白构图，探索城市体量与纵深",
        "stage": "构图探索",
        "brief": "早期黑白草图用于判断城市体量、地标位置与前后景关系。较宽的空间纵深能够更清晰地表达城市规模和不同区域的层级。"
      },
      {
        "src": "/art/selected/city-colour.webp",
        "caption": "色彩与空间层次的建立",
        "stage": "色彩探索",
        "brief": "在黑白构图基础上建立大色块，区分前景地形、城市建筑与远山，为后续建筑细化和整体氛围提供依据。"
      }
    ],
    "number": "01"
  },
  {
    "id": "architecture",
    "title": "Architecture of Time",
    "cn": "时间建筑 · 宫殿、风塔与研究院",
    "category": "场景与建筑",
    "type": "ARCHITECTURE / DESIGN DEVELOPMENT",
    "image": "/art/selected/palace.webp",
    "fit": "contain",
    "project": "Sands of the Damned",
    "role": "场景概念设计 · 耿萁鸿",
    "credit": "合作世界观项目，与 Shizhao Tian 共同开发；本组展示耿萁鸿负责的环境设计。",
    "description": "以穹顶、尖拱与风塔为基础建立统一的建筑语言。主建筑承担城市地标与阶层象征，风塔被转化为时间粒子收集装置，研究院则服务于时间之沙的收集与研究。",
    "images": [
      {
        "src": "/art/selected/palace.webp",
        "caption": "主城地标建筑 · 色彩与层级设计",
        "stage": "最终设计",
        "brief": "主建筑位于城市最高、最显眼的位置。设计通过层层递进的平台、穹顶和塔楼强化其地标属性，并将城市的阶层关系体现在建筑轮廓中。"
      },
      {
        "src": "/art/selected/wind-towers.webp",
        "caption": "风塔 · 时间粒子收集装置",
        "stage": "最终设计",
        "brief": "以波斯风塔为造型起点，将其重新设定为时间粒子收集装置。不同塔体方案探索了传统建筑语言与世界观功能之间的结合。"
      },
      {
        "src": "/art/selected/institute.webp",
        "caption": "时间研究院 · 建筑立面",
        "stage": "最终设计",
        "brief": "时间研究院接收从城市各处采集的时间之沙与时间粒子，用于分析材料、研究时间风暴造成的变化，并记录异常时间事件。建筑设计围绕这一研究机构的身份展开。"
      },
      {
        "src": "/art/selected/palace-line.webp",
        "caption": "主建筑结构线稿",
        "stage": "结构探索",
        "brief": "先通过结构线稿明确主建筑的轴线、层级与体量，再进入明暗和配色阶段，使建筑在远景与单体展示中都保持清晰的秩序。"
      }
    ],
    "number": "02"
  },
  {
    "id": "dawn-environments",
    "title": "Dawn and Dusk — Journey",
    "cn": "昼与夜 · 章节场景与空间叙事",
    "category": "场景与建筑",
    "type": "ENVIRONMENT / VISUAL STORYTELLING",
    "project": "Dawn and Dusk",
    "role": "章节场景视觉设计",
    "description": "通过不同章节的空间变化组织叙事节奏。场景覆盖林地、村落、工厂和水域，并结合室内外场景、草图与关卡画面探索角色行动的环境。",
    "images": [
      {
        "src": "/art/layout/dawn-env-a.webp",
        "caption": "室内与室外场景 · 空间关系探索",
        "stage": "场景开发",
        "brief": "海边营地加入工厂设备和化学容器，为后续实验设施的剧情埋下线索。船上场景承担新手引导，构图将注意力集中到角色与交互目标，同时展示从线稿到完成画面的制作过程。"
      },
      {
        "src": "/art/layout/dawn-env-b.webp",
        "caption": "前段章节 · 视觉场景序列",
        "stage": "章节设计",
        "brief": "渔民因近海渔获减少而前往陌生海域，返航前捕获一条异常的大鱼。船员被鱼尾划伤后逐渐失去理智并攻击同伴，玩家在这一事件中接触选择与基础战斗机制。"
      },
      {
        "src": "/art/layout/dawn-env-c.webp",
        "caption": "村落与后续章节的场景变化",
        "stage": "章节设计",
        "brief": "渔民回到村庄，发现家中一片混乱、墙面留有异样痕迹，孩子也已失踪。姐姐留下的日记引导他前往西南海岸，但等待他的只有一处被遗弃的营地。"
      },
      {
        "src": "/art/layout/dawn-env-d.webp",
        "caption": "工厂与水域 · 场景序列",
        "stage": "章节设计",
        "brief": "主角在营地找到署名 Dr. X 的研究记录与损坏的相机，随后潜入工厂寻找孩子。场景从培养设施延伸至管道和水域，结合搜集线索、寻找照明与探索出口推进故事，最终抵达控制室阻止核废料排放。"
      }
    ],
    "image": "/art/layout/dawn-env-a.webp",
    "fit": "contain",
    "number": "03"
  },
  {
    "id": "odette",
    "title": "Odette & Odile",
    "cn": "天鹅湖 · 双生角色设计",
    "category": "角色设计",
    "type": "CHARACTER / COSTUME",
    "image": "/art/selected/swans.webp",
    "fit": "contain",
    "project": "Swan Lake",
    "role": "角色与服装概念设计",
    "description": "以白天鹅与黑天鹅的身份对照展开角色设计。运用羽毛结构、服装轮廓与材质差异组织角色性格，从初始草图、剪影探索到完整角色呈现。",
    "images": [
      {
        "src": "/art/selected/swans.webp",
        "caption": "Odette 与 Odile · 角色对照",
        "stage": "最终设计",
        "brief": "以《天鹅湖》中的 Odette 与 Odile 为原型，通过浅色与暗色、轻盈与尖锐的轮廓建立双生角色的对照，并将羽毛元素贯穿服装与饰物。"
      },
      {
        "src": "/art/selected/odette.webp",
        "caption": "Odette · 白天鹅角色设计",
        "stage": "最终设计",
        "brief": "白天鹅角色以柔和的浅色、羽毛层叠和飘带组织服装形态，强调轻盈的身体姿态与天鹅意象之间的联系。"
      },
      {
        "src": "/art/selected/odile.webp",
        "caption": "Odile · 黑天鹅角色设计",
        "stage": "最终设计",
        "brief": "黑天鹅角色采用暗红与黑色，将更锐利的羽毛、紧束的服装结构和展开的裙摆结合，形成与白天鹅不同的气质与视觉重心。"
      },
      {
        "src": "/art/selected/swan-silhouettes.webp",
        "caption": "角色比例与剪影对照",
        "stage": "剪影探索",
        "brief": "通过简化的剪影比较两名角色的姿态、服装体积与辨识度，在加入材质和细节前先确认整体造型。"
      },
      {
        "src": "/art/selected/swan-sketch.webp",
        "caption": "早期角色草图",
        "stage": "草图探索",
        "brief": "早期草图探索人物比例、动作与服装走势，为后续白天鹅和黑天鹅的视觉对照建立基础。"
      }
    ],
    "number": "04"
  },
  {
    "id": "bell",
    "title": "The Bellworn",
    "cn": "钟鸣者 · 仪式性角色与装备",
    "category": "角色设计",
    "type": "CHARACTER / EQUIPMENT",
    "image": "/art/selected/bell.webp",
    "fit": "contain",
    "project": "The Remains of the Bell",
    "role": "角色与装备概念设计",
    "description": "以钟、头冠和垂直延展的仪式服装建立角色辨识度。金属与织物的对比贯穿头部、肩部和下摆，形成从整体剪影到装备细节一致的设计语言。",
    "images": [
      {
        "src": "/art/selected/bell.webp",
        "caption": "钟鸣者 · 角色与装备设定",
        "stage": "最终设计",
        "brief": "角色身着被风吹褪色的长袍，头部由破损的教堂钟取代，空洞胸腔中悬挂着另一口钟。金属碎片、钟尘与微弱共鸣共同表现被时间风化的形象。"
      },
      {
        "src": "/art/selected/bell-process.webp",
        "caption": "从线稿、剪影到配色的设计推演",
        "stage": "设计过程",
        "brief": "设定围绕旧教堂、记忆与声音展开：钟声承载自然记忆，角色更接近灵性回声的守护者。设计过程由线稿、剪影到配色与结构细化，探索长袍、胸腔和钟体之间的关系。"
      }
    ],
    "number": "05"
  },
  {
    "id": "dawn-characters",
    "title": "Dawn and Dusk — Cast",
    "cn": "昼与夜 · 角色与异化形态",
    "category": "角色设计",
    "type": "CHARACTER / TRANSFORMATION",
    "project": "Dawn and Dusk",
    "role": "角色概念设计",
    "description": "围绕角色的不同状态与异化形态展开设计，以服装、身体结构和轮廓变化区分角色。三组设定同时展示人物形象、细节和形态探索。",
    "images": [
      {
        "src": "/art/layout/dawn-cast-a.webp",
        "caption": "角色设定 · 人物与异化形态",
        "stage": "设计呈现",
        "brief": "姐姐 14 岁，出生在海边，母亲去世后变得沉默而忧郁，却始终保护着弟弟。外出寻找食物时发生的中毒与异变，使姐弟被捕作研究对象；她的第二形态带有失控和恐惧的特征，并在玩法上延长翻滚的无敌时间。"
      },
      {
        "src": "/art/layout/dawn-cast-b.webp",
        "caption": "角色设定 · 服装、比例与身份变化",
        "stage": "设计呈现",
        "brief": "弟弟 9 岁，胆小、依赖姐姐，却对世界充满好奇，始终保留着母亲留下的项链。另一名角色 Dr. X 是四十多岁的工厂管理者，受命研究核废料引发的人体与生物异变；他的个人动机与挽救自己的孩子有关。"
      },
      {
        "src": "/art/layout/dawn-cast-c.webp",
        "caption": "角色设定 · 体型与装备变化",
        "stage": "设计呈现",
        "brief": "渔民父亲约 40 岁，丧妻后独自抚养两个孩子，以捕鱼和外出工作维持生活。孩子在核泄漏事件后被带走，他由此踏上寻子之路；第二、第三形态逐步强化肢体异化、力量与失控感。"
      }
    ],
    "image": "/art/layout/dawn-cast-a.webp",
    "fit": "contain",
    "number": "06"
  },
  {
    "id": "battle-characters",
    "title": "A Battle for Destiny — Factions",
    "cn": "命运之战 · 阵营角色设定",
    "category": "角色设计",
    "type": "CHARACTER / FACTION DESIGN",
    "project": "A Battle for Destiny",
    "role": "阵营角色视觉设计",
    "description": "围绕奇幻卡牌项目的不同阵营探索角色造型，以骨骼结构、职业服装、面具与配色建立各自的视觉语言。设计板记录了角色形象、剪影与配色推演。",
    "images": [
      {
        "src": "/art/layout/battle-witch.webp",
        "caption": "恶魔巫师 Demon Witch · 角色、配色与造型推演",
        "stage": "设计板 / 含研究参考",
        "brief": "恶魔巫师阵营以“巫术”为特长。在项目设定中，他们从虔诚的信仰者走向对瘟疫与禁忌力量的追随。骨骼、角状头冠与长袍构成造型核心，卡牌能力偏向攻击与限制对方行动。"
      },
      {
        "src": "/art/layout/battle-scholar.webp",
        "caption": "异端学者 · 角色与轮廓探索",
        "stage": "设计板 / 含研究参考",
        "brief": "异端学者阵营以“背叛”为特长。瘟疫动摇了他们原有的信仰，使其转而试图掌握自身命运。角色以宽檐帽、层叠领巾和乐器表现吟游诗人身份，技能可使敌方卡牌陷入混乱并攻击邻近单位。"
      },
      {
        "src": "/art/layout/battle-warlock.webp",
        "caption": "医疗术士 Medical Warlock · 服装与配色探索",
        "stage": "设计板 / 含研究参考",
        "brief": "医疗术士阵营以“救赎”为特长，在游戏世界中同时象征死亡与希望。鸟嘴面具、兜帽、手套和随身药具强化治疗者身份，相关卡牌通过恢复效果支持己方。"
      },
      {
        "src": "/art/layout/battle-clergy.webp",
        "caption": "神职者 Theology Clergy · 阵营造型语言",
        "stage": "设计板 / 含研究参考",
        "brief": "神职阵营以“权力”为特长。造型将宗教权威与骑士全身甲结合，通过封闭头盔、金属甲片和披风塑造威严。阵营机制涉及额外抽牌，骑士单位则提供攻击增益。"
      }
    ],
    "image": "/art/layout/battle-cover.webp",
    "fit": "contain",
    "credit": "设计板中的小幅参考图片用于视觉研究，不作为个人原创作品展示；封面仅展示角色设计区域。",
    "number": "07"
  },
  {
    "id": "reversal-characters",
    "title": "Reversal — Operatives",
    "cn": "合作射击 · 可操作角色设计",
    "category": "角色设计",
    "type": "CHARACTER / GAMEPLAY DESIGN",
    "project": "Reversal / Multiplayer Co-op Shooter",
    "role": "角色概念与技能设计",
    "description": "为合作射击项目设计三名可操作角色，将服装、体型与角色功能结合。项目中的能力设定涉及潜行与速度、感知与烟雾、护盾与驱散，形成不同的合作方式。",
    "images": [
      {
        "src": "/art/layout/reversal-jeff.webp",
        "caption": "Jeff Stack · 角色形象与比例",
        "stage": "设计呈现",
        "brief": "Jeff Stack 的能力围绕潜行与机动展开：非战斗状态下进入伪装，再次使用能力可接近敌人背后；速度技能提升移动与换弹效率，并减缓耐力消耗。"
      },
      {
        "src": "/art/layout/reversal-johnny.webp",
        "caption": "Johnny Clark · 角色形象与比例",
        "stage": "设计呈现",
        "brief": "Johnny Clark 擅长提前感知危险，并以烟雾弹干扰敌人。烟雾能够减缓敌方行动，同时提升自身生存能力，使角色在侦察和正面交战之间形成特色。"
      },
      {
        "src": "/art/layout/reversal-hedda.webp",
        "caption": "Hedda Brita · 角色形象与比例",
        "stage": "设计呈现",
        "brief": "Hedda Brita 承担团队支援职责。驱散技能可移除自己或队友身上的负面效果，护盾则吸收伤害，并根据剩余护盾量转化为生命恢复。"
      }
    ],
    "image": "/art/layout/reversal-jeff.webp",
    "fit": "contain",
    "number": "08"
  },
  {
    "id": "swan-relics",
    "title": "Relics of Swan Lake",
    "cn": "天鹅遗物 · 头冠与诅咒之镜",
    "category": "武器与道具",
    "type": "PROP / NARRATIVE DESIGN",
    "image": "/art/selected/mirror.webp",
    "coverImages": [
      "/art/selected/crown.webp",
      "/art/selected/mirror.webp",
      "/art/selected/black-crown.webp"
    ],
    "fit": "contain",
    "project": "Swan Lake",
    "role": "饰物与叙事道具设计",
    "description": "将天鹅湖的角色语言延伸到随身饰物与叙事道具。白天鹅头冠强调羽毛、金属与宝石的秩序；黑天鹅头冠和诅咒之镜通过尖锐轮廓、暗红色与镜面传达另一种气质。",
    "images": [
      {
        "src": "/art/selected/mirror.webp",
        "caption": "诅咒之镜 · 完整道具",
        "stage": "最终设计",
        "brief": "诅咒之镜对应《天鹅湖》中欺骗与幻象的主题。暗色装饰镜框和镜面意象强化不祥气息，并作为与黑天鹅相关的叙事道具，暗示操控、转变与光暗之间的冲突。"
      },
      {
        "src": "/art/selected/mirror-parts.webp",
        "caption": "镜框与镜面拆分",
        "stage": "结构拆解",
        "brief": "将镜框、镜面与连接结构拆开呈现，检查道具的轮廓、装饰密度和组合关系，使叙事意象也能落实到清晰的结构设计中。"
      },
      {
        "src": "/art/selected/crown.webp",
        "caption": "白天鹅 · 羽毛头冠",
        "stage": "最终设计",
        "brief": "羽毛头冠象征天鹅公主的身份，以及人与天鹅变身之间的魔法联系。设计把精细羽毛与金属结构结合，在优雅与脆弱之间取得平衡。"
      },
      {
        "src": "/art/selected/black-crown.webp",
        "caption": "黑天鹅 · 头冠设计",
        "stage": "最终设计",
        "brief": "黑天鹅头冠延续角色的暗红与黑色，以尖锐结构和中央宝石形成视觉焦点，与白天鹅的羽毛头冠建立形态和色彩上的对照。"
      }
    ],
    "number": "09"
  },
  {
    "id": "reversal",
    "title": "Reversal — Arsenal",
    "cn": "合作射击 · 武器与功能道具",
    "category": "武器与道具",
    "type": "WEAPON / GAMEPLAY DESIGN",
    "image": "/art/selected/weapons.webp",
    "fit": "contain",
    "project": "Reversal / Multiplayer Co-op Shooter",
    "role": "概念设计兼游戏设计",
    "description": "围绕多人合作玩法设计科技武器、侦察装置与辅助道具。用不同的轮廓、结构和色彩区分功能，使视觉表现与技能机制相互呼应。",
    "images": [
      {
        "src": "/art/selected/weapons.webp",
        "caption": "科技武器、侦察装置与功能道具设计",
        "stage": "最终设计",
        "brief": "武器与道具服务于多人合作：科技枪承担攻击，支援武器连接队友，侦察装置适应复杂地形。项目还探索了不同属性箭矢的组合效果，让装备外观与功能相互对应。"
      },
      {
        "src": "/art/layout/reversal-rifle.webp",
        "caption": "闪银科技枪 · 武器形态设计",
        "stage": "设计呈现",
        "brief": "闪银科技枪可进行单发与全自动射击，强调低后坐力和稳定性。通过旋钮切换至科技模式后，可释放能够传导扩散的电流，为常规射击增加另一种攻击方式。"
      },
      {
        "src": "/art/layout/reversal-support.webp",
        "caption": "连接式支援武器 · 支援武器设计",
        "stage": "设计呈现",
        "brief": "支援武器通过输出管线与队友连接，在连接期间持续治疗并缩短复活时间。再次使用并断开连接时，可清除被连接队友身上的负面效果。"
      },
      {
        "src": "/art/layout/reversal-drone.webp",
        "caption": "侦察飞行器 · 侦察装置设计",
        "stage": "设计呈现",
        "brief": "侦察飞行器面向空中、水下及复杂地形任务设计，兼顾勘察、采样、攻击与防御功能，探索一套装置如何适应不同任务需求。"
      }
    ],
    "number": "10"
  },
  {
    "id": "temporal-flora",
    "title": "A Living Timeline",
    "cn": "时间生态 · 花、树与仙人掌",
    "category": "生态植被",
    "type": "FLORA / WORLD BUILDING",
    "image": "/art/selected/trees.webp",
    "fit": "contain",
    "project": "Sands of the Damned",
    "role": "环境植被概念设计",
    "credit": "合作世界观项目，与 Shizhao Tian 共同开发；本组展示耿萁鸿负责的环境设计。",
    "description": "将“时间异常”转化为植物的生长规则：在一天内盛放与枯萎的花、同时存在于不同时间状态的树，以及长期暴露于不稳定时间而逐渐侵蚀的仙人掌。三组设计共同服务于世界观。",
    "images": [
      {
        "src": "/art/selected/trees.webp",
        "caption": "时间树 · 不同时间状态的形态",
        "stage": "最终设计",
        "brief": "时间树的不同部分可以同时处于不同的时间状态。设计并非单纯展示幼树、成树与枯树，而是让同一种植物看起来被牵引在多个生命时刻之间。"
      },
      {
        "src": "/art/selected/flowers.webp",
        "caption": "时间之花 · 快速生命周期",
        "stage": "最终设计",
        "brief": "时间之花的生命循环受时间之沙控制，在一天内完成盛放与枯萎，并不断重复。快速生长使它能够被频繁采集，成为制作时间药剂的重要原料。"
      },
      {
        "src": "/art/selected/cactus.webp",
        "caption": "时间仙人掌 · 侵蚀状态变化",
        "stage": "最终设计",
        "brief": "时间仙人掌探索长期暴露于不稳定时间的后果。三种形态属于同一植物的不同状态，从较健康逐渐转向破裂、损伤与严重侵蚀。"
      },
      {
        "src": "/art/selected/flower-sketch.webp",
        "caption": "花卉造型与结构草图",
        "stage": "草图探索",
        "brief": "花卉草图用于探索花瓣的卷曲、茎叶连接和整体结构，为后续不同生长状态下的造型与色彩设计提供基础。"
      }
    ],
    "number": "11"
  },
  {
    "id": "interior",
    "title": "Under the Dome",
    "cn": "穹顶之下 · 建模与空间光照",
    "category": "3D 场景开发",
    "type": "3D / LIGHTING / COMPOSITION",
    "image": "/art/selected/interior.webp",
    "project": "Sands of the Damned",
    "role": "3D 环境开发 · 镜头与光照测试",
    "credit": "合作世界观项目，与 Shizhao Tian 共同开发；本组展示耿萁鸿负责的环境设计。",
    "description": "把穹顶、尖拱、立柱与环形建筑结构转化为三维空间。通过模块组装、灰模和镜头测试验证比例，再用光照与阴影建立室内氛围。此组展示场景开发与光照测试阶段。",
    "images": [
      {
        "src": "/art/selected/interior.webp",
        "caption": "穹顶室内 · 光照与构图测试",
        "stage": "光照测试",
        "brief": "利用穹顶骨架、尖拱与立柱形成室内空间，并通过光照测试观察阴影节奏与视觉重心，验证二维概念转化为三维后的氛围。"
      },
      {
        "src": "/art/selected/interior-light.webp",
        "caption": "另一镜头下的空间与阴影关系",
        "stage": "镜头测试",
        "brief": "更换镜头位置，比较光线穿过穹顶结构后的投影变化，检查通道、立柱与开口在不同视角下的空间可读性。"
      },
      {
        "src": "/art/selected/building-model.webp",
        "caption": "穹顶建筑整体模型",
        "stage": "模型开发",
        "brief": "将环形基座、拱门、墙体与穹顶逐步组装成整体建筑模型，验证模块之间的连接、比例与层级关系。"
      },
      {
        "src": "/art/selected/interior-clay.webp",
        "caption": "室内灰模与拱形结构",
        "stage": "灰模测试",
        "brief": "灰模阶段暂时弱化材质干扰，集中检查拱形结构、立柱尺度和镜头构图，发现二维草图中不易判断的空间问题。"
      }
    ],
    "number": "12"
  },
  {
    "id": "silent-rain",
    "title": "Listen to the Silent Rain",
    "cn": "听见静雨 · 林间庭院场景",
    "category": "3D 场景开发",
    "type": "3D ENVIRONMENT / LIGHTING",
    "project": "Listen to the Silent Rain",
    "role": "场景搭建、镜头与光照探索",
    "description": "以林地、水面、庭院和建筑组织环境氛围，探索自然植被与人工空间的关系。从场景制作到镜头选择，再对比不同的光照状态，完成一组环境视觉呈现。",
    "images": [
      {
        "src": "/art/layout/rain-final.webp",
        "caption": "庭院环境 · 最终画面与镜头记录",
        "stage": "场景呈现",
        "brief": "以林间庭院、临水亭阁与建筑为主体选择最终镜头。通过远景、局部和路径视角，呈现场景中的空间关系、自然植被与建筑细节。"
      },
      {
        "src": "/art/layout/rain-light.webp",
        "caption": "不同照明状态下的场景对比",
        "stage": "光照测试",
        "brief": "对比未照明与照明状态下的画面，观察光线如何改变建筑、水面和植被的层次，并据此调整环境氛围与视觉焦点。"
      },
      {
        "src": "/art/layout/rain-process.webp",
        "caption": "场景构思、草图与制作推进",
        "stage": "制作过程",
        "brief": "从基础地形和整体构思出发，逐步完善场景草图、地形与植物分布，建立自然环境和建筑之间的布局关系，再推进最终场景制作。"
      }
    ],
    "image": "/art/layout/rain-cover.webp",
    "fit": "contain",
    "number": "13"
  },
  {
    "id": "battle-cards",
    "title": "A Battle for Destiny — Cards",
    "cn": "命运之战 · 卡牌与游戏视觉",
    "category": "游戏视觉与关卡",
    "type": "CARD / GAME VISUAL DESIGN",
    "project": "A Battle for Destiny",
    "role": "卡牌视觉与游戏组件设计",
    "description": "把阵营语言延伸到卡背、牌面边框、角色卡与功能卡中。通过统一的装饰结构和不同的符号、配色组织整套游戏组件。",
    "images": [
      {
        "src": "/art/layout/battle-cards-a.webp",
        "caption": "角色卡与功能牌 · 卡面组合",
        "stage": "设计呈现",
        "brief": "卡牌系统包含普通卡、道具卡、角色卡和武器卡，围绕 3×3 棋盘展开。玩家利用牌面属性、摆放位置与协同效果攻击对手或恢复状态；左上角和右上角分别标示攻击与得分相关数值。"
      },
      {
        "src": "/art/layout/battle-cards-b.webp",
        "caption": "卡牌系列 · 道具与功能符号",
        "stage": "设计呈现",
        "brief": "用统一的边框与插画语言组织不同功能的卡牌，使角色、道具和特殊效果在同一套系统中保持辨识度，并支持围绕位置与组合关系进行策略选择。"
      },
      {
        "src": "/art/layout/battle-cards-c.webp",
        "caption": "卡背、阵营标识与游戏组件",
        "stage": "视觉系统",
        "brief": "玩家选择阵营并抽取初始手牌，轮流放置卡牌、结算属性与得分。横向和对角线上的单位组合可形成协同效果；不同阵营通过独立标识、职业组合和特长影响对局策略。"
      }
    ],
    "image": "/art/layout/battle-cards-a.webp",
    "fit": "contain",
    "number": "14"
  },
  {
    "id": "reversal-levels",
    "title": "Reversal — Level Studies",
    "cn": "合作射击 · 地图与关卡机制",
    "category": "游戏视觉与关卡",
    "type": "LEVEL / GAMEPLAY DESIGN",
    "project": "Reversal / Multiplayer Co-op Shooter",
    "role": "关卡规划与玩法设计",
    "description": "以俯视地图组织掩体、敌人、路径与目标点。三个关卡逐步引入教学、遭遇战和更复杂的路线，并结合 Boss 机制考虑玩家的合作与移动。",
    "images": [
      {
        "src": "/art/layout/reversal-map.webp",
        "caption": "总地图 · 路径与空间关系",
        "stage": "关卡规划",
        "brief": "玩家作为来自战后平行时空的特工，在调查中重新遇见失去的家人，并尝试寻找战争与悲剧的原因。游戏围绕 2–3 人协作展开，通过时空切换、寻找维修物资、修复基站与击败敌人逐步推进。"
      },
      {
        "src": "/art/layout/reversal-level-one.webp",
        "caption": "Level 1 · 教学区域与动线",
        "stage": "关卡草图",
        "brief": "第一关位于废弃工厂，承担掩体使用、武器组合和物品获取的教学。首章首领通过击退气流、回旋范围攻击、追踪导弹与横扫攻击，要求玩家利用地形并判断闪避时机。"
      },
      {
        "src": "/art/layout/reversal-level-two.webp",
        "caption": "Level 2 · 遭遇区域与路径",
        "stage": "关卡草图",
        "brief": "第二关通过小型敌人、维修箱与最终首领组织目标。首领机制包含召唤机器人、激光、能量球和防御阶段，其中一名玩家需要进入装置关闭防御，其他队友在外躲避攻击。"
      },
      {
        "src": "/art/layout/reversal-level-three.webp",
        "caption": "Level 3 · 复杂空间与路线组织",
        "stage": "关卡草图",
        "brief": "第三关采用更大、更复杂的地图，并加入传送通道与复活点以减少重复赶路。首领具有护盾、技能复制和旋转激光阵等机制，要求团队处理弱点、时间限制与负面效果叠加。"
      }
    ],
    "image": "/art/layout/reversal-map.webp",
    "fit": "contain",
    "number": "15"
  }
];

projects.push(...[{"id": "find-one-gameplay", "title": "Find the one — In Game", "cn": "游戏实机 · 界面与角色呈现", "category": "游戏视觉与界面", "type": "GAMEPLAY / VISUAL DESIGN", "role": "游戏画面展示", "description": "以手机界面作为视觉中心，结合面具符号、方向提示与角色对白。珊瑚粉、奶油白和亮青色构成轻快的配色，棱角分明的造型贯穿角色、手部与界面。", "images": [{"src": "/art/find-the-one/menu.png", "caption": "主菜单 · Find the one", "stage": "实机截图"}, {"src": "/art/find-the-one/bear.jpg", "caption": "实机画面 · 熊角色", "stage": "实机截图"}, {"src": "/art/find-the-one/goblin.png", "caption": "实机画面 · 绿肤角色", "stage": "实机截图"}, {"src": "/art/find-the-one/elf.png", "caption": "实机画面 · 精灵角色", "stage": "实机截图"}], "image": "/art/find-the-one/menu.png"}, {"id": "find-one-npcs", "title": "Find the one — NPC Collection", "cn": "NPC 图集 · 角色视觉设计", "category": "角色概念设计", "type": "NPC / CHARACTER ART", "role": "22 张角色原图", "description": "以几何切面、倾斜画框与星芒装饰统一角色系列，通过发型、服装、配色和表情建立不同的视觉特征。保留原始透明图像，可点击查看完整原图。", "layout": "npc", "images": [{"src": "/art/find-the-one/IMG_2139.png", "caption": "NPC 01", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2140.png", "caption": "NPC 02", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2141.png", "caption": "NPC 03", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2142.png", "caption": "NPC 04", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2143.png", "caption": "NPC 05", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2144.png", "caption": "NPC 06", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2145.png", "caption": "NPC 07", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2146.png", "caption": "NPC 08", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2147.png", "caption": "NPC 09", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2148.png", "caption": "NPC 10", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2149.png", "caption": "NPC 11", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2150.png", "caption": "NPC 12", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2151.png", "caption": "NPC 13", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2152.png", "caption": "NPC 14", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2153.png", "caption": "NPC 15", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2154.png", "caption": "NPC 16", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2155.png", "caption": "NPC 17", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2156.png", "caption": "NPC 18", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2157.png", "caption": "NPC 19", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2158.png", "caption": "NPC 20", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2159.png", "caption": "NPC 21", "stage": "角色原图"}, {"src": "/art/find-the-one/IMG_2160.png", "caption": "NPC 22", "stage": "角色原图"}], "image": "/art/find-the-one/IMG_2149.png"}]);

// Keep project covers, replace selected extracts with complete original boards.
for (const original of originalArchive) {
  const existing = projects.find(section => section.id === original.id);
  if (existing) {
    const intros = existing.images.map(image => image.brief).filter(Boolean);
    // Original-page captions carry their own context; existing summaries remain below.
    Object.assign(existing, original, { summary: original.summary ?? [...new Set(intros)].join('\n\n') });
  } else projects.push({ ...original, image: original.images[0].src });
}

export const skills = [
  { no: '01', en: 'CHARACTER', title: '让角色拥有自己的故事', text: '从剪影、比例到服装与装备，将角色性格、身份与叙事背景转化为清晰的视觉语言。', tags: '角色概念 / 服装与装备' },
  { no: '02', en: 'ENVIRONMENT', title: '构建可感知的世界', text: '以构图、光照与空间氛围探索场景，让环境承担叙事，也为角色与玩法提供可信的舞台。', tags: '场景探索 / 世界观构建' },
  { no: '03', en: 'DESIGN THINKING', title: '让美术与玩法彼此呼应', text: '结合武器功能、技能机制与游戏可读性进行设计；在方案迭代中兼顾视觉辨识度与实际体验。', tags: '武器与道具 / 游戏视觉开发' },
  { no: '04', en: 'COLLABORATION', title: '从概念走向可玩体验', text: '具备多人游戏项目协作经验，能与策划、程序及其他美术成员沟通，并在有限周期内推进制作。', tags: '跨职能协作 / 方案迭代' },
];


// One Works entry per project; all original artwork sections remain intact.
const workDefinitions = [
  { id: 'sands', title: 'Sands of the Damned', cn: '时间之沙 · 世界观与环境概念设计', type: 'WORLD BUILDING / ENVIRONMENT', description: '一个被不稳定时间塑造的世界。从城市规划、建筑语言到生态植被，再以三维空间验证设计，呈现完整的环境开发过程。', sectionIds: ['sands-background', 'chronohaven', 'architecture', 'temporal-flora', 'interior', 'sands-exploration'], cover: 'chronohaven' },
  { id: 'swan-lake', title: 'Swan Lake', cn: '天鹅湖 · 角色与叙事道具', type: 'CHARACTER / PROP DESIGN', description: '以 Odette 与 Odile 的对照为核心，将角色身份延伸到服装、头冠与诅咒之镜，建立统一的叙事视觉语言。', sectionIds: ['odette', 'swan-relics'], cover: 'odette' },
  { id: 'dawn-dusk', title: 'Dawn and Dusk', cn: '昼与夜 · 角色、异化与章节场景', type: 'CHARACTER / ENVIRONMENT', description: '一名渔民在核污染引发的异变事件后踏上寻找孩子的旅程。项目以父亲、姐弟与研究者之间的关系串联船只、村庄、海岸营地、工厂和水域，结合形态变化与环境线索展开叙事。', sectionIds: ['dawn-story', 'dawn-characters', 'dawn-environments'], cover: 'dawn-characters' },
  { id: 'battle-destiny', title: 'A Battle for Destiny', cn: '命运之战 · 阵营角色与卡牌系统', type: 'CHARACTER / CARD GAME', description: '以阵营角色为起点，建立服装、轮廓和色彩语言，并将其延伸到角色卡、功能卡、卡背与游戏组件。', sectionIds: ['battle-research', 'battle-characters', 'battle-cards', 'battle-props', 'battle-rules'], cover: 'battle-cards' },
  { id: 'reversal-game', title: 'Reversal', cn: '合作射击 · 角色、武器与关卡', type: 'CHARACTER / WEAPON / LEVEL', description: '围绕多人合作射击体验，将可操作角色、功能武器与关卡动线放在同一设计框架下，连接视觉辨识度与玩法机制。', sectionIds: ['reversal-characters', 'reversal', 'reversal-levels'], cover: 'reversal-characters' },
  { id: 'bell-project', title: 'The Bellworn', cn: '钟鸣者 · 角色与仪式装备', type: 'CHARACTER / COSTUME', description: '以旧教堂的钟声、时间与记忆为主题，设计一位承载灵性回声的守护者。破损钟体、空洞胸腔和风化长袍构成角色形象，展示从轮廓到材质与装备细节的设计过程。', sectionIds: ['bell'], cover: 'bell' },
  { id: 'rain-project', title: 'Listen to the Silent Rain', cn: '听见静雨 · 三维环境与光照', type: '3D ENVIRONMENT / LIGHTING', description: '围绕林地、水面与庭院构建环境氛围，通过场景制作、镜头选择和光照对比逐步完成视觉呈现。', sectionIds: ['silent-rain'], cover: 'silent-rain' },
];

workDefinitions.push({ id: 'new-project', title: 'Find the one', cn: '角色群像 · 游戏视觉与可玩体验', type: 'GAME / CHARACTER / UI', description: '用鲜明的角色群像与剪纸般的几何造型构建游戏视觉。收录项目视频、实机界面、NPC 角色图集，以及 Windows 版游戏。', sectionIds: ['find-one-gameplay', 'find-one-npcs'], cover: 'find-one-gameplay', download: { url: '/downloads/find-one.json', label: '下载 Windows 游戏' } });


const projectVideos = {
  'new-project': [{id: 'ncV4R1iaj0c', title: 'Find the one · 游戏视频', source: '用户提供'}],
  sands: [{ id: 'sands-film', title: 'Sands of the Damned · 项目视频', parts: ['/videos/sands-film-1.bin', '/videos/sands-film-2.bin', '/videos/sands-film-3.bin'], source: '用户提供的视频' }],
  'rain-project': [{ id: 'LwcUN810FVE', title: 'Listen to the Silent Rain · 场景展示', source: 'portfolio1.pdf · 第 9 页' }],
};

export const works = workDefinitions.map((work, index) => {
  const cover = projects.find(section => section.id === work.cover);
  const sections = work.sectionIds.map(id => projects.find(section => section.id === id));
  return { ...work, videos: projectVideos[work.id] || [], number: String(index + 1).padStart(2, '0'), image: cover?.image || work.image,
    fit: '', sections,
    imageCount: sections.reduce((total, section) => total + section.images.length, 0),
    disciplines: [...new Set(sections.map(section => section.category))] };
});
