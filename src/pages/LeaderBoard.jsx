import projects from "../../public/projects.js"

function LeaderBoard() {

    const contributorCounts = {}
    for (const project of projects) {
        const { contributorName } = project
        contributorCounts[contributorName] = (contributorCounts[contributorName] || 0) + 1
    }

    const contributorCountsArray = Object.entries(contributorCounts).map(([name, count]) => ({ name, count }))

    // const contributorNames = Object.entries(contributorCounts).map(([name]) => ({ name }))
    // let names = []
    // contributorNames.map((item) => {
    //     let contributorName = item.name
    //     names.push(contributorName)
    // })
    // console.log(names)

    // let newNames = names.map(name => {
    //     const newName = name.replace(/\s+/g, '')
    //     return newName
    // })

    // console.log(newNames)



    contributorCountsArray.sort((a, b) => b.count - a.count)
    return (
        <section className='h-[37rem] w-full p-3'>
            <h1 className="text-4xl text-center mb-[3rem] text-[#afa89f]">Contributors</h1>
            <table id="contributorTable" className='w-full mb-10'>
                <thead className="">
                    <tr className='bg-red-500 w-full'>
                        <th className='p-2 border-r'>Name</th>
                        <th className='p-2'>Projects</th>
                    </tr>
                </thead>
                <tbody>
                    {contributorCountsArray.map((item, index) => (
                        <tr
                            key={index}
                            className="border-b hover:bg-[#464343] cursor-pointer font-[900] text-xl text-[#9c9a9a] last:border-none"
                            onClick={() => {
                                window.location.href = `leaderboard/profile/${item.name.replace(/\s+/g, '')}`
                                localStorage.setItem("name", `${item.name}`)
                            }}
                        >
                            <td className='p-4 border-r'>{item.name}</td>
                            <td className='p-4'>{item.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default LeaderBoard