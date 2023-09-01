

import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Content from "./components/Content";
import Nav from "./components/Nav";
import Main from "./Fages/Main";
import About from "./Fages/About";
import Portfolio from "./Fages/Portfolio";
import Notfage from "./Fages/Notfage";
// import Styled from "./components/Styled";





// 웹으로 뺴거나 이쪽에 적거나



function App() {

  // let Name = "홍길동";


  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/*" element={<Notfage/>}/>
    </Routes>
  </>


    
  //   <div className="App">
    

  //    {/* <h3 className={Name} style={{color: "green",backgroundColor: "blue"}}>Hello React {Name}</h3> */}
  //   <div className='content'>
  //     <Content arrayNum = "0" />
  //     <Content arrayNum = "1" />
  //     <Content arrayNum = "2" />
  //     <Content arrayNum = "3" />
  //   </div>

  // <div className='content'>
  //   <Content title="내 제휴" desc= "할인카드 조회 서비스" />
  //   <Content title="편하고 여유있게" desc= "모바일오더" />
  //   <Content title="간편하고 편리하게" desc= "모바일 기프트카드" />
  //   <Content title="스마트 줄서기" desc= "이용가이드" />
  // </div>
  
  // <Styled/>
  //   </div>
  );
}


export default App;
