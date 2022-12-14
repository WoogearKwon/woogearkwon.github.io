---
title: 개발자의 코드 유지보수
date: "2020-11-05 22:03:26 +0900"
---

대부분의 경우 개발자들은 유지보수하는 것을 즐기지 않는다. 특히 남이 작성한 코드를 유지보수하는 일이 더욱 그렇다. 대신 새로운 코드를 작성하는 것을 더욱 선호한다. 나도 마찬가지다. 그러나 개발자가 된 이상 코드 유지보수 작업은 피할 수 없는 일이다. 
그리고 나는 사실, 개발자라면 그 일을 잘해야 한다고 생각한다.


대부분의 경우 개발자들은 유지보수하는 것을 즐기지 않는다. 특히 남이 작성한 코드를 유지보수하는 일이 더욱 그렇다.  대신 새로운 코드를 작성하는 것을 더욱 선호한다. 나도 마찬가지다. 그러나 개발자가 된 이상 코드 유지보수 작업은 피할 수 없는 일이다. 그리고 나는 사실, 개발자라면 그 일을 잘해야 한다고 생각한다.

만약 다른 사람이 작성한 코드가 논리적이고 간결하며 우수하다면, 그리고 애매한 부분에는 주석으로 친절한 설명까지 남겨놓았다면 그런 코드를 읽는 일은 즐겁다. 그리고 배울 것이 많다. 그런 경우는 운이 좋은 것이다. 해당 코드를 작성한 사람이 이미 퇴사를 해서 없더라도 그 코드를 통해 배울 수 있는 점이 많을 것이다.

그러나 반대의 경우라면 이야기가 다르다. 이해가지 않는 코드들이 많고 중복도 여러군데 존재하고 주석도 전혀 없는 코드라면 한숨부터 나온다. 더군다나 구조가 복잡하다면 정말 당황스럽다. 분석하는데 오랜 시간이 걸린다. 그러나 어쩌겠는가. 그게 내 일이라면 해야한다. 현실을 받아들이고 코드를 살피면서 리팩토링을 해야한다. 어쩌면 현실과 타협하고 오로지 동작하는 코드만을 목표로 그 코드를 더욱 엉망으로 만들 수도 있다. 하지만 그런 자세로는 프로가 될 수 없다.

채드 파울러의 <프로그래머 열정을 말하다>에 "유지보수를 즐겨라"라는 챕터가 있는데, 읽으면서 그 내용을 마음에 새겼다. 몇 가지를 인용한다.

> "유지보수가 자유와 창조를 위한 환경이 될 수 있다. 버그가 나타나 애플리케이션 하부 시스템을 다시 설계해야 한다면 어떻게 될까? ... 자신의 리팩터링 능력을 시험해 볼 기회다."

> "소프트웨어를 지속적으로 동작하게 하고 사용자 요구에 시기적절한 방법으로 응답하는 한 유지보수 작업은 자유롭게 창조할 수 있는 장이다. 자신이 프로젝트 리더, 아키텍트, 설계자, 코더, 테스터다. 창의력을 원하는 만큼 마음껏 발휘할 수 있을 뿐 아니라 시스템의 성공 또는 실패를 측정하는 것도 자신에게 달려 있다."

> "오늘날 많은 프로젝트 팀의 계약 환경과 달리 유지보수 일의 숨겨진 장점은 유지보수를 하는 프로그래머는 고객과 직접 대화할 기회가 꽤 있다는 것이다."

> "회사에서 특정 업무가 어떻게 처리되는지 완전히 이해하는 사람은 유지보수 프로그래머뿐인 경우를 많이 봐 왔다. 유지보수 프로그래머만이 신뢰할 수 있게 인코드된 비즈니스 규칙을 직접 다룬다."

이 책의 필자 채드 파울러는 유지보수하는 일에 이와 같은 장점들이 있다고 한다.

신규 프로젝트 개발과 유지보수 개발에는 확실히 차이가 있다. 신규 개발중에는 보통 문제를 해결해야하는 경우보다는 기획한 기능들이 의도대로 구현되고 동작하는지가 중요하다. 그러나 유지보수 기간에 나타나는 요구사항은 추가도 있겠지만 기능 개선 혹은 오류 수정이 많다. 여기서 차이가 있다.

한 번은 이런 경우가 있었다. 유지보수를 하면서 기능을 테스트하는 중에 간헐적으로 에러가 발생하는 부분을 발견했다. 이걸 수정해서 에러가 해결된 걸 확인하고 PM 담당자분에게 설명을 드렸더니 이전에 개발했던 분이 해결이 어렵다고 했던 문제였다면서 고마워했다. 유지보수를 하면서 이런 문제를 많이 만났다. 유지보수하는 일은 비교적 지루하며 신나는 일도 아니지만 의외로 함께 일하는 동료들에게 신뢰를 얻고 서비스가 운영되는 과정과 상황을 간접적으로 경험할 수 있는 기회가 많이 있다.

유지보수하는 과정에서 엉망인 코드를 만난다면 괴로운 일이다. 하지만 그 코드를 간결하고 읽기 쉽게 바꾸는 일은 마치 청소를 하는 것과 같은 기분이 드는 작업이다. 청소가 뭐 좋냐고 할 수 있겠지만, 청소는 나와 남을 기분좋게 한다. 그리고 문제를 해결하는 과정은 언제나 즐겁다. 그래서 나는 유지보수하는 일을 좋아하고 즐거워하기로 마음 먹었다. 그리고 유지보수를 하면서 더욱 남이 읽기 쉽게 작성하고 싶게 되었다. 