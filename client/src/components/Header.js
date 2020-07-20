import React, {Component} from 'react';
import {connect}  from 'react-redux';
import {Link} from 'react-router-dom';
//class based component.
class Header extends Component {
    //auth has whether the user is logged in or not, which we got from redux store(ie, connect)
    renderContent(){
        switch(this.props.auth){
            case null:
                return ;
            case false:
                return (
                    <li> <a href = "/auth/google"> Login With Google </a> </li>
                );
            default:
                return <li> <a href = "/api/logout"> Logout </a> </li> ;
        }
    }
    render() {
        return (
            <nav>
                <div className = "nav-wrapper"> 
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className = "left brand-logo"
                    > 
                        Emaily
                    </Link>
                    <ul className = "right"> 
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>  
        );
    }
}
//gets called with the state out of redux store
//return the object that will be passes to Header as props.
function mapStateToProps({auth}){
    return {auth};
}
export default connect(mapStateToProps)(Header);