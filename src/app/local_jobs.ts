
export interface Job{
    id: string
    title: string,
    description: string,
    company: string
}

export const fake_jobs:Job[] = [
    {
        id: '1',
        title: 'Software Engineer',
        description: 'Responsible for developing and maintaining web applications. Proficient in JavaScript, HTML, CSS, and frameworks like Angular or React.',
        company: 'Tech Innovators Inc.'
    },
    {
        id: '2',
        title: 'Data Scientist',
        description: 'Analyze complex data sets to identify trends and patterns. Strong knowledge of Python, R, and SQL. Experience with machine learning algorithms is a plus.',
        company: 'Data Analytics Corp.'
    },
    {
        id: '3',
        title: 'Product Manager',
        description: 'Oversee product development from ideation to launch. Excellent communication skills and experience in agile methodologies are required.',
        company: 'Innovate Solutions LLC'
    },
    {
        id:'4',
        title: 'UX Designer',
        description: 'Design user-friendly interfaces for web and mobile applications. Proficient in design tools such as Sketch, Adobe XD, or Figma.',
        company: 'Creative Designs Studio'
    }
]