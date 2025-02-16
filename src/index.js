import logo from "./assets/images/logo.svg";
import { captureForms } from "./scripts/module/captureForm.js";
import formatInput from "./scripts/module/formatInput.js";
import { removeItem } from "./scripts/module/removeItem.js";
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
              <span>0 despesa</span>
            </p>
            <h2><small>R$</small>0,00</h2>
         </header>        
          <ul>
          </ul>
          </aside>
         </section>
       <footer><a href="https://www.ofs.dev.br">Desenvolvido por OFS | Emmanuel Oliveira</a></footer>
    </main>  
`;
formatInput();
captureForms();
removeItem();
