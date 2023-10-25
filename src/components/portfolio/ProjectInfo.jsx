export const ProjectInfo = ({ description, name }) => {
    return (
        <div className='mt-5'>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
    )
}