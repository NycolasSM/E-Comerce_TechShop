import React, { useState, useEffect } from 'react'
import './Teste.css'

import TopBarInfo from '../components/Header/TopBarInfo.jsx';
import Header from '../components/Header/Header.jsx';


const Teste = () => {

  // TODO - Remove this later
  // Hooks -> usado para realizar um evento e atualizar o componente na pagina logo em seguida

  // useEffect  -> executa um trecho de código toda vez que a depencia que é informada no array muda, caso nao ponha a dependenia ele ira atualizar toda vez que qualquer evento dentro do componente ocorrer

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [title, setTitle] = useState("TechShop")
  const [produtos, setProdutos] = useState([])

  const colors = ["red", "blue", "tomato", "green"]

  const style = {
    backgroundColor: color,
    width: "100px",
    height: "100px"
  }

  function Somar() {
    setCount(count + 1);
  }

  function handleClick() {
    console.log("clicou")
  }

  function target(event) {
    event.target.classList.toggle('teste')
    console.log(event.target)
  }

  function changeTitle(event) {
    setTitle(event.target.value)
  }

  useEffect(() => {
    console.log("teste change title")
    document.title = title
  }, [title])

  useEffect(() => {
    fetch("Colocar Api Aqui")
      .then(resp => resp.json())
      .then(data => setProdutos(data)) // aqui sera colocado toda a Api dentro do setProdutos
  }, []); // usa-se o useEffect no fetch porque caso esteja fora ele sera executado infinitamente  

  return (
    <div>
      <TopBarInfo />
      <Header />
      <h1 className="conteudo">
        <button className="botaoTeste" onClick={() => console.log('clicou')}>Botão console 1</button>
        <button className="botaoTeste" onClick={handleClick}>Botão console 2</button>
        <button className="botaoTeste" onClick={Somar}>Botão teste {count}</button>
        <button className="botaoTeste" onClick={target}>Event Target</button>

        <ul>
          {produtos.map(produto => (
            <li key={produto.id}>
              <h1>{produto.nome}</h1>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            </li>
          ))}
        </ul>

        <input type="text" value={title} onChange={changeTitle} />

        <div style={style}></div>
        <div>{color}</div>
        <button onClick={() => setColor("green")}>Verde</button>
        {colors.map(color => (
          <button key={color} onClick={() => setColor(color)}>{color}</button>
        ))}
      </h1>
    </div>
  )
}

export default Teste;
