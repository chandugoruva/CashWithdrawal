import './index.css'

const DenominationItem = props => {
  const {each, onClickChange} = props
  const {value} = each
  const changedValue = () => {
    onClickChange(value)
  }
  return (
    <li className="for-li">
      <button type="button" className="button" onClick={changedValue}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
