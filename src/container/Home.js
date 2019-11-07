import React, { Component } from 'react'
import {Link} from 'react-router-dom';  
import {BrowserRouter as Router,Route} from 'react-router-dom';
import All from '../Content/All';
import Jinghua from '../Content/Jinghua';
import Share from '../Content/Share';
import Wenda from '../Content/Wenda';
import Job from '../Content/Job';
import Text from '../Content/Text';
import Detail from '../Content/Detail'

import '../index.css';


export default class Home extends Component {
    
    render() {
        return (
            <Router>
                <div>
                    <div className='header2'>
                        <Link to='/home/all'>全部</Link>
                        <Link to='/home/jinghua'>精华</Link>
                        <Link to='/home/share'>分享</Link>
                        <Link to='/home/wenda'>问答</Link>
                        <Link to='/home/job'>招聘</Link>
                        <Link to='/home/text'>客户端测试</Link>

                    </div>
                    <div >
                        <Route path='/home/all' component={All}/>
                        <Route path='/home/jinghua' component={Jinghua}/>
                        <Route path='/home/share' component={Share}/>
                        <Route path='/home/wenda' component={Wenda}/>
                        <Route path='/home/job' component={Job}/>
                        <Route path='/home/text' component={Text}/>
                        <Route path='/detail/:id' component={Detail}/>
                    
                    </div>
                
                </div>

            </Router>
            
            
        )
    }
}
