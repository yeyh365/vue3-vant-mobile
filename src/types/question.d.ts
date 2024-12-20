enum QuestionType {
  Single = '1',
  Multiple = '2',
  Judge = '3',
}

interface Question {
  psId: number // 题目 id
  rowNum: number // 题号
  psDescription: string // 题目标题
  psType: QuestionType // 题目类型
  psAnswer: string // 正确答案
  psAnswerDescription: string // 答案解析
  sswAnswer: string // 学生答案
  sswFlag: '0' | '1' // 回答错误/正确
  choices: Choice[] // 选项
}

interface Choice {
  pscId: number // 选项 id
  psId: number // 题目 id
  pscChoice: string // 选项编号 A/B/C/D ...
  pscChoiceDescription: string // 选项内容
}

interface Response {
  singleChoiceList: Question[] // 单选
  multipleChoiceList: Question[] // 多选
  judgeChoiceList: Question[] // 判断
}
