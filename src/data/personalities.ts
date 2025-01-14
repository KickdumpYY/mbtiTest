import { PersonalityType } from '../types/personality';

export const personalities: Record<string, PersonalityType> = {
  "ESTJ": {
    code: "ESTJ",
    nickname: "管理者",
    title: "The Executive",
    image: "/images/ESTJ.png",
    description: "ESTJ型人格是天生的管理者。他们相信秩序和传统，实事求是的态度使他们能够轻松地做出决定或组织活动。他们重视真理和事实，尊重传统，遵守规则。",
    characteristics: {
      strengths: [
        "奉公守法，可靠负责",
        "坚定果断，意志坚强",
        "以身作则，注重传统",
        "出色的组织和管理能力",
        "直接诚实，实事求是"
      ],
      weaknesses: [
        "固执，不易接受新观点",
        "判断可能过于武断",
        "对感性需求不够重视",
        "可能过于专制和死板",
        "不擅长处理情感问题"
      ]
    },
    career: [
      "项目经理",
      "行政管理人员",
      "军警人员",
      "法官",
      "财务分析师",
      "企业主管"
    ],
    relationships: {
      strengths: [
        "忠诚可靠",
        "直接坦诚",
        "承担责任",
        "组织能力强"
      ],
      advice: [
        "学会倾听他人感受",
        "培养同理心",
        "保持开放和灵活",
        "适当放松控制欲"
      ]
    }
  },
  "INFJ": {
    code: "INFJ",
    nickname: "提倡者",
    title: "The Advocate",
    image: "/images/INFJ.png",
    description: "INFJ型人格是理想主义者和完美主义者。他们具有强烈的个人价值观，追求帮助他人和创造更美好的世界。他们富有同情心、理解力和洞察力。",
    characteristics: {
      strengths: [
        "富有创造力和想象力",
        "洞察力强，善解人意",
        "追求理想，有明确的价值观",
        "决心强，富有献身精神",
        "优秀的写作能力"
      ],
      weaknesses: [
        "过于理想化",
        "太过追求完美",
        "对批评敏感",
        "难以放下",
        "容易感到孤独"
      ]
    },
    career: [
      "心理咨询师",
      "作家",
      "教师",
      "艺术家",
      "非营利组织工作者",
      "人力资源专员"
    ],
    relationships: {
      strengths: [
        "深刻的洞察力",
        "真诚的关怀",
        "良好的倾听能力",
        "愿意付出"
      ],
      advice: [
        "学会适当放松",
        "不要过分苛责自己",
        "培养务实态度",
        "保持个人界限"
      ]
    }
  },
  "INTJ": {
    code: "INTJ",
    nickname: "建筑师",
    title: "The Architect",
    image: "/images/INTJ.png",
    description: "INTJ型人格是完美主义者，擅长通过创新的方式解决问题。他们具有强大的分析能力和战略思维，追求持续的自我提升和知识积累。",
    characteristics: {
      strengths: [
        "战略性思维强",
        "独立自主",
        "追求高标准",
        "创新能力强",
        "良好的分析判断能力"
      ],
      weaknesses: [
        "可能显得过于傲慢",
        "情商可能较低",
        "过分追求完美",
        "不擅长处理情感",
        "可能忽视他人感受"
      ]
    },
    career: [
      "科学研究员",
      "系统分析师",
      "战略规划师",
      "投资分析师",
      "建筑师",
      "工程师"
    ],
    relationships: {
      strengths: [
        "忠诚专一",
        "理性客观",
        "追求进步",
        "注重效率"
      ],
      advice: [
        "培养情商",
        "学会表达感情",
        "增加耐心",
        "提高社交技巧"
      ]
    }
  },
  "INTP": {
    code: "INTP",
    nickname: "逻辑学家",
    title: "The Logician",
    image: "/images/INTP.png",
    description: "INTP型人格是创新者和发明家，他们热爱理论和抽象思维，总是寻求真理和知识。他们擅长发现模式，解决复杂问题。",
    characteristics: {
      strengths: [
        "分析能力极强",
        "创造性思维",
        "追求真理",
        "思维开放",
        "适应能力强"
      ],
      weaknesses: [
        "可能过于理论化",
        "容易分心",
        "可能忽视细节",
        "不擅长情感交流",
        "可能显得冷漠"
      ]
    },
    career: [
      "程序员",
      "数据分析师",
      "研究员",
      "大学教授",
      "逻辑学家",
      "系统架构师"
    ],
    relationships: {
      strengths: [
        "思维开放",
        "尊重个人空间",
        "理性客观",
        "忠于真理"
      ],
      advice: [
        "注意情感表达",
        "培养同理心",
        "提高执行力",
        "加强社交技能"
      ]
    }
  },
  "ENTJ": {
    code: "ENTJ",
    nickname: "指挥官",
    title: "The Commander",
    image: "/images/ENTJ.png",
    description: "ENTJ型人格是天生的领导者，他们具有出色的组织能力和战略眼光。他们自信、果断，善于制定计划并付诸实施。",
    characteristics: {
      strengths: [
        "领导能力强",
        "战略思维出色",
        "自信果断",
        "效率高",
        "善于规划"
      ],
      weaknesses: [
        "可能过于专制",
        "不够体贴",
        "急躁",
        "过于直接",
        "可能忽视他人感受"
      ]
    },
    career: [
      "企业高管",
      "管理咨询师",
      "律师",
      "创业者",
      "政治家",
      "商业战略师"
    ],
    relationships: {
      strengths: [
        "坦诚直接",
        "有责任心",
        "追求卓越",
        "善于沟通"
      ],
      advice: [
        "培养耐心",
        "增加同理心",
        "学会倾听",
        "控制支配欲"
      ]
    }
  },
  "ENTP": {
    code: "ENTP",
    nickname: "辩论家",
    title: "The Debater",
    image: "/images/ENTP.png",
    description: "ENTP型人格是思想家和创新者，他们喜欢挑战传统观念，善于辩论。他们充满创造力，擅长发现新的可能性。",
    characteristics: {
      strengths: [
        "思维敏捷",
        "创新能力强",
        "适应力强",
        "善于辩论",
        "知识面广"
      ],
      weaknesses: [
        "可能不够稳定",
        "容易分心",
        "可能过于好辩",
        "不擅长细节",
        "可能忽视他人感受"
      ]
    },
    career: [
      "企业家",
      "律师",
      "创意总监",
      "市场策划",
      "发明家",
      "记者"
    ],
    relationships: {
      strengths: [
        "思维活跃",
        "幽默风趣",
        "善于交际",
        "思想开放"
      ],
      advice: [
        "提高执行力",
        "注意情感需求",
        "培养耐心",
        "加强责任心"
      ]
    }
  },
  "INFP": {
    code: "INFP",
    nickname: "调停者",
    title: "The Mediator",
    image: "/images/INFP.png",
    description: "INFP型人格是理想主义者，他们富有同情心和创造力，总是寻求内在的和谐与个人价值的实现。他们重视真实性和成长。",
    characteristics: {
      strengths: [
        "富有同理心",
        "创造力强",
        "忠于理想",
        "适应能力强",
        "善于倾听"
      ],
      weaknesses: [
        "过于理想化",
        "情绪化",
        "优柔寡断",
        "过分自我批评",
        "难以接受批评"
      ]
    },
    career: [
      "作家",
      "心理咨询师",
      "艺术家",
      "社工",
      "教师",
      "音乐家"
    ],
    relationships: {
      strengths: [
        "真诚体贴",
        "富有同情心",
        "重视关系",
        "善解人意"
      ],
      advice: [
        "增强自信",
        "提高决断力",
        "学会设限",
        "保持现实感"
      ]
    }
  },
  "ENFJ": {
    code: "ENFJ",
    nickname: "主人公",
    title: "The Protagonist",
    image: "/images/ENFJ.png",
    description: "ENFJ型人格是天生的领导者和教导者，他们热情、富有魅力，善于激励他人。他们关注他人的成长和发展，乐于帮助他人实现潜能。",
    characteristics: {
      strengths: [
        "领导能力强",
        "同理心强",
        "善于沟通",
        "富有魅力",
        "乐于助人"
      ],
      weaknesses: [
        "过分在意他人看法",
        "可能过度付出",
        "难以拒绝他人",
        "容易情绪化",
        "可能忽视自身需求"
      ]
    },
    career: [
      "教师",
      "培训师",
      "人力资源经理",
      "公关顾问",
      "非营利组织负责人",
      "销售经理"
    ],
    relationships: {
      strengths: [
        "热情友善",
        "善解人意",
        "乐于付出",
        "有责任心"
      ],
      advice: [
        "学会说不",
        "关注自身需求",
        "避免过度操心",
        "保持界限感"
      ]
    }
  },
  "ENFP": {
    code: "ENFP",
    nickname: "探险家",
    title: "The Campaigner",
    image: "/images/ENFP.png",
    description: "ENFP型人格充满热情和创造力，他们活力四射，善于发现可能性。他们重视自由和创新，乐于尝试新事物。",
    characteristics: {
      strengths: [
        "创造力丰富",
        "热情洋溢",
        "适应力强",
        "善于沟通",
        "富有同理心"
      ],
      weaknesses: [
        "注意力容易分散",
        "情绪化",
        "缺乏耐心",
        "不擅长细节",
        "难以坚持"
      ]
    },
    career: [
      "记者",
      "艺术家",
      "咨询师",
      "创意总监",
      "市场营销",
      "演员"
    ],
    relationships: {
      strengths: [
        "热情开放",
        "善解人意",
        "富有创意",
        "乐观积极"
      ],
      advice: [
        "提高执行力",
        "培养耐心",
        "注意细节",
        "保持专注"
      ]
    }
  },
  "ISTJ": {
    code: "ISTJ",
    nickname: "检查者",
    title: "The Inspector",
    image: "/images/ISTJ.png",
    description: "ISTJ型人格是认真负责的实干家，他们注重传统和秩序，做事一丝不苟。他们重视可靠性和诚实，善于处理具体细节。",
    characteristics: {
      strengths: [
        "责任心强",
        "注重细节",
        "有条理",
        "可靠诚实",
        "实事求是"
      ],
      weaknesses: [
        "不够灵活",
        "可能过于死板",
        "不善变通",
        "可能显得冷漠",
        "不擅长处理变化"
      ]
    },
    career: [
      "会计师",
      "审计师",
      "军警人员",
      "工程师",
      "项目经理",
      "质量检查员"
    ],
    relationships: {
      strengths: [
        "忠诚可靠",
        "责任心强",
        "言出必行",
        "重视承诺"
      ],
      advice: [
        "增加灵活性",
        "培养同理心",
        "学会放松",
        "接纳新观点"
      ]
    }
  },
  "ISFJ": {
    code: "ISFJ",
    nickname: "守护者",
    title: "The Protector",
    image: "/images/ISFJ.png",
    description: "ISFJ型人格是细心的照顾者，他们富有同情心，注重细节和传统。他们乐于服务他人，具有强烈的责任感。",
    characteristics: {
      strengths: [
        "细心周到",
        "有责任心",
        "实际可靠",
        "有耐心",
        "善于关怀"
      ],
      weaknesses: [
        "过分在意细节",
        "难以拒绝",
        "过度自我牺牲",
        "不善表达",
        "抗拒变化"
      ]
    },
    career: [
      "护士",
      "行政助理",
      "教师",
      "社工",
      "客服人员",
      "图书管理员"
    ],
    relationships: {
      strengths: [
        "忠诚体贴",
        "善解人意",
        "乐于付出",
        "重视和谐"
      ],
      advice: [
        "学会拒绝",
        "关注自身需求",
        "提高自信",
        "接纳变化"
      ]
    }
  },
  "ISTP": {
    code: "ISTP",
    nickname: "鉴赏家",
    title: "The Virtuoso",
    image: "/images/ISTP.png",
    description: "ISTP型人格是灵活的问题解决者，他们善于观察和分析，喜欢动手实践。他们冷静理性，适应力强。",
    characteristics: {
      strengths: [
        "动手能力强",
        "观察力敏锐",
        "灵活机智",
        "冷静理性",
        "适应力强"
      ],
      weaknesses: [
        "可能显得冷漠",
        "不擅长承诺",
        "容易感到无聊",
        "可能过于冒险",
        "不善表达情感"
      ]
    },
    career: [
      "技师",
      "工程师",
      "机械师",
      "运动员",
      "警察",
      "飞行员"
    ],
    relationships: {
      strengths: [
        "灵活独立",
        "善于解决问题",
        "尊重个人空间",
        "实事求是"
      ],
      advice: [
        "培养耐心",
        "增强情感表达",
        "提高承诺意识",
        "加强沟通"
      ]
    }
  },
  "ISFP": {
    code: "ISFP",
    nickname: "艺术家",
    title: "The Adventurer",
    image: "/images/ISFP.png",
    description: "ISFP型人格是艺术家和探险家，他们富有同情心，重视美感和自由。他们生活在当下，享受感官体验。",
    characteristics: {
      strengths: [
        "艺术感强",
        "富有同情心",
        "适应力强",
        "重视和谐",
        "善于欣赏"
      ],
      weaknesses: [
        "过分重视当下",
        "不善规划",
        "容易分心",
        "难以做决定",
        "可能过于敏感"
      ]
    },
    career: [
      "艺术家",
      "音乐家",
      "摄影师",
      "设计师",
      "美容师",
      "厨师"
    ],
    relationships: {
      strengths: [
        "温和友善",
        "善解人意",
        "重视和谐",
        "富有创意"
      ],
      advice: [
        "提高规划能力",
        "增强决断力",
        "培养长远眼光",
        "加强沟通"
      ]
    }
  },
  "ESTP": {
    code: "ESTP",
    nickname: "企业家",
    title: "The Entrepreneur",
    image: "/images/ESTP.png",
    description: "ESTP型人格是充满活力的冒险者，他们善于把握机会，喜欢行动和刺激。他们实用主义，适应力强。",
    characteristics: {
      strengths: [
        "行动力强",
        "适应力强",
        "解决问题能力强",
        "善于把握机会",
        "现实务实"
      ],
      weaknesses: [
        "可能过于冒险",
        "不善规划",
        "容易冲动",
        "可能忽视他人感受",
        "难以长期专注"
      ]
    },
    career: [
      "销售人员",
      "企业家",
      "运动员",
      "警察",
      "消防员",
      "市场营销"
    ],
    relationships: {
      strengths: [
        "活力充沛",
        "善于交际",
        "实事求是",
        "适应力强"
      ],
      advice: [
        "培养耐心",
        "注意他人感受",
        "提高规划能力",
        "增强承诺意识"
      ]
    }
  },
  "ESFP": {
    code: "ESFP",
    nickname: "表演者",
    title: "The Entertainer",
    image: "/images/ESFP.png",
    description: "ESFP型人格是热情的表演者，他们活在当下，热爱生活和娱乐。他们善于交际，富有同情心。",
    characteristics: {
      strengths: [
        "热情开朗",
        "善于交际",
        "实用性强",
        "适应力强",
        "富有同情心"
      ],
      weaknesses: [
        "容易冲动",
        "不善规划",
        "难以专注",
        "可能过度依赖他人",
        "容易分心"
      ]
    },
    career: [
      "演员",
      "销售人员",
      "导游",
      "活动策划",
      "美容师",
      "公关人员"
    ],
    relationships: {
      strengths: [
        "热情友善",
        "乐观开朗",
        "善于交际",
        "富有同情心"
      ],
      advice: [
        "提高规划能力",
        "培养独立性",
        "增强责任心",
        "提高专注力"
      ]
    }
  },
  "ESFJ": {
    code: "ESFJ",
    nickname: "执政官",
    title: "The Consul",
    image: "/images/ESFJ.png",
    description: "ESFJ型人格是热心的照顾者，他们重视传统和秩序，乐于服务他人。他们善于组织，注重和谐。",
    characteristics: {
      strengths: [
        "善解人意",
        "组织能力强",
        "责任心强",
        "重视和谐",
        "乐于助人"
      ],
      weaknesses: [
        "过分在意他人看法",
        "可能过度操心",
        "难以接受批评",
        "不善处理变化",
        "可能过度控制"
      ]
    },
    career: [
      "护士",
      "教师",
      "行政管理",
      "客服经理",
      "社工",
      "销售代表"
    ],
    relationships: {
      strengths: [
        "热情友善",
        "重视承诺",
        "善于照顾人",
        "注重和谐"
      ],
      advice: [
        "学会放松",
        "接纳不同意见",
        "培养独立性",
        "减少过度操心"
      ]
    }
  }
}; 