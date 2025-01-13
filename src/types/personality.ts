export type PersonalityType = {
  code: string;          // 如 "ESTJ"
  nickname: string;      // 如 "管理者"
  title: string;        // 如 "The Executive"
  description: string;  // 总体描述
  image: string;  // 添加图片URL字段
  characteristics: {    // 性格特点
    strengths: string[];
    weaknesses: string[];
  };
  career: string[];     // 适合的职业
  relationships: {      // 人际关系
    strengths: string[];
    advice: string[];
  };
}; 