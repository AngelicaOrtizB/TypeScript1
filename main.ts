import { pilotos } from './data.js';
import { Piloto  } from './piloto.js';
const seriesTbody: HTMLElement = document.getElementById('pilotos')!; 
//quiero hacer un commit
function renderSeriesInTable(pilotos: Piloto [], seriesTbody: HTMLElement): void {
  //let totalSeasons: number = 0;
  pilotos.forEach((s, index) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${index + 1}</td>
                           <td><a href="${s.link}" target="_blank">${s.name}</a></td>
                           <td>${s.nacionalidad}</td>
                           <td>${s.equipoActual}</td>`;
    seriesTbody.appendChild(trElement);
    //totalSeasons += s.seasons;
  });
}
renderSeriesInTable(pilotos, seriesTbody);