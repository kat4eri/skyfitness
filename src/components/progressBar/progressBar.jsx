import * as S from './styles.js'

export default function ProgressBar({ percentage, color }) {
  return (
    <div>
    <S.Counter><div style={{height:"20px", width: `${percentage > 20 ? percentage*2.7-55 : 10}px`}}></div>{Math.floor(percentage)}%</S.Counter>
    <S.ProgressBarInput
      type="range"
      min={0}
      max={100}
      step={1}
      value={percentage}
      color={color}
    >
    </S.ProgressBarInput>
    </div>
  )
}
