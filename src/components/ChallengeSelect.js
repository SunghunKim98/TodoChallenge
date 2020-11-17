import React from "react";
import "./ChallengeSelect.css";
import {Row, Col, Container} from 'reactstrap'

const ChallengeSelect = ({
    onSelectChallenge,
    onProgress,
    onCreateChallengeToggle
}) => {
   
    const song = [
        "제목에 색깔이 들어가는 노래","제목에 숫자가 들어가는 노래","여름이 생각나는 노래","잊고 싶은 누군가를 떠올리게 하는 노래","크게 틀어놓고 들어야하는 노래",
        "춤추고 싶어지는 노래","드라이브할 때 듣기 좋은 노래","담배나 술에 관한 노래","나를 행복하게 만드는 노래","나를 슬프게 만드는 노래","절대 질리지 않는 노래",
        "초등학생 때 많이 듣던 노래","좋아하는 7080노래","내 결혼식 축가로 듣고 싶은 노래","내가 좋아하는 커버곡","클래식 중 가장 좋아하는 노래","노래방에서 듀엣하고 싶은 노래",
        "내가 태어난 해에 나온 노래","인생에 대해 생각하게 하는 노래","나에게 많은 의미가 있는 노래","제목에 사람 이름이 들어가는 노래","앞으로 나아갈 수 있게 해주는 노래",
        "다른 사람들도 꼭 들었으면 하는 노래","지금은 해체한 그룹 노래","우리 곁을 떠난 아티스트 노래","사랑에 빠지고 싶게 하는 노래","마음 아픈 노래", "내 취향저격 음색의 노래", 
        "어린시절 추억의 노래", "내 자신에 대해 생각하게 하는 노래" 
    ]
    
    const book = [
      "500페이지 이상의 책", "좋아하는 작가 책 중에 안 읽은 책", "작년 베스트셀러", "하루종일 책 읽기", "심오한 주제의 책", "친구에게 추천받은 책",
      "감동적인 책", "10년전에 발간된 책", "작년에 영화화된 책", "평소에 읽지않는 장르의 책", "동화책", "책 표지가 좋아하는 색인 책", 
      "중고책 사서 읽기", "청소년 권장 소설 읽기", "시리즈물 3권 읽기", "디스토피아 책", "수상 받은 적 있는 책", "티비에 소개된 적 있는 책", 
      "태어나기 10년 전 책", "좋아하는 시기의 역사 책", "독후감 쓰기", "한국이 배경인 책", "읽으려 했지만 실패한 책", "제목이 한 단어인 책",
      "고등학교 때 읽었던 책", "다른나라 배경의 책", "제일 좋아하는 책 다시 읽기", "실화가 배경인 책", "신간도서", "표지가 예쁜 책"  
    ]
    
    const selfcare = [
        "산책 혹은 등산하기", "아침에 명상하기", "자기전에 플러그 뽑기", "아침에 춤 추기", "영양가 있는 아침식사", "반신욕 하기",
        "새로운 운동에 도전하기", "점심 먹고 산책 하기", "내 몸에서 맘에 드는 부분 3가지 찾기", "저녁에 새로운 요리 만들기", "간단한 운동 하기", "하루 동안 먹을 때 아무것도 보지 않기", 
        "안쓰는 물건 정리하기", "책 읽기", "집에 꽃 사서 배치하기", "요가하기", "사랑하는 누군가에게 전화하기", "취침시간 정해서 지키기", 
        "아침에 차 마시기", "친구와 놀 약속 잡기", "한 주 동안 먹을 반찬 만들기", "목표 정해서 적어두기", "사랑하는 누군가에게 편지쓰기", "때 밀기 혹은 긴 목욕", 
        "강도 높은 운동하기", "대청소하기", "작은 일이라도 봉사하기", "하루동안 몸에 안 좋은 음식 먹지 않기", "일기쓰기", "티비 맘껏 보기" 
    ]
    
    const cleaning = [
    "침대 정리하기", "옷장 정리하기", "안 쓰는 물건 기부하기", "유통기한 지난 음식 버리기", "식기구 정리하기", "수납함 구매하기", 
    "안 쓰는 오래된 앱 삭제하기", "나에게 도움되는 어플 설치하기", "자동차 청소하기", "메일함 정리하기", "거실 정리하기", "악세사리 화장품 정리하기", 
    "일정 달력에 정리하기", "명상으로 마음 정리하기", "컴퓨터 저장공간 정리하기", "쓰레기 버리기", "오래된 신발 버리기", "냉장고 정리하기", 
    "여기까지 온 걸 축하하기", "화장실 정리하기", "지갑 정리하기", "서랍 정리하기", "대청소하기", "부엌 청소하기",
    "오래된 가구 버리기", "오래된 책 정리하기", "현관 청소하기", "컴퓨터 폴더 정리하기", "신발 빨래하기" ,"정리한 것 유지하기"
    
    ]
     
    const study = [
      "단어장 구매하기", "sns 계정 만들기", "좋아하는 외국 연예인 계정 팔로우", "자신에 대한 3문장 쓰기", "노래 듣기", "3명의 유튜브 보기",
      "무언가를 읽기", "누군가에게 편지쓰기", "핸드폰 컴퓨터 언어 바꾸기", "집에있는 물건에 라벨 붙이기", "긍정적인 문장 5개 쓰기", "부정적인 문장 5개 쓰기",
      "영화 보기", "기초 다지기", "간단한 문법 배우기", "하루에 대해 쓰기", "신문기사 3개 읽기", "펜팔하기", 
      "시리즈물 보기", "어려운 단어 적어놓기", "라디오 듣기", "하루종일 배우는 언어 사용해 보기", "인터넷강의 듣기", "언어 스터디모임 가입하기",
      "발음 연습하기", "짧은 이야기 만들어보기", "50가지 단어 쓰기", "스스로 말하고 녹음하기", "영화 원어로 보기", "30일 챌린지 후기쓰기"
    ]
    
    const photo = [
      "셀카찍기", "오늘 입은 옷 찍기", "구름사진", "초록색의 무언가 찍기", "높은 곳에서 내려 찍기", "낮은 곳에서 올려 찍기",
      "과일사진", "나쁜 습관 찍기", "너가 좋아하는 것 찍기", "어린시절 추억 찍기", "파란색의 무언가 찍기", "일몰사진",
      "13가지 물건과 함께 사진찍기", "눈(eyes) 찍기", "실루엣 사진", "장노출 사진", "전자기기 사진", "당신의 신발 사진",
      "주황색의 무언가 찍기", "초점 흐린 사진 찍기", "얼굴 없는 셀카 찍기", "손 사진", "돌이나 바위사진", "동물사진",
      "핑크/보라색의 무언가 찍기", "확대 사진 찍기", "멀리서 찍기", "꽃 사진", "검정/흰색의 무언가 찍기", "셀카 찍기"
    ]
    
    const happy = [
      "외출하기", "일찍자기", "무언가에 몰두해보기", "공연 보기", "그림 그리기", "꽃이나 식물 배치하기",
      "친구와 이야기하기", "뭔가 만들기", "퍼즐 완성하기", "요리하기", "명상하기", "요가하기",
      "음악듣기", "동물 만나기", "책 1권 읽기", "라디오 듣기", "옷장 정리하기", "누군가와 포옹하기",
      "반신욕이나 긴 샤워하기", "오늘 할 일 적고 실천하기", "일기쓰기", "몸 치장하기", "감사한 일 써보기", "스스로의 장점 쓰기",
      "누군가와 진지한 이야기하기", "도움을 원하는 사람 도와주기", "맛있는 거 먹기", "새로운 장소가기", "옷 사기", "새로운 무언가를 배우기"
    ]
  

    const onClickHandler = e => {
        
    if(e.target.value === "create") {
        onCreateChallengeToggle();
    }
    else {
    let menuList = song.map((menu) => {
    });  //일단 디폴트로 
    
    if(e.target.value === "song"){
        let i=1;
        menuList = song.map((menu) => {
            console.log(menu);
            onSelectChallenge(i++, menu);
        });
    }
    else if(e.target.value === "book"){
        let i=1;
        menuList = book.map((menu) => {
            console.log(menu);
            onSelectChallenge(i++, menu);
        });
    }
    else if(e.target.value === "selfcare"){
        let i=1;
        menuList = selfcare.map((menu) => {
            console.log(menu);
            onSelectChallenge(i++, menu);
        });
    }
    else if(e.target.value === "cleaning"){
        let i=1;
        menuList = cleaning.map((menu) => {
            console.log(menu);
            onSelectChallenge(i++, menu);
        });
    }
    else if(e.target.value === "study"){
        let i=1;
        menuList = study.map((menu) => {
            console.log(menu);
            onSelectChallenge(i++, menu);
        });
    }
    else if(e.target.value === "photo"){
        let i=1;
        menuList = photo.map((menu) => {
            console.log(menu);
            onSelectChallenge(i++, menu);
        });
    }
    else if(e.target.value === "happy"){
        let i=1;
        menuList = happy.map((menu) => {
            console.log(menu);
            onSelectChallenge(i++, menu);
        });
    }
    else if(e.target.value === "create") {
      onCreateChallengeToggle();
    }
    onProgress();  //이걸 해줘야 카테고리 화면이 나올 수 있음
  }
  }
  return (
    <div className="challenge-select">
      <div className="text">
        챌린지를 선택하세요
      </div>
      
    <div onClick={(e) => onClickHandler(e)}>
    <button value="song"  >
      노래 챌린지</button>
    <button value="book">
      독서 챌린지</button>
    <button value="selfcare">
      셀프케어 챌린지</button>
    <button value="cleaning">
      정리 챌린지</button>
    <button value="study">
      언어공부 챌린지</button>
    <button value="photo">
      사진찍기 챌린지</button>
    <button value="happy">
      행복 챌린지</button>
      <button value="create">
        나만의 챌린지 만들기
      </button>
    </div>
  </div>
  );
};

export default ChallengeSelect;