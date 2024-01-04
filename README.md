# GameJoye.top 网站

欢迎来到 GameJoye.top，这是一个个人博客网站，包含博客展示页面以及一个完整的后台管理系统。

## 站点链接

- **主页**：[https://gamejoye.top](https://gamejoye.top)
- **后台管理**：[https://gamejoye.top:5173](https://gamejoye.top:5173)

## 技术栈

本站点使用以下技术构建：

- **React**：用于构建用户界面的 JavaScript 库。
- **Ant Design (antd)**：一套优秀的 UI 设计语言和 React 实现。
- **Redux**：用于状态管理。
- **React Router v6**：用于页面路由管理。

## 功能

- **博客展示**：展示博客文章给访问者阅读。
- **后台管理**：支持文章、分类、文件夹等信息的管理功能。
- **主题切换**：支持不同主题的切换以提供不同的视觉体验。
- **代码规范**：使用 Prettier 工具来维护代码风格的一致性。

## 代码逻辑

对于博客、分类和文件夹数据的获取，我们采用了 `redux-toolkit` 中的 `RTK Query` 功能。这使得状态管理变得更加简洁高效，能够自动处理数据缓存、重新获取等常见场景。

- **使用 RTK Query**：为了更好地管理服务器状态，所有的读操作（如获取博客、分类和文件夹列表）都是通过 RTK Query 实现的，这为我们的数据获取提供了强大的数据缓存和数据同步能力。

对于博客的评论功能，我们使用了 `createAsyncThunk`：

- **使用 createAsyncThunk**：对于需要异步逻辑和副作用管理的写操作（如提交新评论），我们采用了 `createAsyncThunk`。它允许我们定义一个异步函数，并自动生成 action creators 和 action types 来处理整个请求的生命周期。

## 待优化的功能

以下是网站未来优化的一些计划：

1. 实现 react-router 的懒加载以优化页面加载时间。
2. 添加评论回复功能，增强用户互动性。
3. 对错误边界处理的反馈。

## 联系方式

如果您有任何建议或问题，请通过以下方式与我联系：

- 邮箱：`gamejoye@gmail.com`

感谢您的访问，希望您在 GameJoye.top 有一个愉快的体验。
