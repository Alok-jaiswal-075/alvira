
import { useNavigate } from 'react-router-dom';

function ProductCard({name,price,image}) {

  const navigate = useNavigate();

  const handleClick = () => {
    if(name=="Apple iPhone 14 ((PRODUCT)RED, 512 GB)"){
      navigate(`/product/1013`);
    }else if(name=="SAMSUNG Galaxy S24 Ultra 5G (Titanium Violet, 256 GB)  (12 GB RAM)"){
      navigate(`/product/2242`);
    }else if(name=="Women Solid Round Neck Polyester Black T-Shirt"){
      navigate(`/product/3312`);
    }else{
      navigate(`/product/4443`);
    }
  }

  return (
    <div onClick={handleClick} className='h-[90vh] hover:shadow-lg hover:m-1 duration-200'>
        <div className={`w-full h-[75%] flex items-center justify-center ${image} bg-cover overflow-hidden`}/>

        <div className='h-[25%] flex p-4 flex-col items-center justify-center font-bold uppercase bg-card'>
            <div className='text-lg text-center'>{name}</div>
            <div className='color-text_gray text-md'>&#8377;{price}</div>
        </div>
    </div>
  )
}

export default ProductCard