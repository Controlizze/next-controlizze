export function useRetrieveCardValue(data: any) {
  let totalReceita = 0
  let totalDespesas = 0
  let totalSaldo = 0

  if (data === undefined || data.length === 0) {
    return [totalReceita, totalDespesas, totalSaldo]
  }

  data.map((movementsData: typeof data) => {
    if (movementsData.type === 'Receita') {
      totalReceita += movementsData.value
    } else if (movementsData.type === 'Despesa') {
      totalDespesas += movementsData.value
    }

    totalSaldo = totalReceita - totalDespesas
  })

  return [totalReceita, totalDespesas, totalSaldo]
}
