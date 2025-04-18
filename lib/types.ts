export interface SalesData {
  productId: string
  productName: string
  category: string
  salesDate: string
  unitsSold: number
  revenue: number
  profit: number
  returnRate: number
  rating: number
  fulfillmentType: "FBA" | "FBM"
}
