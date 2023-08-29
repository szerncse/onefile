import React from 'react'
import { NavLink } from 'react-router-dom'

function Notfage() {
  return (
    <div>
        <p className='text-sky-700 text-center'></p>
        <p>404 Not Found</p>
        <p className='text-5xl'>페이지를 찾을 수 없습니다.</p>
        <NavLink to="/">메인으로 바로가기</NavLink>
    </div>
  )
}

export default Notfage