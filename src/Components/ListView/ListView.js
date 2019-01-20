import React from 'react';
import './ListView.css';
import { Link, Route } from "react-router-dom";
import ProjectDesc from './../../Pages/ProjectDesc'

const ListView = props => props.data.projects.map((project, index) => {
	return(
		<Link className="listContainer" key = {index} to={props.data.match.path+'/'+`${index}`}>
			<div>{project.title}</div>
			<div>{project.number}</div>
			<div>{project.manager.fullname}</div>
			<div>{project.startdate === "" ? "N/A" : project.startdate.split("-").reverse().join("-")}</div>
			<div>{project.duedate === "" ? "N/A" : project.duedate.split("-").reverse().join("-")}</div>
			<div>{project.company.name}</div>
		</Link>
	)}
)

export default ListView
