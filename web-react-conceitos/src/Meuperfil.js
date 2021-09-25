import React, { Component } from 'react';
import './Meuperfil.css';
 
class Meuperfil extends Component {
 
  render(){
    return(

      <div>
          <h2>
           App Meu perfil
          </h2>
          <header className="App-Meuperfil">
              <p>
              <Curriculo />
              </p>
              
                  <h3> Dados Pessoais: </h3>
                  <ol>
                  <b> Nome completo: </b> Thais Campo Fiorelli do Nascimento <br></br>
                  <b>Data de Nascimento:</b> 19/05/2001<br></br>
                  <b>Telefone:</b> (13) 99783-4827<br></br>
                  <b>Email:</b> thais.campo123@gmail.com<br></br>
                  </ol>

                  <h3> Formação:</h3>
                  <ul>
                    <li>
                         Ensino Médio Completo - E.E Benedito Calixto, Itanhaém-SP
                    </li>

                    <li> 
                        Cursando 4º Semestre de Sistemas de Infromação - Unip Santos Rangel - Noturno 
                    </li>

                    <li>
                         Cursando Lingua Inglesa - CNA
                    </li>

                   </ul>

                    <h3> Experiências:</h3>
                    <ul>
                        <li>
                            <b>Empresa:</b> Cida Moda Praia <br></br>
                            Período: 1 ano e 11 meses <br></br>
                            Cargo: Vendedora e Caixa
                        </li>
                    </ul>

                    <h3>Projetos:</h3>
                    <ul>
                        <li>
                            Front end Netflix
                        </li>
                        
                    </ul>

                  
                  </header>
                  </div>
                  );
  }
}

export default Meuperfil;
 
function Curriculo(){
  
  let img = 'https://lh3.googleusercontent.com/a-/AOh14Gjve47n2xrAjicGGna-zpfWFuTRDT5f_lAxvk-ebg=s288-p-rw-no';
 
  return(
      <img src={img} width={130} height={160} alt='Minha foto' />
      
  );
  }
  