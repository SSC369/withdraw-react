import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawCash = event => {
    this.setState(prevState => ({
      balance: prevState.balance - event.target.value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="wallet">
          <div className="name-logo">
            <div className="logo">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>

          <div className="align-rupee">
            <p className="balance-heading">Your Balance</p>
            <div className="balance-container">
              <p className="balance">{balance}</p>
              <p className="rupee-in">In Rupees</p>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="context">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <li key={eachItem.id}>
                <button
                  className="custom-button"
                  type="button"
                  onClick={this.withdrawCash}
                  value={eachItem.value}
                >
                  {eachItem.value}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
