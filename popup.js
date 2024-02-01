let reportSelected = "Imovel ponta da praia";
let divReportSelected = document.getElementById("report-selection");

if(reportSelected == null){
    divReportSelected.innerText = "Nenhum laudo selecionado";
}else {
    divReportSelected.innerText =  `Laudo: ${reportSelected} selecionado!`
}