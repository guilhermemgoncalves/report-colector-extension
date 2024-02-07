const reportMock = [
    {
        id: 1,
        name: "RP0001",
        sampleCount: 6        
    },
    {
        id: 2,
        name: "RP0002",
        sampleCount: 12        
    }
]

let divReportSummary = document.getElementById("report-summary");

reportMock.forEach(
    r =>
    {
        let newDataElement = document.createElement("tr");
        
        let id = document.createElement("td");
        id.textContent = r.id;
        newDataElement.appendChild(id);

        let name = document.createElement("td");
        name.textContent = r.name;
        newDataElement.appendChild(name);

        let sampleCount = document.createElement("td");
        sampleCount.textContent = r.sampleCount;
        newDataElement.appendChild(sampleCount);

        let actions = document.createElement("td");
        newDataElement.appendChild(actions);


        let btnSelectReport = document.createElement("button");
        btnSelectReport.className = "btn-default";
        btnSelectReport.textContent = "Selecionar";
        btnSelectReport.addEventListener("click", () => selectReport(r.id));

        actions.appendChild(btnSelectReport);
        
        divReportSummary.appendChild(newDataElement);

    }
)

function selectReport(id) {
    console.log("Visualizar amostras para o relatório com o ID:", id);
    // Implemente a lógica para visualizar amostras aqui
}



