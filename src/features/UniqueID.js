let UUID = 0

export default function UniqueID() {
  const getID = () => {
    return ++UUID
  }

  return {
    getID
  }
}
