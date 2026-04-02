---
title: QBatch_代词黏附样本清单
note_type: query
status: active
query_type: batch-task
writeback_status: partial
evidence_gap: sample-fragments-not-yet-collected
archive_ready: false
target_entities:
  - Thomas Cromwell
applied_theory:
  - 叙事学
  - 历史小说理论与新历史主义
  - 混合方法与LLM协同
tools:
  - NotebookLM
  - GraphRAG
tags:
  - wolfhall
  - query
  - batch
  - pronoun
  - focalization
  - samples
---

# QBatch_代词黏附样本清单

> [!abstract] 核心问题
> 这张页不再解释 `he` 为什么默认黏附在 Cromwell 身上，而是负责把这一机制转化为可批量记录、可人工验证、可后续统计的样本库。  
> 它的任务是统一管理 `QCase_“他，克伦威尔”的代词黏附与叙事消歧测试` 后续需要的样本段落。

> [!info] 本页和 `QCase` 的分工
> `QCase` 负责提出机制、解释意义、给出判断规则。  
> `QBatch` 负责真正收集样本、统一字段、追踪执行状态。

## 问题界定

### 本批处理要回答的问题

- 哪些段落最适合验证 `he` 是否默认黏附 Cromwell？
- 哪些场景最容易出现代词摇晃、重置或短暂视角移交？
- 如何用统一字段记录样本，避免人工细读变成散乱摘录？

### 本批处理的目标

- 建立首批人工验证样本集。
- 固定样本记录字段。
- 为后续 `GraphRAG` 与人工细读提供共同入口。

## 适用对象与输入来源

### 相关查询页

- [[07 Queries/07.3_Case_Studies/QCase_“他，克伦威尔”的代词黏附与叙事消歧测试]]

### 输入来源

- `Wolf Hall`
- `Bring Up the Bodies`
- `The Mirror and the Light`
- `NotebookLM`
- `GraphRAG`
- 人工细读样本段落

## 提问记录与工具调用

### 共用执行顺序

1. 先按场景类型建样本框架。
2. 再补每一类的首批代表段落。
3. 用统一表头记录人工裁定。
4. 必要时再调用 `GraphRAG` 追更窄的英文细例。

### 共用准备命令

```powershell
$env:NOTEBOOKLM_HOME = "$env:USERPROFILE\.notebooklm-clean-home"
notebooklm use 99341476-8713-40c0-ae12-70f59cfd24e8
```

## 首批人工验证样本集

### 1. 多实体同频权力博弈

- 检验价值：
  - 多位高权重男性同时在场时，`he` 是否仍默认回附到 Cromwell。
- 首批代表场景建议：
  - 《镜与光》中克伦威尔在末日逮捕现场被 Norfolk、Suffolk、Audley、Wriothesley 等多人围住的场景。
  - 优先原因：
    - 这是“he 黏附”最接近崩溃边缘的压力测试，因为同场男性权力节点密集，且 Cromwell 一度失去行政动作链护甲。
  - 重点观察：
    - 内部生理应激
    - 幽灵化视角
    - 在失去权力后是否仍保有内部聚焦优势
- 建议字段：
  - `Scene_ID`
  - `Entities_Present`
  - `Ambiguity_Trigger`
  - `Sensory_Action_Anchor`
  - `Adhesion_Verdict`
- 状态：
  - [ ] 已收集代表段落

### 2. 绝对王权近身压迫

- 检验价值：
  - 当国王的情绪和肉身引力极强时，`he` 是否会被短暂拉扯。
- 首批代表场景建议：
  - 《提堂》中亨利八世因帝国大使相关事务暴怒并近身逼压克伦威尔的场景。
  - 优先原因：
    - 国王的身体与情绪引力会直接争夺叙事中心，是观察“he 指针”如何被拉扯又被拽回的高价值切片。
  - 重点观察：
    - 国王外部动作与 Cromwell 内部计算的对抗
    - 微小具身防卫动作如何重置主体
- 建议字段：
  - `Scene_ID`
  - `Royal_Pressure_Type`
  - `Bodily_Reaction`
  - `Reset_Tag`
  - `Adhesion_Verdict`
- 状态：
  - [ ] 已收集代表段落

### 3. 记忆剧场与时空折叠

- 检验价值：
  - 当过去侵入现在时，`he` 是否会发生身份碎裂式摇晃。
- 首批代表场景建议：
  - 《镜与光》中签署死刑令时，当前行政动作与“鳗鱼男孩”暴力记忆交叠的场景。
  - 优先原因：
    - 这类段落里 `he` 容易在当下的国务大臣、过去的少年 Cromwell、以及暴力受虐对象之间摇晃。
  - 重点观察：
    - 触发时空折叠的感官线索
    - 视角如何从创伤画面重新收束回当前场景
- 建议字段：
  - `Scene_ID`
  - `Trigger_Cue`
  - `Past_Layer`
  - `Pain_or_Sensory_Return`
  - `Adhesion_Verdict`
- 状态：
  - [ ] 已收集代表段落

### 4. 密室审讯与心理击溃

- 检验价值：
  - 检查冷酷行政动作链和情绪不对称如何稳住视角主语。
- 建议字段：
  - `Scene_ID`
  - `Interrogated_Entity`
  - `Action_Chain`
  - `Emotion_Asymmetry`
  - `Adhesion_Verdict`
- 状态：
  - [ ] 已收集代表段落

### 5. 跨语种交锋与双重编码

- 检验价值：
  - 检查外交辞令与内心暗译之间的裂隙如何锁定 Cromwell。
- 建议字段：
  - `Scene_ID`
  - `Languages_or_Code_Shift`
  - `Surface_Speech`
  - `Inner_Commentary`
  - `Adhesion_Verdict`
- 状态：
  - [ ] 已收集代表段落

### 6. 档案制造与物性交互

- 检验价值：
  - 检查文书、账目、图章、钥匙等物质交互如何替代名字成为身份锚点。
- 首批代表场景建议：
  - 《狼厅》中深夜起草法案、注视手部阴影、处理卷宗与戒指的独处场景。
  - 优先原因：
    - 这类段落几乎没有对话干扰，最适合验证“文书控制权即叙事控制权”。
  - 重点观察：
    - 行政动作链
    - 物质对象的触摸与评估
    - 法律语言如何替代名字成为主体签章
- 建议字段：
  - `Scene_ID`
  - `Object_Control`
  - `Administrative_Action`
  - `Reset_Tag`
  - `Adhesion_Verdict`
- 状态：
  - [ ] 已收集代表段落

### 7. 阶级冲突与物理威胁

- 检验价值：
  - 检查旧贵族威压下，注意力转移与自我客体化是否稳定出现。
- 建议字段：
  - `Scene_ID`
  - `Threat_Source`
  - `Class_Conflict_Marker`
  - `Attention_Shift`
  - `Adhesion_Verdict`
- 状态：
  - [ ] 已收集代表段落

### 8. 肉身失控与病痛谵妄

- 检验价值：
  - 检查理性控制弱化时，`he` 黏附是否会松动或转移。
- 建议字段：
  - `Scene_ID`
  - `Physical_State`
  - `Hallucination_or_Drift`
  - `Internality_Marker`
  - `Adhesion_Verdict`
- 状态：
  - [ ] 已收集代表段落

## 统一记录字段

- `Scene_ID`
- `Book`
- `Part_Chapter`
- `Scene_Type`
- `Entities_Present`
- `Ambiguity_Trigger`
- `Reset_Tag`
- `Sensory_Action_Anchor`
- `Adhesion_Verdict`
- `Justification`

## Obsidian 标注表头

```markdown
---
tags: [He_Cromwell, Focalization, Manual_Sample]
Book: ""
Part_Chapter: ""
Scene_Type: ""
Entities_Present: []
Ambiguity_Trigger: ""
Reset_Tag: ""
Sensory_Action_Anchor: []
Adhesion_Verdict: ""
Justification: ""
---
```

## 执行状态

- [x] 已建立首批样本框架
- [x] 已固定记录字段
- [x] 已整理 Obsidian 标注表头
- [x] 已补首批代表段落
- [x] 已建立样本记录卡

## 首批样本记录卡

- [[07 Queries/07.2_Batch_Tasks/QBatchSample_末日逮捕现场的He黏附测试]]
- [[07 Queries/07.2_Batch_Tasks/QBatchSample_国王近身压迫的He拉扯测试]]
- [[07 Queries/07.2_Batch_Tasks/QBatchSample_创伤闪回折叠的He摇晃测试]]
- [[07 Queries/07.2_Batch_Tasks/QBatchSample_深夜文书动作的He锚定测试]]

当前进度：

- 已完成首张范例卡：
  - [[07 Queries/07.2_Batch_Tasks/QBatchSample_深夜文书动作的He锚定测试]]
- 已完成第二张高压范例卡：
  - [[07 Queries/07.2_Batch_Tasks/QBatchSample_末日逮捕现场的He黏附测试]]
- 待补后三张高压样本：
  - 国王近身压迫
  - 创伤闪回折叠

## 回写去向

- 查询页：
  - [[07 Queries/07.3_Case_Studies/QCase_“他，克伦威尔”的代词黏附与叙事消歧测试]]
- 理论页：
  - [[06 Theory/01 叙事学]]
  - [[06 Theory/06 混合方法与LLM协同]]
- 概念页：
  - [[05 Concepts/视角]]
  - [[05 Concepts/历史解释权]]
