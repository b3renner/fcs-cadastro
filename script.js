// Lista simulada de crianças
const criancas = [
    {
      nome: "Lucas da Silva Rocha",
      escola: "EMEF Dom Feliciano",
      ano: "5º ano",
      pai: "Carlos Rocha",
      mae: "Mariana Silva",
      contato: "(51) 99888-7766"
    },
    {
      nome: "Ana Beatriz Oliveira",
      escola: "EMEF São João",
      ano: "4º ano",
      pai: "José Oliveira",
      mae: "Luciana Beatriz",
      contato: "(51) 99777-3344"
    },
    {
        nome: "Bernardo Mattos Renner",
        escola: "Colégio Sinodal Prado",
        ano: "2º ano EM",
        pai: "Maico Renner",
        mae: "Rita Renner",
        contato: "(51) 93333-3333"
      }
  ];
  
  function carregarTabela() {
    const tbody = document.querySelector("#tabela-criancas tbody");
    tbody.innerHTML = "";
  
    criancas.forEach((c, index) => {
      const linha = document.createElement("tr");
  
      linha.innerHTML = `
        <td>${c.nome}</td>
        <td>${c.escola}</td>
        <td>${c.ano}</td>
        <td>${c.pai}</td>
        <td>${c.mae}</td>
        <td>${c.contato}</td>
        <td>
          <a href="ficha.html?id=${index}" class="btn btn-abrir">Abrir</a>
          <button class="btn btn-editar" onclick="editar(${index})"><img src="edit.png" /></button>
          <button class="btn btn-excluir" onclick="excluir(${index})"><img src="trash .png" /></button>
        </td>
      `;
  
      tbody.appendChild(linha);
    });
  }
  
  function editar(index) {
    alert("Função de edição será implementada. Índice: " + index);
  }
  
  function excluir(index) {
    if (confirm("Tem certeza que deseja excluir este cadastro?")) {
      criancas.splice(index, 1);
      carregarTabela();
    }
  }
  
  window.onload = carregarTabela;

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      let valid = true;
      const requiredFields = form.querySelectorAll("input[required], select[required], textarea[required]");
  
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = "red";
          valid = false;
        } else {
          field.style.borderColor = "#ccc";
        }
      });
  
      if (!valid) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  
    // Exibir campo personalizado para opções "Outro"
    const outros = document.querySelectorAll("input[type='radio'][value='Outro'], input[type='checkbox'][value='Outro']");
  
    outros.forEach(opcao => {
      opcao.addEventListener("change", (e) => {
        const inputOutro = document.getElementById(`${e.target.name}-outro`);
        if (inputOutro) {
          inputOutro.style.display = e.target.checked || e.target.value === 'Outro' ? "block" : "none";
        }
      });
    });
  });
  