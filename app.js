// 유저객체
const users = [];

const arr = [];

const $map = document.getElementById('map');

for (let $td of [...$map.firstElementChild.firstElementChild.children]) {
    arr.push($td);
}

// console.log(arr);
// =====================================================================
const $hang2 = document.querySelector('.hang2');
// console.log($hang2);
const $hang22 = $hang2.lastElementChild;
arr.push($hang22)

// =====================================================================
const $hang3 = document.querySelector('.hang3');

const $hang32 = $hang3.lastElementChild;
arr.push($hang32)

// =====================================================================
const $hang4 = document.querySelector('.hang4');

const $hang42 = $hang4.lastElementChild;
arr.push($hang42)

// =====================================================================
const $hang5 = document.querySelector('.hang5');

const $hang52 = $hang5.lastElementChild;
arr.push($hang52)

// =====================================================================
const $hang6 = document.querySelector('.hang6');

const $hang62 = $hang6.lastElementChild;
arr.push($hang62)

// =====================================================================
const $hang7 = document.querySelector('.hang7');

const $hang72 = $hang7.lastElementChild;
arr.push($hang72)

// =====================================================================
const $hang8 = document.querySelector('.hang8');

const $hang82 = $hang8.lastElementChild;
arr.push($hang82)

// =====================================================================
const $hang9 = document.querySelector('.hang9');

const $hang92 = $hang9.lastElementChild;
arr.push($hang92)

// =====================================================================

const $hang10 = document.querySelector('.hang10');
const $hang10Arr = $hang10.children; // 유사배열
const $hang10ArrCopy = [...$hang10Arr]; // 유사배열을 정배열로 만들고
const $hang10Reverse = $hang10ArrCopy.reverse(); // 정배열을 역배열로 만들고 

for (let $td of $hang10Reverse) {
    arr.push($td);

}

// =====================================================================

const $hang91 = $hang9.firstElementChild;
arr.push($hang91);

const $hang81 = $hang8.firstElementChild;
arr.push($hang81);

const $hang71 = $hang7.firstElementChild;
arr.push($hang71);

const $hang61 = $hang6.firstElementChild;
arr.push($hang61);

const $hang51 = $hang5.firstElementChild;
arr.push($hang51);

const $hang41 = $hang4.firstElementChild;
arr.push($hang41);

const $hang31 = $hang3.firstElementChild;
arr.push($hang31);

const $hang21 = $hang2.firstElementChild;
arr.push($hang21);

console.log(arr);



// ======================= 변수 선언, 함수 정의부 =================== //

function whoDice(userIndex) {   // 순서 기입 함수
    const $whoDice = document.createElement('div');
    $whoDice.innerHTML = `<span>${users[userIndex].name}</span> 님<br>순서입니다.`;
    document.querySelector('aside').lastElementChild.remove();
    document.querySelector('aside').appendChild($whoDice);
    document.querySelector('aside').lastElementChild.setAttribute('id', 'whoDice');
    document.querySelector('aside').lastElementChild.firstElementChild.classList.add(`${users[userIndex].num}color`);
}


function movingUser(user, userIndex) {
    console.log(user);
    const userCount = user.count;
    if (userCount >= arr.length) {
        const $userSpan = document.createElement('span');
        $userSpan.classList.add('lnr', 'lnr-user', `${user.num}`, `${user.num}position`, `${user.num}color`);
        arr[0].appendChild($userSpan);
    }else if (userCount < arr.length) {
        const $userSpan = document.createElement('span');
        $userSpan.classList.add('lnr', 'lnr-user', `${user.num}`, `${user.num}position`, `${user.num}color`);
        arr[userCount].appendChild($userSpan);
    }

    // $userSpan.innerHTML =`<span class="lnr lnr-rocket"></span>`
}

// 이전에 있던 유저 이모티콘 없애는 함수 

function removeUser(user) {
    // console.log(user);
    // console.log(arr[user.count]);
    document.querySelector(`.${user.num}position`).remove();
    

    // for (let i of arr) {
    //     let $spans = [...i.children];// td안에 span 들을 배열로 만든게 $spans
    //     // console.log($spans);
    //     for (let t of $spans) {
    //         if (t.classList.contains('lnr') && t.classList.contains('lnr-user')) {
    //             t.classList.remove('lnr');
    //             t.classList.remove('lnr-user');
    //         }
    //     }
    // }
}


// 주사위 던지기를 누르면 #dice 박스에 클래스(.throw)를 부여할 함수 정의.
function throwDice() {
    const $dice = document.getElementById('dice');

    if ($dice.classList.contains('throw')) {
        $dice.classList.remove('throw');
    }
    setTimeout(() => {
        $dice.classList.add('throw');
    }, 100);
}

// 4인입력시 인풋감추기
function inputHide (){
    $userList = [...document.getElementById('user-list').children];
    // console.log($guide.length);
    if ($userList.length === 4) {
        document.getElementById('username').classList.add('hide');
    }
}

// 같은 이름 검증
function sameName(usernameText) {
    const userList = [...document.getElementById('user-list').children];
    console.log(userList);
    if(userList.length > 0){
        for(let i = 0; i < userList.length; i++){
            // console.log(guide[i].textContent);
            if(userList[i].textContent === " : " + usernameText.value){
               
                return true;
            }
        }
    }else {
        return false;
    }
    
}

// COM이름 못쓰게 걸러주는 함수
function sameComName(username){
    // console.log(username);
    if(username === 'COM1'){
        return true;
    }else if(username === 'COM2'){
        return true;
    }else if(username === 'COM3'){
        return true;
    }else if(username === 'COM4'){
        return true;
    }
    return false;
}

// 검증에 걸렸을때 효과 함수
function effect(ph) {
    $usernameText.setAttribute('placeholder', ph);
    $usernameText.value = '';
    $usernameText.classList.add('move');
    setTimeout(() => $usernameText.classList.remove('move'),1000);
}

// 이름 검증 함수.
function isInvalidate() {
     $usernameText = document.getElementById('username-text');
    
    if ($usernameText.value.trim() === '') {
        effect('이름없음?!');
        return false;
    } else if($usernameText.value.length > 6 ) {
        effect('길다. 6자로 줄여!');
        return false;
    } else if(sameName($usernameText)) {
        effect('이미 있음!');
        return false;    
    }else if(sameComName($usernameText.value)){
        effect(`${$usernameText.value}은 못씀!`);
        return false;    
    }else {
        $usernameText.setAttribute('placeholder', '');
        return true;
    }
    
 
}
// 이름입력함수
function insertName(target) {
    $userList = document.getElementById('user-list');
    $div = document.createElement('div');
    // $div.setAttribute('id', 'user');
    // $div.textContent = e.target.parentElement.previousElementSibling.value;
    const text = target;
    $div.innerHTML = `<span class="lnr lnr-user"><em> : ${text}</em></span>`;
    $userList.appendChild($div);
    
}


// users 객체에 데이터 추가
function usersDataAdd() {
    userText = document.getElementById('user-list').lastElementChild.textContent;
    // console.log(userText);
    users.push(
        {
            num: "player" + (users.length+1)
            ,name: userText.slice(3)
            ,count: 0
            ,islandUserCount: 0
        }
    )
}


// users 객체 인덱스용
let i = 0; 

// 인덱스 증가 함수
function increasIndex(){
    i++
    if(!users[i]){
        i = 0;
    }
    return i;
}

// 게임 스타트 -> 주사위굴리기로 변경
function changeBtn() {
    $changeBtn = document.getElementById('start-button');
 if(users.length === 0) {
     alert('최소 1인 이상의 플레이어가 필요합니다.');
     return;
 }else if (users.length === 1 && $changeBtn) {
     
     return  confirm('혼자서는 재미없어요! \n혼자서 게임을 시작하시겠습니까?');
     
 }else {
     return true;
 }
}

// 피니시 나타나는 함수
function finishShow(index){
    document.getElementById('finish').innerHTML = 
        `Winner is<br>
        <em>${users[index].name}</em><br>
        Congratulation!!!`;
        
    document.getElementById('finish').classList.add('show');
}


// 메인 실행 함수
function diceThrow(){
    // console.log(`끝?: ${isFinish}`);
    if (isFinish) { // 게임이 끝났으면
        if (confirm('게임이 종료되었습니다. 게임을 재시작하시겠습니까?\n페이지가 새로고침됩니다.')) {
        // 새로고침 시키기. // 바로 
        window.location.reload();
        }
        return; // 여기서 아래로 실행 중지
    }

    throwDice(); // 주사위 던지는 애니메이션 함수.

    // 주사위 값 랜덤 부여
    let $userCount = users[i].count;
    let $diceNum = Math.floor(Math.random() * 5) + 1;
    let printMessage = "";
    let goValue = 0;

    // 무인도에서 못나오게하고 횟수 카운트
    if ($userCount === 18 && users[i].islandUserCount < 2) {
        $h1.innerHTML = `${users[i].name} 님은 현재 무인도에 있습니다. <br>앞으로 ${2-users[i].islandUserCount}번 동안 주사위를 굴려도 움직일 수 없습니다.`;
        users[i].islandUserCount++;
        
        // 인덱스증가함수 실행 후 다음 유저가 COM인지 검사 후 맞으면  메인실행함수 실행 , 밑에 return이 있어서 자동으로 돌아갈려면 그전에 실행을 해줘야함.
        increasIndex();
        setTimeout( whoDice, 1000, i);
        if (sameComName(users[i].name)){
            
            setTimeout( diceThrow , 1000);
          
        }
        return; // 여기서 아래로는 실행 중지
    } else if ($userCount === 18 && users[i].islandUserCount === 2) {
        $h1.innerHTML = `${users[i].name} 님이 무인도를 탈출했습니다! <br> 다음 턴부터 정상적으로 게임이 진행됩니다.`;
        users[i].islandUserCount++;
        
        // 다음 순서가 COM인경우 자동으로 주사위를 굴리기위해 인크리즈인덱스로 다음 인덱스값을 가져오고,
        increasIndex();
        setTimeout( whoDice, 1000, i);
        if (sameComName(users[i].name)){   // 다음순서가 COM인지 검사, 트루면 주사위 던지기
            
            setTimeout( diceThrow , 1000);
            
        }
        return; // 여기서 아래로는 실행 중지
    }
    
    // 이전 위치 아이콘 지우는 함수
    setTimeout(removeUser, 1000, users[i]);
    
    // Go/Back 처리
    if ($userCount + $diceNum < arr.length) {
        if (arr[$userCount + $diceNum].classList.contains('go')) {
            goValue = parseInt(arr[$userCount + $diceNum].getAttribute('data-value'));
            $userCount += $diceNum + goValue;
            printMessage = `${users[i].name} 님의 주사위 결과 : ${$diceNum} <br>${users[i].name} 님이 ${$diceNum}만큼 앞으로 이동합니다. <br> 럭키포인트! 앞으로 ${goValue}칸 추가 이동합니다.`;
        } else if (arr[$userCount + $diceNum].classList.contains('back')) {
            goValue = parseInt(arr[$userCount + $diceNum].getAttribute('data-value'));
            $userCount += $diceNum + goValue * -1;
            printMessage = `${users[i].name} 님의 주사위 결과 : ${$diceNum} <br>${users[i].name} 님이 ${$diceNum}만큼 앞으로 이동합니다. <br> 함정포인트! ${$diceNum}칸 이동했지만, 뒤로 ${goValue}칸 만큼 되돌아 갑니다.`;
        }else {
            $userCount += $diceNum;
            printMessage = `${users[i].name} 님의 주사위 결과 : ${$diceNum} <br>${users[i].name} 님이 ${$diceNum}만큼 앞으로 이동합니다.`;
        }
    } else {
        $userCount += $diceNum;
        isFinish = true;
        printMessage = `${users[i].name} 님의 주사위 결과 : ${$diceNum} <br>${users[i].name} 님이 ${$diceNum}만큼 앞으로 이동합니다.`;
        printMessage = `${users[i].name} 님의 주사위 결과 : ${$diceNum} <br>${users[i].name} 님의 승리로 게임이 종료되었습니다! <br> 다시 하시려면 버튼을 클릭하세요.`;
        setTimeout(finishShow, 1500, i);
        
    }

    // 만약 유저가 도착한 지점이 무인도이면 무인도에 도착해버렸네 ㅠㅠ 알려주기.
    if ($userCount === 18) {
        printMessage += `<br> <br>앗! 무인도에 도착해버렸네요..<br>3회 움직임이 제한됩니다.`;
    }

    // 만약 유저가 도착한 지점이 '무인도 여행'칸이면 유를 무인도로 유배보내기
    if ($userCount === 34) { // arr[34]는 무인도 여행 벌칙이 걸린 td !!
        $userCount = 18; // arr[18]은 무인도 벌칙 td!!
        users[i].islandUserCount = 0;
        printMessage += `<br> <br>앗! 무인도로 강제 여행을 떠나게 됐습니다..<br>3회 움직임이 제한됩니다.`;
    }

    $h1.innerHTML = printMessage;
    // $h1.innerHTML = $h1.innerHTML.replace(/\n?/g, '<br/>');

    users[i].count = $userCount;    // 주사위눈금과 합쳐진 카운트를 객체에 넣어준다.
    
    setTimeout( movingUser, 1000, users[i], i); // 칸움직이기, 셋타임아웃은 주사위애니메이션 후 이동하도록 한것.
    
    if(users[i].count >= arr.length ) {   // 게임이 끝났으면 멈춰라!
        return;
    }

    increasIndex(); // 인덱스 증가

    setTimeout( whoDice, 1000, i);  // 다음 순서 알려주기, 셋타임은 역시 주사위 애니메이션 후 바뀌도록 한것.
    
    if (sameComName(users[i].name)){    // 다음순서(인덱스가 증가했으므로)가 COM이면 
           
        setTimeout(diceThrow , 1100);   // 다이스를 굴려라. 셋타임은 위에 칸이동, 순서알려주기 이후에 굴리도록 설정.
    }

}




// ========================= 실행부 =====================//


let $comCount = 0;
let $userCount = 0;
let isFinish = false; //게임종료 여부

const $h1 = document.querySelector('.main-title');

// 무인도에서 몇번 주사위를 굴렸는지 카운트할 변수.
let $islandUserCount = 0;
let $islandComCount = 0;

// 유저 추가 이벤트
$userBtn = document.getElementById('username-btn').onclick = e => {
    if (!e.target.matches('#username-btn span')) {
        return;
    }
    // console.log('클릭!');
    // console.log(e.target.parentElement.previousElementSibling.value);
    e.preventDefault();
    if(isInvalidate()) {    // 검증 통과시
        insertName(e.target.parentElement.previousElementSibling.value);    // 이름 넣기
        e.target.parentElement.previousElementSibling.value="";     // 인풋창 비우기
        inputHide();    // 
        usersDataAdd();
  
        if (users.length > 0){  // 객체가 없을때 오류가 안나도록 걸려주고, 객체 있으면 클래스 부여
            const index = users.length-1;
            const textc = users[index].num + "color";
            document.getElementById('user-list').lastElementChild.classList.add(textc); //class 를 부여
        }
        console.log(users);
    }
}

// com 추가 이벤트
let com = 1;
document.getElementById('comAdd-btn').onclick = e => { // 클릭 이벤트부여
    const comName = "COM" + com;    // 스트링과 인트의 + 는 스트링
    insertName(comName);
    inputHide();
    usersDataAdd();
    if (users.length > 0){ // 객체가 없을때 오류가 안나도록 걸려주고, 객체 있으면 클래스 부여
        const index = users.length-1;
        const textc = users[index].num + "color";
        document.getElementById('user-list').lastElementChild.classList.add(textc); //class 를 부여
    }
    com++;
}

// 게임스타트 리스너
listener = function() {
    
    if (changeBtn()) {
        
        document.querySelector('#start-button').classList.add('hide');
        document.getElementById('username').classList.add('hide');
        
        for(let i = 0; i < users.length; i++){
            const $userSpan = document.createElement('span');
            $userSpan.classList.add('lnr', 'lnr-user', `${users[i].num}`, `${users[i].num}position`, `${users[i].num}color`);
            arr[0].appendChild($userSpan);
        }

        whoDice(0); // 주사위 순서 보여주는 함수 호출
        
        // 첫번째 유저가 COM일 경우 자동 주사위가 되도록 sameComName함수를 이용해서 트루면 다이스함수를 실행한다.
        if (sameComName(users[0].name)){
            setTimeout(diceThrow , 800);
        }
    }
}

// 게임 스타트 클릭 이벤트
 
const $sbtn = document.getElementById('start-button');

$sbtn.addEventListener('click', listener);


// 주사위 굴리기 클릭이벤트

document.getElementById('dice-button').onclick = function() { diceThrow(); }