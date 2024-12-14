import { useEffect,useState } from 'react';
import './search.css';

export default function Search(){

    
            const [data,setdata] = useState([]);
            const [search,setSearch]= useState('');
            const [loader,setLoader] = useState(true);

           const users =  useEffect(()=>
        {
            setTimeout(() => {
                
                setLoader(true);
                fetch('https://jsonplaceholder.typicode.com/users')
                .then((response)=>response.json())
                .then((data)=> setdata(data));
                 setLoader(false);
                 document.getElementById('theads').style.display = 'inline-block'; 
            }, 1500);
            document.getElementById('theads').style.display = 'none';
        },[])

        function getData(datas){
            console.log(datas);
            const filteredData = data.filter(item => ((item.name).toLowerCase()).includes(datas) || ((item.username).toLowerCase()).includes(datas));           
            console.log(filteredData);
            setdata(filteredData);
            }
            function clearSearch(){
                // document.getElementById('input').value.reset();
            }
        
    return(

        <>   
          
        <h1>This is search bar task</h1>
        <div className="input-box" id='box'>
            <label><input type="text" id='input' placeholder="enter your search name" onChange = {(e) => {getData(e.target.value)}} /> </label> 
            <button onClick={clearSearch}> X </button>
        </div>

        { loader && <div className='loader'> </div> }
        
            <table id='theads'>
                <thead >
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                    <th>zipcode</th>

                </tr>
                
                </thead>
                
                <tbody>  
                    {    
                    data.filter((user) => ((user.name).toLowerCase() || (user.username).toLowerCase()).includes(search)).map((val) =>{        
   
                        return(
                            
                            <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                            <td>{val.address.city}</td>
                            <td>{val.address.zipcode}</td>
                            </tr>
                        )
                    })
                }
                </tbody>

            </table>

        </>
    )

   

}