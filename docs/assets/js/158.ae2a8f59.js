(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{164:function(a,t,e){"use strict";e.r(t);var s=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"django-migration-conflict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django-migration-conflict","aria-hidden":"true"}},[a._v("#")]),a._v(" Django Migration Conflict")]),s("h2",{attrs:{id:"상황"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#상황","aria-hidden":"true"}},[a._v("#")]),a._v(" 상황")]),s("p",[a._v("근 한 달 이상 "),s("code",[a._v("Review")]),a._v("브랜치에서 리뷰 개발을 하고 있다.\n너무 옛날 코드라 "),s("code",[a._v("Master")]),a._v("의 최신 코드와 Rebase했다.\n바뀐 쿼리들을 적용하려고 "),s("code",[a._v("./manage.py migrate")]),a._v("를 치니")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("▶ ./manage.py migrate\nCommandError: Conflicting migrations detected "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("0035_merge, 0033_add-ondemand "),s("span",{attrs:{class:"token keyword"}},[a._v("in")]),a._v(" product"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(".\nTo fix them run "),s("span",{attrs:{class:"token string"}},[a._v("'python manage.py makemigrations --merge'")]),a._v("\n")])])]),s("p",[a._v("migrations가 충돌났다는 에러가 떴다.")]),s("p",[a._v("여기서 "),s("code",[a._v("python manage.py makemigrations --merge")]),a._v("를 하면 해결 될테지만, 그러면 또 "),s("code",[a._v("Master")]),a._v("브랜치에서 다시 작업할 때 끊임없이 충돌이 날 수도 있다.")]),s("p",[s("code",[a._v("Master")]),a._v("브랜치의 "),s("code",[a._v("migrations")]),a._v("들은 깨끗이 두고 해결하는 방법을 찾아보자.")]),s("h2",{attrs:{id:"에러1-conflicting-migrations-detected"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#에러1-conflicting-migrations-detected","aria-hidden":"true"}},[a._v("#")]),a._v(" 에러1 - Conflicting migrations detected!")]),s("p",[s("img",{attrs:{src:e(397),alt:"branch image",title:"branch image"}}),s("code",[a._v("Master")]),a._v(", "),s("code",[a._v("Review")]),a._v(" 브랜치 두 군데에서 Point모델의 수정이 일어나, 같은 넘버로 다른 수정이 일어나 넘버링이 겹치는 문제가 생겼다.")]),s("ol",[s("li",[s("code",[a._v("Review")]),a._v("브랜치에서 "),s("code",[a._v("0030_review.py")]),a._v("부터 마지막까지 migrations 파일들을 삭제")]),s("li",[a._v("review앱의 migrations폴더에 있는 파일들도 모두 삭제")]),s("li",[s("code",[a._v("Master")]),a._v("브랜치에서 최신 상태를 Pull 땡겨온다")]),s("li",[a._v("최신 코드로 "),s("code",[a._v("./manage.py makemigrations")]),a._v("를 다시 돌려준다.")])]),s("p",[a._v("그러면 Master의 migrations 파일들 밑에 내가 새로 짠 디비 파일이 깔끔하게 붙게 된다.")]),s("h2",{attrs:{id:"에러2-table-already-exists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#에러2-table-already-exists","aria-hidden":"true"}},[a._v("#")]),a._v(" 에러2 - Table already exists!")]),s("p",[a._v("그런데 만든 ORM을 디비에 migration하려고, "),s("code",[a._v("./manage.py migrate")]),a._v("을 돌리니")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("django.db.utils.OperationalError: table "),s("span",{attrs:{class:"token string"}},[a._v('"point_point"')]),a._v(" already exists   \n")])])]),s("p",[a._v("에러가 뜨는거였다.")]),s("p",[a._v("장고 database에서 "),s("code",[a._v("django_migrations")]),a._v("테이블을 까보니, "),s("code",[a._v("point")]),a._v("앱에서 이미 "),s("code",[a._v("0002_auto_어쩌구저쩌구")]),a._v("로 이미 migration을 진행했던 것이다.")]),s("p",[a._v("현재 point는 migrations파일을 다 지우고 0001_initial.py로 통합시켜놔서, 장고가 이미 0002까지 migrate를 진행한 것으로 판단해 테이블을 만들지 않은 것이다!\n(영원히 고통받는다)")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./manage.py dbshell "),s("span",{attrs:{class:"token comment"}},[a._v("#디비 쉘에 접속한다")]),a._v("\n"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" .tables"),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("# 테이블을 본다 -> point테이블이 있다!")]),a._v("\n"),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" drop table point_point "),s("span",{attrs:{class:"token comment"}},[a._v("# 괴롭히던 테이블을 지운다")]),a._v("\n")])])]),s("p",[a._v("마지막으로 migrate을 한다.")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./manage.py migrate\n")])])]),s("p",[a._v("성공! 기쁘다.")])])}],n=e(0),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);t.default=i.exports},397:function(a,t,e){a.exports=e.p+"assets/img/1.25596df3.png"}}]);