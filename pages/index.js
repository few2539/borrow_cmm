import Router from 'next/router'
import Header from '../components/header'

const ClickToReserve = () => Router.push({
  pathname: '/reserve'
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

const Index = () => (
  <div>
   <Header />

    <a onClick={() => ClickToReserve()} style={style}>กดจอง</a>
    <h1>ยินดีต้อนรับ</h1>
    
  </div>
)

export default Index