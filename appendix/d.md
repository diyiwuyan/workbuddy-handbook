# 附录 D MCP 配置参考

### MCP 配置文件格式

MCP 连接器配置存储在：`~/.workbuddy/mcp.json`

**基本格式**：

```json
{
  "mcpServers": {
    "服务器名称": {
      "command": "启动命令",
      "args": ["参数1", "参数2"],
      "env": {
        "环境变量名": "值"
      }
    }
  }
}
```

---

### 常用 MCP 服务器配置示例

#### GitHub MCP

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    }
  }
}
```

**获取 Personal Access Token**：
1. 登录 GitHub → Settings → Developer settings → Personal access tokens
2. 生成新 Token，勾选 `repo`、`read:org` 权限
3. 将 Token 填入 `GITHUB_PERSONAL_ACCESS_TOKEN`

#### 企业微信机器人 MCP

```json
{
  "mcpServers": {
    "wecom": {
      "command": "uvx",
      "args": ["wecom-bot-mcp-server"],
      "env": {
        "WECOM_WEBHOOK_URL": "https://qyapi.weixin.qq.com/..."
      }
    }
  }
}
```

#### 飞书 MCP

```json
{
  "mcpServers": {
    "feishu": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-feishu"],
      "env": {
        "FEISHU_APP_ID": "cli_xxxxxxxx",
        "FEISHU_APP_SECRET": "xxxxxxxxxxxx"
      }
    }
  }
}
```

---

### MCP 配置排查

| 问题 | 排查步骤 |
|---|---|
| 连接器不显示 | 检查 `mcp.json` 格式是否正确（JSON 语法） |
| 连接器显示但未连接 | 检查 `command` 和 `args` 是否正确；手动运行命令测试 |
| 连接后工具调用失败 | 检查 `env` 中的凭证是否正确；查看 WorkBuddy 日志 |
| 修改配置后不生效 | 重启 WorkBuddy；或在对话中让 WorkBuddy 重新加载连接器 |

---

