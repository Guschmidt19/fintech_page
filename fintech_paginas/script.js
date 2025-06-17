let totalGeral = 0;

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
}

function adicionarGasto() {
  const desc = document.getElementById('descricao');
  const val = document.getElementById('valor');

  const descricao = desc.value.trim();
  const valor = parseFloat(val.value);

  if (!descricao || isNaN(valor) || valor === 0) return;

  totalGeral += valor;

  const tbody = document.getElementById('lista-gastos');
  const novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `
    <td>${descricao}</td>
    <td>${formatarMoeda(valor)}</td>
    <td>${formatarMoeda(valor)}</td>
  `;
  tbody.appendChild(novaLinha);

  document.getElementById('total').textContent = formatarMoeda(totalGeral);
  desc.value = '';
  val.value = '';
  desc.focus();
}
document.getElementById('btnCadastro').addEventListener('click', function(event) {
  event.preventDefault(); // evita envio ou link padrão
  alert('Ainda não é possível realizar o cadastro, mas fique à vontade para ver o site.');
  window.location.href = 'index.html'; // redireciona para a página inicial
});
