import '../App.css';



function Header(props) {
    return (<>
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)}>G M Medico</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>


   <div className="topnav">
   <div className="search-container">
    <form action=''>
      <input type='text' placeholder='search medicines and health products...' ></input>
      <button type='submit'>Go </button>
    </form>
    </div>
    </div>


     <div className='main'>
     
     </div>
 

        </>
    );
    
}

export default Header;
