import { useState } from 'react'
import { useFormik } from 'formik'
import * as y from 'yup'

import { usePurchaseMutation } from '../../services/api'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { Row, InputGroup, TabButton } from './styles'

import boletoIcon from '../../assets/images/boleto.png'
import cartaoIcon from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      eMail: '',
      cpf: '',
      deliveryMail: '',
      confirmDeliveryMail: '',
      //|| espaço vazio
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      cardExpireMonth: '',
      cardExpireYear: '',
      cardCode: '',
      //|| espaço vazio
      installments: 1
    },
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullName,
          email: values.eMail,
          document: values.cpf
        },
        delivery: {
          email: values.deliveryMail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            name: values.cardOwner,
            number: values.cardNumber,
            owner: {
              name: values.cardOwner,
              document: values.cpfCardOwner
            },
            expires: {
              month: Number(values.cardExpireMonth),
              year: Number(values.cardExpireYear)
            },
            code: Number(values.cardDisplayName)
          }
        },
        products: []
      })
    },
    validationSchema: y.object({
      fullName: y
        .string()
        .min(5, 'Insert your full name') //* precisa de no mínimo 5 crts
        .required('This is a required field!'),
      eMail: y
        .string()
        .email('Invalid email adress')
        .required('This is a required field!'),
      cpf: y
        .string()
        .min(14, 'Insert a valid CPF, with the "." and "-"')
        .min(15, 'Insert a valid CPF')
        .required('This is a required field!'),
      deliveryEmail: y
        .string()
        .email('Invalid email adress')
        .required('This is a required field!'),
      confirmDeliveryEmail: y
        .string()
        .oneOf([y.ref('deliveryEmail')], 'The email does not match!') //* para verificar se bate
        .required('This is a required field!'),
      //|| espaço vazio
      cardOwner: y.string().when(
        (values, schema) =>
          payWithCard ? schema.required('This is a required field!') : schema //* return só quando for true
      ),
      cardDisplayName: y
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('This is a required field!') : schema
        ),
      cardNumber: y
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('This is a required field!') : schema
        ),
      cardExpireMonth: y
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('This is a required field!') : schema
        ),
      cardExpireYear: y
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('This is a required field!') : schema
        ),
      cardCode: y
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('This is a required field!') : schema
        ),
      //|| espaço vazio
      installments: y
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('This is a required field!') : schema
        )
    })
  })

  const getErrorMessage = (field: string, message?: string) => {
    const isTouched = field in form.touched
    const isNotValid = field in form.errors

    if (isTouched && isNotValid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Billing details">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.fullName}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="eMail">E-mail</label>
              <input
                id="eMail"
                type="email"
                name="eMail"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.eMail}
              />
              <small>{getErrorMessage('eMail', form.errors.eMail)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cpf}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </InputGroup>
          </Row>

          <h3 className="mtop24">Delivery details - Digital Content</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryMail">E-mail</label>
              <input
                id="deliveryMail"
                type="email"
                name="deliveryMail"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.deliveryMail}
              />
              <small>
                {getErrorMessage('deliveryMail', form.errors.deliveryMail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryMail">Confirm the e-mail</label>
              <input
                id="confirmDeliveryMail"
                type="email"
                name="confirmDeliveryMail"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.confirmDeliveryMail}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryMail',
                  form.errors.confirmDeliveryMail
                )}
              </small>
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
                    <input
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardOwner}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">Card owner&apos;s cpf</label>
                    <input
                      id="cpfCardOwner"
                      type="text"
                      name="cpfCardOwner"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cpfCardOwner}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfCardOwner',
                        form.errors.cpfCardOwner
                      )}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Card display name</label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardDisplayName}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Card number</label>
                    <input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardNumber}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="cardExpireMonth">Card expire month</label>
                    <input
                      id="cardExpireMonth"
                      type="text"
                      name="cardExpireMonth"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardExpireMonth}
                    />
                    <small>
                      {getErrorMessage(
                        'cardExpireMonth',
                        form.errors.cardExpireMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="cardExpireYear">Card expire year</label>
                    <input
                      id="cardExpireYear"
                      type="text"
                      name="cardExpireYear"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardExpireYear}
                    />
                    <small>
                      {getErrorMessage(
                        'cardExpireYear',
                        form.errors.cardExpireYear
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardCode}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Installments</label>
                    <select
                      id="installments"
                      name="installments"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.installments}
                    >
                      <small>
                        {getErrorMessage(
                          'installments',
                          form.errors.installments
                        )}
                      </small>
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
    </form>
  )
}

export default Checkout
