import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Building2,
    CheckCircle,
    ChevronRight,
    Clock,
    HardHat,
    Home,
    Mail,
    MapPin,
    Phone,
    Star,
    Truck,
    Users,
    Wrench,
} from "lucide-react"

export default function ConstructionLandingPage() {
    return (
        <div className="flex  flex-col mb-[-10rem]">


            <main className="flex-1 ">
                {/* Hero Section */}
                <section className="relative h-[60vh] px-[2rem]">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/new/window.jpeg"
                            alt="Construction site with modern buildings"
                            fill
                            className="object-cover brightness-50"
                            priority
                        />
                    </div>
                    <div className="container items-center relative z-10 py-4 md:py-12 lg:py-12">
                        <div className="mx-auto max-w-3xl space-y-5 text-white">
                            <h1 className="text-2xl md:text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Building Tomorrow&apos;s Infrastructure Today
                            </h1>
                            <p className="text-lg md:text-xl">
                                With over 5 years of experience, Ramadi Empire Construction delivers exceptional quality, innovative
                                solutions, and sustainable building practices for commercial and residential projects.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="font-semibold cursor-pointer">
                                    Request a Consultation
                                </Button>
                                <Button size="lg" variant="outline" className="text-white bg-black border-white hover:bg-white">
                                    View Our Projects
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 " />
                </section>



                {/* About Section */}
                <section id="about" className="py-16 md:py-24 px-[2rem]">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                                    About Ramadi Empire
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    A Legacy of Excellence in Construction Since 2019
                                </h2>
                                <p>
                                    Ramadi Empire (Pty) Ltd is a proudly 100% black-owned construction and consultancy company with
                                    registration number 2020/504715/07, founded by Ramadi Mukondeleli.
                                </p>
                                <p>
                                    Our inception stems from our passion to create and implement solutions that address the core needs of
                                    our people and communities we serve. Our dedication to bringing ease, convenience, and superior
                                    quality to our clients is etched in every project we undertake.
                                </p>
                                <p>
                                    Our diverse portfolio is the result of extensive experience across a variety of industries.
                                    Specialising in Civil and Construction works, we provide a wide range of services that include Plant
                                    Hire, Hygiene Services, Laundry Services, and Project Management.
                                </p>
                                <p>
                                    Ramadi Empire is also a proud member of CIDB, with a grading of 1GB and PE 1CE. These memberships not
                                    only underscore our credibility, but they also highlight our commitment to meeting industry standards
                                    and delivering excellence in all our projects.
                                </p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>5+ Years Experience</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>100+ Projects Completed</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>100% Safety Record</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Award-Winning Projects</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-lg overflow-hidden">
                                <Image
                                    src="/new/rc1.jpeg"
                                    alt="Ramadi Empire Construction team at work"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 md:py-24 bg-muted/30 pl-0 md:pl-[2rem] ">
                    <div className="container">
                        <div className="max-w-3xl mx-auto mb-16 px-5">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                                Our Services
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                Comprehensive Construction Solutions
                            </h2>
                            <p className="text-muted-foreground">
                                From groundbreaking to ribbon-cutting, Ramadi Empire Construction offers end-to-end construction services
                                tailored to your specific needs. Our expert team delivers excellence at every stage of the building
                                process.
                            </p>
                        </div>

                        <Tabs defaultValue="commercial" className="w-full ">
                            <div className="flex justify-center mb-8">
                                <TabsList className="grid w-full max-w-2xl grid-cols-3 ">
                                    <TabsTrigger value="commercial">Commercial</TabsTrigger>
                                    <TabsTrigger value="residential">Residential</TabsTrigger>
                                    <TabsTrigger value="industrial">Industrial</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="commercial" className="space-y-8 mx-auto items-center px-5 md:pl-[4rem]">
                                <div className="grid md:grid-cols-3 gap-6 ">
                                    <Card>
                                        <CardContent className="p-6 space-y-4">
                                            <Building2 className="h-10 w-10 text-primary" />
                                            <h3 className="text-xl font-bold">Office Buildings</h3>
                                            <p className="text-muted-foreground">
                                                Modern, efficient office spaces designed for productivity and employee well-being. From
                                                corporate headquarters to co-working spaces, we create environments that inspire.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Smart building technology integration</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Energy-efficient HVAC systems</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Flexible floor plans for evolving needs</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 space-y-4 ">
                                            <Truck className="h-10 w-10 text-primary" />
                                            <h3 className="text-xl font-bold">Retail Construction</h3>
                                            <p className="text-muted-foreground">
                                                Attractive, functional retail spaces that enhance customer experience and maximize sales
                                                potential. We understand the unique requirements of retail environments.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Custom display and fixture installation</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Storefront design and implementation</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>ADA compliance and accessibility</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 space-y-4">
                                            <Users className="h-10 w-10 text-primary" />
                                            <h3 className="text-xl font-bold">Hospitality Projects</h3>
                                            <p className="text-muted-foreground">
                                                Luxurious, welcoming spaces for hotels, restaurants, and entertainment venues. We create
                                                environments that leave lasting impressions on guests.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>High-end finishes and materials</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Specialized acoustic treatments</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Custom lighting and ambiance design</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-4">Commercial Construction Expertise</h3>
                                    <p className="mb-4">
                                        At Ramadi Empire Construction, we understand that commercial projects require a unique approach. Our
                                        commercial construction services are designed to minimize disruption to your business operations
                                        while delivering exceptional results on time and within budget.
                                    </p>
                                    <p className="mb-4">
                                        We specialize in fast-track construction methods that reduce project timelines without compromising
                                        on quality. Our team works closely with architects, engineers, and stakeholders to ensure that every
                                        aspect of your commercial project meets your specific requirements and exceeds industry standards.
                                    </p>
                                    <p>
                                        From initial concept to final inspection, our comprehensive commercial construction services cover
                                        every aspect of your project. We handle permitting, code compliance, material procurement,
                                        construction management, and quality control, providing you with a seamless building experience.
                                    </p>
                                </div>
                            </TabsContent>

                            <TabsContent value="residential" className="space-y-8">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <Card>
                                        <CardContent className="p-6 space-y-4">
                                            <Home className="h-10 w-10 text-primary" />
                                            <h3 className="text-xl font-bold">Custom Homes</h3>
                                            <p className="text-muted-foreground">
                                                Bespoke residences tailored to your lifestyle and preferences. We bring your dream home to life
                                                with meticulous attention to detail and craftsmanship.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Personalized design collaboration</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Premium material selection</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Smart home technology integration</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 space-y-4">
                                            <Wrench className="h-10 w-10 text-primary" />
                                            <h3 className="text-xl font-bold">Renovations</h3>
                                            <p className="text-muted-foreground">
                                                Transform your existing space into something extraordinary. Our renovation services breathe new
                                                life into older homes while preserving their character.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Kitchen and bathroom remodels</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Structural modifications</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Historic home restoration</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 space-y-4">
                                            <Building2 className="h-10 w-10 text-primary" />
                                            <h3 className="text-xl font-bold">Multi-Family Housing</h3>
                                            <p className="text-muted-foreground">
                                                Quality apartment buildings, condominiums, and townhouses designed for community living. We
                                                create spaces that foster connection while ensuring privacy.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Efficient space utilization</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Communal area design</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Sound insulation between units</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-4">Residential Construction Excellence</h3>
                                    <p className="mb-4">
                                        Your home is more than just a building—it&apos;s where life happens. At Ramadi Empire Construction, we
                                        approach residential projects with this understanding, creating spaces that perfectly balance
                                        functionality, aesthetics, and comfort.
                                    </p>
                                    <p className="mb-4">
                                        Our residential construction team works closely with homeowners throughout the building process,
                                        ensuring clear communication and attention to your specific needs and preferences. We believe in
                                        transparency and collaboration, keeping you informed and involved at every stage.
                                    </p>
                                    <p>
                                        Whether you&apos;re building your dream home from the ground up or renovating your current space, our
                                        experienced team delivers exceptional craftsmanship and attention to detail. We use only the highest
                                        quality materials and advanced construction techniques to create homes that are beautiful, durable,
                                        and energy-efficient.
                                    </p>
                                </div>
                            </TabsContent>

                            <TabsContent value="industrial" className="space-y-8">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <Card>
                                        <CardContent className="p-6 space-y-4">
                                            <Building2 className="h-10 w-10 text-primary" />
                                            <h3 className="text-xl font-bold">Manufacturing Facilities</h3>
                                            <p className="text-muted-foreground">
                                                Purpose-built spaces designed for efficient production processes. We create facilities that
                                                optimize workflow and maximize productivity.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Production line layout optimization</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Heavy machinery foundations</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Specialized ventilation systems</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 space-y-4">
                                            <Truck className="h-10 w-10 text-primary" />
                                            <h3 className="text-xl font-bold">Warehouses & Distribution</h3>
                                            <p className="text-muted-foreground">
                                                Spacious, well-designed storage and distribution facilities. We build warehouses that streamline
                                                logistics and improve operational efficiency.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>High-bay storage solutions</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Loading dock design and construction</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Temperature-controlled environments</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6 space-y-4">
                                            <Wrench className="h-10 w-10 text-primary" />
                                            <h3 className="text-xl font-bold">Research & Development</h3>
                                            <p className="text-muted-foreground">
                                                Specialized facilities for innovation and scientific advancement. We create environments that
                                                foster discovery and technological progress.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Laboratory design and construction</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Clean room implementation</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>Specialized utility installations</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-4">Industrial Construction Specialization</h3>
                                    <p className="mb-4">
                                        Industrial construction demands specialized knowledge and capabilities. At Ramadi Empire Construction,
                                        we have the expertise and equipment to handle the most complex industrial projects, from
                                        manufacturing plants to distribution centers.
                                    </p>
                                    <p className="mb-4">
                                        Our industrial construction services focus on creating facilities that enhance operational
                                        efficiency while meeting strict safety and regulatory requirements. We understand the unique
                                        challenges of industrial environments and develop solutions that address your specific needs.
                                    </p>
                                    <p>
                                        From heavy-duty foundations to specialized mechanical systems, our team has the technical knowledge
                                        to execute industrial projects with precision. We work closely with engineers and industry
                                        specialists to ensure that your facility is built to support your operations and accommodate future
                                        growth.
                                    </p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Projects Section
                <section id="projects" className="py-16 md:py-24">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                                Our Portfolio
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Showcasing Our Finest Work</h2>
                            <p className="text-muted-foreground">
                                Browse through our portfolio of completed projects spanning various industries and scales. Each project
                                represents our commitment to excellence, innovation, and client satisfaction.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Oakridge Corporate Center",
                                    category: "Commercial",
                                    description:
                                        "A 12-story office building featuring sustainable design and state-of-the-art amenities.",
                                },
                                {
                                    title: "Riverside Residences",
                                    category: "Residential",
                                    description:
                                        "Luxury condominium complex with 45 units, featuring panoramic views and premium finishes.",
                                },
                                {
                                    title: "NexGen Manufacturing Plant",
                                    category: "Industrial",
                                    description:
                                        "120,000 sq ft manufacturing facility designed for maximum efficiency and worker safety.",
                                },
                                {
                                    title: "Parkview Medical Center",
                                    category: "Healthcare",
                                    description:
                                        "State-of-the-art medical facility with specialized treatment areas and healing gardens.",
                                },
                                {
                                    title: "Horizon Shopping Plaza",
                                    category: "Retail",
                                    description: "Modern shopping center with 35 retail spaces, food court, and outdoor gathering areas.",
                                },
                                {
                                    title: "Lakeside Hotel & Resort",
                                    category: "Hospitality",
                                    description: "200-room luxury hotel with conference center, spa facilities, and waterfront dining.",
                                },
                            ].map((project, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-lg">
                                    <div className="aspect-square w-full">
                                        <Image
                                            src={`/new/newc4.png`}
                                            alt={project.title}
                                            width={600}
                                            height={600}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end text-white">
                                        <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                            <div className="text-sm font-medium text-primary-foreground/80 mb-2">{project.category}</div>
                                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-sm text-white/80 mb-4 ">
                                                {project.description}
                                            </p>
                                            <Button variant="outline" size="sm" className="border-white text-white bg-black hover:bg-white/20">
                                                View Project
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button size="lg">View All Projects</Button>
                        </div>
                    </div>
                </section> */}

                {/* Process Section */}
                <section id="process" className="py-16 md:py-24 bg-muted/30 flex flex-col items-center justify-center mx-auto">
                    <div className="container flex flex-col items-center">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                                Our Process
                            </div>
                            <h2 className="text-3xl font-bold text-start tracking-tight sm:text-3xl mb-4 px-[2rem]">How We Bring Your Vision to Life</h2>
                            <p className="text-muted-foreground text-start px-[2rem]">
                                Our proven construction process ensures transparency, efficiency, and exceptional results. We guide you
                                through each phase of your project with clear communication and expert management.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto items-center justify-center px-5">
                            {[
                                {
                                    icon: <Clock className="h-10 w-10 text-primary" />,
                                    title: "Consultation & Planning",
                                    description:
                                        "We begin by understanding your vision, requirements, and budget. Our team conducts thorough site assessments and develops a comprehensive project plan.",
                                },
                                {
                                    icon: <HardHat className="h-10 w-10 text-primary" />,
                                    title: "Design & Engineering",
                                    description:
                                        "Our architects and engineers create detailed designs and blueprints, incorporating your feedback and ensuring compliance with all building codes and regulations.",
                                },
                                {
                                    icon: <Building2 className="h-10 w-10 text-primary" />,
                                    title: "Construction",
                                    description:
                                        "With approved plans in hand, our skilled construction teams bring your project to life, maintaining the highest standards of craftsmanship and safety.",
                                },
                                {
                                    icon: <CheckCircle className="h-10 w-10 text-primary" />,
                                    title: "Completion & Handover",
                                    description:
                                        "After thorough quality inspections and final touches, we proudly hand over your completed project, providing all necessary documentation and support.",
                                },
                            ].map((step, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-background rounded-lg p-6 h-full shadow-sm border">
                                        <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">
                                            <span className="text-primary mr-2">{index + 1}.</span> {step.title}
                                        </h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                    {index < 3 && (
                                        <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-border transform translate-x-4">
                                            <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-primary transform -translate-y-1/2"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-primary/5 rounded-lg p-6 md:p-8 text-center mx-5">
                            <h3 className="text-xl font-bold mb-4 text-start">Our Commitment to Excellence</h3>
                            <p className="mb-4 text-start">
                                At Ramadi Empire Construction, we believe that a well-defined process is the foundation of successful
                                construction projects. Our systematic approach ensures that every aspect of your project is carefully
                                planned and executed, minimizing surprises and maximizing satisfaction.
                            </p>
                            <p className="mb-4 text-start">
                                Throughout the construction process, we maintain open lines of communication, providing regular updates
                                and addressing any questions or concerns promptly. Our project management team uses advanced software to
                                track progress, manage resources, and ensure that your project stays on schedule and within budget.
                            </p>
                            <p className="mb-4 text-start">
                                We understand that construction projects can be complex and sometimes stressful. That&apos;s why we strive to
                                make the process as smooth and transparent as possible, handling all the details so you can focus on the
                                excitement of seeing your vision come to life.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Testimonials Section */}
                <section id="testimonials" className="py-16 md:py-24 flex flex-col items-center justify-center">
                    <div className="container flex flex-col items-center px-[1rem]">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                                Client Testimonials
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
                            <p className="text-muted-foreground">
                                Don&apos;t just take our word for it. Hear from clients who have experienced the Ramadi Empire difference
                                firsthand and see why they continue to recommend our services.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
                            {[
                                {
                                    name: "Michael Thompson",
                                    role: "CEO, Innovate Tech",
                                    quote:
                                        "Ramadi Empire Construction exceeded our expectations in every way. Their attention to detail and commitment to quality transformed our office space into a modern, functional environment that our employees love. The project was completed on time and within budget, with transparent communication throughout.",
                                },
                                {
                                    name: "Sarah Johnson",
                                    role: "Homeowner",
                                    quote:
                                        "Building our dream home with Ramadi Empire was an incredible experience. Their team guided us through every step of the process, from initial design to final touches. The craftsmanship is exceptional, and they were always responsive to our questions and requests. We couldn&apos;t be happier with our new home.",
                                },
                                {
                                    name: "David Chen",
                                    role: "Operations Director, Global Manufacturing",
                                    quote:
                                        "When we needed to expand our manufacturing facility, Ramadi Empire Construction delivered a solution that perfectly balanced functionality, efficiency, and cost-effectiveness. Their understanding of industrial requirements was impressive, and they completed the project with minimal disruption to our operations.",
                                },
                                {
                                    name: "Jennifer Williams",
                                    role: "Property Developer",
                                    quote:
                                        "I've worked with many construction companies over the years, but Ramadi Empire stands out for their professionalism and quality of work. They've become our go-to partner for all our development projects. Their ability to solve complex challenges and deliver exceptional results is unmatched.",
                                },
                                {
                                    name: "Robert Garcia",
                                    role: "Hotel Manager",
                                    quote:
                                        "The renovation of our hotel was a complex project with tight deadlines. Ramadi Empire not only completed the work on schedule but also maintained the highest standards of quality. Their team worked efficiently while minimizing disruption to our guests. The results have been transformative for our business.",
                                },
                                {
                                    name: "Lisa Patel",
                                    role: "Healthcare Administrator",
                                    quote:
                                        "Ramadi Empire Construction's expertise in healthcare facility construction was evident throughout our medical center project. They understood the unique requirements of our industry and created a space that enhances patient care and staff efficiency. Their attention to detail and quality control was exceptional.",
                                },
                            ].map((testimonial, index) => (
                                <div key={index} className="bg-muted/30 rounded-lg p-6 border shadow-sm flex flex-col ">
                                    <div className="flex items-start mb-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                            <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                                        </div>
                                        <div className="text-start mr-3">
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                        </div>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-primary text-primary text-center" />
                                        ))}
                                    </div>

                                    <blockquote className="mb-4 text-muted-foreground text-start">"{testimonial.quote}"</blockquote>
                                    <div className="flex items-center justify-center">


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-16 md:py-24 bg-muted/30 px-[1rem]">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                                Frequently Asked Questions
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Answers to Common Questions</h2>
                            <p className="text-muted-foreground text-start">
                                We&apos;ve compiled answers to questions we frequently receive about our services, process, and industry. If
                                you don't find what you're looking for, please don't hesitate to contact us.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {[
                                {
                                    question: "How long does a typical construction project take?",
                                    answer:
                                        "Project timelines vary significantly based on scope, complexity, and scale. A small renovation might take a few weeks, while a large commercial building could take 12-18 months. During our initial consultation, we'll provide a detailed timeline specific to your project, including key milestones and completion dates.",
                                },
                                {
                                    question: "Do you handle all necessary permits and approvals?",
                                    answer:
                                        "Yes, we manage the entire permitting process as part of our comprehensive service. Our team has extensive experience navigating local building codes and regulations. We prepare and submit all required documentation, follow up with authorities, and ensure that your project complies with all legal requirements.",
                                },
                                {
                                    question: "How do you ensure quality control throughout the construction process?",
                                    answer:
                                        "Quality control is integrated into every phase of our construction process. We employ dedicated quality managers who conduct regular inspections, and our project managers perform daily site evaluations. We also use a comprehensive checklist system to verify that all work meets our high standards before proceeding to the next phase.",
                                },
                                {
                                    question: "What types of insurance and warranties do you provide?",
                                    answer:
                                        "Ramadi Empire Construction is fully insured, including general liability and workers' compensation. We provide a standard one-year warranty on all workmanship, and many of the products and materials we use come with manufacturer warranties. We can also arrange extended warranty options for additional peace of mind.",
                                },
                                {
                                    question: "How do you handle changes or modifications during construction?",
                                    answer:
                                        "We understand that changes sometimes become necessary during construction. We manage these through a formal change order process that documents the requested modifications, associated costs, and any impact on the timeline. This transparent approach ensures that all parties are informed and in agreement before implementing changes.",
                                },
                                {
                                    question: "What sustainable or green building practices do you implement?",
                                    answer:
                                        "Sustainability is a core value at Ramadi Empire Construction. We incorporate energy-efficient designs, use environmentally friendly materials when possible, implement proper waste management practices, and can pursue LEED certification for projects where this is a priority. We stay current with the latest green building technologies and approaches.",
                                },
                                {
                                    question: "How do you communicate progress updates during construction?",
                                    answer:
                                        "Communication is essential to our process. Clients receive weekly progress reports with photos and updates. We schedule regular site meetings to review progress in person, and our project managers are always available by phone or email. We also use project management software that allows clients to access real-time updates and documentation.",
                                },
                                {
                                    question: "What sets Ramadi Empire Construction apart from other construction companies?",
                                    answer:
                                        "Our distinction lies in our comprehensive approach, attention to detail, and commitment to client satisfaction. We combine technical expertise with creative problem-solving, maintain transparent communication throughout the process, and employ skilled craftspeople who take pride in their work. Our track record of successful projects and long-term client relationships speaks to our dedication to excellence.",
                                },
                            ].map((faq, index) => (
                                <div key={index} className="border rounded-lg p-6 bg-background shadow-sm">
                                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-muted-foreground mb-4">Still have questions? We&apos;re here to help.</p>
                            <Button size="lg">Contact Our Team</Button>
                        </div>
                    </div>
                </section>

                {/* Blog Section */}
                <section id="blog" className="py-16 md:py-24 flex flex-col items-center justify-center px-[1rem]">
                    <div className="container flex flex-col items-center">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                                Industry Insights
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Construction Knowledge Hub</h2>
                            <p className="text-muted-foreground">
                                Stay informed with the latest trends, technologies, and best practices in the construction industry. Our
                                experts share valuable insights to help you make informed decisions about your building projects.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  ">
                            {[
                                {
                                    title: "The Future of Sustainable Construction: Trends to Watch",
                                    excerpt:
                                        "Explore emerging technologies and practices that are shaping the future of eco-friendly building design and construction.",
                                    date: "June 15, 2023",
                                    category: "Sustainability",
                                    image: "/construction/pannels.jpg", // Unique image
                                },
                                {
                                    title: "Understanding Construction Costs: A Comprehensive Breakdown",
                                    excerpt:
                                        "Demystifying the factors that influence construction costs and how to budget effectively for your next project.",
                                    date: "May 28, 2023",
                                    category: "Planning",
                                    image: "/construction/mechanical1.jpg", // Unique image
                                },
                                {
                                    title: "Commercial vs. Residential Construction: Key Differences",
                                    excerpt:
                                        "A detailed comparison of commercial and residential construction processes, requirements, and considerations.",
                                    date: "April 10, 2023",
                                    category: "Industry",
                                    image: "/construction/construction.jpg", // Unique image
                                },
                                {
                                    title: "Smart Buildings: Integrating Technology into Modern Construction",
                                    excerpt:
                                        "How IoT, automation, and smart systems are revolutionizing building functionality and user experience.",
                                    date: "March 22, 2023",
                                    category: "Technology",
                                    image: "/construction/plumbing5.jpg", // Unique image
                                },
                                {
                                    title: "Navigating Building Codes and Regulations: A Guide for Property Owners",
                                    excerpt:
                                        "Essential information about building codes, permits, and compliance requirements for your construction project.",
                                    date: "February 14, 2023",
                                    category: "Regulations",
                                    image: "/construction/interior-const1.jpg", // Unique image
                                },
                                {
                                    title: "Renovation vs. New Construction: Making the Right Choice",
                                    excerpt:
                                        "Factors to consider when deciding between renovating an existing structure or building new from the ground up.",
                                    date: "January 30, 2023",
                                    category: "Planning",
                                    image: "/construction/p-breakdown.jpg", // Unique image
                                },
                            ].map((article, index) => (
                                <div key={index} className="group border rounded-lg overflow-hidden bg-background shadow-sm flex flex-col items">
                                    <div className="aspect-video w-full overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            width={500}
                                            height={300}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 ">
                                        <div className="flex  gap-2 mb-3">
                                            <div className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                                                {article.category}
                                            </div>
                                            <div className="text-xs text-muted-foreground">{article.date}</div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                                        <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                                            Read More <ChevronRight className="h-4 w-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button variant="outline" size="lg">
                                View All Articles
                            </Button>
                        </div>
                    </div>
                </section>


                {/* Contact Section */}
                <section id="contact" className="py-16 md:py-24 bg-muted/30 mx-auto flex justify-center w-full items-center px-[1rem]">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                                    Get In Touch
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Let&apos;s Discuss Your Project</h2>
                                <p className="text-muted-foreground mb-6">
                                    Whether you&apos;re ready to start building or just exploring options, our team is here to help. Contact us
                                    today to schedule a consultation and take the first step toward bringing your construction project to
                                    life.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold">Our Office</h3>
                                            <p className="text-muted-foreground">157 Van Riebeek Ave, Edenvale, Johannesburg , 1609</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold">Phone</h3>
                                            <p className="text-muted-foreground">+27 76 223 2914</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p className="text-muted-foreground">ramadiempire@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold">Hours</h3>
                                            <p className="text-muted-foreground">Monday - Friday: 8:30 AM - 5:00 PM</p>
                                            <p className="text-muted-foreground">Week end - Closed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-6">
                                    <h3 className="text-lg font-bold mb-3">Ready to Start Your Project?</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Schedule a free consultation with one of our construction experts. We&apos;ll discuss your vision,
                                        requirements, and how Ramadi Empire Construction can bring your project to life.
                                    </p>
                                    <Button size="lg">Schedule Consultation</Button>
                                </div>
                            </div>

                            <div className="bg-background rounded-lg p-6 border shadow-sm">
                                <h3 className="text-xl font-bold mb-6">Contact Form</h3>
                                <form className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="first-name" className="text-sm font-medium">
                                                First Name
                                            </label>
                                            <input
                                                id="first-name"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="last-name" className="text-sm font-medium">
                                                Last Name
                                            </label>
                                            <input
                                                id="last-name"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="john.doe@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="project-type" className="text-sm font-medium">
                                            Project Type
                                        </label>
                                        <select
                                            id="project-type"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="" disabled selected>
                                                Select Project Type
                                            </option>
                                            <option value="commercial">Commercial Construction</option>
                                            <option value="residential">Residential Construction</option>
                                            <option value="industrial">Industrial Construction</option>
                                            <option value="renovation">Renovation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Project Details
                                        </label>
                                        <textarea
                                            id="message"
                                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Please provide details about your project, including location, timeline, and specific requirements."
                                        ></textarea>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        />
                                        <label htmlFor="consent" className="text-sm text-muted-foreground">
                                            I consent to Ramadi Empire Construction collecting and storing my data from this form to respond to
                                            my inquiry.
                                        </label>
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Submit
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 flex justify-center items-center mx-auto px-[1rem]">
                    <div className="container">
                        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                        Ready to Build Something Amazing?
                                    </h2>
                                    <p className="mb-6 text-primary-foreground/90">
                                        Partner with Ramadi Empire Construction for exceptional quality, innovative solutions, and a seamless
                                        building experience. Let&apos;s create something extraordinary together.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button variant="secondary" size="lg">

                                            <Link
                                                href="/contact"
                                            >
                                                Get a Free Quote
                                            </ Link>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                                        >
                                            <Link
                                                href="/construction"
                                            >
                                                View Our Projects
                                            </ Link>

                                        </Button>
                                    </div>
                                </div>
                                <div className="relative h-[300px] rounded-lg overflow-hidden">
                                    <Image
                                        src="/new/newc6.jpg"
                                        alt="Construction project"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

