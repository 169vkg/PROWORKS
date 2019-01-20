import React, { Component } from 'react';
import {connect} from 'react-redux';
import './../App.css';

class ProjectDesc extends Component {

  componentWillMount () {
    if(localStorage.getItem("user") === null)
      this.props.history.push('/login')
  }

  render() {
    let index = this.props.match.params['descId']
    let project = this.props.projects[index]
    return (
      <div className = "container">
        <button className="button" onClick={()=>this.props.history.goBack()}>Return to Page</button>
        {
          <div className="descContainer" key = {index}>
            <p>TITLE : </p>
      			<div>{project.title}</div>
            <p>PROJECT # : </p>
      			<div>{project.number}</div>
            <p>DESCRIPTION : </p>
            <div dangerouslySetInnerHTML = {{ __html: project.description === "" ? "N/A" :project.description}}></div>
            <p>MANAGER : </p>
      			<div>{project.manager.fullname}</div>
            <p>START DATE : </p>
      			<div>{project.startdate === "" ? "N/A" : project.startdate.split("-").reverse().join("-")}</div>
            <p>COMPANY : </p>
      			<div>{project.company.name}</div>
            <p>DUE DATE : </p>
            <div>{project.duedate === "" ? "N/A" : project.duedate.split("-").reverse().join("-")}</div>
            <p>TIME ALLOCATED : </p>
      			<div>{project.timeallocated}</div>
      		</div>
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

export default connect(mapStateToProps)(ProjectDesc);
