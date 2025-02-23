"use client"
import { Grid, GridColumn } from "@progress/kendo-react-grid"
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1 and its key features.",
    image: "/placeholder.svg",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2 and its key features.",
    image: "/placeholder.svg",
  },
  {
    title: "Project 3",
    description: "A brief description of project 3 and its key features.",
    image: "/placeholder.svg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <Grid
          data={projects}
          style={{
            height: "400px",
          }}
        >
          <GridColumn
            field="title"
            title="Project"
            cell={(props) => (
              <td>
                <Card>
                  <CardBody>
                    <CardTitle>{props.dataItem.title}</CardTitle>
                    <img
                      src={props.dataItem.image || "/placeholder.svg"}
                      alt={props.dataItem.title}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                    <p>{props.dataItem.description}</p>
                  </CardBody>
                </Card>
              </td>
            )}
          />
        </Grid>
      </div>
    </section>
  )
}

