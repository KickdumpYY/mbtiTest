export interface Question {
  id: number;
  text: string;
  category: 'E/I' | 'S/N' | 'T/F' | 'J/P';
  options: {
    a: string;
    b: string;
  };
}

export const questions: Question[] = [
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
    text: "在工作中，你更倾向于：",
    category: 'S/N',
    options: {
      a: "按既定的方式完成任务",
      b: "尝试新的解决方案"
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
    text: "面对批评时，你通常会：",
    category: 'T/F',
    options: {
      a: "据理力争，证明自己的观点",
      b: "考虑对方的感受和立场"
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
    text: "在工作或学习中，你更喜欢：",
    category: 'J/P',
    options: {
      a: "按部就班，循序渐进",
      b: "在截止日期前突击完成"
    }
  }
  // ... 这里只展示了部分题目
]; 