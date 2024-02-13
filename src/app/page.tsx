import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus as FollowIcon, MoveUpRight as LinkIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Home() {
    const person = {
        info: {
            name: "Candice Wu",
            bio: "I'm a product Designer based in Melbourne, Australia",
            avatar: "https://github.com/shadcn.png",
            aboutMe:
                "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development. I'm always striving to grow and learn something new and I don't take myself too seriously. I'm passionate about helping startups grow, improve their customer experience, and to raise venture capital",
        },
        links: [
            {
                title: "Location",
                content: "Melbourne, Australia",
                url: "#",
            },
            {
                title: "Website",
                content: "candicevu.com",
                url: "#",
            },
            {
                title: "Portfolio",
                content: "@candicewu",
                url: "#",
            },
            {
                title: "Email",
                content: "hi@candicevu.com",
                url: "#",
            },
        ],
        experiences: [
            {
                icon: "https://live.staticflickr.com/65535/50831670491_f1055d3d3c_b.jpg",
                title: "Lead Product Manager",
                company: "Layers",
                date: {
                    from: "May 2020",
                    to: "Present",
                },
            },
            {
                icon: "https://live.staticflickr.com/65535/50831670491_f1055d3d3c_b.jpg",
                title: "Senior Product Manager",
                company: "Tech Innovators",
                date: {
                    from: "June 2017",
                    to: "April 2020",
                },
            },
            {
                icon: "https://live.staticflickr.com/65535/50831670491_f1055d3d3c_b.jpg",
                title: "Product Manager",
                company: "Digital Solutions Inc.",
                date: {
                    from: "January 2015",
                    to: "May 2017",
                },
            },
            {
                icon: "https://live.staticflickr.com/65535/50831670491_f1055d3d3c_b.jpg",
                title: "Associate Product Manager",
                company: "InnovateTech",
                date: {
                    from: "August 2013",
                    to: "December 2014",
                },
            },
        ],
    };

    return (
        <main>
            <section>
                <img
                    className="max-h-56 w-screen object-cover"
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1361.25&fit=crop&crop=faces"
                    alt=""
                />
            </section>
            <Container className="justify-between -mt-8 gap-6">
                <section className="flex gap-4 align-middle flex-col md:flex-row">
                    <Avatar className="w-36 h-36 border-4 shadow-xl border-white">
                        <AvatarImage src={person.info.avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="my-auto">
                        <p className="font-bold text-2xl">{person.info.name}</p>
                        <p className="text-slate-400">{person.info.bio}</p>
                    </div>
                </section>
                <section className="flex gap-4 my-auto">
                    <Button variant="outline">View portfolio</Button>
                    <Button variant="default">
                        <FollowIcon className="me-2" size="1.2em" />
                        Follow
                    </Button>
                </section>
            </Container>
            <Separator className="container my-8" />
            <Container>
                <Heading variant="profile-side">About Me</Heading>
                <section className="flex-grow space-y-6">
                    <section>
                        <p className="mb-2 text-sm">{person.info.aboutMe}</p>
                        <small className="text-primary font-bold text">
                            Read more
                        </small>
                    </section>
                    <section className="flex md:bg-accent md:p-4 p-0 justify-between rounded text-primary flex-col gap-4 lg:flex-row">
                        {person.links.map((link) => (
                            <LinkCard link={link} />
                        ))}
                    </section>
                </section>
            </Container>
            <Separator className="container my-8" />
            <Container>
                <Heading variant="profile-side">Experience</Heading>
                <section className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {person.experiences.map((experience) => (
                        <ExperienceCard experience={experience} />
                    ))}
                </section>
            </Container>
            <Separator className="container my-8 mb-44" />

            <div className="w-full flex justify-center">
                <a
                    className="mx-auto hover:underline text-center"
                    href="https://dribbble.com/shots/16855988-Freelancer-portfolio-Untitled-UI">
                    from Jordan Hughes®
                </a>
            </div>
        </main>
    );
}

function ExperienceCard({
    experience,
}: {
    experience: {
        icon: string;
        title: string;
        company: string;
        date: { to: string; from: string };
    };
}) {
    return (
        <Card>
            <CardHeader className="gap-4 flex-row">
                <Avatar className="w-12 h-12 my-auto">
                    <AvatarImage src={experience.icon} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="my-auto">
                    <p className="font-semibold">{experience.title}</p>
                    <small className="text-slate-400">
                        {experience.company}
                    </small>
                </div>
            </CardHeader>
            <CardContent className="flex gap-2 text-slate-400 text-sm">
                <p>{experience.date.from}</p>
                <p>-</p>
                <p>{experience.date.to}</p>
            </CardContent>
            <Separator />
            <CardFooter className="m-0 p-1">
                <Button variant="ghost" className="ms-auto text-primary">
                    View Project
                </Button>
            </CardFooter>
        </Card>
    );
}

function LinkCard({
    link,
}: {
    link: { title: string; url: string; content: string };
}) {
    return (
        <div className="flex-1 space-y-1">
            <small className="text-foreground md:text-primary">
                {link.title}
            </small>
            <br />
            <a className="font-semibold flex" href={link.url}>
                {link.content}
                <LinkIcon className="ms-2 mt-1" size="1em" />
            </a>
        </div>
    );
}

function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("container flex flex-col md:flex-row", className)}>
            {children}
        </div>
    );
}

type HeadingProps = {
    children: ReactNode;
    className?: string;
    variant?: "default" | "profile-side";
};

const Heading = ({
    children,
    className,
    variant = "default",
}: HeadingProps) => {
    switch (variant) {
        case "profile-side":
            return (
                <h3
                    className={cn(
                        "flex-shrink-0 w-80 font-bold mb-4",
                        className
                    )}>
                    {children}
                </h3>
            );
        default:
            return (
                <h3 className={cn("font-bold text-nowrap", className)}>
                    {children}
                </h3>
            );
    }
};
