export const HeroSection = () => {
    return (
        <section 
         id="hero"
         className="relative min-h-screen flex flex-row items-center justify-center px-8 py-12 mb-16"
        >
            <div className="container max-w-6xl mx-auto text-start z-10">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground opacity-0 animate-fade-in">
                        Hey <span className="text-primary"> there!</span>
                    </h2>

                    <div className="text-4xl md:text-5xl font-bold text-foreground">
                        <span className="opacity-0 animate-fade-in-delay-1">I'm a</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2"> Photographer</span>
                    </div>

                    <p className="text-lg md:text-xl font-medium text-foreground opacity-0 animate-fade-in-delay-3">
                        I capture moments that tell stories and create lasting memories.
                    </p>

                    <div className="flex flex-row gap-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects">
                            <button className="bg-primary text-background font-medium text-md px-4 py-2 rounded-2xl hover:bg-primary/10 hover:text-primary border-primary border-2">
                                View My Work
                            </button>
                        </a>
                        <a href="#contact">
                            <button className="bg-background text-foreground font-medium text-md px-4 py-2 rounded-2xl hover:bg-primary/90 hover:text-background border-primary border-2">
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl md:relative absolute inset-0 z-0">
                <img 
                 src="/assets/Hero.png" 
                 alt="Hero Background" 
                 className="w-full h-full object-cover md:opacity-90 opacity-40"
                />
            </div>

            
        </section>

    )
}