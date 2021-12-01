import { api } from 'services/api'

export const getQuestions = async (amount) => {
  try {
    return api.get('/', { params: { amount: Number(amount) } }).then(response => response.data.results)
  } catch {
    return []
  }
}