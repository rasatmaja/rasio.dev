<script context="module">
	export const prerender = true;
</script>

<script>
	let experiences = [
        {
            "tittle":"Backend Engineer",
            "company":"Engineering Divsion, IDN Media",
            "dates":"2019 - Now",
            "desc":"As backend engineer my team and i, build  and maintain the quality and stability Golang and PHP microservice to support the company’s vision to democratize information for Millennials and Gen Z. We also build workflows for Azure pipeline and Github Actions to perform automate Golang unit tests, linting, code coverage and deployment of docker images to the docker registry."
        },
		{
            "tittle":"Graduated with a Computer Science Degree",
            "company":"Computer Science Faculty, Brawijaya University",
            "dates":"2015 - 2019",
            "desc":"On my finals project i build an app to measure maintability index on java project. On this project i use 3 matrix, Halstead matrix, Cyclomatic Complexity and Maintaibility index itself. The value that produce from this application can help the developer to decide whether a project has a good or bad level of maintenance"
        },
		{
            "tittle":"PHP Developer Intern",
            "company":"Brawijaya Library, Brawijaya University",
            "dates":"2018",
            "desc":"During my internship I was challenged to design, build and deploy PHP Rest-API to meet user requirments which provides access to book information, book transactions to departments and faculties in Brawijaya University."
        },
		{
            "tittle":"Lab Assitant",
            "company":"Basis Data laboratory Computer Science Faculty",
            "dates":"2016 - 2018",
            "desc":"Assist lecturers and 41 students in the practical process of database systems using Microsoft SQL Server. Perform analysis and assessment of student reports in writing SQL queries."
        },
    ]
</script>

<section class="min-h-full my-10">
	<div class="mb-5">
		<h2 class="text-lg font-medium tracking-wide text-secondary">EXPERIENCE</h2>
		<h1 class="text-5xl font-black tracking-tight my-1">Awesome Journey</h1>
		<p class="text-lg font-light text-gray-500">My career journey as software engineer</p>
	</div>
	
	<div class="grid grid-cols-1 gap-4">
		{#each experiences as job}
			<div class="p-4 border rounded-lg flex flex-col space-y-1">
				<p class="text-lg font-bold text-primary">{job.tittle}</p>
				<p class="font-light text-gray-500">{job.company}</p>
				<p class="text-sm font-light text-secondary">{job.dates}</p>
				<p class="text-gray-700">{job.desc}</p>
			</div>
		{/each}
	</div>	
</section>