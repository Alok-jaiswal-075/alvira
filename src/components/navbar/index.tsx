import React from 'react'
import { BiSearch } from 'react-icons/bi'



function Navbar() {

    const options = ['SHOP ALL', 'ELECTRONICS', 'CLOTHES', 'DECOR']
    const links = ['CONTACT', 'HELP', 'LOG IN']

  return (
    <div className='px-5 h-[10vh] border flex justify-between items-center'>

        <div className='text-heading font-bold'>AL<span className='text-text_gray'>VI</span>RA</div>

        <div className='flex items-center justify-center gap-8 text-link'>
            {options.map((option,key)=>(
                <div key={key}>{option}</div>
            ))}
            <BiSearch size={20}/>
        </div>

        <div className='flex items-center justify-center gap-8 text-linksm'>
            {links.map((link,key)=>(
                <div key={key}>{link}</div>
            ))}
        </div>


    </div>
  )
}

export default Navbar