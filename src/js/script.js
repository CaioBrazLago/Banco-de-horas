 // Script para pegar a data atual
 var dataAtual = document.querySelector('#data');
 var hoje = new Date();
 var dia = String(hoje.getDate()).padStart(2, '0');
 var mes = String(hoje.getMonth() + 1).padStart(2, '0');
 var ano = hoje.getFullYear();
 dataAtual.value = `${ano}-${mes}-${dia}`;
 

  function lancarHoras() {
      //************CALCULO DE HORAS**************

    var horarioEntradaInput = document.getElementById("horarioEntrada")
    var horarioSaidaInput = document.getElementById("horarioSaida")
    var horaExtraInput = document.getElementById("horasExtras")

  
    // Obtém os horários dos inputs
    var horarioEntrada = new Date("2000-01-01 " + horarioEntradaInput.value);
    var horarioSaida = new Date("2000-01-01 " + horarioSaidaInput.value);
    var horarioExtra = new Date("2000-01-01 " + horaExtraInput.value);
    var horarioOitoManha = new Date("2000-01-01 08:00");
    

    // Calcula a diferença em milissegundos e SUBTRAI UMA HORA (Seria correspondente ao horário de almoço)
    let diferencaEmMilissegundos = (horarioSaida - horarioEntrada) - 3600000;
    let diferencaEmMilissegundosOito = diferencaEmMilissegundos - horarioOitoManha;
    let diferencaEmMilissegundosHoraExtra = (diferencaEmMilissegundos)- 28800000;

    var sinalNegativo = diferencaEmMilissegundosHoraExtra < 0
  
    // Transforma a diferença em milissegundos para horas e minutos no campo HORAS TRABALHADAS
    diferencaEmMilissegundos = Math.abs(diferencaEmMilissegundos);
    var horasEntrada = Math.floor(diferencaEmMilissegundos / 3600000);
    var minutosEntrada = Math.floor((diferencaEmMilissegundos % 3600000) / 60000);
    

    diferencaEmMilissegundosOito = Math.abs(diferencaEmMilissegundosOito);
    var oitoHoras = Math.floor(diferencaEmMilissegundosOito / 3600000);
    var oitoMinutos = Math.floor((diferencaEmMilissegundosOito % 3600000) / 60000);

    // Transforma a diferença em milissegundos para horas e minutos no campo HORAS EXTRAS
    diferencaEmMilissegundosHoraExtra = Math.abs(diferencaEmMilissegundosHoraExtra);
    var HoraExtraS = Math.floor(diferencaEmMilissegundosHoraExtra / 3600000);
    var MinutosExtraS = Math.floor((diferencaEmMilissegundosHoraExtra % 3600000) / 60000);

  
    // Formata o resultado como uma string no formato "HH:mm" ou "-HH:mm" (caso negativo)
    var horasTrabalhadas = padZeroEntrada(horasEntrada) + ":" + padZeroEntrada(minutosEntrada);
    var horaBaseDoDia = padZeroEntrada(oitoHoras) + ":" + padZeroEntrada(oitoMinutos);
    var horasExtras = (sinalNegativo ? "-" : "") + padZeroEntrada(HoraExtraS) + ":" + padZeroEntrada(MinutosExtraS);

    

    //Atualiza o input das horas TRABALHADAS
    document.getElementById("horasTrabalhadas").value = horasTrabalhadas;

    //Atualiza o input das horas EXTRAS

    document.getElementById("horasExtras").value = horasExtras;


}


// Função auxiliar para adicionar um zero à esquerda de números menores que 10
function padZeroEntrada(numeroEntrada) {
    return numeroEntrada < 10 ? "0" + numeroEntrada : numeroEntrada;
  }


  //Função slider bar

  const toggleButton = document.getElementById('button-menu');
  const sidebar = document.getElementById('list');
  
  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
  


