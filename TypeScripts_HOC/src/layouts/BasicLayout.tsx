
import React from 'react';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';
import { Switch, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { History } from 'history';
import { ContainerQuery } from 'react-container-query';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorBoundaryRoute from '../components/ErrorBoundaryRoute';
import Home from '../router/home/HomeAsync';
import routerconfig from '../RouterConfig';
import RouteEnum from '../constants/RouteEnum';
import './BasicLayout.scss';



interface PrivateRouteProps{
  path: string,
  component:any,
  isLogin: Boolean,
  history: History,
}
interface BasicLayoutProps{
  history: History,
  isMobile: Boolean,
}
interface IState {
  Collapse: Boolean
}

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

class PrivateRoute extends React.Component < PrivateRouteProps> {
  
  public render() {
    const { path, history } = this.props
    const isLogin = JSON.parse(localStorage.getItem('isLogin')) || false
      console.log('wqwqwq',history);
      if (isLogin) {
          return (
              <ErrorBoundaryRoute path={path} component={Home} />
          )
      }else{
          return (
              <Redirect from={path} to='/login'/>
          )
      }
  }
}

class BasicLayout extends React.Component <BasicLayoutProps, IState> {
  state: IState = { Collapse: true }
  getPageTitle() {
    let title = 'hehe';
    return title;
  }
  loginOut=()=>{
    window.localStorage.setItem('isLogin',JSON.stringify(false));
}
Collapse = () => {
  const { Collapse } = this.state
  this.setState({
    Collapse: !Collapse
  })
}
  public render() {
    const { history, isMobile } = this.props
    const { Collapse } = this.state
    console.log('isMobile',isMobile)
    const layout = (
      <div className="BasicLayout">
            <div style={{display:'flex'}}>
            { Collapse && isMobile 
            ?
            null 
            : (
                <div className='side'>
                  <ul>
                    <li><Link to={RouteEnum.Login} onClick={this.loginOut}>登出</Link></li>
                    <li><Link to={RouteEnum.JSL}> HOOKS </Link></li>
                  </ul>
                </div>
                )
            }
                <div style={{flex: 1, minHeight: '100vh'}}>
                <div className='heaerd'> <button onClick={ this.Collapse } style={{ cursor: 'pointer' }}> 打开 or 关闭 </button></div>
                  <ErrorBoundary>
                    <Switch>
                      {routerconfig.map((item, index) => (
                          <ErrorBoundaryRoute
                            key={index}
                            path={item.path}
                            component={item.component}
                            exact={item.exact}
                          />
                        ))}
                      <PrivateRoute isLogin={false} history={history}  path='/' component={Home}/>
                    </Switch>
                  </ErrorBoundary>
                  </div>
              </div>
        </div>
    )
    return (
      <>
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
      </>
    )
  }
}

export default BasicLayout;
