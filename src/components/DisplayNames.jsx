import { Link } from 'react-router-dom'
import github from '../assets/github-icon.svg'

function DisplayNames(props) {
    let name = props.firsName + ' ' + props.secondName
    const arr = new Array(name)
    
    const displayName = arr.map(item => {
            if(item.length > 8) {
                item = `${props.firsName} ...`
                return item
            } else {
                item = `${name}`
                return item
            }
        })

    return (
        <div className="flex border w-[16rem] rounded-r-full relative z-10">
                <div className="w-[10rem] p-3 flex flex-col justify-center text-xl">
                    {
                        <h1>
                            <span>
                            {displayName}
                            </span>
                        </h1>
                    }
                    <h4>5 projects</h4>
                </div>
                <Link className=" w-[5rem] rounded-full relative right-[-0.8rem] flex justify-center items-center"
                    onClick={() => {
                        window.location.href = `${props.github}`
                    }
                }
                >
                    <img src={github} className="w-[3rem]"/>
                </Link>
            </div>
    )
}

export default DisplayNames