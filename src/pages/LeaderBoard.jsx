import DisplayNames from '../components/DisplayNames'

function LeaderBoard() {
    const first_name = 'John'
    const second_name = 'Doe'    

    return (
        <section className='h-[37rem] w-full p-3'>
            <h1 className="text-4xl text-center mb-[3rem] text-[#A99985]">Star Contributors</h1>
            <section className="h-[30rem]p-4 grid grid-cols-2 gap-2 w-full">
                    <DisplayNames firsName={first_name} secondName={second_name} github={'https://github.com/KubasuIvanSakwa'}/>
                    <DisplayNames firsName={first_name} secondName={second_name} github={'https://github.com/KubasuIvanSakwa'}/>
                    <DisplayNames firsName={first_name} secondName={second_name} github={'https://github.com/KubasuIvanSakwa'}/>
                    <DisplayNames firsName={first_name} secondName={second_name} github={'https://github.com/KubasuIvanSakwa'}/>
                    <DisplayNames firsName={first_name} secondName={second_name} github={'https://github.com/KubasuIvanSakwa'}/>
                    <DisplayNames firsName={first_name} secondName={second_name} github={'https://github.com/KubasuIvanSakwa'}/>
            </section>
        </section>
    )
}

export default LeaderBoard