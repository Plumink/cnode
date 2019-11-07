import React, { Component } from 'react';
import {fetch} from 'whatwg-fetch';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import Detail from '../Content/Detail';


export default class All extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=1',{method:'GET'})
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        })
    }

    handleclick=(item)=>{
        console.log(item);
        fetch('https://cnodejs.org/api/v1/topics?page='+item,{method:'GET'})
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        })

    }
    
    
    render() {
        return (
            <div className='topic_list'>
                {
                    this.state.data.map((item,idx)=>
                        <div className='cell1' key={idx}>
                            <a>
                                <img src={item.author.avatar_url} />
                            </a>
                            <span className='count'>
                                <span className='count1'>{item.reply_count}</span>
                                /
                                <span className='count2'>{item.visit_count}</span>
                            </span>
                            <div className='little_total'>
                                <span>置顶</span>
                                <Link to={`/detail/${item.id}`}>{item.title}</Link>
                            </div>   
                        </div>
                    )
                }
                <div className='tab'>
                    <ul>
                        {
                            [1,2,3,4,5,6,7,8,9,10].map((item)=>
                                <li  onClick={()=>{return this.handleclick(item)}}>
                                    <a>{item}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
