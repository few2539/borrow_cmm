import Router from 'next/router'
import Header from '../components/header'

const ClicktoIndex = () => Router.push({
  pathname: '/'
})

const style = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '10px 10px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
}

const Reserve = () => (
  <div>
    <Header />
    <a onClick={() => ClicktoIndex()} style={style}>กลับหน้าหลัก</a>
    <h1>นี้หน้าจองนะ</h1>
  </div>
)

export default Reserve