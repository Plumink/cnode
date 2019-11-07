import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topic/'+this.props.match.params.id,{method:'GET'})
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page !== this.props.match.params.page){
            fetch('https://cnodejs.org/api/v1/topic/'+this.props.match.params.id)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data})
            });
        }
    }
    render() {
        return (
            <div id='content'>
                <div className='panel'>
                    <div className='header2'>
                        <span className='topic_full'>
                            <span className='put_top'>置顶</span>
                            {this.state.data.title}
                        </span>
                        <div className='changes'>
                            <span>发布于六个月前</span>
                            <span>a5ting</span>
                            <span>55588次浏览</span>
                            <span>来自分享</span>
                        </div>
                    </div>
                </div>
                <div className='innertopic'>
                    <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                </div>
            </div>
            
            
            
        )
    }
}
