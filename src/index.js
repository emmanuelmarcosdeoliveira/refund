import food from "./assets/images/food.svg";
import logo from "./assets/images/logo.svg";
import remove from "./assets/images/remove.svg";
import { captureForms } from "./scripts/module/captureForm";
import formatInput from "./scripts/module/formatInput";
import "./style.css";
document.querySelector("#app").innerHTML = `
<main>
      <img src="${logo}" alt="Convert logo" class="logo" />
      <section>
        <form>
          <h1>Solicitação de reembolso</h1>
          <p>
            Informe os dados da despesa para solicitar reembolso. A despesa será
            analisada e reembolsada em até 30 dias.
          </p>
          <fieldset>
            <legend>Nome da despesa</legend>
            <input type="text" id="expense" name="expense" required />
          </fieldset>
          <div class="inputs-row">
            <fieldset>
              <legend>Categoria</legend>
              <select id="category" name="category" required>
                <option value="" disabled selected hidden>Selecione</option>
                <option value="food">Alimentação</option>
                <option value="accommodation">Hospedagem</option>
                <option value="services">Serviços</option>
                <option value="transport">Transporte</option>
                <option value="others">Outros</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Valor da despesa</legend>
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="R$ 0,00"
                required
              />
            </fieldset>
          </div>
          <button type="submit">Adicionar despesa</button>
        </form>
        <aside>
          <header>
            <p>
              Minhas solicitações <i>&bullet;</i>
              <span>0 despesas</span>
            </p>
            <h2><small>R$</small>0,00</h2>
         </header>        
          <ul>
          <!-- Exemplo de item da lista
               <li class="expense">
               <img src="${food}" alt="Ícone de tipo da despesa" />
               <div class="expense-info">
                 <strong>Almoço</strong>
                 <span>Alimentação</span>
              </div>
               <span class="expense-amount"><small>R$</small>1.420,57</span>
               <img src="${remove}" alt="remover" class="remove-icon" />
             </li>
          -->
             </ul>
          </aside>
         </section>
       <footer><a href="https://www.ofs.dev.br">Desenvolvido por OFS | Emmanuel Oliveira</a></footer>
    </main>  
`;
formatInput();
captureForms();
