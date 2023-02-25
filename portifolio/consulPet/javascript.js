function validaForm(){
	let validaDono  = document.forms["agendar"]["dono"].value;
	let validaPet   = document.forms["agendar"]["pet"].value;
	let validaRadio = document.forms["agendar"]["radio"].value;
	let validaTelef = document.forms["agendar"]["telefone"].value;
	let validaDia   = document.forms["agendar"]["diaConsulta"].value;
	let validaHora  = document.forms["agendar"]["horaConsulta"].value;
	

	if (validaDono == ""){
		alert("O nome do dono deve ser preenchido!");
		return false;
	}
	if (validaPet == ""){
		alert("O nome do Pet deve ser preenchido!");
		return false;
	}
	if (validaRadio == ""){
		alert("O tipo de Pet deve ser marcado!");
		return false;
	}
	if (validaTelef == ""){
		alert("Um telefone de contato deve ser adicionado!");
		return false;
	}
	if (validaDia == ""){
		alert("A data para a consulta deve ser preenchida!");
		return false;
	}
	if (validaHora == ""){
		alert("A hora da consulta deve ser preenchida!");
		return false;
	}
	
}

function completo(){
	let nomeDono = document.forms["agendar"]["dono"].value;
	let nomePet = document.forms["agendar"]["pet"].value;
	let tipoPet = document.forms["agendar"]["radio"].value;
	let telef = document.forms["agendar"]["telefone"].value;
	let dataCons = document.forms["agendar"]["diaConsulta"].value;
	let horaCons = document.forms["agendar"]["horaConsulta"].value;
	

	let inserir = window.document.getElementById("agendamento");
	inserir.innerHTML = `<td scope="row">${nomeDono}</td>`;
	inserir.innerHTML +=	`<td>${nomePet}</td>`;
	inserir.innerHTML +=	`<td>${tipoPet}</td>`;
	inserir.innerHTML +=	`<td>${telef}</td>`;
	inserir.innerHTML +=	`<td>${dataCons}</td>`;
	inserir.innerHTML +=	`<td>${horaCons}</td>`;

}