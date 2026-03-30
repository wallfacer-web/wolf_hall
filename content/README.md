---
title: Wolf Hall MVKS Vault
note_type: guide
tags:
  - wolfhall
  - mvks
  - guide
---

# Wolf Hall MVKS Vault

这是一个按论文《基于 Obsidian、NotebookLM、Codex 与 GraphRAG 的最小可理解知识体系构建研究》落地的 Obsidian 知识仓，用于构建《狼厅》三部曲的 Minimum Viable Knowledge System（MVKS）。

## 目标

- 用最小但关键的知识节点支持《狼厅》阅读理解
- 用轻量本体统一人物、事件、制度、概念与文本片段
- 为 NotebookLM、GraphRAG 与 Codex 自动化维护预留稳定接口

## 目录

- `00 Inbox/`：临时采集、模板
- `01 MOCs/`：导航页与方法总览
- `02 People/`：人物卡
- `03 Events/`：事件卡
- `04 Institutions/`：制度与机构卡
- `05 Concepts/`：概念卡、宗教文化卡、语言叙事卡
- `06 Theory/`：文本片段、视角重置卡、追问触发片段
- `07 Queries/`：阅读问题、案例分析、追问记录
- `08 Sources/`：NotebookLM 导入清单、来源登记
- `09 GraphRAG/`：GraphRAG 输入、输出、摘要回流
- `10 Automation/`：Codex 自动化脚本、schema、生成结果

## 工作流

1. 把阅读中的困惑先记到 `00 Inbox/`
2. 将条目沉淀为模板化笔记
3. 在 Obsidian 中补齐双向链接和 frontmatter
4. 将片段与背景资料登记到 `08 Sources/`
5. 用 NotebookLM 生成来源扎根解释
6. 用 GraphRAG 生成社区摘要与关系推理结果
7. 用 `10 Automation/scripts/` 校验结构、生成时间线和覆盖报告
8. 将结果回流到 vault

## 自动化

使用 Python 3.10+ 即可运行，无第三方依赖。

```powershell
python .\10 Automation\scripts\validate_notes.py
python .\10 Automation\scripts\build_timeline.py
python .\10 Automation\scripts\coverage_report.py
```

## 当前种子内容

- MVKS 总览与本体规范
- 五层本体核心节点
- 论文中四个关键案例
- 人物卡、事件卡、制度卡、概念卡、文本片段卡模板

