export const ProjectImage = ({ github, image, name, source_code_link }) => {
    return (
        <div className="relative w-full h-[230px]">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"    
                >
                    <img
                        src={github}
                        alt="github"
                        className="w-1/2 h-1/2 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
