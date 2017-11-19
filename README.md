# Brazil
Yet another react starter based on webpack, babel.

## Usage
```bash
git clone https://github.com/zhanba/react-starter.git --depth=1
npm install
npm start
```

## Feature
- 整合了基本的react，redux，react-router4，还包括项目初始的胶水代码
- 比较完整的webpack配置，包括开发和生产环境，分离了常用配置
- 开发环境为express集成webpack-dev-middleware和webpack-hot-middleware，后期可以灵活的定制更多功能
- 生产环境实现了代码分割，并控制哈希，实现较好的缓存控制，加入了bundle分析工具，自动生成分析图（很有用）
- 强制Lint
- 类似半自动步枪，基本需求可以满足，配置没有过度复杂，方便定制

## Todo
- 对支持module的现代浏览器直接打包es6
- stylelint
- git commit hook
- test

## Reference
- create-react-app
- vue-cli
