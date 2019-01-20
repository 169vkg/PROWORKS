import React, { Component } from 'react';
import ListView from './../Components/ListView/ListView';
import Input from './../Components/Input/Input';
import {connect} from 'react-redux';
import './../App.css';
import dropDown from './../Utility/dropDown.json';
import LOGOUT from './../Utility/helper';

class ProjectList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropValue : dropDown[0].value,
      searchValue : ""
    }
  }

  handleChange = event => {
    this.setState({dropValue: event.target.value, searchValue : ""})
    this.props.onSearch("DEFAULT","")
  }

  componentWillMount () {
    this.props.onSearch("DEFAULT","")
    if(localStorage.getItem("user") === null)
      this.props.history.push('/login')
  }

  SearchHandler = (e, actionType) => {
    let { searchValue} = this.state
    this.setState({searchValue :  e.target.value})
    this.props.onSearch(actionType, e.target.value)
  }

  render() {
    let {dropValue} = this.state
    let placeholder = "Search Filter"
		return (
      <div className = "container">
        <div className="inputSearch">
          <input type ='text'
            name = 'search'
            value={this.state.searchValue}
            onChange = {(e)=>this.SearchHandler(e, dropValue)}
            placeholder = {placeholder} />
          <select value={dropValue} onChange={this.handleChange}>
            {dropDown.map((option)=>(
  						<option key={option.value} value={option.value}>
  							{option.displayValue}
  						</option>
  					))}
          </select>
          <button className="button custom" onClick={()=>LOGOUT(this.props)}>Logout</button>
        </div>
				<div className="containerHeading">
  				<div>Title</div>
  				<div>Project #</div>
  				<div>Manager</div>
  				<div>Start date</div>
  				<div>End date</div>
  				<div>Company</div>
		    </div>
				{
          this.props.projects.length > 0
          ?
            <ListView data = {this.props} />
          :
            "No Data Found"
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects : state.searchRed.projects
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (type, val) => dispatch({type: type, value: val}),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
