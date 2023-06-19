import { useReducer, useState } from "react"

const initialState = {
    empno:0,
    ename:"",
    deptno:0,
    sal:0
}

const reducer = (state, action) => {
    switch(action.type) {
         case 'update':
            return {...state, [action.fld]:action.value }
         case 'reset':
            return initialState
        default :
            return 0;
    }

}

let EmpRestApi = () => {

    const[emp, dispatch] = useReducer(reducer , initialState );
    const [msg,setMsg] = useState("......")

    const submitData = (ev) => {
        ev.preventDefault()
        const reqOptions={
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({empno:emp.empno,ename:emp.ename,deptno:emp.deptno,sal:emp.sal}),
        }
        fetch("http://localhost:9000/inemp",reqOptions)
        .then(res => res.text())
        .then(data => setMsg(data) )
    }
  


    return (
        <div>
            <h1> Emp Form </h1>
            <form>
                Enter empno :
                <input type="number" name="empno" value={emp.empno} 
                 onChange={(e)=>{dispatch({type:"update",fld:'empno',value:e.target.value})}} />
                <br/>
                Enter ename :
                <input type="text" name="ename" value={emp.ename} 
                 onChange={(e)=>{dispatch({type:'update',fld:'ename',value:e.target.value})}} />
                <br/>
                Enter deptno :
                <input type="number" name="deptno" value={emp.deptno} 
                 onChange={(e)=>{dispatch({type:'update',fld:'deptno',value:e.target.value})}} />
                <br/> 
                Enter sal :
                <input type="number" name="sal" value={emp.sal} 
                 onChange={(e)=>{dispatch({type:'update',fld:'sal',value:e.target.value})}} />
                <br/> 
                <input type="submit" value="Submit"
                    onClick={(e)=>{ submitData(e) }} />
                
                <input type="button" value="Clear" 
                  onClick={()=>{dispatch({type:'reset'})}} />
            </form>
            <p>{msg}</p>
        </div>
    )

}
export default EmpRestApi;