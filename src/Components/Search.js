const Search=(props)=>{
    return(
        <div className='search' style={{width:"100%"}}>
          <div className='mb-3 topSection'>
            <a className="JudulWeb">FinProH8</a>
            <div className="pencarian">
              <input type="text" className="form-control" style={{display:"block", width:"100%"}} id="title" placeholder='Search Movie' value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress} required={true}/>
            </div>
            
          </div>
        </div>
    );
}
export default Search;