import { Question } from '../types/question';

export const standardQuestions: Question[] = [
  // E/I 维度 (21题)
  {
    id: 1,
    text: "在社交场合中，你通常会：",
    category: 'E/I',
    options: {
      a: "和很多人交谈，包括不认识的人",
      b: "和少数熟悉的人交谈"
    }
  },
  {
    id: 2,
    text: "你认为自己是一个：",
    category: 'E/I',
    options: {
      a: "容易与人相处的人",
      b: "比较安静保守的人"
    }
  },
  {
    id: 3,
    text: "在团体中，你通常：",
    category: 'E/I',
    options: {
      a: "参与谈话的时间多于倾听",
      b: "倾听多于参与谈话"
    }
  },
  {
    id: 4,
    text: "当需要充电时，你倾向于：",
    category: 'E/I',
    options: {
      a: "和朋友一起出去",
      b: "独处一段时间"
    }
  },
  {
    id: 5,
    text: "在工作中，你更喜欢：",
    category: 'E/I',
    options: {
      a: "团队合作的项目",
      b: "独立完成的任务"
    }
  },
  {
    id: 6,
    text: "在派对上，你通常会：",
    category: 'E/I',
    options: {
      a: "待到很晚，越玩越有精神",
      b: "提早离开，感到精力消耗"
    }
  },
  {
    id: 7,
    text: "你更喜欢的休闲方式是：",
    category: 'E/I',
    options: {
      a: "参加社交活动",
      b: "在家放松休息"
    }
  },
  {
    id: 8,
    text: "在新环境中，你通常会：",
    category: 'E/I',
    options: {
      a: "主动认识新朋友",
      b: "等待他人来接近你"
    }
  },
  {
    id: 9,
    text: "你更喜欢的工作环境是：",
    category: 'E/I',
    options: {
      a: "开放式办公室",
      b: "私密的独立空间"
    }
  },
  {
    id: 10,
    text: "遇到问题时，你倾向于：",
    category: 'E/I',
    options: {
      a: "和他人讨论以寻求解决方案",
      b: "独自思考解决方法"
    }
  },
  // 继续 E/I 维度
  {
    id: 11,
    text: "在会议中，你通常会：",
    category: 'E/I',
    options: {
      a: "积极发表自己的观点",
      b: "仔细聆听他人发言"
    }
  },
  {
    id: 12,
    text: "你更倾向于：",
    category: 'E/I',
    options: {
      a: "边说边思考",
      b: "先思考再说话"
    }
  },
  {
    id: 13,
    text: "周末时，你更喜欢：",
    category: 'E/I',
    options: {
      a: "参加各种社交活动",
      b: "在家享受独处时光"
    }
  },
  {
    id: 14,
    text: "在团队项目中，你更倾向于：",
    category: 'E/I',
    options: {
      a: "经常与团队成员交流",
      b: "独立完成自己的部分"
    }
  },
  {
    id: 15,
    text: "在陌生环境中，你会：",
    category: 'E/I',
    options: {
      a: "很快适应并融入",
      b: "需要时间来适应"
    }
  },
  {
    id: 16,
    text: "你更喜欢的学习方式是：",
    category: 'E/I',
    options: {
      a: "小组讨论",
      b: "自主学习"
    }
  },
  {
    id: 17,
    text: "在社交媒体上，你通常：",
    category: 'E/I',
    options: {
      a: "经常分享和互动",
      b: "较少发帖，更多浏览"
    }
  },
  // S/N 维度 (26题)
  {
    id: 22,
    text: "你更倾向于相信：",
    category: 'S/N',
    options: {
      a: "你的实际经验",
      b: "你的直觉感受"
    }
  },
  {
    id: 23,
    text: "你更喜欢：",
    category: 'S/N',
    options: {
      a: "关注现实和事实",
      b: "想象未来的可能性"
    }
  },
  {
    id: 24,
    text: "在解决问题时，你更倾向于：",
    category: 'S/N',
    options: {
      a: "使用已经证实有效的方法",
      b: "尝试新的创新方法"
    }
  },
  {
    id: 25,
    text: "你更关注：",
    category: 'S/N',
    options: {
      a: "当下发生的具体事情",
      b: "可能发生的事情"
    }
  },
  {
    id: 26,
    text: "你更喜欢的工作是：",
    category: 'S/N',
    options: {
      a: "有明确的规则和流程",
      b: "允许发挥创意和想象力"
    }
  },
  {
    id: 27,
    text: "在阅读时，你更喜欢：",
    category: 'S/N',
    options: {
      a: "直接描述的故事情节",
      b: "含有深层寓意的内容"
    }
  },
  {
    id: 28,
    text: "你更相信：",
    category: 'S/N',
    options: {
      a: "亲身经历",
      b: "直觉判断"
    }
  },
  {
    id: 29,
    text: "你更关注：",
    category: 'S/N',
    options: {
      a: "具体的细节",
      b: "整体的概念"
    }
  },
  {
    id: 30,
    text: "在学习新事物时，你更喜欢：",
    category: 'S/N',
    options: {
      a: "循序渐进的步骤",
      b: "先了解整体框架"
    }
  },
  // 继续 S/N 维度
  {
    id: 31,
    text: "在做决定时，你更依赖：",
    category: 'S/N',
    options: {
      a: "过往的经验",
      b: "未来的可能性"
    }
  },
  {
    id: 32,
    text: "你更喜欢的老师是：",
    category: 'S/N',
    options: {
      a: "讲解清晰具体的",
      b: "启发思考创新的"
    }
  },
  {
    id: 33,
    text: "你更喜欢的工作任务是：",
    category: 'S/N',
    options: {
      a: "改进现有的系统",
      b: "开发全新的方案"
    }
  },
  {
    id: 34,
    text: "你更喜欢的对话是关于：",
    category: 'S/N',
    options: {
      a: "实际发生的事情",
      b: "可能性和理论"
    }
  },
  {
    id: 35,
    text: "你更感兴趣的话题是：",
    category: 'S/N',
    options: {
      a: "实际的、具体的事物",
      b: "抽象的、理论性的概念"
    }
  },
  {
    id: 36,
    text: "在解决问题时，你更依赖：",
    category: 'S/N',
    options: {
      a: "已经证实的方法",
      b: "创新的解决方案"
    }
  },
  {
    id: 37,
    text: "你更喜欢的书籍类型是：",
    category: 'S/N',
    options: {
      a: "基于现实的故事",
      b: "富有想象力的小说"
    }
  },
  {
    id: 38,
    text: "在工作中，你更注重：",
    category: 'S/N',
    options: {
      a: "实际的执行细节",
      b: "整体的发展方向"
    }
  },
  // T/F 维度 (24题)
  {
    id: 48,
    text: "做决定时，你更看重：",
    category: 'T/F',
    options: {
      a: "客观的逻辑和分析",
      b: "个人的价值和感受"
    }
  },
  {
    id: 49,
    text: "在评判他人时，你更倾向于：",
    category: 'T/F',
    options: {
      a: "公平公正的标准",
      b: "考虑情况和环境"
    }
  },
  {
    id: 50,
    text: "在处理冲突时，你通常会：",
    category: 'T/F',
    options: {
      a: "寻找问题的逻辑解决方案",
      b: "考虑各方的感受和需求"
    }
  },
  {
    id: 51,
    text: "你认为更重要的是：",
    category: 'T/F',
    options: {
      a: "诚实直接地表达意见",
      b: "维护他人的感受"
    }
  },
  {
    id: 52,
    text: "在工作中，你更重视：",
    category: 'T/F',
    options: {
      a: "完成任务的效率",
      b: "团队的和谐氛围"
    }
  },
  {
    id: 53,
    text: "在团队讨论中，你更看重：",
    category: 'T/F',
    options: {
      a: "讨论的效率和结果",
      b: "每个人的参与感"
    }
  },
  {
    id: 54,
    text: "当朋友遇到问题时，你倾向于：",
    category: 'T/F',
    options: {
      a: "提供解决方案",
      b: "提供情感支持"
    }
  },
  {
    id: 55,
    text: "你认为一个好的决定应该基于：",
    category: 'T/F',
    options: {
      a: "客观事实和数据",
      b: "对他人的影响"
    }
  },
  {
    id: 56,
    text: "在处理分歧时，你更重视：",
    category: 'T/F',
    options: {
      a: "找出谁对谁错",
      b: "维护双方关系"
    }
  },
  // 继续 T/F 维度
  {
    id: 57,
    text: "在给出建议时，你更注重：",
    category: 'T/F',
    options: {
      a: "指出问题的关键",
      b: "照顾对方的感受"
    }
  },
  {
    id: 58,
    text: "你认为更重要的是：",
    category: 'T/F',
    options: {
      a: "保持客观公正",
      b: "维护人际关系"
    }
  },
  {
    id: 59,
    text: "在处理矛盾时，你更倾向于：",
    category: 'T/F',
    options: {
      a: "基于原则处理",
      b: "考虑具体情况"
    }
  },
  {
    id: 60,
    text: "在评价他人工作时，你更倾向于：",
    category: 'T/F',
    options: {
      a: "直接指出问题所在",
      b: "先肯定后委婉建议"
    }
  },
  {
    id: 61,
    text: "在做选择时，你更看重：",
    category: 'T/F',
    options: {
      a: "利弊分析",
      b: "个人价值观"
    }
  },
  {
    id: 62,
    text: "在处理问题时，你更重视：",
    category: 'T/F',
    options: {
      a: "找到最有效的解决方案",
      b: "确保每个人都满意"
    }
  },
  {
    id: 63,
    text: "你更欣赏的领导风格是：",
    category: 'T/F',
    options: {
      a: "果断且注重效率",
      b: "关心下属感受"
    }
  },
  // J/P 维度 (22题)
  {
    id: 72,
    text: "你更喜欢：",
    category: 'J/P',
    options: {
      a: "提前计划和安排",
      b: "随机应变，保持灵活"
    }
  },
  {
    id: 73,
    text: "对于日程安排，你倾向于：",
    category: 'J/P',
    options: {
      a: "制定详细的计划并遵守",
      b: "保持开放和灵活"
    }
  },
  {
    id: 74,
    text: "你更喜欢的生活方式是：",
    category: 'J/P',
    options: {
      a: "有规律和秩序的",
      b: "自由和随性的"
    }
  },
  {
    id: 75,
    text: "面对任务时，你通常会：",
    category: 'J/P',
    options: {
      a: "立即开始并按计划完成",
      b: "等到最后一刻才开始"
    }
  },
  {
    id: 76,
    text: "你的工作环境通常是：",
    category: 'J/P',
    options: {
      a: "整洁有序",
      b: "随意自然"
    }
  },
  {
    id: 77,
    text: "你更喜欢的旅行方式是：",
    category: 'J/P',
    options: {
      a: "制定详细的行程计划",
      b: "随性而为，看心情决定"
    }
  },
  {
    id: 78,
    text: "对于deadline，你通常会：",
    category: 'J/P',
    options: {
      a: "提前完成任务",
      b: "在最后期限前完成"
    }
  },
  {
    id: 79,
    text: "你的生活节奏更倾向于：",
    category: 'J/P',
    options: {
      a: "规律有序",
      b: "灵活多变"
    }
  },
  {
    id: 80,
    text: "面对变化，你通常会：",
    category: 'J/P',
    options: {
      a: "希望得到提前通知",
      b: "随机应变，享受变化"
    }
  },
  {
    id: 81,
    text: "对于规则，你的态度是：",
    category: 'J/P',
    options: {
      a: "严格遵守",
      b: "视情况灵活处理"
    }
  },
  {
    id: 82,
    text: "你更喜欢的工作方式是：",
    category: 'J/P',
    options: {
      a: "按部就班，循序渐进",
      b: "灵活机动，随机应变"
    }
  },
  {
    id: 83,
    text: "对于重要决定，你倾向于：",
    category: 'J/P',
    options: {
      a: "尽快做出决定并执行",
      b: "保持开放，等待更多信息"
    }
  },
  {
    id: 84,
    text: "你的桌面通常是：",
    category: 'J/P',
    options: {
      a: "整理得井井有条",
      b: "看起来有些混乱但自己清楚"
    }
  },
  {
    id: 85,
    text: "对于计划变动，你通常：",
    category: 'J/P',
    options: {
      a: "感到不适应和烦躁",
      b: "觉得这很正常"
    }
  },
  {
    id: 86,
    text: "你的衣柜通常是：",
    category: 'J/P',
    options: {
      a: "按类别整齐排列",
      b: "随意放置但能找到"
    }
  },
  {
    id: 87,
    text: "面对新项目，你会：",
    category: 'J/P',
    options: {
      a: "制定详细的执行计划",
      b: "边做边调整方向"
    }
  },
  {
    id: 88,
    text: "你更喜欢的工作环境是：",
    category: 'J/P',
    options: {
      a: "有明确的规章制度",
      b: "灵活自由的氛围"
    }
  },
  // 完成 E/I 维度的最后4题
  {
    id: 18,
    text: "在做决定时，你倾向于：",
    category: 'E/I',
    options: {
      a: "与他人讨论后再决定",
      b: "独自思考后做决定"
    }
  },
  {
    id: 19,
    text: "在压力情况下，你会：",
    category: 'E/I',
    options: {
      a: "寻找他人倾诉和支持",
      b: "自己独处一段时间"
    }
  },
  {
    id: 20,
    text: "你更喜欢的工作节奏是：",
    category: 'E/I',
    options: {
      a: "频繁与他人互动",
      b: "较少的社交干扰"
    }
  },
  {
    id: 21,
    text: "在团队活动中，你通常：",
    category: 'E/I',
    options: {
      a: "积极参与组织和策划",
      b: "配合他人，专注自己的任务"
    }
  },
  // 完成 S/N 维度的最后10题
  {
    id: 39,
    text: "在描述事物时，你倾向于：",
    category: 'S/N',
    options: {
      a: "具体而详细",
      b: "使用比喻和联想"
    }
  },
  {
    id: 40,
    text: "你更喜欢的游戏类型是：",
    category: 'S/N',
    options: {
      a: "基于现实的模拟游戏",
      b: "富有想象力的角色扮演"
    }
  },
  {
    id: 41,
    text: "在学习新技能时，你更喜欢：",
    category: 'S/N',
    options: {
      a: "循序渐进的实践",
      b: "理解背后的原理"
    }
  },
  {
    id: 42,
    text: "你更容易记住：",
    category: 'S/N',
    options: {
      a: "具体的细节和事实",
      b: "整体的印象和感受"
    }
  },
  {
    id: 43,
    text: "在解决问题时，你更倾向于：",
    category: 'S/N',
    options: {
      a: "遵循已有的解决方案",
      b: "探索新的可能性"
    }
  },
  {
    id: 44,
    text: "你更喜欢的领导者是：",
    category: 'S/N',
    options: {
      a: "注重实际效果的",
      b: "富有远见和创新的"
    }
  },
  {
    id: 45,
    text: "在做计划时，你更注重：",
    category: 'S/N',
    options: {
      a: "具体可行的步骤",
      b: "未来的发展空间"
    }
  },
  {
    id: 46,
    text: "你更喜欢的工作项目是：",
    category: 'S/N',
    options: {
      a: "明确且结构化的",
      b: "开放且有创意空间的"
    }
  },
  {
    id: 47,
    text: "在处理问题时，你更依赖：",
    category: 'S/N',
    options: {
      a: "实践经验",
      b: "直觉判断"
    }
  },
  // 完成 T/F 维度的最后8题
  {
    id: 64,
    text: "在团队合作中，你更注重：",
    category: 'T/F',
    options: {
      a: "任务的完成质量",
      b: "团队成员的感受"
    }
  },
  {
    id: 65,
    text: "在解决冲突时，你更倾向于：",
    category: 'T/F',
    options: {
      a: "分析问题的根源",
      b: "调和各方的情绪"
    }
  },
  {
    id: 66,
    text: "你认为更重要的是：",
    category: 'T/F',
    options: {
      a: "保持客观理性",
      b: "体谅他人感受"
    }
  },
  {
    id: 67,
    text: "在做决策时，你更依赖：",
    category: 'T/F',
    options: {
      a: "逻辑分析",
      b: "价值观和信念"
    }
  },
  {
    id: 68,
    text: "你更欣赏的品质是：",
    category: 'T/F',
    options: {
      a: "公正和理性",
      b: "同理心和包容"
    }
  },
  {
    id: 69,
    text: "在给予反馈时，你更倾向于：",
    category: 'T/F',
    options: {
      a: "直接指出问题",
      b: "注意对方感受"
    }
  },
  {
    id: 70,
    text: "在工作评估时，你更看重：",
    category: 'T/F',
    options: {
      a: "目标的达成度",
      b: "团队的协作性"
    }
  },
  {
    id: 71,
    text: "面对争议，你通常会：",
    category: 'T/F',
    options: {
      a: "坚持原则和立场",
      b: "寻求双方都接受的方案"
    }
  },
  // 完成 J/P 维度的最后4题
  {
    id: 89,
    text: "你更喜欢的生活状态是：",
    category: 'J/P',
    options: {
      a: "按计划进行",
      b: "随遇而安"
    }
  },
  {
    id: 90,
    text: "对于约会时间，你：",
    category: 'J/P',
    options: {
      a: "总是准时到达",
      b: "经常会稍微迟到"
    }
  },
  {
    id: 91,
    text: "完成任务时，你更倾向于：",
    category: 'J/P',
    options: {
      a: "一次性完成",
      b: "分多次完成"
    }
  },
  {
    id: 92,
    text: "对于重要事项，你通常：",
    category: 'J/P',
    options: {
      a: "提前做好准备",
      b: "临时发挥应对"
    }
  }
]; 