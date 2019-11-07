import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Login extends Component {
    render() {
        return (
            <div className="panel">
                <div className='header3'>
                    <ul>
                        <li className='ll'>
                            <Link to='/home/all' style={{color:"#80BD01"}}>主页</Link>
                            <span>/</span>
                        </li>
                        <li className='ll'>
                            <span>登录</span>
                        </li>
                    </ul>

                </div>
                <div className='inn'>
                    <form>
                        <div style={{marginTop:'80px'}}>
                            <span style={{color:"#000000",fontSize:'16px',float:'left',marginLeft:'85px'}}>用户名</span>
                            <input type='text' style={{color:'#000000', width:'280px',height:'30px',marginLeft:'20px'}}></input>
                        </div>
                        <div style={{marginTop:'40px'}}>
                            <span style={{color:"#000000",fontSize:'16px',float:'left',marginLeft:'100px'}}>密码</span>
                            <input type='text' style={{color:'#000000',width:'280px',height:'30px',marginLeft:'20px'}}/>
                        </div>
                        <div>
                            <Link to='/home/all'><button style={{color:'#000000',width:'100px',height:'30px',marginTop:'30px',marginLeft:'200px',backgroundColor:"#5BC0DE"}}>登陆</button></Link>
                            
                        </div>

                    </form>
                </div>
                
            </div>
        )
    }
}
