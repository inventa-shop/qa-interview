import './App.css';
import { useState } from 'react';

function showDiv(toggle){
  document.getElementById(toggle).style.display = 'block';
  }

  function hideDiv(toggle){
  document.getElementById(toggle).style.display = 'none';
}

function App() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [terms, setTerms] = useState(false)

  function handleChangeName(e) {
    setName(e.target.value);
    hideDiv('toggle')
  }

  function handleChangePrice(e) {
    setPrice(e.target.value);
  }

  function handleChangeTerms(e) {
    setTerms(e.target.value);
  }

  return (
    <div className="App">
      <h1>Olá seja bem-vindo a página de cadastro</h1>
      <label>Informe o nome do produto</label>
      
      <div>
        <input type="text" onChange={handleChangeName} value={name} className='name-input' placeholder="Digite o nome do produto" />
      </div>
      
      <br/><br/>
      
      <label>Informe o valor do produto</label>
      <div>
        <input type="number" onChange={handleChangePrice} value={price} placeholder="Digite o valor do produto" />
      </div>
      
      <br/><br/>
      
      <div>
        <input id="terms" type="checkbox" onChange={handleChangeTerms} value={terms}/>
          Produto segue os termos de uso
      </div>

      <br/><br/>
      
      <label htmlFor="categorias">Escolha uma categoria:  </label>
			<select name="categorias" id="categorias">
				<option value="doce">Doce</option>
				<option value="unha">Unha</option>
				<option value="cabelo">Cabelo</option>
				<option value="decoraçao">Decoraçao</option>
			</select>

			<br/><br/>
      <button onClick={ () => showDiv('toggle')}>Cadastrar Produto</button>
      <br/><br/>
      <div id="toggle" className="feedback">Produto cadastrado com sucesso!</div>
    </div>
  );
}

export default App;
