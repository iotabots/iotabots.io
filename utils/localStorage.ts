export const getItem = (itemName: string): string | null =>
  localStorage.getItem(itemName)

export const setItem = (itemName: string, itemValue: string | object): void => {
  if (itemValue instanceof Object) {
    localStorage.setItem(itemName, JSON.stringify(itemValue))
  } else {
    localStorage.setItem(itemName, itemValue)
  }
}

export const deleteItem = (itemName: string): void => {
  localStorage.removeItem(itemName)
}
