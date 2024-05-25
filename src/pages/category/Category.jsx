import { useParams } from 'react-router-dom'
import {  useProductData } from '../../hooks/useQueryData'
import ProductCard from '../../components/ProductCard'

export default function Category() {
    const params = useParams()
    const {data,loading, error} = useProductData(params?.id)
  const filterData = data?.data?.filter(item => item?.isRohan)

  return (
    <div className='base_layout'>
      <div className='base_padding py-10'>

     
      {
              filterData && <div className="grid grid-cols-5 gap-4">
              {filterData?.map((item) => {
                return <ProductCard key={item?.id} item={item} />;
              })}
            </div>
            }
            {
              loading && <>Loading...</>
            }
            {
              filterData?.length === 0 && <>Empty</>
            }
             </div>
    </div>
  )
}
