import { ExternalLink, ArrowRight } from "lucide-react"

const Projects = [
    {
        id : 1,
        title : "White and Dark",
        description : "A visually striking project that explores the contrast between light and darkness, using a combination of monochromatic color schemes, dramatic lighting, and bold compositions.",
        image : "./projects/Project_1.jpg",
        Link : "#",
    },
    {
        id : 2,
        title : "Nature Photography",
        description : "A collection of stunning nature photographs capturing the beauty and diversity of the natural world, showcasing landscapes, wildlife, and seasonal changes.",
        image : "./projects/Project_2.jpg",
        Link : "#",
    },
    {
        id : 3,
        title : "Drone Footage",
        description : "A series of aerial shots captured using a drone, showcasing breathtaking views of landscapes, architecture, and natural environments from unique perspectives.",
        image : "./projects/Project_3.jpg",
        Link : "#",
    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                     Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and creativity as a VFX developer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex space-x-3">
                                    <a
                                    href={project.Link} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                    <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check Out More <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    )
}