'use strict'

const Project = use('App/Models/Project')

class ProjectController {
  async index () {
    const projects = await Project.all()
    return projects
  }

  async store ({ request }) {
    const data = request.only(['title', 'description'])

    const project = await Project.create(data)

    return project
  }

  async show ({ params }) {
    const project = await Project.find(params.id)
    return project
  }

  async update ({ params, request }) {
    const project = await Project.find(params.id)
    const data = request.only(['title', 'description'])

    project.merge(data)
    await project.save()

    return project
  }

  async destroy ({ params }) {
    const project = await Project.find(params.id)
    await project.delete()

    return project
  }
}

module.exports = ProjectController
