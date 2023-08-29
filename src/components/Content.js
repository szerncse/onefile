import React, { useState } from 'react'
import "./../App.css" 
// App.css는 자동링크가 안되서 직접 써야한다.

function Content(props) {
    console.log(props)

let [good, setGood] = useState(0)

function goodFun(){
        setGood(good+1)
}


let [title, setTitle] = useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"]);
let [desc, setDesc] = useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"]);

function Change(){
    let copy = [...title];
    let copy2 = [...title];
    copy[0] = "쌍둥이 아기판다77"
    copy2[2] = "판다는 곰이 맞음"
    setTitle(copy);
    setDesc(copy2)
}

let [Modalchk, setModalchk] = useState(false);

function Modal(){
// if(Modalchk === false){
//     setModalchk(true)
// }else{
//      setModalchk(false)
// }

// (Modalchk === false ? setModalchk(true) :setModalchk(false);)

setModalchk(!Modalchk)

}

  return (
    <>
    <div className='content-item' onClick={Modal}>
        <img src="https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/08/23/0823_whatsnew_bao.jpg" alt="테스트" />
            <h3 className='text-green-400'>{title[props.arrayNum]}</h3>
            <p>{desc[props.arrayNum]}</p>
            <p onClick={goodFun}>👍 {good}</p>
        <button onClick={Change}>수정</button>
    </div>
{
    (Modalchk === true && <div className='window'onClick={Modal}></div>)
}
</>
)}

export default Content