'use strict'

const abrirPDF = () => {
    const file = document.getElementById('agrup').value
    window.open(`/${file}.pdf`)
    document.getElementById('agrup').value = ''
}

document.getElementById('consulta').addEventListener('click', abrirPDF, false);

