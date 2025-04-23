import { Option } from '../../data/data'


import style from './gameItem.module.scss'

interface GameItemProps {
    item: Option,
    onChange: (id: string) => void,
}

const GameItem = ({ item, onChange, }: GameItemProps) => {
    const { id, label, checked, option, removed } = item
  
    return (
        <li className={style.card}>
            {!removed && <label className={style.label}>
                <input type="checkbox" name={label} onChange={() => { onChange(id) }} checked={checked} />
                <span className={style.labelOption}>  {checked && option}</span>
            </label>}       </li>
    )
}

export default GameItem