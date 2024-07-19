import Week from './Week'
import Scheduler from './Scheduler'

export default function Main () {
  return (
    <div className='d-flex p-4'>
      <div className='mod m-auto'>
        <Week />
        <div className='line' />
        <Scheduler />
      </div>
    </div>
  )
}
