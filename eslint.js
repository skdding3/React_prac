
// ESLint는 JavaScript, JSX의 정적 분석 도구로 오픈 소스 프로젝트입니다. 
// 코드를 분석해 문법적인 오류나 안티 패턴을 찾아주고 일관된 코드 스타일로 작성하도록 도와줍니다. 
// JSLint, JSHint와 같이 다른 JavaScript 정적 분석 도구들도 있지만, 
// ESLint가 커스터마이징이 쉽고 확장성이 뛰어나 많이 쓰이고 있는 추세입니다.


module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": "latest"
  },
  "rules": {
      "semi": ["error", "always"] // 세미콜론이 붙지않으면 에러가 나오게 한다.
  }
}
