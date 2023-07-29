import { Client } from './GetClientResponse'

type SetClassificationFn = (
  classification: 'EM_ALTA' | 'EM_BAIXA' | null
) => void

export type ClientTableMainProps = {
  filteredClients: Client[]
  setClientClassification: SetClassificationFn
  customerColumns: string[]
  showPercentColumn?: boolean
  showLastPurchase?: boolean
  showNextPurchase?: boolean
}
