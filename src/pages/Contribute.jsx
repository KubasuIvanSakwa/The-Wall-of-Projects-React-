
function Contribute() {
    return (
        <section className="h-[37rem] w-full p-3 flex justify-center items-center">
            <p className="text-3xl text-[#A99985]">
                You can add your projects to this wall, 
                no matter how small or large they are. 
                Your contribution will definitely help others.
                Simply click on &nbsp;
                <span 
                    className="underline text-2xl cursor-pointer text-[#8f7b62]"
                    onClick={() => {
                        window.open(
                            `https://github.com/MrAshwin2142/The-Wall-of-Projects/blob/main/CONTRIBUTE.md`,
                            '_blank' // <- This is what makes it open in a new window.
                        )}}
                >
                    add new project !
                </span>&nbsp;
                to share your project. You can also explore 
                other projects!
            </p> 
        </section>
    )
}

export default Contribute