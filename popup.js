let reportSelected = "Imovel ponta da praia";
let divReportSelected = document.getElementById("report-selection");

if(reportSelected == null){
    divReportSelected.innerText = "Nenhum laudo selecionado";
}else {
    divReportSelected.innerText =  `Laudo: ${reportSelected} selecionado!`
}

function openConfigPage() {
    // Abre a página de configuração em uma nova guia
    window.open("config/config.html", "_blank");
}
