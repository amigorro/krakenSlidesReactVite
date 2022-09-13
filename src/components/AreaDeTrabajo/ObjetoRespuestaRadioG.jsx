

export const ObjetoRespuestaRadioG = ( params ) => {
  return (
     <div>
     <div>Respuesta N:</div> { params.elim=='true' && <div>trash</div> }
     <input type="text" /> <input type="number" />
</div>
  )
}
