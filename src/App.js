import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Detail from './Content/Detail';
import Login from './container/Login';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='all'>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                
                    <div className="left">
                        <Route path='/home/all' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        
                        
                    </div>
                    <div className="right">
                        <div className='panel' >
                            <div className='inner'>
                                <p>CNode：Node.js专业中文社区</p>
                                <div>
                                    您可以
                                    <a style={{color: '#778087'}} href='https://cnodejs.org/signin'>登陆</a>
                                    或
                                    <a style={{color: '#778087'}} href='https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9'>注册</a>
                                    ,也可以
                                    <a href='https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9'>
                                        <span className='span-info'>
                                            通过 GitHub 登陆
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* 登陆或注册 */}
                        <div className='panel' >
                            <div className='inner ads'>
                                <a><img style={{width:"270px",height:"65px"}} src='//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_'/></a>
                                <div className='sep10'></div>
                                <a><img style={{width:"270px",height:"65px"}} src='//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS'/></a>
                                <div className='sep10'></div>
                                <a><img style={{width:"270px",height:"65px"}} src='//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-'/></a>
                                <div className='sep10'></div>

                            </div>
                        </div>
                        {/* 图片链接 */}
                        <div className='panel'>
                            <div className='header1'>
                                <span className='col_fade'>无人回复的话题</span>
                            </div>
                            <div className='other'>
                                <ul className='unstyled'>
                                    <li>
                                        <div>
                                            <a className='top_title' title='Hackers周刊第十期（2019-11-03）'>Hackers周刊第十期（2019-11-03）</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a className='top_title' title='写了个在测试中，控制函数日志打印的npm'>写了个在测试中，控制函数日志打印的npm</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a className='top_title' title='Hackers周刊第十期（2019-11-03）'>Hackers周刊第十期（2019-11-03）</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a className='top_title' title='Hackers周刊第十期（2019-11-03）'>Hackers周刊第十期（2019-11-03）</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a className='top_title' title='Hackers周刊第十期（2019-11-03）'>Hackers周刊第十期（2019-11-03）</a>
                                        </div>
                                    </li>

                                </ul>

                            </div>

                        </div>
                        {/* 无人回复的话题 */}
                        <div className='panel'>
                            <div className='header1'>
                                <span className='fade'>积分榜</span>
                                &nbsp;
                                <a className='dark'>TOP 100 >></a>
                            </div>
                            <div className='other'>
                                <ol>
                                    <li>
                                        <span className='score'>21745</span>
                                        <span className='user_name'>
                                            <a>i5ting</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='score'>21745</span>
                                        <span className='user_name'>
                                            <a>i5ting</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='score'>21745</span>
                                        <span className='user_name'>
                                            <a>i5ting</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='score'>21745</span>
                                        <span className='user_name'>
                                            <a>i5ting</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='score'>21745</span>
                                        <span className='user_name'>
                                            <a>i5ting</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='score'>21745</span>
                                        <span className='user_name'>
                                            <a>i5ting</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='score'>21745</span>
                                        <span className='user_name'>
                                            <a>i5ting</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='score'>21745</span>
                                        <span className='user_name'>
                                            <a>i5ting</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='score'>21745</span>
                                        <span className='user_name'>
                                            <a>i5ting</a>
                                        </span>
                                    </li>
                                </ol>

                            </div>
                        </div>
                        {/* 积分榜 */}
                        <div className='panel'>
                            <div className='header1'>
                                <span className='fade'>友情社区</span>
                            </div>
                            <div className='other'>
                                <ol>
                                    <li>
                                        <img src='//static2.cnodejs.org/public/images/ruby-china-20150529.png' />
                                    </li>
                                    <div className='sep10'></div>
                                    <li>
                                        <img src='//static2.cnodejs.org/public/images/golangtc-logo.png' />
                                    </li>
                                    <div className='sep10'></div>
                                    <li>
                                        <img src='//static2.cnodejs.org/public/images/phphub-logo.png' />
                                    </li>
                                    <div className='sep10'></div>
                                    <li>
                                        <img src='//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK' />
                                    </li>
                                </ol>

                            </div>
                        </div>
                        {/* 友情社区 */}
                        <div className='panel'>
                            <div className='header1'>
                                <span className='fade'>客户端二维码</span>
                            </div>
                            <div className='other1'>
                                <img  src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                                <br/>
                                <a>客户端源代码地址</a>

                            </div>
                        </div>
                         {/* 客户端二维码 */}
                    </div>
                    
                </div>

                </div>
                

                
                {/* <div className='footer'>
                    <div className='footer_main'>
                        <div className='links'>
                            <span style={{fontsize:'13px',color:'#888888'}}>RSS</span>
                            <span>&nbsp;|&nbsp;</span>
                            <span style={{color:'#888888'}}>源码地址</span>
                        </div>
                        <div>
                            <p>
                            CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
                            </p>
                            <p>服务器赞助商为
                                <img style={{width:'92px',height:'18.4px'}} src='//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9'/>
                                ,存储赞助商为
                                <img style={{width:'115px',height:'43.7px'}} src='//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX'/>
                                ,由
                                <img style={{width:'166px',height:'54px'}} src='//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD'/>
                                提供应用性能服务。
                            </p>
                            <p>
                                新手搭建 Node.js 服务器，推荐使用无需备案的 
                            </p>
                        </div>
                    </div>
                </div> */}
                
            </Router>
        )
    }
}