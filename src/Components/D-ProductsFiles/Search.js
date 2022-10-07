import React,{useState,useEffect} from 'react';
import ProductReducers from "./ProductReducers"
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const Search = () => {
    const DataSearch = useSelector((state) => state.ProductReducers.cardData);
    console.log("Data-----",DataSearch)
    const [text,setText]= useState("")
    const [filtered, setFiltered] = useState([]);
    const handle = () => {
        setText(filtered)
    }

    console.log("text----", text)
    
    useEffect(() => {
        
        setFiltered(DataSearch);
        
    },[])
    
    useEffect(() => {
        const result = DataSearch.filter((item) => 
         item.title.toLowerCase().includes(text.toLocaleLowerCase()))
        setFiltered(result)
    }, [text]);
    useEffect(() => {
        const result = DataSearch.filter((item) => 
          item.title && item.desc.toLowerCase().includes(text.toLocaleLowerCase()))
        setFiltered(result)
    }, [text]);
    


    console.log("fD-----", filtered)
    

    return (
        <div>
        
        <section className='py-4 contener '>
        <div className='row jastify-content'>

            <div className='col-12 mb-5' > 
            <div className=''>
                <Button onClick={(e)=> handle(filtered(e))} > Search</Button>
                 <input type="text" className='from contorol'
                
                onChange ={(e)=> setText(e.target.value)}
                />
        

            </div>

            </div>
         
         {filtered.map((item)=>{
             return( 
             <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4  '>
             <div className='card p-0 voerflow-hideen h-100 shadow  bg-warning '>
                 <img src={item.img} alt="img" className='card-img-top img-fluid bg-info' /> 
                 <div className='card-body'>
                      <h5 className='card-title'> {item.title}</h5>
                      <p className='card-text'>{item.desc}</p>
                      <Button>Buy</Button> <Button>Add to Cart</Button>

                 </div>


             </div>

         </div>

             );
         })}
        
        
        </div>
        </section>
        </div>
    );
};

export default Search;