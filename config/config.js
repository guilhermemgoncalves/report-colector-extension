const reportMock = [
    {
        id: 1,
        name: "RP0001",
        itemsCount: 6        
    },
    {
        id: 2,
        name: "RP0002",
        itemsCount: 12        
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
        divReportSummary.appendChild(newDataElement);

        console.log(r.name);
    }
)



