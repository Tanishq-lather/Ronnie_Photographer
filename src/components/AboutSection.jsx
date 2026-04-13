import { Briefcase, Film, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-8 py-12 mb-12">
            <div className="container max-w-6xl mx-auto text-center z-10 ">

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 items-center">
                    <div className="space-y-6">
                        <h1 className="text-xl md:text-2xl font-semibold text-foreground">
                            Passionate Photographer 
                        </h1>
                        <p className="text-md md:text-lg font-medium text-foreground">
                            With over a decade of experience, I specialize in portrait, landscape, and event photography. My work has been featured in various publications and exhibitions, and I am dedicated to capturing the beauty and emotion in every moment.
                        </p>
                        <a href="#contact">
                            <button className="cosmic-button">
                                Contact Me
                            </button>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-6"> 
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Film className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Technical Proficiency
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Understanding of various photography techniques.   
                                    </p>
                                </div>
                            </div>
                        </div>  

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Composition & Lighting
                                    </h4>
                                    <p className="text-muted-foreground">
                                        An great eye for composition and lighting.
                                    </p>
                                </div>
                            </div>
                        </div>  

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Creativity & Vision
                                    </h4>
                                    <p className="text-muted-foreground">
                                        The ability to see things differently.
                                    </p>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                </div>

                 

            </div>
        </section>
    )
}