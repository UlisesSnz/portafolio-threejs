export const ProjectTags = ({ tags }) => {
    return (
        <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                </p>
            ))}
        </div>
    )
}

