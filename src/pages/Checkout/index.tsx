import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as y from 'yup'

import { usePurchaseMutation } from '../../services/api'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { Row, InputGroup, TabButton } from './styles'

import barCodeIcon from '../../assets/images/boleto.png'
import creditCardIcon from '../../assets/images/cartao.png'
import { RootReducer } from '../../store'
import { formatPrice, getTotalPrice } from '../../utils'

type Installment = {
  quantity: number
  amount: number
  formattedAmout: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])

  const totalPrice = getTotalPrice(items)

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

  const checkInputHasError = (field: string) => {
    const isTouched = field in form.touched
    const isNotValid = field in form.errors
    const hasError = isTouched && isNotValid

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installment[] = []

      for (let i = 1; i <= 6; i++) {
        // parcela até 6x
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmout: formatPrice(totalPrice / i)
        })
      }
      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  if (items.length === 0) {
    //# para prevenir que digite "/checkout na aba de pesquisa e acesse a pg"
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Thank you!">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.order.id} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="mtop24">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="mtop24">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="mtop24">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="mtop24">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
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
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
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
                    className={checkInputHasError('eMail') ? 'error' : ''}
                  />
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
                    className={checkInputHasError('cpf') ? 'error' : ''}
                  />
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
                    className={
                      checkInputHasError('deliveryMail') ? 'error' : ''
                    }
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="confirmDeliveryMail">
                    Confirm the e-mail
                  </label>
                  <input
                    id="confirmDeliveryMail"
                    type="email"
                    name="confirmDeliveryMail"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.confirmDeliveryMail}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </InputGroup>
              </Row>
            </>
          </Card>
          <Card title="Payment">
            <>
              <TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
                type="button"
              >
                <img src={barCodeIcon} alt="Payment with Bowletoh" />
                Bank Boleto
              </TabButton>
              <TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
                type="button"
              >
                <img src={creditCardIcon} alt="Payment with Cartown" />
                Credit Card
              </TabButton>
              <div className="mtop24">
                {payWithCard ? (
                  <>
                    <Row>
                      <InputGroup>
                        <label htmlFor="cardOwner">
                          Card owner&apos;s name
                        </label>
                        <input
                          id="cardOwner"
                          type="text"
                          name="cardOwner"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardOwner}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cpfCardOwner">
                          Card owner&apos;s CPF
                        </label>
                        <input
                          id="cpfCardOwner"
                          type="text"
                          name="cpfCardOwner"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cpfCardOwner}
                          className={
                            checkInputHasError('cpfCardOwner') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </Row>
                    <Row marginTop="24px">
                      <InputGroup>
                        <label htmlFor="cardDisplayName">
                          Card display name
                        </label>
                        <input
                          id="cardDisplayName"
                          type="text"
                          name="cardDisplayName"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardDisplayName}
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
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
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup maxWidth="123px">
                        <label htmlFor="cardExpireMonth">
                          Card expire month
                        </label>
                        <input
                          id="cardExpireMonth"
                          type="text"
                          name="cardExpireMonth"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardExpireMonth}
                          className={
                            checkInputHasError('cardExpireMonth') ? 'error' : ''
                          }
                        />
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
                          className={
                            checkInputHasError('cardExpireYear') ? 'error' : ''
                          }
                        />
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
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                        />
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
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((installments) => (
                            <option key={installments.quantity}>
                              {installments.quantity}x to{' '}
                              {formatPrice(installments.amount)}
                            </option>
                          ))}
                        </select>
                      </InputGroup>
                    </Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="submit"
            onClick={form.handleSubmit}
            title="Click here to finish the payment"
          >
            Finish the payment
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
