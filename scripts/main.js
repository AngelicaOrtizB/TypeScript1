import { pilotos } from './data.js';
var seriesTbody = document.getElementById('pilotos');
function renderSeriesInTable(pilotos, seriesTbody) {
    //let totalSeasons: number = 0;
    pilotos.forEach(function (s, index) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(index + 1, "</td>\n                           <td><a href=\"").concat(s.link, "\" target=\"_blank\">").concat(s.name, "</a></td>\n                           <td>").concat(s.nacionalidad, "</td>\n                           <td>").concat(s.equipoActual, "</td>");
        seriesTbody.appendChild(trElement);
        //totalSeasons += s.seasons;
    });
}
renderSeriesInTable(pilotos, seriesTbody);
