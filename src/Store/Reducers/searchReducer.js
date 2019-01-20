import projects from './../../Utility/projects.json';

const initialState = {
	projects : projects
}

const searchReducer = (state = initialState , action) => {
	if(action.type === 'PROJECT TITLE' && action.value !=="") {
		let data = {...initialState}
		const newData = data.projects.filter(project => {
			const projectTitle = project.title.toUpperCase()
			const fetchedProjectTitle = action.value.toUpperCase()
			return projectTitle.indexOf(fetchedProjectTitle) >-1
		})
		return {
			...state,
			projects : newData
		}
	}
	if(action.type === 'PROJECT #' && action.value !=="") {
		let data = {...initialState}
		const newData = data.projects.filter(project => {
			const projectNumber = project.number
			const fetchedProjectNumber = action.value
			return projectNumber.indexOf(fetchedProjectNumber) >-1
		})
		return {
			...state,
			projects : newData
		}
	}
	if(action.type === 'MANAGER' && action.value !=="") {
		let data = {...initialState}
		const newData = data.projects.filter(project => {
			const projectManager = project.manager.fullname.toUpperCase()
			const fetchedProjectManager = action.value.toUpperCase()
			return projectManager.indexOf(fetchedProjectManager) >-1
		})
		return {
			...state,
			projects : newData
		}
	}
	if(action.type === 'START DATE' && action.value !=="") {
		let data = {...initialState}
		const newData = data.projects.filter(project => {
			const projectStartDate = project.startdate
			const fetchedProjectStartDate = action.value.toUpperCase()
			return projectStartDate.indexOf(fetchedProjectStartDate) >-1
		})
		return {
			...state,
			projects : newData
		}
	}
	if(action.type === 'END DATE' && action.value !=="") {
		let data = {...initialState}
		const newData = data.projects.filter(project => {
			const projectDueDate = project.duedate
			const fetchedProjectDueDate = action.value
			return projectDueDate.indexOf(fetchedProjectDueDate) >-1
		})
		return {
			...state,
			projects : newData
		}
	}
	if(action.type === 'COMPANY' && action.value !=="") {
		let data = {...initialState}
		const newData = data.projects.filter(project => {
			const projectCompany = project.company.name.toUpperCase()
			const fetchedProjectCompany = action.value.toUpperCase()
			return projectCompany.indexOf(fetchedProjectCompany) >-1
		})
		return {
			...state,
			projects : newData
		}
	}
	if(action.type === 'DEFAULT' && action.value ==="") {
		return initialState
	}
	else {
		return initialState
	}
}

export default searchReducer
