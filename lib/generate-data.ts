import type { SalesData } from "./types"

const productNames = [
  "Wireless Earbuds Pro",
  "Smart Home Hub",
  "Ergonomic Keyboard",
  "Ultra HD Monitor",
  "Fitness Tracker Watch",
  "Portable SSD Drive",
  "Noise Cancelling Headphones",
  "Bluetooth Speaker",
  "Gaming Mouse",
  "Wireless Charging Pad",
  "Smart LED Bulbs",
  "Laptop Stand",
  "USB-C Hub",
  "Mechanical Keyboard",
  "Webcam HD Pro",
  "Desk Organizer Set",
  "Wireless Mouse",
  "Phone Holder Stand",
  "External Battery Pack",
  "Tablet Stylus Pen",
]

const categories = [
  "Electronics",
  "Home & Kitchen",
  "Office Supplies",
  "Computer Accessories",
  "Smart Home",
  "Audio",
  "Mobile Accessories",
  "Gaming",
  "Wearables",
]

// Generate a random date within the last 90 days
const getRandomDate = () => {
  const now = new Date()
  const pastDate = new Date(now.getTime() - Math.random() * 90 * 24 * 60 * 60 * 1000)
  return pastDate.toISOString().split("T")[0]
}

// Generate a random product ID
const generateProductId = () => {
  return `B${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
}

export function generateSalesData(count: number): SalesData[] {
  return Array.from({ length: count }, () => {
    const unitsSold = Math.floor(Math.random() * 500) + 1
    const pricePerUnit = Math.floor(Math.random() * 200) + 10
    const revenue = unitsSold * pricePerUnit
    const costPerUnit = pricePerUnit * (0.4 + Math.random() * 0.3) // 40-70% of price
    const totalCost = unitsSold * costPerUnit
    const profit = revenue - totalCost

    // Occasionally generate negative profit
    const adjustedProfit = Math.random() > 0.8 ? profit * -0.5 : profit

    return {
      productId: generateProductId(),
      productName: productNames[Math.floor(Math.random() * productNames.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      salesDate: getRandomDate(),
      unitsSold,
      revenue,
      profit: adjustedProfit,
      returnRate: Math.random() * 10, // 0-10%
      rating: 1 + Math.random() * 4, // 1-5 stars
      fulfillmentType: Math.random() > 0.3 ? "FBA" : "FBM",
    }
  })
}
