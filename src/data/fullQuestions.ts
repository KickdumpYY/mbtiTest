import { Question } from '../types/question';
import { standardQuestions } from './standardQuestions';

export const fullQuestions: Question[] = [
  // 保留标准版的93题
  ...standardQuestions,

  // 额外添加51题以达到144题
  // E/I 维度额外题目
  {
    id: 93,
    text: "在公共场合演讲时，你通常会：",
    category: 'E/I',
    options: {
      a: "感到兴奋和充满能量",
      b: "感到紧张和消耗能量"
    }
  },
  {
    id: 94,
    text: "在团队项目中遇到困难时，你会：",
    category: 'E/I',
    options: {
      a: "立即寻求团队讨论",
      b: "先自己思考解决方案"
    }
  },
  {
    id: 95,
    text: "在休息时间，你更倾向于：",
    category: 'E/I',
    options: {
      a: "和同事聊天",
      b: "独自放松"
    }
  },

  // S/N 维度额外题目
  {
    id: 96,
    text: "在阅读新闻时，你更关注：",
    category: 'S/N',
    options: {
      a: "具体的事实和数据",
      b: "事件背后的含义"
    }
  },
  {
    id: 97,
    text: "在学习新知识时，你更喜欢：",
    category: 'S/N',
    options: {
      a: "按照教材逐步学习",
      b: "跳跃式地探索关联"
    }
  },
  {
    id: 98,
    text: "在解决问题时，你更依赖：",
    category: 'S/N',
    options: {
      a: "已有的成功经验",
      b: "创新的解决思路"
    }
  },

  // T/F 维度额外题目
  {
    id: 99,
    text: "在处理人际关系时，你更重视：",
    category: 'T/F',
    options: {
      a: "保持适当的距离",
      b: "建立深入的联系"
    }
  },
  {
    id: 100,
    text: "在评价一个决策时，你更关注：",
    category: 'T/F',
    options: {
      a: "决策的逻辑性",
      b: "决策的人文关怀"
    }
  },
  {
    id: 101,
    text: "当朋友之间发生矛盾时，你会：",
    category: 'T/F',
    options: {
      a: "分析是非对错",
      b: "考虑各方感受"
    }
  },

  // J/P 维度额外题目
  {
    id: 102,
    text: "对于周末安排，你倾向于：",
    category: 'J/P',
    options: {
      a: "提前规划好活动",
      b: "随心所欲地安排"
    }
  },
  {
    id: 103,
    text: "在处理日常事务时，你更喜欢：",
    category: 'J/P',
    options: {
      a: "建立系统的规则",
      b: "根据情况灵活处理"
    }
  },
  {
    id: 104,
    text: "面对新的工作任务，你会：",
    category: 'J/P',
    options: {
      a: "先制定完整计划",
      b: "边做边调整方向"
    }
  },

  // 继续添加 E/I 维度的题目
  {
    id: 105,
    text: "在参加聚会时，你更倾向于：",
    category: 'E/I',
    options: {
      a: "成为话题的中心",
      b: "做一个安静的倾听者"
    }
  },
  {
    id: 106,
    text: "在网络社交中，你通常：",
    category: 'E/I',
    options: {
      a: "积极参与各种群组讨论",
      b: "主要与熟悉的人互动"
    }
  },
  {
    id: 107,
    text: "在工作会议上，你倾向于：",
    category: 'E/I',
    options: {
      a: "主动发表意见和建议",
      b: "在必要时才发言"
    }
  },

  // 继续添加 S/N 维度的题目
  {
    id: 108,
    text: "在面对变化时，你更注重：",
    category: 'S/N',
    options: {
      a: "如何适应现实情况",
      b: "变化带来的可能性"
    }
  },
  {
    id: 109,
    text: "在做决策时，你更相信：",
    category: 'S/N',
    options: {
      a: "具体的数据分析",
      b: "直觉的判断"
    }
  },
  {
    id: 110,
    text: "在工作汇报时，你更倾向于：",
    category: 'S/N',
    options: {
      a: "提供详细的数据和事实",
      b: "分享整体的见解和展望"
    }
  },

  // 继续添加 T/F 维度的题目
  {
    id: 111,
    text: "在团队决策中，你更看重：",
    category: 'T/F',
    options: {
      a: "决策的合理性和效率",
      b: "团队的认同感和参与度"
    }
  },
  {
    id: 112,
    text: "当他人犯错时，你更倾向于：",
    category: 'T/F',
    options: {
      a: "指出问题所在",
      b: "给予理解和支持"
    }
  },
  {
    id: 113,
    text: "在处理投诉时，你更注重：",
    category: 'T/F',
    options: {
      a: "解决问题的效率",
      b: "安抚客户的情绪"
    }
  },

  // 继续添加 J/P 维度的题目
  {
    id: 114,
    text: "对于工作截止日期，你通常：",
    category: 'J/P',
    options: {
      a: "提前完成以确保万无一失",
      b: "在最后期限前完成即可"
    }
  },
  {
    id: 115,
    text: "你的工作方式更倾向于：",
    category: 'J/P',
    options: {
      a: "按既定计划逐步推进",
      b: "根据情况灵活调整"
    }
  },
  {
    id: 116,
    text: "对于意外情况，你通常：",
    category: 'J/P',
    options: {
      a: "感到不安和困扰",
      b: "觉得是正常的事情"
    }
  },

  // 继续添加更深入的 E/I 维度题目
  {
    id: 117,
    text: "在处理压力时，你会：",
    category: 'E/I',
    options: {
      a: "寻找机会与他人交流",
      b: "需要独处时间来恢复"
    }
  },
  {
    id: 118,
    text: "在新的工作环境中，你会：",
    category: 'E/I',
    options: {
      a: "主动认识每个同事",
      b: "慢慢熟悉周围的人"
    }
  },

  // 继续添加更深入的 S/N 维度题目
  {
    id: 119,
    text: "在阅读小说时，你更关注：",
    category: 'S/N',
    options: {
      a: "故事情节的发展",
      b: "故事背后的寓意"
    }
  },
  {
    id: 120,
    text: "在规划未来时，你更倾向于：",
    category: 'S/N',
    options: {
      a: "制定具体可行的计划",
      b: "设想理想的可能性"
    }
  },

  // 继续添加更深入的 T/F 维度题目
  {
    id: 121,
    text: "在进行批评时，你会：",
    category: 'T/F',
    options: {
      a: "直接指出问题",
      b: "考虑对方的感受"
    }
  },
  {
    id: 122,
    text: "在做重要决定时，你更依赖：",
    category: 'T/F',
    options: {
      a: "理性的分析",
      b: "内心的感受"
    }
  },

  // 继续添加更深入的 J/P 维度题目
  {
    id: 123,
    text: "对于生活习惯，你更喜欢：",
    category: 'J/P',
    options: {
      a: "保持固定的作息时间",
      b: "根据心情调整安排"
    }
  },
  {
    id: 124,
    text: "在准备旅行时，你会：",
    category: 'J/P',
    options: {
      a: "详细规划每天的行程",
      b: "只订好主要的住宿"
    }
  },

  // 继续添加 E/I 维度的题目
  {
    id: 125,
    text: "在团队建设活动中，你更喜欢：",
    category: 'E/I',
    options: {
      a: "组织和带领活动",
      b: "跟随他人的安排"
    }
  },
  {
    id: 126,
    text: "在遇到困难时，你倾向于：",
    category: 'E/I',
    options: {
      a: "立即寻求他人帮助",
      b: "先尝试自己解决"
    }
  },
  {
    id: 127,
    text: "在社交媒体上，你会：",
    category: 'E/I',
    options: {
      a: "经常更新状态分享生活",
      b: "较少发布个人信息"
    }
  },

  // 继续添加 S/N 维度的题目
  {
    id: 128,
    text: "在接收信息时，你更注重：",
    category: 'S/N',
    options: {
      a: "信息的准确性和可靠性",
      b: "信息带来的启发和联想"
    }
  },
  {
    id: 129,
    text: "在描述事物时，你更倾向于：",
    category: 'S/N',
    options: {
      a: "使用具体的例子",
      b: "使用抽象的概念"
    }
  },
  {
    id: 130,
    text: "在解决问题时，你更看重：",
    category: 'S/N',
    options: {
      a: "实际可行的方案",
      b: "创新的思路"
    }
  },

  // 继续添加 T/F 维度的题目
  {
    id: 131,
    text: "在团队合作中，你更关注：",
    category: 'T/F',
    options: {
      a: "任务的完成情况",
      b: "团队的和谐程度"
    }
  },
  {
    id: 132,
    text: "在处理矛盾时，你更倾向于：",
    category: 'T/F',
    options: {
      a: "坚持原则和立场",
      b: "寻求各方都接受的方案"
    }
  },
  {
    id: 133,
    text: "在评价他人时，你更看重：",
    category: 'T/F',
    options: {
      a: "能力和成就",
      b: "品格和态度"
    }
  },

  // 继续添加 J/P 维度的题目
  {
    id: 134,
    text: "对于计划变更，你通常会：",
    category: 'J/P',
    options: {
      a: "感到不适并需要时间调整",
      b: "很快接受并作出改变"
    }
  },
  {
    id: 135,
    text: "在工作中，你更喜欢：",
    category: 'J/P',
    options: {
      a: "明确的任务和期限",
      b: "灵活的安排和调整"
    }
  },
  {
    id: 136,
    text: "对于规则制度，你认为：",
    category: 'J/P',
    options: {
      a: "应该严格遵守",
      b: "可以灵活变通"
    }
  },

  // 最后补充一些深入的问题
  {
    id: 137,
    text: "在进行创作时，你更倾向于：",
    category: 'S/N',
    options: {
      a: "遵循既定的模式和规范",
      b: "尝试新颖的表达方式"
    }
  },
  {
    id: 138,
    text: "在面对批评时，你会：",
    category: 'T/F',
    options: {
      a: "客观分析批评的合理性",
      b: "关注批评的方式和语气"
    }
  },
  {
    id: 139,
    text: "在日常生活中，你更重视：",
    category: 'J/P',
    options: {
      a: "秩序和规律",
      b: "自由和变化"
    }
  },
  {
    id: 140,
    text: "在社交场合，你通常：",
    category: 'E/I',
    options: {
      a: "能量会逐渐增加",
      b: "会感到逐渐疲惫"
    }
  },
  {
    id: 141,
    text: "在思考问题时，你更倾向于：",
    category: 'S/N',
    options: {
      a: "关注具体和现实",
      b: "探索可能和潜力"
    }
  },
  {
    id: 142,
    text: "在做决定时，你更看重：",
    category: 'T/F',
    options: {
      a: "事情的对错",
      b: "对人的影响"
    }
  },
  {
    id: 143,
    text: "对于生活，你更喜欢：",
    category: 'J/P',
    options: {
      a: "有计划和控制感",
      b: "保持开放和适应性"
    }
  },
  {
    id: 144,
    text: "在沟通时，你更倾向于：",
    category: 'E/I',
    options: {
      a: "直接表达想法",
      b: "仔细斟酌后再说"
    }
  }
]; 