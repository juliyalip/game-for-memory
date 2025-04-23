import Timer from "../Timer/Timer"
import Attempt from "../Attemp/Attempt"
import style from './statSection.module.scss'

const StatSection =()=>{
    return( <div className={style.stats}>
        <div>Current point:</div>
       <Timer />
       <Attempt  />
      </div>

    )
}

export default StatSection