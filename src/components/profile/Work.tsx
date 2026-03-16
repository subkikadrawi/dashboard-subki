import Images from "@/assets/images/Images"
import Image from "next/image"

export default function Work() {

    const dataExperience = [
        {
            title: 'Fullstack Developer',
            company: 'PT Stanford Technology Indonesia',
            logo: Images.stanfordLogo,
            period: 'Aug 2024 - Present',
            responsibilities: [
                'Revamp HRIS system using microservices architecture',
                'Developed Internal SLIK Web System',
                'Implemented CI/CD pipelines using Docker & Jenkins',
                'Managed deployment using Nginx & Alibaba Cloud'
            ],
            techStack: 'Next.js, Node.js, Docker, Jenkins, Nginx, Alibaba Cloud'
        },
        {
            title: 'Mobile Developer (Flutter)',
            company: 'PT Home Credit Indonesia',
            logo: Images.homeCreditLogo,
            period: 'Mar 2024 - Jul 2024',
            responsibilities: [
                'Supported mobile app transition & architecture restructuring',
                'Implemented modular UI components',
                'Collaborated with cross-functional teams using Azure DevOps'
            ],
            techStack: 'Flutter, BLoC, Azure'
        },
        {
            title: 'Frontend Developer',
            company: 'PT Code Development Indonesia',
            logo: Images.codeIdLogo,
            period: 'Oct 2021 - Sept 2023',
            responsibilities: [
                'Developed e-payment web frontend',
                'Built CMS for radio & live podcast platform',
                'Integrated frontend with RESTful backend services',
                'Contributed to Docker-based deployment workflow'
            ],
            techStack: 'Next.js, React, Docker'
        },
        {
            title: 'Fullstack Developer',
            company: 'PT MNC Kabel Mediacom',
            logo: Images.mncLogo,
            period: 'Jul 2016 - Sept 2021',
            responsibilities: [
                'Built subscription management system (Internet & TV services)',
                'Developed middleware API for operational systems',
                'Migrated legacy PHP applications to modern architecture',
                'Designed relational database structures'
            ],
            techStack: 'PHP, Laravel, ReactJs, Node.js, MySQL'
        }
    ]

    return (
        <div>
            <h1 className="text-2xl text-gray-800 text-center font-bold mb-4">Professional Experience</h1>
            {dataExperience.map((exp, index) => (
                <div key={index} className="mb-6 p-4 rounded-lg shadow-md">
                    <div className="flex flex-col lg:flex-row items-top justify-between mb-2">
                        <div className="text-gray-600 px-2 w-full lg:w-1/4 flex flex-col gap-2">
                            <h2 className="text-xl font-semibold">{exp.company}</h2>
                            <Image 
                                src={exp.logo} 
                                alt={`${exp.company} logo`} 
                                className="w-36 h-auto object-contain" 
                            />
                        </div>
                        <div className="flex flex-col px-2 w-full lg:w-140 order-2 lg:order-1">
                            <h2 className="text-xl font-semibold">{exp.title}</h2>
                            <p className="text-gray-600">Tech Stack: {exp.techStack}</p>
                            <ul className="list-disc list-outside mt-2 ms-4">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-gray-600 px-2 text-left w-full lg:w-1/4 lg:text-right order-1 lg:order-2">{exp.period}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}