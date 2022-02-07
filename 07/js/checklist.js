    var itemList = [];

    var addBtn = document.querySelector("#add"); //#add 인 요소를 가져와 addBtn으로 저장
    addBtn.addEventListener("click",addList); //addBtn 클릭시 addList 함수 실행

    function addList(){
        var item = document.querySelector("#item").value; // 텍스트 필드 내용을 가져옴
        if(item !=null){
            itemList.push(item); // itemList 배열끝에 item 변수값 추가
            document.querySelector("#item").value=""; // id="item" 인 요소 값을 지움
            document.querySelector("#item").focus();  // 텍스트 필드에 focus(); 함수 적용

        }
        showList();   // 목록을 표시하는 showList() 함수 실행

    }
    function showList(){
        var list = "<ul>";   // 목록을 시작하는 <ul> 태그 저장
        for(var i=0; i<itemList.length; i++){  //배열 요소마다 반복
            list +="<li>" + itemList[i] + "</li>"; // 각 요소를 <li>~</li> 로 묶음
        }
        list += "</ul>";  //목록을 끝내는 </ul> 태그 저장 ..

        document.querySelector("#itemList").innerHTML = list;
    }


