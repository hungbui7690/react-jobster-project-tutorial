import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

function Error() {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>text</h3>
        <p>text</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
