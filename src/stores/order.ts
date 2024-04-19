import { defineStore } from 'pinia'
import { ORDERS } from '@/constants'
import { dateToView, formatMoney } from '@/utils'

interface Order {
  key: string
  name: string
  budget: string
  status: boolean
  responsible: string
  createDate: Date
}
interface OrderAPI extends Omit<Order, 'createDate'> {
  createDate: string
}

interface OrderState {
  orders: Order[],
  isServer: boolean,
}

const ordersMap = (orders: OrderAPI[]):Order[] =>{
  return orders.map(o => ({
    key:o.key,
    name: o.name,
    budget: o.budget,
    status: o.status,
    responsible: o.responsible,
    createDate: new Date(o.createDate),
  }))
}

const isRowValue = (row: object, value:string): boolean =>{
  const searchColumns = ['name', 'budget', 'status', 'responsible', 'createDate']

  for (const [key, val] of Object.entries(row)) {

    const index = val.toLowerCase().indexOf(value)

    if (searchColumns.includes(key) && index > -1) {
      return true
    }
  }
  return false
}

export const useOrderStore = defineStore('order', {
state: (): OrderState => ({
  orders: [],
  isServer: false
}),
    getters: {
      getOrders(state){
        return state.orders.map(o=>({
          ...o,
          budget: formatMoney(o.budget + '', false) + '$',
          status: o.status ? 'Active' : 'Not active',
          createDate: dateToView(o.createDate)
        }))
      },
      gitFilteredOrders(state){
        return (value)=>{
          if (!value) {
            return this.getOrders
          }
          return this.getOrders
              .filter(o => isRowValue(o, value))
        }
      }
    },

    actions: {
      setOrders(orders: Order[]) {
        this.$patch((state) => {
          Object.assign(state.orders, orders)
        })
      },
      async fetchOrders(){
        try {
          // can use axios
        const response = await fetch('http://127.0.0.1:8000/api/leads', {
          method: 'GET',
        })

        const x: OrderAPI[] = await response.json()

        this.setOrders(ordersMap(x))
          this.isServer = true
        } catch (err) {
          console.warn('Server is not available, used some constants. Worked only Vue 🧡!');
          this.isServer = false
          this.setOrders(ordersMap(ORDERS))
        }
      }
    }

})
