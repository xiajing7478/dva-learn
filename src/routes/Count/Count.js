import React from 'react'
import { connect } from 'dva'
const Count = ({count, dispatch}) => {
  function handelMinus(){
    dispatch({
      type: 'count/minus'
    })
  }
  return (
    <div>
      <div>Highest Record: {count.record}</div>
      <div>{count.current}</div>
      <div>
        <button onClick={()=>{dispatch({type:'count/add'})}}>+</button>
        <button onClick={handelMinus}>-</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return { count: state.count}
}

export default connect(mapStateToProps)(Count);
// export default connect(({count})=>({count}))(Count)
