import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { transfer } from './redux/actions/transfer'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #9ae66e;
`

const Input = styled.input`
  border: none;
  border-radius: 10px;

  color: #49ff00;
  background-color: #fff;
  padding: 10px 20px;
  text-align: center;

  ::placeholder {
    color: #49ff00;
  }
`

const Button = styled.button`
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: #49ff00;
  background-color: #fff;
`
const DataContainer = styled.div``

const Data = styled.h1`
  color: #fff;
  font-size: 35px;
`

const App = () => {
  const [amount, setAmount] = useState(null)

  const dispatch = useDispatch()
  const transferdata = useSelector((state) => state.transfer)

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(transfer(amount))
    setAmount('')
  }
  return (
    <AppContainer>
      <Input
        type='text'
        placeholder='enter the amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button onClick={handleClick}>Send</Button>

      <DataContainer>
        {transferdata.data && (
          <Data>{transferdata.data.result.data[0].calculatedstr} USD</Data>
        )}
      </DataContainer>
    </AppContainer>
  )
}

export default App
