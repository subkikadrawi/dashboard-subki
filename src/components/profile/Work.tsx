export default function Work() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Software Engineer at Tech Company</h2>
                <p className="text-gray-600">June 2020 - Present</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Developed and maintained web applications using React and Node.js.</li>
                    <li>Collaborated with cross-functional teams to design and implement new features.</li>
                    <li>Optimized application performance, resulting in a 20% increase in load speed.</li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold">Frontend Developer at Startup</h2>
                <p className="text-gray-600">January 2018 - May 2020</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Built responsive user interfaces with React and Tailwind CSS.</li>
                    <li>Implemented state management using Redux, improving application scalability.</li>
                    <li>Worked closely with designers to ensure pixel-perfect implementation of UI/UX designs.</li>
                </ul>
            </div>
        </div>
    )
}