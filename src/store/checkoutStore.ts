import { create } from 'zustand'

interface CheckoutStore {
  paymentMethod: PaymentMethods | null
  formData: Record<string, string | number> | null
  setFormData: (data: Record<string, string | number> | null) => void
  resetFormData: () => void
  setPaymentMethod: (method: PaymentMethods) => void
  resetPaymentMethod: () => void
}

export type PaymentMethods = 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro' | null

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  paymentMethod: null,
  formData: {},
  setFormData: (data: Record<string, string | number> | null) => set({ formData: data }),
  resetFormData: () => set({ formData: null }),
  setPaymentMethod: (method: PaymentMethods) => set({ paymentMethod: method}),
  resetPaymentMethod: () => set({ paymentMethod: null })
}))
