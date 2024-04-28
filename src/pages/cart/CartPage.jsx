
export default function CartPage() {
    const existingArrayString = localStorage.getItem("myCart");
    const existingArray = JSON.parse(existingArrayString) || [];

    console.log("existingArray",existingArray)
    
  return (
    <div>
      
    </div>
  )
}
