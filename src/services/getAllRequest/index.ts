import axios from 'axios'
import { W3ApiPath } from '../url'
import { GetDashBoardSummaryProps } from '@/types/GetDashBoardSummaryProps'
import { GetProductProps } from '@/types/GetProductProps'
import { GetProductDetailsProps } from '@/types/GetProductSummaryProps'
import { GetProductClientProps } from '@/types/GetProductClientProps'
import { GetClientDetailsProps } from '@/types/GetClientDetailsProps'
import { GetClientProductProps } from '@/types/GetClientProductProps'
import { GetPreditionCard } from '@/types/GetpredictionCard'
import { GetPredictionDataClientProps } from '@/types/GetPredictionDataClientProps'
import { GetPredictionEndingProps } from '@/types/GetPredictionEndingProps'
import { GetPreditionHistoricProps } from '@/types/GetPreditionHistoricProps'
import { GetProductsResponse } from '@/types/GetProductsResponse'
import { GetClientResponse } from '@/types/GetClientResponse'

export const GetReport = async (
  dataInicio: string,
  dataFim: string
): Promise<GetDashBoardSummaryProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get('/app/dashboard/resumo', {
      headers,
      params: {
        dataFim,
        dataInicio
      }
    })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

//---------------------------------------------------------------

export const GetClients = async (): Promise<GetClientResponse> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get('/app/cliente', { headers })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

//-------------------------------------------------------------

export const GetProducts = async (): Promise<GetProductsResponse> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get('/app/produto', { headers })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    console.error('Erro Maldito', error)
  }
  throw new Error('Página em manutenção')
}

//------------------Predictions------------------------------------

export const GetCardPrediction = async (): // clienteId: string
Promise<GetPreditionCard> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get('/app/predicao', { headers })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

export const GetPreditionEnding = async (
  id: string
): Promise<GetPredictionEndingProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get(`/app/predicao/${id}/esgotando`, {
      headers,
      params: { id }
    })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

export const GetPreditionHistoric = async (
  id: string
): Promise<GetPreditionHistoricProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get(`/app/predicao/${id}/historico`, {
      headers,
      params: { id }
    })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

export const GetPredictionDataClient = async (
  id: string
): Promise<GetPredictionDataClientProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get(`/app/cliente/${id}`, {
      headers,
      params: { id }
    })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

export const GetPreditionProductLow = async (id: string, produtoId: number) => {
  try {
    const result = await W3ApiPath.post(`/app/predicao/${id}/baixa`, {
      produtoId
    })

    if (result.status === 200) {
      return { baixa: true }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

//--------------------End-----------------------------------------

export const GetProductPage = async (
  page: number,
  classificacao?: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProductProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get('/app/produto', {
      headers,
      params: {
        classificacao,
        page: page - 1,
        size: 7
      }
    })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

//------------------------------------------------------

export const GetProductDetails = async (
  id: number
): Promise<GetProductDetailsProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get(`/app/produto/${id}/resumo`, {
      headers,
      params: { id }
    })
    console.log(result.status)
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    console.log('erro maldito', error)
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

//------------------------------------------------------------

export const GetProductClient = async (
  id: number,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProductClientProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get(`/app/produto/${id}/clientes`, {
      headers,
      params: {
        classificacao
      }
    })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}

//------------------------------------------------------------------
//------------------------------------------------------------------

export const GetClientProduct = async (
  id: number,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetClientProductProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get(`/app/cliente/${id}/produtos`, {
      headers,
      params: {
        classificacao
      }
    })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}
//--------------------------------------------------------------------

export const GetClientDetails = async (
  id: number
): Promise<GetClientDetailsProps> => {
  try {
    const token = localStorage.getItem('token')
    const headers = {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
    const result = await W3ApiPath.get(`/app/cliente/${id}/resumo`, {
      headers,
      params: { id }
    })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}
//------------------------------------------------------------
