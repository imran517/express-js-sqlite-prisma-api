const model = require('./model');

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Service {
    constructor () { 
        this.service = "Service";
        this.method = "";
    }

    async getTasks () {   
        this.method = "getTasks";
        try {
            const result = await prisma.task.findMany();
            let serviceResult  = { status:"success", message: "Tasks retrieved.",service: this.service, method: this.method, data: result };
            console.error(serviceResult);
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            return serviceResult;
        }    
    }

    async getTask (id) {
        this.method = "";
        try {
            const result = await prisma.task.findUnique({
                where: {
                  id: Number(id),
                },
              })
            let serviceResult  = { status:"success", message: "Task retrieved.",service: this.service, method: this.method, data: result };
            console.error(serviceResult);
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            return serviceResult;
        }  
    }

    async addTask (task) {
        try {
            const result  = await prisma.task.create({
                data: {
                    name: task.name,
                    description: task.description,
                    priority: task.priority,
                    status: task.status
                }
              })
            let serviceResult  = { status:"success", message: "Tasks added.",service: this.service, method: this.method, data: result };
            console.error(serviceResult);
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            return serviceResult;
        }  
    }

    async updateTask (task) {
        try {
            const result = await prisma.task.update({
                where: {
                  id: Number(task.id),
                },
                data: {
                  name: task.name,
                  description: task.description
                },
              })
            let serviceResult  = { status:"success", message: "Tasks updated.",service: this.service, method: this.method, data: result };
            console.error(serviceResult);
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            return serviceResult;
        }  
    }
    
    async deleteTask (task) {
        try {
            const result = await prisma.task.delete({
                where: {
                  id: Number(task.id),
                }
              })
            let serviceResult  = { status:"success", message: "Tasks deleted.",service: this.service, method: this.method, data: result };
            console.error(serviceResult);
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            return serviceResult;
        }  
    }
}

module.exports = Service;
