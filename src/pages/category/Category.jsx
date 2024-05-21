import { useParams } from 'react-router-dom'
import {  useProductData } from '../../hooks/useQueryData'

export default function Category() {
    const params = useParams()
    const {data,loading, error} = useProductData(params?.id)
    console.log("data",data)
  return (
    <div>
      Category Page
    </div>
  )
}
