AOS.init()

const dataNascimento = new Date("Dec 27, 1992 10:12:00");

function calcularIdadeEmTempoReal() {
    const agora = new Date();

    // Idade em anos completos
    let idade = agora.getFullYear() - dataNascimento.getFullYear();
    if (
        agora.getMonth() < dataNascimento.getMonth() ||
        (agora.getMonth() === dataNascimento.getMonth() && agora.getDate() < dataNascimento.getDate())
    ) {
        idade--;
    }

    // Último aniversário
    const ultimoAniversario = new Date(agora.getFullYear(), 11, 27, 10, 12, 0); // 27 de dezembro
    if (agora < ultimoAniversario) {
        ultimoAniversario.setFullYear(agora.getFullYear() - 1);
    }

    const msDesdeUltimoAniversario = agora - ultimoAniversario;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const dias = Math.floor(msDesdeUltimoAniversario / diaEmMs);
    const horas = Math.floor((msDesdeUltimoAniversario % diaEmMs) / horaEmMs);
    const minutos = Math.floor((msDesdeUltimoAniversario % horaEmMs) / minutoEmMs);
    const segundos = Math.floor((msDesdeUltimoAniversario % minutoEmMs) / 1000);

    document.getElementById("contador").innerHTML = `
        ${idade} anos, ${dias} dias, ${horas}h ${minutos}m ${segundos}s
    `;
}

setInterval(calcularIdadeEmTempoReal, 1000);

