import { useState } from 'react'

import Button from '../Button'
import Card from '../Card'

import { Row, InputGroup, TabButton } from './styles'

import boletoIcon from '../../assets/images/boleto.png'
import cartaoIcon from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Billing details">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="eMail">E-mail</label>
              <input id="eMail" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>

          <h3 className="mtop24">Delivery details - Digital Content</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryMail">E-mail</label>
              <input id="deliveryMail" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryMail">Confirm the e-mail</label>
              <input id="confirmDeliveryMail" type="email" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Payment">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boletoIcon} alt="Payment with Bowletoh" />
            Bank Boleto
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartaoIcon} alt="Payment with Cartown" />
            Credit Card
          </TabButton>
          <div className="mtop24">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Card owner&apos;s name</label>
                    <input id="cardOwner" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">Card owner&apos;s cpf</label>
                    <input id="cpfCardOwner" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Card display name</label>
                    <input id="cardDisplayName" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Card number</label>
                    <input id="cardNumber" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="cardExpireMonth">Card expire month</label>
                    <input id="cardExpireMonth" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="cardExpireYear">Card expire year</label>
                    <input id="cardExpireYear" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <input id="cardCode" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Installments</label>
                    <select name="" id="">
                      <option value="">1x de R$ 200,00</option>
                      <option value="">2x de R$ 100,00</option>
                      <option value="">4x de R$ 50,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                explicabo dicta corrupti voluptate veritatis, architecto
                possimus illum placeat obcaecati sequi error quidem. Quibusdam
                minima, ullam non nihil ratione debitis iusto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Click here to finish the payment">
        Finish the payment
      </Button>
    </div>
  )
}

export default Checkout
