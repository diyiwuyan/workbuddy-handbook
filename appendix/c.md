## 附录 A：Skill 开发指南

### 什么时候应该开发 Skill

如果你发现某个任务：
- 需要多步骤完成
- 有固定的执行流程
- 值得复用（以后还会做）
- 涉及特定工具或配置

那么它就值得变成一个 Skill。

---

### Skill 的三种创建方式

#### 方式一：图形化界面（推荐新手）

1. 打开 WorkBuddy，点击**头像 → 设置 → Skills 管理**
2. 点击「**+ 新建技能**」
3. 填写：
   - 技能名称（如"自动重命名下载文件"）
   - 触发关键词（如"整理下载"）
   - 执行动作类型
4. 保存

适用于：文件归档、文本改写、Excel 字段提取等高频标准化场景。

#### 方式二：导入 YAML 模板（适合复杂逻辑）

```yaml
name: "企业微信工单查询"
version: "1.0.0"
description: "查询企业微信工单状态"
author: "your-company"
triggers:
  - keywords: ["查工单", "工单状态", "ticket"]
    description: "工单查询触发词"
actions:
  - name: "查询工单详情"
    type: "http_request"
    config:
      method: "GET"
      url: "https://qyapi.weixin.qq.com/cgi-bin/ticket/get"
      headers:
        Content-Type: "application/json"
      parameters:
        - name: "ticket_id"
          type: "string"
          required: true
          description: "工单ID"
      output:
        format: "card"
        template: "工单 {{ticket_id}} 状态：{{status}}"
```

导入步骤：
1. 在 Skills 管理界面点击「**导入**」
2. 选择 YAML 文件或粘贴配置内容
3. 系统自动解析并生成技能预览
4. 确认无误后点击「**安装**」

#### 方式三：指令反向生成（最智能）

重复 3 次相似操作后，AI 会自动提示：

"检测到你重复执行了类似操作，要不要保存为技能？"

点击确认，AI 自动生成 SKILL.md，无需手动编写。

---

### SKILL.md 的基本结构

```markdown
---
name: skill-name
description: 一句话描述这个 Skill 做什么
trigger: 触发词1, 触发词2
---

# Skill 名称

