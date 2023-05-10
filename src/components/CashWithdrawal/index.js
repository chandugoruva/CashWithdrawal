import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onClickChange = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    return (
      <div className="bg-color">
        <div className="sub-div">
          <div className="for-flex1">
            <p className="r-paragraph">S</p>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="for-flex2">
            <p className="paragraph1">Your Balance</p>
            <div>
              <p className="paragraph2">{count}</p>
              <p className="paragraph1">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="paragraph1">CHOOSE SUM (IN RUPEES)</p>
          <ul className="for-ul">
            {denominationsList.map(each => (
              <DenominationItem
                each={each}
                key={each.id}
                onClickChange={this.onClickChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
