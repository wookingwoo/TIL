(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"django-서버사이드-이미지-크롭-리사이징-하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-서버사이드-이미지-크롭-리사이징-하기","aria-hidden":"true"}},[t._v("#")]),t._v(" [Django] 서버사이드 이미지 크롭/리사이징 하기")]),a("blockquote",[a("p",[t._v("프론트엔드에서 Javascript로 온갖 삽질을 하다가, 그냥 서버사이드에서 처리하기로 했다.\n훨씬 깔끔하게 끝났다(물론 이것도 삽질했지만 ^^).\nHTML Canvas로 한 프론트 리사이징은 이미지 퀄리티도 안좋게 떨어진다. 웬만하면 파일 처리는 서버사이드에서 하는 것을 추천한다.")])]),a("h2",{attrs:{id:"상황"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#상황","aria-hidden":"true"}},[t._v("#")]),t._v(" 상황")]),a("p",[t._v("내 모임 정보를 업로드 할 때, 썸네일을 올리면 자동으로 정사각형으로 크롭, 리사이징 시켜서 서버에 업로드 하고싶다.\nDjango Form에서 "),a("code",[t._v("save()")]),t._v("함수를 오버라이드 해서 전처리하는 방식으로 해결하자.")]),a("h2",{attrs:{id:"forms-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forms-py","aria-hidden":"true"}},[t._v("#")]),t._v(" Forms.py")]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MeetupEditForm")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("forms"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelForm"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    desc "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" forms"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("widget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("SummernoteWidget"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Meta")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        model "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Meetup\n        exclude "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'created_date'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'modified_date'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        fields "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'desc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'image_file'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'location'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'meetup_date'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'lat'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'lon'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'tags'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("# (선택) 아래의 save함수에서 self.request.user를 쓰기 위해 views.py에서 전달해주었다.")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("__init__")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" kwargs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'request'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token builtin"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MeetupEditForm"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("# form이 save될때 불리는 함수. 오버라이드해서 원하는 기능을 넣는다.")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("save")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" commit"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("True")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        instance "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MeetupEditForm"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("commit"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("False")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user\n        instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("published_date "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" timezone"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("# 이미지파일이 있으면, 리사이즈/크롭 한다.")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image_file"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image_file "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rescale"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cleaned_data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'image_file'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("600")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("600")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" force"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("True")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" commit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance\n")])])]),a("p",[t._v("form save를 할 때, "),a("code",[t._v("commit=False")]),t._v("로 디비에 쓰는걸 잠시 막아두고, 전처리를 한다.\nform에서 받은 이미지 파일과 원하는 width, height를 넘기면 리사이즈된 이미지파일이 넘어오는 함수를 짠다.")]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rescale")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" force"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("True")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" io "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BytesIO\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PIL "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Image "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pil\n        "),a("span",{attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n        Rescale the given image, optionally cropping it to make sure the result image has the specified width and height.\n        https://djangosnippets.org/snippets/224/\n        """')]),t._v("\n        max_width "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" width\n        max_height "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" height\n\n        input_file "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" BytesIO"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        img "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" pil"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("open")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input_file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("not")]),t._v(" force"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            img"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thumbnail"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_width"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max_height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pil"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ANTIALIAS"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            src_width"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" src_height "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size\n            src_ratio "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src_width"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src_height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            dst_width"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dst_height "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" max_width"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max_height\n            dst_ratio "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst_width"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst_height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" dst_ratio "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" src_ratio"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                crop_height "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" src_height\n                crop_width "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" crop_height "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" dst_ratio\n                x_offset "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src_width "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" crop_width"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n                y_offset "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                crop_width "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" src_width\n                crop_height "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" crop_width "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" dst_ratio\n                x_offset "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n                y_offset "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src_height "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" crop_height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("//")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("\n            img "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crop"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_offset"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_offset"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x_offset"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("crop_width"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_offset"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("crop_height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            img "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resize"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst_width"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dst_height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pil"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ANTIALIAS"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        image_file "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" BytesIO"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        img"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_file"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'JPEG'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token builtin"}},[t._v("file")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" image_file\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data\n")])])]),a("p",[t._v("MeetupEditForm클래스에 넣어준다.")]),a("p",[t._v("https://djangosnippets.org/snippets/224/ 를 python3버전으로 바꿨다.")]),a("ul",[a("li",[a("code",[t._v("StringIO")]),t._v("를 "),a("code",[t._v("BytesIO")]),t._v("로 변경")]),a("li",[t._v("offset계산시 나눌 때 "),a("code",[t._v("/")]),t._v("말고 "),a("code",[t._v("//")]),t._v("로 변경")]),a("li",[t._v("return하는 데이터 변경")])]),a("p",[a("code",[t._v("force")]),t._v("옵션을 켜면 지정한 width, height비율로 크롭되고, 끄면 max width, max height로만 적용된다.")]),a("h2",{attrs:{id:"views-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#views-py","aria-hidden":"true"}},[t._v("#")]),t._v(" views.py")]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MeetupFormView")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FormView"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    template_name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"meetup_edit.html"')]),t._v("\n    form_class "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MeetupEditForm\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("get_success_url")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" reverse"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'meetup_list'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("# form.py에 kwargs 넘기기 위함")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("get_form_kwargs")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        kw "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MeetupFormView"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_form_kwargs"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        kw"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'request'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" kw\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("form_valid")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" form"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        form"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MeetupFormView"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("form_valid"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("form"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("view에서 save가 호출되면, form에서 우리가 지정한 함수들이 실행된다.")]),a("h2",{attrs:{id:"refer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[t._v("#")]),t._v(" Refer")]),a("p",[t._v("https://djangosnippets.org/snippets/224/")])])}],!1,null,null,null);s.default=o.exports}}]);