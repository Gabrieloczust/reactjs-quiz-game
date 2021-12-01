import { api } from 'services/api'

export const getQuestions = async (amount) => {
  try {
    return await api.get('/', { params: { amount: Number(amount) } })
  } catch {
    return []
  }
}