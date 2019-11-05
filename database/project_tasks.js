class ProjectTasks {
    constructor(projectId, projectTaskReferenceIds, hours) {
        this.ID = null;                                             //unique ID assigned by MSSQL
        this.ProjectId = projectId;                                 //ID from "project" table
        this.ProjectTaskReferenceIds = projectTaskReferenceIds;     //list of IDs from "project task references" table
        this.Hours = hours;                                         //hours assigned to each task
    }
};
module.exports = {
    ProjectTasks: ProjectTasks
}